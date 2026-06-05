# SVGs profundos aula-02 (Câncer Gástrico) — gast1/gast2/gast3/gast4/gast5/gast6/gast7/gast10/gast14
<!-- gast3/4/5/6/7/10/14 = 1ª passada; gast1 (P1) e gast2 (P2) = gap-fill do piso (ver seção "## Gap-fill p1 e p2" no fim do arquivo). -->


> Ilustrador, 2026-06-04. 7 ilustrações reais (figure-svg) de profundidade nível extra-06/07 para elevar a aula-02.
> Cada uma ENSINA SOZINHA (Checagem Bauer), tem interação com propósito, fallback estático legível e respeita prefers-reduced-motion.
> Convenção de paleta (igual rim/bexiga): teal = baseline/conservador/normal · coral = agressão/invasão/patológico · âmbar (--warn-amber) = pegadinha/decisão · verde (--ok-green) = ressecável/favorável · vermelho (--err-red) = irressecável/paliação.
> Naming: `class="il-gastN"`, `data-eso="gastN"` (g + nº da PÁGINA do index.html onde entra). NÃO repete conceito visual da aula-01.
>
> Wrapper de embed (Executor):
> ```html
> <figure class="figure-svg" role="group" aria-labelledby="…cap">
>   <div class="figure-svg__frame"><div class="figure-svg__stage" aria-live="polite">…SVG…</div></div>
>   <figcaption id="…cap">…</figcaption>
> </figure>
> ```
> Os SVGs já trazem `<title>`/`<desc>` + status `aria-live` interno; o `figure-svg__stage[aria-live]` é redundância segura.

## Mapeamento brief → página real do index.html

| key      | conceito do brief                              | página index.html | substitui / complementa                                  |
|----------|------------------------------------------------|--------------------|----------------------------------------------------------|
| `gast3`  | espalha como praga / 3 vias de disseminação    | **P3**             | SUBSTITUI o SVG estático básico das 3 vias (linha 243–280) |
| `gast6`  | sinais à distância → onde está o primário      | **P6**             | SUBSTITUI o mapa estático dos 5 sinais (linha 478–509)    |
| `gast4`  | fatores de risco em dois grupos                | **P4**             | COMPLEMENTA a tabela `.cmp` (inserir antes dela)          |
| `gast5`  | síndrome consumptiva × sintoma localizador     | **P5**             | COMPLEMENTA (inserir após o `.mnemonic`)                  |
| `gast7`  | EDA + biópsia das bordas da lesão              | **P7**             | NOVO (insere onde diz "antes de olhar a imagem da lesão") |
| `gast10` | esôfago × gástrico (o que repete / o que muda) | **P10**            | COMPLEMENTA a tabela `.cmp` (inserir após ela)            |
| `gast14` | carcinomatose = paliação (opera × palia)       | **P14**            | COMPLEMENTA a tabela decisória (inserir após ela)         |

> NOTA: o brief pediu keys gast1/gast2/gast14 etc. pela numeração conceitual; mantive o **número da página real do index.html** no key (gast3=P3, gast6=P6) para o Executor não errar o alvo. Se o Bauer preferir os keys literais do brief (gast1/gast2), é só renomear `data-eso`/classe/IDs — a estrutura não muda.
> P3, P6 e P11 já têm SVG estático simples; gast3 e gast6 abaixo são as versões PROFUNDAS que os substituem. P11 (carcinomatose/VLP) já tem fluxograma decente e NÃO estava nos 7 alvos do brief — deixado como está.

---

## P3 — gast3 · mapa das 3 vias de disseminação (HOTSPOT por via)
**Interação:** hotspot exclusivo por via (padrão `initSvg3` do rim). Clicar/focar a **VIA desenhada** (o trajeto/seta é o alvo, não um número solto) acende os alvos daquela via e o status. Default: transcelômica já acesa (é a assinatura do gástrico, fallback ensina sozinho). Teclado Enter/Space + foco. 3 vias mutuamente exclusivas.
**figcaption:** **A via que entrega o gástrico.** Toque, clique ou foque cada via para ver onde ela deposita a doença. A linfática sobe ao linfonodo; a hematogênica leva a fígado e pulmão; a transcelômica — assinatura do estômago e do ovário — solta células na cavidade que germinam no peritônio, no ovário e no umbigo. É ela que explica a ascite e o implante ovariano do caso.

```svg
<svg class="il-gast3" viewBox="0 0 760 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-gast3 d-gast3" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif" data-eso="gast3" data-svg="gast3">
  <title id="t-gast3">As três vias de disseminação do câncer gástrico</title>
  <desc id="d-gast3">Mapa das três vias pelas quais o câncer gástrico se dissemina, partindo do estômago central. A via linfática conduz ao linfonodo. A via hematogênica conduz ao fígado e ao pulmão. A via transcelômica — característica do estômago e do ovário — desprende células que caem pela cavidade peritoneal e implantam no peritônio, no ovário (tumor de Krukenberg) e até no umbigo, produzindo a ascite e o implante ovariano do caso. A via transcelômica vem destacada por ser a assinatura do tumor.</desc>
  <defs>
    <radialGradient id="gast3-glow" cx="0.5" cy="0.5" r="0.6">
      <stop offset="0" stop-color="var(--warn-amber)" stop-opacity="0.45"/>
      <stop offset="1" stop-color="var(--warn-amber)" stop-opacity="0"/>
    </radialGradient>
    <marker id="gast3-arrowL" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 Z" fill="var(--teal-60)"/></marker>
    <marker id="gast3-arrowH" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 Z" fill="var(--coral-60)"/></marker>
    <marker id="gast3-arrowT" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 Z" fill="var(--warn-amber)"/></marker>
  </defs>

  <!-- estômago central (tumor) -->
  <g>
    <path d="M352 196 q-34 -46 12 -70 q46 -22 70 12 q12 24 4 52 q26 18 16 52 q-12 40 -64 40 q-52 0 -60 -42 q-8 -32 22 -50 z" fill="var(--coral-dim)" stroke="var(--coral-60)" stroke-width="2.6"/>
    <path d="M338 250 q14 -10 28 -2 q12 8 26 0" fill="none" stroke="var(--coral-80)" stroke-width="1.6" opacity="0.7"/>
    <text x="384" y="208" text-anchor="middle" font-size="13" font-weight="700" fill="var(--coral-100)">estômago</text>
    <text x="384" y="225" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">tumor primário</text>
  </g>

  <!-- VIA 1 · LINFÁTICA (hotspot = trajeto largo transparente) -->
  <g class="gast3-via" data-via="linfatica" tabindex="0" role="button" aria-pressed="false" aria-label="Via linfática: dissemina ao linfonodo.">
    <path class="gast3-hit" d="M348 168 C 250 130 200 100 150 84" fill="none" stroke="transparent" stroke-width="22" stroke-linecap="round"/>
    <path class="gast3-track" data-track="linfatica" d="M348 168 C 250 130 200 100 150 84" fill="none" stroke="var(--teal-60)" stroke-width="2.4" stroke-dasharray="3 5" marker-end="url(#gast3-arrowL)"/>
    <circle class="gast3-dest" data-via="linfatica" cx="118" cy="76" r="26" fill="var(--teal-05)" stroke="var(--teal-60)" stroke-width="2.4"/>
    <text x="118" y="80" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--teal-100)">linfonodo</text>
    <text x="118" y="36" text-anchor="middle" font-size="12" font-weight="700" fill="var(--teal-80)">1 · LINFÁTICA</text>
  </g>

  <!-- VIA 2 · HEMATOGÊNICA -->
  <g class="gast3-via" data-via="hematogenica" tabindex="0" role="button" aria-pressed="false" aria-label="Via hematogênica: dissemina a fígado e pulmão.">
    <path class="gast3-hit" d="M350 252 C 250 300 190 330 138 352" fill="none" stroke="transparent" stroke-width="22" stroke-linecap="round"/>
    <path class="gast3-track" data-track="hematogenica" d="M350 252 C 250 300 190 330 138 352" fill="none" stroke="var(--coral-60)" stroke-width="2.4" stroke-dasharray="3 5" marker-end="url(#gast3-arrowH)"/>
    <path class="gast3-dest" data-via="hematogenica" d="M86 338 q22 -20 50 -4 q22 16 8 40 q-18 24 -46 12 q-26 -12 -12 -48 z" fill="var(--coral-dim)" stroke="var(--coral-60)" stroke-width="2.4"/>
    <text x="110" y="362" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--coral-100)">fígado</text>
    <text x="110" y="376" text-anchor="middle" font-size="9.5" fill="var(--ink-70)">/ pulmão</text>
    <text x="110" y="416" text-anchor="middle" font-size="12" font-weight="700" fill="var(--coral-80)">2 · HEMATOGÊNICA</text>
  </g>

  <!-- VIA 3 · TRANSCELÔMICA (default acesa) -->
  <g class="gast3-via is-on" data-via="transcelomica" tabindex="0" role="button" aria-pressed="true" aria-label="Via transcelômica: solta células na cavidade que implantam no peritônio, ovário e umbigo. Assinatura do câncer gástrico.">
    <ellipse cx="600" cy="232" rx="150" ry="150" fill="url(#gast3-glow)" class="gast3-glow"/>
    <path class="gast3-hit" d="M420 216 C 480 200 520 210 560 222" fill="none" stroke="transparent" stroke-width="22" stroke-linecap="round"/>
    <path class="gast3-track" data-track="transcelomica" d="M420 216 C 480 200 520 210 560 222" fill="none" stroke="var(--warn-amber)" stroke-width="2.4" stroke-dasharray="3 5" marker-end="url(#gast3-arrowT)"/>
    <text x="616" y="40" text-anchor="middle" font-size="12" font-weight="700" fill="var(--warn-amber)">3 · TRANSCELÔMICA</text>
    <!-- sementes que caem na cavidade -->
    <g class="gast3-dest gast3-seeds" data-via="transcelomica" fill="var(--coral-60)">
      <circle cx="486" cy="120" r="4"/><circle cx="540" cy="96" r="3.4"/><circle cx="596" cy="128" r="4.2"/>
      <circle cx="652" cy="100" r="3.4"/><circle cx="520" cy="166" r="3.4"/><circle cx="616" cy="170" r="4.2"/>
      <circle cx="680" cy="150" r="3.4"/><circle cx="560" cy="204" r="3.4"/><circle cx="660" cy="226" r="4.2"/>
      <circle cx="500" cy="224" r="3.4"/><circle cx="600" cy="252" r="3.4"/><circle cx="700" cy="200" r="3.6"/>
    </g>
    <!-- alvos transcelômicos -->
    <g class="gast3-dest" data-via="transcelomica">
      <ellipse cx="636" cy="300" rx="30" ry="18" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2.2"/>
      <text x="636" y="304" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--warn-amber)">ovário</text>
      <text x="636" y="332" text-anchor="middle" font-size="9.5" fill="var(--ink-70)">Krukenberg</text>
      <text x="540" y="300" text-anchor="middle" font-size="10.5" fill="var(--ink-80)">peritônio</text>
      <circle cx="492" cy="332" r="6" fill="var(--coral-60)"/>
      <text x="492" y="356" text-anchor="middle" font-size="9.5" fill="var(--ink-70)">umbigo</text>
    </g>
  </g>

  <text class="gast3-status" x="380" y="446" text-anchor="middle" font-size="12" fill="var(--ink-70)" aria-live="polite">Transcelômica: o tumor ulcera e solta células que caem na cavidade — peritônio, ovário, umbigo. É a assinatura do gástrico. Toque as outras vias.</text>
</svg>
```

