import Header from "../../components/Header";
import Link from "next/link";

export default function TarifsFR() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Header lang="fr" />

      {/* HERO */}
      <section style={heroStyle}>
        <div style={container}>
          <h1 style={heroTitle}>Nos forfaits haut de gamme</h1>
          <p style={heroText}>
            Des services conçus pour maintenir votre véhicule dans un état impeccable,
            avec des options ponctuelles ou des plans d’entretien réguliers.
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section style={gridSection}>
        
        {/* CARE */}
        <div style={card}>
          <h2 style={title}>Ascendant Care</h2>

          <p style={desc}>
            Idéal pour un entretien régulier et garder votre véhicule propre au quotidien.
          </p>

          <div style={price}>
            <p>Voiture: $189.99</p>
            <p>SUV: $209.99</p>
            <p>Camion / Grand SUV: $249.99</p>
          </div>

          {/* ✅ NEW 4 VISIT SECTION */}
          <div style={subscription}>
            <p style={subTitle}>Forfait 4 visites</p>
            <p>
              Profitez de notre forfait groupé de 4 visites, utilisables quand vous le souhaitez.
            </p>
            <p>Voiture: ?</p>
            <p>SUV: ?</p>
            <p>Camion / Grand SUV: ?</p>
          </div>

          <ul style={list}>
            <li>Aspiration complète</li>
            <li>Nettoyage intérieur rapide</li>
            <li>Lavage extérieur</li>
            <li>Vitres</li>
            <li>Finition générale</li>
          </ul>

          <Link href="/fr/reserver" style={btn}>Réserver</Link>
        </div>

        {/* ELITE */}
        <div style={{ ...card, border: "1px solid #d4af37", position: "relative", transform: "scale(1.05)" }}>
          <div style={badge}>PLUS POPULAIRE</div>

          <h2 style={title}>Ascendant Elite</h2>

          <p style={desc}>
            Nettoyage approfondi offrant un équilibre parfait entre qualité et valeur.
          </p>

          <div style={price}>
            <p>Voiture: $289.99</p>
            <p>SUV: $309.99</p>
            <p>Camion / Grand SUV: $349.99</p>
          </div>

          {/* ✅ NEW 4 VISIT SECTION */}
          <div style={subscription}>
            <p style={subTitle}>Forfait 4 visites</p>
            <p>
              Profitez de notre forfait groupé de 4 visites, utilisables quand vous le souhaitez.
            </p>
            <p>Voiture: ?</p>
            <p>SUV: ?</p>
            <p>Camion / Grand SUV: ?</p>
          </div>

          <ul style={list}>
            <li>Tout inclus dans Care</li>
            <li>Shampoing sièges</li>
            <li>Nettoyage tapis</li>
            <li>Dégraissage</li>
            <li>Extérieur détaillé</li>
            <li>Finition premium</li>
          </ul>

          <Link href="/fr/reserver" style={goldBtn}>Réserver</Link>
        </div>

        {/* SIGNATURE */}
        <div style={card}>
          <h2 style={title}>Ascendant Signature</h2>

          <p style={desc}>
            L’expérience ultime pour un résultat impeccable et une finition showroom.
          </p>

          <div style={price}>
            <p>Voiture: $389.99</p>
            <p>SUV: $409.99</p>
            <p>Camion / Grand SUV: $449.99</p>
          </div>

          {/* ✅ NEW 4 VISIT SECTION */}
          <div style={subscription}>
            <p style={subTitle}>Forfait 4 visites</p>
            <p>
              Profitez de notre forfait groupé de 4 visites, utilisables quand vous le souhaitez.
            </p>
            <p>Voiture: ?</p>
            <p>SUV: ?</p>
            <p>Camion / Grand SUV: ?</p>
          </div>

          <ul style={list}>
            <li>Tout inclus dans Elite</li>
            <li>Nettoyage en profondeur</li>
            <li>Traitement complet</li>
            <li>Finition haut de gamme</li>
            <li>Détails minutieux</li>
          </ul>

          <Link href="/fr/reserver" style={btn}>Réserver</Link>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section style={whySection}>
        <h2 style={whyTitle}>Quel forfait choisir?</h2>

        <div style={whyGrid}>
          <div style={choiceStyle}>
            <strong style={gold}>Ascendant Care</strong>
            <p>Parfait pour un entretien régulier.</p>
          </div>

          <div style={choiceStyle}>
            <strong style={gold}>Ascendant Elite</strong>
            <p>Le meilleur choix pour la majorité des clients.</p>
          </div>

          <div style={choiceStyle}>
            <strong style={gold}>Ascendant Signature</strong>
            <p>Pour un résultat impeccable et haut de gamme.</p>
          </div>
        </div>
      </section>

      {/* EXTRA SERVICES */}
      <section style={extraSection}>
        <h2 style={{ fontSize: "40px", marginBottom: "30px", textAlign: "center" }}>
          Services supplémentaires
        </h2>

        <div style={extraGrid}>
          <Extra title="Poils d’animaux" price="À partir de 30$" />
          <Extra title="Sel / calcium" price="À partir de 25$" />
          <Extra title="Traitement d’odeur" price="40$ - 80$" />
          <Extra title="Taches spécifiques" price="À partir de 20$" />
          <Extra title="Nettoyage moteur" price="50$" />
          <Extra title="Traitement cuir" price="60$" />
        </div>
      </section>
    </div>
  );
/* STYLES */

const heroStyle = {
  minHeight: "65vh",
  display: "flex",
  alignItems: "center",
  backgroundImage:
    'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=80")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const container = { maxWidth: "1400px", margin: "0 auto", padding: "100px 50px" };
const heroTitle = { fontSize: "64px" };
const heroText = { fontSize: "20px", color: "#ccc", maxWidth: "700px" };

const gridSection = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "100px 50px",
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "40px",
};

const card = {
  backgroundColor: "#111",
  padding: "35px",
  borderRadius: "28px",
  border: "1px solid rgba(255,255,255,0.05)",
};

const title = { fontSize: "28px" };
const desc = { color: "#bbb", marginBottom: "20px" };
const price = { color: "#d4af37", marginBottom: "20px" };

const subscription = {
  backgroundColor: "#0d0d0d",
  padding: "15px",
  borderRadius: "12px",
  marginBottom: "20px",
};

const subTitle = { color: "#d4af37", marginBottom: "10px" };
const gold = { color: "#d4af37", fontWeight: "bold" };

const list = { paddingLeft: "18px", lineHeight: "1.8" };

const btn = {
  display: "inline-block",
  marginTop: "20px",
  padding: "12px 24px",
  border: "1px solid #d4af37",
  borderRadius: "999px",
  color: "#fff",
  textDecoration: "none",
};

const goldBtn = { ...btn, backgroundColor: "#d4af37", color: "#111" };

const badge = {
  position: "absolute",
  top: "-10px",
  right: "20px",
  backgroundColor: "#d4af37",
  color: "#111",
  padding: "6px 12px",
  borderRadius: "999px",
};

const whySection = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 50px 100px",
  textAlign: "center",
};

const whyTitle = { fontSize: "44px", marginBottom: "40px" };

const whyGrid = {
  display: "grid",
  gap: "25px",
  textAlign: "left",
};

const choiceStyle = {
  backgroundColor: "#111",
  padding: "25px",
  borderRadius: "18px",
};

const extraSection = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "0 50px 100px",
};

const extraGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "20px",
};

const extraCard = {
  backgroundColor: "#111",
  padding: "25px",
  borderRadius: "16px",
};
