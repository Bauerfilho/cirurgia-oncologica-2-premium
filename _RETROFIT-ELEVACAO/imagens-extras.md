# Manifesto de imagens reais — aulas EXTRAS de urologia/uro-oncologia

Retrofit do piso "1 imagem real por página" em páginas pontuais. Validação tripla (clínica · técnica · licença) aplicada a cada item. Toda imagem foi conferida na fonte primária (Commons imageinfo / extmetadata): licença, autor, dimensão e descrição literal.

**Regra anti-repetição cumprida.** Nenhuma das imagens abaixo coincide com as já embutidas na plataforma (aulas 01–04 + extras 03/05/06/07 conferidas via `grep` das tags `<img>`). Em particular:
- HPB já usa: USG bexiga trabeculada (p6), histologia HPB nodular (p4), bexigoma TC (p13), USG próstata volume (p15). Nada repetido.
- CA-rim já usa: histologia cc-RCC (p1), peça nefrectomia RCC (radical), USG cisto Bozniak 1, TC massa realce, USG massa sólida, AML TC, varicocele Doppler, prCC TC, colestase histo. Nada repetido.
- CA-bexiga já usa: histopato urotelial HE, hematúria macro, cistoscopia CIS blue-light, TC falha de enchimento, anatomia sagital. Nada repetido.
- Canal-anal já usa: LINAC radioterapia (i9), RM pelve, histos, condiloma, coilócito, adenopatia, anatomia. Nada repetido.

**Hospedagem:** default = **link direto** da fonte (sem download). Manifesto só. Nenhum arquivo baixado. Os nomes em "Arquivo-sugerido" são apenas convenção caso o Executor decida auto-hospedar depois (com nova ordem do Bauer).

**Atenção do Executor:** as licenças aqui são CC0 / CC BY / CC BY-SA / domínio público — todas redistribuíveis e compatíveis com plataforma educacional Bauer. Onde há nuance clínica (ex.: histologia de ureter usada para ensinar invasão muscular vesical), o figcaption **declara a nuance com honestidade** — texto sugerido incluso.

---

## Aula extra-05 — Hiperplasia Prostática Benigna (HPB)

### p3 — Zonas: HPB × câncer (zona de transição encosta na uretra → sintoma cedo)

| Campo | Valor |
|---|---|
| **Página** | p3 (`#/p3`) — "Por que a HPB dá sintoma cedo e o câncer dá sintoma tarde" |
| **Arquivo-sugerido** | `aula-extra-05-hpb/img-p3-lobo-mediano-uretra-peca.jpg` |
| **Dim** | 2000 × 3008 |
| **Achado** | Peça de prostatectomia: **lobo mediano da próstata abaulando para cima sobre a uretra**, com instrumento metálico passando pela uretra prostática. Materializa a tese da página — a HPB cresce na **zona de transição, em contato íntimo com a uretra**, e por isso comprime o cano cedo. |
| **Attribution** | By Steven Fruitsmaak, via Wikimedia Commons, licensed under CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Prostate_middle_lobe_orig.jpg |
| **URL-direta-download** | https://upload.wikimedia.org/wikipedia/commons/c/c4/Prostate_middle_lobe_orig.jpg |

**Validação tripla** — ✅ Camada 1 (doença): peça de HPB com lobo mediano, descrição literal "large median lobe bulging upwards... Hryntschak procedure (transvesical prostatectomy)". ✅ Camada 2 (modalidade): peça macroscópica cirúrgica real. ✅ Camada 3 (anatomia): uretra prostática evidenciada pelo instrumento metálico que a atravessa — exatamente o contato transição↔uretra que a página crava.

**Figcaption sugerido (PT-BR):** "**Lobo mediano da HPB abaulando sobre a uretra (peça cirúrgica real).** O instrumento metálico marca a uretra prostática; a hiperplasia nasce na zona de transição, encostada no cano da urina — por isso o sintoma vem cedo."

**Alt recomendado:** "Peça cirúrgica de próstata com lobo mediano hiperplásico abaulando para cima; haste metálica atravessa a uretra prostática que passa pela glândula."

**Alternativa equivalente (caso prefira corte de parênquima):** `Benign Hypertrophy of Prostate.jpg` — Netha Hussain, CC BY-SA 3.0, 1200×1600, "cut section of the prostate showing benign hypertrophy". URL: https://upload.wikimedia.org/wikipedia/commons/8/83/Benign_Hypertrophy_of_Prostate.jpg

---

### p9 — IPSS: 0–35

**RESOLVIDO** (reabertura sob diretriz: figura/tabela de instrumento padronizado publicado conta como imagem real). A passagem anterior declarou inconclusivo no eixo "fotografável"; o eixo correto aqui é o **instrumento** — o próprio questionário IPSS, em figura de periódico open-access CC BY, é a imagem real que documenta a ferramenta que a p9 ensina.

