# PROMPT FINAL — AULA EXTRA 8 · CÂNCER DE TESTÍCULO
## Plataforma Cirurgia Oncológica 2 Premium — design página a página, pronto para o Executor

---

## 0. METADADOS DA AULA

| Campo | Valor |
|---|---|
| **Título da aula** | Câncer de Testículo |
| **Título longo (card/hero)** | Câncer de testículo — tumor de células germinativas |
| **Sigla (2 letras)** | `CT` |
| **Slug** | `aula-extra-08-testiculo` |
| **Posição no hub** | Aula Extra 8 (após Aula Extra 7 — Câncer de Bexiga) |
| **data-aula** | `extra-08-testiculo` |
| **data-platform** | `cirurgia-oncologica-2` |
| **Nº de páginas** | **12** |
| **Chassi** | `aulas/aula-extra-07-ca-bexiga/index.html` (header, menu-overlay, progress-bar, article.page, opener variants, chipset, topic-h, prose, figure-svg, figure.med, quiz gold, page-nav, asides) |
| **CSS/JS herdados** | `tokens.css`, `base.css`, `components.css` + css/js próprios da aula (`aula-extra-08.css`, `app.js` com `initInteractive`, `testiculo-interactive.js`) |
| **Espinha dorsal da aula** | **A sequência de conduta que vence 80% das questões: USG + marcadores → orquiectomia inguinal radical (nunca escrotal) → estadiamento DEPOIS.** Tudo converge para "tempo é testículo". |

### Descrição para o card do hub (lesson__desc)

> Uro-oncologia do homem jovem em 12 páginas, montada inteira ao redor de uma sequência de conduta que decide 80% das questões: **USG + marcadores tumorais → orquiectomia inguinal radical → estadiamento depois**. O gatilho do enunciado (homem **20–40 anos**, **criptorquidia**, **massa testicular indolor**) · **95% tumores de células germinativas**, seminomatoso × não-seminomatoso (frequentemente misto) · a criptorquidia como grande fator de risco (**4–6×**) e o contralateral que também sobe (**até 2×**) · a hierarquia familiar (irmão **8–12×** > pai **2–4×**) e a história pessoal prévia (**12×**) · a massa **indolor, endurecida, bem delimitada** ao exame bimanual, a ginecomastia do **β-hCG** e a disseminação pelo **canal inguinal → retroperitônio → supraclavicular** · a USG hipoecogênica/heterogênea ("carne de peixe") com Doppler bilateral · os marcadores que separam os subtipos (**AFP nunca no seminoma**, **β-hCG pode em ambos**, **LDH inespecífico**) e a leitura pré/pós-op para prognóstico · a **orquiectomia inguinal radical** com cordão espermático e o erro fatal da via escrotal (semeia metástase) · a quimioterapia à base de **cisplatina** que tira o "atestado de óbito" da metástase · o estadiamento **depois** da cirurgia (TC de abdome com contraste se marcador não cai) · e o diagnóstico diferencial que a banca arma — **torção** e **orquiepididimite doem; testículo retrátil não é fator de risco**.

### lesson__tags (3)
- `12 páginas`
- `24 questões`
- `12 SVG interativos · 5 imagens reais`

> **Card no hub** (`index.html` raiz): replicar o bloco `<a class="lesson">` do CB, com `href="aulas/aula-extra-08-testiculo/index.html"`, `lesson__sigla = CT`, `lesson__num = Aula Extra 8`, chip `lesson__chip--ready` "Disponível", título e desc acima. Inserir **depois** do card da Aula Extra 7.

---

## 1. CORREÇÕES MÉDICAS APLICADAS (transcrição automática com ruído de ASR)

A transcrição tem erros óbvios de reconhecimento de fala. Corrigidos no conteúdo, **sinalizados aqui** para rastreabilidade. Nenhuma alteração de lógica clínica — só de grafia/sigla.

| Na transcrição | Correto | Onde |
|---|---|---|
| "VTHCG" / "VT HCG" | **β-hCG** (gonadotrofina coriônica humana, fração beta) | marcadores, ginecomastia |
| "tecido / tecida de abdômen total com contraste" | **tomografia computadorizada (TC) de abdome total com contraste** | estadiamento |
| "tecido de tórax" | **TC / radiografia de tórax** | estadiamento |
| "litia urinária" | **litíase urinária** (cálculo) | USG, comparação ecogenicidade |
| "hidrocélia" | **hidrocele** | clínica |
| "sinal de PREN" | **sinal de Prehn** | diferencial orquiepididimite |
| "câncer de testículo é o tumor maligno mais comum nessa faixa" | mantido — é **a neoplasia sólida maligna mais comum** em homens de 20–40 anos (precisão: as leucemias/linfomas competem em 15–19 anos; o professor já diz isso) | epidemiologia |
| "cóleo carcinoma" | **coriocarcinoma** | subtipos não-seminomatosos |

Nenhum outro dado foi alterado. Percentuais, múltiplos de risco e condutas são os do professor.

---

## 2. REGRA SUPREMA DE PRESERVAÇÃO + VOZ

- **Cobertura 100%** do conteúdo do professor (todos os 12 blocos da §3 abaixo distribuídos).
- **Voz Bauer**: professor explicando direto ao aluno. Frases curtas, técnicas, com a malandragem de prova do original ("acende uma luz vermelha piscando", "tempo é testículo").
- **ZERO metalinguagem**. Proibido no HTML final: "nesta aula", "neste módulo", "o professor", "vamos ver", "próxima página", "como vimos", "a seguir veremos", "imagem real", "TC real", "mapa mental", "mostra a figura". A continuidade entre páginas vive **só** no `page-nav__btn--next` (que nomeia a página seguinte) — nunca no corpo do texto.
- **Texto soberano**: cada página ensina completa só com a prosa. SVG e imagem são reforço.

---

## 3. MAPA DE COBERTURA → PÁGINAS

| Bloco do conteúdo | Página(s) |
|---|---|
| Epidemiologia: 95% germinativos; não-germinativos raros (linfoide, cordão sexual/estromal, hematopoiético, ducto coletor) | P1 |
| Idade 20–40 (pico), neoplasia sólida mais comum na faixa; 15–19 = 2º (perde p/ leucemias); contraste com HPB/CA próstata >60 | P1, P2 |
| Criptorquidia = grande fator (4–6×); contralateral descido até 2×; avaliar sempre contralateral | P2 |
| História familiar (irmão 8–12×, pai 2–4×); história pessoal prévia (12×) | P2 |
| Subtipos: seminomatoso (mais comum) × não-seminomatoso (misto: carcinoma embrionário, coriocarcinoma, teratoma, saco vitelínico) | P3 |
| Clínica: massa indolor, bem delimitada, endurecida, bimanual; "achou no banho / parceiro percebeu / após trauma há 40 dias"; hidrocele; peso escrotal; ginecomastia (~2%, β-hCG); dor abdominal/lombar = metástase; metástase inicial 10–15% (até 30%) | P4, P5 |
| Exame físico: massa endurecida, massa abdominal palpável, linfadenopatia inguinal → retroperitoneal → supraclavicular (canal inguinal como rota) | P5 |
| Diagnóstico: USG hipoecogênica/heterogênea "carne de peixe", bem delimitada, Doppler, bilateral; nunca retardar | P6 |
| Marcadores: AFP (não-seminomatoso 60–80%, nunca no seminoma), β-hCG (não-seminomatoso 20–40%, seminoma até 15%), LDH (inespecífico, ambos); pré/pós-op = prognóstico | P7 |
| Tratamento: orquiectomia inguinal radical (testículo + cordão espermático, anel inguinal interno); cura 80–90%; NUNCA escrotal (semeia metástase) | P8 |
| Orquiectomia parcial: controversa, casos raros (tumor pequeno, testículo solitário, bilateral) | P8 |
| Metástase responde à QT base cisplatina (caiu na USP) | P9 |
| Estadiamento DEPOIS da cirurgia; marcador pós-op; TC abdome contraste se marcador mantido/suspeita; TC/RX tórax casos selecionados; acompanhamento | P10 |
| Diferenciais: torção (dor aguda), orquiepididimite (inflamatório, febre, Prehn +), testículo retrátil ≠ fator de risco (pegadinha) | P11 |
| Questões USP-RP e MP-PR; síntese da sequência de conduta | P12 |

---

## 4. DISTRIBUIÇÃO DE ABERTURAS (anti-monotonia)

Biblioteca: E1 pergunta · E2 dado · E3 caso · E4 achado/pegadinha (`opener--trap`) · E5 checklist · E6 mnemônico · E8 erro desmontado (`opener--bust`).

| Pág | Estratégia | opener-- | Justificativa |
|---|---|---|---|
| P1 | E2 — Dado impactante | `opener--stat` | 95% germinativos / faixa 20–40 abrem com número que ancora todo o tema |
| P2 | E2 — Dado impactante | `opener--stat` | criptorquidia 4–6× é número que organiza os fatores de risco |
| P3 | E1 — Pergunta central | `opener--question` | "por que o não-seminomatoso quase nunca vem puro?" abre histologia |
| P4 | E3 — Caso clínico | `opener--case` | massa achada no banho é o cenário-mãe da clínica |
| P5 | E1 — Pergunta central | `opener--question` | "por onde esse tumor sobe?" abre a rota de disseminação |
| P6 | E4 — Achado/pegadinha | `opener--trap` | "tempo é testículo": não retardar o diagnóstico é o paradoxo da página |
| P7 | E6 — Mnemônico-âncora | `opener--mnemonic` | "AFP nunca no seminoma" é a frase-âncora dos marcadores |
| P8 | E8 — Erro desmontado | `opener--bust` | "incisão na bolsa escrotal" é o erro clássico que mata o paciente |
| P9 | E2 — Dado impactante | `opener--stat` | cura 80–90% / cisplatina muda o prognóstico da metástase |
| P10 | E1 — Pergunta central | `opener--question` | "por que estadiar DEPOIS de operar?" abre a inversão da ordem |
| P11 | E4 — Achado/pegadinha | `opener--trap` | "se dói, provavelmente NÃO é câncer" é a pegadinha dos diferenciais |
| P12 | E5 — Checklist | `opener--checklist` | fechamento autoavaliativo |

