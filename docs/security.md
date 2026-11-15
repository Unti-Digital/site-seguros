# Segurança

O chatbot é guiado por regras e não transmite dados. Há validação compartilhada
e gateway server-only fechado por padrão, sem endpoint, credenciais ou adaptadores
ativos. Honeypot, origem, rate limiter e idempotência têm contratos/testes para
integração futura; proteção durável de produção depende dos adaptadores. Estado
do chat fica em memória, sem armazenamento permanente ou logs. Ver chatbot.md.

Auditoria para homologação em 14/11/2026: npm audit --omit=dev sem ocorrências;
sete ocorrências moderadas de desenvolvimento na cadeia typescript-eslint/minimatch
permanecem, sem altas ou críticas. Sem upgrade forçado. Regras de ignore ampliadas
e varredura de padrões de credenciais sem achados entre os candidatos. Relatório
e limites em technical-audit.md; o resultado não presume política jurídica validada.
Não há autenticação, envio de dados ou conexão com CMS nesta etapa. Há formulários
de prévia com validação local, sem endpoint ou persistência; ver forms-and-modal.md.
Segredos e arquivos .env são ignorados pelo Git. Nunca colocar credenciais em
variáveis NEXT_PUBLIC_*, acessíveis ao navegador.

Integrações futuras deverão validar entradas e respostas e manter operações
privilegiadas no servidor. Permissões WordPress, CORS, cabeçalhos, proteção de
formulários e privacidade serão definidos com funcionalidades e infraestrutura.
O bind 0.0.0.0 atende ao desenvolvimento solicitado; não configura produção.

Os formulários impedem submit nativo e permanecem desabilitados sem hidratação.
Nenhum dado de formulário é enviado, salvo em localStorage/cookies ou registrado
em logs pela aplicação. Apenas dados de teste devem ser utilizados. Consentimento
e política são preliminares; precisam de validação antes de ativar envio real.

## Auditoria inicial de dependências
O npm audit apontou sete ocorrências moderadas na cadeia de desenvolvimento
typescript-eslint/minimatch (GHSA-g3hv-75wg-m249). npm audit fix não as resolveu
com as versões compatíveis disponíveis. Não foram forçados overrides de major.
ESLint 9 foi mantido por compatibilidade declarada dos plugins do Next.js;
o npm informa que essa linha encerrou suporte. Reavaliar a cadeia quando os
plugins suportarem a versão atual do ESLint. Essas pendências não impedem
as verificações locais, mas precisam permanecer registradas.
