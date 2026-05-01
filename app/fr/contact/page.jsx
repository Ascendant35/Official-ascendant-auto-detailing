import Header from "../../components/Header";

export default function ContactFR() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Header lang="fr" />

      {/* HERO */}
      <section style={heroStyle}>
        <div style={container}>
          <h1 style={heroTitle}>Contactez-nous</h1>
          <p style={heroText}>
            Une expérience haut de gamme commence par une simple conversation.
          </p>
        </div>
      </section>

      {/* INTRO BOX */}
      <section style={section}>
        <div style={box}>
          <h2 style={boxTitle}>Un service raffiné commence par un échange</h2>
          <p style={boxText}>
            Que vous ayez des questions concernant nos services, que vous ayez besoin
            d’aide pour choisir le bon forfait ou que vous soyez prêt à réserver,
            cette page vous donne un accès direct à notre équipe.
          </p>
          <p style={boxText}>
            Choisissez le moyen de communication qui vous convient et nous vous répondrons
            rapidement avec le niveau de professionnalisme que vous attendez.
          </p>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section style={section}>
        <h2 style={sectionTitle}>Méthodes de contact</h2>

        <div style={grid}>
          <a href="tel:+10000000000" style={cardLink}>
            <div style={card}>
              <h3 style={cardTitle}>Téléphone</h3>
              <p style={cardText}>Appelez-nous directement pour une assistance immédiate.</p>
              <p style={goldText}>+1 (000) 000-0000</p>
            </div>
          </a>

          <a href="mailto:ascendantautodetailing@gmail.com" style={cardLink}>
            <div style={card}>
              <h3 style={cardTitle}>Courriel</h3>
              <p style={cardText}>Pour toute demande, réservation ou information détaillée.</p>
              <p style={goldText}>ascendantautodetailing@gmail.com</p>
            </div>
          </a>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
     {/* SOCIAL MEDIA (FINAL) */}
<section style={section}>
  <h2 style={sectionTitle}>Find Us on Social Media</h2>

  <div style={grid}>
    <a
      href="https://instagram.com/ascendantautodetail"
      target="_blank"
      rel="noopener noreferrer"
      style={cardLink}
    >
      <div style={card}>
        <h3 style={cardTitle}>📸 Instagram</h3>
        <p style={cardText}>@ascendantautodetail</p>
      </div>
    </a>

   <a
  href="https://facebook.com/AscendantAutoDetail"
  target="_blank"
  rel="noopener noreferrer"
  style={cardLink}
>
  <div style={card}>
    <h3 style={cardTitle}>
      <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="#1877F2"
        >
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5V12H17l-.4 3h-2.7v7A10 10 0 0 0 22 12z" />
        </svg>
        Facebook
      </span>
    </h3>

    <p style={cardText}>@ascendantautodetail</p>
  </div>
</a>
    <a
      href="https://tiktok.com/@ascendantautodetail"
      target="_blank"
      rel="noopener noreferrer"
      style={cardLink}
    >
      <div style={card}>
        <h3 style={cardTitle}>🎵 TikTok</h3>
        <p style={cardText}>@ascendantautodetail</p>
      </div>
    </a>

    <a
      href="https://snapchat.com/add/ascendantautodetail"
      target="_blank"
      rel="noopener noreferrer"
      style={cardLink}
    >
      <div style={card}>
        <h3 style={cardTitle}>👻 Snapchat</h3>
        <p style={cardText}>@ascendantautodetail</p>
      </div>
    </a>
  </div>
</section>

      {/* MAP */}
      <section style={section}>
        <h2 style={sectionTitle}>Zone de service</h2>

        <div style={mapContainer}>
          <iframe
            src="https://www.google.com/maps?q=Montreal,QC&z=11&output=embed"
            width="100%"
            height="320"
            style={{ border: "0", borderRadius: "20px" }}
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section style={section}>
        <h2 style={sectionTitle}>Envoyez-nous un message</h2>

        <form action="/api/contact" method="POST" style={form}>
          <input name="name" placeholder="Votre nom" required style={input} />
          <input name="email" placeholder="Votre courriel" required style={input} />
          <textarea name="message" placeholder="Votre message" required style={textarea}></textarea>
          <button type="submit" style={button}>Envoyer le message</button>
        </form>
      </section>

      {/* RESPONSE TIME */}
      <section style={section}>
        <div style={box}>
          <h2 style={boxTitle}>Temps de réponse</h2>
          <p style={boxText}>
            Nous nous efforçons de répondre à toutes les demandes dans un délai de quelques heures.
            Lors des périodes plus achalandées, ce délai peut être légèrement plus long, mais chaque
            demande est traitée avec priorité et attention.
          </p>
        </div>
      </section>
    </div>
  );
}

/* STYLES (UNCHANGED) */

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
};

const cardLink = { textDecoration: "none", color: "inherit" };

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
