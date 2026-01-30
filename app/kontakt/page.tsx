import Link from 'next/link';
import { siteConfig } from '../../config/site';
import ContactForm from '../../components/contact-form';

export default function KontaktPage() {
  return (
    <div className="section">
      <div className="container-narrow grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="badge">Kontakt</p>
          <h1 className="text-3xl font-bold text-brand-dark" style={{ fontFamily: 'var(--font-heading)' }}>
            Kontakt aufnehmen
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Wir antworten sachlich und zeitnah. Bitte beachten Sie, dass das Training auf eigene Verantwortung erfolgt und keine
            Gesundheitsberatung angeboten wird.
          </p>
          <div className="card p-5 space-y-2 text-sm text-slate-700">
            <div className="font-semibold text-slate-900">Kontaktdaten</div>
            <div>{siteConfig.address.street}</div>
            <div>{siteConfig.address.zip} {siteConfig.address.city}</div>
            <div>E-Mail: {siteConfig.contact.email}</div>
            <div>Telefon: {siteConfig.contact.phone}</div>
            <Link href="/impressum" className="text-brand-blue underline decoration-2">Impressum</Link>
          </div>
        </div>
        <div className="card p-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
