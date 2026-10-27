export interface PageMeta { path: string; title: string; desc: string; canonical?: string }

export const META = {
  start: { path: '/', title: 'krimi.live – Krimi live erleben | Live-Hörspiel & Bühne', desc: 'Krimis, die auf der Bühne entstehen: Hintergründe zum Live-Hörspiel und aktuelle Termine. Auf Tour: Pater Brown mit Antoine Monot und Wanja Mues.' },
  artikel: { path: '/hintergruende/was-ist-ein-live-hoerspiel/', title: 'Was ist ein Live-Hörspiel? Ablauf, Geräusche, Beispiel', desc: 'Ein Live-Hörspiel bringt das Hörspiel auf die Bühne: Stimmen, Geräusche und Musik entstehen vor Publikum. Ablauf, Unterschiede und ein Beispiel.' },
  ueber: { path: '/ueber-uns/', title: 'Über krimi.live – Betreiber und Team', desc: 'krimi.live ist das Magazin der Dream & Anchor Handelsgesellschaft mbH, Produzentin von „Pater Brown – Das Live-Hörspiel“. Team und Kontakt.' },
  impressum: { path: '/impressum/', title: 'Impressum – krimi.live', desc: 'Impressum von krimi.live, betrieben von der Dream & Anchor Handelsgesellschaft mbH.' },
  datenschutz: { path: '/datenschutz/', title: 'Datenschutz – krimi.live', desc: 'Datenschutzerklärung von krimi.live: Hosting, cookielose Messung, keine Tracker.' },
} satisfies Record<string, PageMeta>;
