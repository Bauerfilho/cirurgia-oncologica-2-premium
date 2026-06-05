# SVGs profundos — Aula Extra 11 · Sarcomas

> 8 SVGs interativos (1 por página), engine canônica `initInteractive` (`.figure-svg__stage[data-hs-stage]` + `.hs-shape` + `.hotspot-detail[data-hs-detail-for]`).
> Naming: classe `.il-saN`, `data-eso="saN"`, `data-hs-stage="saN"` (sa = sarcoma; sa1..sa8). Tokens `var(--…)` only · sem hex · sem SMIL · `role="img"`+`<title>`/`<desc>` · fallback estático (texto/legenda/percentuais dentro do SVG).
> Convenção de cor: **teal** = baseline/bom/ressecável/margem livre · **coral/`--err-red`** = ruim/metástase/espalhar/recorrência/irressecável · **âmbar (trap)** = pegadinha/cautela · **`--ok-green`** = conduta certa/preservação/sem metástase.
> Tones do engine: `data-hs-tone="danger"` (perigo, borda vermelha) · `data-hs-tone="trap"` (pegadinha, borda âmbar) · sem tone (baseline, borda teal). "Bom/certo" usa fill `--ok-green` no próprio shape.
> Conceito visual único por página (anti-repetição vs aulas vizinhas): P1 pilha-de-cartões-pergunta · P2 silhueta-mapa-de-calor · P3 corpo-dividido-RM×TC · P4 bifurcação-de-rotas-vasculares · P5 lesão-em-corte-com-3-agulhas · P6 par-de-pernas-antes×agora · P7 espelho-de-condutas-2-colunas · P8 colinha-de-6-fatos. Nenhum reusa metáfora das extras 08/09/10.

---

## P1 — `sa1` · As três perguntas da banca (pilha de cartões-pergunta)

**Conceito visual:** três cartões empilhados, cada um uma pergunta-tipo da prova ("Onde aparece?" / "Qual o tipo histológico?" / "Como biopsiar?"). Cada cartão é o hotspot — o elemento desenhado é o alvo. Ao focar/ativar, o detail revela a resposta-âncora oculta (extremidades-coxa · lipossarcoma · core biópsia) que as próximas páginas desenvolvem. O cartão "Onde" recebe selo de mais frequente. Ensina o formato da prova antes do conteúdo.

**Ponto de inserção:** após o Tópico 3 ("As três perguntas que a banca repete"), antes do `op-summary`.

```html
<figure class="figure-svg">
  <figcaption><strong>O tema cabe em três perguntas.</strong> Onde aparece, qual a histologia, como se biopsia — nessa ordem de frequência. Cada cartão guarda a resposta-âncora que as próximas páginas desenvolvem. Clique, toque ou foque cada um.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="sa1" aria-live="polite">
      <svg class="il-sa1" data-eso="sa1" viewBox="0 0 760 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-sa1 d-sa1" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-sa1">As três perguntas de prova do sarcoma de partes moles</title>
        <desc id="d-sa1">Três cartões empilhados, cada um com uma pergunta que a banca repete, em ordem de frequência. Primeiro cartão, destacado como o mais frequente: onde o sarcoma aparece, com resposta-âncora extremidades e coxa. Segundo cartão: qual o tipo histológico mais comum, com resposta-âncora lipossarcoma no adulto. Terceiro cartão: como se obtém material para a histopatologia, com resposta-âncora core biópsia. Cada cartão é clicável.</desc>
        <rect x="0" y="0" width="760" height="430" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="44" class="svg-title" fill="var(--ink-100)" font-size="17">Três perguntas resolvem quase toda questão do tema.</text>
        <text x="40" y="66" class="svg-label" fill="var(--ink-70)">em ordem de frequência · clique em cada cartão para a resposta-âncora</text>

        <!-- cartão 1: ONDE (o mais frequente) -->
        <g class="hs-shape" data-hs-label="1ª pergunta — Onde aparece?" data-hs-text="A pergunta nº 1 do tema, a que mais cai: onde o sarcoma de partes moles aparece. Resposta-âncora: extremidades são a localização mais comum, e dentro delas a coxa lidera (proximais > distais). Quem responde isso na largada já acerta a maioria das questões de localização." data-hs-hint="A mais frequente · resposta: extremidades / coxa.">
          <rect x="48" y="96" width="664" height="92" rx="14" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="2.4"/>
          <circle cx="96" cy="142" r="22" fill="var(--teal-50)"/>
          <text x="96" y="148" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="18" font-weight="700">1</text>
          <text x="138" y="134" class="svg-title" fill="var(--ink-100)" font-size="16">Onde aparece?</text>
          <text x="138" y="160" class="svg-label" fill="var(--teal-80)" font-size="12">resposta-âncora → extremidades · coxa no topo</text>
          <rect x="560" y="116" width="132" height="26" rx="13" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="1.6"/>
          <text x="626" y="134" text-anchor="middle" class="svg-label" fill="var(--ok-green)" font-size="11">a mais frequente ★</text>
        </g>

        <!-- cartão 2: HISTOLOGIA -->
        <g class="hs-shape" data-hs-label="2ª pergunta — Qual o tipo histológico?" data-hs-text="A segunda pergunta mais comum: qual o tipo histológico mais frequente. Há mais de cem tipos num atlas de patologia, mas a prova só quer o campeão. Resposta-âncora: no adulto, lipossarcoma; na criança, rabdomiossarcoma alveolar. Não tente decorar os cem — guarde o mais comum." data-hs-hint="Resposta: lipossarcoma no adulto.">
          <rect x="48" y="204" width="664" height="92" rx="14" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="2"/>
          <circle cx="96" cy="250" r="22" fill="var(--teal-40)"/>
          <text x="96" y="256" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="18" font-weight="700">2</text>
          <text x="138" y="242" class="svg-title" fill="var(--ink-100)" font-size="16">Qual o tipo histológico?</text>
          <text x="138" y="268" class="svg-label" fill="var(--ink-70)" font-size="12">resposta-âncora → lipossarcoma (adulto)</text>
        </g>

        <!-- cartão 3: BIÓPSIA -->
        <g class="hs-shape" data-hs-label="3ª pergunta — Como biopsiar?" data-hs-text="A terceira pergunta de prova: como se obtém material para a histopatologia. Resposta-âncora: core biópsia, com agulha grossa (Tru-Cut), pegando o centro da lesão — mesma lógica da mama. A isca clássica é a PAAF (agulha fina), que aspira célula e não tipa o sarcoma." data-hs-hint="Resposta: core biópsia (agulha grossa) · não PAAF.">
          <rect x="48" y="312" width="664" height="92" rx="14" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="2"/>
          <circle cx="96" cy="358" r="22" fill="var(--teal-40)"/>
          <text x="96" y="364" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="18" font-weight="700">3</text>
          <text x="138" y="350" class="svg-title" fill="var(--ink-100)" font-size="16">Como biopsiar?</text>
          <text x="138" y="376" class="svg-label" fill="var(--ink-70)" font-size="12">resposta-âncora → core biópsia (agulha grossa)</text>
        </g>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="sa1" aria-live="polite">
  <div class="hotspot-detail__label">Clique num cartão</div>
  <p class="hotspot-detail__text">O cartão teal do topo (Onde) é a pergunta mais frequente; abaixo vêm histologia e biópsia. Toque cada um para ver a resposta-âncora que a próxima página desenvolve.</p>
</div>
```

---

## P2 — `sa2` · Mapa de localização (silhueta + mapa de calor)

**Conceito visual:** silhueta humana frontal com três zonas-hotspot — extremidades (membros, coxa pulsando como ponto mais quente), tronco (parede/dorso) e retroperitônio (centro abdominal, atrás). Gradiente de calor: extremidade quente (teal forte) → retroperitônio frio. Cada zona é hotspot no próprio contorno desenhado: ao focar, mostra o posto no ranking e, na extremidade, destaca coxa = mais comum / proximais > distais. Ensina o pódio espacialmente. A pegadinha "retroperitônio parece o mais comum mas é o 3º" fica explícita.

**Ponto de inserção:** após o Tópico 2 ("Dentro da extremidade: proximal e coxa"), antes do aside `mnemonic`.

