// Service Worker — Cirurgia Oncológica 2 (estrutura HUB + aulas, template antibioticoterapia)
// Incrementar CACHE_NAME a cada aula/release dispara auto-update nos usuários da versão anterior.
const CACHE_NAME = 'cironco2-bauer-v13';

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
  './assets/js/components/interactive.js',
  './assets/js/pwa-bootstrap.js',
  './aulas/aula-01/index.html',
  './aulas/aula-02/index.html',
  './aulas/aula-02/aula-02.js',
  './aulas/aula-03/index.html',
  './aulas/aula-03/aula-03.js',
  './aulas/aula-04/index.html',
  './aulas/aula-04/aula-04.js',
  './aulas/aula-05/index.html',
  './aulas/aula-05/aula-05.js',
  './aulas/aula-06-ca-pulmao/index.html',
  './aulas/aula-06-ca-pulmao/app.js',
  './aulas/aula-07-ca-tireoide/index.html',
  './aulas/aula-07-ca-tireoide/app.js',
  './aulas/aula-07-ca-tireoide/aula-07.css',
  './aulas/aula-08-ca-prostata/index.html',
  './aulas/aula-08-ca-prostata/app.js',
  './aulas/aula-08-ca-prostata/aula-08.css',
  './aulas/aula-extra-05-hpb/index.html',
  './aulas/aula-extra-05-hpb/app.js',
  './aulas/aula-extra-05-hpb/hpb-interactive.js',
  './aulas/aula-extra-05-hpb/aula-extra-05.css',
  './assets/img/aula-extra-05-hpb/img1-anatomia-prostata-uretra-bexiga.jpg',
  './assets/img/aula-extra-05-hpb/img3-bexigoma-tc.jpg',
  './assets/img/icon-192.png',
  './assets/img/icon-512.png',
  './assets/img/eda-adenoca.jpg',
  './assets/img/use-parede.jpg',
  './assets/img/tc-torax.jpg',
  './assets/img/tilose-palmar.jpg',
  './assets/img/ccr-colono.jpg',
  './assets/img/ccr-figado-mets.png',
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
