# Auditoria técnica para versionamento e homologação

Data: 14/11/2026. Escopo: frontend institucional visualmente aprovado, sem
alteração de layout, WordPress, backend, criação de repositório ou deploy.

## Organização
- frontend/src/app/: Home, quatro rotas institucionais, oito modalidades,
  not-found, robots e sitemap. Não há API ou endpoint comercial.
- components/home/, internal/, contact/ e ui/: composição e comportamento
  compartilhados. O layout raiz mantém um header, footer e provider de modal.
- data/insurance.ts: conteúdo e metadados das modalidades. lib/: validação,
  opções de serviços, movimento e configuração de SEO.
- public/: fotografias locais, logos oficiais e grafismo. docs/ e references/
  preservam a memória do projeto e o manual; não são dependências de runtime.
- backend/ e plugins/: reservados, sem implementação nesta etapa.

Não foram encontradas cópias idênticas não vazias entre os arquivos candidatos
ao versionamento. Os pequenos wrappers das modalidades são intencionais:
permitem rotas estáticas explícitas, com conteúdo e renderização compartilhados.
O CSS histórico contém seletores de composições anteriores; sua remoção não é
necessária ao versionamento e foi evitada para preservar a interface aprovada.

## Arquivos locais e recursos mantidos
node_modules/, .next/, caches, tsconfig.tsbuildinfo e logs são gerados e ignorados.
Foram identificados logs dev-server*, performance-server*, dev-internal-server*
e dev-content*. Não fazem parte da entrega ao GitHub; não é preciso apagá-los
para versionar. next-env.d.ts também é gerado pelo Next e está ignorado.

As variantes negativa e monocromáticas do logo são mantidas, mesmo sem uso
visual atual. Manifests de extração e fontes não são duplicatas: registram
proveniência. .gitkeep conserva pastas reservadas; o de public/ é redundante,
mas inofensivo. O PDF oficial tem aproximadamente 5,5 MB, dentro de uma dimensão
adequada ao versionamento convencional. Não há necessidade de Git LFS nesta etapa.

## Proteção do versionamento
Regras da raiz e frontend/ conferidas por casos representativos com o parser
de gitignore `ignore`, sem inicializar um repositório Git. Bloqueiam dependências,
builds, logs, arquivos .env, estado local Vercel/Netlify, certificados, chaves,
credenciais usuais e temporários. Somente .env.example é liberado como modelo.
O parser não substitui a revisão de `git status`/staging no futuro primeiro commit.
Nenhum arquivo já rastreado foi presumido: não existe .git neste projeto.

A varredura por padrões de tokens e chaves privadas não encontrou ocorrências
nos arquivos candidatos. Não é garantia de ausência de todo tipo de segredo;
antes do primeiro push, revisar o staging e manter a proteção de segredos do
GitHub quando disponível. Não foram expostos valores de ambiente nesta auditoria.
Os caminhos locais em AGENTS.md e architecture.md são referências históricas,
não dependências de execução ou credenciais.

## Ajustes seguros
- .gitignore da raiz ampliado para estados locais de hospedagem, credenciais,
  certificados e temporários em todas as áreas do projeto.
- Node 24.x registrado em frontend/package.json e no registro raiz do lockfile,
  consistente com o runtime local e a configuração planejada para a Vercel.
- README e deploy.md atualizados com a configuração de homologação.
- Nenhuma dependência de aplicação, componente ou arquivo de layout alterado.

## Segurança das dependências
`npm audit --omit=dev`: zero vulnerabilidades reportadas nesta consulta.
`npm audit`: sete ocorrências moderadas na cadeia de desenvolvimento
typescript-eslint/minimatch, referentes ao mesmo advisory
[GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249).
Não foram detectadas ocorrências altas ou críticas. A correção do minimatch
indicada pelo advisory é uma versão major diferente; não foram forçados overrides
ou migração de ESLint/Next nesta auditoria. Acompanhar atualização compatível da
cadeia de lint antes de ampliar a automação. Não corresponde a sete falhas
independentes da aplicação em produção.