```html
<figure class="figure-svg">
  <figcaption><strong>O pódio, no corpo.</strong> Quanto mais quente a zona, mais comum o sarcoma. A coxa é o ponto mais quente; o retroperitônio, frio — parece comum, mas é só o terceiro. Clique, toque ou foque cada região.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="sa2" aria-live="polite">
      <svg class="il-sa2" data-eso="sa2" viewBox="0 0 760 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-sa2 d-sa2" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-sa2">Mapa de localização do sarcoma de partes moles</title>
        <desc id="d-sa2">Silhueta humana frontal com mapa de calor de frequência. As extremidades, sobretudo a coxa, aparecem como a zona mais quente, em teal forte: a localização mais comum, com porções proximais acometidas mais que as distais. O tronco aparece em calor intermediário, como segundo lugar. O retroperitônio, no centro do abdome, aparece frio: terceiro lugar, apesar de parecer comum por viés de encaminhamento. Cada região é clicável.</desc>
        <defs>
          <radialGradient id="sa2-hot" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stop-color="var(--teal-60)"/>
            <stop offset="100%" stop-color="var(--teal-30)"/>
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="760" height="460" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="42" class="svg-title" fill="var(--ink-100)" font-size="17">Extremidade &gt; tronco &gt; retroperitônio. A coxa no topo.</text>

        <!-- silhueta base -->
        <g fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.5">
          <circle cx="300" cy="96" r="30"/>
          <path d="M270 128 q30 -10 60 0 q22 8 22 40 l0 96 q0 14 -10 18 l0 110 q0 10 -8 10 l-18 0 q-8 0 -8 -12 l-2 -86 l-2 86 q0 12 -8 12 l-18 0 q-8 0 -8 -10 l0 -110 q-10 -4 -10 -18 l0 -96 q0 -32 22 -40 Z"/>
          <path d="M256 176 l-30 96 q-4 12 6 16 q10 2 14 -10 l24 -78 Z"/>
          <path d="M344 176 l30 96 q4 12 -6 16 q-10 2 -14 -10 l-24 -78 Z"/>
        </g>

        <!-- extremidade: zona mais quente (coxa) -->
        <g class="hs-shape" data-hs-label="Extremidades · coxa — 1º lugar" data-hs-text="A localização mais comum de todas. Dentro da extremidade, as porções proximais (coxa, braço, ombro) são mais acometidas que as distais, e a coxa é o sítio específico campeão. Quando a banca lista 'tronco, cabeça, retroperitônio, extremidades' e pergunta a mais frequente, a resposta é extremidades — e se der opções dentro do membro, é a coxa." data-hs-hint="1º lugar · coxa no topo · proximais > distais.">
          <ellipse cx="276" cy="320" rx="26" ry="58" fill="url(#sa2-hot)" stroke="var(--teal-60)" stroke-width="2.4"/>
          <ellipse cx="324" cy="320" rx="26" ry="58" fill="url(#sa2-hot)" stroke="var(--teal-60)" stroke-width="1.6" opacity="0.8"/>
          <text x="300" y="416" text-anchor="middle" class="svg-title" fill="var(--teal-80)" font-size="13">coxa</text>
          <line x1="350" y1="320" x2="470" y2="300" stroke="var(--teal-50)" stroke-width="1.4" stroke-dasharray="4 4"/>
          <text x="478" y="296" class="svg-title" fill="var(--teal-80)" font-size="14">1º — extremidades</text>
          <text x="478" y="316" class="svg-label" fill="var(--ink-70)" font-size="12">coxa lidera · proximais &gt; distais</text>
        </g>

        <!-- tronco: 2º lugar (calor médio) -->
        <g class="hs-shape" data-hs-label="Tronco — 2º lugar" data-hs-text="O segundo endereço mais comum: o tronco — dorso, parede torácica e abdominal. Fica atrás das extremidades, à frente do retroperitônio. Em imagem, lembra que tronco já é região axial: a tomografia ganha da ressonância aqui." data-hs-hint="2º lugar · dorso/parede · imagem por TC.">
          <rect x="280" y="150" width="40" height="60" rx="10" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="2" opacity="0.85"/>
          <line x1="320" y1="172" x2="470" y2="170" stroke="var(--teal-50)" stroke-width="1.4" stroke-dasharray="4 4"/>
          <text x="478" y="166" class="svg-title" fill="var(--teal-80)" font-size="14">2º — tronco</text>
          <text x="478" y="186" class="svg-label" fill="var(--ink-70)" font-size="12">dorso e parede</text>
        </g>

        <!-- retroperitônio: 3º lugar, frio (pegadinha) -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Retroperitônio — 3º lugar (a pegadinha)" data-hs-text="Parece o mais comum quando se começa a estudar, mas NÃO é: é o terceiro. A percepção engana porque o retroperitônio é o que o cirurgião geral mais opera — viés de encaminhamento. O sarcoma de partes moles muitas vezes começa como 'lipoma' retirado num hospital comum, volta sarcoma no histopatológico e é encaminhado à onco; existe muito, só não fica no hospital geral." data-hs-hint="3º lugar · só parece comum (viés de encaminhamento).">
          <ellipse cx="300" cy="220" rx="22" ry="26" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2" stroke-dasharray="5 4"/>
          <line x1="278" y1="228" x2="156" y2="248" stroke="var(--warn-amber)" stroke-width="1.4" stroke-dasharray="4 4"/>
          <text x="148" y="244" text-anchor="end" class="svg-title" fill="var(--warn-amber)" font-size="14">3º — retroperitônio</text>
          <text x="148" y="264" text-anchor="end" class="svg-label" fill="var(--ink-70)" font-size="12">parece comum, mas não é</text>
        </g>

        <!-- escala de calor -->
        <text x="478" y="372" class="svg-label" fill="var(--ink-50)" font-size="11">calor = frequência</text>
        <rect x="478" y="382" width="180" height="12" rx="6" fill="url(#sa2-hot)"/>
        <text x="478" y="412" class="svg-label" fill="var(--teal-80)" font-size="10">quente = comum</text>
        <text x="658" y="412" text-anchor="end" class="svg-label" fill="var(--ink-50)" font-size="10">frio = raro</text>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="sa2" aria-live="polite">
  <div class="hotspot-detail__label">Clique numa região</div>
  <p class="hotspot-detail__text">A coxa é o ponto mais quente (1º); o tronco vem em segundo; o retroperitônio é frio (3º) — só parece comum por viés de encaminhamento. Toque cada zona para o posto e o porquê.</p>
</div>
```

---

## P3 — `sa3` · RM × TC por sítio (corpo dividido) + par histológico

**Conceito visual:** corpo dividido em duas leituras. Na extremidade, um painel "RM" aceso (teal/bom); no tronco e no retroperitônio (axial), um painel "TC" aceso. A RM "apaga" quando a lesão entra na cavidade — mostrado por um painel RM riscado sobre o axial. Hotspot em cada região ensina o critério (não só o nome). Uma faixa inferior carrega o segundo par em tensão: lipossarcoma (adulto) × rabdomiossarcoma alveolar (criança), cada um hotspot. Dois pares decididos por critérios diferentes (sítio × idade).

**Ponto de inserção:** após o Tópico 3 ("Na criança, o rabdomiossarcoma"), antes do aside `dont-confuse`.

