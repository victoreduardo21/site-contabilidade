import { motion } from "motion/react";
import { Star, ArrowRight, MapPin, CheckCircle2, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "../types";

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent("Olá! Vim do site da DUOS Contabilidade e gostaria de entender sobre a redução de impostos da minha empresa.");
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="inicio"
      className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-950/20 border-b border-white/5"
    >
      {/* Absolute decorative backdrops */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-radial from-blue-500/5 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-radial from-indigo-500/5 to-transparent blur-3xl rounded-full pointer-events-none" />

      {/* Grid wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text content section */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust badge with glassmorphism */}
            <motion.div
              id="hero-trust-badge"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-white/5 hover:bg-white/10 transition-colors px-3.5 py-1.5 rounded-full border border-white/10 text-slate-300 text-xs font-semibold tracking-wide backdrop-blur-md"
            >
              <div className="flex text-amber-500">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span>
                <span className="font-bold text-white">5.0</span> ({BUSINESS_INFO.reviewsCount} Avaliações no Google)
              </span>
            </motion.div>

            {/* Display heading */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white leading-tight tracking-tight"
            >
              Contabilidade de Alta Performance para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 font-extrabold">Escalar sua Empresa</span>
            </motion.h1>

            {/* Paragraph Description */}
            <motion.p
              id="hero-desc"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Diga adeus à burocracia e aos impostos em excesso. Na <span className="font-semibold text-white">DUOS Contabilidade</span>, fornecemos inteligência fiscal, escritório físico no <span className="font-medium text-white">Manhattan Office Santos</span> e suporte prioritário via WhatsApp para impulsionar seus ganhos.
            </motion.p>

            {/* List key points */}
            <motion.div
              id="hero-points"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left text-sm max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-blue-400 shrink-0" />
                <span className="text-slate-300">Diminuição Legal de Impostos</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-blue-400 shrink-0" />
                <span className="text-slate-300">Atendimento Exclusivo no Zap</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-blue-400 shrink-0" />
                <span className="text-slate-300">Abertura de Empresa Facilitada</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-blue-400 shrink-0" />
                <span className="text-slate-300">BPO Financeiro Integrado</span>
              </div>
            </motion.div>

            {/* Dual CTAs */}
            <motion.div
              id="hero-ctas"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                id="hero-cta-whatsapp"
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center justify-center space-x-2 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-98 cursor-pointer"
              >
                <span>Falar Conosco no WhatsApp</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                id="hero-cta-simular"
                onClick={() => onScrollTo("simulador")}
                className="w-full sm:w-auto bg-white/5 border border-white/15 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all flex items-center justify-center space-x-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Simulador Fiscal Grátis</span>
              </button>
            </motion.div>

            {/* Map point locator */}
            <motion.div
              id="hero-office-loc"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-6 flex items-center justify-center lg:justify-start space-x-2 text-xs text-slate-400 font-mono"
            >
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Vila Matias, Santos - SP (Manhattan Office, Sala 1806)</span>
            </motion.div>

          </div>

          {/* Frosted glass graphic demonstration */}
          <div className="lg:col-span-5 relative">
            <motion.div
              id="hero-visual-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-[420px] bg-white/5 backdrop-blur-xl text-white rounded-3xl p-6 shadow-2xl overflow-hidden border border-white/10"
            >
              {/* Abs mesh circles inside graph mock */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center border border-blue-500/30">
                    <span className="text-blue-400 font-bold font-display text-sm">DU</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xs text-slate-100">DUOS Dash</h3>
                    <p className="text-[9px] text-slate-400 font-mono">Autenticação Instantânea</p>
                  </div>
                </div>
                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[9px] font-mono px-2 py-0.5 rounded-full uppercase font-bold tracking-wider">
                  ● Conforme
                </span>
              </div>

              {/* Box dynamic representation of taxes optimization */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-[11px] text-slate-350 mb-1">
                    <span>Prospecção de Economia Tributária</span>
                    <span className="text-blue-400 font-bold font-mono">+ 32.7%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-550 to-indigo-400 h-full rounded-full w-[82%]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-mono">Redução Média</span>
                    <span className="text-lg font-bold text-slate-100 mt-1 block">R$ 4.240<span className="text-xs text-slate-400 font-normal">/mês</span></span>
                    <span className="text-[9px] text-blue-400 mt-0.5 block font-semibold">↑ Legalmente obtida</span>
                  </div>
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-mono">Auditoria eSocial</span>
                    <span className="text-lg font-bold text-slate-100 mt-1 block mb-0.5">100% OK</span>
                    <span className="text-[9px] border border-blue-550/30 text-blue-400 px-1.5 py-0.5 rounded-md inline-block text-center text-[10px]">
                      Sem Pendências
                    </span>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-2 mt-4">
                  <div className="flex items-center space-x-2 text-blue-300 text-xs font-semibold">
                    <ShieldCheck className="w-4 h-4 shrink-0 text-blue-400" />
                    <span>Diferencial DUOS contabilidade</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed font-light">
                    "Cada cliente recebe um planejamento sob medida desenhado por contadores reais. Sem sistemas automáticos robóticos frios."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Rating quote card under visual column */}
            <motion.div
              id="hero-floading-rating"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 md:right-4 bg-slate-900/90 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl flex max-w-[280px] items-start space-x-3"
            >
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-300 shrink-0 font-bold flex items-center justify-center text-xs">
                LF
              </div>
              <div>
                <p className="text-[10px] italic text-slate-300 leading-normal">
                  "Atendimento diferenciado e exclusivo pro meu negócio. Recomendo muito!"
                </p>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                  Luciana Fré - Cliente
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