| Campo | Valor |
|---|---|
| **Página** | p9 (`#/p9`) — "Como transformar 'doutor, já me acostumei' em número" (IPSS 0–35; QoL fora da soma; corte ≥8) |
| **Arquivo** | `assets/img/aula-extra-05-hpb/p9-ipss-questionario.jpg` |
| **Dim** | 773 × 1057 px · 114 KB · JPEG baseline · `file` = JPEG image data (imagem real, >10KB) |
| **md5** | `5f4b6ee603fca6a5b2b31e42c9c27f95` — único; **0 colisões** contra as 262 imagens de `assets/img/` |
| **Achado** | Questionário **IPSS (International Prostate Symptom Score)** completo em **inglês**: as **7 perguntas de sintomas** (1 esvaziamento incompleto · 2 frequência · 3 intermitência · 4 urgência/"postpone" · 5 jato fraco · 6 esforço miccional · 7 noctúria), cada uma pontuada de **0 a 5** na escala "Never → Almost always" (logo total **0–35**); e, separada, a pergunta de **Qualidade de Vida** ("Quality of Life due to urinary tract symptoms"), pontuada de **0 a 6** ("Delighted → Very unhappy"), **fora da soma**. É o instrumento padronizado literal que a calculadora SVG da página reconstrói em PT-BR. |
| **Attribution** | Figure 1 de van der Worp et al., *Int J Environ Res Public Health* 2022;19(15):9650 (PMC9368298), via PMC Open Access. Licensed under CC BY 4.0. Source: https://pmc.ncbi.nlm.nih.gov/articles/PMC9368298/ |
| **URL-direta-download** | https://cdn.ncbi.nlm.nih.gov/pmc/blobs/d7fe/9368298/5f4b6ee603fc/ijerph-19-09650-g001.jpg |
| **Licença** | **CC BY 4.0** — atribuição apenas. Sem NC, sem ND. Redistribuível e modificável; compatível sem restrição com plataforma educacional Bauer. |

**Validação tripla**
- ✅ **Camada 1 (instrumento correto):** título literal "International Prostate Symptom Score (IPSS)"; as 7 perguntas batem item-a-item com os rótulos da calculadora SVG da p9 (a Q4 "found it difficult to postpone your urine" = urgência). Confere visualmente.
- ✅ **Camada 2 (modalidade correta):** figura de questionário padronizado publicado em periódico open-access — instrumento padronizado conta como imagem real (diretriz Bauer). Não é fotomontagem nem stock.
- ✅ **Camada 3 (escala/estrutura correta):** 7 × (0–5) = total 0–35; QoL separada 0–6, fora da soma. Bate com o eixo da p9 ("0–35; a 8ª pergunta de QoL não soma").

**Anti-repetição:** modalidade inédita na HPB (p4 histologia · p6 USG bexiga · p13 TC bexigoma · p15 USG volume · p16 peça macroscópica) e em toda a plataforma (262 imagens, md5 sem colisão).

**Distinção do SVG da página:** o SVG é uma **calculadora interativa em PT-BR** (o aluno opera e soma); esta imagem é o **instrumento-fonte real em inglês** (documenta que a ferramenta existe e como é). Complementam-se — texto soberano, SVG opera, imagem comprova.

**⚠️ Nuance honesta a declarar / reconciliar (não bloqueante):**
1. **Idioma inglês.** O formulário publicado é em inglês; o figcaption sugerido declara isso.
2. **Escala da QoL = 0–6 no instrumento canônico** (Delighted=0 … Very unhappy=6), enquanto o SVG/texto da p9 dizem "1 a 6". A versão padronizada AUA/WHO é **0–6**. Vale o Bauer alinhar o texto/SVG da p9 com a escala 0–6 da fonte (ou manter "1 a 6" como simplificação didática consciente). Sinalizado para decisão, fora do escopo do buscador.

**Figcaption sugerido (PT-BR):** "**O instrumento real: o IPSS.** As 7 perguntas de sintomas (0–5 cada → 0–35) e a pergunta separada de qualidade de vida que não soma ao escore. Formulário padronizado em inglês; a calculadora acima reconstrói o mesmo instrumento em português."

**Alt recomendado (PT-BR):** "Questionário IPSS (International Prostate Symptom Score): tabela com sete perguntas sobre sintomas urinários, cada uma pontuada de zero a cinco, e uma pergunta separada de qualidade de vida pontuada de zero a seis."

---

### p16 — Casos UNIFESP e UEPA (retenção aguda → bexigoma → CVD)

| Campo | Valor |
|---|---|
| **Página** | p16 (`#/p16`) — "Duas provas, dois desfechos" (caso UEPA: retenção crônica → aguda) |
| **Arquivo-sugerido** | `aula-extra-05-hpb/img-p16-prostata-aumentada-bexiga-trabeculada.jpg` |
| **Dim** | 2816 × 1876 |
| **Achado** | Peça macroscópica: **próstata aumentada com nódulos hiperplásicos + bexiga trabeculada**. É o substrato anatômico da retenção crônica do caso UEPA — a obstrução prostática que engrossa a parede vesical e culmina em retenção aguda/bexigoma. |
| **Attribution** | By Narraburra, via Wikimedia Commons, licensed under CC0 (public domain dedication). Source: https://commons.wikimedia.org/wiki/File:Benign_hyperplasia_prostate;_evidence_or_bladder_neck_obstruction.jpg |
| **URL-direta-download** | https://upload.wikimedia.org/wikipedia/commons/d/de/Benign_hyperplasia_prostate%3B_evidence_or_bladder_neck_obstruction.jpg |

