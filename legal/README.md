# Legal-Seiten — Redesign 2026

Drei neu gestaltete Legal-Seiten im Stil deiner `index.html`:
- `impressum.html`
- `datenschutz.html`
- `agb.html`
- `legal.css` (dediziertes Stylesheet)

## Installation

Ersetze deinen bestehenden `legal/`-Ordner mit dem Inhalt dieses Ordners:

```
rindorindodave/
└── legal/
    ├── impressum.html    ← neu
    ├── datenschutz.html  ← neu
    ├── agb.html          ← neu
    └── legal.css         ← neu
```

Die Dateien verweisen auf `../assets/css/site.css` (für Nav-Styling) und laden zusätzlich `legal.css`. Falls `site.css` nicht geladen wird, funktioniert die Seite auch standalone — das Legal-CSS bringt seinen eigenen Fallback mit.

---

## Design

- **Stil wie Hauptseite**: Geist-Font, dezente Rot-Akzente (`#ff4d2d`), Dark/Light-Theme mit Toggle
- **Sticky Nav** mit Logo, Center-Links und "Back to Portfolio"-Pill (Pendant zur Parasite-Pill auf Index)
- **Nummerierte Paragrafen** mit Mono-Labels, passend zu deinen Section-Headers "01 / ABOUT" etc.
- **Table-of-Contents** auf Datenschutz &amp; AGB für schnelle Navigation
- **Pager** unten verlinkt zu den anderen beiden Legal-Seiten
- **Mini-Contact-CTA** für Rückfragen am Seitenende

---

## Inhaltliche Korrekturen (Fehler & Lücken)

### Impressum
- ✗ **E-Mail-Link war kaputt**: `href="daverindorind@googlemail.com"` → `href="mailto:daverindorindo@googlemail.com"`
- ✗ **Zwei verschiedene E-Mail-Adressen** (`daverindorind@...` und `mail@daverindorindo.com`) → vereinheitlicht
- ✗ **Telefonnummer ohne `tel:`-Schema** → jetzt `tel:+4915782363987`
- ✗ **Straße falsch geschrieben**: "Heinsgergstraße" → "Heinsbergstraße" (dein Kölner Viertel heißt Heinsbergstraße, bitte Hausnummer noch ergänzen)
- ✗ **"[Deine Adresse wie oben]"-Platzhalter** → aufgelöst
- ✗ **Leerer Listenpunkt** im Bildernachweis (`</li>` ohne Inhalt) → entfernt
- ✗ **Backlink** ging auf `#projects` (nicht vorhanden) → jetzt auf `index.html`
- ✗ **USt-ID-Platzhalter** ist jetzt sichtbar als `[DE-USt-ID hier einsetzen]` mit Hinweis auf § 19 Kleinunternehmerregelung

### Datenschutz
- ✗ **Link auf AGB war absolut** (`/agb.html` → 404 auf GitHub Pages) → jetzt relativ (`agb.html`)
- ✗ **Keine Rechtsgrundlagen nach Art. 6 DSGVO genannt** → jetzt bei jedem Abschnitt ergänzt
- ✗ **Kein Hinweis auf zuständige Aufsichtsbehörde** → LDI NRW ergänzt
- ✗ **Kein Abschnitt zu Speicherdauer** → neu (§9)
- ✗ **Kein Hinweis auf §147 AO / §257 HGB** (Rechnungsaufbewahrung 6/10 Jahre) → ergänzt

### AGB
- ✗ **Keine klare Zuordnung Dienst- vs. Werkvertrag** → §2 Abs. 3 ergänzt
- ✗ **Keine Regelung zu Angebotsbindung** → §3 "30 Tage" ergänzt
- ✗ **Keine Zahlungsverzugsregelung** → §6 Abs. 5 (§288 BGB + 40-€-Pauschale) ergänzt
- ✗ **Keine Reise-/Materialkostenregelung** → §6 Abs. 7 ergänzt
- ✗ **Haftung zu unkonkret** ("nur Vorsatz/grobe Fahrlässigkeit") → rechtssichere Kardinalpflichten-Klausel in §13

---

## Neue Paragrafen/Abschnitte — dein Schutz als Freelancer

