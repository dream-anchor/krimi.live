# Krimi.live Design System

Krimi.live bringt Krimis als **Live-Hörspiel** auf die Bühne: Sprecher, Geräuschemacher und Musik lassen einen Fall live vor Publikum entstehen. Das System deckt die Website mit Ticketverkauf ab und lässt sich auf Social, Print und Newsletter übertragen.

## Quellen & Herkunft
- Brief: „Krimi.live Design-System“, Stimmung **dunkel & atmosphärisch (Noir/Krimi)**.
- Referenz genannt: https://wise.design/. **Bewusst nicht übernommen:** Schrift, Farben, Komponenten und Bildsprache von Wise gehören zur Marke Wise. Übernommen wurden nur allgemeine Gestaltungsgrundsätze: große, selbstbewusste Typografie, wenige kräftige Farben, Pill-Buttons, klarer Ton und Barrierefreiheit.
- Weder Logo noch Hausschriften, Fotos oder Codebasis lagen vor. Alles hier ist eine eigenständige Gestaltung.

## Index
- `styles.css`: Einstieg, nur `@import`s
- `tokens/`: `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`
- `guidelines/`: Specimen-Karten (Farben, Schrift, Abstände, Marke, Motion)
- `components/`: React-Primitive (siehe unten), je Ordner eine `*.card.html`
- `ui_kits/website/`: klickbare Website (Start, Spielplan, Stückseite, Ticket-Dialog)
- `thumbnail.html`, `SKILL.md`
- `assets/`: leer, es wurden keine Markenassets geliefert

## Components
- **core:** Icon *(intentional addition: Lucide-Wrapper, der currentColor übernimmt)*
- **actions:** Button, IconButton
- **forms:** Input, Select, Checkbox, Radio, Switch
- **display:** Card, Badge, Tag
- **navigation:** Tabs
- **feedback:** Dialog, Toast, Tooltip

Es lag keine Komponentenquelle vor, deshalb ein Standardsatz in Markengröße.

## CONTENT FUNDAMENTALS
- **Sprache:** Deutsch, Anrede **du**, warm und knapp. Beispiele: „Tickets sichern“, „Neue Fälle zuerst erfahren“, „Wir halten deine Plätze 15 Minuten.“
- **Ton:** Spannung im Kleinen, nie albern. Krimi-Vokabular sparsam einsetzen: „Fall Nr. 07“, „Keine Spur. Für diese Auswahl gibt es keine Termine.“
- **Headlines:** kurz, in Versalien (über CSS gesetzt), gern Frage oder Imperativ: „Wer war es?“, „Licht aus. Ohren auf.“
- **Overlines:** Mono, Versalien, Mittelpunkt als Trenner: „FALL NR. 07 · PREMIERE 14.11. AUGSBURG“.
- **Daten:** deutsches Format `SA 14.11. · 20:00`, Preise `39,00 €`, Uhrzeit im 24-h-Format.
- **Buttons:** Verb zuerst, höchstens drei Wörter. Pro Ansicht nur eine rote Hauptaktion.
- **Zitate:** typografische Anführungszeichen „…“ in Serif Italic.
- **Emoji:** nein. **Ausrufezeichen:** fast nie.

## VISUAL FOUNDATIONS
- **Farbe:** warme Noir-Schwarztöne (`--noir-950` … `--noir-50`). **Indiz-Rot** `--accent` #D9283C nur für Hauptaktionen, aktive Zustände und den Punkt in der Wortmarke. **Lampenlicht-Amber** `--highlight` #E2B22E für Premieren, Spotlights und Overlines im Hero. Papier `--noir-50` als Text und für inverse Flächen (Tickets, Tooltips).
- **Schrift:** *Big Shoulders Display* (900/800/700, Versalien, Zeilenhöhe .88) für Plakatwirkung; *Instrument Sans* für UI und Fließtext; *Instrument Serif Italic* nur für Zitate; *IBM Plex Mono* für Overlines, Daten und Badges (Aktenoptik).
- **Abstände:** 4er-Basis (2–128 px), großzügige Sektionsabstände von 88–112 px, Container 1200 px, Gutter 24 px.
- **Hintergründe:** einfarbig dunkel. Signatur ist das **Spotlight**, ein amberfarbener Radialverlauf von oben (`--spotlight`), dazu eine **Vignette** nach unten (`--vignette`) als Schutz für Text auf Fotos. Keine bunten Verläufe, keine Muster außer der feinen Schraffur in Bild-Platzhaltern.
- **Bildsprache:** Bühnenfotos in Low-Key, warmes Kunstlicht, viel Schwarz, leichtes Korn, gern entsättigt mit warmen Spitzlichtern. Im Hero vollflächig mit Vignette.
- **Radien:** Controls als Pill (999), Inputs 10, Karten 16, Dialoge 24, Badges 4.
- **Karten:** `surface-1` oder `surface-2`, 1 px Rand `--border-subtle`, Radius 16. Interaktive Karten heben sich beim Hover um 2 px, mit stärkerem Rand und `--shadow-2`.
- **Ränder & Schatten:** auf dunklem Grund trennen vor allem helle Haarlinien (8/14/28 % Papier). Schatten sind tief und weich, dazu eine 1 px helle Innenkante oben.
- **Hover:** Flächen werden heller (Rot → Red 400, Ghost → 6–8 % Papier). Textlinks bekommen eine rote Unterstreichung.
- **Press:** `scale(.97)` und Red 600.
- **Fokus:** roter Ring von 3 px (`--focus-ring`).
- **Motion:** 120/200/420 ms mit `--ease-out`, nur Ausblenden und kleine Verschiebungen, kein Bounce.
- **Transparenz & Blur:** Sticky-Header bei 82 % Schwarz mit 12 px Blur, Dialog-Overlay bei 72 % mit 8 px Blur. Sonst keine Transparenz.
- **Layout:** Sticky-Header (72 px) oben, Terminlisten als Zeilen mit Haarlinien statt Karten, Stückübersicht als Raster mit 3 Karten.

## ICONOGRAPHY
- **Lucide** (2 px Strich, runde Enden) per CDN `lucide-static@0.454.0`, eingebunden über die Komponente `<Icon name="ticket" />`. Als CSS-Maske übernimmt es `currentColor`. *Ersatz, da keine eigenen Icons vorlagen.*
- Größen: 16 inline, 20 Standard, 24 Navigation.
- Kein Emoji, keine Unicode-Zeichen als Icons, außer dem Mittelpunkt „·“ als Trenner.
- **Logo:** keines geliefert. Bis dahin steht die Wortmarke „Krimi.live“ in Big Shoulders Display 900 mit rotem Punkt. Das ist ein Platzhalter, kein Logo.

## Fonts
Alle Schriften kommen über Google Fonts (`tokens/fonts.css`). Es lagen keine Hausschriften vor.
