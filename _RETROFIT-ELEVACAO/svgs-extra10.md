# SVGs — Aula Extra 10 · Tumores do Mediastino

> Entregue do Ilustrador para o Executor. **NÃO editei nenhum arquivo do produto** — todos os SVGs estão inline aqui, prontos para o Executor colar no `index.html` da `aula-extra-10-mediastino`.
>
> **Engine:** canônica compartilhada `assets/js/components/interactive.js` → `initInteractive(document)` (mesma de aula-04 e aula-extra-07). O Executor só precisa importar/chamar `initInteractive` na página (igual `aula-04/aula-04.js` linha 146). **Zero JS novo necessário.**
>
> **Contrato de marcação respeitado em cada SVG:**
> - wrapper `figure.figure-svg` → `.figure-svg__frame` → `.figure-svg__stage[data-hs-stage="medN"]`
> - cada hotspot é o **próprio elemento desenhado**: `<g class="hs-shape" data-hs-label data-hs-text data-hs-hint [data-hs-tone]>`
> - painel irmão `.hotspot-detail[data-hs-detail-for="medN"]` recebe o detalhe renderizado (o engine injeta `__label`/`__text`/`__hint`)
> - **fallback estático:** o `.hotspot-detail` já vem com um conteúdo-semente legível sem JS; e cada `hs-shape` é legível por conta própria (label gravado dentro do SVG). Sem JS, o desenho ensina; com JS, ganha o painel detalhado.
> - `role="img"` + `aria-labelledby` (title+desc) por SVG · tokens `var(--…)` only, **zero hex** · **sem SMIL** (animação fica no CSS por `prefers-reduced-motion`, se o Executor quiser).
>
> **Naming exigido pelo brief:** `class="il-medN"`, `data-eso="medN"`, `data-hs-stage="medN"`.
>
> **Tones do engine** (`data-hs-tone`): vazio = teal/baseline · `danger` = coral/maligno · `trap` = âmbar/pegadinha. Para "bom prognóstico" uso `data-hs-tone="good"` (verde) — o engine só repassa o valor para `detail.dataset.tone`; o Executor pode estilizar `.hotspot-detail[data-tone="good"]` no CSS da aula (opcional, há fallback de cor dentro do SVG).
>
> **Anti-repetição:** nenhum SVG reusa conceito de outra aula. O corte sagital anatômico do mediastino (P2) é a peça-mãe e só aparece aqui; a régua de Masaoka (P8) e o par contiguidade×implante (P9) são exclusivos. Cada SVG ensina sozinho.

---

## P1 · `med1` — O cardápio da banca (4 perguntas-tipo → resposta-âncora)

**Ponto de inserção:** após o tópico 2 ("A pergunta-tipo, palavra por palavra"), antes do `op-summary`. É o primeiro contato visual com o formato da prova.

**Conceito que reforça:** a prova do mediastino é sempre uma de 4 perguntas estatísticas. Clicar em cada "cartão-pergunta" revela a resposta-âncora — o aluno aprende o formato antes do conteúdo.

```html
<figure class="figure-svg" role="group" aria-labelledby="cap-med1">
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="med1" aria-live="polite">
      <svg class="il-med1" data-eso="med1" viewBox="0 0 760 360" role="img" aria-labelledby="t-med1 d-med1">
        <title id="t-med1">As quatro perguntas de prova do mediastino e suas respostas</title>
        <desc id="d-med1">Quatro cartões-pergunta no formato de banca — mais comum de todos, do anterior, do médio e do posterior — cada um clicável para revelar a resposta-âncora: timoma, timoma, cisto broncogênico e tumores neurogênicos.</desc>

        <text x="380" y="40" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="17">No mediastino, a banca pergunta sempre "quem é o mais comum?"</text>
        <text x="380" y="62" text-anchor="middle" class="svg-label" fill="var(--ink-70)">clique em cada cartão para ver a resposta-âncora</text>

        <g class="hs-shape" data-hs-tone="good" data-hs-label="Mais comum de TODOS → timoma"
           data-hs-text="A pergunta-rainha do tema. Resposta única e a mais cobrada: timoma. Por ser o campeão absoluto, ganha aprofundamento próprio ao final (miastenia gravis e Masaoka)."
           data-hs-hint="Timoma é o 1º de todos. O 2º de todos é o linfoma.">
          <rect x="48" y="96" width="320" height="112" rx="14" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.4"/>
          <text x="72" y="132" class="svg-title" fill="var(--teal-60)" font-size="14">Mais comum de TODOS?</text>
          <text x="72" y="158" class="svg-label" fill="var(--ink-70)">a pergunta que mais aparece</text>
          <text x="72" y="190" class="svg-title" fill="var(--ok-green)" font-size="15">→ timoma</text>
        </g>

        <g class="hs-shape" data-hs-label="Mais comum do ANTERIOR → timoma"
           data-hs-text="Anterossuperior é a casa do timo, da tireoide mergulhante, do teratoma e do terrível linfoma — os quatro T. O campeão do compartimento é o próprio timoma."
           data-hs-hint="Anterior = quatro T. Campeão: timoma.">
          <rect x="392" y="96" width="320" height="112" rx="14" fill="var(--bg-elevated-2)" stroke="var(--teal-30)" stroke-width="2"/>
          <text x="416" y="132" class="svg-title" fill="var(--ink-90)" font-size="14">Mais comum do ANTERIOR?</text>
          <text x="416" y="158" class="svg-label" fill="var(--ink-70)">o andar dos quatro T</text>
          <text x="416" y="190" class="svg-title" fill="var(--teal-60)" font-size="15">→ timoma</text>
        </g>

        <g class="hs-shape" data-hs-label="Mais comum do MÉDIO → cisto broncogênico"
           data-hs-text="O médio é o andar dos cistos de duplicação. Entre eles, o broncogênico é o mais comum — derivado das vias aéreas. A banca às vezes escreve só 'cistos de duplicação'."
           data-hs-hint="Médio = cistos. Campeão: cisto broncogênico.">
          <rect x="48" y="228" width="320" height="112" rx="14" fill="var(--bg-elevated-2)" stroke="var(--teal-30)" stroke-width="2"/>
          <text x="72" y="264" class="svg-title" fill="var(--ink-90)" font-size="14">Mais comum do MÉDIO?</text>
          <text x="72" y="290" class="svg-label" fill="var(--ink-70)">o andar dos cistos</text>
          <text x="72" y="322" class="svg-title" fill="var(--teal-60)" font-size="15">→ cisto broncogênico</text>
        </g>

        <g class="hs-shape" data-hs-label="Mais comum do POSTERIOR → neurogênicos"
           data-hs-text="O posterior corre ao longo da coluna, onde ficam as cadeias nervosas. Por isso é o território dos tumores neurogênicos — e o mais comum deles é o schwannoma."
           data-hs-hint="Posterior = neural. Campeão: schwannoma.">
          <rect x="392" y="228" width="320" height="112" rx="14" fill="var(--bg-elevated-2)" stroke="var(--teal-30)" stroke-width="2"/>
          <text x="416" y="264" class="svg-title" fill="var(--ink-90)" font-size="14">Mais comum do POSTERIOR?</text>
          <text x="416" y="290" class="svg-label" fill="var(--ink-70)">o andar de trás, neural</text>
          <text x="416" y="322" class="svg-title" fill="var(--teal-60)" font-size="15">→ tumores neurogênicos</text>
        </g>
      </svg>
    </div>
  </div>
  <figcaption id="cap-med1"><strong>O cardápio da prova.</strong> Quatro formatos, quatro respostas que cabem na palma da mão: mais comum de <strong>todos</strong> e do <strong>anterior</strong> (timoma), do <strong>médio</strong> (cisto broncogênico), do <strong>posterior</strong> (neurogênicos). Reconhecer o formato já entrega o caminho. Clique em cada cartão.</figcaption>
</figure>
<div class="hotspot-detail" data-hs-detail-for="med1" aria-live="polite">
  <div class="hotspot-detail__label">Clique numa pergunta</div>
  <p class="hotspot-detail__text">Toque em cada cartão-pergunta para ver a resposta-âncora — e perceba que o tema inteiro é montar essas listas curtas e cravar o topo de cada uma.</p>
</div>
```

---

## P2 · `med2` — Os três andares (corte sagital anatômico — peça-mãe)