**JS (estende aula-02-interactive.js):** padrão `initSvg3` do rim — `setVia(key)` acende `.gast3-track[data-track=key]` + `.gast3-dest[data-via=key]`, apaga as outras, atualiza `.gast3-status` e `aria-pressed` dos `.gast3-via`. Alvo de clique = `.gast3-hit` (stroke largo transparente sobre o trajeto). Mensagens de status:
- linfatica: "Linfática → linfonodo. Comum a quase todos os tumores; produz o Virchow (supraclavicular esquerdo)."
- hematogenica: "Hematogênica → fígado (e às vezes pulmão). Órgãos à distância pela corrente sanguínea."
- transcelomica: "Transcelômica → peritônio + ovário (Krukenberg) + umbigo. Assinatura do estômago e do ovário; explica ascite e implante ovariano."

---

## P6 — gast6 · mapa corporal dos 5 sinais de incurabilidade (HOTSPOT por sinal)
**Interação:** hotspot exclusivo por sinal sobre uma silhueta de tronco. O alvo de clique é o **marcador anatômico desenhado** (o ponto sobre o corpo, não o rótulo). Acender um sinal realça seu ponto + linha-guia + cartão de explicação lateral e atualiza o status; demais atenuam. Default: Virchow aceso (o mais cobrado). Verde-teal nos linfáticos esquerdos, âmbar/coral nos transcelômicos. Enter/Space + foco.
**figcaption:** **Tudo cai à esquerda e para baixo.** Toque cada marcador no corpo para ver o sinal e seu mecanismo. Virchow (supraclavicular E) e Irish (axilar E) seguem a drenagem linfática abdominal, que vai para a esquerda. Blumer (fundo de saco), Krukenberg (ovário) e o nódulo da Irmã Maria José (umbigo, pelo ligamento falciforme) seguem a queda de células na cavidade — a via transcelômica.

```svg
<svg class="il-gast6" viewBox="0 0 760 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-gast6 d-gast6" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif" data-eso="gast6" data-svg="gast6">
  <title id="t-gast6">Mapa corporal dos cinco sinais de doença incurável no câncer gástrico</title>
  <desc id="d-gast6">Silhueta de tronco com cinco marcadores dos sinais de incurabilidade do câncer gástrico. Linfonodo de Virchow na fossa supraclavicular esquerda e linfonodo de Irish na axila esquerda seguem a drenagem linfática abdominal, que converge à esquerda. Nódulo da Irmã Maria José no umbigo, prateleira de Blumer no fundo de saco retal e tumor de Krukenberg no ovário seguem a disseminação transcelômica, pela queda de células na cavidade. Cada marcador, ao ser ativado, revela o nome do sinal e o mecanismo. Virchow vem destacado por ser o achado mais cobrado.</desc>
  <defs>
    <linearGradient id="gast6-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="var(--teal-40)" stop-opacity="0.10"/>
      <stop offset="1" stop-color="var(--teal-40)" stop-opacity="0.04"/>
    </linearGradient>
  </defs>

  <!-- silhueta de tronco (cabeça, ombros, abdome, pelve) -->
  <g>
    <path d="M330 28 q40 0 40 34 q0 16 -10 26 q56 14 70 60 q8 26 12 70 l10 110 q4 30 -10 56 q-12 22 -42 22 H300 q-30 0 -42 -22 q-14 -26 -10 -56 l10 -110 q4 -44 12 -70 q14 -46 70 -60 q-10 -10 -10 -26 q0 -34 40 -34 z" fill="url(#gast6-body)" stroke="var(--border-mid)" stroke-width="1.6"/>
    <!-- estômago de referência -->
    <path d="M312 196 q-14 -22 6 -34 q22 -10 34 6 q6 12 2 24 q12 8 8 24 q-6 18 -30 18 q-24 0 -28 -20 q-4 -14 8 -24 z" fill="var(--coral-dim)" stroke="var(--coral-60)" stroke-width="1.8" opacity="0.85"/>
    <text x="334" y="200" text-anchor="middle" font-size="8.5" fill="var(--coral-100)">estômago</text>
    <!-- ligamento falciforme (estômago/cavidade → umbigo) -->
    <path class="gast6-falc" d="M334 230 C 338 270 336 300 336 326" fill="none" stroke="var(--warn-amber)" stroke-width="1.6" stroke-dasharray="2 4" opacity="0.55"/>
    <!-- umbigo -->
    <circle cx="336" cy="328" r="3" fill="var(--ink-60)"/>
  </g>

  <!-- linhas-guia + cartões à direita; markers sobre o corpo são o alvo -->
  <!-- 1 · VIRCHOW (supraclav ESQ = lado direito da imagem) default aceso -->
  <g class="gast6-sign is-on" data-sign="virchow" data-tone="teal" tabindex="0" role="button" aria-pressed="true" aria-label="Virchow: linfonodo supraclavicular esquerdo. Drenagem linfática abdominal. Câncer abdominal ou gástrico.">
    <circle class="gast6-hit" cx="402" cy="96" r="16" fill="transparent"/>
    <circle class="gast6-dot" cx="402" cy="96" r="9" fill="var(--teal-60)"/>
    <line class="gast6-lead" x1="411" y1="96" x2="560" y2="74" stroke="var(--teal-60)" stroke-width="1.4" stroke-dasharray="2 3"/>
    <g class="gast6-card">
      <text x="566" y="70" font-size="12" font-weight="700" fill="var(--teal-80)">1 · Virchow</text>
      <text x="566" y="86" font-size="10" fill="var(--ink-70)">supraclavicular ESQ · linfática</text>
    </g>
  </g>
  <!-- 2 · IRISH (axila ESQ) -->
  <g class="gast6-sign" data-sign="irish" data-tone="teal" tabindex="0" role="button" aria-pressed="false" aria-label="Irish: linfonodo axilar esquerdo. Mesma drenagem linfática abdominal à esquerda.">
    <circle class="gast6-hit" cx="424" cy="158" r="16" fill="transparent"/>
    <circle class="gast6-dot" cx="424" cy="158" r="9" fill="var(--teal-60)"/>
    <line class="gast6-lead" x1="433" y1="158" x2="560" y2="138" stroke="var(--teal-60)" stroke-width="1.4" stroke-dasharray="2 3"/>
    <g class="gast6-card">
      <text x="566" y="134" font-size="12" font-weight="700" fill="var(--teal-80)">2 · Irish</text>
      <text x="566" y="150" font-size="10" fill="var(--ink-70)">axilar ESQ · linfática</text>
    </g>
  </g>
  <!-- 3 · IRMÃ MARIA JOSÉ (umbigo) âmbar = nódulo, não linfonodo -->
  <g class="gast6-sign" data-sign="maria-jose" data-tone="amber" tabindex="0" role="button" aria-pressed="false" aria-label="Nódulo da Irmã Maria José: no umbigo. Não é linfonodo; é tumor pelo ligamento falciforme. Via transcelômica.">
    <circle class="gast6-hit" cx="336" cy="328" r="16" fill="transparent"/>
    <circle class="gast6-dot" cx="336" cy="328" r="9" fill="var(--warn-amber)"/>
    <line class="gast6-lead" x1="320" y1="328" x2="196" y2="328" stroke="var(--warn-amber)" stroke-width="1.4" stroke-dasharray="2 3"/>
    <g class="gast6-card">
      <text x="190" y="324" text-anchor="end" font-size="12" font-weight="700" fill="var(--warn-amber)">3 · Irmã Maria José</text>
      <text x="190" y="340" text-anchor="end" font-size="10" fill="var(--ink-70)">umbigo · NÓDULO (não linfonodo)</text>
    </g>
  </g>
  <!-- 4 · BLUMER (fundo de saco) coral -->
  <g class="gast6-sign" data-sign="blumer" data-tone="coral" tabindex="0" role="button" aria-pressed="false" aria-label="Prateleira de Blumer: massa no fundo de saco retal ao toque. Implantes transcelômicos no ponto mais baixo.">
    <circle class="gast6-hit" cx="336" cy="398" r="16" fill="transparent"/>
    <circle class="gast6-dot" cx="336" cy="398" r="9" fill="var(--coral-60)"/>
    <line class="gast6-lead" x1="320" y1="398" x2="196" y2="398" stroke="var(--coral-60)" stroke-width="1.4" stroke-dasharray="2 3"/>
    <g class="gast6-card">
      <text x="190" y="394" text-anchor="end" font-size="12" font-weight="700" fill="var(--coral-80)">4 · Blumer</text>
      <text x="190" y="410" text-anchor="end" font-size="10" fill="var(--ink-70)">fundo de saco · toque retal</text>
    </g>
  </g>
  <!-- 5 · KRUKENBERG (ovário) âmbar -->
  <g class="gast6-sign" data-sign="krukenberg" data-tone="amber" tabindex="0" role="button" aria-pressed="false" aria-label="Tumor de Krukenberg: metástase ovariana transcelômica. É o implante ovariano do caso.">
    <ellipse class="gast6-hit" cx="306" cy="372" rx="18" ry="12" fill="transparent"/>
    <ellipse class="gast6-dot gast6-dot--ov" cx="306" cy="372" rx="12" ry="8" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2"/>
    <line class="gast6-lead" x1="288" y1="372" x2="196" y2="364" stroke="var(--warn-amber)" stroke-width="1.4" stroke-dasharray="2 3"/>
    <g class="gast6-card">
      <text x="190" y="360" text-anchor="end" font-size="12" font-weight="700" fill="var(--warn-amber)">5 · Krukenberg</text>
      <text x="190" y="376" text-anchor="end" font-size="10" fill="var(--ink-70)">ovário · transcelômica</text>
    </g>
  </g>

  <!-- legenda de eixo semântico -->
  <g opacity="0.85">
    <rect x="566" y="402" width="14" height="14" rx="3" fill="var(--teal-60)"/>
    <text x="586" y="413" font-size="9.5" fill="var(--ink-70)">linfática (esquerda)</text>
    <rect x="566" y="422" width="14" height="14" rx="3" fill="var(--warn-amber)"/>
    <text x="586" y="433" font-size="9.5" fill="var(--ink-70)">transcelômica (cai/sobe)</text>
  </g>

  <text class="gast6-status" x="380" y="458" text-anchor="middle" font-size="12" fill="var(--ink-70)" aria-live="polite">Virchow: supraclavicular ESQUERDO. Nenhuma doença benigna aumenta esse linfonodo — aumentado, é câncer abdominal/gástrico. Toque os outros marcadores.</text>
</svg>
```

**JS (padrão `initSvg10`/hotspot exclusivo):** `setSign(key)` — acende `.gast6-sign[data-sign=key]` (classe `is-on` realça `.gast6-dot`, `.gast6-lead`, `.gast6-card`), atenua as outras, atualiza `aria-pressed` e `.gast6-status`. Alvo de clique/foco = `.gast6-hit`. Mensagens:
- virchow: "Virchow — supraclavicular ESQUERDO. Drenagem abdominal vai para a esquerda. À direita = pulmão. Aumentado = câncer."
- irish: "Irish — axilar ESQUERDO. Mesma lógica da drenagem linfática abdominal à esquerda."
- maria-jose: "Irmã Maria José — NÓDULO no umbigo, não linfonodo (não há cadeia no umbigo). Tumor sobe pelo ligamento falciforme. Transcelômica."
- blumer: "Prateleira de Blumer — fundo de saco retal ao toque. Células caem no ponto mais baixo da cavidade. A paciente recusou o toque."
- krukenberg: "Krukenberg — metástase ovariana transcelômica. É o implante ovariano do caso."
CSS: `.gast6-sign:not(.is-on) .gast6-lead, .gast6-sign:not(.is-on) .gast6-card { opacity: .32 }`; `.gast6-sign.is-on .gast6-dot { filter: drop-shadow(0 0 9px var(--teal-glow)) }` por `data-tone` (teal/amber/coral glow como no rim SVG-6).

---

