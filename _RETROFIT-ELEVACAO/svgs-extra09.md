# SVGs profundos — Aula Extra 9 · Oncologia Pediátrica

> 9 SVGs interativos (1 por página, P1..P9), engine canônica `initInteractive` (`.figure-svg__stage[data-hs-stage]` + `.hs-shape` + `.hotspot-detail[data-hs-detail-for]`).
> Naming: classe `.il-opN`, `data-eso="opN"`, `data-hs-stage="opN"` (op = onco-pediátrica). Tokens `var(--…)` only · sem hex · sem SMIL · `role="img"`+`<title>`/`<desc>` · fallback estático (texto/legenda dentro do SVG).
> Convenção de cor: **teal** = bom prognóstico / regra que acerta / Wilms-bem · **coral** = perigo / pegadinha / neuroblastoma-doente / mau prognóstico · **âmbar (trap)** = pegadinha de enunciado · **verde (`--ok-green`)** = conduta correta / desfecho favorável · **vermelho (`--err-red`)** = perigo máximo / fator que arruína.
> Tones do engine: `data-hs-tone="danger"` (perigo, borda vermelha) · `data-hs-tone="trap"` (pegadinha, borda âmbar) · sem tone (baseline, borda teal).
> Tema da aula: **a bifurcação neuroblastoma × Wilms.** Cada SVG é uma metáfora visual única — nenhuma repete a das aulas vizinhas (extra-08 reservou: barra-100%, escada-log, dendrograma, alvo-bimanual, escada-de-drenagem, campo-USG, matriz-marcadores; aqui: árvore-de-hierarquia-clicável, mapa-anatômico-de-silhueta, comparador-de-linha-média, boneco-de-metástases, painel-TC-com-laboratório, tabela-de-síndromes-expansível, matriz-comparadora-2-colunas, balança-de-prognóstico, trilho-step-through-bifurcado).

---

## P1 — `op1` · Árvore dos "mais comuns": a hierarquia que afunila para duas hipóteses

**Conceito visual:** uma árvore que desce do nó-raiz "câncer infantil" e vai estreitando o recorte a cada nível — leucemia (nº 1 geral, fora da disputa, teal), tumor sólido → SNC (sólido nº 1, teal), "fora do SNC" → neuroblastoma, ramo abdominal → bifurcação final neuroblastoma × Wilms (os dois nós coral/teal que a prova quer). Cada nó é hotspot e diz "mais comum de quê". O elemento desenhado (cada caixa do nível) é o alvo.

**Ponto de inserção:** após o Tópico 3 (parágrafo "Toda a aula é a construção dessa bifurcação"), antes dos asides.

```html
<figure class="figure-svg">
  <figcaption><strong>Cada "mais comum" é de um recorte diferente.</strong> A árvore desce afunilando — leucemia (geral), SNC (sólido), neuroblastoma (sólido fora do SNC) — até a única pergunta que a prova faz na massa abdominal. Clique, toque ou foque cada nó.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="op1" aria-live="polite">
      <svg class="il-op1" data-eso="op1" viewBox="0 0 760 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-op1 d-op1" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-op1">Hierarquia dos cânceres mais comuns da infância</title>
        <desc id="d-op1">Diagrama em árvore que afunila do geral ao específico. Da raiz câncer infantil descem dois ramos: leucemia, a neoplasia mais comum no geral, em teal; e tumores sólidos. Sob os sólidos, o do sistema nervoso central é o mais comum, em teal; ao excluí-lo, o neuroblastoma é o sólido mais comum fora do sistema nervoso central. Do neuroblastoma desce o ramo da massa abdominal, que termina na bifurcação final entre neuroblastoma e tumor de Wilms. Cada nó é clicável.</desc>
        <rect x="0" y="0" width="760" height="470" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="42" class="svg-title" fill="var(--ink-100)" font-size="17">A escada de distratores afunila até duas saídas.</text>

        <!-- conectores -->
        <path d="M380 92 V120 M380 120 H190 V150 M380 120 H520 V150" fill="none" stroke="var(--border-strong)" stroke-width="2"/>
        <path d="M520 196 V222 M520 222 H520 V252" fill="none" stroke="var(--border-strong)" stroke-width="2"/>
        <path d="M520 298 V322 M520 322 H520 V352" fill="none" stroke="var(--coral-50)" stroke-width="2"/>
        <path d="M520 398 V416 M520 416 H388 V440 M520 416 H652 V440" fill="none" stroke="var(--coral-50)" stroke-width="2"/>

        <!-- raiz -->
        <g class="hs-shape" data-hs-label="Câncer na infância" data-hs-text="O ponto de partida. A epidemiologia oncológica da criança não é a do adulto em miniatura: muda a frequência e mudam os tipos. A banca explora justamente esse desconhecimento, oferecendo vários 'mais comum' como alternativas. Quem hierarquiza os recortes não cai." data-hs-hint="Epidemiologia ≠ a do adulto.">
          <rect x="296" y="60" width="168" height="34" rx="9" fill="var(--teal-40)" stroke="var(--teal-50)" stroke-width="2"/>
          <text x="380" y="82" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="13">Câncer na infância</text>
        </g>

        <!-- leucemia (nº1 geral, teal, fora da disputa abdominal) -->
        <g class="hs-shape" data-hs-label="Leucemia — nº 1 no geral" data-hs-text="A neoplasia mais comum da infância como um todo é a do sistema linfo-hematopoiético: a leucemia. É por isso que a maior parte das questões de onco pediátrica, no fundo, cobra suspeição de leucemia — palidez, sangramento, dor óssea, hepatoesplenomegalia. Mas ela está fora da disputa da massa abdominal: é o topo de OUTRO recorte." data-hs-hint="Mais comum no geral · linfo-hematopoiética.">
          <rect x="92" y="150" width="196" height="46" rx="9" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="2"/>
          <text x="190" y="170" text-anchor="middle" class="svg-title" fill="var(--teal-80)" font-size="13">Leucemia</text>
          <text x="190" y="188" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">mais comum no geral</text>
        </g>

        <!-- tumor sólido -->
        <g class="hs-shape" data-hs-label="Tumores sólidos" data-hs-text="O outro grande ramo. A criança também tem neoplasias sólidas — e é aqui que a banca monta a escada de distratores, porque cada degrau é 'o mais comum' de um recorte distinto. Descer este ramo com cuidado é o que separa quem acerta de quem mistura os recortes." data-hs-hint="O ramo onde mora a pegadinha.">
          <rect x="422" y="150" width="196" height="46" rx="9" fill="var(--teal-40)" stroke="var(--teal-50)" stroke-width="2"/>
          <text x="520" y="170" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="13">Tumores sólidos</text>
          <text x="520" y="188" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">o ramo da escada</text>
        </g>

        <!-- SNC (sólido nº1, teal) -->
        <g class="hs-shape" data-hs-label="SNC — sólido nº 1" data-hs-text="O tumor sólido mais comum da infância é o do sistema nervoso central. Curiosamente, SNC cai pouco em prova de pediatria geral — então o aluno se esquece dele e promove o neuroblastoma a campeão dos sólidos. Esse esquecimento é a pegadinha: o sólido mais comum é o do SNC, não o neuroblastoma." data-hs-hint="Sólido mais comum · cai pouco · não esqueça.">
          <rect x="422" y="252" width="196" height="46" rx="9" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="2"/>
          <text x="520" y="272" text-anchor="middle" class="svg-title" fill="var(--teal-80)" font-size="13">SNC</text>
          <text x="520" y="290" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">sólido mais comum</text>
        </g>

        <!-- neuroblastoma (sólido fora do SNC) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Neuroblastoma — sólido nº 1 fora do SNC" data-hs-text="Tire o SNC da conta e o sólido mais comum passa a ser o neuroblastoma — que é, ainda, a neoplasia nº 1 no menor de 1 ano. É um título 'de recorte', e a prova adora oferecê-lo ao lado de leucemia e SNC para confundir. Daqui desce o ramo que de fato decide a questão: a massa abdominal." data-hs-hint="Sólido nº 1 fora do SNC · nº 1 no < 1 ano.">
          <rect x="404" y="352" width="232" height="46" rx="9" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="2.2"/>
          <text x="520" y="372" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="13">Neuroblastoma</text>
          <text x="520" y="390" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="11">sólido nº 1 fora do SNC · massa abdominal ↓</text>
        </g>

        <!-- bifurcação final: neuroblastoma × Wilms -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Massa abdominal → neuroblastoma" data-hs-text="Fim da árvore, lado esquerdo. Diante de criança com massa abdominal, metade da resposta é o neuroblastoma: criança doente, massa dura/irregular que cruza a linha média. É um dos dois únicos diagnósticos que a banca quer que você considere — todo o resto da aula alimenta essa escolha." data-hs-hint="Criança doente · cruza a linha média.">
          <rect x="300" y="440" width="176" height="22" rx="7" fill="var(--coral-dim)" stroke="var(--coral-60)" stroke-width="2"/>
          <text x="388" y="455" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="12">Neuroblastoma</text>
        </g>
        <g class="hs-shape" data-hs-label="Massa abdominal → Wilms" data-hs-text="Fim da árvore, lado direito. A outra metade da resposta é o tumor de Wilms: a neoplasia renal mais comum, 2ª causa de massa abdominal, criança em bom estado. A prova quase sempre só te deixa estas duas saídas — e exige que você escolha por estado geral e cruzamento da linha média." data-hs-hint="Renal nº 1 · criança bem · não cruza.">
          <rect x="564" y="440" width="176" height="22" rx="7" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="2"/>
          <text x="652" y="455" text-anchor="middle" class="svg-label" fill="var(--teal-80)" font-size="12">Tumor de Wilms</text>
        </g>
        <text x="520" y="430" text-anchor="middle" class="svg-label" fill="var(--ink-50)" font-size="11">a única decisão que a prova cobra</text>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="op1" aria-live="polite">
  <div class="hotspot-detail__label">Clique num nó</div>
  <p class="hotspot-detail__text">Os nós teal de cima (leucemia, SNC) são "mais comum" de recortes que não disputam a massa abdominal. A árvore afunila até as duas únicas saídas que a prova cobra: neuroblastoma × Wilms. Toque cada um para o recorte exato.</p>
</div>
```

