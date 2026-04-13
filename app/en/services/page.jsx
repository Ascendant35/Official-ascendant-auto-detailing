import Header from "../../components/Header";

export default function Services() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Header lang="en" />

      {/* HERO (UPDATED IMAGE) */}
      <section style={heroStyle}>
        <div style={container}>
          <h1 style={heroTitle}>Our Premium Services</h1>
          <p style={heroText}>
            Precision, care, and attention to detail define every service we offer.
            Experience a new standard of automotive refinement.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={gridSection}>

        <Service img="/exterior.jpg" />
<Service img="/interior.jpg" />
<Service img="/full.jpg" />
<Service img="/headlight.jpg" />
<Service img="/engine.jpg" />
<Service img="/protection.jpg" />
      </section>

      {/* PREMIUM EXTRA SERVICES BOX */}
      <section style={extraSection}>
        <div style={extraBox}>
          <h2 style={extraTitle}>More Than Just Services</h2>
          <p style={extraText}>
            Every vehicle is unique. If you have specific needs or requests, we offer
            fully customized solutions tailored to your expectations. Simply let us know,
            and we will take care of the rest with the highest level of precision.
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
      <img src={img} style={image} />
      <h2 style={titleStyle}>{title}</h2>
      <p style={descStyle}>{desc}</p>
    </div>
  );
}

/* STYLES */

const heroStyle = {
  minHeight: "65vh",
  display: "flex",
  alignItems: "center",
  backgroundImage:
    'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.85)), url("https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const container = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "100px 50px",
};

const heroTitle = { fontSize: "64px" };

const heroText = {
  fontSize: "20px",
  color: "#ccc",
  maxWidth: "700px",
};

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
  fontSize: "24px",
  marginBottom: "10px",
};

const descStyle = {
  color: "#bbb",
  lineHeight: "1.6",
};

/* EXTRA BOX */

const extraSection = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 50px 120px",
};

const extraBox = {
  backgroundColor: "#111",
  padding: "50px",
  borderRadius: "28px",
  border: "1px solid rgba(212,175,55,0.3)",
  textAlign: "center",
};

const extraTitle = {
  fontSize: "40px",
  marginBottom: "20px",
  color: "#d4af37",
};

const extraText = {
  fontSize: "18px",
  color: "#ccc",
  maxWidth: "800px",
  margin: "0 auto",
};