**Ponto de inserção:** após o tópico 2 ("Por que 'anterossuperior'"), antes do `op-summary`. É o SVG anatômico-mãe da aula; ancora a lógica estrutura→tumor.

**Conceito que reforça:** corte sagital do tórax (perfil, esterno à esquerda, coluna à direita). Três zonas: anterossuperior (frente+topo, sobe pela fúrcula), médio (centro, coração/traqueia/esôfago), posterior (atrás, cadeia neural). Cada zona é hotspot e lista suas estruturas-âncora. Mostra graficamente o anterior subindo e se fundindo com o superior.

```html
<figure class="figure-svg" role="group" aria-labelledby="cap-med2">
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="med2" aria-live="polite">
      <svg class="il-med2" data-eso="med2" viewBox="0 0 760 460" role="img" aria-labelledby="t-med2 d-med2">
        <title id="t-med2">Corte sagital do mediastino dividido em três compartimentos</title>
        <desc id="d-med2">Perfil torácico esquemático com o esterno à frente e a coluna atrás. Três zonas coloridas: anterossuperior à frente e no topo, que sobe pela fúrcula; médio ao centro com coração, traqueia e esôfago; posterior atrás, ao longo da coluna, com a cadeia neural. Cada compartimento é clicável.</desc>

        <defs>
          <clipPath id="med2-thorax">
            <path d="M150 70 Q150 56 168 56 L300 56 Q316 56 330 70 L520 96 Q560 100 600 130 L600 380 Q560 412 520 416 L210 416 Q150 410 150 380 Z"/>
          </clipPath>
        </defs>

        <text x="380" y="34" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="17">Estrutura manda no tumor — e o "superior" se funde ao anterior</text>

        <!-- contorno do tórax em perfil -->
        <path d="M150 70 Q150 56 168 56 L300 56 Q316 56 330 70 L520 96 Q560 100 600 130 L600 380 Q560 412 520 416 L210 416 Q150 410 150 380 Z"
              fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="2"/>

        <!-- referências anatômicas fixas -->
        <text x="150" y="240" text-anchor="middle" class="svg-label" fill="var(--ink-50)" transform="rotate(-90 150 240)">ESTERNO (frente)</text>
        <text x="612" y="240" text-anchor="middle" class="svg-label" fill="var(--ink-50)" transform="rotate(90 612 240)">COLUNA (atrás)</text>
        <text x="356" y="46" text-anchor="middle" class="svg-label" fill="var(--ink-50)">fúrcula ↑ topo do tórax</text>

        <g clip-path="url(#med2-thorax)">
          <!-- ANTEROSSUPERIOR: frente + sobe ao topo (forma de "L" deitado) -->
          <g class="hs-shape" data-hs-tone="good" data-hs-label="Anterossuperior — timo e tireoide"
             data-hs-text="O anterior não para na altura do coração: ele sobe e ocupa a parte mais alta do tórax. Por isso 'anterossuperior'. Estruturas-âncora: timo (alto e anterior → cirurgia transcervical) e tireoide, que mergulha pela fúrcula. Tumores: os quatro T (timoma, teratoma, tireoide/bócio, terrível linfoma)."
             data-hs-hint="Anterior sobe pela fúrcula → timo e tireoide moram aqui.">
            <path d="M150 56 L420 56 L420 120 Q330 130 250 150 L150 168 Z" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2"/>
            <path d="M150 168 L250 150 L250 300 L150 320 Z" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2"/>
            <!-- timo (alto e anterior) -->
            <path d="M210 96 Q236 86 246 116 Q236 150 214 150 Q190 140 192 112 Z" fill="var(--teal-20)" stroke="var(--teal-60)" stroke-width="1.6"/>
            <text x="222" y="124" text-anchor="middle" class="svg-label" fill="var(--teal-80)" font-size="11">timo</text>
            <!-- seta do bócio mergulhando -->
            <path d="M300 64 L300 110" stroke="var(--teal-60)" stroke-width="1.6" stroke-dasharray="3 4"/>
            <path d="M300 110 l-5 -8 h10 z" fill="var(--teal-60)"/>
            <text x="186" y="232" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="13">ANTEROSSUPERIOR</text>
            <text x="186" y="250" text-anchor="middle" class="svg-label" fill="var(--ink-70)">timo · tireoide · 4 T</text>
          </g>

          <!-- MÉDIO: centro, ao redor do coração/traqueia/esôfago -->
          <g class="hs-shape" data-hs-label="Médio — coração, traqueia, esôfago"
             data-hs-text="O andar central guarda coração, traqueia, brônquios e esôfago — estruturas que se formam de tubos embrionários. Falha de duplicação desses tubos vira cisto. Por isso o médio é o andar dos cistos de duplicação (broncogênico, pericárdico, entérico)."
             data-hs-hint="Estruturas tubulares → cistos de duplicação.">
            <path d="M250 150 Q360 130 420 120 L420 56 L470 60 L470 416 L250 416 Z" fill="var(--bg-elevated-2)" stroke="var(--teal-30)" stroke-width="2"/>
            <!-- coração -->
            <path d="M330 250 q24 -28 48 0 q24 28 0 56 q-24 26 -48 0 q-22 -28 0 -56 Z" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="1.4"/>
            <text x="354" y="288" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="10">coração</text>
            <!-- traqueia -->
            <rect x="398" y="150" width="16" height="120" rx="8" fill="var(--bg-elevated)" stroke="var(--ink-50)" stroke-width="1.3"/>
            <text x="406" y="142" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="9">traqueia</text>
            <!-- esôfago -->
            <rect x="432" y="150" width="13" height="220" rx="6" fill="var(--bg-elevated)" stroke="var(--ink-50)" stroke-width="1.2"/>
            <text x="438" y="142" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="9">esôfago</text>
            <text x="350" y="372" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="13">MÉDIO</text>
            <text x="350" y="390" text-anchor="middle" class="svg-label" fill="var(--ink-70)">cistos de duplicação</text>
          </g>

          <!-- POSTERIOR: atrás, ao longo da coluna -->
          <g class="hs-shape" data-hs-tone="trap" data-hs-label="Posterior — cadeia neural"
             data-hs-text="Atrás, ao longo da coluna, correm as cadeias e gânglios nervosos. Por isso o posterior é o andar dos tumores neurogênicos. O mais comum é o schwannoma (acima do neurofibroma) — detalhe-pegadinha que a banca cobra."
             data-hs-hint="Coluna atrás → neural → schwannoma > neurofibroma.">
            <path d="M470 60 L600 96 L600 416 L470 416 Z" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2"/>
            <!-- coluna (vértebras) -->
            <g fill="var(--bg-elevated)" stroke="var(--ink-50)" stroke-width="1.2">
              <rect x="540" y="120" width="34" height="30" rx="6"/>
              <rect x="540" y="158" width="34" height="30" rx="6"/>
              <rect x="540" y="196" width="34" height="30" rx="6"/>
              <rect x="540" y="234" width="34" height="30" rx="6"/>
              <rect x="540" y="272" width="34" height="30" rx="6"/>
            </g>
            <!-- gânglio neurogênico paravertebral -->
            <circle cx="512" cy="250" r="15" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="1.6"/>
            <path d="M512 235 l0 30 M497 250 l30 0" stroke="var(--warn-amber)" stroke-width="1.2"/>
            <text x="520" y="356" text-anchor="middle" class="svg-title" fill="var(--warn-amber)" font-size="13">POSTERIOR</text>
            <text x="520" y="374" text-anchor="middle" class="svg-label" fill="var(--ink-70)">neurogênicos</text>
          </g>
        </g>
      </svg>
    </div>
  </div>
  <figcaption id="cap-med2"><strong>Três andares, deduzidos das estruturas.</strong> O <strong>anterossuperior</strong> sobe pela fúrcula (por isso a tireoide mergulhante cai aqui), o <strong>médio</strong> guarda os tubos que viram cistos, e o <strong>posterior</strong> corre na coluna, onde nasce o neurogênico. Saber a estrutura dispensa decorar a lista. Clique em cada compartimento.</figcaption>
</figure>
<div class="hotspot-detail" data-hs-detail-for="med2" aria-live="polite">
  <div class="hotspot-detail__label">Clique num compartimento</div>
  <p class="hotspot-detail__text">Toque em cada andar para ver suas estruturas-âncora e por que os tumores típicos se deduzem delas — inclusive por que o bócio mergulhante aterrissa no anterior.</p>
</div>
```

