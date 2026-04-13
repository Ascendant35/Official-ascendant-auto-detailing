import Header from "../../components/Header";

export default function Services() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Header lang="en" />

      {/* HERO (SMALLER + GOLD TONE) */}
      <section style={heroStyle}>
        <div style={container}>
          <h1 style={heroTitle}>Our Premium Services</h1>
          <p style={heroText}>
            Precision, refinement, and attention to detail define every service we offer.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={gridSection}>

        <Service 
          img="/exterior.jpg" 
          title="Exterior Detailing" 
          desc="A refined exterior treatment restoring gloss, depth, and a flawless finish." 
        />

        <Service 
          img="/interior.jpg" 
          title="Interior Detailing" 
          desc="A deep interior reset focused on cleanliness, comfort, and a truly luxurious feel." 
        />

        <Service 
          img="/full.jpg" 
          title="Full Detailing" 
          desc="A complete transformation delivering a showroom-level finish inside and out." 
        />

        <Service 
          img="/headlight.jpg" 
          title="Headlight Restoration" 
          desc="Restore clarity and brightness for enhanced visibility and a sharper appearance." 
        />

        <Service 
          img="/engine.jpg" 
          title="Engine Bay Cleaning" 
          desc="Careful detailing that revitalizes and elevates your engine compartment." 
        />

        <Service 
          img="/protection.jpg" 
          title="Paint Protection" 
          desc="Preserve your vehicle’s finish with long-lasting care and deep gloss retention." 
        />

      </section>

      {/* PREMIUM CTA BOX */}
      <section style={extraSection}>
        <div style={extraBox}>
          <h2 style={extraTitle}>Not Finding What You’re Looking For?</h2>
          <p style={extraText}>
            Our team of professionals is trained to handle a wide range of specialized requests.
            Whatever your vehicle needs, we offer tailored solutions designed to meet the highest
            standards of care and precision.
          </p>
        </div>
      </section>

    </div>
  );
}

/* COMPONENT */
function Service({ img, title, desc }) {
  return (
    <div style={card}>
      <img src={img} style={image} alt={title} />
      <h2 style={titleStyle}>{title}</h2>
      <p style={descStyle}>{desc}</p>
    </div>
  );
}

/* HERO (FIXED) */
const heroStyle = {
  minHeight: "45vh", // 🔥 smaller
  display: "flex",
  alignItems: "center",
  backgroundImage:
    'linear-gradient(rgba(0,0,0,0.7), rgba(212,175,55,0.25)), url("https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const container = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "80px 50px",
};

const heroTitle = { fontSize: "56px" };

const heroText = {
  fontSize: "18px",
  color: "#ddd",
  maxWidth: "600px",
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
  border: "1px solid rgba(255,255,255,0.05)",
};

const image = {
  width: "100%",
  height: "240px",
  objectFit: "cover",
  borderRadius: "16px",
  marginBottom: "20px",
};

const titleStyle = {
  fontSize: "22px",
  marginBottom: "10px",
};

const descStyle = {
  color: "#bbb",
  lineHeight: "1.6",
};

/* PREMIUM BOX */
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
  marginBottom: "20px",
  color: "#d4af37",
};

const extraText = {
  fontSize: "18px",
  color: "#ccc",
  maxWidth: "800px",
  margin: "0 auto",
};
