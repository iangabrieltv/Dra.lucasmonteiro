import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { PracticeAreasSection } from './components/PracticeAreasSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { LegalContentSection } from './components/LegalContentSection.tsx';
import { MethodologySection } from './components/MethodologySection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'inicio',
        'areas-de-atuacao',
        'sobre-nos',
        'conteudo-juridico',
        'metodologia',
        'perguntas',
        'contato',
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#032F2B] text-[#F7F5EF] selection:bg-[#D8B779] selection:text-[#032F2B]">
      {/* Floating Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections strictly in sequence */}
      <main>
        {/* 01 — Hero (Dark) matching image_38d595dc.png */}
        <HeroSection />

        {/* 02 — Áreas de Atuação (Dark) matching image_230d7b42.png */}
        <PracticeAreasSection />

        {/* 03 — Conheça o Advogado (Light) matching image_112bc538.png */}
        <AboutSection />

        {/* 04 — Conteúdo Jurídico (Dark) matching image_25abb31b.png */}
        <LegalContentSection />

        {/* 05 — Metodologia de Atendimento (Light) */}
        <MethodologySection />

        {/* 06 — Perguntas Frequentes (Dark) */}
        <FaqSection />

        {/* 07 — Contato Direto & Triagem (Dark) */}
        <ContactSection />
      </main>

      {/* 08 — Rodapé Institucional */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <aside aria-label="Acesso rápido WhatsApp" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
        <a
          href="https://wa.me/558296072142?text=Ol%C3%A1%2C%20Dr.%20Lucas.%20Gostaria%20de%20solicitar%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-[#D8B779] text-[#032F2B] font-sans-manrope text-[11px] sm:text-xs uppercase tracking-[0.12em] font-bold shadow-[0_6px_25px_rgba(216,183,121,0.4)] hover:bg-[#E9D1A0] hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Fale conosco diretamente no WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-[#032F2B] flex-shrink-0" />
          <span className="inline">WhatsApp</span>
        </a>
      </aside>
    </div>
  );
}
