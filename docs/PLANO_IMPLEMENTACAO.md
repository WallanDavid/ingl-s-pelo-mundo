# PLANO DE IMPLEMENTAÇÃO E CRONOGRAMA DE EXECUÇÃO
## Fluente no Mundo — Roadmap de Engenharia & Lançamento (Outubro/2026)

### 1. Fases do Projeto

#### Fase 1: Diagnóstico e Especificação (CONCLUÍDA)
- [x] Inspeção do repositório local e Git status.
- [x] Localização e auditoria completa dos 16 PDFs da área do aluno.
- [x] Extração de textos, fluxos e restrições comerciais.
- [x] Análise crítica do site comercial legado (`index.html`, `evento.html`).
- [x] Benchmarking competitivo (Fluency Academy, Open English, Duolingo, etc.).
- [x] Criação da suíte de documentação PRD em `docs/`.

#### Fase 2: Estruturação do Projeto e Setup da Stack (EM ANDAMENTO)
- [ ] Inicialização da estrutura Astro + TypeScript + Tailwind CSS.
- [ ] Configuração de `.gitignore`, `netlify.toml`, `tsconfig.json` e `tailwind.config.mjs`.
- [ ] Implementação do Design System em `src/styles/global.css` e tokens visuais.
- [ ] Organização e migração de assets e imagens legítimas em `public/images/`.

#### Fase 3: Desenvolvimento dos Componentes e Rotas Comerciais
- [ ] Implementação de `BaseLayout.astro`, `Header.astro` e `Footer.astro`.
- [ ] Implementação de `Hero.astro`, `MethodPillars.astro`, `PlatformTour.astro`, `Testimonials.astro`, `PricingCard.astro` e `FaqAccordion.astro`.
- [ ] Desenvolvimento das 12 páginas completas:
  - `/` (Home)
  - `/metodo` (Metodologia Autêntica e os 9 pilares)
  - `/formacao-global` (Cursos Essenciais e Complementares)
  - `/plataforma` (Vitrine visual do ecossistema do aluno)
  - `/idiomas` (Jornada Poliglota e exploração cultural)
  - `/imersao` (Masterclasses ao vivo quartas-feiras e podcasts)
  - `/sobre` (Professora Amanda Beatriz e história da escola)
  - `/planos` (Transparência de preços: R$ 39,90/mês e checkout seguro)
  - `/faq` (Perguntas frequentes e quebra de objeções)
  - `/contato` (Canais oficiais e WhatsApp)
  - `/privacidade` (Conformidade estrita LGPD)
  - `/termos` (Termos de uso)

#### Fase 4: SEO Técnico, Performance e Acessibilidade
- [ ] Injeção de metatags dinâmicas, Open Graph e Twitter Cards.
- [ ] Implementação de JSON-LD Schema.org (EducationalOrganization, Course, FAQPage).
- [ ] Geração de `robots.txt` e `sitemap.xml`.
- [ ] Verificação de contraste de cores e alvos de clique mobile.

#### Fase 5: QA, Testes e Homologação
- [ ] Execução de typecheck (`tsc --noEmit`).
- [ ] Execução de build de produção (`npm run build`).
- [ ] Verificação de links internos e navegação.
- [ ] Testes visuais responsivos (desktop e mobile).
- [ ] Emissão do relatório de homologação `docs/HOMOLOGACAO_PRD.md`.

#### Fase 6: Git e Preparação para Produção
- [ ] Commit estruturado no branch `main`.
- [ ] Push para o repositório GitHub.
- [ ] Validação do status Netlify.
