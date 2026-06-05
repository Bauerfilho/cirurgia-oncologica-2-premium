# Plano de Elevação — Plataforma Cirurgia Oncológica 2

> Objetivo do Bauer (04/06/2026): elevar a plataforma INTEIRA ao padrão-ouro homogêneo —
> tópicos personalizados em toda página, quiz no nível das aulas extra-06/07, SVG profundo
> e com propósito (não raso), imagem real + SVG em todas as páginas (piso = 1 de cada).
> Nada de "início ruim, bônus bom". Planejar antes, validar até bater os parâmetros,
> documentar, e só então commit + push.

## Contrato-ouro por página (parâmetro de aceitação — binário)

Toda página `id="page-pN"` só está COMPLETA quando atende as 4 dimensões:

| Dim | Critério-ouro | Marcador no código |
|---|---|---|
| **D1 Tópicos** | chipset no topo + headers de seção como frases-insight | `<div class="chipset">…<span class="chip chip--topic">` **e** `<h3 class="topic-h">` |
| **D2 Quiz** | **PISO = 2 perguntas POR PÁGINA** (nunca 1); cada uma refuta TODAS as erradas + explica a psicologia da pegadinha | `quiz__justification` **e** `quiz__distractor` em todas; **≥2 `quiz__question`/página** |
| **D3 SVG** | ILUSTRAÇÃO REAL autoral, profunda, com propósito (interativo OU anatomia rica). **Ícone/livestrip NÃO conta.** | `<figure class="figure-svg">` + svg `role="img"` + `title`+`desc`; hotspot/slider/aria-live |
| **D4 Imagem real** | imagem real licenciada, ancorada padrão neonato (achado + fonte + licença), sem buraco | `<figure class="med">` com `<figcaption>` (achado) + `.attr` (fonte/licença) |

> **O PISO É POR PÁGINA, NÃO AGREGADO.** Cada página individual precisa de SUA ilustração real + SUA imagem real + SUAS 2 perguntas. 13 SVGs em 12 páginas NÃO satisfaz se uma página tem 0.

Gate objetivo honesto: `tools/gates.py` GATE-PISO (v2) exige, por página, **figure-svg + figure.med + ≥2 quiz**.
Correção de raiz 2026-06-04: a v1 contava qualquer `<svg viewBox>` (ícone incluso) → PASS falso; a v2 exige `figure-svg` (ilustração real). O contrato-ouro **excede o piso**: piso é chão, alvo é profundidade.

## Núcleos de raiz corrigidos (2026-06-04, varredura "ache o core")
1. **Bug de navegação (botão "próxima" não clicável em ~9 aulas):** `.banner-mantra-fixed` (sticky, z-index 50, decorativo) interceptava o clique. Fix: `pointer-events:none` em `assets/css/base.css`. Resolve toda a plataforma de uma vez.
2. **Gate desonesto:** contava ícone como SVG → PASS falso. Fix: GATE-PISO v2 exige `figure-svg`.
3. **Piso de quiz não enforced:** legadas 01-05 tinham 1 pergunta/página. Fix: GATE-PISO v2 exige ≥2; autorar 2ª pergunta gold nas legadas.
4. **Nav PAGES×DOM:** auditado — OK em 15/15 (não era a causa). IDs duplicados: nenhum. Imagens quebradas: nenhuma.

## Estado inicial auditado (baseline 04/06/2026)

- **Tier 1 — débito total:** aula-01, 02, 03, 04, 05 → 0/68 tópicos, 0/68 quiz-gold, SVG profundo só 0–10/14 conforme aula, imagem real esparsa.
- **Tier 2 — débito tópicos+distractor:** aula-06, 07, 08, extra-01, 02, 03, 04 → chipset existe mas sem `topic-h`; SVG já profundo ~100%; quiz com justificativa mas faltam distractors (extra-02 8/8 e extra-03 9/9 já GOLD).
- **Tier 3 — só imagem real:** extra-05 (faltam 3), extra-06 (2), extra-07 (7).

## Decomposição Fase / Etapa / Subetapa

### FASE 0 — Calibração & Contrato  ✅ (este turno)
- E0.1 Auditoria página a página das 15 aulas contra o contrato-ouro. ✅
- E0.2 Extração de candidatos de tópico ("frase dando mole") para as 68 páginas sem tópico. ✅ (em `04-WORKLIST-TOPICOS.md`)
- E0.3 Escrita dos 3 artefatos: este plano, a pipeline, o contrato de agentes. ✅

### FASE 1 — Piloto: aula-01 (esôfago) — a mais pobre
> Por que aula-01: maior débito (0/12 em tudo, SVG quase ausente, sem motor de quiz). Se a pipeline
> resolve a pior, resolve qualquer uma. Serve de calibração do padrão com o Bauer (consumidor) antes de escalar.
- E1.1 Calibração da aula (mapa página×dimensão, conceito de SVG e imagem por página).
- E1.2 Arquitetura: adicionar motor de quiz + CSS scoped + JS interativo no padrão das gold (app.js / *-interactive.js).
- Subetapas por página (×12): S-a Tópicos · S-b Quiz-gold · S-c SVG profundo · S-d Imagem real · S-e Ancoragem/polish.
- E1.3 Validação dura (gate + checagem D1/D2 + ai-writing-auditor + visual).
- **CHECKPOINT BAUER** — mostrar aula-01 pronta; confirmar que o padrão é o que ele quer antes de escalar para as outras 14.

### FASE 2 — Tier 1 restante: aula-02, 03, 04, 05
- Uma etapa por aula, mesmas subetapas por página. Reaproveita SVGs já profundos (03/04/05) e foca o esforço onde está o débito real de cada uma.

### FASE 3 — Tier 2: aula-06, 07, 08, extra-01, 02, 03, 04
- E-aula: injetar `topic-h` nos `<h3>` (frases-insight) + completar `quiz__distractor` faltantes + fechar imagens reais pontuais (aula-06 p14, aula-07 p1, extra-03 p6).
- extra-02 e extra-03: só `topic-h` (quiz já GOLD).

### FASE 4 — Tier 3: extra-05, 06, 07
- Só imagem real nas páginas faltantes (3+2+7), ancoradas padrão neonato. NÃO regredir o que já é ouro.

### FASE 5 — Validação global + release-prep
- Rodar `tools/gates.py` → TODOS PASS obrigatório (sem `--no-verify`).
- Checagem D1/D2 em 100% das páginas. ai-writing-auditor varredura anti-IA-smell.
- Sem repetição de imagem (md5 distinto por uso). Bump `sw.js` CACHE_NAME + precache de assets novos.
- Atualizar este diretório com relatório final `99-RELATORIO-FINAL.md`.

### FASE 6 — Commit + push
- Commits temáticos por aula/fase (mensagens descritivas). `git push origin main` só após FASE 5 verde.

## Princípios inegociáveis (herdados das decisões Bauer)
1. **Não furar o gate.** `--no-verify` proibido. Validador independente que TRAVA é decisão inviolável.
2. **Não trabalhar "pro piso".** Piso é chão; alvo é profundidade e propósito.
3. **Preservar conteúdo médico do professor** nas legadas — adicionar camadas (tópicos/quiz/SVG/imagem), não reescrever a medicina.
4. **Sem repetição de imagem.** Cada imagem real serve àquela posição específica.
5. **Homogeneidade.** O fim do trabalho: impossível dizer qual aula é "antiga" e qual é "bônus".
6. **Imagem real só com fonte + licença + achado.** SVG só como segunda camada, nunca substituto da imagem real onde o piso a exige.
