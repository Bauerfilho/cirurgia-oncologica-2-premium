# Retrofit de Elevação — Texto Rico · Aula 02 (Câncer Gástrico)

**Repo**: `cirurgia-oncologica-2-premium` · **Alvo**: `aulas/aula-02/index.html` (HTML `p1`..`p14`)
**Fonte de minúcia**: `roteiros/roteiro-a2-cancer-gastrico-v1.md` + `laudos/laudo-a2-cancer-gastrico-v1.md`
**Referência de densidade**: `aula-01/index.html` (já enriquecida) e `aula-extra-06-ca-rim` (cada página = `topic-h` + `prose` de 1-3 parágrafos densos, ou lista comentada).

> **Mapa de numeração (atenção):** o roteiro numera as páginas de conteúdo 1–13; o HTML tem 14 `data-page` porque o `p1` é o **dashboard/Mapa da aula**. Logo **HTML pN = roteiro p(N−1)**. Os títulos abaixo usam o ID do HTML (`p2`..`p14`); o `p1` (dashboard) não recebe blocos novos (já é síntese navegável).

---

## REGRAS DE EXECUÇÃO (para o Executor — ler antes de tocar no HTML)

1. **PRESERVAÇÃO ABSOLUTA.** Nada do que já existe é removido, reescrito ou reordenado. Prosa, `topic-h`, quizzes (`div.quiz` com `q-tag`/`opt`/`opt-comment` inteiros), SVGs (`figure-svg`), `figure.med`/imagens, openers (`opener--*`), `sign-list`, `cmp`, dashboard, `livestrip`, banner-mantra e `page-nav` — **intocados**. Você só **insere** os blocos abaixo nos pontos indicados.

2. **VOCABULÁRIO DO CHASSI — usar SÓ classes verificadas em `assets/css/components.css`.** Disponíveis e usadas aqui: `prose`, `topic-h`, `card`, `card--accent`, `card--info`, `card--success`, `card--mnemonic`, `card--densify` (`+ span.densify-tag`), `mnemonic` (`+ .mnemonic__label` / `.mnemonic__text`), `cmp` (tabela), `dont-confuse` (`+ .dont-confuse__label` / `.dont-confuse__grid` / `.dont-confuse__side`), e os inline de `.prose`: `quote-callout`, `term`, `highlight`.
   **NÃO EXISTE `callout` no CSS desta plataforma.** Onde o briefing genérico fala "callout", mapeei para `card--accent` (destaque/insight), `card--info` (lista comentada / mapa de comparação), `card--mnemonic` ou `mnemonic` (frase-âncora) e `p.quote-callout` (citação tipográfica dentro de `.prose`). Não invente classe nova.

3. **Numeração de tópicos.** O HTML da aula-02 usa `topic-h` **sem** "Tópico N" (ex.: "Qual gastrectomia? Decide a topografia" é `<h2>`, e os blocos de mecanismo são `topic-h`). Os novos blocos entram com `topic-h` **sem numeração**, no mesmo estilo da página. Não renumere nem reestilize os cabeçalhos pré-existentes.

4. **Voz.** Professor denso explicando direto ao aluno. PT-BR, técnico, sem metalinguagem ("nesta aula", "o professor", "neste módulo", "vamos ver", "a seguir", "como vimos"). Negrito nas palavras-chave. Cada caixinha = cabeçalho-insight (`topic-h`) + prosa densa OU lista comentada (nunca bullet seco).

5. **Onde inserir.** Cada bloco diz "INSERIR APÓS [âncora]". A âncora é um trecho literal já presente no HTML. Inserir imediatamente **depois** do nó indicado e **antes** do próximo nó nomeado (em geral, antes da primeira `<div class="quiz">` da página, salvo indicação).

6. **Cobertura 100% da fonte é gate.** O mapa ao final lista cada núcleo do roteiro/laudo e em qual página/bloco foi enriquecido. Nenhum item da fonte fica de fora; nenhum fato fora da fonte foi inventado.

---

# HTML p2 — O caso da mulher de 46 anos (roteiro p1)

**O que a página já tem**: `opener--case`, prose "Este caso vai costurar a aula inteira" + lista de 7 achados do exame físico, `card--accent` "A pista que entrega o diagnóstico", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o conceito de **"doença avançada sem sintoma localizador"** explicado como categoria de raciocínio (não há disfagia como no esôfago, não há obstrução — só consumptiva + rastros de disseminação), e por que isso, paradoxalmente, **já estreita o diagnóstico** em vez de abri-lo; a leitura do exame como **árvore de exclusão** (cada achado afasta um órgão: tireoide, cirrose, mama, pulmão) culminando no que **sobra**: víscera abdominal alta; e a ideia de que **"implante" é uma palavra de laudo** que já significa secundarismo.

### Bloco p2-A — INSERIR APÓS a `<ul>` de achados do exame físico (o `</ul>` que fecha a lista de 7 itens, antes do parágrafo "O incômodo é justamente esse").

```html
<h3 class="topic-h">Doença avançada sem localizador: por que isso estreita (e não abre) o diagnóstico</h3>
<div class="prose">
  <p>O que mais incomoda neste caso é uma ausência. Há sinais de doença espalhada por todo lado — linfonodo, ascite, ovário — e <strong>nenhum sintoma que diga de onde o tumor saiu</strong>. Não há disfagia (que apontaria o esôfago), não há obstrução intestinal (que apontaria o cólon). Só uma <strong>síndrome consumptiva</strong> e rastros de disseminação.</p>
  <p>Parece que faltam dados, mas é o contrário: esse desenho é, ele próprio, uma pista forte. Um primário que se espalha cedo e largamente, escondendo-se sem dar sintoma local, tem um suspeito de elite — o <strong>câncer gástrico</strong>. A própria falta de localizador é a marca registrada: o estômago semeia a distância antes de "avisar" onde está.</p>
</div>

<h3 class="topic-h">Ler o exame físico como exclusão: o que sobra é o diagnóstico</h3>
<div class="prose">
  <p>Cada achado foi colocado para <strong>afastar</strong> uma origem, até sobrar uma só. <strong>Tireoide normal</strong> exclui nódulo de tireoide; <strong>ausência de circulação colateral</strong> exclui cirrose como causa da ascite; <strong>RX de tórax e mamografia normais</strong> afastam, em boa parte, pulmão e mama. À medida que os órgãos "de fora do abdome" caem, o ponteiro converge para uma <strong>víscera abdominal alta</strong> — e o conjunto restante (Virchow + ascite + implante ovariano) só fecha bem com o estômago.</p>
  <p>Repare ainda na palavra do laudo do USG: <strong>"implante" metastático</strong>, não "tumor de ovário". "Implante" já é leitura de <strong>secundarismo</strong> — depósito que veio de outro lugar. É a deixa para procurar o primário em outro andar, não no próprio ovário.</p>
</div>
```

