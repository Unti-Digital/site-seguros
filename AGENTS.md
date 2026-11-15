# Nova Proposta Seguros
Leia docs/architecture.md e os documentos da área antes de alterar código.

## Escopo
- Next.js com App Router, TypeScript estrito, Tailwind CSS, ESLint e npm em frontend/.
- WordPress Headless é futuro: não criar contratos, modelos, banco ou plugins sem requisitos.
- Não desenvolver Home ou outras páginas sem instruções específicas.
- Usar tokens oficiais e Inter. Consultar references/ quando receber os arquivos.
- Referência arquitetural: E:/Unti-Digital/Meme/site-ipecc, consultada na preparação.
  Reaproveitar separação de responsabilidades e documentação; não requisitos de negócio.

## Harness Engineering
1. Ler o contexto e definir a alteração e critérios verificáveis.
2. Implementar a menor mudança necessária respeitando as fronteiras de pastas.
3. Executar em frontend/: npm run lint, npm run typecheck e npm run build.
4. Corrigir falhas, atualizar documentação afetada e reportar evidências e pendências.
5. Nunca versionar segredos, dependências instaladas ou builds.

No PowerShell com scripts bloqueados, usar npm.cmd e npx.cmd.