Contagem: E2 ×4 (P1,P2,P9 + reforço), E1 ×3, E4 ×2, E3/E6/E8/E5 ×1. Máx permitido em 12 págs = ⌈12/3⌉ = 4. **E2 = 4 → no limite, OK.** Consecutivas: P1–P2 (E2 ×2 = limite, OK; P3 quebra). Nenhuma sequência de 3 iguais.

> **Nota ao Executor:** P1 e P2 usam ambas `opener--stat`. Para variar o **visual** dentro do mesmo componente, P2 deve usar número composto (ex.: `4–6×`) com `opener__context` em tom de "fator que organiza", distinto do número-percentual de P1. Não criar componente novo.

---

## 5. PISO POR PÁGINA (regra Bauer)

Cada página: **≥1 SVG interativo** (`figure-svg`, hotspot/slider/step — engine `initInteractive`) + **≥1 imagem real** (`figure.med` com título/caption/fonte) **OU** marca de exceção `data-piso-img-exempt="<motivo>"` no `<article>` quando o conceito não é fotografável.

| Pág | SVG interativo (conceito) | Imagem real (tema) ou exceção |
|---|---|---|
| P1 | Barras "95% germinativo × 5% não-germinativo" + hotspots nos 4 subtipos raros | **EXCEÇÃO** `data-piso-img-exempt="taxonomia-epidemiologica-nao-fotografavel"` |
| P2 | Régua de risco relativo: hotspots em criptorquidia 4–6×, contralateral ~2×, irmão 8–12×, pai 2–4×, pessoal 12× | Foto de **criptorquidia / testículo não descido** (peça cirúrgica ou esquema clínico documentado) |
| P3 | Diagrama "germinativo → seminoma | não-seminoma (misto)" com hotspots nos 4 componentes do misto | **Histopatológico de seminoma (HE)** — lâmina clássica "ovo frito" |
| P4 | Esquema interativo do exame bimanual: hotspots em "endurecida", "indolor", "bem delimitada", "hidrocele se cresce" | **Massa testicular / orquiectomia — peça macroscópica** mostrando massa sólida |
| P5 | Mapa de drenagem clicável: testículo → canal inguinal → linfonodo retroperitoneal → supraclavicular (cada nível é hotspot com o que significa) | **EXCEÇÃO** `data-piso-img-exempt="rota-de-drenagem-esquematica"` (a rota é melhor servida pelo SVG) — OU TC com linfonodomegalia retroperitoneal se disponível |
| P6 | USG interativa: slider/hotspot revelando "hipoecogênica", "heterogênea (carne de peixe)", "bem delimitada", "Doppler ↑vascularização" sobre desenho de USG | **USG escrotal de tumor testicular** (lesão hipoecogênica heterogênea) |
| P7 | Tabela dinâmica de marcadores: linhas AFP/β-hCG/LDH × colunas seminoma/não-seminoma, células revelam % ao clicar; destaque "AFP=0 no seminoma" | **EXCEÇÃO** `data-piso-img-exempt="marcadores-laboratoriais-nao-fotografaveis"` |
| P8 | SVG passo-a-passo da via inguinal × via escrotal: animação/step mostrando por que a escrotal semeia; hotspots em "anel inguinal interno", "cordão espermático", "clampeia antes de manipular" | **Peça de orquiectomia inguinal radical** (testículo + cordão espermático) |
| P9 | Barra de cura 80–90% + hotspot "metástase + cisplatina → ainda curável"; comparação visual com/sem QT | **EXCEÇÃO** `data-piso-img-exempt="prognostico-estatistico-nao-fotografavel"` |
| P10 | Linha do tempo invertida clicável: cirurgia → marcador pós-op → (não caiu? acompanha) / (manteve? TC abdome) — hotspots em cada decisão | **EXCEÇÃO** `data-piso-img-exempt="algoritmo-de-estadiamento-esquematico"` — OU TC de abdome com metástase retroperitoneal se disponível |
| P11 | Comparador interativo 3 colunas: torção × orquiepididimite × tumor — clicar em "dor", "febre", "Prehn", "início" preenche a matriz | **EXCEÇÃO** `data-piso-img-exempt="diferencial-clinico-comparativo"` — OU USG com torção (Doppler ausente) se contraste didático ajudar |
| P12 | SVG-síntese clicável da sequência de conduta (USG+marcador → orquiectomia → estadiamento) com as duas questões reais como hotspots | **EXCEÇÃO** `data-piso-img-exempt="sintese-de-conduta-esquematica"` |

> 5 imagens reais (P2, P3, P4, P6, P8) + 7 exceções justificadas. Imagens reais devem vir de fonte CC documentada (Wikimedia Commons / Radiopaedia CC / atlas aberto), validação tripla (clínica/técnica/licença), `figcaption` com `<strong>Achado:</strong>` + `<span class="attr">` fonte+licença+link. Reaproveitar imagens locais já no repo se houver match (verificar `assets/img/`); senão, marcar como busca pendente para `buscador-imagem-medica-bauer`.

---

# 6. ROTEIRO PÁGINA POR PÁGINA

> Convenção: cada página = `<article class="page" data-page="pN" data-strategy="EX — ...">`. Estrutura interna: `page-tag` → `chipset` (2–4 `chip--topic`) → `opener--*` → `h1.page-title` → blocos `topic-h` + `prose` → `figure-svg` → (`figure.med` ou exceção) → asides adaptativos → `quiz` (2 perguntas gold) → `page-nav`.
> **hl-good** = verde (certo/conduta correta/bom prognóstico). **hl-bad** = vermelho (erro/perigo/pegadinha). Marcados inline no texto, 2–4 por página, com `<span class="hl-good">` / `<span class="hl-bad">`.

---

## PÁGINA 1 — "95 em cada 100"

- **data-strategy:** `E2 — Dado impactante`
- **page-title:** `Câncer de testículo: o tumor do homem jovem`
- **chipset:** `95% germinativos` · `Pico 20–40 anos` · `Direto na prova`
- **Tópicos visíveis (topic-h):**
  1. *A regra dos 95%: quase tudo é tumor de célula germinativa*
  2. *A faixa etária que entrega o diagnóstico*
- **opener (`opener--stat`):** número `95%` grande. Context: "De cada 100 cânceres de testículo, 95 são tumores de **células germinativas**. O resto é tão raro na vida quanto na prova — por isso, quando o enunciado falar em câncer de testículo, pense germinativo e siga em frente."

**PROSA (rica, da transcrição):**

*Tópico 1* — O câncer de testículo é um assunto vasto na vida e estreito na prova: as questões caem parecidas e diretas. O ponto de partida é a histologia geral. A <span class="hl-good">**grande maioria — 95% dos casos — é tumor de células germinativas**</span>. Existem, sim, os não-germinativos: tumores linfoides, neoplasias de cordão sexual (estromais), tumores hematopoiéticos, tumores de ducto coletor. Mas são raríssimos na vida e raríssimos na prova. Vale saber que existem para um eventual verdadeiro-ou-falso no histopatológico de um paciente já operado — nada além disso. Para tudo que importa: **células germinativas**.

*Tópico 2* — O segundo dado que o enunciado sempre entrega é a idade. **Homem, com pico de incidência entre 20 e 40 anos.** Mais que isso: nessa faixa, é a neoplasia sólida maligna mais comum. Repare no contraste — a hiperplasia prostática benigna e o câncer de próstata são doenças do homem acima dos 60; o tumor de testículo é do **jovem**. Pode aparecer mais cedo? Entre 15 e 19 anos ele já é o segundo tumor mais comum, perdendo só para as leucemias. Mas o cenário clássico de prova planta o paciente entre 20 e 40. Guarde essa âncora: idade jovem + as pistas das próximas linhas e a luz vermelha já acende.

- **figure-svg:** barras "95% germinativo × 5% não-germinativo"; hotspots nos 4 subtipos não-germinativos (linfoide, estromal/cordão sexual, hematopoiético, ducto coletor), cada um revelando "raro na vida e na prova".
- **imagem:** EXCEÇÃO `taxonomia-epidemiologica-nao-fotografavel`.
- **asides:** `board-wants` — "Que você associe 'câncer de testículo' a 'célula germinativa' e a 'homem 20–40 anos' sem hesitar; o resto é distrator."

**QUIZ P1 (2 gold):**

**Q1 (MCQ):** *Sobre a histologia do câncer de testículo, qual afirmativa está correta?*
- A) A maioria são tumores não-germinativos de cordão sexual.
- **B) Cerca de 95% são tumores de células germinativas.** ✓
- C) O subtipo mais comum é o linfoma testicular.
- D) Predominam os tumores de ducto coletor.

`quiz__justification`: **Gabarito: B.** 95% dos cânceres de testículo são tumores de células germinativas — é o número que ancora todo o tema. A (cordão sexual/estromal), C (linfoide) e D (ducto coletor) existem, mas todos entram na fatia minoritária dos não-germinativos, raros na vida e na prova. Marcar qualquer um deles é inverter a proporção.
`quiz__distractor`: **Por que cair na C:** o linfoma testicular é lembrado em idosos e em provas de hematologia, mas no jovem o protagonista absoluto é o germinativo. **Por que cair em A/D:** "cordão sexual" e "ducto coletor" soam eruditos e seduzem quem decora nomes sem hierarquizar frequência — são exatamente os raros.

