# Retrofit de Elevação — Texto Rico · Aula 01 (Câncer de Esôfago)

**Repo**: `cirurgia-oncologica-2-premium` · **Alvo**: `aulas/aula-01/index.html` (p1..p12)
**Fonte de minúcia**: `transcricoes/a1-cancer-esofago.txt` + `roteiros/roteiro-a1-cancer-esofago-v1.md` + `laudos/laudo-a1-cancer-esofago-v1.md`
**Referência de densidade**: `aula-extra-06-ca-rim` e `aula-extra-07-ca-bexiga` (cada página = vários `topic-h` numerados, cada um com `prose` de 1-3 parágrafos densos)

---

## REGRAS DE EXECUÇÃO (para o Executor — ler antes de tocar no HTML)

1. **PRESERVAÇÃO ABSOLUTA.** Nada do que já existe é removido, reescrito ou reordenado. Tópicos azuis (`topic-h`), quizzes (`section.quiz` inteira, com gabaritos/justificativas/distractors), SVGs, `figure.med`/imagens, openers, dashboard, livestrip, banners, nav — **intocados**. Você só **insere** os blocos abaixo nos pontos indicados.

2. **VOCABULÁRIO DO CHASSI — usar SÓ classes que existem no CSS.** Verificado em `assets/css/components.css`. Disponíveis: `prose`, `topic-h`, `card`, `card--accent`, `card--info`, `card--success`, `card--mnemonic`, `card--densify` (`+ span.densify-tag`), `cmp` (tabela), `split`+`col yes`/`col no`+`pill pill--ok`/`pill pill--no`, `dont-confuse`+`dont-confuse__label`/`__grid`/`__side`, e os inline de prose: `quote-callout`, `term`, `highlight`.
   **NÃO EXISTE `callout` no CSS desta plataforma.** Onde o briefing genérico falava "callout", aqui mapeei para `card--accent` (destaque), `card--info` (lista comentada), `card--mnemonic` (frase-âncora) ou `p.quote-callout` dentro de `.prose` (citação/insight tipográfico). Não invente classe nova.

3. **Numeração de tópicos.** A referência (ca-rim/ca-bexiga) usa `<h3 class="topic-h">Tópico N — título</h3>`. A aula-01 hoje usa `topic-h` **sem** numeração. Para não conflitar com o que já existe, os novos blocos entram com `topic-h` no **mesmo estilo da página** (sem "Tópico N", a menos que a seção indique). O ganho de densidade vem da **prosa**, não da renumeração. Não renumere os `topic-h` pré-existentes.

4. **Voz.** Professor denso explicando direto ao aluno. PT-BR, técnico, sem metalinguagem ("nesta aula", "o professor", "neste módulo", "vamos ver", "como vimos"). Negrito nas palavras-chave. Cada caixinha = cabeçalho-insight + prosa densa OU lista comentada (nunca bullet seco).

5. **Onde inserir.** Cada bloco diz "INSERIR APÓS [âncora]". A âncora é um trecho literal já presente no HTML da página. Inserir imediatamente **depois** do nó indicado e **antes** do próximo nó nomeado (tipicamente antes da `<section class="quiz">`, salvo indicação contrária).

6. **Cobertura 100% da transcrição é gate.** O mapa ao final lista cada núcleo da fala do professor e em qual página/bloco ele foi enriquecido. Nenhum item da transcrição fica de fora.

---

# P1 — Sr. Aurelino: a disfagia que não parou

**O que a página já tem**: opener-case, "Cada detalhe da história é uma pista" (prose curta + 2 bullets), figura tilose, card--accent (consumptiva+tilose+etilismo → câncer), sumário, quiz.
**O que a transcrição ensina e a página comprimiu**: o conceito de **síndrome consumptiva** explicado de verdade (o organismo sendo "consumido"); o porquê de **disfagia que evolui em anos** apontar primeiro para **acalásia** e a pista deliberada do **interior de Minas → acalásia chagásica**; o ponto-chave de que a história **"não para na acalásia"** — é o excesso de pistas que empurra para câncer; o enquadramento de que **quase todo tumor do tubo digestivo emagrece**.

### Bloco P1-A — INSERIR APÓS a `<div class="prose">` de "Cada detalhe da história é uma pista" (após o `</div>` que fecha em ~linha 114), ANTES da `<figure class="med">` da tilose.

```html
<h3 class="topic-h">Síndrome consumptiva: o organismo sendo consumido</h3>
<div class="prose">
  <p>Antes de qualquer hipótese, repare no estado geral. O Sr. Aurelino está em <strong>síndrome consumptiva</strong> — o nome diz o que acontece: uma doença que <strong>consome</strong> o paciente. Emagrecimento, fraqueza, palidez por anemia (hipocorado 3+/4+), perda progressiva de massa. É o organismo sendo gasto por dentro, e é um dos retratos mais constantes da oncologia do tubo digestivo.</p>
  <p>Guarde isto como regra de fundo da apostila inteira: <strong>quase todo tumor do tubo digestivo emagrece</strong> — esôfago, estômago, cólon, pâncreas, fígado. O tumor tira a vontade de comer (anorexia) ou impede fisicamente a alimentação, como aqui, em que a disfagia fecha a passagem. Perda de peso, portanto, não é detalhe: é a assinatura comum desses cânceres.</p>
</div>
```

### Bloco P1-B — INSERIR APÓS a `<figure class="med">` da tilose (após `</figure>` em ~linha 119), ANTES do `topic-h` "A invasão comanda a conduta".

```html
<h3 class="topic-h">Por que a história não para na acalásia</h3>
<div class="prose">
  <p>Uma disfagia que se arrasta por <strong>anos</strong>, para sólidos e líquidos, com regurgitação de alimentos não digeridos, tem um suspeito clássico: <strong>acalásia</strong>. E há uma pista plantada de propósito — <strong>interior de Minas Gerais</strong>. Embora a acalásia idiopática seja a mais comum no geral, a origem rural mineira aponta para a <strong>acalásia chagásica</strong> (doença de Chagas destruindo o plexo de Auerbach). Uma banca não escreve "interior de Minas" à toa.</p>
  <p>Só que a história <strong>não para aí</strong> — e é exatamente o excesso de pistas que muda o raciocínio. Idoso, em síndrome consumptiva, etilista, e com <strong>tilose</strong> (queratodermia palmoplantar hereditária, que aumenta a proliferação de células escamosas pelo corpo). Se o caso terminasse na disfagia crônica, dava para parar na acalásia. Mas cada camada nova de informação — emagrecimento acelerado, álcool, pele palmoplantar cascuda — empurra o ponteiro para <strong>câncer de esôfago</strong>. A acalásia não é descartada: ela vira, na verdade, mais um <strong>fator de risco</strong> sobreposto.</p>
</div>
```

---

# P2 — Dois tumores, um esôfago

**O que a página já tem**: opener mnemônico (externo×interno), "Um órgão só, mas duas doenças", "Escamoso vem de fora, adeno vem de dentro", tabela `cmp`, quiz.
**O que a transcrição ensina e a página comprimiu**: o conceito de **tipo histológico predominante** — por que falar "câncer de estômago" já subentende adenocarcinoma, "câncer de fígado" hepatocarcinoma, "câncer de rim" células claras — e por que o **esôfago é a exceção** (junto com o pulmão); e o ponto cobrado em prova de que, no esôfago, **o que mais cai não é estadiamento/tratamento, são os fatores de risco** (porque é o que separa os dois pacientes).

