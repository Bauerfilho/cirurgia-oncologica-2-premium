# Retrofit de Elevação — Texto Rico · Aula 05 (Pólipos e Câncer Colorretal — o pré-câncer)

**Repo**: `cirurgia-oncologica-2-premium` · **Alvo**: `aulas/aula-05/index.html` (HTML `p1`..`p14`, 14 páginas)
**Fonte de minúcia**: `transcricoes/a5-polipos-ccr.txt` (transcrição original, ~10.200 palavras)
**Correções médicas aplicadas (de `docs/00-calibrador-micro-a5-polipos-ccr.md`)**: a transcrição erra nomes — corrigidos em TODO bloco abaixo: **"REGT" → Haggitt (níveis 0–4, pediculado) + Kikuchi (SM1/2/3, séssil)**; **"gene HPC" → APC** (Adenomatous Polyposis Coli); **"Piltch-Jagger" → Peutz-Jeghers**; **"tumor burning" → tumor budding**; **"US Task Force" → USPSTF**; **"TIF/imunofluorescência fecal" → FIT** (teste imunoquímico fecal). Nenhum desses erros de transcrição vaza para os textos.
**Referência de densidade**: `_RETROFIT-ELEVACAO/texto-rico-aula-04.md` (modelo aprovado) + `aulas/aula-01..04`.

> **Mapa de numeração (confirmado lendo o HTML):** o HTML tem 14 `data-page`, e o `p1` é o **dashboard / Mapa da aula** (`id="page-p1"`, livestrip de haustração colônica, métricas, trilha, painéis de armadilhas e pontes A3/A4). Portanto a **P1 É o dashboard** — as `page-tag` dizem "Página N / 14" e batem com o ID `pN` (offset zero entre ID do HTML e numeração visível). O `p1` (dashboard) **não recebe blocos novos** — já é síntese navegável completa. Os blocos abaixo enriquecem **p2..p14** (as 13 páginas de conteúdo).

> **Escopo da fonte — o que NÃO entra:** a transcrição abre com metalinguagem pesada ("salve salve, meu amigo, minha amiga", "nessa aula de agora a gente vai aprofundar", "para quem assistiu à aula de câncer colorretal", "eu já cansei de falar isso", "anote, de preferência cole na sua parede", "se você abrir o SAFE", "aula por vídeo, pode acelerar", "espero que tenham gostado") e contém interlocução de estúdio ("Felipe", "o tio", "briguei com meu pai", "essa peça aqui é de quando eu era residente"). **Nada disso entra**: metalinguagem é proibida e personagens/bastidores de gravação não são conteúdo. Foi extraído **apenas** o conteúdo médico de pólipos e síndromes que casa com as 14 páginas.

---

## REGRAS DE EXECUÇÃO (para o Executor — ler antes de tocar no HTML)

1. **PRESERVAÇÃO ABSOLUTA.** Nada do que já existe é removido, reescrito ou reordenado. Prosa, `topic-h`, quizzes (`div.quiz`), SVGs (`figure-svg` + `hs-shape` + `hotspot-detail`), `figure.med`, openers (`opener--question`/`--mnemonic`), `reveal`, `toggle-switch`/`toggle-panel`, `trap`, `cmp`, `dont-confuse`, `mnemonic`, `card--accent`/`--info`/`--mnemonic`, dashboard, `livestrip` e `page-nav` — **intocados**. Você só **insere** os blocos abaixo nos pontos indicados.

2. **VOCABULÁRIO DO CHASSI — usar SÓ classes verificadas em `assets/css/components.css`.** Usadas aqui: `prose` (+ inline `<strong>`/`<em>`), `topic-h`, `card`, `card--accent`, `card--info`, `card--success`, `card--mnemonic`, `card--densify` (+ `span.densify-tag`), `mnemonic` (+ `.mnemonic__label`/`.mnemonic__text`), `dont-confuse` (+ `.dont-confuse__label`/`__grid`/`__side` + `h3`/`h4`/`p`), `split` (+ `.col.no`/`.col.yes` + `.pill.pill--no`/`.pill--ok`), e as tags semânticas `tag-danger`/`tag-trap`/`tag-good`. **`callout` NÃO EXISTE neste CSS** — onde um briefing genérico falaria "callout", mapeei para `card--accent` (insight), `card--info` (lista comentada), `card--mnemonic`/`mnemonic` (frase-âncora) e `card--densify` (nota/consolidação). Não invente classe nova.

3. **Numeração de tópicos.** O HTML usa `topic-h` **sem** "Tópico N" (cabeçalho-insight puro). Os novos blocos entram com `topic-h` no mesmo estilo. Não renumere nem reestilize cabeçalhos pré-existentes.

4. **Voz.** Professor denso explicando direto ao aluno. PT-BR, técnico, **zero metalinguagem** ("nesta aula", "o professor", "neste módulo", "vamos ver", "a seguir", "como vimos", "próxima página", "aula seguinte", "cole na parede", "anote aí", "decoreba"). Negrito nas palavras-chave. Cada caixinha = cabeçalho-insight (`topic-h`) + prosa densa OU lista comentada (nunca bullet seco). As correções de nome (Haggitt/Kikuchi, APC, Peutz-Jeghers, tumor budding, FIT, USPSTF) já vêm aplicadas — o erro de transcrição nunca aparece.

5. **Onde inserir.** Cada bloco diz "INSERIR APÓS [âncora]". A âncora é um trecho literal já presente no HTML. Inserir imediatamente **depois** do nó indicado e **antes** do próximo nó nomeado (em geral, antes da primeira `<div class="quiz">` da página, salvo indicação).

6. **Cobertura 100% da fonte é gate.** O mapa ao final lista cada núcleo da transcrição e em qual página/bloco foi enriquecido. Nenhum item médico da fonte fica de fora; nenhum fato fora da fonte foi inventado; metalinguagem e bastidores foram descartados por estarem fora do escopo, com motivo documentado.

---

# HTML p2 — Por que estudar o pré-câncer: a sequência adenoma-carcinoma

**O que a página já tem**: `opener--question` (por que dominar o colorretal), prose dupla (cura → história natural inteira → sequência adenoma-carcinoma → APC, esporádico × hereditário), `figure-svg` da sequência com 3 hotspots, `card--accent` "O detalhe que muda o gabarito", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê de o CCR ser o tumor que mais se tem obrigação de dominar** — a página afirma "cura", mas a fonte raciocina o passo: entre todos os tumores do tubo (esôfago, estômago, pâncreas, fígado), é o de **maior potencial de cura** (cura-se até com metástase hepática M1), e por isso é o **mais estudado** e o único do qual se conhece a história natural inteira; e o **enquadramento de que esta é uma aula de ROTINA, não de doença** — a transcrição é enfática: o difícil aqui não é a doença, é a *rotina* (achou pólipo → histologia? → conduta? → acompanhamento?), três perguntas que organizam tudo o que vem. A página tem a sequência, mas não destrincha por que o pré-câncer subiu de patamar nem ancora as três perguntas-rotina.

### Bloco p2-A — INSERIR APÓS o `<div class="card card--accent">` "O detalhe que muda o gabarito" (o `</div>` que fecha o card), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">Por que é o colorretal — e não outro tumor do tubo — que se tem obrigação de dominar</h3>
<div class="prose">
  <p>Entre todos os tumores do trato gastrointestinal — esôfago, estômago, pâncreas, fígado —, o <strong>colorretal</strong> é o que tem o <strong>maior potencial de cura</strong>. Cura-se até paciente com <strong>metástase hepática (M1)</strong>, o que não acontece nos vizinhos. Sendo o mais curável, virou o mais <strong>estudado</strong> de todos; e, por ser o mais estudado, é o único câncer do tubo cuja <strong>história natural se conhece passo a passo</strong>. É essa combinação — alta curabilidade somada à biologia totalmente mapeada — que justifica investir no que vem <strong>antes</strong> do tumor. Interceptar o pólipo é, na prática, ganhar a partida cedo num jogo que já se sabe como termina.</p>
</div>

<div class="card card--densify">
  <span class="densify-tag">O enquadramento que organiza a aula inteira</span>
  <p>Este é um tema de <strong>rotina</strong>, não de doença. O que costuma travar o aluno não é entender uma patologia nova — é que aqui há <strong>condutas a memorizar</strong>, encadeadas por três perguntas que se repetem diante de qualquer pólipo encontrado: <strong>(1)</strong> qual é a <strong>histologia</strong> dele? <strong>(2)</strong> qual a <strong>conduta</strong> frente a esse pólipo? <strong>(3)</strong> como fazer o <strong>acompanhamento</strong> depois? Tudo o que segue — classificações, critérios de cura, vigilância, síndromes — é resposta a uma dessas três perguntas. Quem mantém esse trilho não se perde no volume de detalhes.</p>
