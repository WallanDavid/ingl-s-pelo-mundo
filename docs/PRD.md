# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## PROJETO FLUENTE NO MUNDO — REFATORAÇÃO COMERCIAL INTEGRAL
**Versão:** 2.0.0 (Produção) | **Status:** Aprovado para Implementação | **Data:** Outubro/2026

---

### 1. Visão Geral e Propósito do Produto

#### 1.1 Contexto
O **Fluente no Mundo** é uma escola de idiomas e comunidade de aprendizagem fundada pela professora **Amanda Beatriz**. O ecossistema interno dos alunos (`alunos.fluentenomundo.com`) conta com uma robusta infraestrutura pedagógica baseada na metodologia autoral **A.U.T.E.N.T.I.C.A**, sistema de repetição espaçada (SRS de Vocabulário), suporte personalizado via **SOS Professora**, aulas ao vivo semanais, módulo de pronúncia e aculturamento, gamificação com streaks diários e certificados modulares a cada 3 meses.

No entanto, o site comercial anterior era uma página única estática voltada a eventos esporádicos, falhando em comunicar o valor da plataforma, os diferenciais metodológicos e as opções claras de matrícula.

#### 1.2 Visão do Produto
Transformar o portal público `fluentenomundo.com` em um site comercial de ponta para edtech, transmitindo autoridade, sofisticação visual, transparência de preços, demonstração viva da experiência do aluno e uma jornada de conversão fluida para novos estudantes.

---

### 2. Personas e Público-Alvo

1. **Juliana, 29 anos — A Insegura Travada na Conversação**:
   - *Histórico*: Já fez cursinhos tradicionais por 3 anos, sabe gramática básica no papel, mas tem medo paralisante de falar ou pronunciar palavras errado.
   - *Necessidade*: Um ambiente acolhedor, sem julgamento, que ensine padrões de pronúncia reais (os 4Ps do Método) e ofereça contato direto com a professora para tirar dúvidas particulares.
2. **Rodrigo, 34 anos — O Profissional com Rotina Apertada**:
   - *Histórico*: Precisa de inglês para avançar na carreira e viajar, mas não tem tempo para aulas presenciais longas de 2 horas.
   - *Necessidade*: Um cronograma semanal e mensal com metas diárias curtas, revisão espaçada no celular e certificação de carga horária a cada 3 meses.
3. **Beatriz, 23 anos — A Entusiasta Global e Futura Poliglota**:
   - *Histórico*: Fascinada por viagens, séries, músicas e outras culturas do mundo.
   - *Necessidade*: A **Jornada Poliglota** e o módulo de **Vivência Global** para aprender sem rigidez mecânica.

---

### 3. Pilares da Proposta de Valor Comercial

1. **Metodologia Autêntica (A.U.T.E.N.T.I.C.A)**:
   - 9 pilares pedagógicos estruturados integrando neurocognição, controle emocional, aquisição 3R (Revisão, Repetição, Reapresentação) e os 4Ps (Padrões, Pronúncia, Psicológico, Prática).
2. **Presença Humana Real da Professora**:
   - Aulas ao vivo toda quarta-feira e mentoria individualizada pelo canal **SOS Professora** (resposta direta em até 48 horas em áudio ou texto).
3. **Plataforma Completa para o Aluno**:
   - Repetição espaçada (SRS) inteligente de vocabulário, trilhas de pronúncia de vogais e padrões, imersão cultural em séries/músicas, gamificação com streak diário e check-in.
4. **Certificação Modular de 3 em 3 Meses**:
   - Metas alcançáveis de curto e médio prazo, garantindo motivação e comprovação curricular sem a frustração de cursos que demoram anos para emitir um certificado.
5. **Acesso Democrático e Transparente**:
   - Assinatura por apenas **R$ 39,90/mês**, garantia incondicional de 7 dias e cancelamento simples, eliminando os contratos abusivos do mercado tradicional.

---

### 4. Arquitetura de Informação e Páginas

O novo site adota uma estrutura multi-página limpa, semântica e orientada à conversão:

