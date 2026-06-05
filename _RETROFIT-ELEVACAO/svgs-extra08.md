# SVGs profundos — Aula Extra 8 · Câncer de Testículo

> 12 SVGs interativos (1 por página), engine canônica `initInteractive` (`.figure-svg__stage[data-hs-stage]` + `.hs-shape` + `.hotspot-detail[data-hs-detail-for]`).
> Naming: classe `.il-tesN`, `data-eso="tesN"`, `data-hs-stage="tesN"`. Tokens `var(--…)` only · sem hex · sem SMIL · `role="img"`+`<title>`/`<desc>` · fallback estático (texto/legenda dentro do SVG).
> Convenção de cor: **teal** = baseline/benigno · **coral** = maligno · **âmbar (trap)** = pegadinha · **verde (`--ok-green`)** = cura/bom · **vermelho (`--err-red`)** = perigo.
> Tones do engine: `data-hs-tone="danger"` (perigo, borda vermelha) · `data-hs-tone="trap"` (pegadinha, borda âmbar) · sem tone (baseline, borda teal). "Bom/cura" usa fill `--ok-green` no shape.
> Cada SVG é um conceito visual **único** — nenhum repete metáfora de outra página nem das aulas vizinhas (régua-de-tumores=aula-04, barras-paradoxo/cartograma=bexiga ficam reservados; aqui: barra-empilhada-100%, escada-log-de-risco, dendrograma, alvo-bimanual, escada-ascendente-de-drenagem, campo-USG, matriz-marcadores, dueto-de-vias-cirúrgicas, balança-de-cura, trilho-de-decisão-bifurcado, painel-comparador-3-colunas, mapa-de-conduta-com-questões).

---

## P1 — `tes1` · Barra empilhada 100%: 95% germinativo × 5% não-germinativo

**Conceito visual:** uma única barra vertical "100% dos cânceres de testículo" partida em dois blocos — o bloco teal gigante (95% germinativo) e a faixa fina coral no topo (5% não-germinativo), subdividida em 4 fatias clicáveis (os 4 raros). O elemento desenhado (cada bloco/fatia) é o alvo. Casado com a prosa: "pense germinativo e siga em frente; os não-germinativos existem só para um V/F".

**Ponto de inserção:** após o Tópico 1 (parágrafo "Para tudo que importa: células germinativas."), antes do Tópico 2.

```html
<figure class="figure-svg">
  <figcaption><strong>Cem cânceres de testículo, empilhados.</strong> O bloco teal são os 95% germinativos — o que importa. A faixa fina no topo são os 5% raros, partidos nos quatro tipos. Clique, toque ou foque cada bloco.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="tes1" aria-live="polite">
      <svg class="il-tes1" data-eso="tes1" viewBox="0 0 760 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-tes1 d-tes1" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-tes1">Proporção dos cânceres de testículo: 95% germinativos e 5% não-germinativos</title>
        <desc id="d-tes1">Barra vertical única representando 100% dos cânceres de testículo. O bloco inferior, alto, em teal, corresponde aos 95% de tumores de células germinativas. A faixa estreita no topo, em coral, corresponde aos 5% não-germinativos, subdividida em quatro fatias clicáveis: linfoide, de cordão sexual ou estromal, hematopoiético e de ducto coletor.</desc>
        <defs>
          <linearGradient id="tes1-germ" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="var(--teal-30)"/>
            <stop offset="100%" stop-color="var(--teal-50)"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="760" height="420" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="44" class="svg-title" fill="var(--ink-100)" font-size="17">Quando o enunciado diz "câncer de testículo", pense germinativo.</text>
        <text x="40" y="66" class="svg-label" fill="var(--ink-70)">100% dos casos, do chão ao teto · clique em cada faixa</text>

        <!-- eixo -->
        <line x1="250" y1="96" x2="250" y2="380" stroke="var(--border-soft)" stroke-width="1.5"/>
        <text x="240" y="100" text-anchor="end" class="svg-label" fill="var(--ink-50)">100%</text>
        <text x="240" y="384" text-anchor="end" class="svg-label" fill="var(--ink-50)">0%</text>

        <!-- bloco germinativo: 95% (de y=110 a y=378, reservando a faixa fina no topo) -->
        <g class="hs-shape" data-hs-label="Germinativos — 95%" data-hs-text="A grande maioria dos cânceres de testículo é tumor de células germinativas: 95 em cada 100. É a primeira coisa a cravar. Quando o enunciado falar em câncer de testículo, assuma germinativo e siga para idade, fatores de risco e subtipo." data-hs-hint="95% · é por aqui que o raciocínio começa.">
          <rect x="260" y="124" width="190" height="254" rx="8" fill="url(#tes1-germ)" stroke="var(--teal-50)" stroke-width="2"/>
          <text x="355" y="246" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="34" font-weight="700">95%</text>
          <text x="355" y="278" text-anchor="middle" class="svg-title" fill="var(--teal-80)" font-size="15">células germinativas</text>
          <text x="355" y="298" text-anchor="middle" class="svg-label" fill="var(--ink-70)">seminoma · não-seminoma</text>
        </g>

        <!-- faixa fina 5% no topo, partida em 4 -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Linfoide — raro" data-hs-text="Linfoma testicular: cabe na fatia dos 5%. Lembrado em idosos e em prova de hematologia, nunca no jovem com massa indolor. Serve para um verdadeiro-ou-falso no histopatológico de um paciente já operado — nada além." data-hs-hint="Idoso/hematologia, não o jovem da clínica.">
          <rect x="260" y="100" width="47" height="20" rx="4" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="1.6"/>
        </g>
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Cordão sexual / estromal — raro" data-hs-text="Neoplasias de cordão sexual (estromais), como os tumores de células de Leydig e de Sertoli. Nome erudito que seduz quem decora sem hierarquizar frequência. Está entre os raros: 5% do bolo, ao lado dos germinativos minoritários." data-hs-hint="Nome bonito, frequência mínima.">
          <rect x="307" y="100" width="48" height="20" rx="4" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="1.6"/>
        </g>
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Hematopoiético — raro" data-hs-text="Tumores hematopoiéticos do testículo: parte da fatia minoritária. Raríssimos na vida e raríssimos na prova. Reconhecer que existem basta; não competem com o germinativo no homem de 20 a 40 anos." data-hs-hint="Existe, mas não disputa o diagnóstico.">
          <rect x="355" y="100" width="48" height="20" rx="4" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="1.6"/>
        </g>
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Ducto coletor — raro" data-hs-text="Tumores de ducto coletor (rete testis): fecham os 5% não-germinativos. Soam eruditos e por isso aparecem como distrator — marcá-los é justamente inverter a proporção que a prova cobra." data-hs-hint="Distrator clássico — inverte a proporção.">
          <rect x="403" y="100" width="47" height="20" rx="4" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="1.6"/>
        </g>
        <text x="470" y="114" class="svg-label" fill="var(--coral-80)">5% não-germinativos →</text>
        <text x="470" y="132" class="svg-label" fill="var(--ink-50)">linfoide · estromal · hematopoiético · ducto coletor</text>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="tes1" aria-live="polite">
  <div class="hotspot-detail__label">Clique numa faixa</div>
  <p class="hotspot-detail__text">O bloco teal é a resposta de prova; as quatro fatias coral no topo são os raros que só servem a um verdadeiro-ou-falso. Toque cada um para ver o porquê.</p>
</div>
```

---

## P2 — `tes2` · Escada logarítmica de risco relativo (5 degraus)

**Conceito visual:** uma escada de degraus que sobem da esquerda (1× = população geral, linha-base teal) à direita, cada degrau um fator de risco com seu múltiplo, altura proporcional (escala comprimida tipo log para caber 12×). Hotspot no degrau (a barra é o alvo). Cor: contralateral ~2× e pai 2–4× em teal/baixo; criptorquidia, irmão e pessoal prévio em coral (risco alto). Casado com a prosa da hierarquia. Distingue criptorquidia (fator) — planta o contraste que P11 fecha.

**Ponto de inserção:** após o Tópico 3 (parágrafo "Some tudo: idade jovem + criptorquidia já entrega insumo de sobra"), antes da imagem real.