</div>
```

---

# HTML p3 — Dois eixos para classificar um pólipo: o contexto e a forma

**O que a página já tem**: prose de abertura (contexto esporádico × síndrome; forma pediculado × séssil), `trap` "A confusão clássica — repetida cinco vezes", `figure-svg` macro com 2 hotspots, `dont-confuse` esporádico × síndrome, 2 quizzes.
**O que a fonte ensina e a página comprimiu**: a **origem da confusão pediculado/tubular destrinchada** — a página avisa que não se confunde, mas a fonte explica *por que* as pessoas confundem (o pediculado "está pendurado, parece um tubinho"; o "túbulo" também sugere tubo) e revela o detalhe que embaralha ainda mais: pediculado *costuma* ser, microscopicamente, adenoma **tubular** (mais benigno) — uma correlação real que faz o aluno achar que são a mesma coisa, quando são eixos independentes; e o **gancho de risco do contexto** — a fonte é explícita: no esporádico o pólipo "vem sozinho" e o risco é menor; na síndrome ele "vem aos montes" (50, 100, 1000) e o risco de virar câncer é naturalmente maior justamente *porque* são muitos. A página afirma o contraste; a fonte dá a lógica de por que o número se traduz em risco.

### Bloco p3-A — INSERIR APÓS o `<div class="dont-confuse">` "Esporádico × síndrome polipoide" (o `</div>` que fecha o `.dont-confuse`), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">Por que tanta gente confunde pediculado com tubular — e por que estão erradas</h3>
<div class="prose">
  <p>A confusão tem origem concreta, e entendê-la é a melhor vacina contra ela. O <strong>pediculado</strong> fica "pendurado" por uma haste — e haste lembra um <strong>tubinho</strong>; o nome <strong>tubular</strong> também evoca tubo. O cérebro junta as duas imagens e conclui, errado, que "pediculado = tubular". O que embaralha ainda mais é que existe uma <strong>correlação real, mas só estatística</strong>: pólipos pediculados <em>costumam</em> ser, à microscopia, <strong>adenomas tubulares</strong> (os mais benignos). Correlação não é equivalência. <strong>Pediculado × séssil</strong> é a <strong>forma</strong> (macroscópico, o que o endoscopista vê); <strong>tubular × viloso × tubuloviloso</strong> é a <strong>arquitetura</strong> (microscópico, o que o patologista vê). São eixos independentes — um descreve o pólipo por fora, o outro por dentro.</p>
</div>

<h3 class="topic-h">Por que "vir aos montes" já é, em si, mais risco</h3>
<div class="prose">
  <p>A diferença de risco entre esporádico e síndrome não é arbitrária — sai da aritmética. No <strong>esporádico</strong>, o pólipo costuma aparecer <strong>sozinho</strong> ou em pequeno número, e o risco de aquele pólipo virar câncer é <strong>menor</strong>. Na <strong>síndrome polipoide</strong>, ele vem <strong>aos montes</strong> — 50, 100, 1000 pólipos. Cada adenoma tem uma probabilidade de malignizar; multiplicada por centenas ou milhares de pólipos, a chance de que <strong>ao menos um</strong> complete a sequência adenoma-carcinoma torna-se altíssima. Mais pólipos, mais bilhetes na rifa do câncer — é por isso que a polipose, por si só, já dispara o risco e muda a conduta de "tirar o pólipo" para "operar o órgão".</p>
</div>
```

---

# HTML p4 — Neoplásico ou não: a taxonomia que decide o risco

**O que a página já tem**: prose de abertura (neoplásico × não; hiperplásico/inflamatório/hamartoma × adenoma/adenocarcinoma), `figure-svg` árvore com 4 hotspots, `mnemonic` "Para gravar" (hiperplásico mais comum; adenoma é o vilão), 2 quizzes.
**O que a fonte ensina e a página comprimiu**: a **tradução literal da sigla APC como ferramenta de raciocínio** — a página cita APC, mas a fonte ensina a decompor o nome ("A de Adenomatoso, P de Polipose, C de Coli") como prova de que o gene "propicia a formação de pólipos adenomatosos", o que amarra mutação → tipo de pólipo; e o **porquê de o hamartoma, embora não-neoplásico, ainda elevar o risco de câncer** — a fonte resolve a aparente contradição (como um pólipo "não-neoplásico" malignaria?): dentro de um hamartoma a chance de surgir um **adenoma** é maior que no epitélio normal, então a malignização passa pela mesma sequência, só que iniciada dentro do hamartoma. Isso prepara Peutz-Jeghers (P11) e completa a taxonomia. A página separa os tipos; a fonte explica a exceção do hamartoma.

### Bloco p4-A — INSERIR APÓS o `<div class="mnemonic">` "Para gravar" (o `</div>` que fecha o `.mnemonic`), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">APC, decodificado: o nome do gene já entrega o que ele faz</h3>
<div class="prose">
  <p>A sigla do gene que abre a sequência não é aleatória — lida devagar, ela <em>é</em> a explicação. <strong>APC</strong> = <strong>A</strong>denomatous <strong>P</strong>olyposis <strong>C</strong>oli: "A" de <strong>adenomatoso</strong>, "P" de <strong>polipose</strong>, "C" de <strong>coli</strong> (cólon). É, literalmente, o gene que, quando mutante, <strong>propicia a formação de pólipos adenomatosos no cólon</strong>. Por isso ele é a <strong>primeira mutação</strong> da sequência adenoma-carcinoma, tanto no esporádico (adquirido por uma célula ao longo da vida) quanto no hereditário (herdado em todas as células). Decompor o nome amarra a lógica: mutou o APC, nasce o adenoma; e é o adenoma que, acumulando mutações, vira adenocarcinoma.</p>
</div>

<div class="card card--info">
  <h3>Como um pólipo "não-neoplásico" ainda pode levar a câncer — o caso do hamartoma</h3>
  <p>Há uma pergunta que parece pegadinha: se o <strong>hamartoma</strong> é não-neoplásico, como ele se associa a risco aumentado de câncer? A resposta resolve a aparente contradição. O hamartoma não vira câncer "direto" — mas, <strong>dentro</strong> de um hamartoma, a chance de surgir um <strong>adenoma</strong> é <strong>maior do que no epitélio normal</strong>. E uma vez que o adenoma aparece, ele segue a sequência habitual (adenoma → adenocarcinoma). Ou seja: o hamartoma não pula a regra de que é preciso passar pelo adenoma — ele apenas é um <strong>terreno mais fértil</strong> para que esse adenoma brote. Esse raciocínio é o que sustenta o risco aumentado de CCR na polipose hamartomatosa de Peutz-Jeghers.</p>
</div>
```

---

# HTML p5 — Histologia do adenoma: o vilão é o viloso

**O que a página já tem**: `opener--mnemonic` ("quem é o vilão dos adenomas? o viloso"), prose de abertura (microscópico, só adenoma, tubular 85% × viloso pior), `figure-svg` histologia 3 padrões, `card--mnemonic` "Os três fatores de risco", prose de transição + `figure.med` (tubular/viloso reais) + `figure.med` (pediculado real), 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê de a histologia valer SÓ para adenoma** — a página afirma, mas a fonte dá o argumento explícito que cai em prova: "não faz sentido subclassificar tubular/viloso num adenocarcinoma — adenocarcinoma já é câncer, ponto"; e a **leitura de que o viloso é simultaneamente padrão histológico E fator de risco** — a transcrição encadeia: ser viloso é "ruim" porque traz maior chance de virar adenocarcinoma, e por isso o viloso entra na mesma lista de risco que o >2 cm e a displasia de alto grau; a página lista a trinca num card separado, mas não amarra que o "vilão" da histologia e um dos três fatores de risco são a mesma entidade vista de dois ângulos. Reforço também a regra prática "todo pólipo deve ser ressecado — exceto no contexto de polipose, em que vira cirurgia", que a fonte enuncia aqui.

### Bloco p5-A — INSERIR APÓS o `<div class="card card--mnemonic">` "Os três fatores de risco de malignização do adenoma" (o `</div>` que fecha o card), ANTES do `<p>` de transição ("O esquema acima abstrai a arquitetura...").

```html
<h3 class="topic-h">Por que a histologia tubular/viloso só existe para o adenoma</h3>
<div class="prose">
  <p>Vale fixar um limite que a banca usa para confundir: a classificação <strong>tubular / viloso / tubuloviloso</strong> só se aplica a <strong>adenoma</strong>. Subclassificar um <strong>adenocarcinoma</strong> em "tubular" ou "viloso" <strong>não faz sentido</strong> — adenocarcinoma já é câncer, ponto. O raciocínio histológico do adenoma serve para estimar <strong>quanto</strong> aquele pólipo benigno ainda pode caminhar rumo ao câncer; uma vez que já é carcinoma, essa pergunta perdeu o objeto. É o espelho da regra da P6 (Haggitt/Kikuchi só para carcinoma): cada classificação tem seu território, e trocá-los é erro plantado.</p>
