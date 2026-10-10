# DESIGN SYSTEM E IDENTIDADE VISUAL
## Fluente no Mundo — Guia de Estilo & Tokens Visuais (Outubro/2026)

### 1. Filosofia e Direção de Arte

O novo design do **Fluente no Mundo** projeta a sensação de uma **edtech global moderna, acolhedora e intelectualmente instigante**.

- **Atributos de Marca**: Sofisticada, Confiável, Humana, Dinâmica, Inovadora.
- **Evitar**: Cores primárias genéricas, interfaces infantis, excesso de gradientes agressivos ou layout engessado de templates pré-fabricados.
- **Sensação Visual**: Combinação de um tema escuro e profundo (Deep Midnight Blue) com acentos luminosos de alta vibração (Royal Indigo, Electric Teal e Warm Gold), remetendo à imersão cultural, inteligência e visão cosmopolita.

---

### 2. Paleta de Cores e Tokens HSL / Hex

```css
:root {
  /* Fundo e Superfícies (Dark Luxury) */
  --bg-primary: #0a0e1a;         /* Azul Meia-Noite Profundo */
  --bg-secondary: #10162a;       /* Superfície de Cards e Seções */
  --bg-tertiary: #18223f;        /* Elementos Elevados / Hover */
  --bg-glass: rgba(16, 22, 42, 0.75); /* Glassmorphism com blur */

  /* Cores de Destaque e Marca */
  --brand-primary: #3b82f6;      /* Azul Cobalto Tecnológico */
  --brand-indigo: #6366f1;       /* Índigo Vibrante */
  --brand-teal: #06b6d4;         /* Ciano Luminoso (Clareza / Input) */
  --brand-amber: #f59e0b;        /* Ouro Âmbar (Conquista / Badges / Streaks) */
  --brand-emerald: #10b981;      /* Verde Esmeralda (Sucesso / Validação) */

  /* Textos e Contraste */
  --text-main: #f8fafc;          /* Branco Puro Suave (98% iluminação) */
  --text-muted: #94a3b8;         /* Cinza Ardósia Claro (Excelente contraste > 5:1) */
  --text-dim: #64748b;           /* Cinza Neutro para Metadados */

  /* Bordas e Divisores */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(99, 102, 241, 0.3);
  --border-active: #6366f1;
}
```

---

### 3. Tipografia

- **Fonte Principal (Display & Títulos)**: `Outfit`, sans-serif (Google Fonts).
  - Transmite modernidade, curvas elegantes e autoridade educacional contemporânea.
- **Fonte de Corpo (Textos e Leitura)**: `Plus Jakarta Sans`, sans-serif (Google Fonts).
  - Altíssima legibilidade em telas móveis e desktop, excelente desenho de glifos para português.

#### Escala Tipográfica
- `text-xs`: 12px / Line-height: 16px (Badges e tags)
- `text-sm`: 14px / Line-height: 20px (Legendas, notas, botões secundários)
- `text-base`: 16px / Line-height: 24px (Corpo de texto padrão)
- `text-lg`: 18px / Line-height: 28px (Lead paragraphs, cards de destaque)
- `text-xl`: 20px / Line-height: 28px (Subtítulos de seções)
- `text-2xl`: 24px / Line-height: 32px (Títulos de cards e módulos)
- `text-3xl`: 30px / Line-height: 36px (H2 de páginas secundárias)
- `text-4xl`: 36px / Line-height: 40px (H1 de páginas e seções da Home)
- `text-5xl` / `text-6xl`: 48px - 60px (Hero Display H1 principal)

---

### 4. Componentes Base e Padrões de Interface

1. **Botões de Ação (CTAs)**:
   - **Primário (Conversão)**: Fundo degradê sutil `from-indigo-600 to-blue-600`, texto branco, sombra suave com brilho, micro-transição no hover (`transform: translateY(-2px)`).
   - **Secundário (Exploração)**: Fundo transparente com borda translúcida `border border-white/20 hover:border-indigo-400 hover:bg-white/5`.
   - **Área do Aluno**: Botão sutil com ícone de cadeado/usuário direcionando para `https://alunos.fluentenomundo.com`.
2. **Cards com Glassmorphism**:
   - `background: rgba(16, 22, 42, 0.65)` com `backdrop-filter: blur(12px)`.
   - Borda sutil de 1px com gradiente de luz interna (`border border-white/10`).
   - Efeito hover com expansão delicada e brilho de borda azul/índigo.
3. **Badges e Pílulas de Status**:
   - Pílula arredondada (`rounded-full py-1 px-3 text-xs font-semibold`).
   - Variações:
     - Destaque/Metodologia: Fundo `indigo-500/10` com texto `indigo-300` e borda `indigo-500/20`.
     - Streak/Gamificação: Fundo `amber-500/10` com texto `amber-300` e ícone de fogo/troféu.
     - Garantia/Segurança: Fundo `emerald-500/10` com texto `emerald-300`.
4. **Acordeão de FAQ**:
   - Cabeçalho clicável com indicador chevron animado em rotação suave de 180°.
   - Painel de resposta com transição fluida e texto em contraste agradável.
