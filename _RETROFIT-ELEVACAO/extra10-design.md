# DESIGN — Aula Extra 10 · Tumores do Mediastino

> Prompt-final página a página para o Executor. Chassi-ouro: `aulas/aula-extra-07-ca-bexiga/index.html`.
> Fonte integral: `transcricoes/extra10-mediastino.txt` (~280 linhas). Voz Bauer, zero metalinguagem.
> Densidade nível mains. Preservação 100% do professor.

---

## 0. METADADOS DA AULA (para hub + head)

- **Título:** Tumores do Mediastino
- **Título no card:** `Tumores do mediastino — estatística de prova + timoma a fundo`
- **Sigla (2 letras):** `TM`
- **Slug / pasta:** `aula-extra-10-mediastino`
- **data-aula:** `extra-10-mediastino`
- **Nº de páginas:** **9**
- **Chip de status:** `Disponível` (`lesson__chip--ready`)
- **Tags do card:** `9 páginas` · `18 questões` · `4 SVG interativos · 2 mapas · 3 imagens reais`
- **theme-color / título head:** seguir padrão `#07171a` / `Tumores do Mediastino — Aula Extra 10 — Cirurgia Oncológica 2 Bauer`

### Descrição para o card do hub (`lesson__desc`)
> Um tema curto e cirúrgico de prova: o mediastino quase nunca cobra conduta ou estadiamento — cobra **estatística**. A aula se organiza ao redor de uma única pergunta de banca repetida à exaustão: **qual o tumor mais comum de cada compartimento**. O mediastino dividido em três (anterossuperior, médio, posterior) · os **quatro "T" do mediastino anterior** (timoma, teratoma, tireoide/bócio mergulhante, terrível linfoma) e por que o quinto "T" do aneurisma é uma armadilha · os **cistos de duplicação** do médio (broncogênico, pericárdico, entérico) · os **tumores neurogênicos** do posterior (schwannoma > neurofibroma) · o ranking de ouro: **timoma o mais comum de todos, linfoma o segundo** · e o aprofundamento no timoma — a relação com a **miastenia gravis** como única clínica, a **classificação de Masaoka** (I-II bom × III-IV ruim), a diferença fina entre invasão por **contiguidade (grau III)** e **implante à distância (grau IVA)**, e quando a cirurgia basta (R0 + timoma benigno) versus quando entra adjuvância (carcinoma tímico, R1/R2, grau III-IV).

### Sigla no hub
`TM` (mesmo padrão `CB`, `lesson__sigla`).

---

## 1. CORREÇÕES MÉDICAS SINALIZADAS (erros óbvios de transcrição/ASR)

O Summary AI transcreveu nomes próprios de forma corrompida. Corrigir **silenciosamente** no produto (não comentar no texto do aluno), mas registrado aqui para o Executor:

| Na transcrição | Forma correta (usar no produto) | Natureza |
|---|---|---|
| "Mazaocla" | **Masaoka** | Classificação de estadiamento do timoma. ASR. |
| "shivaloma" | **schwannoma** | Tumor neurogênico (neurilemoma). ASR. |
| "miastenia graves" | **miastenia gravis** | Síndrome paraneoplásica do timoma. ASR. |
| "externo" (linha 60, "afastador por dentro do externo") | **esterno** | Contexto cirúrgico do timo transcervical. ASR. |

Nenhum erro de **conteúdo clínico** do professor a corrigir — a aula é coerente. Apenas grafia de nomes próprios.

Nota de fidelidade: o professor diz "timoma é uma doença benigna" (linha 272) em contraste com carcinoma tímico. Preservar como ele falou — é a lógica dele de prognóstico (benigno = só cirurgia), não afirmação de que timoma nunca é maligno. Manter a oposição **timoma × carcinoma tímico** exatamente como ele a usa.

---

## 2. MAPA DE EXTRAÇÃO → PÁGINAS (cobertura 100%)

| Bloco da transcrição (linhas) | Conteúdo | Página(s) |
|---|---|---|
| 8–33 | A tese: prova cobra estatística, não conduta; pergunta-tipo por compartimento | P1 |
| 26–41 | Anatomia: mediastino em 3; anterior se continua com superior → anterossuperior | P2 |
| 44–104 | Os quatro "T" do mediastino anterior; timo transcervical; bócio mergulhante; o falso 5º T (aneurisma) | P3 |
| 107–116 | Mediastino médio: cistos de duplicação (broncogênico, pericárdico, entérico) | P4 |
| 119–128 | Mediastino posterior: neurogênicos (schwannoma > neurofibroma) + linfoma onipresente | P5 |
| 131–158 | O ranking de ouro: timoma 1º de todos, linfoma 2º; mais comum por compartimento | P6 |
| 161–172 | Timoma: única clínica = miastenia gravis; timectomia melhora a miastenia | P7 |
| 173–230 | Masaoka como guia terapêutico; bom (I-II) × ruim (III-IV); graus I, IIA/B, III por contiguidade | P8 (parte) |
| 231–281 | Grau III × IVA (contiguidade × implante); IVB metástase; R0+timoma só cirurgia × carcinoma tímico/R1-R2 → adjuvância | P9 |

Compartimentação: P8 cobre a lógica Masaoka + graus I/II/III; P9 cobre a distinção fina III×IV e a regra terapêutica final. Quebra justificada: a diferença contiguidade × implante é o ponto de impacto máximo da aula e merece página própria (densidade alta).

---

## 3. DISTRIBUIÇÃO DE ABERTURAS (anti-monotonia)

9 páginas → máx ⌈9/3⌉ = **3 por estratégia**, máx 2 consecutivas.

| Página | Estratégia | Justificativa |
|---|---|---|
| P1 | **E1 — Pergunta central** | A aula inteira nasce de "o que a banca cobra aqui?". Pergunta organiza tudo. |
| P2 | **E7 — Comparação chocante** | Anterior × médio × posterior; a fusão anterior+superior é o contraste que abre. |
| P3 | **E6 — Mnemônico-âncora** | Os quatro "T" são o mnemônico-mãe da aula; ancorar primeiro. |
| P4 | **E1 — Pergunta central** | "Por que justo cistos no médio?" parte do raciocínio embriológico. |
| P5 | **E4 — Achado típico / pegadinha** | Schwannoma > neurofibroma é o detalhe-pegadinha que cai. |
| P6 | **E5 — Meta + checklist** | Página-síntese: o ranking que o aluno precisa monitorar. |
| P7 | **E3 — Caso clínico em abertura** | A miastenia gravis pede vinheta clínica. |
| P8 | **E8 — Erro comum desmontado** | "Masaoka é difícil" é o mito; desmontar com a lógica bom/ruim. |
| P9 | **E7 — Comparação chocante** | Contiguidade × implante — o par em tensão é o coração da página. |

Distribuição: E1 ×2 (P1,P4) · E7 ×2 (P2,P9) · E3,E4,E5,E6,E8 ×1. Nenhuma >3. Consecutivas: nenhuma repetição adjacente. OK.