---

## P3 · `med3` — Os quatro T (pílulas anatômicas + o anti-T riscado)

**Ponto de inserção:** após o tópico 1 ("Quatro T, deduzidos das estruturas da frente"), antes do tópico 2 sobre o quinto T — o SVG já apresenta o anti-T, que o tópico 2 explica.

**Conceito que reforça:** quatro pílulas (Timoma, Teratoma, Tireoide/bócio, Terrível linfoma) sobre o anterior; cada uma com sua estrutura de origem e nota. A quinta pílula (aneurisma) vem **riscada em vermelho** como o anti-T — a aorta fica atrás.

```html
<figure class="figure-svg" role="group" aria-labelledby="cap-med3">
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="med3" aria-live="polite">
      <svg class="il-med3" data-eso="med3" viewBox="0 0 760 400" role="img" aria-labelledby="t-med3 d-med3">
        <title id="t-med3">Os quatro T do mediastino anterior e o falso quinto T</title>
        <desc id="d-med3">Quatro cápsulas clicáveis com os quatro T do mediastino anterior — timoma, teratoma, tireoide ou bócio mergulhante e terrível linfoma — cada uma ligada à sua estrutura de origem. Uma quinta cápsula, aneurisma de aorta, aparece riscada em vermelho como armadilha, porque a aorta fica no compartimento posterior.</desc>

        <text x="380" y="38" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="17">Toda estrutura de peso da frente tem T no nome</text>
        <text x="380" y="60" text-anchor="middle" class="svg-label" fill="var(--ink-70)">clique em cada T · o 5º (aneurisma) é cilada</text>

        <g class="hs-shape" data-hs-tone="good" data-hs-label="T1 · Timoma — o timo, alto e anterior"
           data-hs-text="O timo mora bem no alto e na frente. Tão alto e anterior que a cirurgia é transcervical: incisão na fúrcula, dissecção dos planos, afastador autoestático por dentro do esterno, levanta e opera por cima. A localização define a via de acesso. Timoma é o mais comum de todos os tumores do mediastino."
           data-hs-hint="Alto + anterior → via transcervical pela fúrcula.">
          <rect x="56" y="92" width="150" height="120" rx="22" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.4"/>
          <text x="131" y="128" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="26">T</text>
          <text x="131" y="156" text-anchor="middle" class="svg-title" fill="var(--ink-90)" font-size="14">Timoma</text>
          <text x="131" y="180" text-anchor="middle" class="svg-label" fill="var(--ink-70)">timo · transcervical</text>
          <text x="131" y="200" text-anchor="middle" class="svg-label" fill="var(--ok-green)" font-size="11">1º de todos</text>
        </g>

        <g class="hs-shape" data-hs-label="T2 · Teratoma — o menos territorial"
           data-hs-text="Pode aparecer no anterior, mas também no médio e até no posterior — é o T menos territorial. Entra na lista pelo mnemônico, mas não é exclusivo da frente."
           data-hs-hint="Teratoma circula entre os três andares.">
          <rect x="222" y="92" width="150" height="120" rx="22" fill="var(--bg-elevated-2)" stroke="var(--teal-30)" stroke-width="2"/>
          <text x="297" y="128" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="26">T</text>
          <text x="297" y="156" text-anchor="middle" class="svg-title" fill="var(--ink-90)" font-size="14">Teratoma</text>
          <text x="297" y="180" text-anchor="middle" class="svg-label" fill="var(--ink-70)">células germinativas</text>
          <text x="297" y="200" text-anchor="middle" class="svg-label" fill="var(--ink-50)" font-size="11">menos territorial</text>
        </g>

        <g class="hs-shape" data-hs-tone="good" data-hs-label="T3 · Tireoide — bócio mergulhante"
           data-hs-text="Tireoide muito grande vira bócio; o bócio pode mergulhar pela fúrcula e descer ao mediastino superior, que se continua com o anterior. Daí o T de tireoide cair na frente."
           data-hs-hint="Bócio mergulha pela fúrcula → aterrissa no anterior.">
          <rect x="388" y="92" width="150" height="120" rx="22" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.4"/>
          <text x="463" y="128" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="26">T</text>
          <text x="463" y="156" text-anchor="middle" class="svg-title" fill="var(--ink-90)" font-size="14">Tireoide</text>
          <text x="463" y="180" text-anchor="middle" class="svg-label" fill="var(--ink-70)">bócio mergulhante</text>
          <text x="463" y="200" text-anchor="middle" class="svg-label" fill="var(--teal-60)" font-size="11">desce pela fúrcula</text>
        </g>

        <g class="hs-shape" data-hs-tone="trap" data-hs-label="T4 · Terrível linfoma — onipresente"
           data-hs-text="O 'terrível' é só para encaixar no mnemônico. O linfoma aparece em qualquer compartimento — anterior, médio e posterior — e é o segundo mais prevalente de todos, atrás só do timoma. Não respeita andar."
           data-hs-hint="Linfoma em qualquer andar · é o 2º de todos.">
          <rect x="554" y="92" width="150" height="120" rx="22" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2.4"/>
          <text x="629" y="128" text-anchor="middle" class="svg-title" fill="var(--warn-amber)" font-size="26">T</text>
          <text x="629" y="156" text-anchor="middle" class="svg-title" fill="var(--ink-90)" font-size="14">Terrível linfoma</text>
          <text x="629" y="180" text-anchor="middle" class="svg-label" fill="var(--ink-70)">qualquer compartimento</text>
          <text x="629" y="200" text-anchor="middle" class="svg-label" fill="var(--warn-amber)" font-size="11">2º de todos</text>
        </g>

        <!-- o anti-T: aneurisma riscado -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="O 5º T é cilada — aneurisma de aorta"
           data-hs-text="Há quem force um quinto T, o tenebroso aneurisma. Evite. A aorta e o arco aórtico ficam no posterior; guardar aneurisma como T do anterior confunde mais do que ajuda. Fique com os quatro T."
           data-hs-hint="Aorta fica no POSTERIOR — aneurisma não é T do anterior.">
          <rect x="222" y="252" width="316" height="96" rx="22" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="2.2" stroke-dasharray="7 5"/>
          <text x="380" y="290" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="16" text-decoration="line-through">5º T — aneurisma de aorta</text>
          <text x="380" y="316" text-anchor="middle" class="svg-label" fill="var(--err-red)">a aorta fica no posterior · não conte como T do anterior</text>
          <line x1="246" y1="270" x2="514" y2="330" stroke="var(--err-red)" stroke-width="2" opacity="0.7"/>
          <line x1="514" y1="270" x2="246" y2="330" stroke="var(--err-red)" stroke-width="2" opacity="0.7"/>
        </g>
      </svg>
    </div>
  </div>
  <figcaption id="cap-med3"><strong>Quatro T da frente.</strong> <strong>T</strong>imoma (1º de todos), <strong>T</strong>eratoma, <strong>T</strong>ireoide (bócio mergulhante) e <strong>T</strong>errível linfoma (2º de todos). O quinto T, em vermelho riscado, é a armadilha: o <strong>aneurisma de aorta</strong> mora no posterior. Clique em cada cápsula.</figcaption>
</figure>
<div class="hotspot-detail" data-hs-detail-for="med3" aria-live="polite">
  <div class="hotspot-detail__label">Clique num T</div>
  <p class="hotspot-detail__text">Toque em cada T para ver sua estrutura de origem — e por que o quinto (aneurisma) deve ser descartado: a aorta está no compartimento posterior.</p>
</div>
```

---

## P4 · `med4` — Três tubos, três cistos (dedução estrutura → cisto)

**Ponto de inserção:** após o tópico 2 ("Os três cistos, cada um com seu endereço"), antes do `op-summary`.

**Conceito que reforça:** as três estruturas tubulares do médio (traqueia/brônquio, pericárdio/coração, esôfago) desenhadas, cada uma com seu cisto associado. Hotspot em cada estrutura nomeia o cisto e destaca o broncogênico como o mais comum.

