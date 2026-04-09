import Link from "next/link";

export default function ServicesFR() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <h1 className="text-xl font-semibold">Ascendant Auto Detailing</h1>

        <div className="flex gap-4">
          <Link href="/fr" className="font-bold">FR</Link>
          <Link href="/en" className="opacity-60 hover:opacity-100">EN</Link>
        </div>
      </header>

      {/* NAVBAR */}
      <nav className="flex justify-center gap-8 py-4 border-b border-gray-800 text-sm">
        <Link href="/fr/services">Services</Link>
        <Link href="/fr/tarifs">Tarifs</Link>
        <Link href="/fr/reserver">Réserver</Link>
        <Link href="/fr/contact">Contactez-nous</Link>
        <Link href="/fr/about">À propos</Link>
      </nav>

      {/* CONTENT */}
      <section className="px-8 py-20 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Nos Services</h2>

        <p className="text-gray-400 mb-12">
          Des services de detailing automobile haut de gamme conçus pour restaurer et sublimer votre véhicule.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border border-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Nettoyage intérieur</h3>
            <p className="text-gray-400">Un nettoyage complet pour un intérieur impeccable.</p>
          </div>

          <div className="border border-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Lavage extérieur</h3>
            <p className="text-gray-400">Brillance et protection pour votre carrosserie.</p>
          </div>

          <div className="border border-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Protection céramique</h3>
            <p className="text-gray-400">Une protection durable avec un effet miroir.</p>
          </div>

        </div>
      </section>

    </main>
  );
}
