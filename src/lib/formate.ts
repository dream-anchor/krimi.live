import { getCollection, type CollectionEntry } from 'astro:content';

export type Format = CollectionEntry<'formate'>;

const sortiert = (l: Format[]) => [...l].sort((a, b) => a.data.reihenfolge - b.data.reihenfolge || a.data.name.localeCompare(b.data.name, 'de'));

export const alleFormate = async () => sortiert(await getCollection('formate'));
/** Was auf der Bühne steht oder angekündigt ist – die Startseite zeigt nur diese. */
export const aktiveFormate = async () => (await alleFormate()).filter(f => f.data.status !== 'abgespielt');
export const laufendeFormate = async () => (await alleFormate()).filter(f => f.data.status === 'laeuft');

export const formatPfad = (f: Format) => `/formate/${f.id}/`;

export const STATUS_TEXT: Record<Format['data']['status'], string> = {
  laeuft: 'auf Tour',
  angekuendigt: 'angekündigt',
  abgespielt: 'abgespielt',
};

/** „paterbrown.com“, „paterbrown.com und beispiel.de“ – Herkunft der Termine für Hinweis und Datenstand. */
export function quellenText(formate: Format[]) {
  const n = [...new Set(formate.map(f => f.data.feed?.name || new URL(f.data.links.termine).hostname))];
  return n.length > 1 ? `${n.slice(0, -1).join(', ')} und ${n.at(-1)}` : (n[0] ?? '');
}

/** Ziel des Tickets-Buttons: bei einem Stück dessen Terminseite, sonst der Termin-Block der Startseite. */
export const ticketZiel = (laufend: Format[]) => (laufend.length === 1 ? laufend[0].data.links.termine : '/#termine');
