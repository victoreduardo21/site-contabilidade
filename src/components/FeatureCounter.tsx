import { Star, Clock, Trophy, Award } from "lucide-react";

export default function FeatureCounter() {
  const stats = [
    {
      icon: <Star className="w-6 h-6 text-amber-400 fill-amber-400/20" />,
      value: "5,0 / 5,0",
      label: "Nota no Google Maps",
      desc: "Satisfação máxima baseada em avaliações reais."
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      value: "97% < 15min",
      label: "Tempo de Resposta",
      desc: "Urgência resolvida direto no WhatsApp."
    },
    {
      icon: <Trophy className="w-6 h-6 text-indigo-400" />,
      value: "+100% Legal",
      label: "Segurança Total",
      desc: "Garantia de conformidade fiscal e contábil rigorosa."
    },
    {
      icon: <Award className="w-6 h-6 text-slate-300" />,
      value: "Exclusivo",
      label: "Atendimento Diferenciado",
      desc: "Cada cliente tem um assessor sênior dedicado."
    }
  ];

  return (
    <div className="bg-slate-900/40 backdrop-blur-md border-y border-white/5 py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              id={`stat-card-${idx}`}
              key={idx}
              className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
            >
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0">
                {stat.icon}
              </div>
              <div className="space-y-1">
                <div className="font-display font-extrabold text-2xl text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-450 leading-relaxed">
                  {stat.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