| Rota | Nome da Página | Objetivo Comercial & Conteúdo Principal |
| :--- | :--- | :--- |
| `/` | **Home** | Apresentação de alto impacto, proposta de valor, resumo do método, tour visual da plataforma, depoimentos reais de alunos, planos em destaque, FAQ rápido e CTAs. |
| `/metodo` | **Método Autêntico** | Explicação profunda e acessível dos 9 pilares (A-U-T-E-N-T-I-C-A), a ciência dos 4Ps e dos 3Rs, desmistificando o mito do "dom para idiomas". |
| `/formacao-global` | **Formações** | Comparativo das Formações Essenciais vs Complementares, mapa de foco semanal/mensal, módulos trimestrais e certificação de carga horária. |
| `/plataforma` | **A Plataforma do Aluno** | Demonstração detalhada dos módulos internos: Dashboard, Vocabulário SRS, SOS Professora, Vivência Global, Conquista & Constância e Biblioteca. |
| `/idiomas` | **Jornada Poliglota** | Apresentação da abordagem multicultural e exploração de idiomas (Português, Inglês, Espanhol, Italiano, Mandarim, Francês, Alemão, etc.) como hobby e expansão cultural sem pressão. |
| `/imersao` | **Aulas e Experiências** | Masterclasses ao vivo semanais (quartas-feiras), acervo de gravações, podcasts culturais e eventos com a comunidade. |
| `/sobre` | **Sobre a Amanda Beatriz** | Biografia da fundadora, autoridade com múltiplos canais no YouTube, trajetória rumo ao hiperpoliglotismo e propósito educacional da escola. |
| `/planos` | **Planos e Matrícula** | Transparência total da oferta (Assinatura mensal a R$ 39,90/mês e Anual com bônus), garantia de 7 dias, segurança de checkout e FAQ de matrícula. |
| `/faq` | **Perguntas Frequentes** | Respostas completas para as principais dúvidas sobre metodologia, horários, certificado, suporte e cancelamento. |
| `/contato` | **Contato e Atendimento** | Formulário de suporte para novos alunos, link oficial para WhatsApp comercial e redes sociais verificadas. |
| `/privacidade` | **Política de Privacidade** | Adequação estrita à LGPD (Lei Geral de Proteção de Dados - Lei 13.709/2018). |
| `/termos` | **Termos de Uso** | Regras de conduta da plataforma, propriedade intelectual e diretrizes de cancelamento. |

---

### 5. Requisitos Não Funcionais & Metas de Qualidade

1. **Performance**:
   - Pontuação Lighthouse Performance: **95+**
   - Core Web Vitals: LCP < 1.8s, FID/INP < 100ms, CLS < 0.05.
2. **SEO**:
   - Pontuação Lighthouse SEO: **100**
   - Metatags exclusivas, Open Graph, Twitter Cards, dados estruturados Schema.org JSON-LD (Course / EducationalOrganization / FAQPage), sitemap.xml e robots.txt.
3. **Acessibilidade**:
   - Pontuação Lighthouse Accessibility: **95+**
   - Contraste de cores WCAG AA (mínimo 4.5:1), navegação por teclado, tags semânticas, atributos aria e alvos de toque adequados.
4. **Segurança & LGPD**:
   - Zero segredos expostos no repositório.
   - Headers HTTP estritos configurados na Netlify (CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy).
   - Não armazenamento de dados sensíveis sem consentimento expresso.
5. **Responsividade**:
   - Adaptação perfeita de 320px a 2560px, com foco prioritário em dispositivos móveis (mais de 75% do tráfego esperado).

---

### 6. Critérios de Homologação e Conclusão

- [x] Repositório Git verificado sem dados confidenciais ou PDFs expostos.
- [x] Matriz de funcionalidades documentada e alinhada com os 16 PDFs.
- [x] Stack moderna com geração estática e build aprovado.
- [x] Todas as rotas funcionais com conteúdo rico e sem páginas quebradas.
- [x] Design responsivo com tokens visuais premium.
- [x] Testes de build, typecheck e auditoria realizados com sucesso.
- [x] Configurações de deploy para Netlify validadas e testadas.
