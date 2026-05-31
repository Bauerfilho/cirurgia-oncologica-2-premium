# Changelog

## [1.2.0] — 2026-05-31 — Aula 3: Endocardite e Câncer Colorretal
### Adicionado
- Aula 3 (14 páginas), aula DUPLA pelo caso do Sr. Luiz: endocardite por
  S. bovis (gallolyticus) obriga investigar câncer colorretal. Mecanismo do elo,
  epidemiologia/risco, rastreio (50 BR / 45 internacional), clínica por topografia,
  colonoscopia e CEA, "carteiro do mal" e estadiamento, cólon opera × reto faz
  neoadjuvância (único adeno com RT), RAB × RAP (Miles), metástase hepática que cura.
- Componentes interativos compartilhados (assets/js/components/interactive.js):
  hotspots em SVG, stat-counter, toggle e checklist-reveal — teclado + touch,
  respeitam reduced-motion (corrige o "muito estático" da Aula 2).
- Dashboard, figure-svg, sign-list e mini-cards promovidos ao design system
  (components.css) — remove CSS inline estrutural das aulas (anti-drift Contrato 3 §0).
- HUB: card "Câncer colorretal" ativado; stats 3 aulas / 40 páginas / 78 questões.
- 4 imagens reais candidatas (figure.med com ficha) marcadas para validação do Bauer.
### Corrigido
- Epônimo da ressecção abdominoperineal: Miles (a transcrição grafava "Myers").
- Nomenclatura: S. bovis → S. gallolyticus apresentada via toggle.
- PWA: CACHE_NAME v4 → v5 (precache da Aula 3 + interactive.js).

## [1.0.0] — 2026-05-31
### Adicionado
- Aula 1 — Câncer de Esôfago (12 páginas): caso Sr. Aurelino, escamoso × adenocarcinoma, fatores de risco, clínica do TGI, diagnóstico e regra da biópsia, invasão por contiguidade, estadiamento (USE × TC × broncoscopia), conduta por profundidade, neoadjuvância e reconstrução, ressecabilidade, fechamento do caso, consolidação com quiz.
- Chassi Bauer: hash routing, sidebar de aulas, pager, quiz universal, PWA com auto-update (service worker `cironco2-bauer-v1`).
- Artefatos da pipeline: calibrador MICRO, roteiro, laudo do Especificador (1 DDV registrada), prompt-final do Didata.

### Pendências
- Imagens reais médicas (tilose, EDA, USE, TC) marcadas como `pending` para inserção licenciada.
- Ícones PWA (`assets/icon-192.png`, `assets/icon-512.png`) a gerar.