---

## P2 — `op2` · Mapa anatômico da crista neural: onde o neuroblastoma nasce

**Conceito visual:** silhueta de tronco infantil de frente, com a cadeia simpática desenhada como uma linha vertical paravertebral pontuada de gânglios, do pescoço ao retroperitônio, e as adrenais sobre os rins. Cada sítio primário é hotspot **no próprio órgão/gânglio desenhado**, com seu percentual e a consequência clínica de nascer ali. Os dois sítios abdominais (adrenal ~50% + retroperitoneal 25%) acendem em coral; cervical e torácico em teal. Metáfora única: mapa anatômico de silhueta, distinto de tudo.

**Ponto de inserção:** após o Tópico 3 (parágrafo "o neuroblastoma é, na prova, um tumor do abdome"), antes da TC real.

```html
<figure class="figure-svg">
  <figcaption><strong>O trajeto da crista neural.</strong> As células migram e formam a cadeia simpática e a medula adrenal — e o neuroblastoma pode brotar em qualquer ponto. Some adrenal e retroperitônio: 75% é abdome. Clique, toque ou foque cada sítio.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="op2" aria-live="polite">
      <svg class="il-op2" data-eso="op2" viewBox="0 0 760 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-op2 d-op2" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-op2">Sítios primários do neuroblastoma ao longo da cadeia simpática</title>
        <desc id="d-op2">Silhueta de tronco infantil de frente com a cadeia simpática paravertebral desenhada do pescoço ao retroperitônio. Quatro sítios primários do neuroblastoma estão marcados: cadeia cervical no pescoço, cadeia torácica no mediastino posterior, medula da adrenal sobre os rins, correspondendo a cerca de cinquenta por cento dos casos, e gânglios simpáticos retroperitoneais, cerca de vinte e cinco por cento. Os dois sítios abdominais aparecem em coral. Cada sítio é clicável.</desc>
        <rect x="0" y="0" width="760" height="470" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="42" class="svg-title" fill="var(--ink-100)" font-size="17">Crista neural → simpático + medula adrenal. 75% é abdome.</text>

        <!-- silhueta infantil (cabeça + tronco) -->
        <path d="M300 86 a26 26 0 1 1 0.1 0 M270 132 q30 -14 60 0 l16 110 q4 120 -10 196 l-72 0 q-14 -76 -10 -196 Z" fill="var(--teal-05)" stroke="var(--border-mid)" stroke-width="1.6"/>
        <!-- coluna / cadeia simpática paravertebral -->
        <line x1="300" y1="118" x2="300" y2="392" stroke="var(--border-strong)" stroke-width="2.4" stroke-dasharray="2 6"/>
        <text x="300" y="424" text-anchor="middle" class="svg-label" fill="var(--ink-50)" font-size="11">cadeia simpática (paravertebral)</text>

        <!-- cervical (teal) -->
        <g class="hs-shape" data-hs-label="Cadeia cervical — minoria" data-hs-text="Sítio minoritário, no pescoço. Quando o neuroblastoma nasce alto e comprime gânglios simpáticos cervicais, surge a síndrome de Horner: ptose, miose e anidrose do mesmo lado. É a porta de entrada de uma das pistas mais elegantes — Horner em criança pequena puxa para neuroblastoma." data-hs-hint="Minoria · liga-se à síndrome de Horner.">
          <circle cx="300" cy="128" r="13" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="2.4"/>
          <text x="340" y="126" class="svg-title" fill="var(--teal-80)" font-size="13">Cervical</text>
          <text x="340" y="143" class="svg-label" fill="var(--ink-70)" font-size="11">minoria · síndrome de Horner</text>
        </g>

        <!-- torácico (teal) -->
        <g class="hs-shape" data-hs-label="Cadeia torácica — minoria" data-hs-text="Sítio minoritário, no mediastino posterior. É a armadilha clínica: a radiografia mostra uma hipotransparência e alguém trata como pneumonia. Pneumonia 'que não melhora' em criança pode ser, no fundo, um neuroblastoma torácico — o tumor no tórax aqui é o PRÓPRIO tumor, não metástase." data-hs-hint="Mediastino posterior · falsa pneumonia.">
          <circle cx="300" cy="196" r="14" fill="var(--teal-40)" stroke="var(--teal-50)" stroke-width="2.4"/>
          <text x="340" y="194" class="svg-title" fill="var(--teal-80)" font-size="13">Torácico</text>
          <text x="340" y="211" class="svg-label" fill="var(--ink-70)" font-size="11">mediastino posterior · ≠ pneumonia</text>
        </g>

        <!-- medula adrenal ~50% (coral, sobre o rim) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Medula da adrenal · ~50%" data-hs-text="O sítio primário mais comum: quase metade dos neuroblastomas nasce na MEDULA da adrenal — não no córtex. A origem na crista neural explica isso, e explica também as catecolaminas que a criança despeja na circulação. É o motivo de o neuroblastoma chegar, na imensa maioria, como massa abdominal." data-hs-hint="~50% · medula, não córtex · catecolaminas.">
          <ellipse cx="262" cy="276" rx="22" ry="15" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="2.4"/>
          <ellipse cx="258" cy="306" rx="20" ry="26" fill="var(--teal-10)" stroke="var(--border-mid)" stroke-width="1.4"/>
          <text x="120" y="270" class="svg-title" fill="var(--coral-80)" font-size="14">~50%</text>
          <text x="120" y="288" class="svg-label" fill="var(--ink-70)" font-size="11">medula da adrenal</text>
        </g>

        <!-- gânglios retroperitoneais 25% (coral) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Gânglios retroperitoneais · 25%" data-hs-text="Segundo sítio: cerca de 25% nascem nos gânglios simpáticos abdominais, retroperitoneais. Some adrenal (~50%) com retroperitônio (25%) e você entende a regra geral: a criança com neuroblastoma terá, quase sempre, um tumor abdominal — e é nessa massa que ele disputa o diagnóstico com o Wilms." data-hs-hint="25% · com a adrenal, fazem 75% no abdome.">
          <circle cx="300" cy="332" r="13" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="2.4"/>
          <text x="440" y="330" class="svg-title" fill="var(--coral-80)" font-size="14">25%</text>
          <text x="440" y="348" class="svg-label" fill="var(--ink-70)" font-size="11">gânglios retroperitoneais</text>
        </g>

        <text x="640" y="404" text-anchor="end" class="svg-label" fill="var(--coral-80)" font-size="12">~50% + 25% = 75% abdominal</text>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="op2" aria-live="polite">
  <div class="hotspot-detail__label">Clique num sítio</div>
  <p class="hotspot-detail__text">Os dois sítios coral (medula adrenal ~50% + retroperitônio 25%) somam 75% e explicam por que o neuroblastoma é, na prova, um tumor do abdome. Cervical e torácico (teal) são minoria, mas carregam Horner e a falsa pneumonia. Toque cada um.</p>
</div>
```

---

## P3 — `op3` · Comparador de linha média: a massa do neuroblastoma que atravessa

**Conceito visual:** corte de abdome infantil com a linha média (coluna/aorta) marcada ao centro por uma linha tracejada vertical. A massa do neuroblastoma é desenhada nascendo de um lado e **transbordando** para o outro hemiabdome — cruzando a linha média. Cada propriedade da massa é hotspot no próprio desenho: a borda irregular (contorno serrilhado), a textura dura, e o ato de cruzar a linha (a parte da massa que ultrapassa o tracejado). Um quarto hotspot, fora da massa, é o "halo" de catecolaminas (ícones de HAS/sudorese/rubor irradiando). Metáfora única: anatomia abdominal com eixo de simetria como protagonista.

**Ponto de inserção:** após o Tópico 1 (parágrafo "a primeira hipótese é neuroblastoma"), antes do Tópico 2.