```html
<figure class="figure-svg">
  <figcaption><strong>Dois pares, dois critérios.</strong> Imagem: a localização decide — RM na extremidade, TC no tronco e no retroperitônio. Histologia: a idade decide — lipossarcoma no adulto, rabdomiossarcoma na criança. Clique, toque ou foque cada bloco.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="sa3" aria-live="polite">
      <svg class="il-sa3" data-eso="sa3" viewBox="0 0 760 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-sa3 d-sa3" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-sa3">Exame de imagem por sítio e tipo histológico por idade no sarcoma</title>
        <desc id="d-sa3">À esquerda, uma extremidade com painel de ressonância magnética aceso, em teal: a RM avalia melhor as partes moles. À direita, o tronco e o retroperitônio com painel de tomografia aceso e um painel de ressonância riscado, indicando que a RM perde qualidade na região axial, onde a TC ganha. Em baixo, um par histológico: lipossarcoma para o adulto e rabdomiossarcoma alveolar para a criança. Cada bloco é clicável.</desc>
        <rect x="0" y="0" width="760" height="460" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="42" class="svg-title" fill="var(--ink-100)" font-size="17">Quem escolhe a imagem é o sítio. Quem escolhe a histologia é a idade.</text>

        <!-- bloco extremidade → RM -->
        <g class="hs-shape" data-hs-label="Extremidade → RM" data-hs-text="Na extremidade, a ressonância magnética avalia muito melhor as partes moles: define planos, músculo, gordura e a relação com os vasos. É o exame de localização da coxa, do braço, do ombro. Regra curta: extremidade igual a RM." data-hs-hint="RM define planos de partes moles na extremidade.">
          <rect x="48" y="78" width="320" height="156" rx="14" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="2.4"/>
          <ellipse cx="108" cy="156" rx="22" ry="50" fill="var(--bg-elevated-2)" stroke="var(--teal-60)" stroke-width="2"/>
          <circle cx="108" cy="150" r="14" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="1.6"/>
          <text x="200" y="116" class="svg-title" fill="var(--ink-100)" font-size="15">Extremidade</text>
          <rect x="158" y="132" width="78" height="30" rx="8" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="1.8"/>
          <text x="197" y="152" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="15">RM</text>
          <text x="158" y="190" class="svg-label" fill="var(--teal-80)" font-size="12">melhor para partes moles</text>
          <text x="158" y="210" class="svg-label" fill="var(--ink-70)" font-size="11">planos · músculo · gordura · vasos</text>
        </g>

        <!-- bloco axial → TC (RM apagada) -->
        <g class="hs-shape" data-hs-label="Tronco / retroperitônio → TC" data-hs-text="A ressonância não é tão boa para ver lesão na região axial, lá dentro da cavidade. Por isso, no tronco e no retroperitônio, a tomografia ganha o primeiro lugar. O painel da RM 'apaga' quando a lesão entra na cavidade — quem escolhe TC por hábito ('TC para tumor') só acerta aqui por sorte; o critério é o sítio." data-hs-hint="TC ganha na região axial · a RM 'apaga' na cavidade.">
          <rect x="392" y="78" width="320" height="156" rx="14" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="2.4"/>
          <rect x="452" y="120" width="58" height="72" rx="8" fill="var(--bg-elevated-2)" stroke="var(--coral-60)" stroke-width="2"/>
          <circle cx="481" cy="156" r="14" fill="var(--coral-50)" stroke="var(--err-red)" stroke-width="1.6"/>
          <text x="540" y="116" class="svg-title" fill="var(--ink-100)" font-size="15">Tronco / retro</text>
          <rect x="540" y="132" width="78" height="30" rx="8" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="1.8"/>
          <text x="579" y="152" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="15">TC</text>
          <rect x="626" y="132" width="70" height="30" rx="8" fill="none" stroke="var(--border-mid)" stroke-width="1.6"/>
          <text x="661" y="152" text-anchor="middle" class="svg-label" fill="var(--ink-50)" font-size="14">RM</text>
          <line x1="630" y1="158" x2="692" y2="136" stroke="var(--err-red)" stroke-width="2.2"/>
          <text x="540" y="190" class="svg-label" fill="var(--coral-80)" font-size="12">melhor na região axial</text>
          <text x="540" y="210" class="svg-label" fill="var(--ink-70)" font-size="11">RM perde qualidade na cavidade</text>
        </g>

        <!-- faixa histologia: lipossarcoma × rabdomiossarcoma -->
        <text x="40" y="284" class="svg-title" fill="var(--ink-100)" font-size="14">Tipo histológico mais comum — decidido pela idade</text>
        <g class="hs-shape" data-hs-label="Adulto → lipossarcoma" data-hs-text="Há mais de cem tipos histológicos num atlas de patologia, cada um ainda variando em alto e baixo grau. Mas para a prova só importa o mais comum: no adulto, o lipossarcoma. É a perguntinha que vem logo depois da localização — 'qual o principal tipo histológico do sarcoma?' → lipossarcoma." data-hs-hint="Adulto = lipossarcoma (o campeão de prova).">
          <rect x="48" y="300" width="320" height="120" rx="14" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="2.2"/>
          <text x="208" y="340" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="15">Adulto</text>
          <text x="208" y="372" text-anchor="middle" class="svg-title" fill="var(--teal-80)" font-size="18" font-weight="700">lipossarcoma</text>
          <text x="208" y="398" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">o mais comum · entre 100+ tipos</text>
        </g>
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Criança → rabdomiossarcoma alveolar" data-hs-text="A contrapartida pediátrica é o rabdomiossarcoma alveolar. É a informação de reserva — raramente cai, mas se cair (adulto × criança), o par muda: lipossarcoma no adulto, rabdomiossarcoma na criança. Guardar o segundo nome custa pouco e fecha a comparação." data-hs-hint="Criança = rabdomiossarcoma alveolar (raro em prova).">
          <rect x="392" y="300" width="320" height="120" rx="14" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2.2"/>
          <text x="552" y="340" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="15">Criança</text>
          <text x="552" y="372" text-anchor="middle" class="svg-title" fill="var(--warn-amber)" font-size="16" font-weight="700">rabdomiossarcoma</text>
          <text x="552" y="394" text-anchor="middle" class="svg-label" fill="var(--warn-amber)" font-size="12">alveolar</text>
          <text x="552" y="412" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">reserva · raro em prova</text>
        </g>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="sa3" aria-live="polite">
  <div class="hotspot-detail__label">Clique num bloco</div>
  <p class="hotspot-detail__text">Em cima, a imagem por sítio (RM na extremidade, TC no axial — a RM 'apaga' na cavidade). Embaixo, a histologia por idade (lipossarcoma no adulto, rabdomiossarcoma na criança). Toque cada bloco.</p>
</div>
```

---

## P4 — `sa4` · Duas rotas, dois órgãos (bifurcação vascular)

**Conceito visual:** diagrama de duas vias de drenagem partindo de origens diferentes. À esquerda, tumor do TGI → sistema porta → fígado, com o "filtro" da primeira passagem hepática marcado. À direita, sarcoma de partes moles → circulação sistêmica (sem porta) → pulmão. O fígado da rota do sarcoma fica apagado/riscado (não é o destino). Hotspot na bifurcação e em cada órgão-alvo ensina o mecanismo vascular que decide o órgão. SVG-clímax conceitual da página.

**Ponto de inserção:** após o Tópico 2 ("O destino é o pulmão — e o porquê"), antes do Tópico 3 / `board-wants`.

