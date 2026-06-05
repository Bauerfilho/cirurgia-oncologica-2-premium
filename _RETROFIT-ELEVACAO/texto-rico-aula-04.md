# Retrofit de Elevação — Texto Rico · Aula 04 (Tumores Hepáticos)

**Repo**: `cirurgia-oncologica-2-premium` · **Alvo**: `aulas/aula-04/index.html` (HTML `p1`..`p14`, 14 páginas)
**Fonte de minúcia**: `transcricoes/a4-tumores-hepaticos.txt` (transcrição original, ~10.800 palavras)
**Referência de densidade**: `_RETROFIT-ELEVACAO/texto-rico-aula-03.md` (modelo aprovado) + `aulas/aula-01,02,03`.

> **Mapa de numeração (confirmado lendo o HTML):** o HTML tem 14 `data-page`, e o `p1` é o **dashboard / Mapa da aula** (`id="page-p1"`, livestrip de perfusão, métricas, trilha, painéis). Portanto a **P1 É o dashboard** (offset zero em relação à própria numeração visível: as `page-tag` dizem "Página N / 14" e batem com o ID `pN`). O `p1` (dashboard) **não recebe blocos novos** — já é síntese navegável completa. Os blocos abaixo enriquecem **p2..p14** (as 13 páginas de conteúdo).

> **Escopo da fonte — o que NÃO entra:** a transcrição abre com metalinguagem (mapas mentais, "avalia a aula", "nós professores que fizemos a aula contigo", "assiste lá como se fosse uma mini aula") e contém uma **tangente sobre câncer de pâncreas** (o "abraço fatal", invasão de mesentérica/tronco celíaco, mapa mental extra). **Nada disso entra**: pâncreas está fora do escopo (não há página de pâncreas nesta aula — só menções de relance ao CA 19-9 como marcador, que já estão na página) e metalinguagem é proibida. Foi extraído **apenas** o conteúdo médico de tumores hepáticos que casa com as 14 páginas.

---

## REGRAS DE EXECUÇÃO (para o Executor — ler antes de tocar no HTML)

1. **PRESERVAÇÃO ABSOLUTA.** Nada do que já existe é removido, reescrito ou reordenado. Prosa, `topic-h`, quizzes (`div.quiz`), SVGs (`figure-svg` + `hs-shape` + `hotspot-detail`), `figure.med`, openers (`opener--case`/`--mnemonic`/`--trap`/`--bust`), `reveal`, `toggle-switch`/`toggle-panel`, `cmp`, `mnemonic`, `practice`, `finding`, `op-summary`, `split`, dashboard, `livestrip` e `page-nav` — **intocados**. Você só **insere** os blocos abaixo nos pontos indicados.

2. **VOCABULÁRIO DO CHASSI — usar SÓ classes verificadas em `assets/css/components.css`.** Usadas aqui: `prose` (+ inline `.term`, `.highlight`), `topic-h`, `card`, `card--accent`, `card--info`, `card--success`, `card--mnemonic`, `card--densify` (+ `span.densify-tag`), `mnemonic` (+ `.mnemonic__label`/`.mnemonic__text`), `dont-confuse` (+ `.dont-confuse__label`/`.dont-confuse__grid`/`.dont-confuse__side` + `h4`/`p`), e as tags semânticas `tag-danger`/`tag-trap`/`tag-good`. **`callout` NÃO EXISTE neste CSS** — onde um briefing genérico falaria "callout", mapeei para `card--accent` (insight), `card--info` (lista comentada), `card--mnemonic`/`mnemonic` (frase-âncora) e `card--densify` (nota/consolidação). `split` existe e é válido, mas não foi necessário. Não invente classe nova.

3. **Numeração de tópicos.** O HTML usa `topic-h` **sem** "Tópico N" (cabeçalho-insight puro). Os novos blocos entram com `topic-h` no mesmo estilo. Não renumere nem reestilize cabeçalhos pré-existentes.

4. **Voz.** Professor denso explicando direto ao aluno. PT-BR, técnico, **zero metalinguagem** ("nesta aula", "o professor", "neste módulo", "vamos ver", "a seguir", "como vimos", "próxima página", "aula seguinte", "mapa mental", "avalia a aula"). Negrito nas palavras-chave. Cada caixinha = cabeçalho-insight (`topic-h`) + prosa densa OU lista comentada (nunca bullet seco).

5. **Onde inserir.** Cada bloco diz "INSERIR APÓS [âncora]". A âncora é um trecho literal já presente no HTML. Inserir imediatamente **depois** do nó indicado e **antes** do próximo nó nomeado (em geral, antes da primeira `<div class="quiz">` da página, salvo indicação).

6. **Cobertura 100% da fonte é gate.** O mapa ao final lista cada núcleo hepático do roteiro/transcrição e em qual página/bloco foi enriquecido. Nenhum item hepático da fonte fica de fora; nenhum fato fora da fonte foi inventado; pâncreas e metalinguagem foram descartados por estarem fora do escopo das 14 páginas.

---

# HTML p2 — O caso da enfermeira: o tumor do bem que matou

**O que a página já tem**: `opener--case` (enfermeira, 45 anos), prose da "área pretinha = sangue", `reveal` em 4 atos (chegada/recidiva/achado/a pergunta), prose da virada ("benignos também merecem atenção, caem mais que os malignos"), `card--accent` "A pista que entrega o diagnóstico", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: a **inversão de raciocínio que organiza a aula inteira** — por que, no fígado e só no fígado, o tumor *benigno* entra no estudo (em todo o resto do tubo só os malignos importavam, "homem velho com hábitos ruins"); e o **enquadramento do "duas-caras"** como figura mnemônica antes de a página chegar ao adenoma na p9 — o vilão que "parece do bem e te mata sangrando", tipicamente da mulher (carga hormonal). A página tem a virada, mas não destrincha *por que* o benigno passa a importar nem ancora o apelido.

### Bloco p2-A — INSERIR APÓS o terceiro `<div class="prose">` (o `</div>` que fecha "...parece do bem, mas pode te matar sangrando. É o 'duas-caras' desta aula."), ANTES do `card--accent` "A pista que entrega o diagnóstico".

```html
<h3 class="topic-h">Por que, só no fígado, o tumor benigno entra no estudo</h3>
<div class="prose">
  <p>Há uma assimetria que vale tornar explícita. Em todo o resto do tubo digestivo — esôfago, estômago, colorretal —, só os tumores <strong>malignos</strong> importavam, porque são eles que se opera, conduz e trata; e o perfil do paciente era sempre o mesmo, <strong>homem mais velho com hábitos ruins</strong>. O fígado quebra essa regra. Aqui os tumores <strong>benignos também podem matar</strong> — e, por isso, também merecem atenção e <strong>caem até mais em prova</strong> que os malignos. Com a mudança do tipo de tumor, muda também o perfil: o tumor hepático benigno é tipicamente da <strong>mulher</strong>, ao contrário do maligno, comum no homem.</p>
</div>

<h3 class="topic-h">O "duas-caras": benigno na histologia, letal no comportamento</h3>
<div class="prose">
  <p>O apelido "<strong>duas-caras</strong>" não é enfeite — é a ideia que organiza o raciocínio. A lesão tem <strong>uma cara do bem</strong> (histologia benigna, sem potencial de invadir como um câncer) e <strong>uma cara do mal</strong> (pode romper e sangrar até o choque). Foi exatamente o que aconteceu com a enfermeira: um tumor sem malignidade histológica matou pela hemorragia, não pela biologia maligna. Guardar essa dupla face desde já evita o erro mais comum diante de uma massa hepática volumosa — concluir "tumorzão no fígado, logo é câncer" — quando o que matou foi um <strong>benigno que sangrou</strong>.</p>
</div>
```