```html
<figure class="figure-svg">
  <figcaption><strong>A linha média é o juiz.</strong> A massa do neuroblastoma nasce de um lado e transborda para o outro — dura, de borda irregular, atravessando o eixo do abdome. Em volta, as catecolaminas. Clique, toque ou foque cada achado.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="op3" aria-live="polite">
      <svg class="il-op3" data-eso="op3" viewBox="0 0 760 450" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-op3 d-op3" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-op3">Massa do neuroblastoma cruzando a linha média do abdome</title>
        <desc id="d-op3">Corte de abdome infantil com a linha média marcada por uma linha tracejada vertical central. Uma massa dura, de superfície irregular, nasce do hemiabdome esquerdo e transborda para a direita, ultrapassando a linha média. Ao redor irradiam ícones de hipertensão, sudorese e rubor, representando a liberação de catecolaminas. Cada achado é clicável.</desc>
        <defs>
          <radialGradient id="op3-mass" cx="42%" cy="40%" r="65%">
            <stop offset="0%" stop-color="var(--coral-50)"/>
            <stop offset="100%" stop-color="var(--coral-40)"/>
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="760" height="450" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="42" class="svg-title" fill="var(--ink-100)" font-size="17">Dura, irregular e atravessa a linha média = neuroblastoma.</text>

        <!-- contorno do abdome -->
        <ellipse cx="380" cy="252" rx="250" ry="150" fill="var(--teal-05)" stroke="var(--border-mid)" stroke-width="1.8"/>
        <!-- rins discretos -->
        <ellipse cx="248" cy="252" rx="26" ry="40" fill="var(--teal-10)" stroke="var(--border-soft)" stroke-width="1.2"/>
        <ellipse cx="512" cy="252" rx="26" ry="40" fill="var(--teal-10)" stroke="var(--border-soft)" stroke-width="1.2"/>

        <!-- massa dura + irregular: nasce à esquerda, transborda à direita -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Massa dura e de superfície irregular" data-hs-text="A massa do neuroblastoma é dura e de superfície irregular — palpável, crescente. É o oposto do Wilms, cuja massa é firme porém lisa e regular. 'Dura e irregular' é metade da assinatura; a outra metade é cruzar a linha média. Quando o enunciado junta as duas, a primeira hipótese é neuroblastoma." data-hs-hint="Dura + irregular ≠ firme/lisa do Wilms.">
          <path d="M300 168
                   q-22 -10 -44 6 q-26 -2 -34 22 q-24 4 -22 30 q-18 14 -6 38 q-6 26 18 34 q8 24 34 22 q14 20 40 12 q22 14 44 -2 q24 6 38 -16 q22 0 24 -26 q18 -12 8 -36 q8 -24 -14 -34 q-2 -24 -26 -28 q-12 -20 -38 -16 q-18 -12 -40 -2 Z"
                fill="url(#op3-mass)" stroke="var(--coral-60)" stroke-width="2.6" stroke-linejoin="round"/>
          <text x="356" y="246" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="13">dura</text>
          <text x="356" y="264" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="12">irregular</text>
        </g>

        <!-- linha média (eixo) -->
        <line x1="380" y1="96" x2="380" y2="408" stroke="var(--ok-green)" stroke-width="2.4" stroke-dasharray="8 6"/>
        <text x="392" y="116" class="svg-label" fill="var(--ok-green)" font-size="12">linha média</text>

        <!-- cruza a linha média: a parte da massa que ultrapassa o eixo -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Cruza a linha média — o discriminador" data-hs-text="O detalhe que vale ouro: a massa atravessa a linha média do abdome. O Wilms, em geral, NÃO cruza. É o critério que a banca usa para separar os dois — e o motivo de você nunca decidir só pela frequência. (Há uma exceção descrita de Minas Gerais, um Wilms que cruzou; exceção que não derruba a regra.)" data-hs-hint="Wilms em geral NÃO cruza · é o discriminador.">
          <path d="M380 176 q44 -8 70 18 q26 22 18 56 q-6 36 -42 50 q-30 10 -46 -2 L380 176 Z" fill="var(--coral-50)" stroke="var(--err-red)" stroke-width="2.4" opacity="0.92"/>
          <text x="452" y="252" text-anchor="middle" class="svg-label" fill="var(--err-red)" font-size="11">cruzou →</text>
        </g>

        <!-- catecolaminas: halo de sintomas sistêmicos -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Catecolaminas → criança doente" data-hs-text="A massa raramente vem sozinha. Acometendo medula adrenal e gânglios simpáticos, o tumor libera catecolaminas: hipertensão, sudorese, rubor, palpitação, irritabilidade, e muitas vezes febre. É por isso que a criança do neuroblastoma chega DOENTE — o oposto da criança do Wilms, que está bem. Esse estado geral é metade do diagnóstico diferencial." data-hs-hint="HAS · sudorese · rubor · febre = criança doente.">
          <g stroke="var(--err-red)" stroke-width="2.2" fill="none" stroke-linecap="round" opacity="0.9">
            <path d="M170 120 l-16 -14 M600 120 l16 -14 M150 252 l-22 0 M610 252 l22 0 M180 384 l-16 14 M588 384 l16 14"/>
          </g>
          <text x="160" y="98" class="svg-label" fill="var(--err-red)" font-size="11">↑PA</text>
          <text x="588" y="98" class="svg-label" fill="var(--err-red)" font-size="11">sudorese</text>
          <text x="108" y="256" class="svg-label" fill="var(--err-red)" font-size="11">rubor</text>
          <text x="622" y="256" class="svg-label" fill="var(--err-red)" font-size="11">febre</text>
          <text x="380" y="438" text-anchor="middle" class="svg-label" fill="var(--err-red)" font-size="12">catecolaminas em circulação → criança doente</text>
        </g>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="op3" aria-live="polite">
  <div class="hotspot-detail__label">Clique num achado</div>
  <p class="hotspot-detail__text">A massa é dura e irregular, atravessa a linha média (verde) e vem cercada das catecolaminas que deixam a criança doente. Cada achado empurra o diagnóstico para neuroblastoma — toque para o porquê.</p>
</div>
```

---

## P4 — `op4` · Boneco de metástases: três sítios acesos, o pulmão riscado

**Conceito visual:** silhueta infantil de frente com os sítios de metástase do neuroblastoma desenhados como órgãos hotspot que "acendem" em coral — fígado, medula óssea (ossos longos), linfonodos. O pulmão é desenhado **riscado / apagado** (hachura cinza com X), hotspot que diz "aqui não — isso é o Wilms". Um hotspot extra na região periorbitária da silhueta mostra o sinal do guaxinim (par de equimoses em volta dos olhos). Metáfora única: boneco-mapa de disseminação com um sítio negado de propósito.

**Ponto de inserção:** após o Tópico 3 (parágrafo "é praticamente gabarito"), antes da foto do guaxinim.

```html
<figure class="figure-svg">
  <figcaption><strong>Para onde vai — e para onde não vai.</strong> Fígado, medula óssea e linfonodos acendem. O pulmão fica riscado: metástase pulmonar é do Wilms, não do neuroblastoma. E em volta dos olhos, o guaxinim. Clique, toque ou foque cada sítio.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="op4" aria-live="polite">
      <svg class="il-op4" data-eso="op4" viewBox="0 0 760 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-op4 d-op4" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-op4">Sítios de metástase do neuroblastoma</title>
        <desc id="d-op4">Silhueta infantil de frente. Três sítios de metástase do neuroblastoma estão acesos em coral: fígado, medula óssea nos ossos longos e linfonodos. O pulmão aparece riscado e apagado, indicando que metástase pulmonar não é do neuroblastoma e sim do tumor de Wilms. Na região periorbitária, um par de equimoses representa o sinal do guaxinim. Cada sítio é clicável.</desc>
        <defs>
          <pattern id="op4-off" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="9" height="9" fill="var(--bg-elevated-2)"/>
            <line x1="0" y1="0" x2="0" y2="9" stroke="var(--ink-50)" stroke-width="1.4" opacity="0.5"/>
          </pattern>
        </defs>
        <rect x="0" y="0" width="760" height="470" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="42" class="svg-title" fill="var(--ink-100)" font-size="17">Fígado · medula · linfonodo. O pulmão é do Wilms.</text>

        <!-- silhueta -->
        <path d="M300 96 a30 30 0 1 1 0.1 0 M256 150 q44 -18 88 0 l22 90 -20 8 -2 150 -30 0 -4 -120 -4 120 -30 0 -2 -150 -20 -8 Z" fill="var(--teal-05)" stroke="var(--border-mid)" stroke-width="1.6"/>

        <!-- periorbitário: guaxinim -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Sinal do guaxinim — metástase periorbitária" data-hs-text="O achado do sublinhado de mil reais. O neuroblastoma pode invadir a órbita e produzir equimoses ao redor dos olhos — os 'olhos de guaxinim'. Quando o enunciado planta equimose periorbitária numa criança com massa abdominal, é neuroblastoma metastático: praticamente gabarito." data-hs-hint="Equimose periorbitária + massa abdominal = gabarito.">
          <ellipse cx="289" cy="88" rx="10" ry="6" fill="var(--coral-50)" stroke="var(--err-red)" stroke-width="1.8"/>
          <ellipse cx="311" cy="88" rx="10" ry="6" fill="var(--coral-50)" stroke="var(--err-red)" stroke-width="1.8"/>
          <text x="360" y="80" class="svg-title" fill="var(--err-red)" font-size="13">Guaxinim</text>
          <text x="360" y="97" class="svg-label" fill="var(--ink-70)" font-size="11">equimose periorbitária</text>
        </g>

        <!-- linfonodos -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Linfonodos — sítio de metástase" data-hs-text="Um dos três sítios principais do neuroblastoma. Linfonodos acometidos compõem, junto de fígado e medula óssea, a tríade que a prova cobra. Guarde a lista pelo que ela NÃO inclui — o pulmão." data-hs-hint="Tríade: fígado, medula óssea, linfonodos.">
          <circle cx="276" cy="176" r="7" fill="var(--coral-50)" stroke="var(--coral-60)" stroke-width="1.8"/>
          <circle cx="324" cy="176" r="7" fill="var(--coral-50)" stroke="var(--coral-60)" stroke-width="1.8"/>
          <text x="120" y="180" class="svg-title" fill="var(--coral-80)" font-size="13">Linfonodos</text>
        </g>

        <!-- pulmão riscado (negado) -->
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Pulmão — aqui NÃO (isso é Wilms)" data-hs-text="Pegadinha clássica. O neuroblastoma NÃO costuma dar metástase pulmonar — quem vai para o pulmão é o tumor de Wilms. O que aparece no tórax do neuroblastoma é o PRÓPRIO tumor em gânglio simpático, não metástase. 'Tumor maligno → pulmão' é regra do adulto que a banca usa para te derrubar aqui." data-hs-hint="Metástase pulmonar = Wilms, não neuroblastoma.">
          <path d="M270 216 q-16 0 -16 30 l0 44 q0 14 14 14 l14 -2 0 -86 Z" fill="url(#op4-off)" stroke="var(--ink-50)" stroke-width="1.6"/>
          <path d="M330 216 q16 0 16 30 l0 44 q0 14 -14 14 l-14 -2 0 -86 Z" fill="url(#op4-off)" stroke="var(--ink-50)" stroke-width="1.6"/>
          <line x1="262" y1="220" x2="338" y2="300" stroke="var(--err-red)" stroke-width="2.6"/>
          <line x1="338" y1="220" x2="262" y2="300" stroke="var(--err-red)" stroke-width="2.6"/>
          <text x="430" y="252" class="svg-title" fill="var(--ink-70)" font-size="13">Pulmão</text>
          <text x="430" y="269" class="svg-label" fill="var(--warn-amber)" font-size="11">aqui não — isso é Wilms</text>
        </g>

        <!-- fígado -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Fígado — sítio de metástase" data-hs-text="Sítio frequente de metástase do neuroblastoma, sobretudo no lactente. Faz parte da tríade fígado / medula óssea / linfonodos. Hepatomegalia por infiltração tumoral pode ser uma das apresentações do tumor disseminado." data-hs-hint="Frequente no lactente · parte da tríade.">
          <path d="M270 312 q44 -10 60 4 q2 22 -6 30 q-30 8 -54 -2 q-6 -18 0 -32 Z" fill="var(--coral-50)" stroke="var(--coral-60)" stroke-width="2"/>
          <text x="120" y="328" class="svg-title" fill="var(--coral-80)" font-size="13">Fígado</text>
        </g>

        <!-- medula óssea -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Medula óssea — sítio de metástase" data-hs-text="Terceiro sítio da tríade. A infiltração da medula óssea pode causar dor óssea, palidez e citopenias — e às vezes é a porta de entrada do diagnóstico. Completa fígado e linfonodos como destino do neuroblastoma; o pulmão fica de fora." data-hs-hint="Dor óssea / citopenias · fecha a tríade.">
          <rect x="280" y="360" width="14" height="78" rx="6" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="2"/>
          <rect x="306" y="360" width="14" height="78" rx="6" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="2"/>
          <text x="430" y="404" class="svg-title" fill="var(--coral-80)" font-size="13">Medula óssea</text>
        </g>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="op4" aria-live="polite">
  <div class="hotspot-detail__label">Clique num sítio</div>
  <p class="hotspot-detail__text">Três sítios acesos (fígado, medula óssea, linfonodos) e um riscado (pulmão = Wilms). O par de equimoses em volta dos olhos é o sinal do guaxinim — quase gabarito quando vem com massa abdominal. Toque cada um.</p>
</div>
```

