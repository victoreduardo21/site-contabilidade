import { useState } from "react";
import { Phone, MapPin, Clock, MessageSquare, ArrowRight, ShieldCheck, Copy, Check } from "lucide-react";
import { BUSINESS_INFO } from "../types";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    const fullAddress = `${BUSINESS_INFO.address}, ${BUSINESS_INFO.city}`;
    navigator.clipboard.writeText(fullAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      "Olá! Vim do site da DUOS Contabilidade e gostaria de iniciar um diagnóstico fiscal estratégico para minha empresa."
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="py-20 bg-slate-950/40 relative border-b border-white/5">
      <div className="absolute top-0 left-0 w-[50%] h-[30%] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
            Escritório em Santos
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white font-display">
            Fale com a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Nossa Assessoria</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
            Agende uma consulta presencial em nosso escritório físico ou inicie o atendimento 100% digital seguro por WhatsApp.
          </p>
        </div>

        {/* Contact/Map Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info & Location Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-3xl space-y-6">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block font-mono">
                Contato Direto
              </span>

              <div className="space-y-6 divide-y divide-white/5">
                {/* Box 1: Address */}
                <div className="flex gap-4 pt-0">
                  <div className="p-2.5 bg-blue-500/10 text-blue-200 rounded-xl border border-blue-500/20 shrink-0 h-11 w-11 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-200 text-sm">{BUSINESS_INFO.address}</span>
                    <span className="text-xs text-slate-400 mt-1">{BUSINESS_INFO.city}</span>
                    <span className="text-[10px] text-blue-400 font-bold mt-2 uppercase tracking-wide">
                      {BUSINESS_INFO.officeName}
                    </span>
                  </div>
                </div>

                {/* Box 2: Telefone */}
                <div className="pt-6">
                  <a
                    href={`tel:${BUSINESS_INFO.whatsappNumber}`}
                    className="flex gap-4 group/item hover:bg-white/5 p-3 rounded-xl transition-all border border-transparent hover:border-white/5"
                  >
                    <div className="p-2.5 bg-blue-500/10 text-blue-200 rounded-xl border border-blue-500/20 shrink-0 h-11 w-11 flex items-center justify-center group-hover/item:border-blue-400/40 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-200 text-sm group-hover/item:text-blue-400 transition-colors">{BUSINESS_INFO.phone}</span>
                      <span className="text-xs text-slate-400 mt-1">Clique para ligar ou enviar WhatsApp</span>
                    </div>
                  </a>
                </div>

                {/* Box 3: Horários */}
                <div className="flex gap-4 pt-6">
                  <div className="p-2.5 bg-blue-500/10 text-blue-200 rounded-xl border border-blue-500/20 shrink-0 h-11 w-11 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-200 text-sm">Segunda a Sexta</span>
                    <span className="text-xs text-slate-400 mt-1">{BUSINESS_INFO.operatingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Geographic Location Maps with Premium Badge Integration */}
            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden min-h-[300px] relative flex flex-col justify-between group">
              {/* Actual Google Maps Embedded Link for Vila Matias Santos */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.208620888989!2d-46.3312061!3d-23.9530461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce030cf82664fd%3A0xe5452d7ee41d7a31!2sR.%20S%C3%A3o%20Paulo%2C%2041%20-%20Vila%20Matias%2C%20Santos%20-%20SP%2C%2011075-140!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", top: 0, left: 0, opacity: 0.6 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - DUOS Contabilidade"
                className="z-0"
              />

              {/* A subtle dark gradient top-down and bottom-up overlay to keep map labels legible and UI clickable */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/80 pointer-events-none z-1" />

              {/* Top Text Overlay */}
              <div className="relative z-10 p-5 space-y-1 bg-slate-950/40 backdrop-blur-xs border-b border-white/5">
                <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider">
                  Atendimento Presencial Disponível
                </span>
                <p className="text-[11px] text-slate-300 font-light">
                  Agende uma reunião estratégica em nossa sede física estruturada em Santos.
                </p>
              </div>

              {/* Bottom Address info bar */}
              <div className="relative z-10 p-5 bg-slate-950/90 backdrop-blur-md border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-col">
                  <span className="text-[11px] text-slate-200 font-semibold font-mono">Vila Matias, Santos - SP</span>
                  <span className="text-[10px] text-slate-400">Rua São Paulo, 41 - Sala 1806</span>
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-all shadow-md active:scale-95 text-center shrink-0 flex items-center justify-center gap-2 cursor-pointer min-w-[140px]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Endereço</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Premium Direct WhatsApp CTA Box */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl flex flex-col justify-between backdrop-blur-xl space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2.5">
                <div className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                </div>
                <span className="text-xs uppercase font-bold text-emerald-400 tracking-widest block font-mono">
                  Suporte Estratégico Online Disponível Now
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white font-display">
                Fale Diretamente com um <span className="text-blue-400">Contador Especialista</span> Sem Filas
              </h3>

              <p className="text-slate-300 text-sm font-light leading-relaxed">
                Elimine a burocracia do seu negócio de forma ágil. Nosso atendimento pelo WhatsApp é humanizado, personalizado e focado em gerar economia legal de impostos para a sua empresa em Santos.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3 text-xs text-slate-350">
                  <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Diagnóstico Grátis de Enquadramento</span>
                    Análise completa do seu regime tributário atual para identificar pagamentos excessivos.
                  </div>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-350">
                  <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Tempo de Resposta Menor que 15 Minutos</span>
                    Sua empresa não pode esperar. Tenha respostas imediatas direto no seu WhatsApp.
                  </div>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-350">
                  <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Transição de Contabilidade 100% Sem Stress</span>
                    Cuidamos de tudo diretamente com seu escritório anterior de forma automática.
                  </div>
                </div>
              </div>
            </div>

            {/* Giants direct target button */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <button
                id="contact-whatsapp-giant-btn"
                onClick={handleWhatsAppRedirect}
                className="w-full bg-emerald-600 hover:bg-emerald-500 hover:shadow-emerald-600/20 text-white font-bold py-4.5 px-6 rounded-2xl transition-all shadow-xl shadow-emerald-600/10 active:scale-98 flex items-center justify-center space-x-3 cursor-pointer text-base sm:text-lg"
              >
                <MessageSquare className="w-6 h-6 shrink-0 fill-current" />
                <span>Conversar com Assessor no WhatsApp</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] text-slate-500 font-mono uppercase tracking-wider">
                <span>⚡ Resposta em minutos</span>
                <span>🔒 Conexão Segura</span>
                <span>👨‍💼 Sem robôs de atendimento</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
