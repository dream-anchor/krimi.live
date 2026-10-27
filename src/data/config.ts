/**
 * Build-Schalter. Alle Werte kommen aus Umgebungsvariablen (Cloudflare Pages → Settings → Environment variables).
 *
 * TERMINE_FEED_URL   Feed-Adresse (Vorschlag, siehe docs/termine-feed.md)
 * SHOW_PRUEFEN       "false" blendet die [PRÜFEN]-Marken aus (vor dem Launch abschalten)
 * ARTIKEL_AUTOR      "offen" | "Antoine Monot" | "Stefanie Sick"
 * FEED_VORSCHAU      "true" zeigt leere Platzhalterzeilen, solange der Feed fehlt (nur Vorschau)
 */
const env = import.meta.env;

export const BASE = 'https://krimi.live';
export const FEED_URL: string = env.TERMINE_FEED_URL || 'https://paterbrown.com/api/termine.json';
export const SHOW_PRUEFEN: boolean = (env.SHOW_PRUEFEN ?? 'true') !== 'false';
export const FEED_VORSCHAU: boolean = env.FEED_VORSCHAU === 'true';

const autor = env.ARTIKEL_AUTOR || 'offen';
export const ARTIKEL_AUTOR: 'offen' | 'Antoine Monot' | 'Stefanie Sick' =
  autor === 'Antoine Monot' || autor === 'Stefanie Sick' ? autor : 'offen';

export const TERMINE_URL = 'https://paterbrown.com/termine/';
export const FORMAT_URL_EXTERN = 'https://paterbrown.com/live-hoerspiel/';
