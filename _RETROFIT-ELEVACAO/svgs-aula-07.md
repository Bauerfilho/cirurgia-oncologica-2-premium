# SVGs profundos — Aula 07 · Nódulo e Câncer de Tireoide

Ilustrações reais (`figure-svg`, não ícone) para as 3 páginas que ainda não têm
figura autoral profunda: **p4 (TI-RADS), p5 (Bethesda), p12 (medular · família)**.
Padrão extra-06/extra-07 + aula-04: cada SVG **ensina sozinho** (Checagem Bauer),
interação com propósito, **fallback estático legível** (o SVG já desenha rótulos e
formas; o `hotspot-detail` já traz texto-base — funciona sem JS), tokens
(`var(--…)`, **zero hex**), `role="img"` + `<title>`/`<desc>`, **sem SMIL**,
`prefers-reduced-motion` respeitado (nenhuma figura anima; tudo é estado por clique).

> **Engine de interação (já existe — NÃO criar JS, NÃO editar produto).**
> A aula-07 carrega `initInteractive(document)` em `app.js` (linha 385), que liga os
> **hotspots** do `assets/js/components/interactive.js`. As 3 figuras usam **só esse
> contrato de hotspot**, idêntico ao que o ilustrador aplicou na aula-04:
> - `.figure-svg__stage[data-hs-stage="X"]` envolve o `<svg>`.
> - cada estrutura clicável é um `<g class="hs-shape" data-hs-label="…" data-hs-text="…"
>   data-hs-hint="…" [data-hs-tone="danger|trap"]>` — **o próprio desenho é o alvo**
>   (regra de luxo Bauer: hotspot no elemento, não pin flutuante).
> - um `.hotspot-detail[data-hs-detail-for="X"]` irmão recebe o cartão e já traz
>   texto-base (fallback sem JS).
>
> O atributo `data-eso="tirN"` e a classe `.il-tirN` vão no `<svg>` como **identidade/
> âncora** da aula (marca semântica pedida; o engine não os exige).

> **Convenção de cor desta aula** — teal = baseline/benigno/tranquilo · âmbar
> (`--warn-amber`, tom `trap`) = zona cinzenta/indeterminado/"depende" · coral
> (tom `danger`) = suspeito/maligno/agressivo · verde (`--ok-green`) = conduta
> conservadora correta / "antes do câncer" · vermelho (`--err-red`) = câncer
> confirmado / cirurgia obrigatória. Texto interno: `.svg-title` (sans 700),
> `.svg-label` (mono 11px) — classes já no `components.css`.

> **Não repete nenhum conceito visual das outras aulas.** p4 não é a régua-de-risco
> da aula-04 (aquilo é gradiente de agressividade de lesões hepáticas; aqui é **um
> nódulo anatômico carimbado pelos 5 critérios do ANEI**). p5 é um **mapa de portas
> 6→3** (gestalt do agrupamento Bethesda), inédito na plataforma. p12 é um
> **heredograma/cascata RET**, formato que nenhuma outra página usa.

> **Importante:** a p4 já tem na página um *score-builder* (`#tirads4`, com a régua
> TR1–TR5) e a p5 já tem *cards Bethesda* expansíveis (`.dyn`). Estas figuras **não os
> substituem** — entram **antes** deles como a **visão anatômica/espacial** que dá
> sentido ao interativo seguinte (o nódulo de onde saem os pontos; o mapa que os cards
> destrincham). Conferido para não duplicar marcação nem `id`.

---

## P4 — O nódulo carimbado: os 5 critérios do ANEI viram os pontos do TI-RADS

**Conceito:** o ponto-chave da página é "TI-RADS = **ANEI pontuado**, não tabela nova
para decorar". A figura desenha **um único nódulo suspeito** dentro da tireoide e
marca, sobre o próprio desenho, as **cinco categorias** que somam pontos —
composição, ecogenicidade, forma (mais alto que largo), margem (irregular/ETE) e
focos ecogênicos (microcalcificações). Cada critério é um hotspot que explica o que
o ANEI já ensinou e quanto ele "pesa". A leitura final ("alta suspeição") é o que se
traduz para "TI-RADS 5 → PAF". A figura é a **anatomia de onde sai o score** — o
interativo `#tirads4` logo abaixo é onde o aluno **soma** os pontos.

