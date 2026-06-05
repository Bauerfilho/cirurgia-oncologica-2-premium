# Retrofit de Elevação — Texto Rico · Aula 03 (Endocardite por S. bovis e Câncer Colorretal)

**Repo**: `cirurgia-oncologica-2-premium` · **Alvo**: `aulas/aula-03/index.html` (HTML `p1`..`p14`)
**Fonte de minúcia**: `roteiros/roteiro-a3-endocardite-ccr-v1.md` + `laudos/laudo-a3-endocardite-ccr-v1.md`
**Referência de densidade**: `_RETROFIT-ELEVACAO/texto-rico-aula-02.md` (modelo aprovado) e `aula-01/index.html`.

> **Mapa de numeração (confirmado lendo o HTML):** o roteiro numera as páginas 1–14, onde a **P1 do roteiro É o dashboard**. O HTML também tem 14 `data-page`, e o `p1` é o **dashboard/Mapa da aula** (`id="page-p1"`, livestrip ECG, métricas, trilha, painéis). Portanto **HTML pN = roteiro PN** nesta aula (offset zero — diferente da aula-02, cujo roteiro de conteúdo começava em "p1" sem contar o dashboard; aqui o roteiro já chama o dashboard de "P1"). Os títulos abaixo usam o ID do HTML (`p2`..`p14`). O `p1` (dashboard) **não recebe blocos novos** — já é síntese navegável completa.

---

## REGRAS DE EXECUÇÃO (para o Executor — ler antes de tocar no HTML)

1. **PRESERVAÇÃO ABSOLUTA.** Nada do que já existe é removido, reescrito ou reordenado. Prosa, `topic-h`, quizzes (`div.quiz` com `q-tag`/`opt`/`opt-comment` inteiros), SVGs (`figure-svg` com hotspots `hs-shape`), `figure.med`/imagens, openers (`opener--case`/`--mnemonic`/`--trap`/`--vs`/`--bust`), `reveal`, `toggle-switch`/`toggle-panel`, `cmp`, `dont-confuse`, `epi-stat`/`stat-counter`, `finding`, `op-summary`, dashboard, `livestrip` e `page-nav` — **intocados**. Você só **insere** os blocos abaixo nos pontos indicados.

2. **VOCABULÁRIO DO CHASSI — usar SÓ classes verificadas em `assets/css/components.css`.** Usadas aqui: `prose` (+ inline `.term`, `.highlight`, `.quote-callout`), `topic-h`, `card`, `card--accent`, `card--info`, `card--success`, `card--mnemonic`, `card--densify` (+ `span.densify-tag`), `mnemonic` (+ `.mnemonic__label`/`.mnemonic__text`), `dont-confuse` (+ `.dont-confuse__label`/`.dont-confuse__grid`/`.dont-confuse__side`), e as tags semânticas `tag-danger`/`tag-trap`/`tag-good`. **`callout` NÃO EXISTE neste CSS** — onde o briefing genérico falaria "callout", mapeei para `card--accent` (insight), `card--info` (lista comentada/mapa), `card--mnemonic`/`mnemonic` (frase-âncora) e `p.quote-callout` (citação dentro de `.prose`). Não invente classe nova. **`split`** existe e é válido, mas não foi necessário aqui.

3. **Numeração de tópicos.** O HTML usa `topic-h` **sem** "Tópico N" (cabeçalho-insight puro). Os novos blocos entram com `topic-h` no mesmo estilo. Não renumere nem reestilize cabeçalhos pré-existentes.

4. **Voz.** Professor denso explicando direto ao aluno. PT-BR, técnico, sem metalinguagem ("nesta aula", "o professor", "neste módulo", "vamos ver", "a seguir", "como vimos", "próxima página", "aula seguinte"). Negrito nas palavras-chave. Cada caixinha = cabeçalho-insight (`topic-h`) + prosa densa OU lista comentada (nunca bullet seco).

5. **Onde inserir.** Cada bloco diz "INSERIR APÓS [âncora]". A âncora é um trecho literal já presente no HTML. Inserir imediatamente **depois** do nó indicado e **antes** do próximo nó nomeado (em geral, antes da primeira `<div class="quiz">` da página, salvo indicação).

6. **Cobertura 100% da fonte é gate.** O mapa ao final lista cada núcleo do roteiro/laudo e em qual página/bloco foi enriquecido. Nenhum item da fonte fica de fora; nenhum fato fora da fonte foi inventado.

---

# HTML p2 — O caso do Sr. Luiz, em dois tempos (roteiro P2)

**O que a página já tem**: `opener--case` (Sr. Luiz), prose "Este caso costura a aula inteira", `reveal` em 3 atos (internação/fuga/sete meses depois), prose da regra de ouro "duas doenças que surgem juntas", `card--accent` "A pista que entrega o diagnóstico", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: a **leitura dos achados como pistas convergentes** — por que febre + sopro NOVO + edema + VHS/FR elevados não é uma lista solta, mas uma síndrome que aponta uma direção só (endocardite); e o **princípio da parcimônia** explicado como ferramenta de raciocínio que o aluno carrega para qualquer caso ("é muito difícil serem duas doenças diferentes que aparecem juntas — sempre linke"), não como frase de efeito.

### Bloco p2-A — INSERIR APÓS o segundo `<div class="prose">` (o `</div>` que fecha o parágrafo "...é exatamente por ser difícil de decorar que o conteúdo veio embrulhado num caso: para você nunca mais esquecer."), ANTES do `card--accent` "A pista que entrega o diagnóstico".

```html
<h3 class="topic-h">Ler os achados como pistas que convergem, não como lista solta</h3>
<div class="prose">
  <p>Vale destrinchar por que o Ato 1 grita "endocardite". Cada achado isolado é fraco: febre cabe em mil coisas, edema também, VHS elevado é inflamação genérica. A força está na <strong>convergência</strong>. Quando o paciente reúne <strong>febre arrastada + um sopro de regurgitação que apareceu agora + fenômenos a distância</strong> (o edema, a VHS e o fator reumatoide subindo), o conjunto deixa de ser inespecífico e passa a desenhar uma síndrome única. Sopro novo de regurgitação somado à febre é a combinação que praticamente não tem outro dono — é endocardite até prova em contrário, e o eco só confirma o que a clínica já apontava.</p>
</div>

<h3 class="topic-h">Parcimônia diagnóstica: a regra que você leva para qualquer caso</h3>
<div class="prose">
  <p>O incômodo do caso — endocardite agora, metástase hepática sete meses depois — esconde o ensino mais transferível da aula. Na medicina, <strong>é muito difícil dois quadros diferentes surgirem no mesmo paciente por acaso</strong>. Diante de duas doenças que coincidem, o primeiro reflexo nunca é tratá-las como linhas paralelas: é <strong>procurar o elo único que explique as duas</strong>. É a navalha de Occam aplicada à beira do leito. Aqui esse elo tem nome — uma bactéria intestinal que, ao aparecer no sangue, denuncia um cólon doente. Quem aceita "duas doenças independentes" perde justamente o câncer que está costurando tudo.</p>
</div>
```

