import { FEED_URL } from '../data/config';

/** Ein Termin aus dem Feed, normalisiert. Keine Termine im Code – nur, was der Feed liefert. */
export interface Termin {
  start: Date; startDate: string; doorTime: string | null;
  wd: string; dt: string; t: string;
  city: string; venue: string; country: string; url: string;
  price?: number; currency?: string;
}
export type Feed = { ok: true; events: Termin[] } | { ok: false; events: [] };

function norm(e: any): Termin | null {
  const s = e.startDate || e.start || e.datum; if (!s) return null;
  const d = new Date(s); if (isNaN(+d)) return null;
  const tz = e.timeZone || 'Europe/Berlin';
  const wd = new Intl.DateTimeFormat('de-DE', { weekday: 'short', timeZone: tz }).format(d).replace('.', '').toUpperCase();
  const dt = new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: tz }).format(d);
  const t = new Intl.DateTimeFormat('de-DE', { hour: '2-digit', minute: '2-digit', timeZone: tz }).format(d);
  return { start: d, startDate: s, doorTime: e.doorTime || null, wd, dt, t,
    city: e.city || e.stadt || '', venue: e.venue || e.spielstaette || (e.location && e.location.name) || '',
    country: e.country || e.land || '', url: e.ticketUrl || e.offerUrl || e.url || 'https://paterbrown.com/termine/',
    price: e.priceFrom ?? e.preisAb, currency: e.currency || e.waehrung };
}

async function load(): Promise<Feed> {
  try {
    const r = await fetch(FEED_URL, { headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(8000) });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const j = await r.json();
    const list: any[] = Array.isArray(j) ? j : (j.termine || j.events || []);
    const now = new Date();
    const events = list.map(norm).filter((e): e is Termin => !!e && e.start >= now).sort((a, b) => +a.start - +b.start);
    if (!events.length) throw new Error('keine künftigen Termine');
    return { ok: true, events };
  } catch (err) {
    // Fallback: Build bricht nicht ab, der Block zeigt nur den Hinweis und den Link zu paterbrown.com/termine/.
    console.warn(`[termine] Feed ${FEED_URL} nicht verfügbar (${(err as Error).message}) – Fallback aktiv.`);
    return { ok: false, events: [] };
  }
}

let cache: Promise<Feed> | undefined;
/** Einmal pro Build abrufen. */
export const getFeed = () => (cache ??= load());

/** Platzhalter für den Fließtext: {{termine_anzahl}}, {{letzter_termin_monat_jahr}}, {{naechster_termin}} */
export function platzhalter(f: Feed) {
  if (!f.ok) return null;
  const first = f.events[0], last = f.events[f.events.length - 1];
  return {
    termine_anzahl: f.events.length,
    letzter_termin_monat_jahr: new Intl.DateTimeFormat('de-DE', { month: 'long', year: 'numeric', timeZone: 'Europe/Berlin' }).format(last.start),
    naechster_termin: `${first.dt} ${first.city}`,
  };
}