## P4 — gast4 · dois grupos de fatores de risco (TOGGLE de coluna + pegadinha das fibras)
**Interação:** segmented control "Hábitos | H. pylori | Pegadinha" (HTML, fora do SVG, padrão `.rim-toggle`). Selecionar foca uma coluna (atenua `.is-dim` as outras). A coluna "Pegadinha" acende o chip **fibras** em âmbar com o X de "NÃO é risco — é protetora". Default: ambas as colunas de risco visíveis + fibra já marcada como pegadinha (fallback ensina sozinho). Setas ←→ navegam.
**figcaption:** **Dois blocos, uma armadilha.** Os fatores de risco do câncer gástrico se organizam em hábitos (nitrogenados, conservantes, defumados, tabaco, álcool) e *H. pylori* (e suas complicações). Alterne as colunas — e veja por que "dieta rica em fibras" é a pegadinha clássica: fibra é protetora, nunca fator de risco.

```svg
<svg class="il-gast4" viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-gast4 d-gast4" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif" data-eso="gast4" data-svg="gast4">
  <title id="t-gast4">Os dois grupos de fatores de risco do câncer gástrico e a pegadinha das fibras</title>
  <desc id="d-gast4">Painel em duas colunas de fatores de risco do câncer gástrico. Coluna de hábitos: dieta com nitrogenados, conservantes e defumados, tabagismo e etilismo. Coluna do Helicobacter pylori: infecção crônica e suas complicações, como gastrite atrófica e gastrectomia prévia por doença ulcerosa péptica. Abaixo, um chip destacado em âmbar mostra a pegadinha: dieta rica em fibras não é fator de risco, é protetora. O Helicobacter pylori é risco do estômago, não do esôfago.</desc>
  <defs>
    <linearGradient id="gast4-hab" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--coral-50)" stop-opacity="0.16"/><stop offset="1" stop-color="var(--coral-50)" stop-opacity="0.05"/></linearGradient>
    <linearGradient id="gast4-hp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--coral-50)" stop-opacity="0.16"/><stop offset="1" stop-color="var(--coral-50)" stop-opacity="0.05"/></linearGradient>
  </defs>

  <!-- COLUNA 1 · HÁBITOS -->
  <g class="gast4-col" data-col="habitos">
    <rect x="22" y="20" width="346" height="234" rx="14" fill="url(#gast4-hab)" stroke="var(--coral-50)" stroke-width="2"/>
    <text x="44" y="50" font-size="14" font-weight="700" fill="var(--coral-100)">Hábitos do paciente</text>
    <text x="44" y="68" font-size="10.5" fill="var(--ink-70)">o que o paciente faz / come</text>
    <g class="gast4-item"><rect x="44" y="84" width="302" height="34" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)"/><text x="60" y="105" font-size="11.5" fill="var(--ink-90)">Nitrogenados · conservantes · defumados</text></g>
    <g class="gast4-item"><rect x="44" y="124" width="302" height="34" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)"/><text x="60" y="145" font-size="11.5" fill="var(--ink-90)">Industrializados / em conserva</text></g>
    <g class="gast4-item"><rect x="44" y="164" width="146" height="34" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)"/><text x="60" y="185" font-size="11.5" fill="var(--ink-90)">Tabagismo</text></g>
    <g class="gast4-item"><rect x="200" y="164" width="146" height="34" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)"/><text x="216" y="185" font-size="11.5" fill="var(--ink-90)">Etilismo</text></g>
    <text x="44" y="226" font-size="10" font-style="italic" fill="var(--ink-60)">"Defumado é muito ruim." Tabaco = risco de quase todo câncer.</text>
  </g>

  <!-- COLUNA 2 · H. PYLORI -->
  <g class="gast4-col" data-col="hpylori">
    <rect x="392" y="20" width="346" height="234" rx="14" fill="url(#gast4-hp)" stroke="var(--coral-50)" stroke-width="2"/>
    <text x="414" y="50" font-size="14" font-weight="700" fill="var(--coral-100)">H. pylori</text>
    <text x="414" y="68" font-size="10.5" fill="var(--ink-70)">infecção crônica + complicações</text>
    <!-- bactéria espiralada -->
    <path d="M430 96 q12 -10 24 0 q12 10 24 0 q12 -10 24 0" fill="none" stroke="var(--coral-80)" stroke-width="2.4" stroke-linecap="round"/>
    <g stroke="var(--coral-80)" stroke-width="1.6" stroke-linecap="round"><line x1="430" y1="96" x2="424" y2="88"/><line x1="526" y1="96" x2="532" y2="104"/></g>
    <g class="gast4-item"><rect x="414" y="120" width="302" height="34" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)"/><text x="430" y="141" font-size="11.5" fill="var(--ink-90)">Gastrite atrófica (complicação)</text></g>
    <g class="gast4-item"><rect x="414" y="160" width="302" height="34" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)"/><text x="430" y="181" font-size="11.5" fill="var(--ink-90)">Gastrectomia prévia por DUP</text></g>
    <text x="414" y="222" font-size="10" font-style="italic" fill="var(--ink-60)">Para a prova: H. pylori = risco do ESTÔMAGO (não do esôfago).</text>
  </g>

  <!-- FAIXA PEGADINHA -->
  <g class="gast4-col" data-col="pegadinha">
    <rect x="22" y="270" width="716" height="72" rx="14" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2"/>
    <g transform="translate(48,306)">
      <circle r="18" fill="none" stroke="var(--warn-amber)" stroke-width="2.4"/>
      <path d="M-7 -7 L7 7 M7 -7 L-7 7" stroke="var(--warn-amber)" stroke-width="2.6" stroke-linecap="round"/>
    </g>
    <text x="86" y="300" font-size="13" font-weight="700" fill="var(--warn-amber)">Pegadinha: "dieta rica em fibras"</text>
    <text x="86" y="320" font-size="11" fill="var(--ink-90)">A banca troca conservantes por fibras esperando você marcar como risco.</text>
    <text x="86" y="336" font-size="11" font-weight="600" fill="var(--ink-100)">Fibra é PROTETORA — nunca é fator de risco.</text>
  </g>

  <text class="gast4-status" x="380" y="356" text-anchor="middle" font-size="11.5" fill="var(--ink-70)" aria-live="polite" opacity="0"></text>
</svg>
```

**JS (padrão `initSvg5` toggle/segmented):** controle externo `.rim-toggle` com 3 botões `data-key="habitos|hpylori|pegadinha"`. `select(key)` aplica `.is-dim` aos `.gast4-col` cujo `data-col` ≠ key (e remove a opacidade no default sem seleção). Atualiza `.gast4-status` (que aparece ao selecionar). Setas ←→/↑↓ navegam botões. Default = nenhum dim (todas visíveis = fallback estático). Mensagens:
- habitos: "Hábitos: nitrogenados, conservantes, defumados, tabaco, álcool."
- hpylori: "H. pylori é risco do estômago (gastrite atrófica, complicações) — não do esôfago."
- pegadinha: "Fibra é protetora. 'Dieta rica em fibras' como risco é a armadilha clássica."
CSS: reusa `[data-state].is-dim { opacity:.32 }` → trocar seletor para `.gast4-col.is-dim`.

---

## P5 — gast5 · as duas camadas da clínica (TOGGLE camada genérica × localizadora)
**Interação:** segmented control "Camada 1 · consumptiva | Camada 2 · localizador" (HTML externo). Camada 1 mostra os sinais genéricos (some no meio de muitos diagnósticos, teal-baseline). Camada 2 acende a dispepsia (o que mira o estômago, coral) + a comparação com a disfagia do esôfago + os 4 sinais de alarme. Default: ambas visíveis. A fórmula "dispepsia + perda de peso → estômago" fica sempre acesa no rodapé.
**figcaption:** **Duas camadas que pensam diferente.** A camada genérica — síndrome consumptiva — aparece em mil doenças e não localiza nada. A camada localizadora é a *dispepsia* (queimação epigástrica, sem regurgitação), o equivalente gástrico da disfagia do esôfago. Alterne para ver o que cada camada acrescenta — e os sinais de alarme que disparam a endoscopia.

```svg
<svg class="il-gast5" viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-gast5 d-gast5" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif" data-eso="gast5" data-svg="gast5">
  <title id="t-gast5">As duas camadas da clínica do câncer gástrico</title>
  <desc id="d-gast5">Esquema das duas camadas clínicas do câncer gástrico. A primeira camada é genérica, a síndrome consumptiva — perda de peso, anorexia e fraqueza — que aparece em muitos diagnósticos e não localiza. A segunda camada é o sintoma localizador, a dispepsia, uma queimação epigástrica sem regurgitação, equivalente gástrico da disfagia do esôfago. Quatro sinais de alarme — hemorragia digestiva, anemia, disfagia e idade avançada com dispepsia nova — indicam endoscopia. A fórmula central é dispepsia mais perda de peso aponta câncer de estômago.</desc>
  <defs>
    <linearGradient id="gast5-l1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--teal-40)" stop-opacity="0.14"/><stop offset="1" stop-color="var(--teal-40)" stop-opacity="0.05"/></linearGradient>
    <linearGradient id="gast5-l2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--coral-50)" stop-opacity="0.18"/><stop offset="1" stop-color="var(--coral-50)" stop-opacity="0.06"/></linearGradient>
  </defs>

  <!-- CAMADA 1 · consumptiva (genérica) -->
  <g class="gast5-layer" data-layer="consumptiva">
    <rect x="22" y="20" width="346" height="208" rx="14" fill="url(#gast5-l1)" stroke="var(--teal-40)" stroke-width="2"/>
    <text x="44" y="48" font-size="13" font-weight="700" fill="var(--teal-80)">Camada 1 · genérica</text>
    <text x="44" y="66" font-size="10.5" fill="var(--ink-70)">síndrome consumptiva — não localiza</text>
    <g class="gast5-item"><rect x="44" y="82" width="302" height="30" rx="8" fill="var(--bg-elevated-2)" stroke="var(--border-mid)"/><text x="58" y="101" font-size="11.5" fill="var(--ink-90)">Perda de peso · emagrecimento</text></g>
    <g class="gast5-item"><rect x="44" y="118" width="302" height="30" rx="8" fill="var(--bg-elevated-2)" stroke="var(--border-mid)"/><text x="58" y="137" font-size="11.5" fill="var(--ink-90)">Anorexia · saciedade precoce</text></g>
    <g class="gast5-item"><rect x="44" y="154" width="302" height="30" rx="8" fill="var(--bg-elevated-2)" stroke="var(--border-mid)"/><text x="58" y="173" font-size="11.5" fill="var(--ink-90)">Fadiga · fraqueza</text></g>
    <text x="44" y="208" font-size="10" font-style="italic" fill="var(--ink-60)">Aparece em mil doenças. Sozinha, não aponta o estômago.</text>
  </g>

  <!-- CAMADA 2 · localizadora (dispepsia) -->
  <g class="gast5-layer" data-layer="localizador">
    <rect x="392" y="20" width="346" height="208" rx="14" fill="url(#gast5-l2)" stroke="var(--coral-50)" stroke-width="2"/>
    <text x="414" y="48" font-size="13" font-weight="700" fill="var(--coral-100)">Camada 2 · localizadora</text>
    <text x="414" y="66" font-size="10.5" fill="var(--ink-70)">o que mira o estômago</text>
    <g class="gast5-item gast5-key"><rect x="414" y="82" width="302" height="40" rx="9" fill="var(--coral-dim)" stroke="var(--coral-60)" stroke-width="2"/><text x="430" y="100" font-size="12" font-weight="700" fill="var(--coral-100)">Dispepsia</text><text x="430" y="116" font-size="10" fill="var(--ink-80)">queimação epigástrica · SEM regurgitação</text></g>
    <text x="414" y="146" font-size="10.5" fill="var(--ink-70)">paralelo com a Aula 1:</text>
    <g class="gast5-item"><rect x="414" y="154" width="146" height="30" rx="8" fill="var(--bg-elevated-2)" stroke="var(--teal-40)"/><text x="430" y="173" font-size="10.5" fill="var(--ink-80)">esôfago = disfagia</text></g>
    <g class="gast5-item"><rect x="570" y="154" width="146" height="30" rx="8" fill="var(--bg-elevated-2)" stroke="var(--coral-50)"/><text x="586" y="173" font-size="10.5" fill="var(--ink-80)">estômago = dispepsia</text></g>
    <text x="414" y="208" font-size="10" font-style="italic" fill="var(--ink-60)">Sem regurgitação — é o que separa do refluxo.</text>
  </g>

  <!-- SINAIS DE ALARME (faixa que pertence à camada 2) -->
  <g class="gast5-alarm" data-layer="localizador">
    <rect x="22" y="244" width="716" height="56" rx="12" fill="var(--bg-elevated)" stroke="var(--warn-amber)" stroke-width="1.6"/>
    <text x="44" y="268" font-size="11.5" font-weight="700" fill="var(--warn-amber)">Sinais de alarme → endoscopia:</text>
    <g font-size="10.5" fill="var(--ink-90)">
      <text x="44" y="288">• hemorragia digestiva</text>
      <text x="216" y="288">• anemia</text>
      <text x="330" y="288">• disfagia</text>
      <text x="452" y="288">• idade avançada + dispepsia nova</text>
    </g>
  </g>

  <!-- FÓRMULA central (sempre acesa) -->
  <g>
    <rect x="180" y="318" width="400" height="44" rx="12" fill="var(--coral-dim)" stroke="var(--coral-60)" stroke-width="2"/>
    <text x="380" y="345" text-anchor="middle" font-size="13" font-weight="700" fill="var(--coral-100)">Dispepsia + perda de peso → câncer de estômago</text>
  </g>

  <text class="gast5-status" x="380" y="378" text-anchor="middle" font-size="11" fill="var(--ink-70)" aria-live="polite" opacity="0"></text>
</svg>
```

