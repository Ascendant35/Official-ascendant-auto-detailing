import Header from "../../components/Header";
import Link from "next/link";

export default function TarifsEN() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Header lang="en" />

      {/* HERO */}
      <section style={heroStyle}>
        <div style={container}>
          <h1 style={heroTitle}>Our Premium Packages</h1>
          <p style={heroText}>
            Services designed to keep your vehicle in impeccable condition,
            with both one-time options and regular maintenance plans.
          </p>
        </div>
      </section>

     {/* PACKAGES SECTION */}
<section className="bg-slate-50 px-4 py-16 md:py-20 text-slate-900">
  <div className="mx-auto max-w-6xl">

    {/* HEADER */}
    <div className="text-center">
      <p className="text-sm tracking-[0.25em] text-slate-500">PRICING</p>
      <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
        Packages
      </h1>
    </div>

    {/* ORIGINAL PACKAGES (UNCHANGED) */}
    <div className="mt-12 grid gap-6 md:grid-cols-3">

      {/* CARE */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <h3 className="text-xl font-semibold">Ascendant Care</h3>
  <p className="mt-2 text-sm text-slate-500">Essential maintenance</p>

  {/* ONE TIME */}
  <div className="mt-6 space-y-2 text-sm">
    <p className="font-medium">One-Time Service</p>
    <p>Car: $179.99</p>
    <p>SUV: $199.99</p>
    <p>Truck / Large SUV: $219.99</p>
  </div>

  {/* 4 VISIT DEAL */}
  <div className="mt-6 border-t pt-4 space-y-2 text-sm">
    <p className="font-medium text-slate-800">4 Visit Package</p>
    <p>Car: $679.99</p>
    <p>SUV: $779.99</p>
    <p>Truck / Large SUV: $879.99</p>
  </div>
</div>

      {/* ELITE */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
  <h3 className="text-xl font-semibold">Ascendant Elite</h3>
  <p className="mt-2 text-sm text-slate-500">Enhanced care</p>

  {/* ONE TIME */}
  <div className="mt-6 space-y-2 text-sm">
    <p className="font-medium">One-Time Service</p>
    <p>Car: $249.99</p>
    <p>SUV: $279.99</p>
    <p>Truck / Large SUV: $299.99</p>
  </div>

  {/* 4 VISIT DEAL */}
  <div className="mt-6 border-t pt-4 space-y-2 text-sm">
    <p className="font-medium text-slate-800">4 Visit Package</p>
    <p>Car: $999.99</p>
    <p>SUV: $1089.99</p>
    <p>Truck / Large SUV: $1239.99</p>
  </div>
</div>
      {/* SIGNATURE */}
     <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <h3 className="text-xl font-semibold">Ascendant Signature</h3>
  <p className="mt-2 text-sm text-slate-500">Ultimate luxury</p>

  {/* ONE TIME */}
  <div className="mt-6 space-y-2 text-sm">
    <p className="font-medium">One-Time Service</p>
    <p>Car: $349.99</p>
    <p>SUV: $379.99</p>
    <p>Truck / Large SUV: $399.99</p>
  </div>

  {/* 4 VISIT DEAL */}
  <div className="mt-6 border-t pt-4 space-y-2 text-sm">
    <p className="font-medium text-slate-800">4 Visit Package</p>
    <p>Car: $1349.99</p>
    <p>SUV: $1449.99</p>
    <p>Truck / Large SUV: $1499.99</p>
  </div>
</div>

    {/* ===================== */}
    {/* NEW PACKAGE DEALS SECTION */}
    {/* ===================== */}

    <div className="mt-20 text-center">
      <p className="text-sm tracking-[0.25em] text-slate-500">
        EXCLUSIVE OFFER
      </p>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
        4 Visit Package Deals
      </h2>
      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        Designed for clients who want consistent, high-end results year-round.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-3">

      {/* CARE DEAL */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold">Ascendant Care</h3>

        <div className="mt-6 space-y-2 text-sm">
          <p>Car: $679.99</p>
          <p>SUV: $779.99</p>
          <p>Truck / Large SUV: $879.99</p>
        </div>

        <p className="mt-6 text-xs text-slate-400">
          4 detailing visits
        </p>
      </div>

      {/* ELITE DEAL */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
        <h3 className="text-xl font-semibold">Ascendant Elite</h3>

        <div className="mt-6 space-y-2 text-sm">
          <p>Car: $999.99</p>
          <p>SUV: $1089.99</p>
          <p>Truck / Large SUV: $1239.99</p>
        </div>

        <p className="mt-6 text-xs text-slate-400">
          4 premium visits
        </p>
      </div>

      {/* SIGNATURE DEAL */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold">Ascendant Signature</h3>

        <div className="mt-6 space-y-2 text-sm">
          <p>Car: $1349.99</p>
          <p>SUV: $1449.99</p>
          <p>Truck / Large SUV: $1499.99</p>
        </div>

        <p className="mt-6 text-xs text-slate-400">
          4 signature visits
        </p>
      </div>

    </div>

    {/* ===================== */}
    {/* EXTRAS SERVICES (KEEP YOUR EXISTING BELOW THIS) */}
    {/* ===================== */}

  </div>
</section>
      {/* WHY CHOOSE */}
      <section style={whySection}>
        <h2 style={whyTitle}>Which package should you choose?</h2>

        <div style={whyGrid}>
          <div style={choiceStyle}>
            <strong style={gold}>Ascendant Care</strong>
            <p>Perfect for regular maintenance.</p>
          </div>

          <div style={choiceStyle}>
            <strong style={gold}>Ascendant Elite</strong>
            <p>The best choice for most clients.</p>
          </div>

          <div style={choiceStyle}>
            <strong style={gold}>Ascendant Signature</strong>
            <p>For an impeccable, high-end result.</p>
          </div>
        </div>
      </section>

      {/* EXTRA SERVICES */}
      <section style={extraSection}>
        <h2 style={{ fontSize: "40px", marginBottom: "30px", textAlign: "center" }}>
          Additional Services
        </h2>

        <div style={extraGrid}>
          <Extra title="Pet hair removal" price="Starting at $30" />
          <Extra title="Salt / calcium removal" price="Starting at $25" />
          <Extra title="Odor treatment" price="$40 - $80" />
          <Extra title="Stain removal" price="Starting at $20" />
          <Extra title="Engine cleaning" price="$50" />
          <Extra title="Leather treatment" price="$60" />
        </div>
      </section>
    </div>
  );
}

/* EXTRA COMPONENT */
function Extra({ title, price }) {
  return (
    <div style={extraCard}>
      <h3>{title}</h3>
      <p style={{ color: "#d4af37" }}>{price}</p>
    </div>
  );
}

/* SAME STYLES (UNCHANGED) */

const heroStyle = {
  minHeight: "65vh",
  display: "flex",
  alignItems: "center",
  backgroundImage:
    'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=80")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const container = { maxWidth: "1400px", margin: "0 auto", padding: "100px 50px" };
const heroTitle = { fontSize: "64px" };
const heroText = { fontSize: "20px", color: "#ccc", maxWidth: "700px" };

const gridSection = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "100px 50px",
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "40px",
};

const card = {
  backgroundColor: "#111",
  padding: "35px",
  borderRadius: "28px",
  border: "1px solid rgba(255,255,255,0.05)",
};

const title = { fontSize: "28px" };
const desc = { color: "#bbb", marginBottom: "20px" };
const price = { color: "#d4af37", marginBottom: "20px" };

const subscription = {
  backgroundColor: "#0d0d0d",
  padding: "15px",
  borderRadius: "12px",
  marginBottom: "20px",
};

const subTitle = { color: "#d4af37", marginBottom: "10px" };
const gold = { color: "#d4af37", fontWeight: "bold" };

const list = { paddingLeft: "18px", lineHeight: "1.8" };

const btn = {
  display: "inline-block",
  marginTop: "20px",
  padding: "12px 24px",
  border: "1px solid #d4af37",
  borderRadius: "999px",
  color: "#fff",
  textDecoration: "none",
};

const goldBtn = { ...btn, backgroundColor: "#d4af37", color: "#111" };

const badge = {
  position: "absolute",
  top: "-10px",
  right: "20px",
  backgroundColor: "#d4af37",
  color: "#111",
  padding: "6px 12px",
  borderRadius: "999px",
};

const whySection = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 50px 100px",
  textAlign: "center",
};

const whyTitle = { fontSize: "44px", marginBottom: "40px" };

const whyGrid = {
  display: "grid",
  gap: "25px",
  textAlign: "left",
};

const choiceStyle = {
  backgroundColor: "#111",
  padding: "25px",
  borderRadius: "18px",
};

const extraSection = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "0 50px 100px",
};

const extraGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "20px",
};

