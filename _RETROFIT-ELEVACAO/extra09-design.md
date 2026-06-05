# PROMPT FINAL — AULA EXTRA 9 · ONCOLOGIA PEDIÁTRICA
## Plataforma Cirurgia Oncológica 2 Premium — design página a página, pronto para o Executor

---

## 0. METADADOS DA AULA

| Campo | Valor |
|---|---|
| **Título da aula** | Oncologia Pediátrica |
| **Título longo (card/hero)** | Oncologia pediátrica — tumores abdominais da infância |
| **Sigla (2 letras)** | `OP` |
| **Slug** | `aula-extra-09-onco-pediatrica` |
| **Posição no hub** | Aula Extra 9 (após Aula Extra 8 — Câncer de Testículo) |
| **data-aula** | `extra-09-onco-pediatrica` |
| **data-platform** | `cirurgia-oncologica-2` |
| **Nº de páginas** | **9** |
| **Chassi** | `aulas/aula-extra-07-ca-bexiga/index.html` (header, menu-overlay, progress-bar, article.page, opener variants, chipset, topic-h, prose, figure-svg, figure.med, quiz gold, page-nav, asides) |
| **CSS/JS herdados** | `assets/css/tokens.css`, `base.css`, `components.css` + css/js próprios da aula (`aula-extra-09.css`, `app.js` com `initInteractive`, `onco-ped-interactive.js`) |
| **Espinha dorsal da aula** | **A prova de oncologia pediátrica quase sempre se resume a uma única decisão: diante de uma criança com massa abdominal, é neuroblastoma ou tumor de Wilms?** Todo o resto (epidemiologia, marcadores, metástase, prognóstico) existe para alimentar essa bifurcação. A frase-âncora: **se a criança está doente e a massa cruza a linha média → neuroblastoma; se a criança está bem e a massa achada no banho não cruza → Wilms.** |

### Descrição para o card do hub (lesson__desc)

> Os dois tumores abdominais que decidem a oncologia pediátrica de prova, montados ao redor de uma única bifurcação: **neuroblastoma × tumor de Wilms**. A hierarquia dos "mais comuns" que a banca usa para confundir (**leucemia** = neoplasia mais comum da infância · **SNC** = tumor sólido mais comum · **neuroblastoma** = sólido mais comum fora do SNC e neoplasia nº 1 do menor de 1 ano · **Wilms** = tumor renal primário mais comum, 2ª causa de massa abdominal) · o **neuroblastoma** da crista neural (medula adrenal **~50%**, gânglios simpáticos retroperitoneais **25%**), com a massa **dura, irregular, que cruza a linha média**, a liberação de **catecolaminas** (HAS, sudorese, rubor, palpitação), a **síndrome de Horner**, a **opsoclonia-mioclonia** (síndrome de Kinsbourne) paraneoplásica, o **sinal do guaxinim** periorbitário, as metástases para **fígado, medula óssea e linfonodos — nunca pulmão** · o diagnóstico por **calcificações** na imagem e **catecolaminas urinárias (VMA e HVA)** · o **Wilms/nefroblastoma** associado a **WAGR** e **Beckwith-Wiedemann**, à **aniridia** e **hemi-hipertrofia** isoladas, à criança em **bom estado geral** com massa **firme, que não cruza a linha média**, achada no banho, à **palpação delicada** que evita a ruptura, à metástase **pulmonar**, e à **anaplasia** como principal fator de pior prognóstico · fechado nas próprias questões reais de pediatria que a banca repete.

### lesson__tags (3)
- `9 páginas`
- `18 questões`
- `9 SVG interativos · 4 imagens reais`

> **Card no hub** (`index.html` raiz): replicar o bloco `<a class="lesson">` da Aula Extra 8, com `href="aulas/aula-extra-09-onco-pediatrica/index.html"`, `lesson__sigla = OP`, `lesson__num = Aula Extra 9`, chip `lesson__chip--ready` "Disponível", título e desc acima. Inserir **depois** do card da Aula Extra 8 (Câncer de Testículo).

---

## 1. CORREÇÕES MÉDICAS APLICADAS (transcrição automática com ruído de ASR)

A transcrição tem erros óbvios de reconhecimento de fala. Corrigidos no conteúdo, **sinalizados aqui** para rastreabilidade. Nenhuma alteração de lógica clínica — só de grafia, sigla e nome próprio.

| Na transcrição | Correto | Onde |
|---|---|---|
| "neuroplastoma" / "neuroblastoma" (oscila) | **neuroblastoma** | toda a aula |
| "sistema linfematopoiético" | **sistema linfo-hematopoiético** (hematopoiético) | epidemiologia |
| "síndrome de Kissborn" / "Kingsborn" | **síndrome de Kinsbourne** (epônimo da opsoclonia-mioclonia) | paraneoplásica |
| "oxomioclonia" | **opsoclonia-mioclonia** (opsoclonia = movimentos oculares erráticos) | paraneoplásica |
| "pitose palpebral" | **ptose palpebral** | síndrome de Horner |
| "síndrome Wagger / Wager (W-A-G-E-R)" | **síndrome WAGR (W-A-G-R)**: **W**ilms, **A**niridia, anomalia **G**enitourinária, **R**etardo (deficiência intelectual) | síndromes genéticas |
| "Beckwith-Wiedemann" (grafias variadas) | **síndrome de Beckwith-Wiedemann** | síndromes genéticas |
| "hemipertrofia" | **hemi-hipertrofia** (assimetria corporal de um hemicorpo) | fatores de risco Wilms |
| "ácido vanilmandélico / homovanílico" | **ácido vanilmandélico (VMA)** e **ácido homovanílico (HVA)** | catecolaminas urinárias |
| "defrectomia" | **nefrectomia** | tratamento Wilms |
| "coelhicultura" / "consulta de coelhicultura" | **puericultura** (consulta de rotina da criança) | questões reais |
| "eupineica" | **eupneica** | questão real |
| "criança com nefroblastoma... pior que a criança com nefroblastoma" (transcrição se atrapalha em P7/P8) | onde o sentido é "**estado geral melhor que o da criança com neuroblastoma**" — corrigido pelo contexto (Wilms = bom estado; neuroblastoma = doente) | clínica Wilms |
| "neuroblastoma" trocado por "nefroblastoma" na frase "concluir que estou diante da possibilidade do neuroblastoma e realizar excisão" (seção Wilms) | **nefroblastoma/Wilms** — é a conduta do Wilms (diagnóstico por imagem + excisão, confirmação após) | diagnóstico Wilms |
| "Speaker A" | **(narrador removido — voz direta ao aluno)** | toda a aula |

Nenhum percentual, sítio ou conduta do professor foi alterado. As correções acima são de transcrição/epônimo; a lógica clínica é a da aula.

---

## 2. REGRA SUPREMA DE PRESERVAÇÃO + VOZ

- **Cobertura 100%** do conteúdo do professor (todos os blocos da §3 abaixo distribuídos nas 9 páginas).
- **Voz Bauer**: professor explicando direto ao aluno. Frases curtas, técnicas, com a malandragem de prova do original ("a banca arma a pegadinha", "luz vermelha piscando", "o sublinhado de mil reais").
- **ZERO metalinguagem**. Proibido no HTML final: "nesta aula", "neste módulo", "o professor", "a Júlia", "vamos ver", "próxima página", "como vimos", "a seguir veremos", "imagem real", "TC real", "mapa mental", "mostra a figura", "na tua apostila", "olha lá". A continuidade entre páginas vive **só** no `page-nav__btn--next` (que nomeia a página seguinte) — nunca no corpo do texto. Os diálogos internos do original ("Júlia, mas eu já vi uma questão de Minas...") viram afirmação direta ("Existe uma questão de Minas que descreve o Wilms cruzando a linha média — exceção que não derruba a regra").
- **Texto soberano**: cada página ensina completa só com a prosa. SVG e imagem são reforço.

---

## 3. MAPA DE COBERTURA → PÁGINAS