```html
<figure class="figure-svg" role="group" aria-labelledby="cap-med4">
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="med4" aria-live="polite">
      <svg class="il-med4" data-eso="med4" viewBox="0 0 760 380" role="img" aria-labelledby="t-med4 d-med4">
        <title id="t-med4">As três estruturas tubulares do mediastino médio e seus cistos de duplicação</title>
        <desc id="d-med4">Traqueia com brônquios, coração com pericárdio e esôfago desenhados lado a lado, cada um com o cisto de duplicação que origina: broncogênico, pericárdico e entérico. O cisto broncogênico é destacado como o mais comum do compartimento médio. Cada estrutura é clicável.</desc>

        <text x="380" y="36" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="17">Falha de duplicação de um tubo → um cisto</text>
        <text x="380" y="58" text-anchor="middle" class="svg-label" fill="var(--ink-70)">clique em cada estrutura · o broncogênico é o mais comum</text>

        <!-- BRONCOGÊNICO: traqueia + brônquios -->
        <g class="hs-shape" data-hs-tone="good" data-hs-label="Vias aéreas → cisto broncogênico (o mais comum)"
           data-hs-text="Da traqueia e dos brônquios nasce o cisto broncogênico — o mais comum do mediastino médio e a resposta de prova quando se pede o mais frequente do compartimento. Lesão cística homogênea, peritraqueal."
           data-hs-hint="Vias aéreas → broncogênico · campeão do médio.">
          <rect x="40" y="92" width="210" height="252" rx="14" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.2"/>
          <rect x="138" y="112" width="20" height="90" rx="10" fill="var(--bg-elevated)" stroke="var(--ink-50)" stroke-width="1.6"/>
          <path d="M148 202 L112 246 M148 202 L184 246" stroke="var(--ink-50)" stroke-width="10" stroke-linecap="round" fill="none"/>
          <circle cx="98" cy="262" r="22" fill="var(--teal-20)" stroke="var(--teal-60)" stroke-width="2"/>
          <text x="98" y="266" text-anchor="middle" class="svg-label" fill="var(--teal-80)" font-size="10">cisto</text>
          <text x="145" y="306" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="14">broncogênico</text>
          <text x="145" y="326" text-anchor="middle" class="svg-label" fill="var(--ok-green)" font-size="12">mais comum do médio</text>
        </g>

        <!-- PERICÁRDICO: coração -->
        <g class="hs-shape" data-hs-label="Pericárdio → cisto pericárdico"
           data-hs-text="Ligado ao saco pericárdico, ao redor do coração. Existe no médio, mas é menos comum que o broncogênico."
           data-hs-hint="Saco pericárdico → cisto pericárdico.">
          <rect x="270" y="92" width="210" height="252" rx="14" fill="var(--bg-elevated-2)" stroke="var(--teal-30)" stroke-width="2"/>
          <path d="M375 150 q30 -34 60 0 q30 34 0 70 q-30 32 -60 0 q-28 -36 0 -70 Z" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="1.8"/>
          <path d="M340 150 q-22 60 35 110" fill="none" stroke="var(--ink-50)" stroke-width="1.6" stroke-dasharray="4 4"/>
          <circle cx="330" cy="252" r="20" fill="var(--bg-elevated)" stroke="var(--ink-50)" stroke-width="2"/>
          <text x="330" y="256" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="10">cisto</text>
          <text x="375" y="306" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="14">pericárdico</text>
          <text x="375" y="326" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="12">saco pericárdico</text>
        </g>

        <!-- ENTÉRICO: esôfago -->
        <g class="hs-shape" data-hs-label="Esôfago → cisto entérico"
           data-hs-text="Do esôfago e do trato digestivo — a porção mais anterior do esôfago passa pelo médio. Origina o cisto entérico (de duplicação digestiva)."
           data-hs-hint="Esôfago / trato digestivo → cisto entérico.">
          <rect x="500" y="92" width="220" height="252" rx="14" fill="var(--bg-elevated-2)" stroke="var(--teal-30)" stroke-width="2"/>
          <rect x="600" y="112" width="20" height="150" rx="10" fill="var(--bg-elevated)" stroke="var(--ink-50)" stroke-width="1.8"/>
          <circle cx="568" cy="246" r="20" fill="var(--bg-elevated)" stroke="var(--ink-50)" stroke-width="2"/>
          <text x="568" y="250" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="10">cisto</text>
          <text x="610" y="306" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="14">entérico</text>
          <text x="610" y="326" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="12">esôfago / digestivo</text>
        </g>
      </svg>
    </div>
  </div>
  <figcaption id="cap-med4"><strong>O andar dos cistos de duplicação.</strong> Cada tubo embrionário do médio origina o seu cisto: vias aéreas → <strong>broncogênico</strong> (o mais comum), pericárdio → <strong>pericárdico</strong>, esôfago → <strong>entérico</strong>. Pense na estrutura e o cisto se deduz sozinho. Clique em cada estrutura.</figcaption>
</figure>
<div class="hotspot-detail" data-hs-detail-for="med4" aria-live="polite">
  <div class="hotspot-detail__label">Clique numa estrutura</div>
  <p class="hotspot-detail__text">Toque na traqueia, no pericárdio ou no esôfago para ver o cisto que cada um origina — e por que o broncogênico lidera o compartimento médio.</p>
</div>
```

---

## P5 · `med5` — A cadeia neural do posterior (schwannoma > neurofibroma)

**Ponto de inserção:** após o tópico 2 ("Schwannoma na frente do neurofibroma"), antes dos asides `board-wants`/`op-summary`.

**Conceito que reforça:** corte do posterior com a coluna e a cadeia simpática paravertebral; dois nódulos (schwannoma e neurofibroma). Schwannoma destacado como mais comum / já caiu; neurofibroma como segundo. O linfoma onipresente aparece como nota lateral.

