# DESIGN — Aula Extra 11 · Sarcomas

> Prompt-final página a página para o Executor. Chassi-ouro: `aulas/aula-extra-07-ca-bexiga/index.html`.
> Fonte integral: `transcricoes/extra11-sarcomas.txt` (380 linhas). Voz Bauer, zero metalinguagem.
> Densidade nível mains. Preservação 100% do professor.

---

## 0. METADADOS DA AULA (para hub + head)

- **Título:** Sarcomas
- **Título no card:** `Sarcomas — partes moles, retroperitônio e o tumor desmoide`
- **Sigla (2 letras):** `SA`
- **Slug / pasta:** `aula-extra-11-sarcomas`
- **data-aula:** `extra-11-sarcomas`
- **Nº de páginas:** **8**
- **Chip de status:** `Disponível` (`lesson__chip--ready`)
- **Tags do card:** `8 páginas` · `16 questões` · `8 SVG interativos · 6 imagens reais`
- **theme-color / título head:** seguir padrão `#07171a` / `Sarcomas — Aula Extra 11 — Cirurgia Oncológica 2 Bauer`

### Descrição para o card do hub (`lesson__desc`)
> Um dos temas mais fáceis da cirurgia depois que você entende a lógica — e um dos que mais derruba quem nunca parou para estudá-lo. A aula constrói o sarcoma a partir de três perguntas de prova que se repetem: **onde** ele aparece, **qual o tipo histológico** mais comum e **como** se obtém o material para histopatologia. O tripé das localizações — **extremidades** (a mais comum, com a **coxa** na ponta), **tronco** e **retroperitônio** — e o exame certo para cada uma (**RM** na extremidade, **TC** no tronco e no retroperitônio) · o tipo histológico campeão: **lipossarcoma** no adulto (rabdomiossarcoma alveolar na criança) · por que o sarcoma mata — **só com metástase**, e ela vai para o **pulmão**, não para o fígado, porque não tem primeira passagem hepática (daí a **TC de tórax** no estadiamento de todos) · quando investigar um caroço (**>5 cm** ou profundo/aderido) e o exame de escolha, a **core biópsia** (agulha grossa, trucute — não PAAF) · o tratamento de partes moles: **ressecção radical com preservação de membro**, margem de 1-2 cm, e a radioquimioterapia adjuvante quando **>5 cm, alto grau ou avançado** · o capítulo à parte do **sarcoma de retroperitônio**: diagnóstico **só por TC, sem biópsia** (biopsiar espalha), o diferencial pré-operatório (**LDH** para linfoma, **βHCG + alfafetoproteína** para tumor de células germinativas), o **exame do pano verde** e a **ressecção em bloco** (invadiu o rim, tira o rim), a recorrência altíssima e por que **não se faz radioterapia** ali · e o fechamento com o **tumor desmoide** — localmente agressivo mas sem metástase, ligado a **gestação** e à **polipose adenomatosa familiar / síndrome de Gardner**, tratado como o sarcoma de partes moles.

### Sigla no hub
`SA` (mesmo padrão `CB`/`TM`, `lesson__sigla`).

---

## 1. CORREÇÕES MÉDICAS SINALIZADAS (erros de transcrição/ASR)

O Summary AI corrompeu nomes e algumas palavras. Corrigir **silenciosamente** no produto (não comentar no texto do aluno), registrado aqui para o Executor:

| Na transcrição | Forma correta (usar no produto) | Natureza |
|---|---|---|
| "reto peritôneo" / "reto peritoneal" (linhas 35-37, 56, 187…) | **retroperitônio / retroperitoneal** | ASR. O professor fala de tumor retroperitoneal, não de reto/ânus. Corrigir em TODAS as ocorrências. |
| "Sadistone" (linha 74) | **WHO / atlas de patologia** (genérico) — ou suprimir o nome | ASR de nome de referência de patologia, irreconhecível com segurança. NÃO inventar fonte; reescrever como "abre um atlas de patologia e encontra mais de cem tipos histológicos". |
| "PAF" (linha 139, biópsia agulha fina) | **PAAF (punção aspirativa por agulha fina)** | A sigla certa do exame citado como contraponto à core. |
| "PAF" (linha 320, polipose) | **PAF = polipose adenomatosa familiar** | Atenção: a MESMA sigla, dois sentidos. Em P5 = agulha fina (escrever PAAF). Em P8 = polipose adenomatosa familiar. Não confundir as duas. |
| "trucute" (linha 140) | **Tru-Cut** (agulha de fragmento) | Nome comercial/genérico da agulha grossa. Grafia. |
| "function expiry" (linha 332) | **preservação da função** | ASR. O professor repete "preservação da função / preservação de membros" em português; "function expiry" é ruído. Usar a forma em português. |
| "ressecção em block" (linha 245) | **ressecção em bloco** (en bloc) | Manter "em bloco"; pode citar o termo en bloc entre parênteses. |
| "tumor de Gardner" / "síndrome de Gardner" (linha 323) | **síndrome de Gardner** (variante da PAF) | Manter. É a associação correta com desmoide. |

Nota de fidelidade clínica: o professor diz **rabdomiossarcoma alveolar** como o mais comum da criança (linha 86) e admite "nunca vi cair em prova". Preservar exatamente como ele falou — é a informação dele, com a ressalva dele. Não trocar por "embrionário".

Nenhum erro de **lógica clínica** do professor a corrigir — a aula é coerente. Apenas grafia/ASR e a desambiguação crítica de PAF.

---

## 2. MAPA DE EXTRAÇÃO → PÁGINAS (cobertura 100%)

| Bloco da transcrição (linhas) | Conteúdo | Página(s) |
|---|---|---|
| 8–32 | A tese: sarcoma assusta mas é fácil; abrange partes moles e retroperitônio; tudo de prova cabe aqui | P1 |
| 32–62 | As três localizações (extremidades > tronco > retroperitônio); coxa a mais comum; proximais > distais; o caso da pele com implante; por que partes moles vão direto pra onco | P1 (tese) + P2 (detalhe) |
| 63–73 | Melhor exame por sítio: RM na extremidade, TC no tronco e no retroperitônio | P3 (parte) |
| 74–87 | Tipo histológico: cem tipos; lipossarcoma o mais comum no adulto; rabdomiossarcoma alveolar na criança | P3 (parte) |
| 88–107 | Por que o sarcoma mata: só com metástase; vai pro pulmão (não fígado); sem primeira passagem hepática; TC de tórax no estadiamento | P4 |
| 108–143 | Diagnóstico: biópsia só em tumor >5 cm ou profundo/esquisito; core biópsia (agulha grossa, Tru-Cut) × PAAF; incisional se não houver core | P5 |
| 144–179 | Tratamento partes moles: ressecção radical com preservação de membro; antes era amputar; margem 1-2 cm; >5 anos livre; radioquimio adjuvante se >5 cm/alto grau/avançado | P6 |
| 184–246 | Retroperitônio: diferencial (LDH→linfoma; βHCG+AFP→TCG); histologia (lipossarcoma > leiomiossarcoma); NÃO biopsia (espalha); só TC; exame do pano verde; invade rim, ressecar junto; ressecção em bloco | P7 |
| 247–296 | Retroperitônio: tira tudo que invade (rim, bexiga, intestino, porta — exceto aorta); recorrência altíssima; responde mal; NÃO faz RT (vísceras na frente); quimio perde força; recorrências repetidas ao longo de anos | P7 |
| 297–339 | Tumor desmoide: localmente agressivo, sem metástase; localização = partes moles (extremidades/tronco/cicatriz); fatores de risco (gestação, PAF/Gardner); diagnóstico = core/incisional; tratamento = ressecção c/ preservação da função | P8 (parte) |
| 340–380 | Onde cai (Jundiaí ama; questões UERJ 2020, Santa Catarina, 2022); localização mais comum = coxa; core é a melhor biópsia (centro × periferia) | P8 (síntese de prova) |

Compartimentação: a aula tem dois "blocos-mãe" — **partes moles** (P1-P6) e **retroperitônio** (P7) — mais o **desmoide** (P8). P7 concentra o retroperitônio inteiro por ser "totalmente diferente" no diagnóstico e tratamento (justificativa do próprio professor, linha 188): densidade altíssima, página própria robusta. P8 funde desmoide + a vitrine de questões reais por serem ambos "fechamento e prova".

