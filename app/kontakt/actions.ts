'use server';

import { headers } from 'next/headers';
import { rateLimit } from '../../lib/rate-limit';

export type ContactState = { ok: boolean; message: string };

function isNonEmptyString(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0;
}

function toTrimmedString(v: FormDataEntryValue | null): string {
  return typeof v === 'string' ? v.trim() : '';
}

function validateEmail(value: string): boolean {
  // bewusst simpel/robust (kein Over-Engineering); reicht für Formularvalidierung
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clamp(value: string, maxLen: number): string {
  return value.length > maxLen ? value.slice(0, maxLen) : value;
}

function getClientIp(): string {
  const h = headers();

  // x-forwarded-for kann mehrere IPs enthalten → erste nehmen
  const xff = h.get('x-forwarded-for');
  if (isNonEmptyString(xff)) return xff.split(',')[0].trim();

  const realIp = h.get('x-real-ip');
  if (isNonEmptyString(realIp)) return realIp.trim();

  return 'unknown';
}

export async function sendContact(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot (Spam)
  const honeypot = formData.get('website');
  if (typeof honeypot === 'string' && honeypot.trim().length > 0) {
    // absichtlich "ok", damit Spam nicht erkennt, dass er gefiltert wurde
    return { ok: true, message: 'Vielen Dank. Wir melden uns zeitnah.' };
  }

  // Pflichtfelder
  const name = clamp(toTrimmedString(formData.get('name')), 120);
  const email = clamp(toTrimmedString(formData.get('email')).toLowerCase(), 254);
  const message = clamp(toTrimmedString(formData.get('message')), 4000);

  // Optional
  const subject = clamp(toTrimmedString(formData.get('subject')), 200);

  // Checkbox: HTML sendet meist "on" wenn angehakt
  const consentRaw = formData.get('consent');
  const consent = consentRaw === 'on' || consentRaw === 'true' || consentRaw === '1';

  if (!name || !email || !message) {
    return { ok: false, message: 'Bitte alle Pflichtfelder ausfüllen.' };
  }
  if (!consent) {
    return { ok: false, message: 'Bitte die Einwilligung bestätigen.' };
  }
  if (!validateEmail(email)) {
    return { ok: false, message: 'E-Mail-Adresse ist nicht gültig.' };
  }

  // Rate limit
  const ip = getClientIp();
  if (!rateLimit(ip)) {
    return { ok: false, message: 'Zu viele Anfragen. Bitte in 1 Minute erneut versuchen.' };
  }

  // TODO: hier echten Versand (SMTP/API) einbauen
  // WICHTIG: keine sensiblen Daten im Log in Produktion.
  console.info('Kontaktanfrage', {
    name,
    email,
    subject,
    messagePreview: message.slice(0, 200),
    ip,
  });

  return { ok: true, message: 'Vielen Dank. Wir melden uns zeitnah.' };
}