---

# HTML p3 — A regra de ouro: por que o fígado não se biopsia

**O que a página já tem**: prose de abertura (regra de ouro herdada da Aula 1; segunda razão = sangra), `split` (não biopsia × pode biopsiar, com a lista de vísceras), `card--info` "A consequência prática" (diagnóstico por imagem), `mnemonic` "O detalhe exclusivo do fígado", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: a **dupla razão destrinchada** — a página cita "semear célula + sangrar", mas a fonte é enfática no *porquê* do sangramento ser catastrófico no fígado (beliscar um tumor hipervascularizado e pegar um vaso importante = hemorragia incontrolável "até o paciente morrer"); e a **lista completa de vísceras "só por imagem"** que a fonte enumera (fígado, pâncreas, rim, baço, jejuno, íleo, sarcoma de retroperitônio, ovário) com o critério unificador — víscera sem acesso endoscópico ao lúmen.

### Bloco p3-A — INSERIR APÓS o `<div class="mnemonic">` "O detalhe exclusivo do fígado" (o `</div>` que fecha o `.mnemonic`), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">Por que a hemorragia, no fígado, é a razão que pesa mais</h3>
<div class="prose">
  <p>Vale separar as duas razões porque elas não têm o mesmo peso clínico imediato. A primeira — <strong>semear célula neoplásica pelo trajeto da agulha</strong> — vale para toda víscera sólida e é o motivo "oncológico" de não puncionar. A segunda é exclusiva do fígado e é a que mata na hora: muitos tumores hepáticos são <strong>hipervascularizados</strong>, e basta a agulha <strong>pegar um vaso importante</strong> ao retirar o fragmento para abrir uma <strong>hemorragia que não se controla</strong> — sangra até o paciente morrer. Não é um risco teórico de seguimento, é um risco de procedimento. Por isso, no fígado, a biópsia percutânea de rotina simplesmente não é uma opção.</p>
</div>

<div class="card card--info">
  <h3>A lista das vísceras que se diagnostica por imagem</h3>
  <p>O critério é único: <strong>víscera sem acesso endoscópico ao lúmen</strong> não se biopsia de rotina — diagnostica-se por imagem. Entram nessa lista <strong>fígado, pâncreas, rim, baço, jejuno, íleo, sarcoma de retroperitônio e ovário</strong>. O tubo digestivo alto e baixo é a exceção justamente porque a câmera entra por dentro do lúmen (endoscopia, colonoscopia) e a pinça pega o fragmento sem atravessar a cavidade — foi a lógica das Aulas 1 a 3. Diante de uma massa em qualquer víscera dessa lista, a pergunta nunca é "que agulha uso?", é "<strong>que imagem dinâmica peço?</strong>".</p>
</div>
```

---

# HTML p4 — Ler a TC trifásica: TC ou RM? Qual fase?

**O que a página já tem**: prose de abertura (TC dinâmica = mais completa; 3 fases + sem contraste = 4 imagens), `toggle-switch` modalidade (TC/RM com osso branco), `card--info` da fase arterial (aorta brilhando + as 3 fases + alerta da cava), `mnemonic` "A rotina que nunca falha", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê fisiológico das duas perguntas de orientação** — por que "osso branco = TC" (o cálcio ósseo é denso e a TC mede densidade; a RM não gera esse branco do osso cortical) e por que "todo tumor é hipodenso sem contraste, independente da etiologia" (sem contraste não há o que diferenciar — só na captação as lesões se separam). A página afirma os atalhos; a fonte explica de onde vêm, o que blinda contra a pegadinha de inverter o sinal.

### Bloco p4-A — INSERIR APÓS o `<div class="mnemonic">` "A rotina que nunca falha" (o `</div>` que fecha o `.mnemonic`), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">Por que os dois atalhos funcionam sempre</h3>
<div class="prose">
  <p>Os dois atalhos não são truques — saem da física do exame. <strong>Osso branco = TC</strong> porque a tomografia mede <strong>densidade</strong>, e o cálcio ósseo é o tecido mais denso do campo: ele brilha. A ressonância não forma esse branco do osso cortical, então a ausência de osso brilhante aponta RM. <strong>Aorta brilhando "feito o sol" = fase arterial</strong> porque o contraste, recém-injetado, ainda está concentrado nas <strong>artérias</strong> antes de se distribuir; é a única fase em que o maior vaso arterial do campo acende. Comparar as quatro imagens e achar a que tem a aorta acesa é localizar a arterial sem precisar de legenda.</p>
  <p>Há ainda um detalhe que padroniza a leitura: <strong>na fase sem contraste, todo tumor é hipodenso (mais escuro), qualquer que seja a etiologia</strong>. Faz sentido — sem contraste não há nada que diferencie um tumor do outro; só quando o contraste entra é que cada lesão revela seu padrão de captação. Por isso a fase sem contraste serve de linha de base, não de diagnóstico: é a partir da arterial que hemangioma, HNF, adenoma, CHC e metástase começam a se separar.</p>
</div>
```

---

# HTML p5 — As duas perguntas: captação arterial e washout

**O que a página já tem**: prose de abertura (só duas coisas a buscar: captação arterial + washout), `figure-svg` curva de perfusão com 2 hotspots (captação/washout) + `hotspot-detail`, `card--accent` "O conceito que muda o gabarito: washout", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **mecanismo vascular por trás das duas perguntas** — por que captar rápido E lavar rápido significa "<strong>muito vascularizado</strong>" (vasos novos, criados, em que o sangue chega e sai depressa) e por que captar devagar e reter significa "<strong>pouco vascularizado</strong>" (vasos "bobos", em que tudo é lento); e o **passo intermediário que a página resume** — o tumor faz washout porque, sendo tão vascularizado, joga o contraste para fora *mais rápido que o parênquima saudável*, ficando escuro enquanto o fígado ao redor ainda está claro. Esse "mais rápido que o vizinho" é o detalhe que explica visualmente por que ele escurece.

### Bloco p5-A — INSERIR APÓS o `<div class="card card--accent">` "O conceito que muda o gabarito: washout" (o `</div>` que fecha o card), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">Vascularização é tudo: o que "rápido" e "devagar" realmente querem dizer</h3>
<div class="prose">
  <p>As duas perguntas, no fundo, medem uma só coisa: <strong>o quanto o tumor é vascularizado</strong>. Um tumor <strong>muito vascularizado</strong> é feito de <strong>vasos novos, criados</strong> — onde o sangue chega rápido e sai rápido. Por isso ele <strong>capta rápido</strong> na arterial e <strong>elimina rápido</strong> depois: entrou veloz, saiu veloz. Vaso novo, criado, é a assinatura de quem tem muito hormônio ou de quem tem câncer. No extremo oposto, um tumor <strong>pouco vascularizado</strong> tem "<strong>vasos bobos</strong>": o contraste <strong>entra devagar e fica retido</strong>, porque não há por onde escoar com pressa. Captação lenta + retenção = pouco vascularizado = quase sempre benigno.</p>