</div>

<h3 class="topic-h">O viloso é, ao mesmo tempo, o "vilão" e um dos três fatores de risco</h3>
<div class="prose">
  <p>O "vilão é o viloso" e os "três fatores de risco" não são duas coisas — são a mesma vista de dois ângulos. Ser <strong>viloso</strong> é "ruim" precisamente porque traz a <strong>maior chance de transformação maligna</strong>; e é por isso que ele figura, lado a lado, com o <strong>tamanho &gt; 2 cm</strong> e a <strong>displasia de alto grau</strong> na lista dos fatores que indicam alto risco de virar adenocarcinoma. Um pólipo que reúne qualquer um desses três já merece conduta e seguimento mais agressivos. E a regra-mãe da conduta vem junto: <strong>todo pólipo encontrado deve ser ressecado</strong> (polipectomia), independentemente de parecer benigno ou maligno — a única exceção é o cenário de <strong>múltiplos pólipos</strong> (polipose), em que tirar um a um é inviável e o caso vira <strong>cirurgia</strong>.</p>
</div>
```

---

# HTML p6 — Haggitt e Kikuchi: até onde o câncer invadiu decide a cirurgia

**O que a página já tem**: prose dupla (carcinoma em pólipo, T1, risco linfático → polipectomia × colectomia; Haggitt 0–4 pediculado, Kikuchi SM1/2/3 séssil; só adenocarcinoma), `figure-svg` pólipo com níveis 0–4 + SM1/2/3, `card--accent` "A regra de corte para decorar", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **mecanismo de por que a profundidade prediz metástase linfática** — a página diz que a profundidade "estima o risco", mas a fonte explicita a cadeia: o que se quer saber é o risco de o carcinoma **mandar metástase linfática**; quanto mais fundo invade a submucosa, mais perto chega dos linfáticos e vasos da parede, maior o risco — e é esse risco que decide entre só polipectomia (risco baixo) e colectomia com linfadenectomia (risco alto); e a **anatomia literal dos níveis de Haggitt destrinchada** (cabeça = 1, colo/junção cabeça-haste = 2, pedículo/haste = 3, base = 4; e nível 0 = in situ/intramucoso, não passou a muscular da mucosa) com o detalhe de que **qualquer carcinoma em pólipo séssil já entra como nível 4** porque o séssil não tem os "andares" do pediculado. A página tem a régua de corte; a fonte explica de onde vem cada andar e por que o séssil pula direto para o 4.

### Bloco p6-A — INSERIR APÓS o `<div class="card card--accent">` "A regra de corte para decorar" (o `</div>` que fecha o card), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">Por que a profundidade prediz a metástase — e o que se decide com ela</h3>
<div class="prose">
  <p>A classificação por profundidade existe para responder a <strong>uma</strong> pergunta: qual o risco de esse carcinoma precoce (todos são <strong>T1</strong>) <strong>mandar metástase linfática</strong>? A lógica é geográfica. Quanto mais o tumor mergulha na <strong>submucosa</strong>, mais perto ele chega dos <strong>vasos linfáticos e sanguíneos</strong> da parede — e maior a chance de já ter lançado células para os linfonodos. Daí a decisão: se o risco é <strong>baixo</strong>, a <strong>polipectomia</strong> que retirou o pólipo já tratou; se o risco é <strong>alto</strong>, retirar o pólipo não basta — é preciso <strong>colectomia com linfadenectomia</strong> para remover os linfonodos potencialmente acometidos. A profundidade não é um número estético: é o que separa "está curado" de "precisa operar".</p>
</div>

<h3 class="topic-h">Os andares do pediculado — e por que o séssil já nasce nível 4</h3>
<div class="prose">
  <p>No pólipo <strong>pediculado</strong>, a haste cria "andares" que o patologista percorre de cima para baixo. <strong>Nível 0</strong>: carcinoma <strong>in situ / intramucoso</strong> — está só na mucosa da cabeça e <strong>não ultrapassou a muscular da mucosa</strong> (já vi prova escrever exatamente assim). <strong>Nível 1</strong>: invade a <strong>submucosa da cabeça</strong>. <strong>Nível 2</strong>: o <strong>colo</strong>, a junção entre cabeça e haste. <strong>Nível 3</strong>: o <strong>pedículo</strong> (a haste) — e é aqui que o <strong>SM</strong> entra para refinar. <strong>Nível 4</strong>: a <strong>base</strong>, já na submucosa da parede do cólon. O <strong>séssil</strong> não tem esses andares — é colado na parede, sem haste. Por isso, <strong>qualquer carcinoma em pólipo séssil já entra direto como nível 4</strong>: sem cabeça e sem colo para atravessar, ele está, por definição, na base. É a razão de o séssil preocupar mais e, com carcinoma, levar à colectomia.</p>
</div>

<div class="card card--info">
  <h3>SM1 em micras: o número que se decora literalmente</h3>
  <p>A submucosa é dividida em três terços: <strong>SM1</strong> (superficial, junto da mucosa), <strong>SM2</strong> (médio) e <strong>SM3</strong> (profundo, em contato com a muscular própria). O limite de cura tem um valor exato a memorizar: <strong>SM1 corresponde a até 1000 micras (1 mm)</strong> de profundidade. Por isso, se o laudo descreve a invasão em micras em vez de "SM1", a conta é direta — <strong>500 micras</strong>, por exemplo, é <em>menos</em> que 1000, logo está dentro do SM1 e atende ao critério de cura. Acima de 1000 micras (SM2/SM3), o risco linfático sobe e a conduta passa a colectomia.</p>
</div>
```

---

# HTML p7 — Os seis critérios de cura da polipectomia

**O que a página já tem**: prose de abertura (6 critérios juntos; carcinoma obrigatório × adenoma pondera), `reveal` com os 6 critérios, `trap` "Carcinoma × adenoma — onde os critérios mandam" (com o paralelo piecemeal), 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **destrinchamento de cada critério com o "por quê"** que a transcrição dá um a um — margem livre (vale benigno e maligno; se comprometida, tenta-se reabordar, e se não der, colectomia); ressecção em bloco (não "lanhar" o pólipo em metades, senão não se garante a remoção do câncer); SM1 (o acréscimo pós-2022 das bancas de RMA/cirurgia, que não bastava "submucosa", tinha de ser a subdivisão); bem diferenciado; sem invasão angiolinfática = linfovascular (a fonte nota que "angiolinfática" e "linfovascular" são o mesmo, só muda a ordem — angio de vasos, linfática de linfáticos); sem tumor budding (aspecto de células tumorais "escapando", "se espalhando" na frente de invasão). A página lista os 6 no reveal de forma compacta; a fonte permite um bloco que reforça o raciocínio de "quando esses critérios mandam de verdade" e desfaz a sinonímia angiolinfática/linfovascular, que é pegadinha.

### Bloco p7-A — INSERIR APÓS o `<div class="trap">` "Carcinoma × adenoma — onde os critérios mandam" (o `</div>` que fecha o `.trap`), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">"Angiolinfática" e "linfovascular" são a mesma coisa — não caia na troca de nome</h3>
<div class="prose">
  <p>Um critério aparece com dois rótulos e a banca usa isso para confundir: <strong>invasão angiolinfática</strong> e <strong>invasão linfovascular</strong> são <strong>exatamente a mesma coisa</strong> — só muda a ordem das palavras. "Angio" se refere aos <strong>vasos sanguíneos</strong>; "linfática", aos <strong>linfáticos</strong>. Tanto faz dizer angiolinfática ou linfovascular: o critério de cura exige a <strong>ausência</strong> de ambas, porque invasão de vaso ou de linfático é a porta pela qual a célula tumoral dissemina. Ver os dois termos como sinônimos evita marcar "errado" só porque o enunciado escolheu uma das duas grafias.</p>
</div>

