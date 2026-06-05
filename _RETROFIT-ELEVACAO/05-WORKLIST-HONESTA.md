# Work-list honesta (gate v2) — deficit por página

> Gerada pelo GATE-PISO v2 honesto em 2026-06-04. Piso por página = figure-svg (ilustração real) + figure.med (imagem real) + ≥2 quiz.
> svg=0 → falta ILUSTRAÇÃO real · img=0 → falta IMAGEM real · quiz<2 → falta 2ª pergunta gold.

## Núcleos de raiz JÁ corrigidos (não voltam)
- ✅ Nav: `.banner-mantra-fixed { pointer-events:none }` (base.css) — botão "próxima" clicável em toda a plataforma.
- ✅ Gate honesto v2 (figure-svg, não ícone) + piso de 2 quiz embutido no gate.
- ✅ PAGES×DOM ok 15/15 · IDs duplicados 0 · imagens quebradas 0.

## PASSAM 100% (não tocar): aula-08, extra-01, extra-02, extra-04

## Deficit de CONTEÚDO (a produzir, aula a aula)

| Aula | Falta ILUSTRAÇÃO (figure-svg) | Falta IMAGEM (figure.med) | Falta 2ª QUIZ | + texto rico? |
|---|---|---|---|---|
| aula-01 esôfago | p1,p5,p11,p12 (4) | — | p1,p2,p4,p6,p8,p9,p10,p11 (8) | feito |
| aula-02 gástrico | p1,p2,p4,p5,p7,p10,p14 (7) | p1,p2,p3,p4,p5,p6,p11,p12,p13,p14 (10) | todas (14) | SIM (roteiro a2) |
| aula-03 colorretal | p1,p2,p4,p6,p7,p9,p10,p13,p14 (9) | p1-p8,p11-p14 (12) | todas (14) | SIM (roteiro a3) |
| aula-04 hepáticos | p1,p2,p3,p4,p8,p9,p14 (7) | p1-p6,p8,p11,p13,p14 (10) | todas (14) | SIM (sem fonte→página+especificador) |
| aula-05 pólipos | p1,p7,p13,p14 (4) | p1-p4,p6-p8,p10,p12-p14 (11) | todas (14) | SIM (calibrador a5) |
| aula-06 ca-pulmão | — | p14 (1) | — | já rica |
| aula-07 ca-tireoide | p4,p5,p12 (3) | p1 (1) | — | já rica |
| extra-03 canal-anal | — | p6 (1) | — | — |
| extra-05 hpb | — | p3,p9,p16 (3) | — | — |
| extra-06 ca-rim | — | p5,p11 (2) | — | — |
| extra-07 ca-bexiga | — | p1,p2,p3,p8,p9,p11,p12 (7) | — | — |

**Totais:** ilustrações ~34 · imagens ~58 · 2ª-quiz ~64 páginas (legadas) · texto rico em 02-05.

## Ordem de execução (autônomo, principais primeiro)
1. aula-01 (fechar): 4 SVGs + 8 Q2 → piso 12/12.
2. aula-02 → 03 → 04 → 05: texto rico (didata) + ilustração + imagem + 2 quiz/página.
3. aula-06, 07: tópicos (topic-h) + imagens/ilustrações pontuais da tabela.
4. extras 03/05/06/07: só imagens faltantes (gate global).
5. Validação honesta total + bump sw.js (precache aula-01-interactive.js + imagens) + doc + commit/push.
