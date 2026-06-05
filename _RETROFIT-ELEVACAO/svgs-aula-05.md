# SVGs profundos — Aula 05 · Pólipos e Câncer Colorretal

Ilustrações reais (figure-svg, não ícone) para as 4 páginas que ainda não têm:
**p1, p7, p13, p14**. Padrão extra-06/07 e aula-04: cada SVG ensina sozinho
(Checagem Bauer), interação com propósito, fallback estático legível, tokens
(`var(--…)`, **zero hex**), `role="img"` + `<title>`/`<desc>`, sem SMIL,
`prefers-reduced-motion` respeitado (nenhuma animação SMIL; o pulso já vem do CSS
compartilhado dos `.hs-shape`).

> **Convenção de cor desta aula** — teal = baseline/mucosa sã/benigno/conduta certa ·
> coral = agressão/maligno/colectomia · âmbar = pegadinha/ponto de virada/atenção ·
> verde (`--ok-green`) = cura/curado/bom desfecho · vermelho (`--err-red`) =
> perigo/quebra o critério/recidiva.

> **Como cada interação acende** — as 4 figuras usam **engines já existentes** em
> `assets/js/components/interactive.js` (carregado por `initInteractive(document)` em
> `aula-05.js`). **NÃO é preciso editar nenhum arquivo do produto nem criar JS novo.**
> - **Hotspot** (`data-hs-stage` no `.figure-svg__stage` + `.hs-shape` com
>   `data-hs-label/-text/-hint/-tone` + `.hotspot-detail[data-hs-detail-for]`) → as 4 páginas.
> - O atributo `data-eso="polN"` e a classe `.il-polN` vão no `<svg>` como
>   identidade/âncora da aula (não exigidos pelo engine; marca semântica pedida).
> - `N` = número da página (pol1, pol7, pol13, pol14). Stage e detail usam o mesmo `N`.

> **Tons válidos** (do CSS): `.hs-shape[data-hs-tone]` → `danger` (coral/vermelho),
> `trap` (âmbar), default (teal). `.hotspot-detail[data-tone]` idem. Texto interno:
> `.svg-label` (mono ~11px), `.svg-title` (sans 700). Tokens confirmados no CSS:
> teal-05/10/20/30/40/50/60/80, coral/-30/40/50/60/80/dim, warn-amber/-dim,
> err-red/-dim, ok-green/-dim, ink-30/50/70/90/100, border-soft/mid/strong,
> bg-base/elevated/elevated-2. **Não há `--teal-70` nem `--ink-60`** — não usar.

> **Não repete as aulas 01–04** — em especial a Aula 3 (CCR já instalado: 3 vias,
> cólon direito × esquerdo, estadiamento) e a Aula 4 (régua benigno→maligno hepática,
> washout). Aqui o eixo é **o que antecede o câncer**: a sequência adenoma→carcinoma
> como história natural, os critérios de cura da polipectomia, o rastreio por risco e o
> seguimento pós-CCR. Nenhuma figura reusa arranjo das figuras `hep*`.

---

## P1 — A sequência adenoma→carcinoma como espinha · "aula de rotina, não de doença"

**Conceito:** o panorama da aula numa **cascata de progressão**: mucosa sã → (mutação
**APC**) → adenoma → displasia de alto grau → adenocarcinoma. É a *história natural* do
CCR — o motivo de a aula existir e de o rastreio interceptá-la cedo. Embaixo, o **gancho
de rotina** em quatro tempos: achou pólipo → histologia → conduta → seguimento. Cada
estágio da espinha e cada tempo da rotina é um hotspot.

> **Não repete** a régua benigno→maligno da Aula 4 (lá eram quatro *lesões hepáticas
> distintas* lado a lado; aqui é **uma mesma mucosa progredindo no tempo** por acúmulo de
> mutações). Também não repete o "mapa do caso" (pistas→diagnóstico) das aulas 1–3.

**Ponto de inserção:** página `p1`, **logo após o `</div>` que fecha o
`<div class="dash__metrics">` (linha ~111)** e **antes do `<h2>Trilha da aula</h2>`
(linha 113)**. A figura abre o panorama da progressão antes da grade textual da trilha.

**Interação:** hotspot — 4 estágios da espinha (mucosa, adenoma, displasia, carcinoma) +
4 tempos da rotina. `data-hs-stage="pol1"`.

