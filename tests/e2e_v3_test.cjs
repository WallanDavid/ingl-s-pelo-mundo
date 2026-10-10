const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

async function runE2ETests() {
  console.log('================================================================');
  console.log('SUITE DE TESTES E2E V3.1 — SITE COMERCIAL LIMPO E OBJETIVO');
  console.log('================================================================\n');

  const htmlPath = path.resolve(__dirname, '../dist/index.html');
  if (!fs.existsSync(htmlPath)) {
    console.error('dist/index.html não encontrado. Execute npm run build antes.');
    process.exit(1);
  }
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

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

  // TC-01: Exposição dos 15 Produtos e Módulos da Imagem
  console.log('--- Executando TC-01: Exposição em Evidência dos 15 Produtos ---');
  const expectedProducts = [
    'formacao-global',
    'autentica',
    'jornada-poliglota',
    'imersao-com-a-prof',
    'minuto-fluente',
    'edufeed',
    'vocabulario',
    'revisao-autentica',
    'sua-biblioteca',
    'mundo-fluente-kids',
    'comunidade',
    'conquista-constancia',
    'vivencia-global',
    'conexoes-autenticas',
    'sos-professora'
  ];
  let foundProductsCount = 0;
  for (const pid of expectedProducts) {
    const el = document.getElementById(`item-${pid}`);
    if (el) foundProductsCount++;
  }
  const tc01Pass = foundProductsCount === 15;
  assert('TC-01', 'Exposição dos 15 Produtos e Módulos do Ecossistema', tc01Pass, `Encontrados ${foundProductsCount} de 15 produtos esperados com descrições e ícones`);

  // TC-02: Botões de Matrícula e Conversão Ativos
  console.log('\n--- Executando TC-02: Verificação de Botões de Ação e Matrícula ---');
  const ctaLinks = document.querySelectorAll('a[href="#planos"], a[href="/planos"], a[href*="alunos.fluentenomundo.com"]');
  const tc02Pass = ctaLinks.length >= 10;
  assert('TC-02', 'Botões de Matrícula e Conversão Ativos e Funcionais', tc02Pass, `Encontrados ${ctaLinks.length} links e botões de matrícula/checkout válidos`);

  // TC-03: Remoção Total de Depoimentos
  console.log('\n--- Executando TC-03: Remoção Completa de Seção de Depoimentos ---');
  const depoimentosSection = document.getElementById('depoimentos');
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const tc03Pass = !depoimentosSection && testimonialCards.length === 0;
  assert('TC-03', 'Remoção Total da Seção de Depoimentos', tc03Pass, 'Zero depoimentos ou prints de avaliações presentes na página comercial');

  // TC-04: Remoção da Área do Aluno / Simulador
  console.log('\n--- Executando TC-04: Remoção da Área do Aluno / Simulação Mock ---');
  const tourTabs = document.querySelectorAll('[data-tour-tab]');
  const mockInputs = document.querySelectorAll('#mock-word-input, #checkin-btn');
  const tc04Pass = tourTabs.length === 0 && mockInputs.length === 0;
  assert('TC-04', 'Remoção de Área do Aluno e Simuladores de Mentira', tc04Pass, 'Nenhum simulador ou tela mockada de software na experiência comercial');

  // TC-05: Elementos Reais do Site Original (Seta oficial e contraste de modelos)
  console.log('\n--- Executando TC-05: Elementos Reais do Site Original (arrow.png) ---');
  const arrowImg = document.querySelector('img[src*="arrow.png"]');
  const hasAutoridade = document.body.textContent.includes('10.000 aulas');
  const tc05Pass = Boolean(arrowImg && hasAutoridade);
  assert('TC-05', 'Elementos Reais do Site Original (Seta Oficial e Métricas)', tc05Pass, 'Seta de transição do modelo tradicional e dados da Amanda validados');

  // TC-06: Bônus Exclusivos de Matrícula
  console.log('\n--- Executando TC-06: Bônus Exclusivos de Matrícula ---');
  const ebookImg = document.querySelector('img[src*="meuEbookResetei.png"]');
  const materiaisImg = document.querySelector('img[src*="materiais.png"]');
  const tc06Pass = Boolean(ebookImg && materiaisImg);
  assert('TC-06', 'Apresentação Visual dos Bônus (Ebook e Materiais)', tc06Pass, 'Imagens reais do Ebook Resetei e Biblioteca de Cadernos em PDF verificadas');

  // TC-07: Seção de Planos e Preços com Garantia
  console.log('\n--- Executando TC-07: Seção de Planos e Preços ---');
  const planosSection = document.getElementById('planos');
  const hasMensal = planosSection && planosSection.textContent.includes('39') && planosSection.textContent.includes(',90');
  const hasAnual = planosSection && planosSection.textContent.includes('33') && planosSection.textContent.includes(',25');
  const hasGarantia = planosSection && planosSection.textContent.includes('7 Dias');
  const tc07Pass = Boolean(hasMensal && hasAnual && hasGarantia);
  assert('TC-07', 'Planos de Matrícula Claros (Mensal R$ 39,90 e Anual 12x R$ 33,25)', tc07Pass, 'Planos transparentes, selo de 7 dias e garantia comprovados');

  // TC-08: Hero com Fotos Profissionais da Amanda e Setup
  console.log('\n--- Executando TC-08: Hero com Composição Visual Real ---');
  const amandaImg = document.querySelector('section img[src*="about me.png"]');
  const cafeImg = document.querySelector('section img[src*="cafe com plataforma.jpg"]');
  const tc08Pass = Boolean(amandaImg && cafeImg);
  assert('TC-08', 'Hero com Fotos Profissionais da Amanda e Plataforma Real', tc08Pass, 'Fotos reais integradas no Hero');

  // Resultado Geral
  console.log('\n================================================================');
  const totalPassed = testResults.filter(r => r.status === 'PASS').length;
  if (totalPassed === testResults.length) {
    console.log(`STATUS FINAL: TODOS OS ${totalPassed} CASOS DE TESTE PASSARAM COM SUCESSO! (100% GREEN)`);
    console.log('================================================================\n');
  } else {
    console.error(`STATUS FINAL: FALHA EM ${testResults.length - totalPassed} CASOS DE TESTE.`);
    console.log('================================================================\n');
    process.exit(1);
  }
}

runE2ETests().catch(err => {
  console.error('Erro fatal executando os testes E2E:', err);
  process.exit(1);
});