---

## 3. DISTRIBUIÇÃO DE ABERTURAS (anti-monotonia)

8 páginas → máx ⌈8/3⌉ = **3 por estratégia**, máx 2 consecutivas.

| Página | Estratégia | Justificativa |
|---|---|---|
| P1 | **E1 — Pergunta central** | A aula inteira nasce de "por que esse tema assusta e na verdade é fácil?". Pergunta organiza a tese. |
| P2 | **E6 — Mnemônico-âncora** | As três localizações (Extremidade > Tronco > Retroperitônio, coxa no topo) são a lista-mãe de prova; ancorar primeiro. |
| P3 | **E7 — Comparação chocante** | Dois pares em tensão na mesma página: RM × TC (por sítio) e lipossarcoma × rabdomiossarcoma (adulto × criança). |
| P4 | **E2 — Dado impactante** | "Pulmão, não fígado" é o fato contraintuitivo que organiza a página; abre com o destino metastático. |
| P5 | **E4 — Achado típico / pegadinha** | "Caroço >5 cm ou profundo" é o gatilho; e core × PAAF é a pegadinha clássica (igual mama). |
| P6 | **E8 — Erro comum desmontado** | "Sarcoma de coxa = amputar a perna" é o mito histórico; desmontar com a preservação de membro. |
| P7 | **E7 — Comparação chocante** | Partes moles × retroperitônio: biopsia × não biopsia, RT × sem RT — o contraste É a página. |
| P8 | **E5 — Meta + checklist** | Página-síntese: desmoide + a checklist de prova que o aluno precisa cravar antes da banca. |

Distribuição: E7 ×2 (P3, P7) · E1, E2, E4, E5, E6, E8 ×1. Nenhuma >3. Consecutivas: P3 e P7 não são adjacentes. OK.

---

## 4. CONVENÇÕES DE CHASSI (recap para o Executor)

- Estrutura por página: `<article class="page" data-strategy="...">` → `page-tag` (+ `page-tag__dot`) → `chipset` (2-3 `chip chip--topic`) → opener (variante por estratégia) → `page-title` → blocos `topic-h` + `prose` → figuras (`figure-svg` hotspot e/ou `figure.med`) → asides (`op-summary`, `dont-confuse`, `mnemonic`, `board-wants`, `trap`) → `quiz` (2 perguntas) → `page-nav` (`page-nav__counter` `N / 8`).
- **Openers por estratégia (classes já no chassi):** E1 `opener--question` · E2 `opener--stat` · E3 `opener--case` · E4 `opener--trap` · E5 `opener--checklist` · E6 `opener--mnemonic` · E7 `opener--vs` · E8 `opener--bust`.
- **Destaque inline:** `<span class="hl hl-good">` (verde = bom/ressecável/margem livre/bom prognóstico), `<span class="hl hl-bad">` (vermelho = ruim/metástase/irressecável/espalhar/recorrência), `hl-warn` (âmbar = cautela/pegadinha). Aplicar ao **termo**, nunca à frase. 2-4 por página.
- **Quiz:** 2 perguntas/página (`quiz__question` → `quiz__stem` → `quiz__alternatives` → `quiz__justification` + `quiz__distractor`). `quiz__justification` refuta CADA alternativa errada. `quiz__distractor` explica por que cair na isca. Gabarito em `<strong>`. Alternativas com `data-correct`.
- **Piso visual:** ≥1 SVG-hotspot (`figure-svg` → `figure-svg__frame` → `figure-svg__stage` → `<svg role="img" aria-labelledby>`, hotspots `tabindex="0" role="button" aria-expanded`/`aria-pressed`) + ≥1 imagem real (`figure.med` → `img-wrap` > `img` + `figcaption` com `<strong>Achado:</strong>` + `<span class="attr">…CC…<a>Ver fonte</a></span>`) por página. Onde não-fotografável, marcar `data-piso-img-exempt="…"` no `<article>` e justificar.
- **Tokens de cor no SVG:** `var(--teal-*)` para bom; `var(--coral-*)` / `var(--err-red)` para ruim; `var(--warn-amber)` para cautela; `var(--ink-*)` texto; `var(--bg-elevated)` / `var(--bg-glass-strong)` superfícies; `var(--border-mid)` traços.
- Menu lateral (`menu-panel__list`) e contador `N / 8` atualizados.

---

# 6. ROTEIRO PÁGINA POR PÁGINA

---

## P1 — O tema que assusta sem motivo
**Estratégia: E1 — Pergunta central** · *justificativa:* a aula existe para desfazer um medo; abrir com a pergunta que organiza a tese alinha a expectativa de raciocínio.
**Itens preservados:** linhas 8–32 (+ a tese das localizações, detalhada em P2).
**Slug-título menu:** "Por que parece difícil"

**Chipset (chip--topic):** `Partes moles + retroperitônio` · `Três perguntas de prova` · `Tema curto`

**Opener (opener--question / E1):**
> *Pergunta central:* Por que sarcoma tem fama de tema impossível — e na prática se resolve com **três perguntas de prova** que se repetem sempre?

**Tópicos visíveis (topic-h + prose):**

1. **topic-h:** "O tema que todo mundo pula"
   - Prosa: sarcoma é o assunto que se vai deixando de lado — há câncer de pâncreas, de estômago, tanta coisa "maior" para estudar, que ele fica para depois e nunca chega a vez. Aí cai na prova e dá branco. O paradoxo é que, sentado para estudar, é um dos temas **mais fáceis** da cirurgia: tem pouca coisa de verdade, e essa pouca coisa se repete. `hl-good` em **mais fáceis**.

2. **topic-h:** "Dois territórios, o mesmo nome"
   - Prosa: sob o nome sarcoma cabem dois mundos que se comportam diferente. O **sarcoma de partes moles** — extremidades, tronco — que é o grosso da aula. E o **sarcoma de retroperitônio**, que tem o mesmo histopatológico mas diagnóstico e tratamento **totalmente diferentes** (vira capítulo à parte adiante). Reconhecer de qual dos dois a banca fala já muda toda a conduta. `hl-warn` em **totalmente diferentes**.

3. **topic-h:** "As três perguntas que a banca repete"
   - Prosa: a prova de sarcoma de partes moles gira em torno de três perguntas, em ordem de frequência. Primeira: **onde** ele aparece (a localização). Segunda: **qual o tipo histológico** mais comum. Terceira: **como** se obtém o material para a histopatologia. Quem tem essas três respostas na ponta da língua acerta praticamente toda questão do tema. As próximas páginas constroem cada uma.

**hl:** `hl-good` "mais fáceis", `hl-warn` "totalmente diferentes".

**BRIEF VISUAL:**
- **SVG (figure-svg hotspot):** "As três perguntas da banca" — três cartões empilhados, cada um com uma pergunta-tipo ("Onde aparece?", "Qual o tipo histológico?", "Como biopsiar?"). Cada cartão é hotspot (`tabindex="0" role="button" aria-expanded`): ao focar/ativar, revela a resposta-âncora oculta (extremidades/coxa · lipossarcoma · core biópsia) que será desenvolvida nas páginas seguintes. Ensina o formato da prova antes do conteúdo. Cartão "Onde" destacado como o mais frequente.
- **Imagem real (figure.med):** corpo humano / esquema anatômico com sarcoma de partes moles em extremidade (massa de coxa) OU foto clínica de tumoração de partes moles. Achado: massa de partes moles em membro, sem sinais inflamatórios. Fonte CC (Wikimedia / Radiopaedia, soft tissue sarcoma). Caption com `Achado:` + `attr` + fonte.

**Asides:** `op-summary` (Resumo operacional): "Sarcoma = partes moles (o grosso) + retroperitônio (capítulo à parte). Em partes moles, a prova repete três perguntas: onde, qual histologia, como biopsiar."

