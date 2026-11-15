"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/icon";
import { BrandLogo } from "@/components/ui/brand-logo";
import { QuoteButton } from "@/components/contact/contact-modal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { announceOverlay, overlayEvent } from "@/lib/overlay-events";

const links = [
  { href: "/", label: "Início" },
  { href: "/seguros", label: "Seguros" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const onOverlay = (event: Event) => {
      if ((event as CustomEvent).detail !== "menu") setOpen(false);
    };
    window.addEventListener(overlayEvent, onOverlay);
    return () => window.removeEventListener(overlayEvent, onOverlay);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    }
    function onPointer(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    }
    function onResize() {
      if (window.innerWidth >= 1024) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header id="topo" className="site-header" ref={header}>
      <div className="container header-inner">
        <Link
          className="brand"
          href="/"
          aria-label="Nova Proposta Seguros — início"
        >
          <BrandLogo preload />
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={
                pathname === link.href ||
                (link.href === "/seguros" && pathname.startsWith("/seguros/"))
                  ? "page"
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <QuoteButton className="button button-primary header-cta">
          Solicitar cotação <Icon name="arrow" />
        </QuoteButton>
        <button
          ref={button}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => {
            if (!open) announceOverlay("menu");
            setOpen(!open);
          }}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Navegação mobile"
        hidden={!open}
        inert={!open}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            aria-current={
              pathname === link.href ||
              (link.href === "/seguros" && pathname.startsWith("/seguros/"))
                ? "page"
                : undefined
            }
          >
            {link.label}
            <Icon name="arrow" />
          </Link>
        ))}
        <QuoteButton
          className="button button-primary"
          onOpen={() => setOpen(false)}
        >
          Solicitar cotação <Icon name="arrow" />
        </QuoteButton>
      </nav>
    </header>
  );
}
