import { serviceOptions } from "./service-options";
export const insuranceServices = serviceOptions.map((service) => service.name);

export type ContactValues = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  consent: boolean;
};
export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  const name = values.name.trim();
  if (
    name.length < 3 ||
    name.length > 100 ||
    !/^\p{L}+(?:[\p{L}\p{M}'’.-]*\s+)+\p{L}[\p{L}\p{M}'’.-]*$/u.test(name)
  )
    errors.name = "Informe seu nome completo, com nome e sobrenome.";
  const digits = values.phone.replace(/\D/g, "");
  const national =
    digits.startsWith("55") && digits.length > 11 ? digits.slice(2) : digits;
  if (
    !/^[1-9]{2}[2-9]\d{7,8}$/.test(national) ||
    /^([0-9])\1+$/.test(national) ||
    /[^\d\s()+.-]/.test(values.phone)
  )
    errors.phone = "Informe um telefone com DDD e 10 ou 11 dígitos.";
  if (
    values.email.trim().length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
  )
    errors.email = "Informe um e-mail válido.";
  if (!(insuranceServices as readonly string[]).includes(values.service))
    errors.service = "Selecione um seguro ou serviço de interesse.";
  if (values.message.trim().length < 10 || values.message.trim().length > 2000)
    errors.message = "Escreva uma mensagem entre 10 e 2.000 caracteres.";
  if (!values.consent)
    errors.consent =
      "Confirme que leu o aviso de privacidade e revisou as informações.";
  return errors;
}