**Ponto de inserção:** página `p4`, **logo após o `</div>` que fecha o `<div class="prose">`
(linha ~533)** e **antes do `<!-- INTERATIVO: tabela dinâmica / score builder TI-RADS -->`
(linha 535)**. Entra como a imagem que dá corpo ao texto e prepara o score-builder.

**Interação:** hotspot — 5 critérios sobre o nódulo. `data-hs-stage="tir4"`.

```html
<figure class="figure-svg" role="group" aria-labelledby="cap-tir4">
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="tir4" aria-live="polite">
      <svg class="il-tir4" data-eso="tir4" viewBox="0 0 760 440" role="img" aria-labelledby="t-tir4 d-tir4">
        <title id="t-tir4">As cinco características do ANEI que pontuam no TI-RADS</title>
        <desc id="d-tir4">Corte de uma tireoide com um nódulo suspeito ao centro. Cinco marcações apontam as características que o TI-RADS pontua — composição sólida, ecogenicidade hipoecoica, forma mais alta que larga, margem irregular com extensão extratireoidiana e microcalcificações — as mesmas que o ANEI empacota. Cada marcação é clicável.</desc>

        <defs>
          <radialGradient id="tir4-node" cx="50%" cy="42%" r="65%">
            <stop offset="0%" stop-color="var(--coral-dim)"/>
            <stop offset="100%" stop-color="var(--bg-elevated-2)"/>
          </radialGradient>
        </defs>

        <!-- título / chamada -->
        <text x="380" y="34" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="17">TI-RADS = ANEI pontuado</text>
        <text x="380" y="56" text-anchor="middle" class="svg-label" fill="var(--ink-70)">clique em cada característica para ver o que ela carimba no score</text>

        <!-- glândula tireoide (corte transversal: dois lobos + istmo) -->
        <path d="M250 250 q-70 -28 -86 18 q-18 56 30 92 q44 30 70 -10 q12 -22 8 -54 Z" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2"/>
        <path d="M510 250 q70 -28 86 18 q18 56 -30 92 q-44 30 -70 -10 q-12 -22 -8 -54 Z" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2"/>
        <rect x="300" y="266" width="160" height="40" rx="18" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="1.6"/>
        <text x="172" y="372" class="svg-label" fill="var(--teal-60)">tireoide</text>

        <!-- NÓDULO suspeito: mais alto que largo, margem irregular -->
        <path d="M352 196 q-30 6 -34 64 q-3 60 38 86 q44 6 56 -54 q10 -58 -16 -90 q-20 -16 -44 -6 Z"
              fill="url(#tir4-node)" stroke="var(--coral-50)" stroke-width="2.6"/>

        <!-- CRITÉRIO 1 — Composição (sólido) -->
        <g class="hs-shape" data-hs-label="Composição — sólido" data-hs-text="Primeira categoria do score. Nódulo sólido (sem componente cístico) é o de maior risco e pontua mais; cístico/espongiforme não pontua. É a única categoria que o ANEI não nomeava por fora — mas é a base sobre a qual as outras quatro entram." data-hs-hint="Sólido pontua; cístico/espongiforme não.">
          <circle cx="384" cy="232" r="9" fill="var(--coral-60)"/>
          <circle cx="408" cy="262" r="7" fill="var(--coral-60)"/>
          <circle cx="374" cy="288" r="8" fill="var(--coral-60)"/>
          <circle cx="404" cy="306" r="6" fill="var(--coral-60)"/>
          <text x="384" y="220" text-anchor="middle" class="svg-label" fill="var(--coral-80)">sólido</text>
        </g>

        <!-- CRITÉRIO 2 — Ecogenicidade (hipoecoico) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Ecogenicidade — hipoecoico" data-hs-text="O 'hipo' do ANEI. Nódulo mais escuro que o parênquima (hipoecoico) pontua; muito hipoecoico pontua ainda mais. É o achado de cor que liga o nódulo à suspeição. Anecoico (cístico) não conta." data-hs-hint="Quanto mais escuro que a glândula, mais pontua.">
          <line x1="150" y1="248" x2="318" y2="248" stroke="var(--coral-50)" stroke-width="1.6" stroke-dasharray="5 5"/>
          <circle cx="150" cy="248" r="6" fill="var(--coral-60)"/>
          <text x="140" y="240" text-anchor="end" class="svg-label" fill="var(--coral-80)">hipoecoico</text>
        </g>

        <!-- CRITÉRIO 3 — Forma (mais alto que largo) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Forma — mais alto que largo" data-hs-text="O critério que mais vale por si só: nódulo cuja altura supera a largura (cresce 'verticalizado', contra os planos teciduais) é o achado mais específico de malignidade. No ANEI é o 'mais alto que largo'." data-hs-hint="Vertical > horizontal = alta suspeição (peso alto).">
          <line x1="368" y1="200" x2="368" y2="338" stroke="var(--coral-60)" stroke-width="1.8"/>
          <path d="M364 204 l4 -8 l4 8 Z" fill="var(--coral-60)"/>
          <path d="M364 334 l4 8 l4 -8 Z" fill="var(--coral-60)"/>
          <line x1="324" y1="356" x2="430" y2="356" stroke="var(--ink-50)" stroke-width="1.4" stroke-dasharray="4 4"/>
          <text x="486" y="272" text-anchor="middle" class="svg-label" fill="var(--coral-80)">mais alto que largo</text>
        </g>

        <!-- CRITÉRIO 4 — Margem (irregular / extensão extratireoidiana) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Margem — irregular / ETE" data-hs-text="Margem do ANEI. Contorno lobulado ou irregular pontua; se o nódulo rompe a cápsula e infiltra fora da glândula (extensão extratireoidiana), pontua o máximo — é o extremo de alto risco, exatamente o US de TI-RADS 5 mostrado na foto da página." data-hs-hint="Irregular pontua; extensão extratireoidiana pontua o máximo.">
          <path d="M438 226 l26 -14 M446 252 l30 -8 M448 286 l30 4 M440 312 l26 16" stroke="var(--err-red)" stroke-width="2.2"/>
          <text x="492" y="318" text-anchor="middle" class="svg-label" fill="var(--err-red)">infiltra para fora</text>
        </g>

        <!-- CRITÉRIO 5 — Focos ecogênicos (microcalcificações) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Focos ecogênicos — microcalcificações" data-hs-text="Os focos do ANEI. Pontinhos brilhantes puntiformes (microcalcificações) são corpos psamomatosos — muito sugestivos de papilífero e pontuam alto. Macrocalcificação pontua menos; nenhum foco, não pontua." data-hs-hint="Micropontos brilhantes (psamomatosos) = papilífero, peso alto.">
          <circle cx="372" cy="248" r="2.6" fill="var(--ink-100)"/>
          <circle cx="390" cy="266" r="2.6" fill="var(--ink-100)"/>
          <circle cx="366" cy="284" r="2.6" fill="var(--ink-100)"/>
          <circle cx="388" cy="298" r="2.6" fill="var(--ink-100)"/>
          <circle cx="380" cy="232" r="2.6" fill="var(--ink-100)"/>
          <text x="384" y="358" text-anchor="middle" class="svg-label" fill="var(--ink-90)">microcalcificações</text>
        </g>

        <!-- leitura final -->
        <g transform="translate(0,394)">
          <rect x="200" y="0" width="360" height="34" rx="17" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="1.6"/>
          <text x="380" y="22" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="13">soma alta → "alta suspeição" → TI-RADS 5 → PAF</text>
        </g>
      </svg>
    </div>
  </div>
  <figcaption id="cap-tir4"><strong>O nódulo carimbado.</strong> As cinco categorias que o TI-RADS soma — composição, ecogenicidade, forma, margem e focos — são as <strong>mesmas do ANEI</strong> que você já domina. Não é tabela nova: é o ANEI com pontos. Some o suficiente e o nódulo lê-se "alta suspeição" — o que, com <strong>≥ 1 cm, manda fazer PAF</strong>. Clique em cada característica.</figcaption>
</figure>
<div class="hotspot-detail" data-hs-detail-for="tir4" aria-live="polite">
  <div class="hotspot-detail__label">Clique numa característica</div>
  <p class="hotspot-detail__text">Toque em cada marcação do nódulo para ver o que ela carimba no score — e por que você reconhece todas: são as do ANEI. Logo abaixo, monte a soma no construtor de TI-RADS.</p>
</div>
```

