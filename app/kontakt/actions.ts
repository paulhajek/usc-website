'use server';

import { headers } from 'next/headers';
import { rateLimit } from '../../lib/rate-limit';

function validateEmail(value: string) {
  return /.+@.+\..+/.test(value);
}

export type ContactResult = { ok: boolean; message: string };

export async function sendContact(formData: FormData): Promise<ContactResult> {
  const honeypot = formData.get('website');
  if (typeof honeypot === 'string' && honeypot.trim().length > 0) {
    return { ok: true, message: 'Anfrage ignoriert (Spam-Schutz).' };
  }

  const name = (formData.get('name') || '').toString().trim();
  const email = (formData.get('email') || '').toString().trim();
  const subject = (formData.get('subject') || '').toString().trim();
  const message = (formData.get('message') || '').toString().trim();
  const consent = formData.get('consent') === 'on';

  if (!name || !email || !message || !consent) {
    return { ok: false, message: 'Bitte alle Pflichtfelder ausfüllen und Einwilligung bestätigen.' };
  }
  if (!validateEmail(email)) {
    return { ok: false, message: 'E-Mail-Adresse ist nicht gültig.' };
  }

  const ip = headers().get('x-forwarded-for') || 'local';
  if (!rateLimit(ip)) {
    return { ok: false, message: 'Zu viele Anfragen. Bitte in einer Minute erneut versuchen.' };
  }

  // Platzhalter: E-Mail Versand hier einfügen (SMTP / API) mit ENV Variablen
  console.info('Kontaktanfrage', { name, email, subject, message });

  return { ok: true, message: 'Vielen Dank. Wir melden uns zeitnah.' };
}
