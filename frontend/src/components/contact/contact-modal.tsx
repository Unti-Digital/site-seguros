"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import { ContactForm } from "./contact-form";
import { Icon } from "@/components/ui/icon";
import { motionTokens } from "@/lib/motion";
import { serviceForPath } from "@/lib/service-options";
import { usePathname } from "next/navigation";
import { announceOverlay } from "@/lib/overlay-events";
import { isDialogBackdropPointer } from "@/lib/dialog-interactions";

const ContactContext = createContext<((service?: string) => void) | null>(null);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const closing = useRef(false);
  const exitAnimation = useRef<Animation | null>(null);
  const backdropPointer = useRef<number | null>(null);
  const formDirty = useRef(false);
  const restoreScroll = useRef<(() => void) | null>(null);
  const [service, setService] = useState("");
  const [session, setSession] = useState(0);

  const open = useCallback(
    (selectedService = "") => {
      const element = dialog.current;
      if (!element || element.open) return;
      exitAnimation.current?.cancel();
      exitAnimation.current = null;
      closing.current = false;
      formDirty.current = false;
      announceOverlay("quote");
      returnFocus.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
      setService(selectedService || serviceForPath(pathname) || "");
      setSession((value) => value + 1);
      const body = document.body;
      const scrollY = window.scrollY;
      const saved = {
        position: body.style.position,
        top: body.style.top,
        width: body.style.width,
        overflow: body.style.overflow,
        paddingRight: body.style.paddingRight,
        scrollBehavior: document.documentElement.style.scrollBehavior,
      };
      const gap = window.innerWidth - document.documentElement.clientWidth;
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.width = "100%";
      body.style.overflow = "hidden";
      if (gap) body.style.paddingRight = `${gap}px`;
      restoreScroll.current = () => {
        Object.assign(body.style, {
          position: saved.position,
          top: saved.top,
          width: saved.width,
          overflow: saved.overflow,
          paddingRight: saved.paddingRight,
        });
        document.documentElement.style.scrollBehavior = "auto";
        window.scrollTo(0, scrollY);
        document.documentElement.style.scrollBehavior = saved.scrollBehavior;
      };
      element.showModal();
      closeButton.current?.focus({ preventScroll: true });
    },
    [pathname],
  );

  const close = useCallback(() => {
    const element = dialog.current;
    if (!element?.open || closing.current) return;
    if (
      formDirty.current &&
      !window.confirm("Descartar as informações preenchidas neste formulário?")
    )
      return;
    closing.current = true;
    const finish = () => {
      exitAnimation.current = null;
      if (element.open) element.close();
      closing.current = false;
    };
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !element.animate
    ) {
      finish();
      return;
    }
    element.getAnimations().forEach((animation) => animation.cancel());
    const animation = element.animate(
      [
        { opacity: 1, transform: "translateY(0) scale(1)" },
        { opacity: 0, transform: "translateY(12px) scale(.985)" },
      ],
      { duration: motionTokens.dialogDuration, easing: "ease-in" },
    );
    exitAnimation.current = animation;
    void animation.finished.then(finish, finish);
  }, []);

  useEffect(
    () => () => {
      exitAnimation.current?.cancel();
      restoreScroll.current?.();
    },
    [],
  );

  function onClose() {
    restoreScroll.current?.();
    restoreScroll.current = null;
    const target = returnFocus.current;
    if (
      target?.isConnected &&
      target.getClientRects().length &&
      !target.closest("[inert]")
    ) {
      target.focus({ preventScroll: true });
    } else {
      // The mobile quote trigger lives inside a disclosure that closes on open.
      document
        .querySelector<HTMLButtonElement>(".menu-toggle")
        ?.focus({ preventScroll: true });
    }
  }
  function onBackdropPointerDown(event: PointerEvent<HTMLDialogElement>) {
    backdropPointer.current = isDialogBackdropPointer(
      event.currentTarget,
      event.target,
      event.clientX,
      event.clientY,
    )
      ? event.pointerId
      : null;
  }
  function onBackdropPointerUp(event: PointerEvent<HTMLDialogElement>) {
    const shouldClose =
      backdropPointer.current === event.pointerId &&
      isDialogBackdropPointer(
        event.currentTarget,
        event.target,
        event.clientX,
        event.clientY,
      );
    backdropPointer.current = null;
    if (shouldClose) close();
  }

  function onDialogKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const focusable = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>(
        'button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), summary, [tabindex]:not([tabindex="-1"])',
      ),
    ).filter(
      (element) =>
        element.getClientRects().length > 0 && !element.closest("[inert]"),
    );
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  return (
    <ContactContext.Provider value={open}>
      {children}
      <dialog
        ref={dialog}
        className="contact-dialog"
        aria-labelledby="contact-dialog-title"
        aria-describedby="contact-dialog-description"
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClose={onClose}
        onPointerDown={onBackdropPointerDown}
        onPointerUp={onBackdropPointerUp}
        onPointerCancel={() => {
          backdropPointer.current = null;
        }}
        onKeyDown={onDialogKeyDown}
      >
        <div className="modal-heading">
          <div>
            <p className="eyebrow">
              <span />
              VAMOS CONVERSAR
            </p>
            <h2 id="contact-dialog-title">
              Uma nova proposta
              <br />
              começa por você.
            </h2>
          </div>
          <button
            ref={closeButton}
            type="button"
            className="modal-close"
            aria-label="Fechar formulário de contato"
            onClick={() => close()}
          >
            <Icon name="close" />
          </button>
        </div>
        <p className="modal-description" id="contact-dialog-description">
          Conte o que você precisa. Esta versão permite conferir os campos, mas
          ainda não recebe solicitações.
        </p>
        <ContactForm
          key={session}
          initialService={service}
          onDirtyChange={(dirty) => {
            formDirty.current = dirty;
          }}
          onPolicyNavigate={() => {
            formDirty.current = false;
            restoreScroll.current?.();
            restoreScroll.current = null;
            returnFocus.current = null;
            dialog.current?.close();
          }}
        />
      </dialog>
    </ContactContext.Provider>
  );
}

export function QuoteButton({
  children,
  className = "button button-primary",
  service,
  onOpen,
  label,
}: {
  children: ReactNode;
  className?: string;
  service?: string;
  onOpen?: () => void;
  label?: string;
}) {
  const open = useContext(ContactContext);
  return (
    <button
      className={className}
      type="button"
      aria-haspopup="dialog"
      aria-label={label}
      onClick={() => {
        onOpen?.();
        open?.(service);
      }}
    >
      {children}
    </button>
  );
}
