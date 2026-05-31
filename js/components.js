// Componentes interativos — Cirurgia Oncológica 2
// Quiz universal (clássico + multi-alternativa exam-breakdown). Idempotente por root.

const NS = 'cironco2-bauer:';

function loadState(key) {
  try { return JSON.parse(localStorage.getItem(NS + key) || 'null'); } catch { return null; }
}
function saveState(key, val) {
  try { localStorage.setItem(NS + key, JSON.stringify(val)); } catch { /* storage off */ }
}

// Quiz clássico: data-correct no botão correto, .explain revela ao responder.
export function initQuizzes(root) {
  const quizzes = root.querySelectorAll('.quiz:not([data-bound])');
  quizzes.forEach(q => {
    q.setAttribute('data-bound', '1');
    const id = q.getAttribute('data-quiz-id') || '';
    const opts = Array.from(q.querySelectorAll('.opt'));
    const explain = q.querySelector('.explain');
    const optComments = q.querySelectorAll('.opt-comment');

    const reveal = (chosen) => {
      opts.forEach(o => {
        const correct = o.getAttribute('data-correct') === 'true';
        if (correct) o.classList.add('correct');
        if (o === chosen && !correct) o.classList.add('wrong');
        o.setAttribute('aria-pressed', String(o === chosen));
        o.disabled = true;
      });
      optComments.forEach(c => c.classList.add('show'));
      if (explain) explain.classList.add('show');
      if (id) saveState('quiz:' + id, { answered: true, choice: chosen ? opts.indexOf(chosen) : -1 });
    };

    const handler = (e) => reveal(e.currentTarget);
    opts.forEach(o => o.addEventListener('click', handler));

    // restaura estado persistido
    if (id) {
      const st = loadState('quiz:' + id);
      if (st && st.answered) reveal(st.choice >= 0 ? opts[st.choice] : null);
    }
  });
}

// Avatar SVG inline reutilizável (Sr. Aurelino) — autoral, sem foto.
export function avatarAurelino() {
  return `
  <svg viewBox="0 0 72 72" role="img" aria-label="Ilustração do paciente Sr. Aurelino">
    <defs><linearGradient id="avg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1B4B49"/><stop offset="1" stop-color="#0E2A2F"/>
    </linearGradient></defs>
    <rect width="72" height="72" fill="url(#avg)"/>
    <circle cx="36" cy="28" r="13" fill="#E8543F" opacity="0.85"/>
    <path d="M14 64c2-14 12-20 22-20s20 6 22 20z" fill="#38BDA8" opacity="0.8"/>
    <path d="M27 24c2-3 16-3 18 0" stroke="#F4EFE6" stroke-width="1.4" fill="none" stroke-linecap="round"/>
    <circle cx="31" cy="27" r="1.6" fill="#0E2A2F"/><circle cx="41" cy="27" r="1.6" fill="#0E2A2F"/>
    <path d="M30 16c4-4 12-4 16 1" stroke="#F4EFE6" stroke-width="1.6" fill="none" stroke-linecap="round" opacity="0.7"/>
  </svg>`;
}
