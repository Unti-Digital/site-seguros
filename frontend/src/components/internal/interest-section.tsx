import { ContactForm } from "@/components/contact/contact-form";
import { QuoteButton } from "@/components/contact/contact-modal";
import { BrandRibbon } from "@/components/ui/brand-ribbon";
import { Icon } from "@/components/ui/icon";

export function InterestSection({
  title,
  service,
}: {
  title: string;
  service?: string;
}) {
  return (
    <section
      id="interesse"
      className="section interest-section"
      aria-labelledby="interest-title"
    >
      <div className="container">
        <div className="interest-banner" data-reveal>
          <div>
            <p className="eyebrow light">
              <span />O PRÓXIMO PASSO É UMA CONVERSA
            </p>
            <h2 id="interest-title">
              {title.split("\n").map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>
            <QuoteButton service={service}>
              Abrir formulário de interesse <Icon name="arrow" />
            </QuoteButton>
          </div>
          <BrandRibbon className="interest-ribbon" />
        </div>
        <div className="inline-contact internal-interest">
          <div className="inline-contact-intro" data-reveal>
            <p className="eyebrow">
              <span />
              CONTE O QUE VOCÊ PRECISA
            </p>
            <h3>
              Informação é um
              <br />
              bom ponto de partida.
            </h3>
            <p>
              Organize suas prioridades e as perguntas sobre a modalidade.
              Compare possibilidades com atenção ao que faz sentido para sua
              vida.
            </p>
            <p className="fine-print">
              A contratação depende da análise da proposta e das condições do
              produto. Conhecer uma modalidade não garante cobertura ou
              aceitação.
            </p>
          </div>
          <ContactForm initialService={service} />
        </div>
      </div>
    </section>
  );
}