---

## P5 — Seis categorias, três portas: o mapa do Bethesda

**Conceito:** o texto pede "feche o mapa inteiro numa imagem só" e organiza Bethesda
**1–6 em três duplas → três destinos** (repete PAF / acompanha / opera). A figura é
exatamente esse mapa: três **portas** (duplas), cada uma levando a um **destino**, e
na porta do meio (3-4) o **garfo do teste molecular** (alteração → cirurgia; ausência
→ acompanhar) — o motivo elegante de a citologia não bastar (invasão de cápsula/vasos
só no histopatológico). Cada porta é um hotspot. É a **gestalt 6→3** que dá sentido
aos cards `.dyn` expansíveis logo abaixo (que destrincham categoria por categoria).

**Ponto de inserção:** página `p5`, **logo após o `</div>` que fecha o `<div class="prose">`
(linha ~668)** e **antes do `<!-- INTERATIVO: tabela dinâmica Bethesda -->` (linha 670)**.
A figura entrega o mapa-síntese; os cards abaixo abrem cada categoria.

**Interação:** hotspot — 3 portas + o garfo molecular. `data-hs-stage="tir5"`.

```html
<figure class="figure-svg" role="group" aria-labelledby="cap-tir5">
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="tir5" aria-live="polite">
      <svg class="il-tir5" data-eso="tir5" viewBox="0 0 760 430" role="img" aria-labelledby="t-tir5 d-tir5">
        <title id="t-tir5">Bethesda em três duplas e três destinos</title>
        <desc id="d-tir5">As seis categorias de Bethesda agrupadas em três duplas. A dupla 1-2 leva a repetir a punção ou acompanhar; a dupla 3-4, em âmbar, é a zona cinzenta que se decide pelo teste molecular — alteração leva à cirurgia, ausência ao acompanhamento; a dupla 5-6, em vermelho, é câncer e vai direto para cirurgia. Cada dupla é clicável.</desc>

        <!-- chamada -->
        <text x="380" y="34" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="17">Seis categorias, três portas</text>
        <text x="380" y="56" text-anchor="middle" class="svg-label" fill="var(--ink-70)">a mesma PAF; o que muda é em qual dupla a citologia cai</text>

        <!-- coluna de origem: a PAF -->
        <g>
          <rect x="40" y="190" width="96" height="56" rx="14" fill="var(--bg-elevated-2)" stroke="var(--ink-50)" stroke-width="1.6"/>
          <text x="88" y="216" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="13">PAF</text>
          <text x="88" y="234" text-anchor="middle" class="svg-label" fill="var(--ink-70)">células</text>
          <line x1="136" y1="218" x2="184" y2="218" stroke="var(--ink-50)" stroke-width="1.6"/>
        </g>

        <!-- PORTA 1-2 · extremos tranquilos (teal) -->
        <g class="hs-shape" data-hs-label="Dupla 1-2 — extremos tranquilos" data-hs-text="Os extremos sem suspense. Bethesda 1 = não diagnóstico (material insuficiente/hemorrágico) → repetir a PAF. Bethesda 2 = benigno (sem atipia) → seguimento. Nenhum dos dois opera de imediato." data-hs-hint="1 repete a PAF · 2 acompanha. Tranquilos.">
          <rect x="200" y="84" width="186" height="78" rx="16" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.2"/>
          <text x="293" y="112" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="14">Bethesda 1-2</text>
          <text x="293" y="134" text-anchor="middle" class="svg-label" fill="var(--teal-60)">não diagnóstico · benigno</text>
          <text x="293" y="152" text-anchor="middle" class="svg-label" fill="var(--ink-70)">repete PAF · acompanha</text>
          <line x1="386" y1="123" x2="470" y2="123" stroke="var(--teal-50)" stroke-width="1.8"/>
          <path d="M470 119 l8 4 l-8 4 Z" fill="var(--teal-50)"/>
          <text x="540" y="118" text-anchor="middle" class="svg-label" fill="var(--teal-60)">repetir / seguir</text>
        </g>

        <!-- PORTA 3-4 · zona cinzenta (âmbar) com garfo molecular -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Dupla 3-4 — zona cinzenta" data-hs-text="A zona cinzenta, unida pelo teste molecular. Bethesda 3 = atipia indeterminada; Bethesda 4 = neoplasia folicular. A citologia não separa benigno de maligno aqui — porque o que separa é invasão de cápsula ou angioinvasão, e isso só se vê no histopatológico, na arquitetura do tecido, nunca em células soltas. Por isso entra o teste molecular nas próprias células da PAF." data-hs-hint="3-4 = indeterminado → teste molecular decide.">
          <rect x="200" y="184" width="186" height="78" rx="16" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2.2"/>
          <text x="293" y="212" text-anchor="middle" class="svg-title" fill="var(--warn-amber)" font-size="14">Bethesda 3-4</text>
          <text x="293" y="234" text-anchor="middle" class="svg-label" fill="var(--warn-amber)">zona cinzenta</text>
          <text x="293" y="252" text-anchor="middle" class="svg-label" fill="var(--ink-70)">teste molecular</text>
        </g>

        <!-- garfo molecular (estático: fallback já mostra os dois ramos) -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="O garfo do teste molecular" data-hs-text="A bifurcação que decide a zona cinzenta sem operar para descobrir: faz-se avaliação genética nas células da própria PAF. Alteração molecular associada a câncer → cirurgia. Ausência de alteração → acompanhamento. Vale para Bethesda 3 e 4 — é a via moderna de não operar só para saber." data-hs-hint="Alterado → cirurgia · sem alteração → acompanha.">
          <line x1="386" y1="223" x2="438" y2="223" stroke="var(--warn-amber)" stroke-width="1.8"/>
          <path d="M438 223 L470 190 M438 223 L470 256" stroke="var(--warn-amber)" stroke-width="1.8" fill="none"/>
          <g transform="translate(474,176)">
            <rect x="0" y="0" width="22" height="22" rx="6" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="1.6"/>
            <path d="M5 11 l4 5 l9 -10" stroke="var(--err-red)" stroke-width="2" fill="none"/>
            <text x="30" y="16" class="svg-label" fill="var(--err-red)">alterado → cirurgia</text>
          </g>
          <g transform="translate(474,232)">
            <rect x="0" y="0" width="22" height="22" rx="6" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="1.6"/>
            <path d="M5 11 l4 5 l9 -10" stroke="var(--ok-green)" stroke-width="2" fill="none"/>
            <text x="30" y="16" class="svg-label" fill="var(--ok-green)">sem alteração → acompanha</text>
          </g>
        </g>

        <!-- PORTA 5-6 · câncer (vermelho) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Dupla 5-6 — câncer" data-hs-text="A ponta maligna. Bethesda 5 = suspeito para malignidade; Bethesda 6 = maligno. Os dois vão direto para cirurgia — sem discussão, sem teste molecular intermediário. É a dupla de conduta cirúrgica." data-hs-hint="5 suspeito · 6 maligno → cirurgia, sem discussão.">
          <rect x="200" y="306" width="186" height="78" rx="16" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="2.4"/>
          <text x="293" y="334" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="14">Bethesda 5-6</text>
          <text x="293" y="356" text-anchor="middle" class="svg-label" fill="var(--err-red)">suspeito · maligno</text>
          <text x="293" y="374" text-anchor="middle" class="svg-label" fill="var(--ink-70)">cirurgia</text>
          <line x1="386" y1="345" x2="470" y2="345" stroke="var(--err-red)" stroke-width="1.8"/>
          <path d="M470 341 l8 4 l-8 4 Z" fill="var(--err-red)"/>
          <text x="540" y="340" text-anchor="middle" class="svg-label" fill="var(--err-red)">cirurgia</text>
        </g>

        <!-- coluna de destino: rótulos âncora -->
        <line x1="184" y1="123" x2="200" y2="123" stroke="var(--teal-50)" stroke-width="1.6"/>
        <line x1="184" y1="223" x2="200" y2="223" stroke="var(--warn-amber)" stroke-width="1.6"/>
        <line x1="184" y1="345" x2="200" y2="345" stroke="var(--err-red)" stroke-width="1.6"/>
      </svg>
    </div>
  </div>
  <figcaption id="cap-tir5"><strong>Seis em três.</strong> Da mesma PAF saem três portas: <strong>1-2</strong> repete ou acompanha (tranquilo), <strong>3-4</strong> é a zona cinzenta que o <strong>teste molecular</strong> decide (alterado → cirurgia · sem alteração → acompanha), <strong>5-6</strong> é câncer e vai para cirurgia. A citologia não basta no 3-4 porque invasão de cápsula/vasos só aparece no histopatológico, nunca em células soltas. Clique em cada porta.</figcaption>
</figure>
<div class="hotspot-detail" data-hs-detail-for="tir5" aria-live="polite">
  <div class="hotspot-detail__label">Clique numa dupla</div>
  <p class="hotspot-detail__text">Toque em cada porta para ver as duas categorias que ela reúne e para onde levam — e por que só a do meio precisa do teste molecular. Abaixo, abra categoria por categoria.</p>
</div>
```

