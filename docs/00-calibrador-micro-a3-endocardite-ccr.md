# Calibrador MICRO — Aula 3 · Endocardite (S. bovis) e Câncer Colorretal

> Fase 0b da pipeline Bauer v2. Plano arquitetural micro por página. Contrato de entrada do Roteirista.
> Aula DUPLA: dois temas (endocardite infecciosa + câncer colorretal) costurados por UM caso e UM fio de prova.
> Especialidade: cirurgia oncológica do tubo digestivo (CCR) com ponte para cardiologia/infecto (endocardite).
> Público: residência médica BR tier alto. Governado pelos Contratos de Reforço 1, 2 e 3 (adendo de luxo).

## Conceito-espinha (o fio que não pode sumir)

O eixo da aula é o **link de prova clássico**: endocardite infecciosa por **Streptococcus bovis / gallolyticus** OBRIGA investigar **câncer colorretal** (colonoscopia). O caso do Sr. Luiz existe para tornar inesquecível uma associação rara e difícil de decorar — e o professor é explícito: "só colocando num caso do médico para você nunca mais esquecer". A plataforma deve reproduzir esse efeito: o caso abre, o CCR é destrinchado no meio, e a associação fecha o raciocínio (mecanismo: imunossupressão + úlcera tumoral → translocação → bacteremia → o bovis tem entrotropismo por endocárdio).

Diferente das aulas 1 (esôfago = "grudão", invasão por contiguidade) e 2 (estômago = "tumor praga", transcelômica), o CCR é o **"carteiro do mal"**: superpoder = **metástase hematogênica**. E tem a peculiaridade que NENHUM outro tumor do tubo tem: **cura possível mesmo com metástase hepática** (será aprofundada na aula de tumores hepáticos — citar como gancho, não invadir).

## Ponte ativa com as aulas 1 e 2 (conceito reutilizado, contrastar onde diverge)

- **Trinca dos superpoderes/metástase dominante**: esôfago = contiguidade (grudão) · estômago = transcelômica (praga) · cólon/reto = hematogênica (carteiro do mal). Página de mecanismo DEVE fazer a tabela das 3 e posicionar o CCR como a 3ª — fecha a trilogia do módulo.
- **Marcador tumoral**: esôfago não tinha correlato forte; gástrico = CA 72-4 (pouco específico); CCR = **CEA** (muito correlacionado, marcador de toda neoplasia mucinosa, sensível NÃO específico, uso prognóstico/seguimento, NUNCA diagnóstico). Contrastar.
- **Diagnóstico endoscópico + biópsia**: idêntico (EDA no alto; colonoscopia no baixo). "Aqui não muda nada" — minúcia do professor.
- **Estratégia neo/adjuvância invertida vs aulas 1-2**: esôfago/estômago = neoadjuvância (QT/QRT) para facilitar cirurgia difícil. **CCR de cólon = entra operando** (cirurgia fácil, colectomia), adjuvância só depois se necessário. **Exceção crítica: reto baixo/extraperitoneal = neoadjuvância (QT+RT)**. É o único adeno do tubo que faz RADIOTERAPIA. Contraste forte com aulas anteriores — gatilho de prova.

## Bugs prováveis de execução (riscos a vigiar)

