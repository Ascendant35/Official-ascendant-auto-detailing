"use client";

import Header from "../../components/Header";

export default function Services() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5" }}>
      <Header lang="en" />

      {/* 🔥 HERO (PERFECTLY POSITIONED) */}
      <section style={heroWrapper}>
        <img
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80"
          style={heroImage}
        />

        <div style={heroOverlay} />

        <div style={heroContent}>
          <h1 style={heroTitle}>Our Premium Services</h1>
          <p style={heroText}>
            Precision, refinement, and attention to detail define every service we offer.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={gridSection}>
        <Service img="/exterior.jpg" title="Exterior Detailing" desc="A refined exterior treatment restoring gloss, depth, and a flawless finish." />
        <Service img="/interior.jpg" title="Interior Detailing" desc="A deep interior reset focused on cleanliness, comfort, and a truly luxurious feel." />
        <Service img="/full.jpg" title="Full Detailing" desc="A complete transformation delivering a showroom-level finish inside and out." />
        <Service img="/headlight.jpg" title="Headlight Restoration" desc="Restore clarity and brightness for enhanced visibility and a sharper appearance." />
        <Service img="/engine.jpg" title="Engine Bay Cleaning" desc="Careful detailing that revitalizes and elevates your engine compartment." />
        <Service img="/protection.jpg" title="Paint Protection" desc="Preserve your vehicle’s finish with long-lasting care and deep gloss retention." />
      </section>

      {/* CTA */}
      <section style={extraSection}>
        <div style={extraBox}>
          <h2 style={extraTitle}>Not Finding What You’re Looking For?</h2>
          <p style={extraText}>
            Our team of experts is trained to handle a wide range of specialized requests.
            Whatever your needs may be, we deliver tailored solutions with unmatched precision and care.
          </p>
        </div>
      </section>
    </div>
  );
}

/* SERVICE CARD */
function Service({ img, title, desc }) {
  return (
    <div style={card}>
      <img src={img} style={image} alt={title} />

      <h2 style={titleStyle}>{title}</h2>
      <p style={descStyle}>{desc}</p>

      <a href="/en/book" style={goldBtn}>
        Book Now
      </a>
    </div>
  );
}

/* 🔥 HERO FINAL PERFECT */
const heroWrapper = {
  position: "relative",
  width: "100%",
  height: "500px",
  overflow: "hidden",
};

const heroImage = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center 105%", // 
};

const heroOverlay = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(rgba(0,0,0,0.6), rgba(212,175,55,0.2))",
};

/* 🔥 TEXT POSITION FIX */
const heroContent = {
  position: "absolute",
  top: "60%", // 🔥 moved slightly down so it sits nicely over car
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
};

const heroTitle = {
  fontSize: "58px",
  marginBottom: "12px",
};

const heroText = {
  color: "#ddd",
  fontSize: "18px",
};

/* GRID */
const gridSection = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "80px 50px",
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "40px",
};

const card = {
  backgroundColor: "#111",
  padding: "20px",
  borderRadius: "24px",
};

const image = {
  width: "100%",
  height: "240px",
  objectFit: "cover",
  marginBottom: "20px",
};

const titleStyle = {
  fontSize: "22px",
  marginBottom: "10px",
};

const descStyle = {
  color: "#bbb",
  marginBottom: "20px",
};

/* BUTTON */
const goldBtn = {
  display: "inline-block",
  padding: "12px 24px",
  borderRadius: "999px",
  backgroundColor: "#d4af37",
  color: "#111",
  textDecoration: "none",
  fontWeight: "bold",
};

/* CTA */
const extraSection = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 50px 100px",
};

const extraBox = {
  backgroundColor: "#111",
  padding: "50px",
  borderRadius: "28px",
  border: "1px solid rgba(212,175,55,0.4)",
  textAlign: "center",
};

const extraTitle = {
  fontSize: "36px",
  color: "#d4af37",
};

const extraText = {
  color: "#ccc",
};
