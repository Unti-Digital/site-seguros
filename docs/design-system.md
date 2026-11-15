# Design System — Nova Proposta Seguros

## Fonte e escopo da análise

Fonte oficial: [Manual de marca e aplicação](../references/manual-marca/MANUAL%20DE%20MARCA%20E%20APLICACAO%20-%20NOVA%20PROPOSTA%20SEGUROScópia.pdf).
As 16 páginas foram lidas visualmente em 13/11/2026, incluindo textos, logotipos,
diagramas, peças e as versões desktop/mobile da página 15. O PDF não tem camada
de texto extraível; a inspeção de extração confirmou desenhos vetoriais, incluindo
letras convertidas em traçados, e não páginas rasterizadas. As referências usam a ordem física
das páginas do PDF, contando a capa como página 1; os números do sumário são seções.

Este documento distingue regras explícitas do manual, observações dos exemplos
e direção de projeto solicitada. Exemplos de textos, serviços, contatos e dados
nas peças não constituem informações institucionais ou comerciais aprovadas.
A análise da segunda etapa documenta a identidade. A terceira etapa autorizou
a Home, agora implementada para avaliação visual, conforme frontend.md.

## Direção visual do projeto

No refinamento final, o layout da Home foi reconhecido como 98% aprovado.
Preservar suas nove áreas, paleta, Inter e grafismos; o trabalho restante é
pontual. A Home é a referência visual oficial do site institucional completo,
incluindo as páginas internas agora implementadas por autorização específica.

A direção solicitada é **clean, premium, tecnológica, sofisticada e institucional,
com forte percepção de segurança**. O conceito oficial da marca associa proteção,
confiança e proximidade ao escudo, à casa e à família; as faixas envolventes
representam movimento, cuidado contínuo e abraço ao cliente (p. 3).

Para traduzir essa direção no site, adotar como orientação de projeto: amplo
respiro, hierarquia clara, composição organizada, tipografia consistente e
contraste entre superfícies claras e blocos institucionais escuros. O caráter
premium deve vir da composição e do acabamento dentro da identidade aprovada.
Não adicionar cores ou efeitos ao logotipo para produzir essa percepção.

O exemplo da página 15 é a base visual. A instrução desta etapa permite evoluções
de layout, elementos modernos e microinterações, preservando marca, paleta,
legibilidade e reconhecimento. A estrutura final e o conteúdo continuam pendentes.

## Logotipo: composição, versões e integridade

O símbolo reúne escudo, casa e figura humana, envolvidos por faixas azuis e
vermelhas. A assinatura apresenta NOVA PROPOSTA em caixa alta e peso forte e
SEGUROS em vermelho com letras espaçadas (p. 3). Essa descrição identifica a arte;
não autoriza reconstruí-la com texto, CSS ou novos desenhos.

### Versões oficiais e fundos (pp. 4–5)

| Versão | Aplicação indicada |
| --- | --- |
| Principal colorida | Preferencial; fundos brancos e claros, incluindo Gelo. |
| Negativa branca | Fundos escuros, Azul Proteção, Azul Profundo, Grafite e fotografias com contraste adequado. |
| Monocromática azul | Impressões em uma cor e aplicações institucionais; usar o arquivo oficial. |
| Monocromática preta | Documentos, carimbos, gravações e fax; usar o arquivo oficial. |

A versão monocromática preta é uma variante do logo prevista no manual, não uma
autorização para adicionar preto à paleta da interface. Não recolorir a arte.

Em fotografias, posicionar a marca em área limpa e de pouca variação visual. Se a
imagem for movimentada, o manual orienta sobreposição escura e versão negativa.
O fundo não deve competir com a marca. Evitar tons médios de azul ou vermelho
atrás da versão principal. No site, a página 15 restringe a negativa às aplicações
sobre hero ou rodapé escuro; o topo claro recebe a principal.

### Usos proibidos (p. 6)

- Distorcer ou alterar a proporção original.
- Rotacionar: manter a orientação original, sem inclinação.
- Alterar cores ou usar versões não oficiais.
- Aplicar contornos, sombras ou efeitos ao logo.
- Usar a versão principal sem contraste, especialmente em fundo azul.
- Posicionar sobre fundos visualmente poluídos.
- Redesenhar, recortar ou recompor qualquer elemento da marca.

Usar os arquivos originais. A Inter não substitui o desenho próprio do logotipo
(p. 10). Não extrair elementos do logo para criar uma nova assinatura.