---

## 4. CONVENÇÕES DE CHASSI (recap para o Executor)

- Estrutura por página: `<article class="page" data-strategy="...">` → `page-tag` → `chipset` (2-3 `chip--topic`) → opener (variante por estratégia) → `page-title` → blocos `topic-h` + `prose` → figuras (`figure-svg` hotspot e/ou `figure.med`) → asides (`op-summary`, `dont-confuse`, `mnemonic`, `board-wants`) → `quiz` (2 perguntas) → `page-nav`.
- **Destaque inline:** `hl-good` (verde = bom/ressecável/bom prognóstico), `hl-bad` (vermelho = ruim/irressecável/implante/mau prognóstico), `hl-warn` (âmbar = cautela/pegadinha). Aplicar ao **termo**, nunca à frase. 2-4 por página.
- **Quiz:** 2 perguntas/página. `quiz__justification` refuta CADA alternativa errada. `quiz__distractor` explica por que cair em cada isca. Gabarito em `<strong>`.
- **Piso visual:** ≥1 SVG-hotspot + ≥1 imagem real por página. Onde não-fotografável, marcar `data-piso-img-exempt="..."` e justificar.
- Menu lateral (`menu-panel__list`) e contador `N / 9` atualizados.

---

# 6. ROTEIRO PÁGINA POR PÁGINA

---

## P1 — A pergunta que o mediastino sempre faz
**Estratégia: E1 — Pergunta central** · *justificativa:* a aula existe por causa de uma única pergunta de banca; abrir com ela alinha a expectativa de raciocínio.
**Itens preservados:** linhas 8–33.
**Slug-título menu:** "A pergunta de sempre"

**Chipset (chip--topic):** `Prova cobra estatística` · `Mais comum por compartimento` · `Acesso direto`

**Opener (opener--question):**
> *Pergunta central:* Por que, no mediastino, decorar conduta e estadiamento quase não vale ponto — e saber **quem é o mais comum** vale a questão inteira?

**Tópicos visíveis (topic-h + prose):**

1. **topic-h:** "O mediastino não cobra conduta — cobra ranking"
   - Prosa: a maioria dos temas cirúrgicos cobra estadiamento e conduta. O mediastino é a exceção que assusta porque parece pedir muito e pede pouco. Em acesso direto, a banca quer **estatística**: qual o tumor mais comum de cada compartimento. Estagiamento? Conduta detalhada? Raramente. Quem estuda mediastino tentando dominar conduta de tudo gasta energia onde a prova não pisa. `hl-good` em **estatística**.

2. **topic-h:** "A pergunta-tipo, palavra por palavra"
   - Prosa: o enunciado clássico chega quase sempre numa de quatro formas — mais comum **de todos**, mais comum do **anterior**, do **médio**, do **posterior**. Reconhecer o formato já entrega o caminho: a resposta é sempre um nome de uma lista curta que cabe na palma da mão. A aula toda é montar essas listas e cravar o topo de cada uma.
   - Plantar gancho: o mais comum de todos é o **timoma** — e por ser o mais cobrado, ganha aprofundamento próprio (Masaoka, miastenia) ao final.

**hl:** `hl-good` em "estatística", `hl-warn` em "Estagiamento? Conduta?" (o que NÃO cobra).

**BRIEF VISUAL:**
- **SVG (figure-svg hotspot):** "O cardápio da banca" — quatro botões/cards interativos representando as quatro perguntas-tipo ("mais comum de TODOS", "anterior", "médio", "posterior"). Ao focar/clicar cada card, revela a resposta-âncora oculta (timoma / cisto broncogênico / neurogênicos). Hotspot no próprio card-pergunta. `aria-expanded` por card. Ensina o formato da prova antes do conteúdo.
- **Imagem real (figure.med):** TC de tórax axial normal mostrando o mediastino em corte, para ancorar visualmente "onde fica o mediastino". Achado: silhueta mediastinal entre os pulmões. Fonte CC (Radiopaedia / Wikimedia, TC torácica normal). Caption com `Achado:` + `attr` + fonte.
  - *Se imagem não disponível com licença limpa:* `data-piso-img-exempt` não se aplica — TC de mediastino normal é fartamente fotografável e licenciável; manter como imagem real.

**Asides:** `op-summary` (Resumo operacional): "No mediastino, a prova pergunta 'quem é o mais comum?'. Sua tarefa é ter o ranking de cada compartimento na ponta da língua."

**QUIZ P1:**
1. (MCQ) Em provas de acesso direto, o que o mediastino mais cobra?
   - A) Conduta cirúrgica detalhada por tumor
   - B) **Estatística — qual o tumor mais comum de cada compartimento** ✓
   - C) Estadiamento TNM completo
   - D) Diagnóstico diferencial por imagem
   - *Justification:* **Gabarito B.** O padrão de prova do mediastino é estatístico: mais comum de cada compartimento e de todos. Não é conduta (A) — quase não se cobra a técnica cirúrgica de cada tumor aqui. Não é estadiamento (C) — só o timoma tem estadiamento (Masaoka) relevante, e mesmo assim é exceção. Não é diferencial por imagem (D) — a banca entrega o compartimento e pede o nome, não pede você achar a massa.
   - *Distractor:* Cair em A/C é projetar o padrão de outros temas cirúrgicos (onde conduta/estadiamento dominam) sobre um tema que foge a essa regra.
2. (V/F) "A pergunta mais frequente sobre mediastino em prova é o tumor mais comum por compartimento." → **Verdadeiro**
   - *Justification:* **Verdadeiro.** É exatamente o formato dominante. As variações pedem o mais comum de todos, ou do anterior/médio/posterior. Marcar Falso ignora a tese central do tema.

---

## P2 — Três andares (e por que o de cima some no nome)
**Estratégia: E7 — Comparação chocante** · *justificativa:* o mediastino se divide em três, mas o "superior" se funde ao "anterior" — esse contraste é o gancho.
**Itens preservados:** linhas 26–41.
**Slug-título menu:** "Os três compartimentos"

**Chipset:** `Anterior · médio · posterior` · `Anterossuperior` · `Mesmas patologias`

**Opener (opener--contrast / E7):**
> Tem quem divida o mediastino em **quatro** (anterior, superior, médio, posterior). Tem quem divida em **três**. As duas estão certas — e dá para não decorar nenhuma das brigas. O segredo é entender por que o "superior" não merece linha própria.

**Tópicos visíveis:**

1. **topic-h:** "O mediastino em três andares"
   - Prosa: a divisão de trabalho é simples — **anterior, médio, posterior**. Cada um tem suas estruturas e, por consequência, seus tumores típicos. É a partir das estruturas de cada andar que se deduz quem mora ali. (Plantar: estrutura → tumor é o método da aula inteira.)

