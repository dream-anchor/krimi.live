// Qualitätstor für dist/: Title ≤ 60, Description ≤ 155, genau ein H1, Canonical, lang=de,
// FAQPage-Fragen/Antworten wortgleich mit dem sichtbaren Text, keine Google-Fonts-Verbindung.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const files = [];
const walk = d => readdirSync(d).forEach(f => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); });
walk('dist');
const strip = s => s.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();
let fail = 0;
const err = (f, m) => { fail++; console.error(`✗ ${f}: ${m}`); };

for (const f of files) {
  const h = readFileSync(f, 'utf8');
  const title = strip(h.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '');
  const desc = (h.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '').replace(/&amp;/g, '&');
  if (!title || title.length > 60) err(f, `Title ${title.length} Zeichen`);
  if (!desc || desc.length > 155) err(f, `Description ${desc.length} Zeichen`);
  if ((h.match(/<h1[\s>]/g) || []).length !== 1) err(f, 'nicht genau ein H1');
  if (!/<link rel="canonical" href="https:\/\//.test(h)) err(f, 'Canonical fehlt');
  if (!/<html lang="de"/.test(h)) err(f, 'lang=de fehlt');
  if (/fonts\.(googleapis|gstatic)\.com|unpkg\.com/.test(h)) err(f, 'externe Schrift-/Icon-Quelle');
  const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  const faq = ld['@graph'].find(n => n['@type'] === 'FAQPage');
  if (faq) {
    const qs = [...h.matchAll(/<h3 class="q[^"]*"[^>]*>([\s\S]*?)<\/h3>\s*<p class="a[^"]*"[^>]*>([\s\S]*?)<\/p>/g)].map(m => [strip(m[1]), strip(m[2])]);
    if (qs.length !== faq.mainEntity.length) err(f, `FAQ: ${qs.length} sichtbar, ${faq.mainEntity.length} im Schema`);
    faq.mainEntity.forEach((q, i) => { if (!qs[i] || qs[i][0] !== q.name || qs[i][1] !== q.acceptedAnswer.text) err(f, `FAQ ${i + 1} weicht ab`); });
  }
  console.log(`✓ ${f.replace('dist', '') || '/'}  ${title.length}/${desc.length}  ${ld['@graph'].map(n => n['@type']).join(', ')}`);
}
const sm = readFileSync('dist/sitemap-0.xml', 'utf8');
if (sm.includes('/formate/pater-brown/')) err('sitemap', 'Formatseite (fremdes Canonical) in der Sitemap');
process.exit(fail ? 1 : 0);
