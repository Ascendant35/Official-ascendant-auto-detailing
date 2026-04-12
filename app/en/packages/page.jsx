"use client";

export default function PackagesPage() {
  return (
    <main className="bg-slate-50 text-slate-900">

      {/* HERO */}
      <section className="relative h-[50vh] flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1600&auto=format&fit=crop"
          alt="Luxury car detailing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl md:text-5xl font-semibold">Our Packages</h1>
          <p className="mt-4 max-w-xl mx-auto text-slate-200">
            Premium detailing services tailored for those who expect nothing less than perfection.
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">

          {/* CARE */}
          <div className="bg-white rounded-2xl border p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Ascendant Care</h3>
            <p className="text-sm text-slate-500 mt-2">Essential maintenance</p>

            {/* ONE TIME */}
            <div className="mt-6 space-y-1 text-sm">
              <p className="font-medium">One-Time Service</p>
              <p>Car: $179.99</p>
              <p>SUV: $199.99</p>
              <p>Truck / Large SUV: $219.99</p>
            </div>

            {/* 4 VISIT */}
            <div className="mt-6 border-t pt-4 space-y-1 text-sm">
              <p className="font-medium">4 Visit Package</p>
              <p>Car: $679.99</p>
              <p>SUV: $779.99</p>
              <p>Truck / Large SUV: $879.99</p>
            </div>
          </div>

          {/* ELITE */}
          <div className="bg-white rounded-2xl border p-6 shadow-md relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full">
              MOST POPULAR
            </div>

            <h3 className="text-xl font-semibold">Ascendant Elite</h3>
            <p className="text-sm text-slate-500 mt-2">Enhanced interior & exterior care</p>

            {/* ONE TIME */}
            <div className="mt-6 space-y-1 text-sm">
              <p className="font-medium">One-Time Service</p>
              <p>Car: $249.99</p>
              <p>SUV: $279.99</p>
              <p>Truck / Large SUV: $299.99</p>
            </div>

            {/* 4 VISIT */}
            <div className="mt-6 border-t pt-4 space-y-1 text-sm">
              <p className="font-medium">4 Visit Package</p>
              <p>Car: $999.99</p>
              <p>SUV: $1089.99</p>
              <p>Truck / Large SUV: $1239.99</p>
            </div>
          </div>

          {/* SIGNATURE */}
          <div className="bg-white rounded-2xl border p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Ascendant Signature</h3>
            <p className="text-sm text-slate-500 mt-2">Ultimate luxury detailing</p>

            {/* ONE TIME */}
            <div className="mt-6 space-y-1 text-sm">
              <p className="font-medium">One-Time Service</p>
              <p>Car: $349.99</p>
              <p>SUV: $379.99</p>
              <p>Truck / Large SUV: $399.99</p>
            </div>

            {/* 4 VISIT */}
            <div className="mt-6 border-t pt-4 space-y-1 text-sm">
              <p className="font-medium">4 Visit Package</p>
              <p>Car: $1349.99</p>
              <p>SUV: $1449.99</p>
              <p>Truck / Large SUV: $1499.99</p>
            </div>
          </div>

        </div>
      </section>

      {/* DETAILS */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-5xl mx-auto space-y-10">

          <div>
            <h2 className="text-2xl font-semibold">Ascendant Care</h2>
            <p className="text-slate-600 mt-2">
              A perfect entry-level package designed to maintain cleanliness and protect your vehicle.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Ascendant Elite</h2>
            <p className="text-slate-600 mt-2">
              Our most popular option, offering deeper cleaning, enhanced shine, and better protection.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Ascendant Signature</h2>
            <p className="text-slate-600 mt-2">
              The ultimate detailing experience for clients who want showroom-level perfection.
            </p>
          </div>

        </div>
      </section>

      {/* EXTRAS */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold text-center">Additional Services</h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">

            {[
              ["Seat Shampoo", "$49.99"],
              ["Stain Removal", "$39.99"],
              ["Odor Removal", "$59.99"],
              ["Salt Removal", "$29.99"],
              ["Engine Bay Cleaning", "$49.99"],
              ["Pet Hair Removal", "$69.99"],
              ["Leather Conditioning", "$39.99"],
              ["Headlight Restoration", "$59.99"],
            ].map(([title, price]) => (
              <div key={title} className="bg-white border rounded-xl p-4 text-center">
                <h3 className="font-medium">{title}</h3>
                <p className="text-yellow-600 mt-2">{price}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}