**QUIZ P1:**
1. (MCQ) Em provas de sarcoma de partes moles, qual é a pergunta que mais aparece?
   - A) A classificação molecular do tumor
   - B) **A localização (onde o sarcoma aparece)** ✓
   - C) O esquema de quimioterapia de primeira linha
   - D) A taxa de sobrevida em 10 anos
   - *Justification:* **Gabarito B.** A localização é a pergunta nº 1 do tema, seguida pelo tipo histológico e pela técnica de biópsia. Classificação molecular (A) não é cobrada nesse nível — há mais de cem tipos histológicos, mas a prova só quer o mais comum. Esquema de quimio (C) não é o foco: o tratamento gira em torno da ressecção. Sobrevida em números (D) não é o padrão de cobrança aqui.
   - *Distractor:* A e C são iscas de quem imagina que oncologia "tem que" cobrar biologia molecular e protocolo de quimio — neste tema a banca é muito mais simples e estatística.
2. (V/F) "O sarcoma de partes moles e o sarcoma de retroperitônio compartilham o mesmo histopatológico, mas diferem totalmente em diagnóstico e tratamento." → **Verdadeiro**
   - *Justification:* **Verdadeiro.** É o eixo da aula: mesma linhagem histológica, condutas opostas — partes moles se biopsia e pode receber radioterapia; o retroperitônio não se biopsia e não recebe radioterapia. Marcar Falso ignora a distinção que o professor anuncia como o "diferencial" do retroperitônio.

---

## P2 — Onde o sarcoma mora
**Estratégia: E6 — Mnemônico-âncora** · *justificativa:* a lista de localizações (extremidade > tronco > retroperitônio, coxa no topo) é a resposta de prova nº 1; ancorar o ranking primeiro, explicar depois.
**Itens preservados:** linhas 32–62.
**Slug-título menu:** "As três localizações"

**Chipset:** `Extremidades > tronco > retroperitônio` · `Coxa no topo` · `Proximais > distais`

**Opener (opener--mnemonic / E6):**
> **Âncora das localizações:** **Extremidade · Tronco · Retroperitônio** — nessa ordem de frequência. E dentro da extremidade, a campeã é a **coxa**. Decore o pódio; quase toda questão de "onde aparece" cai dentro dele.

**Tópicos visíveis:**

1. **topic-h:** "O pódio das localizações"
   - Prosa: o sarcoma de partes moles aparece em três grandes endereços. As **extremidades** são a localização mais comum de todas. Em segundo, o **tronco** (dorso, parede). Em terceiro, o **retroperitônio** — que parece o mais comum quando se começa a estudar, mas não é (essa é uma pegadinha do próprio tema). Quando a banca lista "tronco, cabeça, retroperitônio, extremidades" e pergunta a mais frequente, a resposta é **extremidades**. `hl-good` em **extremidades**, `hl-warn` em "retroperitônio … não é o mais comum".

2. **topic-h:** "Dentro da extremidade: proximal e coxa"
   - Prosa: descendo um nível, as extremidades **proximais** são mais acometidas que as distais — coxa, braço, ombro. E entre todas, a **coxa** é a localização específica mais comum. Se a questão der opções dentro do membro (coxa, perna, braço), a aposta é **coxa**. É a "perguntinha" que vira e mexe aparece. `hl-good` em **coxa**.

3. **topic-h:** "Por que o sarcoma de partes moles 'some' do hospital geral"
   - Prosa: há um detalhe que confunde a percepção de frequência. O retroperitônio parece comum porque é o que o cirurgião geral mais vê — mas isso é viés de encaminhamento. O sarcoma de partes moles muitas vezes começa como um "lipoma" qualquer: o caroço é retirado num hospital comum, o histopatológico volta **sarcoma**, e o paciente é imediatamente encaminhado para a cirurgia oncológica (um INCA da vida, um serviço de onco). Ou seja, ele existe muito — só não fica no hospital geral. `hl-warn` em "veio sarcoma no histopatológico".

**hl:** `hl-good` "extremidades", `hl-good` "coxa", `hl-warn` "retroperitônio não é o mais comum".

**BRIEF VISUAL:**
- **SVG (figure-svg hotspot):** "Mapa de localização do sarcoma" — silhueta humana frontal com três zonas-hotspot: extremidades (membros, com a coxa pulsando como ponto mais quente), tronco (dorso/parede) e retroperitônio (centro abdominal, atrás). Cada zona é hotspot: ao focar, ilumina e mostra o posto no ranking (1º extremidades / 2º tronco / 3º retroperitônio) e, na extremidade, destaca "coxa = mais comum / proximais > distais". Gradiente de calor: extremidade quente → retroperitônio frio. Ensina o pódio espacialmente.
- **Imagem real (figure.med):** foto clínica do paciente com sarcoma + implante de pele (o caso descrito nas linhas 46-53: tumor crescendo, implante cutâneo com seta). Achado: tumoração de partes moles com nódulo-satélite cutâneo. Fonte CC (Wikimedia, soft tissue sarcoma skin). Caption + fonte. *Alternativa:* peça/RM de sarcoma de coxa.

**Asides:**
- `mnemonic`: "Pódio do sarcoma de partes moles: **1º extremidade** (coxa na ponta, proximais > distais), **2º tronco**, **3º retroperitônio**."
- `op-summary` (Resumo operacional): "Pergunta 'onde é mais comum?' → **extremidades**, e dentro delas, **coxa**. Retroperitônio NÃO é o mais comum, apesar de ser o que o cirurgião geral mais vê."

**QUIZ P2:**
1. (MCQ) A localização mais frequente do sarcoma de partes moles é:
   - A) Retroperitônio
   - B) Tronco
   - C) **Extremidades (a coxa em primeiro lugar)** ✓
   - D) Cabeça e pescoço
   - *Justification:* **Gabarito C.** As extremidades lideram, com a coxa como sítio específico mais comum. O retroperitônio (A) é o terceiro e só parece o mais comum por viés de encaminhamento — é o que o cirurgião geral mais opera. Tronco (B) é o segundo. Cabeça e pescoço (D) é localização incomum para sarcoma de partes moles.
   - *Distractor:* A é a isca-clássica: quem aprende o tema "achando" que retroperitônio é o mais comum cai exatamente onde o professor avisa. B é o segundo lugar, plausível, mas não o topo.
2. (Lacuna) "Dentro das extremidades, as porções ______ são mais acometidas que as distais, e a localização específica mais comum é a ______." → **proximais / coxa**
   - *Justification:* Proximais > distais (coxa, braço, ombro) e a coxa no topo. Responder "distais / perna" inverte o padrão e perde a perguntinha de prova que o professor destaca como recorrente.

---

## P3 — Que imagem pedir e que histologia esperar
**Estratégia: E7 — Comparação chocante** · *justificativa:* a página vive de dois pares em tensão — RM × TC (decidido pelo sítio) e lipossarcoma × rabdomiossarcoma (adulto × criança).
**Itens preservados:** linhas 63–87.
**Slug-título menu:** "Imagem e histologia"

**Chipset:** `RM na extremidade × TC no resto` · `Lipossarcoma no adulto` · `Rabdomiossarcoma na criança`

**Opener (opener--vs / E7):**
> Dois pares decidem essa página. **Ressonância × tomografia** — e quem escolhe não é o gosto, é a localização. **Lipossarcoma × rabdomiossarcoma** — e quem escolhe é a idade. Errar o par é errar a questão.

**Tópicos visíveis:**

1. **topic-h:** "RM na extremidade, TC no tronco e no retroperitônio"
   - Prosa: o melhor exame de localização **depende do sítio**. Na **extremidade**, a **ressonância** avalia muito melhor partes moles — define planos, músculo, gordura, relação com vasos. Mas a ressonância não é tão boa para ver lesão na região **axial**, lá dentro da cavidade. Por isso, no **tronco** e no **retroperitônio**, a **tomografia** ganha o primeiro lugar. Regra curta: extremidade → RM; tronco/retroperitônio → TC. `hl-good` em **ressonância** (extremidade), `hl-good` em **tomografia** (tronco/retroperitônio).

2. **topic-h:** "Cem tipos, um nome para guardar: lipossarcoma"
   - Prosa: abrir um atlas de patologia revela mais de **cem** tipos histológicos de sarcoma, cada um ainda variando em alto e baixo grau (miossarcoma de alto grau, de baixo grau, e por aí). É um universo. Mas para a prova só importa o **mais comum**: no adulto, o **lipossarcoma**. Essa é a grande perguntinha que vem logo depois da localização — "qual o principal tipo histológico do sarcoma?" → lipossarcoma. `hl-good` em **lipossarcoma**.

