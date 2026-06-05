# Contrato de Responsabilidade de Agentes — Retrofit Cirurgia Oncológica 2

> Cada agente assina um escopo, um critério de aceitação BINÁRIO e uma fronteira do que NÃO faz.
> Doutrina: produto pronto no nível do agente + standalone; downstream não conserta upstream;
> o validador independente TRAVA e não se auto-aprova.

| Passo | Agente | Entrega (pronta, nível dele) | Critério de aceitação (binário) | NÃO faz |
|---|---|---|---|---|
| P0 | **calibrador-pipeline-bauer** | Dossiê de calibração da aula: mapa página×dimensão + conceito de SVG/imagem/tópico por página | Cobre 100% das páginas; cada página tem alvo nas 4 dimensões | Não produz conteúdo; não decide medicina |
| P1 | **executor-bauer** | Motor de quiz + CSS scoped + JS interativo wired (só legadas) | Quiz responde no browser; zero erro de console; precache atualizado | Não inventa conteúdo médico nem didático |
| P2 | **executor-bauer** | chipset + chip--topic + topic-h por página | D1 presente em 100% das páginas; frases-insight (não genéricas) | Não cria tópico que não derive da prosa existente |
| P3 | **didata-bauer** → **especificador-bauer** → **executor-bauer** | Quiz-gold: 2 perguntas, refuta cada errada + distractor | D2 em 100%; cada alternativa errada refutada; fato médico conferido em fonte ≤12m | Não altera a prosa do professor; não inventa diretriz |
| P4 | **ilustrador-medico-bauer** | SVG profundo autoral com propósito didático | D3 profundo em 100%; SVG serve a um conceito, não decora | Não usa placeholder/emoji; não devolve SVG raso |
| P5 | **buscador-imagem-medica-bauer** | Imagem real licenciada por página, attribution canônica | D4 em 100%; licença confirmada; md5 único (sem repetição) | Não inventa fonte; não usa imagem sem licença clara |
| P6 | **style-director-bauer** | Ancoragem neonato + polish (margem, anti-buraco, header, variabilidade) | Zero buraco/dismorfia; layout único por página; margens consistentes | Não toca conteúdo médico nem estrutura didática; não reintroduz vetado |
| P7 | **validador-pipeline-bauer** + `tools/gates.py` + **ai-writing-auditor** | Veredito por dimensão + comando de retorno ao passo-dono | gate TODOS PASS · D1-D4 100% · anti-IA-smell · sem md5 repetido | NÃO corrige; só trava e aponta o passo-dono do defeito |

## Cláusulas gerais
1. **Fronteira upstream/downstream.** Defeito de P_n volta a P_n. P6 (style) nunca conserta medicina (P3) nem tópico (P2).
2. **Anti-auto-fuga.** P7 é executado por agente ≠ produtor. `tools/gates.py` é juiz objetivo e independente; `--no-verify` é proibido.
3. **Preservação soberana do texto do professor** nas aulas legadas — agentes adicionam camadas, não reescrevem a medicina existente.
4. **Sem repetição de imagem** em toda a plataforma — P5 verifica md5 contra o conjunto já usado.
5. **Standalone.** Cada entrega funciona sozinha no nível do agente; a aula só fecha quando P7 dá verde.
6. **Responsável final pela orquestração:** Claude (este agente), que aciona os subagentes na ordem da pipeline e mantém o ledger de progresso em `_RETROFIT-ELEVACAO/`.
