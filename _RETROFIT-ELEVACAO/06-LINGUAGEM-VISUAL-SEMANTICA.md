# Linguagem visual semântica — destaque de palavras-chave (ordem Bauer 2026-06-04)

> Cor e ícone ajudam a entender. Mas a plataforma é PREMIUM/profissional, não casual:
> parcimônia é regra. Se parecer poluído ou casual, é demais. Sóbrio > enfeitado.

## 1. Cor no texto (inline, em palavras/termos-chave)

Classes inline a criar no CSS compartilhado (`assets/css/components.css`), herdando tokens:
- **`.hl-good`** → verde (`var(--ok-green)` / `var(--teal-60)`): conduta CORRETA, conceito valioso/"regra de ouro", bom prognóstico, a resposta certa, o que fazer.
- **`.hl-bad`** → vermelho (`var(--err-red)` / `var(--coral-60)`): PERIGO, contraindicação, "nunca", erro clássico/pegadinha, mau prognóstico, o que não fazer.
- **`.hl-key`** (opcional) → ênfase neutra forte (já coberta por `<strong>` existente): número-âncora, cutoff.

Uso: aplicar ao TERMO, não à frase inteira. Ex.: "lesão sólida renal = <span class=\"hl-good\">cirurgia</span>, <span class=\"hl-bad\">sem biópsia</span>". Verde nesta plataforma "vale muito" (Bauer). Densidade: poucos destaques por parágrafo — o que realmente importa.

## 2. Ícones / emojis semânticos (com parcimônia)

Permitidos quando ajudam a compreensão — NUNCA decorativos, NUNCA em cacho, jamais tom casual:
- ⚠️ cautela / atenção / armadilha
- ✓ certo / conduta correta · ✗ errado / não fazer
- 🚬 tabagismo / fator de risco comportamental
- e afins pontuais (ex.: 🩸 sangramento, ⏱️ tempo) quando o conceito for exatamente esse.

Regra de densidade: **1 marcador por contexto onde agrega**, não por parágrafo, não por item de lista inteiro. Preferir os ícones SVG já existentes do chassi (visual premium) e usar emoji só quando ler limpo e profissional. Se o trecho já está claro, NÃO adicionar ícone.

## 3. Onde aplicar
- Passada de cor nas aulas JÁ prontas (01, 02) — sobre os `<strong>`/termos-chave existentes, sem reescrever texto.
- Embutido por padrão nas aulas novas (03→05, etc.) na passada de texto/embed.
- Gate de bom-senso: revisar densidade página a página; se "encharcou", reduzir.

## 4. O que NÃO fazer
- Não colorir frase inteira nem parágrafos.
- Não usar cor sem significado semântico (decorativa).
- Não empilhar emojis; não usar emoji casual (😀, 🎉, 👍 etc.).
- Não comprometer contraste/acessibilidade (WCAG AA) — verde/vermelho com peso de fonte, não só cor (manter `<strong>` por baixo p/ daltônicos).
