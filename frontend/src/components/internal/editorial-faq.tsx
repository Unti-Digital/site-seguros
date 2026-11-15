import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import type { EditorialItem } from "@/data/insurance";

export function EditorialFaq({
  items,
  title = "Informação para\nseguir com clareza.",
}: {
  items: EditorialItem[];
  title?: string;
}) {
  return (
    <section
      className="section editorial-faq"
      aria-labelledby="internal-faq-title"
    >
      <div className="container faq-grid">
        <SectionHeading
          eyebrow="PERGUNTAS FREQUENTES"
          title={
            <>
              {title.split("\n").map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </>
          }
          id="internal-faq-title"
        >
          Informações gerais para começar a conversa. As condições específicas
          devem ser conferidas na proposta.
        </SectionHeading>
        <div className="faq-list" data-reveal>
          {items.map((item, index) => (
            <details className="faq-item" key={item.title}>
              <summary>
                <span className="faq-index">0{index + 1}</span>
                <span>{item.title}</span>
                <Icon name="plus" />
              </summary>
              <p>{item.text}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
