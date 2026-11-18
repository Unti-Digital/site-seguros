import { serviceOptions } from "./service-options";

export type ChatFlow = "insurance" | "team" | "information" | "complaint";
export type StepId =
  | "flow"
  | "service"
  | "intent"
  | "subject"
  | "message"
  | "name"
  | "phone"
  | "email"
  | "consent"
  | "review";
export type ChatAnswers = Partial<Record<Exclude<StepId, "review">, string>>;
export type Choice = { value: string; label: string };
export const flowChoices: Choice[] = [
  { value: "insurance", label: "Seguros e cotações" },
  { value: "team", label: "Falar com a equipe" },
  { value: "information", label: "Dúvidas e informações" },
  { value: "complaint", label: "Reclamações" },
];
const subjects: Record<Exclude<ChatFlow, "insurance">, Choice[]> = {
  team: [
    { value: "commercial", label: "Atendimento comercial" },
    { value: "tracking", label: "Acompanhamento de solicitação" },
    { value: "other", label: "Outro assunto" },
  ],
  information: [
    { value: "products", label: "Modalidades e contratação" },
    { value: "conditions", label: "Coberturas e condições" },
    { value: "other", label: "Outra dúvida" },
  ],
  complaint: [
    { value: "service", label: "Atendimento" },
    { value: "request", label: "Uma solicitação" },
    { value: "other", label: "Outro assunto" },
  ],
};
export const stepLabels: Record<StepId, string> = {
  flow: "Tipo de atendimento",
  service: "Modalidade",
  intent: "Objetivo",
  subject: "Assunto",
  message: "Mensagem",
  name: "Nome completo",
  phone: "Telefone com DDD",
  email: "E-mail",
  consent: "Privacidade",
  review: "Revisão",
};
export function isChatFlow(value: unknown): value is ChatFlow {
  return flowChoices.some((choice) => choice.value === value);
}
export function chatSteps(answers: ChatAnswers): StepId[] {
  if (!isChatFlow(answers.flow)) return ["flow"];
  return answers.flow === "insurance"
    ? [
        "flow",
        "service",
        "intent",
        "name",
        "phone",
        "email",
        "message",
        "consent",
        "review",
      ]
    : [
        "flow",
        "subject",
        "message",
        "name",
        "phone",
        "email",
        "consent",
        "review",
      ];
}
export function choicesFor(step: StepId, answers: ChatAnswers): Choice[] {
  if (step === "flow") return flowChoices;
  if (step === "service")
    return serviceOptions.map((item) => ({
      value: item.name,
      label: item.name,
    }));
  if (step === "intent")
    return [
      { value: "quote", label: "Quero uma cotação" },
      { value: "details", label: "Quero mais informações" },
    ];
  if (
    step === "subject" &&
    isChatFlow(answers.flow) &&
    answers.flow !== "insurance"
  )
    return subjects[answers.flow];
  return [];
}
export function destinationsFor(flow: string | undefined): readonly string[] {
  return flow === "insurance" || flow === "team"
    ? ["e-mail", "WhatsApp"]
    : ["e-mail"];
}
export function questionFor(step: StepId, answers: ChatAnswers) {
  const questions: Record<StepId, string> = {
    flow: "Olá! Seja bem-vindo à Nova Proposta Seguros. Como podemos ajudar você hoje?",
    service: "Qual seguro ou serviço interessa a você?",
    intent: "Você gostaria de uma cotação ou de mais informações?",
    subject:
      answers.flow === "complaint"
        ? "Qual é o assunto da sua reclamação?"
        : answers.flow === "team"
          ? "Qual é o motivo do seu contato com a equipe?"
          : "Sobre qual assunto você tem uma dúvida?",
    message:
      answers.flow === "insurance"
        ? "Quer acrescentar alguma informação? Esta mensagem é opcional."
        : answers.flow === "complaint"
          ? "Descreva o ocorrido. Não inclua documentos ou dados sensíveis."
          : answers.flow === "team"
            ? "Conte, em poucas palavras, o que você precisa."
            : "Descreva sua dúvida para organizarmos as informações.",
    name: "Como você se chama? Informe nome e sobrenome.",
    phone: "Qual é o seu telefone com DDD?",
    email: "Qual é o seu e-mail?",
    consent: `Os canais previstos para este atendimento são: ${destinationsFor(answers.flow).join(" e ")}. A finalidade é responder à sua solicitação. Confirme que leu o aviso de privacidade e revise as informações antes de continuar.`,
    review:
      "Confira suas informações. Você pode corrigir qualquer resposta antes de concluir a revisão.",
  };
  return questions[step];
}
export function displayAnswer(
  step: StepId,
  value: string,
  answers: ChatAnswers,
) {
  if (step === "consent") return "Li o aviso de privacidade.";
  return (
    choicesFor(step, answers).find((item) => item.value === value)?.label ||
    value ||
    "Sem mensagem complementar"
  );
}