---

# HTML p3 — O tumor praga e as três vias de disseminação (roteiro p2)

**O que a página já tem**: `opener--mnemonic` ("Doença praga... pense câncer gástrico"), prose da analogia da praga + introdução das 3 vias, SVG das 3 vias, prose sobre a armadilha do ovário, `card--info` "Como isso vira enunciado", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **mecanismo da via transcelômica** descrito passo a passo (o tumor cresce, **ulcera**, "vaza" para a cavidade e joga células como sementinha que **germinam** longe) — é isso que dá nome à analogia da praga; o ponto de que a **maioria dos tumores quase não usa** essa via, e por que estômago e ovário são a exceção (tumores que **caem direto na cavidade peritoneal**); e a leitura clínica de que as três manifestações do caso (ascite, implante ovariano, carcinomatose) são **a mesma via** vista em três lugares.

### Bloco p3-A — INSERIR APÓS a `<div class="prose">` do parágrafo "Repare por que o caso colocou um tumor no ovário..." (o `</div>` logo antes do `card--info` "Como isso vira enunciado").

```html
<h3 class="topic-h">Como a via transcelômica realmente funciona</h3>
<div class="prose">
  <p>Vale destrinchar o mecanismo, porque é dele que sai a analogia da praga. O tumor gástrico cresce na parede, <strong>ulcera</strong> e rompe a superfície da serosa — e então, em vez de viajar por um vaso, ele simplesmente <strong>"vaza" células direto para dentro da cavidade peritoneal</strong>. Essas células flutuam no líquido peritoneal e, como sementes carregadas pelo vento, <strong>caem e germinam</strong> à distância: no peritônio (carcinomatose), no fundo de saco, nos ovários, no umbigo. É exatamente a praga — brotou sem que ninguém tenha plantado naquele canto.</p>
  <p>Por que quase nenhum outro tumor faz isso? Porque a transcelômica exige um tumor que <strong>tenha acesso à cavidade peritoneal e caia nela</strong>. O <strong>estômago</strong> e o <strong>ovário</strong> são, por essência, os dois que mais usam essa via — daí o caso plantar um implante no ovário de propósito, criando a dúvida entre os dois. A maioria dos demais tumores dissemina sobretudo por linfonodo e por corrente sanguínea, e quase não lança mão da terceira porta.</p>
</div>

<div class="card card--accent">
  <h3>Uma via, três achados do caso</h3>
  <p>A <strong>ascite</strong>, o <strong>implante ovariano</strong> (Krukenberg) e os <strong>nódulos peritoneais</strong> da paciente não são três problemas diferentes — são <strong>a mesma via transcelômica</strong> vista em três pontos da cavidade. Reconhecer isso é o atalho: onde houver carcinomatose / ovário / ascite maligna no enunciado, leia "transcelômica" e mire o estômago.</p>
</div>
```

---

# HTML p4 — Fatores de risco: hábitos × H. pylori (roteiro p3)

**O que a página já tem**: prose curta "Organize... em dois grupos", tabela `cmp` (hábitos × H. pylori), `opener--trap` da pegadinha das fibras, `card--info` "Não confundir com o esôfago", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê** de nitrogenados/conservantes/defumados serem carcinógenos (a ideia de que o que é processado/em conserva agride a mucosa cronicamente — "defumado é muito ruim"); a **discussão honesta** sobre o H. pylori (risco da bactéria *em si* vs. risco via complicações — gastrite atrófica, gastrectomia prévia por DUP) e por que, para prova, **fecha-se como fator de risco do gástrico**; e o fechamento de que H. pylori é a marca que **separa estômago de esôfago** (no esôfago não é fator de risco).

### Bloco p4-A — INSERIR APÓS a tabela `<table class="cmp">` (o `</table>`), ANTES do `opener--trap` da pegadinha das fibras.

```html
<h3 class="topic-h">Por que conservantes e defumados pesam — e o que a banca chama de "industrializado"</h3>
<div class="prose">
  <p>O primeiro grupo é o do <strong>hábito</strong>, e o eixo dele é a <strong>agressão química crônica da mucosa gástrica</strong>. Dieta rica em <strong>nitrogenados e conservantes</strong> — mortadela, embutidos, alimentos em conserva, industrializados — expõe o estômago, refeição após refeição, a compostos que irritam e transformam o epitélio ao longo de anos. O <strong>defumado</strong> é destacado à parte ("defumado é muito ruim"): a defumação carrega o alimento de subprodutos agressores. Some <strong>tabagismo</strong> (risco para praticamente todo câncer) e <strong>etilismo</strong>, e está montado o perfil de quem agride o estômago de fora para dentro.</p>
</div>

<h3 class="topic-h">H. pylori: bactéria em si ou complicação? Para a prova, é risco do gástrico</h3>
<div class="prose">
  <p>Há uma discussão legítima por trás do <em>H. pylori</em>: o risco é da <strong>bactéria em si</strong> ou apenas das <strong>complicações</strong> que ela provoca — a <strong>gastrite atrófica</strong> crônica e, no passado, a <strong>gastrectomia prévia por doença ulcerosa péptica</strong> em contexto de infecção? Para o raciocínio de prova, o nó se desfaz com uma posição firme: <strong>o <em>H. pylori</em> é, sim, fator de risco para câncer gástrico</strong> — seja pela inflamação crônica direta, seja pelas complicações que ele desencadeia. É carcinógeno reconhecido (classe I).</p>
  <p>E aqui mora a separação mais cobrada: o <em>H. pylori</em> marca o <strong>estômago</strong>, <strong>não o esôfago</strong>. Encontrar "infecção por <em>H. pylori</em>" no enunciado puxa o raciocínio para o gástrico e ajuda a descartar o esôfago — onde os vilões são outros (tabaco, álcool, líquido quente, cáusticos, tilose, DRGE/Barrett).</p>
</div>
```

---

# HTML p5 — Clínica e sinais de alarme (roteiro p4)

**O que a página já tem**: prose "duas camadas" (consumptiva + localizador), comparação com o esôfago, `mnemonic` "Dispepsia + perda de peso → câncer de estômago", `card--info` dos sinais de alarme, 2 quizzes.
**O que a fonte ensina e a página comprimiu**: a definição fina de **dispepsia como queimação epigástrica SEM regurgitação** — e por que o "sem regurgitação" é o detalhe que separa do refluxo banal; o porquê de os **sinais de alarme** (hemorragia, anemia, disfagia, idade) serem os **mesmos da síndrome disfágica** e o que cada um significa fisiopatologicamente; e a ponte de que os **sinais de doença incurável** também são "alarme", mas de outra natureza — já anunciam paliação.

