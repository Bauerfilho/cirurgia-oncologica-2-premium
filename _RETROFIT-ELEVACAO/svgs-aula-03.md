# SVGs profundos aula-03 (Endocardite por S. bovis + Câncer Colorretal) — ccr1/ccr2/ccr4/ccr6/ccr7/ccr9/ccr10/ccr13/ccr14

> Ilustrador, 2026-06-04. 9 ilustrações reais (`figure-svg`) de profundidade nível extra-06/07 para elevar a aula-03.
> Cada uma ENSINA SOZINHA (Checagem Bauer), tem interação com propósito (não decorativa), fallback estático legível sem JS e respeita `prefers-reduced-motion`.
> Convenção de paleta (igual rim/bexiga/gast): **teal** = baseline/conservador/ressecável/normal · **coral** = agressão/invasão/patológico · **âmbar** (`--warn-amber`) = pegadinha/atenção/decisão · **verde** (`--ok-green`) = ressecável/favorável/correto · **vermelho** (`--err-red`) = irressecável/paliação/erro · **info-blue** (`--info-blue`) = exame de imagem / nota neutra.
> Naming: `class="il-ccrN"`, `data-eso="ccrN"`, `data-svg="ccrN"` (N = nº da PÁGINA real do index.html onde entra). NÃO repete conceito visual das aulas 01/02 (lá: 3 vias, 5 sinais à distância, Krukenberg, Virchow, EDA; aqui o foco é elo bacteriano, rastreio temporal, colono+CEA, hematogênica fígado/pulmão, M1 que cura).
> Tokens SÓ via `var(--…)`. ZERO hex cravado. ZERO SMIL (`<animate>`); qualquer movimento é CSS `@keyframes` condicionado a `@media (prefers-reduced-motion: no-preference)`. `role="img"` + `<title>`/`<desc>` em todos.
>
> Wrapper de embed (Executor):
> ```html
> <figure class="figure-svg" role="group" aria-labelledby="…cap">
>   <div class="figure-svg__frame"><div class="figure-svg__stage" aria-live="polite">…SVG…</div></div>
>   <figcaption id="…cap">…</figcaption>
> </figure>
> ```
> Quando há controle externo (step/toggle), ele vai DENTRO de `.figure-svg__frame`, FORA do `<svg>` (padrão `.rim-ctl`/`.toggle-switch` da casa), como em p3/p11 já existentes.
> Os SVGs já trazem `<title>`/`<desc>` + status `aria-live` interno; o `figure-svg__stage[aria-live]` é redundância segura.

---

## Mapeamento brief → página real do index.html

| key      | conceito (casado com a prosa da página)                                      | página | substitui / complementa                                                              |
|----------|-------------------------------------------------------------------------------|--------|--------------------------------------------------------------------------------------|
| `ccr1`   | o elo: 1 caso → endocardite ↔ CCR pela ponte S. bovis (mapa-âncora da aula)   | **P1** | NOVO — inserir após `.dash__metrics`, antes de `<h2>Trilha da aula</h2>`              |
| `ccr2`   | linha do tempo do caso (Ato 1 cardíaco → fuga → Ato 2 fígado 7 meses depois)  | **P2** | NOVO — inserir após o `.reveal` (reforça a timeline, não a substitui)                |
| `ccr4`   | reflexo bovis(gallolyticus) → colonoscopia (a bactéria como bandeira)         | **P4** | NOVO — inserir após o `.toggle-panel` da nomenclatura, antes do `card--info` CESPE   |
| `ccr6`   | 4 grupos de fator de risco + pegadinha da fibra (protetora, fora da balança)  | **P6** | NOVO — inserir após a tabela `.cmp`, antes do `opener--trap` da fibra                 |
| `ccr7`   | janela adenoma→carcinoma e o corte etário 45/50 (timeline de rastreio)        | **P7** | NOVO — inserir após o `.toggle-switch`/painéis BR×intl, antes do `card--info`        |
| `ccr9`   | colonoscopia localiza+biopsia × CEA é seguimento (o que diagnostica × o que segue) | **P9** | NOVO — inserir após o `.toggle-switch` do CEA (complementa a foto real, não substitui) |
| `ccr10`  | hematogênica → fígado/pulmão + mapa de estadiamento (TC tórax+abdome; RM só reto) | **P10** | NOVO — inserir após o `card--info` "Estadiamento do colorretal", antes do `figure.med` |
| `ccr13`  | régua ressecável↔irressecável da metástase hepática (M1 que cura)             | **P13** | NOVO — inserir após o `.toggle-switch`/painéis ressecável×pipocado, antes do `card--info` régua |
| `ccr14`  | matriz erro × correto — as 6 armadilhas que a aula desarma (modelo eso12)      | **P14** | NOVO — inserir após a tabela da trilogia (`card--accent`), antes do `.op-summary`     |

> NOTA p9/p10: essas páginas JÁ têm imagem real (`figure.med` colono / TC fígado) validada. Os SVGs ccr9/ccr10 COMPLEMENTAM (conceito esquematizável que a foto não ensina), não competem com a imagem. Inserir o SVG ANTES da `figure.med` em p10 e DEPOIS do toggle do CEA em p9.
> Nenhum dos 9 alvos tem `figure-svg` hoje — todos são NOVOS. Os `figure-svg` já existentes (p3 coração, p5 mecanismo, p8 cólon, p11 árvore, p12 reto/esfíncter) ficam como estão; não foram pedidos.

---

## P1 — ccr1 · o elo de um caso só (HOTSPOT por nó do triângulo)
**Interação:** triângulo-âncora da aula com 3 nós clicáveis — **coração** (endocardite), **cólon** (CCR), **S. bovis** (a ponte). O alvo de clique é o **órgão/bactéria desenhado** (não rótulo solto). Clicar/focar um nó acende seu cartão-status e a aresta que ele explica; clicar a bactéria central acende AS DUAS arestas (é a ponte) e o status-chave da aula. Default: ponte (S. bovis) acesa — fallback ensina o reflexo sem JS. Enter/Space + foco. Mutuamente exclusivo entre os 3 nós.
**figcaption:** **Um caso, duas doenças, uma ponte.** Toque o coração, o cólon ou a bactéria do meio. A endocardite e o câncer de cólon parecem desconexos, mas o *Streptococcus bovis* (gallolyticus) liga os dois: ele é a impressão digital de um cólon doente. Achar bovis no sangue manda procurar o cólon — a colonoscopia.

```svg
<svg class="il-ccr1" viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-ccr1 d-ccr1" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif" data-eso="ccr1" data-svg="ccr1">
  <title id="t-ccr1">O elo entre endocardite e câncer colorretal pela bactéria Streptococcus bovis</title>
  <desc id="d-ccr1">Esquema-âncora da aula em triângulo. No vértice superior, um coração com endocardite. No vértice inferior esquerdo, um cólon com câncer. No centro, a bactéria Streptococcus bovis (também chamada gallolyticus), que é a ponte entre os dois: o câncer de cólon abre a porta para a bactéria entrar na circulação, e a bactéria, por seu tropismo pelo endocárdio, causa a endocardite. Por isso, encontrar Streptococcus bovis no sangue de um paciente com endocardite obriga a investigar câncer colorretal com colonoscopia. A bactéria não causa o câncer: é o seu marcador.</desc>
  <defs>
    <radialGradient id="ccr1-glow" cx="0.5" cy="0.5" r="0.6">
      <stop offset="0" stop-color="var(--coral-60)" stop-opacity="0.5"/>
      <stop offset="1" stop-color="var(--coral-60)" stop-opacity="0"/>
    </radialGradient>
    <marker id="ccr1-arr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 Z" fill="var(--coral-60)"/></marker>
  </defs>

  <!-- arestas (a ponte) -->
  <g class="ccr1-edges">
    <path class="ccr1-edge" data-edge="colon-bovis" d="M196 348 C 300 300 320 280 360 232" fill="none" stroke="var(--coral-50)" stroke-width="3" stroke-dasharray="5 6" marker-end="url(#ccr1-arr)"/>
    <path class="ccr1-edge" data-edge="bovis-coracao" d="M400 196 C 440 150 460 130 510 100" fill="none" stroke="var(--coral-50)" stroke-width="3" stroke-dasharray="5 6" marker-end="url(#ccr1-arr)"/>
  </g>

  <!-- NÓ 1 · CORAÇÃO (endocardite) -->
  <g class="ccr1-node" data-node="coracao" tabindex="0" role="button" aria-pressed="false" aria-label="Coração com endocardite: febre, sopro novo e vegetação na valva.">
    <circle class="ccr1-hit" cx="556" cy="92" r="56" fill="transparent"/>
    <path class="ccr1-organ" d="M556 56 q34 -18 60 12 q20 22 3 55 q-15 30 -63 55 q-48 -25 -63 -55 q-17 -33 3 -55 q26 -30 60 -12 z" fill="var(--coral-dim)" stroke="var(--coral-60)" stroke-width="2.4"/>
    <circle cx="540" cy="92" r="6" fill="var(--coral-50)"/>
    <text x="556" y="170" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--coral-100)">coração</text>
    <text x="556" y="186" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">endocardite</text>
  </g>

  <!-- NÓ 2 · CÓLON (CCR) -->
  <g class="ccr1-node" data-node="colon" tabindex="0" role="button" aria-pressed="false" aria-label="Cólon com câncer colorretal: a porta de entrada da bactéria.">
    <circle class="ccr1-hit" cx="148" cy="356" r="56" fill="transparent"/>
    <path class="ccr1-organ" d="M120 320 q-26 0 -26 30 q0 34 34 40 q40 6 56 -16 q12 -18 -2 -38 q14 -10 8 -28" fill="none" stroke="var(--teal-60)" stroke-width="14" stroke-linecap="round"/>
    <path d="M138 332 q12 14 0 30 q-12 -4 -16 -16 q4 -12 16 -14 z" fill="var(--coral-50)"/>
    <text x="148" y="416" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--teal-100)">cólon</text>
    <text x="148" y="432" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">câncer colorretal</text>
  </g>

  <!-- NÓ 3 · S. BOVIS (a ponte, default aceso) -->
  <g class="ccr1-node is-on" data-node="bovis" tabindex="0" role="button" aria-pressed="true" aria-label="Streptococcus bovis (gallolyticus): a bactéria-ponte; achá-la no sangue manda procurar o cólon.">
    <circle class="ccr1-aura" cx="380" cy="214" r="78" fill="url(#ccr1-glow)"/>
    <circle class="ccr1-hit" cx="380" cy="214" r="50" fill="transparent"/>
    <circle class="ccr1-organ" cx="380" cy="214" r="34" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="2.6"/>
    <!-- cocos em cadeia (Streptococcus) -->
    <g fill="var(--coral-60)">
      <circle cx="364" cy="206" r="6"/><circle cx="378" cy="200" r="6"/><circle cx="392" cy="206" r="6"/>
      <circle cx="396" cy="220" r="6"/><circle cx="384" cy="230" r="6"/><circle cx="368" cy="226" r="6"/>
    </g>
    <text x="380" y="290" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--coral-80)">S. bovis</text>
    <text x="380" y="306" text-anchor="middle" font-size="10" fill="var(--ink-70)">= gallolyticus · a ponte</text>
  </g>

  <text class="ccr1-status" x="380" y="418" text-anchor="middle" font-size="12" fill="var(--ink-70)" aria-live="polite">Bovis (gallolyticus) é a ponte: o cólon doente o lança no sangue e ele cola no endocárdio. Achou bovis na endocardite → peça colonoscopia. Toque cada vértice.</text>
</svg>
```
**JS (estende interactive.js da casa, padrão `initSvg3`/hotspot exclusivo do rim):** `setNode(key)` com `key ∈ {coracao, colon, bovis}`. Acende `.ccr1-node[data-node=key]` (classe `is-on`), atenua os outros (`is-dim`); acende a(s) aresta(s) que o nó explica:
- `coracao` → acende `.ccr1-edge[data-edge="bovis-coracao"]`;
- `colon` → acende `.ccr1-edge[data-edge="colon-bovis"]`;
- `bovis` → acende AS DUAS arestas (é a ponte completa).
Atualiza `aria-pressed` dos 3 nós e o texto de `.ccr1-status`. Alvo de clique/foco = `.ccr1-hit` (círculo transparente sobre o órgão). Default: `bovis` aceso. Mensagens:
- coracao: "Coração: febre + sopro novo + vegetação na valva = endocardite. Mas qual bactéria? Se vier S. bovis, o coração está apontando o cólon."
- colon: "Cólon: o tumor ulcera e imunossuprime — abre a porta para a flora entrar no sangue. É a porta de entrada, não a vítima da bactéria."
- bovis: "Bovis (gallolyticus) é a ponte: o cólon doente o lança no sangue e ele cola no endocárdio. Achou bovis na endocardite → peça colonoscopia."

