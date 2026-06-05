# SVGs faltantes aula-01 (eso1, eso5, eso11, eso12) — prontos pro embed

> Ilustrador, 2026-06-04. 4 ilustrações reais (figure-svg) para fechar o piso honesto da aula-01.
> Inserir cada um em `<figure class="figure-svg"><figcaption>…</figcaption><div class="figure-svg__frame"><div class="figure-svg__stage" aria-live="polite">…SVG…</div></div></figure>`.
> JS: estender aula-01-interactive.js — eso1/eso12 = hotspot exclusivo (padrão initSvg3); eso5/eso11 = step-through cumulativo com step-ctl externo (padrão initSvg4).
> Adicionar `.il-eso1 *, .il-eso5 *, .il-eso11 *, .il-eso12 *` à regra prefers-reduced-motion já existente no <style> da aula-01.

## Pontos de inserção
- eso1 → P1, após `<h3>Cada detalhe da história é uma pista</h3>`+`<ul>`, antes da `<figure class="med">` da tilose.
- eso5 → P5, após card--mnemonic "ver/alcançar/não semear", antes de "Por que NÃO se biopsia tudo". step-ctl dentro da figure-svg.
- eso11 → P11, após card--success da síntese, antes da figure.med do PET-CT.
- eso12 → P12, após card--info das 5 armadilhas, antes de "agora explicadas uma a uma".

---

## P1 — eso1 (mapa do caso)
figcaption: **Três pistas, um diagnóstico.** Toque, clique ou foque cada pista da história do Sr. Aurelino para ver o que ela aponta — a tilose entrega o tipo; a disfagia, a obstrução; a perda de peso, o estágio.