</div>

<h3 class="topic-h">Por que o washout deixa o tumor mais escuro que o fígado</h3>
<div class="prose">
  <p>O ponto que costuma confundir é <em>por que</em> a lesão fica mais escura que o parênquima na fase tardia. A chave é a <strong>comparação com o vizinho</strong>. Um tumor que faz washout é tão vascularizado que joga o contraste para fora <strong>mais rápido do que o parênquima hepático saudável</strong> consegue. Então, na fase portal, acontece a inversão: o fígado ao redor ainda está <strong>captando/retendo</strong> o contraste (claro), enquanto o tumor já o <strong>despejou</strong> (escuro). É essa diferença de velocidade — tumor mais veloz que o fígado — que produz o <strong>hiper que vira hipo</strong>. E é por isso que washout e hipercaptação arterial andam juntos: quem joga rápido para fora é porque entrou rápido também. A combinação <strong>hipercaptação arterial + washout</strong> é a assinatura do câncer.</p>
</div>
```

---

# HTML p6 — Os quatro padrões de captação arterial

**O que a página já tem**: prose de abertura (toda a interpretação se resume a 4 padrões), `figure-svg` com 4 lesões hotspot (periférica/cicatriz/hipercaptação/hipocaptação) + `hotspot-detail`, `card--info` "Como isso vira enunciado", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: a **lógica de que os 4 padrões são uma escala de vascularização** — não quatro coisas soltas, mas um eixo que vai de "não capta" (metástase, veio de fora) até "capta tudo e lava" (câncer), e onde cada tumor cai nesse eixo *explica* seu padrão; e a leitura da fonte de que **a quarta possibilidade (hipocaptante) é "a que não se associa a ninguém" dos tumores que nascem no fígado** — daí a inferência de que, se não capta, veio de fora. A página lista os 4; a fonte os encadeia num raciocínio único.

### Bloco p6-A — INSERIR APÓS o `<div class="card card--info">` "Como isso vira enunciado" (o `</div>`), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">Os quatro padrões são uma única escala de vascularização</h3>
<div class="prose">
  <p>Os quatro padrões parecem itens de lista, mas são pontos de <strong>uma mesma régua</strong>: o quanto o tumor é vascularizado. Num extremo, a <strong>hipocaptação</strong> — não capta nada, fica escuro em todas as fases. É o padrão que <strong>não se associa a nenhum</strong> tumor que nasce no fígado, e essa é justamente a pista: se a lesão não capta, ela <strong>veio de fora</strong> — é metástase. No outro extremo, a <strong>hipercaptação</strong> — capta tudo de uma vez, sinal de muitos vasos novos: maligno, ou com potencial de virar maligno. Entre os dois, dois padrões de tumor pouco vascularizado mas com forma própria: a <strong>captação periférica centrípeta</strong> (o contraste entra devagar pela borda e avança ao centro — hemangioma) e a <strong>cicatriz/estrela central</strong> (capta em volta, com o meio vazio — HNF). Ler o padrão é, no fundo, estimar a vascularização e, daí, o diagnóstico.</p>
</div>
```

---

# HTML p7 — Hemangioma: o tumor hepático mais comum de todos

**O que a página já tem**: prose dupla de abertura (mais comum de todos; pegadinha do cisto/equinococose; pouco vascularizado, vasos bobos, periférica centrípeta retida, não sangra), `figure-svg` 3 fases hotspot + `hotspot-detail`, prose de transição para a imagem real, `figure.med` (hemangioma, fonte), tabela `cmp` dos 3 benignos, `opener--trap` da pegadinha do "comum", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: a **distinção fina "ter muito vaso" × "ser muito vascularizado"** — a página menciona "vasos bobos", mas a fonte faz uma distinção conceitual explícita que cai em prova: o hemangioma *tem* muito vaso (por isso o nome), mas os vasos são "bobos" (sangue não chega nem sai rápido); ter muito vaso ≠ ser muito vascularizado, e essa diferença separa benigno de maligno; e a regra de prova de que **a captação periférica fecha hemangioma "não importa o tamanho"** — existe a entidade *hemangioma gigante*, e respeitar o passo a passo evita marcar "câncer" diante de um hemangioma enorme.

### Bloco p7-A — INSERIR APÓS o `<div class="opener opener--trap">` "A pegadinha do 'comum'" (o `</div>` que fecha o opener), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">Ter muito vaso ≠ ser muito vascularizado — a distinção que a prova cobra</h3>
<div class="prose">
  <p>O nome <strong>hemangioma</strong> sugere um tumor cheio de vasos, e ele é mesmo — mas aqui mora uma distinção que separa benigno de maligno. <strong>Ter muito vaso</strong> não é o mesmo que <strong>ser muito vascularizado</strong>. O hemangioma <em>nasceu</em> com muito vaso, só que são <strong>vasos "bobos"</strong>: o sangue não chega rápido nem sai rápido por eles. <strong>Ser muito vascularizado</strong> é outra coisa — é ter <strong>vasos novos, criados</strong>, em que o sangue entra e escoa depressa, o que aparece quando há muito hormônio ou um câncer. Por isso o hemangioma, apesar do nome, capta <strong>devagar pela periferia</strong> e <strong>retém</strong> o contraste: muitos vasos, mas lentos. Essa frase — "tem muito vaso, mas não é vascularizado" — é exatamente o tipo de sutileza que a banca usa para testar quem entendeu o mecanismo.</p>
</div>

<div class="card card--densify">
  <span class="densify-tag">A regra que blinda contra a pegadinha do tamanho</span>
  <p>A captação <strong>periférica, globuliforme, centrípeta com retenção</strong> fecha hemangioma <strong>independentemente do tamanho da lesão</strong>. Existe, inclusive, a entidade <strong>hemangioma gigante</strong> — uma massa enorme que continua sendo um hemangioma benigno. O erro clássico é olhar um "tumorzão" no fígado e marcar câncer pela impressão. Respeitar o passo a passo (osso branco? aorta acesa? como capta?) desarma isso: capta só na periferia, de fora para dentro, e retém → hemangioma, por maior que seja.</p>
