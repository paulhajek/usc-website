import Link from 'next/link';
import { siteConfig } from '../../config/site';

export const metadata = { title: 'Datenschutzerklärung' };

const rights = [
  'Auskunft über verarbeitete personenbezogene Daten (Art. 15 DSGVO)',
  'Berichtigung unrichtiger Daten (Art. 16 DSGVO)',
  'Löschung (Art. 17 DSGVO) oder Einschränkung der Verarbeitung (Art. 18 DSGVO)',
  'Datenübertragbarkeit (Art. 20 DSGVO)',
  'Widerspruch gegen bestimmte Verarbeitungen (Art. 21 DSGVO)',
  'Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)'
];

export default function DatenschutzPage() {
  return (
    <div className="section">
      <div className="container-narrow space-y-6">
        <h1 className="text-3xl font-bold text-brand-dark" style={{ fontFamily: 'var(--font-heading)' }}>Datenschutzerklärung</h1>
        <div className="card p-6 space-y-4 text-sm text-slate-800 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">Verantwortlicher</h2>
            <p>
              {siteConfig.name}<br />
              {siteConfig.address.street}<br />
              {siteConfig.address.zip} {siteConfig.address.city}<br />
              E-Mail: {siteConfig.contact.email}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">Hosting</h2>
            <p>
              Die Website wird bei {siteConfig.hosting.provider} gehostet. Standort der Server: {siteConfig.hosting.location}.
              Alle Anfragen werden aus Sicherheitsgründen in Logfiles mit IP-Adresse, Zeitpunkt und User-Agent gespeichert und nach
              7 Tagen gelöscht (Platzhalter anpassen).
            </p>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem Betrieb).</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">Kontaktformular</h2>
            <p>
              Bei Nutzung des Formulars verarbeiten wir Name, E-Mail, Betreff (optional) und Nachricht zur Bearbeitung Ihrer Anfrage.
              Pflicht ist die Bestätigung der Datenschutzerklärung. Daten werden nur für diesen Zweck genutzt und nach Abschluss der
              Kommunikation gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) und Art. 6 Abs. 1 lit. f DSGVO.</p>
            <p>Spam-Schutz: Honeypot-Feld und einfaches Rate-Limiting; keine Einbindung externer Captcha-Dienste.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">Keine Analyse- oder Tracking-Tools</h2>
            <p>
              Es werden keine externen Tracking- oder Analyse-Tools eingesetzt. Keine Cookies zu Marketing- oder Statistikzwecken.
              Essenzielle Cookies werden nur gesetzt, wenn technisch notwendig (derzeit nicht erforderlich).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">Empfänger</h2>
            <p>
              Eine Weitergabe erfolgt nur, wenn dies für den Zweck erforderlich ist (z. B. Hosting-Dienstleister) oder eine
              gesetzliche Pflicht besteht. Auftragsverarbeitungsvertrag mit dem Hosting-Anbieter wird geschlossen (Platzhalter).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">Speicherdauer</h2>
            <p>
              Kontaktanfragen werden nach abschließender Bearbeitung gelöscht, spätestens nach 6 Monaten (Platzhalter). Server-Logs
              werden nach 7 Tagen gelöscht (Platzhalter). Längere Aufbewahrung nur bei gesetzlichen Pflichten.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">Rechte der betroffenen Personen</h2>
            <ul className="space-y-1 list-disc pl-5">
              {rights.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <p className="text-slate-700">Bitte richten Sie Ihre Anfragen an {siteConfig.contact.email}.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">SSL/TLS</h2>
            <p>Die Website wird per HTTPS bereitgestellt. Verschlüsselung schützt Daten während der Übertragung.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">Stand & Änderungen</h2>
            <p>Stand: 30. Januar 2026 (Platzhalter). Bei Änderungen aktualisieren wir diese Seite.</p>
          </section>

          <p className="text-xs text-slate-500">Diese Vorlage ersetzt keine individuelle Rechtsberatung.</p>
          <Link href="/documents/datenschutzhinweise.pdf" className="btn btn-secondary">Datenschutzhinweise (PDF)</Link>
        </div>
      </div>
    </div>
  );
}