---

## P12 — A cascata do RET: do índice à criança operada antes do câncer

**Conceito:** o ponto mais avançado da página é o **desdobramento familiar**: paciente
índice com medular **hereditário** (RET germinativo) → **rastrear RET nos familiares**
→ familiar (uma **criança**) com mutação de **alto risco** → **tireoidectomia
profilática** (retirar a tireoide **antes** de o câncer aparecer). A figura é um
**heredograma/cascata** — formato inédito na plataforma — onde cada nó é um hotspot:
o índice, o tratamento fixo dele (TT + linfadenectomia sempre + calcitonina), o teste
RET na família, o portador de alto risco e a cirurgia profilática. Distinta da
**calculadora** `#mt12` logo abaixo (que é o fluxo por checkbox): aqui é o **mapa do
parentesco** que mostra a doença saindo de um para muitos, e a medicina agindo antes.

**Ponto de inserção:** página `p12`, **logo após o `</div>` que fecha o `<div class="prose">`
(linha ~1744)** e **antes do `<!-- INTERATIVO: checklist fixo (trava) + fluxo familiar -->`
(linha 1746)**. A figura dá o panorama do parentesco; a calculadora abaixo executa o fluxo.

**Interação:** hotspot — 5 nós da cascata. `data-hs-stage="tir12"`.

