# ARQUITETURA TÉCNICA E ESTRUTURAÇÃO DO PROJETO
## Fluente no Mundo — Arquitetura Frontend & Netlify (Outubro/2026)

### 1. Visão Geral da Stack Tecnológica

Para atingir as metas de performance (95+ no Lighthouse), zero custo de servidor desnecessário, compatibilidade perfeita com a Netlify e SEO impecável para marketing educacional, a stack selecionada é:

- **Framework**: **Astro 5+** (Geração Estática / SSG — Static Site Generation).
  - *Justificativa*: Astro gera HTML estático ultrarrápido com zero runtime JavaScript por padrão para conteúdo comercial puro, injetando ilhas de interatividade somente onde necessário (menus móveis, abas interativas, FAQ interativo). Isso garante os melhores Core Web Vitals do mercado.
- **Linguagem**: **TypeScript** (Strict Mode).
  - *Justificativa*: Tipagem segura para dados de navegação, SEO, dados estruturados JSON-LD e componentes reutilizáveis.
- **Estilização**: **Tailwind CSS + Variáveis CSS de Design System**.
  - *Justificativa*: Consistência visual absoluta com design tokens pré-configurados (cores, tipografia, espaçamentos, sombras e glassmorphism), sem bloat de CSS não utilizado.
- **Hospedagem & Deploy**: **Netlify**.
  - *Justificativa*: Deploy contínuo a partir do branch `main`, CDN global ultrarrápida, SSL automático, suporte nativo a headers de segurança em `netlify.toml` e páginas estáticas em `dist/`.

---

### 2. Estrutura de Diretórios do Projeto

```text
C:\Users\bobwa\Downloads\Ingles Pelo Mundo\
├── docs/                               # Documentação PRD e especificações técnicas
│   ├── PRD.md
│   ├── AUDITORIA_SITE_ATUAL.md
│   ├── MATRIZ_FUNCIONALIDADES.md
│   ├── ANALISE_CONCORRENTES.md
│   ├── ARQUITETURA.md
│   ├── DESIGN_SYSTEM.md
│   ├── PLANO_IMPLEMENTACAO.md
│   ├── SEO.md
│   ├── SEGURANCA.md
│   ├── DEPLOY_NETLIFY.md
│   ├── HOMOLOGACAO_PRD.md
│   └── referencias/                    # [Ignorado no Git] 16 PDFs de referência da plataforma
├── public/                             # Arquivos estáticos servidos diretamente na raiz
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── images/                         # Imagens otimizadas, fotos reais, logos
│   └── icons/
├── src/
│   ├── components/                     # Componentes modulares e reutilizáveis
│   │   ├── Header.astro                # Barra de navegação com menu mobile e CTA
│   │   ├── Footer.astro                # Rodapé institucional com links, LGPD e redes
│   │   ├── Hero.astro                  # Seção Hero com proposta de valor e CTAs
│   │   ├── MethodPillars.astro         # Demonstração interativa dos 9 pilares A.U.T.E.N.T.I.C.A
│   │   ├── PlatformTour.astro          # Vitrine visual dos módulos da plataforma do aluno
│   │   ├── CoursesGrid.astro           # Grid das Formações Essenciais e Complementares
│   │   ├── Testimonials.astro          # Prova social com depoimentos reais de alunos
│   │   ├── PricingCard.astro           # Card transparente de assinatura (R$ 39,90/mês)
│   │   ├── FaqAccordion.astro          # Componente interativo de perguntas frequentes
│   │   └── SeoHead.astro               # Injeção centralizada de metatags, OG e JSON-LD
│   ├── layouts/
│   │   └── BaseLayout.astro            # Layout mestre com fontes, estilos globais e SEO
│   ├── pages/                          # Rotas estáticas
│   │   ├── index.astro                 # / (Home Page)
│   │   ├── metodo.astro                # /metodo (Metodologia Autêntica)
│   │   ├── formacao-global.astro       # /formacao-global (Estrutura de Cursos)
│   │   ├── plataforma.astro            # /plataforma (Experiência do Aluno)
│   │   ├── idiomas.astro               # /idiomas (Jornada Poliglota)
│   │   ├── imersao.astro               # /imersao (Aulas ao Vivo & Masterclasses)
│   │   ├── sobre.astro                 # /sobre (Professora Amanda Beatriz)
│   │   ├── planos.astro                # /planos (Planos e Matrícula)
│   │   ├── faq.astro                   # /faq (Perguntas Frequentes)
│   │   ├── contato.astro               # /contato (Canais de Atendimento)
│   │   ├── privacidade.astro           # /privacidade (LGPD)
│   │   └── termos.astro                # /termos (Termos de Uso)
│   └── styles/
│       └── global.css                  # Variáveis do Design System e utilitários
├── astro.config.mjs                    # Configuração de build e integração Astro
├── tailwind.config.mjs                 # Configuração do Tailwind com a paleta do projeto
├── tsconfig.json                       # Configuração TypeScript
├── package.json                        # Gerenciamento de scripts e dependências
├── netlify.toml                        # Configuração de build, redirects e headers de segurança Netlify
└── .gitignore                          # Exclusão estrita de arquivos privados e temporários
```

---

### 3. Fluxo de Dados e Componentização

1. **Camada de Layout Base (`BaseLayout.astro`)**:
   - Centraliza a injeção de fontes modernas do Google Fonts (*Plus Jakarta Sans* e *Outfit*).
   - Recebe propriedades de SEO (`title`, `description`, `canonicalUrl`, `ogImage`, `schemaType`).
   - Carrega o `Header` global com estado de rota ativa e o `Footer` comercial.
2. **Camada de Conteúdo**:
   - As informações pedagógicas e comerciais (pilares do método, cronogramas, dados da plataforma, planos e FAQs) são centralizadas em estruturas TypeScript limpas em cada página ou módulos dedicados, facilitando atualizações de copy sem mexer na estrutura visual.
3. **Ilhas de Interatividade**:
   - Interações simples (abrir/fechar menu mobile, alternar abas de exibição da plataforma, abrir acordeão de FAQ) utilizam JavaScript nativo e leve, sem carregar frameworks pesados que onerem o carregamento inicial.

---

### 4. Estratégia de Deploy na Netlify

- **Comando de Build**: `npm run build`
- **Diretório de Publicação**: `dist`
- **Ambiente**: Produção (SSG - HTML pré-renderizado)
- **Cabeçalhos de Cache**:
  - Arquivos HTML: `Cache-Control: public, max-age=0, must-revalidate` (garante que atualizações entrem no ar imediatamente).
  - Assets estáticos com hash (`/_astro/*`, imagens): `Cache-Control: public, max-age=31536000, immutable`.