| § | Was | Warum |
|---|---|---|
| §5 | **Termine & Liefertreue** | Schützt dich vor "Sie sind im Verzug" bei verspätetem Kunden-Input |
| §6 Abs. 3 | **Anzahlung 30–50 %** | Cash-flow bei größeren Projekten, schützt dich vor Total-Ausfällen |
| §6 Abs. 5 | **Verzugszinsen + 40-€-Pauschale** | Gesetzlich zulässig (§288 BGB), bringt bei B2B echte Euro |
| §6 Abs. 6 | **Leistungsverweigerung bei Zahlungsverzug** | Du musst nicht weiterarbeiten wenn nicht bezahlt wird |
| §7 Abs. 4 | **Rechteübertragung erst nach Zahlung** | Der Kunde darf die Arbeit erst verwenden wenn du dein Geld hast |
| §7 Abs. 5 | **Nicht ausgeführte Entwürfe bleiben bei dir** | Der Kunde kann "verworfene" Konzepte nicht heimlich doch benutzen |
| §9 Abs. 2 | **Namensnennungsrecht** | Credit auf Plakaten, Film-Credits etc. |
| §9 Abs. 3 | **Portfolio-Recht** | Du darfst Arbeiten zeigen (außer NDA) |
| §10 | **KI-Training-Vorbehalt nach §44b UrhG** | Neu & wichtig 2024/2025: Opt-out gegen KI-Scraping |
| §11 | **Abnahmefiktion nach 14 Tagen Schweigen** | Kein ewiges "Ich melde mich noch mit Feedback" |
| §12 Abs. 4 | **"Geschmack ≠ Mangel"** | Schützt vor unendlichen kostenlosen Korrekturschleifen |
| §13 Abs. 2–3 | **Haftungsbegrenzung auf Auftragssumme** | Kein Großschadens-Risiko bei 500-€-Jobs |
| §14 Abs. 2 | **Vertraulichkeit 3 Jahre** | Statt "ewig" — realistischer |
| §17 | **Höhere Gewalt** | Pandemie/Internet-Ausfall/Krankheit |
| §18 Abs. 2 | **Mindestpauschale 50 % bei Abbruch** | Kein Projektabbruch "bei Phase 2" = 0 € |
| §19 Abs. 2 | **Gerichtsstand Köln** | Du musst nicht nach Hamburg fahren um zu klagen |

---

## Neue Paragrafen/Abschnitte — Schutz für deine Kunden

| § | Was | Warum |
|---|---|---|
| §3 Abs. 2 | **Vertragsschluss auch per E-Mail** | Rechtssicherheit für Kunde ohne Papier-Ritual |
| §4 Abs. 3 | **Scope-Change wird vorher angekündigt** | Keine bösen Überraschungen auf der Rechnung |
| §5 Abs. 3 | **Nachfrist 10 Werktage vor Rücktritt** | Fairness-Regel |
| §6 Abs. 7 | **Zusatzkosten nur gegen Nachweis** | Transparenz bei Reise/Material |
| §7 Abs. 2 | **Zweckübertragungsgrundsatz §31 UrhG** | Im Zweifel bekommt der Kunde das, was er fürs vereinbarte Ziel braucht |
| §11 Abs. 1 | **14 Tage Reaktionszeit** | Kunde hat Zeit für Freigaben |
| §12 | **Gewährleistung + Nachbesserung** | Klare Mängelrechte |
| §14 Abs. 3 | **Ausnahmen von Vertraulichkeit** | Keine Geheimhaltung für bereits öffentliche Infos |
| Datenschutz §8 | **Projektmaterial nur im Projektkontext** | Kundendaten werden nicht "verwertet" |

---

## Noch zu erledigen

- [ ] **Hausnummer** in der Heinsbergstraße ergänzen (an allen drei Stellen)
- [ ] **USt-ID** einsetzen (oder auf Kleinunternehmerregelung-Hinweis belassen falls zutreffend)
- [ ] Die drei Dateien in deinen `legal/`-Ordner kopieren
- [ ] **Rechtliche Endprüfung durch Anwalt/Fachanwalt** empfohlen — ich bin kein Anwalt, diese Texte sind sorgfältig recherchiert aber keine anwaltliche Beratung

---

## Disclaimer

Ich bin Claude (Anthropic) — kein Rechtsanwalt und keine Rechtsanwältin. Diese Dokumente basieren auf gängiger Praxis für deutsche Freelance-Designverträge und wurden mit Verweisen auf die einschlägigen Paragrafen (UrhG, BGB, DSGVO, TMG, MStV, UStG, AO, HGB) erstellt. Für rechtssichere Anwendung in deinem konkreten Einzelfall empfiehlt sich eine finale Prüfung durch eine/n Anwält*in für Urheber-/Medienrecht.
