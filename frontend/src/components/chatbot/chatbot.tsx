"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { serviceForPath, serviceOptions } from "@/lib/service-options";
import { announceOverlay, overlayEvent } from "@/lib/overlay-events";
import {
  chatSteps,
  choicesFor,
  destinationsFor,
  displayAnswer,
  maskChatPhone,
  normalizeChatText,
  questionFor,
  stepLabels,
  subjectFor,
  validateChatAnswer,
  validateChatDraft,
  type ChatAnswers,
  type StepId,
} from "@/lib/chatbot-flow";
import { chatbotDeliveryStatus } from "@/lib/chatbot-service";

export const chatOpenEvent = "nova-proposta:chat-open";

export function Chatbot() {
  const pathname = usePathname();
  const panel = useRef<HTMLDialogElement>(null);
  const launcher = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const transcript = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const unlock = useRef<(() => void) | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exitAnimation = useRef<Animation | null>(null);
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState<ChatAnswers>({});
  const [index, setIndex] = useState(0);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [resetPrompt, setResetPrompt] = useState(false);
  const [notice, setNotice] = useState("");
  const [suggestedService, setSuggestedService] = useState<string>();
  const steps = chatSteps(answers);
  const step = steps[Math.min(index, steps.length - 1)];
  const choices = choicesFor(step, answers);

  const finishClose = useCallback(() => {
    exitAnimation.current?.cancel();
    exitAnimation.current = null;
    if (timer.current) clearTimeout(timer.current);
    setBusy(false);
    unlock.current?.();
    unlock.current = null;
    panel.current?.close();
    setOpen(false);
  }, []);

  const close = useCallback(() => {
    const dialog = panel.current;
    if (!dialog?.open || exitAnimation.current) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !dialog.animate
    ) {
      finishClose();
      return;
    }
    const animation = dialog.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0, transform: "translateY(12px)" },
      ],
      { duration: 180, easing: "ease-in" },
    );
    exitAnimation.current = animation;
    void animation.finished.then(
      () => {
        exitAnimation.current = null;
        finishClose();
      },
      () => {},
    );
  }, [finishClose]);

  const show = useCallback(
    (service?: string) => {
      if (
        !panel.current ||
        panel.current.open ||
        document.querySelector(".contact-dialog[open]")
      )
        return;
      returnFocus.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : launcher.current;
      announceOverlay("chat");
      if (!answers.flow)
        setSuggestedService(
          serviceOptions.some((item) => item.name === service)
            ? service
            : serviceForPath(pathname),
        );
      const body = document.body;
      const saved = {
        position: body.style.position,
        top: body.style.top,
        width: body.style.width,
        overflow: body.style.overflow,
        paddingRight: body.style.paddingRight,
      };
      const scrollY = window.scrollY;
      const gap = window.innerWidth - document.documentElement.clientWidth;
      Object.assign(body.style, {
        position: "fixed",
        top: `-${scrollY}px`,
        width: "100%",
        overflow: "hidden",
      });
      if (gap) body.style.paddingRight = `${gap}px`;
      unlock.current = () => {
        Object.assign(body.style, saved);
        const behavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = "auto";
        window.scrollTo(0, scrollY);
        document.documentElement.style.scrollBehavior = behavior;
      };
      panel.current.showModal();
      setOpen(true);
      closeButton.current?.focus({ preventScroll: true });
    },
    [answers.flow, pathname],
  );

  useEffect(() => {
    function onOverlay(event: Event) {
      if ((event as CustomEvent).detail !== "chat" && panel.current?.open)
        finishClose();
    }
    function onRequest(event: Event) {
      show((event as CustomEvent<{ service?: string }>).detail?.service);
    }
    window.addEventListener(overlayEvent, onOverlay);
    window.addEventListener(chatOpenEvent, onRequest);
    return () => {
      window.removeEventListener(overlayEvent, onOverlay);
      window.removeEventListener(chatOpenEvent, onRequest);
    };
  }, [show, finishClose]);

  useEffect(() => {
    const viewport = window.visualViewport;
    function size() {
      const height = viewport?.height ?? window.innerHeight;
      panel.current?.style.setProperty("--chat-viewport", `${height}px`);
      if (panel.current) panel.current.dataset.compact = String(height < 650);
    }
    size();
    viewport?.addEventListener("resize", size);
    return () => {
      viewport?.removeEventListener("resize", size);
      if (timer.current) clearTimeout(timer.current);
      unlock.current?.();
      exitAnimation.current?.cancel();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    // Programmatic scroll stays instant, independent of the site's smooth anchor scrolling.
    if (transcript.current)
      transcript.current.scrollTop = transcript.current.scrollHeight;
    if (!busy && index > 0)
      panel.current
        ?.querySelector<HTMLElement>("[data-chat-focus]")
        ?.focus({ preventScroll: panel.current?.dataset.compact !== "true" });
  }, [open, index, busy, error, resetPrompt]);

  function goTo(next: number, nextAnswers = answers) {
    if (timer.current) clearTimeout(timer.current);
    const target = chatSteps(nextAnswers)[next];
    setIndex(next);
    setDraft(target === "review" ? "" : (nextAnswers[target] ?? ""));
    setError("");
    setNotice("");
    setBusy(false);
  }
  function advance(value: string) {
    if (busy || resetPrompt) return;
    const clean = normalizeChatText(value);
    const validation = validateChatAnswer(step, clean, answers);
    if (validation) {
      setError(validation);
      return;
    }
    let nextAnswers: ChatAnswers = { ...answers, [step]: clean };
    // Changing a branch invalidates branch-specific fields and its privacy acknowledgement.
    if (step === "flow" && answers.flow !== clean)
      nextAnswers = {
        flow: clean,
        ...(clean === "insurance" && suggestedService
          ? { service: suggestedService }
          : {}),
      };
    if (step !== "consent" && answers[step as keyof ChatAnswers] !== clean)
      delete nextAnswers.consent;
    setAnswers(nextAnswers);
    const next = Math.min(index + 1, chatSteps(nextAnswers).length - 1);
    goTo(next, nextAnswers);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setBusy(true);
      timer.current = setTimeout(() => {
        setBusy(false);
        timer.current = null;
      }, 280);
    }
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    advance(draft);
  }
  function reset() {
    if (timer.current) clearTimeout(timer.current);
    setAnswers({});
    setResetPrompt(false);
    setSuggestedService(serviceForPath(pathname));
    goTo(0, {});
  }
  function review() {
    const validation = validateChatDraft(answers);
    if (!validation.valid) {
      const first = Object.keys(validation.errors)[0] as StepId;
      goTo(steps.indexOf(first));
      setError(validation.errors[first] ?? "Confira sua resposta.");
      return;
    }
    setNotice(`Revisão local concluída. ${chatbotDeliveryStatus().message}`);
  }
  function trapFocus(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const elements = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>(
        'button:not(:disabled), a[href], input:not(:disabled), textarea:not(:disabled), [tabindex="0"]',
      ),
    ).filter(
      (element) =>
        element.getClientRects().length && !element.closest("[inert]"),
    );
    const first = elements[0],
      last = elements.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  return (
    <>
      <button
        className="chat-launcher"
        ref={launcher}
        type="button"
        hidden={open}
        onClick={() => show()}
        aria-label="Abrir assistente virtual da Nova Proposta Seguros"
        aria-haspopup="dialog"
        aria-controls="nova-chat"
        aria-expanded={open}
      >
        <Image
          src="/logos/whatsapp.svg"
          alt=""
          width={40}
          height={40}
          unoptimized
        />
        <span>Como podemos ajudar?</span>
      </button>
      <dialog
        ref={panel}
        id="nova-chat"
        className="chat-panel"
        aria-labelledby="chat-title"
        aria-describedby="chat-disclaimer"
        onKeyDown={trapFocus}
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClose={() => {
          unlock.current?.();
          unlock.current = null;
          setOpen(false);
          queueMicrotask(() => {
            if (document.querySelector("dialog[open]")) return;
            const target = returnFocus.current;
            if (
              target?.isConnected &&
              target.getClientRects().length &&
              !target.closest("[inert]")
            )
              target.focus({ preventScroll: true });
            else launcher.current?.focus({ preventScroll: true });
          });
        }}
      >
        <div className="chat-heading">
          <div className="chat-brand">
            <Image
              src="/logos/nova-proposta-seguros-principal.svg"
              alt="Nova Proposta Seguros"
              width={160}
              height={105}
              unoptimized
            />
          </div>
          <div>
            <h2 id="chat-title">Vamos conversar?</h2>
            <p>Assistente virtual · sem IA</p>
          </div>
          <button
            ref={closeButton}
            className="chat-icon-button"
            type="button"
            onClick={close}
            aria-label="Fechar conversa"
          >
            <Icon name="close" />
          </button>
        </div>
        <div id="chat-disclaimer" className="chat-disclaimer">
          <span />
          Demonstração local. Use dados fictícios. Nenhum envio disponível.
        </div>
        <div className="chat-progress">
          <span>
            {step === "review"
              ? "Confira suas respostas"
              : step === "flow"
                ? "Vamos começar"
                : `Etapa ${Math.min(index + 1, steps.length)} de ${steps.length}`}
          </span>
          <span>
            {answers.flow
              ? displayAnswer("flow", answers.flow, answers)
              : "Escolha um caminho"}
          </span>
          <progress
            value={step === "flow" ? 0 : index + 1}
            max={Math.max(steps.length, 8)}
            aria-label="Progresso da conversa"
          />
        </div>
        <div
          ref={transcript}
          className="chat-transcript"
          tabIndex={0}
          aria-label="Histórico da conversa"
        >
          <div
            role="log"
            aria-live="polite"
            aria-relevant="additions"
            aria-label="Mensagens do assistente e do visitante"
          >
            {steps.slice(0, index + 1).map((item, position) => (
              <div key={item} className="chat-turn">
                {!(busy && position === index) && (
                  <div className="chat-bubble chat-bot">
                    <span className="chat-speaker">Nova Proposta</span>
                    <p>{questionFor(item, answers)}</p>
                  </div>
                )}
                {position < index && item !== "review" && (
                  <div className="chat-bubble chat-visitor">
                    <span className="chat-speaker">Você</span>
                    <p>{displayAnswer(item, answers[item] ?? "", answers)}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          {busy && (
            <div
              className="chat-typing"
              role="status"
              aria-label="Assistente preparando a próxima pergunta"
            >
              <span />
              <span />
              <span />
            </div>
          )}
          {!busy && step === "review" && (
            <div className="chat-review">
              <h3>Seu resumo</h3>
              <dl>
                {answers.flow === "insurance" && (
                  <div>
                    <dt>Assunto</dt>
                    <dd>{subjectFor(answers)}</dd>
                  </div>
                )}
                {steps
                  .filter((item) => item !== "review" && item !== "consent")
                  .map((item) => (
                    <div key={item}>
                      <dt>{stepLabels[item]}</dt>
                      <dd>
                        {displayAnswer(
                          item,
                          answers[item as keyof ChatAnswers] ?? "",
                          answers,
                        )}
                        <button
                          type="button"
                          onClick={() => goTo(steps.indexOf(item))}
                          aria-label={`Corrigir ${stepLabels[item].toLowerCase()}`}
                        >
                          Corrigir
                        </button>
                      </dd>
                    </div>
                  ))}
              </dl>
              <p className="chat-destinations">
                Destinos previstos:{" "}
                <strong>{destinationsFor(answers.flow).join(" e ")}</strong>.
                Transmissão desativada.
              </p>
            </div>
          )}
        </div>
        {resetPrompt ? (
          <div
            className="chat-reset"
            role="group"
            aria-labelledby="chat-reset-title"
          >
            <h3 id="chat-reset-title" tabIndex={-1} data-chat-focus>
              Apagar respostas e reiniciar?
            </h3>
            <p>As informações desta conversa serão descartadas.</p>
            <div>
              <button
                type="button"
                className="chat-secondary"
                onClick={() => setResetPrompt(false)}
              >
                Continuar conversa
              </button>
              <button type="button" className="chat-primary" onClick={reset}>
                Sim, reiniciar
              </button>
            </div>
          </div>
        ) : (
          <div className="chat-composer">
            {error && (
              <p className="chat-error" id="chat-error" role="alert">
                {error}
              </p>
            )}
            {busy ? (
              <p className="chat-wait">Preparando a próxima pergunta…</p>
            ) : step === "review" ? (
              <div className="chat-final">
                <button
                  type="button"
                  className="chat-primary"
                  data-chat-focus
                  onClick={review}
                >
                  Concluir revisão local <Icon name="check" />
                </button>
                <button type="button" className="chat-send-disabled" disabled>
                  Envio indisponível
                </button>
                <p role="status" aria-live="polite">
                  {notice || "Nenhum atendimento será registrado nesta versão."}
                </p>
              </div>
            ) : choices.length ? (
              <div className="chat-choices" aria-label={stepLabels[step]}>
                {step === "service" && suggestedService && (
                  <p className="chat-context">
                    Modalidade desta página: {suggestedService}
                  </p>
                )}
                {choices.map((choice, choiceIndex) => (
                  <button
                    key={choice.value}
                    type="button"
                    data-chat-focus={choiceIndex === 0 ? "" : undefined}
                    aria-pressed={
                      answers[step as keyof ChatAnswers] === choice.value
                    }
                    onClick={() => advance(choice.value)}
                  >
                    {choice.label}
                    <Icon name="arrow" />
                  </button>
                ))}
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                {step === "consent" ? (
                  <>
                    <label className="chat-consent">
                      <input
                        type="checkbox"
                        checked={draft === "acknowledged"}
                        onChange={(event) => {
                          setDraft(event.target.checked ? "acknowledged" : "");
                          setError("");
                        }}
                        data-chat-focus
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? "chat-error" : undefined}
                      />
                      <span>
                        Entendi os destinos previstos e que esta demonstração
                        não envia dados. Não incluirei dados reais ou sensíveis.
                      </span>
                    </label>
                    <Link
                      className="chat-privacy"
                      href="/politica-de-privacidade"
                      onClick={finishClose}
                    >
                      Consultar aviso de privacidade
                    </Link>
                  </>
                ) : (
                  <>
                    <label className="chat-input-label" htmlFor="chat-answer">
                      {stepLabels[step]}
                      {step === "message" && answers.flow === "insurance"
                        ? " (opcional)"
                        : " *"}
                    </label>
                    {step === "message" ? (
                      <textarea
                        id="chat-answer"
                        name={step}
                        value={draft}
                        rows={3}
                        maxLength={2000}
                        onChange={(event) => {
                          setDraft(event.target.value);
                          setError("");
                        }}
                        data-chat-focus
                        aria-invalid={Boolean(error)}
                        aria-describedby={
                          error ? "chat-error" : "chat-input-hint"
                        }
                      />
                    ) : (
                      <input
                        id="chat-answer"
                        name={step}
                        value={draft}
                        type={
                          step === "email"
                            ? "email"
                            : step === "phone"
                              ? "tel"
                              : "text"
                        }
                        inputMode={
                          step === "phone"
                            ? "tel"
                            : step === "email"
                              ? "email"
                              : "text"
                        }
                        autoComplete="off"
                        maxLength={
                          step === "name" ? 100 : step === "email" ? 254 : 22
                        }
                        onChange={(event) => {
                          setDraft(
                            step === "phone"
                              ? maskChatPhone(event.target.value)
                              : event.target.value,
                          );
                          setError("");
                        }}
                        data-chat-focus
                        aria-invalid={Boolean(error)}
                        aria-describedby={
                          error ? "chat-error" : "chat-input-hint"
                        }
                      />
                    )}
                    <p id="chat-input-hint" className="chat-input-hint">
                      {step === "phone"
                        ? "Inclua o DDD. Ex.: (11) 98765-4321."
                        : step === "message"
                          ? "Até 2.000 caracteres. Não inclua documentos ou dados de saúde."
                          : "Use somente informações fictícias para testar."}
                    </p>
                  </>
                )}
                <div className="chat-input-actions">
                  {step === "message" && answers.flow === "insurance" && (
                    <button
                      className="chat-secondary"
                      type="button"
                      onClick={() => advance("")}
                    >
                      Pular mensagem
                    </button>
                  )}
                  <button className="chat-primary" type="submit">
                    Continuar <Icon name="arrow" />
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
        <div className="chat-toolbar">
          <button
            type="button"
            disabled={index === 0 || busy || resetPrompt}
            onClick={() => goTo(index - 1)}
          >
            ← Voltar
          </button>
          <span>Respostas apenas nesta sessão</span>
          <button
            type="button"
            onClick={() => {
              setResetPrompt(true);
              setError("");
            }}
          >
            Reiniciar
          </button>
        </div>
      </dialog>
    </>
  );
}
