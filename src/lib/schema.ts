import { BASE } from '../data/config';
import type { PageMeta } from '../data/meta';
import type { Faq } from '../data/faq';
import type { Termin } from './feed';
import type { Format } from './formate';

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

const PERSON_NACH_NAME = new Map(Object.values(PERSONS).map(p => [p.name, p]));
const EVENT_STATUS = (e: Termin) => 'https://schema.org/' + (e.abgesagt ? 'EventCancelled' : e.verschoben ? 'EventPostponed' : 'EventScheduled');

/** TheaterEvent nur aus Feeddaten, nur für die sichtbaren Termine. Ensemble aus dem Datensatz des Stücks. */
export function theaterEvents(events: Termin[], formate: Format[]) {
  const perf = new Map(formate.map(f => [f.id, f.data.ensemble.map(m => PERSON_NACH_NAME.get(m.name)).filter(Boolean)]));
  return events.map(e => {
    const ev: any = { '@type': 'TheaterEvent', name: e.format.titel, startDate: e.startDate,
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode', eventStatus: EVENT_STATUS(e),
      location: { '@type': 'Place', name: e.venue, address: { '@type': 'PostalAddress', addressLocality: e.city, addressCountry: e.country || undefined } },
      organizer: { '@id': BASE + '/#dream-anchor' },
      offers: { '@type': 'Offer', url: e.url } };
    const p = perf.get(e.format.slug); if (p?.length) ev.performer = p;
    if (e.doorTime) ev.doorTime = e.doorTime;
    if (e.price != null && e.currency) { ev.offers.price = e.price; ev.offers.priceCurrency = e.currency; }
    return ev;
  });
}
