// www.krimi.live → krimi.live (301), Pfad und Query bleiben erhalten.
// Läuft vor den statischen Dateien; alle anderen Anfragen gehen unverändert weiter.
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === 'www.krimi.live') {
    url.hostname = 'krimi.live';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
