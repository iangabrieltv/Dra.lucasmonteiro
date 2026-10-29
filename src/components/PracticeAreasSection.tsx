import React, { useState } from 'react';
import { Home, FileText, Briefcase, ArrowRight } from 'lucide-react';

interface PracticeArea {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  featured?: boolean;
}

export const PracticeAreasSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(1); // Card 02 highlighted by default

  const areas: PracticeArea[] = [
    {
      id: 'imobiliario',
      number: '01 —',
      title: 'Direito Imobiliário',
      description:
        'Segurança jurídica em negociações, contratos e operações imobiliárias, com atenção aos interesses envolvidos em cada transação.',
      icon: <Home className="w-5 h-5" />,
      image: '/src/assets/images/real_estate_architecture_1793205320209.jpg',
      featured: false,
    },
    {
      id: 'contratos',
      number: '02 —',
      title: 'Contratos e Prevenção de Riscos',
      description:
        'Análise e elaboração de contratos e estratégias jurídicas para prevenir riscos e garantir mais segurança em suas decisões.',
      icon: <FileText className="w-5 h-5" />,
      image: '/src/assets/images/legal_contract_fountain_pen_1793205320456.jpg',
      featured: true,
    },
    {
      id: 'empresarial',
      number: '03 —',
      title: 'Direito Empresarial',
      description:
        'Orientação jurídica em questões contratuais e empresariais, buscando maior segurança nas relações comerciais e nas decisões do negócio.',
      icon: <Briefcase className="w-5 h-5" />,
      image: '/src/assets/images/corporate_business_boardroom_1793205320210.jpg',
      featured: false,
    },
  ];

  return (
    <section
      id="areas-de-atuacao"
      style={{
        backgroundImage: "url('/public/assets/aistudio/image_b40e07d9.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="relative text-[#F7F5EF] py-24 sm:py-32 overflow-hidden border-t border-[#8D7952]/20"
    >

      <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-sans-manrope text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#D8B779] font-semibold">
              Áreas de Atuação
            </span>
            <span className="w-10 h-[1px] bg-[#D8B779]" />
          </div>

          {/* Controlled line break strictly as requested:
              Primeira linha: "Soluções jurídicas para"
              Segunda linha: "proteger seus interesses." (em itálico dourado) */}
          <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.12] tracking-tight text-[#F7F5EF]">
            Soluções jurídicas para <br className="hidden sm:inline" />
            <span className="italic font-normal text-left text-[#D8B779] text-[42px] sm:text-[56px] lg:text-[70px] leading-[1.05]">
              proteger seus interesses.
            </span>
          </h2>

          <p className="font-sans-manrope text-base sm:text-lg text-[#C4CECA] leading-relaxed mt-5 font-light">
            Atuação voltada às questões imobiliárias e empresariais, com atenção aos
            contratos, à segurança jurídica e à prevenção de riscos.
          </p>
        </div>

        {/* 3 Cards Grid with full background image coverage and dark teal translucent overlay */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {areas.map((area, idx) => {
            const isFeatured = area.featured || activeCard === idx;
            return (
              <div
                key={area.id}
                onMouseEnter={() => setActiveCard(idx)}
                style={{
                  backgroundImage: isFeatured
                    ? `linear-gradient(rgba(3, 35, 30, 0.74), rgba(3, 35, 30, 0.88)), url('${area.image}')`
                    : `linear-gradient(rgba(3, 35, 30, 0.80), rgba(3, 35, 30, 0.92)), url('${area.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                className={`group relative rounded-2xl flex flex-col justify-between transition-all duration-300 min-h-[460px] sm:min-h-[500px] p-7 sm:p-8 overflow-hidden ${
                  isFeatured
                    ? 'border-2 border-[#D8B779] shadow-[0_16px_48px_rgba(0,0,0,0.5),0_0_35px_rgba(216,183,121,0.22)] md:-translate-y-2'
                    : 'border border-[#8D7952]/40 hover:border-[#D8B779]/80 hover:shadow-xl'
                }`}
              >
                {/* Content Overlayed on the full background image */}
                <div className="relative z-10 flex flex-col">
                  {/* Top Header: Circular Icon Badge */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all mb-6 ${
                      isFeatured
                        ? 'border-[#D8B779] bg-[#032F2B]/80 text-[#D8B779] shadow-[0_0_15px_rgba(216,183,121,0.25)]'
                        : 'border-[#D8B779]/70 bg-[#032F2B]/70 text-[#D8B779] group-hover:border-[#D8B779]'
                    }`}
                  >
                    {area.icon}
                  </div>

                  {/* Number below icon */}
                  <span className="font-sans-manrope text-xs font-semibold tracking-[0.18em] text-[#D8B779] mb-3">
                    {area.number}
                  </span>

                  {/* Card Title */}
                  <h3
                    className={`font-serif-cormorant text-2xl sm:text-[30px] font-medium leading-snug mb-4 transition-colors ${
                      isFeatured
                        ? 'text-[#D8B779]'
                        : 'text-[#F7F5EF] group-hover:text-[#D8B779]'
                    }`}
                  >
                    {area.title}
                  </h3>

                  {/* Card Description */}
                  <p className="font-sans-manrope text-sm text-[#E1E3DC]/95 leading-relaxed font-light">
                    {area.description}
                  </p>
                </div>

                {/* Footer Action Link */}
                <div className="relative z-10 pt-6 mt-6 border-t border-[#D8B779]/20">
                  <a
                    href={`https://wa.me/558296072142?text=Ol%C3%A1%2C%20Dr.%20Lucas.%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20${encodeURIComponent(
                      area.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans-manrope text-xs uppercase tracking-[0.16em] font-semibold text-[#D8B779] hover:text-[#E9D1A0] transition-colors"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Pagination / Slider Indicator Dashes matching Anexo 1 */}
        <div className="flex items-center justify-center gap-2 mt-12 sm:mt-16">
          {areas.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveCard(idx)}
              className={`h-1 rounded-full transition-all duration-300 ${
                activeCard === idx
                  ? 'w-12 bg-[#D8B779]'
                  : 'w-8 bg-[#0A3D36] border border-[#8D7952]/40 hover:bg-[#8D7952]'
              }`}
              aria-label={`Ver área ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
