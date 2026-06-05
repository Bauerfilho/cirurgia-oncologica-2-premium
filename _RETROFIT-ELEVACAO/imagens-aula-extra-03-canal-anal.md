# Manifesto de imagens reais — aula EXTRA-03 (Câncer de canal anal)

Retrofit do piso "1 imagem real por página". Validação tripla (clínica · técnica · licença) na fonte primária.

> **Nota de roteamento do manifesto:** o brief original mandava registrar em `imagens-aula-03.md`, mas aquele arquivo é da **aula-03 regular** (Endocardite por *S. bovis* + Câncer Colorretal) — tema distinto. Para não poluir o manifesto errado, a entrega de canal anal fica **aqui**, em arquivo dedicado.

## Imagens JÁ embutidas nesta aula (NÃO repetir tema/modalidade/arquivo)

Lido em `aulas/aula-extra-03-canal-anal/index.html` (`<img>`):

| ID | Arquivo | Tema / modalidade |
|---|---|---|
| i1a | i1a-cec-anal-histo.jpg | Histologia (H&E) de **CEC do canal anal** — ninhos escamosos |
| i1b | i1b-adeno-colorretal-histo.jpg | Histologia de adenocarcinoma colorretal (contraste) |
| i2 | i2-epitelio-anal-espectro.jpg | Painel histológico: normal → displasia baixo/alto grau → CEC |
| i3 | i3-condiloma-anal.jpg | Foto clínica: condiloma acuminado perianal (HPV) |
| i4 | i4-coilocito.jpg | **Citologia: coilócito** (efeito citopático HPV) |
| i5 | i5-adenopatia-inguinal.png | Foto clínica: adenopatia inguinal |
| i6 | i6-rm-pelve.jpg | **RM de pelve T1/T2** (planos de tecido mole) |
| i8 | i8-carcinoma-canal-anal.jpg | Foto clínica: carcinoma de canal anal |
| i9 | i9-radioterapia-linac.jpg | **Acelerador linear** (componente rádio do Nigro) |
| i11a | i11a-apr-perineo.jpg | Cicatriz perineal pós-amputação abdominoperineal |
| i11b | i11b-colostomia.jpg | Colostomia permanente |
| i12 | i12-carcinoma-anal.jpg | Foto clínica: carcinoma anal avançado ulcerado |
| i13 | i13-anatomia-canal-anal.png | Figura anatômica: linha pectínea e esfíncteres |

**Consequência anti-repetição:** as duas primeiras opções do brief estão ESGOTADAS nesta aula — histologia de CEC anal (i1a) e coilócito (i4) já existem. O eixo HPV/displasia já está coberto (i2, i3, i4) e **não aparece na prosa de p6**. Logo, p6 NÃO recebe HPV/carcinogênese nem histo de CEC: recebe o **substrato real do que a página ensina** (quimiorradioterapia / radiossensibilização).

---

## p6 — A sequência inteligente: químio antes da rádio (radiossensibilização)

**Prosa real da página** (lida no `index.html`): esquema Nigro, **químio primeiro sensibiliza** a célula neoplásica, **rádio depois arrebenta seletivamente** quem captou o quimioterápico; conceito de **radiossensibilização**. A página NÃO fala de HPV nem carcinogênese — fala do mecanismo e da ordem do tratamento. A `data-piso-img-exempt="mecanismo-celular-svg"` cobre o SVG S6 (duas células sob o feixe). A imagem real entra como **amplificação**, mostrando o **resultado real** do mecanismo: o tumor que desaparece após a quimiorradioterapia.

| Campo | Valor |
|---|---|
| **Arquivo** | `assets/img/aula-extra-03-canal-anal/p6-resposta-quimiorradio-petct.jpg` |
| **Dimensão** | 708 × 241 px (figura composta de 8 painéis a–h; faixa horizontal) |
| **Tamanho / tipo** | 55 KB · JPEG real (`file` → JPEG, baseline, 3 componentes) · >10 KB ✔ |
| **md5** | `352812b3c96259f4283246e4075ad557` — **0 colisões** em toda `assets/img/` ✔ |
| **Modalidade** | **FDG PET-CT + RM (T2/DWI/ADC)**, pré × pós-tratamento — modalidade **inédita** nesta aula (não há PET em nenhuma outra página) |