```html
<figure class="figure-svg" role="group" aria-labelledby="cap-tir12">
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="tir12" aria-live="polite">
      <svg class="il-tir12" data-eso="tir12" viewBox="0 0 760 440" role="img" aria-labelledby="t-tir12 d-tir12">
        <title id="t-tir12">Cascata do RET no carcinoma medular hereditário</title>
        <desc id="d-tir12">Heredograma: o paciente índice com carcinoma medular hereditário e mutação germinativa no RET é tratado com tireoidectomia total e linfadenectomia, seguido pela calcitonina. A descoberta de doença hereditária dispara a pesquisa do gene RET nos familiares; um familiar criança com mutação de alto risco recebe tireoidectomia profilática, retirando a tireoide antes de o câncer surgir. Cada nó é clicável.</desc>

        <!-- chamada -->
        <text x="380" y="32" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="17">Do índice à família: a cascata do RET</text>
        <text x="380" y="54" text-anchor="middle" class="svg-label" fill="var(--ink-70)">tratar amplo · descobrir hereditariedade · agir antes do câncer</text>

        <!-- NÓ 1 — paciente índice (medular hereditário) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Paciente índice — medular hereditário" data-hs-text="O ponto de partida. Carcinoma medular já diagnosticado, com prognóstico pior que o diferenciado — o que justifica a postura agressiva. Depois da cirurgia, o resultado mostra que a doença é hereditária: há mutação germinativa no RET, que pode ter sido passada à família." data-hs-hint="Medular + RET germinativo = doença que corre na família.">
          <circle cx="130" cy="150" r="40" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="2.6"/>
          <text x="130" y="146" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="13">índice</text>
          <text x="130" y="164" text-anchor="middle" class="svg-label" fill="var(--err-red)">RET +</text>
          <text x="130" y="208" text-anchor="middle" class="svg-label" fill="var(--ink-70)">medular hereditário</text>
        </g>

        <!-- NÓ 2 — tratamento fixo do índice -->
        <g class="hs-shape" data-hs-label="Tratamento fixo — TT + linfadenectomia sempre" data-hs-text="A fixidez que cai em prova: tireoidectomia total SEMPRE + linfadenectomia SEMPRE, de rotina. Diferente do diferenciado, onde a linfadenectomia entrava só com linfonodo acometido. Seguimento pela calcitonina (protagonista) com o CEA como acompanhante secundário, pouco cobrado." data-hs-hint="TT + linfadenectomia de rotina · calcitonina no seguimento.">
          <rect x="48" y="244" width="164" height="74" rx="16" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2"/>
          <text x="130" y="270" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="13">TT + linfadenectomia</text>
          <text x="130" y="288" text-anchor="middle" class="svg-label" fill="var(--teal-60)">sempre · de rotina</text>
          <text x="130" y="306" text-anchor="middle" class="svg-label" fill="var(--ink-70)">seguir: calcitonina · CEA</text>
          <line x1="130" y1="190" x2="130" y2="244" stroke="var(--teal-50)" stroke-width="1.8"/>
        </g>

        <!-- seta da hereditariedade: índice → família -->
        <line x1="170" y1="150" x2="300" y2="150" stroke="var(--warn-amber)" stroke-width="2" stroke-dasharray="6 5"/>
        <path d="M300 146 l8 4 l-8 4 Z" fill="var(--warn-amber)"/>
        <text x="236" y="138" text-anchor="middle" class="svg-label" fill="var(--warn-amber)">hereditário →</text>

        <!-- NÓ 3 — pesquisa do RET nos familiares -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Rastreio — pesquisar RET na família" data-hs-text="O desdobramento. Sendo a doença hereditária, os familiares podem carregar a mesma mutação. Indica-se a pesquisa do gene RET nos familiares — testa-se quem está em risco antes de qualquer sintoma. A conduta de cada um depende do resultado." data-hs-hint="Doença hereditária → testar RET em todos os familiares.">
          <rect x="316" y="116" width="150" height="70" rx="16" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2.2"/>
          <text x="391" y="146" text-anchor="middle" class="svg-title" fill="var(--warn-amber)" font-size="13">pesquisar RET</text>
          <text x="391" y="166" text-anchor="middle" class="svg-label" fill="var(--ink-70)">nos familiares</text>
        </g>

        <!-- ramos da família: 3 parentes -->
        <line x1="391" y1="186" x2="391" y2="214" stroke="var(--ink-50)" stroke-width="1.6"/>
        <line x1="300" y1="214" x2="560" y2="214" stroke="var(--ink-50)" stroke-width="1.6"/>
        <line x1="300" y1="214" x2="300" y2="246" stroke="var(--ink-50)" stroke-width="1.6"/>
        <line x1="430" y1="214" x2="430" y2="246" stroke="var(--ink-50)" stroke-width="1.6"/>
        <line x1="560" y1="214" x2="560" y2="246" stroke="var(--warn-amber)" stroke-width="1.8"/>

        <!-- parente RET negativo (tranquilo) -->
        <circle cx="300" cy="276" r="26" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2"/>
        <text x="300" y="280" text-anchor="middle" class="svg-label" fill="var(--teal-60)">RET −</text>
        <text x="300" y="320" text-anchor="middle" class="svg-label" fill="var(--ink-70)">só observa</text>

        <!-- parente RET baixo risco -->
        <circle cx="430" cy="276" r="26" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2"/>
        <text x="430" y="280" text-anchor="middle" class="svg-label" fill="var(--teal-60)">RET −</text>
        <text x="430" y="320" text-anchor="middle" class="svg-label" fill="var(--ink-70)">acompanha</text>

        <!-- NÓ 4 — criança RET alto risco -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Criança com RET de alto risco" data-hs-text="O caso-gatilho. Um familiar — tipicamente uma criança — tem mutação no RET classificada como de ALTO risco. Ainda não tem câncer, mas o risco de desenvolver é alto o bastante para antecipar. É a situação que indica a profilaxia." data-hs-hint="Criança + RET de alto risco = antecipar antes do tumor.">
          <rect x="528" y="250" width="64" height="52" rx="14" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="2.4"/>
          <text x="560" y="272" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="12">criança</text>
          <text x="560" y="290" text-anchor="middle" class="svg-label" fill="var(--err-red)">RET alto risco</text>
        </g>

        <!-- NÓ 5 — tireoidectomia profilática -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Tireoidectomia profilática" data-hs-text="A medicina que age antes do câncer. Diante do prognóstico pior do medular e de um RET de alto risco, retira-se a tireoide ANTES de o tumor aparecer. É o ponto mais avançado da página — e só existe porque o rastreio familiar encontrou o portador." data-hs-hint="Retirar a tireoide antes do câncer surgir — só com rastreio.">
          <line x1="560" y1="302" x2="560" y2="338" stroke="var(--ok-green)" stroke-width="1.8"/>
          <rect x="452" y="338" width="216" height="64" rx="16" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="2.2"/>
          <path d="M474 370 l9 11 l18 -22" stroke="var(--ok-green)" stroke-width="2.4" fill="none"/>
          <text x="568" y="366" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="13">tireoidectomia profilática</text>
          <text x="568" y="386" text-anchor="middle" class="svg-label" fill="var(--ok-green)">antes do câncer aparecer</text>
        </g>
      </svg>
    </div>
  </div>
  <figcaption id="cap-tir12"><strong>Um vira muitos — e a medicina chega antes.</strong> O índice tem medular <strong>hereditário</strong> (RET germinativo) e recebe o tratamento fixo: <strong>tireoidectomia total + linfadenectomia, sempre</strong>, seguido pela <strong>calcitonina</strong>. A hereditariedade dispara a <strong>pesquisa do RET na família</strong>; o familiar — uma criança — com <strong>RET de alto risco</strong> recebe <strong>tireoidectomia profilática</strong>: retira-se a tireoide <em>antes</em> de o câncer surgir. Clique em cada nó.</figcaption>
</figure>
<div class="hotspot-detail" data-hs-detail-for="tir12" aria-live="polite">
  <div class="hotspot-detail__label">Clique num nó da cascata</div>
  <p class="hotspot-detail__text">Toque no índice, no tratamento fixo, no rastreio do RET, na criança de alto risco ou na cirurgia profilática para ver como a doença sai de um para a família — e por que se opera antes do câncer. Abaixo, percorra o fluxo na calculadora.</p>
</div>
```

