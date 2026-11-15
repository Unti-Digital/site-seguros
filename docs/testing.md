# Validação

## Chatbot global
- npm run test:chatbot: dez testes aprovados com node:test; cobrem quatro ramos,
  oito modalidades, objetivos, campos, telefone/DDD/máscara, destinos, preparo de
  handoff sem URL, servidor desativado, origem, tamanho, spam, consentimento,
  rate limit, idempotência concorrente e ausência de sucesso sem confirmação.
- ESLint, TypeScript e build aprovados. Sem novas dependências ou endpoints.
- Build de produção revisado em Chrome/Playwright a 390, 768 e 1440 px. Os quatro
  fluxos completos passaram em cada largura, incluindo erros, correção de e-mail,
  mensagem opcional/obrigatória, voltar, troca de ramo e reinício confirmado.
- Fechar preserva resposta e texto ainda não confirmado; Escape/botão, retorno
  de foco, contenção de 18 movimentos Tab, restauração da rolagem e manutenção do
  rascunho ao navegar via SPA foram conferidos.
- Modal de cotação e menu coordenados com chat; um dialog aberto por vez.
  Modalidade contextual conferida em /seguros/vida. A cotação existente permanece.
- axe-core sem violações detectadas nos critérios automatizados WCAG 2 A/AA e
  2.1 AA nos estados inicial e de revisão dos quatro fluxos, nas três larguras.
  Não substitui testes com leitores de tela e teclado virtual em aparelhos reais.
- Movimento normal exibe indicador breve de digitação; movimento reduzido não
  cria espera ou animações. Painel também operou em viewport 390 × 460 com rolagem.
- Não houve POST, navegação com dados, localStorage ou sessionStorage. Texto
  semelhante a HTML permaneceu texto, sem criação de elementos ou execução.
- Treze rotas continuam HTTP 200, sem overflow, IDs duplicados ou duplicação de
  header/footer. Um launcher/painel por página; metadados continuam noindex e o
  SVG local do WhatsApp respondeu HTTP 200.
- Capturas e scripts de navegador em %TEMP%/chat-* e nova-proposta-chatbot-*.
  Transmissão, adaptadores duráveis, canais e política real continuam pendentes;
  ver chatbot.md. Nenhum commit, GitHub, deploy ou WordPress foi realizado.

## Auditoria pré-versionamento — 14/11/2026
Instalação npm ci e verificações lint/typecheck/build concluídas. Build de produção
servido localmente e treze rotas testadas a 390/768/1440 px: 39 combinações sem
overflow ou erros JavaScript; 60 destinos internos corretos e 404 verificado.
Onze URLs de imagens/SVGs retornaram HTTP 200 com tipo de imagem. Formulários
continuam sem envio/persistência e ficam desabilitados sem JS; modal conferido.
Metadados noindex, robots bloqueado e sitemap sem URLs confirmados. Os testes
de ignore usaram parser sem criar repositório. Resultado completo, limites e
pendências em technical-audit.md. Esta rodada não substitui teste de deploy na Vercel.

## Fotografias nos heroes de todo o site
Contato passou a usar fotografia consultiva local; PageHero não possui mais
fallback de caixa azul nem faixa vetorial sobre a foto. Imagem e alt são
obrigatórios no contrato TypeScript. Lint, TypeScript e build aprovados.
Verificação em navegador de Contato, Sobre, catálogo e oito modalidades nas
larguras 390, 768 e 1440 px: fotografia presente, sem caixa ilustrativa ou faixa
sobreposta e sem overflow horizontal. Capturas de Contato em %TEMP%/contact-clean-*.