| Bloco do conteúdo (transcrição) | Página(s) |
|---|---|
| Epidemiologia do câncer infantil ≠ adulto; tipos diferentes | P1 |
| Hierarquia dos "mais comuns": leucemia (linfo-hematopoiético) = mais comum geral → maioria das questões cobra suspeição de leucemia | P1 |
| Sólido mais comum = SNC; mas SNC cai pouco; o que cai é o DDx dos tumores abdominais | P1 |
| O cerne da prova: distinguir neuroblastoma × Wilms diante de massa abdominal; outras neoplasias (hepática, córtex adrenal) existem mas não são o foco | P1, P9 |
| Neuroblastoma = tumor sólido mais comum fora do SNC; neoplasia nº 1 do menor de 1 ano | P2 |
| Origem na crista neural (gânglios simpáticos + medula adrenal); sítios: adrenal ~50%, gânglios simpáticos retroperitoneais 25%, também torácico/cervical | P2 |
| Regra geral: criança com neuroblastoma tem massa abdominal | P2, P3 |
| Massa do neuroblastoma: dura, superfície irregular, cruza a linha média; cresce e é palpável | P3 |
| Liberação de catecolaminas: sudorese, HAS, irritabilidade, rubor, palpitação; febre, repercussão sistêmica ao diagnóstico | P3 |
| Síndrome de Horner (gânglio simpático alto): ptose, miose, anidrose; neuroblastoma torácico confundido com pneumonia | P3 |
| Opsoclonia-mioclonia (síndrome de Kinsbourne), paraneoplásica, autoanticorpos cerebelares: mioclonias + movimento ocular errático | P4 |
| Metástases: fígado, medula óssea, linfonodos; NÃO pulmão (≠ Wilms) | P4 |
| Metástase periorbitária com equimose = sinal do guaxinim | P4 |
| Diagnóstico: imagem (radiografia, TC, cintilografia); massa com calcificações e sangramentos internos (crescimento rápido) | P5 |
| Catecolaminas urinárias aumentadas: VMA e HVA; confirmação histopatológica por biópsia | P5 |
| Tratamento multimodal (QT, cirurgia, RT) dependente do estadiamento — não cobrado em detalhe | P5 |
| Wilms/nefroblastoma = neoplasia renal primária mais comum; 2ª causa de tumor abdominal (1ª = neuroblastoma) | P6 |
| Recapitulação da hierarquia "mais comum" | P6 |
| Mais frequente na PROVA que o neuroblastoma, apesar de neuroblastoma ser nº1 no <1 ano | P6 |
| Síndromes: WAGR (Wilms, aniridia, GU, def. intelectual), Beckwith-Wiedemann (macrossomia, hemi-hipertrofia, onfalocele, hipoglicemia neonatal) | P6 |
| Aniridia e hemi-hipertrofia isoladas também sobem o risco; screening por USG abdominal seriada até ~7 anos | P6 |
| Clínica Wilms: massa achada no banho/exame de rotina; palpação delicada (risco de ruptura); firme, NÃO irregular, NÃO cruza a linha média (exceção de MG); HAS (2ª mais frequente), hematúria, dor; bom estado geral | P7 |
| Wilms diagnosticado na maioria nos primeiros 5 anos (>90%); até 7 anos no screening | P6, P7 |
| Metástase pulmonar (Wilms dá; neuroblastoma não) | P7 |
| Diagnóstico Wilms: USG/TC/RM, tumor que se origina do rim, sem calcificações/hemorragias proeminentes; histopato por biópsia OU após excisão | P8 |
| Tratamento Wilms: 2 correntes (QT→nefrectomia / nefrectomia→QT); sobrevida boa, alta cura; recorrência possível | P8 |
| Anaplasia = principal fator de pior prognóstico (indiferenciação celular → recorrência); metástase e idade também pesam | P8 |
| Questões reais (Wilms vs neuroblastoma; WAGR; massa no banho; criança doente que cruza linha média) | P8, P9 |
| Síntese da bifurcação diagnóstica | P9 |

---

## 4. DISTRIBUIÇÃO DE ABERTURAS (anti-monotonia)

Biblioteca: E1 pergunta (`opener--question`) · E2 dado (`opener--stat`) · E3 caso (`opener--case`) · E4 achado/pegadinha (`opener--trap`) · E5 checklist (`opener--checklist`) · E6 mnemônico (`opener--mnemonic`) · E7 comparação (`opener--vs`) · E8 erro desmontado (`opener--bust`).

| Pág | Estratégia | opener-- | Justificativa |
|---|---|---|---|
| P1 | E1 — Pergunta central | `opener--question` | "Por que toda questão de onco pediátrica desemboca em só duas hipóteses?" enquadra a aula inteira |
| P2 | E2 — Dado impactante | `opener--stat` | "~50% na medula adrenal" ancora origem e sítio do neuroblastoma |
| P3 | E4 — Achado/pegadinha | `opener--trap` | "uma massa que cruza a linha média" é o sinal-pegadinha que separa do Wilms |
| P4 | E2 — Dado impactante | `opener--stat` | a metástase periorbitária ("sublinhado de mil reais") e os 3 sítios são números-âncora |
| P5 | E1 — Pergunta central | `opener--question` | "o que na imagem e na urina fecha o neuroblastoma?" abre o diagnóstico |
| P6 | E2 — Dado impactante | `opener--stat` | ">90% diagnosticados antes dos 5 anos" ancora o Wilms e o screening |
| P7 | E3 — Caso clínico | `opener--case` | a massa achada no banho na criança que está bem é o cenário-mãe do Wilms |
| P8 | E8 — Erro desmontado | `opener--bust` | "o estágio decide tudo" é o erro que a anaplasia desmonta |
| P9 | E7 — Comparação chocante | `opener--vs` | a página é a bifurcação inteira lado a lado — neuroblastoma × Wilms |

Contagem: **E2 ×3** (P2, P4, P6) · **E1 ×2** (P1, P5) · E3 ×1 · E4 ×1 · E7 ×1 · E8 ×1. Máx permitido em 9 págs = ⌈9/3⌉ = **3**. E2 = 3 → **no limite, OK**. Consecutivas: nenhuma estratégia se repete em duas páginas seguidas (P2 E2 → P3 E4; P4 E2 → P5 E1; P6 E2 → P7 E3). **Nenhuma sequência de 2 iguais. Aprovado.**

> **Nota ao Executor:** os três `opener--stat` (P2, P4, P6) usam números de naturezas distintas — P2 um percentual de sítio (`~50%`), P4 uma tríade de sítios metastáticos + o achado periorbitário, P6 um percentual etário (`>90%`). Varie o `opener__context` para que não pareçam o mesmo bloco; não crie componente novo.

---

## 5. PISO POR PÁGINA (regra Bauer)

Cada página: **≥1 SVG interativo** (`figure-svg`, hotspot/slider/step — engine `initInteractive`) + **≥1 imagem real** (`figure.med` com título/caption/fonte) **OU** marca de exceção `data-piso-img-exempt="<motivo>"` no `<article>` quando o conceito não é fotografável.

| Pág | SVG interativo (conceito) | Imagem real (tema) ou exceção |
|---|---|---|
| P1 | **Árvore "mais comuns" clicável**: nó raiz "câncer infantil" → leucemia (mais comum geral) → tumor sólido → SNC (mais comum sólido) → fora do SNC → neuroblastoma → ramo abdominal → bifurcação neuroblastoma × Wilms. Cada nó é hotspot com o "mais comum de quê" | **EXCEÇÃO** `data-piso-img-exempt="hierarquia-epidemiologica-nao-fotografavel"` |
| P2 | **Mapa anatômico da crista neural / cadeia simpática**: silhueta infantil com hotspots na medula adrenal (~50%), gânglios retroperitoneais (25%), cadeia torácica e cervical; cada hotspot mostra o % e o que dá clinicamente ali | **TC abdominal de neuroblastoma adrenal/retroperitoneal** (massa suprarrenal heterogênea) — Radiopaedia/Wikimedia CC |
| P3 | **Comparador de massa abdominal (slider linha média)**: silhueta de abdome infantil; ao arrastar/clicar revela massa do neuroblastoma cruzando a linha média, dura e irregular; hotspots em "dura", "irregular", "cruza a linha média", "catecolaminas → HAS/sudorese/rubor" | **Foto/esquema clínico de criança com Horner (ptose + miose unilateral)** — atlas oftalmológico/neurológico CC. Se indisponível: EXCEÇÃO `data-piso-img-exempt="sindrome-horner-fotografia-pediatrica-restrita"` |
| P4 | **Boneco de metástases clicável**: corpo com 3 hotspots acesos (fígado, medula óssea, linfonodos) + 1 hotspot APAGADO/riscado no pulmão ("aqui não — isso é o Wilms"); + hotspot periorbitário com o "sinal do guaxinim" | **Foto do sinal do guaxinim** (equimose periorbitária bilateral em lactente) — atlas pediátrico/Wikimedia CC |
| P5 | **TC interativa do neuroblastoma**: imagem-base de massa com hotspots em "calcificações puntiformes", "sangramento interno", "crescimento rápido"; painel lateral acende VMA ↑ e HVA ↑ ("catecolaminas urinárias") ao clicar | **TC com neuroblastoma calcificado** (calcificações intratumorais) — Radiopaedia CC |
| P6 | **Tabela dinâmica de síndromes**: WAGR (W-A-G-R, cada letra é hotspot que expande Wilms/Aniridia/Genitourinário/Retardo) × Beckwith-Wiedemann (macrossomia, hemi-hipertrofia, onfalocele, hipoglicemia) × achados isolados (aniridia, hemi-hipertrofia) → todos apontam para "screening USG até ~7 anos" | **Foto de aniridia** (ausência de íris) **ou hemi-hipertrofia** — atlas pediátrico/Wikimedia CC |
| P7 | **Comparador de massa Wilms × neuroblastoma (matriz interativa)**: clicar em "cruza linha média?", "superfície", "estado geral", "como foi achada", "metástase" preenche as duas colunas; destaque no Wilms = firme, NÃO cruza, achado no banho, bom estado, pulmão | **EXCEÇÃO** `data-piso-img-exempt="comparativo-clinico-esquematico"` — OU **peça/USG de tumor de Wilms originando-se do rim** se disponível |
| P8 | **Balança de prognóstico interativa**: fiel central; ao clicar em "anaplasia" o prato pesa fortemente para "pior prognóstico / recorrência"; "metástase" e "idade" pesam menos; mostra que estágio (focal/localizado) NÃO salva se há anaplasia | **Histopatológico de tumor de Wilms (anaplasia / trifásico)** — atlas de patologia CC. Se indisponível: EXCEÇÃO `data-piso-img-exempt="anaplasia-histologia-restrita"` |
| P9 | **SVG-síntese da bifurcação (step-through)**: um enunciado entra no topo; o aluno clica nos achados ("massa cruza linha média?", "estado geral?", "catecolamina?", "como achou?") e o fluxo desce até neuroblastoma OU Wilms; as 3 questões reais entram como hotspots-exemplo | **EXCEÇÃO** `data-piso-img-exempt="algoritmo-de-bifurcacao-esquematico"` |