```svg
<svg class="il-eso1" viewBox="0 0 760 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-eso1 d-eso1" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif" data-eso="eso1">
  <title id="t-eso1">Mapa do caso: três pistas clínicas convergindo para o diagnóstico</title>
  <desc id="d-eso1">Esquema do raciocínio diagnóstico do Sr. Aurelino. Três pistas da história — tilose palmoplantar, disfagia progressiva de sólidos para líquidos e perda ponderal de 20 quilos — convergem, cada uma para uma conclusão: a tilose aponta o tipo histológico escamoso, a disfagia progressiva aponta obstrução mecânica luminal e o emagrecimento aponta doença consumptiva avançada. A soma fecha a hipótese de carcinoma de esôfago.</desc>
  <defs>
    <linearGradient id="eso1-clue" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="var(--teal-40)" stop-opacity="0.16"/>
      <stop offset="1" stop-color="var(--teal-40)" stop-opacity="0.06"/>
    </linearGradient>
    <linearGradient id="eso1-hub" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="var(--coral-50)" stop-opacity="0.30"/>
      <stop offset="1" stop-color="var(--coral-50)" stop-opacity="0.12"/>
    </linearGradient>
    <marker id="eso1-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 Z" fill="var(--coral-60)"/></marker>
    <radialGradient id="eso1-glow" cx="0.5" cy="0.5" r="0.6">
      <stop offset="0" stop-color="var(--coral-50)" stop-opacity="0.5"/>
      <stop offset="1" stop-color="var(--coral-50)" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <g fill="none" stroke-width="2.4" stroke-linecap="round">
    <path class="eso1-link" data-link="tilose"   d="M196 96  C 320 110 360 150 432 168" stroke="var(--coral-60)" marker-end="url(#eso1-arrow)" opacity="0.35"/>
    <path class="eso1-link" data-link="disfagia" d="M196 232 C 320 232 360 232 432 232" stroke="var(--coral-60)" marker-end="url(#eso1-arrow)" opacity="0.35"/>
    <path class="eso1-link" data-link="perda"    d="M196 372 C 320 360 360 318 432 300" stroke="var(--coral-60)" marker-end="url(#eso1-arrow)" opacity="0.35"/>
  </g>
  <g class="eso1-clue" data-clue="tilose" tabindex="0" role="button" aria-pressed="true" aria-label="Pista: tilose palmoplantar. Aponta o tipo histológico escamoso.">
    <rect x="20" y="48" width="176" height="96" rx="14" fill="url(#eso1-clue)" stroke="var(--coral-50)" stroke-width="2.4"/>
    <path d="M58 118 q-6 -30 4 -42 m10 40 v-46 m14 46 v-50 m14 50 v-44 q14 -2 14 14 v30 q0 12 -14 16 q-22 6 -42 -4 z" fill="none" stroke="var(--ink-80)" stroke-width="2" stroke-linecap="round"/>
    <path d="M52 104 h52 M54 112 h50" stroke="var(--coral-60)" stroke-width="1.3" opacity="0.7"/>
    <text x="116" y="86" font-size="13" font-weight="700" fill="var(--coral-80)">Tilose</text>
    <text x="116" y="104" font-size="10.5" fill="var(--ink-70)">queratodermia</text>
    <text x="116" y="119" font-size="10.5" fill="var(--ink-70)">palmoplantar</text>
  </g>
  <g class="eso1-clue" data-clue="disfagia" tabindex="0" role="button" aria-pressed="false" aria-label="Pista: disfagia progressiva de sólidos para líquidos. Aponta obstrução mecânica da luz.">
    <rect x="20" y="184" width="176" height="96" rx="14" fill="url(#eso1-clue)" stroke="var(--teal-40)" stroke-width="1.6"/>
    <path d="M48 196 L48 268 M86 196 C 80 226 80 240 66 268" fill="none" stroke="var(--ink-80)" stroke-width="2" stroke-linecap="round"/>
    <path d="M48 196 L86 196" stroke="var(--ink-60)" stroke-width="1.4"/>
    <path d="M48 268 L66 268" stroke="var(--coral-60)" stroke-width="2.2"/>
    <text x="112" y="218" font-size="13" font-weight="700" fill="var(--ink-90)">Disfagia</text>
    <text x="112" y="236" font-size="10.5" fill="var(--ink-70)">sólido → líquido</text>
    <text x="112" y="251" font-size="10.5" fill="var(--ink-70)">8 anos → 3 meses</text>
  </g>
  <g class="eso1-clue" data-clue="perda" tabindex="0" role="button" aria-pressed="false" aria-label="Pista: perda de 20 quilos. Aponta doença consumptiva avançada.">
    <rect x="20" y="324" width="176" height="96" rx="14" fill="url(#eso1-clue)" stroke="var(--teal-40)" stroke-width="1.6"/>
    <path d="M60 340 a8 8 0 1 1 0.1 0 M60 354 v30 M60 362 l-12 10 M60 362 l12 10 M60 384 l-10 16 M60 384 l10 16" fill="none" stroke="var(--ink-80)" stroke-width="2" stroke-linecap="round"/>
    <path d="M82 348 l18 -10 M82 360 l22 -6" stroke="var(--coral-60)" stroke-width="2" stroke-linecap="round" marker-end="url(#eso1-arrow)"/>
    <text x="112" y="362" font-size="13" font-weight="700" fill="var(--ink-90)">−20 kg</text>
    <text x="112" y="380" font-size="10.5" fill="var(--ink-70)">em 3 meses</text>
    <text x="112" y="395" font-size="10.5" fill="var(--ink-70)">consumptiva</text>
  </g>
  <g>
    <ellipse cx="556" cy="234" rx="120" ry="120" fill="url(#eso1-glow)" opacity="0.5"/>
    <rect x="432" y="150" width="248" height="168" rx="18" fill="url(#eso1-hub)" stroke="var(--coral-50)" stroke-width="2"/>
    <text x="556" y="184" text-anchor="middle" font-size="14" font-weight="700" fill="var(--coral-100)">Carcinoma de esôfago</text>
    <g class="eso1-target" data-target="tilose">
      <text x="450" y="212" font-size="11.5" fill="var(--ink-80)">▸ tipo histológico:</text>
      <text x="470" y="228" font-size="11.5" font-weight="600" fill="var(--coral-80)">escamoso</text>
    </g>
    <g class="eso1-target" data-target="disfagia">
      <text x="450" y="252" font-size="11.5" fill="var(--ink-80)">▸ luz obstruída:</text>
      <text x="470" y="268" font-size="11.5" font-weight="600" fill="var(--ink-90)">massa mecânica</text>
    </g>
    <g class="eso1-target" data-target="perda">
      <text x="450" y="292" font-size="11.5" fill="var(--ink-80)">▸ estágio:</text>
      <text x="470" y="308" font-size="11.5" font-weight="600" fill="var(--ink-90)">doença avançada</text>
    </g>
  </g>
  <text class="eso1-status" x="380" y="448" text-anchor="middle" font-size="12" fill="var(--ink-50)" aria-live="polite">Cada pista aponta uma conclusão. A tilose é a única que entrega o tipo escamoso — toque as outras.</text>
</svg>
```