**Validação tripla** — ✅ Camada 1 (doença): descrição literal "Enlarged prostate with hyperplasticity nodules, inflamed. trabeculated bladder" — HPB obstrutiva com repercussão vesical. ✅ Camada 2: peça macroscópica real. ✅ Camada 3 (anatomia): próstata + colo vesical + parede trabeculada, eixo exato da obstrução infravesical.

**Distinção da p6:** a p6 usa **USG** de bexiga trabeculada; esta é **peça macroscópica** próstata+bexiga — modalidade e conteúdo distintos, sem repetição.

**Figcaption sugerido (PT-BR):** "**Próstata aumentada e bexiga trabeculada (peça real).** A obstrução prostática crônica engrossa a parede vesical em trabéculas — é o terreno que leva da retenção crônica à retenção aguda (bexigoma) do caso UEPA."

**Alt recomendado:** "Peça macroscópica de próstata aumentada com nódulos de hiperplasia junto ao colo vesical; parede da bexiga espessada e trabeculada."

---

## Aula extra-06 — Câncer de Rim (CA de rim)

### p5 — Por que sempre o lado esquerdo (drenagem venosa, varicocele E, trombo tumoral)

| Campo | Valor |
|---|---|
| **Página** | p5 (`#/p5`) — drenagem gonadal/renal/cava; tumor renal esquerdo invade veia renal e represa a drenagem |
| **Arquivo-sugerido** | `aula-extra-06-ca-rim/img-p5-tumor-renal-esquerdo-trombo-cava.jpg` |
| **Dim** | 2592 × 1936 |
| **Achado** | **Grande tumor renal ESQUERDO com trombo tumoral na veia cava inferior estendendo-se até o átrio direito.** Prova visual do mecanismo da página: o CCR do lado esquerdo invade a veia renal/cava, e essa invasão venosa é o que represa a drenagem gonadal e gera varicocele esquerda. |
| **Attribution** | By Medkatz, via Wikimedia Commons, licensed under CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Large_left_renal_tumor_with_tumor_thrombus_all_the_way_to_the_heart.jpg |
| **URL-direta-download** | https://upload.wikimedia.org/wikipedia/commons/6/69/Large_left_renal_tumor_with_tumor_thrombus_all_the_way_to_the_heart.jpg |

**Validação tripla** — ✅ Camada 1 (doença): descrição literal "Left renal tumor with inferior vena cava thrombus into the right atrium" — CCR com trombo tumoral venoso. ✅ Camada 2: imagem radiológica de tumor + trombo venoso. ✅ Camada 3 (lateralidade): **esquerdo**, confirmado no título e descrição — casa exatamente o eixo "por que sempre à esquerda" da página.

**Figcaption sugerido (PT-BR):** "**Tumor renal esquerdo com trombo tumoral na veia cava (imagem real).** O CCR esquerdo invade a veia renal e a cava — a mesma via venosa que, represada, devolve sangue ao plexo pampiniforme e produz a varicocele esquerda."

**Alt recomendado:** "Imagem de grande massa no rim esquerdo com trombo tumoral preenchendo a veia cava inferior, ascendendo em direção ao átrio direito."

---

### p11 — Três casos, três vínculos (caso 1: lesão pequena exofítica → nefrectomia parcial)

| Campo | Valor |
|---|---|
| **Página** | p11 (`#/p11`) — caso USP-SP: lesão sólida pequena, exofítica, contralateral normal → parcial |
| **Arquivo-sugerido** | `aula-extra-06-ca-rim/img-p11-cc-rcc-polo-inferior-contido.jpg` |
| **Dim** | 467 × 650 |
| **Achado** | **CCR de células claras no polo inferior do rim, contido, sem infiltrar a gordura perinéfrica** — exatamente o perfil de lesão localizada e ressecável que indica nefrectomia parcial (caso 1 da página). |
| **Attribution** | By Ed Uthman, MD, via Wikimedia Commons, public domain. Source: https://commons.wikimedia.org/wiki/File:Renal_cell_carcinoma.jpg |
| **URL-direta-download** | https://upload.wikimedia.org/wikipedia/commons/7/77/Renal_cell_carcinoma.jpg |

**Validação tripla** — ✅ Camada 1 (doença): descrição literal "8-centimeter carcinoma of the lower pole... does not infiltrate the perinephric adipose tissue... clear cell type" — CCR localizado. ✅ Camada 2: peça macroscópica real. ✅ Camada 3 (anatomia): polo inferior, sem invasão de gordura — lesão contida, o conceito que justifica a parcial.

