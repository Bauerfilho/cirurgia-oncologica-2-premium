# SVGs profundos — Aula 04 · Tumores Hepáticos

Ilustrações reais (figure-svg, não ícone) para as 7 páginas que ainda não têm:
**p1, p2, p3, p4, p8, p9, p14**. Padrão extra-06/extra-07: cada SVG ensina sozinho
(Checagem Bauer), interação com propósito, fallback estático legível, tokens
(`var(--…)`, **zero hex**), `role="img"` + `<title>`/`<desc>`, sem SMIL.

> **Convenção de cor desta aula** — teal = baseline/benigno/favorável · coral =
> agressão/maligno/sangramento · âmbar = pegadinha/indeterminado · verde
> (`--ok-green`) = ressecável/bom/conduta certa · vermelho (`--err-red`) =
> irressecável/perigo/óbito.

> **Como cada interação acende** — todas as 7 figuras usam **engines já existentes**
> no `assets/js/components/interactive.js` (carregado por `initInteractive(document)`
> em `aula-04.js`). **NÃO é preciso editar nenhum arquivo do produto nem criar JS novo.**
> - **Hotspot** (`data-hs-stage` no `.figure-svg__stage` + `.hs-shape` com
>   `data-hs-label/-text/-hint/-tone` + `.hotspot-detail[data-hs-detail-for]`) → p1, p2, p3, p4, p8, p14.
> - **Toggle** (`.toggle-switch[data-toggle]` + `.toggle-panel[data-toggle-for][data-key]`) → p9 (duas faces).
>
> O atributo extra `data-eso="hepN"` e a classe `.il-hepN` vão no `<svg>` como
> identidade/âncora da aula (não exigidos pelo engine, são marca semântica pedida).

> **Tons válidos** (do CSS): `.hs-shape` → `danger` (coral), `trap` (âmbar), default (teal).
> `.hotspot-detail[data-tone]` → `danger`, `trap`. Texto interno: `.svg-label` (mono 11px),
> `.svg-title` (sans 700). Fundo do palco já é glass — SVGs usam `--bg-elevated*` só onde precisam de superfície.

---

## P1 — Mapa da aula · "no fígado o tumor benigno também mata"

**Conceito:** visão geral do espectro hepático. Quatro lesões dispostas numa régua
**benigno → maligno**, com o gancho de que mesmo do lado benigno o **adenoma sangra
e mata**. Cada lesão é um hotspot que entrega o cartão-resumo (mais comum / cicatriz
/ duas-caras / washout). **Não repete** o "mapa do caso" das aulas 1–3 (aquilo era
pistas→diagnóstico); aqui é o **panorama da aula inteira numa régua de agressividade**.

**Ponto de inserção:** página `p1`, **logo após o `</div>` que fecha o
`dash__metrics`** (linha ~107) e **antes do `<h2>Trilha da aula</h2>`** (linha 109).
A figura abre o panorama visual antes da grade textual da trilha.

**Interação:** hotspot — 4 lesões + o selo "benigno também mata". `data-hs-stage="hep1"`.

```html
<figure class="figure-svg" role="group" aria-labelledby="cap-hep1">
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="hep1" aria-live="polite">
      <svg class="il-hep1" data-eso="hep1" viewBox="0 0 760 380" role="img" aria-labelledby="t-hep1 d-hep1">
        <title id="t-hep1">Espectro dos tumores hepáticos do benigno ao maligno</title>
        <desc id="d-hep1">Régua horizontal de agressividade com quatro lesões hepáticas: hemangioma e hiperplasia nodular focal no campo benigno em teal, adenoma na zona de transição em coral por sangrar e poder malignizar, e hepatocarcinoma no campo maligno em vermelho. Cada lesão é clicável.</desc>

        <!-- régua benigno → maligno -->
        <defs>
          <linearGradient id="hep1-rail" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="var(--teal-40)"/>
            <stop offset="45%" stop-color="var(--teal-30)"/>
            <stop offset="62%" stop-color="var(--warn-amber)"/>
            <stop offset="100%" stop-color="var(--err-red)"/>
          </linearGradient>
        </defs>
        <rect x="40" y="300" width="680" height="10" rx="5" fill="url(#hep1-rail)" opacity="0.85"/>
        <text x="40"  y="338" class="svg-label" fill="var(--teal-60)">BENIGNO</text>
        <text x="612" y="338" class="svg-label" fill="var(--err-red)">MALIGNO</text>
        <text x="380" y="338" text-anchor="middle" class="svg-label" fill="var(--ink-50)">agressividade →</text>

        <!-- frase-gancho -->
        <text x="380" y="40" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="17">No fígado, o tumor benigno também mata.</text>
        <text x="380" y="62" text-anchor="middle" class="svg-label" fill="var(--ink-70)">clique em cada lesão para ver o que a define</text>

        <!-- LESÃO 1 — Hemangioma (mais comum, benigno) -->
        <g class="hs-shape" data-hs-label="Hemangioma — o mais comum" data-hs-text="Tumor hepático mais comum de todos (benigno). Pouco vascularizado: capta o contraste só na periferia, em glóbulos, de fora para o centro (centrípeta), e o retém. Cuidado: o 'mais comum' NÃO é o cisto. Conduta: só acompanhar." data-hs-hint="Periférica centrípeta · retém contraste · acompanhar.">
          <circle cx="130" cy="190" r="48" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.4"/>
          <circle cx="106" cy="172" r="7" fill="var(--teal-60)"/><circle cx="156" cy="170" r="7" fill="var(--teal-60)"/>
          <circle cx="100" cy="210" r="6" fill="var(--teal-60)"/><circle cx="162" cy="208" r="6" fill="var(--teal-60)"/>
          <text x="130" y="258" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="13">Hemangioma</text>
          <text x="130" y="274" text-anchor="middle" class="svg-label" fill="var(--ink-70)">mais comum</text>
          <line x1="130" y1="282" x2="130" y2="300" stroke="var(--teal-40)" stroke-width="1.6"/>
        </g>

        <!-- LESÃO 2 — HNF (benigno, cicatriz central) -->
        <g class="hs-shape" data-hs-label="Hiperplasia nodular focal — a cicatriz" data-hs-text="Segundo benigno mais comum. Hepatócitos saudáveis hiperplasiados ao redor de uma malformação vascular boba — hipercaptam, mas o centro (a malformação) não capta: imagem em estrela/cicatriz central que persiste em todas as fases. Capta Primovist. Conduta: acompanhar." data-hs-hint="Cicatriz/estrela central · capta Primovist · acompanhar.">
          <circle cx="300" cy="190" r="48" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.4"/>
          <path d="M300 162 L308 184 L330 184 L312 198 L319 220 L300 206 L281 220 L288 198 L270 184 L292 184 Z" fill="var(--bg-elevated-2)" stroke="var(--ink-50)" stroke-width="1.4"/>
          <text x="300" y="258" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="13">HNF</text>
          <text x="300" y="274" text-anchor="middle" class="svg-label" fill="var(--ink-70)">cicatriz central</text>
          <line x1="300" y1="282" x2="300" y2="300" stroke="var(--teal-40)" stroke-width="1.6"/>
        </g>

        <!-- LESÃO 3 — Adenoma (transição: benigno que sangra/maligniza) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Adenoma — o duas-caras" data-hs-text="Aqui está o gancho da aula. Histologicamente benigno, MAS hipervascularizado (hormonal, da mulher jovem): pode ROMPER e SANGRAR até o choque, e pode MALIGNIZAR (sequência adenoma→carcinoma). Foi o que matou a enfermeira do caso. Por isso ocupa a zona de transição." data-hs-hint="Benigno que sangra e maligniza — 'duas-caras'.">
          <circle cx="470" cy="190" r="50" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="2.6"/>
          <path d="M470 158 q22 14 0 32 q-22 -14 0 -32 Z" fill="var(--err-red)" opacity="0.85"/>
          <path d="M470 222 q-20 -14 0 -30 q20 16 0 30 Z" fill="var(--err-red)" opacity="0.55"/>
          <text x="470" y="258" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="13">Adenoma</text>
          <text x="470" y="274" text-anchor="middle" class="svg-label" fill="var(--coral-80)">benigno · sangra</text>
          <line x1="470" y1="282" x2="470" y2="300" stroke="var(--coral-50)" stroke-width="1.8"/>
        </g>

        <!-- LESÃO 4 — Hepatocarcinoma (maligno, washout) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Hepatocarcinoma — o maligno primário" data-hs-text="Tumor maligno primário mais comum do fígado. Surge sobre CIRROSE (hepatite C é a principal; só a hepatite B dispensa a cirrose). Imagem: hipercaptação arterial + WASHOUT (hiper vira hipo) + pseudocápsula. Marcador: alfa-fetoproteína. Se tem washout, é câncer." data-hs-hint="Cirrose + AFP · hipercapta + washout · câncer.">
          <circle cx="640" cy="190" r="50" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="2.8"/>
          <path d="M640 150 a40 40 0 0 1 0 80" fill="var(--err-red)" opacity="0.30"/>
          <path d="M612 165 l56 50 M668 165 l-56 50" stroke="var(--err-red)" stroke-width="2" opacity="0.7"/>
          <text x="640" y="258" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="13">Hepatocarcinoma</text>
          <text x="640" y="274" text-anchor="middle" class="svg-label" fill="var(--err-red)">washout · AFP</text>
          <line x1="640" y1="282" x2="640" y2="300" stroke="var(--err-red)" stroke-width="1.8"/>
        </g>
      </svg>
    </div>
  </div>
  <figcaption id="cap-hep1"><strong>O fígado numa régua só.</strong> Da esquerda benigna (hemangioma, HNF — só acompanhar) à direita maligna (hepatocarcinoma — washout). No meio, em coral, o <strong>adenoma</strong>: benigno na histologia, mas sangra e pode virar câncer. Clique em cada lesão.</figcaption>
</figure>
<div class="hotspot-detail" data-hs-detail-for="hep1" aria-live="polite">
  <div class="hotspot-detail__label">Clique numa lesão</div>
  <p class="hotspot-detail__text">Toque em cada tumor da régua para ver o que o define — e por que o adenoma, mesmo benigno, fica no campo de perigo.</p>
</div>
```

