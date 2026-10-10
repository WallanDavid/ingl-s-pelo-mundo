# DESIGN SYSTEM V3: MINIMALISMO EDITORIAL & SOFTWARE PREMIUM
## Fluente no Mundo | Especificação Visual e Tokens de Interface (V3)

### 1. Filosofia Visual

A Versão 3.0 abandona o estilo escuro saturado e adota uma estética **editorial, minimalista e inspirada em produtos digitais de alta engenharia** (como Linear, Stripe, Apple e plataformas educacionais maduras).

- **Atributos de Marca**: Lúcida, Rigorosa, Humana, Contemporânea, Focada.
- **Ambiente Predominante**: Superfície clara e arejada com alto contraste, proporcionando leitura fluida e valorizando as interfaces reais do software educacional.
- **Regra de Ouro**: O design serve para evidenciar o conteúdo e as ferramentas de estudo do aluno, e não para chamar atenção para si mesmo com decorações vazias.

---

### 2. Tokens de Cores

```css
:root {
  /* Canvas e Superfícies Neutras */
  --color-canvas: #f8fafc;        /* Fundo base neutro e confortável (Slate 50) */
  --color-surface: #ffffff;       /* Cards e painéis principais (Branco puro) */
  --color-surface-subtle: #f1f5f9;/* Fundos secundários e tabelas (Slate 100) */
  --color-surface-hover: #e2e8f0; /* Estados de interação hover (Slate 200) */

  /* Molduras de Software e Destaque Editorial Escuro */
  --color-software-canvas: #090d16;  /* Superfície escura de janelas de interface */
  --color-software-card: #111827;    /* Painéis de simulação da plataforma do aluno */
  --color-software-border: #1f2937;  /* Divisores discretos de janelas de produto */

  /* Tipografia e Contraste */
  --color-text-heading: #0f172a;  /* Títulos com alto impacto (Slate 900) */
  --color-text-body: #334155;     /* Corpo de texto principal legível (Slate 700) */
  --color-text-muted: #64748b;    /* Subtítulos e notas editoriais (Slate 500) */
  --color-text-light: #f8fafc;    /* Textos dentro de molduras de software escuras */

  /* Cores de Marca e Função */
  --color-brand-primary: #1d4ed8; /* Azul Clássico Editorial (Blue 700) */
  --color-brand-accent: #2563eb;  /* Azul de Ação e Interação (Blue 600) */
  --color-brand-subtle: #dbeafe;  /* Destaque sutil e seleção (Blue 100) */

  /* Estados Funcionais */
  --color-success: #059669;       /* Validação e progresso positivo (Emerald 600) */
  --color-warning: #d97706;       /* Streaks, marcos e conquistas (Amber 600) */
  --color-border-subtle: #e2e8f0; /* Bordas de 1px leves e nítidas */
}
```

---

### 3. Tipografia

- **Títulos e Display**: `Outfit`, sans-serif (Google Fonts).
  - Pesos: 600 (SemiBold), 700 (Bold), 800 (ExtraBold).
  - Traço limpo com proporções elegantes, conferindo personalidade institucional moderna.
- **Textos e Leitura**: `Plus Jakarta Sans`, sans-serif (Google Fonts).
  - Pesos: 400 (Regular), 500 (Medium), 600 (SemiBold).
  - Excelente legibilidade em parágrafos longos, entrelinha generosa (1.6 a 1.7).

---

### 4. Regras de Eliminação de Ruído Visual

1. **Proibição de Emojis**:
   - Emojis decorativos (como 🔥, ⚡, 🧠, 🍿, 🚀, 💎, 🏆, ⭐) são rigorosamente proibidos em títulos, abas, botões e listas.
2. **Ícones Vetoriais SVG Estritamente Funcionais**:
   - Utilizados exclusivamente para auxílio de navegação (setas de avanço `➔`, checagem de conclusão `✓`, play/pause de áudio, fechamento `✕`, chevron de acordeão).
   - Traço fino (1.5px), tamanho padrão (16px a 20px), sem fundos coloridos fluorescentes.
3. **Bordas e Sombras**:
   - Bordas de 1px em cinza claro (`border border-slate-200/80`).
   - Sombras sutis (`shadow-sm` padrão, `shadow-md` no hover), eliminando o glow neon azul e roxo da V2.
4. **Molduras de Produto (Software Frame)**:
   - Para demonstrar as interfaces da área do aluno documentadas nos PDFs, utiliza-se a moldura de software com a barra de janela discreta (três pontos de controle em tons de cinza ou sutis e URL `alunos.fluentenomundo.com`), criando contexto de ferramenta de trabalho real.