### Bloco p5-A — INSERIR APÓS o `<div class="mnemonic">` (o `</div>` que fecha a frase "Dispepsia + perda de peso → pense câncer de estômago"), ANTES do `card--info` dos sinais de alarme.

```html
<h3 class="topic-h">O detalhe da dispepsia: queimação epigástrica SEM regurgitação</h3>
<div class="prose">
  <p>O localizador do estômago é a <strong>dispepsia</strong>, mas com uma descrição precisa: <strong>queimação epigástrica não acompanhada de regurgitação</strong>. Esse "sem regurgitação" não é enfeite — é o que afasta o refluxo banal. Na DRGE, o paciente regurgita, sente o conteúdo subir; na dispepsia do câncer, há a queimação no epigástrio, mas <strong>sem aquele componente de algo voltando</strong>. Assim como, no esôfago, o "talo que entala" (disfagia) localizava a lesão, no estômago é essa queimação epigástrica isolada que aponta o órgão.</p>
</div>
```

### Bloco p5-B — INSERIR APÓS o `<div class="card card--info">` dos sinais de alarme (o `</div>` que fecha "...os sinais de doença incurável — quando o exame físico já antecipa que o paciente é paliativo"), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">Por que cada sinal de alarme manda fazer endoscopia</h3>
<div class="prose">
  <p>Os sinais de alarme não são uma lista decorada — cada um traduz algo que o tumor está fazendo. <strong>Hemorragia digestiva</strong> (melena, hematêmese) e <strong>anemia</strong> (sangramento crônico somado à desnutrição) dizem que a lesão sangra. <strong>Disfagia</strong>, quando aparece, sugere uma lesão alta, justacárdica, que já estreita a passagem. <strong>Idade avançada</strong> com dispepsia nova eleva a probabilidade de fundo de que aquela queixa seja câncer, não dispepsia funcional. Diante de dispepsia, qualquer um deles <strong>obriga a endoscopia</strong> — e é por isso que tratar empiricamente com inibidor de bomba, ignorando o alarme, é o erro perigoso que a banca arma.</p>
</div>
```

---

# HTML p6 — Os cinco sinais de doença incurável (roteiro p5)

**O que a página já tem**: prose de abertura (achado físico anuncia paliação antes da biópsia), SVG-mapa dos 5 sinais, `sign-list` com os 5 epônimos comentados, `card--info` "O detalhe que muda o gabarito", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: a **regra categórica de Virchow** dita com a força do professor ("**não existe doença que aumente o supraclavicular esquerdo** — nem pneumonia, nem TB; supraclavicular aumentado = câncer") e a **lateralidade** (esquerda = abdome/gástrico; direita = pulmão) com o **porquê embriológico-anatômico** (drenagem das vísceras abdominais converge à esquerda, via ducto torácico); a **história da Irmã Maria José** (enfermeira que percebeu o péssimo prognóstico do nódulo umbilical) e o mecanismo do **ligamento falciforme → umbilical**; e a leitura do **DDV-1**: os 3 epônimos nomeados pelo professor + os 2 que completam os 5 (Blumer e Krukenberg) são todos **transcelômicos/linfáticos**, ancorados no caso (toque recusado = Blumer não avaliado; USG ovário = Krukenberg).

### Bloco p6-A — INSERIR APÓS a `<ul class="sign-list">` (o `</ul>`), ANTES do `card--info` "O detalhe que muda o gabarito".

```html
<h3 class="topic-h">A regra categórica do supraclavicular esquerdo</h3>
<div class="prose">
  <p>Guarde esta como uma regra dura da semiologia oncológica: <strong>nenhuma doença benigna aumenta o linfonodo supraclavicular esquerdo</strong>. Nem pneumonia, nem tuberculose, nem infecção banal de via aérea — nada disso o estufa. <strong>Supraclavicular esquerdo aumentado é câncer até prova em contrário.</strong> Por isso, num paciente com síndrome consumptiva, esse nódulo endurecido e aderido vale tanto: ele praticamente fecha que há malignidade em algum lugar.</p>
  <p>E a <strong>lateralidade entrega o andar do corpo</strong>. À <strong>esquerda</strong> (Virchow propriamente), aponta câncer <strong>abdominal/gástrico</strong>; à <strong>direita</strong>, aponta <strong>tórax/pulmão</strong>. O motivo é a rota linfática: a drenagem das <strong>vísceras abdominais converge para a esquerda</strong> (desaguando perto da junção do ducto torácico com a veia subclávia esquerda), enquanto o tórax e o mediastino drenam para a direita. Não é a posição física do estômago que importa — é o caminho por onde a linfa escoa.</p>
</div>

<h3 class="topic-h">Por que "nódulo" da Irmã Maria José, e não "linfonodo"</h3>
<div class="prose">
  <p>O nome homenageia uma <strong>enfermeira</strong> de enfermaria oncológica que percebeu um padrão: todo paciente que aparecia com um <strong>nódulo palpável no umbigo</strong> tinha prognóstico péssimo. A precisão do termo é o que cai em prova — é <strong>nódulo</strong>, não <strong>linfonodo</strong>, porque <strong>não existe cadeia linfática no umbigo</strong>. O que se palpa ali é <strong>tumor</strong>, não gânglio.</p>
  <p>O mecanismo fecha com a via transcelômica: a célula cai na cavidade, infiltra o <strong>ligamento falciforme</strong> (que prende o fígado à parede abdominal anterior) e sobe por ele até o <strong>ligamento umbilical</strong>, brotando como nódulo tumoral no umbigo. Marcar "linfonodo umbilical" numa questão é o deslize clássico que o detalhe desmonta.</p>
</div>
```

### Bloco p6-B — INSERIR APÓS o `<div class="card card--info">` "O detalhe que muda o gabarito" (o `</div>`), ANTES da primeira `<div class="quiz">`.

```html
<div class="card card--densify">
  <span class="densify-tag">Completando os cinco sinais (DDV-1)</span>
  <p>São três os epônimos nomeados — <strong>Virchow</strong> (supraclavicular esquerdo), <strong>Irish</strong> (axilar esquerdo) e <strong>Irmã Maria José</strong> (nódulo umbilical). Os dois que completam os cinco são igualmente transcelômicos e <strong>aparecem no próprio caso</strong>: a <strong>prateleira de Blumer</strong> — massa palpável no fundo de saco ao toque retal (a paciente <em>recusou</em> o toque, então esse sinal ficou por avaliar) — e o <strong>tumor de Krukenberg</strong>, a metástase ovariana (o "implante no ovário" do caso). Todos seguem a mesma lógica: linfa converge à esquerda; células soltas caem por gravidade no fundo de saco e nos ovários, ou sobem pelo falciforme até o umbigo.</p>