> 4 imagens reais (P2, P4, P5, P6 — núcleo garantido) + P3 e P8 como reais-se-disponíveis com exceção de fallback + 3 exceções fixas (P1, P7, P9). Imagens reais de fonte CC documentada (Wikimedia Commons / Radiopaedia CC / atlas aberto), validação tripla (clínica/técnica/licença). `figcaption` com `<strong>Achado:</strong>` + `<span class="attr">` fonte+licença+link. Reaproveitar imagens locais já no repo se houver match (`assets/img/` — checar antes); senão, marcar como busca pendente para `buscador-imagem-medica-bauer`. **Nenhuma imagem real de criança identificável sem licença clara — preferir peça/TC/histologia a foto de paciente quando houver dúvida ética.**

---

# 6. ROTEIRO PÁGINA POR PÁGINA

> Convenção: cada página = `<article class="page" data-page="pN" data-strategy="EX — ...">`. Estrutura interna: `page-tag` → `chipset` (2–3 `chip--topic`) → `opener--*` → `h1.page-title` → blocos `topic-h` (frase-insight) + `prose` → `figure-svg` → (`figure.med` ou exceção) → asides adaptativos → `quiz` (2 perguntas gold) → `page-nav`.
> **hl-good** = verde (regra que ajuda a acertar, conduta correta, bom prognóstico). **hl-bad** = vermelho (perigo, pegadinha, mau prognóstico, erro). Marcados inline, **2–4 por página**, com `<span class="hl-good">` / `<span class="hl-bad">`. Parcimônia: destacar o que decide a questão, não pintar a página.

---

## PÁGINA 1 — "Duas hipóteses e mais nada"

- **data-strategy:** `E1 — Pergunta central`
- **page-title:** `Câncer na infância: por que tudo cai em dois tumores`
- **chipset:** `Leucemia = nº 1` · `SNC = sólido nº 1` · `Massa abdominal = a prova`
- **Tópicos visíveis (topic-h):**
  1. *A epidemiologia infantil não é a do adulto — e a banca conta com isso*
  2. *A hierarquia dos "mais comuns" que o enunciado usa para confundir*
  3. *O que a prova realmente quer: neuroblastoma ou Wilms*
- **opener (`opener--question`):** "Por que, na frente de uma criança com massa no abdome, a banca quase sempre só te deixa duas saídas — e exige que você escolha entre elas?"

**PROSA (rica, da transcrição):**

*Tópico 1* — O câncer da criança não é o câncer do adulto em miniatura. A epidemiologia é outra, e os tipos de neoplasia que acometem a criança são diferentes. Quem domina isso já não cai nas pegadinhas mais básicas. Na população pediátrica, as neoplasias mais frequentes são as do <span class="hl-good">**sistema linfo-hematopoiético — as leucemias**</span>. É por isso que a maior parte das questões de oncologia pediátrica cobra, no fundo, a **suspeição de leucemia**: criança com palidez, sangramento, dor óssea, hepatoesplenomegalia — a luz acende para leucemia.

*Tópico 2* — Mas a criança também tem neoplasias **sólidas**. E aqui mora a primeira hierarquia que a banca adora montar como distrator. O tumor sólido mais comum da infância é o do **sistema nervoso central**. Curiosamente, SNC cai pouco em prova de pediatria geral. Tire o SNC da jogada e o sólido mais comum passa a ser o **neuroblastoma**. Repare na escada que o enunciado vai oferecer como alternativas: leucemia (a mais comum de todas), tumor de SNC (o sólido mais comum), e só então o neuroblastoma. <span class="hl-bad">Essa escada está ali para te confundir</span> — cada degrau é verdade em um recorte diferente.

*Tópico 3* — O que de fato decide as questões é o **diagnóstico diferencial dos tumores abdominais**. A criança pode ter um tumor hepático, um tumor de córtex da adrenal, várias outras coisas — mas, para fins de prova, diante de uma criança com tumor abdominal, a banca quer que você diga qual dos **dois** ela tem: <span class="hl-good">**tumor de Wilms ou neuroblastoma**</span>. Toda a aula é a construção dessa bifurcação. O resto — epidemiologia, marcadores, metástase, prognóstico — existe só para alimentar essa única decisão.

- **figure-svg:** árvore "mais comuns" clicável (raiz câncer infantil → leucemia → sólido → SNC → fora do SNC → neuroblastoma → ramo abdominal → Wilms × neuroblastoma). Cada nó hotspot diz "mais comum de quê".
- **imagem:** EXCEÇÃO `data-piso-img-exempt="hierarquia-epidemiologica-nao-fotografavel"`.
- **asides:** `board-wants` ("O que a banca quer") — "Que você não confunda os vários 'mais comum': leucemia (geral) ≠ SNC (sólido) ≠ neuroblastoma (sólido fora do SNC). E que, na massa abdominal, você bifurque para neuroblastoma ou Wilms."

**QUIZ P1 (2 gold):**

**Q1 (MCQ):** *Qual a neoplasia mais comum na população pediátrica como um todo?*
- **A) Leucemia (sistema linfo-hematopoiético)** ✓
- B) Tumor do sistema nervoso central
- C) Neuroblastoma
- D) Tumor de Wilms

`quiz__justification`: **Gabarito: A.** Na infância como um todo, as neoplasias mais frequentes são as do sistema linfo-hematopoiético — as leucemias. B é o tumor **sólido** mais comum (recorte diferente). C é o sólido mais comum **fora do SNC** (recorte ainda mais estreito). D é o tumor **renal** mais comum. Todas são "mais comum" de algo — a pegadinha é misturar os recortes.
`quiz__distractor`: **Por que cair na B:** "tumor sólido mais comum" é uma frase que gruda, e o aluno a generaliza para "tumor mais comum". **Por que cair na C:** neuroblastoma é o tema da página, então parece o protagonista — mas ele só domina o recorte do sólido extra-SNC e do menor de 1 ano.

**Q2 (V/F):** *O tumor sólido mais comum da infância é o neuroblastoma.*
- V / **F** ✓

`quiz__justification`: **Falso.** O tumor sólido mais comum da infância é o do **sistema nervoso central**. O neuroblastoma é o sólido mais comum **fora do SNC** — só assume o posto quando se retira o SNC da conta. Trocar um recorte pelo outro é exatamente o erro que a banca planta.
`quiz__distractor`: **Por que o "Verdadeiro" engana:** SNC cai pouco em prova de pediatria, então o aluno raramente o lembra e promove o neuroblastoma a campeão geral dos sólidos. A frequência clínica, porém, é do SNC.

- **page-nav next:** `O tumor da crista neural →`

---

## PÁGINA 2 — "Onde o neuroblastoma nasce"

- **data-strategy:** `E2 — Dado impactante`
- **page-title:** `Neuroblastoma: origem na crista neural`
- **chipset:** `Sólido nº 1 fora do SNC` · `Nº 1 no < 1 ano` · `Adrenal ~50%`
- **Tópicos visíveis:**
  1. *Os dois títulos que o neuroblastoma carrega*
  2. *Da crista neural para a medula adrenal e a cadeia simpática*
  3. *Por que, na prática, é quase sempre um tumor abdominal*
- **opener (`opener--stat`):** número `~50%`. Context: "Quase metade dos neuroblastomas nasce na **medula da adrenal**. É o sítio primário mais comum — e a razão de o neuroblastoma chegar, na imensa maioria das vezes, como uma **massa abdominal**."

**PROSA:**

*Tópico 1* — O neuroblastoma carrega dois títulos que a banca cobra direto. Primeiro: é o <span class="hl-good">**tumor sólido mais comum da infância fora do sistema nervoso central**</span>. Segundo, e mais fino: nas crianças **menores de 1 ano**, o neuroblastoma é a **neoplasia mais comum de todas** — não só dos sólidos. Quando a pergunta é "qual a neoplasia mais comum em lactentes / menores de 1 ano?", e as alternativas trazem leucemia e tumor de SNC para te confundir, a resposta nessa faixa etária é **neuroblastoma**. É uma pergunta que já apareceu várias vezes com esse desenho.