### Bloco P2-A — INSERIR APÓS a `<div class="prose">` de "Um órgão só, mas duas doenças diferentes" (após `</div>` em ~linha 190), ANTES do `topic-h` "Escamoso vem de fora".

```html
<h3 class="topic-h">A exceção que vale prova: nenhum tipo histológico manda</h3>
<div class="prose">
  <p>Em quase todo órgão, dizer o nome do câncer já entrega o tipo histológico, porque um deles domina. Diga "câncer de estômago" e subentende-se <strong>adenocarcinoma gástrico</strong>; "câncer de pâncreas", <strong>adenocarcinoma ductal</strong>; "câncer de fígado", <strong>hepatocarcinoma</strong>; "câncer de rim", <strong>carcinoma de células claras</strong>. Falou o órgão, veio o tipo principal junto.</p>
  <p>No <strong>esôfago não funciona assim</strong> — e no <strong>pulmão</strong> também não. Aqui convivem <strong>dois tipos igualmente prevalentes e biologicamente distintos</strong>: o <strong>carcinoma escamoso (CEC / espinocelular)</strong> e o <strong>adenocarcinoma</strong>. Não é que um seja "o de verdade" e o outro raro: são dois cânceres diferentes dividindo o mesmo tubo, com fatores de risco, topografia e até resposta a tratamento opostos.</p>
</div>

<h3 class="topic-h">O que a banca realmente cobra no esôfago</h3>
<div class="card card--accent">
  <p>No câncer de esôfago, o item mais perguntado <strong>não é diagnóstico, estadiamento ou tratamento</strong> — são os <strong>fatores de risco</strong>. A razão é direta: como existem dois tipos histológicos prevalentes, a prova testa se você sabe <strong>qual paciente desenvolve qual tumor</strong>. É o fator de risco no enunciado que separa o candidato a escamoso do candidato a adenocarcinoma — e tudo o mais (onde aparece, como se comporta) deriva daí.</p>
</div>
```

---

# P3 — Fatores de risco

**O que a página já tem**: opener E7, "O ponto que mais separa os dois pacientes" (prose curta), tabela `cmp` completa, card--info com 3 bullets (cáusticos, tilose, Barrett), 2 quizzes.
**O que a transcrição ensina e a página comprimiu**: a **derivação lógica** do macete (por que externo→escamoso item a item: tabaco/álcool/HPV/Chagas/quente/cáustico são todos "de fora para dentro"); o **porquê do chimarrão no RS** (bebida ingerida muito quente agride a mucosa repetidamente); o detalhe de que o **cáustico deixa risco vitalício** se o paciente sobrevive; a explicação de que **tilose é risco de QUALQUER escamoso do corpo** (lista de sítios) e o **porquê** (proliferação escamosa sistêmica); o mecanismo da **obesidade** (↑ pressão intra-abdominal → ↑ refluxo → ↑ adeno) e a comparação **EUA × Brasil**; e a **derivação da topografia** a partir do macete (externo=onde a agressão chega = proximal/médio; interno=onde o ácido bate primeiro = distal).

### Bloco P3-A — INSERIR APÓS a `<div class="prose">` de "O ponto que mais separa os dois pacientes" (após `</div>` em ~linha 251), ANTES da tabela `<table class="cmp">`.

```html
<h3 class="topic-h">Por que o macete funciona: tudo escamoso vem de fora</h3>
<div class="prose">
  <p>Não decore a lista — deduza. O <strong>carcinoma escamoso</strong> é o tumor das <strong>agressões externas</strong>: tudo que chega pela luz do esôfago, de fora para dentro, machucando a mucosa repetidamente. Olhe a lista por essa lente e ela se monta sozinha: <strong>tabagismo</strong> (a fumaça vem de fora), <strong>etilismo</strong> (o álcool vem de fora), <strong>HPV</strong> (vírus que contaminou de fora e agride a mucosa), <strong>acalásia / doença de Chagas</strong> (estase e agressão crônica), <strong>líquidos muito quentes</strong> e <strong>substâncias cáusticas</strong> (queimadura química e térmica de fora para dentro). Todos têm a mesma natureza: insulto externo crônico ao epitélio escamoso.</p>
  <p>O <strong>adenocarcinoma</strong> é o oposto: a agressão é <strong>interna</strong>, e é uma só — o <strong>ácido</strong> do estômago, que sobe no refluxo e transforma a mucosa. Se o escamoso é "de fora para dentro", o adeno só pode ser "de dentro para fora". Por isso, dado um fator de risco no enunciado, basta classificá-lo como externo ou interno para chegar ao tipo.</p>
</div>
```

### Bloco P3-B — INSERIR APÓS o `<div class="card card--info">` de detalhes da banca (após `</div>` em ~linha 272), ANTES da `<section class="quiz">`.

```html
<h3 class="topic-h">Os três detalhes que a banca esconde — com o porquê de cada um</h3>
<div class="prose">
  <p><strong>Chimarrão e o Rio Grande do Sul.</strong> A região Sul, com destaque para o Rio Grande do Sul, tem a <strong>maior incidência de carcinoma escamoso</strong> do país. O motivo é o hábito do <strong>chimarrão ingerido muito quente</strong>: o líquido escaldante agride a mucosa esofágica seguidamente, ano após ano. Agressão térmica externa repetida = mais escamoso. "Paciente gaúcho, chimarrão quente" no enunciado é praticamente a assinatura do CEC.</p>
  <p><strong>Cáusticos deixam risco para a vida toda.</strong> Ingestão de ácido ou base (soda cáustica, água sanitária) provoca uma agressão brutal à mucosa. O ponto que rende prova: se o paciente <strong>sobrevive</strong> à fase aguda, ele carrega um <strong>risco aumentado de escamoso pelo resto da vida</strong> — a cicatriz e a regeneração crônica do epitélio mantêm o terreno predisposto.</p>
  <p><strong>Tilose não é risco "só do esôfago".</strong> A queratodermia palmoplantar hereditária aumenta a proliferação de células escamosas de forma <strong>sistêmica</strong> — não localizada. Por isso eleva o risco de <strong>qualquer carcinoma escamoso do corpo</strong>: esôfago, cavidade oral, orofaringe, laringe, pele, canal anal e colo do útero. Quando o caso mostra "pele palmoplantar espessada", o sinal aponta a histologia escamosa em qualquer um desses sítios.</p>
  <p><strong>Obesidade entra pelo lado interno.</strong> A obesidade não agride a mucosa diretamente; ela <strong>aumenta a pressão intra-abdominal</strong>, o que <strong>aumenta o refluxo</strong> e, por consequência, o <strong>adenocarcinoma</strong>. É por isso que os <strong>Estados Unidos</strong> — alta prevalência de obesidade e DRGE — têm proporção de adenocarcinoma maior que a do Brasil, onde o escamoso ainda predomina.</p>
</div>

<h3 class="topic-h">A topografia também sai do macete</h3>
<div class="card card--accent">
  <p>A localização de cada tumor não é decoreba à parte — deriva do mesmo eixo externo/interno. O <strong>escamoso (externo)</strong> aparece onde a agressão de fora alcança a mucosa: <strong>terço proximal e médio</strong>. O <strong>adenocarcinoma (interno)</strong> aparece onde o ácido <strong>bate primeiro</strong> ao subir: <strong>terço distal</strong> (e junção esofagogástrica). Externo → proximal/médio; interno → distal. Mesma lógica, agora aplicada ao mapa do esôfago.</p>
</div>
```