<div class="card card--densify">
  <span class="densify-tag">Os seis critérios destrinchados — o porquê de cada um</span>
  <ul>
    <li><strong>Margem livre:</strong> sem neoplasia nas bordas. Vale para benigno e maligno. Se comprometida, <strong>tenta-se reabordar endoscopicamente</strong>; se não der, é colectomia.</li>
    <li><strong>Ressecção em bloco (sem fragmentação / piecemeal):</strong> o pólipo sai inteiro. "Lanhar" o câncer em metades — tirar uma parte agora, outra depois — <strong>não garante</strong> a remoção completa e invalida o critério.</li>
    <li><strong>Invasão até SM1 (≤ 1000 micras):</strong> em acesso direto basta "submucosa"; desde 2022 as bancas de RMA e cirurgia exigem a <strong>subdivisão</strong> — só vale como cura se ficou em SM1.</li>
    <li><strong>Bem diferenciado:</strong> tumor pouco diferenciado é mais agressivo e quebra a cura.</li>
    <li><strong>Sem invasão angiolinfática/linfovascular:</strong> nenhum vaso ou linfático tomado (os dois nomes são o mesmo critério).</li>
    <li><strong>Sem tumor budding (brotamento tumoral):</strong> aspecto histológico de células tumorais <strong>escapando, se espalhando</strong> na frente de invasão. Presente = não é cura.</li>
  </ul>
</div>
```

---

# HTML p8 — Vigilância pós-polipectomia: o intervalo certo da próxima colonoscopia

**O que a página já tem**: prose de abertura (USPSTF; quanto pior o achado, mais curto o intervalo; decore 10/5/3/1/0,5), `toggle-switch` adenoma × paralelo carcinoma (com 2 cards no painel paralelo), `figure-svg` linha do tempo com 5 hotspots, 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **destrinchamento de cada patamar com o "por que aquele número"** — a fonte percorre 10/5/3/1/0,5 explicando o gatilho de cada um (10 = nada ou ≤2 tubulares <1 cm, "como se não fosse nada", e aceita-se 5–10; 5 = >2 tubulares <1 cm; 3 = >5 adenomas OU >1 cm OU viloso OU displasia de alto grau — e nota que aqui o corte é 1 cm, não 2; 1 ano = >10 adenomas, "quase polipose", OU carcinoma in situ ressecado = Haggitt 0; 6 meses = piecemeal OU adenoma >2 cm); e o **paralelo explícito que a fonte faz lado a lado** entre vigilância do adenoma e critério de cura do carcinoma (mesmo gatilho — fragmentação/>2 cm —, destinos opostos: adenoma repete em 6 meses, carcinoma vai à colectomia). A página tem a tabela e o paralelo no toggle; cabe um bloco que reforça o "porquê" de o corte de tamanho mudar entre tabelas (P5 usa 2 cm; vigilância usa 1 cm em vários patamares) e amarra o carcinoma in situ = Haggitt 0 ao patamar de 1 ano — conexões que a fonte faz e que blindam contra erro.

### Bloco p8-A — INSERIR APÓS o `<figure class="figure-svg">` da linha do tempo, mais precisamente APÓS o `<div class="hotspot-detail" data-hs-detail-for="vigtl">` (o `</div>` que fecha esse hotspot-detail), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">Por que o corte de tamanho "muda" entre os fatores de risco e a vigilância</h3>
<div class="prose">
  <p>Um detalhe gera confusão e a banca explora: nos <strong>fatores de risco do adenoma</strong>, o corte de tamanho é <strong>&gt; 2 cm</strong>; já na <strong>vigilância</strong>, o USPSTF usa <strong>1 cm</strong> em vários patamares (e reserva os 2 cm para o intervalo mais curto, de 6 meses). Não é contradição — é a mesma ideia ("tamanho importa") com <strong>pontos de corte diferentes conforme a finalidade</strong>. Para definir <em>quão perigoso</em> é um adenoma isolado, pesa-se a partir de 2 cm; para definir <em>com que frequência reexaminar</em>, o limiar é mais sensível (1 cm). Saber que o número muda de propósito evita travar quando o enunciado usa um corte e a memória insiste no outro.</p>
</div>

<div class="card card--success">
  <h3>Carcinoma in situ = Haggitt 0 = colonoscopia em 1 ano</h3>
  <p>Vale amarrar duas classificações que a aula trata em páginas distintas. O <strong>carcinoma in situ</strong> — intramucoso, que <strong>não ultrapassou a muscular da mucosa</strong> — é exatamente o <strong>nível 0 de Haggitt</strong>. E, na tabela de vigilância, ressecar um carcinoma in situ coloca o paciente no patamar de <strong>1 ano</strong> para a próxima colonoscopia. Então, quando o enunciado disser "carcinoma in situ ressecado" ou "Haggitt 0", está dando a mesma informação por nomes diferentes — e a resposta de seguimento é reexame em 1 ano.</p>
</div>
```

---

# HTML p9 — PAF: a polipose adenomatosa familiar e o gene APC

**O que a página já tem**: prose de abertura (PAF clássica: APC herdado, 100–1000 pólipos, risco 100%; atenuada <100/80%; severa >1000/100%; diferença clássica×severa nenhuma), `figure-svg` tapete de pólipos + bolsa ileal, `cmp` das 3 formas, prose de transição + `figure.med` (PAF real), `card--accent` "Colectomia total × proctocolectomia total", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: a **genética do "todas as células × uma célula"** que distingue hereditário de esporádico e explica os achados extracolônicos — a fonte raciocina: no esporádico, **uma** célula do cólon erra a mitose e muta o APC, então só ali começa a sequência; no hereditário, o paciente **nasceu** com o APC mutante (herdado do pai), e isso está em **todas as células do corpo**, não só no cólon — por isso o câncer aparece muito jovem (<20 anos) E surgem alterações em outros tecidos (tumor de SNC, osteomas de mandíbula, retinite pigmentosa); e o **mecanismo da bolsa ileal destrinchado** — por que não ligar o íleo direto ao ânus (o cólon é o "grande armazém" de fezes e absorve água/líquidos; o íleo é fino, de diâmetro muito menor e pouca capacidade absortiva, então a anastomose direta daria diarreia ~80×/dia e desidratação), e como a bolsa resolve (dobra-se o íleo e grampeia, o que aumenta o diâmetro/reservatório e baixa para ~15–20 evacuações/dia, "compatível com a vida"). A página tem a tabela e o card; o SVG já traz parte do mecanismo da bolsa, mas o texto soberano da página não destrincha a genética "todas as células" nem o porquê fisiológico do íleo. Esses são os dois blocos.

### Bloco p9-A — INSERIR APÓS o `<div class="card card--accent">` "Colectomia total × proctocolectomia total — a diferença que cai" (o `</div>` que fecha o card), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">Uma célula × todas as células: a genética que explica a idade jovem e os achados fora do cólon</h3>
<div class="prose">
  <p>A diferença entre o CCR esporádico e o hereditário cabe numa frase: <strong>onde</strong> está a mutação do APC. No <strong>esporádico</strong>, a pessoa nasce com o APC <strong>normal</strong>; em algum momento — em média aos 40–50 anos — <strong>uma única célula</strong> do cólon erra a mitose e adquire a mutação. Só naquela célula, e só ali, a sequência de pólipos começa. É por isso que o esporádico só se rastreia a partir dos 50: é o tempo que o corpo leva, em média, para cometer esse erro por acaso. No <strong>hereditário</strong> (PAF), o paciente <strong>nasceu</strong> com o APC mutante — herdado de um genitor que já o carregava — e essa mutação está em <strong>todas as células do corpo</strong>, não apenas no cólon. Duas consequências diretas: o câncer colorretal aparece <strong>muito cedo</strong> (às vezes antes dos 20 anos), porque o passo 1 já estava dado desde o nascimento; e surgem <strong>alterações em outros tecidos</strong> — tumores do sistema nervoso central, <strong>osteomas</strong> (mandíbula/crânio) e <strong>retinite pigmentosa</strong> —, porque o gene mutado também está lá fora. É essa biologia "no corpo inteiro" que liga a PAF às variantes Gardner e Turcot.</p>
</div>

<h3 class="topic-h">Por que o íleo não pode ir direto ao ânus — a fisiologia da bolsa ileal</h3>
<div class="prose">
  <p>Na clássica e na severa (risco 100%), tira-se cólon e reto inteiros (<strong>proctocolectomia total</strong>) e sobra o ânus para reconectar o íleo. O problema é funcional. O <strong>cólon é um grande armazém de fezes</strong> e absorve água e líquidos com eficiência; o <strong>íleo é fino</strong>, de diâmetro muito menor e com pouca capacidade absortiva. Ligar o íleo <strong>direto</strong> ao ânus jogaria conteúdo líquido e mal absorvido na saída — o paciente evacuaria em torno de <strong>80 vezes por dia</strong>, com risco real de <strong>desidratação</strong>. A solução é a <strong>bolsa ileal</strong>: dobra-se o íleo sobre si mesmo e grampeia-se os dois segmentos, o que <strong>dobra o diâmetro</strong> e cria um <strong>reservatório</strong>. Com mais capacidade de armazenar e um pouco mais de superfície para absorver, as evacuações caem para cerca de <strong>15–20 por dia</strong> — ainda muitas, mas <strong>compatíveis com a vida</strong>. A bolsa não tem função oncológica: é puramente um reservatório que devolve qualidade de vida.</p>
