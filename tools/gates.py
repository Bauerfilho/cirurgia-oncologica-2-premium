#!/usr/bin/env python3
"""
GATES BAUER — verificador binário que TRAVA (exit != 0 bloqueia commit).
Filosofia (memória feedback-auto-foge-gate-independente): no auto, o autor se
auto-aprova e foge. Este runner é o auditor que NÃO é o autor — roda critérios
BINÁRIOS (não adjetivos) e bloqueia o avanço. Cada gate é pequeno e específico:
quando falha, aponta o dedo (arquivo + número), conserto cirúrgico, sem chute.

Uso:
  python3 tools/gates.py                 # roda todos, exit 1 se algum FAIL
  python3 tools/gates.py --gate quiz     # roda só um
  python3 tools/gates.py --json          # saída máquina (pro Codex consumir)

Hook de commit (trava de verdade):
  echo 'python3 tools/gates.py || exit 1' >> .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit

Zero dependências (stdlib). Descobre as aulas sozinho. Não edita nada — só audita.
"""
import os, re, sys, json, glob, argparse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def p(*a): return os.path.join(ROOT, *a)
def rd(path):
    try:
        with open(path, encoding="utf-8", errors="replace") as f: return f.read()
    except FileNotFoundError:
        return None

def lessons():
    """Descobre aulas/aula-XX/index.html ordenadas."""
    out = []
    for d in sorted(glob.glob(p("aulas", "*", "index.html"))):
        out.append(d)
    return out

def js_for(lesson_html):
    """Acha o JS que define PAGES pra aquela aula (app.js raiz ou aula-XX.js local)."""
    d = os.path.dirname(lesson_html)
    local = glob.glob(os.path.join(d, "*.js"))
    cands = local + [p("assets", "js", "app.js")]
    for c in cands:
        s = rd(c)
        if s and "const PAGES" in s:
            return c
    return None

# ---------- cada gate retorna (nome, ok:bool, linhas[]) ----------

def gate_http(_):
    """Todas as rotas-chave servem 200 (sobe http.server efêmero)."""
    import threading, http.server, socketserver, urllib.request
    paths = ["index.html"] + [os.path.relpath(l, ROOT) for l in lessons()]
    paths += [os.path.relpath(x, ROOT) for x in glob.glob(p("assets","css","*.css"))]
    class Q(socketserver.TCPServer): allow_reuse_address = True
    httpd = Q(("127.0.0.1", 0), http.server.SimpleHTTPRequestHandler)
    port = httpd.server_address[1]
    cwd0 = os.getcwd(); os.chdir(ROOT)
    t = threading.Thread(target=httpd.serve_forever, daemon=True); t.start()
    rows, ok = [], True
    for pa in paths:
        try:
            code = urllib.request.urlopen(f"http://127.0.0.1:{port}/{pa}", timeout=5).status
        except Exception:
            code = 0
        good = code == 200
        ok &= good
        rows.append(f"{'PASS' if good else 'FAIL'} {code} {pa}")
    httpd.shutdown(); os.chdir(cwd0)
    return ("http", ok, rows)

def gate_js(_):
    """node --check em todo .js (syntax)."""
    import subprocess, shutil
    node = shutil.which("node") or "/opt/homebrew/bin/node"
    rows, ok = [], True
    files = glob.glob(p("assets","js","**","*.js"), recursive=True) + glob.glob(p("aulas","*","*.js")) + [p("sw.js")]
    for f in sorted(set(files)):
        if not os.path.exists(f): continue
        r = subprocess.run([node, "--check", f], capture_output=True)
        good = r.returncode == 0
        ok &= good
        rows.append(f"{'PASS' if good else 'FAIL'} {os.path.relpath(f, ROOT)}" + ("" if good else f"  {r.stderr.decode()[:120]}"))
    return ("js", ok, rows)

def gate_routing(_):
    """PAGES.length == nº de <article class="page"> em cada aula."""
    rows, ok = [], True
    for l in lessons():
        arts = rd(l).count('class="page"')
        jsf = js_for(l)
        m = re.search(r"const PAGES\s*=\s*\[([^\]]*)\]", rd(jsf) or "") if jsf else None
        pages = len([x for x in m.group(1).split(",") if x.strip()]) if m else -1
        good = arts == pages and arts > 0
        ok &= good
        rows.append(f"{'PASS' if good else 'FAIL'} {os.path.relpath(l,ROOT)}: article.page={arts} PAGES={pages}")
    return ("routing", ok, rows)