/** Insurance subject is derived from the two required choices; other branches ask it explicitly. */
export function subjectFor(answers: ChatAnswers) {
  if (answers.flow === "insurance")
    return `${answers.service ?? "Seguro ou serviço"} — ${answers.intent === "quote" ? "Solicitação de cotação" : "Mais informações"}`;
  return displayAnswer("subject", answers.subject ?? "", answers);
}

/** Plain-text normalization only; JSX performs output escaping. Never render as HTML. */
export function normalizeChatText(value: string) {
  return value
    .normalize("NFC")
    .replace(/[\u0000-\u0008\u000b-\u001f\u007f]/g, "")
    .trim();
}
const ddds = new Set(
  "11 12 13 14 15 16 17 18 19 21 22 24 27 28 31 32 33 34 35 37 38 41 42 43 44 45 46 47 48 49 51 53 54 55 61 62 63 64 65 66 67 68 69 71 73 74 75 77 79 81 82 83 84 85 86 87 88 89 91 92 93 94 95 96 97 98 99".split(
    " ",
  ),
);
export function nationalPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.startsWith("55") &&
    (digits.length === 12 || digits.length === 13)
    ? digits.slice(2)
    : digits;
}
export function maskChatPhone(value: string) {
  const digits = nationalPhone(value).slice(0, 11);
  if (!digits) return "";
  if (digits.length <= 2) return `(${digits}`;
  const number = digits.slice(2);
  const split = number.length > 8 ? 5 : 4;
  return `(${digits.slice(0, 2)}) ${number.slice(0, split)}${number.length > split ? `-${number.slice(split)}` : ""}`;
}
export function validateChatAnswer(
  step: StepId,
  value: string,
  answers: ChatAnswers,
): string | undefined {
  const clean = normalizeChatText(value);
  const choices = choicesFor(step, answers);
  if (choices.length)
    return choices.some((item) => item.value === clean)
      ? undefined
      : "Escolha uma das opções para continuar.";
  if (
    step === "name" &&
    (clean.length > 100 ||
      !/^\p{L}[\p{L}\p{M}'’.-]*(?:\s+\p{L}[\p{L}\p{M}'’.-]*)+$/u.test(clean))
  )
    return "Pode informar seu nome e sobrenome?";
  if (step === "phone") {
    const digits = nationalPhone(clean);
    if (
      /[^\d\s()+.-]/.test(clean) ||
      !ddds.has(digits.slice(0, 2)) ||
      !/^(?:\d{2}[2-5]\d{7}|\d{2}9\d{8})$/.test(digits) ||
      /^(\d)\1+$/.test(digits.slice(2))
    )
      return "Confira o DDD e o número. Use um telefone brasileiro válido, com 10 ou 11 dígitos.";
  }
  if (
    step === "email" &&
    (clean.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(clean))
  )
    return "Confira seu e-mail, por exemplo: nome@exemplo.com.br.";
  if (
    step === "message" &&
    (clean.length > 2000 ||
      (clean.length < 10 && !(answers.flow === "insurance" && clean === "")))
  )
    return "Escreva entre 10 e 2.000 caracteres para explicar sua necessidade.";
  if (step === "consent" && clean !== "acknowledged")
    return "Confirme que entendeu os destinos previstos e que nenhum dado será enviado agora.";
}
export function validateChatDraft(
  input: unknown,
):
  | { valid: true; answers: ChatAnswers }
  | { valid: false; errors: Partial<Record<StepId, string>> } {
  if (!input || typeof input !== "object" || Array.isArray(input))
    return { valid: false, errors: { flow: "Escolha o tipo de atendimento." } };
  const raw = input as Record<string, unknown>;
  const answers: ChatAnswers = {};
  for (const key of Object.keys(stepLabels) as StepId[]) {
    if (key !== "review" && typeof raw[key] === "string")
      answers[key] = normalizeChatText(raw[key]);
  }
  if (!isChatFlow(answers.flow))
    return { valid: false, errors: { flow: "Escolha o tipo de atendimento." } };
  const errors: Partial<Record<StepId, string>> = {};
  for (const step of chatSteps(answers).filter((step) => step !== "review")) {
    const error = validateChatAnswer(
      step,
      answers[step as keyof ChatAnswers] ?? "",
      answers,
    );
    if (error) errors[step] = error;
  }
  if (Object.keys(errors).length) return { valid: false, errors };
  // Whitelist fields belonging to the chosen branch; never trust destinations from the client.
  const relevant: ChatAnswers = {};
  for (const step of chatSteps(answers))
    if (step !== "review") relevant[step] = answers[step];
  if (relevant.phone) relevant.phone = nationalPhone(relevant.phone);
  return { valid: true, answers: relevant };
}
