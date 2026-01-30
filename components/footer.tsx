import Link from 'next/link';
import { siteConfig } from '../config/site';

const legalLinks = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
  { href: '/satzung', label: 'Satzung' }
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="container-narrow py-10 grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <div className="text-lg font-semibold">{siteConfig.shortName}</div>
          <p className="text-sm text-slate-700 leading-relaxed">
            Moderner Sportverein in München. Transparente Strukturen, klare Kommunikation, verantwortungsbewusstes Training.
          </p>
          <p className="text-xs text-slate-500">Keine Tracking-Cookies. Keine externen Analyse-Dienste.</p>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">Kontakt</div>
          <div className="mt-3 text-sm text-slate-700 space-y-1">
            <div>{siteConfig.address.street}</div>
            <div>{`${siteConfig.address.zip} ${siteConfig.address.city}`}</div>
            <div>E-Mail: {siteConfig.contact.email}</div>
            <div>Telefon: {siteConfig.contact.phone}</div>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">Rechtliches & Dokumente</div>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-700">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-brand-blue">
                {item.label}
              </Link>
            ))}
            <Link href="/mitgliedschaft#dokumente" className="hover:text-brand-blue">
              Dokumente
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-slate-50 py-4">
        <div className="container-narrow flex flex-col gap-2 text-xs text-slate-600 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {siteConfig.name}</span>
          <span>Server-Standort: {siteConfig.hosting.location || 'Deutschland (Platzhalter)'}</span>
        </div>
      </div>
    </footer>
  );
}
