# GATES BAUER — o auditor que TRAVA

> Conserto de fundo do problema da auto-fuga (memória: feedback-auto-foge-gate-independente).
> No modo auto, o agente que faz é o mesmo que avalia → ele se auto-aprova e foge.
> Estes gates são o **auditor independente**: critérios BINÁRIOS (não adjetivos) que
> rodam sozinhos e BLOQUEIAM o avanço quando falham. Enquanto "passou?" for opinião
> do autor, ele foge no auto. Quando vira um check que retorna exit-code e trava o
> commit, ele para de fugir — sem o Bauer precisar revisar.

## Como rodar
```
python3 tools/gates.py            # todos; exit 1 se algum FAIL (bloqueia)
python3 tools/gates.py --gate quiz
python3 tools/gates.py --json     # saída máquina (Codex consome)
```

## Travar o commit de verdade (pre-commit hook)
```
printf '#!/bin/sh\npython3 tools/gates.py || exit 1\n' > .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```
A partir daí, `git commit` com qualquer gate FAIL é **recusado**. O agente não avança.

## Os gates (pequenos e específicos — quando falham, apontam o dedo)
| Gate | Critério binário | Por que existe |
|------|------------------|----------------|
| **drift** | 0 `<style>` estrutural nas aulas · 0 `figure-pending` | A aula 2 fugiu recriando componente — este gate pega |
| **routing** | `PAGES.length == nº de <article class="page">` | Página órfã / routing quebrado |
| **quiz** | todo `.opt` tem `.opt-comment` · 0 vazio | Feedback por alternativa profundo (pedido do Bauer) |
| **img** | todo `figure.med` tem `<img>`+alt+attr · 0 placeholder | Imagem real de verdade, não promessa |
| **hotspot** | shapes com role=button · 0 pin numérico sobreposto | Hotspot = o elemento é o alvo (regra de luxo) |
| **metalinguagem** | 0 "o professor / nesta aula / vimos na aula" | Anti-metalinguagem P0 |
| **a11y** | skip-link · Home+tema+menu · icon-btn com aria-label | Acessibilidade é parte do luxo |
| **http** | todas as rotas-chave = 200 | Não quebrou ao servir |
| **js** | `node --check` em todo .js | Sem erro de sintaxe |

## Filosofia (por que pequeno > gigante)
- **Gate gigante falha em silêncio:** 40 critérios, 1 quebra, você não sabe qual. O agente que conserta chuta.
- **Gate pequeno aponta:** "GATE-IMG FAIL aula-03: figure.med=4 incompletas=1" → conserto cirúrgico.
- **Binário ≠ adjetivo:** "premium/bonito" o autor sempre acha que cumpriu. "0 figure-pending" ou é 0 ou não é.
- **Auditor ≠ autor:** quem roda o gate não construiu. É a função de revisor do Bauer, automatizada.
- **A fuga vira gate:** cada drift corrigido à mão vira uma linha de check. Foi o ciclo aula2→Contrato3→aula3.

## Portabilidade pro Codex
O runner é stdlib pura e descobre as aulas sozinho (`aulas/*/index.html` + JS com `const PAGES`).
A LÓGICA dos gates é a spec; os seletores adaptam à estrutura de cada plataforma:
- Codex é SPA arquivo-único com rotas `#/lesson/x/page/y` → o gate-routing conta páginas no data-model dele, não em `<article class="page">`.
- Os demais gates (drift/quiz/img/hotspot/metalinguagem/a11y/http/js) são quase idênticos — ajustar só os nomes de classe/seletor.
- Saída `--json` é o contrato de máquina: `{pass: bool, gates: [{gate, pass, rows}]}`. O orquestrador do Codex lê isso e BLOQUEIA se `pass=false`, em vez de deixar o agente se auto-aprovar.

O degrau que falta no Codex não é capacidade — é este: um auditor que roda os critérios binários e trava antes do commit.
