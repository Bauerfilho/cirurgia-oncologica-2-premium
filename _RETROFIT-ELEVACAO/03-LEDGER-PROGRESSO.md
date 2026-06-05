# Ledger de Progresso — Retrofit Elevação

Atualizado a cada aula fechada (verde no P7). Estado: ⬜ pendente · 🟦 em andamento · ✅ verde · ⏸️ checkpoint

| Fase | Aula | D1 Tópicos | D2 Quiz | D3 SVG | D4 Imagem | Gate | Status |
|---|---|---|---|---|---|---|---|
| 0 | (calibração + 3 artefatos) | — | — | — | — | — | ✅ |
| 1 | aula-01 esôfago | ✅ | ✅ | ✅ | ✅ | ✅✅ | ✅ COMPLETA — 10/10 gates PASS (12 figure-svg + 13 img + 24 quiz 2/pág; <style>→aula-01.css) |
| 2 | aula-02 gástrico | ✅ | ✅ | ✅ | ✅ | ✅✅ | ✅ COMPLETA — 10/10 gates PASS (texto 20b + 14 img + 9 SVG interativo + 28 quiz 2/pág; piso 14/14) |
| 2 | aula-03 colorretal | ✅ | ✅ | ✅ | ✅ | ✅✅ | ✅ COMPLETA — 10/10 gates PASS (texto 15b + 14 img incl. p8 par + 9 SVG ccr + 28 quiz 2/pág + cor; piso 14/14) |
| 2 | aula-04 hepáticos | ✅ | ✅ | ✅ | ✅ | ✅✅ | ✅ COMPLETA — 10/10 gates (transcrição Bauer; texto 14b + 13 img + 7 SVG via engine existente + 28 quiz + cor; p6 img-exempt logada; piso 14/14) |
| 2 | aula-05 pólipos | ⬜ | ⬜ | ✅ | ⬜ | ⬜ | ⬜ |
| 3 | aula-06 ca-pulmão | ⬜ | parc. | ✅ | p14 | ⬜ | ⬜ |
| 3 | aula-07 ca-tireoide | ⬜ | parc. | ✅ | p1 | ⬜ | ⬜ |
| 3 | aula-08 ca-próstata | ⬜ | parc. | ✅ | ✅ | ⬜ | ⬜ |
| 3 | extra-01 gist | ⬜ | parc. | ✅ | ✅ | ⬜ | ⬜ |
| 3 | extra-02 apêndice | ⬜ | ✅ | ✅ | ✅ | ⬜ | ⬜ |
| 3 | extra-03 canal-anal | ⬜ | ✅ | ✅ | p6 | ⬜ | ⬜ |
| 3 | extra-04 císticas | ⬜ | parc. | ✅ | ✅ | ⬜ | ⬜ |
| 4 | extra-05 hpb | ✅ | ✅ | ✅ | p3,p9,p16 | ⬜ | ⬜ |
| 4 | extra-06 ca-rim | ✅ | ✅ | ✅ | p5,p11 | ⬜ | ⬜ |
| 4 | extra-07 ca-bexiga | ✅ | ✅ | ✅ | p1,2,3,8,9,11,12 | ⬜ | ⬜ |

Legenda colunas: célula = o que falta naquela dimensão (vazio/✅ = já-ouro; "parc." = parcial; "pN" = páginas faltantes).