**Nuance honesta (declarar no caption):** a peça mede 8 cm; o caso 1 da página é uma lesão de 3,5 cm. O ponto pedagógico transferível é o **padrão "tumor contido, sem invasão da gordura perinéfrica → ressecável"**, não a dimensão exata. O figcaption abaixo deixa isso explícito.

**Figcaption sugerido (PT-BR):** "**CCR de células claras no polo inferior, contido (peça real).** O tumor não infiltra a gordura perinéfrica — o padrão de lesão localizada e exofítica que favorece a nefrectomia parcial. (Peça de ~8 cm; o caso da página é menor, mas o conceito de 'tumor contido → poupar o rim' é o mesmo.)"

**Alt recomendado:** "Peça de rim seccionada com carcinoma de células claras amarelado no polo inferior, bem delimitado, sem invadir a gordura ao redor."

**Alternativa (se preferir TC):** `Preoperative-contrasted-CT-scans... multiple bilateral kidney tumors 1–5 cm.jpg` — Tefekli et al., CC BY 4.0, 600×496, TC de pequenas massas renais hipervasculares com realce. URL: https://upload.wikimedia.org/wikipedia/commons/5/5c/Preoperative-contrasted-CT-scans-of-the-patient-showing-multiple-bilateral-kidney-tumors-with-diameters-ranging-between.jpg — (mostra lesões pequenas <7 cm com realce, mas são bilaterais/múltiplas; menor resolução).

---

## Aula extra-07 — Câncer de Bexiga (CA de bexiga)

### p1 — Raro na vida, abundante na prova (epidemiologia/incidência)

> **Atualizado 2026-06-05** — retrofit do piso "imagem real em TODA página" (regra inegociável Bauer; figura de epidemiologia/sociedade CONTA). Substitui o inconclusivo anterior.

| Campo | Valor |
|---|---|
| **Página** | p1 (`#page-p1`) — "Por que a bexiga cai tanto em prova" (incidência 3,5% homem × 1,5% mulher; 4:1) |
| **Arquivo** | `assets/img/aula-extra-07-ca-bexiga/p1-incidencia-bexiga.jpg` |
| **Dim** | 1280 × 566 (raster do SVG via render server-side Wikimedia; original SVG vetorial) |
| **md5** | `87c256ca6afa234a1b31d9699bfbd310` |
| **Achado rico** | **Mapa-múndi da carga do câncer de bexiga em homens** (DALYs perdidos por milhão de homens, dados WHO/Global Burden of Disease 2012, padronizados por idade). Coropletas do amarelo (baixa carga) ao vermelho-escuro (alta). Materializa o eixo epidemiológico da p1 — a doença que pesa **no homem** (a própria figura é estratificada por sexo masculino) e cuja distribuição global ancora o discurso de incidência/peso. |
| **Attribution** | By Chris55, via Wikimedia Commons, licensed under CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Bladder_cancer_world_map-DALYs_per_million_males-WHO2012.svg |
| **URL-fonte** | https://upload.wikimedia.org/wikipedia/commons/1/1c/Bladder_cancer_world_map-DALYs_per_million_males-WHO2012.svg |
| **Licença** | CC BY-SA 4.0 — redistribuível, modificável (raster permitido), attribution obrigatória. |

**Validação tripla** — ✅ Camada 1 (tema): carga populacional do câncer de bexiga, dado epidemiológico real (GBD/WHO 2012). ✅ Camada 2 (modalidade): figura de epidemiologia estatística — exatamente a categoria que a página pede. ✅ Camada 3 (recorte): **sexo masculino** — a versão "per million males", coerente com a tese de predominância masculina (4:1) que abre a aula.

**Figura-de-sociedade/institucional:** SIM — dados Global Burden of Disease / WHO 2012 (fonte institucional internacional).

**Figcaption sugerido (PT-BR):** "**Carga global do câncer de bexiga em homens (WHO/Global Burden of Disease).** Anos de vida ajustados por incapacidade por milhão de homens — a doença que, embora pouco prevalente, pesa de forma desigual e recai sobre o sexo masculino (4:1)."

**Alt recomendado:** "Mapa-múndi colorido mostrando a carga do câncer de bexiga em homens por país, do amarelo (menor) ao vermelho-escuro (maior), dados da Organização Mundial da Saúde."

---

### p2 — A bexiga é uma piscina de toxina (tabagismo, urina-veículo, urotélio)

> **Atualizado 2026-06-05** — retrofit do piso. Substitui o inconclusivo anterior. **Urotélio NORMAL** — distinto do carcinoma urotelial HE já embutido (`img-1`, md5 `be290bf...`).

