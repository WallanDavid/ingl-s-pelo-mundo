# ESTRATÉGIA DE SEO TÉCNICO E CONTEÚDO
## Fluente no Mundo — Guia de Otimização Orgânica (Outubro/2026)

### 1. Pilares da Estratégia de SEO

A reformulação do site comercial visa posicionar o **Fluente no Mundo** no topo dos resultados de busca para termos ligados à aprendizagem de idiomas com metodologia humanizada, aulas ao vivo e ferramentas inovadoras de estudo.

#### Palavras-Chave Foco (Keyword Mapping):
- **Topo de Funil (Consciência)**: "como aprender inglês sozinho", "metodologia para aprender idiomas", "dificuldade de falar inglês", "como memorizar vocabulário em inglês".
- **Meio de Funil (Consideração)**: "curso de inglês online com professora", "plataforma para aprender múltiplos idiomas", "curso de inglês com aula ao vivo semanal", "repetição espaçada para inglês".
- **Fundo de Funil (Decisão)**: "fluente no mundo", "amanda beatriz inglês", "método autêntico amanda beatriz", "fluente no mundo valores", "plataforma fluente no mundo é boa".

---

### 2. Implementação Técnica

1. **HTML Semântico Rigoroso**:
   - Um único `<h1>` exclusivo por página descrevendo com precisão o tópico.
   - Hierarquia clara (`<h2>` para seções estruturais e `<h3>` para cards e itens).
   - Uso de tags semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
2. **Metatags e Otimização Social**:
   - Títulos únicos limitados a 55-65 caracteres com separador de autoridade (`Título | Fluente no Mundo`).
   - Meta Descriptions cativantes e orientadas a CTR (145-160 caracteres).
   - Metatags completas de Open Graph (`og:type`, `og:site_name`, `og:title`, `og:description`, `og:image`, `og:url`, `og:locale`).
   - Twitter Cards (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`).
   - Links canônicos autênticos em todas as páginas para prevenir canibalização.
3. **Dados Estruturados Schema.org (JSON-LD)**:
   - Em todas as páginas: `EducationalOrganization` contendo nome, url, logo, redes sociais e fundadora Amanda Beatriz.
   - Na página `/`: `WebSite` com navegação semântica.
   - Na página `/planos` e `/formacao-global`: `Course` detalhando o curso, descrição pedagógica e oferta.
   - Na página `/faq` e seções de dúvidas: `FAQPage` estruturado para rich snippets no Google.
4. **Arquivos de Rastreamento (Sitemap & Robots)**:
   - `public/robots.txt` orientando bots de busca e bloqueando indexação de diretórios temporários ou privados.
   - `public/sitemap.xml` contendo todas as URLs canônicas com prioridades e `lastmod` atualizados.
5. **Otimização de Imagens**:
   - Todas as imagens com dimensões explícitas `width` e `height` para prevenir CLS (Cumulative Layout Shift).
   - Atributos `alt` acessíveis e descritivos em português.
   - `loading="lazy"` para imagens abaixo da dobra e `loading="eager"` / `fetchpriority="high"` para o banner principal.