## Bitácora
- 2026-06-04 — FASE 0 concluída: auditoria das 201 páginas, contrato-ouro definido, pipeline + contrato de agentes + work-list de tópicos documentados.
- 2026-06-04 — Enabler: `.topic-h` portado pro CSS compartilhado (assets/css/components.css) — habilita as 15 aulas.
- 2026-06-04 — PILOTO aula-01 P2+P3: 28 topic-h + 12 chipsets; quiz migrado convenção legada B→gold A (16 perguntas, justification+distractor em todas). Prosa do professor preservada. Zero marcador legado. Falta P4 (SVG profundo) e P5 (imagem real). CHECKPOINT com Bauer antes de escalar.
- 2026-06-04 — aula-01 P4+P5 artefatos prontos: 8 SVGs profundos (ilustrador) + 8 imagens reais licenciadas (buscador; p9 inconclusivo→SVG fallback). Pendente: embutir.
- 2026-06-04 — **PIVÔ DE PRIORIDADE (feedback Bauer pós-review aula-01):**
  - APROVADO e CONGELADO: tópicos azuis (lindos), quizzes gold (ótimas — NÃO MEXER mais), design, imagens.
  - **NOVA PRIORIDADE Nº1: profundidade de TEXTO nas aulas PRINCIPAIS (01-05).** Estão rasas de explicação. Voltar à transcrição/roteiro → didata → executor adiciona "caixinhas de texto" com explicação rica. Preservar tudo que já existe.
  - Mains 06/07/08: já ricas de texto — faltam só TÓPICOS (topic-h) + imagens pontuais (06 p14, 07 p1).
  - Completar PISO (1 SVG + 1 imagem real / página) nas principais.
  - EXTRAS (extra-01..07): despriorizadas ("ninguém vai ler"); só receberão as imagens faltantes necessárias pro gate global passar.
  - Ordem nova: principais primeiro (01→05 com texto+tópicos+piso; 06→08 tópicos+imagens), extras só p/ gate, depois validar+doc+commit+push.
- 2026-06-04 — **aula-02 COMPLETA (2ª aula gold, protocolo adaptado à prova de gate):** 3 passadas — A (14 chipsets + 28 topic-h + 28 quiz gold 2/pág, migração legada B→A); B (20 caixinhas de texto rico do didata + 10 imagens reais licenciadas, baixadas/otimizadas); C (9 SVGs profundos interativos gast1-gast14 + aula-02-interactive.js + aula-02.css externo). GATE 10/10 PASS (piso 14/14). Gaps p1/p2/p14 fechados via gap-fill antes do embed (sem travar no gate). Pendente sw.js (fase final): precache aula-02-interactive.js + aula-02.css + 10 imagens.
- PRÓXIMO: aulas 03, 04, 05 (mesmo protocolo de 3 passadas); depois 06/07 (tópicos + imagens pontuais); extras (imagens p/ gate global); validação total + bump sw.js + doc + commit/push.
- 2026-06-04 — **BUG NAV (botão "próxima") RESOLVIDO NA RAIZ + verificado no browser real (Playwright):** causa = `updateNavStates` rodava com `router.current=null` e `init()` (location.replace) não dispara `hashchange` → botão "próxima" preso em `disabled` (só seta de teclado navegava). Platform-wide (todas as aulas usam o mesmo HashRouter). Fix recursion-safe em `assets/js/router.js` (dispatch de `hashchange` ao fim de `init()`). Teste real: 6 combinações aula/página PASS — aula-01 p1, aula-02 p1/p3/p14(última corretamente disabled), aula-08 p5, extra-07 p6; todas navegam, sem regressão. NÃO era overlay/banner nem cache.
- 2026-06-04 — **sw.js bumped v21→v22** + precache atualizado (aula-01/02 interactive.js + css + 19 imagens). 97 paths, zero 404, sintaxe OK. PWA auto-update entrega ao Bauer: nav fix + banner pointer-events fix + aulas 01/02 novas.
- 2026-06-04 — Spec de **linguagem visual semântica** criado (`06-LINGUAGEM-VISUAL-SEMANTICA.md`): cor verde(bom)/vermelho(perigo) em palavras-chave + ícones/emojis semânticos com parcimônia (⚠️✓✗🚬), profissional não-casual. A aplicar nas aulas (passada de cor em 01/02 + padrão nas novas).
- 2026-06-04 — **aula-01 COMPLETA (1ª aula gold end-to-end):** Passada 1 = 27 blocos de texto rico (didata, da transcrição) + 8 imagens reais licenciadas embutidas. Passada 2 = 8 SVGs profundos interativos (hotspot/slider/step-through) + aula-01-interactive.js. p9 fechada com imagem Magenhochzug (CC BY-SA 3.0). GATE-PISO aula-01 = 12/12 PASS. Quizzes/tópicos congelados intactos. Pendente no sw.js (fase final): precache de aula-01-interactive.js + 9 imagens aula-01. Modelo replicável para aulas 02-05.
