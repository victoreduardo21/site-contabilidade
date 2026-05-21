import { useState, ChangeEvent, FormEvent } from "react";
import { Send, CheckCircle, MessageSquare, Phone, Mail, Clock, MapPin, Loader2 } from "lucide-react";
import { BUSINESS_INFO } from "../data";
import { ContactFormData } from "../types";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "servicos",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Dynamic timer mimicking realistic server integration
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleWhatsAppInstantEscalation = () => {
    const sectorLabels: { [key: string]: string } = {
      autonomo: "Profissional Autônomo",
      mei: "MEI",
      comercio: "Comércio",
      servicos: "Prestação de Serviços",
      industria: "Indústria / Produção"
    };

    const text = encodeURIComponent(
      `Olá DUOS Contabilidade!\n` +
      `Enviei o formulário do site e gostaria de agendar um atendimento urgente.\n\n` +
      `*Meus Contatos:*\n` +
      `- *Nome:* ${formData.name}\n` +
      `- *Telefone:* ${formData.phone}\n` +
      `- *Email:* ${formData.email}\n` +
      `- *Empresa:* ${formData.businessName || "Ainda sem nome"}\n` +
      `- *Segmento:* ${sectorLabels[formData.businessType] || formData.businessType}\n\n` +
      `*Minha mensagem original:*\n` +
      `"${formData.message}"`
    );

    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, "_blank", "noreferrer");
  };

  return (
    <section id="contato" className="py-20 bg-slate-50 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout splits into corporate sidebar, and active contact sheet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left panel: business details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div className="space-y-6">
              <span className="text-teal-600 font-mono text-xs font-bold uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100 flex items-center w-fit">
                CONTATE-NOS
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Pronto para Otimizar sua Contabilidade?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                Escreva para nossa equipe agora mesmo! Se preferir um contato presencial no Manhattan Office Santos, agende sua visita pelos canais abaixo.
              </p>
            </div>

            {/* Structured details list */}
            <div className="space-y-4">
              
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 shrink-0 border border-teal-500/15">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[10px] text-slate-400 font-mono tracking-wider font-bold uppercase leading-none mb-1">Telefone Fixo</h4>
                  <p className="text-slate-800 text-sm font-semibold font-mono">{BUSINESS_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 shrink-0 border border-teal-500/15">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[10px] text-slate-400 font-mono tracking-wider font-bold uppercase leading-none mb-1">E-mail Corporativo</h4>
                  <p className="text-slate-800 text-sm font-semibold">{BUSINESS_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 shrink-0 border border-teal-500/15">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[10px] text-slate-400 font-mono tracking-wider font-bold uppercase leading-none mb-1">Nossa Sede Física</h4>
                  <p className="text-slate-800 text-sm font-medium">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 shrink-0 border border-teal-500/15">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[10px] text-slate-400 font-mono tracking-wider font-bold uppercase leading-none mb-1">Horário de Atendimento</h4>
                  <p className="text-slate-800 text-sm font-medium">{BUSINESS_INFO.businessHours.weekdays}</p>
                </div>
              </div>

            </div>

            <div className="p-4 bg-slate-900 text-white rounded-2xl border border-slate-850 space-y-1 text-xs">
              <span className="text-teal-400 font-bold block">✓ Plantão Contábil WhatsApp</span>
              <p className="text-slate-300">Nossos tempos médios de resposta preliminares são inferiores a 15 minutos em dias úteis!</p>
            </div>

          </div>

          {/* Right panel: dynamic sheet (form or success page) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-150 shadow-md">
            {isSubmitted ? (
              <div className="h-full flex flex-col justify-center items-center text-center py-10 space-y-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-sm">
                  <CheckCircle className="w-10 h-10" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight">
                    Solicitação Recebida com Sucesso!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Muito obrigado, <span className="font-bold text-slate-800">{formData.name}</span>. Nossa assessoria em Santos já registrou seu contato para o segmento de <span className="font-semibold text-slate-850">{formData.businessName || "sua empresa"}</span>.
                  </p>
                </div>

                {/* Local response summary */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs text-slate-600 w-full max-w-md space-y-1.5 font-mono">
                  <p><strong>Detalhes Registrados:</strong></p>
                  <p>• Contato: {formData.phone}</p>
                  <p>• Email: {formData.email}</p>
                  <p>• Empresa de Referência: {formData.businessName || "Não especificado"}</p>
                </div>

                <div className="pt-2 w-full max-w-sm space-y-2.5">
                  <button
                    id="success-cta-whatsapp"
                    onClick={handleWhatsAppInstantEscalation}
                    className="w-full bg-teal-600 hover:bg-teal-500 text-white py-3.5 px-6 rounded-xl text-sm font-semibold transition-all shadow-md flex items-center justify-center space-x-2.5 cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Iniciar Atendimento Imediato</span>
                  </button>

                  <button
                    id="success-btn-reset"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        businessName: "",
                        businessType: "servicos",
                        message: ""
                      });
                    }}
                    className="w-full text-slate-500 hover:text-slate-800 py-2.5 text-xs font-semibold hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    Enviar Outro Formulário
                  </button>
                </div>

              </div>
            ) : (
              <form id="contact-corporate-form" onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="font-display font-bold text-lg text-slate-900 leading-none">
                    Formulário de Orçamento Rápido
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">Preencha os campos abaixo e receba um retorno em instantes.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Seu Nome *</label>
                    <input
                      id="input-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ex: Luciana"
                      className="w-full bg-slate-50 border border-slate-300 px-3 py-2.5 rounded-lg text-sm focus:ring-1 focus:ring-teal-500 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">WhatsApp / Celular *</label>
                    <input
                      id="input-phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Ex: (13) 3327-5719"
                      className="w-full bg-slate-50 border border-slate-300 px-3 py-2.5 rounded-lg text-sm focus:ring-1 focus:ring-teal-500 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Business Name */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Nome da Empresa</label>
                    <input
                      id="input-businessName"
                      name="businessName"
                      type="text"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="Ex: Minha Clínica LTDA"
                      className="w-full bg-slate-50 border border-slate-300 px-3 py-2.5 rounded-lg text-sm focus:ring-1 focus:ring-teal-500 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>

                  {/* Business Type dropdown */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Tipo de Atividade</label>
                    <select
                      id="select-businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-300 px-3 py-2.5 rounded-lg text-sm focus:ring-1 focus:ring-teal-500 focus:bg-white focus:outline-none transition-all cursor-pointer"
                    >
                      <option value="servicos">Prestação de Serviços</option>
                      <option value="comercio">Comércio / E-commerce</option>
                      <option value="mei">Microempreendedor (MEI)</option>
                      <option value="autonomo">Profissional Autônomo / PF</option>
                      <option value="industria">Indústria / Outros</option>
                    </select>
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">E-mail de Contato *</label>
                  <input
                    id="input-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="luciana@exemplo.com.br"
                    className="w-full bg-slate-50 border border-slate-300 px-3 py-2.5 rounded-lg text-sm focus:ring-1 focus:ring-teal-500 focus:bg-white focus:outline-none transition-all"
                  />
                </div>

                {/* Message input */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Conte sua necessidade *</label>
                  <textarea
                    id="textarea-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Gostaria de um orçamento detalhado de contabilidade mensal ou assessoria para abertura..."
                    className="w-full bg-slate-50 border border-slate-300 px-3 py-2.5 rounded-lg text-sm focus:ring-1 focus:ring-teal-500 focus:bg-white focus:outline-none transition-all"
                  />
                </div>

                {/* Submission CTA bar */}
                <div className="pt-2">
                  <button
                    id="submit-contact-btn"
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-slate-900 hover:bg-slate-800 hover:border-slate-800 disabled:bg-slate-400 text-white font-semibold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Enviando Dados Confidenciais...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4.5 h-4.5" />
                        <span>Enviar Solicitação de Orçamento</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
