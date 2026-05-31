// Serverless function (Vercel) — serve il PDF della guida SOLO con un token
// valido rilasciato da /api/subscribe dopo l'iscrizione. Il file vive in
// /api/assets (non servito staticamente da Vercel), quindi il link diretto
// non esiste: l'unico modo di scaricarlo e passare di qui con un token firmato.

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

function verifyToken(token, secret) {
  if (!token || typeof token !== 'string' || !token.includes('.')) return false;
  const [payload, sig] = token.split('.');
  const expected = crypto.createHmac('sha256', secret).update(payload).digest('base64url');
  // Confronto a tempo costante per evitare timing attack
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return false;
  try {
    const { exp } = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    return typeof exp === 'number' && Date.now() < exp;
  } catch {
    return false;
  }
}

module.exports = (req, res) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const secret = process.env.BREVO_API_KEY;
  if (!secret) return res.status(500).json({ error: 'Configurazione mancante' });

  const token = (req.query && req.query.token) || '';
  if (!verifyToken(token, secret)) {
    return res.status(403).json({ error: 'Accesso non autorizzato. Compila il form per scaricare la guida.' });
  }

  const filePath = path.join(__dirname, 'assets', 'guida-ai-in-azienda-2026.pdf');
  let pdf;
  try {
    pdf = fs.readFileSync(filePath);
  } catch (err) {
    console.error('PDF non trovato', err);
    return res.status(500).json({ error: 'File non disponibile' });
  }

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="Guida-AI-in-Azienda-2026.pdf"');
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).send(pdf);
};