2. **topic-h:** "Por que 'anterossuperior'"
   - Prosa: o anterior não para na altura do coração — ele **sobe**, pega a parte mais alta do tórax. Por isso muita gente prefere o nome **anterossuperior**. Quem separa "anterior" de "superior" não erra, mas cria duas caixas para guardar a mesma coisa: as patologias do ântero são as mesmas do superior. Tratar os dois juntos é mais econômico e não perde nada. `hl-good` em **anterossuperior**.
   - Detalhe que volta adiante: é justamente porque o superior se continua com o anterior que o **bócio mergulhante** (que desce pela fúrcula) cai no compartimento anterior.

**hl:** `hl-good` em "anterossuperior".

**BRIEF VISUAL:**
- **SVG (figure-svg hotspot):** "Os três andares do mediastino" — recorte sagital estilizado do tórax (perfil) com três zonas coloridas: anterossuperior (frente+topo), médio (centro, ao redor do coração/traqueia), posterior (atrás, ao longo da coluna). Cada zona é hotspot: ao focar, ilumina o compartimento e lista suas estruturas-âncora (anterossuperior → timo/tireoide; médio → coração/traqueia/esôfago; posterior → cadeia neural/coluna). Mostra graficamente o anterior subindo e fundindo com o superior. Este é o SVG anatômico-mãe da aula.
- **Imagem real (figure.med):** TC de tórax com sobreposição/diagrama dos compartimentos OU radiografia de tórax PA mostrando alargamento mediastinal, para ancorar a anatomia real. Achado: limites mediastinais. Fonte CC. (Alternativa: corte sagital de RM torácica.)

**Asides:** `op-summary` (Por que importa na prática): "Saber onde cada estrutura mora é o que deixa você deduzir o tumor sem decorar lista — e entender por que o bócio cai no anterior."

**QUIZ P2:**
1. (MCQ) Por que o compartimento "superior" costuma ser fundido ao "anterior" (anterossuperior)?
   - A) Porque o superior não existe anatomicamente
   - B) **Porque o anterior se continua para cima e as patologias dos dois são as mesmas** ✓
   - C) Porque o superior pertence ao posterior
   - D) Porque o coração ocupa todo o superior
   - *Justification:* **Gabarito B.** O anterior sobe e ocupa a parte alta do tórax; as patologias do ântero e do superior coincidem, então juntá-los evita duplicar a mesma lista. Não é que o superior "não existe" (A) — existe, só não justifica caixa separada. Não pertence ao posterior (C) — o posterior é o andar de trás, ao longo da coluna. O coração é estrutura do **médio**, não do superior (D).
   - *Distractor:* D explora confusão de andares — o coração puxa o raciocínio para o médio, não para o superior.
2. (Lacuna) "O bócio mergulhante desce pela fúrcula e cai no compartimento ______ porque o superior se continua com ele." → **anterior (anterossuperior)**
   - *Justification:* É a consequência direta da fusão anterior+superior. Tireoide é estrutura cervical/superior; quando mergulha, aterrissa no território anterossuperior. Responder "posterior" inverte a anatomia.

---

## P3 — Os quatro "T" da frente
**Estratégia: E6 — Mnemônico-âncora** · *justificativa:* os quatro "T" são o mnemônico-mãe; ancorar primeiro, explicar depois.
**Itens preservados:** linhas 44–104.
**Slug-título menu:** "Os quatro T"

**Chipset:** `Timoma · Teratoma` · `Tireoide · Terrível linfoma` · `O falso 5º T`

**Opener (opener--mnemonic / E6):**
> **Âncora da frente:** Timoma · Teratoma · Tireoide · **Terrível** linfoma — os quatro "T" do mediastino anterior. Toda estrutura de peso ali tem T no nome. Decore os quatro; o quinto é cilada.

**Tópicos visíveis:**

1. **topic-h:** "Quatro T, deduzidos das estruturas da frente"
   - Prosa por T:
     - **Timo:** mora no alto, bem na parte superior. Tão alto e anterior que a cirurgia é **transcervical** — incisão cervical pela **fúrcula**, dissecção dos planos, afastador autoestático por dentro do **esterno**, levanta, e opera tudo por cima. A localização (alto + anterior) **define a via de acesso**. `hl-good` em **transcervical**.
     - **Teratoma:** pode aparecer no anterior, mas também no médio e até no **posterior** — é o T menos territorial. Entra na lista pelo mnemônico, mas não é exclusivo da frente.
     - **Tireoide (bócio mergulhante):** tireoide muito grande vira bócio; o bócio pode **mergulhar** na fúrcula e descer ao mediastino superior — que se continua com o anterior. Daí o T de tireoide. `hl-good` em **mergulhante**.
     - **Terrível linfoma:** o "terrível" é só para encaixar no mnemônico. O linfoma aparece em **qualquer** compartimento — anterior, médio e posterior — e é o segundo mais prevalente de todos, atrás só do timoma.

2. **topic-h:** "O quinto T é uma armadilha"
   - Prosa: há quem force um quinto T — **tenebroso aneurisma**. Evite. A aorta e o arco aórtico ficam **posteriormente**; guardar aneurisma como "T do anterior" confunde mais do que ajuda. Fique com os **quatro** T. `hl-bad` em **tenebroso aneurisma**, `hl-warn` em "posteriormente".

**hl:** `hl-good` "transcervical", `hl-good` "mergulhante", `hl-bad` "tenebroso aneurisma", `hl-warn` "qualquer compartimento" (linfoma).

**BRIEF VISUAL:**
- **SVG (figure-svg hotspot):** "Os quatro T" — quatro cápsulas/pílulas anatômicas dispostas sobre um esquema do mediastino anterior. Cada pílula (Timoma, Teratoma, Tireoide/bócio, Terrível linfoma) é hotspot: ao focar, mostra a estrutura de origem e uma nota (timo→via transcervical; tireoide→mergulha pela fúrcula; linfoma→onipresente). Uma quinta pílula riscada/desabilitada ("aneurisma — posterior, não conte") aparece em vermelho como o anti-T. Hotspot na pílula.
- **Imagem real (figure.med):** TC de tórax mostrando massa de mediastino anterior (timoma ou massa anterior), achado: massa anterossuperior bem delimitada. Fonte CC (Radiopaedia/Wikimedia). Caption com achado + fonte. (Alternativa real: peça cirúrgica de timoma OU bócio mergulhante em TC.)

**Asides:**
- `mnemonic`: "Quatro T da frente: **Timoma, Teratoma, Tireoide, Terrível linfoma**. O 5º (aneurisma) é cilada — a aorta fica atrás."
- `dont-confuse`: **Tireoide = bócio mergulhante** (desce pela fúrcula, cai no anterior) × **Aneurisma de aorta** (fica no posterior, não é T do anterior).