**JS (padrão `initSvg5` toggle):** controle externo `.rim-toggle` com 2 botões `data-key="consumptiva|localizador"`. `select(key)` aplica `.is-dim` a `.gast5-layer`/`.gast5-alarm` cujo `data-layer` ≠ key. Default = ambas visíveis. A fórmula central nunca atenua. Mensagens de status:
- consumptiva: "Camada genérica: consome o paciente, mas aparece em mil doenças — não localiza."
- localizador: "Camada localizadora: dispepsia (sem regurgitação) mira o estômago; sinais de alarme disparam a EDA."
CSS: `.gast5-layer.is-dim, .gast5-alarm.is-dim { opacity:.32 }`.

---

## P7 — gast7 · EDA com biópsia das BORDAS da lesão (step-through da técnica)
**Interação:** step-through 1→4 (padrão `initSvg4` com step-ctl externo). Avança a sequência da EDA: (1) endoscópio desce ao estômago; (2) localiza a lesão de mucosa; (3) **pinça biopsia as BORDAS** da lesão — não o centro necrótico (o ponto pedagógico que diferencia da EDA da aula-01); (4) fragmentos → histopatológico = adenocarcinoma. Cada passo acende um nó/legenda e narra no status. Fallback: cena completa legível (endoscópio + lesão + setas de borda + frasco).
**figcaption:** **Onde a pinça morde importa.** Avance os passos: o endoscópio desce, encontra a lesão de mucosa e a pinça biopsia as *bordas* — não o centro necrótico, que pode vir só com tecido morto e dar falso-negativo. Os fragmentos viram histopatológico, quase sempre adenocarcinoma.

```svg
<svg class="il-gast7" viewBox="0 0 760 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-gast7 d-gast7" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif" data-eso="gast7" data-svg="gast7">
  <title id="t-gast7">Endoscopia digestiva alta com biópsia das bordas da lesão gástrica</title>
  <desc id="d-gast7">Sequência da endoscopia digestiva alta no câncer gástrico. O endoscópio desce pelo esôfago até o estômago, localiza uma lesão de mucosa e a pinça de biópsia coleta fragmentos das bordas da lesão, e não do centro necrótico, que poderia conter apenas tecido morto e gerar resultado falso-negativo. Os fragmentos seguem para o histopatológico, que confirma adenocarcinoma. A coleta das bordas é o detalhe técnico destacado.</desc>
  <defs>
    <linearGradient id="gast7-stom" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--teal-40)" stop-opacity="0.10"/><stop offset="1" stop-color="var(--teal-40)" stop-opacity="0.04"/></linearGradient>
    <radialGradient id="gast7-lesion" cx="0.5" cy="0.5" r="0.6"><stop offset="0" stop-color="var(--coral-60)" stop-opacity="0.55"/><stop offset="0.6" stop-color="var(--coral-50)" stop-opacity="0.30"/><stop offset="1" stop-color="var(--coral-50)" stop-opacity="0.10"/></radialGradient>
    <marker id="gast7-bite" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 Z" fill="var(--ok-green)"/></marker>
  </defs>

  <!-- estômago em corte -->
  <path class="gast7-node" data-step="1" d="M250 70 C 250 60 300 56 300 90 C 300 150 360 150 400 160 C 470 178 510 230 500 300 C 492 356 440 388 372 386 C 300 384 256 344 252 286 C 248 230 270 190 268 150 C 266 120 252 110 250 90 Z" fill="url(#gast7-stom)" stroke="var(--teal-60)" stroke-width="2.2"/>
  <text x="430" y="250" font-size="11" fill="var(--teal-100)">estômago</text>

  <!-- endoscópio (desce pelo esôfago) — passo 1 -->
  <g class="gast7-node" data-step="1">
    <path d="M275 0 C 275 60 285 100 320 130 C 348 154 372 176 388 210" fill="none" stroke="var(--ink-60)" stroke-width="9" stroke-linecap="round"/>
    <path d="M275 0 C 275 60 285 100 320 130 C 348 154 372 176 388 210" fill="none" stroke="var(--ink-80)" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="388" cy="210" r="7" fill="var(--ink-90)" stroke="var(--ink-50)" stroke-width="1.5"/>
    <text x="150" y="40" font-size="11" font-weight="700" fill="var(--ink-90)">endoscópio</text>
    <line x1="200" y1="36" x2="278" y2="50" stroke="var(--ink-60)" stroke-width="1.2" stroke-dasharray="2 3"/>
  </g>

  <!-- lesão de mucosa — passo 2 -->
  <g class="gast7-node" data-step="2">
    <ellipse cx="392" cy="288" rx="56" ry="36" fill="url(#gast7-lesion)" stroke="var(--coral-60)" stroke-width="2.2"/>
    <ellipse cx="392" cy="288" rx="22" ry="14" fill="var(--ink-80)" opacity="0.55"/>
    <text x="392" y="292" text-anchor="middle" font-size="8.5" fill="var(--ink-30)">centro necrótico</text>
    <text x="392" y="244" text-anchor="middle" font-size="11" font-weight="700" fill="var(--coral-100)">lesão de mucosa</text>
  </g>

  <!-- pinça biopsia as BORDAS — passo 3 -->
  <g class="gast7-node" data-step="3">
    <!-- pinça aberta tocando a borda -->
    <path d="M388 217 L352 258" stroke="var(--ink-80)" stroke-width="3" stroke-linecap="round"/>
    <path d="M352 258 l-8 -3 M352 258 l-1 -9" stroke="var(--ok-green)" stroke-width="3" stroke-linecap="round"/>
    <!-- setas para 4 bordas (verde = certo) -->
    <g stroke="var(--ok-green)" stroke-width="2.2" fill="none" stroke-linecap="round">
      <path d="M348 270 L342 262" marker-end="url(#gast7-bite)"/>
      <path d="M436 274 L444 266" marker-end="url(#gast7-bite)"/>
      <path d="M352 308 L344 316" marker-end="url(#gast7-bite)"/>
      <path d="M432 308 L440 316" marker-end="url(#gast7-bite)"/>
    </g>
    <text x="560" y="280" font-size="12" font-weight="700" fill="var(--ok-green)">biópsia das BORDAS</text>
    <text x="560" y="298" font-size="10" fill="var(--ink-70)">tecido viável → diagnóstico</text>
    <text x="560" y="320" font-size="10" fill="var(--err-red)">✗ centro = necrose / falso-neg.</text>
  </g>

  <!-- histopatológico — passo 4 -->
  <g class="gast7-node" data-step="4">
    <rect x="586" y="40" width="150" height="120" rx="12" fill="var(--bg-elevated)" stroke="var(--ok-green)" stroke-width="2"/>
    <!-- frasco -->
    <path d="M636 64 h28 v12 l10 30 v34 q0 8 -8 8 h-32 q-8 0 -8 -8 v-34 l10 -30 z" fill="var(--coral-dim)" stroke="var(--coral-60)" stroke-width="1.8"/>
    <text x="661" y="158" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ok-green)">histopatológico</text>
    <text x="661" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink-90)">adenocarcinoma</text>
  </g>
  <line class="gast7-node" data-step="4" x1="586" y1="120" x2="470" y2="270" stroke="var(--ok-green)" stroke-width="1.6" stroke-dasharray="2 4"/>

  <text class="gast7-status" x="380" y="408" text-anchor="middle" font-size="12" fill="var(--ink-70)" aria-live="polite">Passo 1 de 4 — o endoscópio desce pelo esôfago até o estômago. Avance os passos.</text>
</svg>
```

**JS (padrão `initSvg4` step-through):** step-ctl externo `[data-step-ctl="gast7"]` com prev/next. `cur` 1→4; nós `.gast7-node` com `data-step` ficam `is-on` se `data-step<=cur`. `aria-live` no `.gast7-status`. Micro-passos:
1. "O endoscópio desce pelo esôfago até o estômago — víscera oca, acessível e biopsiável."
2. "Localiza a lesão de mucosa; o centro pode estar necrótico."
3. "A pinça morde as BORDAS da lesão (verde) — o centro necrótico daria falso-negativo."
4. "Fragmentos das bordas → histopatológico = adenocarcinoma. Diagnóstico fechado."
CSS: reusa `.stf-node`→`.gast7-node { opacity:.28; transition: opacity }` / `.gast7-node.is-on { opacity:1 }`. (Diferente da aula-01: lá o eso5 era "portões da biópsia" genérico; aqui o foco é a **mordida nas bordas vs centro necrótico**, conceito novo.)

---

## P10 — gast10 · esôfago × gástrico (MATRIZ interativa: o que repete / o que muda)
**Interação:** matriz 4 linhas × 2 colunas (esôfago | estômago) clicável por LINHA (padrão `initSvg1` tabela genética). Clicar uma linha realça e mostra no rodapé se aquele item se REPETE (verde-teal: USE) ou MUDA (coral: peritônio, exame do avançado, TC só abdome). Verde = igual à aula 1; coral = diferença. Default: linha "Melhor exame do T" acesa em verde (o que repete) + linha "TC" acesa em coral (a pegadinha "TC de tórax").
**figcaption:** **O que herda do esôfago e o que vira novo.** Clique cada linha: a USE continua sendo o melhor exame do T (verde — igual à Aula 1). O que muda é o avançado — no estômago a obsessão é o peritônio, não a aorta — e a imagem: TC só de abdome, sem TC de tórax (coral — as diferenças que a banca cobra).

