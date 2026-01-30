export const metadata = { title: 'Spenden' };

export default function SpendenPage() {
  return (
    <div className="section">
      <div className="container-narrow space-y-6">
        <h1 className="text-3xl font-bold text-brand-dark" style={{ fontFamily: 'var(--font-heading)' }}>Spenden</h1>
        <div className="card p-6 space-y-3 text-sm text-slate-800">
          <p>
            Spenden sind derzeit optional und werden zweckgebunden für Hallenmiete und Trainingsmaterial verwendet. Eine
            Zuwendungsbestätigung (Spendenquittung) kann erst nach Anerkennung der Gemeinnützigkeit ausgestellt werden (Platzhalter).
          </p>
          <p>Bitte kontaktieren Sie uns vorab per E-Mail, um die Zahlungsdetails zu erhalten.</p>
        </div>
      </div>
    </div>
  );
}