**QUIZ P3:**
1. (MCQ) Qual NÃO faz parte dos quatro "T" do mediastino anterior?
   - A) Timoma
   - B) Teratoma
   - C) **Aneurisma de aorta** ✓
   - D) Terrível linfoma
   - *Justification:* **Gabarito C.** O aneurisma é o "quinto T" forçado e deve ser descartado: a aorta e o arco ficam no **posterior**, então classificá-lo como T anterior é erro. Timoma (A), teratoma (B) e terrível linfoma (D) são T legítimos da frente. Tireoide/bócio completaria o quarteto.
   - *Distractor:* C é a isca-clássica de quem decorou "cinco T". O professor recomenda explicitamente abandonar o quinto justamente porque induz a esse erro de compartimento.
2. (MCQ) A via de acesso transcervical (pela fúrcula) ao timo se explica porque o timo é:
   - A) Pequeno e profundo
   - B) **Alto e anterior** ✓
   - C) Posterior e baixo
   - D) Intrapericárdico
   - *Justification:* **Gabarito B.** Por ser alto e anterior, dá para alcançá-lo por uma incisão cervical com afastador por dentro do esterno — sem abrir o tórax. Não é "profundo" (A) — é superficial e alto, daí a via cervical. Não é posterior/baixo (C) — isso pediria outra abordagem. Não é intrapericárdico (D) — o timo é extrapericárdico, anterossuperior.

---

## P4 — O andar dos cistos
**Estratégia: E1 — Pergunta central** · *justificativa:* "por que justo cistos no médio?" parte do raciocínio embriológico, não da definição.
**Itens preservados:** linhas 107–116.
**Slug-título menu:** "Os cistos do médio"

**Chipset:** `Cistos de duplicação` · `Broncogênico · pericárdico · entérico` · `Embriológicos`

**Opener (opener--question / E1):**
> *Pergunta central:* Por que o compartimento médio é, de longe, o andar dos **cistos** — e não dos tumores sólidos?

**Tópicos visíveis:**

1. **topic-h:** "Estruturas do médio → cistos de duplicação"
   - Prosa: o médio guarda **coração, traqueia, brônquios, esôfago** — as estruturas que se formam de tubos embrionários. Qualquer falha de duplicação desses tubos vira um **cisto**. Daí o nome **cisto de duplicação**: cada um remete a uma estrutura de origem. `hl-good` em **cisto de duplicação**.

2. **topic-h:** "Os três cistos, cada um com seu endereço"
   - Prosa:
     - **Cisto broncogênico** — das vias respiratórias (traqueia/brônquios). É o **mais comum** do médio. `hl-good` em **broncogênico** (será a resposta de prova).
     - **Cisto pericárdico** — cardíaco, ligado ao saco pericárdico.
     - **Cisto entérico** — do esôfago / trato digestivo (a porção mais anterior do esôfago passa pelo médio).
   - Fechar: a banca pode escrever "cistos de duplicação" em vez de listar os três — mas, pedindo o **mais comum**, a resposta é o **broncogênico**. E o linfoma, de novo, pode aparecer aqui também.

**hl:** `hl-good` "cisto de duplicação", `hl-good` "broncogênico", `hl-warn` "linfoma" (onipresente).

**BRIEF VISUAL:**
- **SVG (figure-svg hotspot):** "Três tubos, três cistos" — esquema do mediastino médio com as três estruturas tubulares (traqueia/brônquio, pericárdio/coração, esôfago) desenhadas, cada uma com um cisto associado. Hotspot em cada estrutura: ao focar, nomeia o cisto correspondente (broncogênico / pericárdico / entérico) e destaca o broncogênico como "o mais comum". Ensina a dedução estrutura→cisto.
- **Imagem real (figure.med):** TC de tórax com cisto broncogênico de mediastino médio (lesão cística bem delimitada, hipodensa, peritraqueal). Achado: massa cística homogênea no médio. Fonte CC (Radiopaedia/Wikimedia). Caption + fonte.

**Asides:** `op-summary` (Resumo operacional): "Médio = andar dos cistos de duplicação. Mais comum: **broncogênico**. Pense nas estruturas tubulares (traqueia, coração, esôfago) e o cisto se deduz sozinho."

**QUIZ P4:**
1. (MCQ) O tumor/lesão mais comum do mediastino médio é:
   - A) Timoma
   - B) **Cisto broncogênico** ✓
   - C) Schwannoma
   - D) Cisto pericárdico
   - *Justification:* **Gabarito B.** Entre os cistos de duplicação do médio, o broncogênico é o mais frequente. Timoma (A) é do anterior (e o mais comum de todos, mas não do médio). Schwannoma (C) é do posterior. Cisto pericárdico (D) existe no médio, mas é menos comum que o broncogênico.
   - *Distractor:* A é a isca de quem mistura "mais comum de todos" (timoma) com "mais comum do médio". São perguntas diferentes — atenção ao compartimento citado no enunciado.
2. (MCQ) Os cistos de duplicação do mediastino médio se explicam por:
   - A) Degeneração de linfonodos
   - B) **Falha embriológica de duplicação de estruturas tubulares (vias aéreas, pericárdio, esôfago)** ✓
   - C) Metástase de tumores torácicos
   - D) Infecção crônica do esôfago
   - *Justification:* **Gabarito B.** São lesões embriológicas: cada cisto remete a um tubo (broncogênico → vias aéreas; pericárdico → coração; entérico → esôfago). Não vêm de linfonodo (A) — isso seria linfadenopatia/linfoma. Não são metástase (C) — são congênitos/de duplicação. Não são infecciosos (D) — a origem é do desenvolvimento, não inflamatória.

---

## P5 — O andar de trás é neural
**Estratégia: E4 — Achado típico / pegadinha** · *justificativa:* "schwannoma > neurofibroma" é o detalhe-pegadinha que a banca cobra.
**Itens preservados:** linhas 119–128.
**Slug-título menu:** "Neurogênicos do posterior"

**Chipset:** `Tumores neurogênicos` · `Schwannoma > neurofibroma` · `Linfoma onipresente`

**Opener (opener--pitfall / E4):**
> *Pegadinha:* O posterior é "dos neurogênicos" — fácil. A armadilha é a sub-pergunta: entre schwannoma e neurofibroma, **qual o mais comum**? Já caiu em prova, e a resposta surpreende quem chuta.

**Tópicos visíveis:**

1. **topic-h:** "Posterior = estruturas neurais → tumores neurogênicos"
   - Prosa: atrás, ao longo da coluna, correm as cadeias e gânglios nervosos. Por isso o posterior é o território dos **tumores neurogênicos** — a principal etiologia daquele andar. Mais uma vez, a lógica é estrutura → tumor. `hl-good` em **tumores neurogênicos**.

2. **topic-h:** "Schwannoma na frente do neurofibroma"
   - Prosa: os dois protagonistas são **schwannoma** e **neurofibroma**. Dos dois, o mais comum — e o que já apareceu em prova — é o **schwannoma**. É o tipo de detalhe fino que separa o aluno que "sabe que é neural" do que crava a resposta. `hl-good` em **schwannoma**.
   - Fechar com o coringa: e o **linfoma**, de novo, pode comparecer no posterior também — ele não respeita compartimento.

