import "server-only";
import { createHash } from "node:crypto";
import {
  destinationsFor,
  validateChatDraft,
  type ChatAnswers,
} from "../lib/chatbot-flow";

/** Ports for a future durable, server-side integration. No in-memory production fallback. */
export interface ChatRateLimiter {
  consume(serverClientKey: string): Promise<boolean>;
}
export interface ChatIdempotency {
  claim(
    key: string,
    fingerprint: string,
  ): Promise<"new" | "pending" | "received" | "conflict">;
  complete(key: string): Promise<void>;
}
export interface ChatEmailTransport {
  /** Must return true only after the configured receiver confirms acceptance. */
  deliver(answers: ChatAnswers): Promise<{ received: boolean }>;
}
export type ChatEnvelope = {
  answers: unknown;
  startedAt: number;
  idempotencyKey: string;
  honeypot: string;
};
export type ChatServerContext = {
  origin: string;
  clientKey: string;
  now: number;
};
type GatewayConfig = {
  enabled?: boolean;
  expectedOrigin?: string;
  limiter?: ChatRateLimiter;
  idempotency?: ChatIdempotency;
  email?: ChatEmailTransport;
  /** Legal/operational consent, verified on the server; local demo acknowledgement is insufficient. */
  verifyPrivacyConsent?: (envelope: ChatEnvelope) => Promise<boolean>;
};
export type ChatDispatchResult = {
  status:
    | "unavailable"
    | "invalid"
    | "blocked"
    | "limited"
    | "pending"
    | "conflict"
    | "unconfirmed"
    | "received";
  destinations?: readonly string[];
};

export function createChatbotGateway(config: GatewayConfig = {}) {
  return async function submit(
    envelope: ChatEnvelope,
    context: ChatServerContext,
  ): Promise<ChatDispatchResult> {
    if (
      !config.enabled ||
      !config.expectedOrigin ||
      !config.limiter ||
      !config.idempotency ||
      !config.email ||
      !config.verifyPrivacyConsent
    )
      return { status: "unavailable" };
    try {
      const expected = new URL(config.expectedOrigin);
      if (
        !["http:", "https:"].includes(expected.protocol) ||
        expected.origin !== new URL(context.origin).origin ||
        !context.clientKey
      )
        return { status: "blocked" };
      if (
        !envelope ||
        typeof envelope !== "object" ||
        typeof envelope.honeypot !== "string" ||
        envelope.honeypot !== "" ||
        !Number.isFinite(envelope.startedAt) ||
        !Number.isFinite(context.now) ||
        context.now - envelope.startedAt < 1500 ||
        context.now - envelope.startedAt > 86400000
      )
        return { status: "blocked" };
      if (
        typeof envelope.idempotencyKey !== "string" ||
        !/^[a-zA-Z0-9_-]{20,80}$/.test(envelope.idempotencyKey)
      )
        return { status: "invalid" };
      if (
        new TextEncoder().encode(JSON.stringify(envelope.answers)).length >
        16000
      )
        return { status: "invalid" };
      if (!(await config.limiter.consume(context.clientKey)))
        return { status: "limited" };
      const validated = validateChatDraft(envelope.answers);
      if (!validated.valid) return { status: "invalid" };
      if (!(await config.verifyPrivacyConsent(envelope)))
        return { status: "blocked" };
      // The store must atomically bind key + fingerprint and expire according to an approved policy.
      const fingerprint = createHash("sha256")
        .update(JSON.stringify(validated.answers))
        .digest("hex");
      const claim = await config.idempotency.claim(
        envelope.idempotencyKey,
        fingerprint,
      );
      if (claim === "conflict") return { status: "conflict" };
      if (claim === "pending") return { status: "pending" };
      if (claim === "received")
        return {
          status: "received",
          destinations: destinationsFor(validated.answers.flow),
        };
      const result = await config.email.deliver(validated.answers);
      if (!result.received) return { status: "unconfirmed" };
      await config.idempotency.complete(envelope.idempotencyKey);
      return {
        status: "received",
        destinations: destinationsFor(validated.answers.flow),
      };
    } catch {
      // Do not log payloads, addresses, provider errors or personal data.
      // An uncertain delivery keeps its claim pending to avoid automatic duplicate sends.
      return { status: "unconfirmed" };
    }
  };
}

/** No route calls this. Transmission is disabled and no adapters/credentials are configured. */
export const chatbotGateway = createChatbotGateway();