</div>
```

---

# HTML p8 — Hiperplasia nodular focal: a cicatriz central

**O que a página já tem**: prose dupla (mecanismo: malformação vascular boba que produz fatores de crescimento → hepatócitos hiperplasiados em nódulos → daí o nome; imagem em estrela, cores invertem na portal mas a estrela permanece), `card--info` "Quando HNF e adenoma se confundem — o Primovist resolve", `toggle-switch` Primovist (capta=HNF / não capta=adenoma), `mnemonic` "A regra do Primovist em uma frase", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: a **inversão de cores fase a fase explicada pelo que cada componente faz** — a página diz "as cores se invertem", mas a fonte detalha o porquê: na arterial os *hepatócitos hiperplasiados* (periferia) captam rápido e o *vaso bobo* (centro) não; na portal os hepatócitos já eliminaram e o contraste enfim chega ao vaso lento, então o centro clareia e a borda escurece — a estrela persiste porque os dois componentes só trocam de turno; e a **decomposição literal do nome** (hiperplasia = hepatócitos multiplicando; nodular = em nódulos; focal = só ao redor da malformação) como ferramenta de raciocínio.

### Bloco p8-A — INSERIR APÓS o `<div class="mnemonic">` "A regra do Primovist em uma frase" (o `</div>` que fecha o `.mnemonic`), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">Por que a estrela persiste — e por que as cores trocam de turno</h3>
<div class="prose">
  <p>A imagem em estrela não se mantém por acaso: ela tem dois componentes com velocidades opostas, e eles só revezam quem está aceso. Na <strong>fase arterial</strong>, os <strong>hepatócitos hiperplasiados</strong> ao redor — que funcionam a todo vapor, mais rápido que o fígado normal — <strong>captam rápido</strong> e ficam brancos; o <strong>centro</strong>, que é a <strong>malformação vascular boba</strong>, ainda não captou e fica escuro. Resultado: borda clara, centro escuro. Na <strong>fase portal</strong>, os hepatócitos já <strong>eliminaram</strong> o contraste (escurecem), enquanto o contraste enfim <strong>chega ao vaso lento do centro</strong> (clareia). As cores se invertem — centro branco, borda escura —, mas a <strong>imagem em estrela permanece o tempo inteiro</strong>, porque o que muda é apenas qual componente está realçando. É essa persistência da cicatriz central, em qualquer fase, que assina a HNF.</p>
</div>

<div class="card card--info">
  <h3>O nome decodificado vira o diagnóstico</h3>
  <p>O nome parece inútil, mas decomposto entrega o mecanismo. <strong>Hiperplasia</strong> = hepatócitos se <strong>multiplicando</strong> (não é câncer, é proliferação de células normais). <strong>Nodular</strong> = essa multiplicação se organiza <strong>em nódulos</strong>. <strong>Focal</strong> = acontece <strong>só ao redor</strong> de uma malformação vascular pontual, que joga fatores de crescimento sobre os hepatócitos vizinhos. Por isso a HNF é feita de <strong>hepatócitos saudáveis, apenas hiperestimulados</strong> — sem mutação — e por isso ela <strong>capta o contraste hepatoespecífico (Primovist)</strong>, ao contrário do adenoma. Ler o nome devagar já antecipa tanto a imagem quanto o teste que a separa do adenoma.</p>
</div>
```

---

# HTML p9 — Adenoma: o duas-caras que sangra

**O que a página já tem**: `opener--mnemonic` ("tumor hepático que sangrou? marque adenoma"), prose dupla (duas-caras, mulher jovem, hormonal, anticoncepcional/anabolizante, sequência adenoma→carcinoma, hipervascularizado/rompe/sangra), `opener--bust` ("a TC descreveu hemangioma" → marque adenoma), `card--info` "O detalhe de imagem que separa adenoma de washout" (hiper→iso, "ninja", cicatriz pode confundir com HNF), `card--accent` "Conduta — a régua dos 5 cm" (≤5cm suspende hormônio/acompanha; >5cm opera; beta-catenina opera; sangrando = embolização), prose + `figure.med` adenoma real, 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê de a carga hormonal explicar o perfil "mulher jovem"** — a página diz "hormonal → mulher jovem", mas a fonte raciocina o passo: quem tem mais hormônio circulante é a mulher *jovem* (não a de mais idade), e mais hormônio = mais vascularizado = maior e mais propenso a sangrar; o **mecanismo do "ninja" destrinchado** (por que fica iso e não hipo: os hepatócitos mutantes captam rápido mas eliminam o contraste *não tão rápido quanto o carcinoma* — escoam na mesma velocidade do parênquima, então se misturam e "somem", em vez de ficar mais escuros); e a **lógica do tratamento do sangramento** (por que não operar a instável: hepatectomia em paciente em choque hemorrágico = morte; o tumor costuma estar no meio do parênquima, sem acesso cirúrgico ao vaso — daí a hemodinâmica achar e embolizar o vaso nutridor; quando sangra "normalmente já é grande", então a cirurgia eletiva posterior costuma ser indicada de qualquer modo).

### Bloco p9-A — INSERIR APÓS o `<div class="card card--info">` "O detalhe de imagem que separa adenoma de washout" (o `</div>` que fecha o card), ANTES do `card--accent` "Conduta — a régua dos 5 cm".

```html
<h3 class="topic-h">Por que "mulher jovem": a carga hormonal é o motor</h3>
<div class="prose">
  <p>A associação "adenoma = mulher jovem" não é estatística solta — é consequência direta de ser um tumor <strong>hormonal</strong>. Quanto mais hormônio circulante, mais chance de ter adenoma e maior e mais vascularizado ele fica. E quem tem mais hormônio circulante? A <strong>mulher jovem</strong>, não a de mais idade — a carga hormonal dela é muito maior. Some-se a isso o <strong>hormônio exógeno</strong>: anticoncepcional oral e anabolizantes. É por isso que a fatia da população com adenoma é de mulheres mais jovens do que nos outros dois benignos, e por que parar o hormônio é parte central da conduta: tira-se o combustível do tumor.</p>
</div>

<h3 class="topic-h">Por que o adenoma "some" (iso) e não escurece (hipo)</h3>
<div class="prose">
  <p>O comportamento de "ninja" tem mecanismo. O adenoma é feito de <strong>hepatócitos mutantes</strong> (um hepatócito normal que, ao longo das mitoses da vida, acumulou um erro — a <strong>sequência adenoma → carcinoma</strong>, a mesma do colorretal). Esses mutantes <strong>captam rápido</strong> na arterial (são hipervascularizados), mas, ao eliminar o contraste, fazem isso <strong>não tão rápido quanto o carcinoma</strong>: escoam praticamente na <strong>mesma velocidade do parênquima saudável</strong>. Resultado: na fase portal o tumor fica com a <strong>mesma densidade do fígado ao redor</strong> — <strong>isodenso</strong> — e some, como se jogasse uma bomba de fumaça. É essa igualdade de velocidade com o parênquima que produz o "iso", em contraste com o washout do câncer, que é <em>mais</em> veloz que o parênquima e por isso fica <strong>hipo</strong> (mais escuro). Hiper → iso = adenoma; hiper → hipo = câncer.</p>
</div>
```

### Bloco p9-B — INSERIR APÓS o `<div class="card card--accent">` "Conduta — a régua dos 5 cm" (o `</div>` que fecha o card com a lista de conduta), ANTES do `<div class="prose">` de transição para a `figure.med` ("Veja o adenoma numa TC real...").

```html
<h3 class="topic-h">Por que a instável não vai para a hepatectomia — a hemodinâmica resolve</h3>
<div class="prose">
  <p>Vale destrinchar o último item da régua, porque é o que o caso da enfermeira cobra. Quando o adenoma <strong>está sangrando agora</strong> e o paciente está <strong>instável</strong>, a hepatectomia de urgência <strong>não</strong> é a saída — operar um fígado em paciente em choque hemorrágico é condená-lo. Soma-se um problema técnico: o tumor costuma estar <strong>no meio do parênquima hepático</strong>, sem acesso cirúrgico fácil ao vaso que sangra. Por isso a conduta é <strong>hemodinâmica</strong>: por angiografia, <strong>encontra-se o vaso nutridor</strong> do tumor e faz-se a <strong>embolização</strong> — fecha-se o vaso, o sangramento para. É praticamente a única forma de estancar uma hemorragia tão central. Estabilizado o paciente, a avaliação eletiva vem depois — e, como tumor que sangra "normalmente já é grande", a ressecção costuma estar indicada de qualquer modo, agora em condições seguras.</p>
</div>
```