---

## P5 — `op5` · Painel diagnóstico: TC com calcificações + laboratório que acende VMA/HVA

**Conceito visual:** painel duplo. À esquerda, uma TC esquemática da massa abdominal (campo escuro com a massa heterogênea), com hotspots nos achados de imagem: calcificações puntiformes (pontos brilhantes), sangramento interno (área hipodensa irregular) e crescimento rápido (seta de expansão). À direita, um "tira de laboratório" com duas linhas — VMA e HVA — desenhadas como barras que sobem ao serem clicadas (estado base baixo, hotspot revela ↑↑). Metáfora única: imagem + bancada laboratorial num só painel, distinta do campo-USG da extra-08.

**Ponto de inserção:** após o Tópico 2 (parágrafo "o diagnóstico está praticamente cravado"), antes da TC real.

```html
<figure class="figure-svg">
  <figcaption><strong>Imagem e urina, lado a lado.</strong> Na TC, calcificações e sangramento dentro da massa. No laboratório, catecolaminas urinárias — VMA e HVA — pelas alturas. Juntas, cravam o neuroblastoma. Clique, toque ou foque cada achado.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="op5" aria-live="polite">
      <svg class="il-op5" data-eso="op5" viewBox="0 0 760 450" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-op5 d-op5" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-op5">Diagnóstico do neuroblastoma: imagem e catecolaminas urinárias</title>
        <desc id="d-op5">Painel duplo. À esquerda, uma tomografia esquemática de massa abdominal com calcificações puntiformes brilhantes, uma área de sangramento interno e uma seta indicando crescimento rápido. À direita, uma tira de laboratório com duas barras, ácido vanilmandélico e ácido homovanílico, ambas muito elevadas, representando o aumento das catecolaminas urinárias. Cada achado é clicável.</desc>
        <defs>
          <radialGradient id="op5-tc" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stop-color="var(--bg-elevated-2)"/>
            <stop offset="100%" stop-color="var(--bg-base)"/>
          </radialGradient>
          <pattern id="op5-mass" width="12" height="12" patternUnits="userSpaceOnUse">
            <rect width="12" height="12" fill="var(--teal-100)"/>
            <circle cx="3" cy="8" r="1.6" fill="var(--ink-70)" opacity="0.4"/>
            <circle cx="9" cy="3" r="1.3" fill="var(--teal-80)" opacity="0.4"/>
          </pattern>
        </defs>
        <rect x="0" y="0" width="760" height="450" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="42" class="svg-title" fill="var(--ink-100)" font-size="17">Calcificação + sangramento na imagem · VMA/HVA na urina.</text>

        <!-- campo TC -->
        <rect x="40" y="78" width="380" height="330" rx="12" fill="url(#op5-tc)" stroke="var(--border-mid)" stroke-width="1.5"/>
        <text x="230" y="100" text-anchor="middle" class="svg-label" fill="var(--ink-50)" font-size="10">TC de abdome</text>
        <!-- corpo vertebral de referência -->
        <ellipse cx="230" cy="370" rx="20" ry="14" fill="var(--bg-glass)" stroke="var(--border-soft)" stroke-width="1"/>

        <!-- massa heterogênea base -->
        <path d="M150 170 q70 -28 140 6 q40 44 8 110 q-58 50 -140 18 q-44 -40 -28 -94 q6 -28 20 -40 Z" fill="url(#op5-mass)" stroke="var(--coral-60)" stroke-width="2"/>

        <!-- calcificações (pontos brilhantes) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Calcificações puntiformes" data-hs-text="O achado de imagem que aponta neuroblastoma. Pontos cálcicos brilhantes dentro da massa — porque o tumor cresce rápido e calcifica. No Wilms, calcificações proeminentes não são frequentes. Massa abdominal calcificada na criança: pense neuroblastoma." data-hs-hint="Pontos brilhantes · raros no Wilms.">
          <circle cx="196" cy="214" r="4.5" fill="var(--ink-100)"/>
          <circle cx="222" cy="232" r="3.5" fill="var(--ink-100)"/>
          <circle cx="244" cy="208" r="4" fill="var(--ink-100)"/>
          <circle cx="210" cy="244" r="3" fill="var(--ink-100)"/>
          <text x="270" y="200" class="svg-label" fill="var(--err-red)" font-size="11">calcificações ←</text>
        </g>

        <!-- sangramento interno -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Sangramento interno" data-hs-text="A outra cara do crescimento acelerado: áreas de sangramento dentro da massa, com densidade heterogênea. Junto das calcificações, compõem o aspecto 'sujo' do neuroblastoma na imagem — diferente da massa mais homogênea do Wilms." data-hs-hint="Heterogeneidade interna · crescimento rápido.">
          <path d="M168 250 q26 -10 40 8 q8 24 -14 32 q-30 4 -34 -16 q-2 -16 8 -24 Z" fill="var(--coral-50)" stroke="var(--err-red)" stroke-width="1.8" opacity="0.85"/>
          <text x="120" y="300" class="svg-label" fill="var(--err-red)" font-size="11">sangramento</text>
        </g>

        <!-- crescimento rápido (seta de expansão) -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Crescimento rápido" data-hs-text="A causa por trás dos dois achados anteriores: o neuroblastoma costuma ter crescimento acelerado, e é isso que gera sangramentos e calcificações no seu interior. A velocidade de crescimento é parte da personalidade do tumor — e do motivo de a criança chegar doente." data-hs-hint="Velocidade gera sangramento + calcificação.">
          <path d="M300 150 l34 -22 -6 16 18 4 -16 14 6 14 -34 22 Z" fill="var(--warn-amber)" stroke="var(--warn-amber)" stroke-width="1.6" opacity="0.9"/>
          <text x="346" y="140" class="svg-label" fill="var(--warn-amber)" font-size="11">cresce rápido</text>
        </g>

        <!-- painel laboratório -->
        <rect x="448" y="78" width="272" height="330" rx="12" fill="var(--bg-glass)" stroke="var(--border-soft)" stroke-width="1.2"/>
        <text x="584" y="104" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="13">Catecolaminas urinárias</text>
        <line x1="500" y1="360" x2="700" y2="360" stroke="var(--border-mid)" stroke-width="1.4"/>
        <line x1="500" y1="180" x2="700" y2="180" stroke="var(--border-soft)" stroke-width="1" stroke-dasharray="4 4"/>
        <text x="704" y="184" class="svg-label" fill="var(--ink-50)" font-size="10">limite</text>

        <!-- VMA -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="VMA — ácido vanilmandélico ↑" data-hs-text="A primeira metade da assinatura laboratorial. O neuroblastoma libera catecolaminas, cujo metabólito ácido vanilmandélico aparece elevado na urina. VMA alto numa criança com massa abdominal é confirmação química — não é marcador germinativo, não é AFP, não é beta-hCG." data-hs-hint="Metabólito de catecolamina · urinário · elevado.">
          <rect x="520" y="148" width="60" height="212" rx="7" fill="var(--coral-50)" stroke="var(--coral-60)" stroke-width="2.2"/>
          <text x="550" y="138" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="14">↑↑</text>
          <text x="550" y="382" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="12">VMA</text>
        </g>

        <!-- HVA -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="HVA — ácido homovanílico ↑" data-hs-text="A segunda metade. O ácido homovanílico é o outro metabólito de catecolamina dosado na urina, também elevado no neuroblastoma. VMA e HVA andam juntos: a dupla 'massa calcificada + VMA/HVA urinários aumentados' praticamente crava o diagnóstico." data-hs-hint="Par do VMA · juntos cravam o diagnóstico.">
          <rect x="612" y="160" width="60" height="200" rx="7" fill="var(--coral-50)" stroke="var(--coral-60)" stroke-width="2.2"/>
          <text x="642" y="150" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="14">↑↑</text>
          <text x="642" y="382" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="12">HVA</text>
        </g>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="op5" aria-live="polite">
  <div class="hotspot-detail__label">Clique num achado</div>
  <p class="hotspot-detail__text">Na TC, calcificações e sangramento por crescimento rápido. No laboratório, VMA e HVA pelas alturas. A imagem suja + as catecolaminas urinárias é a dupla que fecha o neuroblastoma e afasta o Wilms. O definitivo é a histopatologia por biópsia.</p>
</div>
```

