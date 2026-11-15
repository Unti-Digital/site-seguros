# Logotipos oficiais extraídos do PDF

## Origem e qualidade
Extração autorizada diretamente de references/manual-marca/
MANUAL DE MARCA E APLICACAO - NOVA PROPOSTA SEGUROScópia.pdf.

A inspeção técnica com PyMuPDF confirmou desenhos vetoriais e ausência de
imagens raster embutidas nas páginas. A ausência de texto extraível se deve
às letras em traçados; a descrição anterior do PDF como imagens foi corrigida.

Os caminhos SVG foram copiados da exportação vetorial do PDF, mantendo todos
os comandos, matrizes, preenchimentos e atributos de cada traçado. Foram
excluídos apenas fundo, molduras e conteúdos externos à assinatura completa.
O viewBox enquadra o logo inteiro e uma translação ajusta a origem, sem alterar
proporções. Não houve redesenho, reconstrução de letras, recoloração, IA,
remoção raster de fundo, interpolação ou ampliação de bitmap.

## Arquivos em frontend/public/logos/
| Arquivo | Página física | Traçados | Uso |
| --- | --- | --- | --- |
| nova-proposta-seguros-principal.svg | 16 | 41 | Fundos brancos e claros; aplicado no header e footer. |
| nova-proposta-seguros-negativa.svg | 4 | 41 | Fundos escuros; reservado, não aplicado nesta Home de footer claro. |
| nova-proposta-seguros-monocromatica-azul.svg | 4 | 41 | Aplicações previstas em uma cor. |
| nova-proposta-seguros-monocromatica-preta.svg | 4 | 41 | Documentos, carimbos e aplicações específicas do manual. |

extraction-manifest.json registra SHA-256 do PDF e de cada SVG, página, limites
de origem e contagem de traçados. Cores secundárias presentes na arte original
foram preservadas; não normalizar seus preenchimentos para os tokens da interface.

Todos os SVGs são transparentes fora dos traçados. Os preenchimentos brancos
e demais cores internos fazem parte da arte e foram mantidos. As variantes
foram extraídas individualmente; a negativa não foi criada por filtro ou recoloração.

## Aplicação responsiva
BrandLogo centraliza o uso com next/image. O SVG é servido sem rasterização,
com texto alternativo e dimensões declaradas. O header carrega antecipadamente;
o footer mantém carregamento padrão. Não foi necessária dependência adicional.

Largura visual de 160 px em todas as larguras testadas, proporção natural
(altura aproximada de 105,24 px) e proteção de 10 px nos quatro lados. Na escala
usada, a altura da palavra SEGUROS é cerca de 9,1 px; 10 px supera 1X.
O header precisa de 128 px para acomodar o logo completo e sua proteção.
Não foi criado um arranjo horizontal ou removido o símbolo para caber na altura
anterior. As âncoras consideram a nova altura do header fixo.

O footer permanece Gelo e recebe a principal, conforme manual pp. 4–5.
As demais seções da Home permanecem intactas.

## Evidências e limite
Atributos de todos os 41 traçados exportados comparados com a exportação-fonte
de cada versão: preservados integralmente. Renderizações de conferência
confirmaram canais alpha com valores transparentes e opacos e foram inspecionadas.
Os arquivos são vetores escaláveis, não capturas de tela ou recortes raster.
O arquivo editável original do designer não foi fornecido, mas isso não impede
o uso dessas versões vetoriais no tamanho definido.