*Tópico 2* — De onde ele vem? Da **crista neural**, aquela estrutura embrionária cujas células migram e formam os **gânglios simpáticos** e a **medula da adrenal**. O neuroblastoma pode brotar em qualquer ponto desse trajeto. O sítio primário mais comum é a **medula da adrenal — quase 50% dos casos**. Outros **25%** nascem nos **gânglios simpáticos abdominais, retroperitoneais**. Pode ainda surgir na cadeia **torácica** ou **cervical**, mas são minoria.

*Tópico 3* — Some adrenal (~50%) e gânglios retroperitoneais (25%) e você entende a regra geral: a criança com neuroblastoma terá, na maioria esmagadora, um <span class="hl-good">**tumor abdominal**</span>. É por isso que a queixa inicial clássica de prova é a presença de uma **massa abdominal** que cresce, cresce, cresce, e que pode ser palpada no exame físico da criança. Guarde esse ponto: o neuroblastoma é, na prova, um tumor do abdome — e é nessa massa que ele vai disputar o diagnóstico com o Wilms.

- **figure-svg:** mapa anatômico da crista neural / cadeia simpática (silhueta infantil), hotspots na medula adrenal (~50%), gânglios retroperitoneais (25%), cadeia torácica, cervical — cada um com % e consequência clínica.
- **imagem (`figure.med`):** TC abdominal de neuroblastoma adrenal/retroperitoneal (massa suprarrenal heterogênea). `Achado:` massa suprarrenal volumosa, sítio primário mais comum do neuroblastoma. Fonte: Radiopaedia/Wikimedia CC.
- **asides:** `mnemonic` — "Crista neural → simpático + medula adrenal → catecolaminas. Tudo o que o neuroblastoma faz (massa abdominal, HAS, sudorese) sai daí."; `board-wants` — "Menor de 1 ano + neoplasia mais comum = neuroblastoma. Não caia em leucemia nessa faixa específica."

**QUIZ P2 (2 gold):**

**Q1 (MCQ):** *Qual o sítio primário mais comum do neuroblastoma?*
- **A) Medula da adrenal** ✓
- B) Gânglios simpáticos cervicais
- C) Cadeia simpática torácica
- D) Córtex da adrenal

`quiz__justification`: **Gabarito: A.** Quase 50% dos neuroblastomas nascem na **medula** da adrenal; outros ~25% nos gânglios simpáticos retroperitoneais. B (cervical) e C (torácica) existem, mas são minoria. D é a pegadinha anatômica: o neuroblastoma nasce da **medula** (origem na crista neural), não do **córtex** adrenal — córtex daria outro tumor.
`quiz__distractor`: **Por que cair na D:** "adrenal" está certo, mas a camada não. Quem não lembra que o neuroblastoma vem da crista neural (medula) marca córtex por reflexo. **Por que cair em C:** a cadeia torácica é lembrada pela síndrome de Horner e pela confusão com pneumonia, ganhando peso indevido.

**Q2 (V/F):** *Em crianças menores de 1 ano, o neuroblastoma é a neoplasia mais comum de todas, e não apenas dos tumores sólidos.*
- **V** ✓ / F

`quiz__justification`: **Verdadeiro.** Na população pediátrica geral, a mais comum é a leucemia — mas, no recorte do **menor de 1 ano**, o neuroblastoma assume o topo absoluto, à frente até das leucemias. Esse é justamente o desenho de questão que a banca repete em lactentes.
`quiz__distractor`: **Por que o "Falso" engana:** o aluno fixa "leucemia é a mais comום da infância" e aplica a regra a toda faixa etária. A exceção do menor de 1 ano é exatamente o que a prova quer que você saiba.

- **page-nav next:** `A massa que cruza a linha média →`

---

## PÁGINA 3 — "A massa que cruza a linha média"

- **data-strategy:** `E4 — Achado/pegadinha`
- **page-title:** `Neuroblastoma: a massa e as catecolaminas`
- **chipset:** `Dura · irregular · cruza` · `Catecolaminas` · `Horner`
- **Tópicos visíveis:**
  1. *Como é a massa do neuroblastoma — e por que "cruza a linha média" vale ouro*
  2. *A criança doente: catecolaminas em circulação*
  3. *Quando o tumor é alto: síndrome de Horner (e a falsa pneumonia)*
- **opener (`opener--trap`):** "Massa abdominal **dura**, de superfície **irregular**, que **cruza a linha média**, numa criança que **não está bem**. Antes de marcar Wilms, repare em cada palavra dessa descrição — ela foi escrita para ser neuroblastoma."

**PROSA:**

*Tópico 1* — A massa do neuroblastoma tem assinatura própria, e é aqui que a questão se decide. É uma massa <span class="hl-bad">**dura, de superfície irregular, que caracteristicamente cruza a linha média**</span> do abdome. Esse "cruza a linha média" é o detalhe que a banca usa para separar do Wilms, que em geral **não** cruza. Decore a tríade da massa: dura, irregular, atravessa a linha média. Quando o enunciado descreve uma massa assim, a primeira hipótese é neuroblastoma.

*Tópico 2* — Mas a massa raramente vem sozinha. Como o tumor acomete medula adrenal e gânglios simpáticos, ele **libera catecolaminas** — e a criança ganha manifestações sistêmicas. Além da massa, há <span class="hl-bad">sudorese, hipertensão arterial, irritabilidade, rubor e palpitação</span>. É comum também **febre** e sinais de repercussão sistêmica já no momento do diagnóstico. Esse é o ponto que mais diferencia das duas crianças: a do neuroblastoma chega **doente**, com sintomas que vão além da barriga. Guarde isso — é metade do diagnóstico diferencial.

*Tópico 3* — Quando o neuroblastoma não nasce no abdome, surgem outras pistas. Um tumor que comprime **gânglios simpáticos altos** produz a **síndrome de Horner**, com sua tríade: <span class="hl-good">**ptose palpebral, miose e anidrose**</span> do mesmo lado. E há a armadilha clínica clássica: uma criança com neuroblastoma **torácico** faz uma radiografia, alguém vê uma hipotransparência e a trata como **pneumonia**. Quantas pneumonias "que não melhoram" eram, no fundo, um neuroblastoma de mediastino posterior.

- **figure-svg:** comparador de massa abdominal com slider de linha média; silhueta de abdome infantil; revela a massa do neuroblastoma cruzando a linha média; hotspots em "dura", "irregular", "cruza a linha média", "catecolaminas → HAS/sudorese/rubor".
- **imagem (`figure.med`):** foto/esquema de síndrome de Horner (ptose + miose unilateral). `Achado:` ptose e miose à esquerda — compressão simpática alta no neuroblastoma. Fonte CC. Fallback: EXCEÇÃO `data-piso-img-exempt="sindrome-horner-fotografia-pediatrica-restrita"`.
- **asides:** `dont-confuse` — esquerda "**Neuroblastoma**: massa dura, irregular, **cruza** a linha média, criança **doente**" / direita "**Wilms**: massa firme, lisa, **não cruza**, criança **bem**"; `trap` ("Pegadinha") — "Hipotransparência torácica em criança + Horner ≠ pneumonia. Pode ser neuroblastoma de mediastino posterior."

**QUIZ P3 (2 gold):**

**Q1 (MCQ):** *Qual característica da massa abdominal aponta para neuroblastoma e não para tumor de Wilms?*
- **A) Massa dura, irregular, que cruza a linha média** ✓
- B) Massa firme, lisa, que não cruza a linha média
- C) Massa cística, dolorosa à palpação
- D) Massa pulsátil em flanco

`quiz__justification`: **Gabarito: A.** A massa do neuroblastoma é dura, de superfície irregular e **cruza a linha média** — e a criança costuma estar sintomática. B é a descrição clássica do **Wilms** (firme, lisa, não cruza). C e D não correspondem ao padrão de nenhum dos dois e servem só de ruído. O "cruza a linha média" é o discriminador que a banca cobra.
`quiz__distractor`: **Por que cair na B:** quem inverte os dois tumores marca a massa do Wilms achando que é a do neuroblastoma — o erro mais comum da página. **Por que cair na D:** "massa pulsátil em flanco" evoca aneurisma/patologia vascular do adulto, transplantada indevidamente para a criança.

**Q2 (V/F):** *A criança com neuroblastoma costuma apresentar, além da massa, manifestações sistêmicas como hipertensão, sudorese e rubor, decorrentes da liberação de catecolaminas.*
- **V** ✓ / F

`quiz__justification`: **Verdadeiro.** O neuroblastoma acomete medula adrenal e gânglios simpáticos e **libera catecolaminas** — daí HAS, sudorese, rubor, palpitação, irritabilidade e febre. Por isso a criança chega **doente**, com mais que a massa. Essa repercussão sistêmica é o que a separa da criança com Wilms, que costuma estar bem.
`quiz__distractor`: **Por que o "Falso" engana:** o aluno associa "tumor sólido" a quadro silencioso e arrastado. No neuroblastoma, porém, o componente catecolaminérgico dá sintomas floridos — é parte do gatilho do enunciado.