**Q2 (V/F):** *O câncer de testículo é mais comum em homens acima dos 60 anos, à semelhança do câncer de próstata.*
- V / **F** ✓

`quiz__justification`: **Falso.** É o oposto: o pico é entre 20 e 40 anos, e nessa faixa é a neoplasia sólida maligna mais comum do homem. A próstata (e a HPB) é que são doenças do idoso, acima dos 60. Transferir a epidemiologia da próstata para o testículo é errar a faixa que a banca usa como gatilho.
`quiz__distractor`: **Por que o "Verdadeiro" engana:** quem agrupa "doença urológica masculina" num bloco só assume que tudo acomete idoso. Mas o testículo quebra esse padrão — é justamente o tumor do jovem, e essa exceção é o que a prova cobra.

- **page-nav next:** `O grande fator de risco →`

---

## PÁGINA 2 — "O testículo que não desceu"

- **data-strategy:** `E2 — Dado impactante`
- **page-title:** `Criptorquidia e a hierarquia de risco`
- **chipset:** `Criptorquidia 4–6×` · `Contralateral até 2×` · `Família: irmão > pai`
- **Tópicos visíveis:**
  1. *O grande fator do enunciado: criptorquidia*
  2. *O contralateral também sobe — por isso avalio os dois*
  3. *A hierarquia familiar e a história pessoal*
- **opener (`opener--stat`):** número `4–6×`. Context: "O testículo que não desceu para a bolsa carrega risco **4 a 6 vezes maior** de virar câncer. É o fator de risco mais clássico do enunciado — e quase nunca falta na questão."

**PROSA:**

*Tópico 1* — O fator de risco soberano é a <span class="hl-bad">**criptorquidia**</span> — o testículo que não desceu de forma natural para a bolsa escrotal e ficou retido, em geral no abdome. Esse testículo criptorquídico tem risco **4 a 6 vezes maior** de desenvolver câncer. Clássico, clássico, clássico: homem jovem com história de criptorquidia no enunciado é luz vermelha piscando.

*Tópico 2* — E tem um detalhe que a banca adora. Não é só o testículo que não desceu que corre risco. O **outro testículo**, o que desceu normalmente, também carrega risco maior que a população geral — pode chegar a **2 vezes**. Por isso a regra prática vale ouro: na hora de investigar, avalio o testículo suspeito **e sempre o contralateral**. <span class="hl-good">Avaliar os dois lados</span> não é zelo excessivo — é a associação bilateral cobrando atenção.

*Tópico 3* — A história familiar entra em escala. Irmão com câncer de testículo eleva o risco **8 a 12 vezes**; pai acometido, **2 a 4 vezes** — o irmão pesa mais que o pai. E a história pessoal fecha o quadro: quem já teve câncer de testículo, com ou sem passado de criptorquidia, tem **12 vezes** mais risco de desenvolver no contralateral. Some tudo: idade jovem + criptorquidia no enunciado já entrega insumo de sobra para pensar no diagnóstico.

- **figure-svg:** régua de risco relativo (escala log ou barras): criptorquidia 4–6×, contralateral ~2×, irmão 8–12×, pai 2–4×, pessoal prévio 12×. Cada barra é hotspot com a frase explicativa.
- **imagem (`figure.med`):** criptorquidia / testículo não descido (esquema clínico documentado ou peça). `Achado:` testículo retido fora da bolsa escrotal — o fator de risco mais cobrado.
- **asides:** `op-summary` ("Por que importa na prática") — "Avaliar o contralateral é o que evita perder um segundo tumor já presente."; `dont-confuse` — esquerda "**Criptorquidia** = não desceu → fator de risco" / direita "**Testículo retrátil** = desce e sobe → não é fator de risco" (planta o que P11 fecha).

**QUIZ P2 (2 gold):**

**Q1 (MCQ):** *Qual situação confere o MAIOR aumento de risco relativo para câncer de testículo?*
- A) Pai com câncer de testículo
- **B) Irmão com câncer de testículo** ✓
- C) Testículo retrátil na infância
- D) Tabagismo

`quiz__justification`: **Gabarito: B.** Entre os fatores familiares, o irmão acometido pesa mais (8–12×) que o pai (2–4×) — a banca gosta de testar essa hierarquia. C (testículo retrátil) não é fator de risco nenhum — é benigno, e cair nele é confundir com criptorquidia. D (tabagismo) é fator do câncer de **bexiga**, não do testículo; transplantar o vilão errado é armadilha clássica.
`quiz__distractor`: **Por que cair na A:** "pai" parece o parente "mais forte" intuitivamente, mas o número do irmão é maior. **Por que cair na D:** tabagismo é tão associado a câncer urológico em geral que o aluno o cola em tudo — aqui não há essa associação.

**Q2 (V/F):** *Diante de um tumor em um testículo, basta avaliar o testículo acometido.*
- V / **F** ✓

`quiz__justification`: **Falso.** Sempre se avalia também o **contralateral**: ele carrega risco aumentado (até 2× se já houve criptorquidia, 12× se já houve tumor prévio), e a associação bilateral é frequente. A USG inicial é, por isso, **bilateral**. Examinar só o lado da queixa é deixar passar um segundo foco já presente.
`quiz__distractor`: **Por que o "Verdadeiro" engana:** parece eficiente focar só no sintomático. Mas o tumor de testículo tem propensão bilateral documentada — economizar o contralateral é justamente o erro que a regra prática proíbe.

- **page-nav next:** `Seminoma × não-seminoma →`

---

## PÁGINA 3 — "Quase nunca vem puro"

- **data-strategy:** `E1 — Pergunta central`
- **page-title:** `Os dois subtipos germinativos`
- **chipset:** `Seminomatoso (mais comum)` · `Não-seminomatoso (misto)` · `4 componentes`
- **Tópicos visíveis:**
  1. *Dois ramos do germinativo: seminoma e não-seminoma*
  2. *Por que o não-seminomatoso quase sempre é misto*
- **opener (`opener--question`):** "Por que, quando o tumor é não-seminomatoso, ele quase nunca aparece com um único tipo histológico?"

**PROSA:**

*Tópico 1* — Dentro dos tumores de células germinativas há dois grandes subtipos. Os **seminomatosos**, muito mais comuns, e os **não-seminomatosos**. Essa divisão importa porque, mais à frente, ela muda quais marcadores tumorais o paciente vai expressar — e marcador é o que decide boa parte das questões de diagnóstico.

*Tópico 2* — A pegadinha do não-seminomatoso é que ele **dificilmente vem com um subtipo só**: é muito comum ser **misto**, com mais de um componente histológico no mesmo tumor. Carcinoma embrionário junto de coriocarcinoma; teratoma junto de tumor do saco vitelínico. Essas combinações são a regra, não a exceção. Para a prova, basta reconhecer: seminomatoso costuma ser mais "puro"; **não-seminomatoso costuma ser misto**.

- **figure-svg:** diagrama "germinativo → seminoma | não-seminoma"; sob não-seminoma, 4 hotspots (carcinoma embrionário, coriocarcinoma, teratoma, saco vitelínico) que acendem juntos para ilustrar o "misto".
- **imagem (`figure.med`):** histopatológico de seminoma (HE) — aspecto clássico em ninhos com septos linfocitários ("ovo frito"). `Achado:` seminoma clássico em coloração HE.
- **asides:** `dont-confuse` — "**Seminoma** → tende a puro" / "**Não-seminomatoso** → tende a misto"; `op-summary` — "Subtipo não é decoreba estética: ele prevê o marcador (próxima decisão)."

**QUIZ P3 (2 gold):**

**Q1 (MCQ):** *Sobre os tumores germinativos não-seminomatosos, é correto afirmar:*
- A) São mais comuns que os seminomatosos.
- **B) Frequentemente são mistos, com mais de um componente histológico.** ✓
- C) Nunca expressam marcadores tumorais.
- D) São o subtipo mais "puro" dos germinativos.

`quiz__justification`: **Gabarito: B.** A marca do não-seminomatoso é ser misto — carcinoma embrionário, coriocarcinoma, teratoma e saco vitelínico se combinam no mesmo tumor. A está invertida (os seminomatosos é que são mais comuns). C é o oposto: o não-seminomatoso é justamente o que mais expressa AFP e β-hCG. D troca os papéis — quem tende a "puro" é o seminoma.
`quiz__distractor`: **Por que cair na A:** o aluno confunde "mais cobrado/falado" com "mais frequente"; o seminoma é o comum. **Por que cair na D:** "não-seminomatoso" soa como categoria única e pura, quando é o contrário — é o ramo dos misturados.

**Q2 (V/F):** *O subtipo seminomatoso é o mais comum entre os tumores de células germinativas.*
- **V** ✓ / F

`quiz__justification`: **Verdadeiro.** O seminoma é o subtipo germinativo mais comum, e tende a se apresentar de forma mais homogênea. O não-seminomatoso é menos frequente e, quando ocorre, costuma ser misto. Inverter isso é o erro de quem associa "nome mais elaborado" a "mais frequente".
`quiz__distractor`: **Por que o "Falso" engana:** o não-seminomatoso ganha mais atenção por causa dos marcadores (AFP), o que dá a falsa impressão de protagonismo epidemiológico — mas em frequência quem domina é o seminoma.

- **page-nav next:** `A massa que não dói →`

---

## PÁGINA 4 — "Achou no banho"

