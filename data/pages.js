// Registro de páginas e aulas — Cirurgia Oncológica 2
// Aula 1: Câncer de Esôfago (primeira aula do módulo)

export const AULAS = [
  {
    id: 'A1',
    titulo: 'Câncer de Esôfago',
    paginas: [
      { slug: 'caso-aurelino',            num: '1.1',  titulo: 'Sr. Aurelino: a disfagia que não parou' },
      { slug: 'dois-tumores-macete',      num: '1.2',  titulo: 'Dois tumores, um esôfago' },
      { slug: 'fatores-de-risco',         num: '1.3',  titulo: 'Fatores de risco' },
      { slug: 'clinica-tgi',              num: '1.4',  titulo: 'Clínica dos tumores do TGI' },
      { slug: 'diagnostico-biopsia',      num: '1.5',  titulo: 'Diagnóstico e a regra da biópsia' },
      { slug: 'superpoder-contiguidade',  num: '1.6',  titulo: 'Invasão por contiguidade' },
      { slug: 'estadiamento',             num: '1.7',  titulo: 'Estadiamento: USE × TC × broncoscopia' },
      { slug: 'conduta-profundidade',     num: '1.8',  titulo: 'Conduta por profundidade' },
      { slug: 'neoadjuvancia-reconstrucao', num: '1.9', titulo: 'Neoadjuvância e reconstrução' },
      { slug: 'ressecabilidade',          num: '1.10', titulo: 'Ressecável × irressecável' },
      { slug: 'fechamento-aurelino',      num: '1.11', titulo: 'Fechando o caso' },
      { slug: 'quiz-consolidacao',        num: '1.12', titulo: 'Consolidação: armadilhas de prova' },
    ],
  },
];

// índice plano para roteamento e pager
export const PAGES = AULAS.flatMap(a =>
  a.paginas.map(p => ({ ...p, aula: a.id, aulaTitulo: a.titulo }))
);

export const DEFAULT_SLUG = PAGES[0].slug;

export function pageBySlug(slug) {
  return PAGES.find(p => p.slug === slug) || null;
}
export function neighbors(slug) {
  const i = PAGES.findIndex(p => p.slug === slug);
  return { prev: i > 0 ? PAGES[i - 1] : null, next: i >= 0 && i < PAGES.length - 1 ? PAGES[i + 1] : null };
}