</div>
```

---

# HTML p10 — Variantes da PAF: Gardner e Turcot

**O que a página já tem**: prose de abertura (Gardner/Turcot = mesma doença que PAF, mesmo APC, mesma herança AD; muda só a manifestação extracolônica; genética "APC em todas as células"), `toggle-switch` Gardner × Turcot (2 cards), `figure-svg` herança AD com 4 hotspots, 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **fechamento da regra "praticamente todas as síndromes hereditárias de CCR são autossômicas dominantes"** — a fonte é enfática que essa é a herança de PAF, Gardner, Turcot, Peutz-Jeghers e Lynch, e que isso é "muito perguntado"; a página afirma AD por síndrome, mas cabe consolidar a regra única num lugar e amarrá-la ao critério de "2 gerações consecutivas" de Amsterdam (P12), que é consequência direta da herança dominante (passa vertical, geração após geração). A página já tem o SVG da herança AD; o reforço textual conecta a herança ao porquê de o padrão familiar ser vertical — conteúdo que a fonte dá e que prepara Amsterdam.

### Bloco p10-A — INSERIR APÓS o `<div class="hotspot-detail" data-hs-detail-for="herancaad">` (o `</div>` que fecha esse hotspot-detail), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">A herança que vale para todas — e por que ela cria o padrão "vertical" da família</h3>
<div class="prose">
  <p>Há uma regra que atravessa o bloco inteiro de síndromes e que a banca cobra com frequência: <strong>praticamente todas as síndromes hereditárias de câncer colorretal são autossômicas dominantes</strong>. Vale para <strong>PAF, Gardner, Turcot, Peutz-Jeghers e Lynch</strong> — todas. "Dominante" significa que <strong>basta uma cópia mutada</strong> do gene para a doença se manifestar; o indivíduo afetado é heterozigoto e tem 50% de chance de transmitir a mutação a cada filho, em ambos os sexos. A consequência prática aparece na <strong>árvore genealógica</strong>: a doença passa <strong>vertical, geração após geração</strong> (avô → pai → filho), sem pular gerações. Guarde esse desenho — ele é exatamente o que sustenta o critério de "<strong>duas gerações consecutivas</strong>" dos critérios de Amsterdam, usados para diagnosticar Lynch.</p>
</div>
```

---

# HTML p11 — Peutz-Jeghers: a polipose hamartomatosa das manchas

**O que a página já tem**: prose de abertura (não adenomatosa, é hamartomatosa; risco de CCR aumentado mas menor que PAF; STK11; manchas melanóticas em lábios/mucosa/dedos), `figure-svg` manchas + pólipos do delgado, prose + `figure.med` (manchas perilabiais reais), prose + `figure.med` (pólipo hamartomatoso real), `card--accent` "O que muda no rastreio", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê de o cólon NÃO ser a prioridade** destrinchado — a fonte é clara: nessa síndrome "não são os pólipos do cólon que dão trabalho", são os do **estômago e intestino delgado**, e o motivo é o que eles fazem: **laceram, sangram e causam intussuscepção**, gerando uma clínica de **hemorragia digestiva, dor abdominal e intussuscepção**; por isso o rastreio (a partir dos 15 anos) prioriza **endoscopia digestiva alta, estudo do delgado e exames como mamografia** pelo risco extracolônico, e não a colonoscopia. A página menciona a clínica e o rastreio amplo, mas o texto soberano não destrincha *por que* a clínica é dominada pelo delgado (o que os pólipos fazem mecanicamente) nem amarra isso à inversão de prioridade do rastreio. Esse é o bloco — junto da nota de que o risco de CCR, embora real, é menor que na PAF, e da via pela qual ele existe (adenoma dentro do hamartoma, ponte com p4-A).

### Bloco p11-A — INSERIR APÓS o `<div class="card card--accent">` "O que muda no rastreio" (o `</div>` que fecha o card), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">Por que o problema, aqui, não é o cólon — é o delgado que sangra e invagina</h3>
<div class="prose">
  <p>Peutz-Jeghers inverte a intuição: numa síndrome de polipose, o <strong>cólon não é o que mais preocupa</strong>. Os pólipos que dão trabalho ficam no <strong>estômago e, sobretudo, no intestino delgado</strong> — e o que importa é o que eles <strong>fazem</strong>. São pólipos hamartomatosos que <strong>laceram</strong> (sangram), provocam <strong>hemorragia digestiva</strong> e funcionam como ponto de tração que puxa a alça para dentro de si mesma, causando <strong>intussuscepção</strong> (uma alça que "telescopa" dentro da outra). Por isso a clínica clássica do paciente é a tríade <strong>hemorragia digestiva + dor abdominal + intussuscepção</strong> — e não um quadro de cólon. É essa biologia que explica por que o <strong>rastreio inverte a prioridade</strong>: começa cedo (a partir dos <strong>15 anos</strong>, semelhante à PAF), mas privilegia a <strong>endoscopia digestiva alta</strong>, o <strong>estudo do delgado</strong> e exames de outros sítios de risco (como <strong>mamografia</strong>), deixando a colonoscopia em segundo plano.</p>
</div>

<div class="card card--info">
  <h3>Há risco de CCR, sim — só não tão alto quanto na PAF</h3>
  <p>Não confunda "o cólon não é a prioridade" com "não há risco colorretal". Há, e é <strong>aumentado</strong> — mas <strong>menor</strong> que na PAF. A via é a mesma da P4: <strong>dentro de um hamartoma, a chance de surgir um adenoma é maior do que no epitélio normal</strong>, e, uma vez surgido, esse adenoma segue a sequência adenoma-carcinoma. Ou seja, o câncer colorretal de Peutz-Jeghers <strong>passa pelo adenoma</strong> como qualquer outro — o hamartoma apenas oferece terreno mais fértil. Por isso a vigilância colônica existe; ela só cede a primeira fila para o delgado, que é onde mora o perigo imediato.</p>
</div>
```

---

# HTML p12 — Lynch / HNPCC: a síndrome que não faz polipose

**O que a página já tem**: prose de abertura (Lynch/HNPCC, não polipoide, mas passa pela sequência; instabilidade de microssatélites; MLH1/MSH2 ~90%; MSH2 → urológicos), `figure-svg` Amsterdam 1-2-3, prose do algoritmo genético (Amsterdam × análise genética; MLH1/MSH2 + BRAF ausente; excluir PAF), `reveal` do algoritmo A-B-C-D, `card--accent` "Tumores associados e tratamento" (endométrio, urológicos, ~60% → colectomia total preserva reto), 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê de "não polipoide" ser uma armadilha conceitual** — a fonte insiste: dizer que o paciente tem CCR "não polipoide" NÃO quer dizer que ele tenha câncer sem passar pela sequência; ele **passa** (adquire a mutação do APC e percorre adenoma → adenocarcinoma), apenas **não acumula múltiplos pólipos** pelo intestino; a diferença é não ter o *tapete* de pólipos da PAF, não pular a biologia; e o **porquê de MLH1 isolado não fechar Lynch** — a fonte raciocina o algoritmo: a mutação de MLH1 **pode ser adquirida** num CCR esporádico, então achá-la não basta; o que sela esporádico é a **mutação do BRAF presente**, e por isso Lynch por genética exige MLH1/MSH2 presente **+ BRAF ausente + PAF excluída**. A página tem o reveal A-B-C-D e o card; cabe um bloco que destrincha a pegadinha do "não polipoide" (a fonte gasta vários parágrafos nisso) e reforça, em prosa soberana, o raciocínio do BRAF — para que o aluno entenda *por que* o algoritmo é assim, não só decore os passos.

### Bloco p12-A — INSERIR APÓS o `<div class="card card--accent">` "Tumores associados e tratamento" (o `</div>` que fecha o card), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">"Não polipoide" não quer dizer "câncer sem adenoma" — a armadilha conceitual</h3>
<div class="prose">
  <p>O "não polipoide" do nome HNPCC engana, e a banca conta com isso. Dizer que o paciente de Lynch tem um CCR <strong>não polipoide</strong> <strong>não</strong> significa que ele desenvolva câncer <strong>sem passar pela sequência</strong> adenoma-carcinoma. Ele passa: em algum momento adquire a mutação do <strong>APC</strong> e percorre o caminho normal <strong>adenoma → adenocarcinoma</strong>. O que ele <strong>não</strong> tem é o <strong>tapete de múltiplos pólipos</strong> da PAF — o intestino não fica forrado de adenomas. A diferença, portanto, é de <strong>quantidade visível de pólipos</strong>, não de mecanismo. O motor por trás é a <strong>instabilidade de microssatélites</strong>: uma falha no reparo do DNA (genes de <em>mismatch repair</em>) que faz mutações surgirem a qualquer momento, acelerando a transformação de um adenoma que, sozinho, talvez nem chamasse atenção.</p>
</div>

<h3 class="topic-h">Por que encontrar MLH1 não basta — o papel decisivo do BRAF</h3>
<div class="prose">
  <p>O detalhe que fecha (ou derruba) o diagnóstico genético é o <strong>BRAF</strong>, e vale entender a lógica, não só decorar. A mutação de <strong>MLH1</strong> também pode aparecer num <strong>CCR esporádico</strong> — ela é passível de ser adquirida ao longo da vida. Logo, achar MLH1 num tumor <strong>não prova</strong>, sozinho, que aquilo é Lynch. O que separa um do outro é a mutação do <strong>BRAF</strong>: quando o <strong>BRAF está presente</strong>, ele praticamente <strong>sela o diagnóstico de esporádico</strong> (via serrilhada). Por isso, quando não há família para aplicar Amsterdam, o algoritmo exige três coisas juntas: <strong>MLH1 ou MSH2 presente</strong> (ou outra mutação de reparo associada), <strong>BRAF ausente</strong> e <strong>PAF excluída</strong> (sem múltiplos pólipos). Falhou qualquer uma — sobretudo se o BRAF aparecer — e o caso desliza para esporádico. Esse ponto (MLH1 + BRAF ausente) já caiu mais de uma vez em provas de acesso a especialidade.</p>
</div>
```