```svg
<svg class="il-gast10" viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-gast10 d-gast10" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif" data-eso="gast10" data-svg="gast10">
  <title id="t-gast10">Estadiamento esôfago versus estômago: o que se repete e o que muda</title>
  <desc id="d-gast10">Matriz comparando o estadiamento do esôfago e do estômago em quatro linhas. Linha do melhor exame do T: ecoendoscopia nos dois, item que se repete. Linha da maior preocupação no avançado: invadir aorta ou brônquio no esôfago, ter ido para o peritônio pela via transcelômica no estômago, item que muda. Linha do exame do avançado: tomografia mais broncoscopia no esôfago, avaliação do peritônio no estômago, item que muda. Linha da tomografia: tórax e abdome no esôfago, só abdome no estômago, sem tomografia de tórax, item que muda. Os itens que repetem ficam em verde-teal; os que mudam, em coral.</desc>
  <defs>
    <linearGradient id="gast10-hd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--bg-elevated)" stop-opacity="1"/><stop offset="1" stop-color="var(--bg-elevated-2)" stop-opacity="1"/></linearGradient>
  </defs>

  <!-- cabeçalho -->
  <g>
    <rect x="20" y="20" width="220" height="44" rx="9" fill="url(#gast10-hd)" stroke="var(--border-mid)"/>
    <text x="36" y="47" font-size="11.5" font-weight="700" fill="var(--ink-80)">Item de estadiamento</text>
    <rect x="248" y="20" width="240" height="44" rx="9" fill="url(#gast10-hd)" stroke="var(--teal-40)"/>
    <text x="368" y="47" text-anchor="middle" font-size="12" font-weight="700" fill="var(--teal-80)">Esôfago (Aula 1)</text>
    <rect x="496" y="20" width="244" height="44" rx="9" fill="url(#gast10-hd)" stroke="var(--coral-50)"/>
    <text x="618" y="47" text-anchor="middle" font-size="12" font-weight="700" fill="var(--coral-100)">Estômago</text>
  </g>

  <!-- LINHA 1 · Melhor exame do T (REPETE → verde) default aceso -->
  <g class="gast10-row is-active" data-row="t" data-kind="repete" tabindex="0" role="button" aria-pressed="true" aria-label="Melhor exame do T: ecoendoscopia nos dois. Item que se repete do esôfago.">
    <rect class="gast10-bg" x="20" y="72" width="720" height="48" rx="9" fill="var(--ok-green)" opacity="0"/>
    <rect x="20" y="72" width="220" height="48" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)"/>
    <text x="36" y="101" font-size="11.5" font-weight="600" fill="var(--ink-90)">Melhor exame do T</text>
    <rect x="248" y="72" width="240" height="48" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)"/>
    <text x="368" y="101" text-anchor="middle" font-size="11" fill="var(--ink-90)">USE (ecoendoscopia)</text>
    <rect x="496" y="72" width="244" height="48" rx="9" fill="var(--ok-green-dim)" stroke="var(--ok-green)"/>
    <text x="618" y="101" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink-100)">USE — igual ✓</text>
  </g>

  <!-- LINHA 2 · Preocupação no avançado (MUDA → coral) -->
  <g class="gast10-row" data-row="avancado" data-kind="muda" tabindex="0" role="button" aria-pressed="false" aria-label="Maior preocupação no avançado: aorta ou brônquio no esôfago, peritônio no estômago. Item que muda.">
    <rect class="gast10-bg" x="20" y="128" width="720" height="48" rx="9" fill="var(--coral-60)" opacity="0"/>
    <rect x="20" y="128" width="220" height="48" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)"/>
    <text x="36" y="157" font-size="11.5" font-weight="600" fill="var(--ink-90)">Preocupação no avançado</text>
    <rect x="248" y="128" width="240" height="48" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)"/>
    <text x="368" y="157" text-anchor="middle" font-size="11" fill="var(--ink-90)">invadir aorta / brônquio</text>
    <rect x="496" y="128" width="244" height="48" rx="9" fill="var(--coral-dim)" stroke="var(--coral-60)"/>
    <text x="618" y="157" text-anchor="middle" font-size="11" font-weight="600" fill="var(--coral-100)">peritônio (transcelômica)</text>
  </g>

  <!-- LINHA 3 · Exame do avançado (MUDA → coral) -->
  <g class="gast10-row" data-row="exame" data-kind="muda" tabindex="0" role="button" aria-pressed="false" aria-label="Exame do avançado: tomografia e broncoscopia no esôfago, avaliação do peritônio no estômago. Item que muda.">
    <rect class="gast10-bg" x="20" y="184" width="720" height="48" rx="9" fill="var(--coral-60)" opacity="0"/>
    <rect x="20" y="184" width="220" height="48" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)"/>
    <text x="36" y="213" font-size="11.5" font-weight="600" fill="var(--ink-90)">Exame do avançado</text>
    <rect x="248" y="184" width="240" height="48" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)"/>
    <text x="368" y="213" text-anchor="middle" font-size="11" fill="var(--ink-90)">TC + broncoscopia</text>
    <rect x="496" y="184" width="244" height="48" rx="9" fill="var(--coral-dim)" stroke="var(--coral-60)"/>
    <text x="618" y="213" text-anchor="middle" font-size="11" font-weight="600" fill="var(--coral-100)">avaliar o peritônio (VLP)</text>
  </g>

  <!-- LINHA 4 · TC (MUDA → coral) default aceso = pegadinha -->
  <g class="gast10-row is-active" data-row="tc" data-kind="muda" tabindex="0" role="button" aria-pressed="true" aria-label="Tomografia: tórax e abdome no esôfago, só abdome no estômago, sem TC de tórax. Item que muda.">
    <rect class="gast10-bg" x="20" y="240" width="720" height="48" rx="9" fill="var(--coral-60)" opacity="0"/>
    <rect x="20" y="240" width="220" height="48" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)"/>
    <text x="36" y="269" font-size="11.5" font-weight="600" fill="var(--ink-90)">Tomografia (TC)</text>
    <rect x="248" y="240" width="240" height="48" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-mid)"/>
    <text x="368" y="269" text-anchor="middle" font-size="11" fill="var(--ink-90)">tórax + abdome</text>
    <rect x="496" y="240" width="244" height="48" rx="9" fill="var(--coral-dim)" stroke="var(--coral-60)"/>
    <text x="618" y="269" text-anchor="middle" font-size="11" font-weight="600" fill="var(--coral-100)">SÓ abdome (sem tórax)</text>
  </g>

  <!-- legenda -->
  <g opacity="0.9">
    <rect x="20" y="300" width="14" height="14" rx="3" fill="var(--ok-green)"/>
    <text x="40" y="311" font-size="10" fill="var(--ink-70)">repete da Aula 1</text>
    <rect x="170" y="300" width="14" height="14" rx="3" fill="var(--coral-60)"/>
    <text x="190" y="311" font-size="10" fill="var(--ink-70)">muda no estômago</text>
  </g>

  <text class="gast10-status" x="380" y="350" text-anchor="middle" font-size="12" fill="var(--ink-70)" aria-live="polite">A USE continua sendo o melhor exame do T (repete). A grande diferença é a TC: só de abdome, sem tórax. Clique cada linha.</text>
</svg>
```

**JS (padrão `initSvg1` tabela clicável):** linhas `.gast10-row` toggláveis (uma ativa por vez, ou multi — sugiro exclusivo). Ativar = `.gast10-bg` ganha `opacity` e atualiza `.gast10-status` conforme `data-kind` (repete=verde / muda=coral) + `aria-pressed`. Mensagens:
- t: "Melhor exame do T = USE nos dois. REPETE do esôfago — nada muda aqui."
- avancado: "MUDA: no esôfago temia-se aorta/brônquio; no estômago, o peritônio (transcelômica)."
- exame: "MUDA: lá TC+broncoscopia; aqui a avaliação é do peritônio (videolaparoscopia)."
- tc: "MUDA — pegadinha: TC SÓ de abdome. NÃO se faz TC de tórax no gástrico (tumor é abdominal)."
CSS: `.gast10-row .gast10-bg { transition: opacity }`; `.gast10-row.is-active .gast10-bg { opacity:.14 }`; foco `outline`.

---

## P14 — gast14 · decisão por extensão: quando opera × quando palia (HOTSPOT por cenário)
**Interação:** três cenários clicáveis empilhados (padrão hotspot exclusivo). Clicar um cenário acende sua faixa, mostra o "veredito" à direita (mucosectomia / cirurgia D2 / paliação) e atualiza o status. Verde = mucosectomia (muito precoce), teal/azul = ressecável (cirurgia curativa), vermelho = M1/carcinomatose (paliação). Default: o cenário M1 aceso em vermelho (o ponto-chave da página: carcinomatose tira da cirurgia). Enter/Space + foco.
**figcaption:** **A extensão decide tudo.** Clique cada cenário para ver a conduta. T1a N0 muito precoce → mucosectomia (verde). Doença ressecável, sem M1 nem carcinomatose → QT neoadjuvante e gastrectomia com D2 (azul). Mas **M1 / carcinomatose peritoneal = paliação** (vermelho): não há T4B típico no estômago — o que tira o paciente da cirurgia é a disseminação.

```svg
<svg class="il-gast14" viewBox="0 0 760 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-gast14 d-gast14" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif" data-eso="gast14" data-svg="gast14">
  <title id="t-gast14">Conduta no câncer gástrico por extensão da doença: operar versus paliar</title>
  <desc id="d-gast14">Três cenários de conduta no câncer gástrico segundo a extensão da doença. Primeiro, tumor muito precoce T1a N0 menor que dois centímetros, Borrmann um, tipo intestinal: mucosectomia endoscópica, em verde, favorável. Segundo, doença ressecável sem metástase à distância e sem carcinomatose: quimioterapia neoadjuvante seguida de gastrectomia total ou subtotal pela topografia, com linfadenectomia D2 de pelo menos dezesseis linfonodos, em azul-teal. Terceiro, doença M1 ou carcinomatose peritoneal: paliação, em vermelho, incurável. Não há T4B típico no estômago: o que retira o paciente da cirurgia é a disseminação, não a invasão de uma víscera vizinha. O cenário M1 vem destacado.</desc>
  <defs>
    <marker id="gast14-arr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 Z" fill="var(--ink-50)"/></marker>
  </defs>

  <text x="22" y="32" font-size="13" font-weight="700" fill="var(--ink-90)">A extensão da doença decide a conduta</text>

  <!-- CENÁRIO 1 · muito precoce → mucosectomia (verde) -->
  <g class="gast14-case" data-case="precoce" data-tone="green" tabindex="0" role="button" aria-pressed="false" aria-label="Tumor T1a N0 muito precoce: mucosectomia endoscópica. Cenário favorável.">
    <rect class="gast14-band" x="22" y="50" width="440" height="84" rx="14" fill="var(--bg-elevated-2)" stroke="var(--ok-green)" stroke-width="2"/>
    <text x="44" y="80" font-size="12.5" font-weight="700" fill="var(--ok-green)">Muito precoce</text>
    <text x="44" y="100" font-size="10.5" fill="var(--ink-90)">T1a N0 · &lt; 2 cm · Borrmann I · intestinal</text>
    <text x="44" y="118" font-size="10" fill="var(--ink-70)">só mucosa, sem linfonodo</text>
    <line x1="462" y1="92" x2="520" y2="92" stroke="var(--ink-50)" stroke-width="1.6" marker-end="url(#gast14-arr)"/>
    <g class="gast14-verdict" data-case="precoce">
      <rect x="524" y="62" width="212" height="60" rx="12" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="2"/>
      <text x="630" y="88" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ink-100)">Mucosectomia</text>
      <text x="630" y="106" text-anchor="middle" font-size="10" fill="var(--ink-80)">endoscópica · poupa o estômago</text>
    </g>
  </g>

  <!-- CENÁRIO 2 · ressecável → cirurgia D2 (teal/azul) -->
  <g class="gast14-case" data-case="ressecavel" data-tone="teal" tabindex="0" role="button" aria-pressed="false" aria-label="Doença ressecável, sem M1 e sem carcinomatose: quimioterapia neoadjuvante e gastrectomia com linfadenectomia D2 de pelo menos dezesseis linfonodos.">
    <rect class="gast14-band" x="22" y="148" width="440" height="84" rx="14" fill="var(--bg-elevated-2)" stroke="var(--teal-60)" stroke-width="2"/>
    <text x="44" y="178" font-size="12.5" font-weight="700" fill="var(--teal-80)">Ressecável</text>
    <text x="44" y="198" font-size="10.5" fill="var(--ink-90)">sem M1 · sem carcinomatose</text>
    <text x="44" y="216" font-size="10" fill="var(--ink-70)">doença confinada / linfonodos abordáveis</text>
    <line x1="462" y1="190" x2="520" y2="190" stroke="var(--ink-50)" stroke-width="1.6" marker-end="url(#gast14-arr)"/>
    <g class="gast14-verdict" data-case="ressecavel">
      <rect x="524" y="156" width="212" height="68" rx="12" fill="var(--teal-05)" stroke="var(--teal-60)" stroke-width="2"/>
      <text x="630" y="180" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink-100)">QT neo → gastrectomia</text>
      <text x="630" y="197" text-anchor="middle" font-size="10" fill="var(--ink-80)">total/subtotal pela topografia</text>
      <text x="630" y="213" text-anchor="middle" font-size="10" font-weight="600" fill="var(--teal-100)">+ D2 (≥ 16 linfonodos)</text>
    </g>
  </g>

  <!-- CENÁRIO 3 · M1/carcinomatose → paliação (vermelho) default aceso -->
  <g class="gast14-case is-on" data-case="m1" data-tone="red" tabindex="0" role="button" aria-pressed="true" aria-label="M1 ou carcinomatose peritoneal: paliação. Doença incurável.">
    <rect class="gast14-band" x="22" y="246" width="440" height="84" rx="14" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="2"/>
    <text x="44" y="276" font-size="12.5" font-weight="700" fill="var(--err-red)">M1 / carcinomatose peritoneal</text>
    <text x="44" y="296" font-size="10.5" fill="var(--ink-90)">metástase à distância · citologia +</text>
    <text x="44" y="314" font-size="10" fill="var(--ink-70)">a disseminação é o que tira da cirurgia</text>
    <line x1="462" y1="288" x2="520" y2="288" stroke="var(--ink-50)" stroke-width="1.6" marker-end="url(#gast14-arr)"/>
    <g class="gast14-verdict" data-case="m1">
      <rect x="524" y="258" width="212" height="60" rx="12" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="2.4"/>
      <text x="630" y="284" text-anchor="middle" font-size="13" font-weight="700" fill="var(--err-red)">PALIAÇÃO</text>
      <text x="630" y="302" text-anchor="middle" font-size="10" fill="var(--ink-80)">sem intenção curativa</text>
    </g>
  </g>

  <!-- nota T4B -->
  <g>
    <rect x="22" y="344" width="714" height="40" rx="10" fill="var(--bg-elevated)" stroke="var(--warn-amber)" stroke-width="1.4"/>
    <text x="40" y="368" font-size="11" fill="var(--ink-90)"><tspan font-weight="700" fill="var(--warn-amber)">Detalhe do gástrico: </tspan>não há T4B típico — nenhuma víscera nobre vizinha cuja invasão isolada inviabilize a cirurgia (como a aorta no esôfago).</text>
  </g>

  <text class="gast14-status" x="380" y="398" text-anchor="middle" font-size="11.5" fill="var(--ink-70)" aria-live="polite" opacity="0"></text>
</svg>
```