- **data-strategy:** `E3 — Caso clínico`
- **page-title:** `A massa testicular indolor`
- **chipset:** `Indolor` · `Endurecida · bem delimitada` · `Ginecomastia ~2%`
- **Tópicos visíveis:**
  1. *O achado-mãe: massa endurecida e indolor*
  2. *Os sinais que acompanham (hidrocele, peso, ginecomastia)*
- **opener (`opener--case`):** quote — "Homem de 24 anos. No banho, percebe um caroço no testículo. Não dói. Acha que é da pancada que levou no futebol há uns 40 dias. Demora a procurar o médico. Quando procura, o urologista palpa uma massa endurecida, bem delimitada, que **não dói**. **(Guarde esse paciente — cada detalhe dele é gabarito.)**"

**PROSA:**

*Tópico 1* — Some idade jovem, criptorquidia e a clínica certa e, em prova, acabou: é câncer de testículo, praticamente 100% das vezes. E a clínica central tem nome único — <span class="hl-good">**massa testicular indolor**</span>. O paciente costuma achar sozinho, tomando banho, ou um parceiro percebe durante o ato sexual; às vezes ele liga a um trauma antigo ("uma pancada no futebol há 40 dias"). Esse intervalo de semanas é proposital no enunciado: já passou tempo suficiente para afastar causas agudas. Ao exame bimanual, a massa é **endurecida**, **muito bem delimitada** e **absolutamente indolor**. Pode doer na vida real (infarto intratumoral, sangramento com compressão), mas <span class="hl-bad">dor não cai na prova</span> — seria pegadinha maldosa demais frente aos diferenciais.

*Tópico 2* — Em volta da massa, alguns achados secundários. Se o tumor cresce muito, pode surgir **hidrocele** associada, ou um **peso/desconforto escrotal** — sinais menos específicos. E há um achado elegante que a banca às vezes planta: a **ginecomastia**, presente em cerca de **2%** dos casos, consequência do β-hCG produzido pelo tumor. Homem de 20–40 anos, criptorquidia, massa indolor **e ginecomastia** — esse conjunto fecha o raciocínio. Já **dor abdominal ou lombar** é raríssima no início e fala de **metástase**; a metástase ao diagnóstico aparece em 10–15% dos casos (até 30% em algumas séries), mas não é o cenário clássico.

- **figure-svg:** esquema interativo do exame bimanual do testículo; hotspots em "endurecida", "indolor", "bem delimitada", "hidrocele (se cresce)", "ginecomastia (β-hCG)".
- **imagem (`figure.med`):** peça macroscópica de orquiectomia / massa testicular sólida. `Achado:` massa testicular sólida bem delimitada.
- **asides:** `trap` — "Massa que **dói** → some o câncer de testículo das primeiras hipóteses na prova. A dor empurra para torção ou orquiepididimite."; `op-summary` — "Massa indolor + endurecida = não espera; investiga e trata."

**QUIZ P4 (2 gold):**

**Q1 (MCQ):** *A apresentação clínica clássica do câncer de testículo em prova é:*
- A) Dor escrotal aguda e intensa
- **B) Massa testicular endurecida e indolor** ✓
- C) Disúria e febre alta
- D) Edema escrotal doloroso com hiperemia

`quiz__justification`: **Gabarito: B.** A marca registrada é a massa **indolor**, endurecida e bem delimitada, achada no banho ou pelo parceiro. A (dor aguda) é torção; C (disúria/febre) e D (escroto doloroso e quente) são orquiepididimite. A banca usa a dor justamente para te tirar do câncer — se dói, na prova, pense em outra coisa.
`quiz__distractor`: **Por que cair na A:** "testículo + algo errado" dispara o reflexo de torção, que é emergência e marcante; mas torção dói muito, e o tumor não dói. **Por que cair em C/D:** quadro infeccioso/inflamatório tem febre e dor — câncer de testículo no enunciado é silencioso.

**Q2 (V/F):** *A ginecomastia pode acompanhar o câncer de testículo e decorre da produção de β-hCG pelo tumor.*
- **V** ✓ / F

`quiz__justification`: **Verdadeiro.** Cerca de 2% dos casos cursam com ginecomastia, e o mecanismo é o β-hCG produzido pelo tumor — por isso o mesmo marcador que ajuda no diagnóstico também explica esse sinal. Em um enunciado, ginecomastia + massa indolor em homem jovem reforça o diagnóstico.
`quiz__distractor`: **Por que o "Falso" engana:** ginecomastia tem muitas causas (idiopática, medicamentosa) e o aluno a descarta como inespecífica. Mas no contexto de massa testicular indolor ela é uma pista a favor, não contra — e o elo é hormonal (β-hCG).

- **page-nav next:** `Por onde o tumor sobe →`

---

## PÁGINA 5 — "A rota de fuga"

- **data-strategy:** `E1 — Pergunta central`
- **page-title:** `Exame físico e a disseminação`
- **chipset:** `Canal inguinal` · `Retroperitônio` · `Supraclavicular`
- **Tópicos visíveis:**
  1. *O que o exame físico procura*
  2. *A rota da metástase: canal inguinal → retroperitônio → supraclavicular*
- **opener (`opener--question`):** "Se o tumor de testículo vai se espalhar, por onde ele sobe primeiro — e por que isso muda onde eu procuro linfonodo?"

**PROSA:**

*Tópico 1* — O exame físico confirma a clínica. Procuro a **massa testicular endurecida** no exame bimanual, depois de já ter levantado a probabilidade pré-teste na anamnese (criptorquidia, história familiar). Em quadros avançados, posso achar **massa abdominal palpável** e **linfadenopatia inguinal**. E há a **ginecomastia**, sinal que o paciente pode manifestar e que todo mundo já viu na faculdade — nem sempre por câncer, mas aqui entra como pista.

*Tópico 2* — O grande temor do tumor de testículo é por onde ele se espalha: pelo **canal inguinal**. É por ali que ele sobe. Daí drena para os **linfonodos retroperitoneais** e, em quadro super avançado, alcança os **linfonodos supraclaviculares**. Adenopatia supraclavicular em prova de acesso direto é rara — mas saber a rota explica duas coisas que vêm depois: por que a cirurgia respeita o canal inguinal (e nunca a via escrotal) e por que a TC de abdome é o exame de estadiamento quando há suspeita de metástase. <span class="hl-bad">Dor abdominal/lombar</span> nesse paciente acende o alerta de doença retroperitoneal.

- **figure-svg:** mapa de drenagem clicável — testículo → canal inguinal → linfonodo retroperitoneal → supraclavicular. Cada nível é hotspot com "o que significa achar massa/adenopatia aqui".
- **imagem:** EXCEÇÃO `rota-de-drenagem-esquematica` (o SVG é o melhor veículo). Se houver TC com linfonodomegalia retroperitoneal disponível em CC, usar como `figure.med` opcional.
- **asides:** `board-wants` — "Que você ligue 'canal inguinal' à rota de disseminação E à escolha da via cirúrgica — os dois nascem do mesmo fato anatômico."

**QUIZ P5 (2 gold):**

**Q1 (MCQ):** *A principal via de disseminação linfática do câncer de testículo leva primeiro aos linfonodos:*
- A) Inguinais superficiais
- **B) Retroperitoneais** ✓
- C) Mediastinais anteriores
- D) Axilares

`quiz__justification`: **Gabarito: B.** O tumor sobe pelo canal inguinal e drena para os **linfonodos retroperitoneais** — por isso a TC de abdome é o exame de estadiamento de escolha quando se suspeita de metástase. Só em estágio muito avançado chega ao supraclavicular. A (inguinais superficiais) é a drenagem da **pele** escrotal, não do testículo — pegadinha anatômica. C e D não são a rota inicial.
`quiz__distractor`: **Por que cair na A:** confunde-se a drenagem do escroto (pele → inguinal) com a do testículo (gônada → retroperitônio via canal inguinal). Essa distinção é justamente o que sustenta a via cirúrgica inguinal. **Por que cair em C/D:** mediastino/axila são drenagens de outros sítios; aqui o alvo é o retroperitônio.

**Q2 (V/F):** *O câncer de testículo dissemina-se preferencialmente pelo canal inguinal.*
- **V** ✓ / F

`quiz__justification`: **Verdadeiro.** A rota de subida é o canal inguinal, daí para o retroperitônio e, em casos avançados, supraclavicular. Esse fato anatômico é a razão de a orquiectomia ser feita por via inguinal (alta), clampeando o cordão antes de manipular — para não semear o tumor.
`quiz__distractor`: **Por que o "Falso" engana:** o aluno pode achar que o testículo, estando no escroto, dissemina "pela bolsa". Mas embriologicamente a gônada vem do retroperitônio e mantém essa drenagem — por isso sobe pelo canal inguinal, não pela pele escrotal.

- **page-nav next:** `Diagnóstico: não pode esperar →`

---

## PÁGINA 6 — "Tempo é testículo"

- **data-strategy:** `E4 — Achado/pegadinha` (`opener--trap`)
- **page-title:** `Ultrassom: hipoecogênico e heterogêneo`
- **chipset:** `Hipoecogênica` · `Heterogênea (carne de peixe)` · `Doppler · bilateral`
- **Tópicos visíveis:**
  1. *Por que não retardar: tempo é testículo*
  2. *O que a USG mostra*
- **opener (`opener--trap`):** trap-tag "O paradoxo da página" / trap-text — "O diagnóstico nunca deve ser **retardado**. Se o ultrassonografista 'só vem semana que vem', eu não espero: parto para o tratamento. **Tempo perdido é risco de metástase** — tempo é testículo."

**PROSA:**

