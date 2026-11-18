"use client";

import {
  useId,
  useRef,
  useState,
  useSyncExternalStore,
  type FormEvent,
} from "react";
import {
  insuranceServices,
  validateContact,
  type ContactErrors,
  type ContactValues,
} from "@/lib/contact-validation";
import { Icon } from "@/components/ui/icon";
import Link from "next/link";

const subscribe = () => () => {};

export function ContactForm({
  initialService = "",
  onPolicyNavigate,
}: {
  initialService?: string;
  onPolicyNavigate?: () => void;
}) {
  const id = useId();
  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const form = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Integration boundary: deliberately no fetch, action, persistence or fake submission.
    const data = new FormData(event.currentTarget);
    const values: ContactValues = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      service: String(data.get("service") ?? ""),
      message: String(data.get("message") ?? ""),
      consent: data.get("consent") === "on",
    };
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    setNotice(
      Object.keys(nextErrors).length
        ? "Revise os campos indicados."
        : "Informações conferidas. Você pode revisar os dados preenchidos.",
    );
    const first = Object.keys(nextErrors)[0];
    if (first)
      requestAnimationFrame(() =>
        form.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus(),
      );
  }

  function fieldProps(name: keyof ContactValues) {
    return {
      id: `${id}-${name}`,
      name,
      "aria-invalid": Boolean(errors[name]),
      "aria-describedby": errors[name] ? `${id}-${name}-error` : undefined,
    };
  }
  const error = (name: keyof ContactValues) =>
    errors[name] && (
      <span className="field-error" id={`${id}-${name}-error`}>
        {errors[name]}
      </span>
    );

  return (
    <form
      ref={form}
      className="contact-form"
      noValidate
      onSubmit={handleSubmit}
      onChange={() => setNotice("")}
      aria-label="Formulário de contato e cotação"
    >
      <noscript>
        Ative JavaScript para preencher e validar o formulário.
      </noscript>
      <fieldset className="form-controls" disabled={!hydrated}>
        <legend className="form-required">
          Todos os campos são obrigatórios.
        </legend>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor={`${id}-name`}>Nome completo</label>
            <input
              {...fieldProps("name")}
              type="text"
              autoComplete="name"
              maxLength={100}
              placeholder="Seu nome e sobrenome"
              required
            />
            {error("name")}
          </div>
          <div className="form-field">
            <label htmlFor={`${id}-phone`}>Telefone / WhatsApp</label>
            <input
              {...fieldProps("phone")}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              maxLength={22}
              placeholder="(DDD) 00000-0000"
              required
            />
            {error("phone")}
          </div>
          <div className="form-field">
            <label htmlFor={`${id}-email`}>E-mail</label>
            <input
              {...fieldProps("email")}
              type="email"
              autoComplete="email"
              maxLength={254}
              placeholder="seu@email.com"
              required
            />
            {error("email")}
          </div>
          <div className="form-field">
            <label htmlFor={`${id}-service`}>
              Seguro ou serviço de interesse
            </label>
            <select
              {...fieldProps("service")}
              defaultValue={initialService}
              required
            >
              <option value="">Selecione uma modalidade</option>
              {insuranceServices.map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>
            {error("service")}
          </div>
          <div className="form-field form-full">
            <label htmlFor={`${id}-message`}>Mensagem</label>
            <textarea
              {...fieldProps("message")}
              rows={3}
              minLength={10}
              maxLength={2000}
              placeholder="Conte o que você gostaria de proteger. Não inclua dados sensíveis."
              required
            />
            {error("message")}
          </div>
        </div>
        <div className="consent-field">
          <label htmlFor={`${id}-consent`}>
            <input {...fieldProps("consent")} type="checkbox" required />
            <span>
              Li o aviso de privacidade e confirmo que não incluí documentos,
              dados de saúde ou informações financeiras sensíveis.
            </span>
          </label>
          {error("consent")}
        </div>
        <details className="privacy-preview" id={`${id}-privacy`}>
          <summary>Como seus dados são tratados aqui</summary>
          <p>
            Use este espaço para uma descrição geral da sua necessidade. Não
            inclua documentos, dados financeiros ou informações de saúde.
            Consulte o aviso de privacidade para conhecer o funcionamento do site.
          </p>
        </details>
        <p className="privacy-link">
          <Link href="/politica-de-privacidade" onClick={onPolicyNavigate}>
            Consultar a política de privacidade
          </Link>
        </p>
        <div className="form-actions">
          <button className="button button-primary" type="submit">
            Revisar informações <Icon name="arrow" />
          </button>
        </div>
      </fieldset>
      <p
        className="form-status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {notice}
      </p>
    </form>
  );
}
