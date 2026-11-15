import { Icon } from "@/components/ui/icon";
import { BrandLogo } from "@/components/ui/brand-logo";
import { QuoteButton } from "@/components/contact/contact-modal";
import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link className="footer-name" href="/">
              <BrandLogo />
            </Link>
            <p>Um novo olhar para o que importa.</p>
          </div>
          <a className="back-top" href="#topo">
            Voltar ao topo <span>↑</span>
          </a>
        </div>
        <div className="footer-grid">
          <div>
            <p className="footer-label">SEU PRÓXIMO PASSO</p>
            <QuoteButton className="footer-cta">
              Vamos falar
              <br />
              sobre proteção? <Icon name="arrow" />
            </QuoteButton>
          </div>
          <nav aria-label="Navegação do rodapé">
            <p className="footer-label">EXPLORE</p>
            <Link href="/">Início</Link>
            <Link href="/seguros">Seguros e soluções</Link>
            <Link href="/sobre">Sobre a Nova Proposta</Link>
          </nav>
          <nav aria-label="Informações e contato">
            <p className="footer-label">SAIBA MAIS</p>
            <Link href="/#como-funciona">Como funciona</Link>
            <Link href="/#duvidas">Perguntas frequentes</Link>
            <Link href="/contato">Contato</Link>
            <Link href="/politica-de-privacidade">Política de privacidade</Link>
          </nav>
          <div>
            <p className="footer-label">PROTEÇÃO COM INFORMAÇÃO</p>
            <p className="footer-pending">
              Conheça as modalidades e organize suas dúvidas antes de escolher.
            </p>
            <Link className="footer-contact-link" href="/contato">
              Contato e cotação <Icon name="arrow" />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © 2026 Nova Proposta Seguros | Todos os direitos reservados.
          </span>
          <a
            className="footer-credit"
            href="https://www.untidigital.com.br/p"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Dev. &amp; Design by</span>
            <Image
              src="/logos/unti-digital-horizontal.svg"
              alt="Unti Digital"
              width={138}
              height={30}
              unoptimized
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
