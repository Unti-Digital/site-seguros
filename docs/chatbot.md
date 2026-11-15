# Chatbot próprio — Nova Proposta Seguros

## Escopo e funcionamento atual
Assistente guiado por regras, sem IA, plataforma externa ou dependências novas.
Integrado uma única vez ao layout raiz, disponível em todas as rotas. As páginas,
o formulário e o modal de cotação existentes permanecem preservados.

O botão flutuante abre uma conversa em dialog nativo, com logotipo oficial,
mensagens diferenciadas, escolhas, campo de texto, progresso e revisão. O site
identifica o assistente como virtual e informa desde a abertura que o envio está
desativado e que devem ser usados apenas dados fictícios. Não existe promessa
de atendimento humano imediato, protocolo, confirmação de recebimento ou envio falso.

## Organização
- `src/components/chatbot/chatbot.tsx`: interface global, histórico, foco, ciclo
  de abertura/fechamento, navegação entre perguntas, correção e reinício.
- `src/lib/chatbot-flow.ts`: quatro fluxos, perguntas, escolhas, normalização,
  máscara, validação por pergunta e validação integral reutilizável no servidor.
- `src/lib/chatbot-service.ts`: disponibilidade desativada e preparação pura de
  assunto/corpo de e-mail e mensagem de WhatsApp para os futuros adaptadores.
- `src/server/chatbot-gateway.ts`: fronteira server-only, fechada por padrão,
  com contratos para transporte, limitação, idempotência e consentimento validado.
- `src/lib/overlay-events.ts`: coordenação entre chat, menu e cotação.
- `src/app/chatbot.css`: estilos isolados na paleta oficial e animações nativas.
- `tests/chatbot.test.mjs`: testes com node:test, sem runner adicional.

## Fluxos
| Atendimento | Perguntas específicas | Descrição | Destinos previstos |
| --- | --- | --- | --- |
| Seguros e cotações | Uma das oito modalidades; cotação ou mais informações | Opcional | E-mail e WhatsApp |
| Falar com a equipe | Comercial, acompanhamento ou outro assunto | Obrigatória | E-mail e WhatsApp |
| Dúvidas e informações | Modalidades/contratação, condições ou outra dúvida | Obrigatória | Apenas e-mail |
| Reclamações | Atendimento, solicitação ou outro assunto | Obrigatória | Apenas e-mail |

Todos pedem nome completo, telefone com DDD, e-mail e confirmação de ciência.
Nos seguros, o assunto é derivado das escolhas obrigatórias de modalidade e
objetivo; nos outros fluxos é perguntado explicitamente. Destinos são calculados
pelo fluxo, nunca aceitos como informação confiável do navegador.

As modalidades reutilizam service-options.ts, mantendo Plano de Saúde e Seguro
Saúde distintos. Ao iniciar numa página individual, a modalidade fica selecionada
na pergunta, mas o visitante confirma ou pode escolher outra. Uma conversa já
iniciada não é sobrescrita por outra página. Integrações internas futuras podem
disparar o evento `nova-proposta:chat-open` com detail `{ service?: string }`.
Nenhum CTA atual foi substituído.

## Validação e revisão
Uma pergunta ativa por vez. Nome e sobrenome são obrigatórios, com suporte a
acentos e nomes Unicode. Telefone aceita fixo com oito dígitos e celular com nove
iniciando em 9, ambos com DDD brasileiro válido; máscara aplicada ao digitar.
Aceita colagem com +55. Não verifica propriedade ou existência de uma linha.
E-mail é validado pelo formato, sem consulta externa. Mensagens têm limite de
2.000 caracteres e mínimo de dez quando preenchidas; vazia é permitida somente
como complemento opcional no fluxo de seguros. Não são solicitados CPF ou anexos.

Os erros aparecem na conversa, com role alert e associação ao campo. Respostas
inválidas impedem avanço. Voltar preenche a resposta anterior. Corrigir, na revisão,
retoma a pergunta correspondente; as próximas respostas permanecem preenchidas.
Mudança de fluxo limpa respostas incompatíveis. Alterar dados invalida a ciência
de privacidade, exigindo nova confirmação. Reiniciar pede confirmação e apaga o
rascunho em memória. Concluir revisão local confirma somente a revisão, mantendo
o aviso de que nenhum atendimento foi registrado e o botão de envio desabilitado.

## Estado, acessibilidade e interfaces existentes
Respostas e texto ainda não confirmado ficam apenas no estado React. Fechar por
botão ou Escape e reabrir preserva a conversa durante a mesma sessão montada.
Navegação SPA mantém o componente global. Recarregar, desmontar o componente ou
reiniciar descarta o estado; restauração da aba pelo navegador pode preservar
sua memória. Não há recuperação permanente pela aplicação, localStorage, sessionStorage,
cookies, analytics ou logs de dados pessoais. O app não controla autofill ou
recursos de histórico próprios do navegador.