```html
<figure class="figure-svg">
  <figcaption><strong>A hierarquia do risco, em degraus.</strong> O chão é a população geral (1×). Cada degrau sobe pelo múltiplo do fator. Repare: o irmão pesa mais que o pai. Clique, toque ou foque cada barra.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="tes2" aria-live="polite">
      <svg class="il-tes2" data-eso="tes2" viewBox="0 0 760 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-tes2 d-tes2" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-tes2">Escada de risco relativo para câncer de testículo</title>
        <desc id="d-tes2">Cinco barras de altura crescente comparando o risco relativo à população geral, fixada em uma vez. Da menor para a maior: testículo contralateral cerca de duas vezes, pai acometido de duas a quatro vezes, criptorquidia de quatro a seis vezes, irmão acometido de oito a doze vezes, e história pessoal de tumor prévio doze vezes. Cada barra é clicável.</desc>
        <rect x="0" y="0" width="760" height="430" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="44" class="svg-title" fill="var(--ink-100)" font-size="17">O irmão pesa mais que o pai — e a criptorquidia abre a lista.</text>
        <text x="40" y="66" class="svg-label" fill="var(--ink-70)">risco × população geral (1×) · clique em cada degrau</text>

        <!-- linha de base 1x -->
        <line x1="80" y1="372" x2="720" y2="372" stroke="var(--border-mid)" stroke-width="1.5"/>
        <line x1="80" y1="356" x2="720" y2="356" stroke="var(--border-soft)" stroke-width="1" stroke-dasharray="4 4"/>
        <text x="724" y="360" class="svg-label" fill="var(--ink-50)">1× base</text>

        <!-- contralateral ~2x (baixo, teal) -->
        <g class="hs-shape" data-hs-label="Contralateral · até 2×" data-hs-text="O outro testículo, o que desceu normalmente, também corre risco maior que a população geral — pode chegar a 2×. Por isso a investigação avalia os dois lados, e a ultrassonografia inicial é bilateral. Avaliar o contralateral não é zelo: é a associação bilateral cobrando atenção." data-hs-hint="Por isso a USG é bilateral.">
          <rect x="92" y="316" width="96" height="56" rx="8" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="2"/>
          <text x="140" y="306" text-anchor="middle" class="svg-title" fill="var(--teal-80)" font-size="17">~2×</text>
          <text x="140" y="392" text-anchor="middle" class="svg-label" fill="var(--ink-70)">contralateral</text>
        </g>

        <!-- pai 2-4x (teal) -->
        <g class="hs-shape" data-hs-label="Pai acometido · 2–4×" data-hs-text="História familiar entra em escala. Pai com câncer de testículo eleva o risco de 2 a 4 vezes. É real, mas pesa menos que o irmão — e a banca adora testar essa hierarquia, porque a intuição diz que 'pai' seria o parente mais forte." data-hs-hint="Real, mas menor que o irmão.">
          <rect x="216" y="284" width="96" height="88" rx="8" fill="var(--teal-40)" stroke="var(--teal-50)" stroke-width="2"/>
          <text x="264" y="274" text-anchor="middle" class="svg-title" fill="var(--teal-80)" font-size="17">2–4×</text>
          <text x="264" y="392" text-anchor="middle" class="svg-label" fill="var(--ink-70)">pai</text>
        </g>

        <!-- criptorquidia 4-6x (coral) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Criptorquidia · 4–6×" data-hs-text="O fator soberano do enunciado: o testículo que não desceu para a bolsa e ficou retido, em geral no abdome, tem risco de 4 a 6 vezes maior. Homem jovem com criptorquidia na história é luz vermelha piscando. Não confunda com testículo retrátil — que desce e sobe e NÃO é fator de risco." data-hs-hint="O fator clássico · ≠ testículo retrátil.">
          <rect x="340" y="244" width="96" height="128" rx="8" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="2.2"/>
          <text x="388" y="234" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="17">4–6×</text>
          <text x="388" y="392" text-anchor="middle" class="svg-label" fill="var(--coral-80)">criptorquidia</text>
        </g>

        <!-- irmão 8-12x (coral, alto) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Irmão acometido · 8–12×" data-hs-text="O maior dos fatores familiares: irmão com câncer de testículo eleva o risco de 8 a 12 vezes — acima do pai. É a hierarquia que a prova cobra de propósito, porque contraria a intuição de que o pai seria mais forte." data-hs-hint="Maior fator familiar — acima do pai.">
          <rect x="464" y="184" width="96" height="188" rx="8" fill="var(--coral-50)" stroke="var(--coral-60)" stroke-width="2.4"/>
          <text x="512" y="174" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="17">8–12×</text>
          <text x="512" y="392" text-anchor="middle" class="svg-label" fill="var(--coral-80)">irmão</text>
        </g>

        <!-- pessoal prévio 12x (coral, o mais alto) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Tumor prévio · 12×" data-hs-text="Quem já teve câncer de testículo, com ou sem passado de criptorquidia, tem 12 vezes mais risco de desenvolver no contralateral. É o teto da escada e o motivo de o lado oposto nunca ficar de fora do acompanhamento." data-hs-hint="Teto da escada · vigia o contralateral.">
          <rect x="588" y="168" width="96" height="204" rx="8" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="2.4"/>
          <text x="636" y="158" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="17">12×</text>
          <text x="636" y="392" text-anchor="middle" class="svg-label" fill="var(--err-red)">tumor prévio</text>
        </g>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="tes2" aria-live="polite">
  <div class="hotspot-detail__label">Clique num degrau</div>
  <p class="hotspot-detail__text">Os degraus teal (contralateral, pai) sobem pouco; os coral (criptorquidia, irmão, tumor prévio) sobem muito. Toque cada barra para ver o múltiplo e a razão prática.</p>
</div>
```

---

## P3 — `tes3` · Dendrograma de classificação: germinativo → 2 ramos → 4 componentes do misto

**Conceito visual:** árvore que desce de um nó-raiz "germinativo" para dois ramos (seminoma "tende a puro" / não-seminoma "tende a misto"). Sob o não-seminoma, 4 folhas (carcinoma embrionário, coriocarcinoma, teratoma, saco vitelínico). O conceito visual único: clicar no ramo "não-seminoma" **acende as 4 folhas juntas** (via o detail explicando que vêm misturadas) — cada folha também é hotspot próprio. Casado com "não-seminomatoso quase sempre é misto".

**Ponto de inserção:** após o Tópico 2 (parágrafo "não-seminomatoso costuma ser misto"), antes da imagem histopatológica.

```html
<figure class="figure-svg">
  <figcaption><strong>Dois ramos, um deles sempre misturado.</strong> O seminoma tende a vir puro; o não-seminoma quase nunca — costuma juntar mais de um componente. Clique, toque ou foque cada nó.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="tes3" aria-live="polite">
      <svg class="il-tes3" data-eso="tes3" viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-tes3 d-tes3" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-tes3">Classificação dos tumores germinativos do testículo</title>
        <desc id="d-tes3">Diagrama em árvore. No topo, o nó tumor de células germinativas. Desce para dois ramos: seminomatoso, mais comum e tendente a puro, em teal; e não-seminomatoso, tendente a misto, em coral. Sob o não-seminomatoso, quatro folhas representam os componentes que se combinam no mesmo tumor: carcinoma embrionário, coriocarcinoma, teratoma e tumor do saco vitelínico. Cada nó é clicável.</desc>
        <rect x="0" y="0" width="760" height="440" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="42" class="svg-title" fill="var(--ink-100)" font-size="17">O não-seminoma quase nunca vem com um tipo só.</text>

        <!-- conectores -->
        <path d="M380 96 V126 M380 126 H210 V160 M380 126 H560 V160" fill="none" stroke="var(--border-strong)" stroke-width="2"/>
        <path d="M560 218 V250 M560 250 H418 V286 M560 250 H512 V286 M560 250 H608 V286 M560 250 H702 V286" fill="none" stroke="var(--coral-50)" stroke-width="1.8" opacity="0.8"/>

        <!-- raiz germinativo -->
        <g class="hs-shape" data-hs-label="Tumor de células germinativas" data-hs-text="O tronco comum: 95% dos cânceres de testículo. Daqui partem os dois subtipos que importam — e a divisão não é estética: ela muda quais marcadores tumorais o paciente vai expressar, e marcador é o que decide boa parte das questões." data-hs-hint="Daqui sai a decisão dos marcadores.">
          <rect x="278" y="66" width="204" height="44" rx="10" fill="var(--teal-40)" stroke="var(--teal-50)" stroke-width="2"/>
          <text x="380" y="93" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="14">células germinativas (95%)</text>
        </g>

        <!-- seminoma (teal, puro) -->
        <g class="hs-shape" data-hs-label="Seminomatoso — tende a puro" data-hs-text="O subtipo mais comum dos germinativos. Costuma se apresentar de forma homogênea, mais 'puro'. Pista de marcador: a AFP NUNCA aparece no seminoma; o beta-hCG pode, em até 15%. Inverter isso — dar protagonismo de frequência ao não-seminoma — é o erro clássico." data-hs-hint="Mais comum · puro · AFP nunca.">
          <rect x="108" y="160" width="204" height="54" rx="10" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="2"/>
          <text x="210" y="186" text-anchor="middle" class="svg-title" fill="var(--teal-80)" font-size="14">Seminomatoso</text>
          <text x="210" y="205" text-anchor="middle" class="svg-label" fill="var(--ink-70)">mais comum · tende a puro</text>
        </g>

        <!-- não-seminoma (coral, misto) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Não-seminomatoso — tende a misto" data-hs-text="Menos frequente que o seminoma, mas com uma marca registrada: dificilmente vem com um subtipo só. É quase sempre misto, juntando mais de um componente histológico no mesmo tumor. É também o que mais expressa AFP e beta-hCG. Clique nas quatro folhas abaixo para ver os componentes que se combinam." data-hs-hint="Quase sempre misto · expressa AFP/beta-hCG.">
          <rect x="458" y="160" width="204" height="54" rx="10" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="2.2"/>
          <text x="560" y="186" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="14">Não-seminomatoso</text>
          <text x="560" y="205" text-anchor="middle" class="svg-label" fill="var(--coral-80)">tende a misto →</text>
        </g>

        <!-- 4 folhas do misto -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Carcinoma embrionário" data-hs-text="Componente comum do não-seminomatoso misto. Costuma aparecer combinado a outros tipos no mesmo tumor — raramente sozinho. Faz parte do conjunto que sustenta a regra: não-seminoma = misto." data-hs-hint="Vem combinado, não isolado.">
          <rect x="356" y="286" width="124" height="64" rx="9" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="1.8"/>
          <text x="418" y="313" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="12">carcinoma</text>
          <text x="418" y="330" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="12">embrionário</text>
        </g>
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Coriocarcinoma" data-hs-text="Componente do não-seminomatoso misto e grande produtor de beta-hCG — daí a ginecomastia que às vezes acompanha o quadro. Entra na mistura junto de carcinoma embrionário, teratoma e saco vitelínico." data-hs-hint="Produz beta-hCG · entra na mistura.">
          <rect x="490" y="286" width="124" height="64" rx="9" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="1.8"/>
          <text x="552" y="322" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="12">coriocarcinoma</text>
        </g>
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Teratoma" data-hs-text="Componente do não-seminomatoso misto. Frequentemente aparece pareado ao tumor do saco vitelínico. Reforça a regra de prova: quando é não-seminoma, espere combinação de tipos no mesmo tumor." data-hs-hint="Pareia com o saco vitelínico.">
          <rect x="490" y="286" width="124" height="64" rx="9" fill="none"/>
          <rect x="356" y="362" width="124" height="60" rx="9" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="1.8"/>
          <text x="418" y="398" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="12">teratoma</text>
        </g>
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Tumor do saco vitelínico" data-hs-text="Componente do não-seminomatoso misto, produtor de AFP. Costuma vir junto do teratoma. Fecha o quarteto que faz do não-seminoma o ramo dos misturados — a marca que a prova cobra." data-hs-hint="Produz AFP · vem junto do teratoma.">
          <rect x="490" y="362" width="124" height="60" rx="9" fill="var(--coral-dim)" stroke="var(--coral-50)" stroke-width="1.8"/>
          <text x="552" y="392" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="12">saco</text>
          <text x="552" y="408" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="12">vitelínico</text>
        </g>
        <text x="690" y="398" text-anchor="middle" class="svg-label" fill="var(--ink-50)" font-size="11">no mesmo</text>
        <text x="690" y="414" text-anchor="middle" class="svg-label" fill="var(--ink-50)" font-size="11">tumor</text>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="tes3" aria-live="polite">
  <div class="hotspot-detail__label">Clique num nó</div>
  <p class="hotspot-detail__text">O ramo teal (seminoma) tende a puro; o ramo coral (não-seminoma) acende as quatro folhas que se combinam no mesmo tumor. Toque cada uma para entender o "misto".</p>
</div>
```