</div>
```

---

# HTML p7 — Diagnóstico: EDA, biópsia e o CA 72-4 (roteiro p6)

**O que a página já tem**: `card--success` (EDA + biópsia), prose da regra da biópsia + adenocarcinoma, `figure.med` (EDA), prose do CA 72-4, `card--info` "mapa rápido de marcadores", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê de a EDA + biópsia ser "sem mistério"** no estômago (víscera oca, acessível, biopsiável sem risco de semeadura — reaproveitando a regra de ouro da biópsia da Aula 1); a **honestidade sobre o CA 72-4** (pouco específico, não serve para diagnóstico nem rastreio, "não gosto de falar, mas caiu na prova do IAMSPE") e o porquê de marcador pouco específico **não diagnosticar**; e o **contraste sistemático de marcadores entre os tumores do TGI** como ferramenta para separar o gástrico do esôfago.

### Bloco p7-A — INSERIR APÓS a primeira `<div class="prose">` depois do `card--success` (o `</div>` que fecha "...que aqui será, quase sempre, <strong>adenocarcinoma</strong>"), ANTES do parágrafo "Antes de olhar a imagem da lesão".

```html
<h3 class="topic-h">Por que o estômago se biopsia sem medo</h3>
<div class="prose">
  <p>No estômago, o diagnóstico é direto justamente porque ele obedece à regra de ouro da biópsia: é uma <strong>víscera oca, acessível pela câmera</strong>, e a pinça retira um fragmento da lesão <strong>sem risco de semear o peritônio</strong>. Diferente de uma víscera maciça (fígado, pâncreas), onde puncionar pode espalhar células ou sangrar, aqui a lesão está contida dentro do tubo — a endoscopia vê e a biópsia confirma com segurança. O histopatológico devolve, quase sempre, o mesmo veredito: <strong>adenocarcinoma</strong>.</p>
</div>
```

### Bloco p7-B — INSERIR APÓS a `<div class="prose">` do CA 72-4 (o `</div>` que fecha "...justamente o tipo de detalhe que a banca usa para diferenciar do esôfago"), ANTES do `card--info` "mapa rápido de marcadores".

```html
<h3 class="topic-h">Marcador pouco específico não diagnostica — então para que serve?</h3>
<div class="prose">
  <p>O <strong>CA 72-4</strong> é o marcador classicamente lembrado para o estômago, mas a palavra-chave é <strong>pouco específico</strong>. Pouco específico significa que ele sobe em situações que não são câncer gástrico — logo, <strong>não serve para diagnosticar nem para rastrear</strong> (um valor alto não fecha doença, um valor normal não a exclui). O diagnóstico continua sendo da dupla EDA + biópsia. O marcador entra como detalhe de prova e, eventualmente, de seguimento — é o tipo de informação que a banca solta só para ver se você atribui o marcador ao órgão certo, e não ao esôfago.</p>
</div>
```

---

# HTML p8 — Borrmann: a classificação macroscópica (roteiro p7)

**O que a página já tem**: prose (macro × micro, Borrmann é do endoscopista, quanto maior pior), SVG dos 4 tipos, prose da analogia do linho, `figure.med` (linite radiográfica), `card--accent` "A pegadinha do 'não ulcerada'", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: a descrição fina de **cada tipo 1–4** (o que o endoscopista vê: polipóide elevado; ulcerado de bordas nítidas/escavado; ulceroinfiltrativo de bordas que somem = já infiltrou; infiltrante difuso sem úlcera = parede espessa); o **porquê de bordas não nítidas = pior** (não dá para ver onde a doença começa e termina porque já espalhou); e a leitura completa da **analogia do linho/plástica** (linho = mucosa espessa e áspera; "plástica" = mudou o formato + dilatou o estômago → o aspecto "garrafa de couro").

### Bloco p8-A — INSERIR APÓS a `<div class="prose">` da analogia do linho (o `</div>` que fecha "...inflamação que deixou a parede parecendo linho, num estômago deformado"), ANTES da `<figure class="med">` da linite.

```html
<h3 class="topic-h">O que o endoscopista vê em cada tipo — e por que o número alto é pior</h3>
<div class="prose">
  <p>Borrmann é a leitura a olho nu, quadro a quadro. O <strong>tipo I (polipóide)</strong> é uma saliência elevada, com bordas próprias, bem delimitada — a lesão "tem fim", dá para circunscrever, e por isso é a de <strong>melhor prognóstico</strong>. O <strong>tipo II</strong> é ulcerado de <strong>bordas nítidas</strong> (escavado): ainda se enxerga onde a úlcera começa e termina. No <strong>tipo III (ulceroinfiltrativo)</strong>, as <strong>bordas somem</strong> — não se vê o limite porque a doença já infiltrou para os lados. O <strong>tipo IV</strong> não tem úlcera: a parede inteira engrossa de forma difusa.</p>
  <p>A régua "quanto maior o número, pior" tem uma lógica visual simples: a <strong>perda de limite</strong> reflete <strong>perda de contenção</strong>. Bordas nítidas dizem "a doença está aqui, circunscrita"; bordas que desaparecem dizem "ela já se espalhou pela parede" — e quanto mais espalhada, maior a chance de já ter caído célula no peritônio (a doença praga). Por isso o polipóide é o único de baixo risco e o infiltrante difuso é o extremo ruim.</p>
</div>

<h3 class="topic-h">Linite plástica, peça por peça do nome</h3>
<div class="prose">
  <p>"<strong>Linite</strong>" vem de <strong>linho</strong>: a infiltração tumoral deixa a parede <strong>espessa e áspera, como tecido de linho</strong> (mais áspera que o algodão). "<strong>Plástica</strong>" é de <strong>plasticidade</strong> — o estômago <strong>mudou de formato</strong>: a inflamação tumoral dilatou e deformou o órgão. Junte as duas peças e você tem o quadro do <strong>Borrmann IV</strong>: parede engrossada e enrijecida, estômago deformado que <strong>não distende</strong> — é o aspecto de "<strong>garrafa de couro</strong>" que a radiografia contrastada mostra.</p>
