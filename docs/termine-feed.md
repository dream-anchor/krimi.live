# Terminfeed – Vorschlag für paterbrown.com

Stand: paterbrown.com bietet nach unserem Kenntnisstand keinen öffentlichen JSON-Endpunkt. [PRÜFEN: Endpunkt vorhanden?]
Vorschlag: `https://paterbrown.com/api/termine.json`, erzeugt aus derselben Datenquelle wie die 48 TheaterEvent-Einträge im JSON-LD von /termine/.

## Format
```json
{
  "generated": "2026-10-27T09:00:00+01:00",
  "termine": [
    {
      "id": "stadt-jjjj-mm-tt",
      "startDate": "JJJJ-MM-TTTHH:MM:00+01:00",
      "doorTime":  "JJJJ-MM-TTTHH:MM:00+01:00",
      "timeZone": "Europe/Berlin",
      "city": "Stadt",
      "venue": "Spielstätte (Saal)",
      "country": "DE",
      "ticketUrl": "https://…",
      "priceFrom": 35.40,
      "currency": "EUR",
      "status": "EventScheduled"
    }
  ]
}
```
Regeln: startDate und doorTime mit Zeitzonen-Offset, doorTime vor startDate, Zürich mit "timeZone": "Europe/Zurich" und "currency": "CHF".
Header: `Access-Control-Allow-Origin: https://krimi.live`, `Cache-Control: max-age=900`.

## Einbindung auf krimi.live
1. Build (Astro): Feed abrufen, nur künftige Termine, sortiert; daraus Feed-Block und TheaterEvent-JSON-LD erzeugen. Täglicher Rebuild per Cloudflare Deploy Hook (Cron).
2. Fallback: Ist der Feed nicht erreichbar, bricht der Build nicht ab. Der Block zeigt dann nur den Hinweis und den Button „Alle Termine“ → paterbrown.com/termine/, ohne TheaterEvent.
3. Platzhalter im Text: termine_anzahl, letzter_termin_monat_jahr, naechster_termin – werden beim Build ersetzt; fehlt der Feed, entfällt der jeweilige Satz.