---

## P2 — ccr2 · a linha do tempo do caso do Sr. Luiz (STEP-THROUGH 1→4)
**Interação:** linha do tempo horizontal com 4 marcos (Ato 1 cardíaco → melhora/fuga → 7 meses de silêncio → Ato 2 fígado pipocado). Controle `‹ anterior / próximo ›` externo (padrão `.rim-ctl` / `initSvg4`). Cada marco `data-step<=cur` acende; o trecho de linha que LEVA ao marco N tem `data-step=N`. O "vão dos 7 meses" (passo 3) é desenhado como hiato escurecido — a janela perdida. `aria-live` anuncia o passo. Fallback: timeline inteira legível em opacidade base sem JS.
**figcaption:** **A janela que se fechou.** Avance os marcos: internação por endocardite, melhora e fuga do hospital, sete meses de silêncio sem investigar o cólon, e a volta com o fígado "pipocado" de metástases. O passo 3 é o vão — o tempo em que uma colonoscopia teria mudado tudo.

```svg
<svg class="il-ccr2" viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-ccr2 d-ccr2" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif" data-eso="ccr2" data-svg="ccr2">
  <title id="t-ccr2">Linha do tempo do caso do Sr. Luiz, do diagnóstico de endocardite à metástase hepática</title>
  <desc id="d-ccr2">Linha do tempo em quatro marcos. Marco 1: internação por endocardite com febre, sopro e edema. Marco 2: melhora cardíaca em cinco dias e fuga do hospital antes de completar a investigação. Marco 3: sete meses de silêncio, sem que o cólon fosse investigado — a janela de oportunidade perdida, mostrada como um vão escurecido. Marco 4: o retorno com desconforto abdominal e tomografia mostrando o fígado totalmente tomado por metástases, o fígado pipocado, agora irressecável. A figura ensina que a colonoscopia precoce, no marco 1 ou 2, teria diagnosticado o câncer com menos metástases e tornado a cura possível.</desc>
  <defs>
    <linearGradient id="ccr2-gap" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="var(--err-red)" stop-opacity="0.05"/>
      <stop offset="0.5" stop-color="var(--err-red)" stop-opacity="0.22"/>
      <stop offset="1" stop-color="var(--err-red)" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- trilho base -->
  <line x1="70" y1="150" x2="690" y2="150" stroke="var(--border-mid)" stroke-width="4" stroke-linecap="round"/>

  <!-- vão dos 7 meses (passo 3) -->
  <rect class="ccr2-edge" data-step="3" x="402" y="120" width="156" height="60" rx="8" fill="url(#ccr2-gap)" opacity="0.3"/>

  <!-- segmentos que acendem (a linha que leva ao marco N) -->
  <line class="ccr2-edge" data-step="2" x1="70" y1="150" x2="240" y2="150" stroke="var(--teal-60)" stroke-width="4" stroke-linecap="round"/>
  <line class="ccr2-edge" data-step="3" x1="240" y1="150" x2="560" y2="150" stroke="var(--warn-amber)" stroke-width="4" stroke-linecap="round" stroke-dasharray="5 7"/>
  <line class="ccr2-edge" data-step="4" x1="560" y1="150" x2="690" y2="150" stroke="var(--coral-50)" stroke-width="4" stroke-linecap="round"/>

  <!-- MARCO 1 -->
  <g class="ccr2-mark" data-step="1">
    <circle cx="70" cy="150" r="16" fill="var(--coral-dim)" stroke="var(--coral-60)" stroke-width="2.6"/>
    <path d="M70 142 q8 -5 14 3 q5 6 0 13 q-4 7 -14 12 q-10 -5 -14 -12 q-5 -7 0 -13 q6 -8 14 -3 z" fill="var(--coral-50)" transform="scale(0.7) translate(30 64)"/>
    <text x="70" y="200" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--coral-100)">Ato 1</text>
    <text x="70" y="216" text-anchor="middle" font-size="10" fill="var(--ink-70)">endocardite</text>
  </g>

  <!-- MARCO 2 -->
  <g class="ccr2-mark" data-step="2">
    <circle cx="240" cy="150" r="16" fill="var(--teal-10)" stroke="var(--teal-60)" stroke-width="2.6"/>
    <path d="M232 150 l5 6 l11 -13" fill="none" stroke="var(--teal-80)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="240" y="200" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--teal-100)">melhora · fuga</text>
    <text x="240" y="216" text-anchor="middle" font-size="10" fill="var(--ink-70)">não investigou</text>
  </g>

  <!-- MARCO 3 -->
  <g class="ccr2-mark" data-step="3">
    <circle cx="480" cy="150" r="16" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2.6"/>
    <text x="480" y="156" text-anchor="middle" font-size="13" font-weight="700" fill="var(--warn-amber)">?</text>
    <text x="480" y="200" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--warn-amber)">7 meses</text>
    <text x="480" y="216" text-anchor="middle" font-size="10" fill="var(--ink-70)">janela perdida</text>
  </g>

  <!-- MARCO 4 -->
  <g class="ccr2-mark" data-step="4">
    <circle cx="690" cy="150" r="18" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="2.6"/>
    <g fill="var(--err-red)"><circle cx="684" cy="146" r="2.6"/><circle cx="694" cy="148" r="2.4"/><circle cx="688" cy="155" r="2.4"/><circle cx="696" cy="156" r="2.2"/><circle cx="682" cy="155" r="2"/></g>
    <text x="690" y="202" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--err-red)">Ato 2</text>
    <text x="690" y="218" text-anchor="middle" font-size="10" fill="var(--ink-70)">fígado pipocado</text>
  </g>

  <text x="70" y="70" font-size="12" fill="var(--ink-50)">internação</text>
  <text x="690" y="70" text-anchor="end" font-size="12" fill="var(--ink-50)">retorno</text>
  <text class="ccr2-status" x="380" y="296" text-anchor="middle" font-size="12" fill="var(--ink-70)" aria-live="polite">Passo 1 de 4 — Internação por endocardite (febre, sopro, edema). O eco confirma. Avance para ver o que veio depois.</text>
</svg>
```
**JS (padrão `initSvg4` do rim — step-through):** controle externo `.rim-ctl[data-step-ctl="ccr2"]` com `[data-step-prev]`/`[data-step-next]`/`[data-step-count]`. `cur` de 1 a `MAX=4`. `.ccr2-mark[data-step<=cur]` e `.ccr2-edge[data-step<=cur]` ganham `is-on`; demais base. `.ccr2-status` espelha o micro do passo:
1. "Internação por endocardite: febre + sopro novo + edema. O eco confirma; inicia-se antibiótico."
2. "Melhora cardíaca em 5 dias. Pedem complementação — o paciente foge do hospital sem investigar o cólon."
3. "Sete meses de silêncio. É a janela perdida: nesse intervalo o CCR cresce e semeia o fígado."
4. "Retorno com dor abdominal. TC: fígado pipocado de metástases — agora irressecável. A colonoscopia precoce teria mudado o desfecho."

