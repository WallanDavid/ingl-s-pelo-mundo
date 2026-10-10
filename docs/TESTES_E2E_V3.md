# PROTOCOLO DE TESTES E AUTOMAÇÃO E2E (V3)
## Fluente no Mundo | Casos de Teste do Laboratório Interativo

### 1. Escopo dos Testes

Este protocolo estabelece os testes de interface, usabilidade e fluxos interativos da versão 3.0, garantindo que o Laboratório Interativo da Plataforma execute com perfeição no navegador.

---

### 2. Casos de Teste Funcionais do Laboratório

| ID | Cenário de Teste | Ações do Usuário | Resultado Esperado |
| :--- | :--- | :--- | :--- |
| **TC-01** | **Alternância de Módulos da Plataforma** | Clicar nas 7 abas do seletor superior (Formação, Vocabulário, Revisão, Conquista, Vivência, Imersão, SOS). | O painel ativo deve atualizar instantaneamente com transição suave, sem recarregar a página, destacando a aba selecionada com ARIA adequado. |
| **TC-02** | **Navegação do Cronograma Semanal** | No módulo *Formação Global*, clicar nos dias da semana (Segunda a Domingo). | O painel deve exibir a aula do dia, o foco fonético dos 4Ps e a duração correspondente. |
| **TC-03** | **Filtro de Idiomas no Vocabulário** | No módulo *Vocabulário*, alternar entre os filtros de idioma (Inglês, Espanhol, Italiano, Francês). | A lista de expressões deve filtrar dinamicamente, exibindo a pronúncia fonética e frase de exemplo de cada idioma. |
| **TC-04** | **Adição de Expressão de Teste** | Preencher o formulário "Adicionar Expressão de Demonstração" e clicar em adicionar. | A nova expressão deve aparecer na lista local com etiqueta "Demonstração Local", sem erros de console. |
| **TC-05** | **Síntese de Áudio na Revisão SRS** | No módulo *Revisão Autêntica*, clicar no botão "Ouvir Pronúncia Nativa". | A API `window.speechSynthesis` do navegador deve vocalizar a expressão em inglês nativo claro. |
| **TC-06** | **Ciclo de 3 Etapas (SRS)** | No módulo *Revisão Autêntica*, avançar de "Ouvir" para "Pronunciar" e depois para "Traduzir". | O card revela o significado em português e exibe a barra de cálculo de retenção cognitiva (85% a 95%). |
| **TC-07** | **Check-in Diário & Streak Interativo** | No módulo *Conquista & Constância*, clicar no botão "Fazer Check-in Diário (+10 pts)". | A pontuação local deve somar 10 pontos em tempo real, o botão deve indicar "Check-in Realizado Hoje ✓" e o streak deve permanecer ativo. |
| **TC-08** | **Simulação de SOS Professora** | No módulo *SOS Professora*, selecionar um formato de dúvida, clicar em "Simular Envio" e aguardar. | O sistema exibe estado de processamento e desbloqueia a resposta simulada da professora com player de áudio e texto pedagógico. |

---

### 3. Casos de Teste de Design e Ruído Visual

| ID | Verificação Visual | Critério de Aceite |
| :--- | :--- | :--- |
| **TC-09** | **Ausência de Emojis Decorativos** | Varrer o DOM em busca de emojis decorativos em títulos, botões e cartões. | **Zero emojis decorativos**. Todos os elementos utilizam texto puro e ícones SVG minimalistas funcionais. |
| **TC-10** | **Tema Editorial Claro** | Inspecionar contraste de cores em desktop e mobile. | Fundo predominante em tons claros (`#f8fafc` / `#ffffff`), texto escuro (`#0f172a`), contraste superior a 4.5:1. |
| **TC-11** | **Identificação de Demonstração** | Verificar se a barra superior e o rodapé contêm a identificação de demonstração independente. | Presença discreta da mensagem: *"Demonstração Técnica Independente • Recriação conceitual para fins de portfólio"*. |
