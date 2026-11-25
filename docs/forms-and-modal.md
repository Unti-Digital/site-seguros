# Contato, cotação e modal reutilizáveis

## Atualização visual vigente — 18/11/2026
Removidos da interface os avisos de envio indisponível, demonstração local e uso
de dados fictícios. O formulário compartilhado usa fundo transparente para se
integrar à seção, mantendo os campos brancos; dentro do modal, herda o fundo do
dialog. Nas páginas internas, o wrapper `internal-interest` apresenta o formulário
como um card com respiro, borda, cantos arredondados e sombra suave, evitando o
aspecto de uma caixa branca colada aos campos. A caixa obrigatória confirma a
leitura do aviso de privacidade e orienta
a não incluir documentos ou dados sensíveis. O botão e o status comunicam somente
a revisão das informações, sem afirmar entrega ou recebimento.

A mudança é editorial e visual: endpoint, integração e validação no servidor
continuam pendentes. A página de destino preserva o aviso de política não
definitiva. Detalhes em content-and-seo.md.

## Escopo implementado
A Home e as páginas internas formam o frontend institucional. Não há endpoint,
integração WordPress, e-mail, WhatsApp ou CRM implementados.
O formulário é uma prévia interativa, não um canal de envio.

- `src/lib/contact-validation.ts`: modalidades, tipos e validação pura.
- `src/components/contact/contact-form.tsx`: formulário compartilhado entre
  seção Contato e modal, com IDs únicos por instância via useId.
- `src/components/contact/contact-modal.tsx`: provider, dialog e QuoteButton.
- `src/lib/motion.ts`: tokens comuns para transições/entradas das futuras páginas.

## Comportamento da cotação
CTAs de cotação do header, hero, contato e footer abrem o dialog. Cards abrem o
mesmo modal com a modalidade selecionada. Links de navegação usam rotas reais
e âncoras existentes; cotação continua sendo uma ação button.
O provider global no layout raiz envolve header, conteúdo e footer. Nas páginas
individuais, infere a modalidade pela rota quando o botão não a informa. O formulário
inline recebe initialService. O conteúdo permanece em componentes de servidor.

O modal usa dialog.showModal(): camada modal nativa, fundo inerte e nome/descrição
acessíveis. Foco inicial no botão Fechar; Tab/Shift+Tab circulam apenas nos controles
visíveis; fechamento por botão, Escape ou ponteiro fora do retângulo do dialog.
O fechamento externo exige pointerdown e pointerup no backdrop, funcionando com
mouse e toque sem fechar ao interagir ou arrastar a partir de um campo.
O fundo tem rolagem bloqueada e a posição é restaurada ao fechar. O foco retorna
ao acionador; se ele estava no menu mobile agora oculto, retorna ao botão do menu.
Se o formulário do modal foi alterado, botão Fechar, Escape e backdrop pedem
confirmação antes de descartar os dados. Cada abertura concluída reinicia o
formulário do modal. O formulário inline é independente.

## Validação e desenvolvimento
Campos obrigatórios: nome completo, telefone com DDD, e-mail, modalidade conhecida,
mensagem (10 a 2000 caracteres) e ciência do aviso de privacidade não pré-marcada.
Aceita nome com letras Unicode e telefone nacional ou prefixo +55. Não coleta
CPF, dados de saúde, documentos ou anexos. O texto pede que não sejam incluídos
documentos, dados de saúde ou informações financeiras sensíveis.

Erros ficam associados por aria-describedby/aria-invalid. O primeiro campo inválido
recebe foco e um status acessível informa a revisão necessária. O botão chama-se
Revisar informações. Quando os campos estão válidos, a mensagem confirma somente
a conferência e permite nova revisão. Não há tela de sucesso de envio, fetch,
action de servidor ou persistência.

Os controles ficam desabilitados na renderização sem hidratação. Isso evita o
envio GET nativo involuntário em caso de JavaScript ausente/falho. Depois da
hidratação, onSubmit sempre impede a navegação e executa apenas validação local.
Não foram adicionados pacotes de formulário ou schema.

## Privacidade pendente
A caixa da interface registra ciência do aviso e cuidado com dados sensíveis,
sem marketing e sem marcação prévia. Não é registro jurídico de consentimento
nem declaração de conformidade para produção.
O formulário mantém um disclosure explicativo e um link para o rascunho real em
/politica-de-privacidade, identificado como provisório e marcado noindex.
Ao seguir esse link de dentro do modal, ele é fechado e a rolagem é desbloqueada
antes da navegação. Antes de habilitar envio, validar política completa,
controlador, finalidade/base legal, retenção, direitos, contatos e prova aplicável
de consentimento. Referência de transparência e especificidade:
[orientação oficial sobre consentimento](https://www.gov.br/mdr/pt-br/acesso-a-informacao/perguntas-frequentes/perguntas-e-respostas-frequentes-sobre-lgpd/o-tratamento-de-dados-pessoais).

## Próxima integração
Definir endpoint e canal receptor, validar dados novamente no servidor, implementar
tratamento real de estados de envio/erro, proteção contra abuso e observabilidade
sem dados pessoais em logs. Só então substituir a validação demonstrativa por
envio real e publicar a política validada. Nenhuma dessas integrações é presumida.
