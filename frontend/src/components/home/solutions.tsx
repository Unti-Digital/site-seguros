import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { QuoteButton } from "@/components/contact/contact-modal";

const solutions: { name: string; description: string; icon: IconName }[] = [
  {
    name: "Seguro de Automóvel",
    description:
      "Para pensar na proteção do seu veículo e nos caminhos do dia a dia.",
    icon: "car",
  },
  {
    name: "Plano de Saúde",
    description:
      "Possibilidades de cuidado com a saúde para diferentes momentos da vida.",
    icon: "health",
  },
  {
    name: "Consórcio",
    description:
      "Planejamento para a aquisição de bens ou serviços, conforme as regras do grupo.",
    icon: "plan",
  },
  {
    name: "Seguro de Vida",
    description:
      "Um olhar para o futuro e para as pessoas que fazem parte da sua história.",
    icon: "heart",
  },
  {
    name: "Seguro Saúde",
    description:
      "Conheça alternativas e avalie as condições de cada contratação em saúde.",
    icon: "health-shield",
  },
  {
    name: "Seguro Empresarial",
    description:
      "Proteção a considerar para o patrimônio e a rotina do seu negócio.",
    icon: "building",
  },
  {
    name: "Seguro de Transportes",
    description:
      "Possibilidades de proteção para mercadorias ao longo de seu percurso.",
    icon: "truck",
  },
  {
    name: "Seguro de Engenharia",
    description:
      "Um olhar para os riscos envolvidos em obras e projetos de engenharia.",
    icon: "engineering",
  },
];

export function Solutions() {
  return (
    <section
      id="seguros"
      className="section solutions"
      aria-labelledby="solutions-title"
    >
      <div className="container">
        <div className="section-top">
          <SectionHeading
            eyebrow="SOLUÇÕES PARA VOCÊ E SEU NEGÓCIO"
            title={
              <>
                Sua vida muda.
                <br />A proteção acompanha.
              </>
            }
            id="solutions-title"
          />
          <p className="section-side-copy">
            Diferentes necessidades merecem um olhar atento. Explore as
            modalidades e encontre o ponto de partida para sua próxima escolha.
          </p>
        </div>
        <div className="solutions-grid">
          {solutions.map((item, index) => (
            <article key={item.name} className="solution-card">
              <div className="card-top">
                <span className="solution-icon">
                  <Icon name={item.icon} />
                </span>
                <span className="card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <QuoteButton
                className="card-action"
                service={item.name}
                label={`Solicitar informações sobre ${item.name}`}
              >
                Conversar sobre essa solução <Icon name="arrow" />
              </QuoteButton>
            </article>
          ))}
        </div>
        <p className="fine-print">
          Conheça cada modalidade no catálogo de{" "}
          <Link href="/seguros">seguros e soluções</Link>. Disponibilidade,
          coberturas e condições dependem de cada proposta. Consórcio é uma
          modalidade de planejamento, não um seguro.
        </p>
      </div>
    </section>
  );
}