```html
<figure class="figure-svg" role="group" aria-labelledby="cap-pol1">
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="pol1" aria-live="polite">
      <svg class="il-pol1" data-eso="pol1" viewBox="0 0 780 440" role="img" aria-labelledby="t-pol1 d-pol1">
        <title id="t-pol1">A sequência adenoma-carcinoma e a rotina do pólipo</title>
        <desc id="d-pol1">Cascata de progressão da mesma mucosa colônica ao longo do tempo: epitélio normal em teal, depois adenoma após a mutação do gene APC, depois displasia de alto grau em âmbar e por fim adenocarcinoma em coral. Abaixo, uma fita de rotina em quatro tempos: achar o pólipo, definir a histologia, decidir a conduta e fazer o seguimento. Cada estágio e cada tempo é clicável.</desc>

        <defs>
          <linearGradient id="pol1-rail" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"  stop-color="var(--teal-50)"/>
            <stop offset="42%" stop-color="var(--teal-30)"/>
            <stop offset="64%" stop-color="var(--warn-amber)"/>
            <stop offset="100%" stop-color="var(--err-red)"/>
          </linearGradient>
        </defs>

        <!-- frase-gancho -->
        <text x="390" y="36" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="17">Aula de rotina, não de doença.</text>
        <text x="390" y="58" text-anchor="middle" class="svg-label" fill="var(--ink-70)">a história natural do colorretal é uma sequência — e o rastreio a intercepta cedo</text>

        <!-- espinha temporal -->
        <rect x="48" y="150" width="684" height="8" rx="4" fill="url(#pol1-rail)" opacity="0.9"/>
        <text x="48"  y="138" class="svg-label" fill="var(--teal-60)">mucosa sã</text>
        <text x="690" y="138" text-anchor="end" class="svg-label" fill="var(--err-red)">câncer</text>
        <text x="390" y="138" text-anchor="middle" class="svg-label" fill="var(--ink-50)">tempo · acúmulo de mutações →</text>

        <!-- ESTÁGIO 1 — mucosa normal -->
        <g class="hs-shape" data-hs-label="Mucosa normal — antes de tudo" data-hs-text="Epitélio colônico saudável. A grande maioria dos cânceres colorretais NÃO nasce do nada: nasce daqui, passando pela sequência. É o que torna o tumor rastreável — dá para pegá-lo antes de existir." data-hs-hint="Quase todo CCR começa numa mucosa sã que progride.">
          <circle cx="110" cy="154" r="34" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.4"/>
          <path d="M88 154 h44" stroke="var(--teal-50)" stroke-width="2" />
          <circle cx="98" cy="148" r="3" fill="var(--teal-60)"/><circle cx="110" cy="148" r="3" fill="var(--teal-60)"/><circle cx="122" cy="148" r="3" fill="var(--teal-60)"/>
          <text x="110" y="214" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="13">mucosa normal</text>
        </g>

        <!-- gatilho APC entre estágio 1 e 2 -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="A mutação do APC — o pontapé" data-hs-text="O gene APC é o guardião: mutado (adquirido por volta dos 40–50 anos, ou herdado de nascença na PAF), libera a formação do pólipo adenomatoso. É a primeira mutação da sequência — e a razão de o esporádico ser rastreado aos 50: é o tempo médio para a célula errar e o APC mutar." data-hs-hint="APC mutado = pólipo adenomatoso começa. Herdado = PAF.">
          <path d="M196 170 L246 138" stroke="var(--warn-amber)" stroke-width="2.4"/>
          <polygon points="246,138 232,140 238,150" fill="var(--warn-amber)"/>
          <text x="221" y="190" text-anchor="middle" class="svg-label" fill="var(--warn-amber)">mut. APC</text>
        </g>

        <!-- ESTÁGIO 2 — adenoma -->
        <g class="hs-shape" data-hs-label="Adenoma — o pólipo neoplásico" data-hs-text="Pólipo adenomatoso: já é neoplásico, mas ainda benigno. Acumula mutações com o tempo. É aqui que a polipectomia interrompe a história natural — tirar o adenoma é prevenir o câncer." data-hs-hint="Adenoma = neoplásico benigno · tirar agora previne o câncer.">
          <circle cx="300" cy="154" r="36" fill="var(--teal-05)" stroke="var(--teal-40)" stroke-width="2.4"/>
          <path d="M300 154 q0 -30 18 -34 q-2 18 -18 34 Z" fill="var(--teal-40)" opacity="0.7"/>
          <path d="M300 154 q0 -26 -16 -30 q2 16 16 30 Z" fill="var(--teal-40)" opacity="0.5"/>
          <text x="300" y="214" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="13">adenoma</text>
        </g>

        <!-- ESTÁGIO 3 — displasia de alto grau -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Displasia de alto grau" data-hs-text="O adenoma piora: as células ficam mais desorganizadas (displasia de alto grau). Ainda não rompeu a membrana basal, mas é o degrau imediatamente antes do câncer — e um dos fatores de risco que encurtam a vigilância." data-hs-hint="Displasia de alto grau = um degrau antes do carcinoma.">
          <circle cx="470" cy="154" r="38" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2.6"/>
          <g fill="var(--warn-amber)" opacity="0.85">
            <circle cx="456" cy="142" r="5"/><circle cx="482" cy="146" r="6"/><circle cx="462" cy="166" r="6"/>
            <circle cx="484" cy="166" r="4"/><circle cx="470" cy="154" r="4"/>
          </g>
          <text x="470" y="214" text-anchor="middle" class="svg-title" fill="var(--warn-amber)" font-size="13">displasia alto grau</text>
        </g>

        <!-- ESTÁGIO 4 — adenocarcinoma -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Adenocarcinoma — invadiu" data-hs-text="A célula rompeu a membrana basal e invade a parede: agora é câncer. Daqui em diante valem a classificação endoscópica (REGT/Haggitt), o limite SM1 e os critérios de cura. Mas tudo isso só existe porque a sequência chegou até aqui." data-hs-hint="Invadiu a parede = câncer · entram Haggitt, SM1 e os critérios de cura.">
          <circle cx="640" cy="154" r="40" fill="var(--coral-dim)" stroke="var(--err-red)" stroke-width="2.8"/>
          <g stroke="var(--err-red)" stroke-width="2.2" fill="none" opacity="0.8" stroke-linecap="round">
            <path d="M610 140 q18 8 30 14"/><path d="M612 170 q16 -6 28 -12"/><path d="M664 138 q-12 10 -24 16"/>
          </g>
          <circle cx="640" cy="154" r="6" fill="var(--err-red)"/>
          <text x="640" y="214" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="13">adenocarcinoma</text>
        </g>

        <!-- divisor -->
        <line x1="48" y1="262" x2="732" y2="262" stroke="var(--border-soft)" stroke-width="1"/>
        <text x="48" y="296" class="svg-title" fill="var(--ink-100)" font-size="14">Achou um pólipo? A aula é uma rotina de quatro tempos.</text>

        <!-- ROTINA: 4 tempos -->
        <g class="hs-shape" data-hs-label="1 · Achar" data-hs-text="A colonoscopia encontra o pólipo. Achou, tira — independente do tipo (P3–P4). É o gesto que dá início a tudo: nenhum pólipo encontrado fica para depois." data-hs-hint="Achou pólipo → resseca. Sempre.">
          <rect x="48" y="320" width="150" height="74" rx="14" fill="var(--bg-elevated-2)" stroke="var(--teal-50)" stroke-width="2"/>
          <text x="123" y="352" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="14">1 · Achar</text>
          <text x="123" y="372" text-anchor="middle" class="svg-label" fill="var(--ink-70)">colonoscopia · resseca</text>
        </g>
        <g class="hs-shape" data-hs-label="2 · Histologia" data-hs-text="O patologista responde: neoplásico ou não? Tubular ou viloso? Que grau de displasia? Até onde invadiu (SM1)? É a histologia que define o risco — o vilão é o viloso (P5)." data-hs-hint="A histologia define o risco: viloso, tamanho, displasia, SM1.">
          <rect x="226" y="320" width="150" height="74" rx="14" fill="var(--bg-elevated-2)" stroke="var(--teal-50)" stroke-width="2"/>
          <text x="301" y="352" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="14">2 · Histologia</text>
          <text x="301" y="372" text-anchor="middle" class="svg-label" fill="var(--ink-70)">qual é o pólipo?</text>
        </g>
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="3 · Conduta" data-hs-text="A histologia decide a conduta: a polipectomia já curou (critérios de cura, P7) ou precisa de colectomia? É o ponto onde SM1 e os seis critérios mandam — passa SM1 ou quebra um critério, vira cirurgia." data-hs-hint="Curou na polipectomia ou precisa de colectomia? (P7)">
          <rect x="404" y="320" width="150" height="74" rx="14" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2"/>
          <text x="479" y="352" text-anchor="middle" class="svg-title" fill="var(--warn-amber)" font-size="14">3 · Conduta</text>
          <text x="479" y="372" text-anchor="middle" class="svg-label" fill="var(--ink-90)">polipectomia ou colectomia</text>
        </g>
        <g class="hs-shape" data-hs-label="4 · Seguimento" data-hs-text="Resolvido o pólipo, define-se o intervalo da próxima colonoscopia (vigilância 10/5/3/1/0,5 — P8) e, se era câncer, o seguimento pós-CCR com CEA + TC (P14). A rotina se fecha em ciclo." data-hs-hint="Vigilância (P8) e, se era câncer, seguimento com CEA + TC (P14).">
          <rect x="582" y="320" width="150" height="74" rx="14" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="2"/>
          <text x="657" y="352" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="14">4 · Seguimento</text>
          <text x="657" y="372" text-anchor="middle" class="svg-label" fill="var(--ink-70)">vigilância · pós-CCR</text>
        </g>
        <!-- conectores da rotina -->
        <g stroke="var(--border-mid)" stroke-width="1.8" fill="var(--border-mid)">
          <path d="M198 357 h22" fill="none"/><polygon points="226,357 216,353 216,361"/>
          <path d="M376 357 h22" fill="none"/><polygon points="404,357 394,353 394,361"/>
          <path d="M554 357 h22" fill="none"/><polygon points="582,357 572,353 572,361"/>
        </g>

        <text x="390" y="424" text-anchor="middle" class="svg-label" fill="var(--ink-50)">clique em cada estágio da sequência e em cada tempo da rotina</text>
      </svg>
    </div>
  </div>
  <figcaption id="cap-pol1"><strong>O câncer não nasce pronto.</strong> A mesma mucosa progride no tempo: normal → (mutação do <strong>APC</strong>) → adenoma → displasia de alto grau → adenocarcinoma. É a <strong>sequência adenoma-carcinoma</strong>, a história natural que o rastreio intercepta. E a aula é uma <strong>rotina</strong>: achou pólipo → histologia → conduta → seguimento. Clique em cada etapa.</figcaption>
</figure>
<div class="hotspot-detail" data-hs-detail-for="pol1" aria-live="polite">
  <div class="hotspot-detail__label">Clique num estágio ou num tempo</div>
  <p class="hotspot-detail__text">Toque em cada degrau da sequência (da mucosa sã ao carcinoma) e em cada tempo da rotina para ver como o pré-câncer se torna tema de aula — e por que dá para interceptá-lo cedo.</p>
</div>
```