```html
<figure class="figure-svg">
  <figcaption><strong>Por que pulmão e não fígado.</strong> O tumor do TGI passa pelo sistema porta e cai no fígado. O sarcoma vai direto à circulação sistêmica, sem primeira passagem hepática — e o filtro seguinte é o pulmão. Clique, toque ou foque cada via.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="sa4" aria-live="polite">
      <svg class="il-sa4" data-eso="sa4" viewBox="0 0 760 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-sa4 d-sa4" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-sa4">Rotas de metástase: tumor do TGI ao fígado e sarcoma ao pulmão</title>
        <desc id="d-sa4">Duas vias de disseminação. À esquerda, o tumor do trato gastrointestinal drena pelo sistema porta e sofre primeira passagem hepática, então metastatiza para o fígado. À direita, o sarcoma de partes moles cai direto na circulação sistêmica, sem primeira passagem hepática, e metastatiza para o pulmão; o fígado nessa rota aparece riscado, pois não é o destino. Cada via e cada órgão-alvo são clicáveis.</desc>
        <defs>
          <marker id="sa4-arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="var(--border-strong)"/>
          </marker>
          <marker id="sa4-arr-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="var(--err-red)"/>
          </marker>
        </defs>
        <rect x="0" y="0" width="760" height="460" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="42" class="svg-title" fill="var(--ink-100)" font-size="17">A via vascular decide o órgão da metástase.</text>

        <!-- divisória -->
        <line x1="380" y1="80" x2="380" y2="420" stroke="var(--border-soft)" stroke-width="1.2" stroke-dasharray="6 6"/>
        <text x="190" y="74" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="12">tumor do TGI</text>
        <text x="570" y="74" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="12">sarcoma de partes moles</text>

        <!-- ROTA TGI: origem → porta → fígado -->
        <rect x="120" y="92" width="140" height="40" rx="10" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.8"/>
        <text x="190" y="117" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="12">tumor digestivo</text>
        <line x1="190" y1="132" x2="190" y2="186" stroke="var(--border-strong)" stroke-width="2.4" marker-end="url(#sa4-arr)"/>

        <g class="hs-shape" data-hs-label="Sistema porta — primeira passagem hepática" data-hs-text="Os tumores do trato gastrointestinal drenam pelo sistema porta. Antes de chegar à circulação geral, o sangue venoso passa pelo fígado — a primeira passagem hepática. É esse 'filtro' que faz o fígado ser o primeiro destino das metástases dos tumores do TGI." data-hs-hint="Drenagem porta → o sangue passa pelo fígado primeiro.">
          <rect x="116" y="196" width="148" height="44" rx="10" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="2.2"/>
          <text x="190" y="216" text-anchor="middle" class="svg-title" fill="var(--teal-80)" font-size="12">sistema porta</text>
          <text x="190" y="232" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="10">1ª passagem hepática</text>
        </g>
        <line x1="190" y1="240" x2="190" y2="296" stroke="var(--border-strong)" stroke-width="2.4" marker-end="url(#sa4-arr)"/>

        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Fígado — destino do TGI" data-hs-text="Por causa da primeira passagem hepática, o fígado é o sítio típico de metástase dos tumores do trato gastrointestinal. É exatamente o contraste que a banca cobra: o sarcoma NÃO segue esse caminho." data-hs-hint="Fígado = destino do tumor digestivo (não do sarcoma).">
          <path d="M130 308 q60 -22 120 0 q12 30 -6 52 q-54 18 -108 0 q-18 -22 -6 -52 Z" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="2.4"/>
          <text x="190" y="346" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="16">fígado</text>
          <text x="190" y="392" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">destino do TGI</text>
        </g>

        <!-- ROTA SARCOMA: origem → sistêmica → pulmão (fígado riscado) -->
        <rect x="500" y="92" width="140" height="40" rx="10" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.8"/>
        <text x="570" y="117" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="12">sarcoma (coxa)</text>
        <line x1="570" y1="132" x2="570" y2="186" stroke="var(--err-red)" stroke-width="2.4" marker-end="url(#sa4-arr-red)"/>

        <g class="hs-shape" data-hs-label="Circulação sistêmica — sem primeira passagem" data-hs-text="O sarcoma de partes moles não drena pela porta: cai direto na circulação sistêmica, sem efeito de primeira passagem hepática. Sem o 'filtro' do fígado no caminho, o sangue leva as células direto ao próximo grande leito capilar — o pulmão. É a lógica vascular que decide o órgão-alvo." data-hs-hint="Sem porta → pula o fígado → próximo filtro é o pulmão.">
          <rect x="496" y="196" width="148" height="44" rx="10" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="2.2"/>
          <text x="570" y="216" text-anchor="middle" class="svg-title" fill="var(--teal-80)" font-size="12">circulação sistêmica</text>
          <text x="570" y="232" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="10">sem 1ª passagem hepática</text>
        </g>
        <!-- desvio que pula o fígado riscado -->
        <path d="M570 240 q0 30 -42 38" fill="none" stroke="var(--border-soft)" stroke-width="1.8" stroke-dasharray="5 4"/>
        <g opacity="0.6">
          <path d="M468 290 q34 -12 68 0 q8 18 -4 32 q-30 10 -60 0 q-12 -14 -4 -32 Z" fill="none" stroke="var(--ink-50)" stroke-width="1.6"/>
          <line x1="470" y1="288" x2="538" y2="322" stroke="var(--err-red)" stroke-width="2.2"/>
          <text x="504" y="338" text-anchor="middle" class="svg-label" fill="var(--ink-50)" font-size="10">fígado: pulado</text>
        </g>
        <line x1="570" y1="240" x2="570" y2="296" stroke="var(--err-red)" stroke-width="2.4" marker-end="url(#sa4-arr-red)"/>

        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Pulmão — destino do sarcoma" data-hs-text="O sítio principal de metástase do sarcoma de partes moles é o pulmão. A consequência prática é direta: todo paciente com sarcoma faz estadiamento com TC de tórax, atrás da disseminação que realmente importa — não TC de abdome procurando fígado primeiro." data-hs-hint="Pulmão = destino do sarcoma → TC de tórax no estadiamento.">
          <path d="M540 304 q-14 0 -16 18 l-4 56 q-2 16 14 16 q14 0 16 -16 l2 -50 q14 4 14 4 q0 0 14 -4 l2 50 q2 16 16 16 q16 0 14 -16 l-4 -56 q-2 -18 -16 -18 q-14 0 -26 6 q-12 -6 -26 -6 Z" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="2.4"/>
          <text x="570" y="402" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="16">pulmão</text>
          <text x="570" y="420" text-anchor="middle" class="svg-label" fill="var(--err-red)" font-size="11">→ TC de tórax em todos</text>
        </g>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="sa4" aria-live="polite">
  <div class="hotspot-detail__label">Clique numa via</div>
  <p class="hotspot-detail__text">À esquerda, o tumor digestivo passa pela porta e cai no fígado. À direita, o sarcoma pula o fígado (riscado), cai na circulação sistêmica e vai ao pulmão — por isso o estadiamento é TC de tórax. Toque cada etapa.</p>
</div>
```

---

## P5 — `sa5` · Fina × grossa: onde cada agulha pega (lesão em corte)

**Conceito visual:** corte de uma lesão de partes moles com periferia e centro marcados. Três instrumentos como hotspots no próprio desenho: agulha fina (PAAF) tocando a periferia, riscada/vermelha ("aspira célula, não tipa"); agulha grossa (core/Tru-Cut) cravando o centro, verde ("fragmento do miolo = diagnóstico"); incisional pegando um pedaço periférico, âmbar ("plano B"). Ao focar, explica por que serve ou não. Ensina o conceito centro × periferia. Um selo de gatilho (>5 cm ou profundo) abre o que torna o caroço investigável.

**Ponto de inserção:** após o Tópico 3 ("Não é PAAF — e o plano B é a incisional"), antes do aside `trap`.

