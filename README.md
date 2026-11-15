# Nova Proposta Seguros
Frontend Next.js institucional navegável, com preparação para WordPress Headless.
A Home aprovada é a referência visual das doze rotas internas implementadas.
Consulte [AGENTS.md](AGENTS.md) e [arquitetura](docs/architecture.md).

Em frontend/, executar npm ci e npm run dev.
Acesso: http://localhost:3000; bind 0.0.0.0:3000.
Verificações: npm run lint, npm run typecheck e npm run build.
No PowerShell com scripts bloqueados, usar npm.cmd.

A Home preserva seu layout, oito modalidades, menu mobile e FAQ. Sobre, catálogo,
Contato, aviso de Privacidade e oito páginas individuais compõem o frontend
visualmente aprovado. Rotas e componentes em [páginas internas](docs/internal-pages.md).
Contatos oficiais e condições operacionais/comerciais aguardam confirmação.
Há formulário local de prévia e modal reutilizável com validação acessível,
sem envio. Integrações de formulário/WhatsApp, política definitiva, CMS e
publicação seguem pendentes. Fotografias reais e grafismo do manual
estão documentados em docs/visual-assets.md.

Homologação publicada na Vercel pelo projeto `nova-proposta-seguros`, com
Node 24.x e `SITE_INDEXING_ENABLED=false`. O acesso permanece protegido pela
autenticação da equipe e não há domínio próprio configurado. Consulte
[deploy](docs/deploy.md) e [auditoria técnica](docs/technical-audit.md).
O repositório remoto privado está configurado no GitHub; a integração automática
entre GitHub e Vercel continua pendente.