```html
<!-- controle externo, dentro de .figure-svg__frame, após o stage -->
<div class="rim-ctl" data-step-ctl="ccr2">
  <button class="rim-ctl__btn" type="button" data-step-prev aria-label="Marco anterior">‹ anterior</button>
  <button class="rim-ctl__btn" type="button" data-step-next aria-label="Próximo marco">próximo ›</button>
  <span class="rim-ctl__count" data-step-count aria-live="polite">marco 1 de 4</span>
</div>
```

---

## P4 — ccr4 · o reflexo da bandeira vermelha (REVELAR a conduta)
**Interação:** card-reflexo. À esquerda, a placa de hemocultura crescendo *S. bovis*; uma seta-reflexo aponta para um alvo coberto. Clicar/focar o conjunto **revela** a conduta obrigatória (colonoscopia) e troca a bandeira de cinza para coral aceso (`is-revealed`) — o "reflexo" se completa. Padrão `initSvg2` do rim (card-âncora revela). Fallback: a conduta já está escrita em opacidade base (revelação é reforço mnemônico, não esconde informação essencial).
**figcaption:** **Um nome no antibiograma muda a conduta.** Toque a placa: hemocultura com *S. bovis* (gallolyticus) em paciente com endocardite acende a bandeira vermelha — a conduta obrigatória é **colonoscopia** para procurar câncer colorretal. É o reflexo de prova que a aula inteira instala.

```svg
<svg class="il-ccr4" viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-ccr4 d-ccr4" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif" data-eso="ccr4" data-svg="ccr4">
  <title id="t-ccr4">Reflexo clínico: hemocultura com Streptococcus bovis indica colonoscopia</title>
  <desc id="d-ccr4">Uma placa de hemocultura à esquerda mostra colônias de Streptococcus bovis, também chamado gallolyticus. Uma seta de reflexo aponta para a conduta à direita: solicitar colonoscopia para investigar câncer colorretal. A figura ensina o reflexo de prova: endocardite com bovis no sangue obriga a colonoscopia, porque a bactéria é marcador de câncer de cólon. A reclassificação do nome de bovis para gallolyticus não muda essa conduta.</desc>
  <defs>
    <radialGradient id="ccr4-flag" cx="0.5" cy="0.5" r="0.6">
      <stop offset="0" stop-color="var(--coral-50)" stop-opacity="0.55"/>
      <stop offset="1" stop-color="var(--coral-50)" stop-opacity="0"/>
    </radialGradient>
    <marker id="ccr4-arr" markerWidth="11" markerHeight="11" refX="8" refY="5.5" orient="auto"><path d="M0 0 L11 5.5 L0 11 Z" fill="var(--coral-60)"/></marker>
  </defs>

  <!-- placa de hemocultura -->
  <g>
    <circle cx="150" cy="150" r="84" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="2"/>
    <circle cx="150" cy="150" r="84" fill="none" stroke="var(--coral-50)" stroke-width="1.4" stroke-dasharray="2 6" opacity="0.5"/>
    <!-- colônias (cadeias de cocos) -->
    <g fill="var(--coral-60)">
      <circle cx="124" cy="128" r="5"/><circle cx="134" cy="134" r="5"/><circle cx="144" cy="128" r="5"/>
      <circle cx="170" cy="160" r="5"/><circle cx="180" cy="166" r="5"/><circle cx="190" cy="158" r="5"/>
      <circle cx="138" cy="178" r="5"/><circle cx="148" cy="184" r="5"/><circle cx="158" cy="176" r="5"/>
    </g>
    <text x="150" y="258" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--coral-100)">hemocultura +</text>
    <text x="150" y="274" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">S. bovis (gallolyticus)</text>
  </g>

  <!-- seta-reflexo -->
  <path d="M252 150 C 320 150 340 150 392 150" fill="none" stroke="var(--coral-60)" stroke-width="3.4" marker-end="url(#ccr4-arr)"/>
  <text x="322" y="138" text-anchor="middle" font-size="11" font-weight="600" fill="var(--coral-80)">reflexo</text>

  <!-- alvo: a conduta (revela) -->
  <g class="ccr4-target" tabindex="0" role="button" aria-pressed="false" aria-label="Conduta obrigatória: solicitar colonoscopia para investigar câncer colorretal.">
    <rect class="ccr4-aura" x="404" y="78" width="280" height="144" rx="18" fill="url(#ccr4-flag)" opacity="0"/>
    <rect class="ccr4-card" x="430" y="96" width="244" height="108" rx="14" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="2.4"/>
    <!-- bandeira -->
    <g transform="translate(454,118)">
      <line x1="0" y1="0" x2="0" y2="64" stroke="var(--ink-50)" stroke-width="3" stroke-linecap="round"/>
      <path class="ccr4-flagcloth" d="M0 4 L44 4 L36 18 L44 32 L0 32 Z" fill="var(--coral-50)"/>
    </g>
    <text x="566" y="138" text-anchor="middle" font-size="14" font-weight="700" fill="var(--coral-100)">COLONOSCOPIA</text>
    <text x="566" y="160" text-anchor="middle" font-size="11.5" fill="var(--ink-90)">investigar câncer</text>
    <text x="566" y="176" text-anchor="middle" font-size="11.5" fill="var(--ink-90)">colorretal</text>
    <text class="ccr4-hint" x="566" y="196" text-anchor="middle" font-size="10" fill="var(--ink-50)">toque para fixar o reflexo</text>
  </g>

  <text class="ccr4-status" x="360" y="296" text-anchor="middle" font-size="11.5" fill="var(--ink-70)" aria-live="polite" opacity="0"></text>
</svg>
```
**JS (padrão `initSvg2` do rim — reveal):** alvo `.ccr4-target` clicável/focável. Ao acionar, alterna `is-revealed`: a `.ccr4-aura` ganha opacidade (glow coral), a `.ccr4-flagcloth` intensifica e a `.ccr4-status` aparece com: "S. bovis (gallolyticus) na endocardite = bandeira vermelha → colonoscopia obrigatória. A renomeação não muda a conduta." `.ccr4-hint` some quando revelado. Idempotente, `aria-pressed` sincronizado.

---

## P6 — ccr6 · a balança dos fatores de risco + a fibra fora dela (HOTSPOT por grupo)
**Interação:** balança/painel com 4 chips-fator de risco que pesam para o lado do CCR — **hábitos/dieta**, **síndromes hereditárias**, **pólipos adenomatosos**, **DII (RCU>Crohn)** — e, separado por uma linha, a **fibra**, na bandeja do "protetor" (puxa para o outro lado). Clicar/focar um grupo acende seu cartão-detalhe e realça o prato de risco; clicar a fibra mostra que ela NÃO entra no prato de risco (a pegadinha). Padrão hotspot exclusivo (`initSvg10`/gast6). Default: nenhum aceso → todos legíveis (fallback). Enter/Space + foco.
**figcaption:** **O que pesa — e o que protege.** Toque cada fator: dieta processada/tabagismo, síndromes hereditárias (PAF, Lynch), pólipos adenomatosos e doença inflamatória intestinal (a RCU pesa mais que o Crohn) empurram o risco. A **fibra** fica do outro lado da balança: protege. A banca troca "dieta processada" por "rica em fibras" para te fazer marcar a protetora como risco.