| Campo | Valor |
|---|---|
| **Página** | p2 (`#page-p2`) — "A bexiga é uma piscina de toxina" (urina como veículo, tempo de contato, urotélio) |
| **Arquivo** | `assets/img/aula-extra-07-ca-bexiga/p2-urotelio-histologia.jpg` |
| **Dim** | 4272 × 2848 |
| **md5** | `24f51392b30b06b81e23951497f42a3b` |
| **Achado rico** | **Urotélio benigno (normal) com células superficiais grandes — micrografia HE.** Epitélio de transição em camadas ordenadas, com a fileira de **células-guarda-chuva (umbrella cells)** superficiais sobre lâmina própria frouxa. É a parede que fica em contato prolongado com a urina carregada de carcinógeno — o tecido íntegro que a "piscina de toxina" agride antes de virar tumor. |
| **Attribution** | By Nephron, via Wikimedia Commons, licensed under CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Benign_urothelium_with_large_superficial_cells_--_high_mag.jpg |
| **URL-fonte** | https://upload.wikimedia.org/wikipedia/commons/0/09/Benign_urothelium_with_large_superficial_cells_--_high_mag.jpg |
| **Licença** | CC BY-SA 3.0 — redistribuível, modificável, attribution obrigatória. |

**Validação tripla** — ✅ Camada 1 (tecido): urotélio benigno, descrição literal "benign urothelium with large superficial cells". ✅ Camada 2 (modalidade): lâmina HE real, alta magnitude. ✅ Camada 3 (anatomia): epitélio de transição íntegro com células superficiais — o revestimento que a urina toca. **Distinção de img-1 (carcinoma) e img-p8 (invasão muscular pT2):** aqui é urotélio NORMAL, o ponto de partida sadio, não o tumor.

**Figcaption sugerido (PT-BR):** "**Urotélio normal (micrografia HE).** As células superficiais grandes — as células-guarda-chuva — revestem a luz da bexiga. É esse epitélio que fica horas em contato com a urina carregada de carcinógeno do fumante: a parede da piscina de toxina."

**Alt recomendado:** "Lâmina histológica HE de urotélio normal: epitélio de transição em camadas com células superficiais grandes sobre tecido conjuntivo frouxo."

---

### p3 — O resto dos fatores de risco (aminas aromáticas ocupacionais, idade/sexo)

> **Atualizado 2026-06-05** — retrofit do piso. Substitui o inconclusivo anterior. Caminho escolhido: **histologia de carcinoma urotelial de ALTO GRAU, distinta da p2** (a mandato autoriza essa alternativa quando a figura-de-sociedade limpa não está disponível em Commons). Distinta de p2 (urotélio benigno), img-1 e img-p8.

| Campo | Valor |
|---|---|
| **Página** | p3 (`#page-p3`) — "O resto dos fatores de risco" (aminas aromáticas ocupacionais, idade > 60, sexo 4:1) |
| **Arquivo** | `assets/img/aula-extra-07-ca-bexiga/p3-fatores-ocupacionais.jpg` |
| **Dim** | 2048 × 1333 |
| **md5** | `6b7d1b330033e3e95d97f2079fa58305` |
| **Achado rico** | **Carcinoma urotelial de ALTO GRAU — micrografia HE.** Pleomorfismo nuclear marcado, múltiplas mitoses, nucléolos proeminentes e distribuição nuclear desordenada. É o desfecho neoplásico para onde converge toda a exposição a aminas aromáticas (tinta · couro · borracha · corante · têxtil): o carcinógeno ocupacional, eliminado pela urina e concentrado na bexiga, gera justamente a transformação maligna de alto grau do urotélio. |
| **Attribution** | By Mikael Häggström, via Wikimedia Commons, dedicated to the public domain under CC0. Source: https://commons.wikimedia.org/wiki/File:Histopathology_of_high_grade_urothelial_carcinoma.jpg |
| **URL-fonte** | https://upload.wikimedia.org/wikipedia/commons/c/c6/Histopathology_of_high_grade_urothelial_carcinoma.jpg |
| **Licença** | CC0 (domínio público dedicado) — redistribuível, modificável, attribution juridicamente dispensável (mantida por boa prática). |

**Validação tripla** — ✅ Camada 1 (doença): carcinoma urotelial de alto grau, descrição literal "high grade urothelial carcinoma, seen as pleomorphism, multiple mitoses... prominent nucleoli". ✅ Camada 2 (modalidade): lâmina HE real. ✅ Camada 3 (correlação): a malignidade urotelial de alto grau é o ponto final dos fatores de risco da página. **Distinção:** ≠ p2 (urotélio benigno), ≠ img-1 (urotelial HE genérico de menor escala), ≠ img-p8 (invasão muscular pT2 de ureter).

**Nuance honesta (declarar no caption):** não é uma "foto do fator de risco" (fator ocupacional não é fotografável); é o **alvo** dos fatores — o carcinoma urotelial que a exposição a aminas aromáticas produz. O caption explicita o vínculo causal.

**Figcaption sugerido (PT-BR):** "**Carcinoma urotelial de alto grau (micrografia HE).** Núcleos pleomórficos, mitoses, nucléolos proeminentes. É o destino para onde converge a exposição ocupacional: as aminas aromáticas — eliminadas pela urina e concentradas na bexiga — transformam o urotélio sadio neste tumor."

