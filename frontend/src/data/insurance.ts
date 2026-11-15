import type { IconName } from "@/components/ui/icon";

export type EditorialItem = { title: string; text: string };
export type InsurancePage = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  imageAlt: string;
  name: string;
  category: string;
  icon: IconName;
  title: string;
  description: string;
  eyebrow: string;
  image: string;
  imagePosition?: string;
  layout: "split" | "editorial" | "panorama" | "reverse";
  tone: "dark" | "light";
  featureStyle: "cards" | "list" | "bento";
  introTitle: string;
  intro: string[];
  featuresTitle: string;
  features: EditorialItem[];
  audienceTitle: string;
  audience: EditorialItem[];
  considerations: EditorialItem[];
  process: EditorialItem[];
  faqs: EditorialItem[];
  closingTitle: string;
  related: string[];
};

export const insurancePages: InsurancePage[] = [
  {
    slug: "automovel",
    name: "Seguro de Automóvel",
    category: "Dia a dia",
    icon: "car",
    eyebrow: "PARA OS CAMINHOS DA SUA VIDA",
    title: "Seguro de automóvel.\nCuidado em cada caminho.",
    description:
      "Seguro de automóvel para avaliar a proteção do veículo, responsabilidades e assistências de acordo com sua rotina.",
    image: "/images/automovel-institucional.webp",
    layout: "split",
    tone: "dark",
    featureStyle: "cards",
    introTitle: "A proteção começa\nantes de sair de casa.",
    intro: [
      "O carro conecta compromissos, trabalho, viagens e pessoas importantes. O seguro de automóvel ajuda a planejar a proteção diante de eventos previstos no contrato, considerando o veículo e a maneira como ele faz parte da sua vida.",
      "Uma boa comparação vai além do preço: envolve coberturas, franquia, limites para danos a terceiros e regras das assistências. Informe os condutores e o uso real do veículo para que a análise da proposta considere sua rotina. A proteção contratada será aquela descrita na apólice e nas condições do produto.",
    ],
    featuresTitle: "Um olhar para o veículo.\nE para o que está ao redor.",
    features: [
      {
        title: "O próprio veículo",
        text: "Danos decorrentes de colisão, incêndio, roubo ou furto podem compor uma proposta, conforme as coberturas disponíveis e contratadas.",
      },
      {
        title: "Responsabilidade com terceiros",
        text: "Avalie se a proposta contempla danos a terceiros e quais limites e situações estão previstos. Isso não deve ser presumido como parte de todo seguro.",
      },
      {
        title: "Apoio no caminho",
        text: "Assistências e serviços adicionais podem ser oferecidos. Confira alcance, regras de uso e eventuais limites antes de contar com eles.",
      },
    ],
    audienceTitle: "Cada rotina tem\num jeito de circular.",
    audience: [
      {
        title: "Quem usa o carro diariamente",
        text: "Para quem deseja avaliar proteção considerando seus deslocamentos habituais.",
      },
      {
        title: "Quem divide a direção",
        text: "Para rotinas com mais de um condutor, que precisam ser descritas corretamente na proposta.",
      },
      {
        title: "Quem está mudando de veículo",
        text: "Um momento para rever necessidades, dados do carro e condições de contratação.",
      },
    ],
    considerations: [
      {
        title: "Uso e condutores",
        text: "Informe corretamente os condutores e a finalidade de uso. Atividades profissionais ou usos diferentes do habitual devem ser esclarecidos na cotação.",
      },
      {
        title: "Franquias e limites",
        text: "Compare participações, limites de indenização e regras de cada cobertura, além do valor da proposta.",
      },
      {
        title: "Vigência e exclusões",
        text: "Verifique quando a proteção passa a valer, eventuais exigências de inspeção e as situações não incluídas no contrato.",
      },
    ],
    process: [
      {
        title: "Descreva sua rotina",
        text: "Separe informações do veículo, condutores e utilização para a futura cotação.",
      },
      {
        title: "Compare a proposta",
        text: "Confira coberturas, franquias e assistências descritas nos documentos.",
      },
      {
        title: "Decida com clareza",
        text: "Esclareça dúvidas e confirme as etapas de contratação antes de seguir.",
      },
    ],
    faqs: [
      {
        title: "Todo seguro de automóvel oferece as mesmas proteções?",
        text: "Não. A composição varia conforme o produto e as coberturas escolhidas. Compare os documentos e não deduza a existência de uma cobertura apenas pelo nome do seguro.",
      },
      {
        title: "O uso profissional do carro precisa ser informado?",
        text: "Descreva a utilização real do veículo na cotação. A aceitação e as condições para atividades profissionais devem ser confirmadas na proposta, sem presumir que um produto de uso particular seja adequado.",
      },
      {
        title: "A cotação já garante que meu carro está protegido?",
        text: "Não. A cotação é uma etapa de consulta. É necessário confirmar a aceitação, os documentos e o início de vigência aplicáveis à contratação.",
      },
      {
        title: "O que avaliar ao renovar o seguro do carro?",
        text: "Revise os condutores, o uso do veículo e as necessidades que mudaram desde a contratação anterior. Compare coberturas, franquias, limites e assistências da nova proposta; a renovação merece a mesma atenção de uma primeira escolha.",
      },
    ],
    closingTitle: "Vamos pensar na proteção\ndo seu próximo caminho?",
    related: ["vida", "consorcio", "empresarial"],
    seoTitle: "Seguro de Automóvel: proteção para sua rotina",
    seoDescription:
      "Conheça possibilidades do seguro de automóvel e saiba o que avaliar sobre coberturas, franquia, terceiros e assistências antes de solicitar uma cotação.",
    imageAlt:
      "Vista de uma estrada arborizada a partir do interior de um automóvel.",
  },
  {
    slug: "plano-de-saude",
    name: "Plano de Saúde",
    category: "Vida e saúde",
    icon: "health",
    eyebrow: "CUIDADO QUE FAZ PARTE DA VIDA",
    title: "Plano de saúde.\nCuidado em cada escolha.",
    description:
      "Conheça os pontos que ajudam a escolher um plano de saúde: rede, abrangência, contratação e condições de utilização.",
    image: "/images/plano-saude-institucional.webp",
    layout: "editorial",
    tone: "light",
    featureStyle: "bento",
    introTitle: "Uma escolha de saúde\npede uma conversa atenta.",
    intro: [
      "Escolher um plano de saúde é pensar no acesso ao cuidado e em como ele se encaixa na sua rotina. A rede de profissionais e estabelecimentos, a região atendida e o tipo de assistência previsto são pontos importantes para comparar propostas.",
      "Liste suas prioridades antes de olhar apenas a mensalidade: locais em que precisa de atendimento, serviços de interesse e forma de contratação. Confira também carências, coparticipação e critérios de reajuste aplicáveis. A escolha deve considerar o produto específico e suas condições, sem presumir que planos com nomes semelhantes funcionem da mesma forma.",
    ],
    featuresTitle: "O que observar\nantes de escolher.",
    features: [
      {
        title: "Rede de atendimento",
        text: "Consulte os profissionais e estabelecimentos que integram a rede do produto e confirme sua disponibilidade na região desejada.",
      },
      {
        title: "Abrangência geográfica",
        text: "Avalie as localidades atendidas e como elas se relacionam com sua rotina. O nome da modalidade não define sua abrangência.",
      },
      {
        title: "Segmentação assistencial",
        text: "Conheça os tipos de atendimento previstos no produto, sem presumir que toda proposta inclui as mesmas modalidades de assistência.",
      },
      {
        title: "Forma de contratação",
        text: "Condições de adesão e elegibilidade variam conforme o produto. A possibilidade de contratação precisa ser confirmada.",
      },
    ],
    audienceTitle: "Cuidado em diferentes\nmomentos e configurações.",
    audience: [
      {
        title: "Pessoas e famílias",
        text: "Quem deseja conhecer opções compatíveis com sua composição familiar e região.",
      },
      {
        title: "Profissionais",
        text: "Quem está revendo sua rotina e quer compreender possibilidades de contratação.",
      },
      {
        title: "Empresas",
        text: "Organizações que pretendem avaliar alternativas para seu grupo, conforme elegibilidade.",
      },
    ],
    considerations: [
      {
        title: "Carências e condições",
        text: "Confira os prazos, as condições de utilização e as regras aplicáveis à proposta. Não há promessa de atendimento imediato nesta apresentação.",
      },
      {
        title: "Custos além da mensalidade",
        text: "Verifique a existência de coparticipação, franquia ou outras previsões contratuais e como funcionam os reajustes.",
      },
      {
        title: "Produto e documentação",
        text: "Consulte as informações do plano e da operadora, leia os documentos e esclareça dúvidas sobre a rede antes da adesão.",
      },
    ],
    process: [
      {
        title: "Organize suas prioridades",
        text: "Liste região, composição do grupo e preferências de atendimento, sem enviar dados de saúde pelo formulário.",
      },
      {
        title: "Conheça o produto",
        text: "Compare rede, abrangência, segmentação e regras de contratação.",
      },
      {
        title: "Leia antes de aderir",
        text: "Confirme condições, custos e elegibilidade nos documentos da proposta.",
      },
    ],
    faqs: [
      {
        title: "Posso escolher apenas pela mensalidade?",
        text: "O valor é um dos fatores da decisão. Rede, abrangência, segmentação, forma de contratação e condições de utilização também precisam ser avaliadas na proposta.",
      },
      {
        title: "A rede é igual em todos os planos?",
        text: "Não presuma igualdade entre produtos. Consulte a rede específica e confirme os estabelecimentos e profissionais de interesse antes de contratar.",
      },
      {
        title: "Plano de Saúde e Seguro Saúde são a mesma coisa?",
        text: "Os rótulos comerciais não bastam para definir o funcionamento de um produto. Peça explicações sobre rede, eventual reembolso, abrangência e condições da proposta específica, considerando as regras aplicáveis à assistência à saúde.",
      },
      {
        title: "Como avaliar se a rede atende à minha rotina?",
        text: "Consulte a rede específica do produto e verifique os profissionais, hospitais e laboratórios de interesse, além da região atendida. Confirme essas informações antes da adesão, pois a rede e a abrangência variam entre produtos.",
      },
    ],
    closingTitle: "Sua rotina merece\numa escolha bem informada.",
    related: ["seguro-saude", "vida", "empresarial"],
    seoTitle: "Plano de Saúde: rede e condições de contratação",
    seoDescription:
      "Saiba como avaliar um plano de saúde: rede de atendimento, abrangência, carências, coparticipação e condições de contratação para suas necessidades.",
    imageAlt:
      "Uma médica conversa com uma mulher durante uma consulta em ambiente clínico.",
  },
  {
    slug: "consorcio",
    name: "Consórcio",
    category: "Planejamento",
    icon: "plan",
    eyebrow: "PLANOS QUE GANHAM DIREÇÃO",
    title: "Consórcio.\nPlaneje a próxima conquista.",
    description:
      "Entenda o consórcio como planejamento em grupo e avalie parcelas, custos e regras de contemplação antes de aderir.",
    image: "/images/atendimento-consultivo-kampus-8439657.webp",
    layout: "split",
    tone: "light",
    featureStyle: "list",
    introTitle: "Conquistas com horizonte.\nDecisões com informação.",
    intro: [
      "Algumas conquistas começam com um objetivo e tempo para se organizar. O consórcio reúne participantes em um grupo administrado para a aquisição de bens ou serviços por autofinanciamento. É uma modalidade de planejamento, com dinâmica diferente de um seguro ou de um financiamento.",
      "Antes de aderir, entenda o prazo do grupo, a composição dos pagamentos, os critérios de atualização e o funcionamento dos sorteios e lances. Avalie se essa dinâmica combina com seu orçamento e com o momento da aquisição. A contemplação segue as regras contratuais, sem promessa de crédito imediato ou de uma data específica.",
    ],
    featuresTitle: "Três pontos para\nentender a modalidade.",
    features: [
      {
        title: "Um objetivo definido",
        text: "A categoria de bem ou serviço orienta a participação no grupo. Confira o que o contrato permite adquirir e suas condições.",
      },
      {
        title: "Planejamento em grupo",
        text: "Prazo, contribuições e regras do grupo precisam ser compreendidos antes da adesão, considerando seu próprio planejamento.",
      },
      {
        title: "Contemplação",
        text: "A atribuição do crédito segue as regras de sorteios ou lances previstas no contrato. Não representa entrega imediata ou garantida em uma data específica.",
      },
    ],
    audienceTitle: "Para quem olha\npara a próxima conquista.",
    audience: [
      {
        title: "Quem planeja um bem",
        text: "Pessoas que querem conhecer alternativas para uma aquisição futura.",
      },
      {
        title: "Quem pode avaliar prazos",
        text: "Quem tem disponibilidade para considerar a dinâmica do grupo e da contemplação.",
      },
      {
        title: "Quem compara possibilidades",
        text: "Quem busca compreender custos e obrigações antes de escolher uma modalidade de aquisição.",
      },
    ],
    considerations: [
      {
        title: "Administradora e contrato",
        text: "Consulte a autorização da administradora junto ao Banco Central e leia as regras do grupo, os custos e as responsabilidades previstas no contrato.",
      },
      {
        title: "Composição dos pagamentos",
        text: "Analise taxa de administração, fundos, seguros eventualmente previstos e critérios de atualização, quando aplicáveis. Não há promessa de parcela fixa nesta página.",
      },
      {
        title: "Prazos e compromissos",
        text: "Leia as regras para contemplação, uso do crédito, desistência e devolução de valores antes de aderir.",
      },
    ],
    process: [
      {
        title: "Defina o projeto",
        text: "Identifique o bem ou serviço pretendido e o horizonte de planejamento.",
      },
      {
        title: "Entenda o grupo",
        text: "Peça informações sobre prazo, pagamentos, contemplação e contrato.",
      },
      {
        title: "Avalie com calma",
        text: "Verifique se os compromissos combinam com seu planejamento antes de aderir.",
      },
    ],
    faqs: [
      {
        title: "Consórcio é um seguro?",
        text: "Não. Trata-se de uma modalidade de autofinanciamento em grupo para a aquisição de bens ou serviços, administrada conforme contrato e regras próprias.",
      },
      {
        title: "Há garantia de contemplação imediata?",
        text: "Não há essa promessa. A contemplação acontece de acordo com os sorteios ou lances e as regras contratuais. Desconfie de uma expectativa de data que não esteja amparada pelo funcionamento do grupo.",
      },
      {
        title: "Devo considerar apenas o valor da parcela?",
        text: "Não. Entenda a composição dos pagamentos, atualizações, prazo, regras de participação e condições de utilização do crédito. A análise deve considerar o contrato como um todo.",
      },
      {
        title: "Como saber se o consórcio combina com meu objetivo?",
        text: "Considere o que deseja adquirir, o prazo em que precisa do bem ou serviço e sua capacidade de manter as contribuições. Leia as regras do grupo e avalie a dinâmica de contemplação: participar não equivale a receber o crédito imediatamente.",
      },
    ],
    closingTitle: "Qual projeto você\nquer começar a planejar?",
    related: ["automovel", "vida", "empresarial"],
    seoTitle: "Consórcio: planejamento e regras de contemplação",
    seoDescription:
      "Entenda como avaliar um consórcio: grupo, parcelas, taxas, sorteios, lances e uso do crédito. Planeje a aquisição sem presumir contemplação imediata.",
    imageAlt:
      "Duas pessoas analisam um documento durante uma conversa de planejamento.",
  },
  {
    slug: "vida",
    name: "Seguro de Vida",
    category: "Vida e saúde",
    icon: "heart",
    eyebrow: "CUIDAR É TAMBÉM PENSAR ADIANTE",
    title: "Seguro de vida.\nCuidado que olha adiante.",
    description:
      "Uma conversa sobre seguro de vida, responsabilidades e proteção financeira para as pessoas que importam para você.",
    image: "/images/familia-parque-kampus-6182114.webp",
    layout: "reverse",
    tone: "light",
    featureStyle: "cards",
    introTitle: "Seu cuidado pode\nolhar além de hoje.",
    intro: [
      "Falar de seguro de vida é reconhecer os vínculos e as responsabilidades que fazem parte da sua história. Ele pode integrar o planejamento de proteção financeira para situações previstas no contrato, considerando as pessoas que você deseja amparar e as prioridades do seu momento de vida.",
      "A escolha envolve definir quais eventos fazem sentido avaliar, compreender o capital segurado e conhecer as regras de indicação de beneficiários. Alguns produtos podem contemplar eventos em vida, conforme contratação específica. Compare as definições, os limites e as exclusões de cada cobertura para decidir com clareza.",
    ],
    featuresTitle: "Possibilidades para\nconversar com atenção.",
    features: [
      {
        title: "Proteção para beneficiários",
        text: "A cobertura por morte pode prever pagamento aos beneficiários indicados, segundo os riscos cobertos, valores e condições contratados.",
      },
      {
        title: "Situações durante a vida",
        text: "Alguns produtos oferecem proteções para eventos em vida. Consulte sua existência e critérios; elas não integram automaticamente todo seguro.",
      },
      {
        title: "Planejamento pessoal",
        text: "Definir prioridades e responsabilidades ajuda a formular perguntas sobre o produto. Seguro não substitui a análise do planejamento como um todo.",
      },
    ],
    audienceTitle: "Histórias diferentes.\nPessoas que importam.",
    audience: [
      {
        title: "Quem tem dependentes",
        text: "Pessoas que desejam avaliar alternativas relacionadas a responsabilidades familiares.",
      },
      {
        title: "Quem está em uma nova fase",
        text: "Mudanças pessoais podem ser um momento para rever prioridades de proteção.",
      },
      {
        title: "Quem quer se informar",
        text: "A conversa também faz sentido para quem ainda está conhecendo a modalidade.",
      },
    ],
    considerations: [
      {
        title: "Eventos previstos",
        text: "Leia a definição de cada cobertura, limites, carências e exclusões aplicáveis ao produto.",
      },
      {
        title: "Beneficiários e valores",
        text: "Entenda como indicar e atualizar beneficiários e como o capital está definido na proposta.",
      },
      {
        title: "Informações da contratação",
        text: "Responda corretamente às solicitações do processo formal. Compartilhe dados de saúde ou documentos sensíveis somente por canais adequados à contratação.",
      },
    ],
    process: [
      {
        title: "Olhe para suas prioridades",
        text: "Pense nas pessoas e responsabilidades que deseja considerar na conversa.",
      },
      {
        title: "Entenda as possibilidades",
        text: "Peça detalhes sobre eventos previstos, beneficiários e condições do produto.",
      },
      {
        title: "Confira cada escolha",
        text: "Leia a proposta e confirme o que foi efetivamente contratado.",
      },
    ],
    faqs: [
      {
        title: "Seguro de vida atende somente situações de falecimento?",
        text: "Depende do produto. Pode haver proteções relacionadas a eventos em vida, mas sua existência, definição e limites precisam constar na proposta e nas condições contratuais.",
      },
      {
        title: "Como escolher o valor da proteção?",
        text: "O capital contratado deve ser analisado considerando responsabilidades, objetivos e possibilidades de contratação. Esta página não indica um valor individual ou garante aceitação.",
      },
      {
        title: "Posso presumir que qualquer situação terá indenização?",
        text: "Não. A avaliação depende do evento e das coberturas e condições contratadas. Leia definições, exclusões, prazos e demais regras antes da decisão.",
      },
      {
        title: "Quando vale revisar uma proposta ou um seguro de vida?",
        text: "Mudanças na composição familiar, nas responsabilidades ou nos objetivos são oportunidades para rever as necessidades de proteção. Confira as regras para atualizar beneficiários, valores e coberturas no contrato, sem presumir alterações automáticas.",
      },
    ],
    closingTitle: "Vamos conversar sobre\nas pessoas que importam?",
    related: ["plano-de-saude", "seguro-saude", "automovel"],
    seoTitle: "Seguro de Vida: proteção para pessoas e planos",
    seoDescription:
      "Entenda o seguro de vida e o que avaliar sobre beneficiários, capital segurado, eventos cobertos e condições antes de escolher uma proposta.",
    imageAlt: "Uma família compartilha um momento de proximidade em um parque.",
  },
  {
    slug: "seguro-saude",
    name: "Seguro Saúde",
    category: "Vida e saúde",
    icon: "health-shield",
    eyebrow: "SAÚDE COM ESCOLHAS CONSCIENTES",
    title: "Seguro saúde.\nClareza para cuidar de você.",
    description:
      "Avalie o funcionamento do seguro saúde, da rede de atendimento às regras de eventual reembolso e utilização.",
    image: "/images/seguro-saude-institucional.webp",
    imagePosition: "center 58%",
    layout: "reverse",
    tone: "dark",
    featureStyle: "list",
    introTitle: "O nome do produto\né só o começo da conversa.",
    intro: [
      "O seguro saúde merece uma análise que conecte suas necessidades ao funcionamento real da proposta. Rede de atendimento, abrangência geográfica, acesso aos serviços e eventual reembolso ajudam a entender como o produto pode se relacionar com a sua rotina de cuidado.",
      "Quando houver previsão de reembolso, confira os limites, os procedimentos e a documentação exigida. Isso não significa livre escolha irrestrita ou devolução integral de qualquer despesa. Compare também condições de adesão e utilização: Plano de Saúde e Seguro Saúde permanecem apresentados separadamente, e a avaliação deve se apoiar nos documentos de cada produto.",
    ],
    featuresTitle: "Clareza sobre\ncomo o cuidado funciona.",
    features: [
      {
        title: "Rede e acesso",
        text: "Verifique os prestadores disponíveis e a forma prevista para acessar os serviços, conforme o produto.",
      },
      {
        title: "Eventual reembolso",
        text: "Quando previsto, o reembolso segue critérios, documentação e limites. Sua existência não significa restituição integral de qualquer despesa.",
      },
      {
        title: "Abrangência e utilização",
        text: "Considere a região atendida e as condições para utilização da assistência nos documentos de contratação.",
      },
    ],
    audienceTitle: "Uma avaliação que\nparte da sua realidade.",
    audience: [
      {
        title: "Pessoas e famílias",
        text: "Quem quer compreender alternativas de assistência e seus critérios de utilização.",
      },
      {
        title: "Profissionais",
        text: "Quem considera sua rotina e preferências na avaliação de um produto de saúde.",
      },
      {
        title: "Grupos elegíveis",
        text: "Quem pretende conhecer possibilidades coletivas, sujeitas às condições de contratação.",
      },
    ],
    considerations: [
      {
        title: "Não presumir reembolso",
        text: "Peça explicações sobre sua previsão, limites e procedimento. Nem toda despesa ou prestador poderá ser reembolsável.",
      },
      {
        title: "Prazos e custos",
        text: "Confira carências, coparticipações e demais custos e condições eventualmente aplicáveis ao produto.",
      },
      {
        title: "Contrato e rede",
        text: "Consulte os documentos e a rede específica. Esclareça as diferenças entre as propostas que estiver comparando.",
      },
    ],
    process: [
      {
        title: "Defina o que avaliar",
        text: "Liste região, pessoas envolvidas e dúvidas sobre rede e utilização.",
      },
      {
        title: "Examine o funcionamento",
        text: "Conheça as condições de atendimento e eventual reembolso da proposta.",
      },
      {
        title: "Confirme os detalhes",
        text: "Verifique elegibilidade e documentos antes de decidir sobre a contratação.",
      },
    ],
    faqs: [
      {
        title: "Seguro Saúde garante reembolso integral?",
        text: "Não há essa garantia nesta apresentação. Quando existe previsão de reembolso, ela depende de regras, documentos e limites do produto específico.",
      },
      {
        title: "Posso utilizar qualquer profissional ou estabelecimento?",
        text: "Não presuma acesso irrestrito. Confirme a rede, a forma de atendimento e as condições de eventual utilização fora dela.",
      },
      {
        title: "O que comparar com uma proposta de Plano de Saúde?",
        text: "Compare o funcionamento concreto: rede, abrangência, segmentação, condições de adesão, custos e eventual reembolso. Os nomes comerciais não substituem a leitura dos documentos.",
      },
      {
        title: "Quais perguntas fazer sobre reembolso?",
        text: "Pergunte se o produto prevê reembolso, quais despesas podem ser consideradas, como os limites são calculados e qual documentação é exigida. Confirme também os procedimentos e prazos previstos no contrato antes de contar com essa possibilidade.",
      },
    ],
    closingTitle: "Sua próxima escolha\ncomeça com uma boa pergunta.",
    related: ["plano-de-saude", "vida", "empresarial"],
    seoTitle: "Seguro Saúde: atendimento e eventual reembolso",
    seoDescription:
      "Conheça os pontos para avaliar um seguro saúde: rede, abrangência, utilização e eventual reembolso, conforme as condições do produto escolhido.",
    imageAlt:
      "Uma mulher conversa com um profissional de saúde durante uma consulta.",
  },
  {
    slug: "empresarial",
    name: "Seguro Empresarial",
    category: "Seu negócio",
    icon: "building",
    eyebrow: "CUIDADO COM O QUE VOCÊ CONSTRÓI",
    title: "Seguro empresarial.\nProteção para seguir.",
    description:
      "Seguro empresarial começa pelo entendimento da atividade, do patrimônio e dos riscos que fazem parte da operação.",
    image: "/images/empresarial-institucional.webp",
    layout: "panorama",
    tone: "dark",
    featureStyle: "bento",
    introTitle: "Conhecer a operação\né parte da proteção.",
    intro: [
      "Por trás de um negócio existem pessoas, decisões e um patrimônio construído todos os dias. O seguro empresarial permite avaliar possibilidades de proteção para eventos previstos no contrato, a partir da atividade, das instalações e dos bens que sustentam a operação.",
      "Uma loja, um escritório e uma empresa com estoque podem ter necessidades diferentes. Descreva o funcionamento do negócio, identifique os bens relevantes e considere os impactos de um imprevisto. Essa visão ajuda a comparar coberturas, limites, franquias e exclusões, sem presumir que um único produto contemple todos os riscos.",
    ],
    featuresTitle: "Um olhar conectado\na diferentes partes da operação.",
    features: [
      {
        title: "Estrutura e patrimônio",
        text: "Imóvel, instalações e conteúdo podem ser objeto de análise, conforme o interesse segurável e as condições disponíveis.",
      },
      {
        title: "Equipamentos e estoque",
        text: "Avalie como os bens utilizados na operação são descritos e se há previsão adequada na proposta.",
      },
      {
        title: "Responsabilidades",
        text: "Coberturas relacionadas a danos a terceiros podem exigir contratação e critérios específicos. Não as presuma como incluídas.",
      },
      {
        title: "Eventos que afetam a rotina",
        text: "Converse sobre os riscos relevantes para a atividade e verifique quais deles podem ser considerados no produto.",
      },
    ],
    audienceTitle: "A operação muda.\nA análise precisa acompanhar.",
    audience: [
      {
        title: "Comércio e serviços",
        text: "Estabelecimentos que querem avaliar riscos relacionados ao local e à atividade.",
      },
      {
        title: "Escritórios e profissionais",
        text: "Operações que utilizam espaços, equipamentos e estruturas de trabalho.",
      },
      {
        title: "Empresas em transformação",
        text: "Negócios em expansão ou mudança de endereço, estoque ou atividade.",
      },
    ],
    considerations: [
      {
        title: "Atividade e endereço",
        text: "Descreva corretamente a operação, os locais e as medidas existentes. Mudanças relevantes devem ser esclarecidas no processo de contratação.",
      },
      {
        title: "Bens e valores",
        text: "Organize informações sobre o patrimônio e confirme os critérios e limites previstos na proposta.",
      },
      {
        title: "Escopo da proteção",
        text: "Conheça franquias, exclusões e condições de cada cobertura. Produtos distintos podem ser necessários para necessidades diferentes.",
      },
    ],
    process: [
      {
        title: "Mapeie a operação",
        text: "Reúna uma descrição da atividade e dos bens a considerar na cotação.",
      },
      {
        title: "Converse sobre os riscos",
        text: "Analise possibilidades coerentes com o contexto e as condições disponíveis.",
      },
      {
        title: "Leia a composição",
        text: "Confira bens, coberturas, limites e locais descritos antes da decisão.",
      },
    ],
    faqs: [
      {
        title: "Uma proposta atende qualquer tipo de empresa?",
        text: "Não. A análise depende da atividade, do local, dos bens e das condições disponíveis. A descrição correta da operação é essencial para avaliar a proposta.",
      },
      {
        title: "Equipamentos e estoque estão sempre incluídos?",
        text: "Não devem ser presumidos como incluídos. Confirme como esses bens aparecem na proposta e quais limites e condições estão previstos.",
      },
      {
        title: "Crescimento ou mudança de endereço merecem revisão?",
        text: "Mudanças na operação podem alterar as necessidades de proteção. Esclareça a nova situação e consulte as condições para atualização do contrato.",
      },
      {
        title: "Como preparar as informações para uma cotação empresarial?",
        text: "Organize uma descrição da atividade, dos locais de operação e dos bens que deseja avaliar, como instalações, equipamentos e estoque. A cotação formal poderá solicitar informações adicionais conforme o produto e as características do negócio.",
      },
    ],
    closingTitle: "Vamos olhar com atenção\npara o seu negócio?",
    related: ["transportes", "engenharia", "vida"],
    seoTitle: "Seguro Empresarial: patrimônio e operação",
    seoDescription:
      "Conheça possibilidades do seguro empresarial e saiba avaliar patrimônio, equipamentos, estoque, responsabilidades e condições para seu negócio.",
    imageAlt:
      "Pessoas discutem ideias ao redor de uma mesa em um escritório contemporâneo.",
  },
  {
    slug: "transportes",
    name: "Seguro de Transportes",
    category: "Seu negócio",
    icon: "truck",
    eyebrow: "CUIDADO EM CADA ETAPA DO PERCURSO",
    title: "Seguro de transportes.\nCuidado em cada trajeto.",
    description:
      "Entenda as possibilidades de seguro de transportes considerando mercadoria, percurso e responsabilidades da operação.",
    image: "/images/transportes-institucional.webp",
    layout: "split",
    tone: "dark",
    featureStyle: "list",
    introTitle: "A proteção acompanha\na análise da operação.",
    intro: [
      "Uma mercadoria em movimento carrega compromissos com clientes, fornecedores e com o próprio negócio. Avaliar um seguro de transportes começa por entender o que será transportado, seu valor, as condições de acondicionamento e o percurso da operação.",
      "O interesse sobre a carga e a responsabilidade do transportador são questões distintas. Identifique o papel de cada parte e compare o objeto, os riscos previstos e as obrigações do produto adequado à operação. Essa leitura ajuda a esclarecer limites e exigências sem tratar modalidades diferentes como se fossem equivalentes.",
    ],
    featuresTitle: "Do ponto de partida\nà leitura da proposta.",
    features: [
      {
        title: "Mercadoria e características",
        text: "Natureza, valor, acondicionamento e demais particularidades da carga precisam ser considerados na análise.",
      },
      {
        title: "Percurso e modalidade",
        text: "Origem, destino e forma de transporte ajudam a delimitar a operação a ser apresentada na cotação.",
      },
      {
        title: "Responsabilidades envolvidas",
        text: "Identifique o papel de cada parte e o interesse a proteger. A cobertura depende do produto e das condições específicas.",
      },
    ],
    audienceTitle: "Quem movimenta valores\nprecisa entender os riscos.",
    audience: [
      {
        title: "Empresas embarcadoras",
        text: "Negócios que desejam avaliar proteção relacionada às suas mercadorias.",
      },
      {
        title: "Operações de distribuição",
        text: "Atividades com fluxos de carga e necessidades logísticas a esclarecer.",
      },
      {
        title: "Transportadores",
        text: "Profissionais e empresas que precisam consultar a modalidade e as obrigações aplicáveis à sua operação.",
      },
    ],
    considerations: [
      {
        title: "Produto e responsabilidade",
        text: "Confirme qual interesse está sendo analisado e quem deve contratar. Não presuma que um produto substitua outro ou atenda automaticamente exigências legais.",
      },
      {
        title: "Declaração da operação",
        text: "Informe as características e o fluxo de transporte e conheça as exigências de comunicação e documentação do produto.",
      },
      {
        title: "Limites e medidas",
        text: "Confira exclusões, limites, participações e eventuais medidas de gerenciamento de risco previstas na contratação.",
      },
    ],
    process: [
      {
        title: "Descreva a carga",
        text: "Organize informações gerais sobre mercadorias e seu papel na operação.",
      },
      {
        title: "Apresente o percurso",
        text: "Explique origem, destino, frequência e meios de transporte envolvidos.",
      },
      {
        title: "Confira o escopo",
        text: "Avalie o produto, as responsabilidades e as exigências antes de contratar.",
      },
    ],
    faqs: [
      {
        title:
          "Seguro da carga e responsabilidade do transportador são iguais?",
        text: "Não devem ser tratados como equivalentes. É necessário identificar o interesse protegido, o papel das partes e o produto aplicável à operação específica.",
      },
      {
        title: "Qualquer mercadoria pode ser considerada na mesma proposta?",
        text: "A natureza da mercadoria faz parte da análise. Descreva suas características e confirme os critérios de aceitação, acondicionamento e limites do produto.",
      },
      {
        title: "Esta página confirma o atendimento de obrigações legais?",
        text: "Não. As exigências aplicáveis precisam ser verificadas para a operação e para o contratante. Esta apresentação geral não substitui análise técnica ou contratual.",
      },
      {
        title: "Quais informações ajudam a avaliar o seguro de transportes?",
        text: "Natureza e valor da mercadoria, origem, destino, forma de transporte e acondicionamento são pontos iniciais. A descrição completa da operação ajuda a verificar a modalidade aplicável e os documentos necessários à cotação formal.",
      },
    ],
    closingTitle: "Vamos entender a proteção\npara a sua operação?",
    related: ["empresarial", "automovel", "engenharia"],
    seoTitle: "Seguro de Transportes: cargas e responsabilidades",
    seoDescription:
      "Saiba o que avaliar no seguro de transportes: mercadorias, percursos, responsabilidades, limites e condições de proteção para cada operação.",
    imageAlt:
      "Profissionais caminham entre corredores de mercadorias em um armazém logístico.",
  },
  {
    slug: "engenharia",
    name: "Seguro de Engenharia",
    category: "Seu negócio",
    icon: "engineering",
    eyebrow: "PARA PROJETOS QUE ESTÃO TOMANDO FORMA",
    title: "Seguro de engenharia.\nPlanejar também é proteger.",
    description:
      "Conheça possibilidades do seguro de engenharia para avaliar riscos de obras e projetos, do escopo ao cronograma.",
    image: "/images/engenharia-institucional.webp",
    imagePosition: "40% center",
    layout: "panorama",
    tone: "dark",
    featureStyle: "cards",
    introTitle: "Planejar a obra também\né pensar nos imprevistos.",
    intro: [
      "Toda obra reúne etapas, recursos e responsabilidades que precisam conversar entre si. O seguro de engenharia permite avaliar a proteção para riscos previstos no contrato, considerando o tipo de projeto, o local, o período e as características da execução.",
      "O ponto de partida é descrever o escopo e o cronograma, os bens envolvidos e a relação da obra com seu entorno. Coberturas para materiais, equipamentos ou responsabilidades dependem do produto e da contratação. O seguro não substitui o planejamento técnico nem deve ser entendido como garantia automática de conclusão, prazo ou proteção para qualquer evento.",
    ],
    featuresTitle: "Um olhar para o projeto.\nDo escopo à execução.",
    features: [
      {
        title: "Obra e etapas",
        text: "O tipo de obra e suas fases ajudam a delimitar o objeto da análise e o período a considerar na proposta.",
      },
      {
        title: "Bens e equipamentos",
        text: "Materiais e equipamentos podem exigir descrições e condições próprias. Sua inclusão precisa ser confirmada nos documentos.",
      },
      {
        title: "Responsabilidades e entorno",
        text: "Converse sobre a atividade e sua relação com terceiros, verificando quais situações podem ser consideradas pelo produto.",
      },
    ],
    audienceTitle: "Para quem transforma\nprojetos em realidade.",
    audience: [
      {
        title: "Responsáveis pelo empreendimento",
        text: "Quem precisa conhecer possibilidades de proteção para um projeto específico.",
      },
      {
        title: "Empresas de construção",
        text: "Operações que desejam avaliar o escopo de uma proposta para suas obras.",
      },
      {
        title: "Projetos em planejamento",
        text: "Quem pode organizar informações de cronograma e características antes da contratação.",
      },
    ],
    considerations: [
      {
        title: "Escopo e cronograma",
        text: "Informe as características, etapas e prazos do projeto. Verifique como mudanças devem ser comunicadas.",
      },
      {
        title: "Limites da proposta",
        text: "Leia os riscos previstos, exclusões e participações. Não presuma proteção para atrasos, falhas ou qualquer evento sem previsão contratual.",
      },
      {
        title: "Documentação técnica",
        text: "Organize as características e os documentos técnicos do projeto para a cotação formal. O escopo do seguro deve ser analisado junto às condições específicas da obra.",
      },
    ],
    process: [
      {
        title: "Apresente o projeto",
        text: "Organize uma descrição inicial da obra e da etapa em que ela se encontra.",
      },
      {
        title: "Delimite a análise",
        text: "Esclareça cronograma, responsabilidades e bens que pretende considerar.",
      },
      {
        title: "Revise o contrato",
        text: "Confira as condições e o período de proteção antes de decidir.",
      },
    ],
    faqs: [
      {
        title: "O seguro garante a conclusão da obra?",
        text: "Não se deve presumir essa garantia. Os objetivos e os riscos cobertos dependem do produto e das condições contratadas. Esta página não apresenta garantia de conclusão ou cumprimento de prazo.",
      },
      {
        title: "Posso considerar o mesmo produto para qualquer projeto?",
        text: "O tipo, a etapa e as características do projeto precisam ser analisados. A adequação e a aceitação de uma proposta não são confirmadas por esta apresentação geral.",
      },
      {
        title: "Mudanças no cronograma precisam ser avaliadas?",
        text: "Alterações de prazo ou de escopo devem ser esclarecidas conforme as condições do contrato. Não presuma que a proteção se estenda automaticamente a uma nova etapa ou duração.",
      },
      {
        title: "Por que avaliar os riscos ainda no planejamento da obra?",
        text: "Conhecer etapas, características do local e responsabilidades desde o planejamento ajuda a organizar as informações para a cotação. A proteção efetiva depende da aceitação, dos documentos, do período e das condições contratadas; não se presume cobertura para fases anteriores.",
      },
    ],
    closingTitle: "Seu projeto merece\num olhar cuidadoso.",
    related: ["empresarial", "transportes", "vida"],
    seoTitle: "Seguro de Engenharia: riscos de obras e projetos",
    seoDescription:
      "Entenda o que avaliar no seguro de engenharia: características da obra, etapas, equipamentos, responsabilidades, cronograma e condições do contrato.",
    imageAlt:
      "Profissional de engenharia com capacete acompanha uma obra em andamento.",
  },
];

export function getInsurance(slug: string) {
  return insurancePages.find((page) => page.slug === slug);
}
