import { PageHero } from "@/components/internal/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { EditorialFaq } from "@/components/internal/editorial-faq";
import { Icon } from "@/components/ui/icon";
import Link from "next/link";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata(
  "Contato e cotação",
  "Conheça as orientações de contato da Nova Proposta Seguros, organize suas dúvidas e saiba quais informações considerar para uma cotação de seguros.",
  "/contato",
);

export default function ContactPage() {
  return (
    <main id="conteudo">
      <PageHero
        eyebrow="CONTATO E COTAÇÃO"
        title={"Uma conversa pode\nabrir novas possibilidades."}
        description="Proteção começa com boas perguntas. Identifique o que deseja cuidar, conheça as modalidades e prepare as informações para avaliar uma cotação."
        crumbs={[{ label: "Contato" }]}
        icon="message"
        image="/images/contato-atendimento-36729962.webp"
        imageAlt="Um casal conversa com uma consultora durante um atendimento."
        imagePosition="48% center"
        layout="split"
        action={false}
      />
      <section
        id="explorar"
        className="section contact-page-section"
        aria-labelledby="contact-form-title"
      >
        <div className="container contact-page-grid">
          <aside className="contact-page-aside" data-reveal>
            <p className="eyebrow">
              <span />
              VAMOS NOS CONECTAR
            </p>
            <h2 id="contact-form-title">
              Seu próximo passo
              <br />
              começa por aqui.
            </h2>
            <p>
              Pense no seu momento de vida, no patrimônio ou no projeto que
              deseja proteger. Reunir essas prioridades torna a conversa sobre
              seguros mais objetiva.
            </p>
            <div className="official-channels">
              {[
                {
                  title: "Identifique sua prioridade",
                  text: "Descreva o que deseja proteger e quais dúvidas gostaria de esclarecer antes de comparar propostas.",
                },
                {
                  title: "Conheça as modalidades",
                  text: "Explore as soluções para pessoas, saúde, patrimônio e negócios. Cada modalidade tem finalidade e condições próprias.",
                },
                {
                  title: "Cuide das suas informações",
                  text: "Informe apenas o necessário para contextualizar sua solicitação. Compartilhe documentos e dados sensíveis somente em canais adequados.",
                },
              ].map((channel) => (
                <div key={channel.title}>
                  <Icon name="message" />
                  <div>
                    <h3>{channel.title}</h3>
                    <p>{channel.text}</p>
                    <Link href="/seguros">Explorar seguros e soluções</Link>
                  </div>
                </div>
              ))}
            </div>
            <p className="fine-print">
              Conheça também o{" "}
              <Link href="/politica-de-privacidade">aviso de privacidade</Link>.
              Não envie dados de saúde, documentos pessoais ou informações
              confidenciais.
            </p>
          </aside>
          <div className="contact-page-form" id="formulario" data-reveal>
            <ContactForm />
          </div>
        </div>
      </section>
      <EditorialFaq
        title={"Antes de iniciar\na conversa."}
        items={[
          {
            title: "Como escolher a modalidade mais adequada?",
            text: "Comece pelo que deseja proteger e pelo tipo de orientação que procura. As páginas de cada modalidade apresentam objetivos, situações comuns e pontos para avaliar antes de comparar propostas.",
          },
          {
            title: "Quais informações preciso preparar?",
            text: "Comece por nome, contato e modalidade de interesse, além de uma descrição geral do que procura. Os dados necessários à cotação formal serão definidos no atendimento; não inclua informações sensíveis neste formulário.",
          },
          {
            title: "Preencher o formulário significa contratar?",
            text: "Não. Uma cotação não representa contratação. A decisão depende da análise da proposta, da documentação e das condições do produto escolhido.",
          },
        ]}
      />
    </main>
  );
}