- **page-nav next:** `Os olhos do neuroblastoma →`

---

## PÁGINA 4 — "Os olhos do neuroblastoma"

- **data-strategy:** `E2 — Dado impactante`
- **page-title:** `Opsoclonia-mioclonia, metástases e o sinal do guaxinim`
- **chipset:** `Kinsbourne` · `Fígado · medula · linfonodo` · `Guaxinim`
- **Tópicos visíveis:**
  1. *A síndrome paraneoplásica que entrega o diagnóstico: opsoclonia-mioclonia*
  2. *Para onde o neuroblastoma metastatiza — e o sítio que ele evita*
  3. *O sinal do guaxinim: metástase periorbitária*
- **opener (`opener--stat`):** destaque para a tríade de sítios `Fígado · medula óssea · linfonodos` + o detalhe periorbitário. Context: "Três sítios de metástase para guardar — **fígado, medula óssea, linfonodos** — e um que o neuroblastoma **não** costuma fazer: o pulmão. E há um achado que vale o **sublinhado de mil reais**: a metástase periorbitária."

**PROSA:**

*Tópico 1* — Existe na criança com neuroblastoma uma condição rara, mas que às vezes entrega a questão inteira: a **síndrome de opsoclonia-mioclonia**, com epônimo de <span class="hl-good">**síndrome de Kinsbourne**</span>. É **paraneoplásica**: a criança produz autoanticorpos que agridem estruturas do **cerebelo**. Clinicamente, ela desenvolve **mioclonias** e uma **movimentação ocular errática** — a criança estava bem e, de repente, crises mioclônicas e olhos "dançando" sem direção. Opsoclonia-mioclonia em criança pequena é uma das pistas mais elegantes para pensar em neuroblastoma.

*Tópico 2* — O neuroblastoma metastatiza, e os sítios principais são três: <span class="hl-good">**fígado, medula óssea e linfonodos**</span>. Guarde a lista — e guarde sobretudo o que ela **não** tem: o **pulmão**. <span class="hl-bad">Neuroblastoma não costuma dar metástase pulmonar</span>. Isso é um conceito que cai: o que aparece no tórax do neuroblastoma é o **próprio tumor** acometendo gânglio simpático, não metástase. Quem dá metástase para o pulmão é o **Wilms** — e a banca explora essa diferença.

*Tópico 3* — E há o achado que merece o destaque máximo: a **metástase periorbitária**. O neuroblastoma pode invadir a região ao redor dos olhos e produzir **equimoses periorbitárias**. Essa equimose em volta dos olhos é o <span class="hl-bad">**sinal do guaxinim**</span> (olhos de guaxinim). Quando o enunciado planta "equimose periorbitária" numa criança com massa abdominal, é neuroblastoma com metástase — e é praticamente gabarito.

- **figure-svg:** boneco de metástases clicável — fígado, medula óssea, linfonodos acesos; pulmão riscado/apagado ("aqui não — isso é Wilms"); hotspot periorbitário com o sinal do guaxinim.
- **imagem (`figure.med`):** foto do sinal do guaxinim (equimose periorbitária bilateral em lactente). `Achado:` equimoses periorbitárias por metástase do neuroblastoma. Fonte CC documentada.
- **asides:** `dont-confuse` — "**Neuroblastoma**: metástase fígado/medula/linfonodo, **não pulmão**" / "**Wilms**: metástase **pulmonar**"; `board-wants` — "Equimose periorbitária + massa abdominal = neuroblastoma. Opsoclonia-mioclonia = Kinsbourne = neuroblastoma."

**QUIZ P4 (2 gold):**

**Q1 (MCQ):** *Uma criança com massa abdominal apresenta movimentos oculares erráticos e mioclonias. Esse conjunto sugere:*
- **A) Neuroblastoma (síndrome opsoclonia-mioclonia / Kinsbourne)** ✓
- B) Tumor de Wilms
- C) Leucemia linfoblástica aguda
- D) Tumor de córtex da adrenal

`quiz__justification`: **Gabarito: A.** Opsoclonia (olhos erráticos) + mioclonias formam a **síndrome de Kinsbourne**, uma síndrome paraneoplásica clássica do **neuroblastoma**, por autoanticorpos contra o cerebelo. B (Wilms) não cursa com esse quadro neurológico. C e D não têm essa associação paraneoplásica. Massa abdominal + olhos "dançando" = neuroblastoma.
`quiz__distractor`: **Por que cair na B:** o aluno sabe que Wilms também dá massa abdominal e marca por reflexo — mas o componente neurológico paraneoplásico é exclusivo do neuroblastoma. **Por que cair na C:** leucemia é a "mais comum" e vira muleta; ela não causa opsoclonia-mioclonia.

**Q2 (V/F):** *O neuroblastoma frequentemente dá metástase pulmonar, assim como o tumor de Wilms.*
- V / **F** ✓

`quiz__justification`: **Falso.** O neuroblastoma metastatiza para **fígado, medula óssea e linfonodos**, e **não** costuma ir para o pulmão. Quem dá metástase **pulmonar** é o **Wilms**. O que se vê no tórax do neuroblastoma é o tumor primário em gânglio simpático, não metástase — e a banca usa exatamente essa diferença.
`quiz__distractor`: **Por que o "Verdadeiro" engana:** "tumor maligno → metástase pulmonar" é regra geral do adulto que o aluno generaliza. Aqui ela vale para o Wilms, não para o neuroblastoma — inverter os dois é o erro plantado.

- **page-nav next:** `Calcificação e catecolamina →`

---

## PÁGINA 5 — "Calcificação e catecolamina"

- **data-strategy:** `E1 — Pergunta central`
- **page-title:** `Diagnóstico do neuroblastoma`
- **chipset:** `Calcificações` · `VMA · HVA urinários` · `Histopatológico`
- **Tópicos visíveis:**
  1. *O que a imagem mostra — e por que a calcificação separa do Wilms*
  2. *A urina que confirma: catecolaminas, VMA e HVA*
  3. *O que fecha o diagnóstico e o que a prova ignora no tratamento*
- **opener (`opener--question`):** "O que, na imagem e na urina dessa criança, transforma a suspeita de massa abdominal em diagnóstico de neuroblastoma — e ao mesmo tempo afasta o Wilms?"

**PROSA:**

*Tópico 1* — A investigação começa por **imagem**: às vezes uma radiografia simples, depois **tomografia**. O achado que o enunciado planta para reforçar neuroblastoma é uma massa com <span class="hl-good">**calcificações no seu interior**</span>. Como esse tumor costuma ter crescimento acelerado, surgem **sangramentos e calcificações** dentro da massa. Esse detalhe vale para o diagnóstico diferencial: no **Wilms**, calcificações e hemorragias proeminentes <span class="hl-bad">não são frequentes</span>. Massa abdominal calcificada na criança = pense neuroblastoma.

*Tópico 2* — A segunda peça é laboratorial e é a assinatura do tumor. Como o neuroblastoma libera catecolaminas, a criança tem <span class="hl-good">**aumento de catecolaminas urinárias**</span> — especificamente **ácido vanilmandélico (VMA)** e **ácido homovanílico (HVA)** elevados. Quando o enunciado traz "massa abdominal calcificada **+ catecolaminas urinárias aumentadas**", o diagnóstico está praticamente cravado. Outros exames existem (como a cintilografia), mas o que cai é a dupla calcificação na imagem + VMA/HVA na urina.

*Tópico 3* — O diagnóstico **definitivo** vem da **avaliação histopatológica**, feita por **biópsia**. Já o tratamento — você não precisa dominar os detalhes para a prova. É **multimodal**: pode envolver **quimioterapia, cirurgia e radioterapia**, e a combinação depende do **estadiamento**, que não é cobrado. O essencial a levar é a tríade diagnóstica: massa que cruza a linha média + repercussão sistêmica + calcificação/catecolaminas — porque é o oposto da história do Wilms.

- **figure-svg:** TC interativa do neuroblastoma com hotspots em "calcificações puntiformes", "sangramento interno", "crescimento rápido"; painel lateral acende VMA ↑ e HVA ↑ ao clicar.
- **imagem (`figure.med`):** TC com neuroblastoma calcificado (calcificações intratumorais). `Achado:` calcificações grosseiras no interior da massa — pista diferencial contra o Wilms. Fonte: Radiopaedia CC.
- **asides:** `dont-confuse` — "**Neuroblastoma**: calcificação + sangramento na imagem, VMA/HVA ↑" / "**Wilms**: sem calcificação/hemorragia proeminente"; `op-summary` ("Na prática") — "Não decore protocolo de tratamento; decore a tríade diagnóstica que distingue do Wilms."

**QUIZ P5 (2 gold):**