---

## P2 — O caso da enfermeira · MAPA DO CASO (pistas → adenoma roto)

**Conceito:** as pistas do enunciado convergindo para **adenoma hepático roto**.
Modelo eso1/ccr1 (mapa do caso), mas com **conteúdo e arranjo próprios** — pistas
dispostas em torno de um alvo central, cada uma um hotspot. A pista decisiva
(tumor hepático que sangrou) já nasce em coral.

> **Não repete** o mapa-do-caso gástrico/CRC: lá as pistas eram idade/sintoma/fator;
> aqui o eixo é **jovem sem comorbidade + ACO + dor súbita/síncope + hipotensão +
> sem cirrose** — quadro de **abdome agudo hemorrágico por tumor benigno**, conceito
> exclusivo desta aula.

**Ponto de inserção:** página `p2`, **logo após o `</div>` que fecha o primeiro
`<div class="prose">` (linha ~177)** e **antes do `<div class="reveal" data-reveal="caso">`
(linha 179)**. O mapa entra como síntese visual antes da linha do tempo em atos.

**Interação:** hotspot — 5 pistas + alvo central. `data-hs-stage="hep2"`.

```html
<figure class="figure-svg" role="group" aria-labelledby="cap-hep2">
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="hep2" aria-live="polite">
      <svg class="il-hep2" data-eso="hep2" viewBox="0 0 720 440" role="img" aria-labelledby="t-hep2 d-hep2">
        <title id="t-hep2">Mapa do caso da enfermeira convergindo para adenoma hepático roto</title>
        <desc id="d-hep2">Cinco pistas clínicas dispostas em volta de um alvo central: mulher jovem, uso de anticoncepcional oral, dor abdominal súbita com síncope, hipotensão, e ausência de comorbidades e cirrose. As setas convergem para o diagnóstico de adenoma hepático roto e sangrante.</desc>

        <!-- alvo central -->
        <circle cx="360" cy="220" r="78" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="2.6"/>
        <circle cx="360" cy="220" r="78" fill="none" stroke="var(--err-red)" stroke-width="1.2" stroke-dasharray="3 5" opacity="0.6"/>
        <text x="360" y="208" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="16">Adenoma</text>
        <text x="360" y="228" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="16">hepático roto</text>
        <text x="360" y="250" text-anchor="middle" class="svg-label" fill="var(--err-red)">benigno · sangrou · matou</text>

        <!-- setas convergentes (estáticas; fallback) -->
        <g stroke="var(--coral-50)" stroke-width="1.6" opacity="0.45" fill="none">
          <path d="M168 96  C250 140 290 160 312 184"/>
          <path d="M566 96  C470 140 430 160 408 184"/>
          <path d="M120 230 C200 226 250 224 282 222"/>
          <path d="M600 230 C520 226 470 224 438 222"/>
          <path d="M360 372 L360 300"/>
        </g>

        <!-- PISTA 1 — mulher jovem -->
        <g class="hs-shape" data-hs-label="Mulher jovem" data-hs-text="Tumor hepático BENIGNO é mais comum na mulher (o maligno é do homem velho). E o adenoma é hormonal: a mulher jovem tem maior carga hormonal circulante, logo maior chance. Perfil oposto ao dos cânceres do tubo digestivo das aulas anteriores." data-hs-hint="Benigno hepático = mulher; jovem = mais hormônio.">
          <rect x="56" y="60" width="170" height="56" rx="14" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="2"/>
          <text x="72" y="86" class="svg-title" fill="var(--ink-100)" font-size="14">Mulher, 45 anos</text>
          <text x="72" y="104" class="svg-label" fill="var(--ink-70)">perfil de tumor benigno</text>
        </g>

        <!-- PISTA 2 — ACO / hormônio -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Anticoncepcional / hormônio" data-hs-text="O adenoma é tumor HORMONAL: anticoncepcional oral e anabolizantes alimentam o crescimento e a vascularização. É a pista que a banca planta para você ligar adenoma — e a base da conduta (suspender o hormônio)." data-hs-hint="ACO/anabolizante → adenoma cresce e sangra.">
          <rect x="494" y="60" width="170" height="56" rx="14" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2"/>
          <text x="510" y="86" class="svg-title" fill="var(--ink-100)" font-size="14">Anticoncepcional</text>
          <text x="510" y="104" class="svg-label" fill="var(--warn-amber)">pista hormonal · enunciado</text>
        </g>

        <!-- PISTA 3 — dor súbita + síncope -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Dor súbita + síncope" data-hs-text="Dor abdominal difusa súbita com síncope = evento agudo intra-abdominal. Síncope sinaliza queda brusca de volume — hemorragia. No contexto de massa hepática, é o tumor que rompeu e está sangrando para a cavidade." data-hs-hint="Súbito + desmaio = sangramento agudo.">
          <rect x="36" y="196" width="170" height="56" rx="14" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="2.2"/>
          <text x="52" y="222" class="svg-title" fill="var(--ink-100)" font-size="14">Dor súbita + síncope</text>
          <text x="52" y="240" class="svg-label" fill="var(--coral-80)">evento hemorrágico agudo</text>
        </g>

        <!-- PISTA 4 — hipotensão -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Hipotensão / instabilidade" data-hs-text="Hipotensa e taquipneica à admissão, ressuscitação volêmica — sinais de choque hipovolêmico. É a tradução hemodinâmica do sangramento de vulto que a laparotomia confirmou. A glicemia 110 só descarta hipoglicemia como causa da síncope." data-hs-hint="Choque hipovolêmico = perda de sangue.">
          <rect x="514" y="196" width="170" height="56" rx="14" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="2.2"/>
          <text x="530" y="222" class="svg-title" fill="var(--ink-100)" font-size="14">Hipotensão</text>
          <text x="530" y="240" class="svg-label" fill="var(--coral-80)">choque hipovolêmico</text>
        </g>

        <!-- PISTA 5 — sem cirrose/comorbidade (afasta CHC) -->
        <g class="hs-shape" data-hs-label="Sem cirrose, sem comorbidade" data-hs-text="Nega hipertensão, diabetes, tabagismo, etilismo e drogas IV — sem terreno de cirrose. Isso AFASTA o hepatocarcinoma (que exige cirrose, salvo hepatite B) e reforça o tumor benigno hipervascularizado da mulher jovem: o adenoma." data-hs-hint="Sem cirrose → não é CHC → favorece adenoma.">
          <rect x="275" y="372" width="170" height="56" rx="14" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2"/>
          <text x="291" y="398" class="svg-title" fill="var(--ink-100)" font-size="14">Sem cirrose</text>
          <text x="291" y="416" class="svg-label" fill="var(--teal-60)">afasta hepatocarcinoma</text>
        </g>
      </svg>
    </div>
  </div>
  <figcaption id="cap-hep2"><strong>As pistas convergem.</strong> Mulher jovem + hormônio + dor súbita com síncope + hipotensão, num fígado <em>sem</em> cirrose: o quadro inteiro aponta um <strong>adenoma hepático roto</strong> — benigno na histologia, fatal pelo sangramento. Clique em cada pista.</figcaption>
</figure>
<div class="hotspot-detail" data-hs-detail-for="hep2" aria-live="polite">
  <div class="hotspot-detail__label">Clique numa pista</div>
  <p class="hotspot-detail__text">Toque em cada pista do caso para ver como ela empurra o diagnóstico para o adenoma roto — e o que ela afasta.</p>
</div>
```

