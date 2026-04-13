"use client";

import { useMemo, useState } from "react";

const PACKAGES = [
  {
    id: "care",
    name: "Ascendant Care",
    price: 120,
    description: "A refined maintenance detail for vehicles that need a clean, refreshed presentation.",
  },
  {
    id: "elite",
    name: "Ascendant Elite",
    price: 180,
    description: "A deeper interior and exterior detail designed for elevated presentation and finish.",
  },
  {
    id: "signature",
    name: "Ascendant Signature",
    price: 250,
    description: "Our most complete premium detail for a standout, showroom-inspired result.",
  },
];

const VEHICLE_TYPES = [
  { id: "sedan", name: "Sedan / Coupe", price: 0 },
  { id: "suv", name: "SUV / Crossover", price: 25 },
  { id: "truck", name: "Truck / Large SUV", price: 40 },
];

const EXTRAS = [
  { id: "pet-hair", name: "Pet Hair Removal", price: 25 },
  { id: "salt-removal", name: "Salt Removal", price: 20 },
  { id: "odor-removal", name: "Odor Removal", price: 30 },
  { id: "stain-removal", name: "Specific Stain Removal", price: 25 },
  { id: "engine-cleaning", name: "Engine Bay Cleaning", price: 40 },
];

const GST_RATE = 0.05;
const QST_RATE = 0.09975;