3. **topic-h:** "Na criança, o rabdomiossarcoma"
   - Prosa: a contrapartida pediátrica é o **rabdomiossarcoma alveolar**. É a informação de reserva — raramente cai, mas se cair (adulto × criança), o par muda: lipossarcoma no adulto, rabdomiossarcoma na criança. Guardar o segundo nome custa pouco e fecha a comparação. `hl-warn` em **rabdomiossarcoma alveolar** (raro em prova).

**hl:** `hl-good` "ressonância", `hl-good` "tomografia", `hl-good` "lipossarcoma", `hl-warn` "rabdomiossarcoma alveolar".

**BRIEF VISUAL:**
- **SVG (figure-svg hotspot):** "RM × TC — o exame certo por sítio" — corpo dividido em duas leituras: na extremidade, um ícone de RM aceso; no tronco e no retroperitônio (axial), um ícone de TC aceso. Hotspot em cada região: extremidade → "RM avalia melhor partes moles"; tronco/retroperitônio → "TC ganha na região axial". Um toggle visual mostra a RM "apagando" quando a lesão entra na cavidade. Ensina o critério de escolha, não só o nome.
- **Imagem real (figure.med):** RM de extremidade com sarcoma de partes moles (massa de coxa em sequência T2, bem caracterizada) — para mostrar por que a RM é o exame da extremidade. Achado: massa de partes moles na coxa, bem delimitada à RM. Fonte CC (Radiopaedia, soft tissue sarcoma MRI). Caption + fonte. *Alternativa:* TC de massa de tronco/retroperitônio mostrando lipossarcoma (gordura na lesão).

**Asides:**
- `dont-confuse`: **Extremidade → RM** (melhor para partes moles, define planos) × **Tronco / retroperitônio → TC** (melhor na região axial, dentro da cavidade).
- `mnemonic`: "Imagem: **extremidade = RM**, **axial (tronco/retro) = TC**. Histologia: **adulto = lipossarcoma**, **criança = rabdomiossarcoma**."

**QUIZ P3:**
1. (MCQ) Para avaliar um sarcoma de partes moles localizado na coxa, o melhor exame é:
   - A) **Ressonância magnética** ✓
   - B) Tomografia computadorizada
   - C) Ultrassonografia
   - D) PET-CT de rotina
   - *Justification:* **Gabarito A.** Na extremidade, a RM caracteriza melhor as partes moles — planos musculares, gordura, relação com vasos. A TC (B) é a escolha para tronco e retroperitônio (região axial/cavidade), onde a RM perde qualidade. US (C) não estadia partes moles profundas com precisão. PET-CT (D) não é o exame de localização inicial proposto aqui.
   - *Distractor:* B é a isca de quem decora "TC para tumor" sem reparar que a regra muda por sítio — TC é para o tronco e o retroperitônio, não para a extremidade.
2. (MCQ) O tipo histológico mais comum de sarcoma de partes moles no adulto é:
   - A) Leiomiossarcoma
   - B) Rabdomiossarcoma alveolar
   - C) **Lipossarcoma** ✓
   - D) Angiossarcoma
   - *Justification:* **Gabarito C.** No adulto, o lipossarcoma é o tipo histológico mais comum — a resposta de prova logo após a localização. O rabdomiossarcoma alveolar (B) é o mais comum na **criança**, não no adulto. Leiomiossarcoma (A) é o segundo mais comum no retroperitônio especificamente, mas não o campeão geral. Angiossarcoma (D) é incomum.
   - *Distractor:* B é a isca etária — troca adulto por criança. A é a isca "do retroperitônio", relevante só naquele sítio específico.

---

## P4 — Por que o sarcoma mata (e para onde ele vai)
**Estratégia: E2 — Dado impactante** · *justificativa:* "metástase no pulmão, não no fígado" é o fato contraintuitivo que organiza a página; abrir com o destino metastático fixa o raciocínio.
**Itens preservados:** linhas 88–107.
**Slug-título menu:** "Mortalidade e metástase"

**Chipset:** `Só mata com metástase` · `Pulmão, não fígado` · `TC de tórax em todos`

**Opener (opener--stat / E2):**
> O sarcoma de coxa não mata comprimindo a coxa. Ele mata por **um** motivo só — **metástase** — e o destino dela contraria o resto da cirurgia digestiva: **pulmão, não fígado**. Esse desvio de rota define o estadiamento de todo sarcoma.

**Tópicos visíveis:**

1. **topic-h:** "A pessoa só morre se houver metástase"
   - Prosa: pensa no paciente com sarcoma na coxa. Por que ele morreria? Não é a massa comprimindo a perna. A causa de mortalidade do sarcoma de partes moles é uma só: a **disseminação à distância**. Sem metástase, o tumor local é tratável; com metástase, muda o jogo. Tudo o que se faz de estadiamento existe para responder uma pergunta — tem metástase ou não. `hl-bad` em **metástase**.

2. **topic-h:** "O destino é o pulmão — e o porquê"
   - Prosa: aqui está o detalhe que diferencia o sarcoma de quase todo tumor do trato gastrointestinal. Os tumores do TGI tipicamente mandam metástase para o **fígado**, porque drenam pelo sistema porta e sofrem **primeira passagem hepática**. O sarcoma de partes moles, não: ele cai direto na **circulação sistêmica**, sem efeito de primeira passagem hepática, então a metástase vai para o **pulmão**. É a lógica vascular que decide o órgão-alvo. `hl-bad` em **pulmão**, `hl-good` em "sem primeira passagem hepática" (raciocínio).

3. **topic-h:** "Por isso, TC de tórax em todo paciente"
   - Prosa: a consequência prática é direta. Todo paciente com sarcoma faz estadiamento com **TC de tórax**, porque o pulmão é o sítio principal de metástase. Não é TC de abdome procurando fígado primeiro — é o tórax, atrás da disseminação que realmente importa. `hl-good` em **TC de tórax**.

**hl:** `hl-bad` "metástase", `hl-bad` "pulmão", `hl-good` "TC de tórax".

**BRIEF VISUAL:**
- **SVG (figure-svg hotspot):** "Duas rotas, dois órgãos" — diagrama de duas vias de drenagem. À esquerda, tumor do TGI → sistema porta → **fígado** (primeira passagem hepática marcada). À direita, sarcoma de partes moles → circulação sistêmica (sem porta) → **pulmão**. Hotspot em cada órgão-alvo e na bifurcação: porta → "primeira passagem hepática → fígado"; sistêmica → "sem primeira passagem → pulmão". Ensina o mecanismo vascular que define o destino. SVG-clímax conceitual da página.
- **Imagem real (figure.med):** TC de tórax com metástases pulmonares (nódulos múltiplos "em soltar balões") — o achado do estadiamento. Achado: nódulos pulmonares metastáticos bilaterais. Fonte CC (Radiopaedia / Wikimedia, pulmonary metastases CT). Caption + fonte.

**Asides:**
- `board-wants` (O que a banca quer): "Sarcoma de partes moles metastatiza para o **pulmão** (circulação sistêmica, sem primeira passagem hepática) — ao contrário dos tumores do TGI, que vão para o fígado. Por isso o estadiamento é **TC de tórax**."
- `op-summary` (Resumo operacional): "Só mata com metástase, e ela vai para o pulmão. Estadiar = TC de tórax, sempre."

**QUIZ P4:**
1. (MCQ) O principal sítio de metástase do sarcoma de partes moles é:
   - A) Fígado
   - B) **Pulmão** ✓
   - C) Osso
   - D) Cérebro
   - *Justification:* **Gabarito B.** O sarcoma cai na circulação sistêmica sem primeira passagem hepática, então o sítio principal é o pulmão — por isso o estadiamento usa TC de tórax. Fígado (A) é o destino dos tumores do TGI (drenagem porta, primeira passagem hepática), justamente o contraste que o professor cobra. Osso (C) e cérebro (D) não são o sítio principal aqui.
   - *Distractor:* A é a armadilha mais comum: o aluno generaliza "tumor abdominal/digestivo metastatiza no fígado" para o sarcoma, ignorando que ele não passa pelo sistema porta.
2. (V/F) "A principal causa de morte no sarcoma de partes moles é a compressão local progressiva do tumor." → **Falso**
   - *Justification:* **Falso.** A mortalidade vem da **metástase à distância**, não da compressão local — um sarcoma de coxa não mata comprimindo a coxa. Marcar Verdadeiro inverte a lógica e ignora por que se estadia todo paciente atrás de disseminação.