**JS (padrão hotspot exclusivo `initSvg7`/`setRadical`):** `setCase(key)` — acende `.gast14-case[data-case=key]` (classe `is-on` realça band + verdict por `data-tone`), atenua as outras, `aria-pressed`, atualiza `.gast14-status` (passa a `opacity:1`). Default = M1 aceso. Mensagens:
- precoce: "Muito precoce (T1a N0 + critérios): mucosectomia endoscópica — poupa o estômago."
- ressecavel: "Ressecável: QT neoadjuvante → gastrectomia (total/subtotal pela topografia) + D2 ≥ 16 linfonodos."
- m1: "M1 / carcinomatose = incurável → PALIAÇÃO. Não há T4B típico: a disseminação é que tira da cirurgia."
CSS: `.gast14-case:not(.is-on) .gast14-verdict { opacity:.4 }`; `.gast14-case.is-on .gast14-band` glow por `data-tone` (green/teal/red); foco `outline`. A nota T4B nunca atenua.

---

## Checklist por SVG (auto-verificação)

| key | viewBox | role+title+desc | paleta semântica | interação c/ propósito | fallback estático | reduced-motion | ensina sozinho |
|-----|---------|-----------------|------------------|------------------------|-------------------|----------------|----------------|
| gast3  | 760×460 | ✓ | teal/coral/âmbar | hotspot-via (alvo=trajeto) | transcelômica acesa | ✓ (sem SMIL; só transição CSS) | ✓ figcaption + status |
| gast6  | 760×470 | ✓ | teal=linf / âmbar+coral=transc | hotspot-sinal (alvo=marcador no corpo) | Virchow aceso | ✓ | ✓ |
| gast4  | 760×360 | ✓ | coral=risco / âmbar=pegadinha | toggle-coluna | ambas + fibra visíveis | ✓ | ✓ |
| gast5  | 760×380 | ✓ | teal=genérica / coral=localizadora | toggle-camada | ambas visíveis + fórmula fixa | ✓ | ✓ |
| gast7  | 760×420 | ✓ | verde=acerto(borda) / vermelho=erro(centro) | step-through 1→4 | cena completa | ✓ | ✓ |
| gast10 | 760×380 | ✓ | verde=repete / coral=muda | matriz-linha clicável | 2 linhas-chave acesas | ✓ | ✓ |
| gast14 | 760×400 | ✓ | verde→teal→vermelho (gravidade) | hotspot-cenário | M1 aceso | ✓ | ✓ |

**prefers-reduced-motion:** nenhum SVG usa SMIL `<animate>` (toda transição é CSS via classe). Adicionar `.il-gast3 *, .il-gast4 *, .il-gast5 *, .il-gast6 *, .il-gast7 *, .il-gast10 *, .il-gast14 *` à regra `@media (prefers-reduced-motion: reduce) { transition: none !important }` já existente.

**Tokens usados (todos canônicos da plataforma):** `--teal-05/40/60/80/100`, `--teal-glow`, `--coral-50/60/80/100`, `--coral-dim`, `--warn-amber`, `--warn-amber-dim`, `--ok-green`, `--ok-green-dim`, `--err-red`, `--err-red-dim`, `--ink-30/50/60/70/80/90/100`, `--border-mid`, `--bg-elevated`, `--bg-elevated-2`. Nenhum hex hardcoded (diferente do SVG estático antigo de P3/P6/P11, que usava `#e8543f`/`#4fd6c0` cravados — estes novos respeitam tokens e o fix de contraste light do `aula-extra-06.css`/equivalente).

## Notas pro Executor
- **Substituições:** gast3 troca o `<svg>` de P3 (linhas ~243–280); gast6 troca o de P6 (~478–509). Manter o `<figcaption>` atualizado com o texto acima (a interação muda a leitura: "toque/foque").
- **Complementos:** gast4 (P4, antes da tabela `.cmp`), gast5 (P5, após `.mnemonic`), gast7 (P7, no parágrafo "antes de olhar a imagem da lesão"), gast10 (P10, após a tabela `.cmp`, antes da `figure.med` da TC), gast14 (P14, após a tabela decisória).
- **Controles externos** (HTML, não dentro do SVG): gast4/gast5 precisam de `.rim-toggle` (segmented); gast7 precisa de `[data-step-ctl="gast7"]` com botões prev/next + `[data-step-count]`. Reusar markup do rim/bexiga.
- **JS:** criar `aula-02-interactive.js` (espelho de `rim-interactive.js`) com `initGast3/4/5/6/7/10/14` + `initAll` IIFE; idempotente via `dataset.bound`. Cada init descrito acima.
- **CSS:** criar/estender folha local da aula-02 com os estados `.is-on`/`.is-dim`/`.is-active` por `data-svg` (espelho do `aula-extra-06.css`), incluindo o bloco de fix de contraste light `:root[data-theme="light"] [data-svg] { … }`.
- **Sem watermark, sem comentário em produção** (os `<!-- -->` acima são só guias de leitura deste .md; remover ao embutir).

---

## Gap-fill p1 e p2

> Ilustrador, 2026-06-04 (2ª passada). +2 ilustrações reais (figure-svg) para fechar o piso visual de P1 e P2 — as duas páginas que ainda não tinham esquema autoral próprio (P1 = dashboard/abertura; P2 = caso clínico só com prosa + quiz + a imagem real do Virchow).
> Naming literal do brief: `class="il-gast1"` / `data-eso="gast1"` (P1) e `class="il-gast2"` / `data-eso="gast2"` (P2). Coincide com o número da página real — sem colisão com gast3/4/5/6/7/10/14.
> **Conceitos distintos** dos 7 já feitos: gast1 = eixo TEMPO × PROFUNDIDADE (por que é "praga": silencioso enquanto raso, sintomático só quando já fundo/disseminado) — não é a anatomia das 3 vias (gast3) nem os 5 sinais à distância (gast6). gast2 = MAPA DO CASO (pistas da paciente → primário gástrico oculto), modelo eso1 da aula-01 com conteúdo gástrico — não é nenhum dos toggles/matrizes anteriores.
> Ambos ENSINAM SOZINHOS (Checagem Bauer), interação com propósito, fallback estático legível, transição CSS por classe (sem SMIL) → `prefers-reduced-motion` obedecido.

### P1 — gast1 · a linha do tempo da praga (step-through 1→4: silêncio → invasão → sintoma tardio → já disseminado)

**Conceito:** o "porquê praga". Eixo X = tempo; eixo Y = profundidade na parede (mucosa → submucosa → muscular → serosa). A curva da DOENÇA mergulha cedo e fundo; a curva do SINTOMA só sobe no fim. A faixa onde os dois se cruzam é o momento em que o paciente procura ajuda — e aí o tumor já é profundo e já semeou. Step-through revela as 4 fases (a metáfora é temporal/sequencial, então o controle é prev/next acumulativo, padrão `initSvg4`/`initStepThrough`, não hotspot).

**figcaption:** **Por que "praga": a doença corre na frente do sintoma.** Avance as quatro fases — o câncer já invade a parede e semeia enquanto o estômago ainda não dói. Quando o sintoma aparece, a doença costuma ser profunda e disseminada.

**Controle externo (HTML, fora do SVG):** `<div class="step-ctl" data-step-ctl="gast1"><button data-step-prev aria-label="Fase anterior">←</button><span data-step-count aria-live="polite">fase 1 de 4</span><button data-step-next aria-label="Próxima fase">→</button></div>`