## Refinamento visual de Home e catálogo
Home e /seguros verificadas em 390, 768 e 1440 px: nenhum overflow horizontal,
erro JavaScript ou violação detectada pelo axe-core nos critérios automatizados
WCAG 2 A/AA e 2.1 AA. Grade única com oito links distintos; 1, 2 e 4 colunas
respectivamente, cards com altura uniforme por linha. Categorias e bloco visual
sem foto ausentes. Modal abre e fecha por Escape nas três larguras.
Contornos, órbitas, desenho arquitetônico, faixa vetorial e linha de legenda
removidos apenas do hero da Home; card flutuante preservado. Capturas revisadas
em %TEMP%/visual-refinement-* e catalog-grid-*. Ícones mantêm Azul Proteção.

## Revisão editorial, SEO e créditos
Rodada final: ESLint, TypeScript e build aprovados. As 13 páginas foram testadas
em 390, 768 e 1440 px (39 combinações), sem overflow, erros JavaScript ou violações
detectadas pelo axe-core nos critérios automatizados WCAG 2 A/AA e 2.1 AA.
Títulos distintos, metadescrições e noindex de revisão conferidos; 65 destinos
internos/âncoras sem links quebrados. Rota e modalidade inexistentes retornam 404.
Verificação adicional das 12 páginas comerciais nas três larguras não encontrou
etiquetas editoriais provisórias. Crédito, SVG carregado, copyright exato, target
e rel conferidos; centralização mobile verificada. Modal mantém pré-seleção,
erros de campos obrigatórios e fechamento por Escape. Footer inspecionado em
390 e 1440 px no servidor de desenvolvimento. Avisos necessários de envio e
privacidade foram preservados. Detalhes e pendências em content-and-seo.md.

Executar em frontend/:
- npm run lint
- npm run typecheck
- npm run build

typecheck gera tipos de rotas Next.js e executa tsc --noEmit.
Lint é uma etapa explícita, independente do build.
Após npm run dev, verificar HTTP 200 em http://localhost:3000.
A raiz apresenta a Home em avaliação visual.

Não há suíte automatizada permanente instalada. A terceira etapa foi verificada
no navegador por Playwright temporário, sem alteração das dependências do projeto.
O build inicial com next/font/google precisa de rede para obter Inter.

## Validação da preparação — 13/11/2026
- npm run lint: aprovado.
- npm run typecheck: aprovado.
- npm run build: aprovado.
- npm ls --depth=0: dependências diretas válidas.
- npm audit --omit=dev: nenhuma vulnerabilidade.
- Servidor de desenvolvimento: GET / retornou HTTP 200; escuta confirmada em 0.0.0.0:3000.
- Auditoria completa: sete ocorrências moderadas de desenvolvimento, detalhadas em security.md.

## Validação da Home — 13/11/2026
- npm run lint, npm run typecheck e npm run build: aprovados na rodada final.
- Revisão visual em Chrome headless, larguras 390, 768 e 1440 px.
- Documento sem overflow horizontal nas três larguras.
- HTTP 200, um h1 e oito cards de modalidades.
- Todas as âncoras apontam para IDs existentes na Home.
- Menu mobile abre, fecha com Escape e fecha ao selecionar uma seção.
- FAQ abre e fecha por details/summary.
- prefers-reduced-motion: rolagem automática em vez de suave.
- Sem erros JavaScript de página na execução de verificação.

Capturas e script temporários foram gerados fora do repositório, em
%TEMP%/nova-proposta-home-review/. Não substituem validação comercial ou revisão
com tecnologia assistiva. Revisão visual pelo responsável ainda pendente.

## Refinamento final — preservação do layout
- Lint, TypeScript e build aprovados após os refinamentos.
- Chrome headless em 390, 768 e 1440 px: HTTP 200, nove áreas, oito cards,
  nenhuma âncora sem destino, nenhum overflow horizontal ou erro JavaScript.
- Comparação das capturas com a versão anterior: mesmas dimensões totais de
  documento em cada largura; composição estática preservada. Diferenças residuais
  de pixels são mínimas e não indicam alteração estrutural.
