import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureCounter from "./components/FeatureCounter";
import Services from "./components/Services";
import Assessoria from "./components/Assessoria";
import Simulator from "./components/Simulator";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BUSINESS_INFO } from "./types";

export default function App() {
  const [showWhatsAppBadge, setShowWhatsAppBadge] = useState(false);

  useEffect(() => {
    // Show WhatsApp helper button text badge after a short delay
    const timer = setTimeout(() => {
      setShowWhatsAppBadge(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleWhatsAppFloatingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const text = encodeURIComponent("Olá! Estou navegando no site de vocês e gostaria de agendar uma consultoria estratégica contábil.");
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="app-root-frame" className="min-h-screen bg-slate-950 text-slate-100 relative flex flex-col selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden">
      
      {/* Background Mesh Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen">
        <div className="absolute top-[-5%] left-[-10%] w-[60%] h-[40%] bg-blue-650/15 blur-[120px] rounded-full"></div>
        <div className="absolute top-[30%] right-[-10%] w-[50%] h-[45%] bg-indigo-500/12 blur-[130px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[60%] h-[50%] bg-blue-500/10 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[40%] bg-indigo-600/15 blur-[120px] rounded-full"></div>
      </div>

      {/* 1. Header Navigation */}
      <Navbar onScrollTo={handleScrollToSection} />

      {/* 2. Hero Presentation Panel */}
      <Hero onScrollTo={handleScrollToSection} />

      {/* 3. Social Proof/Stats Grid */}
      <FeatureCounter />

      {/* 4. Strategic Services catalog */}
      <Services />

      {/* 4.5 Assessoria methodology */}
      <Assessoria />

      {/* 5. Interactive tax savings simulator */}
      <Simulator />

      {/* 6. Contact consultations request forms */}
      <Contact />

      {/* 7. Footer Credits */}
      <Footer />

      {/* Floating Action WhatsApp Contact with badge overlay */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {showWhatsAppBadge && (
          <div className="px-4 py-2 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-full text-[11px] font-bold text-slate-200 shadow-2xl animate-fade-in hidden sm:block">
            Atendimento <strong>Consultor Sênior</strong>
          </div>
        )}
        <a 
          id="whatsapp-fixed-anchor"
          href="#"
          onClick={handleWhatsAppFloatingClick}
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:scale-106 active:scale-95 transition-all text-white hover:bg-[#20ba59]"
          aria-label="Fale conosco agora no WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>

    </div>
  );
}