---

## P6 — `op6` · Tabela de síndromes expansível: WAGR · Beckwith · achados isolados → rastreio

**Conceito visual:** três cartões-coluna. O cartão WAGR traz as quatro letras W-A-G-R empilhadas, cada letra um hotspot que expande seu significado. O cartão Beckwith-Wiedemann lista seus quatro traços, cada um hotspot. O terceiro cartão são os achados isolados (aniridia, hemi-hipertrofia). Uma faixa-base abaixo dos três, em verde, é o destino comum de todos: "rastreio USG abdominal até ~7 anos" — ela própria é hotspot. Metáfora única: tabela de síndromes em colunas que convergem para uma conduta.

**Ponto de inserção:** após o Tópico 3 (parágrafo "Achar cedo muda o desfecho"), antes da foto de aniridia.

```html
<figure class="figure-svg">
  <figcaption><strong>Caminhos diferentes, um mesmo destino.</strong> WAGR, Beckwith-Wiedemann e até achados isolados (aniridia, hemi-hipertrofia) elevam o risco de Wilms — e todos desembocam no mesmo rastreio. Clique, toque ou foque cada item.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="op6" aria-live="polite">
      <svg class="il-op6" data-eso="op6" viewBox="0 0 760 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-op6 d-op6" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-op6">Síndromes e achados associados ao tumor de Wilms</title>
        <desc id="d-op6">Três colunas de risco para tumor de Wilms. A primeira, a síndrome WAGR, com as letras Wilms, Aniridia, anomalia Genitourinária e Retardo, hoje deficiência intelectual. A segunda, a síndrome de Beckwith-Wiedemann, com macrossomia, hemi-hipertrofia, onfalocele e hipoglicemia neonatal. A terceira, achados isolados: aniridia e hemi-hipertrofia. Uma faixa verde na base reúne todas, indicando rastreio com ultrassonografia abdominal seriada até cerca dos sete anos. Cada item é clicável.</desc>
        <rect x="0" y="0" width="760" height="470" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="42" class="svg-title" fill="var(--ink-100)" font-size="17">Síndrome completa ou achado isolado: todos pedem rastreio.</text>

        <!-- coluna WAGR -->
        <rect x="40" y="70" width="216" height="300" rx="12" fill="var(--bg-glass)" stroke="var(--teal-50)" stroke-width="1.6"/>
        <text x="148" y="96" text-anchor="middle" class="svg-title" fill="var(--teal-80)" font-size="14">Síndrome WAGR</text>
        <g class="hs-shape" data-hs-label="W — Wilms" data-hs-text="A inicial que dá nome ao acrônimo: o W é o próprio tumor de Wilms. A síndrome WAGR reúne, num mesmo paciente, predisposição a Wilms e as outras três características — por isso a criança com WAGR entra em rastreio." data-hs-hint="O próprio tumor de Wilms.">
          <rect x="58" y="110" width="180" height="56" rx="9" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="1.8"/>
          <text x="78" y="146" class="svg-title" fill="var(--teal-80)" font-size="24" font-weight="700">W</text>
          <text x="160" y="143" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="12">Wilms</text>
        </g>
        <g class="hs-shape" data-hs-label="A — Aniridia" data-hs-text="O A é aniridia: ausência congênita da íris. É a pegadinha do acrônimo — muita gente troca por 'anaplasia', que é fator de prognóstico, não item da WAGR. A aniridia é congênita/genética, não adquirida por tratamento." data-hs-hint="Ausência de íris · ≠ anaplasia.">
          <rect x="58" y="172" width="180" height="44" rx="9" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="1.8"/>
          <text x="78" y="202" class="svg-title" fill="var(--teal-80)" font-size="22" font-weight="700">A</text>
          <text x="160" y="200" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="12">Aniridia</text>
        </g>
        <g class="hs-shape" data-hs-label="G — Genitourinário" data-hs-text="O G é anomalia Genitourinária — por exemplo, hipospádia e outras malformações do trato. Num enunciado, 'alteração genitourinária' numa criança com massa renal é uma das pistas para a WAGR e, portanto, para o Wilms." data-hs-hint="Anomalia GU · ex.: hipospádia.">
          <rect x="58" y="222" width="180" height="44" rx="9" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="1.8"/>
          <text x="78" y="252" class="svg-title" fill="var(--teal-80)" font-size="22" font-weight="700">G</text>
          <text x="160" y="250" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="12">Genitourinário</text>
        </g>
        <g class="hs-shape" data-hs-label="R — Retardo (deficiência intelectual)" data-hs-text="O R é o antigo 'retardo mental', termo hoje substituído por deficiência intelectual. Completa o acrônimo W-A-G-R. Reconhecer as quatro letras é o que a prova cobra — e não confundir o A de aniridia com anaplasia." data-hs-hint="Deficiência intelectual · fecha o acrônimo.">
          <rect x="58" y="272" width="180" height="44" rx="9" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="1.8"/>
          <text x="78" y="302" class="svg-title" fill="var(--teal-80)" font-size="22" font-weight="700">R</text>
          <text x="160" y="300" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="12">def. intelectual</text>
        </g>

        <!-- coluna Beckwith-Wiedemann -->
        <rect x="272" y="70" width="216" height="300" rx="12" fill="var(--bg-glass)" stroke="var(--teal-50)" stroke-width="1.6"/>
        <text x="380" y="96" text-anchor="middle" class="svg-title" fill="var(--teal-80)" font-size="13">Beckwith-Wiedemann</text>
        <g class="hs-shape" data-hs-label="Macrossomia" data-hs-text="A marca da Beckwith-Wiedemann: bebês grandes, com crescimento exagerado. É a característica que mais salta no enunciado — recém-nascido/lactente macrossômico com risco aumentado de Wilms." data-hs-hint="Bebês grandes · crescimento exagerado.">
          <rect x="290" y="110" width="180" height="56" rx="9" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="1.8"/>
          <text x="380" y="143" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="13">Macrossomia</text>
        </g>
        <g class="hs-shape" data-hs-label="Hemi-hipertrofia" data-hs-text="Assimetria corporal: um hemicorpo ou um membro nitidamente maior que o outro. Aparece tanto na Beckwith-Wiedemann quanto isolada — e, isolada, já basta para o rastreio." data-hs-hint="Um lado maior · também conta isolada.">
          <rect x="290" y="172" width="180" height="44" rx="9" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="1.8"/>
          <text x="380" y="200" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="13">Hemi-hipertrofia</text>
        </g>
        <g class="hs-shape" data-hs-label="Onfalocele" data-hs-text="Defeito de fechamento da parede abdominal com herniação de vísceras pelo umbigo. Compõe a Beckwith-Wiedemann ao lado de macrossomia, hemi-hipertrofia e hipoglicemia neonatal." data-hs-hint="Defeito de parede · víscera pelo umbigo.">
          <rect x="290" y="222" width="180" height="44" rx="9" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="1.8"/>
          <text x="380" y="250" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="13">Onfalocele</text>
        </g>
        <g class="hs-shape" data-hs-label="Hipoglicemia neonatal" data-hs-text="Hipoglicemia no período neonatal, ligada ao hiperinsulinismo da síndrome. Quarto traço da Beckwith-Wiedemann. O conjunto eleva o risco de nefroblastoma e indica vigilância." data-hs-hint="Período neonatal · hiperinsulinismo.">
          <rect x="290" y="272" width="180" height="44" rx="9" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="1.8"/>
          <text x="380" y="300" text-anchor="middle" class="svg-label" fill="var(--ink-100)" font-size="13">Hipoglicemia neonatal</text>
        </g>

        <!-- coluna achados isolados -->
        <rect x="504" y="70" width="216" height="300" rx="12" fill="var(--bg-glass)" stroke="var(--coral-60)" stroke-width="1.6"/>
        <text x="612" y="96" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="13">Achados isolados</text>
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Aniridia isolada" data-hs-text="Não precisa ter a síndrome inteira. Aniridia isolada, mesmo sem o resto da WAGR, já eleva o risco de Wilms. É a pegadinha: o aluno acha que só a síndrome completa conta — mas o achado isolado também manda para o rastreio." data-hs-hint="Sem síndrome completa · já pede rastreio.">
          <rect x="522" y="120" width="180" height="100" rx="9" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="1.8"/>
          <text x="612" y="166" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="14">Aniridia</text>
          <text x="612" y="188" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">isolada</text>
        </g>
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Hemi-hipertrofia isolada" data-hs-text="Da mesma forma, hemi-hipertrofia isolada — um membro maior que o outro, sem Beckwith completa — sobe o risco de nefroblastoma. A banca cobra exatamente esse 'achado isolado pede USG'. Achado isolado ≠ achado sem importância." data-hs-hint="Membro maior · isolada já basta.">
          <rect x="522" y="228" width="180" height="88" rx="9" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="1.8"/>
          <text x="612" y="266" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="13">Hemi-hipertrofia</text>
          <text x="612" y="288" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">isolada</text>
        </g>

        <!-- faixa-base: rastreio (destino comum, verde) -->
        <g class="hs-shape" data-hs-label="Rastreio: USG abdominal até ~7 anos" data-hs-text="O destino comum de todas as colunas. Criança com WAGR, com Beckwith-Wiedemann, ou só com aniridia/hemi-hipertrofia isolada entra em rastreio: ultrassonografia abdominal seriada, em geral até cerca dos 7 anos, para diagnóstico precoce do nefroblastoma. Achar cedo muda o desfecho — e o Wilms tem alta taxa de cura quando pego cedo." data-hs-hint="Conduta correta · USG seriada até ~7 anos.">
          <path d="M40 392 L720 392 L720 432 Q720 444 708 444 L52 444 Q40 444 40 432 Z" fill="var(--ok-green-dim)" stroke="var(--ok-green)" stroke-width="2.2"/>
          <text x="380" y="420" text-anchor="middle" class="svg-title" fill="var(--ok-green)" font-size="14">Rastreio: USG abdominal seriada até ~7 anos</text>
        </g>
        <path d="M148 370 V388 M380 370 V388 M612 370 V388" fill="none" stroke="var(--ok-green)" stroke-width="2" marker-end=""/>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="op6" aria-live="polite">
  <div class="hotspot-detail__label">Clique num item</div>
  <p class="hotspot-detail__text">WAGR (W-A-G-R), Beckwith-Wiedemann e os achados isolados (aniridia, hemi-hipertrofia) são caminhos distintos para o mesmo destino: a faixa verde do rastreio com USG abdominal até ~7 anos. Toque cada item — e cuidado: o "A" da WAGR é aniridia, não anaplasia.</p>
</div>
```