**hl:** `hl-good` "tumores neurogênicos", `hl-good` "schwannoma", `hl-warn` "linfoma" (volta pela 3ª vez).

**BRIEF VISUAL:**
- **SVG (figure-svg hotspot):** "A cadeia neural do posterior" — corte do mediastino posterior mostrando a coluna e a cadeia simpática paravertebral, com dois nódulos rotulados (schwannoma e neurofibroma). Hotspot em cada nódulo: schwannoma destaca-se como "mais comum / já caiu"; neurofibroma como o segundo. Ensina a origem neural e o ranking interno.
- **Imagem real (figure.med):** TC ou RM de tórax com tumor neurogênico de mediastino posterior (massa paravertebral bem definida, podendo alargar o forame). Achado: massa posterior paravertebral. Fonte CC (Radiopaedia/Wikimedia). Caption + fonte.

**Asides:**
- `board-wants` (O que a banca quer): "Posterior → neurogênicos. E o mais comum dos neurogênicos é o **schwannoma** (acima do neurofibroma). Esse é o detalhe que a questão usa para separar."
- `op-summary` (Resumo operacional): "Posterior = neural. Schwannoma lidera. Linfoma pode aparecer em qualquer andar — inclusive aqui."

**QUIZ P5:**
1. (MCQ) Massa de mediastino posterior em adulto — a principal etiologia a considerar é:
   - A) Cisto broncogênico
   - B) **Tumor neurogênico (schwannoma)** ✓
   - C) Timoma
   - D) Bócio mergulhante
   - *Justification:* **Gabarito B.** O posterior é o andar das estruturas neurais (cadeia simpática paravertebral), então tumor neurogênico é a aposta — e o schwannoma é o mais comum deles. Cisto broncogênico (A) é do médio. Timoma (C) e bócio mergulhante (D) são do anterior.
   - *Distractor:* A e D são iscas de compartimento trocado — quem não fixou qual andar é "dos cistos" e qual é "neural" mistura tudo.
2. (V/F) "Entre os tumores neurogênicos do mediastino posterior, o neurofibroma é mais comum que o schwannoma." → **Falso**
   - *Justification:* **Falso.** É o inverso: o **schwannoma** é o mais comum e o que já apareceu em prova; o neurofibroma vem atrás. Marcar Verdadeiro inverte exatamente o detalhe que a banca cobra para distinguir o aluno que sabe o ranking interno.

---

## P6 — O ranking de ouro
**Estratégia: E5 — Meta + checklist** · *justificativa:* página-síntese; o aluno precisa monitorar se domina o ranking inteiro.
**Itens preservados:** linhas 131–158.
**Slug-título menu:** "O ranking de ouro"

**Chipset:** `Timoma = 1º de todos` · `Linfoma = 2º de todos` · `Mais comum por compartimento`

**Opener (opener--checklist / E5):**
> Ao final desta página você crava, sem hesitar:
> ☐ O tumor mais comum **de todos** o mediastino
> ☐ O **segundo** mais comum de todos
> ☐ O mais comum de **cada** compartimento (anterior · médio · posterior)

**Tópicos visíveis:**

1. **topic-h:** "O mais comum de todos: timoma. O segundo: linfoma"
   - Prosa: a pergunta que mais aparece — "qual o tumor mais comum **de todos** do mediastino?" — tem resposta única: **timoma**. E quando a banca pede o **segundo** mais comum de todos, é o **linfoma** — aquele coringa que apareceu em todos os compartimentos ao longo da aula. Esses dois números são os mais valiosos do tema. `hl-good` em **timoma**, `hl-good` em **linfoma**.

2. **topic-h:** "O ranking por compartimento, em ordem"
   - Prosa (tabela mental, em prosa densa):
     - **Anterossuperior → timoma** (o mais comum de todos também mora aqui).
     - **Médio → cisto broncogênico** (a banca pode escrever "cistos de duplicação"; pedindo o mais comum, é o broncogênico).
     - **Posterior → tumores neurogênicos** (schwannoma à frente).
   - Fechar: essas três respostas + os dois rankings globais (1º timoma, 2º linfoma) são o conteúdo inteiro que a prova cobra. O resto é dedução de estrutura.

**hl:** `hl-good` "timoma", `hl-good` "linfoma", `hl-good` "broncogênico".

**BRIEF VISUAL:**
- **SVG (figure-svg hotspot):** "Pódio do mediastino" — duas camadas. (1) Pódio global: timoma no 1º lugar, linfoma no 2º. (2) Três cartões-compartimento (anterior/médio/posterior) cada um com seu campeão (timoma / broncogênico / neurogênicos). Hotspot em cada lugar do pódio e em cada cartão: ao focar, revela o nome e um micro-lembrete. Este SVG é o resumo visual da aula — o mapa-síntese de prova.
- **Imagem real (figure.med):** *Exceção justificada* — `data-piso-img-exempt="ranking-estatistico-nao-fotografavel"`. Um ranking estatístico não tem correlato fotográfico único. Substituir por **mapa** (segunda peça gráfica): um quadro-resumo dos cinco fatos (1º, 2º, anterior, médio, posterior) em layout de "cola de prova", distinto do pódio interativo. Marcar a isenção no `<article>` como nas páginas-epidemiologia do chassi bexiga (P1).

**Asides:** `op-summary` (Resumo operacional): "Cinco fatos cravam o tema: **1º timoma**, **2º linfoma**, anterior **timoma**, médio **broncogênico**, posterior **neurogênico**."

**QUIZ P6:**
1. (MCQ) O tumor mais comum de TODO o mediastino é:
   - A) Linfoma
   - B) **Timoma** ✓
   - C) Cisto broncogênico
   - D) Schwannoma
   - *Justification:* **Gabarito B.** Timoma é o mais comum de todos os tumores mediastinais. Linfoma (A) é o **segundo** — isca clássica de quem inverte a ordem do pódio. Cisto broncogênico (C) lidera só o médio. Schwannoma (D) lidera só o posterior.
   - *Distractor:* A é a armadilha número um: linfoma aparece tanto na aula (em todos os compartimentos) que parece o campeão — mas é vice. Quem confunde "onipresente" com "mais comum" cai aqui.
2. (MCQ) Se a banca pede o SEGUNDO tumor mais comum de todo o mediastino, a resposta é:
   - A) Teratoma
   - B) Cisto pericárdico
   - C) **Linfoma** ✓
   - D) Timoma
   - *Justification:* **Gabarito C.** O segundo lugar do pódio global é o linfoma, atrás só do timoma. Teratoma (A) e cisto pericárdico (B) não disputam o topo. Timoma (D) é o primeiro, não o segundo — marcar D é não ler a palavra "segundo" no enunciado.

---

## P7 — O timoma só fala uma língua
**Estratégia: E3 — Caso clínico em abertura** · *justificativa:* a miastenia gravis é clínica e pede vinheta de paciente.
**Itens preservados:** linhas 161–172.
**Slug-título menu:** "Timoma e miastenia"