---

# P4 — Clínica dos tumores do TGI

**O que a página já tem**: opener E5, "Uma história, várias variações", card--info tríade (disfagia/emagrecimento/anemia), "A velocidade da disfagia vale ouro" (prose com 2 parágrafos), quiz.
**O que a transcrição ensina e a página comprimiu**: o **padrão universal** dos tumores do TGI = **síndrome consumptiva + sinal de localização**, com o sinal mudando por órgão (esôfago=disfagia; estômago=saciedade precoce/queimação epigástrica; cólon=obstrução/melena); a explicação fisiopatológica de **por que todos emagrecem** (anorexia + impossibilidade mecânica de comer); e o contraste de **ritmo** entre acalásia (anos, ~5 anos) e câncer (meses).

### Bloco P4-A — INSERIR APÓS o `<div class="card card--info">` da tríade (após `</div>` em ~linha 337), ANTES do `topic-h` "A velocidade da disfagia".

```html
<h3 class="topic-h">A fórmula que vale para todo tumor do tubo digestivo</h3>
<div class="prose">
  <p>Há um molde único que se repete em todo câncer do tubo digestivo: <strong>síndrome consumptiva (perda de peso) + um sinal de localização</strong>. A perda de peso é a parte fixa — vem da <strong>anorexia</strong> que o tumor provoca e, em muitos casos, da impossibilidade física de se alimentar. O que muda de órgão para órgão é o <strong>sinal de localização</strong>, que aponta onde o tumor está.</p>
</div>
<div class="card card--info">
  <ul>
    <li><strong>Esôfago</strong> → <strong>disfagia</strong> (alimento não passa).</li>
    <li><strong>Estômago</strong> → <strong>saciedade precoce</strong>, queimação epigástrica.</li>
    <li><strong>Cólon</strong> → <strong>obstrução intestinal</strong>, melena (sangue digerido nas fezes).</li>
  </ul>
  <p>Decore a fórmula uma vez — consumptiva + localização — e você reconstrói a clínica de qualquer tumor do TGI sem precisar memorizar quadro por quadro.</p>
</div>
```

### Bloco P4-B — INSERIR APÓS a `<div class="prose">` de "A velocidade da disfagia" (após `</div>` em ~linha 343), ANTES da `<section class="quiz">`.

```html
<h3 class="topic-h">Anos × meses: o relógio que separa acalásia de câncer</h3>
<div class="prose">
  <p>O detalhe que vale ouro é o <strong>ritmo</strong> da perda de peso e da disfagia. Na <strong>acalásia</strong>, a evolução é <strong>lenta, em anos</strong> — frequentemente em torno de cinco anos — porque é uma disfunção motora, não uma massa que cresce. No <strong>câncer de esôfago</strong> (e nos demais tumores digestivos), a deterioração é <strong>rápida, em meses</strong>: a obstrução mecânica avança e o consumo tumoral acelera.</p>
  <p>É por isso que o Sr. Aurelino é tão didático: nele os dois relógios coexistem. Os <strong>8 anos de disfagia</strong> são o terreno (a acalásia, fator de risco); os <strong>3 meses de piora com 20 kg perdidos</strong> são o anúncio da transformação maligna. Quando um quadro arrastado de anos ganha de repente velocidade de meses, é a malignidade batendo à porta.</p>
</div>
```

---

# P5 — Diagnóstico e a regra de ouro da biópsia

**O que a página já tem**: card--success (EDA com biópsia), figura EDA, card--mnemonic (regra), `split` pode/não pode biopsiar, card--densify (nuance da biópsia hepática/pancreática), 2 quizzes.
**O que a transcrição ensina e a página comprimiu**: o **porquê profundo da regra** — biópsia dá certeza, mas pode **espalhar células neoplásicas pelo peritônio** (transformando doença ressecável em metastática) ou causar **sangramento de vulto** que descompensa o paciente; o exemplo concreto do **fígado** (biópsia semeando peritônio → "ferrou"); o critério operacional ("**vê com olho/câmera e alcança sem semear**"); e a extensão do raciocínio para **cabeça e pescoço** vs. **vísceras maciças/jejuno** (sem acesso endoscópico) — com o porquê de cada um.

### Bloco P5-A — INSERIR APÓS o `<div class="card card--mnemonic">` (após `</div>` em ~linha 396), ANTES do `<div class="split">`.

```html
<h3 class="topic-h">Por que NÃO se biopsia tudo</h3>
<div class="prose">
  <p>Muita gente carrega uma regra perigosa: "tem tumor, tem que biopsiar para confirmar no histopatológico". Quem pensa assim erra metade das questões de diagnóstico de câncer do tubo digestivo. A biópsia, de fato, dá o <strong>diagnóstico de certeza absoluta</strong> daquela lesão — mas, em alguns sítios, o próprio ato de biopsiar <strong>piora o prognóstico</strong>.</p>
  <p>São dois os riscos. Primeiro, <strong>semear células neoplásicas no peritônio</strong>: ao puncionar um tumor de víscera maciça, a agulha pode carregar células pela cavidade e transformar uma doença <strong>potencialmente ressecável em metastática</strong> — acabou a chance de cura. Segundo, <strong>sangramento de vulto</strong>: vísceras como o fígado podem sangrar de forma catastrófica, descompensando o paciente hemodinamicamente. Por isso a biópsia não é gesto automático: é decisão de risco.</p>
</div>

<h3 class="topic-h">O critério: ver, alcançar e não semear</h3>
<div class="prose">
  <p>A regra operacional é simples. Biopsia-se a lesão que você <strong>consegue ver</strong> (com o olho ou com uma câmera) <strong>e alcançar</strong> sem que isso espalhe células pela cavidade peritoneal. É exatamente o caso do <strong>tubo digestivo</strong>: por endoscopia, retira-se um fragmento de esôfago, estômago, cólon ou reto sem semear nada — a lesão está dentro do tubo, contida. O raciocínio se estende a <strong>cabeça e pescoço</strong> (cavidade oral, língua, orofaringe, nasofaringe, laringe) e ao <strong>canal anal</strong>: tudo luminal e acessível.</p>
  <p>Do outro lado estão as <strong>vísceras maciças e o que exige atravessar a barriga</strong>: <strong>fígado, pâncreas, baço, rim</strong> e o <strong>sarcoma de retroperitônio</strong> — entrar com agulha ou laparoscopia para puncioná-los arrisca semeadura peritoneal. O <strong>jejuno</strong> entra na lista por outro motivo: simplesmente <strong>não há acesso endoscópico</strong> a ele. Nesses, o diagnóstico é feito por <strong>imagem</strong>.</p>
</div>
```

---

# P6 — Invasão por contiguidade: o esôfago sem serosa