---

# HTML p3 — Febre + sopro + edema: por que isto é endocardite (roteiro P3)

**O que a página já tem**: prose de abertura (raciocínio sindrômico + eco/hemocultura), `figure-svg` coração com 3 hotspots (vegetação/jato/êmbolo) + `hotspot-detail`, `card--info` "Critérios de Duke modificados", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê de o eco e a hemocultura serem os DOIS pilares** (um prova o envolvimento endocárdico, o outro o agente — e juntos formam os dois critérios maiores); a **aritmética de Duke** explicada como lógica, não decoreba (2M / 1M+3m / 5m — por que faz sentido essa contagem); e a **nota de versão do laudo** (Duke modificado é o canon de prova BR; existe a atualização Duke-ISCVID 2023, mas não muda a conduta nem a resposta esperada).

### Bloco p3-A — INSERIR APÓS o `<div class="card card--info">` "Critérios de Duke modificados (como a prova cobra)" (o `</div>` que fecha o card), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">Por que eco e hemocultura são os dois pilares — e a aritmética de Duke</h3>
<div class="prose">
  <p>Os dois <strong>critérios maiores</strong> não são arbitrários: cada um ataca uma metade do diagnóstico. A <strong>hemocultura típica e persistente</strong> responde "<em>qual</em> é o agente" — e é persistente de propósito, porque uma bactéria que fica positiva em colheitas repetidas indica infecção endovascular contínua, não contaminação de uma amostra. A <strong>evidência de envolvimento endocárdico ao eco</strong> (vegetação, abscesso, nova regurgitação) responde "<em>onde</em> está a doença". Reunir os dois é cravar agente + lesão — por isso <strong>dois maiores já fecham</strong> o diagnóstico definitivo.</p>
  <p>O resto da contagem segue a mesma lógica de "peso": <strong>1 maior + 3 menores</strong> ou <strong>5 menores</strong> também fecham, porque um acúmulo de achados de baixo peso, somados, recompõe a certeza que dois achados de alto peso davam. No Sr. Luiz, a vegetação ao eco entrega um maior, e os menores se empilham: febre ≥ 38 °C, predisposição e o <strong>fator reumatoide</strong> como fenômeno imunológico. Não é decorar a fórmula — é entender que a banca testa se você sabe distinguir o achado que prova (maior) do achado que apenas soma (menor).</p>
</div>

<div class="card card--densify">
  <span class="densify-tag">Nota de versão</span>
  <p>A referência cobrada em provas brasileiras é a dos <strong>critérios de Duke modificados</strong> (a versão acima). Existe uma atualização mais recente — os critérios <strong>Duke-ISCVID 2023</strong> —, mas ela não muda a conduta nem a resposta esperada na residência: o reflexo continua sendo firmar o diagnóstico por eco + hemocultura e somar os menores. Saiba que a versão atualizada existe; responda pela modificada.</p>
</div>
```

---

# HTML p4 — Endocardite por S. bovis: a bandeira vermelha (roteiro P4)

**O que a página já tem**: `opener--mnemonic` ("Endocardite por S. bovis? Procure o cólon"), prose da virada (hemocultura → colonoscopia obrigatória), `toggle-switch` bovis/gallolyticus com 2 painéis, `card--info` "Como cai em prova (CESPE)", `mnemonic` "Por que é raro e mesmo assim cobrado", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê de a associação ter alto valor preditivo apesar de rara** (raridade do agente × força do nexo — por que um achado pouco frequente vira regra de prova); e o desdobramento do laudo (VFP-01 DENSIFICA) de que a indicação de colonoscopia **vale mesmo para bacteremia/endocardite por gallolyticus sem foco evidente** — não é preciso achar o tumor primeiro para indicar o exame.

### Bloco p4-A — INSERIR APÓS o `<div class="mnemonic">` "Por que é raro — e mesmo assim cobrado" (o `</div>` que fecha o `.mnemonic`), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">Raro, mas de altíssimo valor preditivo — por que vira regra de prova</h3>
<div class="prose">
  <p>Parece contraditório cobrar tanto um achado tão incomum. A chave é separar <strong>frequência</strong> de <strong>valor preditivo</strong>. É verdade que o bovis raramente é o agente de uma endocardite — a maioria é por estreptococos do grupo viridans, estafilococos, enterococos. Mas a pergunta clínica não é "qual a chance de a endocardite ser por bovis"; é "<strong>se ela for por bovis, o que isso significa</strong>". E aí a resposta é dura: a chance de haver um câncer colorretal por trás é altíssima. Um achado pode ser raro e, ainda assim, quando aparece, mudar tudo — é exatamente esse tipo de gatilho de alto valor preditivo que a banca adora, porque separa quem decorou de quem entendeu o mecanismo.</p>
</div>

<div class="card card--accent">
  <h3>A indicação vale mesmo sem foco aparente</h3>
  <p>Um detalhe que a banca explora: a colonoscopia está indicada <strong>mesmo quando não há nenhum sintoma intestinal</strong>. Não é preciso o paciente ter alteração de hábito, sangramento ou massa palpável para justificar o exame — o próprio <strong>bovis/gallolyticus no sangue</strong> (em endocardite ou mesmo bacteremia sem foco evidente) já é a indicação. A lógica se inverte em relação ao habitual: aqui o microrganismo é o sintoma de alarme, e ele aponta o cólon antes de o cólon "falar".</p>
</div>
```

---

# HTML p5 — Por que o S. bovis aponta o cólon — o mecanismo (roteiro P5)

