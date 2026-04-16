# Redesign 2026 — Bundle (v3)

## Was ist drin

```
rindorindodave/
├── index.html                       ← Home (mit Logo, Slider, About, Work, Marquee, Contact)
├── img/
│   ├── Dave.svg                     ← Wortmarke (alle Seiten)
│   └── Para/
│       └── parasite-logo.png        ← Parasite Hero-Logo
├── assets/
│   ├── css/site.css                 ← Stylesheet für Index & Projektseiten
│   └── js/site.js                   ← Slider, Theme, Burger, Marquee
└── projects/
    ├── _template.html               ← Vorlage zum Duplizieren
    ├── projekt1.html                ← Mercedes A-Class
    ├── projekt2.html                ← Ahoj Brause Brausergames
    ├── projekt3.html                ← LVM — Larry dein Carry
    ├── projekt4.html                ← LEC × LG Ultragear  ★ Hero-Video
    ├── projekt5.html                ← Porsche × Puma × VEXX
    ├── projekt6.html                ← Mercedes Sprinter & Vans
    ├── projekt7.html                ← SAP Intro Animation  ★ Hero-Video
    ├── projekt8.html                ← Digital & Analog (Mixed)
    └── parasite.html                ← Parasite_Manga (eigener Style!)
```

---

## Was sich seit der letzten Version geändert hat

### Hauptseite
1. **Kunden-Logos in der Marquee zeigen jetzt ihre Originalfarben** (kein Invert-Filter mehr).
2. **About-Foto größer und ohne Rahmen** (320×380px, `object-fit: contain` damit das volle Bild zu sehen ist), About-Block ist jetzt mittig auf der Seite zentriert (`max-width: 1200px; margin: 0 auto`) und Bild + Text sind vertikal zentriert.
3. **Hero-Video auf projekt4.html (LG Ultragear)** — `LG UltraGear x LEC： 2023 Season finals Highlights.mp4` läuft autoplay/muted/loop im Hero.
4. **Hero-Video auf projekt7.html (SAP)** — `SAP.mp4` läuft autoplay/muted/loop im Hero.

### Parasite_Manga (komplett neu, eigene Welt)
- **Eigene Farbwelt**: Cream-Paper Background (`#ece5d3`), Ink-Schwarz, Blood-Rot — wie ein Manga-Druck statt Tech-Style.
- **Eigene Schriften**: Archivo Black (Display) + Bebas Neue (Nav/Headings) + Instrument Serif Italic (Akzent-Tagline) + Geist Mono (Labels). Komplett anders als die Hauptseite.
- **Hero**: Riesige Parasite-Wortmarke (deine PNG), umgeben von 5 floatenden Artworks mit Parallax-Effekt (folgt dem Mauszeiger und scrollt mit).
- **Grain-Overlay**: SVG-Noise als Multiply-Layer für Print-Feeling.
- **Watermark "PARASITE"** als riesiges Hintergrund-Wort in der About-Sektion.
- **Gallery**: Horizontaler Auto-Scroll-Streifen (80s Loop, hover pausiert) plus darunter ein klassisches Bento-Grid mit asymmetrischen Tiles (tall/wide/square).
- **Socials**: Auf dunklem Ink-Background, anders gestaltet als Hauptseite — als 6-Card-Grid mit Mono-Initialen-Icons.
- **Logo "DAVE" oben links** (gleiche Größe wie Hauptseite) führt zurück zur Portfolio-Seite. Zusätzlich rechts oben "← Portfolio"-Pill.

---

## In dein Repo einbauen

```bash
cd /Users/daverindorindo/Documents/GitHub/rindorindodave
git checkout -b redesign-2026
```

Aus dem Bundle übernehmen:
- `index.html` → Root
- `img/Dave.svg` → in deinen `img/`-Ordner
- `img/Para/parasite-logo.png` → in `img/Para/` (sollte dort schon Para01.jpg etc. liegen)
- `assets/` → Root (komplett neu)
- alle `projects/*.html` → in deinen `projects/`-Ordner

Alte Dateien können weg sobald alles läuft:
- `style.css`, `script.js` (Root)
- `parasite/style02.css`, `parasite/script02.js` (alter Parasite-Ordner)

In VS Code → Live Server starten → durchklicken.

---

## Wo du was änderst

### Hauptseite

| Was | Wo |
|---|---|
| Slider-Bilder | `index.html` ganz unten, `window.HERO_IMAGES` |
| Marquee-Logos | `index.html` ganz unten, `window.CLIENT_LOGOS` |
| About-Bild Größe | `assets/css/site.css` → `.about-img { width: ...; height: ... }` |
| About-Bereich Breite | `assets/css/site.css` → `.about { max-width: ... }` |

### Parasite

| Was | Wo |
|---|---|
| Floating Hero-Bilder | `projects/parasite.html` Section `.p-floats` (5 `<div class="p-float">`) |
| Galleriestreifen Bilder | `projects/parasite.html` JS-Block `stripImages = [...]` |
| Grid Bilder | `projects/parasite.html` Section `.p-grid` |
| Animationsgeschwindigkeit Streifen | CSS `.p-strip { animation: pStrip 80s ... }` |
| Hero-Logo | `projects/parasite.html` `<img src="../img/Para/parasite-logo.png">` |

### Ein neues Projekt anlegen

1. `projects/_template.html` duplizieren → umbenennen
2. `⌘+F` nach `[` suchen, alle Platzhalter ersetzen
3. Bilder mit den Bausteinen einfügen (siehe Kommentare im Template)

**Tipp für Hero-Video** (wie LG/SAP):

```html
<section class="project-hero">
  <video class="bg-video" autoplay muted loop playsinline poster="../img/POSTER.jpg">
    <source src="../img/VIDEO.mp4" type="video/mp4">
  </video>
  <div class="bg-overlay"></div>
  <div class="content">
    ... rest wie gewohnt
  </div>
</section>
```

---

## Status

- [x] Home redesigned (inkl. Parasite-Pill-Verlinkung)
- [x] 8 Projektseiten redesigned (LG + SAP mit Video-Hero)
- [x] Parasite-Seite komplett neu im Manga-Style
- [ ] Legal-Seiten (Impressum, Datenschutz, AGB) auf neuen Style umziehen
- [ ] Bilder optional als WebP optimieren

---

## Bekannte Filename-Quirks

Einige deiner Asset-Namen enthalten Sonderzeichen:
- `LG UltraGear x LEC： 2023 Season finals Highlights.mp4` — der Doppelpunkt `：` ist ein Unicode-Vollbreiten-Zeichen, kein normaler ASCII-`:`. Das funktioniert in modernen Browsern, aber falls Probleme: in einen einfachen Namen wie `lg-lec-finals.mp4` umbenennen und im HTML anpassen.
- `Apresentação Kia LoL Series ｜ Trailer.mp4` — selbe Story.

---

## Tipps für VS Code

- **Multi-Cursor:** `⌥ + Klick`
- **Datei-übergreifende Suche/Ersetzen:** `⌘ + ⇧ + F`
- **Emmet:** `div.tile>img` + Tab → `<div class="tile"><img></div>`
- **Live Server starten:** Rechtsklick `index.html` → "Open with Live Server"

Viel Spaß beim Aufpolieren.
