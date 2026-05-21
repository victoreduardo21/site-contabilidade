import { useState, useEffect } from "react";
import { Phone, MessageSquare, Menu, X } from "lucide-react";
import { BUSINESS_INFO } from "../types";

interface NavbarProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Navbar({ onScrollTo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "inicio", label: "Início" },
    { id: "servicos", label: "Serviços" },
    { id: "assessoria", label: "Assessoria" },
    { id: "simulador", label: "Simulador Fiscal" },
    { id: "contato", label: "Santos" },
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      id="app-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/60 backdrop-blur-xl shadow-xl border-b border-white/5 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavClick("inicio")}
          >
            <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg group-hover:from-blue-500 group-hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/20">
              <span className="text-white font-display font-extrabold text-xl leading-none">D</span>
              <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-450 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
            </div>
            <div className="ml-3">
              <div className="font-display font-extrabold text-lg text-white leading-none tracking-tight">
                DUOS <span className="text-blue-400 font-semibold font-sans">CONTABILIDADE</span>
              </div>
              <div className="text-[10px] text-slate-400 font-mono tracking-widest mt-1 uppercase font-semibold">
                Assessoria Empresarial
              </div>
            </div>
          </div>

          <div className="hidden md:flex gap-6 text-sm font-medium uppercase tracking-wider text-slate-300">
            {navLinks.map((link) => (
              <button
                id={`nav-link-${link.id}`}
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-md hover:bg-white/5 transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <button
              id="cta-nav-direct"
              onClick={() => handleNavClick("contato")}
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-blue-600/20 flex items-center transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 mr-1.5" />
              Falar com Especialista
            </button>
          </div>

          <div className="flex md:hidden">
            <button
              id="hamburger-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none transition-all cursor-pointer"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-menu-overlay" className="fixed inset-0 z-40 bg-black/65 backdrop-blur-sm md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <div
        id="mobile-drawer-panel"
        className={`fixed top-0 right-0 bottom-0 z-50 w-3/4 max-w-sm bg-slate-950/90 backdrop-blur-2xl border-l border-white/10 shadow-2xl flex flex-col justify-between p-6 md:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-md flex items-center justify-center">
                <span className="text-white font-display font-bold text-base">D</span>
              </div>
              <span className="ml-2 font-display font-extrabold text-white">DUOS Contabilidade</span>
            </div>
            <button
              id="close-drawer-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/5 cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-1.5">
            {navLinks.map((link) => (
              <button
                id={`mobile-nav-link-${link.id}`}
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="block w-full text-left px-4 py-3 rounded-lg text-base font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all border-l-2 border-transparent hover:border-blue-400 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 space-y-4">
          <a
            id="mobile-nav-tel-cta"
            href={`tel:${BUSINESS_INFO.whatsappNumber}`}
            className="flex items-center justify-center bg-white/5 hover:bg-white/10 text-white py-3 rounded-lg text-sm font-semibold font-mono border border-white/10 transition-all"
          >
            <Phone className="w-4 h-4 mr-2 text-blue-400" />
            {BUSINESS_INFO.phone}
          </a>
          <a
            id="mobile-nav-whatsapp-cta"
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Olá! Gostaria de agendar uma consultoria com a DUOS Contabilidade.`}
            target="_blank"
            referrerPolicy="no-referrer"
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg text-sm font-semibold transition-all shadow-md active:scale-95 text-center cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Iniciar no WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