---

## P7 — Os seis critérios de cura · checklist do "TODOS ou colectomia"

**Conceito:** os **seis critérios de cura** da polipectomia de um carcinoma dispostos
como um painel de verificação, todos *atendidos* (teal/verde). O conceito-chave é a
**conjunção lógica**: precisam bater **todos juntos** — se **um só** falha, o painel vira
**colectomia** (coral). O hotspot central "E se um falhar?" demonstra a regra acendendo o
veredito de cirurgia; cada critério é um hotspot que explica o porquê.

> **Não repete** o reveal textual já presente na p7 (que revela os 6 um a um em lista);
> esta figura é a **visão de conjunto + a lógica AND→colectomia**, que a lista não mostra.
> Entra antes do reveal como o mapa, e o reveal aprofunda cada item.

**Ponto de inserção:** página `p7`, **logo após o `</div>` que fecha o
`<div class="prose">` (linha ~697)** e **antes do `<div class="reveal" data-reveal="cura">`
(linha 699)**. A figura abre o painel dos seis critérios antes do detalhamento item a item.

**Interação:** hotspot — 6 critérios (default teal = atendido) + o veredito central
"se um falhar → colectomia" (coral). `data-hs-stage="pol7"`.

```html
<figure class="figure-svg" role="group" aria-labelledby="cap-pol7">
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="pol7" aria-live="polite">
      <svg class="il-pol7" data-eso="pol7" viewBox="0 0 760 460" role="img" aria-labelledby="t-pol7 d-pol7">
        <title id="t-pol7">Os seis critérios de cura da polipectomia e a regra do todos-ou-colectomia</title>
        <desc id="d-pol7">Painel de seis critérios de cura, todos marcados como atendidos em teal: margens livres, ressecção em bloco, invasão até SM1, bem diferenciado, sem invasão angiolinfática e sem tumor budding. No centro, o veredito mostra que basta um único critério falhar para a conduta deixar de ser cura por polipectomia e virar colectomia. Cada critério é clicável.</desc>

        <text x="380" y="34" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="17">Seis critérios — e têm que bater TODOS</text>
        <text x="380" y="56" text-anchor="middle" class="svg-label" fill="var(--ink-70)">é conjunção, não soma: um único critério que falhe já manda para a colectomia</text>

        <!-- CRITÉRIO 1 — margens livres -->
        <g class="hs-shape" data-hs-label="1 · Margens livres" data-hs-text="O pólipo saiu sem neoplasia nas bordas. É o único critério que vale também para o adenoma benigno. Margem comprometida e não reabordável por endoscopia → colectomia." data-hs-hint="Bordas sem neoplasia. Vale para benigno e maligno.">
          <rect x="40" y="92" width="216" height="74" rx="14" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.2"/>
          <circle cx="74" cy="129" r="14" fill="var(--teal-10)" stroke="var(--teal-60)" stroke-width="2"/>
          <path d="M68 129 l5 6 9 -12" stroke="var(--teal-60)" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <text x="98" y="124" class="svg-title" fill="var(--teal-60)" font-size="13">Margens livres</text>
          <text x="98" y="142" class="svg-label" fill="var(--ink-70)">bordas sem neoplasia</text>
        </g>

        <!-- CRITÉRIO 2 — ressecção em bloco -->
        <g class="hs-shape" data-hs-label="2 · Ressecção em bloco" data-hs-text="O pólipo saiu inteiro, de uma vez (sem fragmentar). Tirar 'metade e depois a outra metade' — piecemeal — invalida o critério: não se garante remoção completa do câncer. No carcinoma, piecemeal = colectomia." data-hs-hint="Sem fragmentar (sem piecemeal). Fragmentou no carcinoma = colectomia.">
          <rect x="272" y="92" width="216" height="74" rx="14" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.2"/>
          <circle cx="306" cy="129" r="14" fill="var(--teal-10)" stroke="var(--teal-60)" stroke-width="2"/>
          <path d="M300 129 l5 6 9 -12" stroke="var(--teal-60)" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <text x="330" y="124" class="svg-title" fill="var(--teal-60)" font-size="13">Em bloco</text>
          <text x="330" y="142" class="svg-label" fill="var(--ink-70)">inteiro · sem piecemeal</text>
        </g>

        <!-- CRITÉRIO 3 — SM1 -->
        <g class="hs-shape" data-hs-label="3 · Invasão até SM1" data-hs-text="A invasão ficou na submucosa rasa: SM1, até 1000 micras. Desde 2022 as bancas exigem a subdivisão (não basta 'até a submucosa'). 500 micras também atende — é menos que 1000. SM2/SM3 = colectomia." data-hs-hint="Submucosa rasa, ≤1000 micras. SM2/SM3 quebra.">
          <rect x="504" y="92" width="216" height="74" rx="14" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.2"/>
          <circle cx="538" cy="129" r="14" fill="var(--teal-10)" stroke="var(--teal-60)" stroke-width="2"/>
          <path d="M532 129 l5 6 9 -12" stroke="var(--teal-60)" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <text x="562" y="124" class="svg-title" fill="var(--teal-60)" font-size="13">SM1 (≤1000 µm)</text>
          <text x="562" y="142" class="svg-label" fill="var(--ink-70)">submucosa rasa</text>
        </g>

        <!-- VEREDITO CENTRAL — todos batem = cura · um falha = colectomia -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="E se um único falhar?" data-hs-text="A regra de ouro da página: os seis são uma conjunção. Bateram TODOS → a polipectomia foi curativa, paciente curado, sem cirurgia. Falhou UM que seja (margem suja, piecemeal, SM2, pouco diferenciado, invasão linfovascular ou budding) → volta-se à COLECTOMIA com linfadenectomia. Não há cura 'quase'." data-hs-hint="Todos = curado. Um falha = colectomia. Sem meio-termo.">
          <rect x="246" y="196" width="268" height="92" rx="18" fill="var(--bg-elevated-2)" stroke="var(--border-strong)" stroke-width="2"/>
          <text x="380" y="226" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="15">6 / 6 atendidos?</text>
          <text x="312" y="262" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="13">SIM → curado</text>
          <text x="452" y="262" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="13">NÃO → colectomia</text>
          <line x1="380" y1="240" x2="380" y2="280" stroke="var(--border-mid)" stroke-width="1.4"/>
        </g>

        <!-- CRITÉRIO 4 — bem diferenciado -->
        <g class="hs-shape" data-hs-label="4 · Bem diferenciado" data-hs-text="A patologia mostrou tumor bem diferenciado. Pouco diferenciado é mais agressivo, com maior risco de disseminação linfática — quebra o critério de cura." data-hs-hint="Pouco diferenciado = agressivo = quebra a cura.">
          <rect x="40" y="318" width="216" height="74" rx="14" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.2"/>
          <circle cx="74" cy="355" r="14" fill="var(--teal-10)" stroke="var(--teal-60)" stroke-width="2"/>
          <path d="M68 355 l5 6 9 -12" stroke="var(--teal-60)" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <text x="98" y="350" class="svg-title" fill="var(--teal-60)" font-size="13">Bem diferenciado</text>
          <text x="98" y="368" class="svg-label" fill="var(--ink-70)">pouco diferenc. = pior</text>
        </g>

        <!-- CRITÉRIO 5 — sem invasão angiolinfática -->
        <g class="hs-shape" data-hs-label="5 · Sem invasão angiolinfática" data-hs-text="Nenhuma célula tumoral dentro de vaso ou linfático. Invasão linfovascular é via de disseminação à distância — presente, não há cura por polipectomia." data-hs-hint="Sem tumor em vaso/linfático. Presente = quebra.">
          <rect x="272" y="318" width="216" height="74" rx="14" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.2"/>
          <circle cx="306" cy="355" r="14" fill="var(--teal-10)" stroke="var(--teal-60)" stroke-width="2"/>
          <path d="M300 355 l5 6 9 -12" stroke="var(--teal-60)" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <text x="330" y="350" class="svg-title" fill="var(--teal-60)" font-size="13">Sem angiolinfática</text>
          <text x="330" y="368" class="svg-label" fill="var(--ink-70)">vaso/linfático livres</text>
        </g>

        <!-- CRITÉRIO 6 — sem tumor budding -->
        <g class="hs-shape" data-hs-label="6 · Sem tumor budding" data-hs-text="Sem brotamento tumoral: aquelas células isoladas 'escapando' na frente de invasão. Budding presente sinaliza comportamento agressivo e impede considerar curado." data-hs-hint="Sem células 'brotando' na frente de invasão.">
          <rect x="504" y="318" width="216" height="74" rx="14" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.2"/>
          <circle cx="538" cy="355" r="14" fill="var(--teal-10)" stroke="var(--teal-60)" stroke-width="2"/>
          <path d="M532 355 l5 6 9 -12" stroke="var(--teal-60)" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <text x="562" y="350" class="svg-title" fill="var(--teal-60)" font-size="13">Sem budding</text>
          <text x="562" y="368" class="svg-label" fill="var(--ink-70)">nada brotando</text>
        </g>

        <text x="380" y="430" text-anchor="middle" class="svg-label" fill="var(--ink-50)">clique em cada critério — e no centro, para ver a regra do "um falha = colectomia"</text>
      </svg>
    </div>
  </div>
  <figcaption id="cap-pol7"><strong>Seis caixas, uma regra.</strong> Margem livre · em bloco · SM1 · bem diferenciado · sem invasão angiolinfática · sem budding. Não é placar: é <strong>conjunção</strong>. Bateram os seis → a polipectomia <span class="hl-good">curou</span>. Um só que falhe → <span class="hl-bad">colectomia</span> com linfadenectomia. Clique em cada critério e no veredito central.</figcaption>
</figure>
<div class="hotspot-detail" data-hs-detail-for="pol7" aria-live="polite">
  <div class="hotspot-detail__label">Clique num critério</div>
  <p class="hotspot-detail__text">Toque em cada um dos seis critérios para ver o que ele garante — e no veredito central para entender por que um único critério não atendido já leva à colectomia.</p>
</div>
```

