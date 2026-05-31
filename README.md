# Cirurgia Oncológica 2 — Câncer de Esôfago

Plataforma de estudo (residência / título de especialista em cirurgia) sobre oncologia cirúrgica do tubo digestivo. Primeira aula do módulo: **câncer de esôfago**.

Aplicação estática: HTML + CSS + JavaScript vanilla, com hash routing e PWA (service worker com auto-update).

## Estrutura

```
cirurgia-oncologica-2-premium/
├── index.html                 # shell (header, sidebar, área de conteúdo)
├── manifest.webmanifest       # PWA
├── sw.js                      # service worker (cache + update-toast)
├── css/
│   ├── tokens.css             # paleta Bauer + tokens semânticos
│   ├── base.css               # layout, header, sidebar, pager
│   └── components.css         # cards, tabelas, quiz, fluxogramas, figuras
├── data/
│   └── pages.js               # registro de aulas/páginas + helpers de roteamento
├── js/
│   ├── app.js                 # router (ES module) + shell
│   ├── components.js          # quiz universal + avatar SVG
│   └── pwa-bootstrap.js       # registro SW + auto-update + botão instalar
├── pages/a1/                  # 12 páginas de conteúdo da Aula 1
├── transcricoes/              # input MED original
├── roteiros/ laudos/ prompts-finais/   # artefatos da pipeline Bauer
└── docs/                      # relatórios internos da pipeline
```

## Rodar localmente

Por usar ES modules e `fetch`, é preciso servir via HTTP (não abrir o arquivo direto):

```bash
cd cirurgia-oncologica-2-premium
python3 -m http.server 8000
open http://localhost:8000
```

## Deploy estático

Compatível com GitHub Pages, Netlify ou Vercel (site estático, sem build). Servir a raiz do projeto.

## Adicionar nova aula

1. Criar `pages/a{N}/{slug}.html` para cada página.
2. Acrescentar a aula e suas páginas em `data/pages.js` (arrays `AULAS`).
3. Listar os novos arquivos em `PRECACHE_ASSETS` de `sw.js`.
4. Incrementar `CACHE_NAME` em `sw.js` (`cironco2-bauer-vN` → `vN+1`) para disparar o update-toast nos usuários da versão anterior.

## Conteúdo médico

Conteúdo derivado de aula MED (caso clínico do Sr. Aurelino). Cruzamento de pontos de conduta contra referências de alta confiabilidade (AJCC 8ª ed., NCCN, ensaios CROSS e FLOT) registrado em `laudos/`. Imagens reais médicas (endoscopia, USE, TC, dermatologia) marcadas como pendentes nas figuras com `class="pending"` para inserção licenciada.

## Autoria

Plataforma Bauer. Uso educacional.
