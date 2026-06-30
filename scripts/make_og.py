from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BLUE = (30, 34, 168)
YELLOW = (255, 212, 0)
WHITE = (255, 255, 255)
LIGHT = (200, 205, 245)
BLACK = (15, 23, 42)

FB = "/opt/plugins-venv/lib/python3.11/site-packages/reportlab/fonts/VeraBd.ttf"
FR = "/opt/plugins-venv/lib/python3.11/site-packages/reportlab/fonts/Vera.ttf"

def f(path, size):
    return ImageFont.truetype(path, size)

img = Image.new("RGB", (W, H), BLUE)
d = ImageDraw.Draw(img)

# subtle grid lines
for x in range(0, W, 48):
    d.line([(x, 0), (x, H)], fill=(38, 42, 180), width=1)
for y in range(0, H, 48):
    d.line([(0, y), (W, y)], fill=(38, 42, 180), width=1)

# yellow accent bar bottom
d.rectangle([0, H - 14, W, H], fill=YELLOW)

# Logo block (yellow square with E)
pad = 70
d.rectangle([pad, pad, pad + 84, pad + 84], fill=YELLOW)
ef = f(FB, 64)
d.text((pad + 22, pad + 4), "E", font=ef, fill=BLACK)

# Wordmark
wf = f(FB, 30)
d.text((pad + 104, pad + 12), "EURO MOBILE & COMPUTER", font=wf, fill=WHITE)
sf = f(FR, 18)
d.text((pad + 106, pad + 50), "Sales · Service · Repair · Accessories", font=sf, fill=LIGHT)

# Headline
h1 = f(FB, 72)
d.text((pad, 250), "Mobile, PC & Tablet", font=h1, fill=WHITE)
# 'Repair' word + yellow highlight
repair_y = 330
d.text((pad, repair_y), "Repair", font=h1, fill=YELLOW)
rw = d.textlength("Repair", font=h1)
d.text((pad + rw + 24, repair_y), "in Burnley", font=h1, fill=WHITE)

# Sub
sub = f(FR, 30)
d.text((pad, 450), "22 years experience  ·  Best price guarantee  ·  Free quotes", font=sub, fill=LIGHT)

# Bottom row: phone + website
bf = f(FB, 30)
d.text((pad, 520), "01282 761818", font=bf, fill=YELLOW)
wsf = f(FR, 26)
ws = "euromobilecomputer.co.uk"
wsw = d.textlength(ws, font=wsf)
d.text((W - pad - wsw, 524), ws, font=wsf, fill=WHITE)

out = "/app/frontend/public/og-image.png"
img.save(out, "PNG")
print("saved", out, img.size)