---

## P3 — Por que o fígado não se biopsia (hipervascular → sangra + semeia)

**Conceito:** o fígado é hipervascular; biopsiar arrisca **sangramento** (vaso nutridor)
**e** **semeadura** peritoneal pela trajetória da agulha → por isso o diagnóstico é
**por imagem**. A figura mostra a agulha atravessando um tumor cheio de vasos, com os
dois riscos como hotspots, e o desfecho (TC/RM dinâmica) como o caminho seguro.

> **Não repete** o "regra de ouro da biópsia" da Aula 1 (ver/alcançar/não semear, num
> esôfago). Aqui o eixo é **a segunda razão exclusiva do fígado — a hemorragia do
> órgão hipervascular** — e o desenho é a agulha-no-vaso, não a parede do tubo.

**Ponto de inserção:** página `p3`, **logo após o `</div>` que fecha o primeiro
`<div class="prose">` (linha ~241)** e **antes do `<div class="split">` (linha 243)**.
A figura ilustra a "segunda razão" antes do quadro comparativo biopsia-sim/não.

**Interação:** hotspot — risco sangramento (coral), risco semeadura (âmbar), saída
imagem (verde). `data-hs-stage="hep3"`.

```html
<figure class="figure-svg" role="group" aria-labelledby="cap-hep3">
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="hep3" aria-live="polite">
      <svg class="il-hep3" data-eso="hep3" viewBox="0 0 720 400" role="img" aria-labelledby="t-hep3 d-hep3">
        <title id="t-hep3">Por que não se biopsia o fígado hipervascular</title>
        <desc id="d-hep3">Tumor hepático ricamente vascularizado atravessado por uma agulha de biópsia. Dois riscos destacados: sangramento ao perfurar um vaso nutridor e semeadura de células tumorais pelo trajeto da agulha. O caminho seguro é o diagnóstico por imagem dinâmica.</desc>

        <!-- contorno do fígado -->
        <path d="M70 130 C70 80 160 60 300 70 C420 78 470 110 470 170 C470 250 380 300 250 300 C150 300 70 250 70 180 Z" fill="var(--bg-elevated-2)" stroke="var(--border-strong)" stroke-width="2"/>
        <text x="96" y="118" class="svg-label" fill="var(--ink-50)">fígado · órgão hipervascular</text>

        <!-- tumor hipervascular (massa + vasos nutridores) -->
        <g>
          <circle cx="260" cy="190" r="66" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="2.4"/>
          <g stroke="var(--err-red)" stroke-width="2.2" fill="none" opacity="0.85" stroke-linecap="round">
            <path d="M198 168 C224 176 236 184 256 188"/>
            <path d="M206 214 C230 208 244 200 258 194"/>
            <path d="M268 134 C264 156 262 172 260 186"/>
            <path d="M316 178 C296 184 282 188 264 190"/>
            <path d="M300 226 C284 212 274 204 262 194"/>
          </g>
          <circle cx="260" cy="190" r="6" fill="var(--err-red)"/>
        </g>

        <!-- agulha de biópsia atravessando -->
        <g>
          <line x1="430" y1="70" x2="266" y2="186" stroke="var(--ink-100)" stroke-width="3"/>
          <polygon points="266,186 280,182 278,196" fill="var(--ink-100)"/>
          <text x="404" y="60" text-anchor="end" class="svg-label" fill="var(--ink-70)">agulha percutânea</text>
        </g>

        <!-- RISCO 1 — sangramento (no vaso nutridor) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Risco 1 — sangramento" data-hs-text="O tumor hepático é hipervascular. Se a agulha pega um vaso nutridor, ele SANGRA — e pode sangrar até o paciente morrer. Esta é a segunda razão, exclusiva do fígado, para não biopsiar (no tubo digestivo essa razão não existe)." data-hs-hint="Vaso nutridor perfurado = hemorragia incontrolável.">
          <circle cx="234" cy="214" r="26" fill="var(--err-red)" opacity="0.18" stroke="var(--err-red)" stroke-width="2"/>
          <path d="M234 200 q12 12 0 26 q-12 -14 0 -26 Z" fill="var(--err-red)" opacity="0.85"/>
          <text x="234" y="262" text-anchor="middle" class="svg-label" fill="var(--err-red)">sangra</text>
        </g>

        <!-- RISCO 2 — semeadura no trajeto -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Risco 2 — semeadura" data-hs-text="Ao recuar, a agulha pode arrastar células tumorais pelo trajeto e semeá-las no peritônio — a mesma razão que vale para toda víscera sólida (pâncreas, rim, baço, ovário…). Diagnóstico por biópsia só quando se retira sem semear: aqui não dá." data-hs-hint="Trajeto da agulha semeia o peritônio.">
          <g transform="translate(360 118)">
            <circle r="20" fill="var(--warn-amber)" opacity="0.16" stroke="var(--warn-amber)" stroke-width="1.8"/>
            <circle cx="-4" cy="-3" r="3.2" fill="var(--warn-amber)"/><circle cx="6" cy="2" r="2.6" fill="var(--warn-amber)"/>
            <circle cx="-2" cy="7" r="2.2" fill="var(--warn-amber)"/><circle cx="8" cy="-6" r="2" fill="var(--warn-amber)"/>
          </g>
          <text x="360" y="156" text-anchor="middle" class="svg-label" fill="var(--warn-amber)">semeia</text>
        </g>

        <!-- SAÍDA — imagem dinâmica (caminho seguro) -->
        <g class="hs-shape" data-hs-label="A saída — diagnóstico por imagem" data-hs-text="Se a agulha não pode decidir, quem decide é a IMAGEM: TC ou RM dinâmica (trifásica). Sem perfurar, sem semear — lê-se o tumor pela captação arterial e pelo washout. É por isso que a aula te transforma num leitor de TC." data-hs-hint="TC/RM dinâmica · sem agulha · captação + washout.">
          <rect x="520" y="160" width="170" height="92" rx="16" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="2.4"/>
          <text x="605" y="194" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="15">TC / RM dinâmica</text>
          <text x="605" y="216" text-anchor="middle" class="svg-label" fill="var(--ink-90)">caminho seguro</text>
          <text x="605" y="234" text-anchor="middle" class="svg-label" fill="var(--ink-70)">captação + washout</text>
        </g>
        <path d="M470 206 L518 206" stroke="var(--ok-green)" stroke-width="2.4" fill="none" marker-end="none"/>
        <polygon points="518,206 506,201 506,211" fill="var(--ok-green)"/>
      </svg>
    </div>
  </div>
  <figcaption id="cap-hep3"><strong>Duas razões para não furar.</strong> No tubo digestivo, biopsiar arrisca <em>semear</em> célula. No fígado soma-se a <em>hemorragia</em> do órgão hipervascular — beliscar um vaso nutridor abre sangramento incontrolável. Por isso o diagnóstico é por <strong>imagem</strong>. Clique em cada elemento.</figcaption>
</figure>
<div class="hotspot-detail" data-hs-detail-for="hep3" aria-live="polite">
  <div class="hotspot-detail__label">Clique num risco ou na saída</div>
  <p class="hotspot-detail__text">Toque no sangramento, na semeadura ou no caminho da imagem para entender por que a agulha não decide no fígado.</p>
</div>
```