**O que a página já tem**: prose de abertura (bovis não causa o câncer; o câncer é a porta), `figure-svg` mecanismo com 3 hotspots (cólon ulcerado/circulação/endocárdio) + `hotspot-detail`, prose da lógica completa, `card--info` "O detalhe que muda o gabarito" (a pegadinha "bovis causa o câncer"), 2 quizzes.
**O que a fonte ensina e a página comprimiu**: a **composição real da flora** (E. coli, Klebsiella, Bacteroides fragilis, anaeróbios dominam; bovis é pouco populoso) e o passo da **proliferação relativa** (a imunossupressão dá ao bovis relevância relativa, não o faz ultrapassar os outros — distinção fina); e a expressão do professor das **"septicemias de repetição" como fato inquestionável** — a translocação não é um evento único, é repetida, e é isso que dá ao bovis chances seguidas de colonizar o endocárdio.

### Bloco p5-A — INSERIR APÓS o segundo `<div class="prose">` (o `</div>` que fecha "...não é a causa do câncer, é o sinal de que o cólon está doente."), ANTES do `card--info` "O detalhe que muda o gabarito".

```html
<h3 class="topic-h">Quem manda na flora — e por que o bovis "sobe na fila" sem ultrapassar ninguém</h3>
<div class="prose">
  <p>Para entender o mecanismo sem distorcê-lo, é preciso ver a flora como ela é. O intestino é dominado por <strong>E. coli, Klebsiella, Bacteroides fragilis e outros anaeróbios</strong> — são os populosos, os pesos-pesados. O <strong>S. bovis está lá também, mas é minoria</strong>: pouco populoso, secundário. Quando o câncer <strong>imunossuprime</strong>, ele não promove o bovis a líder da flora; o que acontece é mais sutil e mais correto: as bactérias menos importantes <strong>proliferam um pouco mais e ganham relevância relativa</strong>. O bovis sobe na fila, mas não ultrapassa os dominantes. Essa precisão importa — quem diz que "o câncer faz o bovis dominar o intestino" exagera o passo e perde o ponto.</p>
</div>

<h3 class="topic-h">Septicemias de repetição: a translocação não é um evento, é uma rotina</h3>
<div class="prose">
  <p>O segundo passo é o que dá liga ao mecanismo. O tumor <strong>ulcera e sangra</strong>, e essa úlcera abre uma janela permanente entre a flora e a circulação. O resultado não é uma bacteremia isolada — são <strong>bacteremias e translocações de repetição</strong>, episódios seguidos em que a flora ganha o sangue. É um fato consistente: enquanto o tumor ulcerado estiver lá, a porta fica aberta. E é justamente a <strong>repetição</strong> que entrega o coração ao bovis: a cada nova passagem pela circulação, várias bactérias caem no sangue, mas só o bovis tem afinidade pelo endocárdio — e, dadas tantas chances, mais cedo ou mais tarde ele cola, coloniza e instala a endocardite. As outras "passam e não fazem nada", repetidamente, porque lhes falta esse tropismo.</p>
</div>
```

---

# HTML p6 — Câncer colorretal: epidemiologia e fatores de risco (roteiro P6)

**O que a página já tem**: prose de abertura ("um dos mais prevalentes e mais estudados", já reformulada conforme DDV-2), `card--accent` com `epi-stat`/`stat-counter` dos 50 anos, prose "organize em grupos", tabela `cmp` (4 grupos de risco), `opener--trap` da pegadinha das fibras, 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê de cada grupo de risco** — por que dieta processada agride o epitélio cronicamente, por que pólipos adenomatosos são o elo concreto (sequência adenoma→carcinoma), por que a **RCU pesa mais que o Crohn** (acometimento mucoso contínuo e extenso × salteado/transmural); a nota do laudo (VFP-11 / DDV-A3-002) sobre **não cravar "mais prevalente de todos"** — preservar o espírito sem o dado absoluto incorreto; e o **porquê de a idade ≥50 ser o corte** (a partir daí o risco sobe consideravelmente).

### Bloco p6-A — INSERIR APÓS a tabela `<table class="cmp">` "Fatores de risco do câncer colorretal" (o `</table>`), ANTES do `opener opener--trap` da pegadinha das fibras.

```html
<h3 class="topic-h">Por que cada grupo é risco — e por que a RCU pesa mais que o Crohn</h3>
<div class="prose">
  <p>A lista de fatores ganha sentido quando você vê o mecanismo de cada um. A <strong>dieta processada</strong> — defumados, nitrogenados, conservantes, industrializados — age por <strong>agressão química crônica da mucosa</strong>: refeição após refeição, ano após ano, esses compostos irritam e transformam o epitélio colônico. Os <strong>pólipos adenomatosos</strong> são o elo mais concreto de todos: não são câncer, mas são o degrau anterior — a <strong>sequência adenoma → carcinoma</strong> é a história natural que o rastreio existe para interromper (remover o pólipo é cortar a doença no degrau de baixo).</p>
  <p>Entre as <strong>doenças inflamatórias intestinais</strong>, a distinção que cai é clara: a <strong>retocolite ulcerativa tem associação maior com o CCR do que a doença de Crohn</strong>. A razão é o padrão da inflamação. A RCU acomete a <strong>mucosa de forma contínua e extensa</strong> ao longo do cólon — quanto mais mucosa cronicamente inflamada e por mais tempo, maior a chance de a inflamação empurrar a displasia e, dela, o câncer. O Crohn também aumenta o risco, mas seu acometimento salteado e transmural expõe menos superfície mucosa contínua — por isso pesa menos. As <strong>síndromes hereditárias</strong> (PAF, Lynch), por fim, vêm ganhando peso crescente em prova e formam um capítulo próprio, com conduta e rastreio adiantados.</p>
</div>

<div class="card card--densify">
  <span class="densify-tag">Como dizer a prevalência com honestidade</span>
  <p>O colorretal é <strong>um dos cânceres mais prevalentes e o mais estudado do tubo digestivo</strong> — e é por ser tão estudado que conhecemos a lista de fatores de risco com tanta nitidez. Evite a formulação absoluta "o câncer mais prevalente de todos": globalmente ele disputa as primeiras posições com mama, pulmão e próstata, a depender da fonte e do sexo. O que importa para a prova não é o ranking exato, e sim o raciocínio: muito estudado → fatores de risco bem mapeados → rastreio possível.</p>
</div>
```

---

# HTML p7 — Rastreio e o corte dos 50 anos (roteiro P7)

