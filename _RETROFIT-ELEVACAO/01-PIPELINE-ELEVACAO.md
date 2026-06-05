# Pipeline de Elevação — por aula, por página

> Pipeline própria desenhada para ESTE trabalho. Orquestra os agentes Bauer existentes
> em ordem fixa, com gate independente entre passos. Filosofia: cada passo entrega pronto
> no nível dele; downstream não conserta upstream; nada avança sem passar no gate do passo.

## Unidade de trabalho: 1 AULA por vez (nunca em paralelo dentro da mesma aula)

```
ENTRADA: aula-XX/index.html (estado auditado)
   │
   ▼
[P0] CALIBRAR ─ calibrador-pipeline-bauer (modo micro)
   • Mapa página×dimensão (D1-D4) com estado atual e alvo.
   • Por página: conceito do SVG profundo + tema da imagem real + 2-3 candidatos de tópico.
   • Saída: dossiê de calibração da aula.  GATE P0: dossiê cobre 100% das páginas.
   │
   ▼
[P1] ARQUITETURA (só aulas legadas 01-05) ─ executor-bauer
   • Adicionar motor de quiz (app.js) + CSS scoped + *-interactive.js no padrão gold.
   • Wire em index.html + sw.js precache.  GATE P1: quiz responde, JS sem erro de console.
   │
   ▼
[P2] TÓPICOS (D1) ─ executor-bauer
   • Injetar chipset + chip--topic + topic-h por página, a partir dos candidatos de P0.
   • Frases-insight reais (a "frase dando mole"), nunca rótulo genérico.  GATE P2: D1 em 100% das páginas.
   │
   ▼
[P3] QUIZ-GOLD (D2) ─ didata-bauer (autora) → especificador-bauer (valida fato médico) → executor-bauer (implementa)
   • 2 perguntas/página; justification refuta CADA errada; distractor explica a psicologia de cada distrator.
   • Fato médico das alternativas conferido contra fonte (janela 12m).  GATE P3: D2 + zero erro médico.
   │
   ▼
[P4] SVG PROFUNDO (D3) ─ ilustrador-medico-bauer
   • SVG autoral com propósito: hotspot-no-elemento / slider / step-through / anatomia rica.
   • Reaproveita SVG já profundo; só cria/aprofunda onde raso/ausente.  GATE P4: D3 profundo em 100%.
   │
   ▼
[P5] IMAGEM REAL (D4) ─ buscador-imagem-medica-bauer
   • Imagem real licenciada por página faltante; validação tripla (clínica/técnica/licença).
   • Sem repetição (md5 distinto). Attribution canônica.  GATE P5: D4 em 100%, zero md5 repetido.
   │
   ▼
[P6] ANCORAGEM & POLISH ─ style-director-bauer
   • Ancorar imagem padrão neonato (achado/fonte), zero buraco, margens, header auto-hide, variabilidade visual.
   • NÃO toca conteúdo médico nem estrutura.  GATE P6: sem dismorfia/buraco; layout único por página.
   │
   ▼
[P7] VALIDAR ─ validador-pipeline-bauer + tools/gates.py + ai-writing-auditor
   • gate.py TODOS PASS · D1-D4 em 100% · anti-IA-smell · sem repetição de imagem.
   • Falhou? volta ao passo dono do defeito (não conserta no validador).  LOOP até verde.
   │
   ▼
SAÍDA: aula-XX no padrão-ouro, gate verde.
```

## PROTOCOLO POR AULA — adaptado e à prova de gate (validado na aula-01, ordem Bauer 2026-06-04)

> Calibrado pelo feedback do Bauer: qualidade > velocidade. NENHUMA página pode nascer incompleta —
> senão trava no gate depois. Cada página atravessa as 4 dimensões ANTES de fechar a aula.
> Piso por página (honesto, gate v2): **figure-svg (ilustração real) + figure.med (imagem real) + ≥2 quiz gold**.

Sequência por aula (principais 02→05), tudo verificado contra o gate v2 antes de avançar:
1. **Calibrar** — mapa página×dimensão: para CADA página, definir conceito de ilustração + tema de imagem real + 2-3 tópicos + se precisa 2ª pergunta. (Já sei: legadas têm 1 quiz/página → SEMPRE autorar a 2ª.)
2. **Texto rico (didata)** — caixinhas profundas da fonte (roteiro/laudo/calibrador da aula), preservando a prosa existente. Saída em `_RETROFIT-ELEVACAO/texto-rico-aula-0X.md`.
3. **Ilustrações (ilustrador)** — 1 figure-svg profundo por página que não tiver. Retorna artefatos.
4. **Imagens (buscador)** — 1 figure.med licenciada por página que não tiver; md5 único, sem repetir entre páginas/aulas. Baixar local + otimizar (sips ≤1600px, qualidade 82). Manifesto em `_RETROFIT-ELEVACAO/imagens-aula-0X.md`.
5. **Embed (executor) — Passada A**: texto rico + imagens reais. **Passada B**: SVGs + interatividade (aula-0X-interactive.js). Preservar quizzes/tópicos/prosa.
6. **Quiz piso 2 (executor)**: toda página com 1 pergunta recebe uma 2ª gold (justification refuta todas + distractor). NÃO mexer nas existentes ("respostas estão boas").
7. **Tópicos (executor)**: chipset + topic-h personalizados por página (azuis — Bauer aprovou).
8. **Validar (gate v2 honesto)**: `python3 tools/gates.py` → a aula tem que dar PASS 100% (figure-svg+img+≥2quiz por página) ANTES de fechar. Loop até verde.
9. **Ledger** + bump sw.js (precache do -interactive.js + imagens novas) ao final global.

Caveats Bauer embutidos (para não faltar nada):
- Piso é POR PÁGINA, não agregado. Conferir página a página, não no total.
- Ilustração tem que ser real (figure-svg), não ícone/livestrip.
- 2 quizzes é PISO, nunca 1.
- Imagem real em TODA página, sem repetição.
- Texto não pode ficar raso — encher de explicação rica (caixinhas) nas principais.
- Tópicos azuis personalizados página a página.
- Bug do banner (pointer-events) já corrigido global — não reintroduzir banner clicável.

## Regras da pipeline
- **Gate entre passos é binário e independente.** Quem audita ≠ quem produziu (anti-auto-fuga).
- **Loop até verde.** P7 reprovou → reabre o passo dono do defeito, quantas rodadas forem necessárias.
- **Aula é a unidade atômica de commit** — uma aula completa e verde = um commit temático.
- **Ordem dos passos é fixa.** Tópico antes de quiz antes de SVG antes de imagem antes de polish: cada um assume o anterior pronto.
- **Reaproveitamento explícito.** Passo que encontra a dimensão já no nível-ouro registra "já-ouro" e segue — não retrabalha.