**Q1 (MCQ):** *Qual achado laboratorial confirma a suspeita de neuroblastoma?*
- **A) Aumento de catecolaminas urinárias (VMA e HVA)** ✓
- B) Aumento de alfafetoproteína sérica
- C) Hematúria com proteinúria
- D) Aumento de β-hCG urinário

`quiz__justification`: **Gabarito: A.** O neuroblastoma libera catecolaminas, e a urina mostra **VMA** e **HVA** elevados — a assinatura laboratorial do tumor. B (AFP) é marcador de tumor germinativo/hepatoblastoma, não do neuroblastoma. C (hematúria) puxa para patologia renal/Wilms, não confirma neuroblastoma. D (β-hCG) é tumor germinativo. Só A fecha o quadro.
`quiz__distractor`: **Por que cair na C:** "massa abdominal na criança" evoca rim, e hematúria parece encaixar — mas hematúria é do Wilms, e mesmo lá não é o que confirma. **Por que cair em B/D:** marcadores germinativos são decorados em bloco e colados em qualquer tumor pediátrico.

**Q2 (V/F):** *A presença de calcificações no interior da massa favorece neuroblastoma em relação ao tumor de Wilms.*
- **V** ✓ / F

`quiz__justification`: **Verdadeiro.** O neuroblastoma, de crescimento rápido, costuma ter **calcificações e sangramentos** intratumorais — achados **pouco frequentes** no Wilms. Por isso, massa abdominal calcificada na criança pesa a favor de neuroblastoma no diferencial. É um detalhe de imagem que a banca usa para desempatar.
`quiz__distractor`: **Por que o "Falso" engana:** o aluno acha que calcificação é inespecífica demais para valer no diferencial. No par neuroblastoma × Wilms, porém, ela tem direção — e a direção é neuroblastoma.

- **page-nav next:** `O tumor renal da criança →`

---

## PÁGINA 6 — "O tumor renal da criança"

- **data-strategy:** `E2 — Dado impactante`
- **page-title:** `Tumor de Wilms: síndromes e rastreio`
- **chipset:** `Renal nº 1` · `WAGR · Beckwith` · `Rastreio por USG`
- **Tópicos visíveis:**
  1. *O nefroblastoma na escada dos "mais comuns"*
  2. *As síndromes que carregam o Wilms: WAGR e Beckwith-Wiedemann*
  3. *Aniridia e hemi-hipertrofia isoladas — e o rastreio que elas obrigam*
- **opener (`opener--stat`):** número `>90%`. Context: "Mais de **90%** das crianças com tumor de Wilms são diagnosticadas nos **primeiros 5 anos de vida**. É um tumor do pré-escolar — e é por isso que certas crianças passam anos fazendo ultrassom de barriga só para pegá-lo cedo."

**PROSA:**

*Tópico 1* — O **nefroblastoma — o tumor de Wilms** — é a <span class="hl-good">**neoplasia renal primária mais comum**</span> da infância e a **segunda causa** de tumor abdominal na criança (a primeira é o neuroblastoma). Feche a escada dos "mais comuns": leucemia (geral) → SNC (sólido) → neuroblastoma (sólido extra-SNC e nº 1 no < 1 ano) → Wilms (renal). E um detalhe que confunde: embora o neuroblastoma seja o nº 1 no menor de 1 ano, na **prova** é **mais frequente** você encontrar uma questão cujo diagnóstico é **Wilms** — então conheça-o bem.

*Tópico 2* — A primeira peculiaridade do Wilms é a associação com **síndromes genéticas**. Duas principais. A **síndrome WAGR**, que é um acrônimo das próprias características: <span class="hl-good">**W**ilms, **A**niridia (ausência de íris), anomalia **G**enitourinária, e **R** de deficiência intelectual</span> (antigo "retardo mental", termo que não se usa mais). A segunda é a **síndrome de Beckwith-Wiedemann**: bebês **grandes** (macrossomia), que podem ter **hemi-hipertrofia**, **onfalocele** e **hipoglicemia neonatal**. Criança com qualquer uma dessas síndromes tem **risco aumentado de nefroblastoma**.

*Tópico 3* — Não precisa ter a síndrome completa. **Aniridia** e **hemi-hipertrofia** (um hemicorpo maior que o outro — um membro nitidamente maior) <span class="hl-bad">isoladas</span> também elevam o risco de Wilms. Por isso essas crianças entram em **rastreio**: nos primeiros anos de vida, fazem **ultrassonografia abdominal seriada**, em geral **até cerca dos 7 anos**, justamente para o diagnóstico **precoce** de um possível nefroblastoma. Achar cedo muda o desfecho.

- **figure-svg:** tabela dinâmica de síndromes — WAGR (W-A-G-R, cada letra hotspot que expande Wilms/Aniridia/Genitourinário/Retardo) × Beckwith-Wiedemann (macrossomia, hemi-hipertrofia, onfalocele, hipoglicemia) × achados isolados (aniridia, hemi-hipertrofia) → todos apontam para "rastreio USG até ~7 anos".
- **imagem (`figure.med`):** foto de aniridia (ausência de íris) ou de hemi-hipertrofia. `Achado:` aniridia / assimetria de hemicorpo — marcadores de risco para Wilms. Fonte CC.
- **asides:** `mnemonic` — "**WAGR** = **W**ilms · **A**niridia · **G**enitourinário · **R**etardo (def. intelectual)."; `op-summary` ("Na prática") — "Aniridia ou hemi-hipertrofia isolada já justifica USG abdominal de rastreio até ~7 anos."

**QUIZ P6 (2 gold):**

**Q1 (MCQ):** *Na síndrome WAGR, a letra "A" corresponde a:*
- **A) Aniridia (ausência de íris)** ✓
- B) Anaplasia
- C) Anemia
- D) Aniridia adquirida por quimioterapia

`quiz__justification`: **Gabarito: A.** WAGR = **W**ilms, **A**niridia, anomalia **G**enitourinária, **R**etardo (deficiência intelectual). O "A" é **aniridia**, ausência congênita da íris. B (anaplasia) é fator de prognóstico do Wilms, não item do acrônimo. C (anemia) não compõe a síndrome. D inventa uma causa adquirida — a aniridia da WAGR é congênita/genética.
`quiz__distractor`: **Por que cair na B:** "anaplasia" também é uma palavra-chave do Wilms (prognóstico), e o aluno a encaixa no acrônimo errado. **Por que cair na D:** parece sofisticada e tenta racionalizar a íris ausente como efeito de tratamento — mas é congênita.

**Q2 (V/F):** *Hemi-hipertrofia isolada, mesmo sem síndrome completa, aumenta o risco de tumor de Wilms e justifica rastreio com ultrassonografia abdominal.*
- **V** ✓ / F

`quiz__justification`: **Verdadeiro.** Aniridia e hemi-hipertrofia, mesmo **isoladas**, elevam o risco de nefroblastoma — por isso essas crianças fazem **USG abdominal seriada** (em geral até ~7 anos) para diagnóstico precoce. Não é preciso ter a síndrome inteira (WAGR ou Beckwith-Wiedemann) para indicar o rastreio.
`quiz__distractor`: **Por que o "Falso" engana:** o aluno acha que só a síndrome completa conta. Mas os achados isolados já bastam para o rastreio — e a banca cobra exatamente esse "achado isolado pede USG".

- **page-nav next:** `Achou no banho →`

---

## PÁGINA 7 — "Achou no banho"

- **data-strategy:** `E3 — Caso clínico`
- **page-title:** `Tumor de Wilms: a criança que está bem`
- **chipset:** `Massa firme · não cruza` · `Bom estado geral` · `Metástase pulmonar`
- **Tópicos visíveis:**
  1. *A massa que ninguém esperava: achado incidental*
  2. *Palpe com cuidado — o tumor pode romper*
  3. *A massa do Wilms e o que mais pode aparecer*
- **opener (`opener--case`):** quote — "Menina de 2 anos e 11 meses, levada à puericultura. A mãe percebeu um **caroço na barriga ao dar banho**. A criança está **bem**, sem queda do estado geral, afebril, corada. Ao exame, uma massa **firme, fixa e indolor**, 8 cm. **(Essa criança que está ótima e cuja mãe achou a massa no banho é o tumor de Wilms — guarde o contraste com a criança doente do neuroblastoma.)**"

**PROSA:**

*Tópico 1* — A história do Wilms na prova é a história da vida real: a criança que, no momento do diagnóstico, pode ter <span class="hl-good">**apenas uma massa abdominal e nada mais**</span>. Frequentemente é um **achado** — os pais sentem um caroço **durante o banho**, ou o pediatra encontra a massa num **exame de rotina**. O traço que mais distingue: essa criança costuma estar em <span class="hl-good">**bom estado geral**</span>, ao contrário da criança com neuroblastoma, que chega doente, com febre e repercussão sistêmica.

*Tópico 2* — Um cuidado prático que a banca às vezes cobra: ao encontrar uma massa abdominal na criança, a palpação deve ser **delicada**. Não saia chamando todo mundo para apalpar a barriga dela. <span class="hl-bad">Existe risco de ruptura do tumor durante a palpação</span> — palpação repetida e vigorosa pode romper a massa. Examine com cuidado e o problema não acontece.

