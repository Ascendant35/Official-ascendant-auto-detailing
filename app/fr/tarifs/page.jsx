import Header from "../../components/Header";
import Link from "next/link";

export default function TarifsFR() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Header lang="fr" />

      {/* HERO */}
      <section
        style={{
          minHeight: "65vh",
          display: "flex",
          alignItems: "center",
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "100px 50px" }}>
          <h1 style={{ fontSize: "64px", marginBottom: "25px", fontWeight: "600" }}>
            Nos forfaits haut de gamme
          </h1>

          <p style={{ fontSize: "20px", color: "#d6d6d6", maxWidth: "750px", lineHeight: "1.9" }}>
            Des services conçus pour maintenir votre véhicule dans un état impeccable,
            avec des options ponctuelles ou des plans d’entretien réguliers.
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "100px 50px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "40px",
        }}
      >
        {/* CARE */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>Ascendant Care</h2>

          <p style={descStyle}>
            Entretien régulier pour garder votre véhicule propre et agréable au quotidien.
          </p>

          <div style={priceStyle}>
            <p>Voiture: 120$</p>
            <p>SUV: 140$</p>
            <p>Camion / Grand SUV: 160$</p>
          </div>

          <div style={subscriptionStyle}>
            <p>Mensuel (4 visites): -10%</p>
            <p>Annuel (12 visites): -20%</p>
          </div>

          <ul style={listStyle}>
            <li>Aspiration complète</li>
            <li>Nettoyage intérieur rapide</li>
            <li>Lavage extérieur</li>
            <li>Nettoyage des vitres</li>
            <li>Finition générale</li>
          </ul>

          <Link href="/fr/reserver" style={buttonStyle}>
            Réserver
          </Link>
        </div>

        {/* ELITE */}
        <div style={{ ...cardStyle, border: "1px solid #d4af37", transform: "scale(1.05)" }}>
          <div style={badgeStyle}>PLUS POPULAIRE</div>

          <h2 style={titleStyle}>Ascendant Elite</h2>

          <p style={descStyle}>
            Nettoyage approfondi offrant un équilibre parfait entre qualité et valeur.
          </p>

          <div style={priceStyle}>
            <p>Voiture: 180$</p>
            <p>SUV: 210$</p>
            <p>Camion / Grand SUV: 240$</p>
          </div>

          <div style={subscriptionStyle}>
            <p>Mensuel (4 visites): -12%</p>
            <p>Annuel (12 visites): -25%</p>
          </div>

          <ul style={listStyle}>
            <li>Tout inclus dans Care</li>
            <li>Shampoing des sièges</li>
            <li>Nettoyage des tapis</li>
            <li>Dégraissage complet</li>
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
            L’expérience ultime pour un résultat impeccable et une finition showroom.
          </p>

          <div style={priceStyle}>
            <p>Voiture: 250$</p>
            <p>SUV: 290$</p>
            <p>Camion / Grand SUV: 330$</p>
          </div>

          <div style={subscriptionStyle}>
            <p>Mensuel (4 visites): -15%</p>
            <p>Annuel (12 visites): -30%</p>
          </div>

          <ul style={listStyle}>
            <li>Tout inclus dans Elite</li>
            <li>Nettoyage en profondeur</li>
            <li>Traitement complet</li>
            <li>Finition haut de gamme</li>
            <li>Détails minutieux</li>
            <li>Résultat showroom</li>
          </ul>

          <Link href="/fr/reserver" style={buttonStyle}>
            Réserver
          </Link>
        </div>
      </section>

      {/* DECISION SECTION */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 50px 120px" }}>
        <h2 style={{ fontSize: "44px", marginBottom: "40px", textAlign: "center" }}>
          Quel forfait choisir?
        </h2>

        <div style={{ display: "grid", gap: "25px" }}>
          <div style={choiceStyle}>
            <strong style={{ color: "#d4af37" }}>Ascendant Care</strong>
            <p>Idéal pour entretien régulier sans nettoyage intensif.</p>
          </div>

          <div style={choiceStyle}>
            <strong style={{ color: "#d4af37" }}>Ascendant Elite</strong>
            <p>Le meilleur choix pour la majorité des clients.</p>
          </div>

          <div style={choiceStyle}>
            <strong style={{ color: "#d4af37" }}>Ascendant Signature</strong>
            <p>Pour un résultat impeccable et haut de gamme.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* STYLES */

const cardStyle = {
  backgroundColor: "#111",
  borderRadius: "28px",
  padding: "35px",
  border: "1px solid rgba(255,255,255,0.05)",
};

const titleStyle = {
  fontSize: "28px",
  marginBottom: "12px",
};

const descStyle = {
  color: "#cfcfcf",
  marginBottom: "20px",
  lineHeight: "1.8",
};

const priceStyle = {
  color: "#d4af37",
  fontSize: "19px",
  marginBottom: "15px",
};

const subscriptionStyle = {
  color: "#aaa",
  marginBottom: "20px",
  fontSize: "14px",
};

const listStyle = {
  color: "#c8c8c8",
  lineHeight: "1.9",
  paddingLeft: "18px",
};

const buttonStyle = {
  display: "inline-block",
  marginTop: "20px",
  padding: "14px 26px",
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

const badgeStyle = {
  position: "absolute",
  top: "-14px",
  right: "20px",
  backgroundColor: "#d4af37",
  color: "#111",
  padding: "6px 14px",
  borderRadius: "999px",
  fontWeight: "bold",
};

const choiceStyle = {
  backgroundColor: "#111",
  padding: "25px",
  borderRadius: "18px",
};
