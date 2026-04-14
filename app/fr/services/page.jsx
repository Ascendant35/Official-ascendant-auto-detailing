"use client";

import Header from "../../components/Header";

export default function Services() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5" }}>
      <Header lang="fr" />

      {/* 🔥 HERO */}
      <section style={heroWrapper}>
        <img
          src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1600&q=80"
          style={heroImage}
          alt="Nettoyage automobile de luxe"
        />

        <div style={heroOverlay} />

        <div style={heroContent}>
          <h1 style={heroTitle}>Nos Services Premium</h1>
          <p style={heroText}>
            Précision, raffinement et souci du détail définissent chacun de nos services.
          </p>
        </div>
      </section>

      {/* 🔥 INTRO SECTION */}
      <section style={introSection}>
        <div style={introBox}>
          <h2 style={introTitle}>Un Standard de Détail Supérieur</h2>
          <p style={introText}>
            Chez Ascendant Auto Detailing, chaque service est conçu pour élever votre véhicule au-delà d’un simple nettoyage.
            Nous mettons l’accent sur la précision, le raffinement et une attention méticuleuse aux détails afin d’offrir une finition véritablement premium.
            Que ce soit pour restaurer l’intérieur de votre véhicule ou améliorer son apparence extérieure, nos services sont pensés
            pour dépasser vos attentes et refléter le plus haut niveau de soin automobile.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={gridSection}>
        <Service img="/exterior.jpg" title="Nettoyage Extérieur" desc="Un traitement extérieur raffiné qui restaure la brillance, la profondeur et une finition impeccable." />
        <Service img="/interior.jpg" title="Nettoyage Intérieur" desc="Un nettoyage intérieur complet axé sur la propreté, le confort et une sensation véritablement luxueuse." />
        <Service img="/full.jpg" title="Nettoyage Complet" desc="Une transformation complète offrant une finition digne d’une salle de montre, à l’intérieur comme à l’extérieur." />
        <Service img="/headlight.jpg" title="Restauration des Phares" desc="Restaurez la clarté et la luminosité pour une meilleure visibilité et une apparence plus nette." />
        <Service img="/engine.jpg" title="Nettoyage du Moteur" desc="Un nettoyage soigné qui redonne éclat et propreté à votre compartiment moteur." />
        <Service img="/protection.jpg" title="Protection de la Peinture" desc="Préservez la finition de votre véhicule avec une protection durable et une brillance profonde." />
      </section>

      {/* CTA */}
      <section style={extraSection}>
        <div style={extraBox}>
          <h2 style={extraTitle}>Vous ne trouvez pas ce que vous cherchez ?</h2>
          <p style={extraText}>
            Notre équipe d’experts est formée pour répondre à une grande variété de demandes spécifiques.
            Quels que soient vos besoins, nous proposons des solutions sur mesure avec une précision et un soin inégalés.
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

      <a href="/fr/book" style={goldBtn}>
        Réserver
      </a>
    </div>
  );
}

/* 🔥 HERO FIXED (FULL WIDTH + FULL IMAGE) */
const heroWrapper = {
  position: "relative",
  width: "100%",
  height: "75vh",
  minHeight: "600px",
  overflow: "hidden",
  backgroundColor: "#000",
};
const heroImage = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center 75%",
};
const heroOverlay = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.4))",
};

const heroContent = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
};

const heroTitle = {
  fontSize: "60px",
  marginBottom: "12px",
};

const heroText = {
  color: "#ddd",
  fontSize: "18px",
};

/* 🔥 INTRO */
const introSection = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "80px 30px 30px",
};

const introBox = {
  backgroundColor: "#111",
  padding: "60px",
  borderRadius: "28px",
  border: "1px solid rgba(212,175,55,0.35)",
  textAlign: "center",
};

const introTitle = {
  fontSize: "36px",
  marginBottom: "20px",
  color: "#d4af37",
};

const introText = {
  color: "#ccc",
  fontSize: "17px",
  lineHeight: "1.9",
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
  padding: "25px",
  borderRadius: "24px",
  transition: "0.3s",
};

const image = {
  width: "100%",
  height: "240px",
  objectFit: "cover",
  marginBottom: "20px",
  borderRadius: "16px",
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
  padding: "12px 26px",
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
  padding: "60px",
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