*Tópico 3* — A massa do Wilms tem assinatura oposta à do neuroblastoma. É uma massa **firme**, porém <span class="hl-good">**não irregular**</span> como a do neuroblastoma, e — o ponto mais peculiar — <span class="hl-good">**em geral não ultrapassa a linha média**</span>. "Em geral": existe uma questão de Minas Gerais que descreveu um Wilms cruzando a linha média — exceção que não derruba a regra, mas que mostra por que você nunca decide só por um critério. Além da massa, a criança pode ter **hipertensão** (a segunda alteração mais frequente), **hematúria** e, às vezes, **dor abdominal**, embora a massa costume ser assintomática. E há a metástase que cai: o Wilms vai para o <span class="hl-bad">**pulmão**</span> — o neuroblastoma, não.

- **figure-svg:** comparador de massa Wilms × neuroblastoma (matriz interativa): clicar em "cruza linha média?", "superfície", "estado geral", "como foi achada", "metástase" preenche as duas colunas; Wilms destacado = firme, NÃO cruza, achado no banho, bom estado, pulmão.
- **imagem:** EXCEÇÃO `data-piso-img-exempt="comparativo-clinico-esquematico"` — OU peça/USG de tumor de Wilms originando-se do rim, se disponível em fonte CC.
- **asides:** `trap` ("Cuidado") — "Massa abdominal na criança = palpação **delicada**. Palpar demais pode **romper** o tumor."; `dont-confuse` — "**Wilms**: firme, não cruza, criança **bem**, metástase **pulmonar**" / "**Neuroblastoma**: dura/irregular, cruza, criança **doente**, metástase fígado/medula/linfonodo".

**QUIZ P7 (2 gold):**

**Q1 (MCQ):** *Criança de 2 anos, em bom estado geral, cuja mãe percebeu massa abdominal ao dar banho. Ao exame, massa firme, fixa, indolor, que não cruza a linha média. O diagnóstico mais provável é:*
- **A) Tumor de Wilms** ✓
- B) Neuroblastoma
- C) Leucemia linfoblástica aguda
- D) Tumor hepático

`quiz__justification`: **Gabarito: A.** Criança **bem**, massa **firme** achada incidentalmente no banho, que **não cruza** a linha média = tumor de Wilms. B (neuroblastoma) traz criança **doente**, massa **dura/irregular** que **cruza** a linha média e repercussão sistêmica — o oposto. C e D não têm essa apresentação clássica. O par "criança bem + não cruza" é o gabarito do Wilms.
`quiz__distractor`: **Por que cair na B:** o aluno sabe que neuroblastoma é o mais comum no < 1 ano e marca por frequência, ignorando que aqui a criança está **bem** e a massa **não cruza** — sinais que apontam Wilms. **Por que cair na D:** "massa abdominal" genérica abre espaço para tumor hepático, que não tem esse padrão.

**Q2 (V/F):** *Diante de massa abdominal palpável na criança, recomenda-se examiná-la repetidamente e demonstrá-la a vários colegas para confirmar o achado.*
- V / **F** ✓

`quiz__justification`: **Falso.** A palpação deve ser **delicada e econômica** — há **risco de ruptura** do tumor com a manipulação repetida. Encontrou a massa, examine com cuidado e prossiga com a investigação; não fique apalpando nem chamando todos para palpar. A conduta correta protege contra a ruptura.
`quiz__distractor`: **Por que o "Verdadeiro" engana:** confirmar achados com colegas é hábito clínico saudável em geral — mas neste contexto específico o excesso de palpação é perigoso, e a banca testa se você conhece essa exceção.

- **page-nav next:** `O que piora o prognóstico →`

---

## PÁGINA 8 — "O que realmente piora o prognóstico"

- **data-strategy:** `E8 — Erro desmontado`
- **page-title:** `Wilms: diagnóstico, tratamento e anaplasia`
- **chipset:** `Origem renal` · `2 correntes` · `Anaplasia = pior`
- **Tópicos visíveis:**
  1. *O que a imagem mostra — e por que o diagnóstico pode preceder a histologia*
  2. *Duas correntes de tratamento (e por que a ordem importa pouco)*
  3. *Anaplasia: o fator que de fato muda o prognóstico*
- **opener (`opener--bust`):** "Muita gente assume que, no Wilms, o que decide o prognóstico é o **estágio** — focal, localizado, avançado. Está incompleto: existe um achado que piora o desfecho **mesmo em tumor pequeno e localizado**. Ele se chama **anaplasia**."

**PROSA:**

*Tópico 1* — Suspeitou de Wilms? Os exames de imagem são **USG, tomografia e ressonância**. O achado-chave é um <span class="hl-good">**tumor que se origina do rim**</span> — você vê a massa nascendo do parênquima renal — e, em geral, **sem** as calcificações e hemorragias proeminentes do neuroblastoma. O diagnóstico **definitivo** é histopatológico, mas com um detalhe: às vezes ele só vem **após a excisão cirúrgica**. Com base apenas nos exames de imagem, é possível concluir pela alta probabilidade de Wilms, indicar a **ressecção** e confirmar a histologia **durante e após** o procedimento.

*Tópico 2* — No tratamento, existem **duas grandes correntes**. Uma orienta **quimioterapia primeiro, depois nefrectomia**; a outra, **nefrectomia primeiro, depois quimioterapia**. Para a prova, qual vem antes <span class="hl-bad">importa pouco</span>. O que importa no acompanhamento é que essas crianças podem ter **recorrência** — mas a **sobrevida é boa** e a **taxa de cura é alta**. O Wilms é, no conjunto, um tumor de bom prognóstico.

*Tópico 3* — E aqui está o ponto que a abertura prometeu. O fator que **mais** piora o prognóstico é a presença de <span class="hl-bad">**anaplasia**</span> na histopatologia — uma **indiferenciação celular** importante, que aumenta muito o **risco de recorrência**. E o detalhe cruel: a anaplasia piora o desfecho **mesmo quando focal e em tumor localizado** — o estágio não a neutraliza. Metástase e idade da criança também pesam, mas a **anaplasia é o principal**. Quando a histologia diz "anaplasia", o prognóstico fecha pior, independentemente do estágio.

- **figure-svg:** balança de prognóstico interativa — clicar em "anaplasia" pesa fortemente para "pior prognóstico / recorrência"; "metástase" e "idade" pesam menos; mostra que estágio (focal/localizado) NÃO neutraliza a anaplasia.
- **imagem (`figure.med`):** histopatológico de tumor de Wilms (padrão trifásico / anaplasia). `Achado:` indiferenciação celular (anaplasia) — principal fator de pior prognóstico. Fonte: atlas de patologia CC. Fallback: EXCEÇÃO `data-piso-img-exempt="anaplasia-histologia-restrita"`.
- **asides:** `board-wants` — "Pergunta cravada: 'o que torna o Wilms mais agressivo?' → **anaplasia**, inclusive focal e em tumor localizado."; `dont-confuse` — "**Anaplasia** = histologia indiferenciada = pior prognóstico" / "**Estágio** = extensão; não anula a anaplasia".

**QUIZ P8 (2 gold):**

**Q1 (MCQ):** *Qual o principal fator histopatológico associado a pior prognóstico no tumor de Wilms?*
- **A) Anaplasia (indiferenciação celular)** ✓
- B) Estágio focal localizado
- C) Presença de calcificações
- D) Origem no córtex renal

`quiz__justification`: **Gabarito: A.** A **anaplasia** — indiferenciação celular marcada — é o principal fator de pior prognóstico no Wilms, por elevar muito a recorrência, **mesmo quando focal e em tumor localizado**. B está invertido: estágio focal/localizado é favorável, e ainda assim não anula a anaplasia. C (calcificação) é traço do **neuroblastoma**. D inventa um critério; o Wilms nasce do parênquima renal.
`quiz__distractor`: **Por que cair na B:** o aluno acredita que estágio decide tudo e que "localizado" garante bom prognóstico — a pegadinha é justamente que a anaplasia piora mesmo o localizado. **Por que cair na C:** transfere a calcificação do neuroblastoma para o Wilms.

**Q2 (V/F):** *No tumor de Wilms, a definição de qual tratamento vem primeiro — quimioterapia ou cirurgia — é o fator mais determinante do prognóstico.*
- V / **F** ✓

`quiz__justification`: **Falso.** Existem duas correntes (QT→nefrectomia e nefrectomia→QT), e para a prova **a ordem importa pouco**. O fator que realmente determina o prognóstico é a **anaplasia** na histopatologia (além de metástase e idade). A sequência terapêutica não é o que muda o desfecho.
`quiz__distractor`: **Por que o "Verdadeiro" engana:** parece intuitivo que "operar antes ou depois" mude tudo. Mas o desfecho do Wilms é governado pela biologia do tumor (anaplasia), não pela ordem do tratamento — esse é o ponto que a banca quer.

- **page-nav next:** `Neuroblastoma × Wilms: a decisão →`

---

