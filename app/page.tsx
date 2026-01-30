import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '../config/site';

const features = [
  {
    title: 'Strukturiertes Hallentraining',
    text: 'Feste Trainingszeit am Mittwochabend in München. Verlässliche Organisation ohne überfüllte Gruppen.',
    image: '/images/training.jpg'
  },
  {
    title: 'Verantwortung & Fair Play',
    text: 'Klare Regeln, Respekt vor der Sportstätte, Training auf eigene Verantwortung ohne Gesundheitsversprechen.',
    image: '/images/hall.jpg'
  },
  {
    title: 'Transparente Mitgliedschaft',
    text: 'Übersichtliche Beiträge, klare Kündigungsfristen und schriftliche Bestätigung. Keine versteckten Kosten.',
    image: '/images/team.jpg'
  }
];

const faqs = [
  {
    q: 'Brauche ich Vorerfahrung?',
    a: 'Nein. Grundfitness und Rücksicht auf andere sind ausreichend. Aufwärmen erfolgt gemeinsam.'
  },
  {
    q: 'Kann ich ein Probetraining machen?',
    a: 'Ja, nach kurzer Anmeldung per E-Mail. Die Teilnahme erfolgt auf eigene Verantwortung.'
  },
  {
    q: 'Gibt es eine Warteliste?',
    a: 'Bei voller Auslastung führen wir eine Warteliste und melden uns nach Verfügbarkeit.'
  }
];

export default function HomePage() {
  return (
    <div>
      <section className="section bg-gradient-to-br from-white to-slate-100">
        <div className="container-narrow grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="badge">{siteConfig.shortName}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-dark" style={{ fontFamily: 'var(--font-heading)' }}>
              Moderner Sportverein in München mit klaren Strukturen
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed">
              Wir bieten verlässliches Hallentraining, transparente Mitgliedschaft und eine respektvolle Trainingskultur. Keine
              Tracking-Cookies, keine übertriebenen Versprechen.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/mitgliedschaft" className="btn btn-primary">Mitglied werden</Link>
              <Link href="/training" className="btn btn-secondary">Training ansehen</Link>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
              <div className="card p-4">
                <div className="text-xs uppercase tracking-wide text-slate-500">Trainingszeit</div>
                <div className="font-semibold text-slate-900">{siteConfig.training.day}, {siteConfig.training.time}</div>
                <div className="text-slate-600">{siteConfig.training.venue}</div>
              </div>
              <div className="card p-4">
                <div className="text-xs uppercase tracking-wide text-slate-500">Mitgliedsbeiträge</div>
                <div className="font-semibold text-slate-900">{siteConfig.membership.standardYear}</div>
                <div className="text-slate-600">oder {siteConfig.membership.standardMonthly}</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="card overflow-hidden">
              <Image src="/images/hero.jpg" alt="Halle des Urban Sports Collective" width={1200} height={800} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow space-y-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl font-bold text-brand-dark" style={{ fontFamily: 'var(--font-heading)' }}>Warum USC München?</h2>
            <p className="text-slate-700 leading-relaxed">
              Wir setzen auf klare Kommunikation, Verbindlichkeit und Datenschutz. Unser Fokus liegt auf einem sicheren Trainingsumfeld
              mit fairen Regeln und transparenter Vereinsführung.
            </p>
          </div>
          <div className="hero-grid">
            {features.map((feature) => (
              <div key={feature.title} className="card overflow-hidden">
                <Image src={feature.image} alt={feature.title} width={640} height={400} className="h-48 w-full object-cover" />
                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-dark text-white">
        <div className="container-narrow grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>Training in München</h2>
            <p className="text-white/80 leading-relaxed">
              Teilnahme erfolgt auf eigene Verantwortung. Bitte respektiert die Hausordnung der Sportstätte und bringt Hallenschuhe
              sowie ausreichend Wasser mit. Wertsachen bitte nicht unbeaufsichtigt lassen.
            </p>
          </div>
          <div className="card bg-white/10 border-white/20 p-6">
            <div className="text-sm font-semibold">Nächster Termin</div>
            <div className="text-xl font-bold">{siteConfig.training.day}, {siteConfig.training.time}</div>
            <div className="mt-2 text-sm text-white/80">{siteConfig.training.venue}</div>
            <div className="text-sm text-white/70">{siteConfig.training.address}</div>
            <Link href="/training" className="mt-4 inline-flex text-sm font-semibold text-white underline decoration-2">Details ansehen</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow grid gap-8 lg:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-brand-dark" style={{ fontFamily: 'var(--font-heading)' }}>Mitgliedschaft</h2>
            <p className="text-slate-700 leading-relaxed">
              Wir halten die Abläufe klar: Antrag ausfüllen, schriftliche Bestätigung, transparente Beiträge. Kündigungen sind
              schriftlich möglich, die Frist ist in der Satzung geregelt.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• {siteConfig.membership.founding}</li>
              <li>• {siteConfig.membership.standardYear}</li>
              <li>• {siteConfig.membership.standardMonthly}</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link href="/mitgliedschaft" className="btn btn-primary">Beiträge & Ablauf</Link>
              <Link href="/documents/beitritt.pdf" className="btn btn-secondary">Beitrittsformular (PDF)</Link>
            </div>
          </div>
          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">FAQ</h3>
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
      </section>

      <section className="section bg-slate-100">
        <div className="container-narrow flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-wide text-slate-600">Kontakt</div>
            <h2 className="text-2xl font-bold text-brand-dark" style={{ fontFamily: 'var(--font-heading)' }}>Fragen? Schreiben Sie uns.</h2>
            <p className="text-slate-700 mt-2">Verbindliche Antworten ohne Marketing-Floskeln.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/kontakt" className="btn btn-primary">Kontaktformular</Link>
            <Link href={`mailto:${siteConfig.contact.email}`} className="btn btn-secondary">E-Mail</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