```svg
<svg class="il-ccr6" viewBox="0 0 760 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-ccr6 d-ccr6" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif" data-eso="ccr6" data-svg="ccr6">
  <title id="t-ccr6">Balança dos fatores de risco do câncer colorretal e o papel protetor da fibra</title>
  <desc id="d-ccr6">Uma balança com dois pratos. No prato de risco, à esquerda, quatro fatores que aumentam o câncer colorretal: hábitos e dieta processada com tabagismo, síndromes hereditárias como polipose adenomatosa familiar e Lynch, pólipos adenomatosos e doença inflamatória intestinal, na qual a retocolite ulcerativa pesa mais que a doença de Crohn. No prato protetor, à direita, está a fibra alimentar, que reduz o risco. A figura ensina a armadilha clássica de prova: a banca troca dieta processada por dieta rica em fibras esperando que o aluno marque a fibra como fator de risco, quando ela é protetora.</desc>
  <defs>
    <radialGradient id="ccr6-glow" cx="0.5" cy="0.5" r="0.6">
      <stop offset="0" stop-color="var(--coral-60)" stop-opacity="0.4"/>
      <stop offset="1" stop-color="var(--coral-60)" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- eixo da balança -->
  <line x1="380" y1="60" x2="380" y2="360" stroke="var(--ink-50)" stroke-width="4" stroke-linecap="round"/>
  <line x1="170" y1="92" x2="590" y2="92" stroke="var(--ink-50)" stroke-width="3" stroke-linecap="round"/>
  <polygon points="380,356 360,392 400,392" fill="var(--ink-50)" opacity="0.5"/>

  <!-- PRATO DE RISCO (esquerda) -->
  <line x1="170" y1="92" x2="170" y2="130" stroke="var(--ink-50)" stroke-width="2"/>
  <path class="ccr6-pan" data-pan="risco" d="M96 130 q74 44 148 0 q-12 28 -74 28 q-62 0 -74 -28 z" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="2"/>
  <text x="170" y="80" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--coral-100)">FATORES DE RISCO</text>

  <!-- chips de risco -->
  <g class="ccr6-factor" data-factor="habitos" tabindex="0" role="button" aria-pressed="false" aria-label="Hábitos e dieta: processados, defumados, nitrogenados e tabagismo.">
    <rect class="ccr6-hit" x="58" y="186" width="224" height="34" rx="9" fill="transparent"/>
    <rect class="ccr6-chip" x="58" y="186" width="224" height="34" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.4"/>
    <text x="170" y="208" text-anchor="middle" font-size="11.5" fill="var(--ink-90)">hábitos · dieta processada · tabaco</text>
  </g>
  <g class="ccr6-factor" data-factor="hereditarias" tabindex="0" role="button" aria-pressed="false" aria-label="Síndromes hereditárias: polipose adenomatosa familiar e Lynch.">
    <rect class="ccr6-hit" x="58" y="228" width="224" height="34" rx="9" fill="transparent"/>
    <rect class="ccr6-chip" x="58" y="228" width="224" height="34" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.4"/>
    <text x="170" y="250" text-anchor="middle" font-size="11.5" fill="var(--ink-90)">síndromes hereditárias (PAF · Lynch)</text>
  </g>
  <g class="ccr6-factor" data-factor="polipos" tabindex="0" role="button" aria-pressed="false" aria-label="Pólipos adenomatosos: a sequência adenoma para carcinoma.">
    <rect class="ccr6-hit" x="58" y="270" width="224" height="34" rx="9" fill="transparent"/>
    <rect class="ccr6-chip" x="58" y="270" width="224" height="34" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.4"/>
    <text x="170" y="292" text-anchor="middle" font-size="11.5" fill="var(--ink-90)">pólipos adenomatosos</text>
  </g>
  <g class="ccr6-factor" data-factor="dii" tabindex="0" role="button" aria-pressed="false" aria-label="Doença inflamatória intestinal: retocolite ulcerativa pesa mais que Crohn.">
    <rect class="ccr6-hit" x="58" y="312" width="224" height="34" rx="9" fill="transparent"/>
    <rect class="ccr6-chip" x="58" y="312" width="224" height="34" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.4"/>
    <text x="170" y="334" text-anchor="middle" font-size="11.5" fill="var(--ink-90)">DII — RCU &gt; Crohn</text>
  </g>

  <!-- PRATO PROTETOR (direita) -->
  <line x1="590" y1="92" x2="590" y2="130" stroke="var(--ink-50)" stroke-width="2"/>
  <path class="ccr6-pan" data-pan="protetor" d="M516 130 q74 44 148 0 q-12 28 -74 28 q-62 0 -74 -28 z" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="2"/>
  <text x="590" y="80" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ok-green)">PROTETOR</text>

  <g class="ccr6-factor" data-factor="fibra" tabindex="0" role="button" aria-pressed="false" aria-label="Fibra alimentar: protetora, não é fator de risco. A pegadinha da prova.">
    <circle class="ccr6-aura" cx="590" cy="232" r="74" fill="url(#ccr6-glow)" opacity="0"/>
    <rect class="ccr6-hit" x="498" y="208" width="184" height="48" rx="12" fill="transparent"/>
    <rect class="ccr6-chip" x="498" y="208" width="184" height="48" rx="12" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="2"/>
    <text x="590" y="230" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ok-green)">FIBRA</text>
    <text x="590" y="248" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">protege — não é risco</text>
  </g>

  <text class="ccr6-status" x="380" y="408" text-anchor="middle" font-size="12" fill="var(--ink-70)" aria-live="polite">Quatro grupos empurram o risco; a fibra fica no outro prato. Toque cada fator — e cuidado com a fibra disfarçada de risco.</text>
</svg>
```
**JS (padrão hotspot exclusivo `initSvg10`/gast6):** `setFactor(key)`. Acende `.ccr6-factor[data-factor=key]` (`is-on` → `.ccr6-chip` realça com coral nos de risco / ok-green na fibra), atenua os outros, atualiza `.ccr6-status` e `aria-pressed`. Alvo de clique/foco = `.ccr6-hit`. Para `fibra`, acende `.ccr6-aura` e dá a mensagem-pegadinha. Default: nenhum (todos visíveis). Mensagens:
- habitos: "Dieta processada (defumados, nitrogenados, industrializados) + tabagismo + etilismo. Pesa no prato de risco."
- hereditarias: "PAF e Lynch — peso crescente em prova. A PAF, sem intervenção, quase 100% evolui para CCR."
- polipos: "Pólipos adenomatosos não são câncer, mas são a base da sequência adenoma → carcinoma e do rastreio."
- dii: "Doença inflamatória intestinal aumenta o risco; a RCU pesa MAIS que o Crohn (mucosa contínua e extensa)."
- fibra: "Pegadinha: fibra é PROTETORA. A banca a disfarça de 'dieta rica em fibras' como se fosse risco — não é."

---

## P7 — ccr7 · a janela adenoma → carcinoma e o corte etário (SLIDER no tempo)
**Interação:** régua temporal da carcinogênese — mucosa normal → pólipo adenomatoso → displasia → carcinoma — sobre a qual desliza um marcador de idade (slider 40→50→55→60). O slider revela em que ponto o rastreio "entra": corte BR (50) e internacional (45) marcados como portas; um marcador "sintomático" mostra que clínica = investigação ativa (sai do rastreio). Padrão slider/step (`initSvg6` Bozniak). Fallback: régua completa legível, com 45 e 50 marcados, sem JS.
**figcaption:** **A janela que o rastreio aproveita.** Arraste o marcador de idade: a sequência adenoma → carcinoma leva anos, e remover o pólipo interrompe a história. As portas do rastreio são **50 anos** (Brasil/MS) e **45 anos** (internacional). Se já há sintoma (sangue, hábito mudado), não é rastreio — é investigação ativa, colonoscopia agora.

```svg
<svg class="il-ccr7" viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-ccr7 d-ccr7" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif" data-eso="ccr7" data-svg="ccr7">
  <title id="t-ccr7">Sequência adenoma para carcinoma e as idades de início do rastreio do câncer colorretal</title>
  <desc id="d-ccr7">Uma régua mostra a carcinogênese colorretal ao longo dos anos: mucosa normal, depois pólipo adenomatoso, depois displasia e por fim carcinoma. Sobre a régua há portas de rastreio: 50 anos pelo Ministério da Saúde do Brasil e 45 anos pelas sociedades internacionais. A figura ensina que a sequência é longa, o que cria a janela de oportunidade do rastreio, e que remover o pólipo interrompe a progressão. Mostra também que o paciente já sintomático sai do rastreio e entra em investigação ativa, com colonoscopia imediata.</desc>
  <defs>
    <linearGradient id="ccr7-prog" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="var(--teal-40)"/>
      <stop offset="0.45" stop-color="var(--warn-amber)"/>
      <stop offset="1" stop-color="var(--coral-50)"/>
    </linearGradient>
  </defs>

  <!-- régua da carcinogênese -->
  <rect x="70" y="150" width="620" height="20" rx="10" fill="url(#ccr7-prog)" opacity="0.55"/>

  <!-- estágios -->
  <g class="ccr7-stage" data-stage="normal">
    <circle cx="120" cy="110" r="20" fill="var(--teal-10)" stroke="var(--teal-60)" stroke-width="2.4"/>
    <text x="120" y="196" text-anchor="middle" font-size="11" font-weight="700" fill="var(--teal-100)">mucosa normal</text>
  </g>
  <g class="ccr7-stage" data-stage="adenoma">
    <circle cx="300" cy="110" r="20" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2.4"/>
    <path d="M300 100 q9 0 9 11 q0 9 -9 9 q-9 0 -9 -9 q0 -11 9 -11 z" fill="var(--warn-amber)"/>
    <text x="300" y="196" text-anchor="middle" font-size="11" font-weight="700" fill="var(--warn-amber)">pólipo adenomatoso</text>
  </g>
  <g class="ccr7-stage" data-stage="displasia">
    <circle cx="480" cy="110" r="20" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="2.4"/>
    <text x="480" y="196" text-anchor="middle" font-size="11" font-weight="700" fill="var(--coral-80)">displasia</text>
  </g>
  <g class="ccr7-stage" data-stage="carcinoma">
    <circle cx="640" cy="110" r="22" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="2.8"/>
    <g fill="var(--coral-60)"><circle cx="634" cy="106" r="3"/><circle cx="644" cy="108" r="2.6"/><circle cx="638" cy="114" r="2.6"/></g>
    <text x="640" y="196" text-anchor="middle" font-size="11" font-weight="700" fill="var(--coral-100)">carcinoma</text>
  </g>

  <!-- ponto onde remover o pólipo interrompe -->
  <path d="M300 132 q24 -6 0 -22" fill="none" stroke="var(--ok-green)" stroke-width="2" stroke-dasharray="3 3"/>
  <text x="330" y="100" font-size="9.5" fill="var(--ok-green)">polipectomia interrompe</text>

  <!-- portas de rastreio (alvo do slider) -->
  <g class="ccr7-gate" data-gate="intl">
    <line x1="248" y1="150" x2="248" y2="240" stroke="var(--info-blue)" stroke-width="2" stroke-dasharray="4 4"/>
    <rect x="208" y="240" width="80" height="40" rx="9" fill="var(--info-blue-dim)" stroke="var(--info-blue)" stroke-width="1.6"/>
    <text x="248" y="258" text-anchor="middle" font-size="13" font-weight="700" fill="var(--info-blue)">45 anos</text>
    <text x="248" y="273" text-anchor="middle" font-size="9.5" fill="var(--ink-70)">internacional</text>
  </g>
  <g class="ccr7-gate" data-gate="br">
    <line x1="360" y1="150" x2="360" y2="240" stroke="var(--teal-60)" stroke-width="2.6"/>
    <rect x="318" y="240" width="84" height="40" rx="9" fill="var(--teal-10)" stroke="var(--teal-60)" stroke-width="2"/>
    <text x="360" y="258" text-anchor="middle" font-size="13" font-weight="700" fill="var(--teal-100)">50 anos</text>
    <text x="360" y="273" text-anchor="middle" font-size="9.5" fill="var(--ink-70)">Brasil · MS</text>
  </g>

  <!-- marcador de idade móvel -->
  <g class="ccr7-cursor" transform="translate(360,0)">
    <polygon points="0,138 -9,124 9,124" fill="var(--ink-90)"/>
    <line x1="0" y1="138" x2="0" y2="160" stroke="var(--ink-90)" stroke-width="2.4"/>
    <text class="ccr7-age" x="0" y="118" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink-100)">50a</text>
  </g>

  <text class="ccr7-status" x="380" y="324" text-anchor="middle" font-size="12" fill="var(--ink-70)" aria-live="polite">Aos 50 anos abre a porta do rastreio no Brasil. A janela adenoma → carcinoma leva anos: tempo de achar e remover o pólipo. Arraste a idade.</text>
</svg>
```
**JS (padrão slider `initSvg6` Bozniak):** controle externo `input[type=range][data-slider="ccr7"]` (min 40, max 60, step 5) move `.ccr7-cursor` (translateX mapeado: 40→x140, 45→x248, 50→x360, 55→x500, 60→x640) e atualiza `.ccr7-age`. Realça a porta atingida (`.ccr7-gate.is-on` ao passar 45 ou 50). `.ccr7-status` e `aria-valuetext` espelham:
- 40: "40 anos: antes do corte de risco médio. Aqui só se rastreia mais cedo por alto risco (história familiar/síndrome)."
- 45: "45 anos: porta internacional (ACS/USPSTF). Em prova nacional, responda 50; reconheça 45 como tendência."
- 50: "50 anos: porta do rastreio no Brasil (MS). Métodos: sangue oculto nas fezes e/ou colonoscopia."
- 55/60: "Já dentro da faixa de rastreio. Atenção: se houver sintoma de alarme, deixa de ser rastreio e vira investigação ativa — colonoscopia agora."