```svg
<svg class="il-gast1" viewBox="0 0 760 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-gast1 d-gast1" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif" data-eso="gast1" data-svg="gast1">
  <title id="t-gast1">Linha do tempo do câncer gástrico: a doença avança antes do sintoma</title>
  <desc id="d-gast1">Gráfico de evolução do câncer gástrico ao longo do tempo, contra a profundidade na parede do estômago (mucosa, submucosa, muscular e serosa). A curva da doença desce e se aprofunda cedo, atravessando as camadas, enquanto a curva do sintoma só sobe no fim. Quatro fases: fase 1, tumor restrito à mucosa, paciente assintomático; fase 2, invasão da submucosa e muscular, ainda silencioso; fase 3, invasão da serosa, quando surgem os primeiros sintomas consumptivos inespecíficos; fase 4, disseminação à distância (peritônio, linfonodo, ovário) já presente quando o paciente finalmente procura ajuda. A mensagem é que a doença corre na frente do sintoma, por isso o câncer gástrico costuma se apresentar avançado.</desc>
  <defs>
    <linearGradient id="gast1-wall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="var(--teal-40)" stop-opacity="0.20"/>
      <stop offset="1" stop-color="var(--coral-50)" stop-opacity="0.16"/>
    </linearGradient>
    <linearGradient id="gast1-late" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="var(--coral-50)" stop-opacity="0.05"/>
      <stop offset="1" stop-color="var(--coral-50)" stop-opacity="0.26"/>
    </linearGradient>
    <marker id="gast1-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 Z" fill="var(--coral-60)"/></marker>
    <marker id="gast1-arrow-teal" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 Z" fill="var(--teal-60)"/></marker>
  </defs>

  <!-- moldura do gráfico -->
  <rect x="0" y="0" width="760" height="470" rx="16" fill="var(--bg-elevated)"/>
  <!-- eixo Y = profundidade na parede (4 camadas) -->
  <text x="20" y="40" font-size="11" font-weight="700" fill="var(--ink-90)">profundidade na parede</text>
  <g font-size="10.5" fill="var(--ink-70)">
    <rect x="92" y="56"  width="600" height="58" fill="var(--teal-40)"  opacity="0.10"/>
    <rect x="92" y="114" width="600" height="58" fill="var(--teal-40)"  opacity="0.07"/>
    <rect x="92" y="172" width="600" height="58" fill="var(--coral-50)" opacity="0.07"/>
    <rect x="92" y="230" width="600" height="58" fill="var(--coral-50)" opacity="0.12"/>
    <text x="24" y="90"  fill="var(--teal-80)">mucosa</text>
    <text x="24" y="148" fill="var(--teal-80)">submucosa</text>
    <text x="24" y="206" fill="var(--coral-80)">muscular</text>
    <text x="24" y="264" fill="var(--coral-80)">serosa</text>
    <line x1="92" y1="56" x2="92" y2="288" stroke="var(--border-mid)" stroke-width="1.4"/>
    <line x1="92" y1="288" x2="692" y2="288" stroke="var(--border-mid)" stroke-width="1.4"/>
  </g>
  <!-- eixo X = tempo, 4 fases -->
  <g font-size="10.5" fill="var(--ink-70)" text-anchor="middle">
    <text x="150" y="306" font-weight="700">fase 1</text>
    <text x="300" y="306" font-weight="700">fase 2</text>
    <text x="450" y="306" font-weight="700">fase 3</text>
    <text x="600" y="306" font-weight="700">fase 4</text>
  </g>
  <text x="392" y="326" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-90)">tempo →</text>

  <!-- CURVA DOENÇA: mergulha cedo e fundo (cada segmento é uma fase acumulativa) -->
  <g fill="none" stroke="var(--coral-60)" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">
    <path class="gast1-disease" data-step="1" d="M150 85  C 200 88 250 110 300 140" opacity="0.18"/>
    <path class="gast1-disease" data-step="2" d="M300 140 C 350 168 400 195 450 205" opacity="0.18"/>
    <path class="gast1-disease" data-step="3" d="M450 205 C 500 215 560 250 600 262" opacity="0.18"/>
  </g>
  <!-- marcadores da doença por fase -->
  <g>
    <circle class="gast1-dot-d" data-step="1" cx="150" cy="85"  r="7" fill="var(--teal-60)"  opacity="0.4"/>
    <circle class="gast1-dot-d" data-step="2" cx="300" cy="140" r="7" fill="var(--coral-50)" opacity="0.25"/>
    <circle class="gast1-dot-d" data-step="3" cx="450" cy="205" r="7" fill="var(--coral-50)" opacity="0.25"/>
    <circle class="gast1-dot-d" data-step="4" cx="600" cy="262" r="8" fill="var(--coral-60)" opacity="0.25"/>
  </g>

  <!-- CURVA SINTOMA: plana e baixa, só sobe no fim -->
  <g fill="none" stroke="var(--teal-60)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 6">
    <path class="gast1-symptom" data-step="3" d="M150 422 C 300 421 400 416 450 402" opacity="0.22"/>
    <path class="gast1-symptom" data-step="4" d="M450 402 C 520 378 560 352 600 338" opacity="0.22"/>
  </g>
  <text x="150" y="442" font-size="10.5" fill="var(--teal-80)">curva do sintoma (baixa quase o tempo todo)</text>

  <!-- rótulos de fase reveláveis -->
  <g class="gast1-note" data-step="1" opacity="0.25">
    <rect x="100" y="346" width="172" height="58" rx="10" fill="var(--bg-elevated-2)" stroke="var(--teal-40)" stroke-width="1.6"/>
    <text x="112" y="368" font-size="11" font-weight="700" fill="var(--teal-80)">restrito à mucosa</text>
    <text x="112" y="385" font-size="10" fill="var(--ink-70)">assintomático — só</text>
    <text x="112" y="398" font-size="10" fill="var(--ink-70)">acha quem rastreia</text>
  </g>
  <g class="gast1-note" data-step="2" opacity="0.25">
    <rect x="262" y="346" width="156" height="58" rx="10" fill="var(--bg-elevated-2)" stroke="var(--coral-40)" stroke-width="1.6"/>
    <text x="274" y="368" font-size="11" font-weight="700" fill="var(--coral-80)">submucosa/muscular</text>
    <text x="274" y="385" font-size="10" fill="var(--ink-70)">ainda silencioso —</text>
    <text x="274" y="398" font-size="10" fill="var(--ink-70)">já pode ter linfonodo</text>
  </g>
  <g class="gast1-note" data-step="3" opacity="0.25">
    <rect x="408" y="346" width="156" height="58" rx="10" fill="var(--bg-elevated-2)" stroke="var(--coral-50)" stroke-width="1.6"/>
    <text x="420" y="368" font-size="11" font-weight="700" fill="var(--coral-80)">atinge a serosa</text>
    <text x="420" y="385" font-size="10" fill="var(--ink-70)">1ºs sintomas vagos:</text>
    <text x="420" y="398" font-size="10" fill="var(--ink-70)">fadiga, saciedade, ↓peso</text>
  </g>
  <g class="gast1-note" data-step="4" opacity="0.25">
    <rect x="556" y="346" width="184" height="100" rx="12" fill="url(#gast1-late)" stroke="var(--coral-50)" stroke-width="2"/>
    <text x="568" y="368" font-size="11.5" font-weight="700" fill="var(--coral-100)">já disseminou</text>
    <text x="568" y="386" font-size="10" fill="var(--ink-90)">peritônio · Virchow ·</text>
    <text x="568" y="400" font-size="10" fill="var(--ink-90)">ovário (Krukenberg)</text>
    <text x="568" y="420" font-size="10" fill="var(--ink-70)">o sintoma chega aqui —</text>
    <text x="568" y="433" font-size="10" font-weight="700" fill="var(--coral-80)">e a doença já é avançada</text>
  </g>

  <!-- linha do "encontro" doença×sintoma: marco do diagnóstico tardio (revela na fase 4) -->
  <g class="gast1-meet" data-step="4" opacity="0">
    <line x1="600" y1="56" x2="600" y2="338" stroke="var(--coral-60)" stroke-width="1.6" stroke-dasharray="4 4"/>
    <circle cx="600" cy="338" r="5" fill="var(--teal-60)"/>
    <circle cx="600" cy="262" r="5" fill="var(--coral-60)"/>
    <path d="M620 300 C 660 300 668 300 690 300" fill="none" stroke="var(--coral-60)" stroke-width="2" marker-end="url(#gast1-arrow)"/>
    <text x="612" y="50" font-size="10" font-weight="700" fill="var(--coral-80)">diagnóstico</text>
  </g>

  <text class="gast1-status" x="380" y="464" text-anchor="middle" font-size="12" fill="var(--ink-50)" aria-live="polite">Fase 1: o tumor está só na mucosa e não dói. Avance e veja a doença afundar e se espalhar antes de qualquer sintoma.</text>
</svg>
```

**JS (espelho de `initStepThrough`/`initSvg4`):** acende cumulativamente todo `[data-step] <= cur` (curvas, marcadores, notas, linha do encontro) levando `opacity` a 1 e atualizando `.gast1-status`. Micro-copy por fase:
- `1 · Restrito à mucosa. Paciente assintomático — só pega quem faz rastreio (por isso o Japão rastreia).`
- `2 · Invade submucosa e muscular. Continua silencioso, mas já pode haver linfonodo.`
- `3 · Atinge a serosa. Aqui surgem os primeiros sintomas, vagos: fadiga, saciedade precoce, perda de peso.`
- `4 · Quando o sintoma finalmente leva o paciente ao médico, a doença já se disseminou — peritônio, Virchow, ovário. Esse é o "tumor praga".`

**Fallback estático (sem JS):** o gráfico inteiro fica legível em opacidade base — as duas curvas (doença mergulhando, sintoma plano), as 4 camadas rotuladas e os 4 cartões de fase já contam a história "doença corre na frente do sintoma" sem precisar avançar nada.

---

### P2 — gast2 · mapa do caso da mulher de 46 anos (HOTSPOT exclusivo por pista — modelo eso1)

**Conceito:** as pistas da paciente convergindo para o diagnóstico. Quatro achados do exame (síndrome consumptiva, linfonodo de Virchow, ascite, implante ovariano) — cada um, ao ser focado, acende seu trajeto e o que aquela pista entrega no hub central "câncer gástrico — primário abdominal oculto". O **Virchow já nasce aceso** (é a pista que localiza o primário, casando com o quiz da página e com a imagem real do linfonodo de Virchow que vai em P2). Hotspot mutuamente exclusivo, padrão `initEso1`/`initSvg3`.

**figcaption:** **Quatro pistas, um primário escondido.** Toque, clique ou foque cada achado da paciente para ver o que ele entrega — a consumpção dá o cenário; a ascite e o ovário, a disseminação; o linfonodo de Virchow é o que aponta o abdome como origem.