**Achado rico (figcaption):**
> **A prova de que o mecanismo funciona.** Carcinoma escamoso do canal anal (homem, 71 anos), tumor anular avançado na junção anorretal. **Antes** (painel *b*): grande massa **hipermetabólica** ao FDG PET-CT no canal anal e reto baixo, com linfonodos inguinais captantes. **Depois** da quimiorradioterapia (painel *f*): **nenhuma doença FDG-ávida residual** no leito do tumor nem nos linfonodos — resposta metabólica **completa**. É exatamente o que a radiossensibilização do esquema Nigro entrega: a químio marca, a rádio arrebenta seletivamente, e o tumor desaparece sem operar. (Painéis *a/e* = RM T2 pré/pós; *c/g* = DWI; *d/h* = ADC.)

**Attribution canônica (`.attr`):**
> Adusumilli P, Elsayed N, Theophanous S, *et al.* "Combined PET-CT and MRI for response evaluation in patients with squamous cell anal carcinoma treated with curative-intent chemoradiotherapy." *European Radiology* 2022;32(8):5086–5096 (Fig. 5), via PMC (PMC8913212) · **CC BY 4.0**. Source: https://pmc.ncbi.nlm.nih.gov/articles/PMC8913212/

**Alt text PT-BR (recomendado):**
> Figura composta de FDG PET-CT e ressonância de pelve, antes e depois da quimiorradioterapia, em carcinoma escamoso do canal anal: antes, massa hipermetabólica no canal anal e reto baixo com linfonodos inguinais captantes; depois, ausência de doença FDG-ávida residual — resposta metabólica completa.

**Licença:** CC BY 4.0 (atribuição obrigatória; **permite uso comercial e adaptação** — sem restrição NC/ND). Hospedagem local e redistribuição autorizadas. Manter a attribution acima.

---

## Validação tripla — p6

- ✅ **Camada 1 (doença):** carcinoma de **células escamosas do canal anal** — literal na legenda da fonte ("squamous cell anal carcinoma", "tumour centred at the anorectal junction"). Casa com o tema da aula e da página (tratamento do CEC anal pelo Nigro).
- ✅ **Camada 2 (modalidade):** **FDG PET-CT + RM pré/pós-quimiorradioterapia** — literal ("Pre-treatment PET-CT demonstrates a large metabolically active mass… Post-treatment PET-CT demonstrates no residual FDG avid disease"). Modalidade nova na coleção desta aula (sem PET em nenhuma outra página; a RM de i6 é de planos normais, não de resposta tumoral).
- ✅ **Camada 3 (anatomia / achado):** **canal anal / junção anorretal**, tumor anular com linfonodos inguinais — anatomia correta e coerente com a prosa de p6 (o alvo que a quimiorradioterapia trata).
- ✅ **Anti-repetição (md5 + tema):** md5 `352812b3c96259f4283246e4075ad557` único em toda `assets/img/`; tema "resposta completa à quimiorradioterapia" distinto de tudo que já está embutido (i9 é a máquina de rádio; i6 é RM de planos normais; i1a/i2 são histologia; i8/i12 são fotos clínicas do tumor não tratado).

## Detecção de prompt injection
Nenhuma. Conteúdo das páginas PMC tratado como dado. Artigos lidos: PMC8913212 (escolhido), PMC10285495 (CC BY, descartado — synchronous anal+rectal SCC, RM apenas, modalidade já em i6), PMC8748035 e PMC9703035 (descartados — **CC BY-NC-ND**, licença proibida pelo brief).

## Notas pro Executor
- Embutir como `<figure class="med">` **após o SVG-hotspot S6** (que continua soberano da interatividade) e antes do bloco `.mnemonic`, OU logo abaixo do `op-summary` — Executor decide a ancoragem; o alvo é dar **rosto real** ao "químio marca, rádio arrebenta".
- Figura é **larga e baixa** (708×241, 8 painéis). Não recortar (preservar integridade científica e os pares a/e, b/f). Usar `width="708" height="241"`, `loading="lazy"`. Em telas estreitas, permitir scroll horizontal ou exibir em largura total do container para manter legibilidade dos painéis b (antes) e f (depois).
- O caption já direciona o olhar para o par **b ↔ f** (PET-CT antes/depois) — o achado pedagógico central.
- 708px é a resolução máxima servida pelo PMC para esta figura; não há versão maior na fonte.