---

# HTML p13 — Rastreamento: quando começar e como, fora a colonoscopia

**O que a página já tem**: prose de abertura (quando começar × com o quê; esporádico 50 anos MS/Brasil, 10/10; mais risco, mais cedo), `toggle-switch` idade por risco × métodos (2 tabelas `cmp`), `card--info` "O exemplo do 10 anos antes", `trap` "As pegadinhas que as bancas adoram" (sigmoidoscopia + FIT, colono virtual = TC, alterado → colono), 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê de a colonoscopia virtual não ter vantagem** destrinchado — a fonte raciocina: colono virtual é uma **TC** que exige **preparo de cólon** (toma contraste oral que passa pelo cólon), e o preparo é justamente "a pior coisa da colonoscopia"; como a sigmoidoscopia dispensa o preparo completo (basta clister/lavagem), a virtual não oferece vantagem real — só ganha indicação numa situação específica: quando o colonoscópio **não passou** por uma **estenose/tumor estenosante** e é preciso avaliar todo o cólon antes de operar (para não deixar um segundo câncer no cólon direito — risco de iatrogenia), e mesmo aí com **preparo delicado** porque há obstrução; e o **porquê de "qualquer método alterado obrigar colonoscopia"** — todos os métodos sem imagem (guáiaco, FIT, DNA fecal) e parciais (sigmoidoscopia) não olham o cólon inteiro por dentro; qualquer alteração exige a colono para estudar todo o cólon. A página tem a `trap` que afirma essas regras; cabe um bloco que dá o raciocínio fisiológico/cirúrgico por trás (preparo, estenose, iatrogenia do segundo câncer), que a fonte desenvolve e a página só sintetiza.

### Bloco p13-A — INSERIR APÓS o `<div class="trap">` "As pegadinhas que as bancas adoram" (o `</div>` que fecha o `.trap`), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">Por que a colonoscopia virtual "não tem vantagem" — e a única vez em que ela serve</h3>
<div class="prose">
  <p>A "colonoscopia virtual" soa como uma versão moderna e indolor da colono, mas o raciocínio a desmonta. Ela é, no fundo, uma <strong>tomografia</strong>: o paciente toma contraste, que percorre o cólon, e por isso <strong>exige preparo de cólon</strong> igual ao da colonoscopia comum. Ora, o preparo é exatamente <strong>a pior parte</strong> da colonoscopia. Como a virtual não elimina o preparo e ainda perde a capacidade de <strong>biopsiar ou ressecar</strong> na hora, ela <strong>não oferece vantagem real</strong> — e qualquer achado nela acaba mandando o paciente para a colono de verdade. Há, porém, <strong>uma situação</strong> em que ela ganha lugar: quando o <strong>colonoscópio não conseguiu passar</strong> por uma <strong>estenose ou tumor estenosante</strong> e é preciso avaliar o restante do cólon. O motivo é cirúrgico e sério: antes de operar um tumor que obstrui, é obrigatório estudar todo o cólon — <strong>pode haver um segundo câncer</strong>, por exemplo no cólon direito, e ressecar só o segmento obstruído deixando outro tumor para trás é uma <strong>iatrogenia grave</strong>. Mesmo aí, o preparo precisa ser <strong>delicado</strong>, porque o cólon está obstruído e um preparo vigoroso é perigoso.</p>
</div>

<div class="card card--success">
  <h3>A regra que não tem exceção: alterou, faz colonoscopia</h3>
  <p>Há um ponto inegociável que costura todos os métodos alternativos. Sangue oculto (guáiaco), <strong>FIT</strong>, DNA fecal e sigmoidoscopia são úteis, mas <strong>nenhum olha o cólon inteiro por dentro</strong> — os fecais não têm imagem alguma, e a sigmoidoscopia só alcança o cólon esquerdo. Por isso, <strong>qualquer um deles que venha alterado obriga uma colonoscopia</strong> para estudar todo o cólon. O método alternativo é uma triagem; a colonoscopia é quem confirma, localiza e, se preciso, já trata. E entre os fecais, lembre que o <strong>FIT é melhor que o guáiaco</strong> e <strong>não é a mesma coisa</strong> que o sangue oculto clássico — é a combinação correta com a sigmoidoscopia (sigmoidoscopia + FIT, nunca + guáiaco).</p>
</div>
```

---

# HTML p14 — Seguimento pós-CCR e a síntese da aula

**O que a página já tem**: prose de abertura (CEA + TC tórax/abdome/pelve + colono; até 5 anos), `reveal` do cronograma (consultas/CEA/colono/imagem), `card--info` "As especificidades que distinguem reto de cólon" (RM de pelve, PET scan), `card--accent` "O fio que costura o módulo", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê de o CEA ser dosado no pré-operatório** — a fonte é explícita: pede-se CEA <strong>antes</strong> da cirurgia justamente para ter a linha de base e poder acompanhar, no pós-operatório, o <strong>declínio</strong> (queda após retirar o tumor) e, depois, eventuais <strong>reascensões</strong> que sinalizam recidiva; sem o valor pré, um CEA pós isolado perde referência; e o **critério prático do "aumento considerável"** — a fonte explica que não há número fixo na literatura, mas que a leitura é por <strong>magnitude relativa</strong>: 30→31 não conta; 30→40 conta — e um aumento considerável obriga os outros dois exames (colono + TC tórax/abdome/pelve), buscando recidiva abdominal e metástase pulmonar; e o **racional do PET** (esclarecer se um achado da TC é fibrose da cirurgia × recidiva: hipercaptante = provável recidiva, aborda; sem captação = acompanha e reimagina em 6 meses). A página tem o reveal e o card de reto×cólon; cabe um bloco soberano que destrincha o "por que dosar CEA antes" e o critério do aumento relativo — e fecho com a consolidação das armadilhas da aula como revisão ativa, na forma que uma página-síntese pede (espelhando o p14-A da aula 04).

### Bloco p14-A — INSERIR APÓS o `<div class="card card--info">` "As especificidades que distinguem reto de cólon (ponte com a Aula 3)" (o `</div>` que fecha o card), ANTES do `<div class="card card--accent">` "O fio que costura o módulo".

```html
<h3 class="topic-h">Por que o CEA é dosado ANTES da cirurgia — e o que conta como "aumento"</h3>
<div class="prose">
  <p>O <strong>CEA</strong> (antígeno carcinoembrionário) só vira um bom marcador de seguimento se houver um valor <strong>pré-operatório</strong> para comparar. Dosa-se antes da cirurgia por dois motivos encadeados: primeiro, para acompanhar o <strong>declínio</strong> esperado depois que o tumor é retirado (se não cair, algo ficou); segundo, para ter a <strong>linha de base</strong> contra a qual qualquer <strong>reascensão</strong> futura será lida como possível recidiva. Um CEA pós-operatório isolado, sem o valor pré, perde referência. No seguimento, ele é colhido a cada <strong>6 meses</strong>. E o que conta como aumento? A literatura <strong>não fixa um número</strong> — a leitura é por <strong>magnitude relativa</strong>: ir de <strong>30 para 31</strong> não é aumento (oscilação); ir de <strong>30 para 40</strong> é. Diante de um aumento considerável, não se espera: solicitam-se os outros dois exames — <strong>colonoscopia e TC de tórax, abdome e pelve</strong> — para caçar recidiva abdominal e metástase pulmonar.</p>
