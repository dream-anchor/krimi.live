# Technik krimi.live

- Astro (statisch, kein Client-JS für Inhalte), Deployment auf Cloudflare Pages
- Seiten: / · /formate/pater-brown/ · /hintergruende/was-ist-ein-live-hoerspiel/ · /ueber-uns/ · /impressum/ · /datenschutz/
- Je Seite: <html lang="de">, eindeutiger <title> (≤ 60 Zeichen), Meta-Description (≤ 155), ein H1, Canonical
- /formate/pater-brown/: <link rel="canonical" href="https://paterbrown.com/live-hoerspiel/">; nicht in die Sitemap aufnehmen (kanonisch fremd)
- JSON-LD als @graph: Organization (#org), WebSite (#site), WebPage; Start + Kernartikel: FAQPage, beim Build aus denselben Datenobjekten wie der sichtbare Text erzeugt; Kernartikel: Article mit author (Person), datePublished/dateModified aus Git
- Schriften lokal ausliefern (@fontsource oder WOFF2 im Repo), keine Google-Fonts-CDN im Livebetrieb
- Messung: Cloudflare Web Analytics oder ein anderer cookieloser Dienst, ohne Banner
- Sitemap: @astrojs/sitemap; IndexNow-Key unter /<key>.txt
- Launch: DNS bei Cloudflare, HTTPS erzwingen, www → Apex 301 (_redirects), Search Console (Domain-Property), Bing Webmaster Tools, Sitemap einreichen, IndexNow-Ping
