# Prompt-final do Didata — Aula 3 · Endocardite (S. bovis) e CCR

> Contrato de execução. Roteiro a3 (conteúdo) + Laudo a3 (correções) consolidados para o Executor.
> Decisões Bauer aplicadas: DDV-A3-001 default (50 principal + 45 toggle), DDV-A3-002 default (reformular prevalência), CORRIGE Miles, ATUALIZA gallolyticus.

## Arquitetura (fidelidade ao template cravado)
- Arquivo único: `aulas/aula-03/index.html`. JS: `aulas/aula-03/aula-03.js` (ESM, importa router.js + quiz.js + interactive.js).
- 14 páginas inline `<article class="page">`, hash-routing `#/p1..p14`, P1 = dashboard.
- Header floating (base.css, herdar), controles à direita (Home/tema/hambúrguer), menu glass direito, progress X/14, anterior/próxima, tema 'cironco2-theme'.
- `data-aula="03"`, theme-color #07171a, subtitle "Aula 3 — Endocardite e CCR".

## ANTI-DRIFT (Contrato 3 §0) — correção do erro da aula 2
- **PROIBIDO** repetir o bloco `<style>` gigante inline da aula 2. Mover os componentes específicos REUTILIZÁVEIS para `assets/css/components.css` (dashboard `.dash*`, `.figure-svg*`, `.sign-list`, `.grid-cards`/`.mini-card`, tags semânticas, `.cmp .col-good/.col-bad`). Aula 3 herda; aula 2 continua válida (define localmente, sem colisão). NÃO recriar `figure.med`/`.svg-figure`.
- Componentes INTERATIVOS novos (hotspot, stat-counter, toggle, checklist-reveal) → CSS em `components.css` + JS em `assets/js/components/interactive.js` (compartilhado, reusável nas próximas aulas).
- `<style>` inline na aula-03 permitido SOMENTE para SVG-específico mínimo se necessário; estrutura vai pro design system.
- Imagem real pendente → `figure.med` com placeholder textual + ficha (não `figure-pending` novo). Reusar o padrão já em components.css.

## Componentes interativos a criar (Contrato 3 §3) — teclado + touch + reduced-motion
1. **hotspot**: `<button class="hotspot" data-hs-label data-hs-text>` posicionado sobre SVG; clique/Enter/Espaço revela tooltip `.hotspot__tip`; estado aria-expanded; foco visível; tip também acessível (não só hover). Painel de detalhe abaixo do SVG (não essencial só em hover).
2. **stat-counter**: `<span class="stat-counter" data-target="50">` anima 0→target via IntersectionObserver; reduced-motion → mostra valor final direto.
3. **toggle**: `<div class="toggle-switch" role="tablist">` 2 estados, troca conteúdo de `.toggle-panel[data-toggle-key]`; aria-selected; teclado (setas/Enter).
4. **checklist-reveal**: `<ol class="reveal-list">` itens revelam progressivamente ao clicar "revelar próximo"/clicar no item; estado visual claro; sem esconder essencial só em hover.

## Mapa de cores semânticas (eixo da casa)
- teal = conduta padrão/curável/cólon opera/RAB/colonoscopia/CEA/ressecável.
- coral = endocardite/S.bovis/vegetação/hematogênica/pipocado/RAP/irressecável/fezes em fita.
- âmbar = pegadinhas (gallolyticus, fibra, reto=neo, único adeno c/ RT, Miles≠Myers, 50×45, ultraprecoce não existe).

## Páginas — herdar conteúdo integral do roteiro a3 (P1..P14). Execução por página:
- P1 dashboard: dash grid 13 + 2 painéis (armadilhas/ponte aulas 1-2) + card banca.
- P2 caso: opener--case (2 tempos) + checklist-reveal da timeline + quiz 2.
- P3 endocardite/Duke: SVG coração+vegetação com 4 hotspots + tabela/lista Duke + quiz 2.
- P4 bovis bandeira: card-alerta + card questão real CESPE + toggle bovis↔gallolyticus + quiz 2.
- P5 mecanismo: SVG intestino→circulação→endocárdio com 4 hotspots (etapas) + quiz 2.
- P6 epidemiologia/risco: stat-counters + cmp 4 grupos + opener--trap fibra + quiz 2. (prevalência reformulada — DDV-002.)
- P7 rastreio: tabela rastreio + toggle 50(BR)↔45(intl) + distinção rastreio×investigação + quiz 2.
- P8 clínica topografia: SVG cólon 3 zonas hotspot (direito/esquerdo/reto-fita) + quiz 2.
- P9 dx/CEA: figure.med placeholder (colonoscopia CCR) + toggle CEA é/não-é + quiz 2.
- P10 carteiro/estadiamento: SVG trilogia 3 superpoderes (toggle eso/estô/cólon) + figure.med placeholder (TC fígado pipocado) + RM pelve só reto + quiz 2.
- P11 tratamento I: SVG árvore decisão toque retal (toggle não toquei→opera / toquei→neo) + único adeno c/ RT + quiz 2.
- P12 RAB×RAP: SVG reto+esfíncter 2 níveis hotspot + epônimo Miles (CORRIGE) + quiz 2.
- P13 metástase hepática: figure.med placeholder (TC/peça metást. hepática) + toggle ressecável↔pipocado + gancho aula hepática + fecha "colonoscopia evitaria" + quiz 2.
- P14 síntese: tabela 4 respostas + checklist-reveal + trilogia recap + mantra + quiz 2.

## Quizzes: 2 por página (28 total), TODAS as alternativas explicadas (correta + por que cada errada tentava). Convenção legada `.quiz .opt[data-correct] + .explain hidden` (compatível com quiz.js). data-quiz-id `a3pNqM`.

## Imagens reais candidatas (buscador — NÃO baixar cego; Bauer valida no relatório):
- IMG-A3-01 colonoscopia de adenocarcinoma colorretal (lesão vegetante/ulcerada). [P9]
- IMG-A3-02 TC de abdome metástases hepáticas múltiplas "fígado pipocado". [P10]
- IMG-A3-03 ecocardiograma com vegetação em valva mitral. [P3]
- IMG-A3-04 peça/TC de metástase hepática colorretal. [P13]
Enquanto não validadas → figure.med placeholder com ficha (achado a observar, por que existe, conexão prova).

## HUB + infra
- index.html: card "Câncer colorretal" (Aula 3, sigla CR) soon→Disponível, href aulas/aula-03/index.html, desc real, tags "14 páginas · 28 questões · SVG interativo + imagem real". Stats: 3 aulas / 40 páginas (12+14+14) / 80 questões (24+26+30? — usar contagem real: 24+26+28=78). [Executor: contar páginas reais e questões reais e cravar números corretos.]
- sw.js: CACHE_NAME v4→v5; precache aula-03/index.html + aula-03.js + interactive.js + (imagens quando validadas).