```html
<figure class="figure-svg" role="group" aria-labelledby="cap-med5">
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="med5" aria-live="polite">
      <svg class="il-med5" data-eso="med5" viewBox="0 0 760 400" role="img" aria-labelledby="t-med5 d-med5">
        <title id="t-med5">Cadeia neural paravertebral do mediastino posterior com schwannoma e neurofibroma</title>
        <desc id="d-med5">Coluna vertebral com a cadeia simpática paravertebral correndo ao lado. Dois nódulos neurogênicos: schwannoma, destacado como o mais comum e o que já caiu em prova, e neurofibroma como o segundo. Uma nota lateral lembra que o linfoma também comparece no posterior. Cada nódulo é clicável.</desc>

        <text x="380" y="36" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="17">Posterior = nervo → tumor neurogênico</text>
        <text x="380" y="58" text-anchor="middle" class="svg-label" fill="var(--ink-70)">clique em cada nódulo · o ranking interno cai em prova</text>

        <!-- coluna -->
        <g fill="var(--bg-elevated-2)" stroke="var(--ink-50)" stroke-width="1.6">
          <rect x="110" y="92" width="56" height="40" rx="9"/>
          <rect x="110" y="138" width="56" height="40" rx="9"/>
          <rect x="110" y="184" width="56" height="40" rx="9"/>
          <rect x="110" y="230" width="56" height="40" rx="9"/>
          <rect x="110" y="276" width="56" height="40" rx="9"/>
          <rect x="110" y="322" width="56" height="40" rx="9"/>
        </g>
        <text x="138" y="384" text-anchor="middle" class="svg-label" fill="var(--ink-50)">coluna vertebral</text>

        <!-- cadeia simpática paravertebral -->
        <path d="M200 100 Q214 230 200 360" fill="none" stroke="var(--teal-40)" stroke-width="3"/>
        <g fill="var(--teal-50)">
          <circle cx="201" cy="132" r="5"/><circle cx="208" cy="186" r="5"/>
          <circle cx="206" cy="240" r="5"/><circle cx="200" cy="296" r="5"/>
        </g>
        <text x="232" y="100" class="svg-label" fill="var(--teal-60)" transform="rotate(0)">cadeia simpática</text>

        <!-- SCHWANNOMA (mais comum) -->
        <g class="hs-shape" data-hs-tone="good" data-hs-label="Schwannoma — o mais comum (já caiu)"
           data-hs-text="Origina-se das células de Schwann da bainha nervosa. É o tumor neurogênico mais comum do mediastino posterior e o que já apareceu em prova. É o detalhe fino que separa quem 'sabe que é neural' de quem crava a resposta."
           data-hs-hint="Schwannoma lidera os neurogênicos do posterior.">
          <ellipse cx="340" cy="190" rx="58" ry="46" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.6"/>
          <path d="M208 186 Q270 188 282 190" fill="none" stroke="var(--teal-50)" stroke-width="2.4"/>
          <text x="340" y="186" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="15">Schwannoma</text>
          <text x="340" y="208" text-anchor="middle" class="svg-label" fill="var(--ok-green)" font-size="12">mais comum · já caiu</text>
        </g>

        <!-- NEUROFIBROMA (segundo) -->
        <g class="hs-shape" data-hs-label="Neurofibroma — o segundo"
           data-hs-text="Também neurogênico, mas vem atrás do schwannoma em frequência. Marcar neurofibroma como o mais comum inverte exatamente o detalhe que a banca cobra."
           data-hs-hint="Neurofibroma é o 2º — não o inverso.">
          <ellipse cx="340" cy="300" rx="52" ry="40" fill="var(--bg-elevated-2)" stroke="var(--teal-30)" stroke-width="2.2"/>
          <path d="M206 240 Q270 280 288 296" fill="none" stroke="var(--teal-30)" stroke-width="2"/>
          <text x="340" y="296" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="14">Neurofibroma</text>
          <text x="340" y="316" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="12">o segundo</text>
        </g>

        <!-- linfoma onipresente (nota lateral, hotspot) -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Linfoma — o coringa, também aqui"
           data-hs-text="Pela terceira vez na aula: o linfoma pode comparecer no posterior também. Ele não respeita compartimento. Lembre que é o segundo mais comum de todos do mediastino — mas não é o típico do posterior, que é o neurogênico."
           data-hs-hint="Linfoma aparece em qualquer andar · não é o típico do posterior.">
          <rect x="470" y="150" width="248" height="100" rx="14" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2" stroke-dasharray="6 5"/>
          <text x="594" y="190" text-anchor="middle" class="svg-title" fill="var(--warn-amber)" font-size="14">Linfoma · onipresente</text>
          <text x="594" y="216" text-anchor="middle" class="svg-label" fill="var(--ink-70)">comparece aqui também — mas não é o típico</text>
          <text x="594" y="236" text-anchor="middle" class="svg-label" fill="var(--ink-50)" font-size="11">o típico do posterior é o neurogênico</text>
        </g>
      </svg>
    </div>
  </div>
  <figcaption id="cap-med5"><strong>O andar de trás é neural.</strong> Da cadeia simpática paravertebral nascem os tumores neurogênicos — e o mais comum é o <strong>schwannoma</strong>, acima do <strong>neurofibroma</strong>. O <strong>linfoma</strong> aparece aqui também, mas não é o típico do posterior. Clique em cada nódulo.</figcaption>
</figure>
<div class="hotspot-detail" data-hs-detail-for="med5" aria-live="polite">
  <div class="hotspot-detail__label">Clique num nódulo</div>
  <p class="hotspot-detail__text">Toque no schwannoma, no neurofibroma ou na nota do linfoma para fixar o ranking interno do posterior — schwannoma na frente.</p>
</div>
```

---

## P6 · `med6` — Pódio do mediastino (síntese global + por compartimento)

**Ponto de inserção:** após o tópico 2 ("O ranking por compartimento, em ordem"), antes do `op-summary`. É o mapa-síntese da aula.

**Conceito que reforça:** pódio global (timoma 1º, linfoma 2º) + três cartões-compartimento, cada um com seu campeão. Cada lugar do pódio e cada cartão é hotspot com micro-lembrete. Esta é a 1ª peça interativa; a 2ª peça (mapa "cola de prova") da P6 fica para o Executor como `figure.med`/`figure-map` estática — está descrita no fim deste bloco.

```html
<figure class="figure-svg" role="group" aria-labelledby="cap-med6">
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="med6" aria-live="polite">
      <svg class="il-med6" data-eso="med6" viewBox="0 0 760 420" role="img" aria-labelledby="t-med6 d-med6">
        <title id="t-med6">Pódio dos tumores do mediastino e campeão de cada compartimento</title>
        <desc id="d-med6">Pódio global com timoma em primeiro lugar e linfoma em segundo. Abaixo, três cartões-compartimento com seus campeões: anterior timoma, médio cisto broncogênico, posterior tumores neurogênicos. Cada lugar do pódio e cada cartão é clicável e revela um micro-lembrete.</desc>

        <text x="380" y="36" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="17">Cinco fatos cravam o tema inteiro</text>

        <!-- PÓDIO GLOBAL -->
        <!-- 1º timoma -->
        <g class="hs-shape" data-hs-tone="good" data-hs-label="1º de todos — timoma"
           data-hs-text="O tumor mais comum de TODO o mediastino. A pergunta que mais aparece tem essa resposta única. Mora no anterossuperior e ganha aprofundamento próprio (miastenia, Masaoka)."
           data-hs-hint="Timoma = ouro absoluto do mediastino.">
          <rect x="300" y="110" width="160" height="150" rx="10" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.6"/>
          <text x="380" y="146" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="30">1º</text>
          <text x="380" y="180" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="17">Timoma</text>
          <text x="380" y="204" text-anchor="middle" class="svg-label" fill="var(--ink-70)">mais comum</text>
          <text x="380" y="222" text-anchor="middle" class="svg-label" fill="var(--ink-70)">de todos</text>
        </g>
        <!-- 2º linfoma -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="2º de todos — linfoma"
           data-hs-text="O segundo lugar do pódio global, atrás só do timoma. É o coringa que apareceu em todos os compartimentos ao longo da aula — mas onipresente não é o mesmo que campeão."
           data-hs-hint="Linfoma é o vice · onipresente ≠ mais comum.">
          <rect x="120" y="158" width="160" height="102" rx="10" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2.4"/>
          <text x="200" y="196" text-anchor="middle" class="svg-title" fill="var(--warn-amber)" font-size="26">2º</text>
          <text x="200" y="226" text-anchor="middle" class="svg-title" fill="var(--ink-90)" font-size="16">Linfoma</text>
          <text x="200" y="248" text-anchor="middle" class="svg-label" fill="var(--ink-70)">o coringa onipresente</text>
        </g>

        <line x1="80" y1="262" x2="680" y2="262" stroke="var(--border-mid)" stroke-width="1.4"/>
        <text x="380" y="288" text-anchor="middle" class="svg-label" fill="var(--ink-70)">…e o campeão de cada compartimento</text>

        <!-- CARTÕES POR COMPARTIMENTO -->
        <g class="hs-shape" data-hs-label="Anterior → timoma"
           data-hs-text="O compartimento dos quatro T. O mais comum de todos também mora aqui: timoma."
           data-hs-hint="Anterior = timoma (e os 4 T).">
          <rect x="56" y="304" width="208" height="92" rx="12" fill="var(--bg-elevated-2)" stroke="var(--teal-30)" stroke-width="2"/>
          <text x="160" y="334" text-anchor="middle" class="svg-label" fill="var(--ink-70)">ANTERIOR</text>
          <text x="160" y="362" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="16">timoma</text>
          <text x="160" y="382" text-anchor="middle" class="svg-label" fill="var(--ink-50)" font-size="11">os quatro T</text>
        </g>
        <g class="hs-shape" data-hs-label="Médio → cisto broncogênico"
           data-hs-text="O andar dos cistos de duplicação. Pedindo o mais comum, a resposta é o broncogênico."
           data-hs-hint="Médio = cisto broncogênico.">
          <rect x="276" y="304" width="208" height="92" rx="12" fill="var(--bg-elevated-2)" stroke="var(--teal-30)" stroke-width="2"/>
          <text x="380" y="334" text-anchor="middle" class="svg-label" fill="var(--ink-70)">MÉDIO</text>
          <text x="380" y="362" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="16">cisto broncogênico</text>
          <text x="380" y="382" text-anchor="middle" class="svg-label" fill="var(--ink-50)" font-size="11">cistos de duplicação</text>
        </g>
        <g class="hs-shape" data-hs-label="Posterior → neurogênicos"
           data-hs-text="O andar neural. Tumores neurogênicos, com o schwannoma à frente."
           data-hs-hint="Posterior = neurogênicos (schwannoma).">
          <rect x="496" y="304" width="208" height="92" rx="12" fill="var(--bg-elevated-2)" stroke="var(--teal-30)" stroke-width="2"/>
          <text x="600" y="334" text-anchor="middle" class="svg-label" fill="var(--ink-70)">POSTERIOR</text>
          <text x="600" y="362" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="16">neurogênicos</text>
          <text x="600" y="382" text-anchor="middle" class="svg-label" fill="var(--ink-50)" font-size="11">schwannoma à frente</text>
        </g>
      </svg>
    </div>
  </div>
  <figcaption id="cap-med6"><strong>O ranking de ouro.</strong> No pódio global, <strong>timoma</strong> em 1º e <strong>linfoma</strong> em 2º. Por compartimento: anterior <strong>timoma</strong>, médio <strong>broncogênico</strong>, posterior <strong>neurogênicos</strong>. Esses cinco fatos são o tema inteiro. Clique em cada lugar e cada cartão.</figcaption>
</figure>
<div class="hotspot-detail" data-hs-detail-for="med6" aria-live="polite">
  <div class="hotspot-detail__label">Clique no pódio ou num cartão</div>
  <p class="hotspot-detail__text">Toque em cada lugar do pódio e em cada compartimento para confirmar os cinco números que a prova cobra — e não confundir "onipresente" (linfoma) com "mais comum" (timoma).</p>
</div>
```