```html
<figure class="figure-svg">
  <figcaption><strong>O diagnóstico está no miolo.</strong> A agulha grossa (core) crava o centro e traz fragmento que tipa o sarcoma; a fina (PAAF) só raspa a periferia e aspira célula. Clique, toque ou foque cada agulha — e o gatilho de investigar.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="sa5" aria-live="polite">
      <svg class="il-sa5" data-eso="sa5" viewBox="0 0 760 450" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-sa5 d-sa5" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-sa5">Técnicas de biópsia no sarcoma de partes moles: core, PAAF e incisional</title>
        <desc id="d-sa5">Corte de uma lesão de partes moles com centro e periferia marcados. Uma agulha grossa, a core ou Tru-Cut, crava o centro e traz fragmento de tecido, em verde, primeira escolha. Uma agulha fina, a PAAF, toca apenas a periferia e aspira células, em vermelho e riscada, sendo a errada para tipar o sarcoma. A biópsia incisional, em âmbar, retira um pedaço periférico como plano B. Acima, um selo indica o gatilho da investigação: tumor maior que cinco centímetros ou profundo e aderido. Cada elemento é clicável.</desc>
        <rect x="0" y="0" width="760" height="450" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="42" class="svg-title" fill="var(--ink-100)" font-size="17">Core pega o centro. PAAF raspa a periferia — e não tipa.</text>

        <!-- selo gatilho -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Gatilho — investigar quando >5 cm ou profundo/aderido" data-hs-text="Nem todo caroço se biopsia: a maioria é lipoma benigno e fica em observação tranquila. Investiga-se só o suspeito — tumor com mais de 5 cm, ou que à palpação está profundo, aderido, esquisito. É o gatilho que tira o caroço da categoria 'lipoma' e o coloca em avaliação histopatológica." data-hs-hint="Gatilho: >5 cm OU profundo/aderido (o resto é lipoma).">
          <rect x="430" y="80" width="282" height="58" rx="12" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2"/>
          <text x="571" y="106" text-anchor="middle" class="svg-title" fill="var(--warn-amber)" font-size="13">Gatilho para investigar</text>
          <text x="571" y="126" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">&gt; 5 cm  ·  profundo / aderido</text>
        </g>

        <!-- lesão em corte: periferia + centro -->
        <ellipse cx="240" cy="262" rx="150" ry="130" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="2"/>
        <text x="240" y="138" text-anchor="middle" class="svg-label" fill="var(--ink-50)" font-size="11">lesão de partes moles — corte</text>
        <ellipse cx="240" cy="262" rx="150" ry="130" fill="none" stroke="var(--warn-amber)" stroke-width="1.4" stroke-dasharray="5 5" opacity="0.7"/>
        <text x="240" y="170" text-anchor="middle" class="svg-label" fill="var(--warn-amber)" font-size="11">periferia (pode não representar)</text>

        <!-- centro (alvo do core) -->
        <g class="hs-shape" data-hs-label="Core biópsia (agulha grossa, Tru-Cut) — o centro" data-hs-text="A melhor biópsia: core, com agulha grossa (Tru-Cut), cravando o CENTRO da lesão. Mesma lógica do tumor de mama. E por que o centro? Porque a periferia pode não representar o tumor; o material diagnóstico está no miolo. Traz fragmento de tecido suficiente para tipar o sarcoma — é a primeira escolha." data-hs-hint="Agulha grossa no centro = fragmento que tipa o sarcoma.">
          <circle cx="240" cy="262" r="56" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="2.6"/>
          <text x="240" y="258" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="13">centro</text>
          <text x="240" y="278" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">o miolo diagnóstico</text>
          <!-- agulha grossa cravando o centro -->
          <rect x="300" y="200" width="120" height="10" rx="3" transform="rotate(28 360 205)" fill="var(--ok-green)" stroke="var(--ok-green)"/>
          <text x="436" y="186" class="svg-title" fill="var(--ok-green)" font-size="13">core / Tru-Cut</text>
          <text x="436" y="204" class="svg-label" fill="var(--ink-70)" font-size="11">agulha grossa · 1ª escolha</text>
        </g>

        <!-- PAAF na periferia (riscada, vermelha) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="PAAF (agulha fina) — a isca" data-hs-text="A isca clássica de prova: a agulha FINA, a PAAF (punção aspirativa por agulha fina). Não é ela — a fina apenas aspira células, não dá fragmento de tecido suficiente para tipar o sarcoma. Soa menos invasiva e por isso atrai, mas é justamente a errada para diagnosticar sarcoma." data-hs-hint="Fina = aspira célula, não tipa · é a pegadinha.">
          <line x1="120" y1="150" x2="172" y2="206" stroke="var(--err-red)" stroke-width="3" stroke-linecap="round"/>
          <circle cx="172" cy="206" r="5" fill="var(--err-red)"/>
          <line x1="118" y1="158" x2="176" y2="200" stroke="var(--err-red)" stroke-width="2.2"/>
          <text x="64" y="150" class="svg-title" fill="var(--err-red)" font-size="13">PAAF</text>
          <text x="64" y="168" class="svg-label" fill="var(--err-red)" font-size="11">fina · só periferia ✗</text>
        </g>

        <!-- incisional (plano B, âmbar) -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Biópsia incisional — plano B" data-hs-text="O plano B, quando não há core disponível: a biópsia incisional pega um fragmento de tecido, mas costuma colher da periferia — por isso é segunda escolha, não primeira. Resolve quando não dá para fazer a core, mas o ideal segue sendo o fragmento do centro." data-hs-hint="Plano B · pega fragmento periférico · 2ª escolha.">
          <path d="M232 388 l-16 0 q-8 0 -8 -10 l0 -28 q0 -8 10 -8 l24 0 z" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2"/>
          <text x="240" y="412" text-anchor="middle" class="svg-label" fill="var(--warn-amber)" font-size="11">incisional → fragmento periférico (plano B)</text>
        </g>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="sa5" aria-live="polite">
  <div class="hotspot-detail__label">Clique numa agulha</div>
  <p class="hotspot-detail__text">A core (verde) crava o centro e traz fragmento que tipa o sarcoma; a PAAF (vermelha) só raspa a periferia; a incisional (âmbar) é o plano B. E o gatilho de investigar é &gt;5 cm ou profundo. Toque cada elemento.</p>
</div>
```

---

## P6 — `sa6` · Antes × agora: a margem que salvou o membro (par de pernas)

**Conceito visual:** duas pernas lado a lado. À esquerda (passado, vermelho): linha de amputação alta, membro perdido. À direita (atual, verde): só o tumor removido com um halo de margem de 1-2 cm marcado, membro intacto. Hotspot na linha de amputação, no halo de margem e num seletor de adjuvância (>5 cm / alto grau / avançado → radioquimio). Ensina por que a margem substituiu a amputação.

**Ponto de inserção:** após o Tópico 3 ("Quando entra a radioquimioterapia adjuvante"), antes do aside `mnemonic`.

```html
<figure class="figure-svg">
  <figcaption><strong>A margem que substituiu a amputação.</strong> Antes, sarcoma de coxa significava perder a perna. Hoje, tira-se só o tumor com 1-2 cm de margem livre — mesmo controle, membro preservado. Clique, toque ou foque cada elemento.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="sa6" aria-live="polite">
      <svg class="il-sa6" data-eso="sa6" viewBox="0 0 760 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-sa6 d-sa6" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-sa6">Da amputação à preservação de membro no sarcoma de extremidade</title>
        <desc id="d-sa6">Duas pernas lado a lado. À esquerda, a conduta antiga, em vermelho: uma linha de amputação alta retira o membro inteiro. À direita, a conduta atual, em verde: apenas o tumor é removido, cercado por um halo de margem livre de um a dois centímetros, e o membro permanece intacto. Em baixo, um seletor indica os gatilhos da radioquimioterapia adjuvante: tumor maior que cinco centímetros, alto grau ou doença avançada. Cada elemento é clicável.</desc>
        <rect x="0" y="0" width="760" height="460" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="42" class="svg-title" fill="var(--ink-100)" font-size="17">"Sarcoma na coxa = amputar a perna" — era verdade, e mudou.</text>

        <text x="190" y="78" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="14">Antigamente</text>
        <text x="570" y="78" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="14">Hoje</text>
        <line x1="380" y1="92" x2="380" y2="356" stroke="var(--border-soft)" stroke-width="1.2" stroke-dasharray="6 6"/>

        <!-- perna ANTES (amputação) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Antigamente — amputação do membro" data-hs-text="Antigamente, sarcoma de coxa significava amputação. O tumor tem grande disseminação hematogênica e o medo da disseminação justificava arrancar o membro inteiro. Era a regra — e foi abandonada quando se viu que a margem livre dava o mesmo controle sem mutilar." data-hs-hint="Conduta antiga · medo da disseminação hematogênica.">
          <path d="M170 100 q40 0 44 30 l6 200 q2 18 -16 18 l-30 0 q-16 0 -16 -18 l-12 -200 q0 -30 30 -30 Z" fill="var(--bg-elevated-2)" stroke="var(--coral-60)" stroke-width="2"/>
          <circle cx="186" cy="170" r="20" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="1.6"/>
          <!-- linha de amputação alta -->
          <line x1="120" y1="150" x2="248" y2="150" stroke="var(--err-red)" stroke-width="3.4" stroke-dasharray="9 6"/>
          <text x="120" y="142" class="svg-title" fill="var(--err-red)" font-size="12">corte de amputação</text>
          <path d="M150 250 l72 0 l0 8 l-72 0 Z" fill="var(--err-red-dim)" opacity="0.5"/>
          <text x="186" y="372" text-anchor="middle" class="svg-label" fill="var(--err-red)" font-size="12">membro perdido</text>
        </g>

        <!-- perna AGORA (margem + membro intacto) -->
        <g class="hs-shape" data-hs-label="Hoje — margem livre de 1-2 cm, membro preservado" data-hs-text="Tentou-se preservar e alguém ressecou apenas o tumor, com margem livre — o resultado foi ótimo: paciente livre de doença por muito tempo, mais de 5 anos. A preservação só funciona com margem livre: pelo menos 1 a 2 cm de tecido são ao redor do tumor. É a margem que substitui a amputação. Ressecção radical aqui significa tirar o tumor com margem oncológica e poupar a função, não 'tirar tudo'." data-hs-hint="1-2 cm de margem livre = mesmo controle, membro fica.">
          <path d="M550 100 q40 0 44 30 l6 200 q2 18 -16 18 l-30 0 q-16 0 -16 -18 l-12 -200 q0 -30 30 -30 Z" fill="var(--bg-elevated-2)" stroke="var(--ok-green)" stroke-width="2.2"/>
          <!-- halo de margem -->
          <circle cx="568" cy="180" r="32" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="2" stroke-dasharray="5 4"/>
          <circle cx="568" cy="180" r="18" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="1.6"/>
          <text x="568" y="184" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="9">tumor</text>
          <line x1="600" y1="180" x2="664" y2="170" stroke="var(--ok-green)" stroke-width="1.4" stroke-dasharray="4 4"/>
          <text x="668" y="166" class="svg-title" fill="var(--ok-green)" font-size="12">margem 1-2 cm</text>
          <text x="668" y="184" class="svg-label" fill="var(--ink-70)" font-size="10">tecido são ao redor</text>
          <text x="568" y="372" text-anchor="middle" class="svg-label" fill="var(--ok-green)" font-size="12">membro preservado ✓</text>
        </g>

        <!-- seletor de adjuvância -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Adjuvância — >5 cm, alto grau ou avançado" data-hs-text="A sequência é ressecar primeiro e decidir adjuvância pelo estágio. Faz-se radioquimioterapia adjuvante quando o tumor é maior que 5 cm, de alto grau na histopatologia, ou já avançado (disseminação à distância). Fora desses gatilhos, a cirurgia com margem livre pode bastar — adjuvância não é automática." data-hs-hint="Radioquimio só se >5 cm OU alto grau OU avançado.">
          <rect x="48" y="378" width="664" height="58" rx="12" fill="var(--bg-elevated-2)" stroke="var(--warn-amber)" stroke-width="2"/>
          <text x="68" y="404" class="svg-title" fill="var(--warn-amber)" font-size="13">Radioquimioterapia adjuvante quando:</text>
          <rect x="356" y="390" width="100" height="32" rx="8" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="1.4"/>
          <text x="406" y="411" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="12">&gt; 5 cm</text>
          <rect x="466" y="390" width="110" height="32" rx="8" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="1.4"/>
          <text x="521" y="411" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="12">alto grau</text>
          <rect x="586" y="390" width="110" height="32" rx="8" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="1.4"/>
          <text x="641" y="411" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="12">avançado</text>
        </g>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="sa6" aria-live="polite">
  <div class="hotspot-detail__label">Clique num elemento</div>
  <p class="hotspot-detail__text">À esquerda, a amputação antiga (vermelho); à direita, só o tumor com halo de margem de 1-2 cm e o membro intacto (verde). A faixa de baixo traz os gatilhos da adjuvância. Toque cada um.</p>
</div>
```

