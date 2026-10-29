import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = 'inicio' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'INÍCIO', href: '#inicio', id: 'inicio' },
    { label: 'ÁREAS DE ATUAÇÃO', href: '#areas-de-atuacao', id: 'areas-de-atuacao' },
    { label: 'SOBRE NÓS', href: '#sobre-nos', id: 'sobre-nos' },
    { label: 'CONTEÚDOS', href: '#conteudo-juridico', id: 'conteudo-juridico' },
    { label: 'METODOLOGIA', href: '#metodologia', id: 'metodologia' },
    { label: 'PERGUNTAS', href: '#perguntas', id: 'perguntas' },
    { label: 'CONTATO', href: '#contato', id: 'contato' },
  ];

  return (
    <header className="fixed top-3 sm:top-5 md:top-[26px] left-1/2 -translate-x-1/2 w-[calc(100%-24px)] sm:w-[calc(100%-32px)] max-w-[1300px] z-50">
      {/* Capsule Navbar */}
      <nav
        style={{
          background: 'rgba(8, 39, 34, 0.88)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
        }}
        className="relative h-[56px] md:h-[68px] rounded-[50px] px-4 sm:px-7 border border-[rgba(217,179,107,0.32)] shadow-[0_12px_36px_rgba(0,0,0,0.35)] flex items-center justify-between transition-all duration-300"
      >
        {/* 1. Logo à esquerda */}
        <a
          href="#inicio"
          className="flex-shrink-0 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B36B] rounded-full"
          aria-label="Monteiro Advocacia Especializada - Início"
        >
          <Logo size="md" variant="light" />
        </a>

        {/* 2. Menu de navegação centralizado com os 7 links solicitados */}
        <div className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative font-montserrat text-[11px] xl:text-[12px] uppercase tracking-[0.12em] xl:tracking-[0.14em] font-medium transition-colors py-1 whitespace-nowrap ${
                  isActive
                    ? 'text-[#D9B36B]'
                    : 'text-[#E1E3DC] hover:text-[#D9B36B]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D9B36B] rounded-full shadow-[0_0_8px_rgba(217,179,107,0.6)]"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* 3. Botão "Fale Conosco →" à direita */}
        <div className="hidden sm:flex items-center flex-shrink-0">
          <a
            href="https://wa.me/558296072142?text=Ol%C3%A1%2C%20Dr.%20Lucas.%20Gostaria%20de%20solicitar%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D9B36B] bg-transparent text-[#E8D6AE] font-montserrat text-[11px] xl:text-[12px] uppercase tracking-[0.12em] font-semibold transition-all duration-300 hover:bg-[#D9B36B] hover:text-[#082722] hover:border-[#D9B36B] shadow-[0_2px_14px_rgba(217,179,107,0.15)] active:scale-[0.98] whitespace-nowrap"
          >
            <span>Fale Conosco</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D9B36B] group-hover:text-[#082722] group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>

        {/* Botão Mobile/Tablet Hamburger (para telas onde a barra não cabe inteira) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#E1E3DC] hover:text-[#D9B36B] transition-colors focus-visible:outline-none"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#D9B36B]" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Menu Mobile/Tablet Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(8, 39, 34, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
          className="lg:hidden mt-3 p-6 rounded-[32px] border border-[rgba(217,179,107,0.3)] shadow-[0_18px_45px_rgba(0,0,0,0.5)] flex flex-col gap-3 animate-in fade-in slide-in-from-top-3 duration-200"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-montserrat text-[12px] tracking-[0.14em] uppercase py-2 border-b border-[#0D3831]/70 transition-colors flex items-center justify-between ${
                  isActive ? 'text-[#D9B36B] font-semibold' : 'text-[#E1E3DC] hover:text-[#D9B36B]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-[#D9B36B]" />}
              </a>
            );
          })}

          <a
            href="https://wa.me/558296072142?text=Ol%C3%A1%2C%20Dr.%20Lucas.%20Gostaria%20de%20solicitar%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#D9B36B] text-[#082722] font-montserrat text-[12px] uppercase tracking-[0.14em] font-bold shadow-md hover:bg-[#E8D6AE] transition-colors"
          >
            <span>Fale Conosco no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};
