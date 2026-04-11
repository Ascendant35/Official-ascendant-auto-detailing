import Header from "../../components/Header";
import Link from "next/link";

export default function TarifsFR() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Header lang="fr" />

      {/* HERO */}
      <section
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.75)), url("https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: "1px solid rgba(212, 175, 55, 0.25)",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "80px 50px" }}>
          <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
            Nos forfaits de detailing
          </h1>

          <p style={{ fontSize: "20px", color: "#d6d6d6", maxWidth: "700px", lineHeight: "1.8" }}>
            Trois niveaux de service conçus pour répondre à différents besoins,
            du simple entretien jusqu’à une finition haut de gamme complète.
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "80px 50px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
        }}
      >
        {/* CARE */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>Ascendant Care</h2>

          <p style={descStyle}>
            Idéal pour un entretien régulier et garder votre véhicule propre au quotidien.
          </p>

          <div style={priceStyle}>
            <p>Voiture: 120$</p>
            <p>SUV: 140$</p>
            <p>Camion / Grand SUV: 160$</p>
          </div>

          <ul style={listStyle}>
            <li>Aspiration complète</li>
            <li>Nettoyage intérieur rapide</li>
            <li>Lavage extérieur</li>
            <li>Nettoyage des vitres</li>
            <li>Essuyage des surfaces</li>
            <li>Finition générale</li>
          </ul>

          <Link href="/fr/reserver" style={buttonStyle}>
            Réserver
          </Link>
        </div>

        {/* ELITE */}
        <div style={{ ...cardStyle, border: "1px solid #d4af37", position: "relative" }}>
          <div style={badgeStyle}>PLUS POPULAIRE</div>

          <h2 style={titleStyle}>Ascendant Elite</h2>

          <p style={descStyle}>
            Le meilleur choix pour un nettoyage en profondeur avec un résultat visiblement supérieur.
          </p>

          <div style={priceStyle}>
            <p>Voiture: 180$</p>
            <p>SUV: 210$</p>
            <p>Camion / Grand SUV: 240$</p>
          </div>

          <ul style={listStyle}>
            <li>Tout inclus dans Care</li>
            <li>Shampoing des sièges</li>
            <li>Nettoyage des tapis</li>
            <li>Dégraissage complet</li>
            <li>Zones difficiles</li>
            <li>Lavage extérieur détaillé</li>
            <li>Finition améliorée</li>
          </ul>

          <Link href="/fr/reserver" style={goldButtonStyle}>
            Réserver
          </Link>
        </div>

        {/* SIGNATURE */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>Ascendant Signature</h2>

          <p style={descStyle}>
            Une expérience premium complète pour un résultat impeccable.
          </p>

          <div style={priceStyle}>
            <p>Voiture: 250$</p>
            <p>SUV: 290$</p>
            <p>Camion / Grand SUV: 330$</p>
          </div>

          <ul style={listStyle}>
            <li>Tout inclus dans Elite</li>
            <li>Nettoyage en profondeur</li>
            <li>Traitement complet</li>
            <li>Finition haut de gamme</li>
            <li>Nettoyage extérieur premium</li>
            <li>Détails minutieux</li>
            <li>Résultat showroom</li>
          </ul>

          <Link href="/fr/reserver" style={buttonStyle}>
            Réserver
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 50px 100px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "42px", marginBottom: "30px" }}>
          Quel forfait choisir?
        </h2>

        <div style={{ display: "grid", gap: "20px", textAlign: "left" }}>
          <div style={choiceStyle}>
            <strong style={{ color: "#d4af37" }}>Ascendant Care:</strong>
            <p>Parfait pour entretien rapide et régulier.</p>
          </div>

          <div style={choiceStyle}>
            <strong style={{ color: "#d4af37" }}>Ascendant Elite:</strong>
            <p>Le meilleur rapport qualité/prix pour la majorité des clients.</p>
          </div>

          <div style={choiceStyle}>
            <strong style={{ color: "#d4af37" }}>Ascendant Signature:</strong>
            <p>Pour un résultat impeccable et une finition haut de gamme.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* STYLES */

const cardStyle = {
  backgroundColor: "#111",
  borderRadius: "24px",
  padding: "30px",
  border: "1px solid rgba(255,255,255,0.05)",
  transition: "0.3s",
};

const titleStyle = {
  fontSize: "26px",
  marginBottom: "10px",
};

const descStyle = {
  color: "#cfcfcf",
  marginBottom: "20px",
};

const priceStyle = {
  color: "#d4af37",
  fontSize: "18px",
  marginBottom: "20px",
};

const listStyle = {
  color: "#c8c8c8",
  paddingLeft: "18px",
  lineHeight: "1.8",
};

const badgeStyle = {
  position: "absolute",
  top: "-12px",
  right: "20px",
  backgroundColor: "#d4af37",
  color: "#111",
  padding: "6px 12px",
  borderRadius: "999px",
  fontWeight: "bold",
};

const buttonStyle = {
  display: "inline-block",
  marginTop: "20px",
  padding: "12px 24px",
  borderRadius: "999px",
  border: "1px solid #d4af37",
  color: "#fff",
  textDecoration: "none",
};

const goldButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#d4af37",
  color: "#111",
};

const choiceStyle = {
  backgroundColor: "#111",
  padding: "20px",
  borderRadius: "16px",
};