---

## P13 — Rastreamento · régua de idade por risco + "alterou → colonoscopia"

**Conceito:** o algoritmo do rastreio em duas decisões — **quando começar** (uma régua de
idade que desce conforme o risco sobe: esporádico 50 / família 40 ou −10 / Lynch 20 / PAF
e Peutz-Jeghers 12–15) e **com o quê** (a colonoscopia é o padrão-ouro 10/10; FIT anual,
sigmoidoscopia+FIT e colono virtual são alternativas). O nó inegociável: **qualquer método
alterado obriga colonoscopia**. Cada faixa de risco é um hotspot; o nó da colono é o
ponto-chave em verde.

> **Não repete** a tabela de idades já presente na p13 (toggle "Idade × Métodos"); esta
> figura é a **régua visual** — a relação "mais risco = começa mais cedo" que a tabela
> lista mas não mostra como gradiente — somada ao funil "alterou → colonoscopia". Entra
> antes do toggle como o esquema que o toggle depois detalha.

**Ponto de inserção:** página `p13`, **logo após o `</div>` que fecha o
`<div class="prose">` (linha ~1249)** e **antes do
`<div class="toggle-switch" ... data-toggle="rastreio">` (linha 1251)**. A figura abre o
algoritmo do rastreio antes das tabelas por risco e por método.