---

## P4 — Ler a TC trifásica · linha do tempo das fases (step por fase)

**Conceito:** a sequência **sem contraste → arterial → portal/venosa → equilíbrio/tardia**
numa linha do tempo, com a aorta como relógio (escura → brilha "feito o sol" → vai
apagando) e o que cada fase mostra. Como o engine compartilhado não tem step-through,
cada **fase é um hotspot** numa régua temporal — clicar caminha pela leitura. Mantém
o "step-through por fase" pedido, dentro do contrato existente.

> **Não repete** o `toggle TC/RM` já presente na própria p4 (aquilo é a pergunta 1,
> osso branco). Esta figura é a **pergunta 2 visual — as quatro fases e seus achados**,
> com a aorta-relógio, que o texto descreve mas não desenha.

**Ponto de inserção:** página `p4`, **logo após o `</div>` que fecha o
`toggle-panel[data-key="rm"]` (linha ~327)** e **antes do `<h2>Pergunta 2 — qual fase
estou vendo?</h2>` (linha 329)**. A figura abre a pergunta 2 como esquema das fases.

**Interação:** hotspot — 4 fases na régua temporal. `data-hs-stage="hep4"`.

```html
<figure class="figure-svg" role="group" aria-labelledby="cap-hep4">
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="hep4" aria-live="polite">
      <svg class="il-hep4" data-eso="hep4" viewBox="0 0 760 360" role="img" aria-labelledby="t-hep4 d-hep4">
        <title id="t-hep4">As quatro fases da TC dinâmica e a aorta como relógio</title>
        <desc id="d-hep4">Linha do tempo com quatro momentos da TC dinâmica: sem contraste, fase arterial, fase portal e fase de equilíbrio. Em cada momento, um corte mostra a aorta e o fígado: a aorta está escura sem contraste, brilha intensamente na fase arterial, e vai esmaecendo nas fases seguintes. Cada fase é clicável.</desc>

        <!-- eixo do tempo -->
        <line x1="60" y1="300" x2="700" y2="300" stroke="var(--border-strong)" stroke-width="1.8"/>
        <polygon points="700,300 690,295 690,305" fill="var(--border-strong)"/>
        <text x="688" y="326" text-anchor="end" class="svg-label" fill="var(--ink-50)">tempo após o contraste →</text>

        <!-- FASE 1 — sem contraste -->
        <g class="hs-shape" data-hs-label="1 · Sem contraste" data-hs-text="Primeira imagem, antes do contraste. Nada brilha: a aorta está escura. Todo tumor fica HIPODENSO (mais escuro) aqui, qualquer que seja a etiologia — é o ponto de partida para comparar com as fases seguintes." data-hs-hint="Aorta escura · todo tumor é escuro.">
          <circle cx="140" cy="150" r="58" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="2"/>
          <circle cx="140" cy="150" r="12" fill="var(--ink-30)"/><!-- aorta escura -->
          <circle cx="118" cy="160" r="16" fill="var(--ink-30)" opacity="0.7"/><!-- tumor escuro -->
          <text x="140" y="232" text-anchor="middle" class="svg-title" fill="var(--ink-90)" font-size="13">sem contraste</text>
          <text x="140" y="250" text-anchor="middle" class="svg-label" fill="var(--ink-70)">aorta escura</text>
          <circle cx="140" cy="300" r="6" fill="var(--ink-50)"/>
        </g>

        <!-- FASE 2 — arterial (aorta brilha feito o sol) -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="2 · Arterial" data-hs-text="O contraste acabou de ser injetado e está nas artérias: a AORTA BRILHA 'feito o sol' — a única fase em que ela brilha forte. É o marcador para começar a ler o tumor: como ele capta agora (periférica? hipercapta? não capta?). Cuidado com a veia cava, que clareia um pouco perto da aorta — não é tumor." data-hs-hint="Aorta brilhando = fase arterial = hora de ler a captação.">
          <circle cx="320" cy="150" r="58" fill="var(--bg-elevated-2)" stroke="var(--warn-amber)" stroke-width="2.4"/>
          <circle cx="320" cy="150" r="13" fill="var(--warn-amber)"/>
          <circle cx="320" cy="150" r="20" fill="var(--warn-amber)" opacity="0.28"/><!-- glow sol -->
          <circle cx="338" cy="162" r="7" fill="var(--warn-amber)" opacity="0.55"/><!-- cava clareia -->
          <text x="320" y="232" text-anchor="middle" class="svg-title" fill="var(--warn-amber)" font-size="13">arterial</text>
          <text x="320" y="250" text-anchor="middle" class="svg-label" fill="var(--warn-amber)">aorta feito o sol</text>
          <circle cx="320" cy="300" r="7" fill="var(--warn-amber)"/>
        </g>

        <!-- FASE 3 — portal (parênquima realça) -->
        <g class="hs-shape" data-hs-label="3 · Portal" data-hs-text="O contraste passou para o sistema porta: agora o PARÊNQUIMA HEPÁTICO realça (recebe sangue sobretudo pela porta). A aorta já não é a mais brilhante. É a fase onde se separa adenoma (some/iso) de washout (fica hipo) e onde aparece a pseudocápsula do CHC." data-hs-hint="Parênquima realça · separa iso de washout.">
          <circle cx="500" cy="150" r="58" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.2"/>
          <circle cx="500" cy="150" r="11" fill="var(--ink-50)"/>
          <path d="M500 92 a58 58 0 0 1 0 116" fill="var(--teal-40)" opacity="0.25"/>
          <text x="500" y="232" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="13">portal</text>
          <text x="500" y="250" text-anchor="middle" class="svg-label" fill="var(--ink-70)">parênquima realça</text>
          <circle cx="500" cy="300" r="6" fill="var(--teal-50)"/>
        </g>

        <!-- FASE 4 — equilíbrio / tardia -->
        <g class="hs-shape" data-hs-label="4 · Equilíbrio (venosa/tardia)" data-hs-text="O contraste se distribuiu por todo o tecido — é o equilíbrio (fase venosa/tardia). Aqui se confirma o destino do contraste no tumor: retido (hemangioma), eliminado (washout do câncer) ou misturado ao parênquima (adenoma iso). Fecha a leitura das fases." data-hs-hint="Contraste distribuído · confirma retém/elimina/iso.">
          <circle cx="660" cy="150" r="58" fill="var(--teal-05)" stroke="var(--teal-40)" stroke-width="2"/>
          <circle cx="660" cy="150" r="10" fill="var(--ink-50)" opacity="0.7"/>
          <circle cx="660" cy="150" r="40" fill="var(--teal-30)" opacity="0.16"/>
          <text x="660" y="232" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="13">equilíbrio</text>
          <text x="660" y="250" text-anchor="middle" class="svg-label" fill="var(--ink-70)">tudo distribuído</text>
          <circle cx="660" cy="300" r="6" fill="var(--teal-40)"/>
        </g>

        <!-- conector arterial→aorta (rótulo-relógio) -->
        <text x="60" y="48" class="svg-title" fill="var(--ink-100)" font-size="15">A aorta é o relógio da TC dinâmica</text>
        <text x="60" y="68" class="svg-label" fill="var(--ink-70)">escura → brilha (arterial) → esmaece — clique em cada fase</text>
      </svg>
    </div>
  </div>
  <figcaption id="cap-hep4"><strong>Quatro imagens, um relógio.</strong> A aorta começa escura (sem contraste), <em>brilha feito o sol</em> na arterial, depois esmaece enquanto o parênquima realça (portal) e o contraste se distribui (equilíbrio). Achar a fase arterial é o gatilho para ler o tumor. Clique em cada fase.</figcaption>
</figure>
<div class="hotspot-detail" data-hs-detail-for="hep4" aria-live="polite">
  <div class="hotspot-detail__label">Clique numa fase</div>
  <p class="hotspot-detail__text">Toque em cada fase para ver o que ela mostra — e por que a aorta brilhando marca a hora de interpretar o tumor.</p>
</div>
```

