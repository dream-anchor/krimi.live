# Chat

_Started 2026-10-27 14:38 UTC_

---

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "ROLLE?Du arbeitest als Senior SEO- und GEO-Experte, Senior Copywriter (Deutsch),"
Current date is now October 27, 2026
</system-info>

<attached aesthetic_system_instructions>
A design system or theme is attached to this project. That attachment already answers the visual-style question: apply it. Do NOT ask the user which visual style to use — no questions about vibe, colors or palette directions (including color-swatch svg-options questions), typography, mood, or art direction, and skip the "divergent visuals" question from the question-asking tips; offer divergent visual directions only if the user themselves asks for alternatives. This rule bans asking the user to pre-pick a style in the abstract — swatches, mood words, palette pickers. It does not ban asking them to choose among candidates you have already built: putting built candidates on a file-options board for the user to pick from is encouraged. Treat the attachment as the confirmed starting point and product context — the "confirm the starting point" tip is already satisfied, so do not ask the user to confirm or re-pick it. Spend your questions on everything else you need: audience, purpose, content, structure, scope, interactions, tone of copy.
</attached aesthetic_system_instructions>

<pasted_text name="Pasted text (131 lines)">
ROLLE
Du arbeitest als Senior SEO- und GEO-Experte, Senior Copywriter (Deutsch), Fact-Checker, Brand-/Design-System-Verantwortlicher und technischer Lead in einer Person. Du baust die komplette Website krimi.live. Du schreibst kein Wort, das du nicht belegen kannst.

ZIEL
krimi.live ist die Dachseite für Live-Krimi-Formate auf der Bühne. Aktuell gibt es genau ein Format: „Pater Brown – Das Live-Hörspiel“ (Produktion: Dream &amp; Anchor Handelsgesellschaft mbH). Die Seite soll (1) die Kategorie „Live-Hörspiel / Krimi live erleben“ in Google und in KI-Antworten besetzen, (2) Besucher zu den Tickets auf paterbrown.com führen, (3) später weitere Formate aufnehmen können, ohne Umbau.
Annahme (bei Widerspruch nachfragen): „Seite“ = die gesamte Website krimi.live.

HARTE FAKTENREGELN
1. Quelle der Wahrheit für Termine, Preise, Besetzung und Programm ist https://paterbrown.com (Seiten /termine/, /ensemble/, /live-hoerspiel/ und /llms.txt). Nichts erfinden, nichts schätzen, keine Zahlen aus dem Gedächtnis.
2. Termine NIE fest in den Code oder Text schreiben. Termine kommen aus einem Datenfeed. Existiert bei paterbrown.com kein JSON-Endpunkt (z. B. /api/termine.json), schlage ihn dort vor, statt Termine zu kopieren. Im Fließtext nur Platzhalter wie {{termine_anzahl}}, {{letzter_termin_monat_jahr}}, {{naechster_termin}}.
3. Bekannte Fakten (Stand 27.10.2026, von paterbrown.com): Ensemble: Antoine Monot (Pater Brown, Co-Produzent), Wanja Mues (Erzähler und Flambeau), Beatboxer Marvelin, Hans Beatbox, Eyota (je nach Abend). Pro Abend zwei Fälle nach G. K. Chesterton: „Das blaue Kreuz“ und „Die fallenden Brüder“. Dauer etwa 2 Stunden inklusive 15 Minuten Pause. Empfohlen ab etwa 12 Jahren. Alle Geräusche entstehen live mit Stimme und Loop-Station, ohne Playback. Tickets ab 35,40 € (Deutschland), ab CHF 65,40 (Schweiz, Ticketcorner). Einziger Schweizer Termin laut Feed: Zürich, Volkshaus (Weisser Saal), 16.12.2026. Alle Zahlen vor Veröffentlichung gegen paterbrown.com prüfen.
4. Ungeklärte Widersprüche: Firmensitz (München laut paterbrown.com, Grünwald laut interner Angabe) und Anzahl der Termine (48 laut Website). Nimm für Impressum und Schema die Angaben aus dem aktuellen Impressum von paterbrown.com und markiere beides als „zu bestätigen“.
5. Credit für Stefanie Sick auf allen Seiten mit Pater-Brown-Bezug exakt: „Künstlerische Leitung &amp; Creative Producerin: Stefanie Sick“.
6. Alles Ungeprüfte kennzeichnen mit [PRÜFEN: Grund]. Am Ende eine Liste aller offenen [PRÜFEN]-Punkte ausgeben.

