# CONTRATO DE REFORÇO 2 — TEMPLATE FIXO + ESTÉTICA CRIATIVA

> Reforço enviado pelo Bauer para a aula 2 (estômago) e válido para todas as aulas seguintes.
> Governa a camada VISUAL/TÉCNICA/INTERATIVA/ESTRUTURAL.
> Conflito com o contrato didático já foi resolvido pelo Bauer: aplicar sem questionar.

REGRA-MÃE: O TEMPLATE É FIXO. A ESTÉTICA É CRIATIVA. Premium é o piso; LUXO é a entrega.

Referências (DNA, não cópia): bauerfilho.github.io/Antibioticoterapia/ · /neonatologia/ · /hiv-mastery-residencia-copia (dark/glass).
NOTA DE CONSISTÊNCIA: esta plataforma JÁ adota o template antibioticoterapia na aula 1 (assets/css/{tokens,base,components}.css + assets/js/{app,router,components/quiz}.js + HUB + hambúrguer à direita + modo claro neonato + modo escuro reforçado petróleo/teal/coral). A aula 2 DEVE reaproveitar esse mesmo design system — não criar template novo.

## Resolução de conflito entre contratos
1. Conteúdo didático nunca reduzido para caber na estética.
2. Estética nunca destrói arquitetura fixa.
3. Template visual nunca apaga minúcias/explicações.
4. Página padrão = exatamente 2 perguntas de quiz, salvo ordem explícita.
5. Roteiro com >2 questões → manter 2 no quiz final; extra só com autorização.
6. Não inventar conteúdo médico para preencher lacuna visual.
7. Reorganizar visual sim; empobrecer/resumir/alterar sentido não.

## TEMPLATE FIXO (não remover/enfraquecer)
- **HUB** em index.html: disciplina, sigla, frase central autoral, descrição, estatísticas, cards de aulas com estado, botão começar, botão sumário. Hub ≠ menu lateral. (Já existe; aula 2 = trocar card "Câncer gástrico" de "Em breve" → "Disponível".)
- **Estrutura por aulas/módulos**: cada aula navegável e independente, páginas internas alcançáveis, progresso visível, anterior/próxima, menu lista páginas, zero órfã. Cada página: título, subtítulo/contexto, pergunta central/caso, conteúdo, visual quando pertinente, resumo operacional, próximo passo, quiz 2 perguntas, anterior/próxima, progresso X/Y.
- **Dashboard por aula** antes do conteúdo: título, nº de páginas, mapa/trilha, objetivos cognitivos, armadilhas de prova, conceitos reutilizados, botão começar. Compacto se a aula for curta. Não substitui página.
- **Header fixo inteligente**: topo, translúcido, marca/sigla, controles à direita, retrai ao descer / volta ao subir (translateY, não display:none), respeita safe-area, sem jitter (rAF + delta acumulado), não esconde com menu aberto, fallback reduced-motion. (Já implementado: `.site-header[data-hidden]` + initHeaderAutohide.)
- **Controles canto superior DIREITO**: Home, toggle claro/escuro, hamburger. aria-label, foco visível, aria-expanded no hamburger, ≥44×44px, funciona mouse/touch/teclado.
- **Menu hamburger/lateral DIREITO**: painel glass, lista páginas da aula, destaca atual, scroll interno, não empurra conteúdo, não estica documento, fecha por botão/ESC/overlay, foco volta ao hamburger, aria-current na atual.
- **Dark + Light completos**: tokens CSS, data-theme, persist localStorage "cironco2-theme", respeita prefers-color-scheme sem escolha salva, sem flash, theme-color, contraste nos dois. PROIBIDO #000/#fff dominante e filter:invert. Dark = petróleo/grafite confortável; Light = creme quente (neonato).
- **Cards translúcidos** = linguagem principal: bordas arredondadas, borda suave, sombra delicada, glass controlado, legibilidade plena, hover discreto (-2 a -6px, ≤1.01), focus equivalente, nada essencial só em hover.
- **Quiz final 2 perguntas/página**: enunciado, alternativas, gabarito, justificativa, explicação dos distratores, feedback imediato, estado visual, teclado, feedback não só por cor.
- **Navegação**: Anterior + Próxima + progresso X/Y, por clique/teclado/touch, primeira/última com destino claro, menu sincroniza com página atual.
- **Acessibilidade + responsividade** = parte do luxo: HTML semântico, skip link, h1 único, headings coerentes, foco visível, contraste, toque ≥44px, mobile-first, não quebra em 320px, reduced-motion, alt text, legendas, feedback não só cor.
- **Safe-area/PWA/iOS**: viewport-fit=cover, env(safe-area-inset-*), 100dvh fallback, manifest coerente, theme-color, sem botão instalar falso. (PWA auto-update absoluto já canônico.)

## ESTÉTICA CRIATIVA (pode variar)
Paleta, atmosfera, textura, intensidade de glass/sombra, ilustrações/SVG, ícones, microinterações, gradientes, halos, ritmo, densidade de cards, acentos semânticos, estilo de gráficos.
NÃO pode variar: HUB, dashboard, header retrátil, controles à direita, menu glass direito, dark/light completos, cards translúcidos, quiz 2/página, anterior/próxima, progresso X/Y, acessibilidade, responsividade, preservação do conteúdo.
Identidade já fixada para Cir Onco 2: teal-verde cirúrgico (casa) + coral Bauer (assinatura/perigo/irressecável) + âmbar (pegadinha). Aula 2 mantém. Eixos didáticos: cor própria para tipos histológicos/Borrmann/Lauren se útil, sempre com lógica semântica.

## Proibições visuais auditáveis
Sem HUB/index; hub substituído por menu; aula sem dashboard; página sem X/Y; sem anterior/próxima; sem quiz 2; header sem retração; controles fora da direita; menu como página nova / empurrando conteúdo / esticando documento; #000 ou #fff dominante; neon dominante; glow em texto; aurora que atrapalha leitura; overlay cortina; blog genérico; apostila colada; cards bonitos com conteúdo pobre; depender só de hover; ESC não fecha menu; quiz só por cor; reduced-motion ignorado.

## QA FINAL BINÁRIO (APROVADO/REPROVADO — qualquer REPROVADO bloqueia)
Hub e arquitetura · Aulas/dashboard · Header · Controles · Menu glass · Dark/light · Cards premium · Página pedagógica · Quiz · Navegação · Acessibilidade · Responsividade/iOS · Performance perceptiva. Rodar todos os itens antes de considerar a aula pronta.

## Entrega
Template reconhecível e consistente com a aula 1; estética autoral mantida; HUB orienta; aula 2 com dashboard; cada página unidade premium; header inteligente; menu glass sem quebrar layout; dark/light completos; cards translúcidos legíveis; quiz 2/página; X/Y funciona; mobile impecável; iOS/PWA não quebra; acessibilidade real; conteúdo preservado sem resumo; visual luxo. Sensação: "plataforma médica autoral para acertar residência", não "página bonita sobre medicina".
