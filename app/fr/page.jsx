import Link from "next/link";

export default function HomeFR() {
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

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-5xl font-bold mb-6">
          L’Art du Detailing Automobile
        </h2>

        <p className="text-gray-400 max-w-xl mb-8">
          Offrez à votre véhicule un service haut de gamme. Précision, luxe et perfection.
        </p>

        <div className="flex gap-4">
          <Link href="/fr/tarifs" className="bg-white text-black px-6 py-3 rounded-full font-semibold">
            Voir les tarifs
          </Link>

          <Link href="/fr/reserver" className="border border-white px-6 py-3 rounded-full">
            Réserver
          </Link>
        </div>
      </section>

    </main>
  );
}
