import { useState } from "react";
import { Calculator, Check, ArrowRight, MessageSquare, AlertTriangle, ShieldAlert } from "lucide-react";
import { BUSINESS_INFO } from "../data";

type StepId = "profile" | "revenue" | "sector" | "outcome";

export default function TaxCalculator() {
  const [profile, setProfile] = useState<string>("autonomo"); // autonomo, mei, ltda_me
  const [revenue, setRevenue] = useState<string>("ate_6k"); // ate_6k, de_6k_a_15k, de_15k_a_50k, acima_50k
  const [sector, setSector] = useState<string>("servicos"); // servicos, comercio, industria
  const [employees, setEmployees] = useState<string>("nenhum"); // nenhum, um, mais_de_um

  // Computed recommendation values based on current states
  const getRecommendation = () => {
    let title = "Simples Nacional (ME / SLU)";
    let description = "Enquadramento altamente recomendado para sua atual margem de faturamento. Unifica até 8 impostos em uma única guia mensal (DAS).";
    let savingTip = "Se você for prestador de serviços regulamentados (Medicina, TI, Psicologia), aplicando a estratégia contábil do Fator-R na folha de pagamento corporativa conseguimos reduzir sua alíquota inicial de imposto de 15,5% para apenas 6% legalmente.";
    let urgentAlert = "";
    let services = [
      "Escrituração Contábil Digital",
      "Apuração Mensal do DAS e ISS/ICMS",
      "Emissão Mensal de Pró-Labore para Sócios",
      "Declaração de Informações Sociais e eSocial"
    ];

    if (profile === "mei") {
      if (revenue === "ate_6k") {
        title = "MEI (Microempreendedor Individual)";
        description = "Sua empresa está dentro dos limites do MEI. Você paga um valor fixo muito baixo mensalmente.";
        savingTip = "Mantenha um relatório mensal das suas vendas. Uma contabilidade regular para MEI garante que você possa distribuir 100% do seu lucro líquido de forma isenta no seu Imposto de Renda Pessoa Física (sem contabilidade regular, a isenção tributária no IRPF está limitada a apenas 8% ou 32% do faturamento).";
        services = [
          "Organização de Receitas Mensais",
          "Declaração Anual DIF-MEI compulsória",
          "Distribuição Isenta de Lucros na Pessoa Física",
          "Suporte de eSocial se contratar funcionário"
        ];
      } else {
        title = "Migração de MEI para ME (Simples Nacional)";
        description = "Atenção: Seu faturamento ultrapassou ou está no limite do teto anual do MEI (R$ 81.000 por ano, média de R$ 6.750/mês). É necessário migrar para Microempresa (ME) para evitar multas pesadas e desenquadramento retroativo de ofício pela Receita.";
        savingTip = "A DUOS realiza todo o processo burocrático de desenquadramento do MEI e alteração contratual para ME de forma tranquila, evitando tributações redundantes.";
        urgentAlert = "Sua empresa corre risco de ser autuada se mantiver o faturamento declarado acima do teto do MEI.";
        services = [
          "Desenquadramento de MEI na Junta Comercial de SP",
          "Elaboração de Contrato Social / SLU",
          "Enquadramento Estratégico no Simples Nacional",
          "Planejamento Tributário Inicial customizado"
        ];
      }
    } else if (profile === "autonomo") {
      if (revenue === "ate_6k") {
        title = "Abertura de Empresa (Simples Nacional - Anexo III)";
        description = "Como Pessoa Física Autônoma, você pode estar pagando até 27.5% de Imposto de Renda (Carnê-Leão) + 20% de INSS regular. Abrindo um CNPJ no Simples Nacional, seu imposto cai imediatamente para a partir de 6%.";
        savingTip = "Emitir Notas Fiscais via CNPJ é muito mais barato e confere excelente credibilidade profissional para fechar contratos com grandes clientes nacionais e internacionais.";
        services = [
          "Abertura Grátis de CNPJ SLU / LTDA",
          "Planejamento Tributário Comparativo PF vs PJ",
          "Isenção de taxas municipais provisórias",
          "Emissão Digital Integrada de Notas Fiscais"
        ];
      } else {
        title = "Abertura de CNPJ com Blindagem Fiscal";
        description = "Para um faturamento desse patamar, atuar na Pessoa Física é inviável e gera alto risco de fiscalização do leão. A constituição de uma Sociedade Limitada Unipessoal (SLU) protege seu patrimônio pessoal e otimiza seus impostos.";
        savingTip = "Unindo eSocial + Pró-labore estratégico você paga menos tributos federais e mantém sua contribuição previdenciária rigorosamente em dia para seguros e previdências.";
        services = [
          "Abertura ágil de CNPJ (média de 3 dias úteis)",
          "Proteção Patrimonial com SLU estruturada",
          "Atendimento de Assessoria Premium por Especialistas",
          "Planejamento Avançado de Notas Fiscais de Importação/Exportação"
        ];
      }
    } else {
      // ltda_me
      if (revenue === "acima_50k") {
        title = "Lucro Presumido ou Planejamento Misto";
        description = "Neste faturamento anual (acima de R$ 600 mil), o Simples Nacional começa a possuir faixas progressivas elevadas de taxação. O regime do Lucro Presumido pode se mostrar muito mais econômico.";
        savingTip = "Fazemos um estudo comparativo anual detalhado. Analisamos se o lucro presumido de serviços (tributado entre 11,33% a 16,33% dependendo do ISS de Santos) é mais viável que a faixa correspondente do Simples.";
        services = [
          "Escrituração Contábil Avançada Balanços de Alta Qualidade",
          "Apuração Federal de PIS, COFINS, IRPJ, CSLL e ISS local",
          "Planejamento de eSocial de Contratos CLT de alta remuneração",
          "Reuniões de Diagnóstico Trimestral presenciais no Manhattan Office"
        ];
      }
    }

    return { title, description, savingTip, urgentAlert, services };
  };

  const recResult = getRecommendation();

  const handleWhatsAppSimulationInquiry = () => {
    const profileLabels: { [key: string]: string } = {
      autonomo: "Pessoa Física / Autônomo (Quer abrir CNPJ)",
      mei: "Tenho MEI atualmente",
      ltda_me: "Tenho Empresa (ME, LTDA, EPP, etc.)"
    };

    const sectorLabels: { [key: string]: string } = {
      servicos: "Prestação de Serviços",
      comercio: "Comércio / E-commerce",
      industria: "Indústria / Outros"
    };

    const revenueLabels: { [key: string]: string } = {
      ate_6k: "Até R$ 6.500/mês",
      de_6k_a_15k: "R$ 6.500 a R$ 15.000/mês",
      de_15k_a_50k: "R$ 15.000 a R$ 50.000/mês",
      acima_50k: "Acima de R$ 50.000/mês"
    };

    const employeeLabels: { [key: string]: string } = {
      nenhum: "Não possui",
      um: "1 funcionário",
      mais_de_um: "Mais de 1 funcionário"
    };

    const text = encodeURIComponent(
      `Olá DUOS Contabilidade!\n` +
      `Realizei a simulação fiscal no site de vocês e gostaria de um orçamento personalizado.\n\n` +
      `*Meus Dados Selecionados:*\n` +
      `- *Perfil Atual:* ${profileLabels[profile]}\n` +
      `- *Ramo de Atuação:* ${sectorLabels[sector]}\n` +
      `- *Faturamento Médio:* ${revenueLabels[revenue]}\n` +
      `- *Funcionários:* ${employeeLabels[employees]}\n\n` +
      `*Recomendação do Sistema:* \n` +
      `↳ Enquadrar em: *${recResult.title}*\n\n` +
      `Gostaria de agendar uma reunião presencial ou um zoom para formalizar.`
    );

    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, "_blank", "noreferrer");
  };

  return (
    <section id="simulador" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-indigo-600 font-mono text-xs font-bold uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 flex items-center w-fit mx-auto justify-center space-x-1.5">
            <Calculator className="w-3.5 h-3.5" />
            <span>FERRAMENTA EXCLUSIVA</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Simulador Contábil & Diagnóstico Tributário Grátis
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Descubra em segundos qual é o melhor modelo societário e o regime de impostos ideal para economizar no seu negócio atual.
          </p>
        </div>

        {/* Dynamic container splits left inputs, right results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Inputs Panel (Left) */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              {/* Profile Selection */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-900 block font-display">
                  1. Qual é a situação atual da sua atividade?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: "autonomo", title: "Profissional Autônomo", sub: "Sem CNPJ ainda" },
                    { id: "mei", title: "Possuo MEI", sub: "Microempreendedor" },
                    { id: "ltda_me", title: "Possuo Empresa", sub: "ME, LTDA, ou EPP" }
                  ].map((opt) => (
                    <button
                      id={`calc-opt-${opt.id}`}
                      key={opt.id}
                      onClick={() => setProfile(opt.id)}
                      className={`p-3 rounded-xl border text-left transition-all relative ${
                        profile === opt.id
                          ? "bg-slate-900 border-slate-950 text-white shadow-md shadow-slate-900/10"
                          : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <span className="font-semibold text-xs sm:text-sm block">{opt.title}</span>
                      <span className={`text-[10px] block mt-0.5 ${profile === opt.id ? "text-slate-300" : "text-slate-500"}`}>
                        {opt.sub}
                      </span>
                      {profile === opt.id && (
                        <span className="absolute top-2 right-2 flex h-2 w-2">
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sector Selection */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-900 block font-display">
                  2. Em qual setor principal você atua?
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: "servicos", title: "Serviços em geral" },
                    { id: "comercio", title: "Vendas / Comércio" },
                    { id: "industria", title: "Indústria / Outros" }
                  ].map((opt) => (
                    <button
                      id={`calc-sector-${opt.id}`}
                      key={opt.id}
                      onClick={() => setSector(opt.id)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        sector === opt.id
                          ? "bg-slate-900 border-slate-950 text-white shadow-md shadow-slate-900/10"
                          : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <span className="font-semibold text-xs block">{opt.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Revenue Selection */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-900 block font-display">
                  3. Faturamento mensal estimado (médio):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: "ate_6k", title: "Até R$ 6.500 /mês", sub: "Adequado para MEI comum" },
                    { id: "de_6k_a_15k", title: "De R$ 6.500 a R$ 15.000 /mês", sub: "Microempresa de serviço" },
                    { id: "de_15k_a_50k", title: "De R$ 15.000 a R$ 50.000 /mês", sub: "Faturamento moderado" },
                    { id: "acima_50k", title: "Acima de R$ 50.000 /mês", sub: "Médias empresas e clínicas" }
                  ].map((opt) => (
                    <button
                      id={`calc-rev-${opt.id}`}
                      key={opt.id}
                      onClick={() => setRevenue(opt.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        revenue === opt.id
                          ? "bg-slate-900 border-slate-950 text-white shadow-sm"
                          : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <span className="font-semibold text-xs sm:text-sm block">{opt.title}</span>
                      <span className={`text-[10px] block mt-0.5 ${revenue === opt.id ? "text-slate-300" : "text-slate-500"}`}>
                        {opt.sub}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Employees selection Toggle */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-900 block font-display">
                  4. Quantidade de colaboradores (CLT):
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: "nenhum", title: "Nenhum" },
                    { id: "um", title: "Apenas 1" },
                    { id: "mais_de_um", title: "Mais de 1" }
                  ].map((opt) => (
                    <button
                      id={`calc-emp-${opt.id}`}
                      key={opt.id}
                      onClick={() => setEmployees(opt.id)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        employees === opt.id
                          ? "bg-slate-900 border-slate-950 text-white shadow-sm"
                          : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <span className="font-semibold text-xs block">{opt.title}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            <div className="bg-amber-500/10 text-amber-900 p-3.5 rounded-xl border border-amber-500/20 text-xs flex items-start space-x-2.5 italic">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <span>
                As legislações fiscais brasileiras são complexas. Este simulador fornece uma indicação matemática teórica rápida baseada nas leis federais de 2026. Recomendamos contato especializado para confirmação.
              </span>
            </div>

          </div>

          {/* Results Outcome (Right) */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-850 relative overflow-hidden">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-teal-400 font-mono text-[10px] tracking-widest font-bold uppercase block mb-1">
                  RESULTADO DA PRÉ-ANALISE TRIBUTÁRIA
                </span>
                <h3 className="font-display font-extrabold text-2xl text-slate-100">
                  {recResult.title}
                </h3>
              </div>

              {recResult.urgentAlert && (
                <div className="bg-red-950/40 border border-red-500/30 p-3.5 rounded-xl space-y-1.5 flex items-start space-x-2.5">
                  <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-red-300 text-xs font-bold block">ALERTA DE DESENQUADRAMENTO</span>
                    <p className="text-[11px] text-red-200 leading-relaxed font-light">
                      {recResult.urgentAlert}
                    </p>
                  </div>
                </div>
              )}

              {/* Recommendation Paragraph */}
              <div className="space-y-1">
                <h4 className="text-[10px] text-slate-400 uppercase tracking-widest block font-mono">Enquadramento Geral</h4>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {recResult.description}
                </p>
              </div>

              {/* Direct Strategy Savings Tip */}
              <div className="space-y-2 bg-slate-850 p-4 rounded-xl border border-slate-800">
                <span className="text-teal-400 font-bold text-xs flex items-center space-x-1.5">
                  <span className="bg-teal-400/10 text-teal-400 text-[10px] px-1.5 py-0.5 rounded-sm mr-1 font-mono uppercase">Sacada Fiscal</span>
                  Oportunidade de Economia
                </span>
                <p className="text-[12px] text-slate-300 leading-relaxed font-light">
                  {recResult.savingTip}
                </p>
              </div>

              {/* Required Checklist Services */}
              <div className="space-y-2.5">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-mono">
                  Rotina Contábil Obrigatória recomendada pela DUOS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {recResult.services.map((srv, index) => (
                    <div key={index} className="flex items-center space-x-2 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-emerald-400" />
                      </div>
                      <span className="truncate">{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Inquire on WhatsApp to validate calculation */}
            <div className="pt-8 border-t border-slate-800 mt-6 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Atendimento prioritário em Santos por especialistas</span>
                <span className="text-teal-400 font-mono font-semibold">Duos Apoio 24h</span>
              </div>
              
              <button
                id="calc-cta-whatsapp"
                onClick={handleWhatsAppSimulationInquiry}
                className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-4 px-6 rounded-xl text-sm transition-all shadow-lg hover:shadow-teal-500/20 flex items-center justify-center space-x-2.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span>Validar Simulação e Solicitar Diagnóstico</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