**O que a página já tem**: opener mnemônico (sem serosa), "Sem serosa muda tudo" (prose 2 parágrafos), card--accent (fístula/rouquidão/hemorragia), quiz.
**O que a transcrição ensina e a página comprimiu**: a **metáfora do "supervilão / superpoder do mal"** que organiza a aula inteira (cada câncer mata de um jeito, e conhecer o mecanismo deduz o exame de estadiamento); o **nome do superpoder do esôfago = "grudão"** (cola em quem está perto); a **anatomia das camadas** (mucosa → muscular circular/longitudinal → e a serosa que aqui NÃO existe, só uma adventícia fininha); a sequência **nasce na mucosa → aprofunda → extravasa rápido → contiguidade**; e o desfecho lógico: **invadiu estrutura vital = irressecável = péssimo prognóstico** = é isso que o estadiamento por imagem caça.

### Bloco P6-A — INSERIR APÓS o `<article class="opener opener--mnemonic">` (após `</article>` em ~linha 476), ANTES do `<h1 class="page-title">`. (Entra como abertura conceitual da página, logo após o mnemônico de topo.)

```html
<div class="card card--mnemonic">
  <p>Pense em cada câncer desta apostila como um <strong>supervilão</strong>: cada um tem o seu <strong>superpoder do mal</strong> — um jeito próprio de matar e de avançar. Conhecer esse mecanismo não é enfeite: é o que permite <strong>deduzir qual exame de estadiamento</strong> pedir e <strong>como tratar</strong>. O superpoder do câncer de esôfago é simples e brutal: ele é o <strong>"grudão"</strong> — cola, gruda em quem está perto, mais rápido que os outros tumores.</p>
</div>
```

### Bloco P6-B — INSERIR APÓS a `<div class="prose">` de "Sem serosa muda tudo" (após `</div>` em ~linha 484), ANTES do `topic-h` "A falta da barreira vira sintoma".

```html
<h3 class="topic-h">A anatomia que explica a pressa</h3>
<div class="prose">
  <p>Relembre as camadas da parede do tubo digestivo, de dentro para fora: <strong>mucosa</strong>, <strong>submucosa</strong>, <strong>muscular</strong> (circular e longitudinal) e, por fim, na maior parte do tubo, a <strong>serosa</strong> — a capa externa que envelopa o órgão e funciona como <strong>barreira</strong> à disseminação. O esôfago torácico é a exceção: ele <strong>não tem serosa</strong>. No lugar dela, apenas uma <strong>adventícia muito fina</strong>, frouxa, que não contém nada.</p>
  <p>A consequência é direta. O tumor nasce na mucosa, vai <strong>aprofundando</strong> camada a camada e, sem a serosa para segurá-lo, <strong>extravasa rápido</strong> e invade por <strong>contiguidade</strong> o que estiver ao redor. E o esôfago mora no <strong>mediastino</strong>, cercado só de estrutura nobre: <strong>arco aórtico/aorta, traqueia, brônquios-fonte (direito e esquerdo), pulmão, pericárdio, átrio</strong>. Não há vizinho banal — qualquer avanço encosta em algo vital.</p>
</div>

<h3 class="topic-h">Colou em estrutura vital, virou irressecável</h3>
<div class="card card--accent">
  <p>É aqui que o "superpoder" cobra o preço. No momento em que o tumor cola e <strong>invade uma estrutura vital irremovível</strong>, a lesão se torna <strong>irressecável</strong> — e irressecável significa <strong>péssimo prognóstico</strong>. Por isso o objetivo de todo o estadiamento por imagem é exatamente medir duas coisas: <strong>até que camada</strong> o tumor se aprofundou e <strong>o quanto ele já se aproximou ou invadiu</strong> as estruturas adjacentes. Conhecer o mecanismo do grudão é o que torna o pedido de exames uma <strong>dedução</strong>, não uma decoreba.</p>
</div>
```

---

# P7 — Estadiamento: micro (USE) × macro (TC) × broncoscopia

**O que a página já tem**: card--info (USE melhor T + 4 bullets), figura USE parede, card--accent (linfonodo torácico se prova), card--info (TC para todos), figura TC, prose "colado dá para descascar", card--densify (PET-CT), 2 quizzes.
**O que a transcrição ensina e a página comprimiu**: a divisão **micro × macro** como dois exames com papéis distintos; o **funcionamento da USE** explicado de verdade (transdutor na ponta, leitura por **ecogenicidade**, tumor escuro respeitando ou invadindo a submucosa rosada → T1a vs T3); o argumento de **por que biópsia NÃO mede profundidade** (só tira um fragmento, não regenera a parede inteira); o **porquê do linfonodo mediastinal exigir punção** (TB endêmica no Brasil, pneumonia, autoimunes causam linfonodomegalia) e o **contraste explícito com o gástrico** (lá, linfonodo abdominal aumentado já é maligno); o **limite da USE** (boa para iniciais T1–T3; não vê a luz do órgão invadido); e o **porquê da broncoscopia** — o detalhe cirúrgico de que **colado dá para descascar o brônquio e ressecar**, mas **invadiu a luz não há reconstrução** (não dá para tirar um "tampo" de traqueia).

### Bloco P7-A — INSERIR APÓS o `<h1 class="page-title">` (após ~linha 531), ANTES do `topic-h` "USE: o melhor exame para o T".

```html
<h3 class="topic-h">Dois exames, duas perguntas diferentes</h3>
<div class="prose">
  <p>O estadiamento do esôfago responde a duas perguntas que não se confundem. A <strong>micro</strong>: até <strong>qual camada</strong> da parede o tumor se aprofundou? A <strong>macro</strong>: ele já <strong>encostou ou invadiu</strong> as estruturas do mediastino, e há metástase à distância? Cada pergunta tem o seu exame — e trocar um pelo outro é a pegadinha clássica da página. A USE responde a micro; a TC responde a macro; a broncoscopia entra só num ponto específico da macro.</p>
</div>
```

### Bloco P7-B — INSERIR APÓS a `<figure class="med">` da USE (após `</figure>` em ~linha 547), ANTES do `topic-h` "No tórax, linfonodo aumentado".

```html
<h3 class="topic-h">Como a USE enxerga a profundidade — e por que a biópsia não consegue</h3>
<div class="prose">
  <p>A leitura da USE é por <strong>ecogenicidade</strong>: cada camada da parede tem um brilho diferente ao ultrassom. O tumor aparece como uma <strong>massa mais escura</strong>, contínua à mucosa. Se essa massa <strong>respeita</strong> a submucosa (a faixa mais clara logo abaixo), o tumor está <strong>restrito à mucosa</strong> — é um T1a, muito inicial. Se a massa <strong>rompe</strong> essa faixa e avança pelas camadas seguintes, já é um tumor mais avançado, um T3. É essa diferença, vista camada a camada, que define a conduta.</p>
  <p>Por que a biópsia não faz esse trabalho? Porque a biópsia só <strong>retira um fragmento</strong> da lesão para analisar células. Para o patologista dizer "até onde foi", ele precisaria do <strong>tumor inteiro com todas as paredes</strong> — o que só acontece na peça cirúrgica, não num pedacinho. Biópsia responde <strong>"que tipo de célula é"</strong>; USE responde <strong>"até onde a célula foi"</strong>. São perguntas distintas. E há um bônus específico do esôfago: a USE também <strong>guia a PAAF</strong> de linfonodos suspeitos, puncionando-os em tempo real.</p>
</div>
```

