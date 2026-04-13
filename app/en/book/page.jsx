"use client";

import { useState } from "react";

export default function BookNowPage() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [vehicle, setVehicle] = useState("sedan");
  const [addons, setAddons] = useState([]);

  // ✅ PACKAGES (KEEP YOUR PRICES HERE)
  const packages = [
    { name: "Ascendant Care", price: 120 },
    { name: "Ascendant Elite", price: 180 },
    { name: "Ascendant Signature", price: 250 },
  ];

  // ✅ VEHICLE TYPES
  const vehicles = {
    sedan: 0,
    suv: 20,
    truck: 30,
  };

  // ✅ ADD-ONS
  const addOnOptions = [
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

  // ✅ PRICE CALCULATION
  const basePrice = selectedPackage
    ? packages.find((p) => p.name === selectedPackage).price
    : 0;

  const vehiclePrice = vehicles[vehicle];

  const addonsPrice = addons.reduce((total, addon) => {
    const found = addOnOptions.find((a) => a.name === addon);
    return total + (found ? found.price : 0);
  }, 0);

  const subtotal = basePrice + vehiclePrice + addonsPrice;

  const gst = subtotal * 0.05;
  const qst = subtotal * 0.09975;

  const total = subtotal + gst + qst;

  return (
    <div className="bg-black text-white min-h-screen">

      {/* 🔥 HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2"
          className="absolute w-full h-full object-cover opacity-40"
        />
        <div className="relative text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-wide">
            Book Your Experience
          </h1>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Select your service, customize your vehicle care, and secure your appointment effortlessly.
          </p>
        </div>
      </section>

      {/* 🔥 MAIN SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div>

          {/* PACKAGES */}
          <h2 className="text-2xl font-semibold mb-4">Select Your Package</h2>
          <div className="space-y-4">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                onClick={() => setSelectedPackage(pkg.name)}
                className={`p-4 border rounded-xl cursor-pointer transition ${
                  selectedPackage === pkg.name
                    ? "border-yellow-500 bg-yellow-500/10"
                    : "border-gray-700"
                }`}
              >
                <div className="flex justify-between">
                  <span>{pkg.name}</span>
                  <span>${pkg.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* VEHICLE */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Vehicle Type
          </h2>
          <select
            className="w-full p-3 bg-black border border-gray-700 rounded-lg"
            onChange={(e) => setVehicle(e.target.value)}
          >
            <option value="sedan">Sedan</option>
            <option value="suv">SUV (+$20)</option>
            <option value="truck">Truck (+$30)</option>
          </select>

          {/* ADD-ONS */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Add-Ons
          </h2>
          <div className="space-y-3">
            {addOnOptions.map((addon) => (
              <div
                key={addon.name}
                onClick={() => toggleAddon(addon.name)}
                className={`p-3 border rounded-lg cursor-pointer ${
                  addons.includes(addon.name)
                    ? "border-yellow-500 bg-yellow-500/10"
                    : "border-gray-700"
                }`}
              >
                {addon.name} (+${addon.price})
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (TOTAL) */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 h-fit sticky top-10">

          <h2 className="text-2xl font-semibold mb-6">Your Total</h2>

          <div className="space-y-3 text-gray-300">
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

          <div className="border-t border-gray-700 my-6"></div>

          <div className="flex justify-between text-xl font-semibold">
            <span>Total</span>
            <span className="text-yellow-500">${total.toFixed(2)}</span>
          </div>

          {/* NOTICE */}
          <p className="text-sm text-gray-400 mt-6">
            A $50 retainer fee is required to confirm your appointment.
          </p>

          {/* BUTTON */}
          <a
            href="https://calendly.com/YOUR-LINK"
            target="_blank"
            className="block mt-6 text-center bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
