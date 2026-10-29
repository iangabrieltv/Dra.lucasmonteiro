# Monteiro Advocacia Especializada — Plano de Implementação

Landing page institucional e de autoridade jurídica de alto padrão para a Monteiro Advocacia Especializada (Dr. Antonio Lucas dos Santos Monteiro), projetada sob a estética "Editorial Jurídico Contemporâneo" com tipografia refinada, alternância de fundos Dark/Light e máxima fidelidade visual às referências do cliente.

## User Review & Critical Decisions

> [!IMPORTANT]
> Decisões e dados estratégicos confirmados na Fase 1 para nortear toda a implementação:
> - **Canal de Contato Prioritário:** O número principal para o botão flutuante e chamadas de ação (CTA) para WhatsApp será `+55 82 9607-2142`, com o número cadastral institucional `(82) 98234-4712` complementando os canais no rodapé.
> - **Hierarquia de Nome de Marca:** A marca pública principal no topo (Navbar flutuante e Hero) será **Monteiro Advocacia Especializada**, enquanto a razão social **Monteiro e Silva Advogados Associados** ancorará os dados formais e o endereço completo no rodapé institucional.
> - **Endereço e Dados Cadastrais Confirmados:**
>   - *Advogado:* Antonio Lucas dos Santos Monteiro
>   - *Endereço:* Rua Aristeu Ferreira Queiroz, s/n, Bairro Brasília, Arapiraca – AL, CEP 57314-020
>   - *E-mail institucional:* `monteiroesilvaadv@gmail.com`
>   - *Instagram oficial:* `@lucasmonteiro1`
> - **Processo de Desenvolvimento por Seções:** Cada bloco (Hero, Áreas de Atuação, Sobre o Advogado, Conteúdos Jurídicos, etc.) será implementado e refinado individualmente conforme o envio das imagens de referência oficiais.

---

## 1. Visão Geral e Conceito Central

- **O que a aplicação entrega:** Uma experiência digital jurídica de alto padrão e tom editorial, combinando autoridade técnica, discrição e segurança institucional sem recorrer a clichês de marketing agressivo ou templates genéricos de advocacia.
- **Público-Alvo:** Empresários, investidores imobiliários, locadores, locatários e indivíduos que buscam segurança jurídica preventiva, análise rigorosa de contratos e estruturação societária/imobiliária em Alagoas e no cenário nacional.
- **Valor Principal:** Apresentar a competência do Dr. Antonio Lucas dos Santos Monteiro de forma transparente e contemporânea, com caminhos diretos para consulta e esclarecimento prévio de demandas jurídicas.

---

## 2. Experiência do Usuário e Design System

### A. Paleta Oficial e Ritmo de Fundos
- **Proporção Visual:** 70% verde/off-white + 20% neutros + 10% dourado champagne.
- **Tokens de Cores:**
  - `Deep Teal` (`#032F2B`): Base institucional de autoridade.
  - `Dark Teal` (`#052722`) e `Forest Teal` (`#0A3D36`): Profundidade e superfícies de cards.
  - `Champagne Gold` (`#D8B779`): Assinatura de destaque tipográfico e botões de alta conversão.
  - `Soft Gold` (`#E9D1A0`): Acentos suaves e linhas de contorno em hover.
  - `Soft White` (`#F7F5EF`): Tipografia primária em fundos escuros.
  - `Muted Sage Gray` (`#C4CECA`): Tipografia secundária e metadados.
  - `Warm Off-White` (`#F5F2E9`): Fundo claro editorial para quebra de ritmo e conforto de leitura.
  - `Deep Green` (`#102E29`): Tipografia principal em fundos claros.
  - `Bordas:` `rgba(216,183,121,0.35)` em ambiente dark e `#E7E1D5` em ambiente light.
- **Ritmo de Fundos:** Alternância calculada `DARK (Hero) → DARK (Áreas) → LIGHT (Sobre) → DARK (Conteúdos) → LIGHT (Atendimento/FAQ) → DARK (Contato & Rodapé)`.