### Área de proteção e redução mínima (p. 7)

- A unidade **X corresponde à altura da palavra SEGUROS** na própria arte.
- Reservar pelo menos 1X nos quatro lados, sem invasão de texto, imagem ou borda.
- Digital: largura mínima de **160 px** para o logo completo.
- Impresso: largura mínima de **30 mm**.
- Materiais pequenos, bordados e gravações podem exigir a versão monocromática
  para manter definição; isso não estabelece outro mínimo digital.

X é uma medida proporcional ao logo, não um valor fixo de espaçamento em pixels.
Não deduzir do mockup uma exceção ao mínimo de 160 px nem ocultar SEGUROS no mobile.

### Posicionamento e convivência (p. 8)

O manual orienta um logo por peça, assinando em um canto ou na base, sem ocupar
o centro de uma composição de venda. A distância mínima até a borda é 1X.

| Contexto exemplificado | Orientação |
| --- | --- |
| Feed 1080 × 1350 | Canto inferior direito, com pelo menos 1X de respiro. |
| Story 1080 × 1920 | Canto inferior direito, dentro da zona segura. |
| Papelaria/documentos | Canto superior esquerdo, alinhado à margem do texto. |
| Site (p. 15) | Logo principal no topo à esquerda. |
| Co-branding | Logos alinhados pela base, com a mesma altura visual e separados por um fio fino. |

As regras de peças não definem por si sós a repetição do logo em header e footer
do futuro site. A página 15 admite negativa no rodapé escuro, mas não o desenha;
essa composição deverá ser validada na etapa de layout.

## Paleta oficial (p. 9)

Os valores escritos no manual são a referência para os tokens, sem amostrar cores
das imagens rasterizadas. Não alterar a paleta nem adicionar cores sem justificativa
e aprovação.

| Token Tailwind | Cor | HEX | RGB | CMYK aproximado do manual | Papel oficial |
| --- | --- | --- | --- | --- | --- |
| `azul-protecao` | Azul Proteção | `#0138C7` | 1 / 56 / 199 | 99 / 72 / 0 / 22 | Cor principal, títulos e destaques. |
| `vermelho-cuidado` | Vermelho Cuidado | `#D90A3B` | 217 / 10 / 59 | 0 / 95 / 73 / 15 | Acentos, chamadas e detalhes. |
| `azul-profundo` | Azul Profundo | `#00115A` | 0 / 17 / 90 | 100 / 81 / 0 / 65 | Fundos institucionais e textos. |
| `gelo` | Gelo | `#F3F5F9` | 243 / 245 / 249 | 2 / 2 / 0 / 2 | Fundo base das peças. |
| `grafite` | Grafite | `#1B2233` | 27 / 34 / 51 | 47 / 33 / 0 / 80 | Textos corridos. |
| `branco` | Branco | `#FFFFFF` | 255 / 255 / 255 | 0 / 0 / 0 / 0 | Respiro e fundos limpos. |

O manual informa que o CMYK foi convertido de RGB e é aproximado; validar prova
de impressão antes de produção gráfica.

### Proporção de uso

A barra da página 9 traz estas legendas: Gelo e Branco **55%**, Azul **25%**,
Azul Profundo **12%** e Vermelho **5%**. Há um segmento final de Grafite sem
percentual escrito. Não registrar os 3% restantes como regra oficial confirmada.
Usar as proporções como orientação do equilíbrio visual, sem inventar cotas por
componente ou breakpoint. A base clara predomina; o vermelho é um acento.

Cinzas intermediários, cores de molduras de dispositivos e cores presentes nos
exemplos de uso incorreto não ampliam a paleta oficial. Estados de interface,
bordas, sobreposições e eventuais variações de opacidade precisam ser definidos
na etapa de componentes; cores extras exigem justificativa e aprovação.

## Tipografia oficial (p. 10)

Inter é a família oficial para peças institucionais, digitais e impressas.

| Nível do manual | Estilo | Peso CSS correspondente |
| --- | --- | --- |
| Título | Inter Black | 900 |
| Subtítulo | Inter Bold | 700 |
| Destaque | Inter SemiBold | 600 |
| Texto | Inter Regular | 400 |

Não há tamanhos de fonte, entrelinhas, tracking, escala responsiva ou larguras
de leitura numericamente definidos. As diferenças visuais dos exemplos orientam
a hierarquia, sem constituir uma escala em px/rem aprovada. Os textos de exemplo
da página não são conteúdo comercial validado.

