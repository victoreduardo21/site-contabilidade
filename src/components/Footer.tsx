export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="app-footer"
      className="relative z-20 px-6 sm:px-12 py-8 border-t border-white/5 bg-slate-950/50 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.16em] font-medium text-slate-500 text-center md:text-left"
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
        <span className="text-slate-400 font-semibold font-sans"> Santos - SP</span>
        <span>3M28+XG Vila Matias</span>
        <span>Consultoria Fiscal</span>
        <span>Auditoria Estratégica</span>
      </div>
      <div className="text-slate-400">
        &copy; {currentYear} Duos Contabilidade. Todos os direitos reservados. CNPJ: 12.345.678/0001-90.
      </div>
    </footer>
  );
}
