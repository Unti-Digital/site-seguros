# Frontend

Chatbot global integrado ao layout raiz, com estado apenas em memória e quatro
fluxos determinísticos. Não substitui formulários ou modal. Arquitetura, testes
e transmissão desativada em chatbot.md. Não há novas dependências.

Padronização posterior: todos os PageHero exigem fotografia local e alt explícitos.
Removidos o fallback de caixa azul e a faixa vetorial sobre as fotos dos heroes
internos. Contato usa a foto consultiva existente em composição dividida, seguindo
a direção limpa da Home. Mantidos sombreamento para leitura, animações e demais
grafismos institucionais fora das fotografias dos heroes.

Refinamento visual do catálogo: grade única com oito modalidades, sem blocos
de categorias, reutilizando InsuranceCard e PageHero com fotografia consultiva.
A Home mantém sua composição; removidos da foto do hero os contornos de órbitas,
desenhos arquitetônicos, faixa vetorial, grade de fundo e linha da legenda.
Foto, sombreamento para contraste, textos, card flutuante e animação de entrada
permanecem. Demais aplicações dos grafismos oficiais continuam preservadas.

Revisão editorial atual: ver content-and-seo.md. Conteúdo público institucional
ampliado, títulos e descrições por modalidade, novas ligações contextuais e crédito
Unti Digital no footer. O layout da Home foi preservado; seus textos foram
atualizados por autorização específica. Pendências editoriais não são exibidas
como etiquetas públicas; o aviso de privacidade permanece acessível.
Next.js com App Router em frontend/src/app/, TypeScript estrito, ESLint e
Tailwind CSS. Alias @/* aponta para src/*. Versões instaladas no package-lock.json.

layout.tsx define pt-BR, metadados, Inter via next/font/google e o shell global:
header, footer, modal e animações. globals.css mantém os tokens e estilos da Home;
internal.css acrescenta as composições das páginas internas. page.tsx compõe a
Home aprovada. Rotas, dados editoriais e reutilização em internal-pages.md.

Em frontend/: npm ci e npm run dev. Servidor em 0.0.0.0:3000.
No PowerShell com restrição de scripts, usar npm.cmd.
Não há integração com CMS, envio de formulário ou WhatsApp ativo.

## Home — terceira etapa
- src/components/home/: Hero, Solutions, About, Benefits, Process, Contact e Faq.
- src/components/site-header.tsx: logotipo oficial, rotas reais e
  menu mobile com aria-expanded, Escape, fechamento por seleção e clique externo.
- src/components/site-footer.tsx: navegação institucional e contatos pendentes.
- src/components/ui/: ícones SVG locais e cabeçalho reutilizável de seção.
- Componentes de conteúdo permanecem no servidor. As fronteiras cliente são o
  header, MotionEnhancements e os componentes compartilhados de formulário/modal.
- FAQ usa details/summary nativos; não exige JavaScript próprio.
- Navegação principal usa rotas institucionais; âncoras continuam nas seções.
  CTAs e cards da Home abrem cotação com modalidade pré-selecionada. Os cards
  do catálogo levam às páginas individuais.

O header/footer usam BrandLogo, com a versão principal vetorial extraída
diretamente do PDF oficial e servida localmente de public/logos/. next/image
mantém o SVG sem rasterização (unoptimized), com proporção natural, preload no
header e largura de 160 px. O hero e Sobre usam fotos locais da Pexels otimizadas
via next/image, com dimensões, sizes e sobreposição da paleta oficial. Grafismos
CSS convivem com a curva vetorial oficial exportada do PDF; ver visual-assets.md.

As oito modalidades seguem a solicitação da terceira etapa. Apresentação,
descrições, processo e FAQ são provisórios; não há números, parcerias, contatos
ou condições comerciais inventados. O formulário inline e o modal permitem
validar e revisar campos; a integração de envio permanece pendente e documentada.

## Responsividade e acessibilidade
Grid de soluções com quatro colunas no desktop e duas no tablet/mobile.
Demais composições se adaptam para uma coluna abaixo de 700 px; menu mobile
abaixo de 1024 px. Há link de salto, um h1, seções nomeadas, foco visível,
alvos de menu de 44 px e respeito a prefers-reduced-motion.
As curvas são grafismos próprios inspirados na identidade, não uma reprodução
da arte final do logo. Bordas/sombras usam apenas cores oficiais com transparência.

Há título e descrição específicos por rota. A revisão permanece noindex/nofollow.
lib/site-metadata.ts centraliza a liberação controlada por SITE_URL e
SITE_INDEXING_ENABLED; canonical e sitemap só usam domínio configurado.
O rascunho de privacidade continua noindex e excluído do sitemap em qualquer modo.
Não há dados estruturados com contatos não confirmados.
Nenhuma dependência foi adicionada ao package.json/lockfile nesta etapa.

## Refinamento final: preservar o layout aprovado
As nove áreas e seus conteúdos foram preservados. A Home é a referência visual
oficial do futuro site institucional completo; páginas internas deverão reutilizar
header/footer, Design System, componentes e padrões aprovados.

Entradas usam IntersectionObserver e Web Animations API: deslocamento de 12 px,
480 ms e execução única por elemento. Cards têm progressão de 55 ms por coluna
da linha. Não há loops, parallax, Motion ou biblioteca adicional.
Conteúdo renderizado no servidor permanece visível sem JavaScript ou sem suporte
às APIs. O foco de teclado conclui a entrada do elemento imediatamente.
prefers-reduced-motion é observado inclusive quando muda durante a navegação;
animações ativas são canceladas e o conteúdo volta ao estado natural.

Menu usa transições CSS de 180 ms e inert enquanto fechado. FAQ mantém
details/summary nativos e, quando o navegador suporta interpolate-size, anima
a expansão/retração em 220 ms; caso contrário permanece funcional sem animação.
Todos os efeitos CSS respeitam movimento reduzido.
Os estados de foco dos cards receberam borda/sombra consistentes com o hover.
Não foram alterados paleta, Inter, grid, proporções ou grafismos.

Inventário de recursos, pesquisa de licenças e pendências em visual-assets.md.

## Evolução com animações coordenadas, fotografias e cotação
Esta etapa autorizou evoluir as composições internas mantendo as nove áreas,
o grid principal, os tokens de cor, a Inter e o logotipo oficial.
As especificações de movimento desta seção substituem as da primeira versão
de MotionEnhancements descrita no histórico acima.

Sequência do hero: eyebrow, título, descrição, ações e nota em intervalos de
130 ms; visual entra em paralelo a partir de 230 ms. Seções usam opacity e
translateY de 26 px, duração de 760 ms. Cards escalonam 95 ms por coluna.
Etapas do processo entram com intervalo de 170 ms; números têm gesto de escala
e translação e os conectores usam scaleX com origem à esquerda. Grafismos fazem
um único assentamento de 1150 ms, sem loops, parallax ou processamento de scroll
por frame. Tokens compartilhados em src/lib/motion.ts.

Motion para React foi avaliado e não instalado: este escopo usa sequências de
entrada, IntersectionObserver e dialog nativo, sem gestos, física de springs,
animação de layout compartilhado ou timelines vinculadas à rolagem que justifiquem
uma biblioteca adicional. Os tokens e funções nativas mantêm os padrões reutilizáveis.
Avaliação apoiada na [documentação oficial do Motion](https://motion.dev/docs/react),
especialmente suas vantagens para layout compartilhado, gestos e integração com React.
Movimento reduzido cancela efeitos e entradas; conteúdo permanece legível sem JS.

ContactModalProvider envolve os componentes de servidor, sem convertê-los em
componentes de cliente. QuoteButton distingue ação de cotação de navegação.
ContactForm é usado uma vez na seção Contato e novamente no dialog, sem duplicar
regras, marcação ou validação. Contratos de uso, privacidade provisória e limites
de integração em forms-and-modal.md.

Arquivos desta evolução: app/page.tsx e globals.css; home/hero, about, contact,
process e solutions; site-header/footer; ui/icon, brand-ribbon e motion-enhancements;
contact/contact-form e contact-modal; lib/contact-validation e motion; recursos
locais em public/images e public/brand. Sem alteração do logotipo ou dependências.

## Aplicação do logotipo oficial
A solicitação de extração do PDF autorizou isolar o logo completo, preservando
seus vetores. Foram exportadas as quatro versões documentadas em logos.md.
Header branco e footer Gelo usam a principal. A negativa fica disponível para
futuras aplicações sobre fundos escuros, sem alterar o fundo do footer aprovado.

O logo completo tem proporção próxima de 1,52:1. Para respeitar o mínimo digital
de 160 px e 1X de proteção, o header passou a 128 px; o espaço livre é de 10 px
por lado. O slot lateral e a navegação mantêm sua organização. Nenhuma seção
do main foi alterada. O footer mantém seus textos, navegação e estrutura.