Exceção explícita para assinatura de e-mail (p. 14): usar Arial ou Helvetica,
mantendo pesos e cores do modelo, por compatibilidade com os clientes de e-mail.
Isso não altera a escolha de Inter para o site.

## Elementos gráficos e linguagem de composição

As peças mostram uma **faixa curva lateral**, predominantemente à direita,
com massas azuis, acento vermelho e, em diversas aplicações, separação clara
(pp. 1–2, 4–14 e 16). O gesto dialoga com as faixas envolventes do símbolo.
No site, reaparece no lado direito do hero, em Azul Profundo, Azul Proteção e
Vermelho Cuidado (p. 15).

Outros recursos observados: fios finos de separação, pequenos traços de acento,
blocos de cor amplos e espaço negativo. Os cartões do exemplo digital têm
cantos arredondados, superfícies claras e bordas discretas. Essas observações
não definem raios, espessuras, curvas vetoriais ou tokens de sombra oficiais.
Não confundir a proibição de recortar o logo com o uso da faixa gráfica separada;
o arquivo próprio desse grafismo ainda precisa ser disponibilizado ou validado.

## Referência do site — análise da página 15

### Diretrizes explícitas do manual

Base clara, hero em Azul Profundo com faixa curva, botões de ação em vermelho,
textos em Inter e logo principal no topo à esquerda. A versão negativa é indicada
apenas sobre hero ou rodapé escuro. A referência inclui desktop e mobile.

### Composição observada no desktop

- Cabeçalho branco com logo à esquerda, navegação horizontal e ação destacada
  em vermelho à direita.
- Hero com fundo Azul Profundo, texto alinhado à esquerda e faixa curva na direita,
  terminando em área Azul Proteção com acento vermelho.
- Pequeno texto introdutório espaçado, título branco de grande peso, apoio de
  menor destaque e botão vermelho arredondado, com texto branco.
- Seção clara abaixo do hero com três cartões lado a lado, superfícies Gelo,
  bordas suaves, títulos escuros e pequenos traços de acento azul/vermelho.
- Respiros e alinhamentos regulares, com prioridade visual para mensagem e ação.

### Composição observada no mobile

- Cabeçalho branco, logo à esquerda e ícone de menu à direita.
- Hero mantém o fundo escuro, título e ação à esquerda e uma faixa curva mais
  estreita à direita, adaptada ao espaço disponível.
- Conteúdo em uma coluna; cartões empilhados com margens laterais. O recorte
  mostra dois cartões, sem comprovar a remoção do terceiro.
- O texto de apoio aparece como linhas ilustrativas, sem conteúdo legível.
- Molduras de navegador/celular são suportes do mockup, não elementos do site.

Os rótulos de navegação, produtos, chamadas e promessas comerciais exibidos são
exemplos de aplicação. Não confirmam catálogo, coberturas, atendimento, arquitetura
de informação, páginas ou funcionalidades. Não reutilizar como dados da empresa
sem validação específica.

### Evolução permitida pela direção do projeto

É permitido evoluir a distribuição das seções, o grid, os componentes modernos e
as microinterações a partir dessa base, sem copiar o mockup como especificação
completa. Como orientação para uma futura proposta, considerar transições
discretas de foco/hover e feedback claro de interação, sem animar, deformar ou
recolorir o logo. Respeitar redução de movimento e acessibilidade. Durações,
easing, estados e comportamentos ainda não estão definidos no manual.

Manter o respiro do logo e o mínimo de 160 px no mobile. Validar contraste, foco,
leitura, áreas de toque e adaptação de conteúdo na implementação futura; o
mockup não comprova conformidade de acessibilidade nem define breakpoints.

## Demais aplicações lidas (pp. 11–14)

São referências de consistência da marca, sem autorização para produzi-las agora.