```html
<div class="rim-ctl" data-slider-ctl="ccr7">
  <label class="rim-ctl__label" for="ccr7-range">Idade</label>
  <input id="ccr7-range" type="range" min="40" max="60" step="5" value="50" data-slider="ccr7" aria-label="Idade do paciente para rastreio">
</div>
```

---

## P9 — ccr9 · o que diagnostica × o que faz seguimento (TOGGLE colono ↔ CEA)
**Interação:** dois painéis comparados por toggle — **COLONOSCOPIA + biópsia** (vê, localiza, mede distância à margem, e BIOPSIA = fecha o diagnóstico) × **CEA** (não diagnostica; é prognóstico/seguimento, sobe = recidiva; é de toda neoplasia mucinosa → sensível, não específico). Segmented control externo (`initSvg5`/gast4). Default: ambos visíveis (fallback). Selecionar um atenua o outro e foca o conceito. Enter/Space/setas.
> Complementa a foto real de colonoscopia já na página: a foto mostra COMO é a lesão; este SVG ensina O QUE cada ferramenta faz no fluxo (diagnóstico × seguimento) — conceito que a foto não carrega.
**figcaption:** **Quem diagnostica × quem segue.** Alterne: a **colonoscopia com biópsia** vê, localiza, mede a distância à margem e fecha o diagnóstico pela histologia. O **CEA** não diagnostica nada — é prognóstico e seguimento (sobe depois da cirurgia = recidiva) e, por ser marcador de toda neoplasia mucinosa, é sensível mas inespecífico.

```svg
<svg class="il-ccr9" viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-ccr9 d-ccr9" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif" data-eso="ccr9" data-svg="ccr9">
  <title id="t-ccr9">Colonoscopia com biópsia diagnostica; o CEA é marcador de seguimento</title>
  <desc id="d-ccr9">Dois painéis comparados. À esquerda, a colonoscopia com biópsia: o aparelho vê a lesão, localiza, mede a distância até a margem anal e retira fragmento para a histologia, que fecha o diagnóstico. À direita, o antígeno carcinoembrionário, o CEA, mostrado como uma curva ao longo do tempo: cai após a ressecção do tumor e volta a subir quando há recidiva. O CEA não faz diagnóstico, serve de prognóstico e seguimento, e por ser marcador de toda neoplasia mucinosa é sensível mas não específico. A figura ensina a separar o que diagnostica, que é a biópsia, do que acompanha, que é o CEA.</desc>

  <!-- PAINEL COLONO -->
  <g class="ccr9-side" data-side="colono">
    <rect x="40" y="40" width="320" height="300" rx="16" fill="var(--teal-05)" stroke="var(--teal-60)" stroke-width="2"/>
    <text x="200" y="72" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--teal-100)">COLONOSCOPIA + BIÓPSIA</text>
    <!-- luz do cólon com lesão vegetante -->
    <ellipse cx="200" cy="170" rx="118" ry="78" fill="var(--bg-elevated-2)" stroke="var(--teal-30)" stroke-width="1.6"/>
    <ellipse cx="200" cy="170" rx="60" ry="38" fill="var(--teal-10)" stroke="var(--teal-30)" stroke-width="1.2"/>
    <path d="M250 150 q34 -8 40 26 q4 30 -28 34 q-30 4 -36 -22 q-4 -28 24 -38 z" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="2"/>
    <!-- pinça de biópsia -->
    <line x1="118" y1="118" x2="248" y2="166" stroke="var(--ink-70)" stroke-width="3"/>
    <path d="M246 162 l10 2 m-10 8 l10 -2" stroke="var(--coral-60)" stroke-width="2.4" stroke-linecap="round"/>
    <text x="200" y="284" text-anchor="middle" font-size="11" fill="var(--ink-90)">vê · localiza · mede a margem</text>
    <rect x="96" y="298" width="208" height="28" rx="9" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="1.6"/>
    <text x="200" y="316" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ok-green)">BIÓPSIA = fecha o diagnóstico</text>
  </g>

  <!-- PAINEL CEA -->
  <g class="ccr9-side" data-side="cea">
    <rect x="400" y="40" width="320" height="300" rx="16" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2"/>
    <text x="560" y="72" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--warn-amber)">CEA — seguimento</text>
    <!-- eixos -->
    <line x1="448" y1="250" x2="690" y2="250" stroke="var(--ink-50)" stroke-width="1.6"/>
    <line x1="448" y1="110" x2="448" y2="250" stroke="var(--ink-50)" stroke-width="1.6"/>
    <text x="442" y="108" text-anchor="end" font-size="9.5" fill="var(--ink-50)">CEA</text>
    <text x="690" y="266" text-anchor="end" font-size="9.5" fill="var(--ink-50)">tempo</text>
    <!-- curva: alto → cai pós-ressecção → sobe na recidiva -->
    <path d="M456 140 C 480 138 496 200 520 232 L 560 232 C 600 232 620 170 660 132"
          fill="none" stroke="var(--coral-60)" stroke-width="3"/>
    <!-- marco ressecção -->
    <line x1="540" y1="120" x2="540" y2="250" stroke="var(--ok-green)" stroke-width="1.8" stroke-dasharray="4 4"/>
    <text x="540" y="116" text-anchor="middle" font-size="9.5" fill="var(--ok-green)">ressecção</text>
    <text x="624" y="120" text-anchor="middle" font-size="9.5" fill="var(--coral-80)">sobe = recidiva</text>
    <text x="560" y="284" text-anchor="middle" font-size="11" fill="var(--ink-90)">não diagnostica · prognóstico</text>
    <rect x="452" y="298" width="216" height="28" rx="9" fill="var(--bg-elevated-2)" stroke="var(--warn-amber)" stroke-width="1.4"/>
    <text x="560" y="316" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--warn-amber)">mucinoso → sensível, inespecífico</text>
  </g>

  <text class="ccr9-status" x="380" y="368" text-anchor="middle" font-size="12" fill="var(--ink-70)" aria-live="polite">Quem diagnostica é a biópsia (colonoscopia). O CEA acompanha depois da cirurgia. Alterne para focar cada um.</text>
</svg>
```
**JS (padrão segmented `initSvg5`/gast4):** controle externo `.toggle-switch[data-toggle-ctl="ccr9"]` com botões `data-key="colono|cea"`. `select(key)` aplica `is-dim` ao `.ccr9-side` cujo `data-side` ≠ key (default sem seleção = ambos visíveis), atualiza `.ccr9-status` e `aria-pressed`. Setas ←→/↑↓ navegam. Mensagens:
- colono: "Colonoscopia com biópsia: vê, localiza, mede a distância à margem e fecha o diagnóstico pela histologia. Igual à EDA do esôfago/estômago — aqui não muda nada."
- cea: "CEA: NÃO diagnostica. É prognóstico e seguimento — dosar após a ressecção; subir = recidiva. Marca toda neoplasia mucinosa → sensível, mas inespecífico."

```html
<div class="toggle-switch" role="tablist" aria-label="Diagnóstico × seguimento" data-toggle-ctl="ccr9">
  <button class="toggle-switch__opt" role="tab" data-key="colono" aria-selected="false">Colonoscopia</button>
  <button class="toggle-switch__opt" role="tab" data-key="cea" data-tone="trap" aria-selected="false">CEA</button>
</div>
```

---

## P10 — ccr10 · o carteiro do mal: fígado/pulmão e o mapa do estadiamento (HOTSPOT por alvo)
**Interação:** corpo esquemático com o cólon como "agência de correio" lançando cartas (células) pela corrente para os **dois alvos hematogênicos** — fígado e pulmão — cada um pareado ao seu exame de estadiamento (**TC de abdome** / **TC de tórax**). Um terceiro hotspot, a **pelve**, só acende para o **reto** (RM de pelve = planejamento). Clicar/focar cada alvo desenhado acende seu exame e a "carta" daquele trajeto; demais atenuam. Padrão hotspot exclusivo (gast6/`initSvg10`). Default: fígado aceso (é o do caso, "pipocado"). Enter/Space + foco.
> Complementa a foto real da TC de fígado já na página: a foto mostra o achado "pipocado"; este SVG ensina o MAPA (por que TC tórax+abdome, e RM só no reto) — raciocínio que a foto sozinha não dá.
**figcaption:** **O carteiro do mal entrega no fígado e no pulmão.** Toque cada alvo: a via hematogênica leva células ao **fígado** (TC de abdome) e ao **pulmão** (TC de tórax) — por isso o estadiamento a distância é TC de tórax + abdome. A **RM de pelve** só entra no **reto**, para planejar a cirurgia (o reto mora num "balde" cheio de estruturas). Não há exame "ultraprecoce" aqui: a colectomia é cirurgia fácil.

