import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import ts from "typescript";
const nativeRequire = createRequire(import.meta.url);
const testDirectory = path.dirname(fileURLToPath(import.meta.url));

// Exercise the exact TypeScript modules without adding a test runner or writing build artifacts.
const cache = new Map();
function load(file) {
  file = path.resolve(testDirectory, "..", file);
  if (cache.has(file)) return cache.get(file);
  const exports = {};
  cache.set(file, exports);
  const code = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  const imports = (name) =>
    name === "server-only"
      ? {}
      : name.startsWith(".")
        ? load(path.resolve(path.dirname(file), name + ".ts"))
        : nativeRequire(name);
  new Function("exports", "require", code)(exports, imports);
  return exports;
}
const flow = load("src/lib/chatbot-flow.ts");
const { serviceOptions } = load("src/lib/service-options.ts");
const { prepareChatHandoff, chatbotDeliveryStatus } = load(
  "src/lib/chatbot-service.ts",
);
const { createChatbotGateway, chatbotGateway } = load(
  "src/server/chatbot-gateway.ts",
);
const personal = {
  name: "Pessoa de Teste",
  phone: "(11) 98765-4321",
  email: "teste@example.com",
  consent: "acknowledged",
};
function draft(branch = "insurance") {
  return branch === "insurance"
    ? {
        flow: branch,
        service: "Seguro de Vida",
        intent: "quote",
        message: "",
        ...personal,
      }
    : {
        flow: branch,
        subject:
          branch === "team"
            ? "commercial"
            : branch === "information"
              ? "products"
              : "service",
        message: "Descrição fictícia com detalhes suficientes.",
        ...personal,
      };
}
test("all four branches require their own fields and derive their destinations", () => {
  for (const branch of ["insurance", "team", "information", "complaint"]) {
    const input = draft(branch);
    const result = flow.validateChatDraft(input);
    assert.equal(result.valid, true, branch);
    assert.equal(result.answers.phone, "11987654321");
    assert.equal(
      flow.chatSteps(input).includes("service"),
      branch === "insurance",
    );
    assert.deepEqual(
      flow.destinationsFor(branch),
      ["insurance", "team"].includes(branch)
        ? ["e-mail", "WhatsApp"]
        : ["e-mail"],
    );
    for (const step of flow
      .chatSteps(input)
      .filter(
        (s) => s !== "review" && !(s === "message" && branch === "insurance"),
      )) {
      assert.ok(flow.validateChatAnswer(step, "", input), `${branch}/${step}`);
    }
  }
});
test("handoff prepares only the allowed channels without an actual destination or URL", () => {
  assert.equal(chatbotDeliveryStatus().available, false);
  for (const branch of ["insurance", "team", "information", "complaint"]) {
    const result = prepareChatHandoff(draft(branch));
    assert.equal(result.valid, true);
    assert.ok(result.subject.length > 0);
    assert.ok(result.emailBody.includes("Pessoa de Teste"));
    assert.equal(
      Boolean(result.whatsappMessage),
      ["insurance", "team"].includes(branch),
    );
    assert.equal(result.url, undefined);
    assert.equal(result.recipient, undefined);
  }
});
test("eight modalities and both purposes are accepted; forged enums are rejected", () => {
  assert.equal(serviceOptions.length, 8);
  for (const service of serviceOptions)
    for (const intent of ["quote", "details"])
      assert.equal(
        flow.validateChatDraft({ ...draft(), service: service.name, intent })
          .valid,
        true,
      );
  for (const patch of [
    { flow: "admin" },
    { intent: "purchase" },
    { service: "Inexistente" },
  ])
    assert.equal(flow.validateChatDraft({ ...draft(), ...patch }).valid, false);
});
test("Brazilian phone mask, valid DDDs, landlines and mobiles", () => {
  assert.equal(flow.maskChatPhone("11987654321"), "(11) 98765-4321");
  assert.equal(flow.maskChatPhone("1134567890"), "(11) 3456-7890");
  for (const value of [
    "+55 11 98765-4321",
    "(55) 98765-4321",
    "(21) 3456-7890",
    "(99) 98765-4321",
  ])
    assert.equal(
      flow.validateChatAnswer("phone", value, draft()),
      undefined,
      value,
    );
  for (const value of [
    "(20) 98765-4321",
    "(11) 88765-4321",
    "(11) 99999-9999",
    "(11) 1234-5678",
    "123",
    "11987654321x",
  ])
    assert.ok(flow.validateChatAnswer("phone", value, draft()), value);
});
test("name, email, message limits, acknowledgement and safe plain text", () => {
  assert.ok(flow.validateChatAnswer("name", "Pessoa", draft()));
  assert.equal(
    flow.validateChatAnswer("name", "João D’Ávila", draft()),
    undefined,
  );
  for (const email of [
    "invalido",
    "nome@",
    "a b@example.com",
    "<x>@example.com",
  ])
    assert.ok(flow.validateChatAnswer("email", email, draft()));
  assert.equal(flow.validateChatAnswer("message", "", draft()), undefined);
  assert.ok(flow.validateChatAnswer("message", "", draft("complaint")));
  assert.ok(flow.validateChatAnswer("message", "x".repeat(2001), draft()));
  assert.ok(flow.validateChatAnswer("consent", "yes", draft()));
  assert.equal(
    flow.normalizeChatText("  <script>texto</script>\u0000  "),
    "<script>texto</script>",
  );
  const clean = flow.validateChatDraft({
    ...draft("team"),
    service: "Seguro de Vida",
    destinations: ["evil"],
    secret: "discard",
  });
  assert.equal(clean.valid, true);
  assert.equal(clean.answers.service, undefined);
  assert.equal(clean.answers.secret, undefined);
  assert.equal(clean.answers.destinations, undefined);
});