- Entradas por rolagem e progressão de cards observadas, sem repetição por elemento.
- Menu operável por teclado, fecha com Escape, restaura foco e fica inert fechado.
- FAQ abre/fecha com Enter e mantém details/summary nativos.
- axe-core já disponível na árvore de ferramentas: nenhuma violação reportada
  nos critérios automatizados WCAG 2 A/AA e 2.1 AA nas três larguras. Isso não
  substitui testes manuais com tecnologias assistivas.
- Movimento reduzido inicial: nenhuma animação em execução e scroll-behavior auto.
- Movimento reduzido ativado durante uma entrada: animação cancelada e card
  imediatamente visível.
- JavaScript desativado: os oito cards continuam renderizados e visíveis.
- Nenhuma dependência de aplicação adicionada; Motion não foi necessário.

Script e capturas desta revisão: %TEMP%/nova-proposta-refinement-review/.
A fotografia candidata ficou apenas em diretório temporário; inventário e
decisão de manter o grafismo em visual-assets.md.

## Aplicação do logotipo oficial
- Lint, TypeScript e build aprovados.
- Extrações SVG: quatro versões, 41 traçados em cada uma; atributos dos paths
  preservados e transparência conferida em renderizações de inspeção.
- Header e footer revisados visualmente em 390, 768 e 1440 px.
- Duas imagens oficiais carregadas, 160 × aproximadamente 105,24 px, sem distorção,
  com 10 px de proteção por lado, nas três larguras.
- Nenhum overflow horizontal, erro JavaScript ou violação reportada pelo axe-core
  nos critérios automatizados WCAG 2 A/AA e 2.1 AA verificados.
- Menu mobile e âncoras funcionando com a compensação da altura do header.
- SHA-256 dos sete arquivos de src/components/home/ inalterados nesta etapa.
- SVGs em frontend/public/logos/ e proveniência em extraction-manifest.json.
- Capturas e script de revisão fora do repositório: %TEMP%/nova-proposta-logo-review/.

## Evolução com fotos, grafismo, formulário e modal
- Lint, TypeScript e build aprovados na rodada final; Home permanece pré-renderizada.
- Testes repetidos contra build de produção local nas larguras 390, 768 e 1440 px:
  nove áreas, oito cards, três aplicações do grafismo e nenhum overflow horizontal.
- Formulário inline: seis campos obrigatórios inválidos quando vazio. Modal com
  modalidade pré-selecionada: cinco erros quando os demais campos estão vazios.
- Preenchimento de teste válido remove erros e informa apenas validação local.
  E-mail e telefone inválidos foram rejeitados; primeiro erro recebe foco.
- Nenhuma requisição de envio ou navegação com dados ocorreu durante os testes.
- Modal testado por botão, Escape e clique externo, com foco inicial, contenção
  de Tab, retorno ao acionador, fallback para menu mobile e bloqueio/restauração
  da rolagem de fundo. Seleção de modalidade dos cards conferida.
- axe-core: nenhuma violação reportada nos critérios automatizados WCAG 2 A/AA
  e 2.1 AA na página e com modal aberto, nas três larguras. Não substitui testes
  com leitores de tela e revisão editorial.
- Movimento normal: sequência do hero com delays 0/130/260/390/520 ms e visual
  em 230 ms; oito cards e três conectores animados, sem animações infinitas.
- Movimento reduzido: nenhuma animação ativa, incluindo backdrop do modal.
  Alteração da preferência durante entradas cancelou os efeitos em andamento.
- Sem JavaScript: conteúdo permanece visível e controles de formulário ficam
  desabilitados, evitando submit GET nativo involuntário.
- Fotografias e grafismos revisados visualmente. Imagens locais otimizadas;
  nenhuma requisição externa durante a navegação medida.

### Verificação local de desempenho
Build de produção servido temporariamente em 127.0.0.1:3001, Chrome headless,
viewport 390 × 844, sem throttling: CLS ~0,0025; último LCP observado ~376 ms;
JavaScript codificado carregado ~147 KB; imagens carregadas inicialmente ~29 KB.
São medições locais de diagnóstico, não Lighthouse ou dados de usuários reais.
As animações de entrada usam transform/opacity e não há processamento de scroll
por frame. O servidor temporário de produção é encerrado após a revisão;
o servidor de desenvolvimento permanece na porta 3000.