**Interação:** hotspot — 4 faixas de risco na régua de idade + o nó "alterou → colono".
`data-hs-stage="pol13"`.

```html
<figure class="figure-svg" role="group" aria-labelledby="cap-pol13">
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="pol13" aria-live="polite">
      <svg class="il-pol13" data-eso="pol13" viewBox="0 0 760 440" role="img" aria-labelledby="t-pol13 d-pol13">
        <title id="t-pol13">Régua de idade do rastreio colorretal por risco e o nó da colonoscopia</title>
        <desc id="d-pol13">Régua de idade de início do rastreio do câncer colorretal: quanto maior o risco, mais cedo se começa. Esporádico aos 50 anos, história familiar aos 40 ou dez anos antes do familiar, Lynch aos 20 anos, e PAF ou Peutz-Jeghers aos 12 a 15 anos. Abaixo, os métodos alternativos convergem para a regra de que qualquer exame alterado obriga colonoscopia. Cada faixa é clicável.</desc>

        <defs>
          <linearGradient id="pol13-rail" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"  stop-color="var(--teal-50)"/>
            <stop offset="55%" stop-color="var(--warn-amber)"/>
            <stop offset="100%" stop-color="var(--coral-50)"/>
          </linearGradient>
        </defs>

        <text x="380" y="34" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="17">Quanto maior o risco, mais cedo começa</text>
        <text x="380" y="56" text-anchor="middle" class="svg-label" fill="var(--ink-70)">a idade de início desce conforme o risco sobe — o eixo lê da direita (tarde) para a esquerda (cedo)</text>

        <!-- régua de idade -->
        <rect x="60" y="92" width="640" height="8" rx="4" fill="url(#pol13-rail)" opacity="0.9"/>
        <text x="60"  y="82" class="svg-label" fill="var(--coral-80)">12 anos</text>
        <text x="700" y="82" text-anchor="end" class="svg-label" fill="var(--teal-60)">50 anos</text>
        <text x="380" y="82" text-anchor="middle" class="svg-label" fill="var(--ink-50)">← começa cedo (mais risco) · começa tarde (menos risco) →</text>

        <!-- FAIXA — PAF / Peutz-Jeghers (mais cedo) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="PAF e Peutz-Jeghers — 12 a 15 anos" data-hs-text="O risco mais alto começa o rastreio mais cedo: 12 a 15 anos (em prova costuma aparecer 15). PAF tem risco de CCR próximo de 100%; ambas exigem ainda outros rastreios (na Peutz-Jeghers, endoscopia alta, mamografia e mais). São autossômicas dominantes." data-hs-hint="PAF e Peutz-Jeghers = 12–15 anos (prova: 15).">
          <circle cx="120" cy="96" r="15" fill="var(--coral-dim)" stroke="var(--err-red)" stroke-width="2.6"/>
          <rect x="44" y="132" width="170" height="74" rx="14" fill="var(--coral-dim)" stroke="var(--err-red)" stroke-width="2"/>
          <text x="129" y="160" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="14">12–15 anos</text>
          <text x="129" y="180" text-anchor="middle" class="svg-label" fill="var(--coral-80)">PAF · Peutz-Jeghers</text>
          <line x1="120" y1="111" x2="129" y2="132" stroke="var(--err-red)" stroke-width="1.6"/>
        </g>

        <!-- FAIXA — Lynch / HNPCC -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Lynch / HNPCC — 20 anos" data-hs-text="Lynch (HNPCC) inicia aos 20 anos. Não é polipoide como a PAF, mas o paciente passa pela mesma sequência adenoma-carcinoma — só que acelerada. Autossômica dominante; diagnóstico por critérios de Amsterdam ou análise genética." data-hs-hint="Lynch = 20 anos. Sem polipose, mas com a sequência acelerada.">
          <circle cx="300" cy="96" r="14" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2.4"/>
          <rect x="226" y="132" width="170" height="74" rx="14" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2"/>
          <text x="311" y="160" text-anchor="middle" class="svg-title" fill="var(--warn-amber)" font-size="14">20 anos</text>
          <text x="311" y="180" text-anchor="middle" class="svg-label" fill="var(--ink-90)">Lynch / HNPCC</text>
          <line x1="300" y1="110" x2="311" y2="132" stroke="var(--warn-amber)" stroke-width="1.6"/>
        </g>

        <!-- FAIXA — história familiar -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="História familiar — 40 anos ou −10" data-hs-text="Parente com CCR: começa aos 40 anos OU 10 anos antes da idade do familiar — o que for mais jovem. Pai com 48 → 38; pai com 53 → daria 43, mas prevalece os 40 (proteger cedo). É a regra do 'o que vier primeiro'." data-hs-hint="40 anos OU 10 anos antes do familiar — o mais precoce.">
          <circle cx="500" cy="96" r="14" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2.2"/>
          <rect x="426" y="132" width="170" height="74" rx="14" fill="var(--bg-elevated-2)" stroke="var(--warn-amber)" stroke-width="2"/>
          <text x="511" y="160" text-anchor="middle" class="svg-title" fill="var(--warn-amber)" font-size="14">40 anos · ou −10</text>
          <text x="511" y="180" text-anchor="middle" class="svg-label" fill="var(--ink-90)">história familiar de CCR</text>
          <line x1="500" y1="110" x2="511" y2="132" stroke="var(--warn-amber)" stroke-width="1.6"/>
        </g>

        <!-- FAIXA — esporádico (mais tarde) -->
        <g class="hs-shape" data-hs-label="Esporádico — 50 anos (MS/Brasil)" data-hs-text="Sem história, risco habitual: 50 anos pelo Ministério da Saúde/Brasil, colonoscopia 10/10. É o tempo médio para a célula errar e o APC mutar. Internacional (ACS) inicia aos 45 — diferença entre diretrizes (DDV)." data-hs-hint="Esporádico = 50 (Brasil) · 45 (ACS) · colono 10/10.">
          <circle cx="660" cy="96" r="14" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.4"/>
          <rect x="586" y="132" width="150" height="74" rx="14" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2"/>
          <text x="661" y="160" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="14">50 anos</text>
          <text x="661" y="180" text-anchor="middle" class="svg-label" fill="var(--ink-70)">esporádico · 45 (ACS)</text>
          <line x1="660" y1="110" x2="661" y2="132" stroke="var(--teal-50)" stroke-width="1.6"/>
        </g>

        <!-- divisor -->
        <line x1="60" y1="240" x2="700" y2="240" stroke="var(--border-soft)" stroke-width="1"/>
        <text x="60" y="272" class="svg-title" fill="var(--ink-100)" font-size="14">Com o quê? Métodos convergem para uma regra só.</text>

        <!-- métodos alternativos -->
        <g>
          <rect x="60" y="290" width="150" height="50" rx="12" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.8"/>
          <text x="135" y="312" text-anchor="middle" class="svg-label" fill="var(--ink-90)" font-size="12">FIT anual</text>
          <text x="135" y="328" text-anchor="middle" class="svg-label" fill="var(--ink-70)">&gt; guáiaco</text>

          <rect x="226" y="290" width="170" height="50" rx="12" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.8"/>
          <text x="311" y="312" text-anchor="middle" class="svg-label" fill="var(--ink-90)" font-size="12">Sigmoido 10/10 + FIT</text>
          <text x="311" y="328" text-anchor="middle" class="svg-label" fill="var(--ink-70)">nunca com guáiaco</text>

          <rect x="412" y="290" width="170" height="50" rx="12" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.8"/>
          <text x="497" y="312" text-anchor="middle" class="svg-label" fill="var(--ink-90)" font-size="12">Colono virtual (TC)</text>
          <text x="497" y="328" text-anchor="middle" class="svg-label" fill="var(--ink-70)">5/5 · só se não passou</text>
        </g>

        <!-- NÓ — qualquer alterado → colonoscopia -->
        <g class="hs-shape" data-hs-label="Alterou? → colonoscopia (padrão-ouro)" data-hs-text="O ponto inegociável: a colonoscopia é o padrão-ouro (10/10 anos) e QUALQUER método alterado obriga colonoscopia para estudar todo o cólon. FIT positivo, sigmoido com lesão, achado na virtual — tudo desemboca aqui. Sem exceção." data-hs-hint="Qualquer exame alterado → colonoscopia. Padrão-ouro.">
          <rect x="588" y="282" width="148" height="66" rx="16" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="2.6"/>
          <text x="662" y="310" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="14">Colonoscopia</text>
          <text x="662" y="330" text-anchor="middle" class="svg-label" fill="var(--ink-90)">padrão-ouro · 10/10</text>
        </g>
        <!-- setas convergindo para o nó -->
        <g stroke="var(--ok-green)" stroke-width="2" fill="var(--ok-green)" opacity="0.7">
          <path d="M210 322 q180 30 372 5" fill="none"/><polygon points="588,326 576,320 577,330"/>
          <path d="M396 332 q90 8 188 -2" fill="none"/>
          <path d="M582 320 h6" fill="none"/>
        </g>
        <text x="380" y="386" text-anchor="middle" class="svg-label" fill="var(--ink-50)">qualquer método alterado desemboca na colonoscopia</text>

        <text x="380" y="420" text-anchor="middle" class="svg-label" fill="var(--ink-50)">clique em cada faixa de risco — e no nó da colonoscopia</text>
      </svg>
    </div>
  </div>
  <figcaption id="cap-pol13"><strong>O risco puxa a idade para baixo.</strong> Esporádico aos <strong>50</strong> (Brasil; 45 na ACS), história familiar aos <strong>40</strong> ou <strong>−10</strong>, Lynch aos <strong>20</strong>, PAF e Peutz-Jeghers aos <strong>12–15</strong>. E não importa o método: <span class="hl-good">qualquer exame alterado obriga colonoscopia</span> — o padrão-ouro 10/10. Clique em cada faixa e no nó.</figcaption>
</figure>
<div class="hotspot-detail" data-hs-detail-for="pol13" aria-live="polite">
  <div class="hotspot-detail__label">Clique numa faixa de risco</div>
  <p class="hotspot-detail__text">Toque em cada perfil de risco para ver a idade de início — e no nó da colonoscopia para fixar a regra de que todo método alterado termina nela.</p>
</div>
```

