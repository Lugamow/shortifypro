export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="p-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <h1 className="text-4xl font-bold">ShortifyPro</h1>
        <p className="mt-2 text-lg">Dein Content. Unsere KI. Täglicher Impact.</p>
        <button className="mt-4 px-6 py-2 bg-white text-blue-600 font-semibold rounded-2xl shadow">
          Jetzt starten
        </button>
      </header>

      <section className="p-8 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold mb-2">So funktioniert's</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Du lädst dein Video, Audio oder PDF hoch</li>
            <li>Unsere KI transkribiert und analysiert den Inhalt</li>
            <li>Automatisch entstehen Zitate, Reels, Karussells</li>
            <li>Wir posten alles für dich – vollautomatisch</li>
          </ul>
        </div>
        <div className="bg-gray-100 rounded-2xl p-4 shadow">
          <h2 className="text-2xl font-bold mb-2">Preise</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Basic – 99€/Monat</h3>
              <p>4 Content-Pakete pro Monat</p>
            </div>
            <div>
              <h3 className="font-semibold">Pro – 179€/Monat</h3>
              <p>8 Pakete pro Monat + Video-Reels</p>
            </div>
            <div>
              <h3 className="font-semibold">Agency – 399€/Monat</h3>
              <p>Unlimitiert – ideal für Agenturen</p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <ul className="space-y-4">
          <li>
            <strong>Was kann ich hochladen?</strong> Video (YouTube, Zoom), Audio (Podcast), PDF, Blogartikel
          </li>
          <li>
            <strong>Wie schnell geht das?</strong> Innerhalb von 24–48 Stunden ist dein Content bereit
          </li>
          <li>
            <strong>Wo wird gepostet?</strong> Instagram, LinkedIn, TikTok – oder per Datei zurückgesendet
          </li>
        </ul>
      </section>

      <footer className="text-center p-6 text-sm text-gray-500">
        &copy; 2025 ShortifyPro – Automatisierter Content-Service mit KI
      </footer>
    </div>
  );
}
