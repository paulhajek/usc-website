import Image from 'next/image';
import { siteConfig } from '../../config/site';

const rules = [
  'Teilnahme erfolgt auf eigene Verantwortung. Keine Haftung für mitgebrachte Gegenstände.',
  'Hausordnung und Vorgaben der Sportstätte sind einzuhalten.',
  'Gesundheitliche Eignung selbst prüfen; keine Gesundheits- oder Leistungsversprechen.',
  'Rücksicht auf andere Teilnehmer, fairer Umgang, pünktliches Erscheinen.',
  'Halle sauber hinterlassen, Hallenschuhe nutzen, Wertsachen nicht unbeaufsichtigt lassen.'
];

export default function TrainingPage() {
  return (
    <div className="section">
      <div className="container-narrow space-y-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <p className="badge">Training</p>
            <h1 className="text-3xl font-bold text-brand-dark" style={{ fontFamily: 'var(--font-heading)' }}>
              Hallentraining in München
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed">
              Wir trainieren mittwochs abends. Termine werden verbindlich kommuniziert. Bitte kommt rechtzeitig zum Auf- und Abbau
              und beachtet die folgenden Hinweise.
            </p>
            <div className="card p-5 space-y-1 text-sm text-slate-700">
              <div className="text-xs uppercase tracking-wide text-slate-500">Zeit & Ort</div>
              <div className="font-semibold text-slate-900">{siteConfig.training.day}, {siteConfig.training.time}</div>
              <div>{siteConfig.training.venue}</div>
              <div>{siteConfig.training.address}</div>
            </div>
          </div>
          <div className="card overflow-hidden">
            <Image src="/images/training.jpg" alt="Training in der Halle" width={1200} height={800} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-6 space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Haftung & Verantwortung</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Teilnahme auf eigene Gefahr. Wir übernehmen keine Haftung für Schäden an mitgebrachten Gegenständen. Bitte sichert eure
              Wertsachen selbst.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Bitte prüft eigenverantwortlich eure gesundheitliche Eignung. Es werden keine Heil- oder Gesundheitsversprechen
              gegeben. Erste Hilfe wird nach bestem Wissen geleistet; Notrufnummern sind vor Ort bekannt.
            </p>
          </div>
          <div className="card p-6 space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Regeln</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              {rules.map((rule) => (
                <li key={rule}>• {rule}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