---

## P14 — Seguimento pós-CCR · o tripé com gatilho do CEA + síntese da aula

**Conceito:** o seguimento de quem tratou o CCR como um **tripé de exames** sustentando a
janela de **5 anos** (sem nada nela = curado): **CEA** a cada 6 meses (o gatilho — salto
considerável dispara investigação), **TC** de tórax/abdome/pelve anual (recidiva abdominal
+ metástase pulmonar) e **colonoscopia** em 1 → 3 → 5 anos. No centro, o disparo: CEA
sobe muito → colono + TC. Embaixo, a **síntese da aula** costurando módulo (sequência →
SM1 → síndromes AD). Cada perna do tripé e o gatilho são hotspots.

> **Não repete** o reveal "seguimento" já presente na p14 (que lista consultas/CEA/colono/
> imagem em texto) nem o card de síntese textual; esta figura é a **arquitetura visual do
> tripé + o gatilho do CEA** que a lista enumera mas não desenha. Entra antes do reveal
> como o mapa do seguimento, e o reveal aprofunda o cronograma.

**Ponto de inserção:** página `p14`, **logo após o `</div>` que fecha o
`<div class="prose">` (linha ~1337)** e **antes do
`<div class="reveal" data-reveal="seguimento">` (linha 1339)**. A figura abre a
arquitetura do seguimento antes do cronograma item a item.