---

# HTML p10 — Hepatocarcinoma: cirrose, alfa-fetoproteína e washout

**O que a página já tem**: prose dupla (CHC = maligno primário mais comum; cirrose é o fator de risco, hepatite C principal, B/gordurosa/álcool; regra "passa pela cirrose, exceto hepatite B"; marcadores do módulo: CA 19-9/CEA/CA 72-4/AFP; clínica dor+icterícia+consumptiva; diagnóstico por imagem), `figure-svg` CHC com 3 hotspots (hipercaptação/washout/pseudocápsula) + `hotspot-detail`, `practice` "Treine o olho na transição", prose + `figure.med` (3 fases reais), 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê de só a hepatite B pular a cirrose** — a página afirma a exceção, mas a fonte enquadra a regra "tudo que causa cirrose pode causar CHC, mas tem que passar pela cirrose" e a B como a única que gera CHC diretamente; e o **mecanismo da pseudocápsula** (o CHC não tem cápsula verdadeira — é maligno e heterogêneo —, mas tem dificuldade de escoar o contraste na borda, formando um anel de realce só na fase portal; "ninguém sabe bem por quê", mas o achado completa o diagnóstico). A página tem os achados; a fonte explica o "pseudo" e amarra a regra da hepatite B.

### Bloco p10-A — INSERIR APÓS o `<div class="practice">` "Treine o olho na transição" (o `</div>` que fecha o `.practice`), ANTES do `<div class="prose">` de transição para a `figure.med` ("O esquema mostrou as duas fases em desenho...").

```html
<h3 class="topic-h">A regra da cirrose — e por que a hepatite B é a única exceção</h3>
<div class="prose">
  <p>A regra geral é direta: <strong>tudo que causa cirrose pode causar hepatocarcinoma</strong> — hepatite C (a principal causa de cirrose e, por consequência, de CHC), doença hepática gordurosa (antiga esteatose), álcool. E o ponto que cai: <strong>para gerar CHC, é preciso passar pela cirrose</strong>. O fígado precisa percorrer o caminho da agressão crônica → fibrose → cirrose → câncer. Há <strong>uma única condição que pula essa etapa</strong>: a <strong>hepatite B</strong>, capaz de gerar hepatocarcinoma <strong>sem cirrose prévia</strong>. É por isso que a B é a exceção memorável — enquanto C, gordurosa e álcool dependem da cirrose instalada, a B atalha o processo.</p>
</div>

<h3 class="topic-h">A pseudocápsula: por que "pseudo" e por que só na fase portal</h3>
<div class="prose">
  <p>O terceiro achado fecha o diagnóstico e merece o "pseudo" do nome. O hepatocarcinoma <strong>não tem cápsula verdadeira</strong> — é um tumor maligno, heterogêneo, que não respeita limites como uma lesão encapsulada faria. Ainda assim, ele costuma exibir um <strong>anel de realce ao redor</strong>, que aparece <strong>só na fase portal</strong>: o tumor tem <strong>dificuldade de escoar o contraste na borda</strong>, e essa retenção periférica desenha a falsa cápsula. O mecanismo exato não é totalmente conhecido, mas o achado é constante o bastante para entrar na tríade de imagem do CHC: <strong>hipercaptação arterial → washout na portal → pseudocápsula</strong>. Os três juntos selam o diagnóstico sem precisar de agulha.</p>
</div>
```

---

# HTML p11 — CHC: Child, Milão e o tratamento de Barcelona

**O que a página já tem**: prose de abertura (Barcelona/BCLC, fluxograma denso simplificado em 3 caminhos: ressecar/transplantar/paliar; transplante é o melhor mas não há fígado p/ todos; opera quem aguenta), `figure-svg` árvore de decisão com 3 hotspots (Child A→resseca / não-A→Milão / fora de Milão→paliação) + `hotspot-detail`, `toggle-switch` Milão (tamanho/número × o óbvio que exclui), `card--info` "A paliação do CHC" (não QT sistêmica/hepatotóxica; TACE; sorafenibe), 2 quizzes.
**O que a fonte ensina e a página comprimiu**: a **lógica de por que o transplante é "o melhor" mas não o primeiro** — a página diz "melhor mas falta fígado"; a fonte raciocina: o fígado já é doente (cirrótico), então trocar o órgão inteiro cura a doença de base e o câncer, mas como não há órgão para todos, tenta-se primeiro operar quem aguenta (a ressecção não cura a cirrose, mas dá sobrevida); a **leitura clínica do Child sem calcular** (o atalho prático: viu varizes esofagogástricas no enunciado? a função hepática já está comprometida, a cirrose é avançada → não é Child A → não opera, avalia transplante); e o **porquê profundo de a paliação do CHC não ser QT sistêmica** (toda quimio é hepatotóxica; num fígado já cirrótico, QT sistêmica precipita insuficiência hepática e mata — por isso TACE leva o quimioterápico *só ao tumor* por hemodinâmica, poupando o parênquima, e o sorafenibe é absorvido *apenas* pelos hepatócitos do CHC).

### Bloco p11-A — INSERIR APÓS o `<div class="card card--info">` "A paliação do CHC (fora de Milão)" (o `</div>` que fecha o card), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">Por que o transplante é "o melhor" — mas não é o primeiro</h3>
<div class="prose">
  <p>O transplante encabeça a lista de qualidade por um motivo que vai além de tirar o tumor: o fígado do paciente <strong>já é doente</strong> — está cirrótico. Trocar o órgão inteiro resolve, de uma vez, <strong>o câncer e a cirrose de base</strong>. Por isso, no ideal, ele seria a escolha. O obstáculo é prático e incontornável: <strong>não há fígado para todos</strong> — nem o melhor sistema de transplante do mundo dá conta da fila. Então a lógica se ordena de baixo: tenta-se primeiro <strong>operar quem aguenta a cirurgia</strong>. A ressecção não cura a cirrose (o paciente continua cirrótico), mas oferece sobrevida sem depender de um órgão escasso. Quem não suporta a ressecção é que entra na avaliação para a fila do transplante.</p>
</div>

<h3 class="topic-h">Ler o Child sem calcular — e por que a paliação não é quimio comum</h3>
<div class="prose">
  <p>Na prática de prova, nem é preciso calcular o Child-Pugh. O atalho: se o enunciado mostra <strong>varizes esofagogástricas</strong> (ou ascite, função comprometida), ele está dizendo que a <strong>cirrose já está avançada</strong> e a função hepática, comprometida — logo <strong>não é Child A</strong>, não aguenta a ressecção; parte-se para a avaliação de transplante por Milão. Child A, por outro lado, não tem hipertensão portal nem varizes: opera. E quando se chega à <strong>paliação</strong>, há um porquê para não usar quimioterapia sistêmica comum: <strong>toda quimioterapia é hepatotóxica</strong>, e jogá-la num fígado <strong>já cirrótico</strong> precipita <strong>insuficiência hepática</strong> — o paciente morreria do tratamento. Por isso a paliação do CHC é <strong>seletiva</strong>: a <strong>quimioembolização (TACE)</strong> cateteriza por hemodinâmica a artéria nutridora e entrega o quimioterápico <strong>só no tumor</strong>, poupando o parênquima; e o <strong>sorafenibe</strong> é uma molécula <strong>absorvida apenas pelos hepatócitos do CHC</strong> — as outras células do corpo não a captam. Em ambos, a regra é a mesma: tratar o tumor sem envenenar o fígado doente.</p>