AUDIT-BEFUNDE ALS RANDBEDINGUNGEN
- paterbrown.com besitzt die Markenbegriffe („pater brown hörspiel“, „pater brown live hörspiel“, Termine) auf Position 1 bis 3. krimi.live darf dort NICHT konkurrieren. Ziel von krimi.live sind Kategoriebegriffe: „live hörspiel“, „was ist ein live hörspiel“, „krimi live erleben“, „live hörspiel krimi“, „krimi bühne“.
- paterbrown.com hat bereits /hintergruende/krimi-events/ (Formatvergleich Krimidinner, Escape Room, Wanderung, Live-Hörspiel) und /hintergruende/krimi-hoerspiel/ (Geschichte des Krimi-Hörspiels). Diese Themen NICHT neu aufrollen, sondern verlinken. Eigene Texte müssen inhaltlich und wörtlich eigenständig sein.
- Technisch ist paterbrown.com stark (JSON-LD, 48 TheaterEvent, hreflang de-DE/de-CH/de-AT, llms.txt). Dieses Niveau mindestens halten.
- Wettbewerb in den Ergebnissen: Ticketportale und Terminseiten. Es fehlt eine unabhängige Seite, die die Kategorie erklärt. Das ist die Lücke.
- krimi.live ist noch nicht erreichbar (DNS und Hosting fehlen).
- Entscheidung: Keine eigene /termine/-Seite auf krimi.live. Termine erscheinen nur als Feed-Block auf der Startseite mit Link zu paterbrown.com/termine/. Die Seite /formate/pater-brown/ bekommt einen Cross-Domain-Canonical auf https://paterbrown.com/live-hoerspiel/.

SEITENBAUM
/                                         Startseite
/formate/pater-brown/                     Formatseite (Canonical → paterbrown.com/live-hoerspiel/)
/hintergruende/was-ist-ein-live-hoerspiel/ Kernartikel
/ueber-uns/                               Betreiber, Team, Kontakt
/impressum/  /datenschutz/                Rechtstexte
(Phase 2, nur nach Freigabe: Artikel 2 bis 5, siehe unten)

SEITENINHALTE (fertige Texte; Ansprache neutral ohne Du/Sie; Typografie: „…“, Gedankenstrich – mit Leerzeichen, Zahlen im deutschen Format)

