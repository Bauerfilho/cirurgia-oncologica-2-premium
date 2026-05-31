/* quiz.js — quiz universal (portado do template antibioticoterapia)
   Suporta DUAS convenções no mesmo DOM:
   (A) Antibio: .quiz__question + .quiz__alt[data-correct] + .quiz__feedback
   (B) Legada Bauer: .quiz .opt[data-correct] + .explain
   Idempotente. Persiste resposta em localStorage. */

export function initQuiz({ namespace = 'cironco2' } = {}) {
  const NS = namespace + ':quiz:';
  const save = (k, v) => { try { localStorage.setItem(NS + k, JSON.stringify(v)); } catch (_) {} };
  const load = (k) => { try { return JSON.parse(localStorage.getItem(NS + k) || 'null'); } catch (_) { return null; } };

  // ---- Convenção A: .quiz__question ----
  document.querySelectorAll('.quiz__question:not([data-bound])').forEach((q, qi) => {
    q.setAttribute('data-bound', '1');
    const id = q.dataset.qid || ('qa-' + qi);
    const alts = Array.from(q.querySelectorAll('.quiz__alt'));
    const feedback = q.querySelector('.quiz__feedback');
    const reveal = (chosen) => {
      alts.forEach((a) => {
        a.setAttribute('data-revealed', 'true');
        a.disabled = true;
        if (a === chosen) a.setAttribute('aria-checked', 'true');
      });
      if (feedback) {
        feedback.hidden = false;
        const ok = chosen && chosen.dataset.correct === 'true';
        const verdict = feedback.querySelector('.quiz__verdict');
        if (verdict) { verdict.dataset.tone = ok ? 'ok' : 'err'; verdict.textContent = ok ? 'Correto' : 'Reveja'; }
      }
      save(id, { answered: true, choice: chosen ? alts.indexOf(chosen) : -1 });
    };
    alts.forEach((a) => a.addEventListener('click', () => reveal(a)));
    const st = load(id);
    if (st && st.answered) reveal(st.choice >= 0 ? alts[st.choice] : null);
  });

  // ---- Convenção B: .quiz .opt (legada) ----
  document.querySelectorAll('.quiz:not([data-bound-legacy])').forEach((quiz) => {
    const opts = Array.from(quiz.querySelectorAll('.opt'));
    if (!opts.length) return; // é quiz convenção A, ignora
    quiz.setAttribute('data-bound-legacy', '1');
    const id = quiz.dataset.quizId || quiz.dataset.qid || Math.random().toString(36).slice(2);
    const explain = quiz.querySelector('.explain');
    const reveal = (chosen) => {
      opts.forEach((o) => {
        const correct = o.dataset.correct === 'true';
        if (correct) o.classList.add('correct');
        if (o === chosen && !correct) o.classList.add('incorrect');
        o.setAttribute('aria-pressed', String(o === chosen));
        o.disabled = true;
      });
      if (explain) explain.removeAttribute('hidden');
      save(id, { answered: true, choice: chosen ? opts.indexOf(chosen) : -1 });
    };
    opts.forEach((o) => o.addEventListener('click', () => reveal(o)));
    const st = load(id);
    if (st && st.answered) reveal(st.choice >= 0 ? opts[st.choice] : null);
  });
}
