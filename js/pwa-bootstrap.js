// PWA bootstrap canônico Bauer — auto-update ABSOLUTO (sem clique manual obrigatório).
// Registra SW, detecta nova versão, ativa skipWaiting e recarrega automaticamente.
// Toast aparece apenas como aviso transitório; a atualização não depende dele.

(function () {
  if (!('serviceWorker' in navigator)) return;

  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });

  function showToast(reg) {
    let toast = document.getElementById('updateToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'updateToast';
      toast.className = 'update-toast';
      toast.setAttribute('role', 'status');
      toast.innerHTML = '<span>Nova versão carregando…</span><button type="button">Atualizar agora</button>';
      document.body.appendChild(toast);
      toast.querySelector('button').addEventListener('click', () => {
        if (reg.waiting) reg.waiting.postMessage({ type: 'SKIP_WAITING' });
      });
    }
    toast.classList.add('show');
  }

  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('sw.js');

      // verifica updates periodicamente
      setInterval(() => reg.update().catch(() => {}), 60 * 1000);

      function trackWaiting(worker) {
        if (!worker) return;
        worker.addEventListener('statechange', () => {
          if (worker.state === 'installed' && navigator.serviceWorker.controller) {
            // nova versão pronta: auto-update absoluto
            showToast(reg);
            worker.postMessage({ type: 'SKIP_WAITING' });
          }
        });
      }

      if (reg.waiting && navigator.serviceWorker.controller) {
        showToast(reg);
        reg.waiting.postMessage({ type: 'SKIP_WAITING' });
      }
      reg.addEventListener('updatefound', () => trackWaiting(reg.installing));
    } catch (_) { /* registro falhou silenciosamente */ }
  });

  // botão de instalar PWA
  let deferred = null;
  const btn = document.getElementById('btnInstall');
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); deferred = e;
    if (btn) btn.classList.add('show');
  });
  btn?.addEventListener('click', async () => {
    if (!deferred) return;
    deferred.prompt();
    await deferred.userChoice;
    deferred = null; btn.classList.remove('show');
  });
})();
