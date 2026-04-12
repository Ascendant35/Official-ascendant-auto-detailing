"use client";

const packages = [
  {
    name: "Ascendant Care",
    label: "ESSENTIAL",
    subtitle: "Refined Maintenance",
    description:
      "Ideal for clients who want to keep their vehicle consistently clean, fresh, and well-presented. This package focuses on essential interior and exterior maintenance.",
    prices: {
      sedan: "$179.99",
      suv: "$199.99",
      truck: "$219.99",
    },
    deal: {
      sedan: "$679.99",
      suv: "$779.99",
      truck: "$879.99",
    },
    duration: "Approx. 2 Hours",
    included: [
      "Safe foam hand wash",
      "Wheel faces cleaned",
      "Tires dressed",
      "Interior vacuum",
      "Dashboard and console wipe-down",
      "Windows cleaned",
    ],
    featured: false,
  },
  {
    name: "Ascendant Elite",
    label: "PREMIUM",
    badge: "MOST REQUESTED",
    subtitle: "Interior & Exterior Enhancement",
    description:
      "Perfect for clients looking for a more complete detail with deeper interior cleaning, stain treatment, and added exterior protection for a more elevated finish.",
    prices: {
      sedan: "$249.99",
      suv: "$279.99",
      truck: "$299.99",
    },
    deal: {
      sedan: "$999.99",
      suv: "$1089.99",
      truck: "$1239.99",
    },
    duration: "Approx. 4 Hours",
    included: [
      "Everything in Care",
      "Deeper interior cleaning",
      "Door jamb cleaning",
      "Light stain treatment",
      "Leather wipe-down",
      "Spray protection finish",
    ],
    featured: true,
  },
  {
    name: "Ascendant Signature",
    label: "SIGNATURE",
    subtitle: "Complete Transformation",
    description:
      "Our most comprehensive package for vehicles that need full restoration-level attention. Best for heavily soiled interiors, neglected paint, salt buildup, and clients seeking the highest level of finish.",
    prices: {
      sedan: "$349.99",
      suv: "$379.99",
      truck: "$399.99",
    },
    deal: {
      sedan: "$1349.99",
      suv: "$1449.99",
      truck: "$1499.99",
    },
    duration: "Approx. 6 Hours",
    included: [
      "Everything in Elite",
      "Deep stain focus",
      "Salt removal treatment",
      "Detailed crevice cleaning",
      "Conditioning on key surfaces",
      "Enhanced finishing touches",
    ],
    featured: false,
  },
];

const extras = [
  { title: "Seat Shampoo", price: "$49.99" },
  { title: "Carpet Shampoo", price: "$59.99" },
  { title: "Stain Removal", price: "$39.99+" },
  { title: "Odor Removal", price: "$59.99" },
  { title: "Salt Removal", price: "$39.99+" },
  { title: "Engine Bay Cleaning", price: "$49.99" },
  { title: "Pet Hair Removal", price: "$69.99+" },
  { title: "Leather Conditioning", price: "$39.99" },
  { title: "Headlight Restoration", price: "$79.99" },
];