---

## P4 — `tes4` · Alvo do exame bimanual: a massa e seus achados

**Conceito visual:** corte esquemático do testículo na bolsa, com a massa endurecida bem delimitada dentro do parênquima — cada característica é um hotspot **no próprio achado desenhado**: a massa (endurecida/bem delimitada/indolor — verde porque "não dói" é a marca a favor do reconhecimento), o halo de líquido ao redor (hidrocele se cresce), e um ícone de mama (ginecomastia/β-hCG, trap por ser pista elegante). Conceito único: anatomia escrotal em corte, não uma régua nem árvore.

**Ponto de inserção:** após o Tópico 2 (parágrafo "metástase ao diagnóstico aparece em 10–15%"), antes da peça macroscópica.

```html
<figure class="figure-svg">
  <figcaption><strong>A massa que se acha no banho.</strong> Endurecida, bem delimitada e — o detalhe que define tudo — indolor. Em volta dela, os sinais que acompanham. Clique, toque ou foque cada achado.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="tes4" aria-live="polite">
      <svg class="il-tes4" data-eso="tes4" viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-tes4 d-tes4" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-tes4">Achados do exame bimanual de uma massa testicular</title>
        <desc id="d-tes4">Corte esquemático do testículo na bolsa escrotal. Dentro do parênquima, uma massa sólida bem delimitada, marcada como endurecida e indolor. Um halo de líquido ao redor representa a hidrocele que pode surgir se o tumor cresce. Ao lado, um ícone de mama indica a ginecomastia ligada ao beta-hCG. Cada achado é clicável.</desc>
        <defs>
          <radialGradient id="tes4-mass" cx="50%" cy="42%" r="60%">
            <stop offset="0%" stop-color="var(--coral-50)"/>
            <stop offset="100%" stop-color="var(--coral-40)"/>
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="760" height="440" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="42" class="svg-title" fill="var(--ink-100)" font-size="17">Massa endurecida e indolor — na prova, é câncer.</text>

        <!-- bolsa / parênquima -->
        <ellipse cx="300" cy="248" rx="172" ry="138" fill="var(--teal-05)" stroke="var(--teal-40)" stroke-width="2.4"/>
        <text x="300" y="402" text-anchor="middle" class="svg-label" fill="var(--ink-50)">testículo · exame bimanual</text>

        <!-- halo de hidrocele (entre parênquima e massa) -->
        <g class="hs-shape" data-hs-label="Hidrocele — se o tumor cresce" data-hs-text="Achado secundário, menos específico. Quando o tumor cresce muito, pode surgir hidrocele associada — acúmulo de líquido ao redor — ou um peso/desconforto escrotal. Acompanha, mas não é o que fecha o diagnóstico: a marca segue sendo a massa indolor." data-hs-hint="Secundário · líquido se a massa cresce.">
          <ellipse cx="300" cy="244" rx="118" ry="92" fill="var(--teal-20)" stroke="var(--teal-50)" stroke-width="1.8" opacity="0.55"/>
          <text x="300" y="172" text-anchor="middle" class="svg-label" fill="var(--teal-80)" font-size="11">líquido (hidrocele)</text>
        </g>

        <!-- massa central: endurecida / bem delimitada / indolor (verde = a favor do reconhecimento) -->
        <g class="hs-shape" data-hs-label="Massa endurecida, bem delimitada, indolor" data-hs-text="O achado-mãe. Ao exame bimanual a massa é endurecida, muito bem delimitada e absolutamente indolor — achada no banho ou pelo parceiro. Pode doer na vida real (infarto, sangramento), mas dor não cai na prova: seria pegadinha maldosa demais frente à torção e à orquiepididimite, que DOEM." data-hs-hint="Indolor é a marca · dor empurra para outro diagnóstico.">
          <circle cx="300" cy="244" r="62" fill="url(#tes4-mass)" stroke="var(--coral-60)" stroke-width="3"/>
          <circle cx="300" cy="244" r="62" fill="none" stroke="var(--ok-green)" stroke-width="2" stroke-dasharray="5 5" opacity="0.9"/>
          <text x="300" y="240" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="13">endurecida</text>
          <text x="300" y="258" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="12">indolor</text>
        </g>

        <!-- ginecomastia / beta-hCG (trap, ao lado) -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Ginecomastia — beta-hCG" data-hs-text="Achado elegante que a banca às vezes planta: ginecomastia em cerca de 2% dos casos, consequência do beta-hCG produzido pelo tumor. Homem de 20 a 40 anos, criptorquidia, massa indolor E ginecomastia fecha o raciocínio. O mesmo marcador que ajuda no diagnóstico explica o sinal." data-hs-hint="~2% · o beta-hCG do tumor.">
          <g transform="translate(560,210)">
            <path d="M-44 0 a22 22 0 0 1 44 0 a22 22 0 0 1 44 0 q0 30 -44 44 q-44 -14 -44 -44 Z" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2"/>
            <circle cx="-22" cy="6" r="3.4" fill="var(--warn-amber)"/>
            <circle cx="22" cy="6" r="3.4" fill="var(--warn-amber)"/>
          </g>
          <text x="560" y="306" text-anchor="middle" class="svg-label" fill="var(--warn-amber)" font-size="12">ginecomastia</text>
          <text x="560" y="324" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">(beta-hCG · ~2%)</text>
        </g>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="tes4" aria-live="polite">
  <div class="hotspot-detail__label">Clique num achado</div>
  <p class="hotspot-detail__text">A massa central (endurecida, indolor) é o que fecha o diagnóstico; o halo e a ginecomastia são os sinais que acompanham. Toque cada um para o detalhe.</p>
</div>
```

---

## P5 — `tes5` · Escada ascendente de drenagem: testículo → canal inguinal → retroperitônio → supraclavicular

**Conceito visual:** corpo estilizado de perfil com 4 estações empilhadas de baixo (testículo) para cima (supraclavicular), conectadas por uma linha de drenagem ascendente com setas. Cada estação é hotspot. Conceito único: rota vertical anatômica (não escada de barras nem árvore). A cor escurece para coral/vermelho conforme sobe (mais avançado). Casado com a pergunta "por onde sobe primeiro".

**Ponto de inserção:** após o Tópico 2 (parágrafo "Dor abdominal/lombar acende o alerta de doença retroperitoneal").

```html
<figure class="figure-svg">
  <figcaption><strong>A rota de subida.</strong> O tumor não dissemina pela pele do escroto — sobe pelo canal inguinal até o retroperitônio e, em casos avançados, ao supraclavicular. Clique, toque ou foque cada estação.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="tes5" aria-live="polite">
      <svg class="il-tes5" data-eso="tes5" viewBox="0 0 760 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-tes5 d-tes5" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-tes5">Rota de disseminação linfática do câncer de testículo</title>
        <desc id="d-tes5">Quatro estações empilhadas de baixo para cima, ligadas por uma linha de drenagem ascendente com setas: testículo na base, canal inguinal logo acima, linfonodos retroperitoneais ao centro e linfonodos supraclaviculares no topo. A cor escurece conforme sobe, indicando doença mais avançada. Cada estação é clicável.</desc>
        <defs>
          <marker id="tes5-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="var(--border-strong)"/>
          </marker>
        </defs>
        <rect x="0" y="0" width="760" height="460" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="42" class="svg-title" fill="var(--ink-100)" font-size="17">Sobe pelo canal inguinal — não pela pele do escroto.</text>

        <!-- linha de drenagem ascendente -->
        <line x1="240" y1="396" x2="240" y2="104" stroke="var(--border-strong)" stroke-width="2.5" marker-end="url(#tes5-arrow)"/>

        <!-- testículo (base, teal) -->
        <g class="hs-shape" data-hs-label="Testículo — a origem" data-hs-text="Ponto de partida. Embriologicamente a gônada vem do retroperitônio e mantém essa drenagem: por isso o tumor não dissemina 'pela bolsa'. A massa endurecida no exame bimanual é o que se confirma antes de pensar na rota de subida." data-hs-hint="Origem retroperitoneal · não drena pela pele.">
          <circle cx="240" cy="400" r="34" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="2.4"/>
          <text x="296" y="396" class="svg-title" fill="var(--teal-80)" font-size="14">Testículo</text>
          <text x="296" y="415" class="svg-label" fill="var(--ink-70)">massa endurecida (origem)</text>
        </g>

        <!-- canal inguinal (teal/âmbar) -->
        <g class="hs-shape" data-hs-label="Canal inguinal — a via" data-hs-text="A rota de subida. É por aqui que o tumor se espalha — e é o mesmo fato anatômico que manda a cirurgia ser por via inguinal, nunca escrotal. Ligar 'canal inguinal' à disseminação E à via cirúrgica é o que a banca quer." data-hs-hint="A via que define a cirurgia inguinal.">
          <rect x="206" y="276" width="68" height="48" rx="10" fill="var(--teal-40)" stroke="var(--teal-50)" stroke-width="2.2"/>
          <text x="296" y="296" class="svg-title" fill="var(--teal-80)" font-size="14">Canal inguinal</text>
          <text x="296" y="315" class="svg-label" fill="var(--ink-70)">a via de subida</text>
        </g>

        <!-- retroperitônio (coral) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Linfonodos retroperitoneais — o alvo" data-hs-text="Primeiro destino linfático: o retroperitônio. Por isso a TC de abdome é o exame de estadiamento quando se suspeita de metástase. Dor abdominal ou lombar nesse paciente acende o alerta de doença retroperitoneal. Atenção: linfonodo inguinal superficial drena a PELE escrotal, não o testículo." data-hs-hint="Alvo da TC de abdome · dor lombar = alerta.">
          <rect x="200" y="172" width="80" height="54" rx="10" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="2.4"/>
          <text x="296" y="194" class="svg-title" fill="var(--coral-80)" font-size="14">Retroperitônio</text>
          <text x="296" y="213" class="svg-label" fill="var(--coral-80)">1º destino · TC de abdome</text>
        </g>

        <!-- supraclavicular (vermelho, avançado) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Linfonodos supraclaviculares — avançado" data-hs-text="Estação final, alcançada só em quadro muito avançado. Adenopatia supraclavicular em prova de acesso direto é rara — mas saber que é o topo da rota explica a gravidade quando aparece." data-hs-hint="Topo da rota · só em doença avançada.">
          <circle cx="240" cy="92" r="32" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="2.6"/>
          <text x="296" y="88" class="svg-title" fill="var(--err-red)" font-size="14">Supraclavicular</text>
          <text x="296" y="107" class="svg-label" fill="var(--err-red)">só em doença avançada</text>
        </g>

        <text x="540" y="430" text-anchor="end" class="svg-label" fill="var(--ink-50)" font-size="11">retroperitônio → drenagem da gônada · inguinal superficial → drenagem da pele</text>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="tes5" aria-live="polite">
  <div class="hotspot-detail__label">Clique numa estação</div>
  <p class="hotspot-detail__text">A linha sobe do testículo (teal) ao supraclavicular (vermelho). Toque cada estação para ver o que significa achar massa ou adenopatia ali — e por que a TC mira o retroperitônio.</p>
</div>
```