```svg
<svg class="il-ccr10" viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-ccr10 d-ccr10" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif" data-eso="ccr10" data-svg="ccr10">
  <title id="t-ccr10">Disseminação hematogênica do câncer colorretal para fígado e pulmão e o mapa de estadiamento</title>
  <desc id="d-ccr10">Silhueta de tronco com o cólon ao centro funcionando como ponto de partida. Pela via hematogênica, células neoplásicas seguem a corrente sanguínea até dois alvos: o fígado, estadiado por tomografia de abdome, e o pulmão, estadiado por tomografia de tórax. Por isso o estadiamento a distância do câncer colorretal é tomografia de tórax mais tomografia de abdome. Há também a pelve, destacada à parte, onde a ressonância magnética só é indicada para o tumor de reto, para planejar a cirurgia, porque o reto fica num espaço cheio de estruturas como sacro, bexiga, próstata ou útero e ureteres. A figura ensina que o exame segue a via de disseminação e que a ressonância de pelve é exclusiva do reto.</desc>
  <defs>
    <marker id="ccr10-arr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 Z" fill="var(--coral-60)"/></marker>
    <radialGradient id="ccr10-glow" cx="0.5" cy="0.5" r="0.6"><stop offset="0" stop-color="var(--coral-60)" stop-opacity="0.4"/><stop offset="1" stop-color="var(--coral-60)" stop-opacity="0"/></radialGradient>
  </defs>

  <!-- silhueta de tronco -->
  <path d="M300 60 q60 -22 120 0 q24 10 22 44 l-10 230 q-4 60 -72 60 q-68 0 -72 -60 l-10 -230 q-2 -34 22 -44 z" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.6" opacity="0.8"/>

  <!-- cólon central (agência de correio / origem) -->
  <g>
    <path d="M330 250 q-22 0 -22 26 q0 30 30 36 q40 6 56 -14 q12 -16 -4 -36 q14 -12 6 -28 q-22 -2 -30 14" fill="none" stroke="var(--coral-50)" stroke-width="13" stroke-linecap="round"/>
    <text x="360" y="350" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--coral-100)">cólon/reto</text>
    <text x="360" y="366" text-anchor="middle" font-size="9.5" fill="var(--ink-70)">via hematogênica</text>
  </g>

  <!-- ALVO 1 · FÍGADO (TC abdome) — default aceso -->
  <g class="ccr10-target is-on" data-target="figado" tabindex="0" role="button" aria-pressed="true" aria-label="Fígado: alvo hematogênico, estadiado por tomografia de abdome.">
    <circle class="ccr10-aura" cx="300" cy="200" r="60" fill="url(#ccr10-glow)"/>
    <path class="ccr10-trail" data-trail="figado" d="M338 256 C 320 236 312 220 304 204" fill="none" stroke="var(--coral-60)" stroke-width="2.4" stroke-dasharray="3 5" marker-end="url(#ccr10-arr)"/>
    <path class="ccr10-organ" d="M256 178 q44 -22 92 -6 q14 24 -2 44 q-30 26 -78 18 q-26 -28 -12 -56 z" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="2.2"/>
    <g fill="var(--coral-60)"><circle cx="284" cy="196" r="3.4"/><circle cx="300" cy="190" r="3"/><circle cx="312" cy="200" r="3.2"/><circle cx="294" cy="206" r="2.8"/></g>
    <text x="300" y="150" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--coral-100)">fígado</text>
    <rect x="206" y="222" width="96" height="26" rx="8" fill="var(--info-blue-dim)" stroke="var(--info-blue)" stroke-width="1.4"/>
    <text x="254" y="239" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--info-blue)">TC abdome</text>
  </g>

  <!-- ALVO 2 · PULMÃO (TC tórax) -->
  <g class="ccr10-target" data-target="pulmao" tabindex="0" role="button" aria-pressed="false" aria-label="Pulmão: alvo hematogênico, estadiado por tomografia de tórax.">
    <path class="ccr10-trail" data-trail="pulmao" d="M348 250 C 380 190 400 150 430 124" fill="none" stroke="var(--coral-60)" stroke-width="2.4" stroke-dasharray="3 5" marker-end="url(#ccr10-arr)"/>
    <path class="ccr10-organ" d="M448 96 q26 -8 30 22 q4 40 -18 58 q-18 14 -24 -6 q-6 -34 0 -60 q2 -16 12 -14 z" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="2.2"/>
    <text x="466" y="86" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--coral-100)">pulmão</text>
    <rect x="498" y="120" width="92" height="26" rx="8" fill="var(--info-blue-dim)" stroke="var(--info-blue)" stroke-width="1.4"/>
    <text x="544" y="137" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--info-blue)">TC tórax</text>
  </g>

  <!-- ALVO 3 · PELVE (RM só reto) -->
  <g class="ccr10-target" data-target="pelve" tabindex="0" role="button" aria-pressed="false" aria-label="Pelve: ressonância magnética só para o reto, para planejar a cirurgia.">
    <path d="M520 300 q40 -6 70 16 q18 16 6 40 q-16 28 -54 24 q-34 -4 -38 -34 q-2 -30 16 -46 z" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2" stroke-dasharray="5 4"/>
    <text x="560" y="338" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--warn-amber)">pelve (só reto)</text>
    <text x="560" y="354" text-anchor="middle" font-size="9" fill="var(--ink-70)">RM = planejamento</text>
  </g>

  <text class="ccr10-status" x="380" y="424" text-anchor="middle" font-size="12" fill="var(--ink-70)" aria-live="polite">Fígado: alvo principal da via hematogênica → TC de abdome. Foi onde o Sr. Luiz ficou "pipocado". Toque pulmão e pelve.</text>
</svg>
```
**JS (padrão hotspot exclusivo gast6/`initSvg10`):** `setTarget(key)` com `key ∈ {figado, pulmao, pelve}`. Acende `.ccr10-target[data-target=key]` (`is-on`), atenua os outros, acende `.ccr10-trail[data-trail=key]`, atualiza `.ccr10-status` e `aria-pressed`. Alvo de clique/foco = o `<g>` `.ccr10-target` (o órgão desenhado é o alvo). Default: `figado`. Mensagens:
- figado: "Fígado: principal alvo hematogênico do CCR → TC de abdome. Foi o que ficou 'pipocado' no Sr. Luiz."
- pulmao: "Pulmão: segundo alvo hematogênico → TC de tórax. Por isso o estadiamento a distância é TC tórax + abdome."
- pelve: "Pelve: RM SÓ para o reto — o reto mora num 'balde' (sacro, bexiga/próstata/útero, ureteres). Avalia invasão para planejar a cirurgia, não muda a conduta. Cólon/sigmoide/reto superior não pedem RM de pelve."

---

## P13 — ccr13 · a régua ressecável ↔ irressecável (SLIDER de carga hepática)
**Interação:** régua/balança da metástase hepática. Um fígado central muda de "limpo com nódulo único" (esquerda, verde, **ressecável → cura possível**) a "pipocado, dois lobos tomados" (direita, vermelho, **irressecável → paliação**). Slider de carga (1→5 nódulos/distribuição) move o ponteiro entre os extremos; o ponto de virada (parênquima sadio insuficiente / margem impossível) é marcado. Padrão slider/step (`initSvg6` Bozniak). Default: extremo ressecável (1 nódulo) — ensina que M1 ≠ sempre paliação. Fallback: os dois extremos rotulados, slider parado no meio legível.
**figcaption:** **Curar ou paliar não é "ter metástase" — é quanto fígado sadio sobra.** Arraste a carga: uma metástase única e limitada, com parênquima e margem suficientes, é **ressecável** → intenção curativa (a marca registrada do colorretal). O fígado multinodular difuso — o "pipocado" do Sr. Luiz — é **irressecável** → paliação. O divisor é a extensão, não a simples presença de M1.