**Chipset:** `Única clínica = miastenia gravis` · `Geralmente assintomático` · `Timectomia melhora a miastenia`

**Opener (opener--case / E3):**
> Massa anterossuperior achada num exame de rotina, paciente sem queixa torácica. A única pista clínica que o levou ao médico foi uma **fraqueza muscular flutuante**, pior ao fim do dia — pálpebra caindo, dificuldade para mastigar. O timoma não doía. A miastenia, sim.

**Tópicos visíveis:**

1. **topic-h:** "A única clínica do timoma"
   - Prosa: na imensa maioria, o timoma é **silencioso** — a pessoa não sente nada. A única manifestação clínica que ele costuma dar é a **miastenia gravis**, doença autoimune muito associada ao timoma. Fora isso, ele é achado de imagem. `hl-good` em **miastenia gravis**.

2. **topic-h:** "Retirar o timo melhora a miastenia"
   - Prosa: a associação é tão forte que, no paciente com timoma **e** miastenia, **operar o timoma** (timectomia) tende a **melhorar** a miastenia. Esse é o elo que a prova adora: timoma ↔ miastenia gravis, e a timectomia como gesto que beneficia os dois. `hl-good` em **timectomia**, `hl-good` em **melhora**.

**hl:** `hl-good` "miastenia gravis", `hl-good` "timectomia", `hl-good` "melhora".

**BRIEF VISUAL:**
- **SVG (figure-svg hotspot):** "O elo timoma ↔ miastenia" — esquema da junção neuromuscular com anticorpos anti-receptor de acetilcolina de um lado e a massa tímica do outro, ligados por uma seta de "associação autoimune". Hotspot: (1) na massa tímica → "única clínica costuma ser a miastenia"; (2) na junção neuromuscular → "fraqueza flutuante, pior ao fim do dia"; (3) na seta → "timectomia melhora a miastenia". Ensina o mecanismo do elo sem texto solto.
- **Imagem real (figure.med):** foto clínica de **ptose palpebral / fácies miastênica** (sinal típico da miastenia gravis), achado: ptose bilateral assimétrica. Fonte CC (Wikimedia, ptose miastênica). Caption + fonte. *Alternativa:* TC de timoma em paciente miastênico.

**Asides:**
- `op-summary` (Por que importa na prática): "Achou massa anterossuperior + fraqueza flutuante? Pense timoma com miastenia gravis — e a timectomia trata os dois."
- `dont-confuse`: **Timoma silencioso** (a regra — achado de imagem) × **Timoma com miastenia** (a única clínica que costuma dar).

**QUIZ P7:**
1. (MCQ) A única manifestação clínica que o timoma costuma causar é:
   - A) Hemoptise
   - B) **Miastenia gravis** ✓
   - C) Síndrome de veia cava superior isolada como regra
   - D) Disfagia progressiva
   - *Justification:* **Gabarito B.** O timoma é tipicamente silencioso; quando dá clínica, é via miastenia gravis, doença autoimune fortemente associada. Hemoptise (A) é doença de via aérea/pulmão, não do timo. Síndrome de veia cava (C) pode ocorrer em massas grandes, mas não é "a clínica típica do timoma" cobrada aqui. Disfagia (D) sugere envolvimento esofágico, não a apresentação clássica.
   - *Distractor:* C e D são iscas "anatômicas" — plausíveis para qualquer massa torácica grande, mas o ponto da aula é a associação específica com a miastenia.
2. (V/F) "No paciente com timoma e miastenia gravis, a timectomia tende a melhorar a miastenia." → **Verdadeiro**
   - *Justification:* **Verdadeiro.** A associação é tão estreita que retirar o timo melhora a miastenia — um dos elos mais cobrados do tema. Marcar Falso ignora justamente o motivo de a timectomia ser indicada também pelo lado neurológico.

---

## P8 — Masaoka não é difícil: é metade e metade
**Estratégia: E8 — Erro comum desmontado** · *justificativa:* "Masaoka é uma classificação complicada de decorar" é o mito; desmontar com a lógica bom/ruim.
**Itens preservados:** linhas 173–230.
**Slug-título menu:** "Masaoka — a lógica"

**Chipset:** `I-II = bom prognóstico` · `III-IV = mau prognóstico` · `Guia terapêutico`

**Opener (opener--mythbust / E8):**
> Muita gente trava achando que Masaoka é uma classificação cheia de detalhes para decorar. Não é. Ela se resolve com uma pergunta só: **o que o tumor está invadindo dá para ressecar ou não?** Tudo o mais sai daí.

**Tópicos visíveis:**

1. **topic-h:** "Para que serve Masaoka: guiar o tratamento"
   - Prosa: a classificação de **Masaoka** existe para **guiar a terapêutica**, não para enfeitar laudo. A regra-mãe: se o timoma invade estruturas **ressecáveis** (tranquilas), bom prognóstico; se invade estrutura **braba**, mau prognóstico. Bom prognóstico = só **timectomia**. Mau = tira o que dá + **adjuvância**. `hl-good` em **ressecáveis**, `hl-bad` em **braba**.

2. **topic-h:** "Metade boa, metade ruim"
   - Prosa: a chave que desmonta o medo — graus **I e II = bom**; graus **III e IV = ruim**. Metade e metade. `hl-good` em **I e II**, `hl-bad` em **III e IV**.

3. **topic-h:** "Os graus de baixo (I e II), em detalhe"
   - Prosa:
     - **Grau I:** tumor **encapsulado**, não invade nada.
     - **Grau II:** invasão mínima, dividida em IIA e IIB. **IIA** — invasão **microscópica** da cápsula, só vista no histopatológico. **IIB** — invasão **macroscópica** de coisas que você enxerga: gordura ao redor do timo, um pedacinho de pleura. O ponto: tudo isso ainda **dá para ressecar**. Pleura, gordura peritímica — tira-se. Por isso I e II são bons. `hl-good` em **encapsulado**, `hl-good` em "dá para ressecar".

**hl:** `hl-good` "ressecáveis"/"encapsulado"/"I e II", `hl-bad` "braba"/"III e IV".

**BRIEF VISUAL:**
- **SVG (figure-svg hotspot):** "A régua de Masaoka" — uma barra horizontal de 4 segmentos (I · II · III · IV) com a metade esquerda (I-II) verde e a direita (III-IV) vermelha, e um divisor central rotulado "ressecável → bom × braba → ruim". Hotspot em cada grau: I → "encapsulado"; II → "IIA micro / IIB macro, ainda ressecável"; III → "invade vizinho por contiguidade"; IV → "implante/metástase". Ao focar I-II, ilumina verde + "só timectomia"; III-IV, vermelho + "tira o que dá + adjuvância". (Os detalhes finos de III×IV são aprofundados na P9 — aqui o SVG mostra a régua inteira como mapa.)
- **Imagem real (figure.med):** TC ou peça de timoma encapsulado (grau I/II) bem delimitado, achado: massa anterossuperior de margens definidas. Fonte CC. Caption + fonte. *Alternativa:* histopatologia de timoma com invasão capsular.