---

## P6 — `tes6` · Campo de USG: lesão hipoecogênica heterogênea com Doppler

**Conceito visual:** um "campo ultrassonográfico" estilizado (fundo escuro, gradiente de eco, marcadores de profundidade laterais) com a lesão intratesticular desenhada — escura (hipoecogênica), com textura granular (heterogênea/"carne de peixe"), contorno nítido (bem delimitada), e sinais de Doppler (riscos color-flow) ao redor. Cada propriedade é hotspot na própria área desenhada. Conceito único: simula imagem de USG, distinto de tudo. Casado com "carne de peixe" e Doppler bilateral.

**Ponto de inserção:** após o Tópico 2 (parágrafo "o diagnóstico está dado"), antes da USG real.

```html
<figure class="figure-svg">
  <figcaption><strong>O ultrassom clássico.</strong> Lesão bem delimitada, escura (hipoecogênica) e de textura "esquisita" (heterogênea) — a tal "carne de peixe" — com vascularização ao Doppler. Clique, toque ou foque cada característica.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="tes6" aria-live="polite">
      <svg class="il-tes6" data-eso="tes6" viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-tes6 d-tes6" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-tes6">Aspecto ultrassonográfico do tumor de testículo</title>
        <desc id="d-tes6">Campo ultrassonográfico estilizado, com fundo escuro e escala de profundidade. No parênquima testicular, uma lesão bem delimitada, hipoecogênica (mais escura que o tecido), de textura heterogênea granular, lembrando carne de peixe. Ao redor, traços de Doppler indicam aumento da vascularização. Cada característica é clicável.</desc>
        <defs>
          <radialGradient id="tes6-field" cx="50%" cy="0%" r="100%">
            <stop offset="0%" stop-color="var(--bg-elevated-2)"/>
            <stop offset="100%" stop-color="var(--bg-base)"/>
          </radialGradient>
          <pattern id="tes6-hetero" width="14" height="14" patternUnits="userSpaceOnUse">
            <rect width="14" height="14" fill="var(--teal-100)"/>
            <circle cx="3" cy="4" r="1.6" fill="var(--teal-80)" opacity="0.5"/>
            <circle cx="10" cy="9" r="2.1" fill="var(--ink-50)" opacity="0.4"/>
            <circle cx="7" cy="2" r="1.1" fill="var(--ink-70)" opacity="0.4"/>
          </pattern>
        </defs>
        <rect x="0" y="0" width="760" height="440" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="42" class="svg-title" fill="var(--ink-100)" font-size="17">"Carne de peixe": escura, heterogênea, bem delimitada.</text>

        <!-- campo USG -->
        <rect x="190" y="70" width="380" height="320" rx="10" fill="url(#tes6-field)" stroke="var(--border-mid)" stroke-width="1.5"/>
        <!-- régua de profundidade -->
        <g stroke="var(--ink-50)" stroke-width="1" opacity="0.5">
          <line x1="566" y1="110" x2="556" y2="110"/><line x1="566" y1="150" x2="556" y2="150"/>
          <line x1="566" y1="190" x2="556" y2="190"/><line x1="566" y1="230" x2="556" y2="230"/>
          <line x1="566" y1="270" x2="556" y2="270"/><line x1="566" y1="310" x2="556" y2="310"/>
        </g>
        <text x="380" y="92" text-anchor="middle" class="svg-label" fill="var(--ink-50)" font-size="10">parênquima testicular</text>

        <!-- lesão: hipoecogênica + heterogênea + bem delimitada -->
        <g class="hs-shape" data-hs-label="Hipoecogênica e heterogênea" data-hs-text="A lesão do tumor é hipoecogênica — mais escura que o parênquima, pouca ecogenicidade — e heterogênea: aquele aspecto 'esquisitão' que lembra carne de peixe quando se abre a peça. É o oposto da imagem calcificada e brilhante de um cálculo (litíase), e do conteúdo anecoico líquido de um cisto ou hidrocele." data-hs-hint="Escura + textura esquisita ≠ cálculo brilhante.">
          <path d="M300 170 q60 -36 120 6 q44 40 16 110 q-50 56 -130 30 q-50 -34 -38 -96 q8 -34 32 -50 Z" fill="url(#tes6-hetero)" stroke="var(--teal-60)" stroke-width="2"/>
          <text x="360" y="252" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="12">hipoecogênica</text>
          <text x="360" y="270" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">heterogênea</text>
        </g>

        <!-- contorno: bem delimitada (hotspot no anel de borda) -->
        <g class="hs-shape" data-hs-label="Bem delimitada" data-hs-text="Apesar do interior heterogêneo, a lesão é muito bem delimitada — borda nítida contra o parênquima. Esse contraste de bordas é parte da descrição clássica: 'lesão bem delimitada, hipoecogênica e heterogênea' já entrega o diagnóstico na prova." data-hs-hint="Borda nítida · descrição clássica de prova.">
          <path d="M300 170 q60 -36 120 6 q44 40 16 110 q-50 56 -130 30 q-50 -34 -38 -96 q8 -34 32 -50 Z" fill="none" stroke="var(--ok-green)" stroke-width="2.6" stroke-dasharray="7 5"/>
          <text x="446" y="166" class="svg-label" fill="var(--ok-green)" font-size="11">bem delimitada</text>
        </g>

        <!-- Doppler: vascularização (traços color-flow) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Doppler — vascularização aumentada" data-hs-text="A USG é feita idealmente com Doppler: o aumento da vascularização também fala a favor de câncer. E é sempre bilateral — avalia-se o contralateral na mesma sessão, porque a associação bilateral é frequente. Se a USG não estiver disponível, não se espera: parte-se para o tratamento." data-hs-hint="Vascularização ↑ · exame bilateral · não retardar.">
          <path d="M338 214 q14 10 6 26 M364 206 q16 8 8 28 M392 218 q12 12 4 26" fill="none" stroke="var(--err-red)" stroke-width="2.4" stroke-linecap="round"/>
          <path d="M350 230 q-12 8 -6 24 M378 224 q-14 6 -8 26" fill="none" stroke="var(--teal-60)" stroke-width="2.4" stroke-linecap="round"/>
          <text x="360" y="324" text-anchor="middle" class="svg-label" fill="var(--err-red)" font-size="11">Doppler: ↑ vascularização</text>
        </g>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="tes6" aria-live="polite">
  <div class="hotspot-detail__label">Clique numa característica</div>
  <p class="hotspot-detail__text">A lesão é escura, de textura granular e bem delimitada, com fluxo ao Doppler. Toque cada elemento para a leitura — e para a diferença em relação a cálculo e cisto.</p>
</div>
```

---

## P7 — `tes7` · Matriz de marcadores: AFP / β-hCG / LDH × seminoma / não-seminoma

**Conceito visual:** grade 3×2 onde cada **célula** é o hotspot (o elemento clicável). Linhas AFP, β-hCG, LDH; colunas seminoma / não-seminoma. A célula AFP×seminoma vem com um "0 / ausente" cravado em vermelho-perigo (nunca no seminoma). β-hCG×seminoma em âmbar (trap: pode em até 15%). Cada célula revela %. Conceito único: matriz/tabela dinâmica, distinta de tudo. Casado com "AFP nunca no seminoma".

**Ponto de inserção:** após o Tópico 3 (parágrafo "É essa leitura que dispara o estadiamento").

