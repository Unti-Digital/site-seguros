import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";

const steps = [
  {
    title: "Conte o que você precisa",
    text: "Identifique o que deseja proteger, suas prioridades e as dúvidas que precisam de resposta.",
  },
  {
    title: "Avalie as possibilidades",
    text: "Compare as informações da proposta e esclareça coberturas, limites e condições aplicáveis.",
  },
  {
    title: "Escolha com informação",
    text: "Confira os detalhes e os documentos antes de decidir sobre uma contratação.",
  },
];

export function Process() {
  return (
    <section
      id="como-funciona"
      className="section process"
      aria-labelledby="process-title"
    >
      <div className="container">
        <div className="section-top">
          <SectionHeading
            eyebrow="COMO FUNCIONA"
            title={
              <>
                Um próximo passo.
                <br />
                Com mais clareza.
              </>
            }
            id="process-title"
          />
          <p className="section-side-copy">
            Escolher um seguro fica mais simples quando você sabe o que
            perguntar, comparar e conferir antes de contratar.
          </p>
        </div>
        <div className="process-grid">
          {steps.map((step, index) => (
            <article className="process-step" key={step.title}>
              <div className="step-top">
                <span>0{index + 1}</span>
                <Icon name={index === 2 ? "check" : "arrow"} />
                <span className="step-connector" aria-hidden="true" />
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <p className="fine-print">
          Uma solicitação de cotação não representa contratação ou aceitação de
          cobertura.
        </p>
      </div>
    </section>
  );
}
