import { Icon } from "@/components/ui/icon";
import Image from "next/image";
import { QuoteButton } from "@/components/contact/contact-modal";

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow light">
            <span />
            PROTEÇÃO QUE ACOMPANHA A VIDA
          </p>
          <h1 id="hero-title">
            Proteção para
            <br />o que mais
            <br />
            <span>
              importa<span className="hero-period">.</span>
            </span>
          </h1>
          <p className="hero-description">
            Sua família, suas conquistas e seu negócio merecem atenção. Conheça
            seguros e soluções para cuidar do presente e planejar o amanhã com
            mais confiança.
          </p>
          <div className="hero-actions">
            <QuoteButton>
              Solicitar uma cotação <Icon name="arrow" />
            </QuoteButton>
            <a className="text-link light-link" href="#seguros">
              Explorar soluções <span>↗</span>
            </a>
          </div>
          <div className="hero-footnote">
            <Icon name="shield" />
            <span>Uma escolha consciente começa com informação.</span>
          </div>
        </div>
        {/* Fotografia ilustrativa, sem representar clientes ou endosso à empresa. */}
        <div
          className="hero-art"
          aria-hidden="true"
          data-image-slot="hero-approved-image"
        >
          <div className="art-grid">
            <Image
              className="hero-photo"
              src="/images/home-hero-familia-7220931.webp"
              alt=""
              fill
              sizes="(max-width: 699px) 100vw, 50vw"
              preload
            />
            <div className="hero-photo-shade" />
          </div>
          <div className="art-topline">
            <span>NOVA PROPOSTA</span>
            <span>UM OLHAR PARA O FUTURO ↗</span>
          </div>
          <div className="visual-caption">
            <span>
              O amanhã começa
              <br />
              com cuidado hoje.
            </span>
          </div>
          <div className="floating-note">
            <span className="note-icon">
              <Icon name="heart" />
            </span>
            <div>
              <strong>O que importa para você.</strong>
              <span>É o nosso ponto de partida.</span>
            </div>
            <span className="note-spark">↗</span>
          </div>
          <div className="art-index">
            <span>VIDA. PLANOS. POSSIBILIDADES.</span>
            <span>PROTEGER É CUIDAR</span>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="container">
          <span>PARA CADA MOMENTO, UMA NOVA POSSIBILIDADE.</span>
          <a href="#seguros">
            Conheça nossas soluções <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