---

## P7 — `sa7` · Partes moles × retroperitônio — o espelho da conduta

**Conceito visual:** duas colunas comparativas (o SVG-clímax da página). Coluna esquerda (partes moles, teal/neutro): biopsia SIM, radioterapia SIM, ressecção com margem. Coluna direita (retroperitônio, vermelho-alerta): biopsia NÃO (células se espalhando), radioterapia NÃO (vísceras na frente), ressecção EM BLOCO (tumor + rim juntos). Cada linha de comparação é hotspot — ao focar, explica por que a regra inverte. Um sub-hotspot na massa colada ao rim e uma faixa com o diferencial pré-op (LDH→linfoma, βHCG+AFP→TCG).

**Ponto de inserção:** após o Tópico 3 ("O exame do pano verde e a ressecção em bloco"), antes do Tópico 4 / `board-wants`.

```html
<figure class="figure-svg">
  <figcaption><strong>Mesmo tumor, conduta espelhada.</strong> Em partes moles biopsia e radioterapia. No retroperitônio, biopsia não (espalha) e radioterapia não (vísceras na frente). Trocar uma regra pela outra é o erro que a banca arma. Clique, toque ou foque cada linha.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="sa7" aria-live="polite">
      <svg class="il-sa7" data-eso="sa7" viewBox="0 0 760 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-sa7 d-sa7" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-sa7">Espelho de conduta: sarcoma de partes moles versus de retroperitônio</title>
        <desc id="d-sa7">Duas colunas comparativas. À esquerda, partes moles, em teal: biópsia sim por core, radioterapia possível e ressecção com margem. À direita, retroperitônio, em vermelho: não se biopsia porque espalha células pela cavidade, não se faz radioterapia porque as vísceras estão na frente, e a ressecção é em bloco, retirando o rim junto quando invadido. Uma faixa inferior traz o diferencial pré-operatório: LDH para linfoma e betaHCG mais alfafetoproteína para tumor de células germinativas. Cada linha é clicável.</desc>
        <rect x="0" y="0" width="760" height="480" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="42" class="svg-title" fill="var(--ink-100)" font-size="17">A regra inverte do membro para a cavidade.</text>

        <!-- cabeçalhos de coluna -->
        <rect x="48" y="60" width="320" height="36" rx="10" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="2"/>
        <text x="208" y="84" text-anchor="middle" class="svg-title" fill="var(--teal-80)" font-size="14">Partes moles</text>
        <rect x="392" y="60" width="320" height="36" rx="10" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="2"/>
        <text x="552" y="84" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="14">Retroperitônio</text>

        <!-- linha 1: BIÓPSIA -->
        <text x="40" y="128" class="svg-label" fill="var(--ink-50)" font-size="11">biópsia</text>
        <g class="hs-shape" data-hs-label="Partes moles — biopsia (core) SIM" data-hs-text="Em partes moles biopsia-se, porque dá para pegar material sem espalhar: a core biópsia, com agulha grossa, traz o fragmento do centro e tipa o sarcoma. É a regra que vale no membro e no tronco." data-hs-hint="Core biópsia sim · dá para tipar sem espalhar.">
          <rect x="48" y="110" width="320" height="56" rx="10" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="2"/>
          <text x="208" y="134" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="14">biopsia SIM</text>
          <text x="208" y="154" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">core (agulha grossa)</text>
        </g>
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Retroperitônio — biopsia NÃO (espalha)" data-hs-text="Aqui a regra de partes moles se inverte. No retroperitônio, biopsiar tem alta chance de espalhar células neoplásicas pela cavidade — e isso não se faz. O diagnóstico é feito só com a TC de abdome, sem confirmação histopatológica prévia. Transportar a regra de partes moles (biopsiar) para cá é o erro." data-hs-hint="Não biopsia · a punção espalha células · diagnóstico só por TC.">
          <rect x="392" y="110" width="320" height="56" rx="10" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="2.2"/>
          <text x="552" y="134" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="14">biopsia NÃO</text>
          <text x="552" y="154" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">espalha células · só TC</text>
          <circle cx="500" cy="138" r="2.4" fill="var(--err-red)"/><circle cx="610" cy="126" r="2.4" fill="var(--err-red)"/><circle cx="640" cy="150" r="2.4" fill="var(--err-red)"/><circle cx="486" cy="152" r="2.4" fill="var(--err-red)"/>
        </g>

        <!-- linha 2: RADIOTERAPIA -->
        <text x="40" y="200" class="svg-label" fill="var(--ink-50)" font-size="11">radioterapia</text>
        <g class="hs-shape" data-hs-label="Partes moles — radioterapia possível" data-hs-text="Em partes moles a radioterapia faz parte do arsenal: a radioquimioterapia adjuvante entra quando o tumor é maior que 5 cm, de alto grau ou avançado. O campo no membro não tem vísceras nobres atravessando, então a radiação é viável." data-hs-hint="RT possível · adjuvância nos gatilhos (>5 cm/alto grau).">
          <rect x="48" y="182" width="320" height="56" rx="10" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="2"/>
          <text x="208" y="206" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="14">radioterapia SIM</text>
          <text x="208" y="226" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">adjuvante nos gatilhos</text>
        </g>
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Retroperitônio — radioterapia NÃO (vísceras na frente)" data-hs-text="Não se faz radioterapia no retroperitônio: há todas as vísceras do peritônio na frente do campo, que a radiação queimaria. Sem radioterapia, a quimioterapia isolada perde força — daí a recorrência altíssima. A cada recorrência, um novo implante; entra-se de novo e resseca-se de novo, às vezes três vezes em 10 anos." data-hs-hint="Sem RT (vísceras na frente) → quimio fraca → recorre muito.">
          <rect x="392" y="182" width="320" height="56" rx="10" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="2.2"/>
          <text x="552" y="206" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="14">radioterapia NÃO</text>
          <text x="552" y="226" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">vísceras na frente · recorre muito</text>
        </g>

        <!-- linha 3: RESSECÇÃO (com sub-alvo rim) -->
        <text x="40" y="272" class="svg-label" fill="var(--ink-50)" font-size="11">ressecção</text>
        <g class="hs-shape" data-hs-label="Partes moles — ressecção com margem" data-hs-text="Em partes moles, ressecção radical com preservação de membro e margem livre de 1 a 2 cm. Tira o tumor com margem oncológica e poupa a função — não amputa." data-hs-hint="Ressecção com margem de 1-2 cm · preserva o membro.">
          <rect x="48" y="254" width="320" height="62" rx="10" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="2"/>
          <text x="208" y="280" text-anchor="middle" class="svg-title" fill="var(--teal-80)" font-size="14">margem 1-2 cm</text>
          <text x="208" y="300" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">preserva o membro</text>
        </g>
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Retroperitônio — ressecção em bloco (invadiu o rim, tira o rim)" data-hs-text="Identificada a massa na TC, tipicamente colada ao rim e já o invadindo, o grande exame passa a ser o 'exame do pano verde' — levar para a sala. O tratamento é a ressecção em bloco (en bloc): tira o tumor e tudo o que ele invadir. Invadiu o rim? Tira o rim (quase regra). Pegou bexiga, intestino, veia porta? Tira e reconstrói. A única coisa que não se tira é o que não dá: invadiu a aorta, não se resseca a aorta. O lipossarcoma é o histológico mais comum aqui, seguido do leiomiossarcoma." data-hs-hint="En bloc: tumor + rim juntos · não se tira só a aorta.">
          <rect x="392" y="254" width="320" height="62" rx="10" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="2.2"/>
          <text x="500" y="280" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="14">em bloco</text>
          <text x="500" y="300" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">invadiu o rim → tira o rim</text>
          <!-- tumor colado ao rim -->
          <path d="M636 270 q22 -8 30 8 q6 18 -10 28 q-22 6 -30 -10 q-4 -16 10 -26 Z" fill="var(--bg-elevated-2)" stroke="var(--coral-60)" stroke-width="1.8"/>
          <circle cx="668" cy="286" r="11" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="1.6"/>
          <text x="651" y="262" text-anchor="middle" class="svg-label" fill="var(--ink-50)" font-size="9">rim + tumor</text>
        </g>

        <!-- faixa diferencial pré-op -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Diferencial pré-operatório — LDH e βHCG+AFP" data-hs-text="Antes de chamar de sarcoma uma massa volumosa de retroperitônio, afaste dois diferenciais por exames de sangue. Se for linfoma, o LDH levanta a suspeita. Se for tumor de células germinativas (TCG), fecha-se com βHCG e alfafetoproteína — a mesma dupla de marcadores dos germinativos de testículo (mesma linhagem). Esses dois exames simples evitam levar à sala o que se trata clinicamente." data-hs-hint="LDH → linfoma · βHCG + AFP → tumor de células germinativas.">
          <rect x="48" y="334" width="664" height="62" rx="12" fill="var(--bg-elevated-2)" stroke="var(--warn-amber)" stroke-width="2"/>
          <text x="68" y="360" class="svg-title" fill="var(--warn-amber)" font-size="13">Antes de chamar de sarcoma — afaste com sangue:</text>
          <rect x="356" y="346" width="160" height="38" rx="8" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="1.4"/>
          <text x="436" y="364" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="11">LDH ↑</text>
          <text x="436" y="378" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="10">→ linfoma</text>
          <rect x="526" y="346" width="170" height="38" rx="8" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="1.4"/>
          <text x="611" y="364" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="11">βHCG + AFP</text>
          <text x="611" y="378" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="10">→ tumor germinativo</text>
        </g>
        <text x="40" y="430" class="svg-label" fill="var(--ink-50)" font-size="11">Mesma linhagem histológica nos dois sítios — condutas opostas. Reconhecer de qual a banca fala muda tudo.</text>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="sa7" aria-live="polite">
  <div class="hotspot-detail__label">Clique numa linha</div>
  <p class="hotspot-detail__text">Coluna teal = partes moles (biopsia, RT, margem); coluna vermelha = retroperitônio (não biopsia, sem RT, em bloco com o rim). A faixa âmbar traz o diferencial pré-op (LDH; βHCG+AFP). Toque cada linha para ver por que a regra inverte.</p>
</div>
```

