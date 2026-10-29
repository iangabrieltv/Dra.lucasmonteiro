import React, { useState } from 'react';
import { Play, ArrowRight, Instagram } from 'lucide-react';
import { WatermarkMonogram } from './WatermarkMonogram.tsx';
import { VideoModal, VideoContent } from './VideoModal.tsx';

export const LegalContentSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoContent | null>(null);

  const videos: VideoContent[] = [
    {
      id: 'locacao-comercial',
      reelId: 'DeMashqB-U0',
      duration: '01:24',
      category: 'DIREITO IMOBILIÁRIO',
      title: 'Locação comercial: o que você precisa saber?',
      image: '/public/assets/aistudio/image_12fe8b1f.png',
      synopsis:
        'Pontos indispensáveis antes de assinar um contrato de locação para seu ponto comercial: reformas e benfeitorias, direito de preferência, ação renovatória e prevenção de multas indevidas.',
      instagramUrl: 'https://www.instagram.com/reel/DeMashqB-U0/',
    },
    {
      id: 'clausulas-contratuais',
      reelId: 'Dd_irRvhSLu',
      duration: '01:32',
      category: 'CONTRATOS',
      title: 'Cláusulas contratuais que podem gerar problemas',
      image: '/public/assets/aistudio/image_42285a57.png',
      synopsis:
        'Por que modelos de internet de 3 páginas podem custar mais caro que 20 páginas estruturadas: penalidades desproporcionais, foros prejudiciais e a importância da redação preventiva.',
      instagramUrl: 'https://www.instagram.com/reel/Dd_irRvhSLu/',
    },
    {
      id: 'pejotizacao',
      reelId: 'Dd1U5chxELl',
      duration: '01:18',
      category: 'DIREITO EMPRESARIAL',
      title: 'Pejotização: o que você precisa entender',
      image: '/public/assets/aistudio/image_21432436.png',
      synopsis:
        'Ter CNPJ não afasta automaticamente o vínculo empregatício. Análise jurídica dos requisitos da relação de emprego (habitualidade, subordinação e remuneração) e proteção empresarial.',
      instagramUrl: 'https://www.instagram.com/reel/Dd1U5chxELl/',
    },
  ];

  return (
    <section
      id="conteudo-juridico"
      className="relative bg-[#021C18] text-[#F7F5EF] py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-[#8D7952]/20"
    >
      {/* Background Watermark Monogram on top right matching image_25abb31b.png */}
      <WatermarkMonogram
        className="-top-12 -right-20 w-[480px] h-[340px] lg:w-[680px] lg:h-[460px]"
        opacity={0.05}
      />

      {/* Decorative Gold Geometric Accent Line on bottom left matching image_25abb31b.png */}
      <div
        aria-hidden="true"
        className="absolute bottom-4 left-0 w-44 h-36 pointer-events-none opacity-30 select-none"
      >
        <svg
          viewBox="0 0 160 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full stroke-[#D8B779]"
        >
          <path d="M0 130 L160 0" strokeWidth="1.2" strokeOpacity="0.8" />
          <path d="M0 95 L35 130" strokeWidth="1" strokeOpacity="0.4" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Main Grid: Left Column (Headline/Copy) + Right Column (3 Cards Row) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
          
          {/* Left Column: Eyebrow, Title & Subtitle */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span className="font-sans-manrope text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#D8B779] font-semibold">
                Conteúdo Jurídico
              </span>
              <span className="w-12 h-[1px] bg-[#D8B779]" />
            </div>

            {/* Title with Garamond Italic Gold accent */}
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-normal leading-[1.12] tracking-tight text-[#F7F5EF]">
              Informação jurídica para{' '}
              <span className="italic text-[#D8B779] block mt-1">
                decisões mais conscientes.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="font-sans-manrope text-sm sm:text-base text-[#C4CECA] leading-relaxed mt-5 sm:mt-6 font-light max-w-md">
              Acompanhe conteúdos sobre contratos, imóveis, empresas e prevenção de riscos.
            </p>
          </div>

          {/* Right Column: 3 Instagram Reel Cards */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6 items-stretch">
              {videos.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedVideo(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedVideo(item);
                    }
                  }}
                  className="group relative rounded-2xl bg-[#03241F] border border-[#8D7952]/40 hover:border-[#D8B779] overflow-hidden flex flex-col justify-end transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B779] h-[430px] sm:h-[460px] lg:h-[470px]"
                >
                  {/* Background Reel Print / Cover Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => {
                      // Fallback in case of path prefix variance
                      const currentSrc = e.currentTarget.src;
                      if (currentSrc.includes('/public/assets/')) {
                        e.currentTarget.src = currentSrc.replace('/public/assets/', '/assets/');
                      }
                    }}
                    className="absolute inset-0 w-full h-full object-cover object-top brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Vignette Overlay to ensure typography and branding shine */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#021814] via-[#021814]/40 to-black/25 pointer-events-none" />

                  {/* Top Right Duration Tag */}
                  <div className="absolute top-4 right-4 z-10 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-mono tracking-wider text-[#F7F5EF] border border-white/10 drop-shadow">
                    {item.duration}
                  </div>

                  {/* Centered Circular Play Button */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    <div className="w-13 h-13 rounded-full border border-[#D8B779] bg-[#021C18]/60 backdrop-blur-md flex items-center justify-center text-[#D8B779] group-hover:scale-110 group-hover:bg-[#D8B779] group-hover:text-[#021C18] transition-all duration-300 shadow-[0_0_24px_rgba(216,183,121,0.3)]">
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </div>
                  </div>

                  {/* Bottom Card Content: Category, Title & Gold Dash */}
                  <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-end">
                    <span className="font-sans-manrope text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D8B779] block mb-2">
                      {item.category}
                    </span>

                    <h3 className="font-serif-cormorant text-lg sm:text-xl font-normal leading-snug text-[#F7F5EF] group-hover:text-[#D8B779] transition-colors line-clamp-3">
                      {item.title}
                    </h3>

                    {/* Bottom Gold Accent Dash */}
                    <div className="w-8 h-[2px] bg-[#D8B779] rounded-full mt-3 group-hover:w-14 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Centered Action Pill Button matching image_25abb31b.png */}
        <div className="flex justify-center mt-14 sm:mt-20">
          <a
            href="https://www.instagram.com/lucasmonteiro1/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#D8B779]/80 bg-[#03241F]/80 hover:bg-[#D8B779] hover:text-[#021C18] text-[#F7F5EF] font-sans-manrope text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_25px_rgba(216,183,121,0.35)] active:scale-[0.99]"
          >
            <span>Ver todos os conteúdos no Instagram</span>
            <ArrowRight className="w-4 h-4 text-[#D8B779] group-hover:text-[#021C18] group-hover:translate-x-1 transition-all" />
          </a>
        </div>

      </div>

      {/* Video Modal with Instagram Reel Embed */}
      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </section>
  );
};
