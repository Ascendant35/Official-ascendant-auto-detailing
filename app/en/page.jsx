import Link from "next/link";

export default function HomeEN() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* HEADER */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <h1 className="text-xl font-semibold">Ascendant Auto Detailing</h1>

        <div className="flex gap-4">
          <Link href="/fr" className="opacity-60 hover:opacity-100">FR</Link>
          <Link href="/en" className="font-bold">EN</Link>
        </div>
      </header>

      {/* NAVBAR */}
      <nav className="flex justify-center gap-8 py-4 border-b border-gray-800 text-sm">
        <Link href="/en/services">Services</Link>
        <Link href="/en/packages">Packages</Link>
        <Link href="/en/book">Book Now</Link>
        <Link href="/en/contact">Contact Us</Link>
        <Link href="/en/about">About Us</Link>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-5xl font-bold mb-6">
          Premium Auto Detailing
        </h2>

        <p className="text-gray-400 max-w-xl mb-8">
          Experience luxury detailing services designed to restore and elevate your vehicle.
        </p>

        <div className="flex gap-4">
          <Link href="/en/packages" className="bg-white text-black px-6 py-3 rounded-full font-semibold">
            View Packages
          </Link>

          <Link href="/en/book" className="border border-white px-6 py-3 rounded-full">
            Book Now
          </Link>
        </div>
      </section>

    </main>
  );
}
