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
            We’re here to provide a seamless, premium experience from your first message.
          </p>
        </div>
      </section>

      {/* INTRO BOX */}
      <section style={section}>
        <div style={box}>
          <h2 style={boxTitle}>A refined service starts with a simple conversation</h2>
          <p style={boxText}>
            Whether you have questions about our services, need guidance selecting the right package,
            or are ready to book your next detailing session, this page gives you direct access to our team.
          </p>
          <p style={boxText}>
            Choose the method that suits you best and we will respond promptly with the level of care and
            professionalism you expect.
          </p>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section style={section}>
        <h2 style={sectionTitle}>Contact Methods</h2>

        <div style={grid}>
          <div style={card}>
            <h3 style={cardTitle}>Phone</h3>
            <p style={cardText}>Call us directly for immediate assistance.</p>
            <p style={goldText}>[Your Phone Number]</p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>Email</h3>
            <p style={cardText}>For inquiries, bookings, or detailed requests.</p>
            <p style={goldText}>ascendantautodetailing@gmail.com</p>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <section style={section}>
        <h2 style={sectionTitle}>Find Us on Social Media</h2>

        <div style={grid}>
          <div style={card}><h3 style={cardTitle}>Instagram</h3><p style={goldText}>@yourhandle</p></div>
          <div style={card}><h3 style={cardTitle}>Facebook</h3><p style={goldText}>Your Page</p></div>
          <div style={card}><h3 style={cardTitle}>TikTok</h3><p style={goldText}>@yourhandle</p></div>
          <div style={card}><h3 style={cardTitle}>Snapchat</h3><p style={goldText}>@yourhandle</p></div>
        </div>
      </section>

      {/* EXTRA TOUCH */}
      <section style={section}>
        <div style={box}>
          <h2 style={boxTitle}>Response Time</h2>
          <p style={boxText}>
            We aim to respond to all inquiries within a few hours. During peak periods,
            response times may extend slightly — but every request is handled with priority and care.
          </p>
        </div>
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
    'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=80")',
  backgroundSize: "cover",
  backgroundPosition: "center center",
};

const container = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "100px 50px",
};

const heroTitle = { fontSize: "60px", marginBottom: "10px" };
const heroText = { fontSize: "20px", color: "#ccc", maxWidth: "600px" };

const section = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "60px 30px",
};

const sectionTitle = {
  fontSize: "36px",
  marginBottom: "30px",
  textAlign: "center",
};

const box = {
  background: "linear-gradient(180deg, rgba(18,18,18,0.95), rgba(10,10,10,0.98))",
  border: "1px solid rgba(212,175,55,0.4)",
  borderRadius: "20px",
  padding: "40px",
  textAlign: "center",
};

const boxTitle = {
  fontSize: "28px",
  marginBottom: "15px",
};

const boxText = {
  color: "#ccc",
  lineHeight: "1.8",
  marginBottom: "10px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
  gap: "25px",
};

const card = {
  backgroundColor: "#111",
  padding: "30px",
  borderRadius: "18px",
  border: "1px solid rgba(212,175,55,0.2)",
  transition: "all 0.3s ease",
};

const cardTitle = {
  fontSize: "22px",
  marginBottom: "10px",
};

const cardText = {
  color: "#bbb",
  marginBottom: "10px",
};

const goldText = {
  color: "#d4af37",
  fontWeight: "600",
};