def _strip_comments(h):
    """Remove comentários HTML <!-- --> para não contar menção em comentário como uso real."""
    return re.sub(r"<!--.*?-->", " ", h, flags=re.S)

def gate_drift(_):
    """0 <style> estrutural nas aulas; 0 USO real de figure-pending (ignora comentário)."""
    rows, ok = [], True
    for l in lessons():
        h = rd(l); st = h.count("<style")
        body = _strip_comments(h)
        # uso real = class="figure-pending" ou <... figure-pending ...> em markup, não menção em comentário
        fp = len(re.findall(r'class="[^"]*figure-pending[^"]*"', body))
        good = st == 0 and fp == 0
        ok &= good
        rows.append(f"{'PASS' if good else 'FAIL'} {os.path.relpath(l,ROOT)}: <style>={st} figure-pending(uso)={fp}")
    return ("drift", ok, rows)

def gate_quiz(_):
    """Feedback por alternativa: suporta v1 (.opt+.opt-comment) e v2 (quiz__alt+quiz__feedback)."""
    rows, ok = [], True
    for l in lessons():
        h = rd(l)
        opt_v1 = h.count('class="opt"')
        oc_v1  = h.count("opt-comment")
        empties_v1 = len(re.findall(r'class="opt-comment"[^>]*>\s*</', h))
        opt_v2 = len(re.findall(r'class="quiz__alt"', h))
        fb_v2  = h.count("quiz__feedback") + h.count("quiz__justification")
        if opt_v1 > 0:
            good = oc_v1 >= opt_v1 and empties_v1 == 0
            rows.append(f"{'PASS' if good else 'FAIL'} {os.path.relpath(l,ROOT)}: fmt=v1 opt={opt_v1} opt-comment={oc_v1} vazios={empties_v1}")
        elif opt_v2 > 0:
            good = fb_v2 > 0
            rows.append(f"{'PASS' if good else 'FAIL'} {os.path.relpath(l,ROOT)}: fmt=v2 quiz__alt={opt_v2} feedback={fb_v2}")
        else:
            good = False
            rows.append(f"FAIL {os.path.relpath(l,ROOT)}: sem quiz (v1 opt=0, v2 quiz__alt=0)")
        ok &= good
    return ("quiz", ok, rows)

def _extract_med_figures(h):
    """Extrai blocos <figure class="med">...</figure> respeitando aninhamento."""
    figs, i = [], 0
    while True:
        start = h.find('<figure class="med">', i)
        if start == -1: break
        depth, pos = 1, start + len('<figure class="med">')
        while depth > 0 and pos < len(h):
            o = h.find('<figure', pos)
            c = h.find('</figure>', pos)
            if c == -1: break
            if o != -1 and o < c:
                depth += 1; pos = o + 7
            else:
                depth -= 1; pos = c + 9
        figs.append(h[start:pos]); i = pos
    return figs

def gate_img(_):
    """Todo figure.med tem <img> com alt e atribuição; 0 placeholder residual."""
    rows, ok = [], True
    for l in lessons():
        h = rd(l)
        figs = _extract_med_figures(h)
        bad = 0
        for fg in figs:
            if "<img" not in fg or "alt=" not in fg or 'class="attr"' not in fg:
                bad += 1
        body = _strip_comments(h)
        pend = len(re.findall(r'class="[^"]*figure-pending[^"]*"', body)) + len(re.findall(r'class="[^"]*\bpending\b[^"]*"', body))
        good = bad == 0 and pend == 0
        ok &= good
        rows.append(f"{'PASS' if good else 'FAIL'} {os.path.relpath(l,ROOT)}: figure.med={len(figs)} incompletas={bad} placeholders={pend}")
    return ("img", ok, rows)

