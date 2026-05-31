# Relatório de implementação — A1 Câncer de Esôfago

## Decisões técnicas
- Chassi do zero (não herdado de outra plataforma) por ser a primeira aula de um módulo novo — evita arrastar `data/` de outra especialidade.
- Roteamento por hash (`#/<slug>`), páginas HTML carregadas via `fetch` e cacheadas em `Map` em memória + service worker.
- Quiz universal idempotente (`data-bound`), com persistência opcional em `localStorage` namespace `cironco2-bauer:`.
- PWA auto-update absoluto: `pwa-bootstrap.js` chama `skipWaiting` ao detectar nova versão e recarrega via `controllerchange` (toast é apenas aviso transitório, não bloqueante).
- Paleta: coral Bauer (`--c-primary`) + verde-cirúrgico (`--c-secondary`) sobre petróleo profundo. Codificação cromática consistente: azul = escamoso/externo; coral = adeno/interno/vital.

## Visuais
- SVG autorais inline: avatar Sr. Aurelino, esquema de terços + macete externo/interno, camadas da parede (sem serosa), capilares linfáticos na submucosa, ponta do endoscópio implícita, régua de ressecabilidade.
- Imagens reais marcadas como pendentes (`figure.med .pending`): tilose palmoplantar, EDA de neoplasia, USE com camadas, TC de tórax. Decisão: visual obrigatório real sem fonte licenciada embarcada → renderizado placeholder honesto com legenda de fonte/achado a preencher, em vez de SVG sintético substituto de modalidade real.

## Gates pós-Executor
- ai-writing-auditor (anti-metalinguagem P0): grep nas 12 páginas → 0 hits. PASS.
- code-reviewer (escopo: todos arquivos da aula): 1 issue corrigido (classe morta `show-on-answer` em caso-aurelino.html). JS sem listener leak (handlers em elementos recriados a cada rota; cache de páginas evita refetch). PASS após fix.
- Syntax check: pwa-bootstrap.js, components.js, app.js (module), pages.js (module) → todos OK.

## Pendências para Bauer
- Inserir 4 imagens reais licenciadas (substituir placeholders `pending`).
- Gerar ícones PWA 192/512.
- DDV-001 (neoadjuvância adeno: FLOT × CROSS) — resolvida por densificação aditiva; confirmar se mantém ou simplifica.