*Tópico 1* — A conduta inicial tem uma regra de ferro: <span class="hl-good">**nunca retardar o diagnóstico**</span>. Não fico esperando o ultrassonografista chegar numa cidade pequena. Se o exame está disponível, ótimo — faço. Se não está, parto direto para o tratamento. <span class="hl-bad">Perder tempo é aumentar o risco de metástase</span>. Por isso a propedêutica é enxuta e rápida: exame físico, **ultrassonografia** e **marcadores tumorais** — e cirurgia logo em seguida.

*Tópico 2* — A USG do tumor de testículo é clássica: uma lesão **muito bem delimitada**, **hipoecogênica** (escura, pouca ecogenicidade) e **heterogênea** — aquele aspecto "esquisitão" que lembra **carne de peixe** quando se abre a peça. Diferente da imagem calcificada e brilhante de um cálculo (litíase). E faço **idealmente com Doppler**, porque o **aumento da vascularização** também fala a favor de câncer. A USG é de **bolsa escrotal/testicular bilateral** — sempre avalio o contralateral. Se a prova descreve "lesão bem delimitada, hipoecogênica e heterogênea", o diagnóstico está dado.

- **figure-svg:** USG interativa (desenho de campo ultrassonográfico); hotspots/slider revelando "hipoecogênica", "heterogênea (carne de peixe)", "bem delimitada", "Doppler ↑vascularização".
- **imagem (`figure.med`):** USG escrotal de tumor testicular (lesão hipoecogênica heterogênea). `Achado:` massa intratesticular hipoecogênica e heterogênea à USG.
- **asides:** `op-summary` — "Conduta inicial em 3 palavras: USG, marcadores, cirurgia. Nessa ordem, sem demora."; `dont-confuse` — "**Hipoecogênica (escura)** = tumor" / "**Hiperecogênica/calcificada (brilhante)** = cálculo/litíase".

**QUIZ P6 (2 gold):**

**Q1 (MCQ):** *O achado ultrassonográfico clássico do tumor de testículo é uma lesão:*
- A) Hiperecogênica e calcificada
- **B) Hipoecogênica, heterogênea e bem delimitada** ✓
- C) Anecoica e de paredes finas
- D) Isoecogênica ao parênquima normal

`quiz__justification`: **Gabarito: B.** O tumor aparece escuro (hipoecogênico), "esquisito" (heterogêneo) e bem delimitado, idealmente com aumento de vascularização ao Doppler. A (hiperecogênica/calcificada) descreve um cálculo. C (anecoica, paredes finas) descreve um **cisto** ou hidrocele simples — líquido, não tumor. D (isoecogênica) seria invisível, o que não corresponde à lesão clássica.
`quiz__distractor`: **Por que cair na C:** "anecoica" engana quem lembra de hidrocele/cisto — mas esses são líquidos benignos; o tumor é sólido e hipoecogênico. **Por que cair na A:** calcificação brilhante remete a litíase, não a neoplasia testicular.

**Q2 (V/F):** *Se o ultrassom não estiver prontamente disponível, justifica-se retardar o tratamento até realizá-lo.*
- V / **F** ✓

`quiz__justification`: **Falso.** O diagnóstico/tratamento **nunca deve ser retardado** — tempo perdido é risco de metástase. Se a USG ou o marcador não estão disponíveis, parte-se para a orquiectomia. A propedêutica ideal é USG + marcadores, mas ela não pode atrasar a cirurgia.
`quiz__distractor`: **Por que o "Verdadeiro" engana:** parece boa prática "confirmar antes de operar". Mas neste tumor a confirmação não pode custar tempo; a regra é não atrasar — daí o bordão "tempo é testículo".

- **page-nav next:** `Marcadores: AFP, β-hCG, LDH →`

---

## PÁGINA 7 — "AFP nunca no seminoma"

- **data-strategy:** `E6 — Mnemônico-âncora`
- **page-title:** `Os três marcadores tumorais`
- **chipset:** `AFP só não-seminoma` · `β-hCG pode em ambos` · `LDH inespecífico`
- **Tópicos visíveis:**
  1. *AFP: a régua que separa os subtipos*
  2. *β-hCG e LDH: cuidado com as exceções*
  3. *Pré e pós-op: a leitura prognóstica*
- **opener (`opener--mnemonic`):** frase-âncora em destaque tipográfico — **"AFP NUNCA no seminoma. β-hCG PODE em ambos. LDH não decide nada sozinho."**

**PROSA:**

*Tópico 1* — Na avaliação inicial, peço **sempre** os marcadores tumorais. O primeiro é a **alfafetoproteína (AFP)**. Regra que não falha: a AFP está presente **só** nos tumores germinativos **não-seminomatosos** — em 60% a 80% deles — e <span class="hl-bad">**nunca no seminoma**</span>. Então AFP elevada já te diz que não é seminoma puro. Essa é a âncora dos marcadores.

*Tópico 2* — O segundo é o **β-hCG**. Também mais comum no não-seminomatoso (20% a 40% dos casos), mas — atenção — <span class="hl-bad">**pode estar presente no seminoma**</span> em até 15%. Ou seja: β-hCG não separa os subtipos como a AFP separa. O terceiro é a **LDH**, menos útil: aparece nos dois subtipos e é **inespecífica** (sobe em muitas outras situações). Serve mais para volume tumoral do que para definir tipo.

*Tópico 3* — E o uso mais importante dos marcadores é prognóstico. Comparo **pré e pós-operatório**. O ideal é que caiam (remissão) após a orquiectomia. <span class="hl-bad">Marcador que se mantém muito elevado depois da cirurgia</span> — AFP ou β-hCG — fala a favor de mau prognóstico e de doença residual/metástase. Marcador já muito alto no pré-op também pesa contra. É essa leitura que dispara o estadiamento por imagem mais à frente.

- **figure-svg:** tabela dinâmica interativa — linhas AFP / β-hCG / LDH × colunas Seminoma / Não-seminoma; clicar na célula revela o % e "presente/ausente". Destaque permanente "AFP = ausente no seminoma".
- **imagem:** EXCEÇÃO `marcadores-laboratoriais-nao-fotografaveis`.
- **asides:** `dont-confuse` — "**AFP** → separa (nunca no seminoma)" / "**β-hCG** → não separa (pode nos dois)"; `board-wants` — "Que você use a AFP como filtro de subtipo e leia a queda pós-op como prognóstico."

**QUIZ P7 (2 gold):**

**Q1 (MCQ):** *Qual marcador, quando elevado, exclui o diagnóstico de seminoma puro?*
- **A) Alfafetoproteína (AFP)** ✓
- B) β-hCG
- C) LDH
- D) PSA

`quiz__justification`: **Gabarito: A.** A AFP **nunca** está elevada no seminoma puro — só nos não-seminomatosos. Logo, AFP alta exclui seminoma puro. B (β-hCG) não serve para isso: pode estar presente em até 15% dos seminomas. C (LDH) é inespecífica e ocorre em ambos. D (PSA) é marcador de **próstata**, não de testículo — distrator de outro órgão.
`quiz__distractor`: **Por que cair na B:** β-hCG também sobe no não-seminoma, então parece equivalente à AFP — mas a exceção do seminoma (até 15%) tira dele o poder de excluir. **Por que cair na D:** PSA é o marcador urológico mais famoso, e quem decora "marcador + urologia" o transfere por reflexo.

**Q2 (V/F):** *O β-hCG pode estar elevado tanto em tumores não-seminomatosos quanto em seminomas.*
- **V** ✓ / F

`quiz__justification`: **Verdadeiro.** O β-hCG é mais comum no não-seminomatoso (20–40%), mas pode aparecer no seminoma em até 15% dos casos — por isso ele não separa os subtipos como a AFP. Essa é exatamente a pegadinha: a AFP é específica de exclusão; o β-hCG não.
`quiz__distractor`: **Por que o "Falso" engana:** quem decora "marcador de não-seminoma" como bloco assume que β-hCG e AFP se comportam igual. Mas só a AFP é fiel ao não-seminoma; o β-hCG vaza para o seminoma.

- **page-nav next:** `A cirurgia certa →`

---

## PÁGINA 8 — "Nunca pela bolsa"

- **data-strategy:** `E8 — Erro desmontado` (`opener--bust`)
- **page-title:** `Orquiectomia inguinal radical`
- **chipset:** `Via inguinal (alta)` · `Testículo + cordão` · `Escrotal = semeia metástase`
- **Tópicos visíveis:**
  1. *A cirurgia padrão e por que pela via inguinal*
  2. *O erro fatal: a via escrotal*
  3. *A exceção controversa: orquiectomia parcial*
- **opener (`opener--bust`):** wrong — "'É um nódulo no testículo, faço a incisão direto na bolsa escrotal.'" / right — "Esse é o erro que mata: manipular o tumor pela bolsa pode **disseminar e aumentar a incidência de metástase**. A via é **inguinal**, alta, clampeando o cordão antes de tocar no tumor."

**PROSA:**

*Tópico 1* — A conduta-rainha — a que decide 80% das questões — é a <span class="hl-good">**orquiectomia inguinal radical**</span>: retirada do **testículo** junto com o **cordão espermático**, na altura do **anel inguinal interno**. A cura é altíssima: 80% a 90% dos casos. O acesso é por **inguinotomia**: pesco o cordão espermático, clampeio primeiro, antes mesmo de manipular muito o tumor, justamente para minimizar a chance de semear metástase.

*Tópico 2* — Por que não fazer pela bolsa escrotal? Porque a <span class="hl-bad">manipulação do tumor pela via escrotal pode aumentar muito a incidência de metástase</span> — e ainda contamina uma drenagem linfática diferente (a da pele escrotal, inguinal superficial), bagunçando o estadiamento. Por isso o acesso é sempre **inguinal**. É um item que a banca adora cravar: "tratamento inicial = orquiectomia inguinal radical com remoção do testículo e do cordão espermático" — e a alternativa errada é a que propõe incisão escrotal.

