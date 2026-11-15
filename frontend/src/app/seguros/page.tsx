import { insurancePages } from "@/data/insurance";
import { PageHero } from "@/components/internal/page-hero";
import { InsuranceCard } from "@/components/internal/insurance-card";
import { InterestSection } from "@/components/internal/interest-section";
import { EditorialFaq } from "@/components/internal/editorial-faq";
import { SectionHeading } from "@/components/ui/section-heading";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata(
  "Seguros e soluções para você e sua empresa",
  "Explore seguros de automóvel, vida, saúde, empresarial, transportes e engenharia, além de plano de saúde e consórcio. Entenda cada modalidade.",
  "/seguros",
);

export default function InsuranceCatalog() {
  return (
    <main id="conteudo">
      <PageHero
        eyebrow="SEGUROS E SOLUÇÕES"
        title={"Seguros e soluções.\nPara os seus próximos planos."}
        description="Sua vida não cabe em uma única modalidade. Explore os caminhos de proteção e planejamento que podem fazer parte da sua próxima decisão."
        crumbs={[{ label: "Seguros e soluções" }]}
        image="/images/atendimento-consultivo-kampus-8439657.webp"
        imageAlt="Duas pessoas conversam e analisam um documento em um ambiente profissional."
        imagePosition="48% center"
        layout="split"
        tone="light"
      />
      <section
        id="explorar"
        className="section catalog-solutions"
        aria-labelledby="catalog-title"
      >
        <div className="container">
          <div className="section-top" data-reveal>
            <SectionHeading
              eyebrow="ENCONTRE SEU PRÓXIMO CAMINHO"
              title="Diferentes planos. O mesmo cuidado."
              id="catalog-title"
            />
            <p className="section-side-copy">
              Explore as oito modalidades e conheça suas possibilidades. Cada
              escolha começa pelas suas prioridades.
            </p>
          </div>
          <div className="catalog-solutions-grid">
            {insurancePages.map((page) => (
              <InsuranceCard key={page.slug} item={page} showCategory={false} />
            ))}
          </div>
          <p className="fine-print catalog-disclaimer">
            Coberturas, disponibilidade e condições dependem da proposta e do
            produto escolhido. Consórcio é uma modalidade de planejamento, não
            um seguro.
          </p>
        </div>
      </section>
      <EditorialFaq
        title={"Uma boa escolha\ncomeça por entender."}
        items={[
          {
            title: "Como saber por qual modalidade começar?",
            text: "Comece pelo que você deseja proteger ou planejar: mobilidade, pessoas, saúde, operação ou uma aquisição futura. As páginas apresentam informações gerais para organizar a conversa, sem substituir a análise da proposta.",
          },
          {
            title: "Posso considerar mais de uma modalidade?",
            text: "Necessidades diferentes podem levar à avaliação de produtos diferentes. Compare suas finalidades e condições e evite presumir que uma contratação substitua todas as outras.",
          },
          {
            title: "O que comparar antes de escolher uma proposta?",
            text: "Observe a finalidade do produto, as condições de contratação, os custos e os limites previstos. Nos seguros, leia também coberturas e exclusões; no consórcio, considere o prazo do grupo e as regras de contemplação. A comparação deve respeitar as diferenças entre modalidades.",
          },
        ]}
      />
      <InterestSection title={"Ainda não sabe\npor onde começar?"} />
    </main>
  );
}