```html
<figure class="figure-svg">
  <figcaption><strong>O filtro dos marcadores.</strong> A AFP separa (nunca no seminoma); o beta-hCG não separa (pode nos dois); a LDH não decide nada sozinha. Clique, toque ou foque cada célula da matriz.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="tes7" aria-live="polite">
      <svg class="il-tes7" data-eso="tes7" viewBox="0 0 760 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-tes7 d-tes7" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-tes7">Matriz dos marcadores tumorais por subtipo de tumor germinativo</title>
        <desc id="d-tes7">Tabela de três linhas — alfafetoproteína, beta-hCG e LDH — por duas colunas — seminoma e não-seminoma. A célula AFP no seminoma está marcada como ausente, zero por cento, em vermelho. A célula beta-hCG no seminoma, em âmbar, indica que pode estar presente em até quinze por cento. As demais células trazem as faixas percentuais. Cada célula é clicável.</desc>
        <rect x="0" y="0" width="760" height="430" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="42" class="svg-title" fill="var(--ink-100)" font-size="17">AFP nunca no seminoma. β-hCG pode em ambos. LDH não decide.</text>

        <!-- cabeçalhos de coluna -->
        <text x="380" y="92" text-anchor="middle" class="svg-title" fill="var(--teal-80)" font-size="14">Seminoma</text>
        <text x="588" y="92" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="14">Não-seminoma</text>
        <!-- rótulos de linha -->
        <text x="150" y="146" text-anchor="end" class="svg-title" fill="var(--ink-100)" font-size="14">AFP</text>
        <text x="150" y="236" text-anchor="end" class="svg-title" fill="var(--ink-100)" font-size="14">β-hCG</text>
        <text x="150" y="326" text-anchor="end" class="svg-title" fill="var(--ink-100)" font-size="14">LDH</text>

        <!-- AFP × seminoma : AUSENTE (perigo/regra-âncora) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="AFP no seminoma — ausente" data-hs-text="A regra que não falha: a alfafetoproteína está presente SÓ nos não-seminomatosos e NUNCA no seminoma. Logo, AFP elevada exclui seminoma puro. É a âncora dos marcadores — a única que serve de filtro de exclusão de subtipo." data-hs-hint="AFP alta exclui seminoma puro.">
          <rect x="290" y="110" width="180" height="62" rx="9" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="2.4"/>
          <text x="380" y="138" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="15">0% — nunca</text>
          <text x="380" y="158" text-anchor="middle" class="svg-label" fill="var(--ink-70)">ausente no seminoma</text>
        </g>
        <!-- AFP × não-seminoma : 60-80% -->
        <g class="hs-shape" data-hs-label="AFP no não-seminoma — 60–80%" data-hs-text="A AFP está presente em 60% a 80% dos tumores germinativos não-seminomatosos. É produzida sobretudo pelo componente de tumor do saco vitelínico. Marca o subtipo: AFP positiva fala de não-seminoma." data-hs-hint="60–80% · marca o não-seminoma.">
          <rect x="498" y="110" width="180" height="62" rx="9" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="2.2"/>
          <text x="588" y="138" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="15">60–80%</text>
          <text x="588" y="158" text-anchor="middle" class="svg-label" fill="var(--ink-70)">presente</text>
        </g>

        <!-- β-hCG × seminoma : até 15% (trap) -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="β-hCG no seminoma — até 15%" data-hs-text="Atenção à pegadinha: o beta-hCG PODE estar presente no seminoma, em até 15%. Por isso ele não separa os subtipos como a AFP separa. Quem decora 'marcador de não-seminoma' como bloco assume que beta-hCG e AFP se comportam igual — mas só a AFP é fiel." data-hs-hint="Pode aparecer · por isso não exclui seminoma.">
          <rect x="290" y="200" width="180" height="62" rx="9" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2.2"/>
          <text x="380" y="228" text-anchor="middle" class="svg-title" fill="var(--warn-amber)" font-size="15">até 15%</text>
          <text x="380" y="248" text-anchor="middle" class="svg-label" fill="var(--ink-70)">pode — não exclui</text>
        </g>
        <!-- β-hCG × não-seminoma : 20-40% -->
        <g class="hs-shape" data-hs-label="β-hCG no não-seminoma — 20–40%" data-hs-text="O beta-hCG é mais comum no não-seminomatoso, em 20% a 40% dos casos — produzido sobretudo pelo coriocarcinoma, e é o que explica a ginecomastia. Mas, como vaza para o seminoma, não tem o poder de exclusão da AFP." data-hs-hint="20–40% · ligado ao coriocarcinoma.">
          <rect x="498" y="200" width="180" height="62" rx="9" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="2.2"/>
          <text x="588" y="228" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="15">20–40%</text>
          <text x="588" y="248" text-anchor="middle" class="svg-label" fill="var(--ink-70)">mais comum aqui</text>
        </g>

        <!-- LDH × ambos : inespecífico -->
        <g class="hs-shape" data-hs-label="LDH — inespecífica nos dois" data-hs-text="A LDH aparece nos dois subtipos e é inespecífica — sobe em muitas outras situações. Serve mais para estimar volume tumoral do que para definir tipo. Não decide subtipo sozinha." data-hs-hint="Inespecífica · serve para volume tumoral.">
          <rect x="290" y="290" width="388" height="62" rx="9" fill="var(--bg-elevated-2)" stroke="var(--border-strong)" stroke-width="2"/>
          <text x="484" y="318" text-anchor="middle" class="svg-title" fill="var(--ink-90)" font-size="14">inespecífica nos dois subtipos</text>
          <text x="484" y="338" text-anchor="middle" class="svg-label" fill="var(--ink-70)">marca volume, não tipo</text>
        </g>

        <text x="40" y="396" class="svg-label" fill="var(--ink-50)" font-size="11">Leitura prognóstica: pré × pós-op · marcador que se mantém elevado após a cirurgia = doença residual / metástase.</text>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="tes7" aria-live="polite">
  <div class="hotspot-detail__label">Clique numa célula</div>
  <p class="hotspot-detail__text">A célula vermelha (AFP × seminoma) é a âncora: AFP alta exclui seminoma puro. A âmbar (β-hCG × seminoma) é a pegadinha. Toque cada uma para o percentual e a regra.</p>
</div>
```

---

## P8 — `tes8` · Dueto de vias cirúrgicas: inguinal (certa) × escrotal (proibida)

**Conceito visual:** dois corpos de perfil lado a lado, mesma anatomia (testículo + cordão até o anel inguinal interno). À esquerda, a via inguinal — incisão alta na virilha, cordão clampeado, marcada em verde (certa). À direita, a via escrotal — incisão na bolsa, com partículas de tumor "semeando" para a drenagem da pele (vermelho/proibida). Cada elemento clínico é hotspot. Conceito único: comparador anatômico de duas técnicas. Casado com "nunca pela bolsa".

**Ponto de inserção:** após o Tópico 2 (parágrafo "a alternativa errada é a que propõe incisão escrotal"), antes da peça de orquiectomia. (Tópico 3 — parcial — fica como hotspot adicional no painel da via certa.)

```html
<figure class="figure-svg">
  <figcaption><strong>Duas vias, um único certo.</strong> À esquerda, a inguinal: alta, clampeia o cordão antes de manipular. À direita, a escrotal: viola a bolsa e semeia o tumor. Clique, toque ou foque cada elemento.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="tes8" aria-live="polite">
      <svg class="il-tes8" data-eso="tes8" viewBox="0 0 760 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-tes8 d-tes8" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-tes8">Via inguinal versus via escrotal na orquiectomia</title>
        <desc id="d-tes8">Comparação de duas técnicas. À esquerda, a orquiectomia inguinal radical: incisão alta na virilha, no anel inguinal interno, com clampe do cordão espermático antes de manipular o tumor, marcada como correta em verde. À direita, a via escrotal: incisão na bolsa, mostrando partículas de tumor que se disseminam pela drenagem da pele, marcada como proibida em vermelho. Cada elemento é clicável.</desc>
        <rect x="0" y="0" width="760" height="460" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="42" class="svg-title" fill="var(--ink-100)" font-size="17">A via é inguinal. Pela bolsa, o tumor semeia.</text>
        <line x1="380" y1="70" x2="380" y2="430" stroke="var(--border-soft)" stroke-width="1.5" stroke-dasharray="5 6"/>

        <!-- ===== LADO ESQUERDO: via inguinal (certa) ===== -->
        <text x="190" y="92" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="14">Via inguinal radical ✓</text>
        <!-- corpo/abdome esquerdo esquemático -->
        <path d="M120 120 q70 -16 140 0 l0 230 q-70 22 -140 0 Z" fill="var(--teal-05)" stroke="var(--teal-40)" stroke-width="1.6"/>

        <!-- anel inguinal interno (hotspot) -->
        <g class="hs-shape" data-hs-label="Anel inguinal interno — o nível" data-hs-text="A orquiectomia inguinal radical retira o testículo junto com o cordão espermático, na altura do anel inguinal interno. O acesso é por inguinotomia, alto, respeitando a anatomia da drenagem da gônada. Cura altíssima: 80% a 90% dos casos localizados." data-hs-hint="Retira testículo + cordão até o anel interno.">
          <circle cx="200" cy="150" r="14" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="2.4"/>
          <text x="222" y="146" class="svg-label" fill="var(--ok-green)" font-size="11">anel inguinal</text>
          <text x="222" y="160" class="svg-label" fill="var(--ok-green)" font-size="11">interno</text>
        </g>

        <!-- cordão clampeado (hotspot) -->
        <g class="hs-shape" data-hs-label="Clampeia o cordão antes de manipular" data-hs-text="O detalhe técnico que protege: pesca-se o cordão espermático e clampeia-se PRIMEIRO, antes mesmo de manipular muito o tumor — justamente para minimizar a chance de semear metástase. É o oposto da abordagem que mexe na lesão antes de controlar a via de drenagem." data-hs-hint="Controla a via antes de tocar o tumor.">
          <line x1="200" y1="164" x2="200" y2="300" stroke="var(--ok-green)" stroke-width="4" stroke-linecap="round"/>
          <rect x="186" y="222" width="28" height="14" rx="3" fill="var(--ok-green)" stroke="var(--bg-base)" stroke-width="1.5"/>
          <text x="222" y="232" class="svg-label" fill="var(--ok-green)" font-size="11">clampe</text>
        </g>

        <!-- testículo retirado intacto (hotspot — inclui exceção parcial) -->
        <g class="hs-shape" data-hs-label="Testículo + cordão · exceção parcial" data-hs-text="Retira-se o testículo inteiro com o cordão, intacto pela via inguinal. A orquiectomia PARCIAL existe, mas é altamente controversa e raríssima em prova: só se aventa em tumores muito pequenos, testículo solitário ou tumores bilaterais. Fora disso, a resposta é a inguinal radical." data-hs-hint="Inteiro pela inguinal · parcial só em casos raros.">
          <ellipse cx="200" cy="324" rx="40" ry="32" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="2.4"/>
          <text x="200" y="328" text-anchor="middle" class="svg-label" fill="var(--ok-green)" font-size="11">testículo</text>
          <text x="200" y="394" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">cura 80–90%</text>
        </g>

        <!-- ===== LADO DIREITO: via escrotal (proibida) ===== -->
        <text x="570" y="92" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="14">Via escrotal ✗</text>
        <path d="M500 120 q70 -16 140 0 l0 230 q-70 22 -140 0 Z" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="1.6" opacity="0.55"/>

        <!-- incisão na bolsa (hotspot perigo) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Incisão na bolsa — proibida" data-hs-text="O erro que mata: incisar direto na bolsa escrotal. Manipular o tumor pela via escrotal pode aumentar muito a incidência de metástase e ainda contamina uma drenagem linfática diferente — a da pele escrotal, inguinal superficial — bagunçando o estadiamento. Por isso a via é sempre inguinal." data-hs-hint="Semeia metástase · contamina a drenagem da pele.">
          <line x1="540" y1="318" x2="600" y2="330" stroke="var(--err-red)" stroke-width="3.2" stroke-linecap="round"/>
          <ellipse cx="570" cy="324" rx="40" ry="32" fill="none" stroke="var(--err-red)" stroke-width="2.4" stroke-dasharray="6 4"/>
          <text x="570" y="328" text-anchor="middle" class="svg-label" fill="var(--err-red)" font-size="11">incisão escrotal</text>
        </g>

        <!-- partículas de tumor semeando (hotspot) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Disseminação — o tumor semeia" data-hs-text="Ao violar a bolsa, células tumorais escapam por uma rota que não deveria estar em jogo — a linfática da pele escrotal. O resultado é semeadura e aumento de metástase. 'Técnica cuidadosa' não corrige a via: o problema é a rota, não a habilidade. Biópsia ou punção transescrotal seguem a mesma proibição." data-hs-hint="Problema é a rota, não a técnica.">
          <circle cx="612" cy="356" r="5" fill="var(--err-red)"/>
          <circle cx="636" cy="378" r="4" fill="var(--err-red)"/>
          <circle cx="598" cy="384" r="3.4" fill="var(--err-red)"/>
          <circle cx="650" cy="356" r="3" fill="var(--err-red)"/>
          <path d="M584 350 l60 40" stroke="var(--err-red)" stroke-width="1.4" stroke-dasharray="3 4" opacity="0.7"/>
          <text x="570" y="408" text-anchor="middle" class="svg-label" fill="var(--err-red)" font-size="11">semeia para a drenagem da pele</text>
        </g>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="tes8" aria-live="polite">
  <div class="hotspot-detail__label">Clique num elemento</div>
  <p class="hotspot-detail__text">À esquerda, em verde, a via inguinal e seus passos protetores; à direita, em vermelho, a escrotal e por que ela semeia. Toque cada elemento para o detalhe técnico.</p>
</div>
```

