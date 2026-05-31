// Serverless function (Vercel) — iscrive il contatto alla lista Brevo
// e sblocca il download della guida. La API key sta nelle env di Vercel,
// mai nel client: BREVO_API_KEY, BREVO_LIST_ID.

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);
  if (!apiKey || !listId) {
    return res.status(500).json({ error: 'Configurazione mancante' });
  }

  // Body: Vercel parsa il JSON in req.body; gestiamo anche string grezza.
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  const nome = String(body.nome || '').trim().slice(0, 100);
  const email = String(body.email || '').trim().toLowerCase().slice(0, 150);
  const azienda = String(body.azienda || '').trim().slice(0, 120);
  const consenso = body.consenso === true || body.consenso === 'on' || body.consenso === 'true';
  const honeypot = String(body._gotcha || '').trim();

  // Bot: campo trappola compilato -> finto ok, nessuna iscrizione.
  if (honeypot) return res.status(200).json({ ok: true });

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) return res.status(400).json({ error: 'Email non valida' });
  if (!consenso) return res.status(400).json({ error: 'Consenso privacy obbligatorio' });

  const endpoint = 'https://api.brevo.com/v3/contacts';
  const headers = {
    'api-key': apiKey,
    'content-type': 'application/json',
    accept: 'application/json',
  };

  const attributes = {};
  if (nome) attributes.NOME = nome;
  if (azienda) attributes.AZIENDA = azienda;

  const createContact = (withAttributes) =>
    fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true, // se esiste già, lo aggiorna e lo aggiunge alla lista
        ...(withAttributes && Object.keys(attributes).length ? { attributes } : {}),
      }),
    });

  try {
    let resp = await createContact(true);

    // 400 su attributo inesistente: ritenta senza attributi così l'email
    // viene comunque catturata (gli attributi NOME/AZIENDA vanno creati su Brevo).
    if (resp.status === 400 && Object.keys(attributes).length) {
      resp = await createContact(false);
    }

    // 201 creato, 204 aggiornato: entrambi ok.
    if (resp.ok || resp.status === 204) {
      return res.status(200).json({ ok: true });
    }

    const detail = await resp.text().catch(() => '');
    console.error('Brevo error', resp.status, detail);
    return res.status(502).json({ error: 'Iscrizione non riuscita' });
  } catch (err) {
    console.error('Subscribe exception', err);
    return res.status(500).json({ error: 'Errore interno' });
  }
};
