// Service Worker — Cirurgia Oncológica 2 (estrutura HUB + aulas, template antibioticoterapia)
// Incrementar CACHE_NAME a cada aula/release dispara auto-update nos usuários da versão anterior.
const CACHE_NAME = 'cironco2-bauer-v3';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/css/tokens.css',
  './assets/css/base.css',
  './assets/css/components.css',
  './assets/js/app.js',
  './assets/js/router.js',
  './assets/js/components/quiz.js',
  './assets/js/pwa-bootstrap.js',
  './aulas/aula-01/index.html',
  './assets/img/icon-192.png',
  './assets/img/icon-512.png',
  './assets/img/eda-adenoca.jpg',
  './assets/img/use-parede.jpg',
  './assets/img/tc-torax.jpg',
  './assets/img/tilose-palmar.jpg',
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