---

## P8 — Hiperplasia nodular focal · cicatriz central + artéria aberrante (hotspot na cicatriz)

**Conceito:** o mecanismo da HNF. No centro, a **malformação vascular** (artéria central
aberrante, "vaso bobo") que **não capta** e fica como **cicatriz central em estrela**;
ela **produz fatores de crescimento** que fazem os hepatócitos ao redor **hiperplasiar**
e **hipercaptar**. O hotspot principal é **a cicatriz** (o que a aula pede), e há a coroa
de hepatócitos e a seta dos fatores de crescimento.

> **Não repete** nenhuma figura prévia — é mecanismo celular-vascular específico da HNF.
> Complementa o toggle Primovist já existente na p8 (este é o "por dentro" da lesão).

**Ponto de inserção:** página `p8`, **logo após o `</div>` que fecha o
`<div class="prose">` com o segundo parágrafo (linha ~708)** e **antes do
`<div class="card card--info">` do Primovist (linha 710)**. A figura mostra o mecanismo
antes do recurso diagnóstico que o resolve.

**Interação:** hotspot — cicatriz/vaso central (default teal-neutro: é benigno), coroa
de hepatócitos, fatores de crescimento. `data-hs-stage="hep8"`.

```html
<figure class="figure-svg" role="group" aria-labelledby="cap-hep8">
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="hep8" aria-live="polite">
      <svg class="il-hep8" data-eso="hep8" viewBox="0 0 640 460" role="img" aria-labelledby="t-hep8 d-hep8">
        <title id="t-hep8">Mecanismo da hiperplasia nodular focal e a cicatriz central</title>
        <desc id="d-hep8">Lesão arredondada com uma cicatriz central em estrela ocupada por uma artéria aberrante que não capta contraste. Ao redor, hepatócitos saudáveis hiperplasiados em nódulos que hipercaptam. Setas indicam os fatores de crescimento que a malformação libera, estimulando os hepatócitos vizinhos.</desc>

        <!-- corpo da lesão (coroa hipercaptante) -->
        <circle cx="300" cy="230" r="150" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.6"/>

        <!-- HOTSPOT 2 — coroa de hepatócitos hiperplasiados (hipercaptantes) -->
        <g class="hs-shape" data-hs-label="Hepatócitos hiperplasiados — hipercaptam" data-hs-text="Hepatócitos SAUDÁVEIS (sem mutação), apenas hiperestimulados pelos fatores de crescimento da malformação. Multiplicam-se em nódulos e captam o contraste muito rápido na fase arterial — daí a lesão acende ao redor. Como são saudáveis, captam o Primovist (= HNF)." data-hs-hint="Saudáveis, hiperplasiados, hipercaptantes · captam Primovist.">
          <g fill="var(--teal-40)" opacity="0.55">
            <circle cx="300" cy="108" r="17"/><circle cx="378" cy="132" r="16"/><circle cx="420" cy="200" r="17"/>
            <circle cx="416" cy="280" r="16"/><circle cx="368" cy="338" r="17"/><circle cx="300" cy="360" r="16"/>
            <circle cx="232" cy="338" r="17"/><circle cx="184" cy="280" r="16"/><circle cx="180" cy="200" r="17"/>
            <circle cx="222" cy="132" r="16"/>
          </g>
          <text x="300" y="424" text-anchor="middle" class="svg-label" fill="var(--teal-60)">hepatócitos hiperplasiados (hipercaptam)</text>
        </g>

        <!-- HOTSPOT 3 — fatores de crescimento (setas do centro para a coroa) -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Fatores de crescimento" data-hs-text="A malformação vascular não é apenas um vaso parado: ela LIBERA fatores de crescimento que estimulam os hepatócitos ao redor a proliferar — em nódulos, e só nessa região (focal). É a explicação do nome: hiperplasia (proliferação) nodular (em nódulos) focal (ao redor da malformação)." data-hs-hint="O 'vaso bobo' estimula os hepatócitos → hiperplasia nodular focal.">
          <g stroke="var(--warn-amber)" stroke-width="2.2" fill="none" opacity="0.8">
            <path d="M300 196 L300 150"/><path d="M328 210 L368 178"/><path d="M334 230 L388 230"/>
            <path d="M328 250 L368 282"/><path d="M300 264 L300 312"/><path d="M272 250 L232 282"/>
            <path d="M266 230 L212 230"/><path d="M272 210 L232 178"/>
          </g>
          <g fill="var(--warn-amber)">
            <polygon points="300,150 295,162 305,162"/><polygon points="388,230 376,225 376,235"/>
            <polygon points="300,312 295,300 305,300"/><polygon points="212,230 224,225 224,235"/>
          </g>
        </g>

        <!-- HOTSPOT 1 (principal) — cicatriz central / artéria aberrante -->
        <g class="hs-shape" data-hs-label="Cicatriz central — a artéria aberrante" data-hs-text="O coração da HNF: uma malformação vascular ('vaso bobo') que não capta nem elimina contraste rápido. Na imagem, fica como uma CICATRIZ CENTRAL EM ESTRELA, não captante, persistente em todas as fases (na portal as cores se invertem — o centro clareia — mas a estrela continua). É o achado que define a HNF." data-hs-hint="Cicatriz/estrela central não captante = HNF. Persiste em todas as fases.">
          <circle cx="300" cy="230" r="50" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.6"/>
          <path d="M300 188 L312 218 L344 220 L318 240 L328 272 L300 254 L272 272 L282 240 L256 220 L288 218 Z" fill="var(--bg-elevated-2)" stroke="var(--ink-50)" stroke-width="1.6"/>
          <!-- artéria central aberrante -->
          <path d="M300 230 C300 218 290 212 282 206 M300 230 C308 222 316 224 326 222 M300 230 C302 244 308 252 314 260" stroke="var(--coral-50)" stroke-width="2.2" fill="none"/>
          <circle cx="300" cy="230" r="5" fill="var(--coral-50)"/>
          <text x="300" y="234" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="10">artéria central</text>
        </g>

        <text x="40" y="44" class="svg-title" fill="var(--ink-100)" font-size="15">Hiperplasia nodular focal — por dentro</text>
        <text x="40" y="64" class="svg-label" fill="var(--ink-70)">clique na cicatriz central, na coroa e nos fatores de crescimento</text>
      </svg>
    </div>
  </div>
  <figcaption id="cap-hep8"><strong>O vaso bobo que faz crescer.</strong> No centro, a malformação vascular vira uma <strong>cicatriz em estrela</strong> que não capta; em volta, ela despeja fatores de crescimento que fazem os hepatócitos saudáveis hiperplasiarem e <em>hipercaptarem</em>. Hiperplasia (proliferação) · nodular (em nódulos) · focal (ao redor do vaso). Clique nos elementos.</figcaption>
</figure>
<div class="hotspot-detail" data-hs-detail-for="hep8" aria-live="polite">
  <div class="hotspot-detail__label">Clique num elemento</div>
  <p class="hotspot-detail__text">Toque na cicatriz central, na coroa de hepatócitos ou nas setas dos fatores de crescimento para montar o mecanismo da HNF.</p>
</div>
```

