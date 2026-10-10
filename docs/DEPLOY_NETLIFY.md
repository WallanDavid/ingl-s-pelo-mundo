# GUIA DE DEPLOY E CONFIGURAÇÃO NA NETLIFY
## Fluente no Mundo — Publicação e Ambiente de Produção (Outubro/2026)

### 1. Parâmetros de Build e Configuração

O projeto foi projetado para deploy contínuo (CI/CD) automatizado através da integração GitHub ➔ Netlify.

- **Repositório Conectado**: `https://github.com/WallanDavid/ingl-s-pelo-mundo`
- **Branch de Produção**: `main`
- **Base Directory**: `/` (raiz do repositório)
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node.js Version**: `20.x` ou superior (configurado via `.nvmrc` ou variável `NODE_VERSION=20`)

---

### 2. Estrutura do Arquivo `netlify.toml`

O arquivo `netlify.toml` centraliza o comportamento de produção:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "https://fluentenomundo.com/*"
  to = "https://fluentenomundo.com/:splat"
  status = 301
  force = false

[[redirects]]
  from = "/aluno"
  to = "https://alunos.fluentenomundo.com"
  status = 302

[[redirects]]
  from = "/alunos"
  to = "https://alunos.fluentenomundo.com"
  status = 302

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"

[[headers]]
  for = "/_astro/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=86400, stale-while-revalidate=604800"
```

---

### 3. Procedimento Passo a Passo de Conexão na Netlify

1. Faça login na conta [Netlify](https://app.netlify.com).
2. Clique em **"Add new site"** > **"Import an existing project"**.
3. Escolha **GitHub** e selecione o repositório `WallanDavid/ingl-s-pelo-mundo`.
4. A Netlify detectará automaticamente as instruções de `netlify.toml` (`npm run build` e `dist`).
5. Clique em **"Deploy site"**.
6. Para associar o domínio próprio:
   - Em **Domain management**, adicione `fluentenomundo.com` e `www.fluentenomundo.com`.
   - Ajuste os registros DNS (CNAME / ALIAS) no seu provedor de domínio apontando para a Netlify.
   - O certificado SSL/TLS da Let's Encrypt será emitido e renovado automaticamente de forma gratuita.
