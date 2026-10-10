# PRODUCT REQUIREMENTS DOCUMENT (PRD V3)
## PROJETO FLUENTE NO MUNDO — V3: PRODUCT-LED EDUCATION & DESIGN EDITORIAL
**Versão:** 3.0.0 (Release) | **Status:** Aprovado para Execução | **Data:** Outubro/2026  
**Natureza do Projeto:** Demonstração Técnica Independente & Estudo de Interface

---

### 1. Visão Geral e Novo Posicionamento

#### 1.1 Contexto e Justificativa da V3
A versão 2.0 estabeleceu a base estática SSG com Astro e TypeScript, mas manteve vícios estilísticos característicos de templates gerados por IA: paleta escura saturada com neon, excesso de emojis decorativos, repetição monótona de cards e falta de uma demonstração palpável do produto educacional.

A **Versão 3.0** rompe radicalmente com esse padrão, adotando a filosofia **Product-Led Education**:
- **70% do peso visual** dedicado à experiência real da plataforma do aluno, documentada nos 16 PDFs.
- **20% de profundidade** na metodologia pedagógica (A.U.T.E.N.T.I.C.A, 4P e 3R).
- **10% de estrutura institucional e comercial** transparente e informativa.

#### 1.2 Natureza Demonstrativa e Independente
- O projeto é uma **recriação conceitual independente** desenvolvida para fins de estudo de caso de engenharia de software e design de interfaces.
- Não representa o portal oficial da escola, não realiza cobranças e não coleta leads.
- Um identificador discreto e elegante no topo e no rodapé contextualiza o visitante.
- O ambiente é configurado com diretivas `noindex, nofollow` para preservar a integridade dos motores de busca.

---

### 2. Princípios de Design e Direção Visual V3

1. **Estética Minimalista e Editorial**:
   - Canvas claro (`#f8fafc` e `#ffffff`) com respiro generoso, proporcionando foco absoluto na leitura e nas interfaces do produto.
   - Tipografia de alto padrão: `Outfit` para títulos expressivos e estruturados; `Plus Jakarta Sans` para textos de leitura fluida.
   - Cores primárias sóbrias: Azul Marinho Corporativo (`#1e3a8a`), Azul Real refinado (`#2563eb`), Cinza Ardósia neutro (`#0f172a`, `#334155`, `#64748b`) e toques sutis de Esmeralda (`#059669`) e Âmbar (`#d97706`) apenas para indicadores de estado.
2. **Eliminação de Ruído Visual**:
   - **Zero emojis decorativos**: Nenhum emoji em títulos, cards ou menus.
   - Ícones estritamente funcionais em SVG vetorial de traço limpo (1.5px).
   - Eliminação de gradientes sintéticos chamativos e sombras fluorescentes.
   - Substituição da repetição mecânica de cards por composições editoriais dinâmicas (visores de capítulos, cronogramas visuais, painéis de software).
3. **Product-Led Real (O Produto em Primeiro Lugar)**:
   - Em vez de apenas dizer que a plataforma existe, o site disponibiliza o **Laboratório Interativo da Plataforma**, permitindo que o visitante teste localmente os fluxos do aluno.

---

### 3. Especificação do Laboratório Interativo ("Explore a Plataforma")

O laboratório opera 100% no cliente (sem backend, sem cookies de rastreamento e sem dados pessoais), permitindo que o usuário experimente 7 módulos documentados nos 16 PDFs:

#### Módulo 1: Formação Global & Cronograma Semanal
- Alternância entre formações (*Inglês Essencial*, *Virando a Chave dos Estudos*, *Dominando a Arte da Pronúncia*).
- Visualizador interativo de cronograma semanal dia a dia (Segunda a Domingo).
- Seleção de dias para inspecionar metas de estudo, tipo de aula (gravada, prática ou ao vivo) e duração.

#### Módulo 2: Vocabulário & Banco de Expressões
- Exibição de expressões reais extraídas do material do aluno.
- Filtros por idiomas (*Inglês*, *Espanhol*, *Italiano*, *Francês*).
- Campo interativo que permite adicionar uma expressão de teste ao banco de demonstração local com salvamento em memória/localStorage.
- Exibição de pronúncia fonética e frase de contexto na vida real.

#### Módulo 3: Revisão Autêntica SRS (Ouvir ➔ Pronunciar ➔ Traduzir)
- **Etapa 1 (Ouvir)**: Disparo de áudio via API de Síntese de Voz do Navegador (`speechSynthesis`) com sotaque em inglês natural para a expressão selecionada.
- **Etapa 2 (Pronunciar)**: Modo de treino fonético com exibição dos padrões musculares (os 4Ps).
- **Etapa 3 (Traduzir)**: Revelação contextual da tradução e cálculo de memorização demonstrativo.

#### Módulo 4: Conquista & Constância (Gamificação)
- Botão funcional de **"Fazer Check-in Diário (+10 pts)"** que atualiza a pontuação em tempo real na tela.
- Contador dinâmico de streak (dias consecutivos).
- Visualizador de badges conquistados e meta mensal com barra de progresso interativa.
- Simulação do marco de certificação trimestral (módulos de 3 meses).

#### Módulo 5: Vivência Global (Aculturamento)
- Módulos de cultura: Séries, Filmes, Podcasts, Músicas e Desafio Prático da Semana.
- Roteiro explicativo de como consumir uma cena de série e caçar phrasal verbs sem legendas em português.

#### Módulo 6: Imersão com a Prof (Masterclasses)
- Demonstração da experiência das aulas ao vivo semanais às quartas-feiras.
- Player de interface demonstrativo exibindo estrutura de aula, anotações de aula e acervo de gravações.

#### Módulo 7: SOS Professora (Mentoria Individual)
- Simulador interativo de envio de dúvidas (seleção de formato: Texto, Áudio ou Print).
- Seleção de dúvidas de exemplo ou redação de dúvida fictícia.
- Estado de envio demonstrativo e desbloqueio da resposta simulada da Prof. Amanda com reprodutor de áudio visual e transcrição pedagógica.

---

### 4. Estrutura das Páginas no Novo Conceito

1. `/` (Home): O portal principal product-led, articulando proposta de valor limpa, demonstração interativa de destaque, narrativa editorial da metodologia e visão da escola.
2. `/plataforma`: A central completa do Laboratório Interativo, onde o visitante pode explorar minuciosamente cada ferramenta.
3. `/metodo`: Apresentação em formato de leitura e capítulos da Metodologia A.U.T.E.N.T.I.C.A, 4P e 3R.
4. `/formacao-global`: Guia curricular das formações Essenciais e Complementares com calendário e certificação trimestral.
5. `/idiomas`: Espaço da Jornada Poliglota com abordagem cultural leve em múltiplos idiomas.
6. `/imersao`: Detalhamento das aulas ao vivo, masterclasses e imersão com a professora fundadora.
7. `/sobre`: Perfil editorial e biografia de Amanda Beatriz, trajetória poliglota e missão comunitária.
8. `/planos`: Apresentação transparente das opções de matrícula e condições pedagógicas.
9. `/faq`: Central de esclarecimentos técnicos e pedagógicos em acordeão acessível.
10. `/contato`: Canal de mensagens e orientações institucionais.
11. `/privacidade`: Política de privacidade em estrita conformidade com a LGPD.
12. `/termos`: Termos de uso e diretrizes da demonstração.