```svg
<svg class="il-ccr13" viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-ccr13 d-ccr13" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif" data-eso="ccr13" data-svg="ccr13">
  <title id="t-ccr13">Régua da metástase hepática colorretal: de ressecável e curável a irressecável e paliativa</title>
  <desc id="d-ccr13">Uma régua liga dois extremos com um fígado central que muda conforme a carga de doença. À esquerda, fígado com uma única metástase limitada e parênquima sadio suficiente: ressecável, com intenção curativa, a marca registrada do câncer colorretal. À direita, fígado multinodular difuso, com os dois lobos tomados, o chamado fígado pipocado: irressecável, indicando tratamento paliativo, que foi o desfecho do Sr. Luiz. A figura ensina que o que separa curar de paliar não é ter ou não metástase, e sim quanta doença existe e quanto fígado funcionante sobra.</desc>
  <defs>
    <linearGradient id="ccr13-track" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="var(--ok-green)"/>
      <stop offset="0.5" stop-color="var(--warn-amber)"/>
      <stop offset="1" stop-color="var(--err-red)"/>
    </linearGradient>
  </defs>

  <!-- extremos -->
  <rect x="40" y="40" width="180" height="30" rx="8" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="1.6"/>
  <text x="130" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ok-green)">RESSECÁVEL → cura</text>
  <rect x="540" y="40" width="180" height="30" rx="8" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="1.6"/>
  <text x="630" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="var(--err-red)">IRRESSECÁVEL → paliação</text>

  <!-- fígado central que evolui (estados sobrepostos, JS alterna opacidade) -->
  <g transform="translate(280,120)">
    <!-- contorno do fígado -->
    <path d="M0 60 q40 -56 120 -40 q60 12 78 0 q22 30 -2 64 q-40 50 -130 44 q-58 -4 -66 -52 q-4 -34 0 -60 z" fill="var(--bg-elevated-2)" stroke="var(--ink-50)" stroke-width="2"/>
    <!-- estado RESSECÁVEL: 1 nódulo -->
    <g class="ccr13-state" data-load="res"><circle cx="60" cy="50" r="12" fill="var(--coral-50)" stroke="var(--ok-green)" stroke-width="2.4"/><path d="M44 50 q16 -22 32 0" fill="none" stroke="var(--ok-green)" stroke-width="1.6" stroke-dasharray="3 3"/></g>
    <!-- estado INTERMEDIÁRIO: poucos nódulos -->
    <g class="ccr13-state" data-load="lim" opacity="0"><circle cx="50" cy="44" r="9" fill="var(--coral-50)"/><circle cx="92" cy="58" r="8" fill="var(--coral-50)"/><circle cx="70" cy="74" r="7" fill="var(--coral-50)"/></g>
    <!-- estado PIPOCADO: difuso -->
    <g class="ccr13-state" data-load="pip" opacity="0" fill="var(--err-red)">
      <circle cx="40" cy="42" r="6"/><circle cx="64" cy="36" r="5"/><circle cx="92" cy="44" r="6"/><circle cx="120" cy="40" r="5"/><circle cx="150" cy="50" r="5"/>
      <circle cx="52" cy="64" r="6"/><circle cx="84" cy="62" r="5"/><circle cx="112" cy="66" r="6"/><circle cx="140" cy="72" r="5"/>
      <circle cx="40" cy="86" r="5"/><circle cx="72" cy="88" r="6"/><circle cx="104" cy="86" r="5"/><circle cx="132" cy="92" r="5"/>
    </g>
  </g>

  <!-- trilho do slider visual -->
  <rect x="70" y="280" width="620" height="10" rx="5" fill="url(#ccr13-track)" opacity="0.5"/>
  <line x1="380" y1="272" x2="380" y2="298" stroke="var(--ink-50)" stroke-width="1.6" stroke-dasharray="3 3"/>
  <text x="380" y="262" text-anchor="middle" font-size="9.5" fill="var(--ink-50)">ponto de virada: fígado sadio insuficiente</text>

  <!-- ponteiro -->
  <g class="ccr13-cursor" transform="translate(130,0)">
    <polygon points="0,272 -9,256 9,256" fill="var(--ink-90)"/>
    <line x1="0" y1="272" x2="0" y2="292" stroke="var(--ink-90)" stroke-width="2.4"/>
  </g>

  <text class="ccr13-status" x="380" y="344" text-anchor="middle" font-size="12" fill="var(--ink-70)" aria-live="polite">Metástase única e limitada → ressecável → intenção curativa. É a marca registrada do CCR: M1 não é sempre paliação. Arraste a carga.</text>
</svg>
```
**JS (padrão slider `initSvg6` Bozniak):** controle externo `input[type=range][data-slider="ccr13"]` (min 1, max 5). Mapeia valor → estado: 1→`res` (x130), 2→`res`/`lim` transição, 3→`lim` (x380), 4–5→`pip` (x630). Mostra só o `.ccr13-state` correspondente (opacidade 1, outros 0), move `.ccr13-cursor`, atualiza `.ccr13-status` e `aria-valuetext`:
- 1: "Metástase única e limitada, parênquima e margem suficientes → RESSECÁVEL → intenção curativa. A marca registrada do CCR."
- 2–3: "Doença limitada a moderada: a decisão pesa número, distribuição e fígado funcionante. Ressecável enquanto sobrar fígado sadio com margem."
- 4–5: "Fígado multinodular difuso, dois lobos tomados — o 'pipocado'. IRRESSECÁVEL → paliação. Foi o desfecho do Sr. Luiz."

```html
<div class="rim-ctl" data-slider-ctl="ccr13">
  <label class="rim-ctl__label" for="ccr13-range">Carga hepática</label>
  <input id="ccr13-range" type="range" min="1" max="5" step="1" value="1" data-slider="ccr13" aria-label="Carga de metástase hepática, de única a difusa">
</div>
```

---

## P14 — ccr14 · matriz erro × correto: as 6 armadilhas que a aula desarma (REVEAL por linha, modelo eso12)
**Interação:** matriz de 6 linhas (uma por armadilha da aula), cada uma com a coluna **ERRO** (o que a banca planta) e **CORRETO** (a resposta). Cada linha começa com o ERRO visível e o CORRETO coberto; clicar/focar a linha revela o correto (vira verde) e marca o erro em vermelho — o "antes/depois" do raciocínio. Padrão decision-reveal por cartão (`initSvg11` do rim, quiz-caso). Fallback: ambas as colunas legíveis em base sem JS (revelar é reforço). Idempotente por linha.
**figcaption:** **As seis ciladas da aula, lado a lado.** Toque cada linha para revelar o correto: o bovis não causa o câncer (é marcador); fibra protege; cólon opera, reto baixo faz neoadjuvância com RT; o epônimo é Miles, não Myers; rastreio aos 50 no Brasil; e M1 hepática ressecável pode curar. Errar qualquer uma é o que a banca quer.

```svg
<svg class="il-ccr14" viewBox="0 0 760 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-ccr14 d-ccr14" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif" data-eso="ccr14" data-svg="ccr14">
  <title id="t-ccr14">Matriz das seis armadilhas do câncer colorretal: o erro plantado pela banca e a resposta correta</title>
  <desc id="d-ccr14">Matriz com seis linhas, cada uma confrontando o erro que a banca costuma plantar com a resposta correta. Primeira: o erro é dizer que o Streptococcus bovis causa o câncer; o correto é que ele é apenas marcador, e o câncer é a porta de entrada. Segunda: o erro é tratar dieta rica em fibras como fator de risco; o correto é que a fibra protege. Terceira: o erro é fazer neoadjuvância em todo câncer colorretal; o correto é que o cólon entra operando e só o reto baixo faz neoadjuvância com quimioterapia e radioterapia, sendo o único adenocarcinoma do tubo com radioterapia. Quarta: o erro é chamar a ressecção abdominoperineal de cirurgia de Myers; o correto é cirurgia de Miles. Quinta: o erro é começar o rastreio aos 45 no Brasil; o correto é 50 anos pelo Ministério da Saúde, sendo 45 a referência internacional. Sexta: o erro é dizer que metástase sempre contraindica cirurgia; o correto é que metástase hepática ressecável no colorretal pode ser curada.</desc>

  <!-- cabeçalho -->
  <text x="44" y="34" font-size="12.5" font-weight="700" fill="var(--ink-90)">armadilha</text>
  <rect x="220" y="16" width="240" height="26" rx="8" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="1.4"/>
  <text x="340" y="34" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--err-red)">ERRO (o que a banca planta)</text>
  <rect x="476" y="16" width="240" height="26" rx="8" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="1.4"/>
  <text x="596" y="34" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ok-green)">CORRETO</text>

  <!-- LINHAS (cada g.ccr14-row é o alvo) -->
  <!-- 1 -->
  <g class="ccr14-row" data-row="bovis" tabindex="0" role="button" aria-pressed="false" aria-label="Armadilha do bovis. Erro: a bactéria causa o câncer. Correto: é só marcador. Toque para revelar.">
    <rect class="ccr14-hit" x="40" y="56" width="676" height="62" rx="10" fill="transparent"/>
    <text x="44" y="92" font-size="11.5" font-weight="600" fill="var(--ink-90)">S. bovis</text>
    <rect class="ccr14-wrong" x="220" y="62" width="240" height="50" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.4"/>
    <text x="340" y="92" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">"o bovis causa o câncer"</text>
    <rect class="ccr14-right" x="476" y="62" width="240" height="50" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.4"/>
    <text class="ccr14-right-txt" x="596" y="86" text-anchor="middle" font-size="10.5" fill="var(--ink-90)">é só marcador —</text>
    <text class="ccr14-right-txt" x="596" y="100" text-anchor="middle" font-size="10.5" fill="var(--ink-90)">o câncer é a porta</text>
  </g>
  <!-- 2 -->
  <g class="ccr14-row" data-row="fibra" tabindex="0" role="button" aria-pressed="false" aria-label="Armadilha da fibra. Erro: fibra é risco. Correto: fibra protege. Toque para revelar.">
    <rect class="ccr14-hit" x="40" y="126" width="676" height="62" rx="10" fill="transparent"/>
    <text x="44" y="162" font-size="11.5" font-weight="600" fill="var(--ink-90)">fibra</text>
    <rect class="ccr14-wrong" x="220" y="132" width="240" height="50" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.4"/>
    <text x="340" y="162" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">"dieta rica em fibra = risco"</text>
    <rect class="ccr14-right" x="476" y="132" width="240" height="50" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.4"/>
    <text class="ccr14-right-txt" x="596" y="162" text-anchor="middle" font-size="10.5" fill="var(--ink-90)">a fibra PROTEGE</text>
  </g>
  <!-- 3 -->
  <g class="ccr14-row" data-row="neo" tabindex="0" role="button" aria-pressed="false" aria-label="Armadilha da neoadjuvância. Erro: todo CCR faz neo. Correto: cólon opera; só reto baixo faz neo com RT. Toque para revelar.">
    <rect class="ccr14-hit" x="40" y="196" width="676" height="62" rx="10" fill="transparent"/>
    <text x="44" y="232" font-size="11.5" font-weight="600" fill="var(--ink-90)">neo / RT</text>
    <rect class="ccr14-wrong" x="220" y="202" width="240" height="50" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.4"/>
    <text x="340" y="232" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">"todo CCR faz neoadjuvância"</text>
    <rect class="ccr14-right" x="476" y="202" width="240" height="50" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.4"/>
    <text class="ccr14-right-txt" x="596" y="226" text-anchor="middle" font-size="10.5" fill="var(--ink-90)">cólon opera; só reto baixo</text>
    <text class="ccr14-right-txt" x="596" y="240" text-anchor="middle" font-size="10.5" fill="var(--ink-90)">faz QT+RT (único adeno c/ RT)</text>
  </g>
  <!-- 4 -->
  <g class="ccr14-row" data-row="miles" tabindex="0" role="button" aria-pressed="false" aria-label="Armadilha do epônimo. Erro: cirurgia de Myers. Correto: cirurgia de Miles. Toque para revelar.">
    <rect class="ccr14-hit" x="40" y="266" width="676" height="62" rx="10" fill="transparent"/>
    <text x="44" y="302" font-size="11.5" font-weight="600" fill="var(--ink-90)">RAP</text>
    <rect class="ccr14-wrong" x="220" y="272" width="240" height="50" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.4"/>
    <text x="340" y="302" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">"cirurgia de Myers"</text>
    <rect class="ccr14-right" x="476" y="272" width="240" height="50" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.4"/>
    <text class="ccr14-right-txt" x="596" y="302" text-anchor="middle" font-size="10.5" fill="var(--ink-90)">cirurgia de MILES</text>
  </g>
  <!-- 5 -->
  <g class="ccr14-row" data-row="idade" tabindex="0" role="button" aria-pressed="false" aria-label="Armadilha da idade. Erro: rastreio aos 45 no Brasil. Correto: 50 no Brasil, 45 internacional. Toque para revelar.">
    <rect class="ccr14-hit" x="40" y="336" width="676" height="62" rx="10" fill="transparent"/>
    <text x="44" y="372" font-size="11.5" font-weight="600" fill="var(--ink-90)">rastreio</text>
    <rect class="ccr14-wrong" x="220" y="342" width="240" height="50" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.4"/>
    <text x="340" y="372" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">"começa aos 45 no Brasil"</text>
    <rect class="ccr14-right" x="476" y="342" width="240" height="50" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.4"/>
    <text class="ccr14-right-txt" x="596" y="366" text-anchor="middle" font-size="10.5" fill="var(--ink-90)">50 (Brasil/MS) ·</text>
    <text class="ccr14-right-txt" x="596" y="380" text-anchor="middle" font-size="10.5" fill="var(--ink-90)">45 (internacional)</text>
  </g>
  <!-- 6 -->
  <g class="ccr14-row" data-row="m1" tabindex="0" role="button" aria-pressed="false" aria-label="Armadilha da metástase. Erro: M1 sempre contraindica cirurgia. Correto: M1 hepática ressecável pode curar. Toque para revelar.">
    <rect class="ccr14-hit" x="40" y="406" width="676" height="62" rx="10" fill="transparent"/>
    <text x="44" y="442" font-size="11.5" font-weight="600" fill="var(--ink-90)">M1 hepática</text>
    <rect class="ccr14-wrong" x="220" y="412" width="240" height="50" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.4"/>
    <text x="340" y="442" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">"metástase = sempre paliação"</text>
    <rect class="ccr14-right" x="476" y="412" width="240" height="50" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.4"/>
    <text class="ccr14-right-txt" x="596" y="436" text-anchor="middle" font-size="10.5" fill="var(--ink-90)">se ressecável →</text>
    <text class="ccr14-right-txt" x="596" y="450" text-anchor="middle" font-size="10.5" fill="var(--ink-90)">pode curar (único do tubo)</text>
  </g>

  <text class="ccr14-status" x="380" y="500" text-anchor="middle" font-size="12" fill="var(--ink-70)" aria-live="polite">Seis linhas, seis ciladas. Toque cada uma para fixar o lado correto. Errar qualquer uma é exatamente o que a banca aposta.</text>
</svg>
```
**JS (padrão decision-reveal `initSvg11` do rim):** cada `.ccr14-row` é acionável (click + Enter/Space + foco), idempotente por linha (`dataset.answered`). Ao acionar: pinta `.ccr14-wrong` da linha com `fill=var(--err-red-dim)`/`stroke=var(--err-red)`, pinta `.ccr14-right` com `fill=var(--ok-green-dim)`/`stroke=var(--ok-green)`, e os `.ccr14-right-txt` daquela linha ganham peso/cor de destaque. `aria-pressed=true` na linha. `.ccr14-status` atualiza para reforçar o conceito da linha tocada:
- bovis: "O bovis é MARCADOR, não causa. O câncer (imunossupressão + úlcera) é a porta; o bovis só tem tropismo pelo endocárdio."
- fibra: "Fibra PROTEGE. O risco está em processados, defumados, nitrogenados, tabaco."
- neo: "Cólon entra operando (colectomia é fácil). Só o reto baixo faz neoadjuvância QT+RT — único adeno do tubo com radioterapia."
- miles: "Ressecção abdominoperineal = cirurgia de MILES. 'Myers' é só como soa — pegadinha de grafia."
- idade: "Brasil/MS: rastreio aos 50. Internacional (ACS/USPSTF): 45. Em prova nacional, responda 50."
- m1: "No CCR, metástase hepática RESSECÁVEL pode curar — único do tubo digestivo assim. M1 não é sempre paliação."