## P5 — eso5 (portões da biópsia + víscera maciça) — step-through 4 passos
figcaption: **Ver, alcançar e não semear.** Avance os três portões da biópsia luminal — depois veja por que a punção da víscera maciça falha no último.
step-ctl externo: `<div class="step-ctl" data-step-ctl="eso5"><button data-step-prev aria-label="Passo anterior">←</button><span data-step-count aria-live="polite">passo 1 de 4</span><button data-step-next aria-label="Próximo passo">→</button></div>`

```svg
<svg class="il-eso5" viewBox="0 0 760 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-eso5 d-eso5" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif" data-eso="eso5">
  <title id="t-eso5">A regra de ouro da biópsia: ver, alcançar e não semear</title>
  <desc id="d-eso5">Esquema da regra de ouro da biópsia em câncer do tubo digestivo. O endoscópio percorre a luz do esôfago e precisa atravessar três portões em sequência — ver a lesão, alcançá-la e fazê-lo sem semear células no peritônio. Cumpridos os três, a biópsia luminal é segura, marcada em teal de lesão ressecável. Em contraste, a punção transabdominal de uma massa hepática falha no terceiro portão: a agulha pode arrastar células pela cavidade peritoneal, transformando doença ressecável em metastática, marcada em coral; nesses casos o diagnóstico é por imagem.</desc>
  <defs>
    <linearGradient id="eso5-lumen" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="var(--teal-40)" stop-opacity="0.18"/>
      <stop offset="1" stop-color="var(--teal-40)" stop-opacity="0.06"/>
    </linearGradient>
    <linearGradient id="eso5-bad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="var(--coral-50)" stop-opacity="0.26"/>
      <stop offset="1" stop-color="var(--coral-50)" stop-opacity="0.10"/>
    </linearGradient>
    <marker id="eso5-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 Z" fill="var(--teal-60)"/></marker>
    <marker id="eso5-arrow-bad" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 Z" fill="var(--coral-60)"/></marker>
  </defs>
  <g>
    <rect x="24" y="40" width="712" height="118" rx="20" fill="url(#eso5-lumen)" stroke="var(--teal-30)" stroke-width="1.4"/>
    <text x="44" y="66" font-size="11" font-weight="700" fill="var(--teal-80)">VIA LUMINAL — tubo digestivo (esôfago)</text>
    <path class="eso5-lumen-path" data-step="1" d="M44 100 H 690" fill="none" stroke="var(--teal-60)" stroke-width="3" stroke-dasharray="6 6" marker-end="url(#eso5-arrow)" opacity="0.45"/>
    <circle cx="44" cy="100" r="7" fill="var(--teal-60)"/>
    <text x="44" y="128" font-size="10" fill="var(--ink-60)">EDA</text>
    <ellipse cx="690" cy="100" rx="20" ry="16" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="1.6"/>
    <text x="690" y="138" text-anchor="middle" font-size="10" fill="var(--ink-60)">lesão</text>
  </g>
  <g class="eso5-gate" data-step="1">
    <rect x="60" y="196" width="186" height="92" rx="14" fill="var(--bg-elevated-2)" stroke="var(--teal-40)" stroke-width="1.8"/>
    <text x="153" y="226" text-anchor="middle" font-size="14" font-weight="700" fill="var(--teal-80)">1 · VER</text>
    <text x="153" y="248" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">olho ou câmera</text>
    <text x="153" y="266" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">enxerga a lesão</text>
  </g>
  <g class="eso5-gate" data-step="2">
    <rect x="287" y="196" width="186" height="92" rx="14" fill="var(--bg-elevated-2)" stroke="var(--teal-40)" stroke-width="1.8"/>
    <text x="380" y="226" text-anchor="middle" font-size="14" font-weight="700" fill="var(--teal-80)">2 · ALCANÇAR</text>
    <text x="380" y="248" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">acesso físico</text>
    <text x="380" y="266" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">à lesão</text>
  </g>
  <g class="eso5-gate" data-step="3">
    <rect x="514" y="196" width="186" height="92" rx="14" fill="var(--bg-elevated-2)" stroke="var(--teal-40)" stroke-width="1.8"/>
    <text x="607" y="226" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--teal-80)">3 · NÃO SEMEAR</text>
    <text x="607" y="248" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">sem disseminar</text>
    <text x="607" y="266" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">no peritônio</text>
  </g>
  <path d="M246 242 H 287" stroke="var(--teal-60)" stroke-width="2" marker-end="url(#eso5-arrow)"/>
  <path d="M473 242 H 514" stroke="var(--teal-60)" stroke-width="2" marker-end="url(#eso5-arrow)"/>
  <g class="eso5-gate" data-step="3">
    <rect x="514" y="306" width="186" height="40" rx="10" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="1.6"/>
    <text x="607" y="331" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ok-green)">Biópsia segura · ressecável</text>
  </g>
  <g class="eso5-bad" data-step="4">
    <rect x="60" y="362" width="640" height="100" rx="16" fill="url(#eso5-bad)" stroke="var(--coral-50)" stroke-width="1.8"/>
    <text x="80" y="388" font-size="11" font-weight="700" fill="var(--coral-80)">VÍSCERA MACIÇA — fígado, pâncreas, baço, rim, sarcoma de retroperitônio</text>
    <path d="M96 404 H 300" stroke="var(--ink-50)" stroke-width="1.4" stroke-dasharray="3 3"/>
    <text x="96" y="420" font-size="9.5" fill="var(--ink-50)">parede abdominal</text>
    <ellipse cx="220" cy="430" rx="34" ry="22" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="1.6"/>
    <text x="220" y="434" text-anchor="middle" font-size="10" fill="var(--ink-80)">massa</text>
    <path d="M120 396 L 200 424" stroke="var(--coral-60)" stroke-width="2.4" marker-end="url(#eso5-arrow-bad)"/>
    <path d="M250 432 q 40 18 86 6 M250 440 q 50 24 110 4" fill="none" stroke="var(--coral-60)" stroke-width="1.6" stroke-dasharray="2 5" opacity="0.85"/>
    <circle cx="360" cy="436" r="3" fill="var(--coral-60)"/><circle cx="400" cy="430" r="3" fill="var(--coral-60)"/><circle cx="436" cy="438" r="3" fill="var(--coral-60)"/>
    <rect x="470" y="404" width="214" height="46" rx="10" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="1.6"/>
    <text x="577" y="424" text-anchor="middle" font-size="11" font-weight="700" fill="var(--err-red)">semeadura peritoneal</text>
    <text x="577" y="440" text-anchor="middle" font-size="10" fill="var(--ink-70)">ressecável → metastática · use imagem</text>
  </g>
  <text class="eso5-status" x="380" y="478" text-anchor="middle" font-size="12" fill="var(--ink-50)" aria-live="polite">Avance os portões: ver, alcançar, não semear. O quarto passo mostra por que a víscera maciça não se biopsia.</text>
</svg>
```

