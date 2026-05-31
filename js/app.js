// Router + shell — Cirurgia Oncológica 2 (hash routing, vanilla)
import { AULAS, PAGES, DEFAULT_SLUG, pageBySlug, neighbors } from '../data/pages.js';
import { initQuizzes } from './components.js';

const content = document.getElementById('content');
const sidebar = document.getElementById('sidebar');
const backdrop = document.getElementById('backdrop');
const btnMenu = document.getElementById('btnMenu');

// Cache de páginas já carregadas (evita refetch)
const cache = new Map();

function buildNav(currentSlug) {
  const frag = document.createDocumentFragment();
  AULAS.forEach(a => {
    const h = document.createElement('h2');
    h.textContent = `Aula ${a.id.slice(1)} — ${a.titulo}`;
    frag.appendChild(h);
    a.paginas.forEach(p => {
      const link = document.createElement('a');
      link.className = 'nav-link' + (p.slug === currentSlug ? ' is-current' : '');
      link.href = `#/${p.slug}`;
      if (p.slug === currentSlug) link.setAttribute('aria-current', 'page');
      link.innerHTML = `<span class="nav-num">${p.num}</span><span>${p.titulo}</span>`;
      frag.appendChild(link);
    });
  });
  sidebar.replaceChildren(frag);
}

function pagerHTML(slug) {
  const { prev, next } = neighbors(slug);
  const prevA = prev
    ? `<a class="prev" href="#/${prev.slug}"><span class="pager-label">Anterior</span>${prev.titulo}</a>`
    : `<a class="prev" aria-disabled="true"><span class="pager-label">Anterior</span>—</a>`;
  const nextA = next
    ? `<a class="next" href="#/${next.slug}"><span class="pager-label">Próxima</span>${next.titulo}</a>`
    : `<a class="next" aria-disabled="true"><span class="pager-label">Próxima</span>Fim da aula</a>`;
  return `<nav class="pager" aria-label="Navegação entre páginas">${prevA}${nextA}</nav>`;
}

async function fetchPage(slug) {
  if (cache.has(slug)) return cache.get(slug);
  const res = await fetch(`pages/a1/${slug}.html`, { cache: 'no-cache' });
  if (!res.ok) throw new Error('not found');
  const html = await res.text();
  cache.set(slug, html);
  return html;
}

async function render(slug) {
  const meta = pageBySlug(slug);
  if (!meta) { renderNotFound(slug); return; }
  buildNav(slug);
  content.setAttribute('aria-busy', 'true');
  try {
    const html = await fetchPage(slug);
    content.innerHTML = `<article class="page">${html}${pagerHTML(slug)}</article>`;
  } catch {
    renderNotFound(slug);
    return;
  }
  content.removeAttribute('aria-busy');
  initQuizzes(content);
  closeSidebar();
  content.scrollIntoView({ block: 'start' });
  window.scrollTo(0, 0);
  document.title = `${meta.titulo} — Cirurgia Oncológica 2`;
}

function renderNotFound(slug) {
  buildNav(DEFAULT_SLUG);
  content.innerHTML = `<article class="page">
    <p class="page-kicker">Conteúdo</p>
    <h1 class="page-title">Página não encontrada</h1>
    <div class="card card--danger"><p>O conteúdo de <code>${slug || ''}</code> ainda não está disponível nesta versão.</p>
    <p><a href="#/${DEFAULT_SLUG}">Voltar ao início da aula</a></p></div>
  </article>`;
}

function currentSlug() {
  const h = location.hash.replace(/^#\/?/, '').trim();
  return h || DEFAULT_SLUG;
}
function route() { render(currentSlug()); }

// Sidebar mobile
function openSidebar() { sidebar.classList.add('open'); backdrop.classList.add('show'); }
function closeSidebar() { sidebar.classList.remove('open'); backdrop.classList.remove('show'); }
btnMenu?.addEventListener('click', () => sidebar.classList.contains('open') ? closeSidebar() : openSidebar());
backdrop?.addEventListener('click', closeSidebar);

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', () => {
  if (!location.hash) location.replace(`#/${DEFAULT_SLUG}`);
  route();
});

// expõe lista pra debug eventual
window.__PAGES__ = PAGES;