function harness(overrides = {}) {
  let sent = 0;
  const store = new Map();
  const config = {
    enabled: true,
    expectedOrigin: "https://example.test",
    limiter: { consume: async () => true },
    idempotency: {
      claim: async (key, fingerprint) => {
        const item = store.get(key);
        if (item)
          return item.fingerprint !== fingerprint ? "conflict" : item.status;
        store.set(key, { fingerprint, status: "pending" });
        return "new";
      },
      complete: async (key) => {
        store.get(key).status = "received";
      },
    },
    verifyPrivacyConsent: async () => true,
    email: {
      deliver: async () => {
        sent++;
        return { received: true };
      },
    },
    ...overrides,
  };
  return { submit: createChatbotGateway(config), sent: () => sent };
}
const envelope = () => ({
  answers: draft(),
  startedAt: 0,
  idempotencyKey: "test-key-12345678901234567890",
  honeypot: "",
});
const context = {
  origin: "https://example.test",
  clientKey: "server-derived-test-key",
  now: 2000,
};
test("default gateway and missing safeguards fail closed", async () => {
  assert.deepEqual(await chatbotGateway(envelope(), context), {
    status: "unavailable",
  });
  assert.equal(
    (await createChatbotGateway({ enabled: true })(envelope(), context)).status,
    "unavailable",
  );
});
test("server rejects bad origin, spam, missing consent, invalid data and excessive size", async () => {
  const h = harness();
  assert.equal(
    (
      await h.submit(envelope(), {
        ...context,
        origin: "https://attacker.test",
      })
    ).status,
    "blocked",
  );
  assert.equal(
    (await h.submit({ ...envelope(), honeypot: "bot" }, context)).status,
    "blocked",
  );
  assert.equal(
    (await h.submit(envelope(), { ...context, now: 100 })).status,
    "blocked",
  );
  assert.equal(
    (
      await h.submit(
        { ...envelope(), answers: { ...draft(), email: "invalid" } },
        context,
      )
    ).status,
    "invalid",
  );
  assert.equal(
    (
      await h.submit(
        { ...envelope(), answers: { ...draft(), message: "x".repeat(17000) } },
        context,
      )
    ).status,
    "invalid",
  );
  assert.equal(
    (
      await harness({ verifyPrivacyConsent: async () => false }).submit(
        envelope(),
        context,
      )
    ).status,
    "blocked",
  );
  assert.equal(h.sent(), 0);
});
test("rate limit denies dispatch before the email port", async () => {
  const h = harness({ limiter: { consume: async () => false } });
  assert.equal((await h.submit(envelope(), context)).status, "limited");
  assert.equal(h.sent(), 0);
});
test("atomic idempotency prevents duplicate and conflicting dispatch", async () => {
  const h = harness();
  const responses = await Promise.all([
    h.submit(envelope(), context),
    h.submit(envelope(), context),
  ]);
  assert.ok(responses.some((r) => r.status === "received"));
  assert.equal(h.sent(), 1);
  assert.equal((await h.submit(envelope(), context)).status, "received");
  assert.equal(h.sent(), 1);
  assert.equal(
    (
      await h.submit(
        { ...envelope(), answers: { ...draft(), name: "Outra Pessoa" } },
        context,
      )
    ).status,
    "conflict",
  );
});
test("unconfirmed delivery never reports success or retries automatically", async () => {
  let attempts = 0;
  const h = harness({
    email: {
      deliver: async () => {
        attempts++;
        return { received: false };
      },
    },
  });
  assert.equal((await h.submit(envelope(), context)).status, "unconfirmed");
  assert.equal((await h.submit(envelope(), context)).status, "pending");
  assert.equal(attempts, 1);
});