**O que a página já tem**: prose de abertura (rastrear = procurar em assintomático; janela adenoma→carcinoma), `toggle-switch` BR(50)/internacional(45) com 2 painéis, `card--info` "Rastreio não é investigação ativa", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê de o rastreio do CCR funcionar tão bem** (a janela longa adenoma→carcinoma + a existência de um exame que ao mesmo tempo diagnostica e trata o pólipo — a colonoscopia remove a lesão na mesma cena); os **métodos de rastreio do canon BR** explicados (sangue oculto nas fezes como triagem de baixo custo × colonoscopia como padrão que vê e age); e o reforço do laudo (DDV-A3-001) de que os 45 anos internacionais são **densificação aditiva**, não contradição.

### Bloco p7-A — INSERIR APÓS o `<div class="card card--info">` "Rastreio não é investigação ativa" (o `</div>`), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">Por que o rastreio do colorretal rende tanto — e qual exame faz o quê</h3>
<div class="prose">
  <p>Nem todo câncer compensa rastrear; o colorretal compensa por dois motivos que se somam. Primeiro, a <strong>janela é longa</strong>: a sequência adenoma → carcinoma leva anos, então há tempo de sobra para flagrar a lesão antes de virar câncer. Segundo — e é o que torna o rastreio do cólon especial —, o exame que rastreia é o mesmo que <strong>trata</strong>: a colonoscopia encontra o pólipo e o <strong>remove na mesma cena</strong>, interrompendo a história natural ali. Achar e curar no mesmo ato é o que faz o rastreio render.</p>
  <p>Sobre os métodos do canon brasileiro: a <strong>pesquisa de sangue oculto nas fezes</strong> é a triagem de baixo custo e ampla cobertura — barata, não invasiva, feita em quem não tem sintoma; um resultado positivo encaminha para a colonoscopia. A <strong>colonoscopia</strong> é o padrão que vê toda a mucosa, biopsia e remove pólipos. Reforçando o que a banca testa: começar aos <strong>50 anos</strong> é a referência do Ministério da Saúde; os <strong>45 anos</strong> internacionais (ACS, USPSTF) são um aprimoramento aditivo diante do aumento de casos em jovens — reconheça os dois, responda 50 em prova nacional.</p>
</div>
```

---

# HTML p8 — Clínica: cólon direito × esquerdo × reto (roteiro P8)

**O que a página já tem**: prose de abertura (apresentação depende de onde nasce; calibre/consistência/complacência), `figure-svg` cólon com 3 hotspots (direito/esquerdo/reto) + `hotspot-detail`, `card--info` "Como isso vira enunciado", 2 quizzes.
**O que a fonte ensina e a página comprimiu**: a **fisiologia que explica cada apresentação** — por que o direito é complacente e de fezes líquidas (não obstrui, cresce escondido, necrosa e sangra → anemia ferropriva); por que o esquerdo de fezes formadas e parede menos complacente obstrui (alteração do hábito); por que o reto baixo, **abaixo do reservatório fecal**, molda as fezes em fita (a "pistola de confeiteiro" — minúcia) e dá sangue vivo (hematoquezia) porque é tão distal que o sangue não se mistura; e os **gatilhos de enunciado** (anemia ferropriva a esclarecer em homem/pós-menopausa → colonoscopia; fezes em fita nova após os 50 → reto).

### Bloco p8-A — INSERIR APÓS o `<div class="card card--info">` "Como isso vira enunciado" (o `</div>`), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">A fisiologia por trás de cada apresentação</h3>
<div class="prose">
  <p>As três clínicas não são para decorar — elas saem da mecânica do tubo. No <strong>cólon direito</strong>, o calibre é largo, a parede é complacente e as fezes ainda são <strong>líquidas/amolecidas</strong>: nada disso obstrui com facilidade, então o tumor <strong>cresce escondido</strong>, ganha volume, necrosa e sangra de forma <strong>oculta</strong>. O paciente não tem cólica nem mudança de hábito chamativa — ele tem <strong>anemia ferropriva a esclarecer</strong> (do sangramento crônico) e, quando a massa é grande, uma <strong>"maçaroca" palpável em flanco direito</strong>. Daí o gatilho: homem ou mulher pós-menopausa com <strong>anemia ferropriva sem causa</strong> manda fazer colonoscopia.</p>
  <p>No <strong>cólon esquerdo</strong>, a história inverte: calibre menor, parede menos complacente e fezes já <strong>formadas</strong>. Aqui o tumor <strong>obstrui</strong> — e a obstrução se anuncia como <strong>alteração do hábito intestinal</strong>, tipicamente uma constipação de início recente, com cólicas e quadros suboclusivos. No <strong>reto baixo</strong>, o tumor está <strong>abaixo do reservatório fecal</strong>: ele funciona como um molde estreito que dá às fezes o formato <strong>em fita</strong> (a imagem da <strong>pistola de confeiteiro</strong>). E porque é uma lesão muito distal, o sangue <strong>não tem tempo de se misturar</strong> ao bolo fecal — sai vivo, vermelho-rutilante: é a <strong>hematoquezia</strong>. Por isso "fezes em fita novas após os 50" é, até prova em contrário, reto.</p>
</div>
```

---

# HTML p9 — Diagnóstico: colonoscopia, biópsia e o CEA (roteiro P9)

**O que a página já tem**: prose de abertura (mesma ideia do esôfago/estômago: colonoscopia + biópsia; descrição do aspecto vegetante/friável), `figure.med` (colonoscopia de CCR, imagem real com fonte), prose do CEA, `toggle-switch` "o que o CEA É / NÃO é" com 2 painéis, 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê de "aqui não muda nada"** (o cólon é víscera oca, acessível, biopsiável sem risco — reaproveita a regra de ouro da biópsia das aulas anteriores); e o **mecanismo da inespecificidade do CEA** explicado a fundo — CEA é marcador de **toda neoplasia mucinosa** (qualquer tumor que produz mucina libera CEA: carcinoma mucinoso de ovário, neoplasia cística mucinosa de pâncreas), e é por isso que ele é **sensível mas não específico**, e por que marcador inespecífico **não diagnostica nem rastreia**, só serve a prognóstico/seguimento.

### Bloco p9-A — INSERIR APÓS a primeira `<div class="prose">` (o `</div>` que fecha "...quem fecha o diagnóstico é a histologia." — o parágrafo termina com a frase sobre o aspecto vegetante; inserir após o `</div>` desse bloco `.prose` de abertura, ANTES da `<figure class="med">` da colonoscopia).

