import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('Direito Imobiliário');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const textMsg = encodeURIComponent(
      `Olá, Dr. Lucas. Meu nome é ${name || 'um cliente'}.\n\nGostaria de orientação jurídica sobre: *${topic}*.\n\nDetalhes da demanda: ${message || 'Gostaria de agendar uma consulta.'}`
    );
    window.open(`https://wa.me/558296072142?text=${textMsg}`, '_blank');
  };

  return (
    <section
      id="contato"
      className="relative bg-[#032F2B] text-[#F7F5EF] py-24 sm:py-32 overflow-hidden border-t border-[#8D7952]/30"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Channels & Office Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[1px] bg-[#D8B779]" />
              <span className="font-sans-manrope text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#D8B779] font-semibold">
                Canais de Atendimento
              </span>
            </div>

            <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.12] text-[#F7F5EF] mb-6">
              Inicie seu atendimento com{' '}
              <span className="italic text-[#D8B779]">segurança e agilidade.</span>
            </h2>

            <p className="font-sans-manrope text-base text-[#C4CECA] leading-relaxed font-light mb-10">
              Estamos prontos para analisar sua demanda com o rigor técnico, discrição e
              eficiência que seus interesses exigem.
            </p>

            {/* Contact Cards List */}
            <div className="space-y-4">
              
              {/* Telefone Institucional */}
              <div className="p-5 rounded-xl bg-[#052722]/70 border border-[#8D7952]/30 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#0A3D36] text-[#D8B779] border border-[#8D7952]/40 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-sans-manrope uppercase tracking-[0.16em] text-[#C4CECA] block">
                    Telefone Institucional
                  </span>
                  <span className="font-sans-manrope text-sm font-medium text-[#F7F5EF]">
                    (82) 98234-4712
                  </span>
                </div>
              </div>

              {/* E-mail */}
              <div className="p-5 rounded-xl bg-[#052722]/70 border border-[#8D7952]/30 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#0A3D36] text-[#D8B779] border border-[#8D7952]/40 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[11px] font-sans-manrope uppercase tracking-[0.16em] text-[#C4CECA] block">
                    E-mail do Escritório
                  </span>
                  <span className="font-sans-manrope text-sm font-medium text-[#F7F5EF] truncate block">
                    monteiroesilvaadv@gmail.com
                  </span>
                </div>
              </div>

              {/* Endereço Físico Confirmado */}
              <div className="p-5 rounded-xl bg-[#052722]/70 border border-[#8D7952]/30 flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#0A3D36] text-[#D8B779] border border-[#8D7952]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-sans-manrope uppercase tracking-[0.16em] text-[#C4CECA] block">
                    Endereço Oficial da Sede
                  </span>
                  <p className="font-sans-manrope text-sm text-[#F7F5EF] mt-1 leading-snug">
                    Rua Aristeu Ferreira Queiroz, s/n, Bairro Brasília
                  </p>
                  <span className="font-sans-manrope text-xs text-[#C4CECA]">
                    Arapiraca – AL • CEP 57314-020
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Direct Message Preparation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#052722]/90 border border-[#8D7952]/40 p-7 sm:p-10 shadow-2xl">
              <h3 className="font-serif-cormorant text-2xl sm:text-3xl font-medium text-[#F7F5EF] mb-2">
                Solicite uma Orientação Jurídica
              </h3>
              <p className="font-sans-manrope text-xs sm:text-sm text-[#C4CECA] mb-8 font-light">
                Preencha os dados abaixo para direcionar seu atendimento diretamente ao
                advogado responsável.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="client-name"
                    className="block font-sans-manrope text-xs uppercase tracking-[0.14em] text-[#D8B779] font-medium mb-2"
                  >
                    Seu Nome Completo
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Carlos Eduardo Silveira"
                    className="w-full px-4 py-3.5 rounded-lg bg-[#032F2B] border border-[#8D7952]/50 text-[#F7F5EF] placeholder-[#C4CECA]/40 font-sans-manrope text-sm focus:border-[#D8B779] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="client-topic"
                    className="block font-sans-manrope text-xs uppercase tracking-[0.14em] text-[#D8B779] font-medium mb-2"
                  >
                    Área de Interesse Jurídico
                  </label>
                  <select
                    id="client-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-lg bg-[#032F2B] border border-[#8D7952]/50 text-[#F7F5EF] font-sans-manrope text-sm focus:border-[#D8B779] focus:outline-none transition-colors"
                  >
                    <option value="Direito Imobiliário (Locação / Compra e Venda)">
                      Direito Imobiliário (Locação / Compra e Venda)
                    </option>
                    <option value="Contratos e Prevenção de Riscos">
                      Contratos e Prevenção de Riscos
                    </option>
                    <option value="Direito Empresarial e Societário">
                      Direito Empresarial e Societário
                    </option>
                    <option value="Outra demanda jurídica">Outra demanda jurídica</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="client-message"
                    className="block font-sans-manrope text-xs uppercase tracking-[0.14em] text-[#D8B779] font-medium mb-2"
                  >
                    Breve descrição da sua situação (Opcional)
                  </label>
                  <textarea
                    id="client-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Descreva resumidamente os pontos principais da sua dúvida ou contrato..."
                    className="w-full px-4 py-3.5 rounded-lg bg-[#032F2B] border border-[#8D7952]/50 text-[#F7F5EF] placeholder-[#C4CECA]/40 font-sans-manrope text-sm focus:border-[#D8B779] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-[#D8B779] via-[#E2C793] to-[#E9D1A0] text-[#102E29] font-sans-manrope text-sm font-bold tracking-[0.1em] uppercase shadow-lg hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#102E29]" />
                  <span>Enviar Solicitação de Atendimento</span>
                </button>

                <p className="font-sans-manrope text-[11px] text-[#C4CECA]/70 text-center leading-normal">
                  Seus dados e informações são tratados sob estrito sigilo profissional e normas
                  da OAB.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
