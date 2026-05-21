import { useState, useEffect } from "react";
import { MessageSquare, X, Send, Check } from "lucide-react";
import { BUSINESS_INFO } from "../data";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [typedMessage, setTypedMessage] = useState("");
  const [hasNotification, setHasNotification] = useState(true);
  const [conversations, setConversations] = useState<Array<{ sender: "agent" | "user"; text: string }>>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Standard delay triggers showing a greeting after opening the widget
    if (isOpen && conversations.length === 0) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
        setConversations([
          {
            sender: "agent",
            text: "Olá! Seja muito bem-vindo à DUOS Contabilidade Santos SP. Sou a assessora virtual da DUOS. Como posso ajudar com o seu CNPJ hoje?"
          }
        ]);
        setHasNotification(false);
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [isOpen, conversations]);

  const handleSendMessage = (textToSend?: string) => {
    const finalMsg = textToSend || typedMessage;
    if (!finalMsg.trim()) return;

    // 1. Locally append user messages
    setConversations((prev) => [...prev, { sender: "user", text: finalMsg }]);
    setTypedMessage("");

    // 2. Direct dispatch to WA API after short pause
    setTimeout(() => {
      const text = encodeURIComponent(finalMsg);
      window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, "_blank", "noreferrer");
    }, 400);
  };

  const handlePresetTrigger = (preset: string) => {
    handleSendMessage(`Gostaria de agendar uma consultoria sobre: *${preset}*`);
  };

  const presets = [
    "Abertura de Empresa S.L.U.",
    "Mudar de Escritório Contábil",
    "BPO e Organização Financeira",
    "Desenquadrar meu MEI"
  ];

  return (
    <div id="whatsapp-widget-container" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Dynamic Chat Dialog popup */}
      {isOpen && (
        <div
          id="chat-popup-widget"
          className="bg-white rounded-3xl w-[320px] sm:w-[360px] shadow-2xl border border-slate-150 overflow-hidden flex flex-col mb-4 transition-all duration-300 transform scale-100 origin-bottom-right"
        >
          {/* Header */}
          <div className="bg-slate-900 p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 font-display font-black flex items-center justify-center border border-teal-500/30 text-sm uppercase">
                  DU
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-slate-900" />
              </div>
              <div>
                <h4 className="font-display font-extrabold text-sm tracking-tight">Atendimento DUOS</h4>
                <p className="text-[10px] text-teal-400 font-mono">Online · Geralmente responde na hora</p>
              </div>
            </div>

            <button
              id="close-chat-widget"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Message Area */}
          <div className="flex-1 p-4 bg-slate-50/70 h-[220px] overflow-y-auto custom-scrollbar space-y-3 flex flex-col justify-end">
            
            {conversations.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed font-light ${
                  msg.sender === "agent"
                    ? "bg-white text-slate-850 shadow-xs border border-slate-100 self-start rounded-tl-none font-sans"
                    : "bg-teal-600 text-white self-end rounded-tr-none font-sans"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="bg-white text-slate-400 shadow-xs border border-slate-100 p-2.5 rounded-2xl rounded-tl-none self-start flex items-center space-x-1 text-xs font-mono">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

          </div>

          {/* Preset options picker */}
          <div className="p-3 border-t border-slate-100 bg-white space-y-1.5 max-h-[110px] overflow-y-auto custom-scrollbar">
            <span className="text-[9.5px] text-slate-400 font-mono block uppercase">Clique em um assunto rápido:</span>
            <div className="flex flex-wrap gap-1.5">
              {presets.map((p, i) => (
                <button
                  id={`preset-btn-${i}`}
                  key={i}
                  onClick={() => handlePresetTrigger(p)}
                  className="bg-slate-50 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-500/20 border border-slate-200 text-slate-700 text-[10.5px] px-2.5 py-1 rounded-md transition-all text-left truncate cursor-pointer"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Inputs bar footer */}
          <div className="p-3 border-t border-slate-100 bg-slate-50 flex items-center space-x-2">
            <input
              id="widget-input-message"
              type="text"
              value={typedMessage}
              onChange={(e) => setTypedMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Digite sua mensagem contábil..."
              className="flex-1 bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-teal-500 focus:outline-none"
            />
            <button
              id="widget-btn-submit"
              onClick={() => handleSendMessage()}
              className="bg-teal-600 hover:bg-teal-700 text-white p-2.5 rounded-xl transition-all shadow-sm shrink-0 cursor-pointer"
            >
              <Send className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* Secure lock visual label */}
          <div className="bg-white text-center py-1.5 border-t border-slate-100 text-[9px] text-slate-400 font-mono">
            Atendimento blindado via WhatsApp Web Oficial
          </div>
        </div>
      )}

      {/* Primary circular floating button */}
      <button
        id="whatsapp-fab-button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/40 transition-all duration-300 group cursor-pointer hover:scale-105 active:scale-95 flex items-center justify-center"
        aria-label="Abrir WhatsApp Chat"
      >
        <MessageSquare className="w-7 h-7" />

        {/* Dynamic pending notification beacon */}
        {hasNotification && (
          <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[9px] text-white font-extrabold flex items-center justify-center leading-none shadow-sm">
              1
            </span>
          </span>
        )}

        {/* Hover label tooltip */}
        {!isOpen && (
          <span className="absolute right-16 bg-slate-900 border border-slate-800 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Fale com a DUOS Contabilidade
          </span>
        )}
      </button>

    </div>
  );
}