### Bloco P7-C — INSERIR APÓS o `<div class="card card--accent">` (linfonodo torácico se prova, após `</div>` em ~linha 553), ANTES do `topic-h` "TC para todos".

```html
<h3 class="topic-h">Por que o tórax desconfia, mas o abdome do gástrico não</h3>
<div class="prose">
  <p>O contraste é fino e cai em prova. No <strong>tórax</strong>, um linfonodo aumentado <strong>não pode</strong> ser presumido maligno, porque o mediastino é território de muitas doenças que dão linfonodomegalia — a <strong>tuberculose</strong> (de alta prevalência no Brasil), pneumonias, doenças autoimunes. Logo, no câncer de esôfago é preciso <strong>provar</strong> a malignidade do linfonodo por <strong>punção (PAAF guiada por USE)</strong> antes de contá-lo no estadiamento.</p>
  <p>Já no câncer <strong>gástrico</strong>, a lógica se inverte: um <strong>linfonodo abdominal aumentado</strong> visto na imagem já é <strong>considerado maligno</strong> no estadiamento, sem necessidade de prová-lo. Mesma "linfonodomegalia", dois territórios, duas condutas — porque o abdome não tem o ruído infeccioso/granulomatoso que o mediastino tem.</p>
</div>
```

### Bloco P7-D — INSERIR APÓS a `<p>` "Colado dá para descascar..." (após o `</p>` que fecha em ~linha 566), ANTES do `<div class="card card--densify">` do PET-CT.

```html
<h3 class="topic-h">O limite da USE e o que só a broncoscopia resolve</h3>
<div class="prose">
  <p>A USE é excelente para tumores <strong>iniciais (T1–T3)</strong>, mas tem um teto: quando o tumor avança e encosta numa estrutura vizinha, ela mostra que está <strong>colado/muito próximo</strong> — porém <strong>não enxerga a luz</strong> do outro órgão. Mostra que chegou até a traqueia ou o brônquio, mas não diz se apenas tocou a parede ou se já <strong>invadiu a luz</strong> do brônquio. E essa diferença muda tudo.</p>
  <p>O raciocínio é cirúrgico. Se o tumor está <strong>só colado</strong> no brônquio, dá para ir à cirurgia, <strong>"descascar"</strong> uma casca da parede brônquica e ressecar o tumor — é operável. Mas se ele <strong>invadiu a luz</strong>, seria preciso retirar um <strong>"tampo" de traqueia/brônquio</strong>, e <strong>não há como reconstruir</strong> a via aérea desse paciente — vira irressecável. Por isso, na suspeita de invasão da via aérea, pede-se a <strong>broncoscopia</strong>: ela procura a <strong>expressão mucosa da invasão</strong> por dentro do brônquio. Se há invasão da luz, a lesão é irressecável. A invasão da <strong>aorta</strong>, essa a TC já resolve; a da <strong>luz brônquica</strong>, nem sempre — daí a broncoscopia. Não é exame de rotina: pede-se quando TC/USE mostram que o tumor está colado na via aérea.</p>
</div>
```

---

# P8 — Conduta por profundidade

**O que a página já tem**: "Profundidade decide" (prose curta), card--success (princípio), tabela `cmp` (T1a/T1b-T2/T3-T4a/T4b-M1), card--densify (submucosa é a linha), quiz.
**O que a transcrição ensina e a página comprimiu**: o **eco didático** "mucosa → mucosectomia" (o nome do tratamento ecoa o achado) e o que a mucosectomia faz na prática (tira a lesão com margem de mucosa sadia ao redor); a explicação **fisiopatológica completa do porquê só T1a** — tecnicamente até daria para fazer ressecção endoscópica num T1b/T2, mas é **arriscado pela disseminação linfática**, porque os **capilares linfáticos moram na submucosa**; logo, a partir da submucosa (T1b), há chance real de já ter caído célula em linfonodo → não se pode tratar sem **linfadenectomia**.

### Bloco P8-A — INSERIR APÓS o `<div class="card card--success">` do princípio (após `</div>` em ~linha 631), ANTES da `<table class="cmp">`.

```html
<h3 class="topic-h">Mucosa, mucosectomia: o nome ecoa o achado</h3>
<div class="prose">
  <p>No tumor mais inicial — <strong>T1a, restrito à mucosa</strong> — o tratamento é a <strong>mucosectomia endoscópica</strong>. O nome entrega a conduta: está na <em>mucosa</em>, faz-se a <em>mucosectomia</em>. Na prática, retira-se a lesão <strong>junto com uma orla de mucosa sadia</strong> ao redor, para garantir <strong>margem livre de neoplasia</strong>. Tudo por via endoscópica, sem abrir o tórax — porque a doença ainda é superficial o bastante para isso bastar.</p>
</div>
```

### Bloco P8-B — INSERIR APÓS o `<div class="card card--densify">` (submucosa é a linha, após `</div>` em ~linha 650), ANTES da `<section class="quiz">`.

```html
<h3 class="topic-h">Por que a ressecção endoscópica para no T1a — a submucosa é a fronteira</h3>
<div class="prose">
  <p>Surge a dúvida natural: por que não tratar endoscopicamente também o T1b ou o T2? <strong>Tecnicamente daria</strong> — o problema não é a técnica, é o <strong>risco de disseminação linfática</strong>. E a razão é anatômica: é na <strong>submucosa</strong> que estão os <strong>capilares linfáticos</strong>. Enquanto o tumor está confinado à mucosa (T1a), ele ainda não alcançou essa rede, e o risco de já ter espalhado célula para um linfonodo é <strong>baixíssimo</strong> — por isso a ressecção endoscópica cura.</p>
  <p>No instante em que o tumor atinge a <strong>submucosa (T1b)</strong>, ele encontra os capilares linfáticos, e a chance de uma célula neoplásica já ter viajado por um deles até um linfonodo <strong>sobe muito</strong>. Tirar só a lesão por endoscopia deixaria a doença linfonodal para trás. Por isso, <strong>de T1b em diante</strong>, não se pode mais tratar sem <strong>linfadenectomia</strong> — e a abordagem passa a ser cirúrgica (esofagectomia com linfadenectomia). A submucosa é, literalmente, a linha que separa "endoscópico" de "operar".</p>
</div>
```

---

# P9 — Neoadjuvância e reconstrução

**O que a página já tem**: "T3-T4a pede neoadjuvância" (prose curta), card--info (QT/RT antes melhora R0), `dont-confuse` (escamoso×adeno na neoadjuvância), card--densify (FLOT×CROSS — DDV-001), "Tirado o esôfago, o estômago vira o tubo" (prose curta com cólon/jejuno), quiz.
**O que a transcrição ensina e a página comprimiu**: a **definição clara adjuvância × neoadjuvância** ("adjuvância = ajuda; se é depois de operar, adjuvância; se é antes, neoadjuvância") e a etimologia ("neo" = nova estratégia); a **história da virada** (em 2010-2011 operava-se primeiro; percebeu-se que a cirurgia do esôfago é tecnicamente dificílima e gerava fístula/infecção/complicação respiratória → 2 meses de internação → atraso da quimio → **atraso aumenta recidiva**); o duplo ganho do "fazer antes" (**diminui o tumor** facilitando a ressecção + **garante a terapia no tempo certo**); o **porquê do esquema por tipo** (CEC responde bem à RT → quimio+RT; adeno responde mal à RT → só quimio), com a **nuance internacional FLOT/CROSS** (DDV-001, já presente); e a **reconstrução em ordem** — 1ª tubo gástrico (estômago é o vizinho anatômico), 2ª cólon transverso (quando não há estômago, ex.: bariátrica prévia; "parece que nasceu para isso", com anastomose primária).

