# Recursos visuais e licenças

## Inventário utilizado na Home
- Ícones: SVGs locais em `frontend/src/components/ui/icon.tsx`, já presentes na
  implementação aprovada. Não foram importados de Lucide ou outro pacote;
  mantidos para preservar o desenho e evitar dependências sem necessidade.
- Grafismos: CSS local (órbitas, grid e arcos) e grafismo oficial exportado do
  PDF em `frontend/public/brand/grafismo-curva-oficial.svg`, aplicado no hero,
  na composição Sobre e no contato. Os logotipos não foram modificados.
- Tipografia: Inter por `next/font/google`, já configurada no projeto.
- Fotografia: duas imagens reais da Kampus Production/Pexels, armazenadas
  localmente como WebP e renderizadas com next/image; detalhes abaixo.
- Logotipo: quatro SVGs oficiais extraídos diretamente dos traçados do PDF,
  em frontend/public/logos/. Header e footer usam a principal transparente.
  Não houve geração, redesenho, recoloração ou vetorização por aproximação.
  Origem e verificação técnica em logos.md e no manifesto junto aos arquivos.
- Não foi utilizada geração de imagens por IA.

## Pesquisa de fotografia — 13/11/2026
Consultadas as fontes oficiais:
- [Licença Unsplash](https://unsplash.com/license).
- [Termos Unsplash](https://unsplash.com/terms), incluindo limites relativos a
  pessoas, marcas e outros direitos de terceiros.
- [Licença Pexels](https://www.pexels.com/license/).

As licenças permitem uso comercial nas condições publicadas e dispensam crédito
obrigatório. Não autorizam apresentar pessoas ou marcas retratadas como apoiadoras
da empresa; não tratar uma foto de banco como fotografia da sede ou equipe.
Não revender cópias sem alteração nem redistribuir como banco concorrente.
Licença da plataforma não é uma confirmação de adequação de todo retrato para
qualquer finalidade; conferir o recurso específico antes de incorporar.

### Candidata examinada e não incorporada
[Modern Glass Facade of Office Building — Nikola Vu, Pexels, foto 36149072](https://www.pexels.com/photo/modern-glass-facade-of-office-building-36149072/).
A página indica licença Pexels gratuita. A imagem foi baixada apenas para análise
em diretório temporário e inspecionada visualmente. Mostra fachada corporativa,
com enquadramento vertical e tons esverdeados/cinzentos. Não se mostrou adequada
para complementar discretamente o hero aprovado: exigiria substituir ou encobrir
seus grafismos e reduziria a ligação visual com a identidade atual.
Por isso não foi incluída em `public/`, nem carregada pelo site.

Uma referência de Sean Pollock no Unsplash (PhYq704ffdA) também foi pesquisada,
mas sua página individual não pôde ser acessada pela ferramenta de consulta;
não foi incorporada sem essa conferência.

## Fotografias incorporadas nesta evolução

| Aplicação | Arquivo local em public/images/ | Autor e fonte |
| --- | --- | --- |
| Sobre: conversa profissional | atendimento-consultivo-kampus-8439657.webp | [Kampus Production / Pexels, foto 8439657](https://www.pexels.com/photo/bearded-man-showing-an-elderly-client-a-document-8439657/) |
| Hero: família em momento natural | familia-parque-kampus-6182114.webp | [Kampus Production / Pexels, foto 6182114](https://www.pexels.com/photo/a-family-spending-time-together-on-a-park-6182114/) |

As páginas individuais e a [licença Pexels](https://www.pexels.com/license/) foram
conferidas em 13/11/2026. As duas páginas identificam o conteúdo como gratuito.
A [orientação oficial para projetos comerciais](https://help.pexels.com/hc/en-us/articles/360042295214-Can-I-use-the-photos-and-videos-for-a-commercial-project)
permite uso em sites comerciais, sem implicar endosso das pessoas retratadas.
Não se apresentam como equipe, sede, clientes ou depoimentos da Nova Proposta.
As imagens foram inspecionadas; não há marcas identificáveis aplicadas à composição.

São imagens ilustrativas complementares ao texto adjacente, com alt vazio dentro
dos grafismos decorativos e indicação visual de imagem ilustrativa. Sem edição
por IA. Foram obtidas a 1400 px, codificadas em WebP (qualidade 82) e enquadradas
por object-fit; cores naturais preservadas no arquivo, com sobreposição CSS nas
cores oficiais para contraste. Peso aproximado: 47 KB (Sobre) e 123 KB (hero).
Next/Image gera versões responsivas locais; preload apenas no hero e lazy loading
em Sobre. O navegador não consulta Pexels/Unsplash durante a visita.
Proveniência, dimensões e hashes em public/images/photo-sources.json.

## Grafismo do manual
Origem: página física 1 do PDF oficial, área direita (650 × 1080 unidades).
Os paths vermelho e azul foram exportados com seus comandos e preenchimentos
originais. A faixa clara era o fundo Gelo da página: para isolar o grafismo sobre
fotos/fundos escuros, foi recomposta como uma cópia do path azul transladada 25
unidades à esquerda, pintada no Gelo original e posicionada sob os demais paths.
Não houve redesenho dos paths vermelho/azul ou alteração do logo.

O SVG decorativo tem viewport adaptável para as três composições, com recortes e
larguras específicas para desktop/mobile. A adaptação de proporção é exclusiva
do grafismo; os logos continuam mantendo a proporção natural.
Registro de origem e hash em public/brand/grafismo-origem.json.

## Iconografia
Mantidos os SVGs locais, grade 24 × 24, traço 1,5, pontas e junções arredondadas.
Seguro Saúde passou a usar escudo com cruz para diferenciá-lo do clipboard de
Plano de Saúde. Sem pacote Lucide ou geração por IA: a família existente é
consistente e não justificava substituir todos os ícones ou instalar dependências.

## Pendências
Validação visual e editorial das fotografias pelo responsável. Não há pendência
técnica para exibi-las localmente; nenhuma foto de sede/equipe real foi presumida.

## Fotografias das páginas internas — 13/11/2026

| Aplicação | Arquivo em public/images/ | Autor / página de origem |
| --- | --- | --- |
| Automóvel | automovel-institucional.webp | [Aedrian Salazar / Pexels 11942041](https://www.pexels.com/photo/a-person-driving-car-on-road-11942041/) |
| Plano de Saúde | plano-saude-institucional.webp | [Antoni Shkraba / Pexels 5215008](https://www.pexels.com/photo/woman-consulting-a-doctor-5215008/) |
| Seguro Saúde | seguro-saude-institucional.webp | [Cedric Fauntleroy / Pexels 4266930](https://www.pexels.com/photo/a-woman-talking-to-her-doctor-4266930/) |
| Empresarial e Sobre | empresarial-institucional.webp | [fauxels / Pexels 3184339](https://www.pexels.com/photo/man-wearing-brown-suit-jacket-3184339/) |
| Transportes | transportes-institucional.webp | [Tiger Lily / Pexels 4487383](https://www.pexels.com/photo/workers-walking-along-aisle-in-warehouse-4487383/) |
| Engenharia | engenharia-institucional.webp | [Alejandro Vergara / Pexels 37779772](https://www.pexels.com/photo/female-engineer-inspecting-construction-site-37779772/) |

As páginas de origem indicam uso gratuito sob a [licença Pexels](https://www.pexels.com/license/),
verificada nesta etapa, que permite uso comercial sujeito às suas restrições.
Não se presume endosso, vínculo profissional, relação de cliente ou sede da empresa.
Retratos são ilustrativos; nenhuma identificação, dado de saúde ou história real
é atribuída às pessoas. Fotografias não foram geradas nem editadas por IA.

Foram inspecionadas visualmente e exportadas em WebP (qualidade 82), entre 62 e
129 KB. Plano de Saúde foi recortada para excluir uma embalagem de medicamento;
Transportes, para excluir embalagens com identificação. A escolha dos recortes
preserva o assunto sem incorporar marcas de terceiros. Coordenadas, dimensões,
fontes e hashes estão em public/images/photo-sources.json.

Consórcio reaproveita a fotografia consultiva já existente; Vida, a família no
parque. Os oito assuntos têm oito fotografias distintas, reutilizadas no catálogo
e na página correspondente. Não há consultas a bancos de imagens no navegador.
Next/Image utiliza sizes responsivos, preload no hero e carregamento tardio dos
cards. Imagens complementares decorativas têm alt vazio e os heroes indicam
visualmente seu caráter ilustrativo. Logos e grafismos oficiais não foram alterados.

## Revisão editorial posterior
As legendas públicas de imagem ilustrativa foram substituídas por assinaturas
da marca a pedido do cliente. A origem e o caráter de banco de imagens permanecem
neste documento. As fotografias das páginas internas têm alt descritivo da cena;
não identificam as pessoas como equipe ou clientes. O footer incorpora o SVG
original da Unti Digital fornecido pelo cliente; origem e aplicação em content-and-seo.md.

## Chatbot
Ícone WhatsApp solicitado em SVG local, sem geração ou redesenho. Fonte:
[WhatsApp.svg / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:WhatsApp.svg),
com origem no site oficial registrada na ficha. Download preservado em
frontend/public/logos/whatsapp.svg; SHA-256
DD6A4DB2C394CA11AA8AB087369F2F50A12E6F874E49DB7B1D5609D0A8FB28CA.
A cor própria desse ícone permanece restrita à marca de plataforma solicitada;
os tokens e a interface do chat mantêm a identidade Nova Proposta. O ícone não
indica que exista WhatsApp configurado: o envio permanece desativado. Ver chatbot.md.