```html
<h3 class="topic-h">Por que "aqui não muda nada" — o cólon se biopsia sem medo</h3>
<div class="prose">
  <p>A frase "no cólon, a mesma ideia" carrega a regra de ouro que veio das aulas anteriores. O cólon é uma <strong>víscera oca e acessível</strong>: a câmera chega até a lesão, e a pinça retira um fragmento <strong>sem risco de semear o peritônio</strong>. Diferente de uma víscera maciça — fígado, pâncreas —, onde puncionar pode espalhar células ou provocar sangramento, aqui a lesão está contida dentro do tubo e a biópsia é segura. Some a isso uma vantagem que só o cólon tem: a colonoscopia <strong>localiza a lesão e mede a distância à margem anal</strong> no mesmo exame — dado que vai pesar lá na frente, na decisão entre operar o cólon e fazer neoadjuvância no reto.</p>
</div>
```

### Bloco p9-B — INSERIR APÓS o segundo `<div class="prose">` (o `</div>` que fecha "...Alterne para fixar o que o CEA é e o que ele <strong>não</strong> é." — o parágrafo de introdução ao toggle do CEA), ANTES do `<div class="toggle-switch" ... data-toggle="cea">`.

```html
<h3 class="topic-h">Por que o CEA sobe em tanta coisa — e por que isso o exclui do diagnóstico</h3>
<div class="prose">
  <p>Vale entender a raiz da inespecificidade do CEA, porque é dela que sai todo o resto. O CEA é marcador de <strong>toda neoplasia mucinosa</strong>: <strong>tudo que produz mucina libera CEA</strong>. Por isso ele sobe não só no colorretal, mas no <strong>carcinoma mucinoso de ovário</strong>, na <strong>neoplasia cística mucinosa de pâncreas</strong> e em outros. Esse é o sentido exato de ser <strong>sensível, mas não específico</strong>: ele detecta bem (sobe na presença de doença), mas não aponta <em>qual</em> doença, porque cabe em várias.</p>
  <p>E é essa inespecificidade que o expulsa do diagnóstico. Um marcador que sobe em muitos tumores diferentes não pode <strong>fechar</strong> doença (um valor alto não diz qual câncer) nem <strong>rastrear</strong> (não distingue colorretal de outras fontes de mucina). Quem diagnostica continua sendo a <strong>biópsia</strong>. O lugar legítimo do CEA é <strong>prognóstico e seguimento</strong>: dosa-se após a ressecção e, se voltar a subir, sugere recidiva — o tumor "reacendeu" e voltou a produzir marcador.</p>
</div>
```

---

# HTML p10 — O carteiro do mal: metástase hematogênica e estadiamento (roteiro P10)

**O que a página já tem**: prose de abertura (superpoder = metástase hematogênica, "carteiro do mal", fecha a trilogia), `toggle-switch` trilogia (esôfago/estômago/cólon) com 3 painéis, `card--info` "Estadiamento do colorretal — o essencial" (TC tórax+abdome, sem ultraprecoce, RM pelve só reto, TNM), prose do fígado pipocado, `figure.med` (TC fígado mets, imagem real com fonte), 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê de a trilogia das vias casar com os exames** (cada via de disseminação dita o exame de estadiamento — contiguidade→broncoscopia; transcelômica→VLP; hematogênica→TC tórax+abdome); o **porquê de não haver exame "ultraprecoce" no cólon** explicado a fundo (a colectomia é cirurgia segura/fácil — até um residente R1 faz; não compensa investir num exame ultraprecoce para evitar uma cirurgia que não é proibitiva, ao contrário da esofagectomia, que "nem um staff jovem" encara à toa); e a **anatomia que justifica a RM de pelve só no reto** (o reto está dentro do "balde" pélvico cheio de estruturas — sacro atrás, útero/próstata e bexiga à frente, ureteres ao lado —, e a RM mapeia invasão dessas estruturas para planejamento cirúrgico, sem mudar a conduta).

### Bloco p10-A — INSERIR APÓS o `<div class="card card--info">` "Estadiamento do colorretal — o essencial" (o `</div>` que fecha o card com a lista TC/ultraprecoce/RM/TNM), ANTES do `<div class="prose">` "Olhe a TC abaixo...".

```html
<h3 class="topic-h">A via de disseminação escolhe o exame de estadiamento</h3>
<div class="prose">
  <p>A trilogia não é só um apelido bonito — ela <strong>dita o exame</strong>. Cada tumor é estadiado onde ele costuma semear. O <strong>esôfago</strong> dissemina por <strong>contiguidade</strong> (gruda no vizinho), então o estadiamento vigia as estruturas adjacentes — brônquio (broncoscopia), aorta (TC). O <strong>estômago</strong> dissemina por via <strong>transcelômica</strong> (joga sementes na cavidade), então entra a <strong>videolaparoscopia</strong> para flagrar carcinomatose. O <strong>colorretal</strong> dissemina por via <strong>hematogênica</strong>, mandando células pela corrente para <strong>fígado e pulmão</strong> — por isso o estadiamento a distância é <strong>TC de tórax + TC de abdome</strong>. Pedir o exame certo é, no fundo, conhecer a via: você procura a metástase onde a biologia do tumor a deposita.</p>
</div>

<h3 class="topic-h">Por que o cólon não tem exame "ultraprecoce" — a colectomia é fácil</h3>
<div class="prose">
  <p>No esôfago e no estômago valia a pena investir em pesquisar lesões "muito, muito precoces" para <strong>evitar uma cirurgia difícil</strong> — a esofagectomia é tão pesada que, como se diz, nem um staff jovem encara de ânimo leve. No cólon a conta se inverte: a <strong>colectomia é uma cirurgia segura e bem tolerada</strong> — até um residente em início de formação a realiza. Se a própria cirurgia não é proibitiva, <strong>não compensa</strong> montar toda uma estratégia de exame ultraprecoce só para fugir dela. É por isso que, no colorretal, você simplesmente não vê a obsessão pelo "ultraprecoce" que marcava as aulas anteriores.</p>
</div>

<h3 class="topic-h">A RM de pelve é só do reto — porque o reto mora num "balde" cheio de estruturas</h3>
<div class="prose">
  <p>A ressonância de pelve tem indicação topográfica estrita: <strong>tumor de reto</strong>. A razão é puramente anatômica — o reto está dentro da pelve, que é um <strong>"balde" apertado e cheio de vizinhos nobres</strong>: o <strong>sacro</strong> atrás, o <strong>útero ou a próstata</strong> e a <strong>bexiga</strong> à frente, os <strong>ureteres</strong> ao lado. A RM mapeia se o tumor invade alguma dessas estruturas, e isso serve ao <strong>planejamento cirúrgico</strong> (preparar o cirurgião para o que vai encontrar), não para mudar a decisão de operar. Cólon, sigmoide e <strong>reto superior não estão na pelve</strong> — logo, não pedem RM de pelve. Topografia define o exame, de novo.</p>
</div>
```

