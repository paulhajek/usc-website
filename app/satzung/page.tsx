import Link from 'next/link';
import { siteConfig } from '../../config/site';

export const metadata = { title: 'Satzung & Dokumente' };

export default function SatzungPage() {
  return (
    <div className="section">
      <div className="container-narrow space-y-6">
        <h1 className="text-3xl font-bold text-brand-dark" style={{ fontFamily: 'var(--font-heading)' }}>Satzung</h1>
        <div className="card p-6 space-y-4 text-sm text-slate-800">
          <p>
            Die Satzung regelt Zweck, Mitgliedschaft, Beiträge, Organe und Beschlussfassungen des Vereins. Sie wird nach Eintragung im
            Vereinsregister veröffentlicht. Bis dahin steht eine vorläufige Fassung als Platzhalter zur Verfügung.
          </p>
          <p>
            Änderungen an Satzung oder Beitragsordnung werden schriftlich beschlossen und kommuniziert. Es gelten jeweils die
            veröffentlichten Fassungen.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            <Link href={siteConfig.documents.statute} className="btn btn-secondary">Satzung (PDF)</Link>
            <Link href={siteConfig.documents.contributionRules} className="btn btn-secondary">Beitragsordnung (PDF)</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
