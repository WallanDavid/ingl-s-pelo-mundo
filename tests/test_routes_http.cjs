const http = require('http');

const endpoints = [
  '/',
  '/planos',
  '/metodo',
  '/plataforma',
  '/sobre',
  '/contato',
  '/faq',
  '/images/logo-white.png',
  '/images/about-me.png',
  '/images/class-live.jpeg',
  '/images/cafe-com-plataforma.jpg',
  '/images/platform-sidebar.png',
  '/images/arrow.png',
  '/images/brain.png'
];

async function checkUrl(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:4321${path}`, (res) => {
      resolve({ path, status: res.statusCode, type: res.headers['content-type'], length: res.headers['content-length'] });
    }).on('error', (err) => {
      resolve({ path, error: err.message });
    });
  });
}

async function run() {
  console.log('Testing HTTP Endpoints on Preview Server (http://localhost:4321):');
  for (const ep of endpoints) {
    const res = await checkUrl(ep);
    if (res.status === 200) {
      console.log(`✓ [200 OK] ${res.path} (${res.type || 'unknown'})`);
    } else {
      console.error(`✗ [ERROR] ${res.path}:`, res);
    }
  }
}

run();