---

## P9 — `tes9` · Balança de cura: localizado × metastático, ambos curáveis

**Conceito visual:** duas colunas de "destino" com um grande arco/medidor de cura por cima. Coluna 1 — localizado: orquiectomia → 80–90% cura (verde alto). Coluna 2 — metastático: o reflexo seria "óbito", mas a cisplatina puxa a barra de volta para o campo curável (verde), com uma seta de "resgate". Cada elemento é hotspot. Conceito único: medidor/gauge de prognóstico com resgate. Casado com "metástase não é atestado de óbito".

**Ponto de inserção:** após o Tópico 2 (parágrafo "Metástase aqui não é sinônimo de óbito").

```html
<figure class="figure-svg">
  <figcaption><strong>Um câncer que se cura.</strong> Localizado, a cirurgia resolve 80 a 90%. Metastático, a cisplatina puxa o prognóstico de volta para o campo curável. Clique, toque ou foque cada cenário.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="tes9" aria-live="polite">
      <svg class="il-tes9" data-eso="tes9" viewBox="0 0 760 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-tes9 d-tes9" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-tes9">Prognóstico do câncer de testículo: localizado e metastático</title>
        <desc id="d-tes9">Dois cenários. À esquerda, doença localizada tratada com orquiectomia inguinal radical, com cura de 80 a 90 por cento, em verde. À direita, doença metastática: a expectativa intuitiva de óbito é corrigida por uma seta de resgate da quimioterapia à base de cisplatina, que devolve o prognóstico ao campo curável. Cada cenário é clicável.</desc>
        <rect x="0" y="0" width="760" height="420" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="42" class="svg-title" fill="var(--ink-100)" font-size="17">Mesmo com metástase, este tumor não é atestado de óbito.</text>

        <!-- faixa de campo: curável (verde) em cima, sombrio embaixo -->
        <rect x="60" y="96" width="640" height="120" rx="10" fill="var(--ok-green-dim)" opacity="0.4"/>
        <rect x="60" y="216" width="640" height="120" rx="10" fill="var(--err-red-dim)" opacity="0.3"/>
        <text x="80" y="120" class="svg-label" fill="var(--ok-green)" font-size="11">CAMPO CURÁVEL</text>
        <text x="80" y="328" class="svg-label" fill="var(--err-red)" font-size="11">campo sombrio</text>

        <!-- localizado: barra alta no verde -->
        <g class="hs-shape" data-hs-label="Localizado — cura 80–90%" data-hs-text="Nos casos localizados, a orquiectomia inguinal radical cura 80% a 90%. É um dos cânceres sólidos de melhor prognóstico: a cirurgia resolve a maioria e o seguimento por marcador pega cedo quem recidiva. Por isso atraso ou via cirúrgica errada são tão graves — comprometem um resultado que seria excelente." data-hs-hint="Cirurgia resolve · marcador pega a recidiva cedo.">
          <rect x="150" y="110" width="120" height="216" rx="10" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="2.6"/>
          <text x="210" y="158" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="26" font-weight="700">80–90%</text>
          <text x="210" y="184" text-anchor="middle" class="svg-label" fill="var(--ink-90)">cura</text>
          <text x="210" y="356" text-anchor="middle" class="svg-label" fill="var(--ink-70)">localizado · orquiectomia</text>
        </g>

        <!-- metastático: barra que começa baixo (sombrio) e é resgatada para cima pela cisplatina -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Metástase — o reflexo errado" data-hs-text="A palavra 'metástase' dispara o reflexo de doença terminal — e leva ao erro de escrever 'mau prognóstico irreversível' ou de oferecer só cuidados paliativos. Mas este é um dos tumores sólidos mais quimiossensíveis: a metástase tem chance real." data-hs-hint="Não escreva 'óbito' nem 'só paliação'.">
          <rect x="470" y="244" width="120" height="82" rx="10" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="2.4"/>
          <text x="530" y="284" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="14">metástase</text>
          <text x="530" y="304" text-anchor="middle" class="svg-label" fill="var(--ink-70)">reflexo: óbito?</text>
        </g>

        <!-- seta de resgate: cisplatina puxa para o campo curável -->
        <g class="hs-shape" data-hs-label="Cisplatina — o resgate" data-hs-text="A quimioterapia à base de cisplatina tem resposta excelente no tumor germinativo metastático — a ponto de transformar o prognóstico da doença disseminada. A USP já cobrou isso em acesso direto: diante de metástase, lembrar que a cisplatina não deixa o paciente sem opção." data-hs-hint="QT base cisplatina · devolve ao curável (caiu na USP).">
          <path d="M530 240 C530 200 560 170 600 150" fill="none" stroke="var(--ok-green)" stroke-width="3.4" marker-end="url(#tes9-up)"/>
          <defs>
            <marker id="tes9-up" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="8" markerHeight="8" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--ok-green)"/>
            </marker>
          </defs>
          <rect x="556" y="116" width="128" height="40" rx="10" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="2.2"/>
          <text x="620" y="141" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="13">+ cisplatina</text>
          <text x="620" y="178" text-anchor="middle" class="svg-label" fill="var(--ok-green)" font-size="11">ainda curável</text>
        </g>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="tes9" aria-live="polite">
  <div class="hotspot-detail__label">Clique num cenário</div>
  <p class="hotspot-detail__text">A barra verde (localizado) já está no campo curável; a vermelha (metástase) é puxada de volta pela seta da cisplatina. Toque cada elemento para o porquê.</p>
</div>
```

---

## P10 — `tes10` · Trilho de decisão bifurcado: cirurgia → marcador pós-op → cai / mantém

**Conceito visual:** linha do tempo horizontal que parte da orquiectomia, chega num nó de decisão (marcador pós-op) e bifurca: ramo de cima (caiu → acompanha, verde) e ramo de baixo (mantido elevado → TC de abdome → tórax se indicado, coral/vermelho). Cada nó é hotspot. Conceito único: fluxo temporal bifurcado (decision rail), distinto da escada vertical de P5. Casado com "estadiar depois".

**Ponto de inserção:** após o Tópico 2 (parágrafo "a sequência opera → mede marcador → se mantido, imagem").

