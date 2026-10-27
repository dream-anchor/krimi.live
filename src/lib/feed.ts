import type { Format } from './formate';

/** Ein Termin aus einem Feed, normalisiert. Keine Termine im Code – nur, was die Feeds der Stücke liefern. */
export interface Termin {
  start: Date; startDate: string; doorTime: string | null;
  wd: string; dt: string; t: string;
  city: string; venue: string; country: string; url: string;
  price?: number; currency?: string;
  abgesagt: boolean; verschoben: boolean;
  format: { slug: string; name: string; titel: string };
}
export type Feed =
  | { ok: true; events: Termin[]; stand: Date; quelle: string }
  | { ok: false; events: []; stand: null; quelle: string };

const STATUS = (s: unknown) => String(s ?? '').toLowerCase();

function norm(e: any, f: Format): Termin | null {
  const s = e.startDate || e.start || e.datum; if (!s) return null;
  const d = new Date(s); if (isNaN(+d)) return null;
  const tz = e.timeZone || 'Europe/Berlin';
  const wd = new Intl.DateTimeFormat('de-DE', { weekday: 'short', timeZone: tz }).format(d).replace('.', '').toUpperCase();
  const dt = new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: tz }).format(d);
  const t = new Intl.DateTimeFormat('de-DE', { hour: '2-digit', minute: '2-digit', timeZone: tz }).format(d);
  const st = STATUS(e.status || e.eventStatus);
  return { start: d, startDate: s, doorTime: e.doorTime || null, wd, dt, t,
    city: e.city || e.stadt || '', venue: e.venue || e.spielstaette || (e.location && e.location.name) || '',
    country: e.country || e.land || '', url: e.ticketUrl || e.offerUrl || e.url || f.data.links.termine,
    price: e.priceFrom ?? e.preisAb, currency: e.currency || e.waehrung,
    abgesagt: st.includes('cancel') || st.includes('abgesagt'),
    verschoben: st.includes('postpon') || st.includes('rescheduled') || st.includes('verschoben'),
    format: { slug: f.id, name: f.data.name, titel: f.data.titel } };
}

/** FEED_URL_PATER_BROWN usw. überschreibt die Feed-Adresse eines Stücks (Test, Staging). */
function feedUrl(f: Format) {
  const key = 'FEED_URL_' + f.id.toUpperCase().replace(/[^A-Z0-9]+/g, '_');
  return process.env[key] || (import.meta.env[key] as string | undefined) || f.data.feed?.url;
}

async function load(f: Format): Promise<Feed> {
  const url = feedUrl(f);
  if (!url) return { ok: false, events: [], stand: null, quelle: '' };
  try {
    const r = await fetch(url, { headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(8000) });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const j = await r.json();
    const list: any[] = Array.isArray(j) ? j : (j.termine || j.events || []);
    const now = new Date();
    const events = list.map(e => norm(e, f)).filter((e): e is Termin => !!e && e.start >= now).sort((a, b) => +a.start - +b.start);
    if (!events.length) throw new Error('keine künftigen Termine');
    const gen = j.generated ? new Date(j.generated) : null;
    return { ok: true, events, stand: gen && !isNaN(+gen) ? gen : now, quelle: url };
  } catch (err) {
    // Fallback: Build bricht nicht ab; ohne Feed zeigt der Block den Hinweis und den Link zur Terminseite des Stücks.
    console.warn(`[termine] ${f.id}: Feed ${url} nicht verfügbar (${(err as Error).message}) – Fallback aktiv.`);
    return { ok: false, events: [], stand: null, quelle: url };
  }
}

const cache = new Map<string, Promise<Feed>>();
/** Einmal pro Build und Stück abrufen. */
export const getFeed = (f: Format) => { if (!cache.has(f.id)) cache.set(f.id, load(f)); return cache.get(f.id)!; };

/** Termine mehrerer Stücke zusammengeführt. ok, sobald mindestens ein Feed Termine liefert. */
export async function getFeeds(formate: Format[]): Promise<Feed> {
  const feeds = await Promise.all(formate.map(getFeed));
  const ok = feeds.filter((f): f is Extract<Feed, { ok: true }> => f.ok);
  if (!ok.length) return { ok: false, events: [], stand: null, quelle: '' };
  const events = ok.flatMap(f => f.events).sort((a, b) => +a.start - +b.start);
  const stand = new Date(Math.min(...ok.map(f => +f.stand)));
  return { ok: true, events, stand, quelle: ok.map(f => f.quelle).join(', ') };
}

const tz = 'Europe/Berlin';
export const standText = (d: Date) =>
  `${new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: tz }).format(d)}, ${new Intl.DateTimeFormat('de-DE', { hour: '2-digit', minute: '2-digit', timeZone: tz }).format(d)} Uhr`;

/** Platzhalter für den Fließtext: {{termine_anzahl}}, {{letzter_termin_monat_jahr}}, {{naechster_termin}} (ohne abgesagte Termine) */
export function platzhalter(f: Feed) {
  if (!f.ok) return null;
  const ev = f.events.filter(e => !e.abgesagt);
  if (!ev.length) return null;
  const first = ev[0], last = ev[ev.length - 1];
  return {
    termine_anzahl: ev.length,
    letzter_termin_monat_jahr: new Intl.DateTimeFormat('de-DE', { month: 'long', year: 'numeric', timeZone: tz }).format(last.start),
    naechster_termin: `${first.dt} ${first.city}`,
  };
}
