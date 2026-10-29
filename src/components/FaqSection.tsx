import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Como funciona a atuação jurídica preventiva em contratos e negócios?',
      answer:
        'A advocacia preventiva consiste na análise e estruturação prévia de instrumentos contratuais antes da assinatura. Identificamos cláusulas ambíguas, penalidades desproporcionais e brechas de responsabilidade civil, mitigando o risco de litígios judiciais custosos e desgastantes.',
    },
    {
      question: 'Quais os principais pontos observados em negociações e locações imobiliárias?',
      answer:
        'Avaliamos a segurança registral do imóvel, certidões negativas de ônus reais, cláusulas resolutivas, garantias locatícias, direito de preferência, prazos de renovação compulsória e proteção do fundo de comércio nas locações comerciais.',
    },
    {
      question: 'O escritório atende demandas fora de Arapiraca / Alagoas?',
      answer:
        'Sim. Embora nossa sede física e atuação regional estejam em Arapiraca – AL, prestamos consultoria contratual e imobiliária remota para empresas e clientes em todo o território nacional por meio de canais digitais seguros.',
    },
    {
      question: 'Como a assessoria contratual previne conflitos entre sócios e parceiros?',
      answer:
        'Por meio da redação clara de acordos de sócios, memorandos de entendimento (MoU) e contratos de prestação de serviços com cláusulas de governança, resolução consensual de impasses e estipulação de deveres e remunerações equilibradas.',
    },
    {
      question: 'Como iniciar o contato para uma primeira avaliação da minha demanda?',
      answer:
        'Basta entrar em contato pelo WhatsApp oficial (+55 82 9607-2142) ou preencher o formulário institucional. Faremos um primeiro alinhamento para compreender a urgência e agendar uma análise aprofundada da sua situação.',
    },
  ];

  return (
    <section
      id="perguntas"
      className="relative bg-[#052722] text-[#F7F5EF] py-24 sm:py-32 overflow-hidden border-t border-[#8D7952]/20"
    >
      <div className="max-w-[1000px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#D8B779]" />
            <span className="font-sans-manrope text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#D8B779] font-semibold">
              Perguntas Frequentes
            </span>
            <span className="w-8 h-[1px] bg-[#D8B779]" />
          </div>

          <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.14] text-[#F7F5EF]">
            Esclarecimentos sobre nossa{' '}
            <span className="italic text-[#D8B779]">atuação e consultoria.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#8D7952]/30 bg-[#032F2B]/60 overflow-hidden transition-all duration-200 hover:border-[#D8B779]/60"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D8B779]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-cormorant text-xl sm:text-2xl font-medium text-[#F7F5EF]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#8D7952]/40 flex items-center justify-center flex-shrink-0 text-[#D8B779] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#0A3D36]' : 'bg-[#052722]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-[#C4CECA] font-sans-manrope text-sm sm:text-base leading-relaxed border-t border-[#8D7952]/20 font-light animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