const extraCard = {
  backgroundColor: "#111",
  padding: "25px",
  borderRadius: "16px",
};
{/* PACKAGE DEALS SECTION */}
<section className="mt-20 px-4 md:px-8">
  <div className="max-w-6xl mx-auto text-center">
    <p className="text-sm tracking-[0.25em] text-slate-500">EXCLUSIVE OFFERS</p>
    <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
      4 Visit Package Deals
    </h2>
    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
      Maintain your vehicle at its peak condition with our 4 visit packages.
      Designed for clients who demand consistency, quality, and long-term care.
    </p>
  </div>

  <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
    
    {/* ASCENDANT CARE */}
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">Ascendant Care</h3>
      <p className="mt-2 text-sm text-slate-500">Essential maintenance package</p>

      <div className="mt-6 space-y-2 text-slate-700">
        <p>Car: <span className="font-medium">$679.99</span></p>
        <p>SUV: <span className="font-medium">$779.99</span></p>
        <p>Truck / Large SUV: <span className="font-medium">$879.99</span></p>
      </div>

      <p className="mt-6 text-xs text-slate-400">
        4 professional detailing visits
      </p>
    </div>

    {/* ASCENDANT ELITE */}
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
      <h3 className="text-xl font-semibold text-slate-900">Ascendant Elite</h3>
      <p className="mt-2 text-sm text-slate-500">Enhanced interior & exterior care</p>

      <div className="mt-6 space-y-2 text-slate-700">
        <p>Car: <span className="font-medium">$999.99</span></p>
        <p>SUV: <span className="font-medium">$1089.99</span></p>
        <p>Truck / Large SUV: <span className="font-medium">$1239.99</span></p>
      </div>

      <p className="mt-6 text-xs text-slate-400">
        4 premium detailing visits
      </p>
    </div>

    {/* ASCENDANT SIGNATURE */}
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">Ascendant Signature</h3>
      <p className="mt-2 text-sm text-slate-500">Ultimate luxury detailing experience</p>

      <div className="mt-6 space-y-2 text-slate-700">
        <p>Car: <span className="font-medium">$1349.99</span></p>
        <p>SUV: <span className="font-medium">$1449.99</span></p>
        <p>Truck / Large SUV: <span className="font-medium">$1499.99</span></p>
      </div>

      <p className="mt-6 text-xs text-slate-400">
        4 signature-level detailing visits
      </p>
    </div>

  </div>
</section>