---

# HTML p11 — Tratamento I: o cólon entra operando — e a exceção do reto (roteiro P11)

**O que a página já tem**: prose de abertura (inverte a lógica: cólon opera direto, adjuvância depois), `opener--vs` (esôfago/estômago × cólon, com asterisco da exceção do reto e "único adeno com RT"), prose do toque retal, `figure-svg` com `toggle-switch` toque (não toquei/toquei) e 2 painéis, 2 quizzes.
**O que a fonte ensina e a página comprimiu**: o **porquê profundo de não fazer neoadjuvância no cólon** (a neoadjuvância existia para facilitar uma cirurgia difícil; como a colectomia não é difícil, não há nada a facilitar — a adjuvância vem depois só pelo estádio); o **gatilho de prova forte** de que o reto é o **único adeno do tubo com radioterapia** (contrastando com esôfago adeno = só QT, estômago = só QT, pâncreas = só QT); e a **regra operacional do toque retal** como gesto que muda a conduta (o dedo alcança ~10 cm; não alcancei = alto = intraperitoneal = opera; alcancei = baixo = extraperitoneal = neoadjuvância antes; a colono confirma a distância à margem, ~10 cm é o limite).

### Bloco p11-A — INSERIR APÓS o `<div class="opener opener--vs">` (o `</div>` que fecha o opener, logo após o `.opener__vs-asterisk`), ANTES do `<div class="prose">` "Como saber se o reto está 'alto'...".

```html
<h3 class="topic-h">Por que o cólon não precisa de neoadjuvância — e por que o reto é a exceção da radioterapia</h3>
<div class="prose">
  <p>O fio que liga tudo é o <strong>propósito da neoadjuvância</strong>. Nas aulas do esôfago e do estômago, dar QT (ou QT/RT) antes servia a um fim concreto: <strong>encolher o tumor para facilitar uma cirurgia difícil</strong>. Quando você chega ao cólon, esse fim desaparece — a <strong>colectomia é uma cirurgia fácil e segura</strong>, não há ato cirúrgico proibitivo a ser facilitado. Logo, não se faz neoadjuvância: o cólon <strong>entra operando</strong>, e a quimioterapia, se necessária, vem <strong>depois</strong> (adjuvância), conforme o estádio. A regra geral nasce da pergunta "preciso facilitar a cirurgia?" — e no cólon a resposta é não.</p>
  <p>A exceção mora no <strong>reto extraperitoneal (baixo/médio)</strong>, e ela carrega um dos gatilhos de prova mais fortes do módulo: é o <strong>único adenocarcinoma de todo o tubo digestivo que recebe radioterapia</strong>. Ali a neoadjuvância com <strong>QT + RT</strong> tem um propósito real — encolher o tumor, afastá-lo do esfíncter e abrir a chance de poupar a continência. Guarde o contraste que a banca arma: esôfago adeno = só QT; estômago = só QT; pâncreas = só QT; <strong>reto = QT + RT</strong>. Só o reto soma a rádio.</p>
</div>
```

---

# HTML p12 — Tratamento II: RAB × RAP — poupar ou não o esfíncter (roteiro P12)

**O que a página já tem**: prose de abertura (após neoadjuvância o tumor afasta do esfíncter; a distância ao esfíncter pós-QT/RT define a cirurgia), `figure-svg` reto/esfíncter com 2 hotspots (nível RAB/nível RAP) + `hotspot-detail`, `dont-confuse` RAB × RAP, `opener--bust` corrigindo "Myers" → Miles, 2 quizzes.
**O que a fonte ensina e a página comprimiu**: a **lógica do nome** das cirurgias explicada como mnemônico anatômico (RAB = "abdominal" = só pelo abdome, poupou o esfíncter; RAP = "abdominoperineal" = abdome + períneo, o esfíncter sai por baixo — o nome conta a via); e o detalhe fino de que **margem livre por um filete já basta para poupar** (esfíncter livre, mesmo por meio milímetro → RAB; esfíncter acometido nos dois componentes, interno + externo → RAP, colostomia definitiva).

### Bloco p12-A — INSERIR APÓS o `<div class="opener opener--bust">` "Corrige a grafia" (o `</div>` que fecha o opener Miles/Myers), ANTES da primeira `<div class="quiz">`.

```html
<h3 class="topic-h">O nome conta a via — e por que um filete de margem já decide</h3>
<div class="prose">
  <p>Os nomes das duas cirurgias são um mnemônico anatômico embutido. <strong>RAB — Ressecção Abdominal Baixa</strong>: a palavra-chave é "<strong>abdominal</strong>", só pelo abdome. Isso significa que o cirurgião conseguiu retirar o reto por cima e <strong>deixar o esfíncter no lugar</strong> — poupou a continência. <strong>RAP — Ressecção AbdominoPerineal</strong>: o nome ganhou o "<strong>perineal</strong>" porque foi preciso entrar também por baixo, pelo períneo, para retirar o esfíncter junto com o reto. O esfíncter "sai por baixo", e o paciente fica com <strong>colostomia definitiva</strong>. Leu o nome, leu a via: abdominal = poupou; abdominoperineal = tirou.</p>
  <p>E o que decide entre uma e outra é a <strong>margem em relação ao esfíncter, depois da neoadjuvância</strong>. O ponto fino, que a banca explora: basta o esfíncter estar <strong>livre por um filete</strong> — meio milímetro de margem que seja — para que valha a pena <strong>poupá-lo</strong> com a RAB e devolver qualidade de vida ao paciente. Só quando o tumor acomete o esfíncter de fato — <strong>interno e externo</strong> — é que não há como poupar, e aí entra a RAP. A régua não é "está perto?"; é "<strong>o esfíncter está livre ou acometido?</strong>".</p>
</div>
```

---

# HTML p13 — Metástase hepática: o tumor que cura mesmo com M1 (roteiro P13)