</div>
```

---

# HTML p12 — Metástases hepáticas: o tumor maligno mais comum

**O que a página já tem**: prose de abertura (pergunta-pegadinha: maligno mais comum não é o CHC; fígado = central recebedora pela porta; metástase é o maligno mais comum, origem colorretal, "carteiro do mal" da Aula 3), `card--info` "Como reconhecer na imagem" (hipocaptante, múltiplos nódulos), `figure-svg` 2 cenários hotspot (múltiplos/único) + `hotspot-detail`, prose + `figure.med` (fígado pipocado real), `card--accent` "Tratamento — a ponte com o colorretal", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê de o fígado ser a central recebedora** — a página diz "pela porta"; a fonte completa: praticamente <strong>tudo da barriga drena para o sistema porta</strong> e o fígado é o primeiro filtro, então ele recebe metástase de quase todos os tumores abdominais — por isso a metástase supera em frequência o tumor que nasce no próprio fígado; e o **porquê de a metástase ser hipocaptante** ("veio de fora, não é do fígado, então não capta") como inferência que o aluno já tinha intuitivamente antes mesmo das fases (fígado tomado por nódulos → metástase) e que agora ganha o critério objetivo da hipocaptação.

### Bloco p12-A — INSERIR APÓS o `<div class="card card--info">` "Como reconhecer na imagem" (o `</div>` que fecha o card), ANTES do `<figure class="figure-svg"` (o SVG dos 2 cenários).

```html
<h3 class="topic-h">Por que o fígado é a central das metástases — e por que isso o torna hipocaptante</h3>
<div class="prose">
  <p>Há um motivo anatômico para o maligno hepático mais comum <strong>não</strong> ser o que nasce no fígado. Praticamente <strong>tudo que está na barriga drena para o sistema porta</strong>, e o fígado é o <strong>primeiro filtro</strong> desse sangue — a grande central recebedora. Consequência direta: ele recebe metástase de quase todos os tumores abdominais, e essas metástases, somadas, <strong>superam em frequência</strong> o hepatocarcinoma. Por isso a pergunta "qual o maligno hepático mais comum?" tem resposta contraintuitiva: <strong>as metástases</strong>, e de origem, as <strong>colorretais</strong> — o tumor que mais alimenta essa central.</p>
  <p>E o padrão de imagem decorre da origem. A metástase <strong>veio de fora</strong>: não é tecido do fígado, então <strong>não capta</strong> o contraste como o parênquima — fica <strong>hipocaptante</strong>, escura em todas as fases. Esse raciocínio você já fazia intuitivamente antes de aprender as fases: <strong>fígado tomado por múltiplos nódulos</strong> faz pensar logo em metástase. Agora há o critério objetivo que confirma a intuição — não basta serem muitos nódulos, eles são <strong>hipocaptantes</strong> porque não pertencem ao fígado.</p>
</div>
```

---

# HTML p13 — Volumetria: fazer o fígado crescer para poder operar

**O que a página já tem**: prose de abertura (só resseca se sobrar fígado; volumetria na TC; exemplo 1000mL→700 tomados→sobra 300=30%), `card--info` "O limite do fígado residual depende da qualidade do fígado" (normal ~20%; comprometido/quimio ~30%; tipos de ressecção/metastasectomia), prose de transição, `figure-svg` com `toggle-switch` (embolização portal × hepatectomia 2 tempos) + 2 painéis, `finding` "A boa notícia do colorretal", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: a **lógica de por que a neoadjuvância também entra na metástase hepática colorretal** — a página menciona neoadjuvância na p12, mas a fonte explicita o propósito *aqui*: faz-se QT antes para <strong>diminuir a lesão e poupar fígado</strong> (quanto menor a metástase, menos parênquima se tira), invertendo a regra do colorretal "entra operando" porque agora o objetivo é preservar volume; e o **mecanismo de por que tirar o sangue de um lado faz o outro crescer** — a página descreve embolização/ligadura, mas a fonte dá o passo causal: sem fluxo portal, o lado doente *encolhe* e todo o sangue é *desviado* para o saudável, que hipertrofia em ~2 semanas (18%→35%); é o redirecionamento de fluxo que dispara a hipertrofia compensatória, e só se opera *depois* de a volumetria confirmar o crescimento.

### Bloco p13-A — INSERIR APÓS o `<div class="card card--info">` "O limite do fígado residual depende da qualidade do fígado" (o `</div>` que fecha o card), ANTES do `<div class="prose">` de transição ("E quando a volumetria mostra que não vai sobrar...").

```html
<h3 class="topic-h">Por que a metástase hepática também recebe neoadjuvância — para poupar fígado</h3>
<div class="prose">
  <p>No colorretal de dentro da barriga, a regra era "<strong>entra operando</strong>" — não havia cirurgia difícil a facilitar. Na metástase hepática a conta muda, e a neoadjuvância <strong>volta a fazer sentido</strong> por um motivo diferente: aqui o objetivo é <strong>poupar fígado</strong>. Faz-se a quimioterapia antes para <strong>diminuir o tamanho da lesão</strong>; quanto menor a metástase, menos parênquima é preciso retirar para tirá-la. E há uma condição única que governa tudo: só se resseca se <strong>sobrar fígado suficiente para o paciente viver</strong>. A neoadjuvância serve justamente a essa equação — encolher a doença para que a ressecção caiba dentro do volume hepático que pode ser sacrificado com segurança.</p>
</div>

<h3 class="topic-h">A "mágica" da hipertrofia: tirar o sangue de um lado faz o outro crescer</h3>
<div class="prose">
  <p>O mecanismo das duas estratégias de crescimento é o mesmo, e é elegante. O fígado residual cresce porque se <strong>redireciona o fluxo de sangue</strong>. Quando se <strong>emboliza (ou liga) o ramo portal do lado doente</strong> — o lado que será ressecado —, dois efeitos acontecem juntos: o lado doente <strong>para de receber sangue portal e encolhe</strong>, e <strong>todo o fluxo é desviado para o lado saudável</strong>, que responde com <strong>hipertrofia compensatória</strong>. Em cerca de <strong>duas semanas</strong>, um fígado residual que ficaria em <strong>18%</strong> pode subir para <strong>35%</strong> — agora compatível com a vida. O detalhe que a prova cobra: a ressecção só acontece <strong>depois</strong> de a nova volumetria <strong>confirmar</strong> que o residual cresceu o suficiente. Operar antes de o lado bom hipertrofiar levaria à insuficiência hepática — a sequência (crescer primeiro, ressecar depois) é o que dá nome à <strong>hepatectomia em dois tempos</strong>.</p>