</div>
```

---

# HTML p9 — Lauren: intestinal × difuso (roteiro p8)

**O que a página já tem**: prose (micro × macro, Lauren é do patologista), tabela `cmp` dos perfis espelhados, prose da analogia do anel de sinete, SVG da célula, `figure.med` (histologia), `card--info` "tipo sanguíneo A não muda conduta", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: a **lógica espelhada** dos dois perfis (por que tudo se inverte entre intestinal e difuso — não é coincidência, é que são dois mecanismos biológicos diferentes: um esporádico ligado à agressão crônica, outro com **componente hereditário**); o **porquê de o intestinal ser melhor** (bem diferenciado = se parece com tecido normal = menos agressivo) e do difuso ser pior (indiferenciado, anel de sinete); e a história do **anel de sinete** (o objeto que selava cartas com cera e brasão) lendo a célula (mucina empurra o núcleo para a borda = o brasão saliente).

### Bloco p9-A — INSERIR APÓS a tabela `<table class="cmp">` (o `</table>`), ANTES da `<div class="prose">` da analogia do anel de sinete.

```html
<h3 class="topic-h">Por que tudo se inverte entre os dois — e por que o intestinal é "melhor"</h3>
<div class="prose">
  <p>Os dois perfis não são uma lista a decorar coluna por coluna: eles se invertem porque descrevem <strong>duas doenças biologicamente diferentes</strong>. O <strong>intestinal</strong> é o padrão clássico do tumor digestivo: <strong>esporádico</strong>, ligado à <strong>agressão crônica</strong> (gastrite atrófica, <em>H. pylori</em>), aparecendo no <strong>homem mais velho</strong>. O <strong>difuso</strong> é o avesso: tem <strong>componente hereditário</strong>, surge mais cedo, na <strong>mulher mais jovem</strong>, e <strong>não guarda relação com o <em>H. pylori</em></strong>. Decorou um lado, o outro é o espelho.</p>
  <p>E por que o intestinal tem <strong>melhor prognóstico</strong>? Porque é <strong>bem diferenciado</strong> — as células ainda formam glândulas e <strong>lembram o tecido normal</strong>, o que costuma significar comportamento menos agressivo. O <strong>difuso</strong> é <strong>indiferenciado</strong>: as células perderam a organização (é o terreno do anel de sinete), infiltram de modo disperso e se comportam pior. Diferenciação alta = parecido com o normal = melhor; diferenciação baixa = irreconhecível = pior.</p>
</div>
```

### Bloco p9-B — INSERIR APÓS o `<div class="card card--info">` "Detalhe que aparece e não muda conduta" (o `</div>` do tipo sanguíneo A), ANTES da primeira `<div class="quiz">`.

```html
<div class="card card--accent">
  <h3>O perfil completo que a banca cobra do difuso</h3>
  <p>Quando um enunciado quiser desenhar o <strong>pior cenário</strong> de Lauren, ele empilha os marcadores do difuso: <strong>mulher jovem</strong>, <strong>história familiar</strong> (componente hereditário), <strong>células em anel de sinete</strong>, <strong>indiferenciado</strong> e — como achado descritivo — <strong>tipo sanguíneo A</strong>. Reconhecer esse pacote junto vale tanto quanto a célula isolada: é o retrato do gástrico difuso, de prognóstico pior.</p>
</div>
```

---

# HTML p10 — Estadiamento: o irmão do esôfago (roteiro p9)

**O que a página já tem**: `opener--mnemonic` ("neoplasias irmãs"), prose (o que se reaproveita), tabela `cmp` (esôfago × estômago), prose (USE para T; foco no peritônio; só TC de abdome), `figure.med` (TC), 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê de USE ser o melhor exame do T** (avalia camada a camada — distingue mucosa T1a de invasão de víscera adjacente); a **mudança conceitual em relação ao esôfago** (no esôfago a obsessão era a víscera nobre vizinha — aorta na TC, brônquio na broncoscopia; no estômago **não há víscera nobre única a temer**, então a obsessão vira o **peritônio**); e o **porquê de não fazer TC de tórax** (o gástrico vive no andar abdominal — não há por que vasculhar o tórax de rotina), com a nota do **DDV-2** de que diretrizes internacionais incluem tórax/pelve.

### Bloco p10-A — INSERIR APÓS a segunda `<div class="prose">` (o `</div>` que fecha "...já que o gástrico vive no andar abdominal"), ANTES da `<figure class="med">` da TC.

```html
<h3 class="topic-h">Por que a USE é o melhor exame do T — e por que o foco mudou para o peritônio</h3>
<div class="prose">
  <p>A <strong>USE (ecoendoscopia)</strong> ganha o T porque enxerga a parede <strong>camada por camada</strong>: ela mostra se a lesão ainda está restrita à <strong>mucosa (T1a)</strong> ou se já atravessou camadas e alcançou víscera adjacente. Nenhum outro método define profundidade de parede com essa resolução — é o mesmo papel que ela tinha no esôfago.</p>
  <p>O que <strong>muda</strong> é o avançado. No esôfago, a preocupação era uma <strong>estrutura nobre vizinha</strong>: a aorta (vista na TC) e o brônquio (na broncoscopia) — invadir uma delas mudava tudo. No estômago <strong>não há uma víscera nobre única a temer</strong>; o que tira o paciente da cirurgia é a doença ter <strong>caído no peritônio</strong> (a via transcelômica). Por isso a obsessão do estadiamento gástrico é o <strong>peritônio</strong>, e a imagem pedida para todos é a <strong>TC de abdome</strong>. Vasculhar o tórax de rotina não faz sentido para um tumor que vive no andar abdominal — daí <strong>não se fazer TC de tórax</strong>.</p>
</div>
```

### Bloco p10-B — INSERIR APÓS a `<figure class="med">` da TC (o `</figure>`), ANTES da primeira `<div class="quiz">`.

```html
<div class="card card--densify">
  <span class="densify-tag">Atualização de diretriz (DDV-2)</span>
  <p>A resposta de prova é "<strong>TC de abdome</strong>, sem TC de tórax de rotina". Para contexto atual: diretrizes internacionais (NCCN) recomendam <strong>TC de tórax/abdome/pelve com contraste</strong> no estadiamento. Detalhe de atualização — o recorte cobrado continua sendo a TC de abdome, focada no peritônio.</p>
