import Header from "../../components/Header";
import Link from "next/link";

export default function AboutFR() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Header lang="fr" />

      {/* HERO */}
      <section style={heroStyle}>
        <div style={container}>
          <h1 style={heroTitle}>À Propos</h1>
          <p style={heroText}>
            Bien plus qu’un detailing — un engagement envers la précision, le raffinement et l’excellence.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section style={section}>
        <div style={box}>
          <p style={boxText}>
            Chez Ascendant Auto Detailing, chaque service est conçu pour élever votre véhicule au-delà des attentes.
            Nous combinons expertise technique et approche méticuleuse afin d’offrir des résultats qui reflètent un véritable soin haut de gamme.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <Section
        title="Notre Histoire"
        text="Ascendant Auto Detailing est né d’une idée simple — offrir un niveau de soin qui dépasse le detailing standard. Ce qui a commencé comme une passion pour la perfection automobile est rapidement devenu une véritable quête d’excellence, avec pour mission d’offrir à chaque client une expérience raffinée et constante."
        image="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80"
      />

      {/* OUR PHILOSOPHY */}
      <Section
        title="Notre Philosophie"
        text="Nous croyons que la véritable qualité se trouve dans les plus petits détails. Chaque véhicule est traité avec le même niveau d’attention, de précision et de rigueur — car l’excellence n’est jamais optionnelle. Notre philosophie est simple : aucun raccourci, aucun compromis, seulement des résultats à la hauteur de nos standards les plus élevés."
        image=ssrc="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"
        
      {/* OUR PROCESS */}
      <Section
        title="Notre Processus"
        text="Chaque service suit une méthode structurée conçue pour offrir des résultats constants et haut de gamme. De l’inspection initiale au nettoyage en profondeur, jusqu’aux touches de finition, chaque étape est exécutée avec précision afin que votre véhicule quitte entre nos mains dans le meilleur état possible."
        image="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80"
      />

      {/* OUR STANDARD */}
      <Section
        title="Notre Standard"
        text="Notre travail est guidé par un standard interne rigoureux qui dépasse les attentes. Aucun véhicule ne quitte nos soins sans atteindre le niveau de qualité que nous exigeons, garantissant à chaque client une expérience exceptionnelle, à chaque visite."
        image="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=1200&q=80"
        reverse
      />

      {/* OUR VISION */}
      <Section
        title="Notre Vision"
        text="Notre vision est de redéfinir ce que représente l’entretien automobile — en le transformant d’un simple service en une expérience premium. Nous aspirons à établir une nouvelle référence dans le domaine du detailing, où la qualité, la constance et le raffinement ne sont jamais compromis."
        image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"
      />

      {/* CTA */}
      <section style={section}>
        <div style={ctaBox}>
          <h2 style={ctaTitle}>Découvrez la Différence</h2>
          <p style={ctaText}>
            Découvrez ce que le detailing haut de gamme signifie vraiment.
          </p>
          <Link href="/fr/reserver" style={ctaButton}>
            Réserver
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
