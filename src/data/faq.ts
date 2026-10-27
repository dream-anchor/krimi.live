/**
 * Eine Quelle für sichtbaren Text und FAQPage-JSON-LD – dadurch exakt deckungsgleich.
 * `pruefen` ist eine Redaktionsmarke und steht außerhalb der Antwort (nicht im Schema).
 */
export interface Faq { q: string; a: string; pruefen?: string }

const DAUER: Faq = { q: 'Wie lange dauert „Pater Brown – Das Live-Hörspiel“?', a: 'Etwa zwei Stunden, einschließlich 15 Minuten Pause.' };
const ALTER: Faq = { q: 'Ab welchem Alter ist die Vorstellung geeignet?', a: 'Empfohlen ab etwa 12 Jahren.' };

export const FAQ_START: Faq[] = [
  { q: 'Was ist ein Live-Hörspiel?', a: 'Ein Live-Hörspiel führt ein Hörspiel vor Publikum auf der Bühne auf. Schauspieler sprechen die Rollen, Geräusche und Musik entstehen im selben Moment. Bei „Pater Brown“ erzeugen Beatboxer alle Geräusche live mit Stimme und Loop-Station, ohne Playback.' },
  DAUER,
  { q: 'Welche Geschichten werden gespielt?', a: 'Pro Abend zwei Fälle nach G. K. Chesterton: „Das blaue Kreuz“ und „Die fallenden Brüder“.', pruefen: 'Programm' },
  { q: 'Wer steht auf der Bühne?', a: 'Antoine Monot spielt Pater Brown, Wanja Mues ist Erzähler und Flambeau. Je nach Abend sorgt ein Beatboxer (Marvelin, Hans Beatbox oder Eyota) für den Klang.' },
  ALTER,
  { q: 'Was kosten Tickets, und wo gibt es sie?', a: 'Tickets gibt es ab 35,40 € in Deutschland und ab CHF 65,40 in der Schweiz. Die Ticketlinks stehen bei den Terminen auf paterbrown.com.', pruefen: 'Preise' },
];

export const FAQ_ARTIKEL: Faq[] = [
  DAUER,
  ALTER,
  { q: 'Wie entstehen die Geräusche?', a: 'Bei „Pater Brown“ erzeugen Beatboxer alle Geräusche live mit der Stimme und schichten sie mit einer Loop-Station, ohne Playback.' },
];