**Interação:** hotspot — 3 pernas do tripé (CEA, TC, colono) + o gatilho central do CEA +
o selo de síntese. `data-hs-stage="pol14"`.

```html
<figure class="figure-svg" role="group" aria-labelledby="cap-pol14">
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="pol14" aria-live="polite">
      <svg class="il-pol14" data-eso="pol14" viewBox="0 0 760 460" role="img" aria-labelledby="t-pol14 d-pol14">
        <title id="t-pol14">O tripé do seguimento pós-câncer colorretal e a síntese da aula</title>
        <desc id="d-pol14">Três pilares sustentam o seguimento pós-CCR ao longo de cinco anos: CEA a cada seis meses, tomografia de tórax, abdome e pelve anual, e colonoscopia em um, três e cinco anos. No centro, o gatilho mostra que um aumento considerável do CEA dispara colonoscopia e tomografia para caçar recidiva. Abaixo, a síntese costura a aula. Cada pilar e o gatilho são clicáveis.</desc>

        <text x="380" y="34" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="17">Seguimento pós-CCR: tripé até os 5 anos</text>
        <text x="380" y="56" text-anchor="middle" class="svg-label" fill="var(--ink-70)">cinco anos sem nada = curado · três exames sustentam a janela, com o CEA dando o gatilho</text>

        <!-- janela de 5 anos -->
        <rect x="60" y="84" width="640" height="30" rx="8" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="1.6" opacity="0.9"/>
        <text x="70"  y="104" class="svg-label" fill="var(--ok-green)">início</text>
        <text x="690" y="104" text-anchor="end" class="svg-label" fill="var(--ok-green)">5 anos → curado</text>
        <text x="380" y="104" text-anchor="middle" class="svg-label" fill="var(--ink-90)">janela de vigilância ativa</text>

        <!-- PERNA 1 — CEA -->
        <g class="hs-shape" data-hs-label="CEA — a cada 6 meses" data-hs-text="Antígeno carcinoembrionário, sempre de 6 em 6 meses. Por isso se dosa no pré-operatório (Aula 3): para ter a linha de base e acompanhar o declínio e depois as recidivas. É a perna mais sensível do tripé — o gatilho do seguimento." data-hs-hint="CEA 6/6 meses, sempre. Linha de base vem do pré-op.">
          <rect x="56" y="150" width="200" height="86" rx="16" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.4"/>
          <text x="156" y="182" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="15">CEA</text>
          <text x="156" y="204" text-anchor="middle" class="svg-label" fill="var(--ink-90)">a cada 6 meses</text>
          <text x="156" y="222" text-anchor="middle" class="svg-label" fill="var(--ink-70)">marcador de recidiva</text>
        </g>

        <!-- PERNA 2 — TC tórax/abdome/pelve -->
        <g class="hs-shape" data-hs-label="TC tórax/abdome/pelve — anual" data-hs-text="Tomografia de tórax, abdome e pelve, anual por 5 anos. Cobre os dois alvos: recidiva abdominal (abdome/pelve) e metástase pulmonar (tórax). RM de pelve só no câncer de reto baixo; TC de crânio só se houver sintomas." data-hs-hint="TC tórax+abdome+pelve anual. Recidiva abdominal + meta pulmonar.">
          <rect x="280" y="150" width="200" height="86" rx="16" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.4"/>
          <text x="380" y="182" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="15">TC tórax+abd+pelve</text>
          <text x="380" y="204" text-anchor="middle" class="svg-label" fill="var(--ink-90)">anual · por 5 anos</text>
          <text x="380" y="222" text-anchor="middle" class="svg-label" fill="var(--ink-70)">recidiva + meta pulmonar</text>
        </g>

        <!-- PERNA 3 — colonoscopia -->
        <g class="hs-shape" data-hs-label="Colonoscopia — 1, 3 e 5 anos" data-hs-text="Primeira colonoscopia após 1 ano; normal → repete em 3 anos; normal → em 5 anos; depois 5/5. É a vigilância do próprio cólon — procura tumor metacrônico e recidiva local." data-hs-hint="Colono em 1 → 3 → 5 anos, depois 5/5.">
          <rect x="504" y="150" width="200" height="86" rx="16" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.4"/>
          <text x="604" y="182" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="15">Colonoscopia</text>
          <text x="604" y="204" text-anchor="middle" class="svg-label" fill="var(--ink-90)">1 → 3 → 5 anos</text>
          <text x="604" y="222" text-anchor="middle" class="svg-label" fill="var(--ink-70)">vigilância do cólon</text>
        </g>

        <!-- pernas do tripé descendo ao gatilho -->
        <g stroke="var(--border-mid)" stroke-width="1.8" fill="none">
          <path d="M156 236 L300 290"/>
          <path d="M380 236 L380 290"/>
          <path d="M604 236 L460 290"/>
        </g>

        <!-- GATILHO CENTRAL — CEA sobe muito → colono + TC -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="CEA subiu muito → colono + TC" data-hs-text="O gatilho do seguimento: oscilação pequena (30 → 31) não conta; salto considerável (28 → 42) obriga colonoscopia + TC de tórax/abdome/pelve para caçar recidiva e metástase. O PET só entra depois, para esclarecer achado duvidoso da TC (fibrose × recidiva): hipercaptou = recidiva provável → abordar." data-hs-hint="Salto do CEA (28→42) → colono + TC. PET só depois, se TC duvidosa.">
          <rect x="246" y="290" width="268" height="80" rx="18" fill="var(--coral-dim)" stroke="var(--err-red)" stroke-width="2.4"/>
          <text x="380" y="318" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="14">CEA ↑ considerável?</text>
          <text x="380" y="340" text-anchor="middle" class="svg-label" fill="var(--coral-80)">28 → 42, não 30 → 31</text>
          <text x="380" y="358" text-anchor="middle" class="svg-label" fill="var(--ink-90)">→ colonoscopia + TC (PET só se TC duvidosa)</text>
        </g>

        <!-- divisor -->
        <line x1="60" y1="392" x2="700" y2="392" stroke="var(--border-soft)" stroke-width="1"/>

        <!-- SÍNTESE — selo final -->
        <g class="hs-shape" data-hs-label="Síntese — o fio do módulo" data-hs-text="O fecho da aula: o vilão é o VILOSO; Haggitt e SM são só do carcinoma, e SM1 é o limite da cura; as síndromes são todas autossômicas dominantes (PAF/APC, Peutz-Jeghers/STK11, Lynch/microssatélite). Esta aula pegou o CCR antes de existir; a Aula 3 tratou o instalado; a Aula 4 caçou a metástase hepática que ainda cura. O CEA e o eixo 'profundidade decide a conduta' (SM1) atravessam as três." data-hs-hint="Viloso · SM1 (só carcinoma) · síndromes AD. O CEA costura o módulo.">
          <rect x="60" y="406" width="640" height="42" rx="14" fill="var(--bg-elevated-2)" stroke="var(--teal-50)" stroke-width="1.8"/>
          <text x="380" y="426" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="13">Síntese: o vilão é o viloso · SM1 é o limite (só no carcinoma) · síndromes todas AD</text>
          <text x="380" y="442" text-anchor="middle" class="svg-label" fill="var(--ink-70)">clique para o fio que costura as Aulas 3, 4 e 5 — o CEA atravessa as três</text>
        </g>
      </svg>
    </div>
  </div>
  <figcaption id="cap-pol14"><strong>Três pernas, uma janela de 5 anos.</strong> <strong>CEA</strong> 6/6 meses (o gatilho), <strong>TC</strong> tórax+abdome+pelve anual e <strong>colonoscopia</strong> 1→3→5 anos. Salto considerável do CEA (28→42) → <span class="hl-bad">colono + TC</span>; PET só para achado duvidoso. Cinco anos sem nada = <span class="hl-good">curado</span>. Clique em cada perna, no gatilho e na síntese.</figcaption>
</figure>
<div class="hotspot-detail" data-hs-detail-for="pol14" aria-live="polite">
  <div class="hotspot-detail__label">Clique num pilar do seguimento</div>
  <p class="hotspot-detail__text">Toque em cada perna do tripé (CEA, TC, colonoscopia), no gatilho do CEA e no selo de síntese para montar o seguimento pós-CCR — e ver o fio que costura o módulo.</p>
</div>
```