### Bloco P9-A — INSERIR APÓS a `<div class="prose">` de "T3-T4a pede neoadjuvância" (após `</div>` em ~linha 693), ANTES do `topic-h` "Escamoso responde à RT".

```html
<h3 class="topic-h">Adjuvância × neoadjuvância: a diferença está no tempo</h3>
<div class="prose">
  <p>Os dois nomes confundem, mas a regra é trivial. <strong>Adjuvância significa "ajuda"</strong> — uma terapia que reforça o tratamento. Se essa ajuda vem <strong>depois</strong> de operar, é <strong>adjuvância</strong>. Se vem <strong>antes</strong> da cirurgia, é a estratégia <strong>nova</strong> — daí o prefixo "neo" — e chama-se <strong>neoadjuvância</strong>. Operar primeiro e tratar depois = adjuvância; tratar primeiro e operar depois = neoadjuvância.</p>
</div>

<h3 class="topic-h">Por que o mundo inverteu a ordem</h3>
<div class="prose">
  <p>Há pouco mais de uma década, o padrão era o oposto: <strong>operava-se primeiro</strong> e a quimio/quimiorradioterapia vinha como adjuvância. Mas a cirurgia do esôfago é <strong>tecnicamente das mais difíceis</strong>, e muitos pacientes saíam dela com <strong>fístula, infecção, complicação respiratória</strong> — ficavam dois meses internados e <strong>não tinham condição de fazer a quimioterapia logo depois</strong>. Esse atraso de dois meses tem um preço: <strong>quanto mais se adia a terapia, maior o risco de recidiva tumoral</strong>. O plano terapêutico inteiro descarrilava.</p>
  <p>A solução foi <strong>fazer a terapia antes</strong>, e o ganho é duplo. Primeiro, a quimio (ou quimiorradio) <strong>encolhe o tumor</strong>, facilitando uma ressecção completa quando chega a hora de operar. Segundo, <strong>garante que o paciente receba a terapia no tempo certo</strong> — antes das possíveis complicações da cirurgia, não depois. A mesma lógica que vale aqui vale para <strong>estômago, reto</strong> e os demais tumores do tubo digestivo.</p>
</div>
```

### Bloco P9-B — INSERIR APÓS o `<div class="dont-confuse">` (após `</div>` em ~linha 712), ANTES do `<div class="card card--densify">` do FLOT/CROSS.

```html
<h3 class="topic-h">Por que o esquema muda com o tipo histológico</h3>
<div class="prose">
  <p>A escolha do esquema neoadjuvante segue a <strong>resposta à radioterapia</strong> de cada tipo. O <strong>carcinoma escamoso (espinocelular)</strong> — como os escamosos em geral — <strong>responde bem à RT</strong>; por isso recebe <strong>quimioterapia + radioterapia</strong>. O <strong>adenocarcinoma</strong>, em geral, <strong>responde mal à RT</strong>; por isso a regra clássica de prova manda <strong>só quimioterapia</strong>. São cerca de <strong>4 a 6 sessões</strong>; depois, com o tumor menor, segue-se a esofagectomia com linfadenectomia. Resumo mnemônico: <strong>escamoso = quimio + rádio; adeno = só quimio</strong> — porque um responde à rádio e o outro não.</p>
</div>
```

### Bloco P9-C — INSERIR APÓS a `<div class="prose">` de "Tirado o esôfago, o estômago vira o tubo" (após `</div>` em ~linha 722), ANTES da `<section class="quiz">`.

```html
<h3 class="topic-h">A ordem da reconstrução: estômago primeiro, cólon depois</h3>
<div class="prose">
  <p>Retirado o esôfago, é preciso refazer o trânsito alimentar — e a escolha do substituto tem ordem. A <strong>1ª opção é o estômago</strong> (tubo gástrico): é o órgão <strong>anatomicamente mais próximo</strong>, tubuliza-se e leva-se ao tórax ou ao pescoço para reconectar. É a reconstrução padrão.</p>
  <p>E quando não há estômago disponível — por exemplo, num paciente com <strong>bariátrica prévia</strong>? Entra a <strong>2ª opção: o cólon</strong> (interposição colônica, tipicamente o <strong>cólon transverso</strong>). Solta-se o segmento de cólon da parede, leva-se ao lugar do esôfago e refaz-se uma <strong>anastomose primária</strong> entre os cabos restantes. É uma solução que "cai muito bem" anatomicamente. A ordem é o que vale a prova: <strong>tubo gástrico → cólon</strong>.</p>
</div>
```

---

# P10 — Ressecável × irressecável

**O que a página já tem**: "Dá para operar com cura?" (prose curta), `split` ressecável/irressecável (T1-T3, T4a removível, M0 × T4b, M1, fístula), card--accent (broncoscopia decide o limite T4a/T4b), quiz.
**O que a transcrição ensina e a página comprimiu**: a **lista órgão a órgão** com o critério de remover ou não — invadiu **brônquio (luz), aorta, coração, pulmão, traqueia** = irressecável (órgãos vitais); mas **pericárdio dá para tirar**, **diafragma dá para tirar**, **pleura dá para tirar** = ainda ressecável (T4a); a definição de que **irressecável → tratamento paliativo**; e a **tese central da aula / substituição mnemônica** — não precisa do TNM detalhado: só os **dois extremos** mudam conduta (**mucosa → mucosectomia**; **irressecável/M1 → paliação**), e tudo no meio é esofagectomia + linfadenectomia ± neoadjuvância. "Mucosa, mucosectomia" e "irressecável, paliação".

### Bloco P10-A — INSERIR APÓS o `<div class="split">` (após `</div>` que fecha o split em ~linha 786), ANTES do `topic-h` "T4a ainda opera".

```html
<h3 class="topic-h">A linha fina entre T4a e T4b: o que dá para tirar</h3>
<div class="prose">
  <p>A fronteira da ressecabilidade não é o tamanho do tumor — é <strong>qual estrutura ele invade e se dá para removê-la</strong>. Invadiu órgão <strong>vital e irremovível</strong>? Irressecável (T4b): <strong>aorta, traqueia, luz brônquica, coração, corpo vertebral, pulmão</strong>. Não há como reconstruir nem viver sem essas estruturas, então a cirurgia curativa sai de cena.</p>
  <p>Mas cuidado com a pegadinha das estruturas que <strong>parecem</strong> proibitivas e não são. <strong>Pericárdio dá para tirar. Diafragma dá para tirar. Pleura dá para tirar.</strong> A invasão dessas é <strong>T4a — ainda ressecável</strong>. Repare no detalhe que a banca explora: <strong>pericárdio não é o coração</strong> — invadir o pericárdio é T4a (operável); invadir o coração é T4b (irressecável). Quando a lesão é mesmo irressecável (T4b ou M1), o tratamento deixa de ser curativo e passa a ser <strong>paliativo</strong>.</p>
</div>
```