## P11 — eso11 (cadeia de fechamento) — step-through 5 elos
figcaption: **Da tilose à conduta.** Monte a cadeia do raciocínio elo por elo e feche o caso do Sr. Aurelino do começo ao fim.
step-ctl externo: `data-step-ctl="eso11"`, "elo 1 de 5".

```svg
<svg class="il-eso11" viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-eso11 d-eso11" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif" data-eso="eso11">
  <title id="t-eso11">Cadeia de raciocínio que fecha o caso do Sr. Aurelino</title>
  <desc id="d-eso11">Cadeia do método diagnóstico montada peça por peça. A tilose aponta o tipo carcinoma escamoso; o tipo confirmado leva à pergunta da profundidade de invasão na parede, o T; a profundidade é definida pelo estadiamento com ultrassonografia endoscópica para o T e o N, e tomografia para o macro e a metástase; o estadiamento define a conduta. A clínica levanta a hipótese, a tilose aponta o tipo, a endoscopia confirma e o estadiamento decide.</desc>
  <defs>
    <linearGradient id="eso11-on" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="var(--coral-50)" stop-opacity="0.26"/>
      <stop offset="1" stop-color="var(--coral-50)" stop-opacity="0.10"/>
    </linearGradient>
    <marker id="eso11-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 Z" fill="var(--coral-60)"/></marker>
  </defs>
  <g fill="none" stroke="var(--coral-60)" stroke-width="2.6" marker-end="url(#eso11-arrow)">
    <path class="eso11-edge" data-step="2" d="M220 96  H 268" opacity="0.3"/>
    <path class="eso11-edge" data-step="3" d="M488 96  H 536" opacity="0.3"/>
    <path class="eso11-edge" data-step="4" d="M608 134 V 232 H 488" opacity="0.3"/>
    <path class="eso11-edge" data-step="5" d="M268 268 H 220" opacity="0.3"/>
  </g>
  <g class="eso11-node" data-step="1">
    <rect x="44" y="62" width="176" height="68" rx="14" fill="url(#eso11-on)" stroke="var(--coral-50)" stroke-width="2"/>
    <text x="132" y="92" text-anchor="middle" font-size="13" font-weight="700" fill="var(--coral-80)">Tilose</text>
    <text x="132" y="112" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">+ etilismo + perda</text>
  </g>
  <g class="eso11-node" data-step="2">
    <rect x="268" y="62" width="220" height="68" rx="14" fill="var(--bg-elevated-2)" stroke="var(--coral-40)" stroke-width="1.6"/>
    <text x="378" y="92" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink-90)">Carcinoma escamoso</text>
    <text x="378" y="112" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">tipo apontado antes da EDA</text>
  </g>
  <g class="eso11-node" data-step="3">
    <rect x="536" y="62" width="180" height="68" rx="14" fill="var(--bg-elevated-2)" stroke="var(--teal-40)" stroke-width="1.6"/>
    <text x="626" y="92" text-anchor="middle" font-size="13" font-weight="700" fill="var(--teal-80)">Profundidade (T)</text>
    <text x="626" y="112" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">quão fundo invade</text>
  </g>
  <g class="eso11-node" data-step="4">
    <rect x="300" y="232" width="188" height="72" rx="14" fill="var(--bg-elevated-2)" stroke="var(--teal-40)" stroke-width="1.6"/>
    <text x="394" y="260" text-anchor="middle" font-size="13" font-weight="700" fill="var(--teal-80)">Estadiamento</text>
    <text x="394" y="280" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">USE → T/N · TC → macro/M</text>
    <text x="394" y="296" text-anchor="middle" font-size="10" fill="var(--ink-50)">broncoscopia se via aérea</text>
  </g>
  <g class="eso11-node" data-step="5">
    <rect x="44" y="232" width="176" height="72" rx="14" fill="url(#eso11-on)" stroke="var(--coral-50)" stroke-width="2"/>
    <text x="132" y="262" text-anchor="middle" font-size="13" font-weight="700" fill="var(--coral-80)">Conduta</text>
    <text x="132" y="282" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">decidida pela</text>
    <text x="132" y="297" text-anchor="middle" font-size="10.5" fill="var(--ink-70)">profundidade</text>
  </g>
  <rect x="44" y="346" width="672" height="48" rx="12" fill="var(--bg-elevated)" stroke="var(--border-mid)" stroke-width="1.2"/>
  <text x="380" y="368" text-anchor="middle" font-size="11.5" fill="var(--ink-80)"><tspan font-weight="700" fill="var(--coral-80)">A clínica</tspan> levanta · <tspan font-weight="700" fill="var(--coral-80)">a tilose</tspan> aponta o tipo · <tspan font-weight="700" fill="var(--teal-80)">a EDA</tspan> confirma · <tspan font-weight="700" fill="var(--teal-80)">o estadiamento</tspan> decide</text>
  <text x="380" y="386" text-anchor="middle" font-size="10" fill="var(--ink-50)">a próxima conduta no caso é a EDA com biópsia — confirma a histologia antes de estadiar</text>
  <text class="eso11-status" x="380" y="48" text-anchor="middle" font-size="12" fill="var(--ink-50)" aria-live="polite">Monte a cadeia elo por elo — da tilose à conduta.</text>
</svg>
```

