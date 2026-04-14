import Header from "../../components/Header";
import Link from "next/link";

export default function AboutEN() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Header lang="en" />

      {/* HERO */}
      <section style={heroStyle}>
        <div style={container}>
          <h1 style={heroTitle}>About Us</h1>
          <p style={heroText}>
            More than detailing — a commitment to precision, refinement, and excellence.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section style={section}>
        <div style={box}>
          <p style={boxText}>
            At Ascendant Auto Detailing, every service is designed to elevate your vehicle beyond expectations.
            We combine technical expertise with a meticulous approach to deliver results that reflect true premium care.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <Section
        title="Our Story"
        text="Ascendant Auto Detailing was built on a simple idea — to deliver a level of care that goes beyond standard detailing. What started as a passion for automotive perfection quickly became a pursuit of excellence, focused on providing clients with a refined and consistent experience."
        image="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80"
      />

      {/* OUR PHILOSOPHY */}
<Section
  title="Our Philosophy"
  text="We believe that true quality lies in the smallest details. Every vehicle is approached with the same level of attention, precision, and discipline — because excellence is not optional. Our philosophy is simple: no shortcuts, no compromises, only results that meet our highest standards."
  image="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80"
  reverse
/>

      {/* OUR PROCESS */}
      <Section
        title="Our Process"
        text="Each service follows a structured approach designed to deliver consistent, high-end results. From initial inspection to deep cleaning and final finishing touches, every step is executed with precision to ensure your vehicle leaves in its best possible condition."
        image="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80"
      />

      {/* OUR STANDARD */}
      <Section
        title="Our Standard"
        text="Our work is guided by a strict internal standard that goes beyond expectations. No vehicle leaves our care without meeting the level of quality we demand — ensuring every client experiences the same exceptional result, every time."
        image="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=1200&q=80"
        reverse
      />

      {/* OUR VISION */}
      <Section
        title="Our Vision"
        text="Our vision is to redefine what vehicle care represents — transforming it from a simple service into a premium experience. We aim to set a new benchmark in detailing, where quality, consistency, and refinement are never compromised."
        image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"
      />

      {/* CTA */}
      <section style={section}>
        <div style={ctaBox}>
          <h2 style={ctaTitle}>Experience the Difference</h2>
          <p style={ctaText}>
            Discover what premium detailing truly feels like.
          </p>
          <Link href="/en/book" style={ctaButton}>
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}

/* REUSABLE SECTION COMPONENT */
function Section({ title, text, image, reverse }) {
  return (
    <section style={section}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "40px",
        alignItems: "center",
      }}>
        <div style={{ order: reverse ? 2 : 1 }}>
          <img
            src={image}
            style={{
              width: "100%",
              borderRadius: "20px",
              objectFit: "cover",
              height: "350px",
            }}
          />
        </div>

        <div style={{ order: reverse ? 1 : 2 }}>
          <h2 style={sectionTitle}>{title}</h2>
          <p style={sectionText}>{text}</p>
        </div>
      </div>
    </section>
  );
}

/* STYLES */

const heroStyle = {
  minHeight: "60vh",
  display: "flex",
  alignItems: "center",
  backgroundImage:
    'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const container = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "100px 50px",
};

const heroTitle = { fontSize: "60px" };
const heroText = { fontSize: "20px", color: "#ccc" };

const section = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "80px 30px",
};

const box = {
  background: "#111",
  border: "1px solid rgba(212,175,55,0.4)",
  borderRadius: "20px",
  padding: "40px",
  textAlign: "center",
};

const boxText = {
  color: "#ccc",
  lineHeight: "1.8",
};

const sectionTitle = {
  fontSize: "34px",
  marginBottom: "15px",
};

const sectionText = {
  color: "#ccc",
  lineHeight: "1.9",
};

const ctaBox = {
  background: "linear-gradient(180deg, rgba(18,18,18,0.95), rgba(10,10,10,0.98))",
  border: "1px solid rgba(212,175,55,0.4)",
  borderRadius: "20px",
  padding: "50px",
  textAlign: "center",
};

const ctaTitle = { fontSize: "36px", marginBottom: "10px" };
const ctaText = { color: "#ccc", marginBottom: "20px" };

const ctaButton = {
  padding: "15px 30px",
  backgroundColor: "#d4af37",
  borderRadius: "999px",
  color: "#111",
  textDecoration: "none",
  fontWeight: "bold",
};
