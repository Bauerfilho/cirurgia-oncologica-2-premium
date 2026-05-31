// Service Worker — Cirurgia Oncológica 2
// Incrementar CACHE_NAME a cada aula/release dispara update-toast nos usuários da versão anterior.
const CACHE_NAME = 'cironco2-bauer-v2';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/tokens.css',
  './css/base.css',
  './css/components.css',
  './data/pages.js',
  './js/app.js',
  './js/components.js',
  './js/pwa-bootstrap.js',
  './pages/a1/caso-aurelino.html',
  './pages/a1/dois-tumores-macete.html',
  './pages/a1/fatores-de-risco.html',
  './pages/a1/clinica-tgi.html',
  './pages/a1/diagnostico-biopsia.html',
  './pages/a1/superpoder-contiguidade.html',
  './pages/a1/estadiamento.html',
  './pages/a1/conduta-profundidade.html',
  './pages/a1/neoadjuvancia-reconstrucao.html',
  './pages/a1/ressecabilidade.html',
  './pages/a1/fechamento-aurelino.html',
  './pages/a1/quiz-consolidacao.html',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/img-eda-adenoca.jpg',
  './assets/img-use-parede.jpg',
  './assets/img-tc-torax.jpg',
  './assets/img-tilose-palmar.jpg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS)).catch(() => {})
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

// Stale-while-revalidate para same-origin GET
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req).then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
