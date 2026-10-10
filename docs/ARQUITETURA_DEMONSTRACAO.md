# ARQUITETURA TÉCNICA DO LABORATÓRIO INTERATIVO E DEMONSTRAÇÃO (V3)
## Fluente no Mundo | Especificação de Componentes e Fluxo de Dados

### 1. Visão Geral da Arquitetura

O diferencial central da Versão 3.0 é o **Laboratório Interativo da Plataforma** (`StudentPlatformLab.astro`), um componente de interface interativo executado 100% no navegador (Client-Side Jamstack) sem dependências pesadas de frameworks externos ou backends proprietários.

Ele recria as principais experiências do aluno documentadas nos 16 PDFs utilizando:
- **HTML Semântico & Tailwind CSS**: Para estilização precisa com tema claro e moldura de software em contraste.
- **JavaScript Moderno (ES6+)**: Para controle de estado reativo leve, alternância de abas e manipulação de formulários locais.
- **Web Speech API (`window.speechSynthesis`)**: Para fornecer áudio nativo em inglês com reprodução em tempo real no módulo de Revisão SRS.
- **LocalStorage**: Para persistência opcional e fluida do contador de check-ins e expressões fictícias cadastradas durante a sessão de teste.

---

### 2. Diagrama de Módulos do Laboratório

```text
StudentPlatformLab.astro
│
├── Sub-módulo 1: Formação Global (Cronograma Interativo)
│   ├── Seletor de Formações (Inglês Essencial, Virando a Chave, Pronúncia)
│   ├── Timeline Semanal (Segunda a Domingo com status de aula)
│   └── Visualizador da Meta Diária (Tipo de aula, foco fonético e tempo)
│
├── Sub-módulo 2: Vocabulário & Banco de Expressões
│   ├── Filtro de Idiomas (Inglês, Espanhol, Italiano, Francês)
│   ├── Lista de Expressões Ativas com Pronúncia Fonética
│   └── Formulário de Teste: "Adicionar Nova Expressão ao Banco"
│
├── Sub-módulo 3: Revisão Autêntica SRS
│   ├── Etapa 1: Ouvir (Áudio sintetizado via SpeechSynthesis nativo)
│   ├── Etapa 2: Pronunciar (Guia fonético dos 4Ps e treino oral)
│   └── Etapa 3: Traduzir (Revelação de significado e cálculo de retenção)
│
├── Sub-módulo 4: Conquista & Constância (Gamificação)
│   ├── Botão Interativo "Fazer Check-in (+10 pts)"
│   ├── Contador Dinâmico de Streak de Estudos
│   └── Painel de Badges Conquistados e Barra de Meta Mensal
│
├── Sub-módulo 5: Vivência Global (Aculturamento)
│   ├── Módulos Culturais (Séries, Filmes, Músicas, Podcasts)
│   └── O Desafio da Semana (Roteiro prático de imersão)
│
├── Sub-módulo 6: Imersão com a Prof (Masterclasses)
│   ├── Simulador de Transmissão de Quarta-Feira às 20h
│   └── Bloco de Anotações Pedagógicas e Acervo de Gravações
│
└── Sub-módulo 7: SOS Professora (Mentoria)
    ├── Seletor de Formato (Texto, Áudio ou Imagem)
    ├── Caixa de Redação ou Seleção de Dúvida de Exemplo
    ├── Estado de Envio ("Enviando para a Prof. Amanda...")
    └── Resposta Simulada da Professora com Player de Áudio e Orientação
```

---

### 3. Recursos de Acessibilidade e Performance

1. **Acessibilidade WCAG 2.2 AA**:
   - Abas com papéis ARIA adequados (`role="tab"`, `role="tabpanel"`, `aria-selected`).
   - Foco visível no teclado (`focus:ring-2 focus:ring-blue-600`).
   - Contraste superior a 4.5:1 em todos os textos.
2. **Performance e Respeito a `prefers-reduced-motion`**:
   - Zero animações bruscas ou oscilações de layout (CLS zero).
   - Scripts compactos e modularizados sem bibliotecas externas pesadas.
