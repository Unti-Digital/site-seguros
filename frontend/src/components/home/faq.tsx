import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";

const questions = [
  {
    question: "Por onde começar a escolher um seguro?",
    answer:
      "Comece pelo que você deseja proteger e pelas suas necessidades. Antes de decidir, leia a proposta e as condições, compare as opções e esclareça suas dúvidas com o responsável pela oferta.",
  },
  {
    question: "O que preciso informar para solicitar uma cotação?",
    answer:
      "Comece pela modalidade de interesse e por uma descrição do que deseja proteger. Na cotação formal, os dados necessários variam conforme o produto, como características do veículo, da atividade ou do projeto. Evite compartilhar documentos e informações sensíveis fora de um canal adequado.",
  },
  {
    question: "Todas as propostas têm as mesmas coberturas?",
    answer:
      "Não presuma que as condições sejam iguais. Verifique na proposta quais situações estão incluídas, os limites, as exclusões e as demais condições aplicáveis antes de contratar.",
  },
  {
    question: "Solicitar uma cotação significa contratar?",
    answer:
      "A cotação é uma etapa de consulta. Confira os documentos, as condições e os passos necessários para a contratação antes de tomar uma decisão. Este site ainda não recebe solicitações.",
  },
  {
    question: "Como escolher entre as modalidades de saúde?",
    answer:
      "Os nomes das modalidades não bastam para comparar produtos. Solicite informações específicas sobre a proposta, sua forma de funcionamento e as condições aplicáveis para avaliar sua adequação às suas necessidades.",
  },
];

export function Faq() {
  return (
    <section id="duvidas" className="section faq" aria-labelledby="faq-title">
      <div className="container faq-grid">
        <div>
          <SectionHeading
            eyebrow="PERGUNTAS FREQUENTES"
            title={
              <>
                Informação que
                <br />
                traz clareza.
              </>
            }
            id="faq-title"
          >
            Algumas respostas para começar a sua jornada com mais informação.
          </SectionHeading>
          <p className="fine-print">
            As condições específicas devem ser verificadas na proposta de cada
            produto.
          </p>
        </div>
        <div className="faq-list">
          {questions.map((item, index) => (
            <details className="faq-item" key={item.question}>
              <summary>
                <span className="faq-index">0{index + 1}</span>
                <span>{item.question}</span>
                <Icon name="plus" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