[STARTSEITE]
Title: krimi.live – Krimi live erleben | Live-Hörspiel &amp; Bühne
Meta-Description: Krimis, die auf der Bühne entstehen: Hintergründe zum Live-Hörspiel und aktuelle Termine. Auf Tour: Pater Brown mit Antoine Monot und Wanja Mues.
H1: Krimi live erleben
Lead: krimi.live ist das Magazin für Krimis, die auf der Bühne entstehen: Live-Hörspiele, Stimmen, Geräusche und Spannung im selben Raum. Im Mittelpunkt steht derzeit „Pater Brown – Das Live-Hörspiel“ mit Antoine Monot und Wanja Mues, auf Tour durch Deutschland und die Schweiz.
H2: Die nächsten Termine
Text: Die nächsten Vorstellungen von „Pater Brown – Das Live-Hörspiel“. Alle {{termine_anzahl}} Termine bis {{letzter_termin_monat_jahr}} mit Ticketlinks stehen auf paterbrown.com.
[Feed-Block: die 3 nächsten Termine aus dem Datenfeed: Datum, Stadt, Spielstätte; Button „Tickets“ → Ticketlink aus dem Feed; Button „Alle Termine“ → https://paterbrown.com/termine/]
H2: Das Format der Saison
Text: Zwei Schauspieler sprechen alle Rollen. Beatboxer erzeugen sämtliche Geräusche live mit Stimme und Loop-Station, ohne Playback. Pro Abend gibt es zwei Fälle nach G. K. Chesterton, in etwa zwei Stunden inklusive Pause.
Buttons: „Zum Format“ → /formate/pater-brown/ · „Tickets &amp; Termine“ → https://paterbrown.com/termine/ (beide gleich hoch, auf einer Linie)
H2: Hintergründe
Karte: „Was ist ein Live-Hörspiel?“ – Wie ein Hörspiel auf die Bühne kommt, wer die Geräusche macht und was das Publikum davon hat. → /hintergruende/was-ist-ein-live-hoerspiel/
H2: Wer hinter krimi.live steht
Text: krimi.live wird von der Dream &amp; Anchor Handelsgesellschaft mbH betrieben, die auch „Pater Brown – Das Live-Hörspiel“ produziert. Das Magazin schreibt aus der Praxis, von Menschen, die Live-Hörspiele selbst auf die Bühne bringen. → /ueber-uns/
H2: Häufige Fragen   (IMMER vollständig ausgeklappt, kein Akkordeon)
F: Was ist ein Live-Hörspiel?
A: Ein Live-Hörspiel führt ein Hörspiel vor Publikum auf der Bühne auf. Schauspieler sprechen die Rollen, Geräusche und Musik entstehen im selben Moment. Bei „Pater Brown“ erzeugen Beatboxer alle Geräusche live mit Stimme und Loop-Station, ohne Playback.
F: Wie lange dauert „Pater Brown – Das Live-Hörspiel“?
A: Etwa zwei Stunden, einschließlich 15 Minuten Pause.
F: Welche Geschichten werden gespielt?
A: Pro Abend zwei Fälle nach G. K. Chesterton: „Das blaue Kreuz“ und „Die fallenden Brüder“. [PRÜFEN: Programm gegen paterbrown.com]
F: Wer steht auf der Bühne?
A: Antoine Monot spielt Pater Brown, Wanja Mues ist Erzähler und Flambeau. Je nach Abend sorgt ein Beatboxer (Marvelin, Hans Beatbox oder Eyota) für den Klang.
F: Ab welchem Alter ist die Vorstellung geeignet?
A: Empfohlen ab etwa 12 Jahren.
F: Was kosten Tickets, und wo gibt es sie?
A: Tickets gibt es ab 35,40 € in Deutschland und ab CHF 65,40 in der Schweiz. Die Ticketlinks stehen bei den Terminen auf paterbrown.com. [PRÜFEN: Preise aktuell?]

[FORMATSEITE /formate/pater-brown/]
Title: Pater Brown – Das Live-Hörspiel: das Format im Überblick
Meta-Description: Zwei Schauspieler, ein Beatboxer, zwei Fälle nach Chesterton: Das Live-Hörspiel „Pater Brown“ im Überblick. Tickets und Termine bei paterbrown.com.
H1: Pater Brown – Das Live-Hörspiel
H2 „Worum es geht“: Pater Brown, der unscheinbare Pfarrer aus den Kriminalgeschichten von G. K. Chesterton, löst seine Fälle durch Menschenkenntnis statt durch Spurensicherung. Im Live-Hörspiel erleben Zuschauer zwei dieser Fälle an einem Abend, nur mit Stimme, Geräusch und Fantasie.
H2 „Die Stimmen des Abends“: Antoine Monot (Pater Brown, Co-Produzent), Wanja Mues (Erzähler und Flambeau), dazu je nach Abend die Beatboxer Marvelin, Hans Beatbox oder Eyota. Beide Schauspieler kennt das Fernsehpublikum aus „Ein Fall für zwei“ (ZDF). Künstlerische Leitung &amp; Creative Producerin: Stefanie Sick
H2 „Ablauf und Dauer“: Etwa zwei Stunden inklusive 15 Minuten Pause, ohne Kostümwechsel und ohne Bühnenbild. Empfohlen ab etwa 12 Jahren.
H2 „Termine und Tickets“: Feed-Block (3 nächste Termine) + Button „Alle Termine und Tickets“ → https://paterbrown.com/termine/
Schluss-Link: „Mehr zur Show, zum Ensemble und zur Presse bei paterbrown.com“ → https://paterbrown.com/live-hoerspiel/
Technisch: &lt;link rel="canonical" href="https://paterbrown.com/live-hoerspiel/"&gt;

[KERNARTIKEL /hintergruende/was-ist-ein-live-hoerspiel/]
Title: Was ist ein Live-Hörspiel? Ablauf, Geräusche, Beispiel
Meta-Description: Ein Live-Hörspiel bringt das Hörspiel auf die Bühne: Stimmen, Geräusche und Musik entstehen vor Publikum. Ablauf, Unterschiede und ein Beispiel.
H1: Was ist ein Live-Hörspiel?
Autor: [PRÜFEN: Antoine Monot oder Stefanie Sick – Freigabe der Namensnennung]; Datum veröffentlicht/aktualisiert aus dem Build.
Antwort-Absatz (zuerst, zitierfähig): Ein Live-Hörspiel ist ein Hörspiel, das vor Publikum auf der Bühne entsteht. Schauspieler sprechen die Rollen, Geräusche und Musik werden im selben Moment erzeugt. Die Bilder entstehen im Kopf der Zuschauer, wie beim Radiohören, nur dass man den Sprechern dabei zusehen kann.
H2: Was passiert auf der Bühne?
Die Sprecher tragen den Text als Dialog und Erzählung vor, am Mikrofon oder frei im Raum. Dazu kommen Geräusche wie Schritte, Türen, Wind und Regen sowie Musik. Sie führen das Publikum auch ohne Bilder an jeden Schauplatz der Handlung.
H2: Wie entstehen die Geräusche?
Klassisch macht das ein Geräuschemacher mit Requisiten. Bei „Pater Brown – Das Live-Hörspiel“ übernehmen das Beatboxer: Sie erzeugen alle Geräusche mit der Stimme und bauen sie mit einer Loop-Station zu Klangflächen auf, ohne Playback. Je nach Abend steht ein anderer Beatboxer auf der Bühne. Der Fall bleibt derselbe, der Klang ändert sich.
H2: Live-Hörspiel, Hörbuch und Theater im Vergleich
Beim Hörbuch liest meist eine Stimme vor. Das Live-Hörspiel verteilt die Rollen auf mehrere Sprecher und ergänzt Geräusche und Musik. Im Theater tragen Kulisse, Kostüm und Bewegung die Geschichte; das Live-Hörspiel setzt fast ganz auf Sprache und Klang. Ein aufgenommenes Hörspiel klingt immer gleich, ein Live-Hörspiel gibt es nur in diesem Moment, und jede Vorstellung klingt ein wenig anders.
H2: Für wen eignet sich ein Live-Hörspiel?
Für alle, die gern Krimis hören, lesen oder sehen und einmal erleben wollen, wie Spannung allein durch Stimmen entsteht. „Pater Brown“ ist ab etwa 12 Jahren empfohlen.
H2: Beispiel: „Pater Brown – Das Live-Hörspiel“
Antoine Monot spielt Pater Brown, Wanja Mues ist Erzähler und Flambeau. An einem Abend laufen zwei Fälle nach G. K. Chesterton: „Das blaue Kreuz“ und „Die fallenden Brüder“. Die Vorstellung dauert etwa zwei Stunden einschließlich Pause. Die Tour läuft bis {{letzter_termin_monat_jahr}}. Button: „Termine und Tickets“ → https://paterbrown.com/termine/
H2: Häufige Fragen (ausgeklappt, 3 Fragen aus dem FAQ der Startseite wiederverwenden: „Wie lange dauert …“, „Ab welchem Alter …“, „Wie entstehen die Geräusche?“)
Verlinken (nicht wiederholen): /hintergruende/krimi-hoerspiel/ und /hintergruende/krimi-events/ auf paterbrown.com als „Mehr dazu“.

[ÜBER UNS /ueber-uns/]
Title: Über krimi.live – Betreiber und Team
Meta-Description: krimi.live ist das Magazin der Dream &amp; Anchor Handelsgesellschaft mbH, Produzentin von „Pater Brown – Das Live-Hörspiel“. Team und Kontakt.
H1: Über krimi.live
Text: krimi.live sammelt Wissen und Termine rund um Krimis auf der Bühne. Das Magazin gehört zur Dream &amp; Anchor Handelsgesellschaft mbH, die „Pater Brown – Das Live-Hörspiel“ produziert. Antoine Monot, Schauspieler, spielt die Titelrolle und ist Co-Produzent. Wanja Mues ist Erzähler und Flambeau. Künstlerische Leitung &amp; Creative Producerin: Stefanie Sick.
Kontakt: Daten aus dem Impressum von paterbrown.com übernehmen (Telefon +49 89 909015 3943 laut Website) [PRÜFEN: Adresse und Kontakt].

[IMPRESSUM / DATENSCHUTZ]
Aus paterbrown.com übernehmen und anpassen (Domain, Dienste). Keine eigenen Rechtstexte erfinden. Als „anwaltlich zu prüfen“ markieren. Keine Tracker oder Cookies ohne Einwilligung; bevorzugt cookielose Messung. Newsletter nur mit Double-Opt-in und nur, wenn ein Versandsystem angebunden ist.

PHASE 2 (nur Briefings, KEINE fertigen Texte ohne Freigabe und echte Quellen)
2. „Live-Hörspiele in Deutschland: Überblick und Kalender“ – unabhängige Übersicht mit Quellen je Eintrag; Kandidaten (ungeprüft): Fitzek „Der Nachbar“ live, Karl-May-Live-Hörspiel, Mienenspiel „Orson Welles und der Krieg der Welten“, Anja Leer „Rache zeugt die schönsten Morde“. Jede Angabe mit Primärquelle belegen; Transparenzhinweis, dass krimi.live von einem Anbieter betrieben wird.
3. „Wie Beatboxer ein Live-Hörspiel vertonen“ – Interview-Artikel mit Marvelin, Hans Beatbox oder Eyota. Braucht Input der Beteiligten (Erfahrungswissen, Zitate, Fotos).
4. „Pater Brown auf der Bühne: Wie aus Chesterton ein Live-Hörspiel wird“ – Entstehung der Fassung; Input von Stefanie Sick und Antoine Monot nötig.
5. „Krimi live: Wohin als Nächstes?“ – Orientierungsartikel, nur wenn er sich klar von paterbrown.com/hintergruende/krimi-events/ unterscheidet.

SEO-/GEO-VORGABEN
- Pro Seite: eindeutiger Title (max. 60 Zeichen), Meta-Description (max. 155), ein H1, saubere H2-Folge, Canonical, lang=de.
- JSON-LD: Organization (@id https://krimi.live/#org, parentOrganization bzw. publisher Dream &amp; Anchor Handelsgesellschaft mbH, sameAs: https://paterbrown.com, Instagram paterbrown.live) und WebSite (@id https://krimi.live/#site, inLanguage de-DE). Artikel: Article mit author (Person), datePublished, dateModified. Startseite und Kernartikel: FAQPage, exakt deckungsgleich mit dem sichtbaren Text. Personen mit sameAs (Wikipedia/IMDb wie auf paterbrown.com). Bei Terminen im Feed-Block: TheaterEvent aus den Feeddaten (startDate mit Zeitzonen-Offset, konsistent mit doorTime), Offer.url aus dem Feed.
- /llms.txt für krimi.live nach dem Muster von paterbrown.com (Kurzbeschreibung, Seitenliste, Fakten, Kontakt).
- robots.txt: alles erlauben; Sitemap angeben; GPTBot, ClaudeBot, PerplexityBot, Google-Extended nicht sperren.
- Interne Verlinkung: Startseite → Format, Kernartikel, Über uns; Kernartikel ↔ Format; jede Seite → paterbrown.com mit sprechendem Linktext, kein „hier klicken“.
- Startseite mit zwei, höchstens drei klaren Wegen (Tickets, Format, Hintergrund). Keine Doppelung von Texten der paterbrown.com.

DESIGN
- Nutze ausschließlich das „krimi.live Design System“ aus Claude Design (Tokens, Komponenten). Keine Farben und Schriften im Code fest verdrahten. Keine Wise-Elemente (Farbe, Schrift, Logo).
- Charakter statt Standard-KI-Seite: plakative Typografie, klare Asymmetrie, ein starker Eyecatcher pro Seite. Kein zentriertes Standard-Hero, kein Verlauf, keine Emojis, keine Karten mit farbiger Kante links.
- Gestaltungsregeln des Auftraggebers: ruhig, nicht zu bunt; kein Hellrot/Rosa als Fläche; nichts klappt auf oder zu (FAQ, Details immer sichtbar); Buttons nebeneinander gleich hoch und auf einer Linie; zusammengehörige Auswahl als ein Block; wenig Leerfläche; keine Beispielinhalte aus Screenshots fest einbauen.
- Kontrast mindestens WCAG AA, sichtbarer Fokus, mobil zuerst.

TECHNIK
- Statisch (z. B. Astro) auf Cloudflare Pages, Inhalt ohne JavaScript lesbar, gute Core Web Vitals. Termin-Feed beim Build oder per Worker mit Fallback. HTTPS, www → ohne www, 301.
- Vor dem Launch: DNS auf Cloudflare, Domain-Property in Google Search Console und Bing Webmaster Tools, Sitemap einreichen, IndexNow.

QUALITÄTSTOR
Vor der Ausgabe: (1) jeder Fakt gegen paterbrown.com geprüft oder als [PRÜFEN] markiert, (2) Kein Text doppelt zu paterbrown.com, (3) Canonical-Logik wie oben, (4) Strukturdaten gegen sichtbaren Text geprüft, (5) Deutsch laut gelesen: keine Lehnübersetzungen, keine Floskeln, deutsche Typografie, (6) Design-Regeln erfüllt.

AUSGABE
Liefere: (a) die fertige Website, (b) eine Liste aller [PRÜFEN]-Punkte, (c) eine Liste der Annahmen, (d) die Phase-2-Briefings.
</pasted_text>

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Design Components">
This project uses Design Components: every design is a single streaming `Name.dc.html` file. The full authoring spec is in your system prompt under "Writing code — Design Components" — follow it. Author and edit `.dc.html` content with the `dc_write`, `dc_html_str_replace`, `dc_js_str_replace`, and `dc_set_props` tools (not `write_file`; `str_replace_edit` works but won't stream); template edits stream into the live preview as you type.
</attached-skill>

<attached-skill name="Krimi.live Design System (design system)">
[Design System] This project uses the **Krimi.live Design System** design system. This is a binding choice for visual style — every visual must follow it. Don't invent colors, type, spacing, or components not grounded here.

Scope: the design system is a visual style reference only. Its guide may describe example products, brands, or people that are unrelated to the user and unrelated to the subject of this conversation. Never treat anything in the design system as a fact about the user, their work, or the topic they asked about.

This project has the **KrimiLiveDesignSystem_fc12d8** design system bound at `_ds/krimi-live-design-system-fc12d85c-37d6-47ac-ab16-7426ee972b9b/`. If anything under that path is missing or fails to load, the folder name may differ — `list_files` `_ds/` and use the folder whose name ends with fc12d85c-37d6-47ac-ab16-7426ee972b9b instead, including in the <link>/<script> paths below.

**Loading the bundle is how you use this design system.** Every Design Component you build must load `_ds/krimi-live-design-system-fc12d85c-37d6-47ac-ab16-7426ee972b9b/_ds_bundle.js` in `<helmet>` (include it in child DCs too — de-duped by URL) and compose with its components — do not recreate those components from scratch or restyle raw HTML to look like them. At the top of the template:

```html
<helmet>
  <link rel="stylesheet" href="_ds/krimi-live-design-system-fc12d85c-37d6-47ac-ab16-7426ee972b9b/tokens/fonts.css">
  <link rel="stylesheet" href="_ds/krimi-live-design-system-fc12d85c-37d6-47ac-ab16-7426ee972b9b/tokens/colors.css">
  <link rel="stylesheet" href="_ds/krimi-live-design-system-fc12d85c-37d6-47ac-ab16-7426ee972b9b/tokens/typography.css">
  <link rel="stylesheet" href="_ds/krimi-live-design-system-fc12d85c-37d6-47ac-ab16-7426ee972b9b/tokens/spacing.css">
  <link rel="stylesheet" href="_ds/krimi-live-design-system-fc12d85c-37d6-47ac-ab16-7426ee972b9b/tokens/effects.css">
  <link rel="stylesheet" href="_ds/krimi-live-design-system-fc12d85c-37d6-47ac-ab16-7426ee972b9b/tokens/base.css">
  <link rel="stylesheet" href="_ds/krimi-live-design-system-fc12d85c-37d6-47ac-ab16-7426ee972b9b/styles.css">
  <script src="_ds/krimi-live-design-system-fc12d85c-37d6-47ac-ab16-7426ee972b9b/_ds_bundle.js"></script>
</helmet>
```

Then mount any component directly in the template — no logic class needed:

```html
<x-import component-from-global-scope="KrimiLiveDesignSystem_fc12d8.Button" hint-size="auto,40px">Label</x-import>
```

Props are template attributes (kebab → camelCase); template children pass through as `props.children`. The linked stylesheet(s) carry the design tokens (colors, type, spacing) — style against those via `var(--*)` and the design system's classes rather than guessing values.

The full design-system source tree lives at `/projects/fc12d85c-37d6-47ac-ab16-7426ee972b9b/` — use `list_files` / `read_file` from there for anything not under `_ds/` (layout varies by brand; don't assume folder names). Its guide is reproduced below so you don't need to fetch it:

<design-system-guide>
# Krimi.live Design System

Krimi.live bringt Krimis als **Live-Hörspiel** auf die Bühne: Sprecher, Geräuschemacher und Musik lassen einen Fall live vor Publikum entstehen. Das System deckt die Website mit Ticketverkauf ab und lässt sich auf Social, Print und Newsletter übertragen.

## Quellen &amp; Herkunft
- Brief: „Krimi.live Design-System“, Stimmung **dunkel &amp; atmosphärisch (Noir/Krimi)**.
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
- **Ränder &amp; Schatten:** auf dunklem Grund trennen vor allem helle Haarlinien (8/14/28 % Papier). Schatten sind tief und weich, dazu eine 1 px helle Innenkante oben.
- **Hover:** Flächen werden heller (Rot → Red 400, Ghost → 6–8 % Papier). Textlinks bekommen eine rote Unterstreichung.
- **Press:** `scale(.97)` und Red 600.
- **Fokus:** roter Ring von 3 px (`--focus-ring`).
- **Motion:** 120/200/420 ms mit `--ease-out`, nur Ausblenden und kleine Verschiebungen, kein Bounce.
- **Transparenz &amp; Blur:** Sticky-Header bei 82 % Schwarz mit 12 px Blur, Dialog-Overlay bei 72 % mit 8 px Blur. Sonst keine Transparenz.
- **Layout:** Sticky-Header (72 px) oben, Terminlisten als Zeilen mit Haarlinien statt Karten, Stückübersicht als Raster mit 3 Karten.

## ICONOGRAPHY
- **Lucide** (2 px Strich, runde Enden) per CDN `lucide-static@0.454.0`, eingebunden über die Komponente `&lt;Icon name="ticket" /&gt;`. Als CSS-Maske übernimmt es `currentColor`. *Ersatz, da keine eigenen Icons vorlagen.*
- Größen: 16 inline, 20 Standard, 24 Navigation.
- Kein Emoji, keine Unicode-Zeichen als Icons, außer dem Mittelpunkt „·“ als Trenner.
- **Logo:** keines geliefert. Bis dahin steht die Wortmarke „Krimi.live“ in Big Shoulders Display 900 mit rotem Punkt. Das ist ein Platzhalter, kein Logo.

## Fonts
Alle Schriften kommen über Google Fonts (`tokens/fonts.css`). Es lagen keine Hausschriften vor.

</design-system-guide>
</attached-skill>

## Assistant

_[tool: list_files]_

_[tool: web_fetch]_

_[tool: web_fetch]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: web_fetch]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: web_fetch]_

paterbrown.com ist in dieser Sitzung nicht abrufbar. Ich baue mit den Fakten aus dem Briefing und markiere alles als „gegen paterbrown.com prüfen“.

_[tool: dc_write]_

_[tool: run_script]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

Ich habe die Website als klickbaren Prototyp mit allen sechs Seiten gebaut, dazu eine **Projektakte** mit Prüfpunkten, Annahmen und den Phase-2-Briefings. paterbrown.com konnte ich nicht abrufen. Deshalb ist kein Fakt gegen die Website geprüft. Alles stammt aus Ihrem Briefing und muss vor der Veröffentlichung abgeglichen werden.

**Lieferumfang**
- **(a) Website:** Startseite, Formatseite (Canonical auf paterbrown.com/live-hoerspiel/), Kernartikel, Über uns, Impressum, Datenschutz. Pro Seite werden Title, Meta-Description, Canonical und JSON-LD gesetzt. Die FAQ-Strukturdaten werden direkt aus dem sichtbaren Text erzeugt und stimmen deshalb wörtlich mit ihm überein. Dazu kommen die Dateien `llms.txt`, `robots.txt`, `_redirects`, ein Vorschlag für den Terminfeed auf paterbrown.com und eine Technik- und Launch-Notiz.
- **(b)** 14 offene Prüfpunkte, **(c)** 11 Annahmen und **(d)** die vier Phase-2-Briefings stehen in der Projektakte.

**Was Sie wissen sollten**
- **Termine:** Es steht kein Termin im Code. Sie kommen aus dem vorgeschlagenen Feed `paterbrown.com/api/termine.json`, den es noch nicht gibt. Bis er existiert, zeigt die Seite einen Hinweis mit Link zu paterbrown.com/termine/. Die Sätze mit Terminanzahl und Tourende entfallen dann.
- **Zwei Texte aus dem Briefing** stehen nicht in Ihrer Faktenliste und sind als „Prüfen“ markiert: der Satz zu „Ein Fall für zwei“ (ZDF) und „ohne Kostümwechsel und ohne Bühnenbild“.
- **Abweichungen vom Design-System:** Die Ansprache ist neutral statt „du“, und den Spotlight-Verlauf habe ich weggelassen. In beiden Fällen geht Ihr Briefing vor.
- **Schriften:** Im Prototyp kommen sie noch von Google Fonts. Für den Livebetrieb müssen sie lokal ausgeliefert werden, sonst passt das nicht zum Datenschutz.
- **Impressum und Datenschutz** enthalten bewusst nur die Struktur und keine eigenen Rechtstexte. Die Inhalte müssen aus paterbrown.com übernommen und anwaltlich geprüft werden.

In den Einstellungen des Prototyps können Sie die Feed-Adresse ändern, eine Vorschau der Terminzeilen ohne Daten einblenden, die Prüfmarken aus- und einblenden und den Autor des Kernartikels wählen.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Ich habe die Überschriften mit Umlauten korrigiert; die erneute Prüfung läuft noch.

- **Kernartikel:** „Live-Hörspiel?“ bricht nicht mehr am Bindestrich um. Der Zeilenabstand ist größer, damit die Punkte über dem Ö nicht mehr in die Zeile darüber ragen.
- **Übrige Überschriften:** Bei den Abschnittsüberschriften, der Artikelkarte und den beiden Fall-Titeln auf der Formatseite habe ich den Zeilenabstand ebenfalls vergrößert.

Die Konsolenmeldungen kommen sehr wahrscheinlich vom Terminfeed, den es noch nicht gibt. Die Seite fängt diesen Fehler ab und zeigt stattdessen den Hinweis mit Link zu paterbrown.com. Das ist so gewollt, bis der Feed eingerichtet ist.

## User

Found issues — fixing…

## Assistant

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Ich habe korrigiert, dass Seitentitel, Canonical und Strukturdaten beim Seitenwechsel auf dem Stand der Startseite blieben. Die erneute Prüfung läuft noch.

Jetzt werden sie bei jedem Seitenwechsel, beim Laden des Terminfeeds und beim Umschalten des Artikelautors neu gesetzt. Die Formatseite bekommt damit das Canonical auf paterbrown.com/live-hoerspiel/, und der Kernartikel bekommt seine eigenen Strukturdaten: den Artikel und die drei Fragen.

