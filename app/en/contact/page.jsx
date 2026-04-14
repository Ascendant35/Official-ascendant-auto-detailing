import Header from "../../components/Header";

export default function ContactEN() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Header lang="en" />

      {/* HERO */}
      <section style={heroStyle}>
        <div style={container}>
          <h1 style={heroTitle}>Contact Us</h1>
          <p style={heroText}>
            A premium experience begins with a simple conversation.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section style={section}>
        <div style={box}>
          <h2 style={boxTitle}>We’re here to assist you</h2>
          <p style={boxText}>
            Whether you’re ready to book, need guidance, or simply have a question,
            our team is available to provide a seamless and professional experience.
          </p>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section style={section}>
        <h2 style={sectionTitle}>Contact Methods</h2>

        <div style={grid}>
          <a href="tel:+10000000000" style={cardLink}>
            <div style={card}>
              <h3 style={cardTitle}>Phone</h3>
              <p style={cardText}>Tap to call us directly</p>
              <p style={goldText}>+1 (000) 000-0000</p>
            </div>
          </a>

          <a href="mailto:ascendantautodetailing@gmail.com" style={cardLink}>
            <div style={card}>
              <h3 style={cardTitle}>Email</h3>
              <p style={cardText}>Send us a message anytime</p>
              <p style={goldText}>ascendantautodetailing@gmail.com</p>
            </div>
          </a>
        </div>
      </section>

      {/* SOCIAL */}
      <section style={section}>
        <h2 style={sectionTitle}>Social Media</h2>

        <div style={grid}>
          <a href="#" target="_blank" style={cardLink}><div style={card}><h3>Instagram</h3></div></a>
          <a href="#" target="_blank" style={cardLink}><div style={card}><h3>Facebook</h3></div></a>
          <a href="#" target="_blank" style={cardLink}><div style={card}><h3>TikTok</h3></div></a>
          <a href="#" target="_blank" style={cardLink}><div style={card}><h3>Snapchat</h3></div></a>
        </div>
      </section>

      {/* MAP */}
      <section style={section}>
        <h2 style={sectionTitle}>Our Service Area</h2>

        <div style={mapContainer}>
          <iframe
            src="https://www.google.com/maps?q=Montreal,QC&z=10&output=embed"
            width="100%"
            height="400"
            style={{ border: "0", borderRadius: "20px" }}
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section style={section}>
        <h2 style={sectionTitle}>Send Us a Message</h2>

        <form action="/api/contact" method="POST" style={form}>
          <input name="name" placeholder="Your Name" required style={input} />
          <input name="email" placeholder="Your Email" required style={input} />
          <textarea name="message" placeholder="Your Message" required style={textarea}></textarea>
          <button type="submit" style={button}>Send Message</button>
        </form>
      </section>
    </div>
  );
}

/* STYLES */

const heroStyle = {
  minHeight: "60vh",
  display: "flex",
  alignItems: "center",
  backgroundImage:
    'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const container = { maxWidth: "1400px", margin: "0 auto", padding: "100px 50px" };

const heroTitle = { fontSize: "60px" };
const heroText = { fontSize: "20px", color: "#ccc" };

const section = { maxWidth: "1100px", margin: "0 auto", padding: "60px 30px" };

const sectionTitle = { fontSize: "36px", marginBottom: "30px", textAlign: "center" };

const box = {
  background: "#111",
  border: "1px solid rgba(212,175,55,0.4)",
  borderRadius: "20px",
  padding: "40px",
  textAlign: "center",
};

const boxTitle = { fontSize: "28px", marginBottom: "10px" };
const boxText = { color: "#ccc" };

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
  gap: "20px",
};

const card = {
  backgroundColor: "#111",
  padding: "30px",
  borderRadius: "18px",
  border: "1px solid rgba(212,175,55,0.2)",
};

const cardLink = { textDecoration: "none", color: "inherit" };

const cardTitle = { fontSize: "22px" };
const cardText = { color: "#bbb" };
const goldText = { color: "#d4af37" };

const mapContainer = {
  border: "1px solid rgba(212,175,55,0.3)",
  borderRadius: "20px",
  overflow: "hidden",
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const input = {
  padding: "15px",
  borderRadius: "10px",
  border: "1px solid #333",
  background: "#111",
  color: "white",
};

const textarea = {
  ...input,
  minHeight: "120px",
};

const button = {
  padding: "15px",
  backgroundColor: "#d4af37",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  cursor: "pointer",
};