</div>

<h3 class="topic-h">Quando entra o PET — distinguir fibrose de recidiva</h3>
<div class="prose">
  <p>O <strong>PET scan</strong> não é rotina de seguimento; ele entra para resolver uma dúvida específica. Imagine que a TC de controle mostra uma <strong>tumoração</strong> perto do antigo leito do tumor (por exemplo, na fossa ilíaca direita onde estava a lesão). A pergunta é: isso é <strong>fibrose</strong> da cirurgia ou <strong>recidiva tumoral</strong>? A TC sozinha nem sempre separa as duas. Aí se pede o PET: se a lesão for <strong>hipercaptante</strong>, há grande probabilidade de <strong>recidiva</strong> — aborda-se e ressecа-se; se <strong>não capta</strong>, segue-se acompanhando, repetindo a imagem em cerca de 6 meses, presumindo fibrose. O PET, portanto, é um árbitro de achado duvidoso, não um exame de varredura periódica.</p>
</div>

<h3 class="topic-h">O mapa das armadilhas que esta aula desarmou</h3>
<div class="card card--densify">
  <span class="densify-tag">Antes de fechar — não erre nenhuma destas</span>
  <ul>
    <li><strong>Macro × micro são eixos diferentes:</strong> pediculado/séssil é a forma; tubular/viloso/tubuloviloso é a histologia. Pediculado <em>costuma</em> ser tubular, mas isso é tendência, não equivalência.</li>
    <li><strong>O vilão é o viloso:</strong> pior prognóstico entre os adenomas e um dos três fatores de risco (com &gt; 2 cm e displasia de alto grau). O tubular é o melhor (~85% nunca viram câncer).</li>
    <li><strong>Haggitt/Kikuchi só para carcinoma:</strong> a classificação por profundidade existe só para adenocarcinoma em pólipo — nunca para adenoma benigno ou hiperplásico.</li>
    <li><strong>SM1 = 1000 micras é o limite:</strong> níveis 0, 1, 2 e 3 até SM1 curam por polipectomia; 3-SM2/SM3 ou nível 4 (e todo carcinoma em séssil) = colectomia.</li>
    <li><strong>Critérios de cura (carcinoma) × vigilância (adenoma):</strong> fragmentação no carcinoma = colectomia; no adenoma = repetir colono em 6 meses. Mesmo gatilho, destinos opostos.</li>
    <li><strong>Cada síndrome com sua identidade:</strong> PAF (APC, adenomatosa, 100%, proctocolectomia); Peutz-Jeghers (STK11, hamartomatosa, manchas, delgado); Lynch (microssatélite, não polipoide, Amsterdam + BRAF ausente, ~60%, colectomia total). Todas autossômicas dominantes.</li>
  </ul>
