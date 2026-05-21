import { motion } from "motion/react";
import { Building, Receipt, Users, TrendingUp, FileSpreadsheet, ArrowUpRight } from "lucide-react";
import { BUSINESS_INFO } from "../types";

export default function Services() {
  const list = [
    {
      icon: <Building className="w-6 h-6 text-blue-400" />,
      title: "Abertura & Legalização",
      desc: "Inicie seu negócio da forma correta. Cuidamos de todo o processo burocrático, CNPJ, alvarás e cadastros em tempo recorde."
    },
    {
      icon: <Receipt className="w-6 h-6 text-indigo-400" />,
      title: "Planejamento Tributário",
      desc: "Análise profunda do seu faturamento para enquadrar sua empresa na menor faixa de impostos legalmente possível."
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      title: "Assessoria Fiscal & eSocial",
      desc: "Gestão pontual da folha de pagamento, eSocial, guias de INSS, FGTS, e declarações fiscais sem risco de multas."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
      title: "BPO Financeiro Integrado",
      desc: "Terceirize o controle de contas, fluxo de caixa e emissão de notas fiscais. Informações em tempo real para tomada de decisões."
    },
    {
      icon: <FileSpreadsheet className="w-6 h-6 text-violet-400" />,
      title: "Auditoria & Compliance",
      desc: "Cruzamento e revisão de demonstrativos passados para blindar sua empresa de fiscalizações indesejadas do governo."
    }
  ];

  const handleConsultancyClick = (serviceTitle: string) => {
    const text = encodeURIComponent(`Olá! Gostaria de uma consultoria estratégica relacionada a: *${serviceTitle}* para minha empresa.`);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="servicos" className="py-20 bg-slate-950/40 relative border-b border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display">
            Gestão Contábil que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Impulsiona Resultados</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light">
            Soluções completas e sob medida para garantir eficiência fiscal, segurança jurídica e controle financeiro total do seu empreendimento.
          </p>
        </div>

        {/* Services Grid with Frosted Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((item, idx) => (
            <motion.div
              id={`service-card-${idx}`}
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl flex flex-col justify-between hover:border-blue-400/40 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 w-fit shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-snug group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-450 text-xs leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => handleConsultancyClick(item.title)}
                  className="text-xs font-bold text-blue-300 hover:text-white flex items-center gap-1.5 group/btn transition-colors cursor-pointer"
                >
                  <span>Solicitar Proposta</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
                <div className="text-[10px] font-mono text-slate-500 uppercase">
                  Santos - SP
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
