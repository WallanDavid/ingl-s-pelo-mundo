# DIRETRIZES DE SEGURANÇA E CONFORMIDADE COM A LGPD
## Fluente no Mundo — Política Técnica de Proteção de Dados (Outubro/2026)

### 1. Princípios de Segurança e Minimização

O novo site comercial do **Fluente no Mundo** opera sob a filosofia de arquitetura estática segura (Jamstack), eliminando superfícies tradicionais de ataque (como invasões de banco de dados SQL injection, servidores PHP desatualizados ou vazamento de variáveis de ambiente backend).

1. **Ausência de Segredos no Frontend**:
   - Nenhuma chave de API privada, token de banco de dados ou credencial de pagamento reside no código-fonte cliente ou no repositório.
2. **Isolamento da Área do Aluno**:
   - A plataforma interna dos alunos (`https://alunos.fluentenomundo.com`) é tratada como um sistema externo e independente.
   - Os 16 PDFs de referência fornecidos pelo usuário contêm dados visuais da plataforma e capturas de tela locais; eles estão expressamente listados no `.gitignore` e armazenados apenas localmente em `docs/referencias/`, nunca sendo versionados no GitHub público.
3. **Links e Transações Comerciais Seguros**:
   - Todos os botões de checkout apontam diretamente para provedores de pagamento homologados com criptografia SSL/TLS ativa.
   - Todos os links externos abrem com `rel="noopener noreferrer"`.

---

### 2. Cabeçalhos de Segurança HTTP (Netlify)

O arquivo `netlify.toml` aplica cabeçalhos de proteção rigorosos em todas as respostas HTTP da produção:

- **Content-Security-Policy (CSP)**: Controla origens permitidas de scripts, estilos, imagens e conexões.
- **Strict-Transport-Security (HSTS)**: `max-age=31536000; includeSubDomains; preload` forçando tráfego 100% criptografado via HTTPS.
- **X-Frame-Options**: `DENY` para impedir ataques de clickjacking.
- **X-Content-Type-Options**: `nosniff` para evitar ataques baseados em MIME sniffing.
- **Referrer-Policy**: `strict-origin-when-cross-origin` para proteger a privacidade de navegação do usuário.
- **Permissions-Policy**: Restringe acesso desnecessário a hardware do dispositivo (câmera, microfone, geolocalização) no site comercial.

---

### 3. Conformidade com a LGPD (Lei Federal nº 13.709/2018)

1. **Transparência e Consentimento**:
   - Página `/privacidade` detalhando de forma clara e acessível quais dados são coletados (ex.: cookies essenciais de navegação e dados preenchidos voluntariamente em formulários de contato).
   - Ausência de rastreadores invasivos de terceiros sem aviso prévio.
2. **Direitos dos Titulares**:
   - Canal de contato explícito para requisição de exclusão, alteração ou esclarecimento sobre dados pessoais.
3. **Minimização na Coleta**:
   - Formulários solicitam estritamente o necessário (nome, e-mail e mensagem), sem exigência desnecessária de CPF ou endereço no site institucional.
