"use client";

import { useState } from "react";

export default function BookNowPage() {
  const [selectedPackage, setSelectedPackage] = useState("care");
  const [vehicle, setVehicle] = useState("sedan");
  const [addons, setAddons] = useState([]);

  const packages = [
    { id: "care", name: "Ascendant Care", price: 120 },
    { id: "elite", name: "Ascendant Elite", price: 180 },
    { id: "signature", name: "Ascendant Signature", price: 250 },
  ];

  const vehiclePrices = {
    sedan: 0,
    suv: 25,
    truck: 40,
  };

  const addOnsList = [
    { name: "Pet Hair Removal", price: 25 },
    { name: "Salt Removal", price: 20 },
    { name: "Odor Removal", price: 30 },
    { name: "Stain Removal", price: 25 },
    { name: "Engine Cleaning", price: 40 },
  ];

  const toggleAddon = (addon) => {
    if (addons.includes(addon)) {
      setAddons(addons.filter((a) => a !== addon));
    } else {
      setAddons([...addons, addon]);
    }
  };

  const basePrice = packages.find(p => p.id === selectedPackage)?.price || 0;
  const vehiclePrice = vehiclePrices[vehicle];

  const addonsTotal = addons.reduce((total, addon) => {
    const found = addOnsList.find(a => a.name === addon);
    return total + (found ? found.price : 0);
  }, 0);

  const subtotal = basePrice + vehiclePrice + addonsTotal;
  const gst = subtotal * 0.05;
  const qst = subtotal * 0.09975;
  const total = subtotal + gst + qst;

  return (
    <div className="bg-[#050505] text-white min-h-screen">

      {/* 🔥 HERO (FIXED SIZE + NEW IMAGE) */}
      <section className="relative h-[45vh] flex items-center border-b border-[#1a1a1a]">
        <img
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-sm tracking-[0.3em] text-yellow-500 mb-3">
            BOOK NOW
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold">
            Reserve Your Premium Experience
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl">
            Select your package, customize your service, and review your total before securing your appointment.
          </p>
        </div>
      </section>

      {/* 🔥 CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="space-y-12">

          {/* PACKAGES */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Choose Your Package</h2>

            <div className="grid gap-4">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`p-6 rounded-2xl cursor-pointer transition border ${
                    selectedPackage === pkg.id
                      ? "border-yellow-500 bg-[#111]"
                      : "border-[#222] bg-[#0a0a0a] hover:border-yellow-500/40"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{pkg.name}</h3>
                    <span className="text-yellow-500 font-semibold">
                      ${pkg.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VEHICLE */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Vehicle Type</h2>

            <div className="grid grid-cols-3 gap-4">
              {Object.entries(vehiclePrices).map(([type, price]) => (
                <div
                  key={type}
                  onClick={() => setVehicle(type)}
                  className={`p-4 rounded-xl text-center cursor-pointer border ${
                    vehicle === type
                      ? "border-yellow-500 bg-[#111]"
                      : "border-[#222] bg-[#0a0a0a]"
                  }`}
                >
                  <p className="capitalize">{type}</p>
                  <p className="text-sm text-gray-400">
                    {price === 0 ? "Included" : `+$${price}`}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ADD-ONS */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Add-Ons</h2>

            <div className="grid grid-cols-2 gap-4">
              {addOnsList.map((addon) => (
                <div
                  key={addon.name}
                  onClick={() => toggleAddon(addon.name)}
                  className={`p-4 rounded-xl cursor-pointer border ${
                    addons.includes(addon.name)
                      ? "border-yellow-500 bg-[#111]"
                      : "border-[#222] bg-[#0a0a0a]"
                  }`}
                >
                  <p>{addon.name}</p>
                  <p className="text-sm text-gray-400">
                    +${addon.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT SIDE (TOTAL BOX) */}
        <div className="bg-[#0a0a0a] border border-[#222] rounded-2xl p-8 h-fit sticky top-20">

          <h2 className="text-2xl font-semibold mb-6">Your Total</h2>

          <div className="space-y-3 text-gray-400">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>GST (5%)</span>
              <span>${gst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>QST (9.975%)</span>
              <span>${qst.toFixed(2)}</span>
            </div>
          </div>

          <div className="border-t border-[#222] my-6"></div>

          <div className="flex justify-between text-xl font-semibold">
            <span>Total</span>
            <span className="text-yellow-500">${total.toFixed(2)}</span>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            A $50 retainer fee is required to confirm your appointment.
          </p>

          <a
            href="https://calendly.com/YOUR-LINK"
            target="_blank"
            className="block mt-6 text-center bg-yellow-500 text-black py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
          >
            Confirm Appointment
          </a>
        </div>

      </div>
    </div>
  );
}
