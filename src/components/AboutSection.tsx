import React from 'react';
import { ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="sobre-nos"
      className="relative bg-[#F5F2E9] text-[#102E29] py-24 sm:py-32 overflow-hidden border-t border-[#E7E1D5]"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Portrait with Gold Backing Outline */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px]">
              {/* Offset Gold Accent Frame behind image matching image_112bc538.png */}
              <div
                aria-hidden="true"
                className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full rounded-2xl border-2 border-[#D8B779] pointer-events-none"
              />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(16,46,41,0.12)] bg-[#E7E1D5] border border-[#E7E1D5]">
                <img
                  src="/public/assets/aistudio/image_eb696646.png"
                  alt="Dr. Antonio Lucas dos Santos Monteiro - Advogado"
                  className="w-full h-[480px] sm:h-[540px] object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span className="font-sans-manrope text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#8D7952] font-semibold">
                Sobre o Advogado
              </span>
              <span className="w-12 h-[1px] bg-[#8D7952]" />
            </div>

            {/* Title with Italic Gold Accent */}
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal leading-[1.12] tracking-tight text-[#102E29]">
              Conhecimento jurídico com foco na{' '}
              <span className="italic text-[#8D7952]">
                proteção dos seus interesses.
              </span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 mt-6 sm:mt-8">
              <p className="font-sans-manrope text-base sm:text-lg text-[#2C4640] leading-relaxed font-normal">
                Lucas Monteiro Advocacia Especializada atua em questões imobiliárias e
                empresariais, com atenção à análise de contratos, à prevenção de riscos e à
                segurança jurídica nas relações comerciais.
              </p>

              <p className="font-sans-manrope text-sm sm:text-base text-[#4A605B] leading-relaxed font-light">
                O trabalho busca compreender as necessidades de cada cliente e oferecer
                orientação jurídica adequada à situação apresentada, pautando-se pelo rigor
                técnico, discrição e transparência.
              </p>
            </div>

            {/* Action CTA Button */}
            <div className="mt-8 sm:mt-10">
              <a
                href="#contato"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[#032F2B] hover:bg-[#0A3D36] text-[#F7F5EF] font-sans-manrope text-xs sm:text-sm uppercase tracking-[0.12em] font-semibold transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.99]"
              >
                <span>Conheça o escritório</span>
                <ArrowRight className="w-4 h-4 text-[#D8B779] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Institutional Credentials Badge */}
            <div className="mt-10 pt-6 border-t border-[#E7E1D5] flex flex-wrap items-center gap-6 text-xs text-[#6B7E78] font-sans-manrope">
              <div>
                <span className="font-semibold text-[#102E29] block">Dr. Antonio Lucas Monteiro</span>
                <span>OAB/AL • Arapiraca</span>
              </div>
              <div className="w-[1px] h-8 bg-[#E7E1D5] hidden sm:block" />
              <div>
                <span className="font-semibold text-[#102E29] block">Sociedade Registrada</span>
                <span>Monteiro e Silva Advogados Associados</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
