# AUDITORIA COMERCIAL E TÉCNICA DO SITE ATUAL
## Fluente no Mundo — fluentenomundo.com | Data: Outubro/2026

### 1. Resumo Executivo da Auditoria

O site comercial legado (`fluentenomundo.com`, capturado no repositório) foi estruturado primordialmente como uma página de captura para eventos de lançamento e aquisição rápida ("Uma Nova Era dos Estudos"), apresentando um forte viés de manifesto da fundadora Amanda Beatriz.

No entanto, há uma **discrepância severa entre o valor real da plataforma interna do aluno e o que o site comercial comunica**. Enquanto o aluno encontra na plataforma um ecossistema com 9 pilares metodológicos, repetição espaçada (SRS), aulas ao vivo semanais, SOS individual em 48h, gamificação (streak, check-in, badges), vivência cultural e certificação modular a cada 3 meses, o site atual apresenta textos genéricos, falta de visualização do produto e ausência de navegação comercial estruturada.

---

### 2. Análise Detalhada dos Pontos Críticos

#### A. Proposta de Valor e Storytelling
- **Problema**: O site foca em expressões abstratas ("Aluno Autêntico", "Missões de alma e visão global", "Reunir minha tribo") sem explicar *como* o aluno realmente aprende a falar o idioma.
- **Impacto no Lead**: Gera curiosidade inicial, mas provoca alta taxa de desistência por falta de tangibilidade pedagógica.
- **Solução no Novo Projeto**: Articular com clareza o método **A.U.T.E.N.T.I.C.A**, o cronograma de estudos diário, a segurança de ter aulas ao vivo com a professora e ferramentas práticas de fixação.

#### B. Demonstração do Produto (Plataforma do Aluno)
- **Problema**: O visitante não consegue ver como é a plataforma por dentro. Não há mockups funcionais do painel, do sistema de vocabulário, do envio de SOS ou da trilha de pronúncia.
- **Impacto no Lead**: Compras de cursos online exigem confiança. A ausência de interface visual faz o curso parecer apenas "mais um grupo de links ou vídeos gravados".
- **Solução no Novo Projeto**: Criar uma página dedicada `/plataforma` e uma seção interativa na Home demonstrando os módulos reais: Dashboard, Vocabulário SRS, SOS Professora, Vivência Global e Conquista & Constância.

#### C. Estrutura de Navegação e Arquitetura de Informação
- **Problema**: O site legado é uma página única (one-page) excessivamente longa, com links quebrados ou âncoras vazias (ex.: botões com `href=""` para Área do Aluno e matrículas).
- **Impacto no Lead**: Impossibilidade de aprofundar em temas específicos (ex.: metodologia, planos, sobre a professora) e zero aproveitamento para SEO de cauda longa.
- **Solução no Novo Projeto**: Arquitetura multi-página com rotas semânticas: `/`, `/metodo`, `/formacao-global`, `/plataforma`, `/idiomas`, `/imersao`, `/sobre`, `/planos`, `/faq`, `/contato`, `/privacidade` e `/termos`.

#### D. Ofertas, Preços e Fricção de Matrícula
- **Problema**: O site legado menciona no final da página o valor *"Começar por R$ 39,90/mês"*, porém sem detalhamento claro das condições, sem garantia visível, sem lista dos entregáveis inclusos e sem link direto para o checkout seguro.
- **Impacto no Lead**: Fricção máxima no momento de decisão de compra.
- **Solução no Novo Projeto**: Página `/planos` com card transparente, valor âncora claro (R$ 39,90/mês na assinatura recorrente), garantia de 7 dias incondicional, FAQ de pagamento, link direto para checkout e botão de suporte no WhatsApp.

#### E. Experiência Mobile (CRO & Responsividade)
- **Problema**: Elementos sobrepostos, fontes em tamanhos discrepantes no celular e ausência de menu mobile fixo acessível.
- **Solução no Novo Projeto**: Design mobile-first completo, menu drawer suave, botões de ação com alvo de toque mínimo de 48px e navegação otimizada com zero lag visual.

#### F. SEO Técnico e Desempenho
- **Problema**:
  - Títulos e descrições sem estratégia de palavras-chave educacionais (ex.: "inglês autêntico", "curso de inglês online com professora", "plataforma poliglota").
  - Ausência de Open Graph tags, Twitter Cards e schema.org JSON-LD (EducationalOrganization / Course).
  - Sem sitemap.xml e robots.txt otimizados.
  - Imagens pesadas não otimizadas sem atributos `alt` descritivos.
- **Solução no Novo Projeto**: Implementação nativa de metatags completas, dados estruturados JSON-LD, Open Graph, tags canônicas, robots.txt, sitemap.xml e imagens otimizadas em formato WebP/PNG moderno.

#### G. Segurança e LGPD
- **Problema**: Ausência de política de privacidade clara, termos de uso inexistentes e ausência de headers de segurança HTTP.
- **Solução no Novo Projeto**: Páginas dedicadas de `/privacidade` e `/termos`, proteção estrita a dados de alunos e configuração de headers de segurança HTTP na Netlify (CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy).
