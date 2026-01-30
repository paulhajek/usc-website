import { siteConfig } from '../../config/site';

export const metadata = { title: 'Impressum' };

export default function ImpressumPage() {
  return (
    <div className="section">
      <div className="container-narrow space-y-6">
        <h1 className="text-3xl font-bold text-brand-dark" style={{ fontFamily: 'var(--font-heading)' }}>Impressum</h1>
        <div className="card p-6 space-y-4 text-sm text-slate-800">
          <div>
            <div className="font-semibold">Diensteanbieter</div>
            <p>
              {siteConfig.name}<br />
              {siteConfig.address.street}<br />
              {siteConfig.address.zip} {siteConfig.address.city}
            </p>
          </div>
          <div>
            <div className="font-semibold">Kontakt</div>
            <p>E-Mail: {siteConfig.contact.email}<br />Telefon: {siteConfig.contact.phone}</p>
          </div>
          <div>
            <div className="font-semibold">Vertretungsberechtigter Vorstand</div>
            <p>{siteConfig.board.join(', ')} (Vorstandsmitglieder)</p>
          </div>
          <div>
            <div className="font-semibold">Registereintrag</div>
            <p>
              Vereinsregister (Amtsgericht München)<br />
              Registernummer: {siteConfig.register.number}<br />
              Eintragung: ausstehend (Platzhalter)
            </p>
          </div>
          <div>
            <div className="font-semibold">Zuständige Aufsichtsbehörde</div>
            <p>Amtsgericht München, Vereinsregister (Platzhalter)</p>
          </div>
          <div>
            <div className="font-semibold">Haftungsausschluss</div>
            <p>
              Inhalte wurden sorgfältig erstellt. Keine Gewähr für Richtigkeit, Vollständigkeit, Aktualität. Externe Links werden
              regelmäßig geprüft; für deren Inhalte sind ausschließlich die jeweiligen Betreiber verantwortlich.
            </p>
          </div>
          <div>
            <div className="font-semibold">Urheberrecht</div>
            <p>
              Eigene Inhalte dieser Seite stehen unter einfachem Nutzungsrecht des Vereins. Eine Vervielfältigung ist nur mit
              vorheriger Zustimmung zulässig.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