Scripts e capturas desta evolução: %TEMP%/nova-proposta-next-review/.
Pendências: endpoint/canal receptor, validação e proteção no servidor, política
de privacidade definitiva e validação comercial/editorial. Ver forms-and-modal.md.

## Frontend institucional — páginas internas (13/11/2026)
- ESLint, TypeScript e build aprovados. Todas as páginas são pré-renderizadas.
- Home e doze rotas internas verificadas em Chrome/Playwright a 390, 768 e
  1440 px: 39 combinações, HTTP 200, um main, um h1, um header/footer e um modal
  global por página; nenhum overflow horizontal ou erro JavaScript detectado.
- axe-core: zero violações detectadas nos critérios automatizados WCAG 2 A/AA
  e 2.1 AA nas 39 combinações e no modal aberto nas três larguras. Esse resultado
  não substitui avaliação com leitores de tela e revisão humana de conteúdo.
- 64 destinos internos de links/âncoras conferidos, sem destinos quebrados.
  Rota e modalidade inexistentes respondem HTTP 404 com interface institucional.
- Títulos específicos e distintos, descrições e noindex conferidos nas 13 páginas.
  robots.txt bloqueia a revisão; sitemap.xml não publica domínio presumido e não
  inclui o rascunho de privacidade.
- Regras de configuração de SEO verificadas com origem ausente, inválida e
  habilitação desligada/ligada: a política provisória permanece noindex e fora
  da lista de URLs em todos os cenários. Não houve alteração do ambiente real.
- Modal: foco inicial, 18 movimentos Tab sem escapar, retorno de foco, Escape,
  clique externo e fechamento por botão; bloqueio e restauração da rolagem.
  Link de privacidade fecha o modal e desbloqueia o fundo antes de navegar.
- Formulário vazio indica seis erros acessíveis e foca o primeiro campo. Dados
  fictícios válidos apenas confirmam preenchimento; telefone/e-mail inválidos
  são rejeitados. Nenhum POST ou navegação contendo os dados foi observado.
- Pré-seleção inline e no modal validada nas oito modalidades; CTA global infere
  a modalidade pela rota. Navegação SPA, menu mobile e FAQ por teclado conferidos.
- Movimento normal: entradas continuam após navegação SPA (12 chamadas de animação
  observadas na entrada de Sobre). Movimento reduzido: zero chamadas de animação
  no percurso Home → Sobre. Sem loops infinitos ou recursos externos na visita.
- Os SHA-256 dos sete arquivos de components/home/ continuam idênticos à versão
  aprovada. Capturas das 39 combinações e revisão visual dos heroes realizadas.

Scripts, resultados JSON e screenshots ficam fora do repositório, em
%TEMP%/nova-proposta-internal-review/. Implementação e pendências em
internal-pages.md, forms-and-modal.md e deploy.md.

### Diagnóstico local de desempenho das páginas internas
Build de produção, Chrome headless, 390 × 844, sem throttling: Sobre, catálogo,
Empresarial e Contato tiveram CLS 0 e último LCP observado entre 200 e 264 ms.
JavaScript codificado carregado: aproximadamente 150 KB por visita nova;
imagens iniciais: aproximadamente 0,6 a 21 KB. Nenhuma requisição externa.
São medidas locais de diagnóstico, não uma nota Lighthouse nem dados de campo.
Sem JavaScript, o conteúdo continua visível e os inputs do formulário permanecem
desabilitados. O servidor de desenvolvimento é mantido em 0.0.0.0:3000.
As 13 páginas também tiveram HTTP 200 e ausência de overflow confirmados no
servidor de desenvolvimento final, com os estilos das composições carregados.