---

## Checagem Bauer (auto-checklist §5, por figura)

- **Engine compatível** — todas usam o hotspot já ligado por `initInteractive` na p4/p5/p12; **nenhum JS novo, nenhum arquivo de produto editado**. Marcação idêntica ao padrão da aula-04.
- **`viewBox` + `role="img"` + `<title>`/`<desc>`** técnicos em todas. `data-eso="tirN"` + `.il-tirN` presentes.
- **Zero hex** — só `var(--…)` (teal/coral/ink/warn-amber/ok-green/err-red/bg-elevated, todos confirmados em `tokens.css`/`components.css`).
- **Sem SMIL, sem animação** — estado puro por clique/teclado (hotspot já dá foco, setas, `aria-pressed`); `prefers-reduced-motion` irrelevante por não haver movimento.
- **Fallback estático** — sem JS, o SVG já desenha as formas e rótulos e o `hotspot-detail` já traz texto-base; cada figura ensina o conceito mesmo sem interação.
- **Ensina sozinho** — p4: ANEI→pontos sobre um nódulo; p5: 6→3 portas com o garfo molecular; p12: cascata RET até a profilática. Cada uma casa com a prosa real da própria página.
- **Não duplica** — nenhum `id` colide com `#tirads4` (p4), `.dyn` (p5) ou `#mt12` (p12); conceitos visuais inéditos na plataforma e entre si.
- **Sem metalinguagem / watermark / placeholder** — labels técnicos diretos.

**Próximo passo sugerido:** Executor insere cada bloco no ponto de inserção indicado (antes do interativo existente de cada página), sem tocar em JS/CSS — as classes e o engine já existem.
