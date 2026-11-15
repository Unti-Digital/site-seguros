# Arquitetura inicial
## Decisões confirmadas
- frontend/: Next.js, App Router, TypeScript, Tailwind CSS, ESLint; npm com lockfile.
- backend/: reservado para a futura infraestrutura WordPress Headless.
- plugins/: reservado para eventuais plugins próprios; nenhum definido.
- docs/: contexto versionado, decisões e validação.
- references/manual-marca/: PDF oficial do manual, analisado em design-system.md.
- references/layouts/: futuras referências aprovadas.
- AGENTS.md: instruções de trabalho e critérios de validação.

O frontend é independente nesta etapa e não faz chamadas ao CMS. A fronteira
futura é Next.js consumindo conteúdo WordPress; protocolo e contratos pendentes.

## Site institucional completo
O projeto será um **site institucional completo**, não uma landing page.
A Home está visualmente aprovada e é a referência oficial de interface.
As páginas internas implementadas reutilizam header, footer, Design System,
componentes compartilhados e padrões visuais aprovados. A estrutura e os sete
componentes de seções da Home foram preservados; a navegação agora usa rotas reais.

Componentes reutilizáveis de cotação/modal, validação e animações estão descritos
em forms-and-modal.md e frontend.md. A Home preserva suas nove áreas; a seção de
contato passou a conter uma prévia local de formulário. Isso não implementa API,
banco ou processamento comercial.

## Harness Engineering
Manter contexto e instruções junto do código. Cada mudança deve consultar os
documentos relevantes, respeitar o escopo, produzir evidência de validação e
atualizar a documentação afetada. Separar decisões confirmadas de pendências.

## Referência IPECC
Consultados AGENTS.md e docs/arquitetura.md de E:/Unti-Digital/Meme/site-ipecc.
Aplicados: documentação centralizada, regras para agentes, implementação por
etapas, frontend independente e separação entre frontend, backend e plugins.
O frontend não depende do código interno do WordPress; integração futura por API.
Não foram transportados requisitos clínicos, plugins, REST, MariaDB ou XAMPP
específicos do IPECC, pois não foram definidos para Nova Proposta Seguros.

## Pendências
Frontend institucional navegável implementado: Home, Sobre, catálogo de soluções,
Contato, rascunho de Privacidade e oito modalidades. CMS, contratos de integração,
banco e infraestrutura continuam pendentes. As páginas não dependem do WordPress.

## Organização das páginas internas
O layout também contém um chatbot global independente de CMS e do modal de cotação.
Fluxos determinísticos e estado em memória ficam no frontend; a fronteira futura
de envio é um módulo server-only desativado, sem endpoint conectado. Ver chatbot.md.

O layout raiz concentra o shell compartilhado e um único ContactModalProvider.
As rotas institucionais têm composição própria. As oito rotas estáticas de seguros
utilizam dados editoriais tipados em `src/data/insurance.ts` e o adaptador comum
InsuranceRoute. Endereços não cadastrados retornam 404 sem streaming de uma rota
dinâmica genérica. O conteúdo permanece local nesta etapa.
Componentes em `src/components/internal/` compõem hero, breadcrumbs, cards,
FAQ e interesse; variações de composição evitam oito páginas idênticas.

Metadados são específicos por rota. Sitemap e robots não pressupõem domínio:
dependem de SITE_URL e SITE_INDEXING_ENABLED. Durante revisão, a indexação fica
desabilitada; o rascunho de privacidade é sempre noindex e excluído do sitemap.
As condições para publicação estão em deploy.md e internal-pages.md.
