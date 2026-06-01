# Calibrador MICRO — Aula 5 · Pólipos e Câncer Colorretal (pré-CCR)

> Fase 0b da pipeline Bauer v2. Plano arquitetural micro por página. Contrato de entrada do Roteirista.
> Tema: o que ANTECEDE o câncer colorretal — pólipos (histologia, conduta, vigilância) e síndromes hereditárias.
> Especialidade: cirurgia/endoscopia do tubo digestivo baixo. Público: residência BR tier alto.
> Governado pelos Contratos de Reforço 1, 2 e 3.

## Conceito-espinha (o fio que não pode sumir)

O CCR é o tumor do tubo com **maior potencial de cura** — por isso é o mais estudado, e por isso seu PRÉ-câncer cai cada vez mais (bancas de SP a partir de 2022). A aula é de **rotina**, não de doença: achou um pólipo → qual a histologia? → qual a conduta? → como faço o acompanhamento? Tudo gira em torno da **sequência adenoma-carcinoma** (mutação inicial do gene **APC**) e do risco de transformação maligna, que as **síndromes hereditárias** multiplicam.

## Correções médicas obrigatórias (erros de transcrição — papel do Especificador)

1. **"REGT"** (transcrição) = classificação de **HAGGITT** (níveis 0–4 da invasão em pólipo pediculado) + **KIKUCHI** (SM1/SM2/SM3 para pólipo séssil/plano). A transcrição funde os dois sob "REGT" — corrigir nomes, manter o conceito ensinado (níveis 0–4 + SM1 como limite de cura).
2. **"gene HPC"** = gene **APC** (Adenomatous Polyposis Coli). O professor traduz "A de adenomatoso, P de polipose, C de cole" → é APC. Corrigir a sigla.
3. **"Piltch-Jagger" / "Piltch-Jagger"** = síndrome de **PEUTZ-JEGHERS**. Corrigir.
4. **"tumor burning"** = **tumor budding** (brotamento tumoral — aspecto histológico de células em escape na frente de invasão). Corrigir.
5. **"REGT zero / nível"** mantém a lógica: nível 0 = carcinoma in situ/intramucoso (não passa a muscular da mucosa); 1 = cabeça; 2 = colo; 3 = pedículo; 4 = base / qualquer carcinoma em pólipo séssil.
6. **"US Task Force"** = **USPSTF** (US Preventive Services Task Force); a tabela de vigilância pós-polipectomia segue na prática as recomendações conjuntas (USMSTF). Manter os intervalos que o professor deu (são os cobrados): 10 / 5 / 3 / 1 / 0,5 anos.
7. **"TIF" / "imunofluorescência fecal"** (transcrição confunde) = **FIT** (teste imunoquímico fecal / sangue oculto imunoquímico). Corrigir nome, manter conceito (melhor que o guáiaco; substitui colono combinado a sigmoidoscopia).
8. **DDV rastreio**: professor dá **50 anos** (MS/Brasil) para esporádico. Sociedades internacionais (ACS) iniciam aos **45** — registrar para o Especificador cruzar; não muda o que foi dado.

## Ponte ativa com as aulas 3 e 4 (conceito reutilizado)

- **Aula 3 (CCR)**: a sequência adenoma-carcinoma é a história natural do tumor que lá foi tratado. Marcador **CEA** retorna no seguimento pós-CCR (P14). Rastreio aos 50 (esporádico) é o mesmo gancho.
- **Aula 4 (tumores hepáticos)**: "metástase hepática que cura" — o seguimento pós-CCR busca recidiva e metástase ressecável (TC tórax/abdome/pelve + CEA + colono).
- **Conduta por profundidade**: o eixo "até onde o tumor invadiu decide a conduta" (T do módulo) reaparece como SM1 = limite de cura endoscópica.

## Bugs prováveis de execução (riscos a vigiar)