---

## P9 — Adenoma · o duas-caras (toggle face benigna × face perigosa)

**Conceito:** o adenoma tem **duas faces** — a benigna (histologia benigna, mulher
jovem, lesão hormônio-dependente) e a perigosa (hipervascular → **sangra**; sequência
adenoma→carcinoma → **maligniza**; conduta difere da HNF: suspende hormônio, opera se
>5 cm/beta-catenina, emboliza se sangrando). Toggle "Face do bem | Face do mal" com o
mesmo rosto-lesão mudando de máscara.

> **Não repete** a comparação `opener--bust` nem a tabela de conduta já presentes na p9;
> esta figura é a **metáfora visual das duas caras** (Duas-Caras do Batman, do professor),
> com cada face explicando o que muda. Usa o engine de **toggle** (segmented control),
> que o produto já tem.

**Ponto de inserção:** página `p9`, **logo após o `</article>` que fecha o
`opener--bust` (linha ~792)** e **antes do `<div class="card card--info">` "O detalhe
de imagem…" (linha 794)**. A figura entra como o retrato do duas-caras antes do
detalhamento de imagem e conduta.

**Interação:** toggle `data-toggle="hep9"` — duas faces; o `<svg>` fica dentro do toggle
e ganha estado via os dois `toggle-panel`. (O engine alterna painéis; coloco **uma
ilustração por face**, cada uma num painel — assim a "máscara" muda de verdade.)

```html
<h2 style="margin-top:var(--sp-6)">O duas-caras: as duas faces do mesmo adenoma</h2>
<div class="toggle-switch" role="tablist" aria-label="As duas faces do adenoma" data-toggle="hep9">
  <button class="toggle-switch__opt" role="tab" data-key="bem" aria-selected="true">Face do bem</button>
  <button class="toggle-switch__opt" role="tab" data-key="mal" data-tone="trap" aria-selected="false">Face do perigo</button>
</div>

<!-- FACE DO BEM -->
<div class="toggle-panel" data-toggle-for="hep9" data-key="bem" data-active="true">
  <figure class="figure-svg" role="group" aria-labelledby="cap-hep9a">
    <div class="figure-svg__frame">
      <div class="figure-svg__stage">
        <svg class="il-hep9" data-eso="hep9" viewBox="0 0 640 320" role="img" aria-labelledby="t-hep9a d-hep9a">
          <title id="t-hep9a">Adenoma hepático na face benigna</title>
          <desc id="d-hep9a">A lesão na sua face do bem: histologia benigna, típica da mulher jovem e dependente de hormônio. Aspecto íntegro, em teal, sem sangramento.</desc>
          <!-- lesão íntegra em teal -->
          <circle cx="200" cy="160" r="96" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="3"/>
          <circle cx="200" cy="160" r="96" fill="none" stroke="var(--teal-30)" stroke-width="1" stroke-dasharray="2 6"/>
          <text x="200" y="166" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="15">benigno</text>
          <!-- cartões da face do bem -->
          <g>
            <rect x="320" y="64" width="290" height="58" rx="14" fill="var(--bg-elevated-2)" stroke="var(--teal-30)" stroke-width="1.6"/>
            <text x="338" y="90" class="svg-title" fill="var(--ink-100)" font-size="14">Histologia benigna</text>
            <text x="338" y="110" class="svg-label" fill="var(--ink-70)">não é câncer (ainda)</text>

            <rect x="320" y="132" width="290" height="58" rx="14" fill="var(--bg-elevated-2)" stroke="var(--teal-30)" stroke-width="1.6"/>
            <text x="338" y="158" class="svg-title" fill="var(--ink-100)" font-size="14">Mulher jovem</text>
            <text x="338" y="178" class="svg-label" fill="var(--ink-70)">tumor hepático benigno = mulher</text>

            <rect x="320" y="200" width="290" height="58" rx="14" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="1.8"/>
            <text x="338" y="226" class="svg-title" fill="var(--teal-60)" font-size="14">Hormônio-dependente</text>
            <text x="338" y="246" class="svg-label" fill="var(--ink-70)">cresce com ACO e anabolizante</text>
          </g>
          <text x="40" y="298" class="svg-label" fill="var(--ink-50)">a cara que engana: parece só mais um benigno para acompanhar</text>
        </svg>
      </div>
    </div>
    <figcaption id="cap-hep9a"><strong>A face do bem.</strong> Histologia benigna, típico da mulher jovem, dependente de hormônio. Olhando só por aqui, parece um benigno como o hemangioma e a HNF — de acompanhar. Troque para a outra face.</figcaption>
  </figure>
</div>

<!-- FACE DO PERIGO -->
<div class="toggle-panel" data-toggle-for="hep9" data-key="mal">
  <figure class="figure-svg" role="group" aria-labelledby="cap-hep9b">
    <div class="figure-svg__frame">
      <div class="figure-svg__stage">
        <svg class="il-hep9" data-eso="hep9" viewBox="0 0 640 320" role="img" aria-labelledby="t-hep9b d-hep9b">
          <title id="t-hep9b">Adenoma hepático na face perigosa</title>
          <desc id="d-hep9b">A mesma lesão na sua face perigosa: hipervascularizada e rota, em coral, com foco hemorrágico. Cartões mostram os três perigos — sangra, pode malignizar e exige conduta própria que difere da HNF.</desc>
          <!-- mesma lesão, agora coral, vascularizada e rota -->
          <circle cx="200" cy="160" r="96" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="3"/>
          <g stroke="var(--err-red)" stroke-width="2.4" fill="none" opacity="0.85" stroke-linecap="round">
            <path d="M130 120 C160 140 180 150 200 158"/><path d="M270 120 C240 142 220 150 200 158"/>
            <path d="M132 206 C164 188 184 172 200 162"/><path d="M268 206 C236 188 216 172 200 162"/>
          </g>
          <!-- ruptura/sangue -->
          <path d="M200 160 q34 18 0 50 q-34 -20 0 -50 Z" fill="var(--err-red)" opacity="0.8"/>
          <text x="200" y="166" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="14">rompe · sangra</text>
          <g>
            <rect x="320" y="56" width="290" height="58" rx="14" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="1.8"/>
            <text x="338" y="82" class="svg-title" fill="var(--coral-80)" font-size="14">Sangra (hipervascular)</text>
            <text x="338" y="102" class="svg-label" fill="var(--coral-80)">pode romper e matar — foi o caso</text>

            <rect x="320" y="124" width="290" height="58" rx="14" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="1.8"/>
            <text x="338" y="150" class="svg-title" fill="var(--err-red)" font-size="14">Pode malignizar</text>
            <text x="338" y="170" class="svg-label" fill="var(--err-red)">adenoma → carcinoma · beta-catenina = pior</text>

            <rect x="320" y="192" width="290" height="58" rx="14" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="1.8"/>
            <text x="338" y="218" class="svg-title" fill="var(--warn-amber)" font-size="14">Conduta ≠ HNF</text>
            <text x="338" y="238" class="svg-label" fill="var(--ink-90)">suspende hormônio · &gt;5cm/β-cat opera · sangrou emboliza</text>
          </g>
          <text x="40" y="300" class="svg-label" fill="var(--err-red)">a cara verdadeira: o único dos benignos que exige agir</text>
        </svg>
      </div>
    </div>
    <figcaption id="cap-hep9b"><strong>A face do perigo.</strong> A mesma lesão é hipervascular: <strong>sangra</strong> (rompeu e matou a enfermeira), <strong>maligniza</strong> (adenoma→carcinoma; beta-catenina é a pior mutação) e tem <strong>conduta própria</strong> — suspender hormônio, operar se &gt;5 cm ou beta-catenina, embolizar se sangrando. Diferente do HNF, que só se acompanha.</figcaption>
  </figure>
</div>
```