### Bloco P10-B — INSERIR APÓS o `<div class="card card--accent">` (broncoscopia decide o limite, após `</div>` em ~linha 791), ANTES da `<section class="quiz">`.

```html
<h3 class="topic-h">A tese da aula: você quase nunca precisa do TNM inteiro</h3>
<div class="card card--mnemonic">
  <p>Toda a conduta do câncer de esôfago se resolve pelos <strong>dois extremos</strong>, sem decorar o TNM por extenso. No extremo inicial: <strong>mucosa → mucosectomia</strong>. No extremo avançado: <strong>irressecável (T4b ou M1) → paliação</strong>. Tudo o que fica <strong>no meio</strong> (da submucosa ao T4a) recai na mesma estratégia padrão: <strong>esofagectomia + linfadenectomia</strong>, em geral precedida de <strong>neoadjuvância</strong>.</p>
  <p>Por isso a substituição mnemônica funciona melhor que a sigla: em vez de "T1a", pense <strong>"mucosa, mucosectomia"</strong>; em vez de "T4b/M1", pense <strong>"irressecável, paliação"</strong>. A profundidade comanda — e os nomes do tratamento já dizem o que fazer.</p>
</div>
```

---

# P11 — Fechando o caso do Sr. Aurelino

**O que a página já tem**: "Juntando as peças" (prose curta), "A tilose aponta o tipo" (card--success com Quem/Sinais/Hipótese/Confirmação/Estadiamento), prose (tilose → escamoso), card--mnemonic (método), quiz.
**O que a transcrição ensina e a página comprimiu**: o fechamento explícito de que a hipótese a **necessariamente excluir** no Aurelino é o **carcinoma de esôfago**; a sutileza de que **a acalásia dele não compete com o câncer — ela é fator de risco** (principalmente escamoso; com os anos descobriu-se associação também com adeno, mas muito mais com escamoso); e a **próxima conduta = EDA com biópsia**, fechando o caso 4.

### Bloco P11-A — INSERIR APÓS o `<div class="prose">` "A tilose dá o caminho..." (após `</div>` em ~linha 849), ANTES do `<div class="card card--mnemonic">` do método.

```html
<h3 class="topic-h">A hipótese que NÃO pode passar batida</h3>
<div class="prose">
  <p>A pergunta de fechamento do caso é direta: qual hipótese diagnóstica precisa ser <strong>necessariamente excluída</strong> no Sr. Aurelino? A resposta é o <strong>carcinoma de esôfago</strong> — ele reúne síndrome consumptiva, disfagia e <strong>vários fatores de risco somados</strong>. Deixar de investigar isso seria o erro grave do caso.</p>
  <p>E a acalásia, que parecia a resposta no início? Ela <strong>não compete</strong> com o câncer aqui — ela <strong>soma</strong>. A acalásia é, ela própria, um <strong>fator de risco</strong>, principalmente para o <strong>carcinoma escamoso</strong>. Com o passar dos anos, descobriu-se que também há associação com adenocarcinoma, mas a ligação é <strong>muito mais forte com o escamoso</strong>. Por isso, somada à tilose e ao etilismo, ela reforça — e não afasta — o tipo escamoso. A <strong>próxima conduta</strong> no caso é a que confirma a histologia: <strong>endoscopia digestiva alta com biópsia</strong>.</p>
</div>
```

---

# P12 — Consolidação: as armadilhas de prova

**O que a página já tem**: "As pegadinhas clássicas" (prose curta), "Cinco armadilhas" (card--info com 5 bullets), 2 quizzes, next-link (próxima: câncer gástrico).
**O que a transcrição ensina e a página comprimiu**: a transcrição é majoritariamente coberta nas páginas anteriores; a consolidação ganha densidade ao **explicar cada armadilha** em vez de listá-la seca, e ao **fixar a sequência diagnóstica** (clínica → EDA+biópsia → estadiamento), que é a espinha do raciocínio. Reaproveita os transversais marcados no laudo ("consumptiva + localização" e "regra de ouro da biópsia") como ganchos de fixação final.

### Bloco P12-A — INSERIR APÓS o `<div class="card card--info">` das cinco armadilhas (após `</div>` em ~linha 907), ANTES da `<section class="quiz">`.

```html
<h3 class="topic-h">As armadilhas, agora explicadas uma a uma</h3>
<div class="prose">
  <p><strong>1. O relógio da disfagia.</strong> Disfagia de <strong>anos sem perda de peso</strong> puxa para benigno (acalásia, estenose); disfagia de <strong>meses com emagrecimento</strong> grita câncer. Quando um quadro arrastado acelera de repente, é a malignidade entrando — foi exatamente o que aconteceu no Sr. Aurelino.</p>
  <p><strong>2. Externo × interno.</strong> Classifique o fator de risco: agressão de fora (tabaco, álcool, líquido quente, cáustico, HPV, Chagas, tilose) → <strong>escamoso, proximal/médio</strong>; ácido de dentro (DRGE, Barrett, obesidade) → <strong>adenocarcinoma, distal</strong>. Um eixo resolve tipo e topografia ao mesmo tempo.</p>
  <p><strong>3. O esôfago sem serosa.</strong> A ausência de serosa (só adventícia fina) é o que permite a invasão precoce por <strong>contiguidade</strong> no mediastino — e o que torna o tumor frequentemente irressecável já ao diagnóstico.</p>
  <p><strong>4. Micro × macro.</strong> Profundidade de camada (T) é com a <strong>USE</strong>; relação com órgãos e metástase é com a <strong>TC</strong>; invasão da <strong>luz</strong> brônquica é com a <strong>broncoscopia</strong>. Não troque o exame da pergunta.</p>
  <p><strong>5. Conduta pelos extremos.</strong> <strong>T1a (mucosa)</strong> → mucosectomia endoscópica; <strong>T1b até T4a</strong> → esofagectomia + linfadenectomia (± neoadjuvância); <strong>T4b/M1 (irressecável/metastático)</strong> → paliação. Os extremos mandam; o TNM detalhado é dispensável.</p>
</div>

<h3 class="topic-h">A sequência que nunca se inverte</h3>
<div class="card card--accent">
  <p>Acima de qualquer pegadinha, fixe a <strong>ordem</strong>: a <strong>clínica</strong> levanta a hipótese (consumptiva + sinal de localização); a <strong>EDA com biópsia</strong> confirma a histologia; só então vem o <strong>estadiamento</strong> (USE para o T/N, TC para o macro, broncoscopia se houver suspeita de via aérea, ± PET-CT). Quem pede USE, TC ou PET antes da biópsia inverte a sequência — e cai na armadilha mais simples de todas: <strong>estadiar uma doença que ainda não foi diagnosticada</strong>.</p>
</div>
```

---

# MAPA DE COBERTURA 100% DA TRANSCRIÇÃO (gate)

Cada núcleo da fala do professor → onde foi enriquecido. Itens já bem cobertos no HTML atual marcados como "(já presente)".