## P12 — eso12 (matriz das 5 armadilhas) — hotspot exclusivo
figcaption: **Cinco armadilhas, lado a lado.** Toque, clique ou foque cada pegadinha clássica para revelar em paralelo o erro comum e o que é correto.

```svg
<svg class="il-eso12" viewBox="0 0 760 560" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-eso12 d-eso12" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif" data-eso="eso12">
  <title id="t-eso12">As cinco armadilhas de prova do câncer de esôfago: erro comum × o correto</title>
  <desc id="d-eso12">Matriz das cinco pegadinhas clássicas. Primeira: disfagia de anos sem perda puxa benigno, de meses com perda grita câncer — o erro é tratar anos e meses como iguais. Segunda: classificar o fator de risco em externo, que dá escamoso proximal e médio, ou interno ácido, que dá adenocarcinoma distal — o erro é decorar a lista sem o eixo. Terceira: o esôfago não tem serosa, só adventícia fina, o que permite invasão precoce por contiguidade — o erro é esperar serosa como nos outros tubos. Quarta: a ultrassonografia endoscópica define a profundidade T e o N, a tomografia o macro e a metástase, a broncoscopia a luz brônquica — o erro é trocar o exame da pergunta. Quinta: T1a é endoscópico, T1b até T4a é cirurgia, T4b ou metástase é paliação — o erro é detalhar o TNM em vez de decidir pelos extremos.</desc>
  <defs>
    <linearGradient id="eso12-row" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="var(--warn-amber)" stop-opacity="0.14"/>
      <stop offset="1" stop-color="var(--warn-amber)" stop-opacity="0.04"/>
    </linearGradient>
  </defs>
  <text x="40" y="34" font-size="12" font-weight="700" fill="var(--warn-amber)">A ARMADILHA</text>
  <text x="318" y="34" font-size="12" font-weight="700" fill="var(--err-red)">✕ leitura errada</text>
  <text x="540" y="34" font-size="12" font-weight="700" fill="var(--ok-green)">✓ o correto</text>
  <g class="eso12-trap" data-trap="relogio" tabindex="0" role="button" aria-pressed="true" aria-label="Armadilha do relógio da disfagia. Errado: anos e meses valem o mesmo. Certo: anos puxa benigno, meses com perda grita câncer.">
    <rect x="32" y="48" width="262" height="80" rx="12" fill="url(#eso12-row)" stroke="var(--warn-amber)" stroke-width="2"/>
    <text x="48" y="80" font-size="12.5" font-weight="700" fill="var(--ink-90)">1 · Relógio da disfagia</text>
    <text x="48" y="100" font-size="10.5" fill="var(--ink-70)">anos × meses</text>
    <text x="48" y="116" font-size="10.5" fill="var(--ink-70)">com perda de peso</text>
    <g class="eso12-wrong" opacity="1">
      <rect x="306" y="48" width="216" height="80" rx="12" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="1.5"/>
      <text x="318" y="78" font-size="10.5" fill="var(--ink-80)">tempo não importa,</text>
      <text x="318" y="94" font-size="10.5" fill="var(--ink-80)">disfagia é disfagia</text>
    </g>
    <g class="eso12-right" opacity="1">
      <rect x="534" y="48" width="194" height="80" rx="12" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="1.5"/>
      <text x="546" y="74" font-size="10.5" fill="var(--ink-80)">anos s/ perda → benigno;</text>
      <text x="546" y="90" font-size="10.5" fill="var(--ink-80)">meses + perda → câncer;</text>
      <text x="546" y="106" font-size="10" fill="var(--ink-50)">acelerou de repente = malignidade</text>
    </g>
  </g>
  <g class="eso12-trap" data-trap="eixo" tabindex="0" role="button" aria-pressed="false" aria-label="Armadilha externo versus interno. Errado: decorar a lista de fatores. Certo: o eixo externo dá escamoso proximal e interno ácido dá adeno distal.">
    <rect x="32" y="140" width="262" height="80" rx="12" fill="url(#eso12-row)" stroke="var(--border-mid)" stroke-width="1.4"/>
    <text x="48" y="172" font-size="12.5" font-weight="700" fill="var(--ink-90)">2 · Externo × interno</text>
    <text x="48" y="192" font-size="10.5" fill="var(--ink-70)">CEC × adenocarcinoma</text>
    <text x="48" y="208" font-size="10.5" fill="var(--ink-70)">tipo + topografia</text>
    <g class="eso12-wrong" opacity="0">
      <rect x="306" y="140" width="216" height="80" rx="12" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="1.5"/>
      <text x="318" y="176" font-size="10.5" fill="var(--ink-80)">decorar a lista de</text>
      <text x="318" y="192" font-size="10.5" fill="var(--ink-80)">fatores um a um</text>
    </g>
    <g class="eso12-right" opacity="0">
      <rect x="534" y="140" width="194" height="80" rx="12" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="1.5"/>
      <text x="546" y="166" font-size="10.5" fill="var(--ink-80)">externo → escamoso,</text>
      <text x="546" y="182" font-size="10.5" fill="var(--ink-80)">proximal/médio;</text>
      <text x="546" y="200" font-size="10.5" fill="var(--ink-80)">interno ácido → adeno, distal</text>
    </g>
  </g>
  <g class="eso12-trap" data-trap="serosa" tabindex="0" role="button" aria-pressed="false" aria-label="Armadilha do esôfago sem serosa. Errado: esperar serosa como nos outros tubos. Certo: só adventícia fina permite invasão precoce por contiguidade.">
    <rect x="32" y="232" width="262" height="80" rx="12" fill="url(#eso12-row)" stroke="var(--border-mid)" stroke-width="1.4"/>
    <text x="48" y="264" font-size="12.5" font-weight="700" fill="var(--ink-90)">3 · Esôfago sem serosa</text>
    <text x="48" y="284" font-size="10.5" fill="var(--ink-70)">só adventícia fina</text>
    <text x="48" y="300" font-size="10.5" fill="var(--ink-70)">invasão precoce</text>
    <g class="eso12-wrong" opacity="0">
      <rect x="306" y="232" width="216" height="80" rx="12" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="1.5"/>
      <text x="318" y="268" font-size="10.5" fill="var(--ink-80)">tem serosa como</text>
      <text x="318" y="284" font-size="10.5" fill="var(--ink-80)">estômago e cólon</text>
    </g>
    <g class="eso12-right" opacity="0">
      <rect x="534" y="232" width="194" height="80" rx="12" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="1.5"/>
      <text x="546" y="262" font-size="10.5" fill="var(--ink-80)">sem serosa → invade</text>
      <text x="546" y="278" font-size="10.5" fill="var(--ink-80)">cedo por contiguidade</text>
      <text x="546" y="296" font-size="10" fill="var(--ink-50)">no mediastino → irressecável</text>
    </g>
  </g>
  <g class="eso12-trap" data-trap="exame" tabindex="0" role="button" aria-pressed="false" aria-label="Armadilha micro versus macro. Errado: pedir TC para tudo. Certo: USE para o T e o N, TC para o macro, broncoscopia para a luz.">
    <rect x="32" y="324" width="262" height="80" rx="12" fill="url(#eso12-row)" stroke="var(--border-mid)" stroke-width="1.4"/>
    <text x="48" y="356" font-size="12.5" font-weight="700" fill="var(--ink-90)">4 · Micro × macro</text>
    <text x="48" y="376" font-size="10.5" fill="var(--ink-70)">qual exame, qual papel</text>
    <text x="48" y="392" font-size="10.5" fill="var(--ink-70)">USE · TC · broncoscopia</text>
    <g class="eso12-wrong" opacity="0">
      <rect x="306" y="324" width="216" height="80" rx="12" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="1.5"/>
      <text x="318" y="360" font-size="10.5" fill="var(--ink-80)">TC resolve tudo,</text>
      <text x="318" y="376" font-size="10.5" fill="var(--ink-80)">inclusive a profundidade</text>
    </g>
    <g class="eso12-right" opacity="0">
      <rect x="534" y="324" width="194" height="80" rx="12" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="1.5"/>
      <text x="546" y="354" font-size="10.5" fill="var(--ink-80)">USE → T/N (camadas);</text>
      <text x="546" y="370" font-size="10.5" fill="var(--ink-80)">TC → macro/M;</text>
      <text x="546" y="386" font-size="10.5" fill="var(--ink-80)">broncoscopia → luz brônquica</text>
    </g>
  </g>
  <g class="eso12-trap" data-trap="conduta" tabindex="0" role="button" aria-pressed="false" aria-label="Armadilha da conduta pelos extremos. Errado: decorar o TNM detalhado. Certo: T1a endoscópico, T1b a T4a cirurgia, T4b ou M1 paliação.">
    <rect x="32" y="416" width="262" height="80" rx="12" fill="url(#eso12-row)" stroke="var(--border-mid)" stroke-width="1.4"/>
    <text x="48" y="448" font-size="12.5" font-weight="700" fill="var(--ink-90)">5 · Conduta pelos extremos</text>
    <text x="48" y="468" font-size="10.5" fill="var(--ink-70)">T1a · T1b–T4a · T4b/M1</text>
    <text x="48" y="484" font-size="10.5" fill="var(--ink-70)">os extremos mandam</text>
    <g class="eso12-wrong" opacity="0">
      <rect x="306" y="416" width="216" height="80" rx="12" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="1.5"/>
      <text x="318" y="452" font-size="10.5" fill="var(--ink-80)">decorar cada combinação</text>
      <text x="318" y="468" font-size="10.5" fill="var(--ink-80)">do TNM detalhado</text>
    </g>
    <g class="eso12-right" opacity="0">
      <rect x="534" y="416" width="194" height="80" rx="12" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="1.5"/>
      <text x="546" y="446" font-size="10.5" fill="var(--ink-80)">T1a → mucosectomia;</text>
      <text x="546" y="462" font-size="10.5" fill="var(--ink-80)">T1b–T4a → esofagectomia;</text>
      <text x="546" y="478" font-size="10.5" fill="var(--ink-80)">T4b/M1 → paliação</text>
    </g>
  </g>
  <text class="eso12-status" x="380" y="528" text-anchor="middle" font-size="12" fill="var(--ink-50)" aria-live="polite">Toque cada armadilha para ver lado a lado o erro comum e a leitura correta.</text>
  <text x="380" y="548" text-anchor="middle" font-size="10.5" fill="var(--ink-50)">Acima de tudo: clínica → EDA com biópsia → estadiamento. Estadiar antes de diagnosticar é a armadilha das armadilhas.</text>
</svg>
```
