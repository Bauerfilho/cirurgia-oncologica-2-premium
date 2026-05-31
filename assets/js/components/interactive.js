/* interactive.js — componentes interativos compartilhados (Contrato 3 §3)
   hotspot · stat-counter · toggle · checklist-reveal
   Regras: funciona por teclado E touch; estado visual claro; nada essencial
   só em hover; respeita prefers-reduced-motion. Idempotente.
   Reutilizável pelas próximas aulas. */

const prefersReduced = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ===== HOTSPOTS sobre SVG =====
   Marcação esperada:
   <div class="figure-svg__stage"> ...svg...
     <button class="hotspot" style="left:..;top:.." data-hs-target="d1"
             data-hs-label="Vegetação" aria-expanded="false"><span>1</span></button>
   </div>
   <div class="hotspot-detail" data-hs-detail-for="<stageId>" aria-live="polite">...</div>
   Detalhes vêm de data-hs-label / data-hs-text / data-hs-hint / data-hs-tone no botão. */
function initHotspots(root = document) {
  root.querySelectorAll('.figure-svg__stage:not([data-hs-bound])').forEach((stage) => {
    stage.setAttribute('data-hs-bound', '1');
    const stageId = stage.dataset.hsStage || '';
    const detail = root.querySelector(`.hotspot-detail[data-hs-detail-for="${stageId}"]`);
    const spots = Array.from(stage.querySelectorAll('.hotspot'));
    if (!spots.length) return;

    const show = (btn) => {
      spots.forEach((b) => b.setAttribute('aria-expanded', String(b === btn)));
      if (!detail) return;
      const tone = btn.dataset.hsTone || '';
      detail.dataset.tone = tone;
      const label = btn.dataset.hsLabel || '';
      const text = btn.dataset.hsText || '';
      const hint = btn.dataset.hsHint || '';
      detail.innerHTML =
        `<div class="hotspot-detail__label">${label}</div>` +
        `<p class="hotspot-detail__text">${text}</p>` +
        (hint ? `<p class="hotspot-detail__hint">${hint}</p>` : '');
    };

    spots.forEach((btn) => {
      btn.setAttribute('type', 'button');
      btn.addEventListener('click', () => show(btn));
    });
  });
}

/* ===== STAT-COUNTER =====
   <span class="stat-counter" data-target="50" data-suffix=" anos"></span>
   Anima 0→target ao entrar na viewport. reduced-motion → valor final direto. */
function initStatCounters(root = document) {
  const counters = Array.from(root.querySelectorAll('.stat-counter:not([data-sc-bound])'));
  if (!counters.length) return;

  const render = (el, val) => {
    const dec = parseInt(el.dataset.decimals || '0', 10);
    el.textContent =
      (el.dataset.prefix || '') + val.toFixed(dec) + (el.dataset.suffix || '');
  };

  const run = (el) => {
    el.setAttribute('data-sc-bound', '1');
    const target = parseFloat(el.dataset.target || '0');
    if (prefersReduced()) { render(el, target); return; }
    const dur = 1100;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      render(el, target * eased);
      if (t < 1) requestAnimationFrame(step);
      else render(el, target);
    };
    requestAnimationFrame(step);
  };

  if (!('IntersectionObserver' in window)) { counters.forEach(run); return; }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { run(e.target); obs.unobserve(e.target); }
    });
  }, { threshold: 0.4 });
  counters.forEach((el) => io.observe(el));
}

/* ===== TOGGLE (segmented control) =====
   <div class="toggle-switch" role="tablist" data-toggle="rastreio">
     <button class="toggle-switch__opt" role="tab" data-key="br" aria-selected="true">Brasil</button>
     <button class="toggle-switch__opt" role="tab" data-key="intl" aria-selected="false">Internacional</button>
   </div>
   <div class="toggle-panel" data-toggle-for="rastreio" data-key="br" data-active="true">...</div>
   <div class="toggle-panel" data-toggle-for="rastreio" data-key="intl">...</div> */
function initToggles(root = document) {
  root.querySelectorAll('.toggle-switch:not([data-tg-bound])').forEach((sw) => {
    sw.setAttribute('data-tg-bound', '1');
    const group = sw.dataset.toggle;
    const opts = Array.from(sw.querySelectorAll('.toggle-switch__opt'));
    const panels = Array.from(root.querySelectorAll(`.toggle-panel[data-toggle-for="${group}"]`));

    const select = (key) => {
      opts.forEach((o) => o.setAttribute('aria-selected', String(o.dataset.key === key)));
      panels.forEach((p) => p.setAttribute('data-active', String(p.dataset.key === key)));
    };

    opts.forEach((opt, i) => {
      opt.setAttribute('type', 'button');
      opt.addEventListener('click', () => select(opt.dataset.key));
      opt.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault(); const n = opts[(i + 1) % opts.length]; n.focus(); select(n.dataset.key);
        }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault(); const n = opts[(i - 1 + opts.length) % opts.length]; n.focus(); select(n.dataset.key);
        }
      });
    });
  });
}

/* ===== CHECKLIST-REVEAL =====
   <div class="reveal" data-reveal="caso">
     <ol class="reveal__list"> <li class="reveal__item">...</li> ... </ol>
     <button class="reveal__btn" data-reveal-btn>Revelar próximo</button>
   </div>
   Itens revelam um a um; clicar num item também o revela. */
function initReveals(root = document) {
  root.querySelectorAll('.reveal:not([data-rv-bound])').forEach((block) => {
    block.setAttribute('data-rv-bound', '1');
    const items = Array.from(block.querySelectorAll('.reveal__item'));
    const btn = block.querySelector('[data-reveal-btn]');
    let idx = 0;

    const revealNext = () => {
      if (idx >= items.length) return;
      items[idx].setAttribute('data-revealed', 'true');
      idx += 1;
      if (btn && idx >= items.length) { btn.setAttribute('data-done', 'true'); btn.textContent = 'Tudo revelado'; }
    };

    items.forEach((it, i) => {
      it.setAttribute('tabindex', '0');
      it.setAttribute('role', 'button');
      const revealUpTo = () => { while (idx <= i) revealNext(); };
      it.addEventListener('click', revealUpTo);
      it.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); revealUpTo(); }
      });
    });
    if (btn) { btn.setAttribute('type', 'button'); btn.addEventListener('click', revealNext); }
  });
}

export function initInteractive(root = document) {
  initHotspots(root);
  initStatCounters(root);
  initToggles(root);
  initReveals(root);
}