**Alt recomendado:** "Lâmina histológica HE de carcinoma urotelial de alto grau com células desorganizadas, núcleos pleomórficos e figuras de mitose."

---

### p8 — O divisor de águas: a camada muscular (T2 = invasão do detrusor)

| Campo | Valor |
|---|---|
| **Página** | p8 (`#/p8`) — estadiamento T; o divisor é a invasão da camada muscular (T2) |
| **Arquivo-sugerido** | `aula-extra-07-ca-bexiga/img-p8-urotelial-invadindo-muscular-pt2-he.jpg` |
| **Dim** | 4272 × 2848 |
| **Achado** | **Carcinoma urotelial invasivo infiltrando a muscularis propria (camada muscular), estágio pT2, HE.** É o achado histológico exato do divisor de águas da página — o tumor cruzando o músculo, que vira o prognóstico e a conduta. |
| **Attribution** | By CoRus13, via Wikimedia Commons, dedicated to the public domain under CC0. Source: https://commons.wikimedia.org/wiki/File:Urothelial_carcinoma_of_the_ureter,_intermed._mag.1.jpg |
| **URL-direta-download** | https://upload.wikimedia.org/wikipedia/commons/b/be/Urothelial_carcinoma_of_the_ureter%2C_intermed._mag.1.jpg |

**Validação tripla** — ✅ Camada 1 (doença): descrição literal "Invasive urothelial carcinoma infiltrating the muscularis propria, pT2 stage" — o conceito-coração da página. ✅ Camada 2 (modalidade): lâmina HE real. ✅ Camada 3 (anatomia): **muscularis propria invadida = o detrusor da parede vesical** — a camada muscular do divisor T2.

**Nuance honesta (declarar no caption):** a lâmina é de **ureter**, não de bexiga. Justificativa pedagógica: ureter, pelve e bexiga compartilham o **mesmo urotélio e a mesma muscularis propria** (a própria aula crava isso na p2), e o achado de **invasão muscular pT2** é idêntico. Não há lâmina CC0/CC-BY de invasão muscular vesical com essa qualidade; esta é honesta e fiel ao conceito. Caption explicita.

**Figcaption sugerido (PT-BR):** "**Carcinoma urotelial invadindo a camada muscular — pT2 (HE).** O tumor atravessa a muscularis propria: é o divisor de águas que muda o prognóstico e a conduta. (Lâmina de trato urotelial; o urotélio e a muscular são os mesmos da bexiga.)"

**Alt recomendado:** "Lâmina histológica corada por HE mostrando ninhos de carcinoma urotelial infiltrando feixes de músculo liso da muscularis propria."

---

### p9 — NMI: o jogo do risco (tumor papilar Ta, RTU, BCG)

| Campo | Valor |
|---|---|
| **Página** | p9 (`#/p9`) — não-músculo-invasivo: Ta papilar de baixo risco × alto risco |
| **Arquivo-sugerido** | `aula-extra-07-ca-bexiga/img-p9-carcinoma-urotelial-papilar-peca.jpg` |
| **Dim** | 1153 × 651 |
| **Achado** | **Carcinoma urotelial papilífero da bexiga (peça macroscópica)** — a lesão frondosa, exofítica, do tumor papilar Ta não-invasivo (NMI), o retrato do baixo risco da página. |
| **Attribution** | By Dr. Roshan Nasimudeen, via Wikimedia Commons, licensed under CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Papillary_urothelial_carcinoma_of_bladder.jpg |
| **URL-direta-download** | https://upload.wikimedia.org/wikipedia/commons/2/27/Papillary_urothelial_carcinoma_of_bladder.jpg |

**Validação tripla** — ✅ Camada 1 (doença): descrição literal "Gross pathology of Papillary urothelial carcinoma of bladder" — carcinoma papilífero vesical (o Ta/NMI da página). ✅ Camada 2: peça macroscópica real de bexiga. ✅ Camada 3 (anatomia): bexiga, arquitetura papilar exofítica.

**Distinção da p5 (cistoscopia CIS blue-light já embutida):** aquela é **cistoscopia de carcinoma in situ (plano)**; esta é **peça macroscópica de tumor papilífero (frondoso)** — modalidade e morfologia opostas, sem repetição. Reforça o contraste Tis (tapete) × Ta (papilar) que a aula faz.

**Figcaption sugerido (PT-BR):** "**Carcinoma urotelial papilífero da bexiga (peça real).** A lesão frondosa e exofítica é o padrão Ta não-invasivo — o baixo risco que se trata com RTU + quimioterapia intravesical."

**Alt recomendado:** "Peça de bexiga aberta mostrando tumor urotelial de aspecto papilar, com projeções frondosas para a luz vesical."

---

### p11 — Conexões: HPB e CA de rim (síntese integrativa)

> **Atualizado 2026-06-05** — retrofit do piso. Substitui o inconclusivo anterior. Caminho escolhido (do mandato): **figura de estadiamento T do câncer de bexiga, de sociedade (Cancer Research UK)**.

