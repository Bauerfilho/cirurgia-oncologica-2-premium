// PWA bootstrap canônico Bauer — auto-update ABSOLUTO (sem clique manual obrigatório).
// Resolve sw.js na raiz da plataforma a partir de qualquer profundidade (HUB ou /aulas/aulaN/).

(function () {
  if (!('serviceWorker' in navigator)) return;

  // Caminho do SW na raiz: conta a profundidade relativa ao scope.
  // HUB: index.html na raiz -> 'sw.js'. Aula: /aulas/aula-01/ -> '../../sw.js'.
  function swPath() {
    const p = location.pathname;
    const m = p.match(/\/aulas\/[^/]+\//);
    return m ? '../../sw.js' : 'sw.js';
  }
  function swScope() {
    const p = location.pathname;
    const m = p.match(/^(.*\/)aulas\/[^/]+\//);
    if (m) return m[1];
    return p.replace(/[^/]*$/, '');
  }

  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) return; refreshing = true; window.location.reload();
  });

  function showToast(reg) {
    let toast = document.getElementById('updateToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'updateToast';
      toast.className = 'pwa-update';
      toast.setAttribute('data-visible', 'true');
      toast.setAttribute('role', 'status');
      toast.innerHTML = '<span>Nova versão pronta…</span><button type="button">Atualizar</button>';
      document.body.appendChild(toast);
      toast.querySelector('button').addEventListener('click', () => {
        if (reg.waiting) reg.waiting.postMessage({ type: 'SKIP_WAITING' });
      });
    } else { toast.setAttribute('data-visible', 'true'); }
  }

  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register(swPath(), { scope: swScope() });
      setInterval(() => reg.update().catch(() => {}), 60 * 1000);
      function trackWaiting(worker) {
        if (!worker) return;
        worker.addEventListener('statechange', () => {
          if (worker.state === 'installed' && navigator.serviceWorker.controller) {
            showToast(reg);
            worker.postMessage({ type: 'SKIP_WAITING' });
          }
        });
      }
      if (reg.waiting && navigator.serviceWorker.controller) { showToast(reg); reg.waiting.postMessage({ type: 'SKIP_WAITING' }); }
      reg.addEventListener('updatefound', () => trackWaiting(reg.installing));
    } catch (_) { /* silencioso */ }
  });

  // Botão instalar (id btnInstall, presente no HUB se houver)
  let deferred = null;
  const btn = document.getElementById('btnInstall');
  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferred = e; if (btn) btn.classList.add('show'); });
  btn?.addEventListener('click', async () => { if (!deferred) return; deferred.prompt(); await deferred.userChoice; deferred = null; btn.classList.remove('show'); });
})();
