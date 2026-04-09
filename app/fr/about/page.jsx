import Link from "next/link";

export default function AboutFR() {
  return (
    <main className="min-h-screen bg-black text-white">

      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <h1 className="text-xl font-semibold">Ascendant Auto Detailing</h1>
        <div className="flex gap-4">
          <Link href="/fr" className="font-bold">FR</Link>
          <Link href="/en" className="opacity-60 hover:opacity-100">EN</Link>
        </div>
      </header>

      <nav className="flex justify-center gap-8 py-4 border-b border-gray-800 text-sm">
        <Link href="/fr/services">Services</Link>
        <Link href="/fr/tarifs">Tarifs</Link>
        <Link href="/fr/reserver">Réserver</Link>
        <Link href="/fr/contact">Contactez-nous</Link>
        <Link href="/fr/about">À propos</Link>
      </nav>

      <section className="px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">À propos</h2>
        <p className="text-gray-400">Présentation de votre entreprise.</p>
      </section>

    </main>
  );
}
