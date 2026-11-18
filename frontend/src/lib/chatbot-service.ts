import {
  destinationsFor,
  displayAnswer,
  maskChatPhone,
  subjectFor,
  validateChatDraft,
} from "./chatbot-flow";

/** Pure preparation for future adapters. Does not create URLs, send, log or persist any data. */
export function prepareChatHandoff(input: unknown) {
  const validated = validateChatDraft(input);
  if (!validated.valid) return validated;
  const answers = validated.answers;
  const subject = subjectFor(answers);
  const body = [
    "Nova Proposta Seguros",
    `Atendimento: ${displayAnswer("flow", answers.flow ?? "", answers)}`,
    `Assunto: ${subject}`,
    `Nome: ${answers.name}`,
    `Telefone: ${maskChatPhone(answers.phone ?? "")}`,
    `E-mail: ${answers.email}`,
    `Mensagem: ${answers.message || "Sem mensagem complementar"}`,
  ].join("\n");
  const destinations = destinationsFor(answers.flow);
  return {
    valid: true as const,
    subject,
    emailBody: body,
    whatsappMessage: destinations.includes("WhatsApp") ? body : undefined,
    destinations,
  };
}

/** Availability does not accept personal data. No endpoint or credential exists in the client. */
export function chatbotDeliveryStatus() {
  return {
    available: false as const,
    message: "Revisão concluída.",
  };
}
