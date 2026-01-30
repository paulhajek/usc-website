import Link from 'next/link';
import { siteConfig } from '../../config/site';

const steps = [
  'Beitrittsformular ausfüllen und unterschreiben (PDF herunterladen).',
  'Versand per E-Mail oder Post an den Verein.',
  'Bestätigung des Vorstands abwarten (schriftlich).',
  'Start des Beitrags gemäß Satzung und Beitragsordnung.'
];

const faqs = [
  { q: 'Wie kann ich kündigen?', a: siteConfig.membership.cancellation },
  { q: 'Gibt es Schnuppertraining?', a: 'Ja, nach kurzer Anmeldung per E-Mail. Teilnahme auf eigene Verantwortung.' },
  { q: 'Wann wird der Beitrag fällig?', a: 'Nach Aufnahmebestätigung; Details in der Beitragsordnung (Platzhalter).' }
];

export default function MitgliedschaftPage() {
  return (
    <div className="section">
      <div className="container-narrow space-y-10">
        <div className="space-y-4">
          <p className="badge">Mitgliedschaft</p>
          <h1 className="text-3xl font-bold text-brand-dark" style={{ fontFamily: 'var(--font-heading)' }}>
            Beiträge, Ablauf, Dokumente
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Klare Konditionen ohne Kleingedrucktes. Beiträge werden schriftlich bestätigt. Änderungen werden transparent kommuniziert
            und gelten erst nach Beschluss durch den Verein.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="card p-6 space-y-2">
            <h3 className="text-lg font-semibold">Gründungsmitglieder</h3>
            <p className="text-sm text-slate-700">{siteConfig.membership.founding}</p>
          </div>
          <div className="card p-6 space-y-2">
            <h3 className="text-lg font-semibold">Mitglied nach Gründung</h3>
            <p className="text-sm text-slate-700">{siteConfig.membership.standardYear}</p>
          </div>
          <div className="card p-6 space-y-2">
            <h3 className="text-lg font-semibold">Monatlich</h3>
            <p className="text-sm text-slate-700">{siteConfig.membership.standardMonthly}</p>
          </div>
        </div>

        <div className="card p-6 space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Ablauf</h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="text-sm text-slate-700">Kündigungen bitte schriftlich oder per E-Mail einreichen. Es gilt die Satzung.</p>
        </div>

        <div id="dokumente" className="card p-6 space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Dokumente</h2>
          <div className="grid gap-3 md:grid-cols-2 text-sm text-slate-700">
            <Link href={siteConfig.documents.membershipForm} className="btn btn-secondary">Beitrittsformular (PDF)</Link>
            <Link href={siteConfig.documents.statute} className="btn btn-secondary">Satzung (PDF)</Link>
            <Link href={siteConfig.documents.contributionRules} className="btn btn-secondary">Beitragsordnung (PDF)</Link>
            <Link href={siteConfig.documents.privacy} className="btn btn-secondary">Datenschutzhinweise (PDF)</Link>
          </div>
        </div>

        <div className="card p-6 space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">FAQ</h2>
          <dl className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="space-y-1">
                <dt className="text-sm font-semibold text-slate-900">{item.q}</dt>
                <dd className="text-sm text-slate-700 leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