---

## P7 — `op7` · Matriz comparadora: Wilms × neuroblastoma, linha a linha

**Conceito visual:** matriz de duas colunas (Wilms à esquerda, em teal; neuroblastoma à direita, em coral) e cinco linhas-critério à esquerda: "cruza a linha média?", "superfície", "estado geral", "como foi achada", "metástase". Cada **célula** é hotspot — clicar nela revela o valor daquele critério para aquele tumor. As células do Wilms que ajudam a acertar (firme/não cruza/bem/banho) são teal; as do neuroblastoma (dura-irregular/cruza/doente/sintomas) são coral. Metáfora única: matriz comparadora 2-colunas (a extra-08 usou matriz de marcadores 3×2, diferente em forma e conteúdo).

**Ponto de inserção:** após o Tópico 3 (parágrafo "o neuroblastoma, não"), antes dos asides.

```html
<figure class="figure-svg">
  <figcaption><strong>Critério a critério, são opostos.</strong> A mesma pergunta dá respostas contrárias nos dois tumores — e é por essas linhas que a banca decide a questão. Clique, toque ou foque cada célula.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="op7" aria-live="polite">
      <svg class="il-op7" data-eso="op7" viewBox="0 0 760 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-op7 d-op7" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-op7">Comparação clínica entre tumor de Wilms e neuroblastoma</title>
        <desc id="d-op7">Matriz de duas colunas — tumor de Wilms à esquerda em teal e neuroblastoma à direita em coral — por cinco linhas de critério: cruza a linha média, superfície da massa, estado geral da criança, como a massa foi achada e sítio de metástase. Para o Wilms: não cruza, firme e lisa, criança bem, achada no banho, metástase pulmonar. Para o neuroblastoma: cruza, dura e irregular, criança doente, com repercussão sistêmica, metástase para fígado, medula e linfonodos. Cada célula é clicável.</desc>
        <rect x="0" y="0" width="760" height="470" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="40" class="svg-title" fill="var(--ink-100)" font-size="17">Mesma pergunta, respostas opostas.</text>

        <!-- cabeçalhos -->
        <rect x="330" y="58" width="190" height="38" rx="9" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="1.8"/>
        <text x="425" y="82" text-anchor="middle" class="svg-title" fill="var(--teal-80)" font-size="14">Tumor de Wilms</text>
        <rect x="528" y="58" width="190" height="38" rx="9" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="1.8"/>
        <text x="623" y="82" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="14">Neuroblastoma</text>

        <!-- linha 1: cruza a linha média -->
        <text x="320" y="130" text-anchor="end" class="svg-title" fill="var(--ink-100)" font-size="13">cruza a linha média?</text>
        <g class="hs-shape" data-hs-label="Wilms — não cruza" data-hs-text="O critério estrela. O Wilms, em geral, NÃO ultrapassa a linha média. (Existe uma exceção descrita em Minas Gerais de um Wilms que cruzou — exceção que não derruba a regra, mas lembra que não se decide por um único critério.)" data-hs-hint="Em geral não cruza · 1 exceção famosa.">
          <rect x="330" y="108" width="190" height="44" rx="8" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="1.8"/>
          <text x="425" y="135" text-anchor="middle" class="svg-label" fill="var(--teal-80)" font-size="13">NÃO cruza</text>
        </g>
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Neuroblastoma — cruza" data-hs-text="A massa do neuroblastoma caracteristicamente atravessa a linha média do abdome. É o discriminador que a banca usa para separá-lo do Wilms — o ponto que mais pesa quando se lê o exame da massa." data-hs-hint="Atravessa a linha média · o discriminador.">
          <rect x="528" y="108" width="190" height="44" rx="8" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="1.8"/>
          <text x="623" y="135" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="13">CRUZA</text>
        </g>

        <!-- linha 2: superfície -->
        <text x="320" y="184" text-anchor="end" class="svg-title" fill="var(--ink-100)" font-size="13">superfície</text>
        <g class="hs-shape" data-hs-label="Wilms — firme e lisa" data-hs-text="A massa do Wilms é firme, porém lisa e regular — não tem a irregularidade do neuroblastoma. Firme não é o mesmo que duro/irregular: a textura ajuda a desempatar quando o estado geral não basta." data-hs-hint="Firme e lisa · regular.">
          <rect x="330" y="162" width="190" height="44" rx="8" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="1.8"/>
          <text x="425" y="189" text-anchor="middle" class="svg-label" fill="var(--teal-80)" font-size="13">firme, lisa</text>
        </g>
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Neuroblastoma — dura e irregular" data-hs-text="A massa do neuroblastoma é dura e de superfície irregular. Junto com 'cruza a linha média', forma a assinatura palpatória do tumor — o oposto da massa firme e lisa do Wilms." data-hs-hint="Dura e irregular · assinatura do neuroblastoma.">
          <rect x="528" y="162" width="190" height="44" rx="8" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="1.8"/>
          <text x="623" y="189" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="13">dura, irregular</text>
        </g>

        <!-- linha 3: estado geral -->
        <text x="320" y="238" text-anchor="end" class="svg-title" fill="var(--ink-100)" font-size="13">estado geral</text>
        <g class="hs-shape" data-hs-label="Wilms — criança bem" data-hs-text="O traço que mais distingue. A criança com Wilms costuma estar em BOM estado geral — corada, afebril, sem queixa além da massa. Bom estado + não cruza é o par que crava o Wilms na bifurcação." data-hs-hint="Criança bem · corada, afebril.">
          <rect x="330" y="216" width="190" height="44" rx="8" fill="var(--teal-30)" stroke="var(--ok-green)" stroke-width="2"/>
          <text x="425" y="243" text-anchor="middle" class="svg-label" fill="var(--ok-green)" font-size="13">criança BEM</text>
        </g>
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Neuroblastoma — criança doente" data-hs-text="A criança do neuroblastoma chega DOENTE: febre, palidez, emagrecimento, irritabilidade, HAS — repercussão sistêmica das catecolaminas. Estado geral ruim é metade do diagnóstico diferencial e empurra para neuroblastoma." data-hs-hint="Criança doente · catecolaminas.">
          <rect x="528" y="216" width="190" height="44" rx="8" fill="var(--coral-40)" stroke="var(--err-red)" stroke-width="2"/>
          <text x="623" y="243" text-anchor="middle" class="svg-label" fill="var(--err-red)" font-size="13">criança DOENTE</text>
        </g>

        <!-- linha 4: como foi achada -->
        <text x="320" y="292" text-anchor="end" class="svg-title" fill="var(--ink-100)" font-size="13">como foi achada</text>
        <g class="hs-shape" data-hs-label="Wilms — achada no banho" data-hs-text="A história clássica: a mãe sente um caroço ao dar banho, ou o pediatra acha a massa num exame de rotina. Achado incidental numa criança que está bem é o cenário-mãe do Wilms. Lembre: a palpação deve ser delicada — risco de ruptura." data-hs-hint="Incidental no banho/rotina · palpar com cuidado.">
          <rect x="330" y="270" width="190" height="44" rx="8" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="1.8"/>
          <text x="425" y="297" text-anchor="middle" class="svg-label" fill="var(--teal-80)" font-size="13">achado no banho</text>
        </g>
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Neuroblastoma — por sintomas" data-hs-text="O neuroblastoma costuma chamar atenção pelos sintomas: criança doente levada por febre, irritabilidade, HAS, às vezes equimose periorbitária ou opsoclonia-mioclonia. Não é o achado tranquilo do banho — é a criança que adoeceu." data-hs-hint="Trazida por sintomas · não incidental.">
          <rect x="528" y="270" width="190" height="44" rx="8" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="1.8"/>
          <text x="623" y="297" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="13">por sintomas</text>
        </g>

        <!-- linha 5: metástase -->
        <text x="320" y="346" text-anchor="end" class="svg-title" fill="var(--ink-100)" font-size="13">metástase</text>
        <g class="hs-shape" data-hs-tone="trap" data-hs-label="Wilms — metástase pulmonar" data-hs-text="O Wilms dá metástase para o PULMÃO — e o neuroblastoma, não. É a inversão que a banca planta: 'tumor maligno → pulmão' é regra do adulto, mas no par pediátrico o pulmão é do Wilms, enquanto o neuroblastoma vai para fígado, medula e linfonodos." data-hs-hint="Pulmão é do Wilms · não do neuroblastoma.">
          <rect x="330" y="324" width="190" height="44" rx="8" fill="var(--warn-amber-dim)" stroke="var(--warn-amber)" stroke-width="1.8"/>
          <text x="425" y="351" text-anchor="middle" class="svg-label" fill="var(--warn-amber)" font-size="13">PULMÃO</text>
        </g>
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Neuroblastoma — fígado/medula/linfonodo" data-hs-text="O neuroblastoma metastatiza para fígado, medula óssea e linfonodos — nunca o pulmão como sítio típico. O que aparece no tórax do neuroblastoma é o próprio tumor em gânglio simpático, não metástase pulmonar." data-hs-hint="Fígado, medula, linfonodo · não pulmão.">
          <rect x="528" y="324" width="190" height="44" rx="8" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="1.8"/>
          <text x="623" y="346" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="11">fígado · medula · linfonodo</text>
        </g>

        <!-- síntese -->
        <text x="380" y="408" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="14">Bem + não cruza + achado no banho = Wilms.</text>
        <text x="380" y="432" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="13">Doente + cruza + por sintomas = neuroblastoma.</text>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="op7" aria-live="polite">
  <div class="hotspot-detail__label">Clique numa célula</div>
  <p class="hotspot-detail__text">Cada linha é um critério; cada coluna, um tumor. As células teal (Wilms: não cruza, firme, bem, banho) ajudam a acertar; as coral (neuroblastoma: cruza, dura, doente, por sintomas) também. Atenção à linha metástase: o pulmão é do Wilms (âmbar). Toque cada célula.</p>
</div>
```