| # | Núcleo da transcrição | VFP/Bloco roteiro | Página · bloco do retrofit |
|---|---|---|---|
| 1 | Caso Sr. Aurelino (quem/sinais/ectoscopia) | B1 | P1 (já presente, opener+prose) |
| 2 | Síndrome consumptiva (o organismo consumido) | B1/VFP-5 | **P1-A** |
| 3 | Quase todo tumor do TGI emagrece | B4/VFP-5 | **P1-A** |
| 4 | Disfagia em anos → acalásia; interior de Minas → chagásica | VFP-1 | **P1-B** |
| 5 | A história "não para na acalásia"; acalásia vira fator de risco | B1 | **P1-B** + **P11-A** |
| 6 | Esôfago = único sem tipo histológico predominante (estômago/pâncreas/fígado/rim) | VFP-2 | **P2-A** |
| 7 | Esôfago e pulmão = exceção (dois tipos prevalentes) | VFP-2 | **P2-A** |
| 8 | O mais cobrado em prova = fatores de risco (separa os pacientes) | B2 | **P2-A** (card--accent) |
| 9 | Macete escamoso=externo / adeno=interno (derivação item a item) | VFP-3 | **P3-A** |
| 10 | Lista CEC: tabaco/álcool/HPV/Chagas/quente/cáustico | B3 | tabela já presente + **P3-A** (derivação) |
| 11 | Chimarrão / RS = maior incidência de CEC (por quê) | B3 | **P3-B** |
| 12 | Cáusticos → risco vitalício se sobrevive | B3 | **P3-B** |
| 13 | Tilose = risco de QUALQUER escamoso do corpo (sítios + porquê) | B3 | **P3-B** (card--info já lista; P3-B explica o porquê) |
| 14 | Adeno: DRGE/Barrett; obesidade (↑ pressão → ↑ refluxo); EUA×Brasil | B3 | **P3-B** |
| 15 | Topografia: CEC proximal/médio; adeno distal (deriva do macete) | VFP-4 | **P3-B** (card--accent) |
| 16 | Padrão TGI = consumptiva + sinal de localização (esôfago/estômago/cólon) | VFP-5 | **P4-A** |
| 17 | Por que todos emagrecem (anorexia + impossibilidade de comer) | B4 | **P4-A** + P1-A |
| 18 | Acalásia (anos, ~5a) × câncer (meses) | VFP-6 | **P4-B** |
| 19 | Diagnóstico = EDA com biópsia | B5 | P5 (já presente, card--success) |
| 20 | Por que não biopsiar tudo: semeadura peritoneal + sangramento de vulto | VFP-7 | **P5-A** |
| 21 | Critério: ver/alcançar sem semear; pode (TGI/C&P/canal anal) × não (vísceras maciças/jejuno) | VFP-7 | **P5-A** (split já lista; P5-A dá o porquê) |
| 22 | Metáfora supervilão / superpoder do mal / "grudão" | B6 | **P6-A** |
| 23 | Anatomia: camadas; esôfago sem serosa, só adventícia fina | VFP-8 | **P6-B** |
| 24 | Nasce na mucosa → aprofunda → extravasa → contiguidade (estruturas mediastinais) | VFP-8 | **P6-B** |
| 25 | Invadiu vital = irressecável = péssimo prognóstico = alvo do estadiamento | B6 | **P6-B** (card--accent) |
| 26 | Micro × macro (duas perguntas) | B7 | **P7-A** |
| 27 | USE: transdutor, ecogenicidade, respeita/invade submucosa (T1a vs T3); guia PAAF | VFP-9 | **P7-B** (card--info já lista; P7-B explica funcionamento) |
| 28 | Biópsia não mede profundidade (só fragmento) | B7 | **P7-B** |
| 29 | Linfonodo mediastinal exige punção (TB/pneumonia/autoimune); contraste gástrico | VFP-10 | **P7-C** (card--accent já cita; P7-C aprofunda contraste) |
| 30 | Limite USE (T1-T3; não vê a luz); broncoscopia: colado→descasca/resseca, luz→sem reconstrução | VFP-12 | **P7-D** |
| 31 | TC tórax+abdome para todos (linfonodo/órgão nobre × metástase) | VFP-11 | P7 (já presente, card--info+figura) |
| 32 | PET-CT (densificação DC-001) | DC-001 | P7 (já presente, card--densify) |
| 33 | T1a → mucosectomia; "mucosa, mucosectomia"; margem livre | VFP-13 | **P8-A** |
| 34 | Por que só T1a: capilares linfáticos na submucosa; T1b+ → linfadenectomia | VFP-14/15 | **P8-B** |
| 35 | Adjuvância × neoadjuvância (definição + "neo"=nova) | VFP-16 | **P9-A** |
| 36 | História da virada (2010-11 operava 1º; complicações → atraso → recidiva; duplo ganho) | VFP-16 | **P9-A** |
| 37 | Esquema por tipo: CEC quimio+RT; adeno só quimio (porquê RT); 4-6 sessões | VFP-17 | **P9-B** |
| 38 | Nuance FLOT × CROSS (DDV-001) | DDV-001 | P9 (já presente, card--densify) |
| 39 | Reconstrução: 1ª tubo gástrico (vizinho); 2ª cólon transverso (bariátrica prévia, anastomose) | VFP-18 | **P9-C** |
| 40 | Irressecável T4b (aorta/traqueia/luz brônquica/coração/pulmão); ressecável T4a (pericárdio/diafragma/pleura); pericárdio≠coração | VFP-19 | **P10-A** (split já lista; P10-A dá nuance + pegadinha) |
| 41 | Irressecável → paliação | VFP-19 | **P10-A** |
| 42 | Tese: TNM dispensável; só extremos mudam conduta; substituição mnemônica | VFP-20 | **P10-B** |
| 43 | Fechamento: excluir carcinoma; acalásia=fator de risco (escamoso ≫ adeno); próxima = EDA+biópsia | B11 | **P11-A** |
| 44 | Consolidação das 5 armadilhas + sequência clínica→EDA→estadiamento | B5/transversais laudo | **P12-A** |

**Resultado**: 44/44 núcleos da transcrição cobertos. Os já bem-resolvidos no HTML permanecem; os comprimidos ganham os blocos acima.

---

# CHECKLIST PRÉ-IMPLEMENTAÇÃO (Executor)

- [ ] Nenhuma `section.quiz`, SVG, `figure.med`, opener, dashboard, livestrip ou nav foi tocada.
- [ ] Toda classe usada existe no `components.css` (sem `callout`; usar `card--*`/`prose`/`quote-callout`).
- [ ] Cada bloco inserido no ponto-âncora indicado, antes da `section.quiz` da página (salvo P6-A, que entra após o opener).
- [ ] Voz sem metalinguagem: rodar grep do §6.3 do Didata contra o HTML final.
- [ ] Densidade-alvo: cada página passa de ~1-2 blocos de prosa para 3-6 blocos (`topic-h` + `prose`/`card`), aproximando o piso de ca-rim/ca-bexiga.
- [ ] Negrito nas palavras-chave preservado conforme escrito acima.

---

**Densidade entregue**: 12 páginas, 22 blocos novos (≈30 `topic-h`/`prose`/`card` adicionais), cobertura 100% da transcrição. Próximo passo sugerido: Executor implementa as inserções em `aulas/aula-01/index.html` respeitando as âncoras, depois roda o grep anti-metalinguagem.
