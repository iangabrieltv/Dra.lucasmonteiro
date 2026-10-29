import React from 'react';
import { Search, FileSearch, Shield, CheckCircle2 } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Diagnóstico e Escuta Ativa',
      description:
        'Compreensão aprofundada dos fatos, das particularidades do negócio ou do patrimônio e dos objetivos específicos apresentados pelo cliente.',
      icon: <Search className="w-5 h-5 text-[#8D7952]" />,
    },
    {
      step: '02',
      title: 'Análise Técnica e Mapeamento de Riscos',
      description:
        'Exame pormenorizado de cláusulas contratuais, histórico documental e potenciais vulnerabilidades jurídicas que possam gerar passivos futuros.',
      icon: <FileSearch className="w-5 h-5 text-[#8D7952]" />,
    },
    {
      step: '03',
      title: 'Estratégia Jurídica Personalizada',
      description:
        'Desenvolvimento de soluções sob medida, seja na redação e revisão de minutas ou na condução de negociações estratégicas de alto impacto.',
      icon: <Shield className="w-5 h-5 text-[#8D7952]" />,
    },
    {
      step: '04',
      title: 'Acompanhamento Contínuo',
      description:
        'Comunicação clara, transparente e constante em todas as fases, assegurando estabilidade jurídica e confiança na tomada de decisões.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#8D7952]" />,
    },
  ];

  return (
    <section
      id="metodologia"
      className="relative bg-[#F5F2E9] text-[#102E29] py-24 sm:py-32 overflow-hidden border-t border-[#E7E1D5]"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-sans-manrope text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#8D7952] font-semibold">
              Metodologia de Atendimento
            </span>
            <span className="w-12 h-[1px] bg-[#8D7952]" />
          </div>

          <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal leading-[1.12] tracking-tight text-[#102E29]">
            Atuação estruturada,{' '}
            <span className="italic text-[#8D7952]">consultiva e preventiva.</span>
          </h2>

          <p className="font-sans-manrope text-base sm:text-lg text-[#4A605B] leading-relaxed mt-5 font-light">
            Nosso método de condução jurídica prioriza a solidez técnica e a mitigação
            antecipada de conflitos, garantindo previsibilidade para seus negócios.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-white p-7 border border-[#E7E1D5] hover:border-[#D8B779] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-full bg-[#F5F2E9] border border-[#E7E1D5] flex items-center justify-center group-hover:border-[#D8B779] transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-serif-cormorant text-2xl font-semibold text-[#8D7952]">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-serif-cormorant text-2xl font-medium text-[#102E29] mb-3 leading-snug group-hover:text-[#8D7952] transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans-manrope text-sm text-[#4A605B] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F5F2E9]">
                <div className="w-6 h-[2px] bg-[#8D7952]/40 rounded-full group-hover:w-12 group-hover:bg-[#8D7952] transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