*Tópico 3* — E a orquiectomia **parcial**? Existe, mas é **altamente controversa** e raríssima em prova de acesso direto. Só se aventa em situações específicas: tumores muito pequenos, testículo solitário ou tumores bilaterais. Fora disso, não aparece — a resposta é a inguinal radical.

- **figure-svg:** SVG passo-a-passo / comparador via inguinal × via escrotal. Step ou hotspots em "anel inguinal interno", "clampeia o cordão antes", "via escrotal → semeia (✗)". Mostrar visualmente por que a escrotal é proibida.
- **imagem (`figure.med`):** peça de orquiectomia inguinal radical (testículo + cordão espermático). `Achado:` peça cirúrgica com testículo e cordão espermático até o anel inguinal interno.
- **asides:** `trap` — "Alternativa com 'incisão escrotal' ou 'biópsia transescrotal' → sempre errada no câncer de testículo. A via é inguinal."; `op-summary` — "Inguinal radical + cordão espermático = a resposta. Decore a via, não só o nome."

**QUIZ P8 (2 gold):**

**Q1 (MCQ):** *O tratamento inicial padrão de um tumor testicular suspeito é:*
- A) Biópsia transescrotal do nódulo
- **B) Orquiectomia inguinal radical com remoção do testículo e do cordão espermático** ✓
- C) Punção aspirativa por agulha fina
- D) Quimioterapia neoadjuvante antes de qualquer cirurgia

`quiz__justification`: **Gabarito: B.** A via é **inguinal** (alta), retirando testículo + cordão espermático até o anel inguinal interno, com cura de 80–90%. A (biópsia transescrotal) e C (punção) são **proibidas**: manipular/violar a bolsa dissemina o tumor e aumenta metástase — o testículo não se biopsia pela bolsa. D inverte a ordem: opera-se primeiro; a QT entra na metástase.
`quiz__distractor`: **Por que cair na A/C:** o reflexo "achou massa → biopsia antes de tirar" é correto em quase todo órgão, mas no testículo a abordagem transescrotal é contraindicada — tira-se o testículo inteiro por via inguinal. **Por que cair na D:** confunde com tumores em que se reduz antes de operar; aqui a orquiectomia é o primeiro passo.

**Q2 (V/F):** *A orquiectomia pode ser realizada por via escrotal, desde que com técnica cuidadosa.*
- V / **F** ✓

`quiz__justification`: **Falso.** A via escrotal é contraindicada: a manipulação do tumor pela bolsa aumenta a incidência de metástase e altera a drenagem linfática esperada. A via correta é **inguinal**, clampeando o cordão antes de manipular. "Técnica cuidadosa" não corrige a via errada.
`quiz__distractor`: **Por que o "Verdadeiro" engana:** soa razoável que qualquer via "bem feita" sirva. Mas o problema não é técnica e sim rota: a escrotal viola compartimentos e semeia o tumor — por isso é proibida por princípio, não por habilidade.

- **page-nav next:** `Metástase ainda tem cura →`

---

## PÁGINA 9 — "80 a 90% de cura"

- **data-strategy:** `E2 — Dado impactante`
- **page-title:** `Prognóstico e a cisplatina`
- **chipset:** `Cura 80–90%` · `Cisplatina` · `Metástase ≠ óbito`
- **Tópicos visíveis:**
  1. *Um tumor de altíssima cura*
  2. *Metástase com boa resposta à cisplatina*
- **opener (`opener--stat`):** número `80–90%`. Context: "A orquiectomia inguinal radical cura **80% a 90%** dos casos. E quando há metástase, este tumor não é atestado de óbito — a quimioterapia à base de **cisplatina** muda o jogo."

**PROSA:**

*Tópico 1* — Vale fixar o tom otimista deste tumor: a cura é **muito alta**, 80% a 90% com a orquiectomia inguinal radical nos casos localizados. É um dos cânceres sólidos de melhor prognóstico justamente porque a cirurgia resolve a maioria e o seguimento por marcador pega cedo quem recidiva.

*Tópico 2* — E mesmo na **metástase** o paciente tem chance real. <span class="hl-good">A quimioterapia à base de **cisplatina** tem ótima resposta</span> no câncer de testículo — a ponto de transformar o prognóstico de doença disseminada. A USP já cobrou isso em acesso direto: diante de metástase, lembrar que <span class="hl-good">cisplatina não deixa o paciente sem opção</span>. Metástase aqui **não é** sinônimo de óbito.

- **figure-svg:** barra de cura 80–90% + comparação visual "localizado (cirurgia) × metastático (cirurgia + cisplatina)"; hotspot "metástase + cisplatina → ainda curável".
- **imagem:** EXCEÇÃO `prognostico-estatistico-nao-fotografavel`.
- **asides:** `board-wants` — "Que você não escreva 'mau prognóstico irreversível' na metástase — a cisplatina é a resposta que a USP esperava."

**QUIZ P9 (2 gold):**

**Q1 (MCQ):** *Diante de câncer de testículo com metástase, a conduta que melhora substancialmente o prognóstico é:*
- A) Apenas cuidados paliativos
- **B) Quimioterapia à base de cisplatina** ✓
- C) Radioterapia escrotal exclusiva
- D) Observação com marcadores seriados

`quiz__justification`: **Gabarito: B.** A quimioterapia à base de cisplatina tem resposta excelente no tumor germinativo metastático — por isso metástase não significa óbito. A (paliação isolada) abandona um paciente potencialmente curável. C (RT escrotal) não é a abordagem da doença metastática e ignora a quimiossensibilidade. D (só observar) seria subtratar uma doença que responde à QT.
`quiz__distractor`: **Por que cair na A:** "metástase" dispara o reflexo de doença terminal — mas este é um dos tumores sólidos mais quimiossensíveis. **Por que cair na D:** observação com marcador serve a alguns estágios iniciais pós-orquiectomia, não à doença metastática estabelecida.

**Q2 (V/F):** *O câncer de testículo localizado tem alta taxa de cura com a orquiectomia inguinal radical.*
- **V** ✓ / F

`quiz__justification`: **Verdadeiro.** A cura nos casos localizados é de 80% a 90% com a orquiectomia inguinal radical. É um dos cânceres sólidos de melhor prognóstico — o que torna ainda mais grave qualquer atraso ou via cirúrgica errada que comprometa esse resultado.
`quiz__distractor`: **Por que o "Falso" engana:** a palavra "câncer" puxa pessimismo automático. Mas aqui a estatística é favorável: a cirurgia, feita certo e a tempo, cura a grande maioria.

- **page-nav next:** `Estadiar depois de operar →`

---

## PÁGINA 10 — "A ordem invertida"

- **data-strategy:** `E1 — Pergunta central`
- **page-title:** `Estadiamento: por que vem depois`
- **chipset:** `Estadia após cirurgia` · `Marcador pós-op` · `TC abdome se mantido`
- **Tópicos visíveis:**
  1. *Por que estadiar depois de operar*
  2. *O que dispara a imagem (e qual imagem)*
- **opener (`opener--question`):** "Por que, no câncer de testículo, o estadiamento por imagem costuma vir DEPOIS da cirurgia — e não antes?"

**PROSA:**

*Tópico 1* — Aqui o tempo inverte a lógica habitual. Como não se pode perder tempo, a avaliação inicial é enxuta — **USG + marcadores** — e já se agenda a **orquiectomia inguinal radical**. O <span class="hl-good">**estadiamento vem depois da cirurgia**</span>. Operar não é "tchau e bença": o paciente segue em acompanhamento, sobretudo com **dosagem de marcador tumoral pós-operatório**. Se o marcador caiu como esperado, ótimo. Se não caiu, isso muda a investigação.

*Tópico 2* — O que dispara a imagem de estadiamento é a suspeita de metástase — tipicamente o **marcador que se manteve elevado** após a cirurgia, ou o paciente que conviveu com a lesão por muito tempo antes de procurar ajuda. Nesse cenário, faço **TC de abdome total com contraste** (o retroperitônio é o alvo da drenagem). A **TC/radiografia de tórax** fica para casos selecionados, também guiada por elevação mantida de marcador. Em prova de acesso direto, o estadiamento detalhado raramente cai — mas a sequência "opera → mede marcador → se mantido, imagem" é o que se espera que você saiba.

- **figure-svg:** linha do tempo invertida clicável — `orquiectomia → marcador pós-op → (caiu? acompanha) / (manteve? TC abdome com contraste → tórax se indicado)`. Cada nó é hotspot com a decisão.
- **imagem:** EXCEÇÃO `algoritmo-de-estadiamento-esquematico` (algoritmo é melhor no SVG). Se houver TC de abdome CC com massa retroperitoneal, usar como `figure.med` opcional.
- **asides:** `op-summary` — "Sequência: opera → mede marcador → se mantido elevado, TC de abdome com contraste."; `dont-confuse` — "**Avaliação inicial** = USG + marcador (rápido)" / "**Estadiamento** = depois, guiado pelo marcador pós-op".

**QUIZ P10 (2 gold):**

**Q1 (MCQ):** *O principal achado que indica TC de abdome com contraste para estadiamento no pós-operatório é:*
- A) Cicatriz cirúrgica dolorosa
- **B) Marcador tumoral que se manteve elevado após a orquiectomia** ✓
- C) Ginecomastia residual
- D) Idade acima de 40 anos