### B. Hierarquia Tipográfica
- **Títulos & Headlines:** *Cormorant Garamond* (500, editorial, serifada, com palavras estratégicas em itálico dourado para guiar o olhar).
- **Interface & Textos:** *Manrope* (geométrica, moderna, alta legibilidade para navegação, parágrafos e botões).
- **Escala de Espaçamento:** Margens generosas (100–140px entre seções no desktop, max-width 1200–1280px, padding horizontal 40–64px).

### C. Fluxo de Navegação e Seções
1. **Navbar Flutuante:** Container arredondado translúcido com efeito blur suave, logotipo oficial, 4 links diretos com scroll suave e botão de contato primário.
2. **Seção 01 — Hero:** Composição assimétrica editorial, headline de proteção patrimonial, fotografia oficial integrada ao fundo verde-petróleo, credenciais e CTA direto de WhatsApp.
3. **Seção 02 — Áreas de Atuação:** 3 cards assimétricos com foco central em *Contratos e Prevenção de Riscos* ladeado por *Direito Imobiliário* e *Direito Empresarial*.
4. **Seção 03 — Conheça o Advogado (Light):** Seção editorial em `#F5F2E9` com a fotografia do Dr. Lucas Monteiro, narrativa de propósito e compromisso com o cliente.
5. **Seção 04 — Conteúdos Jurídicos (Dark):** Mostruário de 3 publicações em vídeo com temas reais do Instagram, permitindo abertura de prévia modal e redirecionamento para `@lucasmonteiro1`.
6. **Seções 05 a 08 — Atendimento, FAQ, Contato Direto & Rodapé Institucional:** Etapas do atendimento preventivo, respostas claras sem jargões, canais diretos e assinatura jurídica formal (Monteiro e Silva Advogados Associados).

---

## 3. Decisões Técnicas e Arquitetura de Produto

- **Decisão 1: Implementação Fiel Seção por Seção**
  - *Abordagem:* O código é modulado em componentes específicos por seção (`HeroSection`, `PracticeAreas`, `AboutSection`, `LegalContent`, etc.), permitindo que cada etapa receba a referência gráfica correspondente e seja ajustada com precisão cirúrgica sem afetar as demais.
  - *Motivo:* Respeita rigorosamente a metodologia de trabalho estabelecida pelo cliente.
- **Decisão 2: Integração de Contato e WhatsApp Inteligente**
  - *Abordagem:* Link direto formatado para `https://wa.me/558296072142` com mensagem prévia amigável e profissional (`"Olá, Dr. Lucas. Gostaria de solicitar uma orientação jurídica sobre..."`), além de formulário modal de triagem opcional.
  - *Motivo:* Reduz o atrito de conversão e mantém o tom ético e consultivo.

---

## 4. Arquitetura de Componentes

```
┌────────────────────────────────────────────────────────────────────────┐
│                               App.tsx                                  │
│                 (Design Tokens & Providers de Estado)                  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
    ┌───────────────────────────────┼───────────────────────────────┐
    │                               │                               │
┌───▼──────────────────┐  ┌─────────▼────────────┐  ┌───────────────▼────┐
│   NavbarFloating     │  │     HeroSection      │  │   PracticeAreas    │
│  (Blur, Links, CTA)  │  │ (Headline, Foto, CTA)│  │ (3 Cards, Destaque)│
└───┬──────────────────┘  └──────────────────────┘  └────────────────────┘
    │
    ├───────────────────────────────┬───────────────────────────────┐
    │                               │                               │
┌───▼──────────────────┐  ┌─────────▼────────────┐  ┌───────────────▼────┐
│     AboutSection     │  │     LegalContent     │  │   ContactFooter    │
│ (Light, Foto, Bio)   │  │ (Reels/Cards, Modal) │  │(Endereço, Tel, CNPJ│
└──────────────────────┘  └──────────────────────┘  └────────────────────┘
```

---

## 5. Próximos Passos Imediatos

1. Aprovação do plano de implementação pelo cliente.
2. Recebimento da imagem de referência visual oficial da **Seção 01 — Hero** (e fotografias oficiais do Dr. Lucas Monteiro e logomarca).
3. Construção e validação pixel-perfect da Hero com responsividade total e microinterações discretas.
