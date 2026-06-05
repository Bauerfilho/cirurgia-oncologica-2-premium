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

**[BUSCADOR-IMAGEM-INCONCLUSIVO]**

- **Buscas:** Commons "IPSS questionnaire", "prostate symptom score" — sem achado clínico fotografável; "BPH histology / ultrasound" — todos já usados na aula ou redundantes.
- **Motivo:** a página é sobre um **escore** (transformar queixa subjetiva em número 0–35). É conceito abstrato, sem achado clínico/imagem real correspondente. A calculadora SVG interativa já é o elemento visual certo e suficiente para o piso desta página. Foto de questionário impresso seria decoração vazia (anti-padrão §5 AGENTS-PLATAFORMAS).
- **Caminho sugerido:** **manter SVG-calculadora como visual da página** (já cumpre o piso visual de forma superior a qualquer foto). Não forçar imagem real. Se o Bauer insistir em imagem, escalar pro ilustrador (não há fonte real honesta).

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

**[BUSCADOR-IMAGEM-INCONCLUSIVO]**

- **Buscas:** Commons "bladder cancer epidemiology", "bladder cancer incidence" — sem imagem médica real correspondente (só gráficos populacionais sem licença CC clara).
- **Motivo:** a página trata de **epidemiologia e peso de prova** (incidência 3,5% × 1,5%, mapa de bancas) — conceito estatístico/abstrato. Os dois SVGs (barras de incidência + cartograma de bancas) já são os visuais corretos. Uma peça macroscópica de tumor vesical aqui seria genérica e está melhor alocada na p12 (fechamento/MIBC). Para não repetir a mesma peça, **p1 fica sem imagem real** e a p12 recebe a peça de bexiga.
- **Caminho sugerido:** **manter os 2 SVGs** (cumprem o piso visual). Não forçar.

---

### p2 — A bexiga é uma piscina de toxina (tabagismo, urina-veículo, urotélio)

**[BUSCADOR-IMAGEM-INCONCLUSIVO]**

- **Buscas:** Commons "urothelium normal histology", "transitional epithelium" — a histologia de urotélio **já está embutida na aula** (`img-1-histopato-urotelial-he.jpg`, p4/p1). Não repetir.
- **Motivo:** o conceito central ("tempo de contato", estase, piscina de toxina) é mecanístico/fisiopatológico, sem achado clínico real distinto que não duplique o urotélio histológico já presente. O slider de tempo de contato + a cadeia causal (2 SVGs) cobrem a página.
- **Caminho sugerido:** **manter os SVGs**. Imagem real distinta não disponível sem repetir o urotélio já usado.

---

### p3 — O resto dos fatores de risco (aminas aromáticas ocupacionais, idade/sexo)

**[BUSCADOR-IMAGEM-INCONCLUSIVO]**

- **Buscas:** Commons "aromatic amines", "dye industry occupational", "textile worker" — sem imagem **médica** real; só fotos industriais genéricas sem valor clínico/didático e sem licença confiável de uso médico.
- **Motivo:** fatores de risco ocupacionais não têm achado clínico fotografável. Foto de trabalhador têxtil seria decoração vazia / banco genérico (anti-padrão §5/§11). Os 2 SVGs (painel de fatores navegável + convergência ocupacional) são os visuais corretos.
- **Caminho sugerido:** **manter os SVGs**. Não forçar imagem real.

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

**[BUSCADOR-IMAGEM-INCONCLUSIVO]**

- **Buscas:** não aplicável a achado único — página é de **conexões conceituais** (ponte de mecanismo com HPB; contraste de conduta com CA de rim).
- **Motivo:** página de síntese/integração entre as três aulas; não tem achado clínico próprio. Os 2 SVGs (grafo de nós + tabela "biopsiar? depende de onde") são os visuais corretos. Uma imagem real seria forçada/redundante (qualquer foto de bexiga, rim ou próstata já aparece nas páginas-mãe).
- **Caminho sugerido:** **manter os SVGs**. Não forçar.

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
| CA-bexiga | p1 | ⚪ inconclusivo | SVGs cumprem (peça → p12) |
| CA-bexiga | p2 | ⚪ inconclusivo | urotélio já embutido; SVGs cumprem |
| CA-bexiga | p3 | ⚪ inconclusivo | fatores ocupacionais não fotografáveis |
| CA-bexiga | p8 | ✅ encontrada | Urotelial invadindo muscular pT2 (CC0) |
| CA-bexiga | p9 | ✅ encontrada | Urotelial papilífero bexiga (CC BY-SA 3.0) |
| CA-bexiga | p11 | ⚪ inconclusivo | página de síntese; SVGs cumprem |
| CA-bexiga | p12 | ✅ encontrada | Carcinoma bexiga peça macro (CC BY-SA 3.0) |
| Canal-anal | p6 | ⚪ inconclusivo | SVG-hotspot de radiossensibilização cumpre |

**7 imagens reais qualificadas** (todas validação tripla + licença limpa + zero repetição) · **6 inconclusivos honestos** (5 com SVG já cumprindo o piso, 1 onde a peça foi realocada para evitar repetição).

**Nota de licença para o Bauer decidir:** todas as 7 são redistribuíveis (CC0 / CC BY / CC BY-SA / domínio público). Nenhuma é NC ou ND — logo, sem restrição comercial nem de modificação (crop/redimensionar liberados). Attribution obrigatória nas 6 com licença CC-BY/SA; a CC0 e a PD podem dispensar attribution juridicamente, mas o manifesto mantém o crédito por boa prática (consistência editorial).