Todas as resoluções do lockfile apontam para o registro npm público. Os hashes
dos oito WebP, quatro SVGs oficiais e grafismo conferem com seus manifests.

## Formulários e indexação
ContactForm impede envio nativo, valida no navegador e informa envio indisponível.
Não há fetch, action de servidor, endpoint, persistência ou tela de sucesso de envio.
Sem JavaScript, o fieldset é desabilitado. A caixa obrigatória registra apenas
ciência do funcionamento local; os testes usam dados fictícios.

SITE_INDEXING_ENABLED=false no modelo; ausência de configuração também bloqueia
indexação. Homologação deve manter esse valor. Robots, metadados e sitemap são
verificados no build servido localmente. A política não definitiva permanece
noindex e fora do sitemap mesmo após eventual liberação das outras páginas.

## Homologação e publicação
Configuração completa em deploy.md: Root Directory frontend/, preset Next.js,
Node 24.x, npm ci e npm run build. Não adicionar export estático ou rewrites
genéricos. A validação local não equivale a um deploy testado na Vercel.

Pendências para publicação operacional: conta/projeto e acesso à homologação,
domínio, conferência do primeiro build na Vercel, confirmação de contatos e
cadastro oficial, política definitiva e dados de tratamento, validação comercial
dos produtos de saúde, endpoint e controles de envio reais. WordPress e plugins
seguem fora deste escopo. Não habilitar formulários ou indexação por antecipação.

## Evidências de execução
- npm ci concluído usando o lockfile; npm ls --depth=0 sem dependências inválidas
  ou extraneous. A primeira tentativa no Windows encontrou arquivo nativo em uso;
  após encerrar o dev, a reinstalação e os checks finais passaram em sequência.
- ESLint, TypeScript e build aprovados; treze páginas de conteúdo pré-renderizadas,
  além de not-found, robots e sitemap.
- Build servido em 127.0.0.1:3001 para revisão local. Home e doze páginas internas
  com HTTP 200 em 390, 768 e 1440 px: 39 combinações sem overflow ou erro JavaScript.
- 60 destinos internos distintos e suas âncoras conferidos; endereços desconhecidos
  e modalidade inexistente respondem 404. Metadados presentes e noindex conferido
  nas treze páginas. Onze URLs de imagens/SVGs responderam HTTP 200 com tipo image/;
  nenhuma imagem carregada com falha detectada.
- Formulários vazios indicam seis erros. Dados fictícios válidos apenas confirmam
  preenchimento; nenhuma requisição POST ou URL contendo dados foi observada.
  localStorage/sessionStorage continuam vazios. Sem JS, campos permanecem
  desabilitados. Modal abre e fecha por Escape nas três larguras.
- robots.txt retorna Disallow: /; sitemap.xml sem URLs. Testes de configuração
  também confirmaram bloqueio sem origem válida/sem liberação e exclusão permanente
  da política não definitiva. Nenhuma variável real foi alterada nesses testes.
- Servidor de desenvolvimento restaurado em 0.0.0.0:3000, Home respondendo HTTP 200.

Artefatos JSON e scripts de auditoria ficam em %TEMP%, fora dos candidatos ao
versionamento. Não foi criado Git, commit, remoto, projeto Vercel ou deploy.

## Diagnóstico final
**Pronto para versionar e enviar ao GitHub quando autorizado.** Não há bloqueio
técnico identificado no frontend ou na seleção de arquivos. Registrar e acompanhar
as sete ocorrências moderadas de desenvolvimento. Isso não significa publicação
operacional liberada: cumprir as pendências de homologação, privacidade, contatos
e integração antes de ativar serviços ou indexação. Revisar o primeiro staging
para garantir que nenhum artefato ignorado seja adicionado manualmente com force.