1. Tratar endocardite e CCR como duas aulas soltas — perder o FIO (a associação é o coração). Caso costura tudo.
2. Escrever "Streptococcus bovis" sem o nome atual **gallolyticus** (reclassificação) — banca cobra os dois. Marcar como minúcia/atualização.
3. Confundir o mecanismo: o bovis NÃO causa o câncer; o câncer (imunossupressão + úlcera) é a PORTA, e o bovis é a única bactéria da flora com **entrotropismo por endocárdio**. As outras (E. coli, Klebsiella, B. fragilis, anaeróbios) caem na circulação mas "não gostam" do endocárdio. Inverter isso é erro grave.
4. Inverter a clínica cólon direito × esquerdo: **direito = sangramento/anemia/massa palpável** (complacente, fezes líquidas, não obstrui, cresce escondido) × **esquerdo = obstrução/alteração do hábito** (fezes formadas, menos complacente). Reto baixo = **fezes em fita** (pistola de confeiteiro) + hematoquezia vivo.
5. Confundir RAB × RAP. **RAB = Ressecção Abdominal Baixa = poupa esfíncter (só abdome)**; **RAP = Ressecção AbdominoPerineal = tira reto + esfíncter (abdome + períneo) → colostomia definitiva, epônimo Miles** (a transcrição grafa "Myers"; o correto é **Miles** — corrigir, é epônimo de prova). Quem decide RAB vs RAP = distância do tumor ao esfíncter APÓS a neoadjuvância.
6. Errar o estadiamento: CCR avalia metástase hematogênica → **TC de tórax + TC de abdome**. Não há exame de "ultraprecoce" (≠ esôfago/estômago) porque colectomia é fácil — não compensa estudar ultraprecoce. **RM de pelve só para tumor de RETO** (planejamento de invasão de estruturas adjacentes: ureter, próstata/útero, bexiga, sacro), não muda conduta, é planejamento.
7. Esquecer o toque retal como definidor prático: dedo ~10 cm; não alcançou = alto/intraperitoneal = **opera**; alcançou = baixo/extraperitoneal = **neoadjuvância antes**.
8. Diluir o rastreio: **MS/Brasil = 50 anos** (transcrição). Marcar DDV: sociedades internacionais (ACS) iniciam aos 45 — registrar para o Especificador cruzar (não muda o que o professor deu, complementa).
9. Achatar a "cura com metástase hepática": para o Sr. Luiz específico (fígado "pipocado", totalmente tomado) = paliação; mas a regra geral é que CCR com metástase hepática RESSECÁVEL pode curar. Não generalizar a paliação.
10. Esquecer fatores de risco do professor: dieta (defumados/nitrogenados/processados; fibra protege), tabagismo, **síndromes hereditárias** (peso crescente em prova — PAF, Lynch), **pólipos** (adenomatosos), **DII com RCU > Crohn** para CCR, idade ≥50. O professor remete pólipos+síndromes para "aula especial" — citar como aprofundamento existente, não inventar conteúdo além do dado.

## Granularização sugerida: 14 páginas (dashboard + 13)

Arquitetura macro adaptativa, cada página com DNA próprio e arquitetura dominante variada (anti-repetição honrada pela diversidade natural dos blocos):