---

## P8 — `op8` · Balança de prognóstico: a anaplasia que pesa mais que o estágio

**Conceito visual:** uma balança de dois pratos com fiel central. O prato esquerdo é "bom prognóstico" (estágio localizado/focal, teal); o prato direito é "pior prognóstico / recorrência" (coral). Os fatores são pesos clicáveis: ao clicar em "anaplasia", a balança tomba forte para o lado do pior prognóstico (peso grande, vermelho); "metástase" e "idade" são pesos menores; e "estágio localizado" tenta puxar para o bom lado mas **não vence** a anaplasia. O fiel inclinado é desenhado já tombado para a direita (a anaplasia domina). Metáfora única: balança física de prognóstico.

**Ponto de inserção:** após o Tópico 3 (parágrafo "o prognóstico fecha pior, independentemente do estágio"), antes da histologia real.

```html
<figure class="figure-svg">
  <figcaption><strong>Nem o estágio localizado equilibra.</strong> Vários fatores pesam no prognóstico do Wilms — mas a anaplasia tomba a balança sozinha, mesmo quando o tumor é pequeno e localizado. Clique, toque ou foque cada peso.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="op8" aria-live="polite">
      <svg class="il-op8" data-eso="op8" viewBox="0 0 760 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-op8 d-op8" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-op8">Balança de prognóstico do tumor de Wilms</title>
        <desc id="d-op8">Uma balança de dois pratos com o fiel inclinado para a direita. À esquerda, o prato do bom prognóstico, em teal, carrega o estágio localizado ou focal. À direita, o prato do pior prognóstico, em coral, carrega a anaplasia como peso dominante e, menores, a metástase e a idade. A balança tomba para a direita porque a anaplasia pesa mais que tudo, mesmo em tumor localizado. Cada peso é clicável.</desc>
        <rect x="0" y="0" width="760" height="460" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="40" class="svg-title" fill="var(--ink-100)" font-size="17">A anaplasia tomba a balança sozinha.</text>

        <!-- coluna central + base -->
        <rect x="372" y="120" width="16" height="240" rx="6" fill="var(--border-strong)"/>
        <path d="M330 360 L430 360 L410 392 L350 392 Z" fill="var(--bg-glass-strong)" stroke="var(--border-mid)" stroke-width="1.4"/>
        <circle cx="380" cy="124" r="10" fill="var(--ink-70)"/>
        <!-- travessa inclinada (tomba para a direita) -->
        <line x1="232" y1="100" x2="528" y2="148" stroke="var(--ink-90)" stroke-width="5" stroke-linecap="round"/>

        <!-- prato esquerdo (alto, bom prognóstico) -->
        <line x1="232" y1="100" x2="200" y2="158" stroke="var(--border-strong)" stroke-width="1.6"/>
        <line x1="232" y1="100" x2="264" y2="158" stroke="var(--border-strong)" stroke-width="1.6"/>
        <path d="M188 158 Q232 196 276 158 Z" fill="var(--teal-10)" stroke="var(--teal-50)" stroke-width="2"/>
        <text x="232" y="216" text-anchor="middle" class="svg-title" fill="var(--teal-80)" font-size="13">bom prognóstico</text>

        <g class="hs-shape" data-hs-label="Estágio localizado / focal — não salva sozinho" data-hs-text="O fator que a intuição superestima. Estágio localizado ou focal é favorável, sim — mas NÃO neutraliza a anaplasia. É o erro que a abertura desmonta: 'o estágio decide tudo' está incompleto, porque a anaplasia piora o desfecho mesmo em tumor pequeno e localizado." data-hs-hint="Favorável, mas não anula a anaplasia.">
          <rect x="204" y="120" width="56" height="34" rx="7" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="2"/>
          <text x="232" y="142" text-anchor="middle" class="svg-label" fill="var(--teal-80)" font-size="11">estágio</text>
        </g>

        <!-- prato direito (baixo, pior prognóstico) -->
        <line x1="528" y1="148" x2="496" y2="246" stroke="var(--border-strong)" stroke-width="1.6"/>
        <line x1="528" y1="148" x2="560" y2="246" stroke="var(--border-strong)" stroke-width="1.6"/>
        <path d="M484 246 Q528 286 572 246 Z" fill="var(--coral-dim)" stroke="var(--coral-60)" stroke-width="2"/>
        <text x="528" y="306" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="13">pior prognóstico / recorrência</text>

        <!-- anaplasia: peso dominante -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Anaplasia — o principal fator de pior prognóstico" data-hs-text="O peso que tomba a balança. Anaplasia é indiferenciação celular marcada na histopatologia, e é o PRINCIPAL fator de pior prognóstico no Wilms, por elevar muito a recorrência. O detalhe cruel: piora o desfecho mesmo quando focal e em tumor localizado — o estágio não a neutraliza. Histologia diz 'anaplasia' → prognóstico fecha pior." data-hs-hint="Principal fator · pesa mesmo no localizado.">
          <rect x="494" y="170" width="68" height="58" rx="8" fill="var(--err-red-dim)" stroke="var(--err-red)" stroke-width="2.6"/>
          <text x="528" y="196" text-anchor="middle" class="svg-title" fill="var(--err-red)" font-size="13">ANAPLASIA</text>
          <text x="528" y="214" text-anchor="middle" class="svg-label" fill="var(--err-red)" font-size="10">indiferenciação</text>
        </g>

        <!-- metástase: peso menor -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Metástase — pesa menos" data-hs-text="Fator desfavorável, mas secundário diante da anaplasia. A presença de metástase pesa no prognóstico do Wilms — só que menos que a indiferenciação celular. Pesa, não domina." data-hs-hint="Desfavorável · secundário à anaplasia.">
          <rect x="486" y="232" width="40" height="26" rx="6" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="2"/>
          <text x="506" y="250" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="10">metástase</text>
        </g>

        <!-- idade: peso menor -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Idade — pesa menos" data-hs-text="A idade da criança também entra na conta do prognóstico, mas como fator menor. Junto da metástase, ajusta o desfecho nas margens — enquanto a anaplasia decide o lado da balança." data-hs-hint="Fator menor · ajusta nas margens.">
          <rect x="534" y="232" width="40" height="26" rx="6" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="2"/>
          <text x="554" y="250" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="10">idade</text>
        </g>

        <!-- nota -->
        <text x="380" y="424" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="13">Sobrevida boa e cura alta no Wilms — mas a anaplasia inverte o desfecho.</text>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="op8" aria-live="polite">
  <div class="hotspot-detail__label">Clique num peso</div>
  <p class="hotspot-detail__text">O prato direito está em baixo porque a anaplasia (vermelho) pesa mais que tudo — inclusive mais que o estágio localizado do prato esquerdo. Metástase e idade são pesos menores. A pergunta cravada é "o que torna o Wilms mais agressivo?" → anaplasia. Toque cada peso.</p>
</div>
```

---

## P9 — `op9` · Trilho step-through: o enunciado desce até neuroblastoma ou Wilms

**Conceito visual:** um trilho de decisão que parte de um enunciado no topo e desce por quatro perguntas-achado, cada uma um hotspot que mostra como a resposta empurra o fluxo para um lado. À esquerda, a coluna que conduz ao **neuroblastoma** (coral); à direita, ao **Wilms** (teal). As quatro perguntas: "estado geral?", "cruza a linha média?", "catecolamina / guaxinim?", "como achou?". No pé, os dois desfechos como caixas-destino, também hotspots, cada um trazendo um enunciado real-modelo. Metáfora única: trilho bifurcado vertical de raciocínio (a extra-08 usou mapa-de-conduta-com-questões, forma distinta).

**Ponto de inserção:** após o Tópico 2 (parágrafo "estado geral + a massa cruza a linha média? + como foi achada?"), antes dos asides.