---

## P14 — Síntese · os quatro padrões de captação → diagnóstico (matriz/step hotspot)

**Conceito:** recap visual dos **quatro padrões de captação** convertendo em diagnóstico,
em matriz. Cada padrão é um hotspot que entrega lesão + conduta. Fecha a aula amarrando
a leitura de imagem (p4–p6) aos cinco tumores. Inclui o quinto (CHC washout) ao lado do
adenoma para a distinção fina hiper→iso vs hiper→hipo.

> **Não repete** a tabela `.cmp` textual já presente na p14 (essa é a versão **visual e
> clicável** dos padrões — a matriz que o professor "anota aí"). Não repete a matriz de
> armadilhas das aulas 1–3 (aquilo era erro×correto; aqui é **padrão→diagnóstico**).

**Ponto de inserção:** página `p14`, **logo após o `</div>` que fecha o
`reveal[data-reveal="respostas"]` (linha ~1279)** e **antes do
`<div class="card card--accent">` "Os cinco tumores hepáticos, lado a lado" (linha 1281)**.
A matriz visual antecede a tabela textual, servindo de mapa de reconhecimento.

**Interação:** hotspot — 5 padrões. `data-hs-stage="hep14"`.

```html
<figure class="figure-svg" role="group" aria-labelledby="cap-hep14">
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="hep14" aria-live="polite">
      <svg class="il-hep14" data-eso="hep14" viewBox="0 0 760 420" role="img" aria-labelledby="t-hep14 d-hep14">
        <title id="t-hep14">Os padrões de captação na TC dinâmica e seus diagnósticos</title>
        <desc id="d-hep14">Matriz de cinco padrões de captação na TC dinâmica: periférica centrípeta para hemangioma, cicatriz central para hiperplasia nodular focal, hipercaptação que vira isodensa para adenoma, hipercaptação com washout para hepatocarcinoma e hipocaptação para metástase. Cada padrão é clicável e leva ao diagnóstico e à conduta.</desc>

        <text x="380" y="36" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="16">Reconheça o padrão → tem o diagnóstico</text>
        <text x="380" y="56" text-anchor="middle" class="svg-label" fill="var(--ink-70)">clique em cada padrão de captação</text>

        <!-- PADRÃO 1 — periférica centrípeta → hemangioma -->
        <g class="hs-shape" data-hs-label="Periférica centrípeta → Hemangioma" data-hs-text="Contraste só na periferia, em glóbulos, de fora para o centro (centrípeta), e retido. Tumor pouco vascularizado. Diagnóstico: HEMANGIOMA — o tumor hepático mais comum. Conduta: acompanhar." data-hs-hint="Periférica globuliforme · retém · hemangioma · acompanhar.">
          <rect x="36" y="88" width="132" height="150" rx="16" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2"/>
          <circle cx="102" cy="150" r="36" fill="none" stroke="var(--teal-50)" stroke-width="2"/>
          <circle cx="82" cy="136" r="6" fill="var(--teal-60)"/><circle cx="122" cy="134" r="6" fill="var(--teal-60)"/>
          <circle cx="78" cy="166" r="5" fill="var(--teal-60)"/><circle cx="126" cy="164" r="5" fill="var(--teal-60)"/>
          <text x="102" y="212" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="13">Hemangioma</text>
          <text x="102" y="228" text-anchor="middle" class="svg-label" fill="var(--ink-70)">acompanhar</text>
        </g>

        <!-- PADRÃO 2 — cicatriz central → HNF -->
        <g class="hs-shape" data-hs-label="Cicatriz central → HNF" data-hs-text="Hipercaptante ao redor, com cicatriz/estrela central não captante que persiste em todas as fases. Diagnóstico: HIPERPLASIA NODULAR FOCAL (hepatócitos saudáveis — captam Primovist). Conduta: acompanhar." data-hs-hint="Estrela central · capta Primovist · HNF · acompanhar.">
          <rect x="180" y="88" width="132" height="150" rx="16" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2"/>
          <circle cx="246" cy="150" r="36" fill="var(--teal-40)" opacity="0.4"/>
          <path d="M246 124 L253 144 L274 144 L257 156 L263 176 L246 164 L229 176 L235 156 L218 144 L239 144 Z" fill="var(--bg-elevated-2)" stroke="var(--ink-50)" stroke-width="1.2"/>
          <text x="246" y="212" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="13">HNF</text>
          <text x="246" y="228" text-anchor="middle" class="svg-label" fill="var(--ink-70)">acompanhar</text>
        </g>

        <!-- PADRÃO 3 — hiper → iso (some) → adenoma -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Hiper → iso (some) → Adenoma" data-hs-text="Hipercapta na arterial e na portal fica ISODENSO — 'some' como ninja (mistura-se ao parênquima). NÃO é washout. Diagnóstico: ADENOMA. Pista decisiva: tumor hepático que sangrou = adenoma. Conduta: suspender hormônio; operar se >5 cm ou beta-catenina; embolizar se sangrando." data-hs-hint="Hiper→ISO (some) · sangra · adenoma.">
          <rect x="324" y="88" width="132" height="150" rx="16" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="2.2"/>
          <circle cx="390" cy="150" r="36" fill="var(--coral-50)" opacity="0.30" stroke="var(--coral-50)" stroke-width="1.4" stroke-dasharray="4 5"/>
          <text x="390" y="155" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="11">iso · some</text>
          <text x="390" y="212" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="13">Adenoma</text>
          <text x="390" y="228" text-anchor="middle" class="svg-label" fill="var(--coral-80)">sangra · opera</text>
        </g>

        <!-- PADRÃO 4 — hiper → hipo (washout) → CHC -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Hiper → hipo (washout) → Hepatocarcinoma" data-hs-text="Hipercapta na arterial e nas fases tardias fica HIPODENSO (mais escuro que o parênquima) — WASHOUT, com pseudocápsula. Se tem washout, é câncer. Diagnóstico: HEPATOCARCINOMA (cirrose + alfa-fetoproteína). Conduta: Child / critérios de Milão." data-hs-hint="Hiper→HIPO (washout) · câncer · CHC · AFP.">
          <rect x="468" y="88" width="132" height="150" rx="16" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="2.4"/>
          <circle cx="534" cy="150" r="36" fill="var(--err-red)" opacity="0.45"/>
          <path d="M534 114 a36 36 0 0 1 0 72" fill="var(--ink-30)" opacity="0.6"/>
          <text x="534" y="155" text-anchor="middle" class="svg-label" fill="var(--err-red)" font-size="11">hiper→hipo</text>
          <text x="534" y="212" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="12">Hepatocarcinoma</text>
          <text x="534" y="228" text-anchor="middle" class="svg-label" fill="var(--err-red)">washout · AFP</text>
        </g>

        <!-- PADRÃO 5 — hipocaptante → metástase -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Hipocaptante → Metástase" data-hs-text="Não capta contraste — fica escura em relação ao parênquima, muitas vezes múltipla. Diagnóstico: METÁSTASE — o tumor maligno hepático MAIS COMUM (tipicamente colorretal). Conduta: avaliar ressecabilidade; se faltar fígado, volumetria / embolização portal / 2 tempos." data-hs-hint="Hipocaptante, múltipla · metástase · maligno mais comum.">
          <rect x="612" y="88" width="132" height="150" rx="16" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="2.4"/>
          <circle cx="678" cy="150" r="36" fill="var(--ink-30)" opacity="0.7"/>
          <circle cx="660" cy="138" r="9" fill="var(--ink-50)"/><circle cx="694" cy="160" r="8" fill="var(--ink-50)"/>
          <circle cx="672" cy="168" r="6" fill="var(--ink-50)"/>
          <text x="678" y="212" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="13">Metástase</text>
          <text x="678" y="228" text-anchor="middle" class="svg-label" fill="var(--err-red)">maligno + comum</text>
        </g>

        <!-- linha-resumo das duas perguntas -->
        <rect x="36" y="268" width="708" height="120" rx="16" fill="var(--bg-elevated-2)" stroke="var(--border-soft)" stroke-width="1.5"/>
        <text x="60" y="300" class="svg-label" fill="var(--teal-60)" letter-spacing="0.06em">AS DUAS PERGUNTAS QUE DECIDEM TUDO</text>
        <text x="60" y="328" class="svg-title" fill="var(--ink-100)" font-size="14">1 · Como capta na arterial?  periférica · cicatriz · hipercapta · não capta</text>
        <text x="60" y="356" class="svg-title" fill="var(--ink-100)" font-size="14">2 · Como devolve o contraste?  retém · iso (some) · washout (hiper→hipo) · —</text>
        <text x="60" y="380" class="svg-label" fill="var(--err-red)">washout = câncer · iso = adenoma · tumor que sangrou = adenoma</text>
      </svg>
    </div>
  </div>
  <figcaption id="cap-hep14"><strong>A aula inteira numa matriz.</strong> Cinco padrões de captação, cinco diagnósticos: periférica → hemangioma; cicatriz → HNF; hiper→iso (some) → adenoma; hiper→hipo (washout) → hepatocarcinoma; hipocaptante → metástase. Tudo lido com duas perguntas: como capta e como devolve. Clique em cada padrão.</figcaption>
</figure>
<div class="hotspot-detail" data-hs-detail-for="hep14" aria-live="polite">
  <div class="hotspot-detail__label">Clique num padrão</div>
  <p class="hotspot-detail__text">Toque em cada padrão de captação para ver o diagnóstico que ele sela e a conduta — o fechamento visual da aula.</p>
</div>
```

