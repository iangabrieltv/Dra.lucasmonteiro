import React from 'react';
import { ArrowUpRight, ArrowRight, Home, Building2, ShieldCheck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen hero-bg-section text-[#F7F5EF] flex flex-col justify-between overflow-hidden pt-[290px] xs:pt-[330px] sm:pt-[420px] md:pt-36 lg:pt-40"
    >

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-[1240px] w-full mx-auto px-5 sm:px-8 lg:px-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Copy (Preserved exactly as before on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center py-6 sm:py-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6">
              <span className="w-6 sm:w-12 h-[1px] bg-[#D8B779] flex-shrink-0" />
              <span className="font-sans-manrope text-[10px] xs:text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.24em] uppercase text-[#D8B779] font-semibold">
                Monteiro Advocacia Especializada
              </span>
            </div>

            {/* Headline with strategic Garamond Italic Gold accent — perfectly balanced on mobile & identical on desktop */}
            <h1 className="font-serif-cormorant text-[32px] xs:text-[38px] sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.14] sm:leading-[1.08] tracking-tight text-[#F7F5EF]">
              <span className="block font-normal">Segurança jurídica</span>
              <span className="block mt-0.5 sm:mt-1 font-bold">
                <span className="hidden sm:inline">para </span>
                <span className="sm:hidden font-normal">para proteger seu</span>
                <span className="hidden sm:inline">proteger seu</span>
              </span>
              <span className="block font-serif-cormorant italic font-normal text-[#D8B779] mt-0.5 sm:mt-1">
                patrimônio e seus{' '}
                <span className="sm:hidden inline">negócios.</span>
              </span>
              <span className="hidden sm:block font-serif-cormorant italic font-normal text-[#D8B779]">
                negócios.
              </span>
            </h1>

            {/* Supporting description */}
            <p className="font-sans-manrope text-sm sm:text-lg text-[#C4CECA] leading-relaxed max-w-xl mt-5 sm:mt-8 font-light">
              Atuação jurídica em questões imobiliárias e empresariais, com atenção aos
              contratos e à prevenção de riscos.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mt-7 sm:mt-10">
              {/* Primary CTA (Champagne Gold with dark icon badge) */}
              <a
                href="https://wa.me/558296072142?text=Ol%C3%A1%2C%20Dr.%20Lucas.%20Gostaria%20de%20solicitar%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20especializada."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between sm:justify-center gap-4 px-6 py-3.5 sm:py-4 rounded-lg bg-gradient-to-r from-[#D8B779] via-[#E2C793] to-[#E9D1A0] text-[#102E29] font-sans-manrope text-sm tracking-[0.06em] font-semibold shadow-[0_4px_24px_rgba(216,183,121,0.25)] hover:shadow-[0_6px_30px_rgba(216,183,121,0.4)] transition-all duration-300 hover:brightness-105 active:scale-[0.99]"
              >
                <span>Fale conosco</span>
                <span className="w-7 h-7 rounded-full bg-[#032F2B] flex items-center justify-center text-[#D8B779] group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>

              {/* Secondary CTA (Outlined Dark Teal) */}
              <a
                href="#areas-de-atuacao"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-lg bg-[#052722]/60 hover:bg-[#0A3D36]/80 border border-[#8D7952]/60 hover:border-[#D8B779] text-[#F7F5EF] font-sans-manrope text-sm tracking-[0.06em] font-medium transition-all duration-300"
              >
                <span>Conheça nossas áreas</span>
                <ArrowRight className="w-4 h-4 text-[#D8B779] group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Column: Grid Spacer maintaining exact column grid balance */}
          <div className="lg:col-span-5 hidden lg:block min-h-[480px]" aria-hidden="true" />

        </div>
      </div>

      {/* Bottom Horizontal Service Strip pinned across the entire Hero base */}
      <div className="relative z-10 w-full mt-12 sm:mt-16 border-t border-b border-[#8D7952]/30 bg-[#052722]/85 backdrop-blur-md">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#8D7952]/30">
            
            {/* Item 1: Direito Imobiliário */}
            <a
              href="#areas-de-atuacao"
              className="group flex items-center justify-between py-5 px-4 sm:px-6 hover:bg-[#0A3D36]/40 transition-colors duration-200"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#0A3D36]/80 border border-[#D8B779]/40 flex items-center justify-center text-[#D8B779] flex-shrink-0">
                  <Home className="w-4 h-4" />
                </div>
                <span className="font-sans-manrope text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-[#F7F5EF] group-hover:text-[#D8B779] transition-colors">
                  Direito Imobiliário
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#8D7952] group-hover:text-[#D8B779] group-hover:translate-x-1 transition-all" />
            </a>

            {/* Item 2: Direito Empresarial */}
            <a
              href="#areas-de-atuacao"
              className="group flex items-center justify-between py-5 px-4 sm:px-6 hover:bg-[#0A3D36]/40 transition-colors duration-200"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#0A3D36]/80 border border-[#D8B779]/40 flex items-center justify-center text-[#D8B779] flex-shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <span className="font-sans-manrope text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-[#F7F5EF] group-hover:text-[#D8B779] transition-colors">
                  Direito Empresarial
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#8D7952] group-hover:text-[#D8B779] group-hover:translate-x-1 transition-all" />
            </a>

            {/* Item 3: Contratos e Prevenção de Riscos */}
            <a
              href="#areas-de-atuacao"
              className="group flex items-center justify-between py-5 px-4 sm:px-6 hover:bg-[#0A3D36]/40 transition-colors duration-200"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#0A3D36]/80 border border-[#D8B779]/40 flex items-center justify-center text-[#D8B779] flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="font-sans-manrope text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-[#F7F5EF] group-hover:text-[#D8B779] transition-colors">
                  Contratos e Prevenção de Riscos
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#8D7952] group-hover:text-[#D8B779] group-hover:translate-x-1 transition-all" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};
