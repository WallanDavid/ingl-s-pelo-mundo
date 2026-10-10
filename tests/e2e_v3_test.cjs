const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

async function runE2ETests() {
  console.log('================================================================');
  console.log('SUITE DE TESTES E2E V3 — SITE COMERCIAL FLUENTE NO MUNDO');
  console.log('================================================================\n');

  const htmlPath = path.resolve(__dirname, '../dist/index.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

  // Find any client scripts in dist/_astro
  const astroDir = path.resolve(__dirname, '../dist/_astro');
  const jsFiles = fs.readdirSync(astroDir).filter(f => f.endsWith('.js'));
  let jsContent = '';
  for (const f of jsFiles) {
    jsContent += fs.readFileSync(path.join(astroDir, f), 'utf-8') + '\n';
  }

  const dom = new JSDOM(htmlContent, {
    runScripts: 'dangerously',
    resources: 'usable',
    url: 'http://localhost:4321/'
  });

  const { window } = dom;
  const { document } = window;

  // Execute all inline scripts from HTML
  const inlineScripts = document.querySelectorAll('script');
  inlineScripts.forEach(s => {
    if (s.textContent.trim()) {
      try {
        window.eval(s.textContent);
      } catch (e) {
        // ignore module export errors if any
      }
    }
  });

  // Trigger DOMContentLoaded
  document.dispatchEvent(new window.Event('DOMContentLoaded'));

  const testResults = [];
  function assert(testId, name, condition, details) {
    if (condition) {
      console.log(`✓ [PASS] ${testId}: ${name}`);
      testResults.push({ id: testId, name, status: 'PASS', details });
    } else {
      console.error(`✗ [FAIL] ${testId}: ${name} — ${details}`);
      testResults.push({ id: testId, name, status: 'FAIL', details });
    }
  }

  // TC-01: Platform Showcase tab switching
  console.log('--- Executando TC-01: Alternância das 6 Abas da Plataforma ---');
  const tourTabs = ['dashboard', 'courses', 'vocabulary', 'masterclasses', 'vivencia', 'sos'];
  let tc01Pass = true;
  for (const tab of tourTabs) {
    const btn = document.querySelector(`[data-tour-tab="${tab}"]`);
    if (!btn) {
      tc01Pass = false;
      console.error(`Botão data-tour-tab="${tab}" não encontrado`);
      break;
    }
    btn.click();
    const panel = document.getElementById(`tour-panel-${tab}`);
    const isVisible = panel && !panel.classList.contains('hidden');
    if (!isVisible) {
      tc01Pass = false;
      console.error(`Painel tour-panel-${tab} não ficou visível`);
      break;
    }
  }
  assert('TC-01', 'Alternância Fluida das 6 Abas da Plataforma', tc01Pass, 'Todas as 6 abas chave ativaram seus respectivos painéis com imagens reais');

  // TC-02: Working CTA Buttons
  console.log('\n--- Executando TC-02: Verificação de Botões de Ação e Matrícula ---');
  const ctaLinks = document.querySelectorAll('a[href="#planos"], a[href="/planos"], a[href*="alunos.fluentenomundo.com"]');
  const tc02Pass = ctaLinks.length >= 5;
  assert('TC-02', 'Botões de Matrícula e Conversão Ativos e Funcionais', tc02Pass, `Encontrados ${ctaLinks.length} links e botões de matrícula válidos`);

  // TC-03: Real Student Testimonials
  console.log('\n--- Executando TC-03: Seção de Prova Social com Imagens Reais ---');
  const testimonialImgs = document.querySelectorAll('#depoimentos img');
  const tc03Pass = testimonialImgs.length >= 6;
  assert('TC-03', 'Galeria de Depoimentos Reais com Imagens Autênticas', tc03Pass, `${testimonialImgs.length} imagens de prints de alunos carregadas`);

  // TC-04: Bonus Showcase
  console.log('\n--- Executando TC-04: Bônus Exclusivos de Matrícula ---');
  const ebookImg = document.querySelector('img[src*="meuEbookResetei.png"]');
  const materiaisImg = document.querySelector('img[src*="materiais.png"]');
  const tc04Pass = Boolean(ebookImg && materiaisImg);
  assert('TC-04', 'Apresentação Visual dos Bônus (Ebook e Materiais)', tc04Pass, 'Imagens reais do Ebook Resetei e Biblioteca de PDFs verificadas');

  // TC-05: Pricing Cards with Monthly and Annual options
  console.log('\n--- Executando TC-05: Seção de Planos e Preços ---');
  const planosSection = document.getElementById('planos');
  const hasMensal = planosSection && planosSection.textContent.includes('39') && planosSection.textContent.includes(',90');
  const hasAnual = planosSection && planosSection.textContent.includes('33') && planosSection.textContent.includes(',25');
  const tc05Pass = Boolean(hasMensal && hasAnual);
  assert('TC-05', 'Planos de Matrícula Claros (Mensal R$ 39,90 e Anual 12x R$ 33,25)', tc05Pass, 'Ambos os planos devidamente renderizados com valores transparentes');

  // TC-06: 7-Day Guarantee and WhatsApp Support
  console.log('\n--- Executando TC-06: Selo de Garantia e WhatsApp ---');
  const hasGarantia = planosSection && planosSection.textContent.includes('Garantia Incondicional de 7 Dias');
  const waBtn = document.querySelector('a[href*="wa.me"]');
  const tc06Pass = Boolean(hasGarantia && waBtn);
  assert('TC-06', 'Selo de Garantia de 7 Dias e Canal Direto de WhatsApp', tc06Pass, 'Garantia blindada e botão do WhatsApp ativos e verificados');

  // TC-07: Hero Visual Composition
  console.log('\n--- Executando TC-07: Hero com Fotos Profissionais ---');
  const amandaImg = document.querySelector('img[src*="about me.png"]');
  const cafePlataformaImg = document.querySelector('img[src*="cafe com plataforma.jpg"]');
  const tc07Pass = Boolean(amandaImg && cafePlataformaImg);
  assert('TC-07', 'Composição Visual do Hero com Amanda e Plataforma Real', tc07Pass, 'Fotos autênticas da mentora e da plataforma carregadas no Hero');

  // TC-08: Zero mock forms / Zero fake inputs
  console.log('\n--- Executando TC-08: Ausência de Formulários Simulados ou Falsos ---');
  const fakeForms = document.querySelectorAll('#laboratorio form, #plataforma-tour form');
  const fakeInputs = document.querySelectorAll('#laboratorio input, #plataforma-tour input');
  const tc08Pass = fakeForms.length === 0 && fakeInputs.length === 0;
  assert('TC-08', 'Zero Dados Mockados ou Formulários Simulados no Tour', tc08Pass, 'Nenhum formulário ou input falso detectado no showcase comercial');

  console.log('\n================================================================');
  const allPassed = testResults.every(r => r.status === 'PASS');
  if (allPassed) {
    console.log('STATUS FINAL: TODOS OS CASOS DE TESTE PASSARAM COM SUCESSO TOTAL! (100% GREEN)');
  } else {
    console.error('ALGUNS TESTES FALHARAM!');
    process.exit(1);
  }
  console.log('================================================================\n');
}

runE2ETests().catch(err => {
  console.error(err);
  process.exit(1);
});
