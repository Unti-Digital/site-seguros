# Revisão editorial e SEO institucional

Home e doze páginas revisadas, mantendo o layout, fotografias, grafismos e
animações. Títulos, descrições, introduções e perguntas frequentes das oito
modalidades foram aprimorados. A página Sobre apresenta propósito e princípios,
sem atribuir história, certificações, resultados ou estrutura operacional não confirmados.

Os títulos principais das modalidades agora identificam o assunto. Metadados
específicos ficam nos campos seoTitle/seoDescription de data/insurance.ts,
separados das descrições curtas dos cards. Há quatro FAQs por modalidade.
Sobre e Home conectam o conteúdo ao catálogo e a modalidades individuais.
Imagens editoriais das páginas internas recebem descrições naturais de cena,
sem palavras-chave artificiais nem atribuição das pessoas retratadas à empresa.
Composições estritamente decorativas da Home mantêm alt vazio e aria-hidden.

Avisos editoriais de conteúdo provisório e legendas IMAGEM ILUSTRATIVA foram
substituídos por conteúdo útil. O caráter de fotografia de banco permanece
documentado em visual-assets.md. Não se pressupõe vínculo ou endosso.

Os avisos de envio indisponível, demonstração local e uso de dados fictícios foram
removidos da interface em 18/11/2026. Formulário e chatbot usam linguagem de
revisão, sem mensagem de sucesso ou afirmação de recebimento. A caixa registra
ciência do aviso de privacidade e cuidado com dados sensíveis, sem simular prova
jurídica de consentimento.
A página de privacidade preserva aviso de documento não definitivo, noindex e
exclusão do sitemap. As lacunas operacionais e jurídicas não foram ocultadas
por declarações falsas de conformidade. Não houve habilitação de indexação,
integração, analytics ou envio real nesta revisão; essa limitação permanece
registrada na documentação técnica.

## Fontes de orientação geral
- [SUSEP: como escolher um seguro](https://www.gov.br/susep/pt-br/assuntos/meu-futuro-seguro/seguros-previdencia-e-capitalizacao/seguros/informacoes-importantes).
- [ANS: contratação e regras de planos de saúde](https://www.gov.br/ans/pt-br/assuntos/contratante/contratacao-regras-planos-de-saude).
- [Banco Central: administradoras de consórcio](https://www.bcb.gov.br/estabilidadefinanceira/administradoraconsorcio).

## Créditos e recursos
Footer: © 2026 Nova Proposta Seguros | Todos os direitos reservados.
Crédito Dev. & Design by com SVG original fornecido pelo cliente, salvo em
frontend/public/logos/unti-digital-horizontal.svg, sem alteração de paths ou cores.
Origem: https://www.untidigital.com.br/images/logo-horizontal.svg.
Destino solicitado: https://www.untidigital.com.br/p, com target blank e
rel noopener noreferrer. Recurso externo autorizado especificamente para crédito;
não constitui ampliação da paleta da Nova Proposta. Sem novas dependências.

## Informações que dependem do cliente
Contatos oficiais, razão social/CNPJ e controlador; política definitiva,
finalidades/bases legais, retenção, fornecedores e canal dos titulares;
catálogo comercial e funcionamento dos produtos de saúde; processo e receptor
de solicitações; domínio e aprovação para indexação. Não foram inventados.

## Evidências da revisão
ESLint, TypeScript e build aprovados; nenhuma dependência adicional instalada.
Teste de textos, crédito e modal em 390, 768 e 1440 px: sem etiquetas editoriais
provisórias nas páginas comerciais, copyright exato, destino e atributos do link
conferidos e SVG carregado. Modal preserva seleção de modalidade e cinco erros
quando os demais campos estão vazios; Escape fecha corretamente.
Créditos também inspecionados por captura no servidor de desenvolvimento.
Revisão completa de rotas, SEO, links e axe-core registrada em testing.md.
