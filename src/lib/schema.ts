import { BASE } from '../data/config';
import type { PageMeta } from '../data/meta';
import type { Faq } from '../data/faq';
import type { Feed } from './feed';

// [PRÜFEN] sameAs-URLs exakt aus dem JSON-LD von paterbrown.com übernehmen
export const PERSONS = {
  monot: { '@type': 'Person', '@id': BASE + '/#antoine-monot', name: 'Antoine Monot', sameAs: ['https://de.wikipedia.org/wiki/Antoine_Monot,_Jr.'] },
  mues: { '@type': 'Person', '@id': BASE + '/#wanja-mues', name: 'Wanja Mues', sameAs: ['https://de.wikipedia.org/wiki/Wanja_Mues'] },
  sick: { '@type': 'Person', '@id': BASE + '/#stefanie-sick', name: 'Stefanie Sick', jobTitle: 'Künstlerische Leitung & Creative Producerin' },
};

// [PRÜFEN] Sitz (München oder Grünwald) und Anschrift laut Impressum von paterbrown.com ergänzen
const DREAM_ANCHOR = { '@type': 'Organization', '@id': BASE + '/#dream-anchor', name: 'Dream & Anchor Handelsgesellschaft mbH', telephone: '+49 89 909015 3943' };

export function baseGraph(m: PageMeta): any[] {
  return [
    { '@type': 'Organization', '@id': BASE + '/#org', name: 'krimi.live', url: BASE + '/',
      parentOrganization: DREAM_ANCHOR,
      sameAs: ['https://paterbrown.com', 'https://www.instagram.com/paterbrown.live/'] },
    { '@type': 'WebSite', '@id': BASE + '/#site', url: BASE + '/', name: 'krimi.live', inLanguage: 'de-DE', publisher: { '@id': BASE + '/#dream-anchor' } },
    { '@type': 'WebPage', '@id': BASE + m.path, url: BASE + m.path, name: m.title, description: m.desc, isPartOf: { '@id': BASE + '/#site' }, inLanguage: 'de-DE' },
  ];
}

export const faqPage = (m: PageMeta, faq: Faq[]) => ({
  '@type': 'FAQPage', '@id': BASE + m.path + '#faq',
  mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

/** TheaterEvent nur aus Feeddaten (die drei sichtbaren Termine). */
export function theaterEvents(f: Feed) {
  if (!f.ok) return [];
  return f.events.slice(0, 3).map(e => {
    const ev: any = { '@type': 'TheaterEvent', name: 'Pater Brown – Das Live-Hörspiel', startDate: e.startDate,
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode', eventStatus: 'https://schema.org/EventScheduled',
      location: { '@type': 'Place', name: e.venue, address: { '@type': 'PostalAddress', addressLocality: e.city, addressCountry: e.country || undefined } },
      performer: [PERSONS.monot, PERSONS.mues], organizer: { '@id': BASE + '/#dream-anchor' },
      offers: { '@type': 'Offer', url: e.url } };
    if (e.doorTime) ev.doorTime = e.doorTime;
    if (e.price != null && e.currency) { ev.offers.price = e.price; ev.offers.priceCurrency = e.currency; }
    return ev;
  });
}
