import Link from "next/link";
import { Breadcrumbs } from "@/components/internal/breadcrumbs";
import { Icon } from "@/components/ui/icon";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata(
  "Privacidade e proteção de dados",
  "Entenda o funcionamento atual dos formulários e os cuidados com dados pessoais no site da Nova Proposta Seguros. Aviso de privacidade não definitivo.",
  "/politica-de-privacidade",
  true,
);

const sections = [
  {
    id: "status",
    title: "1. Alcance deste aviso",
    text: [
      "Este documento é uma estrutura preliminar para a futura política de privacidade. Não é uma política definitiva e não declara conformidade jurídica ou operacional já validada.",
      "Este aviso explica o funcionamento atual dos formulários e os cuidados ao navegar. Ele não autoriza coleta de dados nem substitui as informações completas exigidas para uma operação de atendimento.",
    ],
    pending:
      "Validação jurídica, operacional e publicação da versão definitiva.",
  },
  {
    id: "controlador",
    title: "2. Quem será responsável pelo tratamento",
    text: [
      "Razão social, identificação cadastral, endereço do controlador e eventual canal específico de privacidade ainda não foram confirmados para esta publicação.",
      "A identificação do responsável e os canais aplicáveis deverão estar disponíveis antes de qualquer coleta real pelos formulários.",
    ],
    pending: "Identificação do controlador e canais oficiais para privacidade.",
  },
  {
    id: "dados",
    title: "3. Dados e funcionamento dos formulários",
    text: [
      "Os formulários apresentam campos de nome, telefone, e-mail, modalidade e mensagem, além de uma confirmação de ciência. O preenchimento é conferido apenas no navegador: não há envio ou armazenamento em um serviço receptor.",
      "Use apenas informações fictícias. Não inclua dados sensíveis, documentos, dados financeiros ou informações de saúde. O tratamento efetivo em uma operação futura depende das integrações que vierem a ser autorizadas.",
    ],
    pending: "Inventário completo dos dados e operações da versão de produção.",
  },
  {
    id: "finalidades",
    title: "4. Finalidades e hipóteses legais",
    text: [
      "A proposta inicial de finalidade do formulário é permitir retorno a uma solicitação de contato ou interesse. Ela ainda precisa de validação operacional e jurídica antes de qualquer coleta real.",
      "As hipóteses legais, os avisos de transparência e os procedimentos de autorização deverão ser definidos para cada operação. A caixa de ciência do formulário apenas confirma a compreensão sobre o funcionamento local; não registra consentimento para coleta real.",
    ],
    pending:
      "Finalidades específicas, bases legais e eventual registro de consentimento.",
  },
  {
    id: "armazenamento",
    title: "5. Armazenamento, segurança e compartilhamento",
    text: [
      "Não há banco ou serviço receptor conectado aos formulários desta aplicação. Também não há destinatários comerciais ou parceiros de tratamento confirmados neste documento.",
      "Hospedagem, logs de infraestrutura, fornecedores, prazos de retenção, descarte, medidas de segurança e eventuais transferências deverão ser mapeados antes da publicação definitiva. Não se presume que a ausência de envio de formulários descreva todas as operações de uma futura hospedagem.",
    ],
    pending:
      "Fornecedores, fluxos, retenção, segurança e compartilhamentos efetivos.",
  },
  {
    id: "cookies",
    title: "6. Cookies e recursos externos",
    text: [
      "O frontend não implementa ferramentas de publicidade ou analytics. Fotografias e arquivos de marca são servidos localmente; a fonte Inter é disponibilizada pela aplicação após o build.",
      "O inventário final de cookies e tecnologias similares deverá incluir também os serviços de hospedagem e integrações que vierem a existir. Qualquer mecanismo de preferência será definido com base nesse levantamento.",
    ],
    pending:
      "Inventário de tecnologias da operação final e mecanismos aplicáveis.",
  },
  {
    id: "direitos",
    title: "7. Direitos e canais dos titulares",
    text: [
      "A política definitiva deverá informar os direitos aplicáveis e como exercer solicitações relativas ao tratamento de dados, com identificação do canal e do procedimento responsável.",
      "Neste site, nenhum canal operacional para receber pedidos foi confirmado. A página de contato explica o estágio atual e não deve ser interpretada como um serviço de exercício de direitos já ativo.",
    ],
    pending:
      "Canal responsável, procedimento de atendimento e validação dos avisos.",
  },
  {
    id: "atualizacoes",
    title: "8. Atualizações e disponibilização",
    text: [
      "Esta estrutura poderá ser revista quando houver definição de processos, integrações e responsáveis. A versão definitiva deverá indicar seu alcance e as informações de atualização correspondentes.",
      "Qualquer mudança que envolva envio de dados deverá ser acompanhada de informações claras sobre o responsável, as finalidades e o funcionamento do atendimento, antes de sua ativação.",
    ],
    pending: "Aprovação, versionamento e data da política definitiva.",
  },
];

export default function PrivacyDraft() {
  return (
    <main id="conteudo" className="privacy-page">
      <section className="privacy-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Privacidade" }]} />
          <p className="eyebrow">
            <span />
            TRANSPARÊNCIA E RESPONSABILIDADE
          </p>
          <h1>
            Política de privacidade<span>.</span>
          </h1>
          <p className="privacy-lead">
            Informação clara também faz parte do cuidado.
          </p>
          <div className="draft-banner" role="note">
            <Icon name="shield" />
            <div>
              <strong>
                Aviso de privacidade — não é uma política definitiva
              </strong>
              <p>
                Não é uma política definitiva. Identificação do controlador,
                processos, canais e condições de tratamento ainda precisam ser
                confirmados.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container privacy-layout">
        <nav
          className="privacy-toc"
          aria-label="Seções do aviso de privacidade"
        >
          <p>NESTE DOCUMENTO</p>
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.title}
            </a>
          ))}
        </nav>
        <div className="privacy-content">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-title`}
              data-reveal
            >
              <h2 id={`${section.id}-title`}>{section.title}</h2>
              {section.text.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </section>
          ))}
          <div className="privacy-return">
            <Link className="text-link" href="/contato">
              Consultar orientações de contato <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
