import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Ein Datensatz pro Stück. Ein neues Stück = eine neue JSON-Datei in src/content/formate/, kein neuer Code.
 * Jede Angabe muss belegt sein; Ungeprüftes trägt `pruefen` (Redaktionsmarke, steht nie im Schema).
 */
const mitPruefung = z.object({ text: z.string(), pruefen: z.string().optional() });

const bild = z.object({
  datei: z.string(),            // Basisname unter /public/images/<stück>/, Varianten -768/-1200 und Original
  breite: z.number(), hoehe: z.number(),
  alt: z.string(),
  credit: z.string(),           // Pflicht: Fotocredit je Bild
});

const formate = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/formate' }),
  schema: z.object({
    name: z.string(),                       // „Pater Brown“
    titel: z.string(),                      // „Pater Brown – Das Live-Hörspiel“
    untertitel: z.string(),                 // „Das Live-Hörspiel“
    status: z.enum(['laeuft', 'angekuendigt', 'abgespielt']),
    reihenfolge: z.number().default(0),
    premiere: z.string().optional(),        // ISO-Datum, nur wenn belegt
    spielzeitBis: z.string().optional(),    // ISO-Datum, nur wenn belegt
    seo: z.object({ title: z.string().max(60), desc: z.string().max(155) }),
    overline: z.string(),
    vorlage: z.string(),                    // „Nach G. K. Chesterton · zwei Fälle an einem Abend“
    teile: z.array(z.object({ label: z.string(), titel: z.string() })).default([]),
    teilePruefen: z.string().optional(),
    teaser: z.string(),                     // Startseite: „Das Format der Saison“ / Karte
    worum: z.string(),
    ensemble: z.array(z.object({ name: z.string(), rolle: z.string() })),
    ensemblePruefen: z.string().optional(),
    ensembleHinweis: mitPruefung.optional(),
    credits: z.array(z.string()).default([]),
    ablauf: mitPruefung,
    fakten: z.array(z.string()).default([]), // für llms.txt
    links: z.object({
      termine: z.string().url(),            // vollständige Terminliste mit Tickets
      website: z.string().url().optional(), // Stückseite
      websiteText: z.string().optional(),   // sprechender Linktext
      canonical: z.string().url().optional(), // gesetzt → Formatseite ist nicht kanonisch, nicht in der Sitemap
    }),
    feed: z.object({ url: z.string().url(), name: z.string() }).optional(),
    bilder: z.object({ kopf: bild.optional(), szene: bild.optional(), klang: bild.optional() }).default({}),
  }),
});

export const collections = { formate };
