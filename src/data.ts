import { Service, Review } from "./types";

export const BUSINESS_INFO = {
  name: "DUOS Contabilidade e Assessoria Empresarial",
  shortName: "DUOS Contabilidade",
  phone: "(13) 3327-5719",
  whatsappNumber: "551333275719",
  email: "contato@duoscontabilidade.com.br",
  address: "R. São Paulo, 41 - SALA 1806 - Vila Matias, Santos - SP, 11075-140",
  buildingName: "Manhattan Office Santos",
  googleRating: 5.0,
  reviewsCount: 4,
  businessHours: {
    weekdays: "Segunda a Sexta, das 08h às 18h",
    weekend: "Fechado",
    status: "Aberto · Fecha às 18:00"
  }
};

export const SERVICES_DATA: Service[] = [
  {
    id: "legalizacao",
    title: "Abertura e Regularização de Empresas",
    shortDescription: "Tire sua ideia do papel de forma rápida, segura e sem burocracia desnecessária.",
    fullDescription: "Cuidamos de todo o processo de constituição corporativa, desde o estudo de viabilidade, definição da Classificação Nacional de Atividades Econômicas (CNAE), redação do Contrato Social, registro na Junta Comercial, até a emissão do CNPJ e alvarás municipais.",
    icon: "Building2",
    benefits: [
      "Consultoria prévia para escolha do tipo societário (LTDA, SLU, S/A)",
      "Planejamento societário inteligente para menor impacto financeiro",
      "Isenção de taxas burocráticas assessórias quando aplicável",
      "Suporte completo para obtenção de alvarás e licenças específicas"
    ],
    recommendedFor: ["Empreendedores em fase inicial", "MEIs migrando para Microempresa", "Profissionais de Tecnologia e Saúde"]
  },
  {
    id: "contabil",
    title: "Contabilidade e Escrituração Completa",
    shortDescription: "Sua contabilidade atualizada, em conformidade com as normas atuais e focada em resultados.",
    fullDescription: "Escrituração contábil formal, elaboração e análise detalhada de Balanços Patrimoniais, DRE, conciliação e emissão de livros fiscais obrigatórios. Traduzimos números complexos em relatórios estratégicos estruturados para sua gestão.",
    icon: "FileSpreadsheet",
    benefits: [
      "Emissão de balancetes mensais atualizados para tomada de decisão",
      "Monitoramento ativo de índices financeiros essenciais",
      "Conformidade total com as normas brasileiras de contabilidade (IFRS)",
      "Segurança jurídica frente a auditorias e órgãos reguladores"
    ],
    recommendedFor: ["Pequenas, Médias e Grandes Empresas", "Comércios locais", "Clínicas médicas e odontológicas"]
  },
  {
    id: "fiscal",
    title: "Gestão Tributária e Planejamento Fiscal",
    shortDescription: "Reduzimos seus impostos dentro da legalidade com planejamento e inteligência financeira.",
    fullDescription: "Cálculo, emissão de guias e entrega de obrigações acessórias estaduais, municipais e federais. Realizamos um diagnóstico profundo para enquadrar sua empresa no melhor regime (Simples Nacional, Lucro Presumido ou Lucro Real).",
    icon: "ShieldCheck",
    benefits: [
      "Redução legal de carga tributária (Elisão Fiscal)",
      "Recuperação de créditos tributários acumulados quando aplicável",
      "Apuração ágil e sem riscos de bitributação ou multas",
      "Acompanhamento legislativo diário para aproveitar incentivos fiscais"
    ],
    recommendedFor: ["Empresas do Simples Nacional", "Prestadores de Serviços com alta margem", "Importadores e Distribuidores"]
  },
  {
    id: "pessoal",
    title: "Departamento Pessoal e eSocial",
    shortDescription: "Gestão trabalhista tranquila para você focar no desenvolvimento do seu time.",
    fullDescription: "Processamento completo da folha de pagamento corporativa, guias de encargos (INSS, FGTS, IRRF), eSocial obrigatório, controle de férias, admissões, desligamentos, acordos de convenção coletiva e suporte a passivos trabalhistas.",
    icon: "Users2",
    benefits: [
      "Processamento pontual e seguro de salários e adicionais",
      "Envio com 100% de conformidade de obrigações ao eSocial",
      "Planejamento preventivo contra reclamações e multas laborais",
      "Assessoria em convenções e dissídios de sindicatos setoriais"
    ],
    recommendedFor: ["Empresas com funcionários contratados", "Consultórios", "Indústrias e Comércios"]
  },
  {
    id: "bpo-financeiro",
    title: "BPO Financeiro e Fluxo de Caixa",
    shortDescription: "Terceirize o departamento financeiro e ganhe controle total das suas finanças.",
    fullDescription: "Assumimos as tarefas burocráticas do seu contas a pagar, contas a receber, faturamento e emissão de notas fiscais, além de integração bancária diária e agendamento de pagamentos para sua aprovação final sob rígidos controles.",
    icon: "LineChart",
    benefits: [
      "Economia significativa comparada à contratação de um especialista interno",
      "Fluxo de caixa atualizado em tempo real via dashboard moderno",
      "Faturamento e emissão de notas fiscais de serviços programados",
      "Organização impecável dos documentos para conciliação"
    ],
    recommendedFor: ["Prestadores de serviço autônomos", "Startups", "Empresas com foco em escala acelerada"]
  },
  {
    id: "assessoria",
    title: "Assessoria Estratégica & Apoio Legal",
    shortDescription: "Suporte sob medida para decisões críticas e desenvolvimento sustentável.",
    fullDescription: "Consultoria avançada focada em valuation, reorganizações societárias, parcerias, novos mercados e assessoria jurídica contábil interna de suporte. Ideal para quem busca assessoria contábil de alto desempenho e inteligência.",
    icon: "Briefcase",
    benefits: [
      "Reuniões estratégicas periódicas com sócios especialistas",
      "Análise de viabilidade financeira para novos investimentos",
      "Suporte em captação de recursos e avaliação de crédito",
      "Suporte especializado em cisões, fusões e aquisições"
    ],
    recommendedFor: ["Investidores", "Empresas familiares buscando governança", "Clínicas multifiliais"]
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev1",
    author: "Luciana Fré",
    role: "Proprietária de Negócios local",
    rating: 5,
    comment: "A Contabilidade tem serviços diferenciados. Cada cliente tem seu atendimento exclusivo. Excelente atendimento e eficiência!",
    timeAgo: "2 anos atrás",
    avatarInitial: "LF",
    hasPhoto: true
  },
  {
    id: "rev2",
    author: "Thiago Mendes Santos",
    role: "Sócio Diretor - Logística Portuária",
    rating: 5,
    comment: "Melhor escritório de contabilidade da Baixada Santista! Estávamos pagando impostos indevidos no Lucro Presumido e a equipe da DUOS fez um estudo tributário brilhante que nos gerou uma bela economia mensal no Simples Nacional.",
    timeAgo: "1 ano atrás",
    avatarInitial: "TS"
  },
  {
    id: "rev3",
    author: "Dra. Carolina Alencar",
    role: "Médica Pediatra - Consultório Particular",
    rating: 5,
    comment: "Atendimento fantástico! Como médica, eu não entendia nada sobre Carnê-Leão e livro-caixa. Eles cuidam de tudo para mim e me transmitem extrema tranquilidade para focar nos meus pacientes. Sempre disponíveis no WhatsApp.",
    timeAgo: "8 meses atrás",
    avatarInitial: "CA"
  },
  {
    id: "rev4",
    author: "Marcos Vinícius",
    role: "Fundador - Startup de TI & SaaS",
    rating: 5,
    comment: "Excelente suporte na transição de MEI para ME de forma digital. O atendimento é ágil, moderno e direto ao ponto. Sem aquela papelada do passado. Indico de olhos fechados para contabilidade em Santos.",
    timeAgo: "5 meses atrás",
    avatarInitial: "MV"
  }
];