dialog.showModal fornece fundo inerte; há contenção de Tab/Shift+Tab, foco inicial
e foco na pergunta ativa, restauração ao fechar e bloqueio/restauração da rolagem.
Aberturas programáticas são coordenadas: abrir cotação fecha o chat; abrir chat
fecha o menu; o launcher fica oculto com menu ou cotação abertos. Chat não abre
por cima de uma cotação ativa. Nenhuma resposta da cotação é apagada por isso.

Animações usam transform/opacity, com indicador de digitação de aproximadamente
280 ms entre perguntas, sem esperas longas. Com movimento reduzido, não há espera
introduzida ou animações. VisualViewport limita a altura do dialog; em altura
reduzida o painel passa a rolar como um todo, preservando acesso aos controles.

## Identidade e ícone
O cabeçalho usa o SVG original da Nova Proposta, a 160 px, com espaço de proteção.
O launcher usa o [SVG de marca do WhatsApp](https://commons.wikimedia.org/wiki/File:WhatsApp.svg),
obtido de [Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg),
cuja ficha registra a origem no site oficial do WhatsApp. Salvo localmente em
public/logos/whatsapp.svg, sem redesenho ou alteração de paths/cores. A cor própria
do ícone de plataforma é restrita a esse recurso solicitado; não amplia os tokens
do Design System. Não representa afiliação nem canal de WhatsApp já operacional.
Nenhuma ferramenta de geração de imagens foi utilizada.

Referências de numeração: [Anatel — códigos nacionais](https://www.gov.br/anatel/pt-br/regulado/numeracao/codigos-nacionais)
e [nono dígito](https://www.gov.br/anatel/pt-br/regulado/numeracao/nono-digito).

## Fronteira de transmissão: desativada
Não existe Route Handler, Server Action, endpoint, cliente HTTP ou link wa.me
conectado ao chat. chatbotDeliveryStatus não aceita dados pessoais. O preparo
de handoff é função pura: retorna textos e destinos lógicos, sem número, e-mail,
URL ou credencial presumidos. Dúvidas/reclamações não geram mensagem de WhatsApp.

O gateway do servidor retorna unavailable enquanto não houver habilitação explícita,
origem configurada e todos os adaptadores obrigatórios. A interface não chama
esse gateway. Sua implementação prepara:
- validação integral e whitelist do ramo escolhido, limites de tamanho, texto
  simples normalizado e remoção de controles; React escapa a saída, sem HTML inserido;
- checagem de origem, honeypot e tempo mínimo; rate limiter com chave derivada
  no servidor, nunca confiando em IP/chave fornecidos pelo visitante;
- armazenamento de idempotência com claim atômico ligado ao fingerprint do pedido,
  bloqueio de chaves conflitantes e confirmação somente após aceite do receptor;
- retenção do claim como pendente em resultado incerto, impedindo retry automático
  que possa duplicar o e-mail. Não se promete entrega exatamente uma vez sob falhas;
  o futuro adaptador deverá prever conciliação e recuperação;
- ausência de logs de payload, endereços ou erros brutos do provedor.

Rate limiter e armazenamento durável são **portas sem adaptadores de produção**,
não uma proteção HTTP já em operação. Os testes usam somente adaptadores sintéticos
locais. Não há fallback em memória para uma implantação serverless. Antes de criar
endpoint real, limitar o corpo HTTP antes de JSON parsing, validar content-type,
configurar origem confiável e infraestrutura persistente e revisar abuso/proxy.

## Privacidade, retenção e próximos passos
A caixa atual é ciência da demonstração, não prova jurídica de consentimento de
coleta. O gateway exige um verificador adicional do consentimento operacional;
somente a caixa local não habilita envio. Antes de integrar:
1. Confirmar destinatário oficial, número de WhatsApp e responsáveis por fluxo.
2. Definir controlador, finalidades/bases legais, destinatários, retenção,
   descarte, direitos dos titulares e política definitiva; atualizar o aviso.
3. Implementar consentimento real com versão do texto e evidência adequada.
4. Configurar transporte de e-mail seguro e persistência/limites duráveis no servidor,
   com expiração de chaves/fingerprints e cuidados de proteção desses registros.
5. Após confirmação real de recebimento por e-mail, oferecer ação explícita para
   abrir o WhatsApp nos dois fluxos apropriados, com número oficial e texto codificado;
   não abrir automaticamente, nem oferecer WhatsApp para dúvidas/reclamações.
6. Testar falhas, concorrência, limites, reconciliação e entrega na infraestrutura
   de homologação. Credenciais permanecem no servidor, fora de NEXT_PUBLIC_*.

WordPress Headless pode futuramente fornecer conteúdo; o fluxo e o gateway não
dependem de implementação interna do CMS. Nenhum plugin, banco ou WordPress foi alterado.

## Verificação
Executar npm run test:chatbot, npm run lint, npm run typecheck e npm run build.
Testes cobrem ramos, campos, normalização, números, destinos, servidor fechado,
origem, abuso, rate limit e duplicidade. A revisão de navegador cobre os quatro
fluxos em 390/768/1440 px, teclado, revisão, voltar, reiniciar, persistência temporária,
abertura contextual, movimento reduzido e conflitos com as interfaces existentes.
Resultados finais registrados em testing.md. Não houve commit, GitHub ou deploy.
