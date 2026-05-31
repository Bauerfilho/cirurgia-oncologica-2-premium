# Prompt-final do Didata — Aula 2 · Câncer gástrico

> Especificação de build para o Executor. Realiza o roteiro v1 + laudo v1 no template fixo (Contrato 2), com anti-padronização (Contrato 1).
> Template: reaproveita assets/css/{tokens,base,components}.css e assets/js/{app,router,components/quiz}.js da aula 1. Arquivo único aulas/aula-02/index.html, páginas inline `<article class="page" data-page-title>`. Hash #/pN. Tema chave 'cironco2-theme'. Hambúrguer à direita.

## Estrutura de arquivo
- `<head>`: meta PWA iguais à aula 1 (theme-color #07171a, viewport-fit=cover), title "Aula 2 · Câncer gástrico", links para ../../manifest + ../../assets/css/{tokens,base,components}.css + inline `<style>` scoped (dashboard, .vias-svg, .lesson-nav, .reading-progress, .gx-table, .sign-map, células). 
- `<body data-lesson="aula-02">` + skip-link.
- Header igual aula 1: `#site-header`, home-btn (location.href='../../index.html'), título "Câncer gástrico" + `#page-indicator`, spacer, `#theme-toggle`, `#menu-toggle` (aria-expanded). 
- `<nav class="page-menu" id="page-menu" hidden>` com `#page-menu-list` (app.js popula), `#menu-close`, `#menu-overlay`.
- `.reading-progress` no topo com `<span id="progress-bar">` (app.js seta width).
- `<main id="main" class="lesson-main">` com dashboard (article p1 = dashboard? NÃO — dashboard é bloco fixo antes das páginas, conforme Contrato 2 "antes do conteúdo"; mas app.js trata só `.page`. SOLUÇÃO: dashboard é a PÁGINA 1 `.page` com data-page-title "Mapa da aula", arquitetura própria; mantém X/Y coerente e não quebra app.js. Decisão registrada no relatório: aula 1 NÃO tem dashboard; aula 2 introduz dashboard como p1. Para não quebrar a aula 1, NÃO altero a aula 1; fica como pendência harmonizar depois.)
- Páginas: p1 dashboard + p2..p14 = as 13 páginas de conteúdo do roteiro (total 14 `.page`, X/Y = /14).  → Reindexar: dashboard=p1; conteúdo roteiro p1..p13 = HTML p2..p14.
- Nav bar `.lesson-nav` ao fim de cada página OU única global no fim do main? app.js bind por id único `#nav-prev`/`#nav-next` → nav GLOBAL única no fim do main (fora dos articles), igual padrão de app único. Progress + indicator no header já cobrem X/Y.
- Scripts no fim: ../../assets/js/router.js, app.js, components/quiz.js.

## Regras de conteúdo (Contrato 1)
- Cada página: page__eyebrow + page__title + page__lede + corpo profundo + ≥1 conexão de prova explícita (bloco .card--warn "Como cai na prova" / "Pegadinha" / "O detalhe que muda o gabarito") + visual ancorado (5 movimentos) + fechamento + quiz 2 questões.
- TODA alternativa de quiz com data-explain.
- Arquitetura dominante variada entre páginas consecutivas (ver tabela do calibrador).
- Cores semânticas: teal=bom/curável; coral=perigo/incurável/praga; âmbar=pegadinha.
- Minúcias obrigatórias preservadas: analogia da praga, do linho (linitite), do anel de sinete/carta selada da família Silvério, erro do Sabiston, "supraclavicular esquerdo = câncer", "nódulo não linfonodo no umbigo", ">15 = ≥16", pegadinha fibras, precoce ≠ critério ESD.

## Visuais
SVG autorais (embutir): 3 vias de disseminação (p2); mapa anatômico dos 5 sinais (p5); 4 tipos de Borrmann (p7); célula em anel de sinete (p8); fluxo estadiamento peritônio TC→VLP→citologia (p10); T1a N0 vs T1 qualquer N (p11); gastrectomia total/subtotal + cadeias D1/D2 (p12).
Imagens reais PENDENTES (figure.med-figure[data-pending], placeholder + ficha + âncora completa, NÃO baixar): EDA de neoplasia gástrica (p6); linitite plástica peça/EDA (p7); histologia anel de sinete (p8); TC carcinomatose/estadiamento (p9).

## DDV aplicados como nota ancorada (não conduta nova)
- p5: completa os 5 sinais com Blumer + Krukenberg (marcado).
- p9: nota "diretrizes internacionais incluem tórax/pelve" (resposta de prova = abdome).
- p12: nota "esquema perioperatório atual = FLOT".

## QA de saída
Anti-metalinguagem (sem "nesta página/aula veremos"); todos os ids do app.js presentes; quiz data-explain em todas; figure pending com ficha+âncora; X/Y = 14; dark/light ok; nav id-bound; sw v4 + aula-02 no precache; HUB card gástrico → Disponível.