</div>
```

---

# HTML p14 — Síntese e as respostas ao caso da enfermeira

**O que a página já tem**: prose de abertura, `reveal` com as 4 respostas ao caso, `card--accent` com tabela `cmp` dos 5 tumores (imagem + conduta), `op-summary` "Resumo decisório", `opener--mnemonic` mantra de fechamento ("a agulha não decide, quem decide é a imagem; se tem washout é câncer"), 2 quizzes (caso integrador + armadilha final).
**O que a fonte ensina e a página comprimiu**: a síntese, as 4 respostas e a tabela dos 5 tumores já estão completas e bem cobertas. O que cabe enriquecer sem duplicar é a **consolidação das armadilhas da aula num só lugar** — reunir os erros que a aula desarmou (tumor que sangra é adenoma mesmo que a imagem diga outro; hemangioma é o mais comum, não o cisto; washout é câncer e adenoma é hiper→iso; só a hepatite B pula a cirrose; maligno mais comum é metástase, não CHC; fígado não se biopsia) como ferramenta de revisão ativa, na forma de fechamento que a página de síntese pede; e o **par "não confunda" mais cobrado** — washout (hiper→hipo, câncer) × adenoma (hiper→iso, some) — que a fonte trata como a distinção fina decisiva, e que ganha aqui a forma visual `dont-confuse`.

### Bloco p14-A — INSERIR APÓS o `<div class="op-summary">` "Resumo decisório" (o `</div>` que fecha o `.op-summary`), ANTES do `<div class="opener opener--mnemonic">` (o mantra de fechamento).

```html
<h3 class="topic-h">O par que decide a prova: washout × "some"</h3>
<div class="dont-confuse">
  <div class="dont-confuse__label">Não confunda — hiper→hipo × hiper→iso</div>
  <div class="dont-confuse__grid">
    <div class="dont-confuse__side">
      <h4>Washout = câncer (CHC)</h4>
      <p>Hipercapta na arterial e, na portal, fica <strong>mais escuro que o parênquima</strong> (hiper → <strong>hipo</strong>): joga o contraste para fora <em>mais rápido</em> que o fígado. Se há washout, é hepatocarcinoma — em geral com pseudocápsula na portal.</p>
    </div>
    <div class="dont-confuse__side">
      <h4>Adenoma = "some" (ninja)</h4>
      <p>Hipercapta na arterial e, na portal, fica <strong>igual ao parênquima</strong> (hiper → <strong>iso</strong>): elimina na <em>mesma</em> velocidade do fígado, então se mistura e desaparece. Não é washout — é isodensidade. Contexto hormonal (mulher jovem, anticoncepcional, anabolizante).</p>
    </div>
  </div>
</div>

<h3 class="topic-h">O mapa das armadilhas que esta aula desarmou</h3>
<div class="card card--densify">
  <span class="densify-tag">Antes de fechar — não erre nenhuma destas</span>
  <ul>
    <li><strong>Tumor que sangra = adenoma:</strong> mesmo que a TC descreva hemangioma ou HNF, se o enunciado diz que o tumor hepático <strong>sangrou espontaneamente</strong>, marque adenoma. O sangramento transpassa a imagem — hemangioma e HNF não sangram sozinhos.</li>
    <li><strong>Mais comum é hemangioma, não cisto:</strong> a banca oferece "cisto hepático" como o benigno mais comum. Não é — cisto no fígado é incomum (lembra equinococose). O campeão é o hemangioma; o segundo, a HNF.</li>
    <li><strong>Washout sela câncer; adenoma "some":</strong> hiper→hipo (washout) = CHC; hiper→iso (some) = adenoma. Inverter os dois é o erro fino mais cobrado.</li>
    <li><strong>Só a hepatite B pula a cirrose:</strong> tudo que causa cirrose pode causar CHC, mas é preciso passar pela cirrose — exceto a hepatite B, a única que gera CHC sem cirrose prévia.</li>
    <li><strong>Maligno mais comum é metástase:</strong> a tendência é responder hepatocarcinoma, mas o maligno hepático mais comum é a <strong>metástase</strong> (colorretal, hipocaptante). O CHC é só o <em>primário</em> mais comum.</li>
    <li><strong>Fígado não se biopsia:</strong> diagnóstico por imagem dinâmica — semeia célula e, pior, sangra. A agulha não decide.</li>
  </ul>