---

## CSS de apoio (Executor — adicionar ao CSS da aula-03, escopo `.figure-svg`)
Mesmas regras já usadas em rim/bexiga/gast (tokens, sem hex). Estados:
```css
/* realce / atenuação genéricos dos hotspots e steps */
.figure-svg [class$="-node"], .figure-svg [class$="-target"],
.figure-svg [class$="-factor"], .figure-svg [class$="-via"],
.figure-svg [class$="-mark"], .figure-svg [class$="-edge"],
.figure-svg [class$="-state"], .figure-svg [class$="-row"] { transition: opacity .22s ease; cursor: pointer; }
.figure-svg .is-dim { opacity: .34; }
.figure-svg [class$="-edge"]:not(.is-on) { opacity: .22; }       /* ccr1/ccr2: aresta apagada por padrão */
.figure-svg [class$="-trail"]:not(.is-on) { opacity: .18; }      /* ccr10: trajeto apagado */
.figure-svg [class$="-aura"] { transition: opacity .22s ease; }
.figure-svg [class$="-hit"]:focus-visible { outline: 2px solid var(--teal-60); outline-offset: 2px; border-radius: 8px; }
.figure-svg [tabindex]:focus-visible { outline: 2px solid var(--teal-60); outline-offset: 3px; }
/* ccr4 reveal */
.figure-svg .ccr4-target.is-revealed .ccr4-aura { opacity: 1; }
.figure-svg .ccr4-target.is-revealed .ccr4-hint { opacity: 0; }
/* movimento só quando permitido — ZERO SMIL */
@media (prefers-reduced-motion: no-preference) {
  .figure-svg .ccr1-node.is-on .ccr1-aura { animation: ccr-pulse 2.6s ease-in-out infinite; }
}
@keyframes ccr-pulse { 0%,100% { opacity:.5 } 50% { opacity:.85 } }
```
Em `prefers-reduced-motion: reduce` nenhuma animação roda (não há `@keyframes` fora do `no-preference`), e como não há SMIL, não há nada a pausar via JS.

---

## Notas pro Executor (ancoragem + wiring)

1. **Pontos de inserção** (todos NOVOS — nenhum substitui SVG existente): ver tabela de mapeamento no topo. Resumo:
   - ccr1 → P1 após `.dash__metrics`.
   - ccr2 → P2 após o `.reveal` (a timeline visual reforça os 3 atos do reveal).
   - ccr4 → P4 após o `.toggle-panel` da nomenclatura, antes do `card--info` CESPE.
   - ccr6 → P6 após a tabela `.cmp`, antes do `opener--trap` da fibra.
   - ccr7 → P7 após os painéis BR×intl, antes do `card--info` "Rastreio não é investigação".
   - ccr9 → P9 após o `.toggle-switch` do CEA (a foto real fica acima; o SVG fecha o conceito).
   - ccr10 → P10 após o `card--info` "Estadiamento", ANTES da `figure.med` da TC de fígado.
   - ccr13 → P13 após os painéis ressecável×pipocado, antes do `card--info` "régua".
   - ccr14 → P14 após a tabela da trilogia (`card--accent`), antes do `.op-summary`.
2. **Wiring JS:** a aula-03 usa `assets/js/components/interactive.js` compartilhado (importado em `aula-03.js`). Adicionar os 9 inits (`initCcr1…initCcr14`) seguindo os padrões já existentes do rim citados em cada bloco (`initSvg2` reveal, `initSvg3` hotspot exclusivo, `initSvg4` step, `initSvg5` toggle, `initSvg6` slider, `initSvg10` hotspot por órgão, `initSvg11` decision-reveal). Todos: click + Enter/Space + foco + touch (pointer), idempotentes (`dataset.bound`/`dataset.act`/`dataset.answered`), `aria-pressed`/`aria-live` mantidos. Se preferir isolar, criar `aula-03-interactive.js` espelhando `rim-interactive.js` e referenciar em `aula-03.js` — a estrutura dos SVGs já está pronta para qualquer das duas rotas.
3. **Containers externos** (controles step/slider/toggle de ccr2, ccr7, ccr9, ccr13) vão DENTRO de `.figure-svg__frame`, após o `.figure-svg__stage` — igual p11 já faz com `.toggle-switch`.
4. **Não decorar com card glass extra:** `.figure-svg` já traz frame/moldura da casa; o SVG se sustenta sozinho.
5. **Distinção das aulas 01/02 confirmada:** nenhum dos 9 repete 3-vias / 5-sinais / Krukenberg / Virchow / EDA-bordas. Os conceitos visuais aqui são próprios do CCR (elo bacteriano, timeline do caso, balança de risco, régua de carcinogênese/idade, diagnóstico×seguimento, alvos hematogênicos+mapa de exame, régua de ressecabilidade, matriz de armadilhas).

## Auto-checklist §5 (todos OK, por SVG)
- viewBox ✔ · role="img"+aria-labelledby→title/desc ✔ · title/desc técnicos sem narração-IA ✔ · paleta por token, ZERO hex ✔ · fonte sistema ✔ · sem placeholder/watermark/comentário-IA em produção (os `<!-- -->` deste .md são spec, não vão no DOM) ✔ · contraste ink-90/100 e tokens de destaque contra `--bg-elevated*` ✔ · aspect ratio coerente (4:3 a wide) ✔ · morfologia correta (cocos em cadeia p/ Streptococcus; fígado/pulmão/cólon plausíveis; régua adenoma→carcinoma na ordem) ✔ · cores semânticas (coral=agressão, verde=ressecável/correto, vermelho=irressecável/erro, âmbar=pegadinha/decisão, info-blue=imagem) ✔ · interação com propósito + fallback estático legível ✔ · prefers-reduced-motion respeitado (sem SMIL) ✔