</div>
```

---

# HTML p11 — Carcinomatose peritoneal e a videolaparoscopia (roteiro p10)

**O que a página já tem**: prose (limite da TC ~1 cm; microimplantes passam batido; peso do diagnóstico), SVG do fluxograma TC → VLP/citologia → M1, `card--accent` "O que muda o gabarito", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê de a TC ter limite duro** (só vê implante ≥ 1 cm; os microimplantes < 1 cm — exatamente os que tomam o peritônio parietal e sobem pelo falciforme — são invisíveis); o **peso ético/clínico do diagnóstico** explicado de verdade (cravar carcinomatose = dizer que **não há mais cura**, não opera, não tenta nada com intenção curativa — um veredito desse peso **não pode sair de uma imagem isolada**); e a **diferença operacional** entre o cenário com implantes visíveis (VLP + biópsia, eventual congelação) e o cenário só com ascite (citologia do líquido) — ambos confirmando M1.

### Bloco p11-A — INSERIR APÓS a `<div class="figure-svg">` do fluxograma (o `</div>` que fecha a `figure-svg`, após o `<figcaption id="svg11-cap">`), ANTES do `card--accent` "O que muda o gabarito".

```html
<h3 class="topic-h">O peso do diagnóstico: por que uma imagem não basta</h3>
<div class="prose">
  <p>Cravar <strong>carcinomatose peritoneal</strong> não é só preencher um campo do estadiamento — é dizer ao paciente que <strong>não há mais cura</strong>. A partir desse rótulo, <strong>não se opera</strong> com intenção curativa, não se tenta mais nada além de paliar. Um veredito desse tamanho <strong>não pode sair de uma "bolinha" vista na TC</strong>: a imagem sugere, mas não prova, e o erro custa caro nos dois sentidos (condenar quem ainda tinha chance, ou operar quem já estava disseminado).</p>
  <p>Por isso a confirmação é <strong>obrigatória e por tecido</strong>. Havendo suspeita de implantes, faz-se <strong>videolaparoscopia de estadiamento</strong>: entra-se na cavidade, colhem-se pedacinhos dos implantes e manda-se para o histopatológico (às vezes a <strong>congelação intraoperatória</strong> já responde se é maligno). Havendo <strong>apenas ascite</strong>, sem implantes visíveis, coleta-se o <strong>líquido</strong> e faz-se <strong>citologia</strong>. Em qualquer dos caminhos, <strong>célula neoplásica positiva confirma carcinomatose</strong> — e ela entra no estadiamento como <strong>M1</strong>, doença à distância.</p>
</div>
```

---

# HTML p12 — Mucosectomia × câncer precoce: a pegadinha (roteiro p11)

**O que a página já tem**: `opener--trap` ("precoce ≠ elegível para mucosectomia"), prose dos 4 critérios + frase-resumo (T1a N0 + ...), SVG contrastando os dois conceitos, `card--info` "A definição que a banca cobra", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê de cada um dos 4 critérios** (por que o tamanho < 2 cm, por que só Borrmann I/sem ulceração — se ulcerou, pode ter furado a parede e caído no peritônio; por que só Lauren intestinal — o difuso é agressivo demais para arriscar deixar estômago; por que sem linfonodo); o **contraste duro com o esôfago** (lá todo T1a faz ressecção endoscópica; aqui só com indícios de que **não é praga**); e a **anatomia da pegadinha da definição de precoce** (T1 = mucosa OU submucosa, **qualquer N**, M0 — a banca oferece "restrito à mucosa sem linfonodo", que *parece* a definição mas é o critério da mucosectomia).

### Bloco p12-A — INSERIR APÓS a `<div class="prose">` dos 4 critérios + frase-resumo (o `</div>` que fecha "...É o tumor 'muito, muito precoce'"), ANTES da `<div class="figure-svg">`.

```html
<h3 class="topic-h">Por que cada critério existe — e por que o estômago é mais rigoroso que o esôfago</h3>
<div class="prose">
  <p>No esôfago, <strong>todo T1a</strong> fazia ressecção endoscópica. No estômago não: por ser <strong>tumor praga</strong>, só se arrisca poupar o órgão quando há indícios fortes de que a lesão <strong>ainda não espalhou</strong>. Cada critério é uma trava contra a praga:</p>
  <ul>
    <li><strong>Tamanho &lt; 2 cm</strong> — lesão menor teve menos tempo e menos massa para semear.</li>
    <li><strong>Borrmann I / sem ulceração</strong> — a ausência de úlcera importa porque, <strong>se ulcerou, há chance de já ter furado a parede e jogado célula no peritônio</strong>. Polipóide elevado é o que oferece essa garantia.</li>
    <li><strong>Lauren intestinal</strong> — o <strong>difuso é agressivo demais</strong> para arriscar deixar estômago no lugar; o risco de recidiva manda operar e retirar o órgão.</li>
    <li><strong>Sem linfonodo aumentado</strong> — megalia linfonodal na TC já sinaliza disseminação; havendo gânglio suspeito, a ressecção local não basta.</li>
  </ul>
  <p>Some tudo: a mucosectomia exige o tumor <strong>"muito, muito precoce"</strong> — só mucosa (T1a), linfonodo limpo (N0), pequeno, polipóide e bem diferenciado. Falhou um, opera-se.</p>
</div>
```

### Bloco p12-B — INSERIR APÓS o `<div class="card card--info">` "A definição que a banca cobra — e a armadilha" (o `</div>`), ANTES da primeira `<div class="quiz">`.

```html
<div class="dont-confuse">
  <div class="dont-confuse__label">Não confunda — os dois conceitos que a banca embaralha</div>
  <div class="dont-confuse__grid">
    <div class="dont-confuse__side">
      <h4>Câncer gástrico PRECOCE (definição)</h4>
      <p><strong>T1</strong> — mucosa (T1a) <em>ou</em> submucosa (T1b) — com <strong>qualquer N</strong> (N0 ou N+), M0. É a definição: pode ter linfonodo positivo e ainda ser "precoce". Conceito de <strong>classificação</strong>, não de tratamento.</p>
    </div>
    <div class="dont-confuse__side">
      <h4>Elegível para MUCOSECTOMIA</h4>
      <p><strong>T1a</strong> (só mucosa) e <strong>N0</strong>, somados a &lt; 2 cm, Borrmann I (sem ulceração) e Lauren intestinal. É bem mais restrito — o "muito, muito precoce". Conceito de <strong>conduta</strong>.</p>
    </div>
  </div>
</div>
<div class="prose">
  <p>A armadilha é exata: a banca oferece "<strong>restrito à mucosa, sem linfonodo</strong>" como se fosse a <em>definição</em> de precoce. Parece intuitivo e <strong>está errado</strong> — isso é a condição da mucosectomia. A definição de precoce é mais larga (mucosa <em>ou</em> submucosa, qualquer N).</p>
