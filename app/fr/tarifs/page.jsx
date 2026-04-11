import Header from "../../components/Header";

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
            que ce soit pour un entretien régulier ou une finition haut de gamme.
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
            Un service essentiel pour garder votre véhicule propre et bien entretenu.
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
            <li>Nettoyage des surfaces</li>
          </ul>
        </div>

        {/* ELITE (MOST POPULAR) */}
        <div style={{ ...cardStyle, border: "1px solid #d4af37", position: "relative" }}>
          <div style={badgeStyle}>PLUS POPULAIRE</div>

          <h2 style={titleStyle}>Ascendant Elite</h2>

          <p style={descStyle}>
            Nettoyage approfondi avec plus de précision et une finition améliorée.
          </p>

          <div style={priceStyle}>
            <p>Voiture: 180$</p>
            <p>SUV: 210$</p>
            <p>Camion / Grand SUV: 240$</p>
          </div>

          <ul style={listStyle}>
            <li>Tout inclus dans Care</li>
            <li>Shampoing des sièges</li>
            <li>Nettoyage en profondeur des tapis</li>
            <li>Dégraissage des surfaces</li>
            <li>Lavage extérieur détaillé</li>
            <li>Finition améliorée</li>
          </ul>
        </div>

        {/* SIGNATURE */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>Ascendant Signature</h2>

          <p style={descStyle}>
            Expérience haut de gamme avec un niveau de détail supérieur.
          </p>

          <div style={priceStyle}>
            <p>Voiture: 250$</p>
            <p>SUV: 290$</p>
            <p>Camion / Grand SUV: 330$</p>
          </div>

          <ul style={listStyle}>
            <li>Tout inclus dans Elite</li>
            <li>Nettoyage intérieur en profondeur</li>
            <li>Traitement complet des surfaces</li>
            <li>Finition haut de gamme</li>
            <li>Nettoyage détaillé extérieur</li>
            <li>Résultat premium</li>
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

const priceStyle = {
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

const badgeStyle = {
  position: "absolute",
  top: "-12px",
  right: "20px",
  backgroundColor: "#d4af37",
  color: "#111",
  padding: "6px 12px",
  fontSize: "12px",
  fontWeight: "bold",
  borderRadius: "999px",
};