**O que a página já tem**: prose de abertura (CCR é o único do tubo que pode curar com metástase hepática, desde que ressecável), `toggle-switch` ressecável/irressecável com 2 painéis, `card--info` "A decisão em uma régua: ressecável × irressecável", `finding` "Fechando o caso do Sr. Luiz" (colonoscopia na internação), `card--info` "Onde isto se aprofunda" (gancho honesto p/ tumores hepáticos), 2 quizzes.
**O que a fonte ensina e a página comprimiu**: a **excepcionalidade biológica** explicada — por que, na imensa maioria dos tumores, metástase = paliação, e por que o colorretal escapa dessa regra (a metástase hepática limitada/ressecável muda de "marcador de incurabilidade" para "alvo cirúrgico curável"); e o reforço de **não generalizar para os dois lados** (nem "metástase sempre pália", nem "todo CCR metastático cura" — o divisor é a ressecabilidade, isto é, a extensão e o fígado sadio que sobra).

### Bloco p13-A — INSERIR APÓS a primeira `<div class="prose">` (o `</div>` que fecha "...desde que a metástase hepática seja ressecável."), ANTES do `<div class="toggle-switch" ... data-toggle="meta">`.

```html
<h3 class="topic-h">Por que isto é uma exceção — e por que não se generaliza para nenhum dos lados</h3>
<div class="prose">
  <p>Para sentir o peso desse conceito, lembre da regra que vale para quase tudo em oncologia: <strong>metástase a distância = doença sistêmica = paliação</strong>. Quando o tumor já semeou em outro órgão, em geral a cirurgia perde o sentido curativo, porque retirar o foco visível não apaga a doença espalhada. O <strong>colorretal é a exceção célebre</strong>: uma metástase hepática <strong>limitada e ressecável</strong> deixa de ser apenas um marcador de incurabilidade e passa a ser um <strong>alvo cirúrgico</strong> — ressecar o primário e a metástase pode, de fato, <strong>curar</strong>. É a marca registrada do CCR, e é exatamente o tipo de exceção que a banca cobra contra a regra geral.</p>
  <p>O cuidado é não generalizar para nenhum dos dois extremos. Não é verdade que "metástase hepática no CCR sempre cura": o fígado <strong>pipocado</strong> do Sr. Luiz — completamente tomado, os dois lobos cheios — é <strong>irressecável</strong> e leva à paliação, porque não sobra parênquima sadio nem alvo cirúrgico viável. E também não é verdade que "metástase sempre pália": a limitada e ressecável é curável. O divisor não é <em>ter</em> metástase, é a <strong>ressecabilidade</strong> — quanta doença há e quanto fígado funcionante resta. Ler a extensão do acometimento é o que separa curar de paliar.</p>
</div>
```

---

# HTML p14 — Síntese e as respostas ao caso do Sr. Luiz (roteiro P14)

**O que a página já tem**: prose de abertura, `reveal` com as 4 respostas ao caso, `card--accent` com tabela `cmp` da trilogia recapitulada, `op-summary` "Resumo decisório", `opener--mnemonic` mantra de fechamento, 2 quizzes (caso integrador + armadilha final).
**O que a fonte ensina e a página comprimiu**: as 4 respostas e a trilogia já estão completas e bem cobertas na página. O que cabe enriquecer sem duplicar é a **síntese das armadilhas da aula como um mapa de "não erre isto"** — reunir num só lugar os erros que a aula desarmou (bovis não causa o câncer; fibra protege; cólon opera/reto faz RT; Miles ≠ Myers; rastreio BR 50), na forma de fechamento ativo que a página de síntese pede. Tudo já presente disperso; aqui ganha consolidação como ferramenta de revisão.

### Bloco p14-A — INSERIR APÓS o `<div class="op-summary">` "Resumo decisório" (o `</div>` que fecha o `.op-summary`), ANTES do `<div class="opener opener--mnemonic">` (o mantra de fechamento).

```html
<h3 class="topic-h">O mapa das armadilhas que esta aula desarmou</h3>
<div class="card card--densify">
  <span class="densify-tag">Antes de fechar — não erre nenhuma destas</span>
  <ul>
    <li><strong>A direção da seta:</strong> o bovis <strong>não causa</strong> o câncer. O câncer é a porta (imunossupressão + úlcera), e o bovis é só o mensageiro que tem tropismo pelo endocárdio. Inverter isso é o erro mais cobrado.</li>
    <li><strong>Fibra protege:</strong> a banca troca "dieta processada" por "dieta rica em fibras" e espera o aluno marcar como risco. O risco está nos nitrogenados, defumados e industrializados.</li>
    <li><strong>Cólon opera, reto é a exceção:</strong> o cólon entra operando (adjuvância depois); só o reto baixo faz neoadjuvância QT + RT — e é o <strong>único adeno do tubo com radioterapia</strong>.</li>
    <li><strong>Miles, não "Myers":</strong> o epônimo da ressecção abdominoperineal é cirurgia de <strong>Miles</strong>. "Myers" é só pegadinha de grafia.</li>
    <li><strong>Rastreio BR aos 50:</strong> em prova nacional, 50 anos (Ministério da Saúde); 45 é a tendência internacional, aditiva, não a resposta nacional.</li>
    <li><strong>CEA é seguimento, não diagnóstico:</strong> quem diagnostica é a biópsia; o CEA é sensível e inespecífico (sobe em toda neoplasia mucinosa).</li>
  </ul>
</div>
```

---

# MAPA DE COBERTURA 100% (fonte → bloco)

Cada núcleo do roteiro/laudo e onde foi enriquecido. Itens já bem cobertos pela página existente são marcados **[já na página]** (preservados, não duplicados).