```html
<figure class="figure-svg">
  <figcaption><strong>Quatro perguntas e a resposta cai sozinha.</strong> O enunciado entra no topo; cada achado empurra o fluxo para um lado. Resolva sempre pela mesma chave. Clique, toque ou foque cada pergunta e cada desfecho.</figcaption>
  <div class="figure-svg__frame">
    <div class="figure-svg__stage" data-hs-stage="op9" aria-live="polite">
      <svg class="il-op9" data-eso="op9" viewBox="0 0 760 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t-op9 d-op9" font-family="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif">
        <title id="t-op9">Trilho de decisão entre neuroblastoma e tumor de Wilms</title>
        <desc id="d-op9">Trilho de raciocínio que parte de uma criança com massa abdominal no topo e desce por quatro perguntas: estado geral, se a massa cruza a linha média, presença de catecolaminas ou sinal do guaxinim, e como a massa foi achada. As respostas empurram o fluxo para a esquerda, neuroblastoma em coral, ou para a direita, tumor de Wilms em teal. No pé, dois desfechos com enunciados reais modelo. Cada pergunta e cada desfecho é clicável.</desc>
        <defs>
          <marker id="op9-arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="var(--border-strong)"/>
          </marker>
        </defs>
        <rect x="0" y="0" width="760" height="480" rx="22" fill="var(--bg-elevated)"/>
        <text x="40" y="40" class="svg-title" fill="var(--ink-100)" font-size="17">Estado geral · cruza a linha média? · como achou?</text>

        <!-- enunciado de entrada -->
        <rect x="252" y="56" width="256" height="44" rx="11" fill="var(--bg-glass-strong)" stroke="var(--border-mid)" stroke-width="1.8"/>
        <text x="380" y="76" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="13">Criança com massa abdominal</text>
        <text x="380" y="92" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">neuroblastoma OU Wilms — escolha por achados</text>

        <!-- trilho central -->
        <line x1="380" y1="100" x2="380" y2="372" stroke="var(--border-strong)" stroke-width="2" stroke-dasharray="3 5"/>

        <!-- pergunta 1: estado geral -->
        <g class="hs-shape" data-hs-label="Estado geral?" data-hs-text="A primeira chave. Criança DOENTE — febre, palidez, emagrecimento, irritabilidade, HAS — empurra para neuroblastoma (catecolaminas). Criança BEM — corada, afebril, sem queixa além da massa — empurra para Wilms. O estado geral sozinho já inclina metade da decisão." data-hs-hint="Doente → neuroblastoma · bem → Wilms.">
          <rect x="276" y="116" width="208" height="40" rx="9" fill="var(--bg-glass)" stroke="var(--ink-70)" stroke-width="1.8"/>
          <text x="380" y="141" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="13">estado geral?</text>
          <text x="150" y="141" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="11">doente ←</text>
          <text x="610" y="141" text-anchor="middle" class="svg-label" fill="var(--teal-80)" font-size="11">→ bem</text>
        </g>

        <!-- pergunta 2: cruza a linha média -->
        <g class="hs-shape" data-hs-label="Cruza a linha média?" data-hs-text="O discriminador clássico. Massa dura, irregular, que ATRAVESSA a linha média → neuroblastoma. Massa firme, lisa, que NÃO cruza → Wilms. (Há uma exceção de Minas Gerais de Wilms que cruzou — por isso nunca se decide só por um critério, mas este pesa muito.)" data-hs-hint="Cruza → neuroblastoma · não cruza → Wilms.">
          <rect x="276" y="180" width="208" height="40" rx="9" fill="var(--bg-glass)" stroke="var(--ink-70)" stroke-width="1.8"/>
          <text x="380" y="205" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="13">cruza a linha média?</text>
          <text x="150" y="205" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="11">cruza ←</text>
          <text x="610" y="205" text-anchor="middle" class="svg-label" fill="var(--teal-80)" font-size="11">→ não cruza</text>
        </g>

        <!-- pergunta 3: catecolamina / guaxinim -->
        <g class="hs-shape" data-hs-label="Catecolamina / guaxinim?" data-hs-text="Os marcadores do neuroblastoma. HAS, sudorese, rubor, VMA/HVA urinários, equimose periorbitária (guaxinim), opsoclonia-mioclonia, calcificação na imagem → tudo aponta neuroblastoma. Se em vez disso há síndrome (WAGR/Beckwith), aniridia ou hemi-hipertrofia → Wilms." data-hs-hint="Guaxinim/VMA → neuroblastoma · síndrome → Wilms.">
          <rect x="276" y="244" width="208" height="40" rx="9" fill="var(--bg-glass)" stroke="var(--ink-70)" stroke-width="1.8"/>
          <text x="380" y="269" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="13">catecolamina / guaxinim?</text>
          <text x="150" y="269" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="11">sim ←</text>
          <text x="610" y="269" text-anchor="middle" class="svg-label" fill="var(--teal-80)" font-size="11">→ síndrome</text>
        </g>

        <!-- pergunta 4: como achou -->
        <g class="hs-shape" data-hs-label="Como achou?" data-hs-text="O modo de apresentação. Criança trazida por SINTOMAS (doente) → neuroblastoma. Massa achada INCIDENTALMENTE no banho ou em exame de rotina, criança bem → Wilms. Fecha a chave de quatro: estado geral, linha média, marcadores, modo de achado." data-hs-hint="Por sintomas → neuroblastoma · no banho → Wilms.">
          <rect x="276" y="308" width="208" height="40" rx="9" fill="var(--bg-glass)" stroke="var(--ink-70)" stroke-width="1.8"/>
          <text x="380" y="333" text-anchor="middle" class="svg-title" fill="var(--ink-100)" font-size="13">como achou?</text>
          <text x="150" y="333" text-anchor="middle" class="svg-label" fill="var(--coral-80)" font-size="11">sintomas ←</text>
          <text x="610" y="333" text-anchor="middle" class="svg-label" fill="var(--teal-80)" font-size="11">→ no banho</text>
        </g>

        <!-- conectores aos desfechos -->
        <path d="M276 350 Q150 360 150 384" fill="none" stroke="var(--coral-60)" stroke-width="2" marker-end="url(#op9-arr)"/>
        <path d="M484 350 Q610 360 610 384" fill="none" stroke="var(--teal-50)" stroke-width="2" marker-end="url(#op9-arr)"/>

        <!-- desfecho neuroblastoma -->
        <g class="hs-shape" data-hs-tone="danger" data-hs-label="Desfecho: neuroblastoma (enunciado real)" data-hs-text="Enunciado-modelo: 'lactente de 2 anos, aumento do volume abdominal, emagrecimento, palidez, febre, irritabilidade, com hipertensão, equimose periorbitária e massa em loja renal atravessando a linha média'. Criança doente + cruza + guaxinim → neuroblastoma. Cada achado do enunciado aponta para o mesmo lado." data-hs-hint="Doente + cruza + guaxinim = neuroblastoma.">
          <rect x="44" y="388" width="212" height="68" rx="11" fill="var(--coral-40)" stroke="var(--coral-60)" stroke-width="2.4"/>
          <text x="150" y="416" text-anchor="middle" class="svg-title" fill="var(--coral-80)" font-size="15">NEUROBLASTOMA</text>
          <text x="150" y="436" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">doente · cruza · guaxinim · por sintomas</text>
        </g>

        <!-- desfecho Wilms -->
        <g class="hs-shape" data-hs-label="Desfecho: Wilms (enunciados reais)" data-hs-text="Dois enunciados-modelo. 'Criança de 2 anos, bem, massa endurecida, fixa, indolor, achada no banho' → Wilms. E o enunciado-síndrome: 'menino de 18 meses, sem queixa, massa endurecida, hipospádia (alteração genitourinária) e membro maior que o outro (hemi-hipertrofia)' → WAGR/risco aumentado → Wilms. Criança bem + não cruza + achado no banho." data-hs-hint="Bem + não cruza + no banho/síndrome = Wilms.">
          <rect x="504" y="388" width="212" height="68" rx="11" fill="var(--teal-30)" stroke="var(--teal-50)" stroke-width="2.4"/>
          <text x="610" y="416" text-anchor="middle" class="svg-title" fill="var(--teal-80)" font-size="15">TUMOR DE WILMS</text>
          <text x="610" y="436" text-anchor="middle" class="svg-label" fill="var(--ink-70)" font-size="11">bem · não cruza · no banho · síndrome</text>
        </g>
      </svg>
    </div>
  </div>
</figure>
<div class="hotspot-detail" data-hs-detail-for="op9" aria-live="polite">
  <div class="hotspot-detail__label">Clique numa pergunta</div>
  <p class="hotspot-detail__text">O enunciado entra no topo e desce por quatro perguntas; cada resposta empurra para a esquerda (neuroblastoma, coral) ou direita (Wilms, teal). Os dois desfechos no pé trazem os enunciados reais que a banca repete. Toque cada pergunta e cada caixa-destino.</p>
</div>
```

---

## Notas de empacotamento (para o Executor)

- **Engine:** idêntica à extra-08 — `initInteractive` lê `.figure-svg__stage[data-hs-stage="opN"]`, ativa cada `.hs-shape` (clique/toque/foco por teclado, `tabindex`/`role` injetados pela engine) e escreve `data-hs-label` + `data-hs-text` no `.hotspot-detail[data-hs-detail-for="opN"]`. Nenhum JS novo: reusar `onco-ped-interactive.js` apontando para a mesma engine.
- **Naming:** `op1..op9` (op = onco-pediátrica), 1 por página P1..P9, sem colisão com `tes1..tes12` da extra-08.
- **Inserção:** cada bloco entra no ponto indicado em "Ponto de inserção" de cada SVG (casado com a prosa da §6 do design). O `figure.med` (imagem real) das páginas P2/P4/P5/P6 fica APÓS o `figure-svg`, conforme piso por página.
- **Tokens:** 100% `var(--…)` — nenhum hex. Conferidos contra `tokens.css`/`components.css` (teal-05..100, coral-30..100/dim, ink-30..100, bg-elevated/elevated-2/glass/glass-strong/base, border-soft/mid/strong, ok-green/-dim, err-red/-dim, warn-amber/-dim).
- **Fallback estático:** cada SVG ensina sem JS — `<title>`/`<desc>` descritivos + rótulos/percentuais/setas impressos no próprio desenho; o `hotspot-detail` já traz o resumo no estado inicial. Texto soberano: a página ensina mesmo sem o SVG.
- **Acessibilidade:** `role="img"` + `aria-labelledby` em todo SVG; `aria-live="polite"` no stage e no detail; sem SMIL/animação; contraste por tokens da paleta dark Bauer.
- **Anti-metalinguagem:** zero "vamos ver / observe / nesta aula / o professor" em `<text>`, `data-hs-*`, `figcaption` e `desc` — apenas termo técnico direto e voz de prova.
```