**2ª peça da P6 (mapa estático "cola de prova") — para o Executor montar como `figure.med` com `data-piso-img-exempt="ranking-estatistico-nao-fotografavel"`:** um quadro-resumo de 5 linhas, distinto do pódio. Conteúdo textual já definido: `1º de todos → timoma` · `2º de todos → linfoma` · `anterior → timoma` · `médio → cisto broncogênico` · `posterior → neurogênico (schwannoma)`. É tabela/lista estilizada, não SVG hotspot — fica no escopo do Executor (não dupliquei aqui para não competir com o pódio interativo).

---

## P7 · `med7` — O elo timoma ↔ miastenia (junção neuromuscular)

**Ponto de inserção:** após o tópico 2 ("Retirar o timo melhora a miastenia"), antes dos asides.

**Conceito que reforça:** de um lado a massa tímica; do outro a junção neuromuscular com anticorpos anti-receptor de acetilcolina bloqueando os receptores; ligados por uma seta de associação autoimune que carrega a mensagem "timectomia melhora a miastenia". Três hotspots: massa, junção, seta.

```html
<figure class="figure-svg" role="group" aria-labelledby="cap-med7">
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="med7" aria-live="polite">
      <svg class="il-med7" data-eso="med7" viewBox="0 0 760 400" role="img" aria-labelledby="t-med7 d-med7">
        <title id="t-med7">Elo autoimune entre o timoma e a miastenia gravis na junção neuromuscular</title>
        <desc id="d-med7">À esquerda, massa tímica no mediastino anterossuperior. À direita, junção neuromuscular com anticorpos anti-receptor de acetilcolina bloqueando os receptores pós-sinápticos. Uma seta de associação autoimune liga os dois e indica que a timectomia melhora a miastenia. Cada elemento é clicável.</desc>

        <text x="380" y="36" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="17">A única clínica do timoma fala uma língua: miastenia gravis</text>

        <!-- MASSA TÍMICA -->
        <g class="hs-shape" data-hs-tone="good" data-hs-label="Massa tímica — quase sempre silenciosa"
           data-hs-text="Na imensa maioria, o timoma é silencioso — achado de imagem, sem queixa torácica. A única manifestação clínica que costuma dar é a miastenia gravis, doença autoimune fortemente associada a ele."
           data-hs-hint="Timoma = achado de imagem · clínica = miastenia.">
          <ellipse cx="150" cy="208" rx="78" ry="64" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2.6"/>
          <path d="M118 168 Q150 156 182 172 Q176 210 150 248 Q120 228 118 168 Z" fill="var(--teal-20)" stroke="var(--teal-60)" stroke-width="1.6"/>
          <text x="150" y="296" text-anchor="middle" class="svg-title" fill="var(--teal-60)" font-size="15">Timoma</text>
          <text x="150" y="316" text-anchor="middle" class="svg-label" fill="var(--ink-70)">anterossuperior · silencioso</text>
        </g>

        <!-- SETA DE ASSOCIAÇÃO / TIMECTOMIA -->
        <g class="hs-shape" data-hs-tone="good" data-hs-label="Timectomia melhora a miastenia"
           data-hs-text="A associação é tão forte que, no paciente com timoma e miastenia, operar o timo (timectomia) tende a melhorar a miastenia. Esse é o elo que a prova adora: timoma ↔ miastenia, e a timectomia beneficiando os dois lados."
           data-hs-hint="Tirar o timo → a miastenia melhora.">
          <line x1="246" y1="208" x2="486" y2="208" stroke="var(--ok-green)" stroke-width="3"/>
          <path d="M486 208 l-16 -9 v18 z" fill="var(--ok-green)"/>
          <rect x="280" y="146" width="172" height="44" rx="10" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="1.6"/>
          <text x="366" y="166" text-anchor="middle" class="svg-label" fill="var(--ok-green)" font-size="12">associação autoimune</text>
          <text x="366" y="182" text-anchor="middle" class="svg-label" fill="var(--ok-green)" font-size="12">timectomia → melhora</text>
        </g>

        <!-- JUNÇÃO NEUROMUSCULAR -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Junção neuromuscular — receptor bloqueado"
           data-hs-text="Anticorpos anti-receptor de acetilcolina bloqueiam os receptores pós-sinápticos: o sinal não passa direito e o músculo fraqueja. Clínica típica: fraqueza flutuante, pior ao fim do dia — pálpebra caindo (ptose), dificuldade para mastigar."
           data-hs-hint="Anti-AChR bloqueia o receptor → fraqueza flutuante.">
          <!-- terminal nervoso -->
          <path d="M520 150 Q560 170 560 200" fill="none" stroke="var(--ink-50)" stroke-width="6" stroke-linecap="round"/>
          <text x="540" y="142" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="10">terminal nervoso</text>
          <!-- vesículas ACh -->
          <circle cx="566" cy="206" r="4" fill="var(--teal-60)"/><circle cx="578" cy="214" r="4" fill="var(--teal-60)"/>
          <circle cx="572" cy="226" r="4" fill="var(--teal-60)"/>
          <!-- fenda + membrana muscular -->
          <rect x="600" y="180" width="120" height="80" rx="10" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.4"/>
          <!-- receptores -->
          <rect x="612" y="244" width="14" height="16" rx="3" fill="var(--bg-elevated)" stroke="var(--ink-50)" stroke-width="1.2"/>
          <rect x="640" y="244" width="14" height="16" rx="3" fill="var(--bg-elevated)" stroke="var(--ink-50)" stroke-width="1.2"/>
          <rect x="668" y="244" width="14" height="16" rx="3" fill="var(--bg-elevated)" stroke="var(--ink-50)" stroke-width="1.2"/>
          <!-- anticorpos bloqueando (Y) -->
          <g stroke="var(--warn-amber)" stroke-width="2" fill="none">
            <path d="M619 244 l0 -10 M619 234 l-6 -7 M619 234 l6 -7"/>
            <path d="M647 244 l0 -10 M647 234 l-6 -7 M647 234 l6 -7"/>
            <path d="M675 244 l0 -10 M675 234 l-6 -7 M675 234 l6 -7"/>
          </g>
          <text x="660" y="208" text-anchor="middle" class="svg-label" fill="var(--warn-amber)" font-size="10">anti-AChR</text>
          <text x="660" y="296" text-anchor="middle" class="svg-title" fill="var(--warn-amber)" font-size="13">miastenia gravis</text>
          <text x="660" y="316" text-anchor="middle" class="svg-label" fill="var(--ink-70)">fraqueza flutuante · ptose</text>
        </g>
      </svg>
    </div>
  </div>
  <figcaption id="cap-med7"><strong>Timoma ↔ miastenia.</strong> O timoma é silencioso; quando dá clínica, é a <strong>miastenia gravis</strong> — anticorpos anti-receptor de acetilcolina bloqueiam a junção e geram fraqueza flutuante (ptose, mastigação). A <strong>timectomia</strong> tende a melhorar a miastenia. Clique em cada elemento do elo.</figcaption>
</figure>
<div class="hotspot-detail" data-hs-detail-for="med7" aria-live="polite">
  <div class="hotspot-detail__label">Clique num elemento do elo</div>
  <p class="hotspot-detail__text">Toque na massa tímica, na junção neuromuscular ou na seta da timectomia para entender por que retirar o timo beneficia também a miastenia.</p>
</div>
```