---

## P5 — Quando investigar e como biopsiar
**Estratégia: E4 — Achado típico / pegadinha** · *justificativa:* o gatilho "caroço >5 cm ou profundo" é o achado que decide investigar, e core × PAAF é a pegadinha clássica de prova.
**Itens preservados:** linhas 108–143.
**Slug-título menu:** "Quando e como biopsiar"

**Chipset:** `>5 cm ou profundo/aderido` · `Core biópsia (agulha grossa)` · `Não é PAAF`

**Opener (opener--trap / E4):**
> *Pegadinha:* Nem todo caroço vira biópsia — quase todo mundo tem um lipoma e está tudo bem. A armadilha de prova é dupla: **quando** investigar (e a resposta tem números) e **com qual agulha** — e a agulha "fina" é a errada.

**Tópicos visíveis:**

1. **topic-h:** "Nem todo caroço se biopsia — o gatilho é >5 cm ou profundo"
   - Prosa: tumor de partes moles é comuníssimo, e a maioria é lipoma benigno — o caroço de sempre que o médico manda ficar tranquilo. E é para ficar tranquilo mesmo. Investiga-se só o que é **suspeito**: tumor com **mais de 5 cm**, ou que, à palpação, está **profundo, aderido, esquisito**. Esse é o gatilho que tira o caroço da categoria "lipoma" e o coloca em "avaliação histopatológica". `hl-warn` em **mais de 5 cm**, `hl-warn` em **profundo/aderido**.

2. **topic-h:** "A melhor biópsia é a core (agulha grossa, Tru-Cut)"
   - Prosa: a terceira pergunta de prova mais frequente do tema é "qual a melhor forma de obter material para histopatologia?". Resposta: **core biópsia** — biópsia por **agulha grossa**, com Tru-Cut. É a mesma lógica do tumor de mama: agulha grossa, pegando o **centro** da lesão. E por que o centro? Porque a periferia pode não representar o tumor; o material diagnóstico está no miolo. `hl-good` em **core biópsia**.

3. **topic-h:** "Não é PAAF — e o plano B é a incisional"
   - Prosa: a isca clássica é a agulha **fina** — a **PAAF** (punção aspirativa por agulha fina). Não é ela: a fina aspira células, não dá fragmento de tecido suficiente para tipar o sarcoma. Quando não há core disponível, o plano B é a **biópsia incisional** (que pega um fragmento, mas costuma colher da periferia — por isso é segunda escolha, não primeira). `hl-bad` em **PAAF**, `hl-warn` em **incisional** (segunda escolha).

**hl:** `hl-warn` "mais de 5 cm", `hl-good` "core biópsia", `hl-bad` "PAAF".

**BRIEF VISUAL:**
- **SVG (figure-svg hotspot):** "Fina × grossa: onde cada agulha pega" — corte de uma lesão de partes moles com periferia e centro marcados. Três instrumentos como hotspots: agulha fina (PAAF) tocando a periferia, riscada/vermelha ("aspira célula, não tipa"); agulha grossa (core/Tru-Cut) cravando o centro, verde ("fragmento do miolo = diagnóstico"); incisional pegando um pedaço periférico, âmbar ("plano B"). Ao focar cada uma, explica por que serve ou não. Ensina o conceito centro × periferia.
- **Imagem real (figure.med):** foto de procedimento de core biópsia / agulha Tru-Cut OU peça de fragmento de core biópsia. Achado: cilindro de tecido obtido por agulha grossa. Fonte CC (Wikimedia, core needle biopsy). Caption + fonte. *Alternativa:* foto comparando agulha fina × grossa.

**Asides:**
- `trap` (Pegadinha de prova): "A banca oferece PAAF (agulha fina) como isca. A resposta é **core biópsia** (agulha grossa, Tru-Cut), que pega o centro do tumor. PAAF aspira célula e não tipa o sarcoma."
- `op-summary` (Por que importa na prática): "Caroço comum você tranquiliza. Caroço **>5 cm ou profundo** você investiga — e a biópsia certa é a **core**, não a fina."

**QUIZ P5:**
1. (MCQ) Diante de uma tumoração de partes moles, indica-se investigação histopatológica quando:
   - A) Qualquer nódulo palpável, sempre
   - B) **O tumor tem mais de 5 cm ou é profundo/aderido à palpação** ✓
   - C) Apenas se houver dor associada
   - D) Somente após falha de tratamento clínico
   - *Justification:* **Gabarito B.** O gatilho é tamanho (>5 cm) ou características de profundidade/aderência — o resto, em geral, é lipoma e não precisa de biópsia. Biopsiar "qualquer nódulo" (A) é exagero: a maioria é benigna. Dor (C) não é o critério — sarcoma costuma ser indolor. Não existe "tratamento clínico" prévio (D) para massa de partes moles suspeita.
   - *Distractor:* A é a isca do excesso de zelo; C confunde com a lógica de outros quadros (dor como gatilho), mas aqui o sarcoma é tipicamente indolor.
2. (MCQ) A melhor forma de obter material para diagnóstico de sarcoma de partes moles é:
   - A) PAAF (punção aspirativa por agulha fina)
   - B) Biópsia excisional ampla de imediato
   - C) **Core biópsia (agulha grossa / Tru-Cut)** ✓
   - D) Citologia de raspado
   - *Justification:* **Gabarito C.** A core biópsia, com agulha grossa, pega um fragmento do centro do tumor — material suficiente para tipar o sarcoma (mesma lógica da mama). PAAF (A) só aspira células e não permite tipagem confiável. Excisão ampla de imediato (B) não se faz antes de confirmar e estadiar. Citologia de raspado (D) é para lesões superficiais epiteliais, não para massa profunda.
   - *Distractor:* A é a pegadinha-mãe: "agulha fina" soa menos invasiva e atrai, mas é justamente a errada para tipar sarcoma. Se não houver core, o plano B é a incisional — não a PAAF.

---

## P6 — Tirar o tumor, salvar o membro
**Estratégia: E8 — Erro comum desmontado** · *justificativa:* "sarcoma de coxa = amputar a perna" é o mito histórico que a página existe para derrubar.
**Itens preservados:** linhas 144–179.
**Slug-título menu:** "Cirurgia e adjuvância"

**Chipset:** `Preservação de membro` · `Margem 1-2 cm` · `Adjuvância se >5 cm / alto grau`

**Opener (opener--bust / E8):**
> *"Sarcoma na coxa? Antigamente, a cirurgia era amputar a perna inteira."*
> Isso era verdade — e mudou. Descobriu-se que retirar **só o tumor**, com margem livre, dá o mesmo controle de doença sem mutilar o paciente. A perna fica; o tumor sai. É o conceito de **preservação de membro**.

**Tópicos visíveis:**

1. **topic-h:** "De amputar a perna a preservar o membro"
   - Prosa: o tratamento é, em geral, **ressecção radical** — mas com uma reviravolta histórica. Antigamente, sarcoma de coxa significava amputação: o tumor tinha grande disseminação hematogênica e o medo justificava arrancar o membro. Com o tempo, tentou-se preservar — e alguém ressecou **apenas o tumor**, com margem livre, e o resultado foi **ótimo**: o paciente ficava livre de doença por muito tempo, mais de 5 anos. Nasceu a **ressecção radical com preservação de membro / preservação da função**. `hl-good` em **preservação de membro**.

2. **topic-h:** "A condição que torna isso possível: margem livre"
   - Prosa: a preservação só funciona se a ressecção tiver **margem livre** — pelo menos **1 a 2 cm** de tecido são ao redor do tumor. É a margem que substitui a amputação: garante que não ficou doença, sem precisar tirar o membro. Ressecção radical aqui não quer dizer "tirar tudo o que houver"; quer dizer "tirar o tumor com margem oncológica e poupar a função". `hl-good` em **margem livre**, `hl-good` em **1 a 2 cm**.