function PriceBox({ title, prices, duration }) {
  return (
    <div className="mt-6 rounded-[22px] border border-white/10 bg-[#0b0b0d] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">{title}</p>

      <div className="mt-4 space-y-3 text-[15px]">
        <div className="flex items-center justify-between gap-4">
          <span className="text-white/85">Sedan</span>
          <span className="font-semibold text-[#d4af37]">{prices.sedan}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-white/85">SUV</span>
          <span className="font-semibold text-[#d4af37]">{prices.suv}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-white/85">Large SUV / Truck</span>
          <span className="font-semibold text-[#d4af37]">{prices.truck}</span>
        </div>
      </div>

      {duration ? (
        <>
          <div className="mt-5 h-px bg-white/10" />
          <p className="mt-4 text-sm text-white/45">{duration}</p>
        </>
      ) : null}
    </div>
  );
}

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white md:px-6 md:py-14">
      <div className="mx-auto max-w-7xl">
        <section className="overflow-hidden rounded-[34px] border border-[#5b4610]/60 bg-[#050505] shadow-[0_0_0_1px_rgba(212,175,55,0.04)]">
          <div className="grid md:grid-cols-2">
            <div className="flex items-center p-8 md:p-12 lg:p-14">
              <div className="max-w-xl">
                <p className="text-xs uppercase tracking-[0.42em] text-[#d4af37]">Pricing</p>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
                  Services & Pricing
                </h1>
                <p className="mt-6 max-w-lg text-lg leading-8 text-white/68">
                  Premium detailing packages designed for every level of care — from regular
                  maintenance to full interior and exterior transformation.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80">
                    Premium Finish
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80">
                    Luxury Care
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80">
                    Interior & Exterior
                  </span>
                </div>
              </div>
            </div>

            <div className="relative min-h-[320px] md:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1600&q=80"
                alt="Luxury black sedan in studio lighting"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-black/35 to-black/80 md:bg-gradient-to-r md:from-black/60 md:via-black/20 md:to-black/10" />
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={[
                "rounded-[30px] border bg-[#050505] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]",
                pkg.featured
                  ? "border-[#7d5f11] bg-[linear-gradient(180deg,rgba(80,58,8,0.18),rgba(5,5,5,1)_18%)] shadow-[0_0_0_1px_rgba(212,175,55,0.08)]"
                  : "border-white/10",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  {pkg.badge ? (
                    <span className="inline-flex rounded-full border border-[#8a6b16] bg-[#2d2207] px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-[#d4af37]">
                      {pkg.badge}
                    </span>
                  ) : null}
                </div>

                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.28em] text-white/45">
                  {pkg.label}
                </span>
              </div>

              <h2 className="mt-5 text-[44px] font-semibold leading-[0.95] tracking-tight">
                {pkg.name.split(" ")[0]} <br />
                {pkg.name.split(" ").slice(1).join(" ")}
              </h2>

              <p className="mt-4 text-[27px] font-medium text-[#d4af37]">{pkg.subtitle}</p>

              <p className="mt-6 text-lg leading-9 text-white/62">{pkg.description}</p>

              <PriceBox title="Starting At" prices={pkg.prices} duration={pkg.duration} />
              <PriceBox title="4 Visit Package" prices={pkg.deal} />

              <div className="mt-8">
                <p className="text-[13px] uppercase tracking-[0.34em] text-white">What’s Included</p>
                <ul className="mt-5 space-y-3 text-[15px] leading-7 text-white/75">
                  {pkg.included.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-14 rounded-[30px] border border-white/10 bg-[#050505] p-8 md:p-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.42em] text-[#d4af37]">Package Guide</p>
            <h3 className="mt-4 text-3xl font-semibold md:text-4xl">Which package should you choose?</h3>
            <p className="mt-5 text-lg leading-8 text-white/65">
              Ascendant Care is ideal for routine upkeep and a consistently polished look. Ascendant
              Elite is best for clients wanting a more complete refresh with deeper interior and
              exterior attention. Ascendant Signature is built for vehicles that need the highest
              level of correction, restoration, and finishing presence.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-[22px] border border-white/10 bg-[#0b0b0d] p-5">
              <h4 className="text-xl font-semibold">Ascendant Care</h4>
              <p className="mt-3 leading-7 text-white/65">
                Best for regular clients who want dependable maintenance and a clean, sharp vehicle
                week after week.
              </p>
            </div>

            <div className="rounded-[22px] border border-[#7d5f11] bg-[linear-gradient(180deg,rgba(80,58,8,0.16),rgba(11,11,13,1)_30%)] p-5">
              <h4 className="text-xl font-semibold">Ascendant Elite</h4>
              <p className="mt-3 leading-7 text-white/65">
                The strongest balance between value and transformation. Ideal for most clients and
                the best all-around premium choice.
              </p>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-[#0b0b0d] p-5">
              <h4 className="text-xl font-semibold">Ascendant Signature</h4>
              <p className="mt-3 leading-7 text-white/65">
                For clients who want the most complete service and the highest-end finish possible
                for their vehicle.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-[30px] border border-white/10 bg-[#050505] p-8 md:p-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.42em] text-[#d4af37]">Enhancements</p>
            <h3 className="mt-4 text-3xl font-semibold md:text-4xl">Additional Services</h3>
            <p className="mt-5 text-lg leading-8 text-white/65">
              Upgrade any package with targeted services for deeper restoration, added freshness,
              and a more complete final result.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {extras.map((extra) => (
              <div
                key={extra.title}
                className="rounded-[22px] border border-white/10 bg-[#0b0b0d] p-5"
              >
                <h4 className="text-lg font-medium">{extra.title}</h4>
                <p className="mt-3 text-xl font-semibold text-[#d4af37]">{extra.price}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