</div>
```

---

# MAPA DE COBERTURA 100% (fonte → bloco)

Cada núcleo médico da transcrição e onde foi enriquecido. Itens já bem cobertos pela página existente são marcados **[já na página]** (preservados, não duplicados). Itens fora do escopo (metalinguagem, bastidores) estão listados ao final como **descartados**.

| Núcleo da fonte | Onde foi enriquecido |
|---|---|
| CCR = maior potencial de cura do tubo; cura até M1; o mais estudado; história natural inteira conhecida | **p2-A** / [prose já na página] |
| Aula de ROTINA, não de doença; 3 perguntas (histologia? conduta? acompanhamento?) | **p2-A** |
| Sequência adenoma-carcinoma; APC = primeira mutação; esporádico × hereditário | [já na prose + SVG + card p2] |
| Pólipo no cólon (ênfase); pode estar em estômago/delgado mas o foco é cólon | [já na prose p3 / contexto] |
| Esporádico (sozinho, risco menor) × síndrome (aos montes, risco maior) | **p3-A** / [dont-confuse já na página] |
| Por que "aos montes" = mais risco (aritmética dos pólipos) | **p3-A** |
| Pediculado × séssil = macroscópico; tubular/viloso = microscópico (avisado 5×) | [já na prose + trap p3] |
| Origem da confusão pediculado/tubular; pediculado costuma ser tubular (tendência) | **p3-A** / [trap já na página] |
| Neoplásico × não-neoplásico (hiperplásico +comum, inflamatório, hamartoma) | [já na prose + SVG p4] |
| Hiperplásico = mais comum (pergunta de prova "qual o tipo mais provável?") | [já no SVG + mnemonic + quiz p4] |
| Adenoma (benigno) × adenocarcinoma (maligno); adenoma pode malignizar | [já na prose + SVG p4] |
| APC decodificado (A-denomatoso P-olipose C-oli) | **p4-A** / [SVG já cita p2] |
| Hamartoma não-neoplásico mas com risco (adenoma surge dentro dele) | **p4-A** / **p11-A** |
| Histologia tubular/viloso/tubuloviloso só para adenoma; tubular 85%; viloso pior | [já na prose + SVG p5] |
| Por que histologia não se aplica a adenocarcinoma ("já é câncer, ponto") | **p5-A** |
| Viloso é vilão E fator de risco (mesma entidade); trinca viloso/>2cm/displasia | **p5-A** / [card--mnemonic já na página] |
| Todo pólipo deve ser ressecado; exceto polipose → cirurgia | **p5-A** / [quiz já na página p3] |
| Carcinoma em pólipo é T1; risco linfático decide polipectomia × colectomia | [já na prose p6] / **p6-A** |
| Profundidade prediz metástase linfática (mecanismo geográfico) | **p6-A** |
| Haggitt níveis: 0 in situ/intramucoso, 1 cabeça, 2 colo, 3 pedículo, 4 base | **p6-A** / [SVG já na página] |
| Carcinoma em séssil já é nível 4 (sem andares) | **p6-A** / [SVG + card já na página] |
| Kikuchi SM1/2/3; SM1 = 1000 micras; 500 micras também cura | **p6-A** / [SVG + card já na página] |
| Regra de corte: 0/1/2/3-SM1 cura; 3-SM2/SM3 ou 4 = colectomia | [já no card--accent p6] |
| 6 critérios de cura (juntos; carcinoma obrigatório, adenoma pondera) | [já na prose + reveal p7] |
| Margem livre (benigno e maligno; reabordar; senão colectomia) | **p7-A** / [reveal já na página] |
| Ressecção em bloco / sem piecemeal (não "lanhar") | **p7-A** / [reveal já na página] |
| SM1 (acréscimo das bancas pós-2022) | **p7-A** / [reveal já na página] |
| Bem diferenciado | **p7-A** / [reveal já na página] |
| Angiolinfática = linfovascular (mesmo critério, ordem trocada) | **p7-A** |
| Sem tumor budding (células escapando na frente de invasão) | **p7-A** / [reveal já na página] |
| Paralelo piecemeal: carcinoma = colectomia; adenoma = colono 6 meses | [já no trap p7 + toggle p8] |
| Vigilância USPSTF; quanto pior o achado, mais curto o intervalo (10/5/3/1/0,5) | [já na prose + tabela + SVG p8] |
| 10 anos (nada ou ≤2 tubulares <1 cm; aceita 5–10) | [já na tabela + SVG p8] |
| 5 anos (>2 tubulares <1 cm) | [já na tabela + SVG p8] |
| 3 anos (>5 adenomas OU >1 cm OU viloso OU displasia alto grau; corte 1 cm) | [já na tabela + SVG p8] |
| 1 ano (>10 adenomas OU carcinoma in situ = Haggitt 0) | [já na tabela + SVG p8] / **p8-A** |
| 6 meses (piecemeal OU adenoma >2 cm) | [já na tabela + SVG p8] |
| Por que o corte de tamanho muda (2 cm fator de risco × 1 cm vigilância) | **p8-A** / [card--info já na página] |
| Carcinoma in situ = Haggitt 0 = intramucoso = colono 1 ano | **p8-A** / [tabela já na página] |
| PAF clássica (APC herdado, 100–1000, risco 100%, AD); atenuada (<100, 80%); severa (>1000, 100%) | [já na prose + cmp p9] |
| Clássica × severa: diferença prática nenhuma; atenuada muda conduta | [já na prose + cmp p9] |
| Genética "uma célula (esporádico) × todas as células (hereditário)" | **p9-A** / [prose p2 menciona] |
| Câncer muito jovem (<20) + achados extracolônicos (SNC, osteomas, retinite) | **p9-A** / [card--accent já na página] |
| Proctocolectomia total (clássica/severa) × colectomia total preserva reto (atenuada) | [já no card--accent + cmp p9] |
| Bolsa ileal: por que não ligar íleo direto (cólon=armazém, íleo fino, ~80×/dia); dobra/grampeia → ~15-20×/dia | **p9-A** / [SVG já na página] |
| Gardner/Turcot = mesma PAF (APC, AD); muda manifestação extracolônica | [já na prose + toggle p10] |
| Gardner = osteomas + partes moles (cistos, lipomas, desmoides) | [já no toggle + quiz p10] |
| Turcot = tumor do SNC | [já no toggle p10] |
| Todas as síndromes hereditárias de CCR são AD (muito perguntado) | **p10-A** / [SVG herança AD + quiz já na página] |
| Herança AD → padrão vertical → base do "2 gerações" de Amsterdam | **p10-A** / [SVG já na página] |
| Peutz-Jeghers: hamartomatosa (não adenomatosa), STK11, AD | [já na prose + SVG p11] |
| Manchas melanóticas (lábios, mucosa, dedos) = marca registrada | [já na prose + SVG + figure.med p11] |
| Cólon não é a prioridade; pólipos do estômago/delgado (laceram, sangram, intussuscepção) | **p11-A** / [SVG + card já na página] |
| Clínica: hemorragia digestiva + dor abdominal + intussuscepção | **p11-A** / [SVG já na página] |
| Rastreio 15 anos; EDA, delgado, mamografia (não prioriza colono) | **p11-A** / [card--accent já na página] |
| Risco de CCR aumentado mas menor que PAF; via adenoma-dentro-do-hamartoma | **p11-A** / [prose já na página] |
| Lynch/HNPCC: não polipoide, mas passa pela sequência | [já na prose p12] / **p12-A** |
| "Não polipoide" ≠ câncer sem adenoma (armadilha) | **p12-A** / [prose já na página] |
| Instabilidade de microssatélites; MLH1/MSH2 ~90%; MSH2 → urológicos | [já na prose + card p12] / **p12-A** |
| Amsterdam 1-2-3 (1 CCR <50, 2 gerações, 3 familiares 1 de 1º grau) | [já no SVG + reveal p12] |
| Algoritmo genético: MLH1/MSH2 + BRAF ausente + excluir PAF | [já na prose + reveal p12] / **p12-A** |
| Por que MLH1 isolado não basta; BRAF presente sela esporádico | **p12-A** / [reveal já na página] |
| Tumores associados: endométrio (principal), delgado, pâncreas, urológicos | [já no card--accent p12] |
| Lynch ~60% → colectomia total (preserva reto); CCR ~40 anos | [já no card--accent p12] |
| Rastreio esporádico 50 anos (MS/Brasil), colono 10/10; ACS aos 45 (DDV) | [já na prose + tabela p13] |
| História familiar: 40 anos OU 10 anos antes (o que for mais jovem) | [já na tabela + card--info p13] |
| Lynch rastreio 20 anos; PAF/Peutz-Jeghers 12–15 anos | [já na tabela p13] |
| Métodos: guáiaco anual; FIT anual (melhor, ≠ guáiaco); DNA fecal 3/3 | [já na tabela p13] |
| Sigmoidoscopia + FIT (não guáiaco) 10/10; ou sigmoidoscopia 5/5 | [já na tabela + trap p13] |
| Colono virtual = TC, exige preparo, sem vantagem; só se colonoscópio não passou (estenose) | **p13-A** / [tabela + trap já na página] |
| Iatrogenia do segundo câncer no cólon direito antes de operar estenose | **p13-A** |
| Qualquer método alterado → colonoscopia obrigatória | **p13-A** / [trap já na página] |
| Seguimento pós-CCR: CEA + TC tórax/abdome/pelve + colono; até 5 anos | [já na prose + reveal p14] |
| Cronograma: consultas 3/6 meses → 6/6 por 2 anos → anual; CEA 6/6; colono 1→3→5 anos; imagem anual | [já no reveal p14] |
| CEA dosado no pré-op (linha de base, declínio, reascensão) | **p14-A** / [reveal menciona] |
| Aumento "considerável" do CEA = relativo (30→31 não; 30→40 sim) → colono + TC | **p14-A** / [reveal já na página] |
| RM de pelve só em reto baixo (excisão total do mesorreto); não em cólon | [já no card--info p14] |
| PET só para achado duvidoso (fibrose × recidiva); hipercaptante = recidiva | **p14-A** / [card--info já na página] |
| TC de crânio só com sintomas/alterações focais | [já no reveal p14] |
| Fio que costura o módulo (pré-CCR / Aula 3 CCR / Aula 4 metástase; CEA; SM1) | [já no card--accent p14] |
| Consolidação das armadilhas (revisão ativa) | **p14-A** |

**Descartados por estarem fora do escopo (não enriquecidos):**

| Item da fonte descartado | Motivo |
|---|---|
| "Salve salve, meu amigo, minha amiga" / "nessa aula a gente vai aprofundar" / "para quem assistiu à aula de CCR" / "eu já cansei de falar isso" / "espero que tenham gostado" / "aula por vídeo, pode acelerar" | Metalinguagem de produto/aula — proibida (regra 4). |
| "Anote, de preferência cole na sua parede" / "se você abrir o SAFE tem uma tabela" / "não seja o chato de galocha" / "decoreba" / "Croácia, aquela alternativa que ninguém marca" | Metalinguagem de estudo / comentário de prova — descartado; o conteúdo médico (intervalos, síndromes raras não cobradas) foi preservado onde cabia. |
| "Felipe" / "o tio" / interlocução de estúdio / "olha bem para mim" | Personagens / fala de gravação — não são conteúdo. |
| "Essa peça aqui é de quando eu era residente / minha primeira proctocolectomia, R3" / "briguei com meu pai por causa da colono" / "alô, iatrogenia!" | Bastidores e anedotas pessoais — descartados; o conteúdo (proctocolectomia/bolsa ileal; iatrogenia do 2º câncer) foi preservado em p9-A e p13-A sem a anedota. |
| Síndromes citadas só de passagem (Cronkhite-Canada / "Crockett, Canadá") | A própria fonte diz que não caem em prova e não devem ser aprofundadas; fora do escopo das 14 páginas. |
| Erros de transcrição "REGT / gene HPC / Piltch-Jagger / tumor burning / US Task Force / TIF" | Não descartados como conteúdo — **corrigidos** para Haggitt-Kikuchi / APC / Peutz-Jeghers / tumor budding / USPSTF / FIT em todos os blocos. O erro literal nunca entra. |

**Gate de cobertura: 100% do conteúdo de pólipos e síndromes.** Todos os núcleos médicos da transcrição estão presentes — seja já na página (preservado), seja enriquecidos pelos blocos acima. Nenhum fato fora da fonte foi introduzido. Metalinguagem, bastidores e síndromes não cobráveis foram descartados por estarem fora do escopo, com motivo documentado. As seis correções médicas do calibrador foram aplicadas em todos os blocos.

---

# RESUMO PARA O EXECUTOR

- **Páginas tocadas**: HTML p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14 (todas as 13 de conteúdo). O `p1` (dashboard) **não recebe blocos**.
- **Total de blocos a inserir**: 13 (p2-A; p3-A; p4-A; p5-A; p6-A; p7-A; p8-A; p9-A; p10-A; p11-A; p12-A; p13-A; p14-A). Cada bloco "-A" pode conter mais de uma caixinha (`topic-h` + `prose`/`card`), conforme a densidade que a página pedia.
- **Offset de numeração**: o `p1` HTML É o dashboard; as `page-tag` dizem "Página N / 14" e batem com o ID `pN`. Os blocos enriquecem **p2..p14** (offset zero entre ID do HTML e numeração visível).
- **Âncoras**: todas são trechos literais já presentes no HTML (fechamento de `card`, `trap`, `dont-confuse`, `mnemonic`, `hotspot-detail` ou `figure.med`). Inserir imediatamente **depois** do nó indicado e **antes** do próximo nó nomeado.
- **Classes usadas** (todas verificadas em `assets/css/components.css`): `topic-h`, `prose`, `card`, `card--accent`, `card--info`, `card--success`, `card--mnemonic`, `card--densify` (+ `span.densify-tag`), `mnemonic`, `dont-confuse` (+ `__label`/`__grid`/`__side`), `split`. **Zero uso de `callout`** (inexistente). Listas `<ul>` dentro de `.card--densify`/`.card--info` seguem o padrão já usado nas páginas.
- **Correções médicas**: Haggitt/Kikuchi (não "REGT"), APC (não "HPC"), Peutz-Jeghers (não "Piltch-Jagger"), tumor budding (não "tumor burning"), USPSTF (não "US Task Force"), FIT (não "TIF") — já aplicadas em todos os textos.
- **Operação é só INSERÇÃO.** Nenhum nó existente é editado, removido ou reordenado.