def gate_hotspot(_):
    """Hotspot = o elemento é o alvo: shapes com role=button; 0 pin numérico sobreposto como mecanismo."""
    rows, ok = [], True
    for l in lessons():
        h = rd(l)
        if "<svg" not in h:
            rows.append(f"PASS {os.path.relpath(l,ROOT)}: sem SVG (n/a)"); continue
        shapes = len(re.findall(r'class="[^"]*hs-shape[^"]*"', h)) + len(re.findall(r'role="button"[^>]*class="[^"]*hotspot', h))
        # anti-padrão: pin/marcador numérico flutuante usado como hotspot
        numeric_pins = len(re.findall(r'class="[^"]*hotspot[^"]*-pin[^"]*"', h)) + len(re.findall(r'class="hotspot-num"', h))
        good = numeric_pins == 0
        ok &= good
        rows.append(f"{'PASS' if good else 'FAIL'} {os.path.relpath(l,ROOT)}: hs-shapes={shapes} pins-numericos={numeric_pins}")
    return ("hotspot", ok, rows)

def gate_metalinguagem(_):
    """0 metalinguagem de VEÍCULO ('o professor', 'nesta aula', 'vimos na aula', 'na transcrição',
    'neste vídeo'). NÃO conta: aria-label (não é texto visível) nem cross-ref didática legítima
    ('Na Aula 1, ...' comparando conteúdo entre aulas é permitido e útil)."""
    pat = re.compile(r'\b(o professor|a professora|nesta aula|vimos na aula|assistimos|na transcri|neste v[ií]deo|nesta lição|como vimos na aula)\b', re.I)
    rows, ok = [], True
    for l in lessons():
        h = rd(l)
        h = re.sub(r'<[^>]+>', ' ', h)          # tira tags → remove aria-label e atributos
        hits = pat.findall(h)
        good = len(hits) == 0
        ok &= good
        rows.append(f"{'PASS' if good else 'FAIL'} {os.path.relpath(l,ROOT)}: metalinguagem(veículo)={len(hits)} {sorted(set(x.lower() for x in hits)) if hits else ''}")
    return ("metalinguagem", ok, rows)

def gate_a11y(_):
    """h1 único por aula; skip-link; controles Home+tema+menu; aria-label nos icon-btn."""
    rows, ok = [], True
    for l in lessons():
        h = rd(l)
        h1 = len(re.findall(r'<h1\b', h))   # SPA: vários page-title h1 são esperados? aqui page-title é h1 por página
        skip = "skip-link" in h
        controls = all(x in h for x in ['id="home-btn"', 'id="theme-toggle"', 'id="menu-toggle"'])
        labels_ok = len(re.findall(r'class="icon-btn"(?![^>]*aria-label)', h)) == 0
        good = skip and controls and labels_ok
        ok &= good
        rows.append(f"{'PASS' if good else 'FAIL'} {os.path.relpath(l,ROOT)}: skip={skip} home+tema+menu={controls} icon-btn-sem-label={'0' if labels_ok else '>0'}")
    return ("a11y", ok, rows)

GATES = {
    "drift": gate_drift, "routing": gate_routing, "quiz": gate_quiz,
    "img": gate_img, "hotspot": gate_hotspot, "metalinguagem": gate_metalinguagem,
    "a11y": gate_a11y, "http": gate_http, "js": gate_js,
}

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--gate", help="roda só um gate")
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()
    names = [args.gate] if args.gate else list(GATES)
    results = []
    for n in names:
        fn = GATES.get(n)
        if not fn:
            print(f"gate desconhecido: {n}"); sys.exit(2)
        results.append(fn(None))
    allok = all(ok for _, ok, _ in results)
    if args.json:
        print(json.dumps({"pass": allok, "gates": [
            {"gate": n, "pass": ok, "rows": rows} for n, ok, rows in results]}, ensure_ascii=False, indent=2))
    else:
        for n, ok, rows in results:
            print(f"\n[{'PASS' if ok else 'FAIL'}] GATE-{n.upper()}")
            for r in rows: print("  " + r)
        print(f"\n{'='*48}\nRESULTADO: {'TODOS PASS — pode commitar' if allok else 'HÁ FAIL — commit BLOQUEADO'}")
    sys.exit(0 if allok else 1)

if __name__ == "__main__":
    main()
