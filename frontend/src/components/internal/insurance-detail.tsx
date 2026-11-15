import { insurancePages, type InsurancePage } from "@/data/insurance";
import { PageHero } from "./page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { EditorialFaq } from "./editorial-faq";
import { InterestSection } from "./interest-section";
import { InsuranceCard } from "./insurance-card";

function Lines({ value }: { value: string }) {
  return (
    <>
      {value.split("\n").map((line, index) => (
        <span key={line}>
          {index > 0 && <br />}
          {line}
        </span>
      ))}
    </>
  );
}

export function InsuranceDetail({ page }: { page: InsurancePage }) {
  return (
    <main id="conteudo" className={`insurance-detail detail-${page.slug}`}>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        crumbs={[
          { label: "Seguros e soluções", href: "/seguros" },
          { label: page.name },
        ]}
        image={page.image}
        imageAlt={page.imageAlt}
        imagePosition={page.imagePosition}
        layout={page.layout}
        tone={page.tone}
        service={page.name}
        icon={page.icon}
      />
      <section
        id="explorar"
        className="section editorial-intro"
        aria-labelledby="intro-title"
      >
        <div className="container editorial-intro-grid">
          <div data-reveal>
            <SectionHeading
              eyebrow={page.category.toUpperCase()}
              title={<Lines value={page.introTitle} />}
              id="intro-title"
            />
            <div className="editorial-seal">
              <Icon name={page.icon} />
              <span>
                {page.name}
                <small>Uma escolha que começa por entender.</small>
              </span>
            </div>
          </div>
          <div className="editorial-prose" data-reveal>
            {page.intro.map((text) => (
              <p key={text}>{text}</p>
            ))}
            <p className="editorial-note">
              {page.slug === "consorcio"
                ? "Compare custos, prazos, regras de contemplação e uso do crédito. Uma escolha informada considera o contrato completo."
                : "Compare coberturas, limites, custos e condições do produto antes de contratar. Uma escolha informada considera o contrato completo."}
            </p>
          </div>
        </div>
      </section>
      <section
        className={`section protection-section protection-${page.featureStyle}`}
        aria-labelledby="protection-title"
      >
        <div className="container">
          <div className="section-top" data-reveal>
            <SectionHeading
              eyebrow={
                page.slug === "consorcio"
                  ? "COMPREENDER PARA PLANEJAR"
                  : "POSSIBILIDADES A AVALIAR"
              }
              title={<Lines value={page.featuresTitle} />}
              id="protection-title"
            />
            <p className="section-side-copy">
              {page.slug === "consorcio"
                ? "Uma decisão deve considerar as regras do grupo e o seu planejamento. Não se trata de um seguro."
                : "Os tópicos abaixo orientam a conversa. A existência e o alcance de cada proteção dependem do produto e das condições contratadas."}
            </p>
          </div>
          <div className="protection-grid">
            {page.features.map((item, index) => (
              <article
                className="protection-card"
                key={item.title}
                data-reveal
                data-stagger
              >
                <span className="editorial-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Icon name={page.icon} />
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className={`section audience-section ${page.tone === "light" ? "audience-dark" : ""}`}
        aria-labelledby="audience-title"
      >
        <div className="container audience-grid">
          <SectionHeading
            eyebrow="PARA QUEM FAZ SENTIDO CONVERSAR"
            title={<Lines value={page.audienceTitle} />}
            id="audience-title"
          />
          <div className="audience-list" data-reveal>
            {page.audience.map((item) => (
              <article key={item.title}>
                <Icon name="check" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="section contract-section"
        aria-labelledby="contract-title"
      >
        <div className="container">
          <div className="section-top" data-reveal>
            <SectionHeading
              eyebrow="ANTES DE DECIDIR"
              title={
                <>
                  O que merece
                  <br />a sua atenção.
                </>
              }
              id="contract-title"
            />
            <p className="section-side-copy">
              Entender as regras é parte da escolha. Organize suas dúvidas e
              consulte os documentos da proposta específica.
            </p>
          </div>
          <div className="contract-grid">
            {page.considerations.map((item, index) => (
              <article key={item.title} data-reveal>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="section process internal-process"
        aria-labelledby="process-title"
      >
        <div className="container">
          <div className="section-top">
            <SectionHeading
              eyebrow="COMO COMEÇAR"
              title={
                <>
                  Da primeira pergunta
                  <br />à próxima decisão.
                </>
              }
              id="process-title"
            />
            <p className="section-side-copy">
              Organize suas informações, compreenda a proposta e esclareça suas
              dúvidas antes de tomar a decisão.
            </p>
          </div>
          <div className="process-grid">
            {page.process.map((item, index) => (
              <article className="process-step" key={item.title}>
                <div className="step-top">
                  <span>0{index + 1}</span>
                  <Icon name={index === 2 ? "check" : "arrow"} />
                  <span className="step-connector" aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="fine-print">
            Solicitar informações não representa contratação. Confira os
            documentos, as condições e as etapas necessárias para formalizar sua
            escolha.
          </p>
        </div>
      </section>
      <EditorialFaq items={page.faqs} />
      <InterestSection title={page.closingTitle} service={page.name} />
      <section
        className="section related-section"
        aria-labelledby="related-title"
      >
        <div className="container">
          <SectionHeading
            eyebrow="OUTRAS POSSIBILIDADES"
            title="Sua vida tem mais de um plano."
            id="related-title"
          />
          <div className="related-grid">
            {page.related
              .map((slug) => insurancePages.find((item) => item.slug === slug))
              .filter((item): item is InsurancePage => Boolean(item))
              .map((item) => (
                <InsuranceCard item={item} compact key={item.slug} />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