</div>
```

---

# MAPA DE COBERTURA 100% (fonte hepática → bloco)

Cada núcleo hepático da transcrição e onde foi enriquecido. Itens já bem cobertos pela página existente são marcados **[já na página]** (preservados, não duplicados). Itens fora do escopo (pâncreas, metalinguagem) estão listados ao final como **descartados**.

| Núcleo da fonte | Onde foi enriquecido |
|---|---|
| Caso da enfermeira (adenoma roto, síncope, hemorragia, óbito) | [já no opener--case + reveal p2] |
| "Área pretinha no meio = sangue" | [já na prose p2] |
| Por que, só no fígado, o benigno entra no estudo (cai mais que o maligno) | **p2-A** / [prose já na página] |
| Perfil muda: benigno = mulher; maligno = homem velho | **p2-A** |
| O apelido "duas-caras" (do bem × do mal) | **p2-A** / [prose já na página] |
| Regra de ouro: não biopsiar enquanto é tumor (herda Aula 1) | [já na prose + split p3] |
| Dupla razão (semear célula + sangrar); hemorragia incontrolável | **p3-A** / [mnemonic já na página] |
| Lista de vísceras só-imagem (fígado/pâncreas/rim/baço/jejuno/íleo/sarcoma retroperitônio/ovário) | **p3-A** / [split já na página] |
| Diagnóstico tem que ser por imagem (TC/RM dinâmica) | [já no card p3] |
| TC trifásica = mais completa; 3 fases + sem contraste = 4 imagens; vale p/ RM | [já na prose p4] |
| Osso branco = TC (por quê: densidade/cálcio) | **p4-A** / [toggle já na página] |
| Aorta brilhando = fase arterial (por quê: contraste nas artérias) | **p4-A** / [card já na página] |
| Sem contraste: todo tumor hipodenso, qualquer etiologia | **p4-A** / [card já na página] |
| Cava clareia na arterial — não confundir com tumor | [já no card + quiz p4] |
| As duas perguntas: captação arterial + washout | [já na prose p5] |
| Vascularização: vaso novo (rápido) × vaso bobo (lento) | **p5-A** / [SVG já na página] |
| Washout escurece porque é mais veloz que o parênquima | **p5-A** |
| Washout = hiper→hipo = câncer; vem com hipercaptação arterial | [já no card + SVG p5] / **p5-A** |
| Os 4 padrões de captação | [já no SVG + card p6] |
| Os 4 padrões como escala de vascularização | **p6-A** |
| Hipocaptante "não se associa a ninguém" → veio de fora → metástase | **p6-A** / [SVG já na página] |
| Hemangioma = mais comum de todos | [já na prose + cmp + quiz p7] |
| Pegadinha do cisto (incomum, equinococose) | [já no opener--trap + quiz p7] |
| HNF = 2º benigno mais comum | [já na prose + cmp p7] |
| Ter muito vaso ≠ ser muito vascularizado | **p7-A** / [prose já na página] |
| Hemangioma: periférica globuliforme centrípeta, retém, não sangra | [já na prose + SVG + cmp p7] |
| "Não importa o tamanho"; hemangioma gigante | **p7-A** / [figcaption já na página] |
| HNF: mecanismo (malformação vascular boba + fatores de crescimento) | [já na prose p8] |
| Inversão de cores fase a fase (hepatócitos × vaso revezam) | **p8-A** / [prose já na página] |
| Decomposição do nome (hiperplasia/nodular/focal) | **p8-A** |
| Estrela/cicatriz central persiste em todas as fases | [já na prose + SVG p8] / **p8-A** |
| Primovist: capta=HNF (saudável) / não capta=adenoma (mutante) | [já no card + toggle + mnemonic p8] |
| Adenoma "duas-caras"; mulher jovem; hormonal; ACO/anabolizante | [já na prose p9] |
| Por que mulher jovem (carga hormonal maior) | **p9-A** / [prose já na página] |
| Sequência adenoma→carcinoma (hepatócito mutante) | [já na prose p9] / **p9-A** |
| Adenoma hiper→iso ("ninja"); por que iso e não hipo | **p9-A** / [card já na página] |
| Cicatriz no adenoma confunde com HNF → Primovist | [já no card p9] |
| Tumor que sangra = adenoma (transpassa a imagem) | [já no opener--mnemonic + opener--bust + quiz p9] |
| Conduta: ≤5cm suspende hormônio/acompanha; >5cm opera; beta-catenina opera | [já no card--accent p9] |
| Sangrando/instável: não hepatectomia; hemodinâmica emboliza vaso nutridor | **p9-B** / [card já na página] |
| Tumor que sangra "já é grande" → cirurgia eletiva depois | **p9-B** |
| CHC = maligno primário mais comum | [já na prose p10] |
| Fator de risco = cirrose (HCV principal, HBV, gordurosa, álcool) | [já na prose + quiz p10] |
| Tudo que causa cirrose → CHC, mas passa pela cirrose; exceto hepatite B | **p10-A** / [prose + quiz p10] |
| Marcadores do módulo (CA19-9/CEA/CA72-4/AFP) | [já na prose p10] |
| Clínica: dor + icterícia + síndrome consumptiva | [já na prose p10] |
| Tríade de imagem: hipercaptação → washout → pseudocápsula | [já no SVG + practice + figure.med p10] |
| Pseudocápsula: por que "pseudo" e por que só na portal | **p10-A** / [SVG já na página] |
| Tratamento por Barcelona (BCLC); 3 caminhos: ressecar/transplantar/paliar | [já na prose + SVG p11] |
| Transplante é o melhor (fígado já doente) mas falta órgão → opera quem aguenta | **p11-A** / [prose já na página] |
| Child A → resseca; não-A → Milão (transplante) | [já no SVG + quiz p11] |
| Ler Child sem calcular (varizes = cirrose avançada = não-A) | **p11-A** |
| Critérios de Milão (1 lesão ≤5cm OU 3 ≤3cm; soma "dá 6") | [já no toggle + quiz p11] |
| Milão: o óbvio que exclui (sem metástase, sem invasão vascular) | [já no toggle p11] |
| Paliação: não QT sistêmica (hepatotóxica/insuf. hepática); TACE; sorafenibe | **p11-A** / [card já na página] |
| Maligno hepático mais comum = metástase (não CHC); origem colorretal | [já na prose + quiz p12] |
| Fígado = central recebedora (tudo drena pela porta) | **p12-A** / [prose já na página] |
| Metástase hipocaptante (veio de fora, não capta); múltiplos nódulos | **p12-A** / [card + SVG p12] |
| Tratamento: neoadjuvância + ressecção se sobrar fígado | [já no card--accent p12] |
| Por que neoadjuvância na metástase (poupar fígado) | **p13-A** |
| Volumetria hepática (1000→700→sobra 300=30%) | [já na prose p13] |
| Residual mínimo: ~20% fígado normal, ~30% comprometido/quimio | [já no card + quiz p13] |
| Tipos de ressecção / metastasectomia | [já no card p13] |
| Embolização portal × hepatectomia em 2 tempos | [já no toggle p13] |
| Mecanismo da hipertrofia (desvia fluxo; encolhe doente, cresce sadio; 18→35%) | **p13-A** / [toggle já na página] |
| Operar só depois de a volumetria confirmar crescimento | **p13-A** |
| Metástase colorretal ressecável pode curar; "pipocado" = irressecável | [já no finding p13] |
| 4 respostas ao caso | [já no reveal p14] |
| Tabela dos 5 tumores (imagem + conduta) | [já na cmp p14] |
| Mantra de fechamento (imagem decide; washout = câncer) | [já no opener--mnemonic p14] |
| Par decisivo washout × "some" (não confunda) | **p14-A** / [card + quiz p5/p14] |
| Consolidação das armadilhas (revisão ativa) | **p14-A** |

**Descartados por estarem fora do escopo das 14 páginas (não enriquecidos):**

| Item da fonte descartado | Motivo |
|---|---|
| Câncer de pâncreas ("abraço fatal", invasão de porta/mesentérica superior/tronco celíaco, irressecabilidade) | Pâncreas não é tema desta aula — não há página de pâncreas; só menção de relance ao CA 19-9 como marcador, já presente na p10. |
| Mapas mentais / "avalia a aula" / "baixa o seu" / "nós professores que fizemos a aula contigo" / "assiste lá como mini aula" | Metalinguagem de produto/aula — proibida (regra 4). |
| "Letícia, nossa radiologista" / "Felipe" / "Vili" / interlocução de estúdio | Metalinguagem / personagens de gravação — não entram no conteúdo. |
| "Dever de casa", "muitas questões", "até a próxima", "beijo a todos" | Encerramento de aula — metalinguagem. |
| Comentários sobre o fluxograma de Barcelona "dar surto" / "especialista de cirrose acha errado" | Comentário de bastidor sobre didática — descartado; o conteúdo (BCLC simplificado) foi preservado em p11. |

**Gate de cobertura: 100% do conteúdo hepático.** Todos os núcleos médicos de tumores hepáticos da transcrição estão presentes — seja já na página (preservado), seja enriquecidos pelos blocos acima. Nenhum fato fora da fonte foi introduzido. Pâncreas e metalinguagem foram descartados por estarem fora do escopo das 14 páginas, com motivo documentado.

---

# RESUMO PARA O EXECUTOR

- **Páginas tocadas**: HTML p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14 (todas as 13 de conteúdo). O `p1` (dashboard) **não recebe blocos**.
- **Total de blocos a inserir**: 14 (p2-A; p3-A; p4-A; p5-A; p6-A; p7-A; p8-A; p9-A; p9-B; p10-A; p11-A; p12-A; p13-A; p14-A).
- **Offset de numeração**: o `p1` HTML É o dashboard; as `page-tag` dizem "Página N / 14" e batem com o ID `pN`. Os blocos enriquecem **p2..p14** (offset zero entre ID do HTML e numeração visível).
- **Classes usadas** (todas verificadas em `assets/css/components.css`): `topic-h`, `prose` (+ `term`/`highlight` se quiser realçar), `card`, `card--accent`, `card--info`, `card--success`, `card--mnemonic`, `card--densify` (+ `span.densify-tag`), `dont-confuse` (+ `dont-confuse__label`/`__grid`/`__side` + `h4`/`p`), `mnemonic`, `tag-danger`/`tag-trap`/`tag-good`. **Zero uso de `callout`** (inexistente). Listas `<ul>` dentro de `.card`/`.card--densify` seguem o padrão já usado na página (ex.: card--accent da conduta na p9, card--info na p13).
- **Operação é só INSERÇÃO.** Nenhum nó existente é editado, removido ou reordenado.