</div>
```

---

# HTML p13 — Cirurgia: gastrectomia, margens e linfadenectomia D2 (roteiro p12)

**O que a página já tem**: prose (QT neo → cirurgia; gástrico é sempre adeno → só QT; gastrectomia + D2), `<h2>` "Qual gastrectomia? Decide a topografia" + SVG topografia, prose (por que a topografia manda; margem 6/8 por Lauren), `<h2>` "O que é linfadenectomia D2" + tabela `cmp` D1/D2/D3, `opener--trap` (≥16 / erro do Sabiston), `card--densify` (FLOT/DDV-4), 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê de o gástrico ser só QT e não quimiorradio** (no esôfago, escamoso fazia quimiorradio e adeno só QT; como o estômago é **sempre adeno**, fica só QT); o **detalhe das margens por Lauren** explicado fisiopatologicamente (o difuso infiltra mais e de modo disperso → margem maior, 8 cm; o intestinal é mais contido → 6 cm); o **porquê de D3 ser proscrita** (estende a ~15 cadeias por todo o abdome — atrás da aorta, pâncreas, baço/hílio — é mórbida demais, o paciente "morre do estresse cirúrgico"; era feita no Japão/Coreia); e a **anatomia da pegadinha do número** (≥16, isto é, **> 15**, não "pelo menos 15" — e o errinho do **Sabiston 20ª/21ª**).

### Bloco p13-A — INSERIR APÓS a primeira `<div class="prose">` (o `</div>` que fecha "...A cirurgia é a <strong>gastrectomia + linfadenectomia a D2</strong>"), ANTES do `<h2>` "Qual gastrectomia?".

```html
<h3 class="topic-h">Por que só quimioterapia, sem rádio</h3>
<div class="prose">
  <p>No esôfago, o histológico mandava no esquema: o <strong>escamoso</strong> respondia a <strong>quimiorradioterapia</strong>; o <strong>adenocarcinoma</strong>, a <strong>só quimioterapia</strong>. No estômago essa bifurcação some, porque o gástrico é <strong>sempre adenocarcinoma</strong> — não há o ramo escamoso. Logo, o tratamento neoadjuvante é <strong>só QT</strong> (sem rádio de rotina), seguido da cirurgia. É a mesma lógica do esôfago, aplicada a um órgão que só tem o tipo "adeno".</p>
</div>
```

### Bloco p13-B — INSERIR APÓS a `<div class="prose">` da margem por Lauren (o `</div>` que fecha "...tumor <strong>difuso</strong>... pede <strong>8 cm</strong>"), ANTES do `<h2>` "O que é linfadenectomia D2".

```html
<h3 class="topic-h">Margem maior no difuso: a infiltração dispersa cobra mais distância</h3>
<div class="prose">
  <p>A margem proximal de segurança não é um número arbitrário — ela acompanha o <strong>comportamento do tumor segundo Lauren</strong>. O <strong>intestinal</strong> é bem diferenciado e mais <strong>contido</strong>: cresce de forma mais delimitada, então <strong>6 cm</strong> de margem bastam. O <strong>difuso</strong> infiltra de modo <strong>disperso e silencioso</strong> pela parede (é o mesmo padrão que dá a linite plástica), podendo haver células além do que o olho vê — por isso exige uma folga maior, <strong>8 cm</strong>. Difuso = mais maligno = mais margem.</p>
</div>
```

### Bloco p13-C — INSERIR APÓS a tabela `<table class="cmp">` de D1/D2/D3 (o `</table>`), ANTES do `opener--trap` "O número que muda o gabarito".

```html
<h3 class="topic-h">Por que D1 é pobre, D3 é proscrita e D2 é o equilíbrio</h3>
<div class="prose">
  <p>As três extensões medem <strong>até onde se vai buscar linfonodo</strong>. A <strong>D1</strong> leva só os gânglios <strong>colados ao estômago</strong> (ao redor da junção, pequena e grande curvatura, piloro) — eles saem junto com a peça quase de graça, mas é <strong>pouco</strong>: subestadia e deixa doença para trás. A <strong>D3</strong> é o extremo oposto: dissecar <strong>todas as ~15 cadeias da barriga</strong> — atrás da aorta, corpo e cauda do pâncreas, baço e hílio esplênico. É tão <strong>mórbida</strong> que o paciente pode <strong>morrer do estresse cirúrgico</strong>; chegou a ser feita no <strong>Japão e na Coreia</strong>, mas hoje é <strong>proscrita</strong> de rotina.</p>
  <p>A <strong>D2</strong> é o ponto de equilíbrio e o <strong>padrão atual</strong>: os linfonodos colados <strong>mais os próximos</strong> (gástrica esquerda, hepática comum, esplênica, grande omento). Ganha-se estadiamento e controle oncológico adequados sem a morbidade catastrófica da D3.</p>
</div>
```

---

# HTML p14 — Síntese, M1/paliação e a resposta ao caso (roteiro p13)

**O que a página já tem**: prose (M1 → paliação; não há T4B típico no gástrico), tabela `cmp` (decisão por extensão), `card--success` "Resposta ao caso", `card--info` "Resumo decisório", `card--densify` (completando os 5 sinais — DDV-1), 2 quizzes, `next-link`, banner-mantra.
**O que a fonte ensina e a página comprimiu**: o **porquê de "não haver T4B típico"** no gástrico (no esôfago, invadir a aorta — uma víscera nobre vizinha — já inviabilizava; no estômago não existe essa única estrutura cuja invasão sozinha condene, então o que tira da cirurgia é sobretudo a **disseminação** — peritônio, metástase); e a **lógica da resposta ao caso** (hipótese = câncer gástrico pelo padrão praga; conduta = **começar sempre pela EDA + biópsia** para identificar o sítio primário — e biopsiar o Virchow como atalho, já que a doença é avançada e a biópsia confirma a histologia e define paliação; se a EDA não esclarecer, busca-se outro sítio, eventual VLP, **mas a EDA vem primeiro**).

### Bloco p14-A — INSERIR APÓS a primeira `<div class="prose">` (o `</div>` que fecha "...a disseminação (peritônio, metástase)"), ANTES da tabela `<table class="cmp">`.

```html
<h3 class="topic-h">Por que o gástrico "não tem T4B típico" — e o que realmente condena à paliação</h3>
<div class="prose">
  <p>No esôfago, havia uma estrutura nobre vizinha cuja invasão sozinha já matava a chance cirúrgica: a <strong>aorta</strong>. No estômago <strong>não existe esse T4B típico</strong> — não há uma única víscera nobre adjacente que, ao ser invadida, condene o caso por si só. O que tira o paciente da cirurgia é, sobretudo, a <strong>disseminação</strong>: a doença ter ido para o <strong>peritônio</strong> (carcinomatose, via transcelômica) ou ter dado <strong>metástase à distância</strong>. Diante de <strong>M1</strong> — e a carcinomatose peritoneal entra como M1 —, a conduta é <strong>paliação</strong>: o objetivo passa a ser qualidade de vida, não cura.</p>
