'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { sendContact } from '../app/kontakt/actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-primary w-full md:w-auto" disabled={pending}>
      {pending ? 'Senden…' : 'Nachricht senden'}
    </button>
  );
}

const initialState = { ok: false, message: '' };

export default function ContactForm() {
  const [state, formAction] = useFormState(sendContact, initialState);

  return (
    <form action={formAction} className="space-y-4" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor="name" className="text-sm font-semibold text-slate-800">
            Name*
          </label>
          <input id="name" name="name" type="text" required className="w-full rounded-lg" placeholder="Vor- und Nachname" />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-semibold text-slate-800">
            E-Mail*
          </label>
          <input id="email" name="email" type="email" required className="w-full rounded-lg" placeholder="name@example.de" />
        </div>
      </div>
      <div className="space-y-1">
        <label htmlFor="subject" className="text-sm font-semibold text-slate-800">
          Betreff
        </label>
        <input id="subject" name="subject" type="text" className="w-full rounded-lg" placeholder="Optional" />
      </div>
      <div className="space-y-1">
        <label htmlFor="message" className="text-sm font-semibold text-slate-800">
          Nachricht*
        </label>
        <textarea id="message" name="message" required rows={4} className="w-full rounded-lg" placeholder="Ihr Anliegen" />
      </div>
      <div className="hidden">
        <label htmlFor="website">Lassen Sie dieses Feld leer</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="flex items-start gap-3">
        <input id="consent" name="consent" type="checkbox" required className="mt-1" />
        <label htmlFor="consent" className="text-sm text-slate-700 leading-relaxed">
          Ich habe die Datenschutzerklärung gelesen und bin mit der Verarbeitung meiner Angaben zur Beantwortung meiner Anfrage
          einverstanden (Art. 6 Abs. 1 lit. b/f DSGVO).
        </label>
      </div>
      {state.message && (
        <div className={`rounded-lg px-4 py-3 text-sm ${state.ok ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {state.message}
        </div>
      )}
      <SubmitButton />
    </form>
  );
}