```html
<figure class="figure-svg">
  <figcaption><strong>A ordem invertida.</strong> Opera primeiro; o marcador pós-op decide o resto. Caiu, acompanha. Manteve, TC de abdome. Clique, toque ou foque cada decisão.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="tes10" aria-live="polite">
      <svg class="il-tes10" data-eso="tes10" viewBox="0 0 760 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-tes10 d-tes10" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-tes10">Sequência de estadiamento após a orquiectomia</title>
        <desc id="d-tes10">Linha do tempo horizontal. Começa na orquiectomia inguinal radical, segue para a dosagem do marcador tumoral no pós-operatório e bifurca: se o marcador caiu, o ramo superior em verde leva ao acompanhamento; se o marcador se manteve elevado, o ramo inferior em coral leva à tomografia de abdome com contraste e, em casos selecionados, do tórax. Cada nó é clicável.</desc>
        <defs>
          <marker id="tes10-arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="var(--border-strong)"/>
          </marker>
        </defs>
        <rect x="0" y="0" width="760" height="400" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="42" class="svg-title" fill="var(--ink-100)" font-size="17">Opera primeiro. O marcador pós-op decide o estadiamento.</text>

        <!-- trilho -->
        <line x1="120" y1="200" x2="330" y2="200" stroke="var(--border-strong)" stroke-width="2.5" marker-end="url(#tes10-arr)"/>
        <path d="M380 196 C430 196 440 130 500 130" fill="none" stroke="var(--ok-green)" stroke-width="2.5" marker-end="url(#tes10-arr)"/>
        <path d="M380 204 C430 204 440 280 500 280" fill="none" stroke="var(--coral-50)" stroke-width="2.5" marker-end="url(#tes10-arr)"/>

        <!-- orquiectomia -->
        <g class="hs-shape" data-hs-label="Orquiectomia — primeiro passo" data-hs-text="Aqui o tempo inverte a lógica habitual. Como não se pode perder tempo, a avaliação inicial é enxuta — USG + marcadores — e já se agenda a orquiectomia inguinal radical. O estadiamento por imagem vem DEPOIS. Na maioria dos cânceres se estadia antes de tratar; este é a exceção pedagógica." data-hs-hint="Avaliação enxuta · estadiamento vem depois.">
          <circle cx="90" cy="200" r="34" fill="var(--teal-40)" stroke="var(--teal-50)" stroke-width="2.4"/>
          <text x="90" y="196" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="11">orquiec-</text>
          <text x="90" y="210" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="11">tomia</text>
          <text x="90" y="256" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">1º passo</text>
        </g>

        <!-- nó de decisão: marcador pós-op -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Marcador pós-op — o nó de decisão" data-hs-text="Operar não é 'tchau e bença': o paciente segue em acompanhamento, sobretudo com dosagem de marcador tumoral pós-operatório (AFP, beta-hCG). O que ele faz a seguir é o que define a investigação — caiu como esperado, ótimo; não caiu, muda tudo." data-hs-hint="A curva do marcador comanda o próximo passo.">
          <path d="M360 200 l28 -32 l28 32 l-28 32 Z" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2.4"/>
          <text x="388" y="204" text-anchor="middle" class="svg-label" fill="var(--warn-amber)" font-size="11">marcador?</text>
          <text x="388" y="252" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">pós-op</text>
        </g>

        <!-- ramo CAIU (verde, acompanha) -->
        <g class="hs-shape" data-hs-label="Caiu — acompanhamento" data-hs-text="Se o marcador caiu como esperado após a cirurgia, é o sinal favorável: segue-se com acompanhamento, sem necessidade de imagem de estadiamento detalhada. A observação com marcador seriado serve a alguns estágios iniciais pós-orquiectomia." data-hs-hint="Queda esperada → só acompanha.">
          <rect x="506" y="106" width="184" height="48" rx="10" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="2.4"/>
          <text x="598" y="128" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="13">caiu → acompanha</text>
          <text x="598" y="146" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">marcador seriado</text>
        </g>

        <!-- ramo MANTEVE (coral → TC abdome → tórax) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Manteve elevado — TC de abdome" data-hs-text="O que dispara a imagem é o marcador que se manteve elevado após a cirurgia (ou o paciente que conviveu muito tempo com a lesão). Nesse cenário: TC de abdome total com contraste — o retroperitônio é o alvo da drenagem. A TC ou radiografia de tórax fica para casos selecionados, também guiada pelo marcador." data-hs-hint="Mantido elevado → TC de abdome (retroperitônio) → tórax se indicado.">
          <rect x="506" y="256" width="184" height="48" rx="10" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="2.4"/>
          <text x="598" y="278" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="13">manteve → TC abdome</text>
          <text x="598" y="296" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">+ tórax se indicado</text>
        </g>

        <text x="40" y="372" class="svg-label" fill="var(--ink-50)" font-size="11">Avaliação inicial = USG + marcador (rápido). Estadiamento = depois, guiado pelo marcador pós-op.</text>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="tes10" aria-live="polite">
  <div class="hotspot-detail__label">Clique numa decisão</div>
  <p class="hotspot-detail__text">O trilho parte da cirurgia, passa pelo losango do marcador e bifurca: verde (caiu, acompanha) ou coral (manteve, TC de abdome). Toque cada nó para a conduta.</p>
</div>
```

---

## P11 — `tes11` · Comparador 3 colunas: torção × orquiepididimite × tumor

**Conceito visual:** três colunas-cartão lado a lado (torção / orquiepididimite / tumor), cada uma um hotspot que, ao ser clicada, revela seu perfil de dor/início/febre/Prehn pelo painel detail. A coluna do tumor é a única "indolor" (verde de reconhecimento); as duas que doem em coral/âmbar. Embaixo, um quarto hotspot trap: o contraste criptorquidia (fator) × testículo retrátil (não-fator). Conceito único: comparador matricial clínico de 3 entidades. Casado com "se dói, desconfie".

**Ponto de inserção:** após o Tópico 2 (parágrafo "criptorquidia é"), antes do quiz.

```html
<figure class="figure-svg">
  <figcaption><strong>O que dói não é câncer.</strong> Torção e orquiepididimite doem; o tumor não. E a armadilha final: criptorquidia é fator de risco, testículo retrátil não é. Clique, toque ou foque cada coluna.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="tes11" aria-live="polite">
      <svg class="il-tes11" data-eso="tes11" viewBox="0 0 760 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-tes11 d-tes11" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-tes11">Diagnósticos diferenciais do câncer de testículo</title>
        <desc id="d-tes11">Três colunas comparativas: torção testicular com dor aguda súbita, orquiepididimite com dor inflamatória, febre e sinal de Prehn positivo, e tumor com massa indolor. Apenas o tumor é indolor, marcado em verde; os dois que doem em coral e âmbar. Abaixo, um contraste entre criptorquidia, que é fator de risco, e testículo retrátil, que não é. Cada coluna é clicável.</desc>
        <rect x="0" y="0" width="760" height="460" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="42" class="svg-title" fill="var(--ink-100)" font-size="17">Se o enunciado enfatiza dor, ele te empurra para fora do câncer.</text>

        <!-- coluna 1: torção (coral, dor aguda) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Torção testicular — dor aguda súbita" data-hs-text="Dor muito aguda, de início súbito, com outros sinais — uma emergência. Nada do quadro silencioso do tumor. Se o enunciado descreve dor escrotal aguda e intensa, o caminho é torção, não câncer." data-hs-hint="Dor súbita e intensa · emergência · não é câncer.">
          <rect x="48" y="86" width="208" height="240" rx="12" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="2.2"/>
          <text x="152" y="120" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="15">Torção</text>
          <text x="152" y="162" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="12">dor: AGUDA, súbita</text>
          <text x="152" y="190" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="12">início: minutos</text>
          <text x="152" y="218" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="12">febre: não</text>
          <text x="152" y="246" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="12">emergência</text>
          <text x="152" y="300" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="13">DÓI ✗</text>
        </g>

        <!-- coluna 2: orquiepididimite (âmbar/trap, febre + Prehn) -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Orquiepididimite — febre e Prehn positivo" data-hs-text="Quadro inflamatório/infeccioso: dor, podendo vir com febre e sintomas sistêmicos, e com sinal de Prehn POSITIVO — a dor ALIVIA ao elevar o testículo. Dor, febre ou alívio à elevação no enunciado: o caminho não é câncer." data-hs-hint="Inflamação · febre · Prehn + (alívio à elevação).">
          <rect x="276" y="86" width="208" height="240" rx="12" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2.2"/>
          <text x="380" y="120" text-anchor="middle" class="svg-title" fill="var(--warn-amber)" font-size="15">Orquiepididimite</text>
          <text x="380" y="162" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="12">dor: inflamatória</text>
          <text x="380" y="190" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="12">início: dias</text>
          <text x="380" y="218" text-anchor="middle" class="svg-label" fill="var(--warn-amber)" font-size="12">febre: SIM</text>
          <text x="380" y="246" text-anchor="middle" class="svg-label" fill="var(--warn-amber)" font-size="12">Prehn +</text>
          <text x="380" y="300" text-anchor="middle" class="svg-title" fill="var(--warn-amber)" font-size="13">DÓI ✗</text>
        </g>

        <!-- coluna 3: tumor (verde, indolor) -->
        <g class="hs-shape" data-hs-label="Tumor — massa indolor" data-hs-text="A massa do câncer NÃO dói: endurecida, bem delimitada, indolor, sem febre, sem Prehn. É o único dos três que não dói — e é justamente por isso que a banca usa a dor para desviar quem decorou sem entender. Sem dor, sem febre, início insidioso: pense câncer." data-hs-hint="Indolor · sem febre · sem Prehn · o único 'silencioso'.">
          <rect x="504" y="86" width="208" height="240" rx="12" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="2.4"/>
          <text x="608" y="120" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="15">Tumor</text>
          <text x="608" y="162" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="12">dor: INDOLOR</text>
          <text x="608" y="190" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="12">início: semanas</text>
          <text x="608" y="218" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="12">febre: não</text>
          <text x="608" y="246" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="12">Prehn: não</text>
          <text x="608" y="300" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="13">NÃO DÓI ✓</text>
        </g>

        <!-- faixa inferior: criptorquidia × retrátil -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Criptorquidia × testículo retrátil" data-hs-text="A armadilha mais elegante. Testículo RETRÁTIL desce e sobe, é extremamente benigno e NÃO é fator de risco. Não confunda com a CRIPTORQUIDIA — o testículo que NÃO desceu e ficou retido —, que É o grande fator (4–6×). Hérnia inguinal na infância e testículo retrátil não são fatores; criptorquidia é." data-hs-hint="Criptorquidia = não desceu = fator. Retrátil = desce e sobe = benigno.">
          <rect x="48" y="346" width="664" height="80" rx="12" fill="var(--bg-elevated-2)" stroke="var(--warn-amber)" stroke-width="2"/>
          <text x="200" y="380" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="13">Criptorquidia</text>
          <text x="200" y="402" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">não desceu → FATOR (4–6×)</text>
          <line x1="380" y1="356" x2="380" y2="416" stroke="var(--border-strong)" stroke-width="1.4" stroke-dasharray="4 4"/>
          <text x="552" y="380" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="13">Testículo retrátil</text>
          <text x="552" y="402" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">desce e sobe → benigno, não é fator</text>
        </g>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="tes11" aria-live="polite">
  <div class="hotspot-detail__label">Clique numa coluna</div>
  <p class="hotspot-detail__text">Duas colunas doem (torção, orquiepididimite); só o tumor é indolor (verde). A faixa de baixo separa criptorquidia (fator) de testículo retrátil (não-fator). Toque cada uma.</p>
</div>
```

---

## P12 — `tes12` · Mapa de conduta com as duas questões reais como hotspots

**Conceito visual:** o fluxo-síntese que vence 80% das questões, desenhado como uma faixa horizontal de 4 marcos (gatilho → USG+marcador → orquiectomia inguinal → estadiar depois), cada marco hotspot. Acima/abaixo, dois "selos de banca" (USP-RP e MP-PR) como hotspots extras que abrem o raciocínio resumido de cada questão real. Conceito único: mapa-de-conduta consolidado + selos de prova — não repete nenhum dos 11 anteriores. Casado com o fechamento.

**Ponto de inserção:** após o Tópico 1 (parágrafo "Essa sequência resolve 80% das questões"), antes do Tópico 2 que detalha as bancas (e os selos casam com o Tópico 2).