3. **topic-h:** "Quando entra a radioquimioterapia adjuvante"
   - Prosa: a sequência é ressecar primeiro e depois decidir adjuvância pelo estágio. Faz-se **radioquimioterapia adjuvante** quando o tumor é **maior que 5 cm**, **de alto grau** na histopatologia, ou já **avançado** (com disseminação à distância). Fora desses gatilhos, a cirurgia com margem livre pode bastar. `hl-warn` em **maior que 5 cm / alto grau / avançado` (gatilhos de adjuvância).

**hl:** `hl-good` "preservação de membro", `hl-good` "margem livre (1-2 cm)", `hl-warn` "alto grau / >5 cm" (gatilho adjuvância).

**BRIEF VISUAL:**
- **SVG (figure-svg hotspot):** "Antes × agora: a margem que salvou o membro" — duas pernas lado a lado. À esquerda (passado, vermelho): linha de amputação alta, membro perdido. À direita (atual, verde): só o tumor removido com um halo de margem de 1-2 cm marcado, membro intacto. Hotspot na linha de amputação ("antigamente: medo da disseminação hematogênica"), no halo de margem ("1-2 cm de margem livre = mesmo controle"), e num seletor de adjuvância (">5 cm / alto grau / avançado → radioquimio"). Ensina por que a margem substituiu a amputação.
- **Imagem real (figure.med):** RM/TC ou peça cirúrgica de ressecção de sarcoma de extremidade com margem (espécime com halo de tecido são). Achado: tumor ressecado com margem de tecido sadio. Fonte CC (Wikimedia, sarcoma resection specimen). Caption + fonte. *Alternativa:* imagem pós-operatória de membro preservado.

**Asides:**
- `mnemonic`: "Tratamento de partes moles: **ressecção radical com preservação de membro** + margem de **1-2 cm**. Adjuvância (radioquimio) se **>5 cm**, **alto grau** ou **avançado**."
- `op-summary` (Por que importa na prática): "Sarcoma de extremidade não é mais sinônimo de amputação. Tira o tumor com margem livre, preserva a função, e some adjuvância só nos gatilhos (>5 cm, alto grau, avançado)."

**QUIZ P6:**
1. (MCQ) O conceito atual de cirurgia para sarcoma de partes moles de extremidade é:
   - A) Amputação do membro como regra
   - B) **Ressecção radical com preservação de membro e margem livre de 1-2 cm** ✓
   - C) Apenas radioterapia, sem cirurgia
   - D) Biópsia seriada sem ressecção
   - *Justification:* **Gabarito B.** O padrão atual é ressecar o tumor com margem oncológica (1-2 cm) preservando o membro e a função — mesmo controle de doença sem mutilar. Amputação (A) era a conduta antiga, abandonada quando se viu que a margem livre bastava. Radioterapia isolada (C) não substitui a ressecção. Biópsia seriada (D) não trata.
   - *Distractor:* A é a isca histórica: ainda aparece como "resposta tradicional", mas o conceito mudou — a preservação de membro é o atual.
2. (MCQ) A radioquimioterapia adjuvante no sarcoma de partes moles está indicada quando:
   - A) Em todos os casos, sempre após a cirurgia
   - B) Apenas se houver metástase cerebral
   - C) **Tumor > 5 cm, de alto grau, ou já avançado** ✓
   - D) Somente em tumores menores que 2 cm
   - *Justification:* **Gabarito C.** Os gatilhos de adjuvância são tamanho (>5 cm), alto grau histológico ou doença avançada. Não é "sempre" (A) — tumores pequenos, baixo grau e com margem livre podem dispensar adjuvância. Metástase cerebral (B) não é o critério (o sítio é o pulmão). Tumores pequenos (D) são justamente os que tendem a dispensar adjuvância, o oposto da alternativa.
   - *Distractor:* A é a isca do "adjuvância no automático"; D inverte o gatilho de tamanho (o limiar é >5 cm, não <2 cm).

---

## P7 — Retroperitônio: o capítulo que vira tudo do avesso
**Estratégia: E7 — Comparação chocante** · *justificativa:* a página inteira é o contraste partes moles × retroperitônio — biopsia × não biopsia, RT × sem RT; a tensão é o conteúdo.
**Itens preservados:** linhas 184–296.
**Slug-título menu:** "Sarcoma de retroperitônio"

**Chipset:** `Não se biopsia (espalha)` · `Só TC + ressecção em bloco` · `Sem radioterapia · recorre muito`

**Opener (opener--vs / E7):**
> Mesmo tumor, conduta espelhada. Em partes moles, **biopsia sim** e **radioterapia sim**. No retroperitônio, **biopsia não** (espalha células pela cavidade) e **radioterapia não** (as vísceras estão na frente). Trocar uma regra pela outra é o erro que a banca arma.

**Tópicos visíveis:**

1. **topic-h:** "O diferencial pré-operatório: o que NÃO é sarcoma"
   - Prosa: diante de uma massa volumosa de retroperitônio, antes de chamar de sarcoma, afaste dois diferenciais por exames de sangue. Se for **linfoma**, o **LDH** levanta a suspeita no pré-operatório. Se for **tumor de células germinativas (TCG)**, fecha-se o diagnóstico com **βHCG e alfafetoproteína** — a mesma dupla de marcadores dos tumores germinativos de testículo (é a mesma linhagem). Esses dois exames simples evitam levar à sala o que se trata clinicamente. `hl-warn` em **LDH** (linfoma), `hl-warn` em **βHCG / alfafetoproteína** (TCG).

2. **topic-h:** "Não se biopsia sarcoma de retroperitônio — ponto"
   - Prosa: aqui a regra de partes moles **se inverte**. Em partes moles, biopsiava-se porque dá para pegar material sem espalhar. No retroperitônio, biopsiar tem **alta chance de espalhar células neoplásicas pela cavidade** — e isso não se faz. Não se biopsia sarcoma de retroperitônio. O diagnóstico é feito **só com a TC de abdome**, sem confirmação histopatológica prévia. `hl-bad` em **espalhar células**, `hl-good` em **só com TC**.

3. **topic-h:** "O exame do pano verde e a ressecção em bloco"
   - Prosa: identificada a massa na TC — tipicamente colada ao **rim**, deslocando-o e já o invadindo — o grande exame passa a ser o **exame do pano verde**: levar para a sala. O tratamento é a **ressecção em bloco** (en bloc): tira o tumor e tudo o que ele estiver invadindo. Invadiu o rim? Tira o rim (quase regra). Pegou um pedaço de bexiga, de intestino, da veia porta? Tira e reconstrói. A única coisa que não se tira é o que **não dá** para tirar — invadiu a aorta, não se ressseca a aorta. O lipossarcoma é o histológico mais comum aqui também, seguido do **leiomiossarcoma**. `hl-good` em **ressecção em bloco**, `hl-bad` em "não dá para tirar (aorta)".

4. **topic-h:** "Por que recorre tanto — e por que sem radioterapia"
   - Prosa: a taxa de recorrência é **altíssima**, e há um motivo encadeado. O sarcoma de retroperitônio responde **muito mal** à adjuvância. E não responde porque **não se pode fazer radioterapia** ali — há todas as vísceras do peritônio na frente, que a radiação queimaria. Sem radioterapia, a quimioterapia isolada perde força. O que sobra é cirúrgico: a cada recorrência, um novo implante, entra-se de novo e resseca-se de novo. Não é incomum o paciente que operou há 10 anos e já voltou três vezes para novas ressecções. `hl-bad` em **altíssima** (recorrência), `hl-bad` em **não se pode fazer radioterapia**.

**hl:** `hl-bad` "espalhar células", `hl-good` "só com TC", `hl-good` "ressecção em bloco", `hl-bad` "não se pode fazer radioterapia". (Parcimônia: 4 termos.)

**BRIEF VISUAL:**
- **SVG (figure-svg hotspot):** "Partes moles × retroperitônio — o espelho da conduta" — duas colunas comparativas. Coluna esquerda (partes moles, verde-neutro): biopsia SIM, radioterapia SIM, ressecção com margem. Coluna direita (retroperitônio, vermelho-alerta): biopsia NÃO (ícone de células se espalhando), radioterapia NÃO (ícone de vísceras na frente), ressecção EM BLOCO (tumor + rim juntos). Hotspot em cada linha de comparação: ao focar, explica por que a regra inverte. Inclui um sub-hotspot na massa colada ao rim ("invadiu → ressecar em bloco"). SVG-clímax da página.
- **Imagem real (figure.med):** TC de abdome com lipossarcoma de retroperitônio volumoso deslocando/invadindo o rim. Achado: massa retroperitoneal volumosa com componente gorduroso, deslocando o rim. Fonte CC (Radiopaedia, retroperitoneal liposarcoma CT). Caption + fonte. *Alternativa:* peça cirúrgica de ressecção em bloco (tumor + rim).

**Asides:**
- `dont-confuse`: **Partes moles** — biopsia (core), pode radioterapia, ressecção com margem × **Retroperitônio** — NÃO biopsia (espalha), NÃO radioterapia (vísceras na frente), ressecção em bloco.
- `board-wants` (O que a banca quer): "No retroperitônio: diagnóstico **só por TC** (nada de biópsia), **ressecção em bloco** (invadiu o rim, tira o rim), **sem radioterapia**, recorrência altíssima. Diferencial pré-op: **LDH** (linfoma), **βHCG + alfafetoproteína** (TCG)."

**QUIZ P7:**
1. (MCQ) Diante de uma massa retroperitoneal com características de sarcoma, a conduta diagnóstica correta é:
   - A) Core biópsia percutânea, como em partes moles
   - B) PAAF guiada por TC
   - C) **Diagnóstico por TC, sem biópsia, indo direto à ressecção** ✓
   - D) Biópsia incisional aberta antes de operar
   - *Justification:* **Gabarito C.** No retroperitônio não se biopsia: a punção tem alta chance de espalhar células neoplásicas pela cavidade. O diagnóstico é por TC e a conduta é a ressecção em bloco. Core (A), PAAF (B) e incisional (D) são todas formas de biópsia — exatamente o que se evita aqui, porque qualquer punção dissemina. A regra de partes moles (biopsiar) não vale neste sítio.
   - *Distractor:* A é a armadilha de transportar a regra de partes moles para o retroperitônio. O ponto da página é que a conduta se **inverte** — biopsiar aqui é o erro.
2. (MCQ) Por que o sarcoma de retroperitônio NÃO recebe radioterapia adjuvante?
   - A) Porque é sempre curado só com cirurgia
   - B) **Porque há vísceras do peritônio na frente do campo, que a radiação lesaria** ✓
   - C) Porque o lipossarcoma é radiossensível demais
   - D) Porque a recorrência é baixa e não justifica
   - *Justification:* **Gabarito B.** As alças intestinais e demais vísceras estão no caminho do campo de radiação e seriam lesadas, o que inviabiliza a radioterapia — e sem ela a quimio perde força, daí a recorrência altíssima e as reoperações. Não é "curado só com cirurgia" (A): ao contrário, recorre muito. Não é radiossensibilidade (C). A recorrência é **altíssima**, não baixa (D) — o oposto da alternativa.
   - *Distractor:* D inverte o fato central (recorrência altíssima); A vende um otimismo que a aula desmente explicitamente com o paciente que reopera várias vezes ao longo de anos.

---

## P8 — Tumor desmoide e o que a banca cobra
**Estratégia: E5 — Meta + checklist** · *justificativa:* página-síntese; fecha com o desmoide e com a checklist de prova que o aluno precisa cravar.
**Itens preservados:** linhas 297–380.
**Slug-título menu:** "Desmoide + prova"

**Chipset:** `Localmente agressivo, sem metástase` · `Gestação · PAF/Gardner` · `Checklist de prova`

**Opener (opener--checklist / E5):**
> Ao final desta página você crava, sem hesitar:
> ☐ Por que o **tumor desmoide** invade tudo mas não metastatiza
> ☐ Os fatores de risco que a banca liga a ele (**gestação · PAF/Gardner · cicatriz**)
> ☐ As três respostas-relâmpago de prova (**coxa · lipossarcoma · core biópsia**)

**Tópicos visíveis:**

1. **topic-h:** "Tumor desmoide: agressivo por perto, manso à distância"
   - Prosa: o tumor desmoide é **localmente agressivo** — cresce e invade tudo o que está em volta, sem dó. Mas tem um traço que o separa do sarcoma: ele **não dá metástase**. Nem hematogênica, nem hepática, nem linfática. Toda a sua agressividade é local. Por isso se trata quase como o sarcoma de partes moles — **ressecção com preservação da função** —, mas com essa diferença de comportamento. `hl-warn` em **localmente agressivo**, `hl-good` em **não dá metástase**.

2. **topic-h:** "Onde aparece e quem tem mais risco"
   - Prosa: a localização é a mesma do sarcoma de partes moles — **extremidades e tronco** — e ele tem uma predileção extra: **cicatrizes** (uma cicatriz hipertrófica, um queloide, podem ser ponto de partida). Os fatores de risco que a banca adora: **gestantes** (risco aumentado) e pacientes com **polipose adenomatosa familiar (PAF)** — incluindo a **síndrome de Gardner**, a variante da PAF com manifestações extracolônicas (como dentes supranumerários). Diagnóstico igual ao de partes moles: **core biópsia** ou incisional. `hl-warn` em **gestantes**, `hl-warn` em **PAF / Gardner**.
   - *Nota ASR (não exibir):* aqui PAF = polipose adenomatosa familiar — não confundir com a PAAF (agulha fina) da P5. Ver §1.

3. **topic-h:** "A checklist de prova — onde isso cai"
   - Prosa: o tema é querido de bancas como **Jundiaí** (que repete sarcoma e já colocou desmoide), além de aparições na **UERJ** (prova de R+ de cirurgia) e em **Santa Catarina**. As três respostas-relâmpago que fecham qualquer questão: localização mais comum → **coxa**; tipo histológico mais comum no adulto → **lipossarcoma**; melhor biópsia → **core biópsia** (pega o **centro** do tumor, enquanto a incisional pega a periferia). Tendo essas três e o comportamento do desmoide, o tema está dominado. `hl-good` em **coxa**, `hl-good` em **lipossarcoma**, `hl-good` em **core biópsia**.

**hl:** `hl-good` "não dá metástase", `hl-warn` "PAF / Gardner", `hl-good` "core biópsia". (Parcimônia: 3-4 termos.)

**BRIEF VISUAL:**
- **SVG (figure-svg hotspot):** "Cola de prova: sarcoma em 6 fatos" — quadro-resumo interativo em layout de "colinha", com seis fatos como hotspots: (1) localização → coxa; (2) histologia adulto → lipossarcoma; (3) metástase → pulmão; (4) biópsia → core; (5) tratamento partes moles → preservação de membro; (6) desmoide → localmente agressivo, sem metástase, PAF/Gardner. Ao focar cada fato, expande um micro-lembrete. Este SVG é o mapa-síntese da aula inteira. Hotspot em cada fato.
- **Imagem real (figure.med):** *Exceção parcial.* Imagem real preferida: TC/RM de tumor desmoide de parede abdominal ou extremidade (massa infiltrativa de partes moles, sem plano de clivagem). Achado: massa desmoide infiltrativa, mal delimitada. Fonte CC (Radiopaedia, desmoid fibromatosis). Caption + fonte. *Se a colinha-síntese for tratada como peça soberana e não houver imagem real distinta com licença limpa para o desmoide:* marcar `data-piso-img-exempt="sintese-svg-soberano"` (mesmo padrão das páginas-síntese do chassi bexiga) — mas a primeira escolha é a imagem real do desmoide.

**Asides:**
- `mnemonic`: "**Desmoide** = localmente agressivo, **sem metástase**; risco em **gestação** e **PAF/Gardner**; trata como partes moles (ressecção com preservação da função)."
- `dont-confuse`: **Sarcoma** — dissemina (metástase pulmonar) × **Desmoide** — invade localmente mas **não** metastatiza.
- `op-summary` (Resumo operacional): "Três respostas que fecham o tema: localização → **coxa**, histologia → **lipossarcoma**, biópsia → **core**. E o desmoide: bravo por perto, manso à distância."

**QUIZ P8:**
1. (MCQ) A característica que distingue o tumor desmoide do sarcoma é:
   - A) O desmoide metastatiza precocemente para o pulmão
   - B) **O desmoide é localmente agressivo, mas não dá metástase** ✓
   - C) O desmoide nunca invade estruturas vizinhas
   - D) O desmoide só ocorre em idosos
   - *Justification:* **Gabarito B.** O desmoide invade agressivamente o que está em volta, porém não metastatiza (nem hematogênica, nem linfática, nem hepática) — é o que o separa do sarcoma, que dissemina para o pulmão. A não pode (A): quem metastatiza para o pulmão é o sarcoma. Ele invade sim localmente (C é falso) — é justamente seu traço. Não é exclusivo de idosos (D): aparece em gestantes e na PAF/Gardner, por exemplo.
   - *Distractor:* A troca o comportamento do desmoide pelo do sarcoma; C exagera no sentido oposto (ele é agressivo localmente, e muito).
2. (MCQ) São fatores de risco classicamente associados ao tumor desmoide:
   - A) Tabagismo e etilismo
   - B) **Gestação e polipose adenomatosa familiar (síndrome de Gardner)** ✓
   - C) Exposição solar crônica
   - D) Infecção por HPV
   - *Justification:* **Gabarito B.** Gestantes têm risco aumentado, e a PAF — incluindo a síndrome de Gardner — é associação clássica do desmoide; cicatrizes (queloide, hipertrófica) também entram. Tabagismo/etilismo (A) ligam-se a outros tumores, não ao desmoide. Exposição solar (C) é fator de câncer de pele. HPV (D) associa-se a tumores de colo, orofaringe, canal anal — não ao desmoide.
   - *Distractor:* A e C são fatores de risco "genéricos de oncologia" que o aluno aplica por reflexo; o desmoide tem associações próprias e específicas (gestação, PAF/Gardner, cicatriz).

---

# 7-12. APÊNDICES PARA O EXECUTOR

### 7. Imagens reais sugeridas (6 alvos + alternativas)
| Pág | Tema | Achado | Fonte sugerida |
|---|---|---|---|
| P1 | sarcoma de partes moles em extremidade | massa de partes moles em membro, sem flogose | Wikimedia / Radiopaedia CC (soft tissue sarcoma) |
| P2 | sarcoma com implante cutâneo (o caso da aula) | tumoração + nódulo-satélite na pele | Wikimedia CC |
| P3 | RM de sarcoma de coxa | massa de partes moles delimitada (T2) | Radiopaedia CC (soft tissue sarcoma MRI) |
| P4 | TC de tórax com metástases pulmonares | nódulos pulmonares bilaterais | Radiopaedia / Wikimedia CC (pulmonary metastases) |
| P5 | core biópsia / agulha Tru-Cut | cilindro de tecido por agulha grossa | Wikimedia CC (core needle biopsy) |
| P6 | peça de ressecção c/ margem (extremidade) | tumor com halo de tecido sadio | Wikimedia CC (sarcoma resection) |
| P7 | TC de lipossarcoma retroperitoneal invadindo rim | massa retroperitoneal volumosa, gordurosa, desloca rim | Radiopaedia CC (retroperitoneal liposarcoma) |
| P8 | TC/RM de tumor desmoide | massa infiltrativa de partes moles mal delimitada | Radiopaedia CC (desmoid fibromatosis) |

Mínimo 6 distintas no produto (1 por página, P8 com exceção permitida). Cada uma com `Achado:` + `attr` + link de fonte (validação tripla: clínica/técnica/licença). Buscador-imagem decide as finais; nunca inventar fonte (corrigir o "Sadistone" como genérico — ver §1).

### 8. SVGs interativos (1 por página, todos hotspot)
P1 três-perguntas-da-banca · P2 mapa-de-localização (silhueta + calor) · P3 RM×TC-por-sítio · P4 duas-rotas-dois-órgãos (porta→fígado × sistêmica→pulmão) · P5 fina×grossa-centro×periferia · P6 antes×agora-margem-salva-membro · P7 espelho-da-conduta (partes moles × retroperitônio) · P8 cola-de-prova-6-fatos.
Cada SVG: `figure-svg` → `figure-svg__frame` → `figure-svg__stage` → `<svg role="img" aria-labelledby>`; hotspots `tabindex="0" role="button"` com `aria-expanded`/`aria-pressed`; tipografia e cores via tokens (`var(--ink-*)`, `var(--teal-*)` bom, `var(--coral-*)`/`var(--err-red)` ruim, `var(--warn-amber)` cautela, `var(--bg-elevated)`/`var(--bg-glass-strong)` superfícies, `var(--border-mid)` traços).

### 9. Mnemônicos / frases de fixação
- **Pódio das localizações:** Extremidade (coxa, proximal) > Tronco > Retroperitônio.
- **Imagem por sítio:** extremidade = RM; tronco/retroperitônio = TC.
- **Histologia:** adulto = lipossarcoma; criança = rabdomiossarcoma alveolar; 2º no retro = leiomiossarcoma.
- **Metástase:** pulmão (não fígado) — sem primeira passagem hepática → TC de tórax no estadiamento.
- **Biópsia:** core (agulha grossa, Tru-Cut, centro do tumor) — não PAAF; incisional é plano B.
- **Cirurgia partes moles:** ressecção radical com preservação de membro, margem 1-2 cm.
- **Retroperitônio:** não biopsia (espalha) · só TC · ressecção em bloco · sem radioterapia · recorre muito · LDH/βHCG-AFP no diferencial.
- **Desmoide:** localmente agressivo, sem metástase; gestação + PAF/Gardner + cicatriz.

### 10. Pegadinhas de prova
1. Retroperitônio NÃO é a localização mais comum (é a 3ª; extremidade é a 1ª) — apesar de parecer pelo viés de encaminhamento.
2. Metástase no **pulmão**, não no fígado (sarcoma não passa pelo sistema porta).
3. Biópsia certa = **core** (agulha grossa); **PAAF** (agulha fina) é a isca.
4. Em partes moles biopsia; no **retroperitônio NÃO se biopsia** (espalha células) — a regra inverte.
5. Em partes moles pode radioterapia; no **retroperitônio não** (vísceras na frente) → recorrência altíssima.
6. Desmoide invade local mas **não metastatiza** — não confundir comportamento com o do sarcoma.
7. **PAF** tem dois sentidos na aula: agulha fina (P5, escrever PAAF) × polipose adenomatosa familiar (P8). Desambiguar.

### 11. O que diferencia o aluno avançado
- Sabe que a conduta **inverte** entre partes moles e retroperitônio (biopsiar/não, radioterapia/não) e não transporta uma regra para o outro sítio.
- Deduz o órgão da metástase pela via vascular (sistêmica → pulmão), em vez de decorar.
- Escolhe a imagem pelo sítio (RM extremidade × TC axial), não por hábito.
- Não confunde desmoide (agressividade local) com sarcoma (disseminação à distância).

### 12. Checklist de preservação
Cobertura 100% das linhas 8–380 (mapa §2). Sem metalinguagem (grep §6.3 do agente). ASR corrigido: **retroperitônio** (não "reto peritôneo"), **PAAF** vs **PAF**, **Tru-Cut**, **preservação da função** (não "function expiry"), "Sadistone" → atlas de patologia genérico (sem inventar fonte). Voz Bauer. Cada página: chipset (2-3) + ≥2 topic-h + 1 SVG hotspot + imagem real (ou exceção marcada P8) + 2 quiz gold com justificativa por alternativa + distractor + hl-good/hl-bad parcimonioso (2-4). Anti-metalinguagem dentro das perguntas centrais e dos openers.

---

## REGISTRO PARA O HUB (index.html — patch do Executor)
Inserir card `aula-extra-11-sarcomas` na seção de extras, após o card de mediastino (extra-10) ou na posição cronológica dos extras:

```html
<a class="lesson" href="aulas/aula-extra-11-sarcomas/index.html">
  <span class="lesson__sigla" aria-hidden="true">SA</span>
  <div class="lesson__row">
    <span class="lesson__num">Aula Extra 11</span>
    <span class="lesson__chip lesson__chip--ready">Disponível</span>
  </div>
  <div class="lesson__title">Sarcomas — partes moles, retroperitônio e o tumor desmoide</div>
  <div class="lesson__desc"><!-- usar a descrição da seção 0 --></div>
  <div class="lesson__tags">
    <span class="lesson__tag">8 páginas</span>
    <span class="lesson__tag">16 questões</span>
    <span class="lesson__tag">8 SVG interativos · 6 imagens reais</span>
  </div>
  <span class="lesson__enter">Entrar na aula →</span>
</a>
```