---

## P8 · `med8` — A régua de Masaoka (metade boa × metade ruim)

**Ponto de inserção:** após o tópico 3 ("Os graus de baixo (I e II), em detalhe"), antes dos asides `mnemonic`/`board-wants`.

**Conceito que reforça:** barra horizontal de 4 segmentos (I · II · III · IV); metade esquerda (I-II) verde, direita (III-IV) coral/vermelha, divisor central rotulado "ressecável → bom × braba → ruim". Cada grau é hotspot. A pergunta-mãe ("o que ele invade dá para ressecar?") aparece como eixo. Os detalhes finos de III×IV são aprofundados na P9 — aqui é o mapa inteiro.

```html
<figure class="figure-svg" role="group" aria-labelledby="cap-med8">
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="med8" aria-live="polite">
      <svg class="il-med8" data-eso="med8" viewBox="0 0 760 380" role="img" aria-labelledby="t-med8 d-med8">
        <title id="t-med8">Régua de estadiamento de Masaoka dividida em metade boa e metade ruim</title>
        <desc id="d-med8">Barra de quatro graus: I e II à esquerda em verde, bom prognóstico, só timectomia; III e IV à direita em coral e vermelho, mau prognóstico, cirurgia mais adjuvância. Um divisor central separa o ressecável do não ressecável. Cada grau é clicável.</desc>

        <text x="380" y="36" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="17">Masaoka é metade e metade: ressecável → bom · braba → ruim</text>
        <text x="380" y="58" text-anchor="middle" class="svg-label" fill="var(--ink-70)">a pergunta-mãe: o que ele invade dá para ressecar? · clique em cada grau</text>

        <!-- faixas de metade -->
        <rect x="48" y="120" width="328" height="20" rx="10" fill="var(--ok-green-dim)"/>
        <text x="212" y="110" text-anchor="middle" class="svg-label" fill="var(--ok-green)">METADE BOA · só timectomia</text>
        <rect x="384" y="120" width="328" height="20" rx="10" fill="var(--err-red-dim)"/>
        <text x="548" y="110" text-anchor="middle" class="svg-label" fill="var(--err-red)">METADE RUIM · + adjuvância</text>

        <!-- divisor central -->
        <line x1="380" y1="96" x2="380" y2="332" stroke="var(--border-strong)" stroke-width="2" stroke-dasharray="6 5"/>

        <!-- GRAU I -->
        <g class="hs-shape" data-hs-tone="good" data-hs-label="Grau I — encapsulado"
           data-hs-text="Tumor encapsulado, não invade nada. Está contido na própria cápsula. Bom prognóstico — só timectomia resolve."
           data-hs-hint="I = encapsulado, não invade.">
          <rect x="56" y="160" width="152" height="150" rx="12" fill="var(--teal-10)" stroke="var(--ok-green)" stroke-width="2.4"/>
          <text x="132" y="200" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="26">I</text>
          <text x="132" y="234" text-anchor="middle" class="svg-title" fill="var(--ink-90)" font-size="14">encapsulado</text>
          <text x="132" y="258" text-anchor="middle" class="svg-label" fill="var(--ink-70)">não invade</text>
          <text x="132" y="294" text-anchor="middle" class="svg-label" fill="var(--ok-green)" font-size="11">só timectomia</text>
        </g>

        <!-- GRAU II -->
        <g class="hs-shape" data-hs-tone="good" data-hs-label="Grau II — invasão mínima, ainda ressecável"
           data-hs-text="Invasão mínima, dividida em IIA e IIB. IIA: invasão microscópica da cápsula, só vista no histopatológico. IIB: invasão macroscópica do que se enxerga — gordura peritímica, um pedaço de pleura. Tudo isso ainda dá para ressecar. Por isso o II continua bom."
           data-hs-hint="IIA micro · IIB macro · ambos ressecáveis.">
          <rect x="220" y="160" width="152" height="150" rx="12" fill="var(--teal-10)" stroke="var(--ok-green)" stroke-width="2.4"/>
          <text x="296" y="200" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="26">II</text>
          <text x="296" y="228" text-anchor="middle" class="svg-label" fill="var(--ink-90)">IIA micro · IIB macro</text>
          <text x="296" y="250" text-anchor="middle" class="svg-label" fill="var(--ink-70)">gordura · pleura</text>
          <text x="296" y="276" text-anchor="middle" class="svg-label" fill="var(--ok-green)" font-size="11">ainda ressecável</text>
          <text x="296" y="296" text-anchor="middle" class="svg-label" fill="var(--ok-green)" font-size="11">só timectomia</text>
        </g>

        <!-- GRAU III -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Grau III — invasão por contiguidade"
           data-hs-text="O tumor pega órgãos vizinhos por contiguidade — estava colado e invadiu o que estava do lado (pericárdio, pulmão, grandes vasos). Resseca o timo, tira o que dá do órgão e completa com adjuvância. (O detalhe fino III × IVA é aprofundado na próxima página.)"
           data-hs-hint="III = colou e invadiu o vizinho · contiguidade.">
          <rect x="388" y="160" width="152" height="150" rx="12" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="2.4"/>
          <text x="464" y="200" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="26">III</text>
          <text x="464" y="232" text-anchor="middle" class="svg-title" fill="var(--ink-90)" font-size="13">contiguidade</text>
          <text x="464" y="256" text-anchor="middle" class="svg-label" fill="var(--ink-70)">invade o vizinho</text>
          <text x="464" y="294" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="11">+ adjuvância</text>
        </g>

        <!-- GRAU IV -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Grau IV — implante / metástase"
           data-hs-text="IVA: implante à distância (pedaço solto na pleura/pericárdio, separado da massa) — comportamento mais maligno. IVB: metástase à distância. Fecha a metade ruim. A diferença entre III e IVA é o coração da próxima página."
           data-hs-hint="IVA = implante à distância · IVB = metástase.">
          <rect x="552" y="160" width="152" height="150" rx="12" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="2.6"/>
          <text x="628" y="200" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="26">IV</text>
          <text x="628" y="232" text-anchor="middle" class="svg-title" fill="var(--ink-90)" font-size="13">implante / metástase</text>
          <text x="628" y="256" text-anchor="middle" class="svg-label" fill="var(--ink-70)">IVA solto · IVB à distância</text>
          <text x="628" y="294" text-anchor="middle" class="svg-label" fill="var(--err-red)" font-size="11">+ adjuvância</text>
        </g>
      </svg>
    </div>
  </div>
  <figcaption id="cap-med8"><strong>A régua de Masaoka.</strong> <strong>I e II</strong> em verde — encapsulado e invasão ainda ressecável, só timectomia. <strong>III e IV</strong> em coral/vermelho — invade braba, soma adjuvância. Toda a classificação se resolve numa pergunta: o que ele invade dá para ressecar? Clique em cada grau.</figcaption>
</figure>
<div class="hotspot-detail" data-hs-detail-for="med8" aria-live="polite">
  <div class="hotspot-detail__label">Clique num grau</div>
  <p class="hotspot-detail__text">Toque em cada grau para ver o que o define — e perceba a linha divisória: até o II tudo é ressecável (bom); do III em diante a invasão é braba (ruim, + adjuvância).</p>
</div>
```

---

## P9 · `med9` — Contiguidade × implante (o SVG-clímax)

**Ponto de inserção:** após o tópico 2 ("Grau IVA: implante à distância"), antes do tópico 3 e dos asides. É o clímax da aula.

**Conceito que reforça:** lado a lado, a **mesma** pleura/pericárdio. À esquerda (grau III): a invasão sai da própria massa e cola no vizinho — contiguidade. À direita (grau IVA): um nódulo-satélite destacado, solto à distância, separado da massa principal — implante. Mostra graficamente por que o mesmo órgão muda de grau conforme o modo de invasão. Dois hotspots (os dois cenários); a regra terapêutica final fica no aside `op-summary` da página.

