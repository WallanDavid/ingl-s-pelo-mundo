const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

async function runVoyageTests() {
  console.log('================================================================');
  console.log('SUITE DE TESTES E2E V4 — FLUENTE NO MUNDO (A VIAGEM DO LEAD)');
  console.log('================================================================\n');

  const htmlPath = path.resolve(__dirname, '../dist/index.html');
  if (!fs.existsSync(htmlPath)) {
    console.error('dist/index.html não encontrado. Execute npm run build antes.');
    process.exit(1);
  }
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

  const dom = new JSDOM(htmlContent, {
    url: 'http://localhost:4321/'
  });

  const { window } = dom;
  const { document } = window;

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

  // TC-01: Logo Oficial e Link para Alunos
  console.log('--- Executando TC-01: Identidade Oficial & Link Plataforma de Alunos ---');
  const logoImg = document.querySelector('header img[src*="logo-white.png"]');
  const alunosLink = document.querySelector('a[href*="alunos.fluentenomundo.com"]');
  assert('TC-01', 'Logo Oficial e Link para Área do Aluno', Boolean(logoImg && alunosLink), 'Logo da marca presente e link para alunos.fluentenomundo.com validado');

  // TC-02: Imagem Anexada e 15 Produtos Interativos
  console.log('\n--- Executando TC-02: Plataforma do Aluno & 15 Produtos Interativos ---');
  const sidebarFile = path.resolve(__dirname, '../public/images/platform-sidebar.png');
  const hasSidebarFile = fs.existsSync(sidebarFile);
  const moduleBtns = document.querySelectorAll('.module-nav-btn');
  assert('TC-02', 'Print Anexo da Plataforma e 15 Módulos Interativos', hasSidebarFile && moduleBtns.length === 15, `Arquivo platform-sidebar.png existe e encontrados ${moduleBtns.length} módulos interativos`);

  // TC-03: Remoção Total de Depoimentos
  console.log('\n--- Executando TC-03: Remoção Completa de Depoimentos ---');
  const depoimentos = document.getElementById('depoimentos');
  const testCards = document.querySelectorAll('.testimonial-card, .dep-card');
  assert('TC-03', 'Zero Depoimentos na Landing Page', !depoimentos && testCards.length === 0, 'Nenhum print de depoimento ou avaliação presente');

  // TC-04: Preços do Site Oficial e Modal de Pagamento
  console.log('\n--- Executando TC-04: Preços do Site Oficial (R$ 39,90 e R$ 179,40) ---');
  const planosSection = document.getElementById('planos');
  const hasMensal = planosSection && planosSection.textContent.includes('39') && planosSection.textContent.includes(',90');
  const hasSemestral = planosSection && planosSection.textContent.includes('179') && planosSection.textContent.includes(',40');
  const hasModal = Boolean(document.getElementById('paymentModal'));
  assert('TC-04', 'Preços Oficiais e Modal de Pagamento', Boolean(hasMensal && hasSemestral && hasModal), 'Planos de R$ 39,90 e R$ 179,40 presentes com modal de checkout');

  // TC-05: Simulador de Viagem do Lead e Passaporte
  console.log('\n--- Executando TC-05: A Viagem do Lead e Simulador de Voo ---');
  const passportBtns = document.querySelectorAll('.passport-btn');
  const goalBtns = document.querySelectorAll('.goal-btn');
  const timeBtns = document.querySelectorAll('.time-btn');
  assert('TC-05', 'Passaporte e Simulador de Roteiro da Viagem', passportBtns.length >= 3 && goalBtns.length >= 4 && timeBtns.length >= 3, 'Seletores interativos de passaporte, destinos e tempos operacionais');

  // TC-06: Gráficos de Memória e Comparativo com Seta Oficial
  console.log('\n--- Executando TC-06: Gráficos de Retenção e Seta Oficial ---');
  const arrowImg = document.querySelector('img[src*="arrow.png"]');
  const calcBtns = document.querySelectorAll('.calc-btn');
  const hasEbbinghaus = document.body.textContent.includes('Ebbinghaus') || document.body.textContent.includes('Memória Permanente');
  assert('TC-06', 'Gráficos de Retenção, Comparativo e Calculadora', Boolean(arrowImg && calcBtns.length >= 3 && hasEbbinghaus), 'Gráfico de barras de retenção, seta de transformação e calculadora financeira validados');

  // TC-07: Métodos da Prof. Amanda Beatriz e 4Ps
  console.log('\n--- Executando TC-07: Metodologia A.U.T.E.N.T.I.C.A e 4Ps ---');
  const pillarBtns = document.querySelectorAll('.pillar-btn');
  const has4Ps = document.body.textContent.includes('Padrões de Fala') && document.body.textContent.includes('Pronúncia Descomplicada');
  assert('TC-07', 'Metodologia A.U.T.E.N.T.I.C.A e os 4Ps da Pronúncia', pillarBtns.length === 9 && has4Ps, '9 pilares interativos e 4 blocos dos 4Ps validados');

  // TC-08: Experiência Mobile
  console.log('\n--- Executando TC-08: Experiência Mobile e Barra de Ação ---');
  const mobileBar = document.querySelector('aside');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  assert('TC-08', 'Otimização Mobile com Barra Fixa e Drawer', Boolean(mobileBar && mobileMenuBtn), 'Barra fixa de conversão para smartphone e botão de menu presentes');

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

runVoyageTests().catch(err => {
  console.error('Erro fatal executando os testes E2E:', err);
  process.exit(1);
});
