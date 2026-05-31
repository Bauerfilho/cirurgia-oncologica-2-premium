#!/usr/bin/env python3
"""Gera icon-192.png e icon-512.png (maskable) com encoder PNG puro (stdlib).
Marca: tubo digestivo em "J" (esofago -> estomago) coral sobre petroleo,
com a abertura superior em teal (verde-cirurgico). Paleta Bauer. Largura
uniforme com c-aps arredondados -> nao le como "!".
"""
import zlib, struct, math

BASE  = (0x0E, 0x2A, 0x2F)   # petroleo profundo
CORAL = (0xE8, 0x54, 0x3F)   # vermelho coral
TEAL  = (0x38, 0xBD, 0xA8)   # verde-cirurgico (tubo digestivo)
OFF   = (0xF4, 0xEF, 0xE6)   # off-white quente


def write_png(path, w, h, buf):
    raw = bytearray()
    stride = w * 3
    for y in range(h):
        raw.append(0)
        raw.extend(buf[y * stride:(y + 1) * stride])
    comp = zlib.compress(bytes(raw), 9)

    def chunk(typ, data):
        return (struct.pack(">I", len(data)) + typ + data
                + struct.pack(">I", zlib.crc32(typ + data) & 0xffffffff))

    with open(path, "wb") as f:
        f.write(b"\x89PNG\r\n\x1a\n")
        f.write(chunk(b"IHDR", struct.pack(">IIBBBBB", w, h, 8, 2, 0, 0, 0)))
        f.write(chunk(b"IDAT", comp))
        f.write(chunk(b"IEND", b""))


def clamp01(v):
    return 0.0 if v < 0 else 1.0 if v > 1 else v


def make(size):
    w = h = size
    buf = bytearray()
    for _ in range(w * h):
        buf.extend(BASE)

    aa = max(1.0, size / 256.0)
    cx = size * 0.560              # eixo do esofago (deslocado p/ dar espaco ao gancho)
    y0 = size * 0.150             # topo (abertura)
    yc = size * 0.610             # onde comeca a curva do "J"
    R  = size * 0.150             # raio da curva do estomago
    hw = size * 0.082             # meia-largura do tubo

    # centerline: segmento vertical + arco do gancho
    pts = []
    n = 60
    for k in range(n + 1):
        pts.append((cx, y0 + (yc - y0) * k / n))
    a0, a1 = 0.0, math.radians(140)
    m = 80
    for k in range(m + 1):
        th = a0 + (a1 - a0) * k / m
        pts.append((cx - R + R * math.cos(th), yc + R * math.sin(th)))

    # abertura superior (mucosa) em teal
    tx, ty, tr = cx, y0, hw * 0.86

    # bounding box (resto fica petroleo)
    minx = max(0, int(cx - R - hw - 2)); maxx = min(w, int(cx + hw + 3))
    miny = max(0, int(y0 - hw - 2));      maxy = min(h, int(yc + R + hw + 3))

    def put(x, y, col, a):
        if a <= 0:
            return
        if a > 1:
            a = 1.0
        i = (y * w + x) * 3
        buf[i]   = int(buf[i]   * (1 - a) + col[0] * a)
        buf[i+1] = int(buf[i+1] * (1 - a) + col[1] * a)
        buf[i+2] = int(buf[i+2] * (1 - a) + col[2] * a)

    for y in range(miny, maxy):
        fy = y + 0.5
        for x in range(minx, maxx):
            fx = x + 0.5
            dmin = 1e18
            for (px, py) in pts:
                d = (fx - px) * (fx - px) + (fy - py) * (fy - py)
                if d < dmin:
                    dmin = d
            d = math.sqrt(dmin) - hw
            a = clamp01(0.5 - d / aa)
            if a > 0:
                # brilho off-white sutil na borda superior-esquerda do tubo
                sheen = 0.16 * clamp01((-d) / hw - 0.45) * clamp01((cx + hw - fx) / (2 * hw))
                col = tuple(int(CORAL[k] * (1 - sheen) + OFF[k] * sheen) for k in range(3))
                put(x, y, col, a)
            dj = math.hypot(fx - tx, fy - ty) - tr
            aj = clamp01(0.5 - dj / aa)
            if aj > 0:
                put(x, y, TEAL, aj)

    return w, h, buf


for sz, name in ((192, "icon-192.png"), (512, "icon-512.png")):
    w, h, buf = make(sz)
    write_png(f"/Users/bauervieiracesarfilhovieira/Documents/cirurgia-oncologica-2-premium/assets/{name}", w, h, buf)
    print(f"ok {name} {w}x{h}")