---

## P8 — `sa8` · Cola de prova: sarcoma em 6 fatos (colinha-síntese)

**Conceito visual:** quadro-resumo interativo em layout de "colinha", com seis fatos como hotspots: (1) localização → coxa; (2) histologia adulto → lipossarcoma; (3) metástase → pulmão; (4) biópsia → core; (5) tratamento partes moles → preservação de membro; (6) desmoide → localmente agressivo, sem metástase, PAF/Gardner. Ao focar cada fato, expande o micro-lembrete completo. É o mapa-síntese da aula inteira. O fato 6 (desmoide) carrega o contraste com o sarcoma e os fatores gestação + PAF/Gardner.

**Ponto de inserção:** após o Tópico 3 ("A checklist de prova — onde isso cai"), antes do aside `mnemonic`. (P8 pode usar `data-piso-img-exempt="sintese-svg-soberano"` no `<article>` se não houver imagem real distinta do desmoide — decisão do Executor/Buscador, não do ilustrador.)

```html
<figure class="figure-svg">
  <figcaption><strong>Sarcoma em seis fatos.</strong> Três respostas-relâmpago de partes moles, a rota da metástase, o tratamento e o desmoide. Cada quadro guarda o micro-lembrete que fecha o tema. Clique, toque ou foque cada fato.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="sa8" aria-live="polite">
      <svg class="il-sa8" data-eso="sa8" viewBox="0 0 760 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-sa8 d-sa8" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-sa8">Síntese de prova do sarcoma em seis fatos</title>
        <desc id="d-sa8">Seis quadros-resumo. Localização mais comum: coxa. Tipo histológico no adulto: lipossarcoma. Sítio de metástase: pulmão. Melhor biópsia: core, agulha grossa, pegando o centro. Tratamento de partes moles: ressecção com preservação de membro e margem de um a dois centímetros. Tumor desmoide: localmente agressivo, sem metástase, associado a gestação e à polipose adenomatosa familiar com a síndrome de Gardner. Cada quadro é clicável.</desc>
        <rect x="0" y="0" width="760" height="460" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="44" class="svg-title" fill="var(--ink-100)" font-size="17">Tendo estes seis fatos, o tema está dominado.</text>
        <text x="40" y="66" class="svg-label" fill="var(--ink-70)">Jundiaí ama sarcoma · também caiu em UERJ e Santa Catarina · clique em cada fato</text>

        <!-- fato 1: localização → coxa -->
        <g class="hs-shape" data-hs-label="Localização mais comum — coxa" data-hs-text="A pergunta nº 1 do tema. Localização mais comum do sarcoma de partes moles: extremidades, e dentro delas a coxa lidera (proximais > distais). Pódio: extremidade > tronco > retroperitônio. Cuidado com a pegadinha — o retroperitônio só parece o mais comum por viés de encaminhamento." data-hs-hint="Coxa · extremidade > tronco > retroperitônio.">
          <rect x="48" y="86" width="218" height="108" rx="12" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="2.2"/>
          <text x="66" y="112" class="svg-label" fill="var(--teal-80)" font-size="11">1 · onde</text>
          <text x="66" y="142" class="svg-title" fill="var(--ink-100)" font-size="20" font-weight="700">coxa</text>
          <text x="66" y="170" class="svg-label" fill="var(--ink-70)" font-size="11">extremidade &gt; tronco &gt; retro</text>
        </g>

        <!-- fato 2: histologia → lipossarcoma -->
        <g class="hs-shape" data-hs-label="Histologia no adulto — lipossarcoma" data-hs-text="A segunda pergunta de prova. Tipo histológico mais comum no adulto: lipossarcoma. Na criança, rabdomiossarcoma alveolar. No retroperitônio especificamente, lipossarcoma seguido de leiomiossarcoma. Há 100+ tipos no atlas, mas a prova só quer o campeão." data-hs-hint="Adulto = lipossarcoma · criança = rabdomiossarcoma.">
          <rect x="272" y="86" width="218" height="108" rx="12" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="2.2"/>
          <text x="290" y="112" class="svg-label" fill="var(--teal-80)" font-size="11">2 · histologia</text>
          <text x="290" y="142" class="svg-title" fill="var(--ink-100)" font-size="18" font-weight="700">lipossarcoma</text>
          <text x="290" y="170" class="svg-label" fill="var(--ink-70)" font-size="11">adulto · (criança: rabdomio)</text>
        </g>

        <!-- fato 3: metástase → pulmão -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Metástase — pulmão" data-hs-text="O sarcoma só mata com metástase, e ela vai para o pulmão — não para o fígado, porque não passa pelo sistema porta (sem primeira passagem hepática). Por isso o estadiamento é TC de tórax em todo paciente." data-hs-hint="Pulmão (não fígado) → TC de tórax no estadiamento.">
          <rect x="496" y="86" width="216" height="108" rx="12" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="2.2"/>
          <text x="514" y="112" class="svg-label" fill="var(--coral-80)" font-size="11">3 · metástase</text>
          <text x="514" y="142" class="svg-title" fill="var(--err-red)" font-size="20" font-weight="700">pulmão</text>
          <text x="514" y="170" class="svg-label" fill="var(--ink-70)" font-size="11">não fígado · TC de tórax</text>
        </g>

        <!-- fato 4: biópsia → core -->
        <g class="hs-shape" data-hs-label="Biópsia — core (centro do tumor)" data-hs-text="A terceira pergunta de prova. Melhor biópsia: core, agulha grossa (Tru-Cut), pegando o CENTRO do tumor — a incisional pega a periferia (plano B). A PAAF (agulha fina) é a isca: aspira célula e não tipa o sarcoma. Investiga-se só caroço >5 cm ou profundo/aderido." data-hs-hint="Core = agulha grossa, centro · ≠ PAAF (periferia).">
          <rect x="48" y="206" width="218" height="108" rx="12" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="2.2"/>
          <text x="66" y="232" class="svg-label" fill="var(--teal-80)" font-size="11">4 · biópsia</text>
          <text x="66" y="262" class="svg-title" fill="var(--ink-100)" font-size="20" font-weight="700">core</text>
          <text x="66" y="290" class="svg-label" fill="var(--ink-70)" font-size="11">centro · não PAAF</text>
        </g>

        <!-- fato 5: tratamento → preservação de membro -->
        <g class="hs-shape" data-hs-label="Tratamento partes moles — preservação de membro" data-hs-text="Tratamento de partes moles: ressecção radical com preservação de membro e margem livre de 1-2 cm (não se amputa mais). Radioquimioterapia adjuvante só nos gatilhos: >5 cm, alto grau ou avançado." data-hs-hint="Preserva o membro · margem 1-2 cm · adjuvância nos gatilhos.">
          <rect x="272" y="206" width="218" height="108" rx="12" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="2.2"/>
          <text x="290" y="232" class="svg-label" fill="var(--ok-green)" font-size="11">5 · tratamento</text>
          <text x="290" y="262" class="svg-title" fill="var(--ok-green)" font-size="16" font-weight="700">preserva membro</text>
          <text x="290" y="290" class="svg-label" fill="var(--ink-70)" font-size="11">margem 1-2 cm</text>
        </g>

        <!-- fato 6: desmoide -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Tumor desmoide — agressivo local, sem metástase" data-hs-text="O fechamento. O tumor desmoide é localmente agressivo — invade tudo em volta —, mas NÃO dá metástase (nem hematogênica, nem linfática, nem hepática). É o que o separa do sarcoma. Localiza em partes moles (extremidades, tronco, cicatriz). Fatores de risco: gestação e polipose adenomatosa familiar (PAF), incluindo a síndrome de Gardner. Diagnóstico por core/incisional; trata como partes moles, com preservação da função." data-hs-hint="Invade local mas NÃO metastatiza · gestação · PAF/Gardner.">
          <rect x="496" y="206" width="216" height="108" rx="12" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="2.2"/>
          <text x="514" y="232" class="svg-label" fill="var(--warn-amber)" font-size="11">6 · desmoide</text>
          <text x="514" y="258" class="svg-title" fill="var(--ink-100)" font-size="13">agressivo local,</text>
          <text x="514" y="276" class="svg-title" fill="var(--ok-green)" font-size="13">sem metástase</text>
          <text x="514" y="298" class="svg-label" fill="var(--warn-amber)" font-size="11">gestação · PAF/Gardner</text>
        </g>

        <!-- rodapé: contraste sarcoma × desmoide -->
        <rect x="48" y="328" width="664" height="64" rx="12" fill="var(--bg-elevated-2)" stroke="var(--border-mid)" stroke-width="1.6"/>
        <text x="80" y="356" class="svg-title" fill="var(--coral-80)" font-size="13">Sarcoma</text>
        <text x="80" y="378" class="svg-label" fill="var(--ink-70)" font-size="11">dissemina → metástase pulmonar</text>
        <line x1="380" y1="338" x2="380" y2="382" stroke="var(--border-strong)" stroke-width="1.4" stroke-dasharray="4 4"/>
        <text x="412" y="356" class="svg-title" fill="var(--ok-green)" font-size="13">Desmoide</text>
        <text x="412" y="378" class="svg-label" fill="var(--ink-70)" font-size="11">invade local mas NÃO metastatiza</text>
        <text x="40" y="424" class="svg-label" fill="var(--ink-50)" font-size="11">Três relâmpagos: coxa · lipossarcoma · core. Mais a rota (pulmão) e o desmoide. Tema fechado.</text>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="sa8" aria-live="polite">
  <div class="hotspot-detail__label">Clique num fato</div>
  <p class="hotspot-detail__text">Seis quadros: coxa, lipossarcoma, pulmão, core, preservação de membro e desmoide. Os três primeiros são as respostas-relâmpago de partes moles; o último separa desmoide (invade, não metastatiza) do sarcoma. Toque cada um para o micro-lembrete.</p>
</div>
```