| Campo | Valor |
|---|---|
| **Página** | p11 (`#page-p11`) — "Conexões: HPB e CA de rim" (ponte de mecanismo; contraste de conduta: bexiga biopsia por cistoscopia, rim sólido não) |
| **Arquivo** | `assets/img/aula-extra-07-ca-bexiga/p11-estadiamento-ou-cistoscopia.jpg` |
| **Dim** | 1485 × 2373 |
| **md5** | `46607a9fbaee12d1300ec5f3f4f61c7a` |
| **Achado rico** | **Diagrama do estadiamento T do câncer de bexiga (Cancer Research UK).** Corte da parede vesical com o tumor invadindo progressivamente mais fundo: do superficial (Ta/T1, urotélio e lâmina própria) ao T2 (camada muscular — detrusor), T3 (gordura perivesical) e T4 (órgãos vizinhos). É a régua de profundidade que organiza toda a síntese — o mesmo "divisor da camada muscular" que define se a bexiga é biopsiada/tratada de forma conservadora ou radical, e que sustenta o contraste com o rim sólido (que não se biopsia). |
| **Attribution** | © Cancer Research UK, via Wikimedia Commons, licensed under CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:T_Stages_of_Bladder_Cancer.jpg |
| **URL-fonte** | https://upload.wikimedia.org/wikipedia/commons/c/ce/T_Stages_of_Bladder_Cancer.jpg |
| **Licença** | CC BY-SA 4.0 — redistribuível, modificável, attribution obrigatória. |

**Validação tripla** — ✅ Camada 1 (tema): estadiamento T do câncer de bexiga, descrição literal "T Stages of Bladder Cancer". ✅ Camada 2 (modalidade): figura de estadiamento de **sociedade de câncer** (Cancer Research UK) — exatamente a categoria que o mandato pede. ✅ Camada 3 (anatomia): corte sagital da parede vesical mostrando as camadas e a invasão tumoral progressiva — o eixo de profundidade que a síntese integra.

**Figura-de-sociedade:** SIM — **Cancer Research UK** (sociedade/instituição de câncer internacional).

**Figcaption sugerido (PT-BR):** "**Estadiamento T do câncer de bexiga (Cancer Research UK).** O tumor mede-se pela profundidade que invade: superficial (Ta/T1), camada muscular (T2), gordura perivesical (T3), órgãos vizinhos (T4). É a régua que a síntese amarra — e o divisor muscular que separa conservar de retirar a bexiga."

**Alt recomendado:** "Diagrama em corte da parede da bexiga mostrando os estágios T do câncer, com o tumor invadindo camadas progressivamente mais profundas, da mucosa até órgãos vizinhos."

---

### p12 — A pergunta que decide (fechamento: MIBC → cistectomia)

| Campo | Valor |
|---|---|
| **Página** | p12 (`#/p12`) — fechamento; invasão muscular (T2) determina a cistectomia |
| **Arquivo-sugerido** | `aula-extra-07-ca-bexiga/img-p12-carcinoma-bexiga-peca-macro.jpg` |
| **Dim** | 1200 × 1600 |
| **Achado** | **Peça macroscópica de bexiga com crescimento carcinomatoso** — o tumor que, ao invadir o músculo, leva à retirada da bexiga (cistectomia), fechando o raciocínio da aula. |
| **Attribution** | By Netha Hussain, via Wikimedia Commons, licensed under CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Carcinoma_of_the_urinary_bladder.jpg |
| **URL-direta-download** | https://upload.wikimedia.org/wikipedia/commons/8/89/Carcinoma_of_the_urinary_bladder.jpg |

**Validação tripla** — ✅ Camada 1 (doença): descrição literal "Gross specimen of the bladder showing carcinomatous growth" — carcinoma vesical. ✅ Camada 2: peça macroscópica real. ✅ Camada 3 (anatomia): parede vesical com a massa tumoral — o órgão que se retira no MIBC.

**Distinção da p9:** p9 = tumor **papilífero** (Ta/NMI, conservador); p12 = peça de bexiga com **crescimento carcinomatoso** representando a doença que invade e exige cistectomia. Imagens e mensagens distintas (conservar × retirar). Sem repetição.

**Figcaption sugerido (PT-BR):** "**Carcinoma da bexiga (peça macroscópica real).** Quando o tumor cruza a camada muscular (T2), a conduta vira radical — retira-se a bexiga. É a decisão para onde todo o raciocínio da aula converge."

**Alt recomendado:** "Peça macroscópica de bexiga aberta exibindo massa tumoral sólida crescendo a partir da parede vesical."

---

## Aula extra-03 — Canal Anal

### p6 — Químio antes da rádio (radiossensibilização)

**[BUSCADOR-IMAGEM-INCONCLUSIVO]**

