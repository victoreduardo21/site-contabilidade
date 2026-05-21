import { useState, useEffect } from "react";
import { TrendingDown, HelpCircle, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "../types";

type RamoType = "servicos" | "comercio" | "pf";

export default function Simulator() {
  const [faturamento, setFaturamento] = useState<number>(35000);
  const [ramo, setRamo] = useState<RamoType>("servicos");
  const [regime, setRegime] = useState<string>("simples");
  
  const [impostoAtual, setImpostoAtual] = useState<number>(0);
  const [impostoOtimizado, setImpostoOtimizado] = useState<number>(0);
  const [economiaMensal, setEconomiaMensal] = useState<number>(0);

  useEffect(() => {
    let taxaAtual = 0.15; // default PF or bad enquadramento
    let taxaOtimizada = 0.06; // optimized Simples / Anexo III

    if (ramo === "servicos") {
      taxaAtual = regime === "pf" ? 0.275 : 0.11; // PF vs. Lucro Presumido or bad enquadramento
      taxaOtimizada = 0.06; // Fator R or optimized Simples Nacional
    } else if (ramo === "comercio") {
      taxaAtual = 0.09;
      taxaOtimizada = 0.04;
    } else if (ramo === "pf") {
      taxaAtual = 0.22;
      taxaOtimizada = 0.06; // transiting to CNPJ
    }

    const calculadoAtual = faturamento * taxaAtual;
    const calculadoOtimizado = faturamento * taxaOtimizada;
    
    setImpostoAtual(calculadoAtual);
    setImpostoOtimizado(calculadoOtimizado);
    setEconomiaMensal(calculadoAtual - calculadoOtimizado);
  }, [faturamento, ramo, regime]);

  const formatCurrency = (val: number) => {
    return val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const handleWhatsAppSavings = () => {
    const text = encodeURIComponent(
      `Olá! Utilizei o simulador fiscal no site de vocês. Com o faturamento de ${formatCurrency(faturamento)} no ramo de *${ramo === "servicos" ? "Serviços" : "Comércio"}*, o simulador indicou uma economia média de *${formatCurrency(economiaMensal)}/mês*. Gostaria de saber como conseguir essa otimização legal!`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="simulador" className="py-20 relative bg-slate-950/20 border-b border-white/5">
      <div className="absolute bottom-0 right-0 w-[45%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
            Simulação sem Compromisso
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white font-display">
            Simulador de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Economia Fiscal</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
            Descubra em menos de 10 segundos quanto imposto você está pagando desnecessariamente e como podemos reduzir esse valor através de contabilidade estratégica.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Form Input Columns */}
          <div className="lg:col-span-6 bg-white/5 border border-white/15 backdrop-blur-xl p-6 md:p-8 rounded-3xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              {/* Field 1: Revenue (Faturamento) */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label id="sim-fat-label" className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                    Faturamento Mensal Estimado
                    <span title="Soma aproximada de todas as notas fiscais emitidas no mês" className="cursor-help flex items-center">
                      <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
                    </span>
                  </label>
                  <span className="text-lg font-bold text-blue-400 font-mono">
                    {formatCurrency(faturamento)}
                  </span>
                </div>
                <input
                  id="sim-fat-range"
                  type="range"
                  min="5000"
                  max="350000"
                  step="5000"
                  value={faturamento}
                  onChange={(e) => setFaturamento(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>R$ 5 mil</span>
                  <span>R$ 150 mil</span>
                  <span>R$ 350 mil+</span>
                </div>
              </div>

              {/* Field 2: Sector (Ramo de Atividade) */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-slate-200 block">
                  Ramo de Atividade Predominante
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    id="sim-ramo-serv"
                    type="button"
                    onClick={() => {
                      setRamo("servicos");
                      setRegime("simples");
                    }}
                    className={`px-4 py-3 rounded-xl border text-xs font-semibold transition-all ${
                      ramo === "servicos"
                        ? "bg-blue-600 border-blue-550 text-white shadow-lg"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    Serviços (TI, Saúde, etc)
                  </button>
                  <button
                    id="sim-ramo-com"
                    type="button"
                    onClick={() => {
                      setRamo("comercio");
                      setRegime("simples");
                    }}
                    className={`px-4 py-3 rounded-xl border text-xs font-semibold transition-all ${
                      ramo === "comercio"
                        ? "bg-blue-600 border-blue-550 text-white shadow-lg"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    Comércio / Vendas
                  </button>
                  <button
                    id="sim-ramo-pf"
                    type="button"
                    onClick={() => {
                      setRamo("pf");
                      setRegime("pf");
                    }}
                    className={`px-4 py-3 rounded-xl border text-xs font-semibold transition-all ${
                      ramo === "pf"
                        ? "bg-blue-600 border-blue-550 text-white shadow-lg"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    Trabalho Autônomo / PF
                  </button>
                </div>
              </div>

              {/* Field 3: Current Regime */}
              {ramo !== "pf" && (
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-200 block">
                    Regime Tributário Atual (Aproximado)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      id="sim-regime-simp"
                      type="button"
                      onClick={() => setRegime("simples")}
                      className={`px-4 py-3 rounded-xl border text-xs font-medium transition-all ${
                        regime === "simples"
                          ? "bg-white/10 border-blue-450/40 text-blue-300 text-white"
                          : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      Simples Nacional (Iniciante)
                    </button>
                    <button
                      id="sim-regime-pres"
                      type="button"
                      onClick={() => setRegime("lucropresumido")}
                      className={`px-4 py-3 rounded-xl border text-xs font-medium transition-all ${
                        regime === "lucropresumido"
                          ? "bg-white/10 border-blue-450/40 text-blue-300 text-white"
                          : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      Autônomo PF / Não Sei
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-[11px] text-slate-400 leading-relaxed font-light mt-4">
              *Estes cálculos são automáticos e informais. Baseiam-se na legislação fiscal vigente do Simples Nacional (Anexo III vs Anexo V) e regimes equivalentes para simular economias com planejamento contábil real em Santos.
            </div>

          </div>

          {/* Results Frosted Glass Column */}
          <div className="lg:col-span-6 bg-gradient-to-br from-indigo-950/40 to-blue-950/40 border border-white/15 p-6 md:p-8 rounded-3xl flex flex-col justify-between">
            
            <div className="space-y-6">
              <span className="text-xs uppercase font-bold text-blue-400 tracking-widest block font-mono">
                Relatório de Otimização Estimado
              </span>

              {/* Comparativo de impostos */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="text-sm text-slate-300">Imposto Mensal Geral Atual:</span>
                  <span className="text-sm font-bold text-slate-300 line-through font-mono">
                    {formatCurrency(impostoAtual)}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="text-sm text-slate-300 flex items-center gap-1.5 font-semibold text-emerald-300">
                    Imposto com a DUOS Contabilidade:
                  </span>
                  <span className="text-base font-extrabold text-emerald-400 font-mono">
                    {formatCurrency(impostoOtimizado)}
                  </span>
                </div>
              </div>

              {/* Destaque Economia mensal */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-1">
                  <TrendingDown className="w-14 h-14 text-emerald-550/10 shrink-0 pointer-events-none" />
                </div>
                <span className="text-xs text-slate-400 uppercase tracking-widest block font-mono">
                  Sua Economia Estimada Mensal
                </span>
                <span className="text-3xl md:text-4xl font-extrabold text-blue-300 tracking-tight block my-2 font-display">
                  {formatCurrency(economiaMensal)}
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold block">
                  Equivale a uma economia anual de {formatCurrency(economiaMensal * 12)}!
                </span>
              </div>
            </div>

            {/* Direct transition CTA */}
            <div className="pt-6 space-y-3">
              <button
                id="sim-cta-whatsapp"
                onClick={handleWhatsAppSavings}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-xl shadow-blue-500/20 active:scale-98 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Garantir Otimização de {formatCurrency(economiaMensal)}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="text-center text-[10px] text-slate-500 font-mono uppercase tracking-wider">
                Respondo rápido em até 15 minutos!
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