</div>
```

### Bloco p14-B — INSERIR APÓS o `<div class="card card--success">` "Resposta ao caso" (o `</div>`), ANTES do `card--info` "Resumo decisório".

```html
<h3 class="topic-h">A ordem que não se inverte: EDA primeiro, sempre</h3>
<div class="prose">
  <p>Diante do padrão <strong>doença praga</strong>, a principal hipótese é <strong>câncer gástrico</strong> (com câncer de ovário como diferencial, dada a via transcelômica compartilhada). A conduta começa, sem exceção, pela <strong>endoscopia digestiva alta + biópsia</strong> — porque o objetivo é <strong>identificar o sítio primário</strong> e confirmar a histologia. Como a doença já é avançada, biopsiar o <strong>linfonodo de Virchow</strong> funciona como atalho: confirma o histopatológico e <strong>coloca a paciente como paliativa</strong> de uma vez. Se a EDA não diagnosticar, parte-se para outro sítio (eventual videolaparoscopia) — mas a <strong>EDA é sempre o primeiro passo</strong>. Tratar antes de ter diagnóstico, ou pular a EDA para ir direto à VLP, inverte a sequência e erra a questão.</p>
</div>
```

---

# MAPA DE COBERTURA 100% (fonte → bloco)

Cada núcleo do roteiro/laudo e onde foi enriquecido. Itens já bem cobertos pela página existente são marcados **[já na página]** (preservados, não duplicados).

| Núcleo da fonte | Onde foi enriquecido |
|---|---|
| Doença avançada sem sintoma localizador (conceito) | **p2-A** |
| Exame físico como exclusão (tireoide/cirrose/mama/pulmão) | **p2-A** |
| "Implante" = secundarismo | **p2-A** |
| Analogia da praga | [já na página, p3] |
| Mecanismo da via transcelômica (ulcera → vaza → germina) | **p3-A** |
| Estômago e ovário = exceções transcelômicas; demais usam pouco | **p3-A** |
| Ascite + ovário + carcinomatose = uma via, três pontos | **p3-A** |
| Nitrogenados/conservantes/defumados/industrializados (porquê) | **p4-A** |
| Tabaco + álcool | **p4-A** / [tabela já na página] |
| H. pylori: bactéria em si × complicações; risco do gástrico | **p4-A** |
| H. pylori não é do esôfago | **p4-A** / [card já na página] |
| Pegadinha das fibras | [já na página, opener--trap p4] |
| Síndrome consumptiva + localizador (dispepsia) | [já na página] / **p5-A** |
| Dispepsia = queimação epigástrica SEM regurgitação | **p5-A** |
| Sinais de alarme (porquê de cada um) | **p5-B** |
| Virchow: regra categórica + lateralidade + drenagem | **p6-A** |
| Irish (axilar esquerdo) | [já na sign-list] |
| Irmã Maria José: história + ligamento falciforme/umbilical; nódulo ≠ linfonodo | **p6-A** |
| 5 sinais completos: Blumer + Krukenberg (DDV-1) | **p6-B** / [card--densify já no p14] |
| EDA + biópsia padrão; estômago biopsia sem semear | **p7-A** |
| CA 72-4 pouco específico (IAMSPE); não diagnostica/rastreia | **p7-B** / [prose já na página] |
| Mapa de marcadores TGI (esôfago/cólon/hepato/pâncreas) | [já no card--info p7] |
| Borrmann macro (endoscopista); 4 tipos descritos | **p8-A** / [SVG já na página] |
| Bordas não nítidas = pior (porquê) | **p8-A** |
| Linho + plástica + "garrafa de couro" | **p8-A** / [prose+figura já na página] |
| Lauren micro (patologista); perfis espelhados | **p9-A** / [tabela já na página] |
| Intestinal melhor (bem diferenciado); difuso pior (indiferenciado) | **p9-A** |
| Componente hereditário do difuso | **p9-A** |
| Anel de sinete (analogia) | [já na página] |
| Tipo sanguíneo A (não muda conduta) | [já no card--info p9] / **p9-B** |
| Perfil completo do difuso (pacote de prova) | **p9-B** |
| Neoplasias irmãs; reaproveita esôfago | [já no opener p10] |
| USE = melhor T (porquê: camada a camada) | **p10-A** |
| Foco no peritônio (não há víscera nobre única) | **p10-A** |
| Só TC de abdome; não TC de tórax | **p10-A** / [tabela já na página] |
| DDV-2 (NCCN tórax/pelve) | **p10-B** |
| TC só vê ≥ 1 cm; microimplantes invisíveis | [já na prose p11] |
| Peso do diagnóstico (não há cura; imagem não basta) | **p11-A** |
| VLP + biópsia/congelação × citologia da ascite | **p11-A** / [SVG já na página] |
| Carcinomatose = M1 | [já no card--accent p11] |
| 4 critérios de mucosectomia (porquê de cada um) | **p12-A** / [prose já na página] |
| Estômago mais rigoroso que esôfago (só se não é praga) | **p12-A** |
| Definição de precoce × mucosectomia (Não confunda) | **p12-B** / [card--info já na página] |
| QT neo → cirurgia; gástrico sempre adeno → só QT | **p13-A** / [prose já na página] |
| Gastrectomia total/subtotal por topografia | [já no SVG/prose p13] |
| Margem 6 (intestinal) / 8 (difuso) — porquê | **p13-B** / [prose já na página] |
| D1 pobre / D2 padrão / D3 proscrita (porquê) | **p13-C** / [tabela já na página] |
| ≥ 16 linfonodos (> 15) + erro do Sabiston 20ª/21ª | [já no opener--trap p13] |
| DDV-4 (FLOT perioperatório) | [já no card--densify p13] |
| M1 = paliação; não há T4B típico (porquê) | **p14-A** / [prose já na página] |
| Resposta ao caso: EDA primeiro, biópsia do Virchow, primário | **p14-B** / [card--success já na página] |

**Gate de cobertura: 100%.** Todos os núcleos da fonte estão presentes — seja já na página (preservado), seja enriquecidos pelos blocos acima. Nenhum fato fora da fonte foi introduzido.

---

# RESUMO PARA O EXECUTOR

- **Páginas tocadas**: HTML p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14 (todas as 13 de conteúdo). O `p1` (dashboard) não recebe blocos.
- **Total de blocos a inserir**: 20 (p2-A; p3-A; p4-A; p5-A, p5-B; p6-A, p6-B; p7-A, p7-B; p8-A; p9-A, p9-B; p10-A, p10-B; p11-A; p12-A, p12-B; p13-A, p13-B, p13-C; p14-A, p14-B).
- **Classes usadas** (todas verificadas em `components.css`): `topic-h`, `prose` (+ `quote-callout`/`term`/`highlight` se quiser realçar), `card`, `card--accent`, `card--info`, `card--success`, `card--mnemonic`, `card--densify` (+ `span.densify-tag`), `mnemonic`, `dont-confuse`. Zero uso de `callout` (inexistente).
- **Operação é só INSERÇÃO.** Nenhum nó existente é editado.