---

## Checagem Bauer (auto-checklist, todas as 7 figuras)

| # | Critério | p1 | p2 | p3 | p4 | p8 | p9 | p14 |
|---|---|---|---|---|---|---|---|---|
| 1 | `viewBox` + `role="img"` + `<title>`/`<desc>` `aria-labelledby` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 2 | Tokens `var(--…)`, **zero hex** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 3 | Sem SMIL (`<animate>`); animação só por CSS do chassi (hsHint, respeita reduced-motion) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 4 | Convenção de cor (teal/coral/âmbar/verde/vermelho) coerente | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 5 | Interação com propósito (engine existente: hotspot/toggle) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 6 | Fallback estático legível sem JS (rótulos visíveis no SVG) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 7 | Ensina sozinho (legenda + `data-hs-text` carregam o conceito) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 8 | `.il-hepN` + `data-eso="hepN"` (N = página real) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 9 | Não repete conceito visual das aulas 01/02/03 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 10 | Ancorado à prosa real da transcrição/página | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 11 | Sem metalinguagem / sem watermark / labels técnicos diretos | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

**Distinção vs aulas 1–3 (anti-repetição, item 9):**
- *Mapa do caso* (p2) já existiu em a1/a2/a3 como pistas→diagnóstico — aqui o eixo é
  **abdome agudo hemorrágico por tumor benigno** (jovem/ACO/síncope/sem cirrose), inédito.
- *Régua de agressividade* (p1) difere da régua de ressecabilidade da a3 (metástase
  CRC): aqui é **espectro benigno↔maligno do fígado**, com o adenoma na transição.
- *Não-biópsia* (p3) reusa a regra de ouro da a1 mas desenha a **segunda razão exclusiva
  do fígado — agulha-no-vaso-hipervascular**, não a parede do esôfago.
- p4/p8/p9/p14 são conceitos próprios de imagem hepática, sem par nas aulas anteriores.

## Notas para o Executor

- **Zero edição de JS/CSS do produto.** Todas as 7 figuras acendem com
  `initInteractive(document)` já chamado em `aula-04.js`. Hotspot exige o trio
  `data-hs-stage` (no `.figure-svg__stage`) + `.hs-shape` + `.hotspot-detail[data-hs-detail-for]`
  com o **mesmo id** (`hep1`…`hep14`). Toggle (p9) exige `data-toggle="hep9"` +
  `toggle-panel[data-toggle-for="hep9"]` com `data-key` batendo nos botões.
- **Inserir cada bloco exatamente no ponto indicado** (entre os marcos de linha citados);
  cada figura é autocontida — colar o `<figure>` (e, na p9, o `<h2>` + os dois painéis).
- **Não envolver em container glass extra:** `.figure-svg__frame/__stage` já trazem o glass.
- **Ids únicos garantidos:** `t-hepN`/`d-hepN`, `cap-hepN`, `hepN` (stage) não colidem com
  os já usados (`svg5`…`svg13`, `t-svg*`).
- p9: a segunda face vive no painel `data-key="mal"` — o engine alterna a visibilidade;
  o fallback sem JS mostra a primeira face (`data-active="true"`), que já ensina o conceito.
```