**Asides:**
- `mnemonic`: "**I e II = bom** (só timectomia). **III e IV = ruim** (cirurgia + adjuvância). Metade e metade."
- `board-wants` (O que a banca quer): "Masaoka guia conduta. A pergunta real por trás de qualquer grau: **o que ele invade dá para ressecar?** Se sim, bom; se não, ruim."

**QUIZ P8:**
1. (MCQ) A lógica central da classificação de Masaoka no timoma é:
   - A) Contar o número de mitoses
   - B) **Graus I-II têm bom prognóstico (ressecável → só cirurgia); III-IV têm mau prognóstico (→ adjuvância)** ✓
   - C) Medir o tamanho em centímetros
   - D) Avaliar apenas a presença de miastenia
   - *Justification:* **Gabarito B.** Masaoka separa em metade boa (I-II, ressecável, só timectomia) e metade ruim (III-IV, adjuvância). Não conta mitoses (A) — isso é grau histológico, outra coisa. Não é por tamanho em cm (C) — é por invasão/ressecabilidade. Não é pela miastenia (D) — a síndrome neurológica não entra no estadiamento.
   - *Distractor:* A e C são iscas de quem importa critérios de outros tumores (mitose, tamanho) para um sistema que, aqui, é sobre invasão e ressecabilidade.
2. (MCQ) No grau II de Masaoka, a diferença entre IIA e IIB é:
   - A) IIA tem metástase; IIB não
   - B) **IIA = invasão microscópica (só no histopatológico); IIB = invasão macroscópica visível (gordura/pleura), ainda ressecável** ✓
   - C) IIA é benigno; IIB é maligno
   - D) IIA invade pericárdio; IIB invade pulmão
   - *Justification:* **Gabarito B.** IIA é invasão microscópica da cápsula, percebida só no histopatológico; IIB é invasão macroscópica que se vê (gordura peritímica, pleura), mas ambas ainda são ressecáveis — por isso o grau II continua "bom". Metástase (A) é grau IVB, não II. A divisão não é benigno×maligno (C). Pericárdio/pulmão por contiguidade já é grau III (D).
   - *Distractor:* D é a isca-ponte para a P9 — invasão de pericárdio/órgão vizinho não é grau II; é onde começa a "metade ruim".

---

## P9 — Contiguidade × implante: a diferença que vale a questão
**Estratégia: E7 — Comparação chocante** · *justificativa:* o par grau III (colou e invadiu) × grau IVA (tem um pedaço solto à distância) é o coração da aula; tensão que se resolve ao longo da página.
**Itens preservados:** linhas 231–281.
**Slug-título menu:** "Contiguidade × implante"

**Chipset:** `Grau III = contiguidade` · `Grau IVA = implante` · `R0 + timoma → só cirurgia`

**Opener (opener--contrast / E7):**
> Duas frases parecem iguais e valem prognósticos opostos. "Invadiu a pleura **colando** nela" é uma coisa. "Tem um pedaço do tumor **solto** na pleura, separado do principal" é outra, muito pior. A questão inteira mora nessa diferença — e muita gente confunde grau III com grau IVA aqui.

**Tópicos visíveis:**

1. **topic-h:** "Grau III: invasão por contiguidade"
   - Prosa: no grau **III**, o tumor pega órgãos vizinhos **por contiguidade** — estava colado, invadiu o que estava do lado (pericárdio, pulmão, grandes vasos). É grave porque nem sempre dá para ressecar o órgão inteiro. Conduta: resseca o timo, tira o que dá do órgão, e completa com **adjuvância**. `hl-bad` em "por contiguidade".

2. **topic-h:** "Grau IVA: implante à distância (o salto de comportamento)"
   - Prosa: aqui está a virada. Grau **IVA** não é "colou e invadiu" — é ter um **pedaço do tumor solto**, um **implante** pleural ou pericárdico **à distância**, separado da massa principal. Implantar à distância revela comportamento muito mais **maligno**, e o prognóstico é **pior** que o do grau III. A diferença não é o órgão atingido — pode ser a mesma pleura — é o **modo**: contiguidade (III) × implante (IVA). `hl-bad` em **implante**, `hl-bad` em "muito mais maligno".

3. **topic-h:** "Grau IVB e a regra terapêutica final"
   - Prosa:
     - **IVB:** metástase à distância. Fecha a metade ruim.
     - **Síntese de conduta:** I e II = bons. III e IV = ruins, mais agressivos. Mas há uma condição extra para o "só cirurgia resolveu": precisa ser **I ou II**, com **ressecção R0** (sem margem micro ou macroscópica comprometida) **e** histopatológico de **timoma** (benigno). Se vier **carcinoma tímico** no histopatológico, ou ressecção **R1/R2** (deixou tumor), ou grau **III/IV** — entra **quimiorradioterapia adjuvante**. `hl-good` em **R0**, `hl-good` em **timoma**, `hl-bad` em **carcinoma tímico**, `hl-bad` em **R1/R2**.

**hl:** `hl-bad` "por contiguidade", `hl-bad` "implante", `hl-good` "R0", `hl-good` "timoma" (benigno), `hl-bad` "carcinoma tímico". (Selecionar 4 mais fortes para respeitar parcimônia: **implante**, **R0**, **carcinoma tímico**, **R1/R2**.)

**BRIEF VISUAL:**
- **SVG (figure-svg hotspot):** "Contiguidade × implante" — desenho lado a lado: à esquerda, massa tímica **colada** na pleura/pericárdio com a invasão saindo da própria massa (grau III, contiguidade); à direita, a mesma massa com um **nódulo-satélite destacado** flutuando à distância na pleura (grau IVA, implante). Hotspot em cada cenário: esquerda → "contiguidade · grau III · ressecável-parcial + adjuvância"; direita → "implante à distância · grau IVA · comportamento maligno · pior prognóstico". Este é o SVG-clímax da aula — mostra graficamente por que o mesmo órgão muda o grau conforme o modo de invasão.
- **Imagem real (figure.med):** TC de tórax com timoma invasivo / implantes pleurais (grau avançado), achado: massa anterior com nódulos pleurais. Fonte CC (Radiopaedia/Wikimedia). Caption + fonte. *Alternativa:* peça cirúrgica de timoma com extensão pleural.

**Asides:**
- `dont-confuse`: **Grau III — contiguidade** (colou e invadiu o vizinho; saiu da própria massa) × **Grau IVA — implante** (pedaço solto à distância; comportamento mais maligno; prognóstico pior).
- `board-wants` (O que a banca quer): "A pegadinha clássica é III × IVA na mesma pleura. O que decide não é o órgão, é o **modo**: contiguidade vira III; implante à distância vira IVA."
- `op-summary` (Resumo operacional): "Só cirurgia basta quando é **I-II + R0 + timoma**. Carcinoma tímico, R1/R2 ou III-IV → soma **quimiorradioterapia adjuvante**."