export default function BookPage() {
  const [selectedPackage, setSelectedPackage] = useState("care");
  const [selectedVehicle, setSelectedVehicle] = useState("sedan");
  const [selectedExtras, setSelectedExtras] = useState([]);

  const activePackage = useMemo(
    () => PACKAGES.find((pkg) => pkg.id === selectedPackage),
    [selectedPackage]
  );

  const activeVehicle = useMemo(
    () => VEHICLE_TYPES.find((vehicle) => vehicle.id === selectedVehicle),
    [selectedVehicle]
  );

  const extrasTotal = useMemo(() => {
    return selectedExtras.reduce((sum, extraId) => {
      const extra = EXTRAS.find((item) => item.id === extraId);
      return sum + (extra?.price || 0);
    }, 0);
  }, [selectedExtras]);

  const subtotal = (activePackage?.price || 0) + (activeVehicle?.price || 0) + extrasTotal;
  const gst = subtotal * GST_RATE;
  const qst = subtotal * QST_RATE;
  const total = subtotal + gst + qst;

  function toggleExtra(extraId) {
    setSelectedExtras((current) =>
      current.includes(extraId)
        ? current.filter((id) => id !== extraId)
        : [...current, extraId]
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-[#2a2216]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=80"
            alt="Luxury car detailing"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-[#c9a86a]">
              Book Now
            </p>

            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Reserve Your Premium Detailing Experience
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300 md:text-lg">
              Select your package, choose your vehicle type, add any extras you need,
              and review your total with taxes before securing your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">
        <div className="grid gap-8 xl:grid-cols-[1.35fr_0.85fr]">
          {/* LEFT */}
          <div className="space-y-8">
            {/* PACKAGES */}
            <section className="rounded-3xl border border-[#2a2216] bg-[#0b0b0b] p-6 shadow-[0_0_0_1px_rgba(201,168,106,0.03)] md:p-8">
              <div className="mb-6">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#c9a86a]">
                  Step 1
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Choose Your Package
                </h2>
                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  Select the detailing package that best fits the level of care your vehicle needs.
                </p>
              </div>

              <div className="grid gap-4">
                {PACKAGES.map((pkg) => {
                  const isActive = selectedPackage === pkg.id;

                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`rounded-2xl border p-5 text-left transition duration-200 ${
                        isActive
                          ? "border-[#c9a86a] bg-[linear-gradient(180deg,rgba(201,168,106,0.12),rgba(201,168,106,0.04))] shadow-[0_0_30px_rgba(201,168,106,0.08)]"
                          : "border-[#262626] bg-[#111111] hover:border-[#5f4b28] hover:bg-[#131313]"
                      }`}
                    >
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{pkg.name}</h3>
                          <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-400">
                            {pkg.description}
                          </p>
                        </div>

                        <div className="shrink-0">
                          <span className="text-xl font-semibold text-[#d7b47a]">
                            ${pkg.price}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* VEHICLE */}
            <section className="rounded-3xl border border-[#2a2216] bg-[#0b0b0b] p-6 shadow-[0_0_0_1px_rgba(201,168,106,0.03)] md:p-8">
              <div className="mb-6">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#c9a86a]">
                  Step 2
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Select Vehicle Type
                </h2>
                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  Larger vehicles require additional time and care.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {VEHICLE_TYPES.map((vehicle) => {
                  const isActive = selectedVehicle === vehicle.id;

                  return (
                    <button
                      key={vehicle.id}
                      type="button"
                      onClick={() => setSelectedVehicle(vehicle.id)}
                      className={`rounded-2xl border p-5 text-left transition ${
                        isActive
                          ? "border-[#c9a86a] bg-[linear-gradient(180deg,rgba(201,168,106,0.12),rgba(201,168,106,0.04))]"
                          : "border-[#262626] bg-[#111111] hover:border-[#5f4b28] hover:bg-[#131313]"
                      }`}
                    >
                      <div className="text-base font-semibold text-white">{vehicle.name}</div>
                      <div className="mt-2 text-sm text-neutral-400">
                        {vehicle.price === 0 ? "Included" : `+$${vehicle.price}`}
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* EXTRAS */}
            <section className="rounded-3xl border border-[#2a2216] bg-[#0b0b0b] p-6 shadow-[0_0_0_1px_rgba(201,168,106,0.03)] md:p-8">
              <div className="mb-6">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#c9a86a]">
                  Step 3
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Add Optional Extras
                </h2>
                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  Customize your appointment with additional services tailored to your vehicle.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {EXTRAS.map((extra) => {
                  const isChecked = selectedExtras.includes(extra.id);

                  return (
                    <button
                      key={extra.id}
                      type="button"
                      onClick={() => toggleExtra(extra.id)}
                      className={`flex items-center justify-between rounded-2xl border p-5 text-left transition ${
                        isChecked
                          ? "border-[#c9a86a] bg-[linear-gradient(180deg,rgba(201,168,106,0.12),rgba(201,168,106,0.04))]"
                          : "border-[#262626] bg-[#111111] hover:border-[#5f4b28] hover:bg-[#131313]"
                      }`}
                    >
                      <div>
                        <div className="text-base font-semibold text-white">{extra.name}</div>
                      </div>

                      <div className="ml-4 shrink-0 text-sm font-medium text-[#d7b47a]">
                        +${extra.price}
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          </div>

          {/* RIGHT */}
          <aside className="h-fit rounded-3xl border border-[#3b2c14] bg-[linear-gradient(180deg,#111111_0%,#0a0a0a_100%)] p-6 shadow-[0_0_40px_rgba(201,168,106,0.08)] md:p-8 xl:sticky xl:top-24">
            <div className="mb-6">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#c9a86a]">
                Booking Summary
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Your Total
              </h2>
            </div>

            <div className="space-y-4 border-b border-[#2a2216] pb-6">
              <div className="flex items-start justify-between gap-4">
                <span className="text-neutral-400">Package</span>
                <div className="text-right">
                  <div className="font-medium text-white">{activePackage?.name}</div>
                  <div className="text-sm text-neutral-500">${activePackage?.price.toFixed(2)}</div>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4">
                <span className="text-neutral-400">Vehicle</span>
                <div className="text-right">
                  <div className="font-medium text-white">{activeVehicle?.name}</div>
                  <div className="text-sm text-neutral-500">
                    {activeVehicle?.price === 0 ? "$0.00" : `+$${activeVehicle?.price.toFixed(2)}`}
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4">
                <span className="text-neutral-400">Extras</span>
                <div className="text-right">
                  {selectedExtras.length === 0 ? (
                    <div className="text-sm text-neutral-500">No extras selected</div>
                  ) : (
                    <div className="space-y-1">
                      {selectedExtras.map((extraId) => {
                        const extra = EXTRAS.find((item) => item.id === extraId);
                        if (!extra) return null;

                        return (
                          <div key={extra.id} className="text-sm text-white">
                            {extra.name} <span className="text-neutral-500">(+${extra.price.toFixed(2)})</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-3 py-6">
              <div className="flex items-center justify-between text-sm text-neutral-400">
                <span>Subtotal</span>
                <span className="text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-neutral-400">
                <span>GST (5%)</span>
                <span className="text-white">${gst.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-neutral-400">
                <span>QST (9.975%)</span>
                <span className="text-white">${qst.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-[#2a2216] pt-6">
              <span className="text-lg font-semibold text-white">Total</span>
              <span className="text-3xl font-semibold tracking-tight text-[#d7b47a]">
                ${total.toFixed(2)}
              </span>
            </div>

            <div className="mt-6 rounded-2xl border border-[#3b2c14] bg-[#120f0a] p-4">
              <p className="text-sm leading-6 text-neutral-300">
                A <span className="font-semibold text-[#d7b47a]">$50 retainer fee</span> is required to confirm your appointment.
              </p>
            </div>

            <a
              href="https://calendly.com/YOUR-CALENDLY-LINK"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#c9a86a] px-6 py-4 text-base font-semibold text-black transition hover:bg-[#d7b47a]"
            >
              Confirm Your Appointment
            </a>

            <p className="mt-4 text-center text-xs leading-5 text-neutral-500">
              You will be redirected to Calendly to choose your preferred date and time.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
