import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";

const benefits = [
  {
    title: "Mais clareza para decidir",
    text: "Entender os riscos, as opções e as condições ajuda a fazer escolhas mais conscientes.",
  },
  {
    title: "Cuidado com o que você construiu",
    text: "Avaliar possibilidades de proteção faz parte do planejamento para o patrimônio e para a vida.",
  },
  {
    title: "Um olhar para os imprevistos",
    text: "Conversar sobre proteção é uma forma de considerar situações que podem mudar os seus planos.",
  },
];

export function Benefits() {
  return (
    <section className="section benefits" aria-labelledby="benefits-title">
      <div className="container benefits-grid">
        <div>
          <SectionHeading
            eyebrow="ESCOLHER PROTEÇÃO É PENSAR ADIANTE"
            title={
              <>
                O futuro merece
                <br />a sua atenção.
              </>
            }
            id="benefits-title"
          >
            Mais do que contratar, é importante compreender. Estes são
            princípios gerais para refletir sobre seguros e planejamento.
          </SectionHeading>
          <div className="benefits-signature">
            <Icon name="shield" />
            <span>
              Informação para escolher.
              <br />
              <strong>Cuidado para seguir.</strong>
            </span>
          </div>
        </div>
        <div className="benefit-list">
          {benefits.map((item, index) => (
            <article className="benefit-row" key={item.title}>
              <span className="benefit-index">0{index + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <Icon name="arrow" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