**QUIZ P9:**
1. (MCQ) A diferença essencial entre grau III e grau IVA de Masaoka é:
   - A) O grau III tem metástase à distância; o IVA não
   - B) **No III a invasão é por contiguidade (colado ao vizinho); no IVA há implante à distância, separado da massa principal** ✓
   - C) O III invade pleura; o IVA jamais invade pleura
   - D) O IVA é encapsulado
   - *Justification:* **Gabarito B.** O que separa III de IVA é o **modo** de acometimento: contiguidade (colado, invade o vizinho) é III; implante à distância (pedaço solto na pleura/pericárdio) é IVA, com comportamento mais maligno. Metástase à distância é o IVB, não o critério III×IVA (A). Ambos podem envolver a pleura — a mesma pleura, aliás (C é falso). Encapsulado é grau I, não IVA (D).
   - *Distractor:* C é a confusão exata que o professor alerta: o aluno acha que "pleura = sempre um grau". Não — a mesma pleura é III se por contiguidade, IVA se por implante.
2. (MCQ) Quando a timectomia isolada (sem adjuvância) é suficiente no timoma?
   - A) Em qualquer grau, desde que opere
   - B) **Masaoka I ou II, com ressecção R0 e histopatológico de timoma (benigno)** ✓
   - C) Sempre que houver miastenia associada
   - D) Em carcinoma tímico com R1
   - *Justification:* **Gabarito B.** Só cirurgia basta quando se reúnem três condições: grau I-II, R0 (sem margem comprometida) e timoma (não carcinoma). Não é "qualquer grau" (A) — III-IV exigem adjuvância. A miastenia (C) não muda a indicação oncológica de adjuvância. Carcinoma tímico ou R1/R2 (D) são exatamente os gatilhos para somar quimiorradioterapia — o oposto de "só cirurgia".
   - *Distractor:* D inverte a regra: carcinoma tímico + R1 é o caso que **mais** pede adjuvância, nunca cirurgia isolada.

---

# 7-12. APÊNDICES PARA O EXECUTOR

### 7. Imagens reais sugeridas (3 obrigatórias + alternativas)
| Pág | Tema | Achado | Fonte sugerida |
|---|---|---|---|
| P1/P2 | TC torácica normal — anatomia do mediastino | silhueta mediastinal entre os pulmões | Radiopaedia / Wikimedia CC |
| P3 | TC com massa de mediastino anterior (timoma) | massa anterossuperior delimitada | Radiopaedia / Wikimedia CC |
| P4 | TC com cisto broncogênico do médio | lesão cística peritraqueal homogênea | Radiopaedia / Wikimedia CC |
| P5 | TC/RM com tumor neurogênico posterior | massa paravertebral | Radiopaedia / Wikimedia CC |
| P7 | ptose palpebral / fácies miastênica | ptose bilateral assimétrica | Wikimedia CC |
| P9 | timoma invasivo / implantes pleurais | massa anterior + nódulos pleurais | Radiopaedia / Wikimedia CC |

Mínimo 3 distintas no produto; cada uma com `Achado:` + `attr` + link de fonte (validação tripla: clínica/técnica/licença). Buscador-imagem decide as finais.

### 8. SVGs interativos (1 por página, todos hotspot)
P1 cardápio-da-banca · P2 três-andares-sagital · P3 quatro-T-pílulas · P4 três-tubos-três-cistos · P5 cadeia-neural · P6 pódio-do-mediastino · P7 elo-timoma-miastenia · P8 régua-de-Masaoka · P9 contiguidade-×-implante.
Cada SVG: `figure-svg` com `figure-svg__frame` → `figure-svg__stage` → `<svg role="img" aria-labelledby>`, hotspots com `tabindex="0" role="button" aria-expanded`, tipógrafos via tokens (`var(--ink-100)` etc.), `var(--teal-*)` para bom / `var(--coral-*)` ou `--err-red` para ruim.

### 9. Mnemônicos / frases de fixação
- **Quatro T da frente:** Timoma · Teratoma · Tireoide · Terrível linfoma (5º aneurisma = cilada).
- **Médio = cistos de duplicação** (broncogênico mais comum).
- **Posterior = neural** (schwannoma > neurofibroma).
- **Pódio:** 1º timoma, 2º linfoma.
- **Masaoka:** I-II bom (só cirurgia) × III-IV ruim (+ adjuvância); metade e metade.
- **III × IVA:** contiguidade × implante.

### 10. Pegadinhas de prova
1. Linfoma onipresente ≠ mais comum (é o 2º; o 1º é timoma).
2. Aneurisma NÃO é T do anterior (aorta = posterior).
3. Schwannoma > neurofibroma (não o inverso).
4. Mais comum "de todos" (timoma) ≠ mais comum "do médio" (broncogênico).
5. Grau III (contiguidade) × grau IVA (implante) — mesma pleura, graus diferentes.
6. Carcinoma tímico / R1-R2 / III-IV → adjuvância, mesmo se a cirurgia "pareceu boa".

### 11. O que diferencia o aluno avançado
- Deduz o tumor a partir das estruturas do compartimento, sem decorar listas.
- Sabe que o nome do grau (III vs IVA) depende do **modo** de invasão, não do órgão.
- Não soma adjuvância no automático: confere os três gatilhos (carcinoma tímico, R1/R2, grau III-IV).

### 12. Checklist de preservação
Cobertura 100% das linhas 8–281. Sem metalinguagem. Nomes corrigidos (Masaoka/schwannoma/miastenia gravis/esterno). Voz Bauer. Cada página: chipset (2-3) + ≥2 topic-h + 1 SVG hotspot + imagem real (ou exceção marcada P6) + 2 quiz gold com justificativa por alternativa + distractor + hl-good/hl-bad parcimonioso (2-4).

---

## REGISTRO PARA O HUB (index.html — patch do Executor)
Inserir card `aula-extra-10-mediastino` na seção de extras, após o card de bexiga (extra-07) ou na posição cronológica dos extras:

```html
<a class="lesson" href="aulas/aula-extra-10-mediastino/index.html">
  <span class="lesson__sigla" aria-hidden="true">TM</span>
  <div class="lesson__row">
    <span class="lesson__num">Aula Extra 10</span>
    <span class="lesson__chip lesson__chip--ready">Disponível</span>
  </div>
  <div class="lesson__title">Tumores do mediastino — estatística de prova + timoma a fundo</div>
  <div class="lesson__desc"><!-- usar a descrição da seção 0 --></div>
  <div class="lesson__tags">
    <span class="lesson__tag">9 páginas</span>
    <span class="lesson__tag">18 questões</span>
    <span class="lesson__tag">9 SVG interativos · 1 mapa · 3 imagens reais</span>
  </div>
  <span class="lesson__enter">Entrar na aula →</span>
</a>
```
