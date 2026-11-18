import { Icon } from "@/components/ui/icon";
import { ContactForm } from "@/components/contact/contact-form";
import Link from "next/link";
import { QuoteButton } from "@/components/contact/contact-modal";
import { BrandRibbon } from "@/components/ui/brand-ribbon";

export function Contact() {
  return (
    <section
      id="contato"
      className="section contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="eyebrow light">
              <span />
              VAMOS PENSAR NO SEU PRÓXIMO PASSO?
            </p>
            <h2 id="contact-title">
              Seus planos merecem
              <br />
              uma nova proposta.
            </h2>
            <p>
              A conversa sobre proteção começa com o que é importante para você.
            </p>
            <QuoteButton>
              Quero solicitar uma cotação <Icon name="arrow" />
            </QuoteButton>
          </div>
          <BrandRibbon className="contact-brand-ribbon" />
        </div>
        <div id="canais" className="contact-channels">
          <div>
            <span className="channel-icon">
              <Icon name="message" />
            </span>
            <h3>Vamos nos conectar.</h3>
            <p>
              Conheça as modalidades, reúna suas perguntas e confira o que
              considerar antes de solicitar uma cotação.
            </p>
          </div>
          <div className="channel-status">
            <span>
              FORMULÁRIO DE INTERESSE <small>Confira os campos abaixo</small>
            </span>
            <span>
              CONTATO E ORIENTAÇÕES{" "}
              <small>
                <Link href="/contato">Conheça os próximos passos</Link>
              </small>
            </span>
          </div>
        </div>
        <div className="inline-contact">
          <div className="inline-contact-intro">
            <p className="eyebrow">
              <span />O PRIMEIRO PASSO É CONVERSAR
            </p>
            <h3>
              O que você
              <br />
              quer proteger?
            </h3>
            <p>
              Pense nas pessoas, conquistas ou projetos que deseja proteger.
              Conhecer suas prioridades é o primeiro passo para comparar as
              possibilidades.
            </p>
            <p className="fine-print">
              Descreva sua necessidade de forma geral. Não inclua documentos,
              dados de saúde ou informações financeiras sensíveis.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
