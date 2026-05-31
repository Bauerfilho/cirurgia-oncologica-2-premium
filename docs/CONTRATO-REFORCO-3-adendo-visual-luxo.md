# ADENDO VISUAL DE LUXO — aprendizados das telas do Bauer (aula 3+)

> Complementa CONTRATO-REFORCO-1 (didática) e CONTRATO-REFORCO-2 (template).
> Nasceu da auditoria visual A1/A2 + comparação com a plataforma Codex + referências gold (HIV, tosse-crônica).
> Aprovado pelo Bauer: "achei lindo as mudanças". Aplicar a partir da aula 3.

## 0. Regra de consistência (corrige o drift da aula 2)
- REUSAR o design system existente: assets/css/{tokens,base,components}.css e assets/js/{app,router,components/quiz}.js.
- PROIBIDO recriar componentes que já existem (ex.: NÃO criar figure-pending/figure-svg locais; usar figure.med + .svg-figure de components.css).
- PROIBIDO CSS inline em <style> no <head> da aula para componentes estruturais. Estilo específico de aula entra em components.css (ou aula-NN.css se realmente necessário), nunca duplicado inline.
- Imagem real pendente → usar figure.med com placeholder textual + ficha; nunca componente novo.

## 1. Header FLOATING (pedido explícito do Bauer) — JÁ no base.css
- Barra arredondada (border-radius var(--r-xl); mobile var(--r-lg)), descolada das bordas: width min(container, 100% - 2*sp-4), margin top sp-3, top sticky com gap.
- Glass forte (blur 22px) + borda + shadow-lg. Some/volta no scroll (data-hidden translateY -100%-sp-6).
- Já está em assets/css/base.css — aulas novas herdam automaticamente. NÃO reimplementar.

## 2. Luxo de HUB (estilo aprovado, índice index.html)
Técnicas (estilo, não cópia de cor; teal continua cor da casa):
- Hero ASSIMÉTRICO: título grande à esquerda + painel "Trilha ativa" com stat-cards à direita (estilo Codex).
- page-orb: 1-2 halos de luz que respiram (radial-gradient + blur 90px + opacidade 0.09-0.16 + mix-blend screen + animation 7s). Modo SUTIL — texto soberano (Contrato 1). prefers-reduced-motion desliga.
- Dourado de acento (#d8b25a) em eyebrows/números/siglas. Teal = cor da casa.
- Sombras largas (0 30px 80px), raios 28-30px, glow teal no hover.
- Cards de aula com sigla (badge), tags de metadata e botão "Entrar na aula".
- Já aplicado no index.html via :root[data-platform-hub] (escopo local, não toca tokens globais).
- Ao adicionar aula nova ao HUB: atualizar contador de stats, adicionar card com sigla/tags, status "Disponível".

## 3. Interatividade nos visuais (correção do "muito estático" — pedido do Bauer)
A aula 2 fez SVG bonito mas PARADO. As referências gold têm interatividade que ensina:
- HOTSPOTS: pontos clicáveis/focáveis em SVG que revelam tooltip (data-hotspot-label/text). Usar em anatomia/mecanismo/mapa (ex.: vias de disseminação, drenagem linfática, camadas de parede).
- STAT-COUNTER: número que anima de 0 ao alvo (IntersectionObserver). Usar em epidemiologia/estatística.
- CHECKLIST-REVEAL: itens que preenchem progressivamente.
- TOGGLE: alterna termo/visão na página.
- Toda interação: funciona por teclado E touch, estado visual claro, NUNCA esconde conteúdo essencial só em hover, respeita reduced-motion (Contrato 2 §4.1).
- Adicionar esses componentes ao design system compartilhado (assets/js/components/) quando a aula pedir; reusar nas próximas.

## 4. Apple-like (reforço do Bauer)
Bordas arredondadas, cards translúcidos (opacidade/blur pode variar pela decisão estética), sombras macias, espaçamento generoso, microinterações discretas. Premium é piso; LUXO é entrega.