---

# Notas de integração ao Executor

- **Engine:** todos os 8 usam `initInteractive` via `.figure-svg__stage[data-hs-stage="saN"]` + `.hs-shape` (o grupo desenhado é o alvo do clique/foco) + `.hotspot-detail[data-hs-detail-for="saN"]`. Nenhum JS extra por SVG. Cada `<g class="hs-shape">` carrega `data-hs-label`, `data-hs-text` e `data-hs-hint`; o engine injeta `role="button"`, `tabindex`, `aria-label`/`aria-expanded`/`aria-pressed` e os handlers de teclado/foco.
- **Tones:** `danger` → borda vermelha no painel + glow vermelho no shape ativo; `trap` → âmbar; sem tone → teal. "Bom/certo" foi resolvido com fill `--ok-green` no próprio shape (o engine não tem tone "good", e a CSS estiliza danger/trap — coerente com o padrão das extras 08/09).
- **Tokens:** somente `var(--…)` existentes em `tokens.css`/`components.css` (`teal-*`, `coral-*`, `warn-amber*`, `err-red*`, `ok-green*`, `ink-*`, `bg-elevated`/`bg-elevated-2`, `border-*`). Zero hex. Classes `svg-title`/`svg-label` já definidas no `components.css`.
- **Acessibilidade / fallback estático:** cada SVG tem `role="img"` + `<title>` + `<desc>` completos; labels, percentuais e setas estão desenhados como `<text>`/`<path>` visíveis (não dependem do hover) — sem JS, o aluno lê a figura inteira; o `<desc>` narra o conteúdo para leitor de tela. Sem SMIL; a única animação é a dica `hsHint` do CSS, já condicionada a `prefers-reduced-motion`.
- **Markers/gradients com `<defs>` internos:** P2 (`sa2-hot`), P4 (`sa4-arr`, `sa4-arr-red`) declaram IDs prefixados por aula para não colidir com os `tesN`/`mdN` de outras aulas na mesma SPA. IDs únicos por aula (`sa…`).
- **Checagem Bauer (ensina sozinho):** cada figura tem título-tese visível no topo, achados rotulados in-place e figcaption que entrega a leitura — passa no critério "compreende sem clicar". O clique é aprofundamento, não pré-requisito.
- **Conceito visual único por página (anti-repetição):** P1 pilha-de-cartões-pergunta · P2 silhueta-mapa-de-calor · P3 corpo-dividido-RM×TC + par-histológico · P4 bifurcação-de-rotas-vasculares · P5 lesão-em-corte-com-3-agulhas · P6 par-de-pernas-antes×agora · P7 espelho-de-condutas-2-colunas · P8 colinha-de-6-fatos. Nenhum reusa metáfora das extras 08 (barra-empilhada, escada-log, dendrograma, alvo-bimanual, rota-vertical, campo-USG, matriz, dueto-de-vias, balança, trilho-bifurcado, comparador-3-colunas, mapa-de-conduta-com-selos).
- **Posições de inserção:** declaradas por página acima (entre os parágrafos de prosa a que o SVG dá forma, antes da `figure.med` quando há imagem real). O Executor mantém a ordem `prose → figure-svg → (figure.med | exceção) → asides → quiz`.
- **PAF × PAAF (desambiguação ASR §1 do design):** P5 usa **PAAF** (punção aspirativa por agulha fina); P8 usa **PAF** (polipose adenomatosa familiar). Os textos dos hotspots já trazem a forma por extenso para não confundir.
- **Pendência (não-ilustrador):** as 6+ imagens reais (§7 do design) seguem para `buscador-imagem-medica-bauer`; a exceção de P8 (`data-piso-img-exempt="sintese-svg-soberano"`) é decisão do Executor/Buscador. Não é trabalho do ilustrador.
```
