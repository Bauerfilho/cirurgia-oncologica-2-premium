/* rim-interactive.js — wiring vanilla das 7 interações bespoke da Aula Extra 6 (Câncer de Rim).
   Cada SVG tem interação de propósito distinto, conforme o SPEC dos assets:
   SVG-1 (P2) tabela genética clicável por linha · SVG-2 (P4) card-âncora revela "até 10%" ·
   SVG-3 (P5) hotspot na VEIA desenhada (trajeto E/D mutuamente exclusivos) ·
   SVG-4 (P6) step-through causal Stauffer · SVG-5 (P8) toggle sólido×cístico ·
   SVG-6 (P9) escada Bozniak step/slider · SVG-7 (P10) fluxograma decisão clicável.
   Tudo por click + teclado (Enter/Space) + touch (pointer), respeita prefers-reduced-motion
   (via @media no CSS) e é IDEMPOTENTE (guarda dataset.bound / dataset.act / dataset.focusBound).
   INIT ÚNICA: este arquivo é a fonte única de initAll (IIFE auto-init no fim). */

(function () {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const isKey = (e) => e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar';

  /* Helper: torna um elemento acionável por click + teclado (idempotente). */
  function activable(el, handler) {
    if (!el || el.dataset.act === '1') return;
    el.dataset.act = '1';
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
    if (!el.hasAttribute('role')) el.setAttribute('role', 'button');
    el.addEventListener('click', handler);
    el.addEventListener('keydown', (e) => { if (isKey(e)) { e.preventDefault(); handler(e); } });
  }

  /* ============ SVG-1 (P2) — tabela genética VHL × esclerose tuberosa ============
     Cada linha de achado (.vhl-row) toggla um realce (.row-bg opacity). A linha-chave
     (tumor renal típico, coral) já nasce destacada permanentemente. Fallback: tabela
     100% legível sem JS — o realce é só reforço. */
  function initSvg1(root) {
    const svg = $('svg[data-svg="svg1"]', root) || (root.querySelector('.vhl-row') && root.querySelector('.vhl-row').ownerSVGElement);
    if (!svg || svg.dataset.bound) return; svg.dataset.bound = '1';
    const rows = $$('.vhl-row', svg);
    rows.forEach((r) => {
      activable(r, () => {
        const on = r.classList.contains('is-active');
        rows.forEach((x) => { x.classList.remove('is-active'); x.setAttribute('aria-pressed', 'false'); });
        if (!on) { r.classList.add('is-active'); r.setAttribute('aria-pressed', 'true'); }
      });
    });
  }

  /* ============ SVG-2 (P4) — card-âncora varicocele → rim ============
     Clique no card revela o selo "até 10%" (oculto por padrão) e esconde o hint.
     O texto da página já traz "até 10%", então a revelação é reforço mnemônico. */
  function initSvg2(root) {
    const card = $('#svg2-card', root);
    if (!card || card.dataset.bound) return; card.dataset.bound = '1';
    activable(card, () => {
      const on = card.classList.toggle('is-revealed');
      card.setAttribute('aria-pressed', String(on));
    });
  }

  /* ============ SVG-3 (P5) — anatomia venosa gonadal/renal/cava (HOTSPOT na VEIA) ============
     Clica a gonadal E → acende todo [data-path="left"] + [data-thrombus="left"] em coral e
     mostra #svg3-tip-left. Clica a gonadal D → acende [data-path="right"] em teal e mostra
     #svg3-tip-right. Mutuamente exclusivos. O alvo de clique é a área transparente sobre a
     veia desenhada (stroke largo transparente), não um número sobreposto. */
  function initSvg3(root) {
    const svg = $('svg[data-svg="svg3"]', root) || (root.querySelector('[data-vein$="-gonadal"]') && root.querySelector('[data-vein$="-gonadal"]').ownerSVGElement);
    if (!svg || svg.dataset.bound) return; svg.dataset.bound = '1';
    const tipL = $('#svg3-tip-left', svg), tipR = $('#svg3-tip-right', svg);
    const setSide = (side) => {
      const other = side === 'left' ? 'right' : 'left';
      $$(`[data-path="${side}"], [data-thrombus="${side}"]`, svg).forEach((el) => el.classList.add('is-on'));
      $$(`[data-path="${other}"], [data-thrombus="${other}"]`, svg).forEach((el) => el.classList.remove('is-on'));
      if (tipL) tipL.classList.toggle('is-on', side === 'left');
      if (tipR) tipR.classList.toggle('is-on', side === 'right');
      $$('[data-vein="left-gonadal"], [data-vein="right-gonadal"]', svg).forEach((v) => {
        v.setAttribute('aria-pressed', String(v.dataset.vein === `${side}-gonadal`));
      });
    };
    const left = $('[data-vein="left-gonadal"]', svg);
    const right = $('[data-vein="right-gonadal"]', svg);
    if (left) activable(left, () => setSide('left'));
    if (right) activable(right, () => setSide('right'));
    [left, right].forEach((v) => {
      if (v && !v.dataset.focusBound) {
        v.dataset.focusBound = '1';
        v.addEventListener('focus', () => setSide(v.dataset.vein === 'left-gonadal' ? 'left' : 'right'));
      }
    });
  }

  /* ============ SVG-4 (P6) — diagrama causal Stauffer (step-through 1→6) ============
     Botões prev/next (criados no HTML, fora do SVG) avançam `cur`. Nós com data-step<=cur
     ficam is-on; a aresta que LEVA ao nó N tem data-step="N". aria-live anuncia o passo.
     "TTPa" preservado no SVG (fidelidade-professor). */
  function initSvg4(root) {
    const svg = $('svg[data-svg="svg4"]', root);
    if (!svg || svg.dataset.bound) return; svg.dataset.bound = '1';
    const ctl = root.querySelector('[data-step-ctl="svg4"]');
    if (!ctl) return;
    const nodes = $$('.stf-node', svg), edges = $$('.stf-edge', svg);
    const out = ctl.querySelector('[data-step-count]');
    const micro = [
      '1 · Carcinoma de células renais — o tumor primário.',
      '2 · Por mecanismo desconhecido (o "?"), o tumor age à distância.',
      '3 · Colestase intra-hepática — sem implante, sem obstrução.',
      '4 · Laboratório: fosfatase alcalina ▲, alfa-2-globulina ▲, albumina ▼, TTPa ▲.',
      '5 · Nefrectomia remove o tumor primário.',
      '6 · O quadro regride e o laboratório normaliza — paraneoplásica confirmada.',
    ];
    let cur = 1; const MAX = 6;
    const apply = () => {
      nodes.forEach((n) => n.classList.toggle('is-on', +n.dataset.step <= cur));
      edges.forEach((e) => e.classList.toggle('is-on', +e.dataset.step <= cur));
      if (out) out.textContent = `passo ${cur} de ${MAX} — ${micro[cur - 1]}`;
    };
    activable(ctl.querySelector('[data-step-prev]'), () => { cur = Math.max(1, cur - 1); apply(); });
    activable(ctl.querySelector('[data-step-next]'), () => { cur = Math.min(MAX, cur + 1); apply(); });
    apply();
  }

  /* ============ SVG-5 (P8) — toggle lesão sólida × cística ============
     Segmented control "Sólida | Cística" (HTML, fora do SVG) foca um lado por vez:
     atenua (.is-dim) o grupo [data-state] não-selecionado. Default = ambos visíveis. */
  function initSvg5(root) {
    const svg = $('svg[data-svg="svg5"]', root);
    if (!svg || svg.dataset.bound) return; svg.dataset.bound = '1';
    const ctl = root.querySelector('[data-toggle-ctl="svg5"]');
    if (!ctl) return;
    const btns = $$('.rim-toggle__btn', ctl);
    const groups = { solido: $('[data-state="solido"]', svg), cistico: $('[data-state="cistico"]', svg) };
    const select = (key) => {
      btns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.key === key)));
      Object.entries(groups).forEach(([k, g]) => { if (g) g.classList.toggle('is-dim', k !== key); });
    };
    btns.forEach((b, i) => {
      b.addEventListener('click', () => select(b.dataset.key));
      b.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); const n = btns[(i + 1) % btns.length]; n.focus(); select(n.dataset.key); }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); const n = btns[(i - 1 + btns.length) % btns.length]; n.focus(); select(n.dataset.key); }
      });
    });
    // default: ambos visíveis (fallback estático)
  }

  /* ============ SVG-6 (P9) — escada de Bozniak (step/slider) ============
     Slider 1..5 → 1/2/2F/3/4. O degrau ativo recebe .is-on (glow por tom) e os demais
     reduzem opacidade. aria-live + painel textual espelham estrato/%/conduta. Fallback:
     escada completa legível sem JS. Percentuais clássicos do professor (NÃO alterar). */
  function initSvg6(root) {
    const svg = $('svg[data-svg="svg6"]', root);
    if (!svg || svg.dataset.bound) return; svg.dataset.bound = '1';
    const slider = root.querySelector('[data-slider="svg6"]');
    const readout = root.querySelector('[data-boz-readout]');
    const steps = $$('[data-step]', svg);
    const ORDER = ['1', '2', '2F', '3', '4'];
    const INFO = {
      '1':  { tone: 'teal',  txt: '<strong>Bozniak 1</strong> · cisto simples, homogêneo, sem separação · malignidade ~0% · conduta: alta, sem seguimento ("tchau e bênção").' },
      '2':  { tone: 'teal',  txt: '<strong>Bozniak 2</strong> · levemente complexo · malignidade <5% · conduta: alta, sem seguimento.' },
      '2F': { tone: 'amber', txt: '<strong>Bozniak 2F</strong> · indeterminado (criado pela dúvida 2↔3) · malignidade até 25% · conduta: seguimento por imagem 6/6 meses (ideal TC).' },
      '3':  { tone: 'coral', txt: '<strong>Bozniak 3</strong> · cisto complexo · malignidade 45–60% · conduta: cirurgia (nefrectomia).' },
      '4':  { tone: 'coral', txt: '<strong>Bozniak 4</strong> · cisto complexo · malignidade até 95% · conduta: cirurgia (nefrectomia).' },
    };
    const apply = (key) => {
      svg.classList.add('has-active');
      steps.forEach((s) => {
        const on = s.dataset.step === key;
        s.classList.toggle('is-on', on);
        if (on) s.setAttribute('data-tone', INFO[key].tone);
      });
      if (readout) readout.innerHTML = INFO[key].txt;
      if (slider) slider.setAttribute('aria-valuetext', INFO[key].txt.replace(/<[^>]+>/g, ''));
    };
    if (slider) {
      slider.addEventListener('input', () => apply(ORDER[Math.max(0, Math.min(4, (+slider.value || 1) - 1))]));
    }
    // degraus também são clicáveis diretamente
    steps.forEach((s) => activable(s, () => {
      apply(s.dataset.step);
      if (slider) slider.value = String(ORDER.indexOf(s.dataset.step) + 1);
    }));
    apply('1');
  }

  /* ============ SVG-7 (P10) — fluxograma decisão parcial × radical ============
     Cada losango [data-decision] é clicável: "sim" num critério realça o ramo coral até
     RADICAL; acumular "não" em todos acende o caminho teal até PARCIAL + nó âmbar do clamp.
     Aqui: clicar um losango = critério positivo (→ realça RADICAL); botão "todos não" =
     caminho PARCIAL. Fallback: árvore inteira legível sem JS. "~30 min" preservado. */
  function initSvg7(root) {
    const svg = $('svg[data-svg="svg7"]', root);
    if (!svg || svg.dataset.bound) return; svg.dataset.bound = '1';
    const decisions = $$('[data-decision]', svg);
    const readout = root.querySelector('[data-flx-readout]');
    const CRIT = {
      tamanho:  'Tumor gigante (15–20 cm) → pró-RADICAL. A massa não comporta poupar parênquima.',
      posicao:  'Central ou >50% endofítico → pró-RADICAL. A lesão iatrogênica para chegar até ele supera tirar o rim.',
      linfonodo:'Linfonodo positivo → pró-RADICAL.',
      trombo:   'Trombo em veia → pró-RADICAL.',
    };
    const setRadical = (key) => {
      svg.classList.remove('path-parcial'); svg.classList.add('path-radical');
      decisions.forEach((d) => { d.classList.toggle('is-on', d.dataset.decision === key); d.setAttribute('aria-pressed', String(d.dataset.decision === key)); });
      if (readout) readout.innerHTML = `<strong>NEFRECTOMIA RADICAL.</strong> ${CRIT[key]}`;
    };
    const setParcial = () => {
      svg.classList.remove('path-radical'); svg.classList.add('path-parcial');
      decisions.forEach((d) => { d.classList.remove('is-on'); d.setAttribute('aria-pressed', 'false'); });
      if (readout) readout.innerHTML = '<strong>NEFRECTOMIA PARCIAL</strong> (poupadora de néfrons). Periférico · exofítico · pequeno (<7 cm) · linfonodos negativos · rim único / doença bilateral / renal crônico. Clamp da artéria renal: isquemia quente, no máximo ~30 min.';
    };
    decisions.forEach((d) => activable(d, () => setRadical(d.dataset.decision)));
    const parcialBtn = root.querySelector('[data-flx-parcial]');
    if (parcialBtn) activable(parcialBtn, setParcial);
  }

  /* prefers-reduced-motion: o pulso da massa sólida (SVG-5) é SMIL <animate>,
     que NÃO obedece animation:none do CSS. Pausa via setAttribute begin="indefinite". */
  function applyReducedMotion(root) {
    if (!window.matchMedia || !matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    $$('svg[data-svg="svg5"] animate', root).forEach((a) => a.setAttribute('begin', 'indefinite'));
  }

  function initAll(root) {
    root = root || document;
    initSvg1(root); initSvg2(root); initSvg3(root); initSvg4(root);
    initSvg5(root); initSvg6(root); initSvg7(root);
    applyReducedMotion(root);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initAll(document));
  } else { initAll(document); }

  window.RimInteractive = { initAll };
})();
