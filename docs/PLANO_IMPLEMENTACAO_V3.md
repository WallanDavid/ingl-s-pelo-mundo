# PLANO DE IMPLEMENTAÇÃO E CRONOGRAMA DE EXECUÇÃO (V3)
## Fluente no Mundo | Roadmap de Engenharia e Redesign Editorial

### 1. Fases de Execução

#### Fase 1: Diagnóstico e Especificações (CONCLUÍDA)
- [x] Auditoria visual da versão 2.0 em `https://inglespelomundo2.netlify.app/`.
- [x] Extração de capturas de tela e diagnóstico dos vícios visuais de IA e emojis excessivos.
- [x] Elaboração do PRD V3, Matriz de Funcionalidades V3, Design System V3 e Arquitetura do Laboratório.
- [x] Extração e anonimização de capturas reais dos 16 PDFs para a pasta `public/images/platform/`.

#### Fase 2: Atualização do Design System e Estilos Globais (CONCLUÍDA)
- [x] Refatoração de `tailwind.config.mjs` com a paleta minimalista editorial clara e molduras de software.
- [x] Atualização de `src/styles/global.css` eliminando efeitos de glow e gradientes neon, aplicando canvas claro (`#f8fafc`) e tipografia de alto contraste.
- [x] Configuração de robots.txt com `noindex, nofollow` e header Netlify `X-Robots-Tag`.

#### Fase 3: Desenvolvimento do Laboratório Interativo da Plataforma (CONCLUÍDA)
- [x] Criação de `src/components/StudentPlatformLab.astro` com as 7 experiências navegáveis:
  - 1. Formação Global (Cronograma navegável e trilhas)
  - 2. Vocabulário (Banco ativo e inserção de expressões)
  - 3. Revisão Autêntica SRS (Ouvir com SpeechSynthesis nativo, Pronunciar e Traduzir)
  - 4. Conquista & Constância (Botão de check-in funcional, streak dinâmico e metas)
  - 5. Vivência Global (Séries, músicas, podcasts e desafio semanal)
  - 6. Imersão com a Prof (Simulador de masterclass de quarta-feira)
  - 7. SOS Professora (Simulador de envio de dúvidas e resposta em áudio simulada)

#### Fase 4: Redesign das Páginas e Componentes Centrais (CONCLUÍDA)
- [x] Refatoração completa de `src/components/Header.astro` com identificação discreta de demonstração técnica e menu sem emojis.
- [x] Refatoração de `src/components/Footer.astro` com créditos institucionais, esclarecimento de portfólio e links limpos.
- [x] Redesign de `src/pages/index.astro` seguindo as 7 seções editoriais da diretriz 70/20/10.
- [x] Redesign de `src/pages/plataforma.astro` como a central máxima do Laboratório Interativo.
- [x] Redesign de `src/pages/metodo.astro` em formato de capítulos editoriais elegantes para os 9 pilares.
- [x] Redesign de `src/pages/formacao-global.astro`, `idiomas.astro`, `imersao.astro`, `sobre.astro`, `planos.astro`, `faq.astro`, `contato.astro`, `privacidade.astro` e `termos.astro`.

#### Fase 5: Testes, QA e Homologação (CONCLUÍDA)
- [x] Compilação de produção com `npm run build` (12 páginas estáticas, 0 erros).
- [x] Diagnóstico de tipos com `npx astro check` (25 arquivos, 0 erros, 0 avisos, 0 hints).
- [x] Testes E2E dos módulos do Laboratório no navegador (`npm test`: TC-01 a TC-08 100% PASS).
- [x] Testes de disponibilidade HTTP das 12 rotas (100% status 200 OK).
- [x] Emissão do relatório final `docs/HOMOLOGACAO_V3.md`.

#### Fase 6: Versionamento Git e Deploy Netlify (CONCLUÍDA)
- [x] Commit semântico no branch `main`.
- [x] Envio para `origin main` via `git push`.
- [x] Verificação do status de publicação no Netlify.

#### Fase 8: Redesign Comercial Limpo, Objetivo e Vitrine dos 15 Produtos (CONCLUÍDA)
- [x] Download e incorporação dos elementos autênticos de `https://fluentenomundo.com/` (seta oficial `arrow.png`, dados da mentora).
- [x] Criação do componente `ProductsCatalog.astro` detalhando e evidenciando os 15 produtos e módulos da imagem real da plataforma: Formação Global, Método A.U.T.E.N.T.I.C.A, Jornada Poliglota, Imersão com a Prof, Minuto Fluente, EduFeed, Vocabulário, Revisão Autêntica, Sua Biblioteca, Mundo Fluente Kids, Comunidade, Conquista & Constância, Vivência Global, Conexões Autênticas e SOS Professora.
- [x] Remoção integral da seção de depoimentos e prints de avaliações conforme solicitação expressa do usuário.
- [x] Remoção integral da área do aluno e simuladores mockados.
- [x] Criação do componente `OriginalMovementCompare.astro` com a transição visual entre o ensino tradicional e o Fluente no Mundo.
- [x] Atualização de `src/pages/index.astro` e `src/pages/plataforma.astro` com design dark luxury objetivo e clean.
- [x] Bateria de testes E2E automatizada (`tests/e2e_v3_test.cjs`) 100% aprovada (8 de 8 testes PASS).
- [x] Validação visual via browser subagent com capturas de tela e vídeo.


