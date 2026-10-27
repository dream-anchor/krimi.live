/**
 * Build-Schalter. Alle Werte kommen aus Umgebungsvariablen (Cloudflare Pages → Settings → Environment variables).
 *
 * FEED_URL_<STUECK>  überschreibt die Feed-Adresse eines Stücks, z. B. FEED_URL_PATER_BROWN (Test, Staging)
 * SHOW_PRUEFEN       "false" blendet die [PRÜFEN]-Marken aus (vor dem Launch abschalten)
 * ARTIKEL_AUTOR      "offen" | "Antoine Monot" | "Stefanie Sick"
 * FEED_VORSCHAU      "true" zeigt leere Platzhalterzeilen, solange der Feed fehlt (nur Vorschau)
 */
const env = { ...import.meta.env, ...process.env } as Record<string, string | undefined>;

export const BASE = 'https://krimi.live';
export const SHOW_PRUEFEN: boolean = (env.SHOW_PRUEFEN ?? 'true') !== 'false';
export const FEED_VORSCHAU: boolean = env.FEED_VORSCHAU === 'true';
/** Newsletter-Formular nur, wenn der Brevo-Schlüssel beim Build vorhanden ist (Cloudflare Pages Secret). */
export const NEWSLETTER_AKTIV: boolean = !!env.BREVO_API_KEY || env.NEWSLETTER === 'an';

const autor = env.ARTIKEL_AUTOR || 'Stefanie Sick'; // entschieden am 27.10.2026
export const ARTIKEL_AUTOR: 'offen' | 'Antoine Monot' | 'Stefanie Sick' =
  autor === 'Antoine Monot' || autor === 'Stefanie Sick' ? autor : 'offen';