`quiz__justification`: **Gabarito: B.** O marcador (AFP/β-hCG) deveria cair após a retirada do tumor; se ele **se mantém elevado**, indica doença residual/metástase e dispara a TC de abdome com contraste, mirando o retroperitônio. A (dor da ferida) é esperada e não estadia nada. C (ginecomastia) reflete β-hCG passado, mas o que decide é a curva do marcador, não o sinal clínico isolado. D (idade) não indica imagem.
`quiz__distractor`: **Por que cair na C:** ginecomastia liga-se ao β-hCG e parece relevante — mas a decisão de imagem nasce do marcador **não cair**, não da mama. **Por que cair na D:** idade é fator de risco, não critério de estadiamento.

**Q2 (V/F):** *No câncer de testículo, o estadiamento por imagem costuma preceder a orquiectomia.*
- V / **F** ✓

`quiz__justification`: **Falso.** A ordem é invertida: por não se poder perder tempo, faz-se USG + marcadores e já se opera; o estadiamento detalhado vem **depois**, guiado pelo marcador pós-operatório. Esperar imagem completa antes de operar atrasaria o tratamento de um tumor de progressão rápida.
`quiz__distractor`: **Por que o "Verdadeiro" engana:** na maioria dos cânceres estadia-se antes de tratar. Este tumor é a exceção pedagógica — opera-se cedo e estadia-se depois, porque tempo é testículo.

- **page-nav next:** `Os diferenciais que doem →`

---

## PÁGINA 11 — "Se dói, desconfie do diagnóstico"

- **data-strategy:** `E4 — Achado/pegadinha` (`opener--trap`)
- **page-title:** `Diagnósticos diferenciais`
- **chipset:** `Torção: dor aguda` · `Orquiepididimite: febre · Prehn` · `Retrátil ≠ risco`
- **Tópicos visíveis:**
  1. *O que dói: torção e orquiepididimite*
  2. *A pegadinha do testículo retrátil*
- **opener (`opener--trap`):** trap-tag "A pegadinha da página" / trap-text — "A massa do câncer **não dói**. Então, se o enunciado enfatiza **dor**, ele está te empurrando para os diferenciais: **torção** (dor aguda) e **orquiepididimite** (inflamação, febre). A dor é o desvio."

**PROSA:**

*Tópico 1* — Os diferenciais que a banca arma giram em torno da **dor** — exatamente o que o câncer não tem. A <span class="hl-bad">**torção testicular**</span> é dor **muito aguda**, de início súbito, com outros sinais — uma emergência. A <span class="hl-bad">**orquiepididimite**</span> é um quadro **inflamatório/infeccioso**: dor, podendo vir com **febre** e manifestações sistêmicas, e com **sinal de Prehn positivo** (a dor **alivia** ao elevar o testículo). Se o enunciado descreve dor, febre ou alívio à elevação, o caminho **não** é câncer.

*Tópico 2* — E a armadilha mais elegante: o <span class="hl-good">**testículo retrátil**</span>. Ele desce e sobe, é **extremamente benigno** e **não é fator de risco** para câncer de testículo. Não confunda com a **criptorquidia** (o testículo que **não desceu** e fica retido), que **é** o grande fator de risco. A banca troca um pelo outro para ver quem decorou sem entender. Hérnia inguinal na infância e testículo retrátil **não** são fatores de risco; criptorquidia **é**.

- **figure-svg:** comparador interativo 3 colunas (torção × orquiepididimite × tumor); clicar em "dor", "início", "febre", "Prehn" preenche a matriz mostrando como o tumor é o "indolor".
- **imagem:** EXCEÇÃO `diferencial-clinico-comparativo`. Opcional: USG com torção (Doppler ausente) como `figure.med` se reforçar o contraste.
- **asides:** `dont-confuse` — "**Criptorquidia** = não desceu → fator de risco" / "**Testículo retrátil** = desce e sobe → benigno, não é fator"; `trap` — "Sinal de Prehn **positivo** (alívio à elevação) → orquiepididimite, não câncer."

**QUIZ P11 (2 gold):**

**Q1 (MCQ):** *Qual condição NÃO é fator de risco para câncer de testículo?*
- A) Criptorquidia
- B) História familiar (irmão acometido)
- **C) Testículo retrátil** ✓
- D) Câncer de testículo prévio no contralateral

`quiz__justification`: **Gabarito: C.** O testículo retrátil — que desce e sobe — é extremamente benigno e **não** aumenta o risco. A pegadinha é trocá-lo pela criptorquidia (A), que é o grande fator de risco (4–6×). B (irmão, 8–12×) e D (tumor prévio, 12×) são fatores reais. Confundir retrátil com criptorquidia é o erro que a banca busca.
`quiz__distractor`: **Por que cair na A:** quem leu rápido funde "retrátil" e "criptorquídico" como sinônimos — mas só o que **não desce** (criptorquidia) é fator de risco. **Por que cair em B/D:** são fatores verdadeiros, então marcá-los como "não fator" inverte o gabarito.

**Q2 (V/F):** *Dor escrotal aguda com alívio à elevação do testículo (Prehn positivo) sugere câncer de testículo.*
- V / **F** ✓

`quiz__justification`: **Falso.** Dor aguda com Prehn positivo (alívio à elevação) sugere **orquiepididimite**, não câncer. O tumor é justamente **indolor**. A dor, a febre e o alívio à elevação são sinais dos diferenciais inflamatórios/torção — a banca usa a dor para desviar do câncer.
`quiz__distractor`: **Por que o "Verdadeiro" engana:** "testículo + sinal clínico com nome próprio" parece sofisticado e pró-câncer. Mas o Prehn positivo é marca de orquiepididimite; o câncer não dói e não tem Prehn.

- **page-nav next:** `Fechando: a sequência que vence →`

---

## PÁGINA 12 — "A sequência que vence"

- **data-strategy:** `E5 — Checklist`
- **page-title:** `Fechamento: a conduta que decide tudo`
- **chipset:** `USG + marcador` · `Orquiectomia inguinal` · `Estadia depois`
- **Tópicos visíveis:**
  1. *A questão que sintetiza tudo*
  2. *Como as bancas cobram (USP-RP e MP-PR)*
- **opener (`opener--checklist`):** título "Confira se você consegue, sem reabrir as páginas:" — itens:
  - Reconhecer o gatilho (homem 20–40 anos, criptorquidia, massa indolor)
  - Recitar a conduta inicial: USG + marcadores → orquiectomia inguinal radical
  - Dizer por que a via escrotal é proibida
  - Separar AFP (nunca no seminoma) de β-hCG (pode em ambos)
  - Explicar por que o estadiamento vem depois e o que dispara a TC de abdome
  - Distinguir os diferenciais que doem (torção, orquiepididimite) e a pegadinha do testículo retrátil

**PROSA:**

*Tópico 1* — Tudo converge para uma pergunta de conduta: diante de homem jovem com massa testicular indolor e criptorquidia, o que faço? <span class="hl-good">**USG (bilateral, com Doppler) + marcadores tumorais → orquiectomia inguinal radical, sem demora.**</span> O estadiamento vem depois, guiado pelo marcador pós-op. Essa sequência resolve 80% das questões. O resto — subtipo, marcador, prognóstico — orbita em torno dela.

*Tópico 2* — Veja como as bancas cobram. **USP–Ribeirão Preto:** homem de 22 anos, trauma escrotal leve há 40 dias, antecedente de criptorquidia, testículo aumentado, indolor, com nódulo endurecido. Suspeita e conduta? **Neoplasia testicular → USG + dosagem de AFP e β-hCG.** Os distratores trazem orquiepididimite e torção (que **doem**) e a alternativa de operar **sem** dosar marcador antes — quando o marcador está disponível, doso antes. **MP–Paraná:** a correta afirma que o tratamento inicial é a **orquiectomia inguinal radical com remoção do testículo e do cordão espermático**; as erradas dizem que a TC de bolsa escrotal é a investigação inicial (é a **USG**), que acomete a quarta década (é **20–40**), que se associa a **tabagismo** (não há associação) e que testículo retrátil/hérnia inguinal são fatores de risco (**não são** — quem é fator é a **criptorquidia**).

- **figure-svg:** SVG-síntese clicável da sequência de conduta (gatilho → USG+marcador → orquiectomia inguinal → estadia depois). As duas questões reais (USP-RP, MP-PR) entram como hotspots que abrem o raciocínio resumido.
- **imagem:** EXCEÇÃO `sintese-de-conduta-esquematica`.
- **asides:** `op-summary` ("Revisão ativa") — 3 perguntas abertas: "Por que a via escrotal está proibida?" / "Qual marcador exclui seminoma puro?" / "Por que estadio depois de operar?"; `board-wants` — "Que você marque a alternativa da orquiectomia inguinal radical e descarte tudo que dói, tudo que é tabagismo e tudo que é via escrotal."

**QUIZ P12 (2 gold):**

**Q1 (MCQ):** *Homem de 22 anos, trauma escrotal leve há 40 dias, antecedente de criptorquidia, testículo esquerdo aumentado, indolor, com nódulo endurecido. Conduta inicial mais adequada:*
- A) Tomografia de bolsa escrotal e antibiótico empírico
- **B) Ultrassonografia escrotal e dosagem de AFP e β-hCG** ✓
- C) Orquiectomia imediata sem qualquer exame
- D) Observação por 30 dias e reavaliação

`quiz__justification`: **Gabarito: B.** O quadro é neoplasia testicular clássica (jovem, criptorquidia, massa indolor endurecida) — investigação inicial é **USG escrotal + marcadores (AFP e β-hCG)**, seguida da orquiectomia. A erra na imagem (é USG, não TC, e antibiótico é para infecção, que aqui não há). C dispensa o marcador quando ele está disponível — opera-se, mas dosando antes se possível. D (observar) atrasa um tumor que não pode esperar.
`quiz__distractor`: **Por que cair na A:** "trauma há 40 dias" tenta sugerir infecção/hematoma — mas o intervalo longo e a massa indolor endurecida apontam tumor, e o exame é USG. **Por que cair na C:** o aluno lembra "não retardar" e pula o marcador — mas, disponível, o marcador é dosado antes da cirurgia.