```html
<figure class="figure-svg" role="group" aria-labelledby="cap-med9">
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="med9" aria-live="polite">
      <svg class="il-med9" data-eso="med9" viewBox="0 0 760 420" role="img" aria-labelledby="t-med9 d-med9">
        <title id="t-med9">Diferença entre invasão por contiguidade do grau III e implante à distância do grau IVA</title>
        <desc id="d-med9">Dois cenários lado a lado sobre a mesma pleura. À esquerda, grau III: a massa tímica está colada à pleura e a invasão sai da própria massa, por contiguidade. À direita, grau IVA: a mesma massa, mas com um nódulo-satélite solto à distância na pleura, separado do principal, um implante. O modo de invasão, não o órgão, decide o grau. Cada cenário é clicável.</desc>

        <text x="380" y="34" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="17">A mesma pleura, dois graus — o que muda é o modo</text>

        <line x1="380" y1="64" x2="380" y2="392" stroke="var(--border-mid)" stroke-width="1.4" stroke-dasharray="5 6"/>

        <!-- GRAU III · CONTIGUIDADE (esquerda) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Grau III — contiguidade (colou e invadiu)"
           data-hs-text="A massa estava colada e invadiu o que estava do lado: a invasão SAI da própria massa e avança sobre o vizinho (aqui, a pleura). É grave porque nem sempre dá para ressecar o órgão inteiro. Conduta: resseca o timo, tira o que dá do órgão e completa com adjuvância."
           data-hs-hint="III = invasão contínua, saindo da massa · contiguidade.">
          <text x="190" y="86" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="15">GRAU III · contiguidade</text>
          <!-- pleura (parede) -->
          <path d="M70 110 L70 360" fill="none" stroke="var(--ink-50)" stroke-width="6" stroke-linecap="round"/>
          <text x="58" y="240" text-anchor="middle" class="svg-label" fill="var(--ink-50)" transform="rotate(-90 58 240)">pleura</text>
          <!-- massa tímica colada, invadindo por contiguidade -->
          <ellipse cx="200" cy="235" rx="76" ry="64" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="2.6"/>
          <!-- língua de invasão contínua tocando a pleura -->
          <path d="M124 235 Q96 220 74 224 L74 246 Q96 250 124 235 Z" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="2.2"/>
          <text x="200" y="240" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="12">massa tímica</text>
          <text x="148" y="200" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="10">invade colado →</text>
          <text x="200" y="330" text-anchor="middle" class="svg-label" fill="var(--ink-70)">saiu da própria massa · ressecável-parcial</text>
          <text x="200" y="350" text-anchor="middle" class="svg-label" fill="var(--coral-80)">+ adjuvância</text>
        </g>

        <!-- GRAU IVA · IMPLANTE (direita) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Grau IVA — implante à distância (pedaço solto)"
           data-hs-text="Aqui está a virada. Não é colar e invadir: é ter um pedaço do tumor SOLTO, um implante na pleura/pericárdio, separado da massa principal. Implantar à distância revela comportamento muito mais maligno e prognóstico pior que o do grau III. A diferença não é o órgão — pode ser a mesma pleura — é o modo."
           data-hs-hint="IVA = nódulo solto, separado da massa · implante · pior.">
          <text x="566" y="86" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="15">GRAU IVA · implante</text>
          <!-- pleura (parede) -->
          <path d="M690 110 L690 360" fill="none" stroke="var(--ink-50)" stroke-width="6" stroke-linecap="round"/>
          <text x="702" y="240" text-anchor="middle" class="svg-label" fill="var(--ink-50)" transform="rotate(90 702 240)">pleura</text>
          <!-- massa principal, NÃO colada -->
          <ellipse cx="500" cy="225" rx="70" ry="58" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="2.6"/>
          <text x="500" y="230" text-anchor="middle" class="svg-label" fill="var(--err-red)" font-size="12">massa principal</text>
          <!-- nódulo-satélite SOLTO, à distância, junto à pleura -->
          <circle cx="648" cy="280" r="22" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="2.6" stroke-dasharray="4 3"/>
          <text x="648" y="284" text-anchor="middle" class="svg-label" fill="var(--err-red)" font-size="10">implante</text>
          <!-- vão entre massa e implante (separação explícita) -->
          <path d="M566 246 L626 274" stroke="var(--err-red)" stroke-width="1.4" stroke-dasharray="2 5" opacity="0.7"/>
          <text x="600" y="248" text-anchor="middle" class="svg-label" fill="var(--err-red)" font-size="9">separado!</text>
          <text x="566" y="330" text-anchor="middle" class="svg-label" fill="var(--ink-70)">pedaço solto à distância · mais maligno</text>
          <text x="566" y="350" text-anchor="middle" class="svg-label" fill="var(--err-red)">pior prognóstico</text>
        </g>
      </svg>
    </div>
  </div>
  <figcaption id="cap-med9"><strong>Contiguidade × implante.</strong> À esquerda, <strong>grau III</strong>: a invasão sai da própria massa e cola no vizinho. À direita, <strong>grau IVA</strong>: um nódulo solto à distância, separado do principal — <strong>implante</strong>, comportamento mais maligno e prognóstico pior. A mesma pleura, graus diferentes: o que decide é o modo. Clique em cada cenário.</figcaption>
</figure>
<div class="hotspot-detail" data-hs-detail-for="med9" aria-live="polite">
  <div class="hotspot-detail__label">Clique num cenário</div>
  <p class="hotspot-detail__text">Toque na contiguidade (III) e no implante (IVA) para travar a pegadinha clássica: a mesma pleura vira grau III se a invasão é contínua e grau IVA se há um pedaço solto à distância.</p>
</div>
```

---

## Notas finais para o Executor

1. **Engine:** importe/chame `initInteractive(document)` na página da aula (espelho de `aulas/aula-04/aula-04.js` linha 9 e 146). Nenhum JS bespoke é necessário — todos os 9 SVGs usam o padrão canônico `.hs-shape` + `.hotspot-detail`. O engine cuida de `role`/`tabindex`/`aria-pressed`/foco/teclado (setas).

2. **Tones e CSS opcional:** usei `data-hs-tone="good"` (verde) além de `danger` (coral) e `trap` (âmbar). O engine só repassa o valor para `.hotspot-detail[data-tone="…"]`. Se quiser realçar a borda/cor do painel por tom, adicione no CSS da aula (ex.: `.hotspot-detail[data-tone="good"]{border-color:var(--ok-green)}`). **Há fallback de cor dentro de cada SVG**, então sem esse CSS o significado já se lê.

3. **Fallback estático (sem JS):** cada `.hotspot-detail` já traz um conteúdo-semente legível, e cada `hs-shape` carrega seu rótulo gravado no SVG. Sem JS, o desenho ensina sozinho; com JS, o painel ganha o texto detalhado.

4. **Piso visual por página:** entreguei o **1 SVG-hotspot** de cada página. As **3 imagens reais** (P1/P2 TC mediastino normal · P3 massa anterior · P4 cisto broncogênico · P5 neurogênico posterior · P7 ptose miastênica · P9 implantes pleurais) ficam para o `buscador-imagem-medica-bauer` (fora do meu escopo — são exames reais, não esquematizáveis). A **2ª peça da P6** (mapa "cola de prova") é tabela estática, escopo do Executor — conteúdo já especificado no bloco da P6.

5. **Naming conferido:** todas as páginas usam `class="il-medN"`, `data-eso="medN"`, `data-hs-stage="medN"`, com IDs `t-medN`/`d-medN`/`cap-medN` únicos. Sem colisão entre SVGs na mesma plataforma.

6. **Contrato visual:** `viewBox` em todos · `role="img"` + `aria-labelledby` (title+desc técnicos, sem metalinguagem) · tokens `var(--…)` only, **zero hex** · **sem SMIL** · `prefers-reduced-motion` respeitado (não há animação inline). Cores semânticas: teal=baseline/benigno · coral=maligno · âmbar=pegadinha/onipresente · verde(`--ok-green`)=bom prognóstico · vermelho(`--err-red`)=perigo/implante.

7. **Anti-repetição confirmada:** corte sagital dos 3 compartimentos (P2), pílulas dos 4 T com anti-T riscado (P3), junção neuromuscular do elo timoma↔miastenia (P7), régua de Masaoka (P8) e o par contiguidade×implante na mesma pleura (P9) são conceitos exclusivos desta aula — nenhum reusa peça de outras aulas da plataforma.
