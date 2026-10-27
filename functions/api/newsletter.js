// Cloudflare Pages Function: POST /api/newsletter
// Trägt eine E-Mail-Adresse per Double-Opt-in in die Brevo-Liste von krimi.live ein.
// Env (Cloudflare Pages → Settings → Variables): BREVO_API_KEY (Secret), BREVO_LIST_ID, BREVO_DOI_TEMPLATE_ID
// Ohne JavaScript nutzbar: das Formular postet direkt hierher, die Antwort ist ein 303-Redirect.

const ZIEL = { ok: '/newsletter/danke/', fehler: '/newsletter/fehler/' };
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function onRequestPost({ request, env }) {
  const origin = new URL(request.url).origin;
  const weiter = (pfad) => Response.redirect(origin + pfad, 303);
  let form;
  try { form = await request.formData(); } catch { return weiter(ZIEL.fehler); }

  if (form.get('website')) return weiter(ZIEL.ok); // Honeypot: Bots bekommen „danke“, es passiert nichts
  const email = String(form.get('email') || '').trim().toLowerCase();
  if (!EMAIL.test(email) || email.length > 254 || form.get('einwilligung') !== 'ja') return weiter(ZIEL.fehler);
  if (!env.BREVO_API_KEY) return weiter(ZIEL.fehler);

  const r = await fetch('https://api.brevo.com/v3/contacts/doubleOptinConfirmation', {
    method: 'POST',
    headers: { 'api-key': env.BREVO_API_KEY, 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({
      email,
      includeListIds: [Number(env.BREVO_LIST_ID || 11)],
      templateId: Number(env.BREVO_DOI_TEMPLATE_ID || 8),
      redirectionUrl: origin + '/newsletter/bestaetigt/',
    }),
  });
  // 201 = Bestätigungs-Mail verschickt, 204 = Kontakt existiert schon (gleiche Rückmeldung, kein Datenleck)
  return weiter(r.ok ? ZIEL.ok : ZIEL.fehler);
}

export const onRequestGet = () => new Response('Method Not Allowed', { status: 405, headers: { allow: 'POST' } });
