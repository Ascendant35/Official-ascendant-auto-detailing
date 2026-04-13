export default function ServicesPage() {
  const services = [
    {
      title: "Lavage extérieur premium",
      image: "/service-exterior.jpg.png",
      description:
        "Nettoyage complet de la carrosserie, des jantes et des vitres pour redonner à votre véhicule une brillance exceptionnelle.",
    },
    {
      title: "Nettoyage intérieur complet",
      image: "/service-interior.jpg.png",
      description:
        "Aspiration, nettoyage des surfaces et traitement des matériaux pour un intérieur propre, raffiné et soigné.",
    },
    {
      title: "Detailing complet",
      image: "/service-full.jpg.png",
      description:
        "Service intérieur et extérieur complet pour restaurer l’apparence globale du véhicule avec une finition haut de gamme.",
    },
    {
      title: "Protection de la peinture",
      image: "/service-ceramic.jpg.png",
      description:
        "Protection haut de gamme pour préserver l’éclat, améliorer la finition et protéger la peinture.",
    },
    {
      title: "Nettoyage du moteur",
      image: "/service-engine.jpg",
      description:
        "Nettoyage minutieux du compartiment moteur pour un rendu propre, soigné et professionnel.",
    },
    {
      title: "Restauration des phares",
      image: "/service-headlight.jpg",
      description:
        "Restauration des phares ternis pour améliorer l’apparence du véhicule et la visibilité de nuit.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10 px-8 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
            Ascendant Auto Detailing
          </p>

          <h1 className="mb-6 text-5xl font-semibold md:text-6xl">
            Nos Services
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-white/70">
            Des services haut de gamme pensés pour offrir à votre véhicule une
            apparence impeccable, une finition élégante et un niveau de soin
            premium.
          </p>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl transition hover:-translate-y-1 hover:border-yellow-400/40"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-72 object-contain rounded-t-2xl bg-black"
              />

              <div className="p-6">
                <div className="mb-4 h-[2px] w-14 bg-yellow-400" />

                <h2 className="mb-3 text-2xl font-semibold">
                  {service.title}
                </h2>

                <p className="leading-7 text-white/70">
                  {service.description}
                </p>

                <a
                  href="/booking"
                  className="mt-6 inline-block rounded-full border border-yellow-400/40 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                >
                  Réserver
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
            Plus de possibilités
          </p>

          <h3 className="text-3xl font-semibold md:text-4xl">
            Nous offrons encore plus de services sur demande
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            En plus de ces services principaux, nous proposons d’autres options
            adaptées à vos besoins et à votre véhicule. Contactez-nous pour en
            savoir plus sur nos services complémentaires et nos solutions sur
            mesure.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/booking"
              className="rounded-full bg-yellow-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
            >
              Réserver maintenant
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-yellow-400 hover:text-yellow-400"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