## PÁGINA 9 — "Neuroblastoma × Wilms: a decisão"

- **data-strategy:** `E7 — Comparação chocante`
- **page-title:** `A bifurcação que vence a prova`
- **chipset:** `Doente × bem` · `Cruza × não cruza` · `Catecolamina × incidental`
- **Tópicos visíveis:**
  1. *As duas crianças lado a lado*
  2. *Como a banca monta o enunciado — e como você responde em segundos*
- **opener (`opener--vs`):** dois polos — esquerda **NEUROBLASTOMA**: criança doente · massa dura, irregular, **cruza** a linha média · catecolaminas (HAS, sudorese, guaxinim) · metástase fígado/medula/linfonodo. Direita **WILMS**: criança bem · massa firme, lisa, **não cruza** · achada no banho · síndromes (WAGR, Beckwith) · metástase **pulmonar** · anaplasia = pior prognóstico.

**PROSA:**

*Tópico 1* — Tudo converge para duas crianças opostas. A do <span class="hl-bad">**neuroblastoma**</span> chega **doente**: febre, emagrecimento, palidez, irritabilidade, HAS, e uma massa **dura, irregular, que atravessa a linha média**; pode trazer equimose periorbitária (guaxinim), opsoclonia-mioclonia, calcificações na imagem e VMA/HVA na urina; metastatiza para fígado, medula e linfonodos. A do <span class="hl-good">**tumor de Wilms**</span> está **bem**: a mãe achou a massa **no banho**, a criança está corada e afebril, a massa é **firme** e **não cruza** a linha média; pode ter HAS e hematúria, vem associada a WAGR/Beckwith ou a aniridia/hemi-hipertrofia isoladas, metastatiza para o **pulmão**, e tem na **anaplasia** seu pior prognóstico.

*Tópico 2* — É assim que a banca monta. As alternativas quase sempre são **neuroblastoma, tumor de Wilms e mais uma distração** que varia. Dois enunciados-modelo deixam o método claro. Primeiro: "criança de 2 anos, **bem**, sem queixa, massa **endurecida, fixa, indolor**, achada no banho" → não é a criança doente, é o **Wilms**. Segundo: "lactente de 2 anos, aumento do volume abdominal, **emagrecimento, palidez, febre, irritabilidade**, com **hipertensão**, **equimose periorbitária** e massa em loja renal **atravessando a linha média**" → criança doente, massa que cruza, guaxinim → **neuroblastoma**. E o enunciado-síndrome: "menino de 18 meses, sem queixa, massa endurecida, **hipospádia** (alteração genitourinária) e **membro maior que o outro** (hemi-hipertrofia)" → WAGR/risco aumentado → **tumor de Wilms**. Resolva sempre pela mesma chave: **estado geral + a massa cruza a linha média? + como foi achada?**

- **figure-svg:** SVG-síntese da bifurcação (step-through): um enunciado entra no topo; o aluno clica nos achados ("massa cruza linha média?", "estado geral?", "catecolamina/guaxinim?", "achado no banho?") e o fluxo desce até **neuroblastoma** ou **Wilms**; os três enunciados reais entram como hotspots-exemplo.
- **imagem:** EXCEÇÃO `data-piso-img-exempt="algoritmo-de-bifurcacao-esquematico"`.
- **asides:** `mnemonic` — "**Doente + cruza a linha média = neuroblastoma. Bem + achado no banho + não cruza = Wilms.**"; `board-wants` — "A banca não quer o diagnóstico raro — quer que você **separe neuroblastoma de Wilms**. As outras alternativas são ruído."

**QUIZ P9 (2 gold):**

**Q1 (MCQ):** *Lactente de 2 anos com aumento do volume abdominal, emagrecimento, palidez, febre, hipertensão, equimose periorbitária e massa em loja renal que atravessa a linha média. O diagnóstico mais provável é:*
- **A) Neuroblastoma** ✓
- B) Tumor de Wilms
- C) Hepatoblastoma
- D) Linfoma abdominal

`quiz__justification`: **Gabarito: A.** Criança **doente** (febre, emagrecimento, palidez), **hipertensão**, **equimose periorbitária** (sinal do guaxinim) e massa que **atravessa a linha média** = neuroblastoma, com repercussão catecolaminérgica e metástase periorbitária. B (Wilms) seria a criança **bem**, com massa que **não cruza**. C e D não compõem essa tríade clássica. Cada achado do enunciado aponta para neuroblastoma.
`quiz__distractor`: **Por que cair na B:** "loja renal" sugere rim e puxa para Wilms — mas o estado geral ruim, o guaxinim e o cruzamento da linha média contradizem o Wilms e cravam o neuroblastoma. **Por que cair na C/D:** são os "distratores que variam" que a banca coloca como terceira opção.

**Q2 (V/F):** *Uma criança em bom estado geral, cuja massa abdominal firme foi um achado durante o banho e não cruza a linha média, tem maior probabilidade de tumor de Wilms que de neuroblastoma.*
- **V** ✓ / F

`quiz__justification`: **Verdadeiro.** Bom estado geral + massa **firme** achada incidentalmente + **não cruza** a linha média é o retrato do **tumor de Wilms**. O neuroblastoma traz o oposto: criança doente, massa dura/irregular que **cruza** a linha média e repercussão sistêmica. A bifurcação se resolve por estado geral, cruzamento da linha média e modo de apresentação.
`quiz__distractor`: **Por que o "Falso" engana:** como o neuroblastoma é o mais comum no < 1 ano, o aluno hesita e marca por frequência. Mas o conjunto clínico (bem + não cruza + incidental) sobrepõe a frequência e aponta Wilms.

- **page-nav next:** `(última página — page-nav__btn--next aponta para o hub / "Voltar ao início")`

---

# 7. NOTAS DE EXECUÇÃO (para o Executor)

1. **Reaproveitar o chassi do CB (Aula Extra 7)** integralmente: header, menu-overlay, progress-bar, `article.page`, todos os `opener--*`, `chipset`/`chip--topic`, `topic-h`, `prose`, `figure-svg` (engine `initInteractive`), `figure.med`, `quiz` gold (`quiz__question`/`quiz__alternatives`/`quiz__alt`/`quiz__verdict`/`quiz__justification`/`quiz__distractor`), `page-nav`. Classes `hl-good`/`hl-bad` já existem em `components.css` — usar inline.
2. **9 artigos**, `data-page="p1"…"p9"`, cada um com `data-strategy` da §4. Menu lateral com os 9 títulos curtos das aspas ("Duas hipóteses e mais nada", "Onde o neuroblastoma nasce", etc.).
3. **Openers**: respeitar a §4 (E1, E2×3, E4, E1, E2, E3, E8, E7). Variar `opener__context` dos três `opener--stat`.
4. **SVGs interativos**: cada um é um conceito próprio (§5), engine `initInteractive` em `onco-ped-interactive.js`. Hotspots com `aria-label`, foco por teclado, `tabindex`, e versão textual equivalente (texto soberano — a página ensina sem o SVG).
5. **Imagens reais**: 4 garantidas (P2, P4, P5, P6) + 2 condicionais (P3, P8). Buscar via `buscador-imagem-medica-bauer` com validação tripla; checar `assets/img/` antes. Exceções `data-piso-img-exempt` em P1, P7, P9 (+ fallback condicional em P3, P8). **Nenhuma foto de criança identificável sem licença/consentimento claro — preferir TC, histologia e peça.**
6. **Quiz**: 18 perguntas (2/página), todas gold — `quiz__justification` refuta **cada** alternativa errada + `quiz__distractor` que ensina por que se cai. Misto MCQ + V/F como na §6.
7. **hl-good/hl-bad**: 2–4 por página, inline, só no que decide a questão (regra que ajuda = verde; pegadinha/perigo/mau prognóstico = vermelho).
8. **Card no hub** (`index.html` raiz): inserir após o card da Aula Extra 8, com os metadados da §0.
9. **CSS/JS próprios**: `aula-extra-09.css` (se precisar de ajuste fino; herdar tokens) + `onco-ped-interactive.js`. Manter PWA auto-update do repo.
10. **Gate anti-metalinguagem** antes de entregar: grep por "nesta aula|o professor|vamos ver|próxima página|como vimos|imagem real|mapa mental|na tua apostila|olha lá|Júlia|Speaker" no HTML final → zero hits no corpo de texto.

---

# 8. RASTREABILIDADE / COBERTURA

Todos os blocos do conteúdo do professor (§3) estão distribuídos nas 9 páginas. Nada foi descartado. Pontos de prova explícitos do original — hierarquia dos "mais comuns" (P1, P6), sítios do neuroblastoma (P2), massa que cruza × não cruza (P3, P7, P9), catecolaminas/Horner/Kinsbourne/guaxinim (P3, P4), calcificação + VMA/HVA (P5), WAGR/Beckwith/aniridia/hemi-hipertrofia/rastreio (P6), palpação delicada + metástase pulmonar (P7), anaplasia (P8), os três enunciados reais (P9) — todos preservados com a voz Bauer e zero metalinguagem.