```html
<figure class="figure-svg">
  <figcaption><strong>A sequência que vence.</strong> Gatilho → USG + marcador → orquiectomia inguinal radical → estadiamento depois. Os dois selos são as questões reais. Clique, toque ou foque cada marco.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="tes12" aria-live="polite">
      <svg class="il-tes12" data-eso="tes12" viewBox="0 0 760 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-tes12 d-tes12" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-tes12">Sequência de conduta no câncer de testículo e as questões que a cobram</title>
        <desc id="d-tes12">Faixa horizontal com quatro marcos de conduta: reconhecer o gatilho clínico, fazer ultrassonografia mais marcadores, realizar a orquiectomia inguinal radical e estadiar depois. Acima e abaixo, dois selos de prova representam as questões reais da USP de Ribeirão Preto e do Ministério Público do Paraná, abrindo o raciocínio resumido de cada uma. Cada elemento é clicável.</desc>
        <defs>
          <marker id="tes12-arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="var(--ok-green)"/>
          </marker>
          <linearGradient id="tes12-rail" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="var(--teal-40)"/>
            <stop offset="100%" stop-color="var(--ok-green)"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="760" height="460" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="42" class="svg-title" fill="var(--ink-100)" font-size="17">Uma sequência resolve 80% das questões.</text>

        <!-- trilho -->
        <line x1="120" y1="240" x2="660" y2="240" stroke="url(#tes12-rail)" stroke-width="6" stroke-linecap="round"/>
        <line x1="245" y1="240" x2="270" y2="240" stroke="var(--ok-green)" stroke-width="6" marker-end="url(#tes12-arr)"/>
        <line x1="425" y1="240" x2="450" y2="240" stroke="var(--ok-green)" stroke-width="6" marker-end="url(#tes12-arr)"/>
        <line x1="555" y1="240" x2="580" y2="240" stroke="var(--ok-green)" stroke-width="6" marker-end="url(#tes12-arr)"/>

        <!-- marco 1: gatilho -->
        <g class="hs-shape" data-hs-label="Gatilho clínico" data-hs-text="O enunciado entrega: homem de 20 a 40 anos, criptorquidia, massa testicular indolor, endurecida e bem delimitada. Reconhecer esse conjunto cedo é o que separa quem resolve em segundos. Some o gatilho às pistas e a luz vermelha acende." data-hs-hint="Jovem + criptorquidia + massa indolor.">
          <circle cx="150" cy="240" r="34" fill="var(--teal-40)" stroke="var(--teal-50)" stroke-width="2.4"/>
          <text x="150" y="236" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="11">gatilho</text>
          <text x="150" y="250" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="11">clínico</text>
        </g>
        <!-- marco 2: USG + marcador -->
        <g class="hs-shape" data-hs-label="USG (bilateral, Doppler) + marcadores" data-hs-text="Avaliação inicial enxuta e rápida: ultrassonografia bilateral com Doppler e marcadores tumorais (AFP, beta-hCG, LDH). Quando o marcador está disponível, doso ANTES da cirurgia. Não retardar: tempo perdido é risco de metástase." data-hs-hint="USG bilateral + AFP/β-hCG · doso antes se disponível.">
          <circle cx="340" cy="240" r="38" fill="var(--teal-40)" stroke="var(--teal-50)" stroke-width="2.4"/>
          <text x="340" y="236" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="11">USG +</text>
          <text x="340" y="250" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="11">marcador</text>
        </g>
        <!-- marco 3: orquiectomia inguinal (a chave, verde) -->
        <g class="hs-shape" data-hs-label="Orquiectomia inguinal radical" data-hs-text="A conduta-rainha, que decide 80% das questões: orquiectomia inguinal radical com remoção do testículo e do cordão espermático, até o anel inguinal interno. Nunca por via escrotal — semeia metástase. Cura 80% a 90% nos casos localizados." data-hs-hint="Inguinal radical + cordão · nunca escrotal.">
          <circle cx="500" cy="240" r="40" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="2.8"/>
          <text x="500" y="232" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="11">orquiectomia</text>
          <text x="500" y="248" text-anchor="middle" class="svg-label" fill="var(--ok-green)" font-size="11">inguinal radical</text>
        </g>
        <!-- marco 4: estadiar depois -->
        <g class="hs-shape" data-hs-label="Estadiar depois" data-hs-text="O estadiamento vem DEPOIS, guiado pelo marcador pós-op: caiu, acompanha; manteve elevado, TC de abdome com contraste. Inverter essa ordem — estadiar antes de operar — atrasa um tumor que não pode esperar." data-hs-hint="Depois da cirurgia · guiado pelo marcador pós-op.">
          <circle cx="630" cy="240" r="34" fill="var(--teal-40)" stroke="var(--teal-50)" stroke-width="2.4"/>
          <text x="630" y="236" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="11">estadiar</text>
          <text x="630" y="250" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="11">depois</text>
        </g>

        <!-- selo USP-RP (acima) -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="USP–Ribeirão Preto" data-hs-text="Homem de 22 anos, trauma escrotal leve há 40 dias, criptorquidia, testículo aumentado, indolor, com nódulo endurecido. Suspeita e conduta: neoplasia testicular → USG + dosagem de AFP e beta-hCG. Os distratores trazem orquiepididimite e torção (que doem) e operar SEM dosar marcador antes — quando disponível, doso antes." data-hs-hint="USG + AFP/β-hCG · distratores que doem.">
          <rect x="220" y="92" width="240" height="56" rx="12" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2"/>
          <text x="340" y="118" text-anchor="middle" class="svg-title" fill="var(--warn-amber)" font-size="13">USP–Ribeirão Preto</text>
          <text x="340" y="138" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">→ USG + AFP e β-hCG</text>
          <line x1="340" y1="148" x2="340" y2="202" stroke="var(--warn-amber)" stroke-width="1.4" stroke-dasharray="4 4"/>
        </g>

        <!-- selo MP-PR (abaixo) -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="MP–Paraná" data-hs-text="A alternativa correta: o tratamento inicial é a orquiectomia inguinal radical com remoção do testículo e do cordão espermático. As erradas dizem que a TC de bolsa escrotal é a investigação inicial (é a USG), que acomete a quarta década (é 20–40), que se associa a tabagismo (não há associação) e que testículo retrátil/hérnia inguinal são fatores de risco (não são — quem é fator é a criptorquidia)." data-hs-hint="Resposta: orquiectomia inguinal radical · descarta as 4 erradas.">
          <rect x="380" y="332" width="240" height="56" rx="12" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2"/>
          <text x="500" y="358" text-anchor="middle" class="svg-title" fill="var(--warn-amber)" font-size="13">MP–Paraná</text>
          <text x="500" y="378" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">→ orquiectomia inguinal radical</text>
          <line x1="500" y1="332" x2="500" y2="278" stroke="var(--warn-amber)" stroke-width="1.4" stroke-dasharray="4 4"/>
        </g>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="tes12" aria-live="polite">
  <div class="hotspot-detail__label">Clique num marco</div>
  <p class="hotspot-detail__text">A faixa verde é a conduta que vence; o marco da orquiectomia inguinal é a chave. Os dois selos âmbar são as questões reais (USP-RP, MP-PR) — toque cada um para o raciocínio resumido.</p>
</div>
```

---

# Notas de integração ao Executor

- **Engine:** todos os 12 usam `initInteractive` via `.figure-svg__stage[data-hs-stage="tesN"]` + `.hs-shape` (o grupo desenhado é o alvo do clique/foco) + `.hotspot-detail[data-hs-detail-for="tesN"]`. Nenhum JS extra por SVG. O `testiculo-interactive.js` só é necessário se o Executor quiser comportamentos além do hotspot (não há aqui — tudo é hotspot canônico). Cada `<g class="hs-shape">` já carrega `data-hs-label`, `data-hs-text` e `data-hs-hint`; o engine injeta `role="button"`, `tabindex`, `aria-label` e os handlers de teclado/foco.
- **Tones:** `danger` → borda vermelha no painel + glow vermelho no shape ativo; `trap` → âmbar; sem tone → teal. "Bom/cura" foi resolvido com fill `--ok-green` no próprio shape (o engine não tem tone "good", e a CSS só estiliza danger/trap — coerente com o padrão da aula-04).
- **Tokens:** somente `var(--…)` existentes em `tokens.css`/`components.css` (`teal-*`, `coral-*`, `warn-amber*`, `err-red*`, `ok-green*`, `ink-*`, `bg-*`, `border-*`). Zero hex. Classes `svg-title`/`svg-label` já definidas no `components.css`.
- **Acessibilidade / fallback estático:** cada SVG tem `role="img"` + `<title>` + `<desc>` completos; os labels e percentuais estão desenhados como `<text>` visível (não dependem do hover) — sem JS, o aluno lê a figura inteira. O `<desc>` narra o conteúdo para leitor de tela. Sem SMIL; a única animação é a dica `hsHint` do CSS, já condicionada a `prefers-reduced-motion`.
- **Markers com `<defs>` internos:** P9, P10, P12 declaram `<marker>`/`<linearGradient>` com IDs prefixados (`tes9-up`, `tes10-arr`, `tes12-arr`, `tes12-rail`, etc.) para não colidir entre SVGs na mesma SPA. P5/P6 idem (`tes5-arrow`, `tes6-field`, `tes6-hetero`, `tes4-mass`). IDs únicos por aula.
- **Checagem Bauer (ensina sozinho):** cada figura tem título-tese visível no topo, achados rotulados in-place e figcaption que entrega a leitura — passa no critério "compreende sem clicar". O clique é aprofundamento, não pré-requisito.
- **Conceito visual único por página (anti-repetição):** P1 barra-empilhada-100% · P2 escada-log-de-risco · P3 dendrograma · P4 corte-bimanual-com-alvo · P5 rota-vertical-anatômica · P6 campo-USG-simulado · P7 matriz-de-células · P8 dueto-anatômico-de-vias · P9 medidor-de-prognóstico-com-resgate · P10 trilho-bifurcado-de-decisão · P11 comparador-3-colunas · P12 mapa-de-conduta-com-selos. Nenhum reusa a régua-de-tumores (aula-04) nem barras-paradoxo/cartograma (bexiga).
- **Posições de inserção:** declaradas por página acima (sempre entre os parágrafos de prosa a que o SVG dá forma, antes da `figure.med` quando há imagem real). O Executor mantém a ordem `prose → figure-svg → (figure.med | exceção) → asides → quiz`.
- **Pendência (não-ilustrador):** as 5 imagens reais (§8.2 do design) seguem para `buscador-imagem-medica-bauer`; as 7 exceções recebem `data-piso-img-exempt` no `<article>`. Isso não é trabalho do ilustrador.
```

