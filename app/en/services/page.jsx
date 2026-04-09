import Link from "next/link";

export default function ServicesEN() {
  return (
    <main className="min-h-screen bg-black text-white">

      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <h1 className="text-xl font-semibold">Ascendant Auto Detailing</h1>

        <div className="flex gap-4">
          <Link href="/fr" className="opacity-60 hover:opacity-100">FR</Link>
          <Link href="/en" className="font-bold">EN</Link>
        </div>
      </header>

      <nav className="flex justify-center gap-8 py-4 border-b border-gray-800 text-sm">
        <Link href="/en/services">Services</Link>
        <Link href="/en/packages">Packages</Link>
        <Link href="/en/book">Book Now</Link>
        <Link href="/en/contact">Contact Us</Link>
        <Link href="/en/about">About Us</Link>
      </nav>

      <section className="px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Services</h2>
        <p className="text-gray-400">High-end detailing services for your vehicle.</p>
      </section>

    </main>
  );
}