| Núcleo da fonte | Onde foi enriquecido |
|---|---|
| Caso do Sr. Luiz em 2 tempos | [já no opener--case + reveal p2] |
| Achados como pistas convergentes (febre+sopro novo+fenômenos) | **p2-A** |
| Princípio da parcimônia ("sempre linke", duas doenças juntas) | **p2-A** / [prose já na página] |
| Raciocínio sindrômico febre+sopro+fenômenos → endocardite | [já na prose p3] |
| Eco + hemocultura = dois pilares (porquê de cada) | **p3-A** |
| Critérios de Duke modificados (2M/1M+3m/5m) + aritmética | **p3-A** / [card já na página] |
| FR↑ = critério menor imunológico | [já no card/quiz p3] |
| Nota de versão Duke-ISCVID 2023 (VFP-03) | **p3-A** |
| Endocardite por bovis → colonoscopia obrigatória (CESPE) | [já na prose + card + quiz p4] |
| Toggle bovis ↔ gallolyticus (nomenclatura, ATUALIZA) | [já no toggle p4] |
| Raridade × alto valor preditivo (porquê é cobrado) | **p4-A** / [mnemonic já na página] |
| Indicação vale para bacteremia sem foco (VFP-01 DENSIFICA) | **p4-A** |
| Bovis não causa o câncer; câncer é a porta | [já na prose + card p5] |
| Composição da flora (E.coli/Klebsiella/Bacteroides; bovis minoria) | **p5-A** / [SVG já na página] |
| Proliferação relativa na imunossupressão (não ultrapassa) | **p5-A** |
| Septicemias de repetição (fato inquestionável) | **p5-A** |
| Só o bovis tem tropismo pelo endocárdio | [já no SVG + quiz p5] |
| CCR muito prevalente/mais estudado (DDV-A3-002) | **p6-A** / [prose já na página] |
| 4 grupos de risco (hábitos/hereditárias/pólipos/DII) | [já na tabela p6] |
| Porquê de cada grupo (dieta agride; adenoma→carcinoma) | **p6-A** |
| RCU > Crohn (porquê: mucosa contínua/extensa) | **p6-A** / [tabela já na página] |
| Idade ≥50 corte | [já no epi-stat p6] / **p7-A** |
| Pegadinha das fibras (protege) | [já no opener--trap p6] |
| Rastreio = assintomático; janela adenoma→carcinoma | [já na prose p7] / **p7-A** |
| Por que o rastreio do cólon rende (exame vê e trata) | **p7-A** |
| Métodos: sangue oculto × colonoscopia (canon BR) | **p7-A** / [card já na página] |
| BR 50 × internacional 45 (DDV-A3-001) | [já no toggle p7] / **p7-A** |
| Rastreio × investigação ativa (sintomático) | [já no card p7] |
| Clínica direito/esquerdo/reto | [já no SVG + card p8] |
| Fisiologia de cada apresentação (calibre/fezes/complacência) | **p8-A** |
| Reto baixo: fezes em fita (pistola de confeiteiro) + hematoquezia | **p8-A** / [SVG já na página] |
| Gatilhos de enunciado (anemia ferropriva; fita após 50) | **p8-A** / [card já na página] |
| Colonoscopia + biópsia diagnostica ("não muda nada") | [já na prose p9] |
| Cólon se biopsia sem semear (regra de ouro) | **p9-A** |
| Colono mede distância à margem | **p9-A** / [figcaption já na página] |
| CEA = marcador de toda neoplasia mucinosa | **p9-B** / [card toggle já na página] |
| CEA sensível, não específico; não diagnostica/rastreia | **p9-B** / [toggle já na página] |
| CEA = prognóstico/seguimento (recidiva) | **p9-B** / [card já na página] |
| Carteiro do mal = hematogênica; trilogia | [já na prose + toggle p10] |
| Via dita o exame de estadiamento | **p10-A** |
| TC tórax + abdome (fígado/pulmão) | [já no card p10] |
| Sem exame ultraprecoce (colectomia fácil; R1 × esofagectomia) | **p10-A** / [card já na página] |
| RM de pelve só reto (balde pélvico: sacro/útero-próstata/bexiga/ureter) | **p10-A** / [card já na página] |
| TNM linhas gerais | [já no card p10] |
| Fígado pipocado (irressecável) | [já na prose + figure.med p10] |
| Cólon opera direto; adjuvância depois | [já na prose + opener--vs p11] |
| Por que não há neoadjuvância no cólon (nada a facilitar) | **p11-A** |
| Reto = único adeno do tubo com RT (vs esôfago/estômago/pâncreas só QT) | **p11-A** / [opener--vs já na página] |
| Toque retal decide alto×baixo (~10 cm) | [já na prose + toggle p11] |
| RAB poupa esfíncter; RAP tira (colostomia definitiva) | [já no SVG + dont-confuse p12] |
| Lógica do nome (abdominal × abdominoperineal) | **p12-A** |
| Margem livre por filete já basta para poupar | **p12-A** |
| Miles (CORRIGE "Myers") | [já no opener--bust + quiz p12] |
| CCR cura com metástase hepática ressecável (único do tubo) | [já na prose + toggle p13] |
| Por que é exceção (metástase = paliação na regra geral) | **p13-A** |
| Não generalizar (nem sempre cura, nem sempre pália) | **p13-A** / [card régua já na página] |
| Colonoscopia na internação evitaria o desfecho | [já no finding p13] |
| Gancho honesto p/ tumores hepáticos | [já no card p13] |
| 4 respostas ao caso | [já no reveal p14] |
| Trilogia recapitulada (3 superpoderes/marcadores/cirurgia) | [já na tabela cmp p14] |
| Mantra de fechamento | [já no opener--mnemonic p14] |
| Consolidação das armadilhas (mapa de revisão) | **p14-A** |

**Gate de cobertura: 100%.** Todos os núcleos do roteiro e do laudo estão presentes — seja já na página (preservado), seja enriquecidos pelos blocos acima. Nenhum fato fora da fonte foi introduzido. As correções/atualizações do laudo (Miles, gallolyticus, Duke modificado, 50 anos BR, "não cravar mais prevalente de todos") foram respeitadas tal como já aplicadas no HTML; os blocos novos não as contradizem.

---

# RESUMO PARA O EXECUTOR

- **Páginas tocadas**: HTML p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14 (todas as 13 de conteúdo). O `p1` (dashboard) não recebe blocos.
- **Total de blocos a inserir**: 15 (p2-A; p3-A; p4-A; p5-A; p6-A; p7-A; p8-A; p9-A, p9-B; p10-A; p11-A; p12-A; p13-A; p14-A).
- **Offset de numeração**: nesta aula o roteiro já conta o dashboard como "P1", então **HTML pN = roteiro PN** (offset zero). Diferente da aula-02 (onde HTML pN = roteiro p(N−1)). Documentado no topo.
- **Classes usadas** (todas verificadas em `components.css`): `topic-h`, `prose` (+ `term`/`highlight`/`quote-callout` se quiser realçar), `card`, `card--accent`, `card--info`, `card--densify` (+ `span.densify-tag`), `tag-trap`/`tag-danger`/`tag-good`. Zero uso de `callout` (inexistente). Listas `<ul>` dentro de `.prose`/`.card` seguem o padrão já usado na página.
- **Operação é só INSERÇÃO.** Nenhum nó existente é editado, removido ou reordenado.