| Página | Aplicação e especificações do manual |
| --- | --- |
| 11 | Cartão 90 × 50 mm, cantos retos; couché 300 g, laminação fosca na frente e verniz localizado no símbolo da frente; impressão 4×1, sangria de 3 mm e segurança de 4 mm. Frente com logo principal sobre branco. Apenas a frente está ilustrada. |
| 12 | Papel A4 em offset 90 g, impressão 4×0 e margens internas de 25 mm; texto não invade faixa lateral ou rodapé. Envelope DL 220 × 110 mm em offset 120 g, 4×0. Prevê modelo .docx com o mesmo cabeçalho/rodapé para envio em PDF. |
| 13 | Pasta A4 com bolsa, couché 300 g, laminação fosca externa, 4×0 e corte para cartão. Crachá 54 × 86 mm, PVC 0,76 mm, 4×4 e furo para cordão azul ou vermelho da marca. Materiais de apresentação usam Azul Profundo como base, contrastando com papel timbrado branco. |
| 14 | Assinatura de e-mail com largura máxima de 600 px, logo PNG em 2x e HTML com tabela, sem transformar tudo em uma imagem, para permitir contatos clicáveis. Fonte Arial/Helvetica conforme exceção indicada. |

Nomes, cargos, matrículas, telefones, e-mails, endereços e domínio apresentados
nessas peças não foram incorporados como dados oficiais de contato.

## Conferência do frontend — 13/11/2026

- `frontend/src/app/globals.css`: os seis tokens coincidem exatamente com os HEX
  escritos na página 9. Exemplos de uso: `bg-azul-protecao`, `text-grafite`.
- `frontend/src/app/layout.tsx`: importa Inter de `next/font/google`, com
  `subsets: ["latin"]`, `display: "swap"` e variável `--font-inter` aplicada no
  elemento `html`. A família variável suporta os pesos necessários do manual.
- `--font-sans` referencia `--font-inter`, com fallback Arial/Helvetica/sans-serif;
  o `body` utiliza essa família. Fundo branco e texto grafite estão na paleta.
- A configuração existente atende à identidade nesta etapa. Nenhuma alteração
  de código, cor, fonte, logo ou página foi necessária.

## Pendências sem presunção

Na terceira etapa foram propostas escalas, grids, bordas e microinterações no
frontend para avaliação visual; são decisões de implementação, não medidas
oficiais adicionais do manual. Nenhum HEX oficial ou configuração Inter foi alterado.
O logo foi extraído diretamente dos vetores do PDF nesta etapa, por solicitação
expressa, e aplicado no header e footer. A extração isola a assinatura completa
dos elementos da página; não recorta, redesenha ou recompõe partes da marca.

- Arquivo-fonte editável de autoria continua não disponibilizado. Para o frontend,
  as quatro versões vetoriais extraídas do PDF estão disponíveis em public/logos/;
  não há pendência de qualidade raster ou de transparência nessas extrações.
- A curva oficial foi extraída dos paths da página 1 e aplicada em três
  composições nesta evolução. A faixa clara do fundo foi recomposta para uso
  isolado; método e adaptação responsiva documentados em visual-assets.md.
- Percentual explícito de Grafite na proporção de cores da página 9.
- Escala tipográfica, entrelinhas, tracking, grid, espaçamentos de interface,
  breakpoints, raios, bordas, estados e parâmetros de microinterações.
- A aplicação no header usa 160 px de largura, 10 px de proteção por lado e
  altura de header de 128 px em desktop/mobile. X mede aproximadamente 9,1 px
  nessa escala; a proteção de 10 px respeita o mínimo. Âncoras têm compensação
  de 144 px para o header fixo. A imagem mantém sua proporção natural.
- Página 15 não apresenta site completo, rodapé desenhado, menu aberto ou fluxos.
  O texto de apoio mobile é ilustrativo. Não presumir seções e comportamentos ausentes.
- O sumário menciona frente e verso do cartão, mas a página 11 mostra só a frente;
  não inventar a composição do verso.
- Conteúdos institucionais/comerciais e contatos precisam de validação própria;
  exemplos do manual não serão tratados como requisitos aprovados.

## Rastreabilidade da leitura integral

| Páginas físicas | Conteúdo revisado |
| --- | --- |
| 1–2 | Capa, identidade visual geral e sumário. |
| 3 | Conceito, símbolo, assinatura e objetivo de consistência. |
| 4–6 | Versões, aplicação sobre fundos e usos proibidos. |
| 7–8 | Proteção, redução mínima, posição e co-branding. |
| 9–10 | Paleta, proporções e hierarquia Inter. |
| 11–14 | Cartão, papel/envelope, pasta/crachá e assinatura de e-mail. |
| 15 | Referência visual desktop/mobile e orientação explícita do site. |
| 16 | Encerramento com logo principal e faixa curva lateral. |