1. Confundir **macroscópico** (pediculado × séssil) com **microscópico** (tubular × viloso × tubuloviloso). O professor avisa 5×. Página deve travar a distinção com "não confundir".
2. Aplicar **Haggitt/níveis** a pólipo benigno — é SÓ para **adenocarcinoma** (carcinoma em pólipo). Erro grave.
3. Inverter o vilão: o **viloso** é o de pior prognóstico (maior chance de malignizar); o **tubular** é o melhor (85% nunca viram câncer).
4. Misturar os **critérios de cura da polipectomia** (6, para CARCINOMA) com os **intervalos de vigilância** (para ADENOMA). São tabelas diferentes — o professor faz o paralelo: ressecção fragmentada no carcinoma = colectomia; no adenoma = repete colono em 6 meses.
5. Esquecer o limite **SM1 = 1000 micras**: até SM1 (nível 0,1,2,3-SM1) = cura endoscópica; 3-SM2/SM3 ou nível 4 = **colectomia**.
6. Trocar **PAF (APC, adenomatosa)** por **Peutz-Jeghers (STK11, hamartomatosa)** ou **Lynch (instabilidade microssatélite, NÃO polipoide)**. Cada uma com mutação, herança AD, idade de rastreio e tratamento próprios.
7. Errar tratamento PAF: clássica/severa = **proctocolectomia total** (risco 100%) + bolsa ileal; atenuada (80%) ou Lynch (~60%) = **colectomia total** (preserva reto).
8. Esquecer **Amsterdam 1-2-3** (1 CCR <50 anos · 2 gerações consecutivas · 3 familiares, 1 de 1º grau) e o algoritmo genético quando não há família: MLH1/MSH2 presente **+ ausência de BRAF** + excluir PAF.
9. Diluir métodos de rastreio alternativos: FOBT-guáiaco anual · FIT anual · DNA fecal 3/3 anos · sigmoidoscopia 10 anos + FIT anual (NÃO com guáiaco) ou 5/5 anos · colono virtual (=TC, exige preparo, sem vantagem) 5/5 anos · colonoscopia 10/10 (padrão-ouro). Qualquer alterado → colono obrigatória.
10. Anti-metalinguagem: o professor pede "cole na parede" — PROIBIDO reproduzir. Sem "nesta aula/o professor/avalie".

## Granularização: 14 páginas (dashboard + 13)

| Pg | Título | Arquitetura dominante | Visual | Interatividade |
|----|--------|----------------------|--------|----------------|
| 1 | Mapa da aula (dashboard) | trilha + armadilhas + pontes A3/A4 | tira viva HAUSTRAÇÃO COLÔNICA (única) + métricas | links trilha |
| 2 | Por que o pré-câncer importa | abertura conceitual (cura do CCR → estudar o que o antecede) | SVG sequência mucosa→pólipo→câncer | reveal história natural |
| 3 | Esporádico × síndrome + macro (pediculado × séssil) | dupla classificação + "não confundir" | SVG pediculado×séssil hotspot | hotspot |
| 4 | Neoplásico × não-neoplásico + sequência adenoma-carcinoma (APC) | taxonomia em árvore + mecanismo | SVG árvore de pólipos + cascata APC | hotspot |
| 5 | Histologia do adenoma: tubular × viloso × tubuloviloso + fatores de risco | comparação + "o vilão" | SVG histologia 3 padrões + real (viloso) | hotspot |
| 6 | Haggitt/Kikuchi: níveis 0–4 e SM1/2/3 (o limite da cura) | classificação por profundidade | SVG pólipo pediculado (níveis) + séssil (SM) hotspot | hotspot |
| 7 | Critérios de cura da polipectomia (6) | checklist decisória (carcinoma) | SVG/checklist | checklist-reveal |
| 8 | Vigilância pós-polipectomia (10/5/3/1/0,5 anos) | tabela estruturada (adenoma) + paralelo cura | tabela + SVG linha do tempo | toggle (adenoma×carcinoma) |
| 9 | PAF / APC: clássica × atenuada × severa + cirurgia | síndrome-âncora + tratamento | SVG tapete de pólipos + bolsa ileal + real | hotspot |
| 10 | Variantes da PAF: Gardner × Turcot | comparação de manifestações | SVG herança AD + manifestações | toggle |
| 11 | Peutz-Jeghers: hamartoma, STK11, manchas | síndrome diferente (não adenomatosa) | SVG manchas melanóticas + real (lábios) | hotspot |
| 12 | Lynch / HNPCC: microssatélite, Amsterdam, BRAF | diagnóstico em algoritmo | SVG regra 1-2-3 + árvore genética | hotspot + reveal |
| 13 | Rastreamento: idades por risco + métodos alternativos | tabela + decisão | SVG comparador de métodos | toggle |
| 14 | Seguimento pós-CCR + síntese e pontes | consolidação decisória | SVG cronograma de seguimento | reveal |

## Tira viva única da Aula 5

**Haustração colônica** — onda de segmentação do cólon: contrações estacionárias arredondadas (as haustra) que aparecem e somem em ritmo lento (~4,5s), em teal-verde (cor da casa, cólon saudável). Distinta das 4 existentes (peristalse A1 teal 3s linear; contração gástrica A2 coral 4s; ECG A3 teal 1,6s; perfusão hepática A4 coral 5s curva única). Gesto próprio: ondas múltiplas e bojudas (bolsas haustrais), não um pulso só.

## Critérios de aceitação

- 14 páginas, cada uma soberana, arquitetura dominante variada.
- Correções médicas aplicadas (Haggitt/Kikuchi, APC, Peutz-Jeghers, tumor budding, FIT).
- Pontes A3/A4 explícitas. Foco residência em toda página.
- Quiz 2/página, todas alternativas comentadas.
- SVG interativos (hotspot = o shape é o alvo). Imagens reais marcadas como candidatas (real + ilustração somam).
- 9 gates binários PASS.