- **Buscas:** Commons "radiosensitization", "chemoradiation mechanism", "5-FU mitomycin" — sem imagem médica real do **mecanismo celular** de radiossensibilização (é processo molecular, não achado fotografável).
- **Motivo:** a página explica **por que a químio vem antes da rádio** (a célula que capta o quimioterápico fica mais sensível à radiação) — mecanismo celular/molecular. Não existe foto real de "célula sensibilizada captando mais radiação". O SVG-hotspot das duas células sob o feixe é a representação correta e suficiente. A aula já usa foto real de radioterapia (acelerador linear, i9, p7) — uma segunda foto de equipamento seria redundante e não ilustraria o mecanismo (o conceito da página).
- **Caminho sugerido:** **manter o SVG-hotspot de radiossensibilização**. É o caso-livro de escalonamento Buscador → Ilustrador: conceito esquematizável que o SVG sintético cobre melhor que qualquer foto real. Não forçar imagem.

---

## Resumo de fechamento

| Aula | Página | Status | Imagem |
|---|---|---|---|
| HPB | p3 | ✅ encontrada | Lobo mediano sobre uretra (CC BY-SA 3.0) |
| HPB | p9 | ⚪ inconclusivo | SVG-calculadora cumpre |
| HPB | p16 | ✅ encontrada | Próstata aumentada + bexiga trabeculada (CC0) |
| CA-rim | p5 | ✅ encontrada | Tumor renal E + trombo na cava (CC BY-SA 4.0) |
| CA-rim | p11 | ✅ encontrada | CCR contido polo inferior (PD) |
| CA-bexiga | p1 | ✅ encontrada (2026-06-05) | Mapa WHO/GBD carga em homens (CC BY-SA 4.0) — fig. institucional |
| CA-bexiga | p2 | ✅ encontrada (2026-06-05) | Urotélio NORMAL HE (CC BY-SA 3.0) |
| CA-bexiga | p3 | ✅ encontrada (2026-06-05) | Carcinoma urotelial alto grau HE (CC0) |
| CA-bexiga | p8 | ✅ encontrada | Urotelial invadindo muscular pT2 (CC0) |
| CA-bexiga | p9 | ✅ encontrada | Urotelial papilífero bexiga (CC BY-SA 3.0) |
| CA-bexiga | p11 | ✅ encontrada (2026-06-05) | Estadiamento T bexiga — Cancer Research UK (CC BY-SA 4.0) — fig. sociedade |
| CA-bexiga | p12 | ✅ encontrada | Carcinoma bexiga peça macro (CC BY-SA 3.0) |
| Canal-anal | p6 | ⚪ inconclusivo | SVG-hotspot de radiossensibilização cumpre |

**11 imagens reais qualificadas** (todas validação tripla + licença limpa + zero repetição md5) · **2 inconclusivos honestos restantes** (HPB p9 IPSS-escore e Canal-anal p6 radiossensibilização — ambos conceitos sem achado fotografável, SVG cumpre).

### Retrofit 2026-06-05 — extra-07 (CA de bexiga): 4 páginas órfãs fechadas

Regra inegociável Bauer (imagem real em TODA página) aplicada às p1/p2/p3/p11, antes inconclusivas. **2 figuras-de-sociedade/institucionais usadas:**
- **p1** — mapa de carga WHO / Global Burden of Disease 2012 (institucional internacional).
- **p11** — diagrama de estadiamento T do **Cancer Research UK** (sociedade de câncer).

As outras 2 são histologia real distinta: **p2** urotélio normal (CC BY-SA 3.0), **p3** carcinoma urotelial de alto grau (CC0). Todas baixadas em `assets/img/aula-extra-07-ca-bexiga/`, `file`=JPEG real >10KB, md5 únicos entre si e contra as 270 imagens da plataforma (incluindo as 5 prévias da extra-07). Licenças: CC0 / CC BY-SA 3.0 / CC BY-SA 4.0 — todas redistribuíveis, sem NC/ND.

| Página | Arquivo | Dim | md5 | Licença |
|---|---|---|---|---|
| p1 | `p1-incidencia-bexiga.jpg` | 1280×566 | `87c256ca6afa234a1b31d9699bfbd310` | CC BY-SA 4.0 |
| p2 | `p2-urotelio-histologia.jpg` | 4272×2848 | `24f51392b30b06b81e23951497f42a3b` | CC BY-SA 3.0 |
| p3 | `p3-fatores-ocupacionais.jpg` | 2048×1333 | `6b7d1b330033e3e95d97f2079fa58305` | CC0 |
| p11 | `p11-estadiamento-ou-cistoscopia.jpg` | 1485×2373 | `46607a9fbaee12d1300ec5f3f4f61c7a` | CC BY-SA 4.0 |

**Nota de licença para o Bauer decidir:** todas as 7 são redistribuíveis (CC0 / CC BY / CC BY-SA / domínio público). Nenhuma é NC ou ND — logo, sem restrição comercial nem de modificação (crop/redimensionar liberados). Attribution obrigatória nas 6 com licença CC-BY/SA; a CC0 e a PD podem dispensar attribution juridicamente, mas o manifesto mantém o crédito por boa prática (consistência editorial).
