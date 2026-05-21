import { MapPin, Clock, Phone, Mail, Navigation2, Milestone, Landmark } from "lucide-react";
import { BUSINESS_INFO } from "../data";

export default function AboutLocation() {
  const handleOpenMaps = () => {
    // Exact location mapping on Google Maps for R. São Paulo, 41 - Vila Matias, Santos - SP, 11075-140 (Manhattan Office Santos)
    window.open("https://maps.google.com/?q=R.+São+Paulo,+41+-+SALA+1806+-+Vila+Matias,+Santos+-+SP,+11075-140", "_blank", "noreferrer");
  };

  return (
    <section id="sobre" className="py-20 bg-slate-50/40 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer Column layout: About Left, Map Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* Detailed informational panel (Left) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-teal-600 font-mono text-xs font-bold uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100 flex items-center w-fit">
                QUEM SOMOS & ONDE ESTAMOS
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
                Um Escritório Moderno de Assessoria Contábil em Santos, SP
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              <p>
                A <span className="font-semibold text-slate-900">DUOS Contabilidade e Assessoria Empresarial</span> nasceu com um propósito claro: afastar a imagem engessada e burocrática da contabilidade tradicional e entregar uma assessoria altamente consultiva, eficiente e exclusiva para cada cliente.
              </p>
              <p>
                Entendemos que cada organização possui uma realidade única. Por isso, oferecemos um atendimento de boutique, onde sua empresa não é apenas mais um número em um sistema automatizado. Nossos especialistas seniores desenham o planejamento de acordo com suas exatas dores fiscais e planos de escala.
              </p>
              <p>
                Situados estrategicamente no coração da Vila Matias em Santos, no moderno complexo empresarial <span className="font-medium text-slate-900">{BUSINESS_INFO.buildingName}</span>, combinamos a infraestrutura física para atendê-lo presencialmente à agilidade digital das ferramentas de comunicação via WhatsApp.
              </p>
            </div>

            {/* Quick Contact & Landmark Highlights cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-150 p-4 rounded-xl space-y-2 shadow-xs">
                <div className="flex items-center space-x-2.5 text-slate-800 font-bold text-xs sm:text-sm font-display">
                  <Landmark className="w-4.5 h-4.5 text-teal-600" />
                  <span>Sede Física Profissional</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  {BUSINESS_INFO.buildingName}<br />
                  SALA 1806 - Vila Matias
                </p>
              </div>

              <div className="bg-white border border-slate-150 p-4 rounded-xl space-y-2 shadow-xs">
                <div className="flex items-center space-x-2.5 text-slate-800 font-bold text-xs sm:text-sm font-display">
                  <Clock className="w-4.5 h-4.5 text-teal-600" />
                  <span>Horários de Expediente</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  {BUSINESS_INFO.businessHours.weekdays}<br />
                  <span className="text-teal-600 font-semibold">{BUSINESS_INFO.businessHours.status}</span>
                </p>
              </div>
            </div>

            {/* Core commitments icons */}
            <div className="border-t border-slate-200/60 pt-6 space-y-3.5">
              <div className="flex items-center space-x-3 text-xs text-slate-700">
                <div className="w-6 h-6 rounded-md bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <Milestone className="w-3.5 h-3.5 text-teal-600" />
                </div>
                <span className="font-medium text-slate-900">Endereço de fácil acesso na Baixada Santista com estacionamento.</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-slate-700">
                <div className="w-6 h-6 rounded-md bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <Milestone className="w-3.5 h-3.5 text-teal-600" />
                </div>
                <span className="font-medium text-slate-900">Salas de conferência modernas para estruturar seu planejamento fiscal.</span>
              </div>
            </div>

          </div>

          {/* Simulated Google Map component (Right) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Map Canvas Card */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-150 shadow-md flex flex-col justify-between space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                <div>
                  <h3 className="font-display font-bold text-sm text-slate-900 flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-red-500" />
                    DUOS no Google Maps
                  </h3>
                  <p className="text-[11px] text-slate-500 font-mono mt-0.5">Clique para carregar rotas no smartphone</p>
                </div>
                
                <span className="bg-emerald-100 text-emerald-800 border border-emerald-200 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
                  ★ 5.0 Santos SP
                </span>
              </div>

              {/* Graphic visual representing Google Maps mockup cleanly to avoid iframe third-party block issues */}
              <div 
                id="maps-simulator"
                onClick={handleOpenMaps}
                className="relative rounded-2xl w-full h-[260px] sm:h-[320px] bg-slate-100 border border-slate-200/80 overflow-hidden cursor-pointer group shadow-inner"
              >
                {/* SVG vector representing grid terrain simulation */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Vector Roads drawing for Vila Matias */}
                <svg className="absolute inset-0 w-full h-full stroke-slate-350 stroke-[2] fill-none leading-none opacity-40">
                  <path d="M 0,100 L 400,100 M 0,220 L 400,220 M 150,0 Q 150,200 170,400 M 320,0 L 320,400 M 10,12 L 390,380" />
                  <path d="M 50,0 Q 110,150 280,300 M 0,320 L 400,320" />
                </svg>

                {/* Animated Blue Pulse location dot representing Vila Matias area */}
                <div className="absolute top-[52%] left-[42%] transform -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center pointer-events-none">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-40"></span>
                  <span className="absolute inline-flex rounded-full h-4 w-4 bg-teal-600"></span>
                </div>

                {/* Simulated Map pin tool-tip card */}
                <div className="absolute top-[28%] left-[22%] bg-white/95 backdrop-blur-xs p-3.5 rounded-xl shadow-lg border border-slate-200/60 max-w-[240px] space-y-1.5 transition-transform group-hover:scale-103 duration-300">
                  <div className="flex items-center space-x-1.5 text-[10px] text-teal-700 font-bold uppercase font-mono tracking-wider">
                    <Landmark className="w-3.5 h-3.5" />
                    <span>MANHATTAN OFFICE</span>
                  </div>
                  <p className="font-display font-extrabold text-xs text-slate-900">DUOS Contabilidade</p>
                  <p className="text-[9.5px] text-slate-500 font-sans leading-relaxed">R. São Paulo, 41 - SALA 1806 - Vila Matias, Santos</p>
                </div>

                {/* Bottom maps indicator bar */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/95 text-white p-2.5 rounded-lg text-[10.5px] flex items-center justify-between font-mono shadow-md">
                  <span>Visualizar rotas no Street View & 360°</span>
                  <span className="bg-teal-500 text-slate-950 font-bold px-2 py-0.5 rounded-sm uppercase text-[9px]">
                    BR-101 Santos
                  </span>
                </div>
              </div>

              {/* Action Buttons to open map on user devices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  id="open-maps-btn"
                  onClick={handleOpenMaps}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-4 rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <Navigation2 className="w-4 h-4 text-emerald-400 rotate-45 shrink-0" />
                  <span>Imprimir Rotas no GPS</span>
                </button>

                <a
                  id="phone-call-btn"
                  href={`tel:${BUSINESS_INFO.whatsappNumber}`}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-semibold py-3 px-4 rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-colors text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Ligar: {BUSINESS_INFO.phone}</span>
                </a>
              </div>

            </div>

            {/* Sub-text block providing street landmark context */}
            <div className="p-4 bg-slate-100/50 rounded-2xl border border-slate-200/50 text-xs text-slate-500 leading-relaxed italic space-y-1 font-sans">
              <span className="font-bold text-slate-700 block not-italic">Como nos localizar na Vila Matias Santos:</span>
              <span>
                "O Manhattan Office Santos está situado na R. São Paulo, travessa de fácil acesso próxima à Av. Ana Costa. Ao chegar, basta identificar-se na recepção principal e subir ao 18º andar (Sala 1806). Estacionamento disponível no próprio edifício."
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
