# krimi.live – Website

Statische Astro-Site nach dem Claude-Design-Prototyp `design/project/krimi.live Website.dc.html` und dem krimi.live Design System (Tokens 1:1 aus `design/project/_ds/…/tokens/`). Die Inhalte sind ohne JavaScript lesbar, die Seite liefert kein Client-JS aus.

```bash
npm install
npm run build   # → dist/
npm run check   # Qualitätstor: Title ≤ 60, Description ≤ 155, ein H1, Canonical, lang=de, FAQ-Schema = sichtbarer Text
npm run dev
```

## Seiten
| Pfad | Datei | Besonderheit |
| --- | --- | --- |
| `/` | `src/pages/index.astro` | Feed-Block (3 Termine), FAQPage, TheaterEvent aus dem Feed |
| `/formate/<stück>/` | `src/pages/formate/[slug].astro` + `src/content/formate/<stück>.json` | eine Vorlage für alle Stücke; mit `links.canonical` nicht in der Sitemap |
| `/hintergruende/was-ist-ein-live-hoerspiel/` | `…/index.astro` | Article (Datum aus Git), FAQPage (3 Fragen) |
| `/ueber-uns/` · `/impressum/` · `/datenschutz/` | | Rechtstexte als Entwurf, „anwaltlich zu prüfen“ |

## Build-Variablen (Cloudflare Pages → Environment variables)
| Variable | Standard | Zweck |
| --- | --- | --- |
| `FEED_URL_<STÜCK>` | aus dem Datensatz (`feed.url`) | überschreibt den Feed eines Stücks, z. B. `FEED_URL_PATER_BROWN` (Format: `docs/termine-feed.md`) |
| `SHOW_PRUEFEN` | `true` | `false` blendet die Prüfmarken aus – erst nach Klärung aller Punkte |
| `ARTIKEL_AUTOR` | `offen` | `Antoine Monot` oder `Stefanie Sick`, sobald freigegeben |
| `FEED_VORSCHAU` | `false` | Platzhalterzeilen ohne Feed (nur Vorschau) |

Cloudflare Pages: Build-Befehl `npm run build`, Ausgabeordner `dist`. Täglicher Rebuild über einen Deploy Hook (Cron), damit der Feed-Block aktuell bleibt.

`design/` enthält den Claude-Design-Export (Prototyp, Projektakte, Design System, Chat) als Referenz.

## Ein neues Stück anlegen
1. `src/content/formate/<stück>.json` nach dem Muster von `pater-brown.json` anlegen, `status: "angekuendigt"`. Jede Angabe belegen; Ungeprüftes in die `…pruefen`-Felder.
2. Sobald es Termine gibt: `feed.url` eintragen, `status: "laeuft"`.
3. Fertig. Startseite („Jetzt auf der Bühne“, gemischte Terminliste mit Stücktitel), Navigation, Footer, Sitemap und `/llms.txt` stellen sich beim nächsten Build selbst um.
4. Spielt es nicht mehr: `status: "abgespielt"` – die Formatseite bleibt online, ohne Termine.

## Termine
Kein Termin steht im Code. `src/lib/feed.ts` lädt pro Stück den Feed einmal pro Build, filtert auf künftige Termine, sortiert und führt mehrere Stücke zusammen. Abgesagte Termine (`status`/`eventStatus` mit „Cancelled“) bleiben sichtbar markiert und gehen als `EventCancelled` ins Schema. Unter der Liste steht der Datenstand (`generated` aus dem Feed, sonst Abrufzeit). Ist der Feed nicht erreichbar, bricht der Build nicht ab: Der Block zeigt dann den Hinweis mit Link zu paterbrown.com/termine/, die Sätze mit Terminanzahl und Tourende entfallen, und es wird kein TheaterEvent erzeugt.

## Abweichungen vom Prototyp
- Hash-Routen (`#/ueber-uns/`) → echte Pfade mit Schrägstrich am Ende.
- Schriften lokal über `@fontsource` statt Google Fonts; Lucide-Icons beim Build inline statt per unpkg-Maske.
- Article-Datum aus der Git-Historie (`src/lib/gitdate.ts`) statt „Datum aus dem Build“.
- Ergänzt: Skip-Link, `aria-current` in der Navigation, Open-Graph-Tags, `_headers`, Favicon (Platzhalter: roter Punkt der Wortmarke).

## Offene Prüfpunkte (Projektakte)
01 Gesamtabgleich der Fakten gegen paterbrown.com · 02 Programm an jedem Abend? · 03 Preise · 04 Autor des Kernartikels · 05 TV-Bezug „Ein Fall für zwei“ · 06 „ohne Kostümwechsel und ohne Bühnenbild“ · 07 Firmensitz München/Grünwald · 08 Terminanzahl (48) · 09 Impressum · 10 Datenschutz · 11 JSON-Endpunkt bei paterbrown.com · 12 sameAs-URLs der Personen (`src/lib/schema.ts`) · 13 Linkziele erreichbar? · 14 Textdoppelung zu paterbrown.com.

Vor dem Launch außerdem: Messdienst festlegen (cookielos), IndexNow-Key unter `/<key>.txt`, Search Console und Bing Webmaster Tools.
