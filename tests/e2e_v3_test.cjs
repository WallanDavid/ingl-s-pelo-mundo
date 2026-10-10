const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

async function runE2ETests() {
  console.log('====================================================');
  console.log('SUITE DE TESTES E2E V3 — LABORATÓRIO FLUENTE NO MUNDO');
  console.log('====================================================\n');

  const htmlPath = path.resolve(__dirname, '../dist/index.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

  // Find the client js script path
  const astroDir = path.resolve(__dirname, '../dist/_astro');
  const jsFiles = fs.readdirSync(astroDir).filter(f => f.startsWith('StudentPlatformLab'));
  if (jsFiles.length === 0) {
    throw new Error('Script StudentPlatformLab not found in dist/_astro!');
  }
  const jsContent = fs.readFileSync(path.join(astroDir, jsFiles[0]), 'utf-8');

  // Setup DOM with SpeechSynthesis mock
  let speechSpoken = null;
  const dom = new JSDOM(htmlContent, {
    runScripts: 'dangerously',
    resources: 'usable',
    url: 'http://localhost:4321/'
  });

  const { window } = dom;
  const { document } = window;

  // Polyfill SpeechSynthesis
  window.speechSynthesis = {
    speak: (utterance) => {
      speechSpoken = utterance.text;
    },
    cancel: () => {}
  };
  window.SpeechSynthesisUtterance = function(text) {
    this.text = text;
    this.lang = 'en-US';
  };

  // Execute the bundle script in the window context
  const scriptEl = document.createElement('script');
  scriptEl.textContent = jsContent;
  document.body.appendChild(scriptEl);

  // Trigger DOMContentLoaded so listener executes
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

  // TC-01: Module Switching
  console.log('--- Executando TC-01: Alternância de Módulos (7 Abas) ---');
  const panelsTargets = [
    'lab-panel-vocabulario',
    'lab-panel-srs',
    'lab-panel-gamificacao',
    'lab-panel-vivencia',
    'lab-panel-imersao',
    'lab-panel-sos',
    'lab-panel-cronograma'
  ];
  let tc01Pass = true;
  for (const targetId of panelsTargets) {
    const btn = document.querySelector(`.lab-nav-btn[data-target="${targetId}"]`);
    if (!btn) {
      tc01Pass = false;
      console.error(`Botão com target ${targetId} não encontrado`);
      break;
    }
    btn.click();
    const panel = document.getElementById(targetId);
    const isVisible = panel && !panel.classList.contains('hidden');
    if (!isVisible) {
      tc01Pass = false;
      console.error(`Painel ${targetId} não ficou visível`);
      break;
    }
  }
  assert('TC-01', 'Alternância de Módulos da Plataforma (7 abas)', tc01Pass, 'Todas as 7 abas ativaram seus respectivos painéis dinamicamente');

  // TC-02: Weekly Schedule Navigation
  console.log('\n--- Executando TC-02: Navegação do Cronograma Semanal ---');
  // Back to cronograma tab
  document.querySelector('.lab-nav-btn[data-target="lab-panel-cronograma"]').click();
  const dayButtons = document.querySelectorAll('.week-day-btn');
  let tc02Pass = dayButtons.length >= 7;
  const dayTitleEl = document.getElementById('day-title');
  const dayLessonTitleEl = document.getElementById('day-lesson-title');

  // Click Tuesday
  const terBtn = document.querySelector('.week-day-btn[data-day="ter"]');
  if (terBtn) {
    terBtn.click();
    if (!dayTitleEl.textContent.includes('Terça-feira') || !dayLessonTitleEl.textContent.includes('Vogais Curtas')) {
      tc02Pass = false;
    }
  } else {
    tc02Pass = false;
  }

  // Click Thursday
  const quiBtn = document.querySelector('.week-day-btn[data-day="qui"]');
  if (quiBtn) {
    quiBtn.click();
    if (!dayTitleEl.textContent.includes('Quinta-feira') || !dayLessonTitleEl.textContent.includes('Banco Pessoal')) {
      tc02Pass = false;
    }
  } else {
    tc02Pass = false;
  }
  assert('TC-02', 'Navegação do Cronograma Semanal (Seg-Dom)', tc02Pass, `Aulas atualizadas dinamicamente: "${dayLessonTitleEl ? dayLessonTitleEl.textContent.trim() : ''}"`);

  // TC-03 & TC-04: Adding Test Expression to Vocabulary
  console.log('\n--- Executando TC-03 & TC-04: Adição de Expressão no Vocabulário ---');
  document.querySelector('.lab-nav-btn[data-target="lab-panel-vocabulario"]').click();
  const inputTerm = document.getElementById('input-vocab-term');
  const inputMeaning = document.getElementById('input-vocab-meaning');
  const addForm = document.getElementById('add-vocab-form');
  const vocabGrid = document.getElementById('vocab-items-grid');
  let tc04Pass = false;
  if (inputTerm && inputMeaning && addForm && vocabGrid) {
    inputTerm.value = 'Hit the books';
    inputMeaning.value = 'Estudar intensamente com foco';
    
    // Dispatch submit
    const submitEvent = new window.Event('submit', { bubbles: true, cancelable: true });
    addForm.dispatchEvent(submitEvent);

    tc04Pass = vocabGrid.textContent.includes('Hit the books') && vocabGrid.textContent.includes('Estudar intensamente com foco');
  }
  assert('TC-04', 'Adição de Expressão Customizada ao Banco Local', tc04Pass, 'Expressão "Hit the books" renderizada no grid');

  // TC-05: Speech Synthesis Audio in SRS
  console.log('\n--- Executando TC-05: Síntese de Voz (TTS) na Revisão SRS ---');
  document.querySelector('.lab-nav-btn[data-target="lab-panel-srs"]').click();
  const btnAudio = document.getElementById('btn-srs-audio');
  let tc05Pass = false;
  if (btnAudio) {
    btnAudio.click();
    tc05Pass = speechSpoken !== null && speechSpoken.length > 0;
  }
  assert('TC-05', 'Síntese de Áudio Nativa na Revisão SRS', tc05Pass, `Áudio vocalizado via speechSynthesis: "${speechSpoken}"`);

  // TC-06: SRS Card Flip / Translation Reveal
  console.log('\n--- Executando TC-06: Revelação de Significado SRS ---');
  const btnReveal = document.getElementById('btn-srs-reveal');
  const revealPanel = document.getElementById('srs-translation-reveal');
  let tc06Pass = false;
  if (btnReveal && revealPanel) {
    const wasHidden = revealPanel.classList.contains('hidden');
    btnReveal.click();
    const isNowVisible = !revealPanel.classList.contains('hidden');
    tc06Pass = wasHidden && isNowVisible;
  }
  assert('TC-06', 'Revelação de Significado & Retenção Cognitiva no SRS', tc06Pass, 'Painel de tradução e contexto revelado com sucesso');

  // TC-07: Daily Check-in & Points Increment
  console.log('\n--- Executando TC-07: Check-in Diário (+10 pontos) ---');
  document.querySelector('.lab-nav-btn[data-target="lab-panel-gamificacao"]').click();
  const btnCheckin = document.getElementById('btn-make-checkin');
  const pointsCounter = document.getElementById('points-counter-value');
  const checkinBtnText = document.getElementById('checkin-btn-text');
  let tc07Pass = false;
  if (btnCheckin && pointsCounter && checkinBtnText) {
    const initialText = pointsCounter.textContent;
    btnCheckin.click();
    const updatedText = pointsCounter.textContent;
    const isComplete = checkinBtnText.textContent.includes('Check-in Realizado Hoje');
    tc07Pass = initialText !== updatedText && updatedText.includes('1.430 pts') && isComplete;
  }
  assert('TC-07', 'Check-in Diário com Gamificação (+10 pontos)', tc07Pass, `Pontuação atualizada de 1.420 pts para: "${pointsCounter ? pointsCounter.textContent : ''}"`);

  // TC-08: SOS Professora Simulation
  console.log('\n--- Executando TC-08: Simulação de Envio SOS Professora ---');
  document.querySelector('.lab-nav-btn[data-target="lab-panel-sos"]').click();
  const btnSos = document.getElementById('btn-simulate-sos');
  const sosResponseText = document.getElementById('sos-response-text');
  const sosStatusTag = document.getElementById('sos-status-tag');
  let tc08Pass = false;
  if (btnSos && sosResponseText && sosStatusTag) {
    btnSos.click();
    // Await the 800ms simulation timer
    await new Promise(r => setTimeout(r, 1000));
    const responseHasProf = sosResponseText.innerHTML.includes('Prof. Amanda') || sosResponseText.innerHTML.includes('TH') || sosResponseText.innerHTML.includes('Wanna');
    const statusUpdated = sosStatusTag.textContent.includes('Concluído');
    tc08Pass = responseHasProf && statusUpdated;
  }
  assert('TC-08', 'Simulação do SOS Professora com Resposta Pedagógica', tc08Pass, 'Dúvida processada e resposta pedagógica da professora exibida com sucesso');

  console.log('\n====================================================');
  const allPassed = testResults.every(r => r.status === 'PASS');
  if (allPassed) {
    console.log('STATUS FINAL: TODOS OS CASOS DE TESTE PASSARAM COM SUCESSO TOTAL! (100% GREEN)');
  } else {
    console.error('ALGUNS TESTES FALHARAM!');
    process.exit(1);
  }
  console.log('====================================================\n');
}

runE2ETests().catch(err => {
  console.error(err);
  process.exit(1);
});
