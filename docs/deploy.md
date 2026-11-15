# Execução e deploy

## Homologação na Vercel
Primeiro deploy realizado em 15/11/2026 no projeto `nova-proposta-seguros`, no
escopo `unti-digital`. Como foi o primeiro deploy do projeto, a Vercel o atribuiu
automaticamente ao alvo production. O alias atual é
<https://nova-proposta-seguros.vercel.app>; a proteção de acesso da Vercel está
ativa, portanto o endereço exige autenticação autorizada da equipe.

O primeiro deploy foi enviado a partir de `frontend/` pela CLI, sem integração
automática com o repositório. `SITE_INDEXING_ENABLED=false` foi aplicado no build e no runtime; `SITE_URL`
permanece ausente. O build remoto concluiu com status Ready e gerou as 17 rotas
estáticas esperadas. O aplicativo não depende de arquivos fora de frontend/ para
executar ou compilar; docs/ e references/ são contexto.

Ao conectar futuramente o repositório GitHub à Vercel, selecionar **Root Directory:
frontend** e **Framework Preset: Next.js**.

| Configuração | Valor |
| --- | --- |
| Node.js | 24.x, também declarado em package.json/engines |
| Gerenciador / instalação | npm / npm ci, usando frontend/package-lock.json |
| Build | npm run build |
| Output Directory | padrão do preset Next.js; não configurar out/ |
| Comando de desenvolvimento local | npm run dev |
| SITE_INDEXING_ENABLED em Preview e homologação | false |
| SITE_URL | deixar ausente até confirmar a origem; não inventar domínio |

As variáveis de SEO são resolvidas na geração do build. Alterá-las exige novo
build. Não há segredos exigidos pelo frontend nesta etapa. Não usar NEXT_PUBLIC_*
para credenciais futuras. Não definir NODE_ENV=development na Vercel.

Não é necessário adicionar vercel.json, export estático, rewrites ou servidor
customizado. Preservar a integração Next.js e next/image do provedor. O loader
Tailwind/Turbopack já configurado é validado pelo build; não substituir nesta auditoria.
O build usa next/font/google: permitir acesso aos arquivos da Inter durante a
compilação. As fotos e logos são locais; a navegação não consulta bancos de imagens.

Antes de qualquer publicação, executar lint, typecheck e build; depois conferir
na URL de homologação rotas, imagens, CSS, robots e formulários. Build local não
substitui a validação no ambiente Linux/Vercel. Conta, projeto e proteção de
acesso estão configurados; domínio próprio e revisão das permissões continuam
pendentes. noindex não é autenticação: manter a proteção da homologação.

Fontes oficiais consultadas em 14/11/2026:
- [Root Directory e configuração de build](https://vercel.com/docs/builds/configure-a-build).
- [Node.js suportado e engines](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).
- [Cabeçalhos de Preview, incluindo noindex](https://vercel.com/docs/headers/response-headers).

O remoto `origin` aponta para o repositório privado
<https://github.com/Unti-Digital/site-seguros.git>. Não há domínio próprio nem
integração de deploy automático configurada.

## Ambiente local
Node.js 24 LTS utilizado na preparação; npm com lockfile em frontend/.
Em frontend/: npm ci e npm run dev.
Servidor em 0.0.0.0:3000; visualização em http://localhost:3000.
No PowerShell com scripts bloqueados, usar npm.cmd.

## Produção
Executar as verificações de testing.md e npm run start para servir o build.
O build precisa de acesso ao Google Fonts para resolver Inter.
O projeto de homologação está configurado na Vercel. Produção operacional,
domínio próprio e automação por repositório continuam pendentes.

Pendentes: domínio, CI/CD, variáveis por ambiente, infraestrutura
WordPress, observabilidade, backups e publicação/revalidação.

## Indexação e domínio
Modelo de variáveis em frontend/.env.example; não contém segredos.
SITE_URL deve receber a origem confirmada do site (http/https, sem credenciais).
SITE_INDEXING_ENABLED permanece false durante revisão. Sem origem válida ou sem
o valor true, todas as páginas ficam noindex/nofollow, robots.txt bloqueia o site
e sitemap.xml não lista URLs. Nenhum domínio fictício é publicado.

Após aprovação editorial/operacional, configurar domínio e habilitação no ambiente
de build, gerar novo build e conferir canonical, sitemap e robots. O sitemap de
publicação contém Home, Sobre, Seguros, Contato e oito modalidades. A política
provisória nunca entra no sitemap e mantém noindex; isso deverá ser revisto apenas
quando houver uma política definitiva validada. Integração de formulário continua
separada desta configuração: alterar variáveis de SEO não habilita envio.