---

## Checagem Bauer (auto-checklist §5, aplicada às 4 figuras)

- **Ensina sozinho?** Sim — cada `<title>`/`<desc>`/figcaption fecha o conceito mesmo sem
  clique; os `data-hs-text` aprofundam. O fallback estático (sem JS) mostra todos os
  rótulos, setas e veredito desenhados.
- **Tokens only, zero hex?** Confirmado — só tokens da lista do CSS (teal-05..60,
  coral/-dim/-50/-80, warn-amber/-dim, err-red/-dim, ok-green/-dim, ink-30..100,
  border-soft/mid/strong, bg-elevated/-2). Nenhum `--teal-70`/`--ink-60` (inexistentes).
- **Contrato do engine?** `.figure-svg__stage[data-hs-stage]` + `.hs-shape[data-hs-*]` +
  `.hotspot-detail[data-hs-detail-for]` — idêntico ao que `initInteractive` espera. **Sem
  JS novo, sem editar arquivo do produto.** Tons usados: `danger`, `trap`, default.
- **a11y / reduced-motion?** `role="img"` + `aria-labelledby` em todo `<svg>`; o engine
  torna cada `.hs-shape` focável (role=button, tabindex, setas do teclado); nenhuma
  animação SMIL — o pulso vem do CSS dos `.hs-shape`, que já respeita `prefers-reduced-motion`.
- **Não repete 01–04?** P1 é progressão temporal de UMA mucosa (≠ régua de 4 lesões
  hepáticas da A4) e rotina de 4 tempos (≠ mapa-do-caso pistas→dx); P7 é a lógica
  AND→colectomia (≠ reveal textual da própria p7); P13 é régua de idade + funil
  "alterou→colono" (≠ tabela da própria p13 e ≠ rastreio da A3); P14 é arquitetura do tripé
  + gatilho (≠ reveal textual da própria p14).
- **Convenção de cor?** teal=baseline/benigno/curado · coral/vermelho=maligno/colectomia/
  recidiva · âmbar=pegadinha/ponto de virada · verde=cura/colono-padrão-ouro.

## Resumo de ancoragem para o Executor (metadata — não editar DOM aqui)

| Pág | Stage / classe | Inserir após | Inserir antes | Tipo |
|-----|----------------|--------------|---------------|------|
| p1  | `pol1` · `.il-pol1`  | `</div>` de `dash__metrics` (~l.111) | `<h2>Trilha da aula</h2>` (l.113) | hotspot 8 alvos |
| p7  | `pol7` · `.il-pol7`  | `</div>` de `.prose` (~l.697) | `<div class="reveal" data-reveal="cura">` (l.699) | hotspot 7 alvos |
| p13 | `pol13` · `.il-pol13` | `</div>` de `.prose` (~l.1249) | `<div class="toggle-switch" ... data-toggle="rastreio">` (l.1251) | hotspot 5 alvos |
| p14 | `pol14` · `.il-pol14` | `</div>` de `.prose` (~l.1337) | `<div class="reveal" data-reveal="seguimento">` (l.1339) | hotspot 6 alvos |

Cada figura é autossuficiente (não precisa de container glass extra — o `.figure-svg__frame`
já dá a superfície). O `.hotspot-detail` correspondente vai **logo após** o `</figure>`,
como nas figuras `hep*` da aula-04.
