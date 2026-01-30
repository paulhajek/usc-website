import { siteConfig } from '../../config/site';

const values = [
  { title: 'Verlässlichkeit', text: 'Feste Trainingszeiten, klare Verantwortlichkeiten und schnelle Kommunikation bei Änderungen.' },
  { title: 'Transparenz', text: 'Beiträge, Satzung und Entscheidungswege sind schriftlich hinterlegt und für Mitglieder einsehbar.' },
  { title: 'Datenschutz', text: 'Keine unnötigen Daten, keine Tracker. Verarbeitung erfolgt zweckgebunden und sparsam.' }
];

export default function VereinPage() {
  return (
    <div className="section">
      <div className="container-narrow space-y-10">
        <div className="space-y-4">
          <p className="badge">Verein</p>
          <h1 className="text-3xl font-bold text-brand-dark" style={{ fontFamily: 'var(--font-heading)' }}>
            Urban Sports Collective München {siteConfig.statusSuffix}
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            Wir sind ein gemeinnütziger Sportverein in Gründung mit Sitz in München. Unser Zweck ist die Förderung des Sports und
            der Gemeinschaft. Wir handeln konservativ bei Recht & Datenschutz, verzichten auf übertriebene Versprechen und setzen
            auf klare Abläufe.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="card p-6 space-y-2">
              <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
              <p className="text-sm text-slate-700 leading-relaxed">{value.text}</p>
            </div>
          ))}
        </div>

        <div className="card p-6 space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Organisatorisches</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• Sitz des Vereins: München</li>
            <li>• Geplanter Eintrag ins Vereinsregister: {siteConfig.register.court}, Registernummer: {siteConfig.register.number}</li>
            <li>• Vertretungsberechtigter Vorstand: {siteConfig.board.join(', ')}</li>
            <li>• Gemeinnützigkeitsstatus: in Vorbereitung (Platzhalter)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
