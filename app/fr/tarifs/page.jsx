import Header from "../../components/Header";

export default function TarifsFR() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Header lang="fr" />

      {/* HERO */}
      <section style={{ padding: "80px 50px", textAlign: "center" }}>
        <p style={{ color: "#d4af37", letterSpacing: "2px", fontSize: "13px" }}>
          Tarifs
        </p>

        <h1 style={{ fontSize: "52px", margin: "20px 0" }}>
          Nos forfaits de detailing
        </h1>

        <p style={{ color: "#cfcfcf", maxWidth: "700px", margin: "0 auto", fontSize: "18px", lineHeight: "1.8" }}>
          Des services adaptés à tous les types de véhicules, du quotidien aux voitures haut de gamme.
        </p>
      </section>

      {/* PACKAGES */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "40px 50px 100px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
        }}
      >
        {/* PACKAGE 1 */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>Ascendant Care</h2>

          <p style={descStyle}>
            Entretien essentiel pour garder votre véhicule propre et présentable.
          </p>

          <div style={priceBlock}>
            <p>Voiture: 120$</p>
            <p>SUV: 140$</p>
            <p>Camion / Grand SUV: 160$</p>
          </div>

          <ul style={listStyle}>
            <li>Nettoyage intérieur rapide</li>
            <li>Aspiration complète</li>
            <li>Lavage extérieur</li>
            <li>Nettoyage des vitres</li>
          </ul>
        </div>

        {/* PACKAGE 2 */}
        <div style={{ ...cardStyle, border: "1px solid #d4af37" }}>
          <h2 style={titleStyle}>Ascendant Elite</h2>

          <p style={descStyle}>
            Nettoyage approfondi avec finition plus soignée et durable.
          </p>

          <div style={priceBlock}>
            <p>Voiture: 180$</p>
            <p>SUV: 210$</p>
            <p>Camion / Grand SUV: 240$</p>
          </div>

          <ul style={listStyle}>
            <li>Nettoyage intérieur complet</li>
            <li>Shampoing des sièges</li>
            <li>Lavage extérieur détaillé</li>
            <li>Protection de base</li>
          </ul>
        </div>

        {/* PACKAGE 3 */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>Ascendant Signature</h2>

          <p style={descStyle}>
            Expérience haut de gamme pour un résultat impeccable.
          </p>

          <div style={priceBlock}>
            <p>Voiture: 250$</p>
            <p>SUV: 290$</p>
            <p>Camion / Grand SUV: 330$</p>
          </div>

          <ul style={listStyle}>
            <li>Nettoyage intérieur en profondeur</li>
            <li>Traitement complet des surfaces</li>
            <li>Lavage extérieur premium</li>
            <li>Finition haut de gamme</li>
          </ul>
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
};

const titleStyle = {
  fontSize: "26px",
  marginBottom: "10px",
};

const descStyle = {
  color: "#cfcfcf",
  marginBottom: "20px",
  lineHeight: "1.7",
};

const priceBlock = {
  color: "#d4af37",
  fontSize: "18px",
  marginBottom: "20px",
  lineHeight: "1.8",
};

const listStyle = {
  color: "#c8c8c8",
  lineHeight: "1.8",
  paddingLeft: "18px",
};