**Q2 (MCQ):** *Assinale a alternativa CORRETA sobre o câncer de testículo:*
- A) A TC de bolsa escrotal é o exame de investigação inicial.
- B) Acomete mais frequentemente homens na quarta década (a partir dos 40).
- **C) O tratamento inicial é a orquiectomia inguinal radical com remoção do testículo e do cordão espermático.** ✓
- D) Hérnia inguinal na infância e testículo retrátil são fatores de risco.

`quiz__justification`: **Gabarito: C.** A via é inguinal, retirando testículo + cordão espermático. A erra o exame inicial (é a **USG**, não TC). B erra a faixa (pico **20–40**, não "a partir dos 40"). D erra os fatores (retrátil e hérnia inguinal **não** são fatores; **criptorquidia** é). É a questão da MP–Paraná, e a chave é a via cirúrgica.
`quiz__distractor`: **Por que cair na B:** "quarta década" inclui 30–40, que toca a faixa real — mas o pico é 20–40 e a redação exclui a terceira década, tornando-a imprecisa. **Por que cair na D:** "testículo retrátil" é o irmão benigno da criptorquidia; quem não distingue marca como fator de risco e erra.

- **page-nav next:** *(última página — botão next desabilitado `data-state="disabled"` ou "Voltar ao hub →" linkando o index raiz)*

---

# 7. ÍNDICE PARA O menu-overlay (menu-panel__list)

| # | href | Título curto (menu) |
|---|---|---|
| 1 | `#/p1` | 95 em cada 100 |
| 2 | `#/p2` | O testículo que não desceu |
| 3 | `#/p3` | Seminoma × não-seminoma |
| 4 | `#/p4` | A massa que não dói |
| 5 | `#/p5` | Por onde o tumor sobe |
| 6 | `#/p6` | Tempo é testículo |
| 7 | `#/p7` | AFP, β-hCG, LDH |
| 8 | `#/p8` | Nunca pela bolsa |
| 9 | `#/p9` | 80 a 90% de cura |
| 10 | `#/p10` | Estadiar depois |
| 11 | `#/p11` | Se dói, desconfie |
| 12 | `#/p12` | A sequência que vence |

`menu-panel__title` = "Aula Extra 8 — Câncer de Testículo". `site-header__subtitle` = idem. `progress-counter` inicial "1 / 12", `progress-bar` aria-valuemax="12", fill inicial `8.33%`.

---

# 8. BRIEFS VISUAIS CONSOLIDADOS

### 8.1 SVGs interativos (12 — 1 por página, engine `initInteractive`)

Cada `figure-svg` segue o padrão do CB: `figcaption` com instrução de interação ("Passe o mouse, toque ou foque cada elemento…"), `figure-svg__frame` > `figure-svg__stage` (aria-live="polite") > `<svg role="img" aria-labelledby>` com `<title>`+`<desc>`. Interatividade real (hotspot revela painel, slider, step, matriz que preenche) — **o elemento desenhado é o alvo do clique**, nunca número solto sobreposto. Classes JS `il-svgN` / `bx-svgN` conforme app.js.

| Pág | Tipo de interação | Hotspots / estados |
|---|---|---|
| P1 | barras + hotspot | 95% germ / 5% não-germ; 4 subtipos raros |
| P2 | régua de risco relativo | 5 fatores com múltiplos (4–6×, ~2×, 8–12×, 2–4×, 12×) |
| P3 | árvore de classificação | germinativo → seminoma / não-seminoma → 4 componentes do misto |
| P4 | esquema bimanual | endurecida / indolor / delimitada / hidrocele / ginecomastia |
| P5 | mapa de drenagem | testículo → canal inguinal → retroperitônio → supraclavicular |
| P6 | USG slider/hotspot | hipoecogênica / heterogênea / delimitada / Doppler |
| P7 | matriz dinâmica | AFP·β-hCG·LDH × seminoma·não-seminoma (revela %) |
| P8 | step inguinal × escrotal | anel interno / clampeia / via escrotal proibida |
| P9 | barra de cura + comparação | 80–90% / metástase+cisplatina |
| P10 | timeline de decisão | cirurgia → marcador → (cai/mantém) → TC abdome |
| P11 | matriz comparativa | torção × orquiepididimite × tumor (dor/febre/Prehn/início) |
| P12 | fluxo-síntese clicável | gatilho → USG+marcador → orquiectomia → estadia depois + 2 questões |

> Briefs detalhados (vista, achado, comportamento, alt/desc, paleta hl-good/hl-bad) ficam prontos para `ilustrador-medico-bauer` — 1 prompt por SVG. Especialidade: uro-oncologia. Cor primária da aula a calibrar pelo Executor/Style Director (sugestão: manter teal/petróleo da plataforma, com hl-good verde e hl-bad coral).

### 8.2 Imagens reais (5 — para `buscador-imagem-medica-bauer`)

| Pág | O que mostrar | Modalidade/vista | Validação |
|---|---|---|---|
| P2 | testículo criptorquídico / não descido | foto clínica ou peça cirúrgica documentada | clínica: retido fora da bolsa · licença CC |
| P3 | seminoma | histopatológico HE, aspecto clássico | clínica: ninhos + septo linfocitário · licença CC |
| P4 | massa testicular sólida | peça macroscópica de orquiectomia | clínica: massa sólida delimitada · licença CC |
| P6 | tumor testicular | USG escrotal, lesão hipoecogênica heterogênea | técnica: hipoecoica + heterogênea · licença CC |
| P8 | orquiectomia inguinal radical | peça cirúrgica testículo + cordão | clínica: cordão até anel inguinal · licença CC |

Verificar primeiro reaproveitamento em `assets/img/` do repo; senão, busca CC (Wikimedia Commons / Radiopaedia CC / PathologyOutlines CC), validação tripla, `attr` com fonte+licença+link. As 7 páginas restantes carregam `data-piso-img-exempt` (motivos na §5).

---

# 9. CHECKLIST DE PRESERVAÇÃO (gate de entrega)

- [x] 95% germinativos + 4 não-germinativos nomeados → P1
- [x] 20–40 anos pico, 2º em 15–19, contraste >60 → P1/P2
- [x] Criptorquidia 4–6×, contralateral 2×, irmão 8–12×, pai 2–4×, pessoal 12× → P2
- [x] Seminoma × não-seminoma misto (4 componentes) → P3
- [x] Massa indolor/endurecida/delimitada, banho/parceiro/trauma 40d, hidrocele, peso, ginecomastia 2%, dor=metástase, metástase inicial 10–15% (até 30%) → P4/P5
- [x] Exame físico + rota canal inguinal → retroperitônio → supraclavicular → P5
- [x] USG hipoecogênica/heterogênea "carne de peixe", Doppler, bilateral, não retardar → P6
- [x] AFP (nunca seminoma, 60–80% não-sem), β-hCG (até 15% sem, 20–40% não-sem), LDH inespecífico, pré/pós-op prognóstico → P7
- [x] Orquiectomia inguinal radical + cordão + anel interno, cura 80–90%, escrotal proibida, parcial controversa → P8
- [x] Cisplatina na metástase (USP) → P9
- [x] Estadiamento depois, marcador pós-op, TC abdome contraste, TC/RX tórax selecionados, acompanhamento → P10
- [x] Torção (dor aguda), orquiepididimite (febre, Prehn+), testículo retrátil ≠ fator, hérnia inguinal ≠ fator → P11
- [x] Questões USP-RP + MP-PR + síntese de conduta → P12
- [x] Anti-metalinguagem: nenhum "nesta aula/professor/vamos ver/próxima página/imagem real/mapa mental" no corpo
- [x] 24 questões gold (2/página), justificativa refuta cada errada + distractor
- [x] hl-good/hl-bad 2–4 por página
- [x] Piso visual: 12 SVG + 5 imagens reais + 7 exceções justificadas

---

# 10. INSTRUÇÃO FINAL AO EXECUTOR

1. Criar `aulas/aula-extra-08-testiculo/` com `index.html`, `aula-extra-08.css`, `app.js` (importando `initInteractive` de `../../assets/js/components/interactive.js`), `testiculo-interactive.js`. Espelhar a mecânica de roteamento, menu, tema, progresso e quiz do `aula-extra-07-ca-bexiga`.
2. Renderizar as 12 páginas exatamente nas seções 6, com os componentes do chassi (`opener--*`, `chipset`/`chip--topic`, `topic-h`, `prose`, `figure-svg`, `figure.med`, asides, `quiz` gold, `page-nav`).
3. Construir os 12 SVGs interativos da §8.1 com hotspot/slider/step reais via `initInteractive` (elemento desenhado = alvo). Cada SVG com `<title>`/`<desc>` e `figcaption` instrutivo.
4. Inserir as 5 imagens reais da §8.2 (reaproveitar `assets/img/` se houver match; senão acionar busca CC). As 7 páginas de exceção recebem `data-piso-img-exempt` no `<article>`.
5. Aplicar `hl-good`/`hl-bad` nos termos marcados (2–4/página).
6. Adicionar o card `CT` no `index.html` raiz, após o card da Aula Extra 7, com a descrição da §0 e tags `12 páginas · 24 questões · 12 SVG interativos · 5 imagens reais`.
7. Gate final: grep anti-metalinguagem no HTML produzido (zero hits) e conferir 24 quizzes (2/página) com justificativa+distractor.

> **NÃO editar arquivos do produto neste momento** — este é o design. O Executor constrói a partir daqui.
