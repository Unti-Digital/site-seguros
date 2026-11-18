# Frontend institucional — páginas internas

A revisão posterior de comunicação/SEO está em content-and-seo.md e substitui
as antigas indicações públicas de conteúdo provisório. A documentação mantém
as pendências comerciais e legais sem transformar textos em garantias de produto.

## Rotas implementadas
Institucionais: /sobre, /seguros, /contato, /politica-de-privacidade.
Modalidades: /seguros/automovel, /seguros/plano-de-saude, /seguros/consorcio,
/seguros/vida, /seguros/seguro-saude, /seguros/empresarial,
/seguros/transportes e /seguros/engenharia.

O catálogo apresenta as oito modalidades em uma única grade contínua, com links
para cada página: quatro colunas no desktop, duas no tablet e uma no mobile.
Os blocos e rótulos de categorias foram removidos da listagem. Imagens, ícones,
alturas de cards e posição dos links mantêm alinhamento por linha.
O hero usa a fotografia consultiva local já documentada, em composição dividida.
O header permite navegação entre Home, Seguros, Sobre e Contato; o footer inclui
Privacidade. Há breadcrumbs nas páginas internas e uma página 404 institucional.

## Composição e reutilização
O shell, o logo oficial, os SVGs locais, o grafismo do manual, o formulário,
QuoteButton e o modal vêm dos padrões aprovados da Home. Nenhum pacote novo.
O conteúdo de seguros está separado da apresentação em data/insurance.ts;
service-options.ts centraliza nomes, slugs e agrupamentos.

Componentes novos em components/internal/: Breadcrumbs, PageHero,
InsuranceCard, InsuranceDetail, InsuranceRoute, EditorialFaq e InterestSection.
Estilos exclusivos em app/internal.css. O CSS da Home e seus sete componentes
de seção não foram alterados. Shell e comportamento de navegação foram elevados
ao layout raiz para não duplicar providers, header ou footer.

InterestSection reutiliza o mesmo ContactForm da Home. Nas rotas internas, o
formulário recebe um card próprio com padding responsivo, borda, raio e sombra
suave para se destacar sobre o fundo Gelo sem encostar os campos nas bordas.

São quatro composições de hero (dividido, editorial, invertido e panorâmico),
três apresentações de possibilidades (cards, lista e bento) e alternância de
fundos oficiais. Sobre usa manifesto, compromissos e painel de marca; Contato
prioriza formulário e canais pendentes; Privacidade privilegia leitura e índice.
Animações nativas reiniciam ao mudar de rota e respeitam movimento reduzido.

## Conteúdo e limites
Copys originais para revisão comercial. Nenhuma história, quantidade de clientes,
certificação, parceria, contato ou condição exclusiva foi inventada.
Coberturas são possibilidades a avaliar na proposta, sem garantia universal.
Consórcio é apresentado como planejamento em grupo, não como seguro ou crédito
imediato. Saúde não presume rede, reembolso, elegibilidade ou carências específicas.

Referências primárias consultadas para os limites gerais de informação:
- [Banco Central — administradoras de consórcio](https://www.bcb.gov.br/estabilidadefinanceira/administradoraconsorcio).
- [ANS — contratação e regras de planos de saúde](https://www.gov.br/ans/pt-br/assuntos/contratante/contratacao-regras-planos-de-saude).

Não constituem validação dos produtos comercializados pela empresa. Catálogo,
processos, textos e adequação das modalidades dependem de aprovação comercial.

## Privacidade e publicação
O rascunho explicita as lacunas de controlador, finalidades, bases legais,
retenção, compartilhamento, infraestrutura e canal dos titulares. Não declara
conformidade definitiva. Permanece noindex e fora do sitemap mesmo quando as
outras páginas forem liberadas. Não há coleta real pelos formulários.

Todas as rotas estão bloqueadas para indexação durante revisão. Para publicação,
confirmar domínio, conteúdo e condições operacionais; configurar as variáveis
descritas em deploy.md e gerar novo build. Não ativar formulários antes de definir
integração real, política validada e controles no servidor.