```svg
<svg class="il-gast2" viewBox="0 0 760 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-gast2 d-gast2" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif" data-eso="gast2" data-svg="gast2">
  <title id="t-gast2">Mapa do caso: pistas da paciente convergindo para câncer gástrico</title>
  <desc id="d-gast2">Esquema do raciocínio diagnóstico da mulher de 46 anos. Quatro pistas do exame convergem para um hub central. A síndrome consumptiva — fadiga, anorexia, saciedade precoce, emagrecimento, hipocoria — dá o cenário de doença avançada. A ascite indica disseminação na cavidade peritoneal, com a cirrose já afastada pela ausência de circulação colateral. O implante metastático no ovário direito é a metástase transcelômica conhecida como tumor de Krukenberg. O linfonodo supraclavicular esquerdo endurecido, o linfonodo de Virchow, drena as vísceras abdominais e é a pista que localiza o primário no abdome. A soma desenha doença disseminada sem sintoma localizador, assinatura do câncer gástrico.</desc>
  <defs>
    <linearGradient id="gast2-clue" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="var(--teal-40)" stop-opacity="0.16"/>
      <stop offset="1" stop-color="var(--teal-40)" stop-opacity="0.06"/>
    </linearGradient>
    <linearGradient id="gast2-hub" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="var(--coral-50)" stop-opacity="0.30"/>
      <stop offset="1" stop-color="var(--coral-50)" stop-opacity="0.12"/>
    </linearGradient>
    <radialGradient id="gast2-glow" cx="0.5" cy="0.5" r="0.6">
      <stop offset="0" stop-color="var(--coral-50)" stop-opacity="0.5"/>
      <stop offset="1" stop-color="var(--coral-50)" stop-opacity="0"/>
    </radialGradient>
    <marker id="gast2-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 Z" fill="var(--coral-60)"/></marker>
  </defs>
  <rect x="0" y="0" width="760" height="480" rx="16" fill="var(--bg-elevated)"/>

  <!-- trajetos pista → hub -->
  <g fill="none" stroke-width="2.4" stroke-linecap="round">
    <path class="gast2-link" data-link="consumptiva" d="M200 78  C 320 92  360 150 444 186" stroke="var(--coral-60)" marker-end="url(#gast2-arrow)" opacity="0.2"/>
    <path class="gast2-link" data-link="virchow"     d="M200 186 C 320 200 360 220 444 224" stroke="var(--coral-60)" marker-end="url(#gast2-arrow)" opacity="1"/>
    <path class="gast2-link" data-link="ascite"      d="M200 294 C 320 290 360 262 444 250" stroke="var(--coral-60)" marker-end="url(#gast2-arrow)" opacity="0.2"/>
    <path class="gast2-link" data-link="ovario"      d="M200 402 C 320 380 360 320 444 288" stroke="var(--coral-60)" marker-end="url(#gast2-arrow)" opacity="0.2"/>
  </g>

  <!-- PISTA 1 — síndrome consumptiva -->
  <g class="gast2-clue" data-clue="consumptiva" tabindex="0" role="button" aria-pressed="false" aria-label="Pista: síndrome consumptiva — fadiga, anorexia, saciedade precoce, emagrecimento, hipocoria. Dá o cenário de doença avançada.">
    <rect x="20" y="36" width="180" height="92" rx="14" fill="url(#gast2-clue)" stroke="var(--teal-40)" stroke-width="1.6"/>
    <path d="M48 58 a9 9 0 1 1 0.1 0 M48 72 v30 M48 80 l-12 10 M48 80 l12 10 M48 102 l-10 16 M48 102 l10 16" fill="none" stroke="var(--ink-90)" stroke-width="2" stroke-linecap="round"/>
    <path d="M70 66 l16 -8 M70 78 l20 -5" stroke="var(--coral-60)" stroke-width="2" stroke-linecap="round"/>
    <text x="100" y="64" font-size="12.5" font-weight="700" fill="var(--ink-100)">Consumptiva</text>
    <text x="100" y="82" font-size="10" fill="var(--ink-70)">fadiga · anorexia</text>
    <text x="100" y="96" font-size="10" fill="var(--ink-70)">saciedade precoce</text>
    <text x="100" y="110" font-size="10" fill="var(--ink-70)">↓ peso · hipocorada</text>
  </g>

  <!-- PISTA 2 — linfonodo de Virchow (nasce acesa) -->
  <g class="gast2-clue" data-clue="virchow" tabindex="0" role="button" aria-pressed="true" aria-label="Pista: linfonodo supraclavicular esquerdo endurecido — o linfonodo de Virchow. Drena as vísceras abdominais e localiza o primário no abdome.">
    <rect x="20" y="144" width="180" height="92" rx="14" fill="url(#gast2-clue)" stroke="var(--coral-50)" stroke-width="2.4"/>
    <path d="M44 196 q22 -22 60 -16" fill="none" stroke="var(--ink-90)" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="52" cy="184" rx="11" ry="9" fill="var(--coral-dim)" stroke="var(--coral-60)" stroke-width="2"/>
    <text x="100" y="172" font-size="12.5" font-weight="700" fill="var(--coral-80)">Virchow (esq.)</text>
    <text x="100" y="190" font-size="10" fill="var(--ink-70)">supraclavicular</text>
    <text x="100" y="204" font-size="10" fill="var(--ink-70)">endurecido, aderido</text>
    <text x="100" y="220" font-size="10" font-weight="700" fill="var(--coral-80)">→ aponta o abdome</text>
  </g>

  <!-- PISTA 3 — ascite -->
  <g class="gast2-clue" data-clue="ascite" tabindex="0" role="button" aria-pressed="false" aria-label="Pista: ascite — aumento de volume abdominal com macicez móvel, cirrose afastada pela ausência de circulação colateral. Indica disseminação peritoneal.">
    <rect x="20" y="252" width="180" height="92" rx="14" fill="url(#gast2-clue)" stroke="var(--teal-40)" stroke-width="1.6"/>
    <path d="M40 286 q24 -20 48 0 q24 20 48 0 v34 q-48 18 -96 0 z" fill="var(--teal-40)" fill-opacity="0.22" stroke="var(--ink-90)" stroke-width="2"/>
    <path d="M40 298 q24 -8 48 0 q24 8 48 0 M40 310 q24 -8 48 0 q24 8 48 0" fill="none" stroke="var(--teal-60)" stroke-width="1.3" opacity="0.8"/>
    <text x="100" y="272" font-size="12.5" font-weight="700" fill="var(--ink-100)">Ascite</text>
    <text x="100" y="318" font-size="10" fill="var(--ink-70)">macicez móvel</text>
    <text x="100" y="332" font-size="10" fill="var(--ink-70)">sem colateral → não é cirrose</text>
  </g>

  <!-- PISTA 4 — implante ovariano (Krukenberg) -->
  <g class="gast2-clue" data-clue="ovario" tabindex="0" role="button" aria-pressed="false" aria-label="Pista: implante metastático no ovário direito ao ultrassom pélvico. Metástase transcelômica de tumor gástrico, o tumor de Krukenberg.">
    <rect x="20" y="360" width="180" height="92" rx="14" fill="url(#gast2-clue)" stroke="var(--teal-40)" stroke-width="1.6"/>
    <ellipse cx="56" cy="406" rx="20" ry="26" fill="var(--bg-elevated-2)" stroke="var(--ink-90)" stroke-width="2"/>
    <circle cx="50" cy="400" r="4" fill="var(--coral-60)"/><circle cx="62" cy="410" r="3.4" fill="var(--coral-60)"/><circle cx="54" cy="416" r="3" fill="var(--coral-60)"/>
    <text x="100" y="388" font-size="12.5" font-weight="700" fill="var(--ink-100)">Ovário (dir.)</text>
    <text x="100" y="406" font-size="10" fill="var(--ink-70)">implante, não primário</text>
    <text x="100" y="420" font-size="10" fill="var(--ink-70)">lesão hipoecoica · USG</text>
    <text x="100" y="436" font-size="10" font-weight="700" fill="var(--coral-80)">Krukenberg</text>
  </g>

  <!-- HUB central -->
  <g>
    <ellipse cx="572" cy="238" rx="128" ry="128" fill="url(#gast2-glow)" opacity="0.5"/>
    <rect x="444" y="150" width="256" height="180" rx="18" fill="url(#gast2-hub)" stroke="var(--coral-50)" stroke-width="2"/>
    <text x="572" y="180" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--coral-100)">Câncer gástrico</text>
    <text x="572" y="197" text-anchor="middle" font-size="10.5" fill="var(--ink-90)">primário abdominal oculto</text>
    <g class="gast2-target" data-target="consumptiva" opacity="0.4">
      <text x="462" y="222" font-size="10.5" fill="var(--ink-90)">▸ cenário:</text>
      <text x="478" y="236" font-size="10.5" font-weight="600" fill="var(--ink-90)">doença avançada/consumptiva</text>
    </g>
    <g class="gast2-target" data-target="virchow" opacity="1">
      <text x="462" y="256" font-size="10.5" fill="var(--ink-90)">▸ localiza o primário:</text>
      <text x="478" y="270" font-size="10.5" font-weight="700" fill="var(--coral-80)">abdome (drenagem visceral)</text>
    </g>
    <g class="gast2-target" data-target="ascite" opacity="0.4">
      <text x="462" y="290" font-size="10.5" fill="var(--ink-90)">▸ disseminação:</text>
      <text x="478" y="304" font-size="10.5" font-weight="600" fill="var(--ink-90)">peritônio (transcelômica)</text>
    </g>
    <g class="gast2-target" data-target="ovario" opacity="0.4">
      <text x="462" y="318" font-size="10.5" fill="var(--ink-90)">▸ metástase:</text>
      <text x="478" y="332" font-size="10.5" font-weight="600" fill="var(--ink-90)">ovário = Krukenberg</text>
    </g>
  </g>

  <text class="gast2-status" x="380" y="468" text-anchor="middle" font-size="12" fill="var(--ink-50)" aria-live="polite">O linfonodo de Virchow é a única pista que localiza a origem no abdome — toque as outras para ver o que cada uma entrega.</text>
</svg>
```

**JS (espelho exato de `initEso1`):** hotspot exclusivo. Ao focar/clicar uma `.gast2-clue`, todas viram `aria-pressed=false` menos a escolhida; o `.gast2-link[data-link]` correspondente vai a `opacity:1` (os outros a `0.18`); o `.gast2-target[data-target]` correspondente a `opacity:1` (os outros a `0.4`); `.gast2-status` recebe a micro-copy. `arrowNav` entre as 4 pistas. **Default = Virchow aceso.** Micro-copy:
- `consumptiva: Síndrome consumptiva — dá o cenário de doença avançada, mas não diz de onde vem.`
- `virchow: Linfonodo de Virchow (supraclavicular ESQUERDO) — drena as vísceras abdominais. É a pista que aponta o primário no abdome.`
- `ascite: Ascite com cirrose já afastada — fala de disseminação peritoneal, não localiza o sítio.`
- `ovario: Implante no ovário (não primário) — metástase transcelômica gástrica: tumor de Krukenberg.`

**Fallback estático (sem JS):** as 4 pistas, os 4 trajetos e o hub com as 4 entregas ficam legíveis em opacidade base; o Virchow já nasce destacado em coral, então mesmo sem interação a página ensina "doença disseminada sem localizador = câncer gástrico, e o Virchow é o que aponta o abdome".

---

### Checklist por SVG (gap-fill)

| key | viewBox | role+title+desc | paleta semântica | interação c/ propósito | fallback estático | reduced-motion | ensina sozinho |
|-----|---------|-----------------|------------------|------------------------|-------------------|----------------|----------------|
| gast1 | 760×470 | ✓ | teal=raso/silencioso · coral=fundo/disseminado | step-through 1→4 (eixo tempo) | gráfico + 4 cartões legíveis | ✓ (sem SMIL; transição CSS por classe) | ✓ figcaption + status |
| gast2 | 760×480 | ✓ | teal=pista neutra · coral=Virchow/hub patológico | hotspot exclusivo (pista=alvo) | Virchow aceso + hub legível | ✓ | ✓ |

**prefers-reduced-motion:** adicionar `.il-gast1 *, .il-gast2 *` à mesma regra `@media (prefers-reduced-motion: reduce){ transition:none !important }` da aula-02.
**Tokens usados (todos canônicos, confirmados em `assets/css/tokens.css`):** `--teal-40/60/80`, `--coral-40/50/60/80/100`, `--coral-dim`, `--ink-50/70/90/100`, `--border-mid`, `--bg-elevated`, `--bg-elevated-2`. Sem hex hardcoded, sem `--ink-60/80`/`--teal-glow` (não existem em tokens.css) — só tokens verificados.

### Notas pro Executor (gap-fill)
- **gast1 → P1:** inserir como `<figure class="figure-svg">` logo após o `<p class="dash__lede">` (linha ~82) e antes da `.livestrip`, ou após `dash__metrics` — onde o piso visual da página de abertura pedir. Precisa do controle externo `[data-step-ctl="gast1"]` (prev/next + `[data-step-count]`), markup reusado do rim/bexiga.
- **gast2 → P2:** inserir como `<figure class="figure-svg">` após o `<ul>` de pistas do exame (após linha ~181) e **antes** da `<figure class="med">` do linfonodo de Virchow (`p2-virchow-us.jpg` do manifesto de imagens) — o esquema autoral arma o raciocínio, a imagem real mostra o achado. Sem controle externo (é hotspot puro).
- **JS:** estender `aula-02-interactive.js` com `initGast1` (helper `initStepThrough(root, '.il-gast1', 'gast1', 'fase', 4)`) e `initGast2` (espelho de `initEso1`, hotspot exclusivo); registrar ambos no `initAll`; idempotente via `dataset.init`/`dataset.bound`.
- **CSS:** estados na folha local da aula-02 — gast1: `[data-svg="gast1"] [data-step].is-on{opacity:1}` (curvas/dots/notas/meet) com transição de opacidade; gast2: `.gast2-clue:focus-visible{outline:2px solid var(--teal-60);outline-offset:2px}` e transição de opacidade em `.gast2-link`/`.gast2-target`. Incluir no bloco de fix de contraste light `:root[data-theme="light"] [data-svg]{…}`.
- **Sem watermark, sem comentário em produção.**
