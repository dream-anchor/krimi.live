# Terminfeed

## Pater Brown (in Betrieb)
krimi.live nutzt die bestehende öffentliche API von paterbrown.com:
`https://paterbrown-api.antoine-dfc.workers.dev/api/tour-events` (Quelle: `paterbrown-api/src/routes/public.ts` im Repo paterbrown.com).

- Felder: `event_date` (YYYY-MM-DD), `city`, `venue`, `ticket_url`, `ticket_phone`, `is_active`.
- Gleiche Ticket-Regel wie paterbrown.com (`src/lib/constants.ts`): nur buchbare Event-URLs, Zürich → Ticketcorner, sonst VVK-Telefon, sonst wird der Termin nicht gezeigt.
- Die API liefert **keine Uhrzeit**. krimi.live zeigt deshalb nur das Datum, das Schema bekommt `startDate` als Datum ohne Uhrzeit. Kommt eine Uhrzeit (z. B. `start_time` mit Offset) dazu, übernimmt `src/lib/feed.ts` sie, sobald sie als `startDate` geliefert wird.

## Format für weitere Stücke
```json
{
  "generated": "2026-10-27T09:00:00+01:00",
  "termine": [
    {
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
`status` „EventCancelled“ markiert eine Absage (bleibt sichtbar, Schema `EventCancelled`), „EventPostponed“ eine Verschiebung.

## Einbindung
- Abruf einmal pro Build und Stück, nur künftige Termine, sortiert; täglicher Rebuild per Cloudflare Deploy Hook.
- Fällt ein Feed aus, bricht der Build nicht ab: Hinweis mit Link zur Terminseite, kein TheaterEvent.
