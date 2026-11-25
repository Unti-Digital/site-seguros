import { PageHero } from "@/components/internal/page-hero";
import { InterestSection } from "@/components/internal/interest-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { BrandRibbon } from "@/components/ui/brand-ribbon";
import { pageMetadata } from "@/lib/site-metadata";
import Link from "next/link";

export const metadata = pageMetadata(
  "Sobre nós: proteção com proximidade",
  "Conheça a Nova Proposta Seguros e nosso olhar para proteção: pessoas, informação clara e atenção aos planos de cada família, profissional e empresa.",
  "/sobre",
);

export default function AboutPage() {
  return (
    <main id="conteudo">
      <PageHero
        eyebrow="SOBRE A NOVA PROPOSTA"
        title={"Nova Proposta Seguros.\nPessoas antes de produtos."}
        description="Proteger começa por entender o que tem valor na sua vida. É desse encontro entre pessoas, planos e possibilidades que nasce a nossa proposta."
        crumbs={[{ label: "Sobre nós" }]}
        image="/images/sobre-equipe-7495644.webp"
        imageAlt="Profissionais compartilham ideias durante uma reunião de equipe."
        layout="reverse"
        tone="light"
      />
      <section
        id="explorar"
        className="section about-manifesto"
        aria-labelledby="manifesto-title"
      >
        <div className="container editorial-intro-grid">
          <div data-reveal>
            <SectionHeading
              eyebrow="NOSSO PONTO DE PARTIDA"
              title={
                <>
                  A vida muda.
                  <br />O olhar precisa acompanhar.
                </>
              }
              id="manifesto-title"
            />
            <p className="editorial-note">
              Proteção é uma escolha sobre o presente e sobre o que você deseja
              construir a partir dele.
            </p>
          </div>
          <div className="editorial-prose" data-reveal>
            <p>
              Há coisas que não cabem em uma lista de bens: a tranquilidade de
              cuidar da família, a liberdade de seguir seus caminhos e o valor
              de um negócio construído com dedicação. Falar de seguros é olhar
              para essas histórias e reconhecer que cada uma tem prioridades
              próprias.
            </p>
            <p>
              A Nova Proposta Seguros tem como propósito aproximar a conversa
              sobre proteção da vida real. Nossa proposta é colocar a escuta e a
              informação no centro da escolha, conectando necessidades aos
              caminhos que merecem ser avaliados, com clareza sobre
              possibilidades e limites.
            </p>
            <p>
              Do <Link href="/seguros/automovel">seguro de automóvel</Link> ao{" "}
              <Link href="/seguros/vida">seguro de vida</Link>, das escolhas em
              saúde aos cuidados com a empresa, o ponto de partida é o mesmo:
              entender o que você quer proteger. Conhecer coberturas, condições
              e responsabilidades ajuda a transformar uma decisão complexa em
              perguntas mais claras.
            </p>
            <p>
              Reunimos{" "}
              <Link href="/seguros">seguros e soluções de planejamento</Link>{" "}
              para diferentes momentos. Aqui, você encontra informações para
              explorar modalidades, reconhecer suas prioridades e preparar o
              próximo passo com mais confiança.
            </p>
          </div>
        </div>
      </section>
      <section
        className="section institutional-values"
        aria-labelledby="values-title"
      >
        <div className="container">
          <div className="section-top">
            <SectionHeading
              eyebrow="O QUE ORIENTA A NOSSA PROPOSTA"
              title={
                <>
                  Cuidado na conversa.
                  <br />
                  Atenção em cada escolha.
                </>
              }
              id="values-title"
            />
            <p className="section-side-copy">
              Proximidade é olhar para o seu contexto. Responsabilidade é
              respeitar as condições de cada escolha. Informação clara conecta
              esses dois cuidados.
            </p>
          </div>
          <div className="values-grid">
            {[
              {
                icon: "message" as const,
                title: "Ouvir antes de sugerir",
                text: "Partir das prioridades e dúvidas de cada pessoa, sem tratar histórias diferentes como se fossem iguais.",
              },
              {
                icon: "shield" as const,
                title: "Informar com responsabilidade",
                text: "Distinguir possibilidades de garantias e dar espaço para a leitura das condições de cada proposta.",
              },
              {
                icon: "heart" as const,
                title: "Respeitar o que importa",
                text: "Reconhecer que proteção se relaciona com vínculos, conquistas e planos que têm valor para cada pessoa.",
              },
            ].map((value) => (
              <article key={value.title} data-reveal data-stagger>
                <Icon name={value.icon} />
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="section institutional-statement"
        aria-labelledby="statement-title"
      >
        <div className="container">
          <div className="statement-panel" data-reveal>
            <p className="eyebrow light">
              <span />
              UM NOVO OLHAR PARA A PROTEÇÃO
            </p>
            <h2 id="statement-title">
              Mais do que conhecer produtos.
              <br />
              Entender o que faz sentido
              <br />
              para a sua vida.
            </h2>
            <p>
              A proteção ganha sentido quando se conecta ao que você valoriza.
              Pessoas, patrimônio, saúde e projetos merecem uma conversa que
              considere o presente sem perder de vista os próximos capítulos.
            </p>
            <BrandRibbon className="statement-ribbon" />
          </div>
        </div>
      </section>
      <section
        className="section about-approach"
        aria-labelledby="approach-title"
      >
        <div className="container audience-grid">
          <SectionHeading
            eyebrow="DA ESCUTA À INFORMAÇÃO"
            title={
              <>
                Uma conversa atenta
                <br />
                tem bons próximos passos.
              </>
            }
            id="approach-title"
          />
          <div className="audience-list" data-reveal>
            {[
              {
                title: "Reconhecer o momento",
                text: "Entender o que você procura e qual contexto deseja considerar na conversa.",
              },
              {
                title: "Organizar as possibilidades",
                text: "Conhecer a finalidade das modalidades e as perguntas que ajudam a comparar propostas.",
              },
              {
                title: "Decidir com clareza",
                text: "Ler condições, esclarecer dúvidas e respeitar o tempo de uma escolha informada.",
              },
            ].map((item) => (
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
      <InterestSection title={"O que importa para você\né um bom começo."} />
    </main>
  );
}
