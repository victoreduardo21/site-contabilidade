import { CheckCircle2, Shuffle, UserCheck, Search, HelpCircle } from "lucide-react";
import { BUSINESS_INFO } from "../types";

export default function Assessoria() {
  const steps = [
    {
      icon: <Search className="w-6 h-6 text-blue-400" />,
      title: "1. Diagnóstico Inicial",
      desc: "Analisamos minuciosamente o histórico fiscal recente da sua empresa em Santos para encontrar falhas de enquadramento ou pagamentos a mais."
    },
    {
      icon: <Shuffle className="w-6 h-6 text-indigo-400" />,
      title: "2. Migração Sem Atrito",
      desc: "Fazemos toda a transição de documentos junto ao seu antigo contador de forma 100% autônoma e segura, sem interromper seu faturamento."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-emerald-400" />,
      title: "3. Atendimento Premium Ativo",
      desc: "Sua empresa passa a ter o acompanhamento mensal de um assessor sênior dedicado no WhatsApp, pronto para tirar dúvidas em até 15 minutos."
    }
  ];

  return (
    <section id="assessoria" className="py-20 bg-slate-950 relative border-b border-white/5">
      {/* Decorative backdrop glow */}
      <div className="absolute top-[20%] right-0 w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[30%] h-[40%] bg-indigo-500/5 blur-[125px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              Metodologia de Sucesso
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display leading-tight">
              Uma Assessoria Contábil que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Fala a sua Língua</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-400 text-base font-light leading-relaxed">
              Esqueça contabilidades tradicionais que só geram guias de impostos e não te dão respostas rápidas. Nós construímos uma assessoria focada na otimização de lucros, planejamento preventivo e facilidade digital constante para que você foque exclusivamente no crescimento dos seus negócios.
            </p>
          </div>
        </div>

        {/* 3 Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              id={`assessoria-step-${idx}`}
              key={idx}
              className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl relative hover:border-blue-450/30 hover:bg-white/10 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 w-fit shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] text-slate-500 font-mono uppercase">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Processo Garantido</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic FAQ / Doubts teaser box underneath steps */}
        <div className="mt-12 bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-500/10 text-blue-300 rounded-2xl border border-blue-500/20 shrink-0 h-12 w-12 flex items-center justify-center">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-white">Ainda tem dúvidas sobre como funciona a migração?</h4>
              <p className="text-xs text-slate-400 max-w-xl leading-relaxed font-light">
                Mudar de contabilidade é extremamente simples. Nós lideramos toda a burocracia sem custos de transição e sem stress. Fale com nosso suporte para entender!
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const text = encodeURIComponent("Olá! Vim da seção de assessoria do site e gostaria de tirar dúvidas sobre a migração e atendimento.");
              window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, "_blank", "noopener,noreferrer");
            }}
            className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-4.5 rounded-xl transition-all shadow-md active:scale-95 text-center shrink-0 cursor-pointer flex items-center justify-center gap-2"
          >
            Falar no WhatsApp Agora
          </button>
        </div>

      </div>
    </section>
  );
}