| Pg | Título | Arquitetura dominante | Visual obrigatório | Interatividade (Contrato 3 §3) |
|----|--------|----------------------|--------------------|-------------------------------|
| 1 | Mapa da aula (dashboard) | trilha + armadilhas + ponte aulas 1-2 | cards de trilha | — |
| 2 | O caso do Sr. Luiz | caso clínico narrativo em 2 tempos (internação → 7 meses depois) | opener--case + linha do tempo | timeline reveal (checklist-reveal) |
| 3 | Febre + sopro + edema = endocardite | raciocínio sindrômico + critérios de Duke | SVG coração/vegetação mitral com hotspots | hotspots no SVG (vegetação, regurgitação, êmbolos) |
| 4 | Endocardite por S. bovis: a bandeira vermelha | conceito-gatilho + questão real CESPE | bloco de alerta + card questão | toggle "bovis ↔ gallolyticus" |
| 5 | Por que o bovis liga ao CCR (mecanismo) | causal passo a passo (imunossupressão→úlcera→translocação→entrotropismo) | SVG de mecanismo (intestino→circulação→endocárdio) com hotspots | hotspots nas 4 etapas do mecanismo |
| 6 | CCR: epidemiologia e fatores de risco | epidemiologia + 4 grupos de risco + pegadinha fibra | stat-counters | stat-counter (prevalência/idade rastreio) |
| 7 | Rastreio e o corte dos 50 anos | conduta + DDV BR×internacional | tabela rastreio | toggle BR (50) ↔ internacional (45) |
| 8 | Clínica: cólon direito × esquerdo × reto | comparação ativa tripla (topografia→clínica) | SVG do cólon com 3 zonas hotspot + "fezes em fita" | hotspots nas 3 zonas do cólon |
| 9 | Diagnóstico: colonoscopia, biópsia e o CEA | conduta sequencial + minúcia do marcador (mucina) | imagem real candidata: colonoscopia de CCR | toggle "CEA: o que é / o que NÃO é" |
| 10 | O carteiro do mal: metástase hematogênica e estadiamento | mecanismo + trilogia das 3 vias (fecha módulo) + TC tórax/abdome | SVG trilogia 3 superpoderes (eso/estô/cólon) + imagem real candidata TC fígado "pipocado" | toggle entre os 3 tumores na trilogia |
| 11 | Tratamento I: cólon entra operando (e a exceção do reto) | conduta + contraste neo/adjuvância com aulas 1-2 + toque retal | SVG árvore de decisão (alto→opera / baixo→neo) | árvore com toggle "não toquei / toquei" |
| 12 | Tratamento II: RAB × RAP (poupar ou não o esfíncter) | comparação de 2 cirurgias + epônimo Miles | SVG anatômico reto/esfíncter com 2 níveis de corte (hotspot) | hotspots: nível RAB vs nível RAP |
| 13 | Metástase hepática: o tumor que cura mesmo com M1 | conceito-exceção + ressecável × irressecável + gancho aula hepática | imagem real candidata: peça/TC metástase hepática | toggle ressecável ↔ irressecável (pipocado) |
| 14 | Síntese e respostas ao caso | fechamento decisório + retorno às 4 perguntas do caso | tabela-síntese | checklist-reveal das respostas |

## Palavras-chave de banca + cores semânticas (eixo da casa)

- **teal** (casa / curável / bom / conduta padrão): colonoscopia, CEA, colectomia, opera direto (cólon), intraperitoneal, RAB (poupa esfíncter), metástase hepática ressecável, cura possível.
- **coral** (perigo / assinatura / irressecável / endocardite): S. bovis/gallolyticus, endocardite infecciosa, vegetação, metástase hematogênica, fígado "pipocado", M1 irressecável, RAP/colostomia definitiva, fezes em fita + hematoquezia.
- **âmbar** (pegadinha / atualização): bovis = gallolyticus (reclassificação), fibra protege (não é risco), reto baixo = neoadjuvância (não opera direto), é o ÚNICO adeno com RT, Miles (não "Myers"), ≥50 BR vs 45 internacional (DDV), toque retal muda conduta, "ultraprecoce não existe aqui".

## Critérios de aceitação por página
DNA completo; ≥1 conexão de prova explícita; minúcias do professor preservadas (carteiro do mal, pistola de confeiteiro, fígado pipocado, entrotropismo do bovis, dedo de 10 cm, único adeno com RT); arquitetura não repetida da página anterior; quiz 2 questões com TODAS as alternativas explicadas; visual ancorado em 5 movimentos; pelo menos os visuais marcados com interatividade real (hotspot/stat-counter/toggle/checklist-reveal) — corrige o "muito estático" da aula 2.

## Notas para o Especificador (VFPs a cruzar)
- S. bovis (gallolyticus) ↔ CCR: associação + conduta (colonoscopia obrigatória). BR canon + literatura.
- Critérios de Duke modificados (endocardite) — versão atual.
- Estadiamento TNM colorretal (linhas gerais; foco em M e na conduta, não decoreba de subgrupos).
- Rastreio CCR: idade BR (50, MS) × internacional (ACS 45) — DDV.
- Metástase hepática ressecável vs irressecável — possibilidade de cura.
- Epônimo: Miles (RAP) — corrigir grafia da transcrição.
