import React from 'react';
import { Logo } from './Logo.tsx';
import { Instagram, Phone, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#021F1C] text-[#F7F5EF] pt-14 sm:pt-16 pb-12 border-t border-[#8D7952]/30 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Main Footer Row: Brand Identity & Social Channels */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#8D7952]/20">
          
          <div>
            <Logo size="lg" variant="light" />
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="https://www.instagram.com/lucasmonteiro1/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#8D7952]/50 bg-[#032F2B] hover:bg-[#D8B779] hover:text-[#032F2B] text-[#D8B779] flex items-center justify-center transition-all shadow-sm"
              aria-label="Instagram @lucasmonteiro1"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/558296072142"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#8D7952]/50 bg-[#032F2B] hover:bg-[#D8B779] hover:text-[#032F2B] text-[#D8B779] flex items-center justify-center transition-all shadow-sm"
              aria-label="WhatsApp de Atendimento"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="mailto:monteiroesilvaadv@gmail.com"
              className="w-10 h-10 rounded-full border border-[#8D7952]/50 bg-[#032F2B] hover:bg-[#D8B779] hover:text-[#032F2B] text-[#D8B779] flex items-center justify-center transition-all shadow-sm"
              aria-label="E-mail Institucional"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Bar: Rights & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans-manrope text-[#C4CECA]/70">
          <p>
            © {new Date().getFullYear()} Monteiro Advocacia Especializada. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[11px]">Arapiraca – Alagoas</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#D8B779] hover:text-[#E9D1A0] transition-colors"
              aria-label="Voltar ao topo da página"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
