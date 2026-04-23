import Header from "../../components/Header";
import Link from "next/link";

export default function TarifsFR() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Header lang="fr" />

      {/* HERO */}
      <section style={heroStyle}>
        <div style={container}>
          <h1 style={heroTitle}>Nos Forfaits Premium</h1>
          <p style={heroText}>
            Des services conçus pour maintenir votre véhicule dans un état impeccable,
            avec des options à la visite ou des forfaits d’entretien régulier.
          </p>
        </div>
      </section>

      {/* ✅ PREMIUM INTRO BOX */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "70px auto 30px",
          padding: "0 30px",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(18,18,18,0.96), rgba(10,10,10,0.98))",
            border: "1px solid rgba(212,175,55,0.45)",
            borderRadius: "24px",
            padding: "42px 38px",
            textAlign: "center",
            boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "3px",
              color: "#d4af37",
              marginBottom: "18px",
            }}
          >
            Expérience de detailing raffinée
          </p>

          <h2
            style={{
              fontSize: "34px",
              marginBottom: "18px",
              color: "#f5f5f5",
              fontWeight: "500",
            }}
          >
            Choisissez le niveau de soin que votre véhicule mérite
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: "#cfcfcf",
              lineHeight: "1.9",
              maxWidth: "860px",
              margin: "0 auto 14px",
            }}
          >
            Découvrez nos forfaits premium de detailing, chacun soigneusement conçu
            pour offrir un niveau distinct de soin, de raffinement et de finition.
            Commencez par sélectionner le forfait qui correspond le mieux aux besoins
            de votre véhicule, puis choisissez sa taille pour un service exécuté avec précision.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: "#cfcfcf",
              lineHeight: "1.9",
              maxWidth: "860px",
              margin: "0 auto 14px",
            }}
          >
            Pour les clients recherchant une valeur exceptionnelle et un entretien continu, nos{" "}
            <span style={{ color: "#d4af37", fontWeight: "600" }}>
              forfaits 4 visites
            </span>{" "}
            offrent une façon raffinée de maintenir votre véhicule au plus haut niveau
            tout au long de la saison.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: "#cfcfcf",
              lineHeight: "1.9",
              maxWidth: "860px",
              margin: "0 auto",
            }}
          >
            Vous pouvez également rehausser davantage votre expérience grâce à notre sélection
            de services complémentaires ci-dessous, conçus pour offrir une finition encore plus
            complète et luxueuse à chaque visite.
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section style={gridSection}>
        
        {/* CARE */}
        <div style={card}>
          <h2 style={title}>Ascendant Care</h2>
          <p style={desc}>
            Idéal pour un entretien régulier et pour garder votre véhicule propre au quotidien.
          </p>
          <p style={{ color: "#d4af37", marginBottom: "20px" }}>
            Durée estimée : 2 heures
          </p>

          <div style={price}>
            <p>Berline : 189.99$</p>
            <p>VUS : 209.99$</p>
            <p>Camion / Grand VUS : 249.99$</p>
          </div>

          <div style={subscription}>
            <p style={subTitle}>Forfait 4 visites</p>
            <p>Profitez de notre forfait regroupé de 4 visites, utilisable quand vous le souhaitez.</p>
            <p>Berline : 669.99$</p>
            <p>VUS : 739.99$</p>
            <p>Camion / Grand VUS : 859.99$</p>
          </div>

          <ul style={list}>
            <li>Aspiration complète</li>
            <li>Nettoyage intérieur léger</li>
            <li>Lavage extérieur</li>
            <li>Vitres</li>
            <li>Finition finale</li>
          </ul>

          <Link href="/fr/reserver" style={btn}>Réserver</Link>
        </div>

        {/* ELITE */}
        <div style={{ ...card, border: "1px solid #d4af37", position: "relative", transform: "scale(1.05)" }}>
          <div style={badge}>LE PLUS POPULAIRE</div>

          <h2 style={title}>Ascendant Elite</h2>
          <p style={desc}>
            Nettoyage en profondeur offrant l’équilibre parfait entre qualité et valeur.
          </p>
          <p style={{ color: "#d4af37", marginBottom: "20px" }}>
            Durée estimée : 3 à 4 heures
          </p>

          <div style={price}>
            <p>Berline : 289.99$</p>
            <p>VUS : 309.99$</p>
            <p>Camion / Grand VUS : 349.99$</p>
          </div>

          <div style={subscription}>
            <p style={subTitle}>Forfait 4 visites</p>
            <p>Profitez de notre forfait regroupé de 4 visites, utilisable quand vous le souhaitez.</p>
            <p>Berline : 1049.99$</p>
            <p>VUS : 1129.99$</p>
            <p>Camion / Grand VUS : 1249.99$</p>
          </div>

          <ul style={list}>
            <li>Tout ce qui est inclus dans Care</li>
            <li>Shampoing des sièges</li>
            <li>Nettoyage des tapis</li>
            <li>Dégraissage</li>
            <li>Détail extérieur complet</li>
            <li>Finition premium</li>
          </ul>

          <Link href="/fr/reserver" style={goldBtn}>Réserver</Link>
        </div>

        {/* SIGNATURE */}
        <div style={card}>
          <h2 style={title}>Ascendant Signature</h2>
          <p style={desc}>
            L’expérience ultime pour un résultat impeccable et une finition digne d’une salle de montre.
          </p>
          <p style={{ color: "#d4af37", marginBottom: "20px" }}>
            Durée estimée : 5 à 6 heures
          </p>

          <div style={price}>
            <p>Berline : 389.99$</p>
            <p>VUS : 409.99$</p>
            <p>Camion / Grand VUS : 449.99$</p>
          </div>

          <div style={subscription}>
            <p style={subTitle}>Forfait 4 visites</p>
            <p>Profitez de notre forfait regroupé de 4 visites, utilisable quand vous le souhaitez.</p>
            <p>Berline : 1399.99$</p>
            <p>VUS : 1499.99$</p>
            <p>Camion / Grand VUS : 1599.99$</p>
          </div>

          <ul style={list}>
            <li>Tout ce qui est inclus dans Elite</li>
            <li>Nettoyage en profondeur</li>
            <li>Traitement complet</li>
            <li>Finition haut de gamme</li>
            <li>Détail méticuleux</li>
          </ul>

          <Link href="/fr/reserver" style={btn}>Réserver</Link>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section style={whySection}>
        <h2 style={whyTitle}>Quel forfait devriez-vous choisir ?</h2>

        <div style={whyGrid}>
          
          {/* CARE */}
          <div
            style={{
              ...choiceStyle,
              border: "1px solid rgba(212,175,55,0.25)",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "2px",
                backgroundColor: "#d4af37",
                marginBottom: "15px",
              }}
            />

            <strong
              style={{
                fontSize: "24px",
                color: "#f5f5f5",
                display: "block",
                marginBottom: "15px",
              }}
            >
              Ascendant Care
            </strong>

            <p style={{ lineHeight: "1.9", color: "#ccc", marginBottom: "12px" }}>
              Conçu pour un entretien constant, ce forfait permet de garder votre véhicule
              propre, soigné et raffiné sur une base régulière.
            </p>

            <p style={{ lineHeight: "1.9", color: "#ccc", marginBottom: "12px" }}>
              Idéal pour les clients qui souhaitent conserver une apparence impeccable
              en tout temps, sans nécessiter une restauration plus intensive.
            </p>

            <p style={{ lineHeight: "1.9", color: "#ccc" }}>
              Un équilibre parfait entre efficacité, élégance et entretien quotidien.
            </p>
          </div>

          {/* ELITE */}
          <div
            style={{
              ...choiceStyle,
              border: "1px solid rgba(212,175,55,0.5)",
              transform: "scale(1.03)",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "2px",
                backgroundColor: "#d4af37",
                marginBottom: "15px",
              }}
            />

            <strong
              style={{
                fontSize: "26px",
                color: "#d4af37",
                display: "block",
                marginBottom: "15px",
              }}
            >
              Ascendant Elite
            </strong>

            <p style={{ lineHeight: "1.9", color: "#ccc", marginBottom: "12px" }}>
              Notre choix le plus populaire, offrant un niveau de nettoyage plus approfondi
              ainsi qu’une attention supérieure aux détails, à l’intérieur comme à l’extérieur.
            </p>

            <p style={{ lineHeight: "1.9", color: "#ccc", marginBottom: "12px" }}>
              Il redonne fraîcheur à l’habitacle tout en rehaussant la finition extérieure
              avec un résultat nettement plus raffiné.
            </p>

            <p style={{ lineHeight: "1.9", color: "#ccc" }}>
              Parfait pour ceux qui recherchent une transformation premium sans aller jusqu’au niveau ultime.
            </p>
          </div>

          {/* SIGNATURE */}
          <div
            style={{
              ...choiceStyle,
              border: "1px solid rgba(212,175,55,0.25)",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "2px",
                backgroundColor: "#d4af37",
                marginBottom: "15px",
              }}
            />

            <strong
              style={{
                fontSize: "24px",
                color: "#f5f5f5",
                display: "block",
                marginBottom: "15px",
              }}
            >
              Ascendant Signature
            </strong>

            <p style={{ lineHeight: "1.9", color: "#ccc", marginBottom: "12px" }}>
              L’expérience de detailing ultime, conçue pour les clients qui n’acceptent rien de moins que la perfection.
            </p>

            <p style={{ lineHeight: "1.9", color: "#ccc", marginBottom: "12px" }}>
              Chaque surface est traitée avec minutie afin d’offrir une finition digne d’une salle de montre,
              avec une précision incomparable.
            </p>

            <p style={{ lineHeight: "1.9", color: "#ccc" }}>
              Idéal pour les véhicules de luxe, les occasions spéciales ou pour atteindre le plus haut niveau de présentation.
            </p>
          </div>

        </div>
      </section>

      {/* ADDITIONAL SERVICE SECTION */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 50px 100px",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "30px", textAlign: "center" }}>
          Services de detailing supplémentaires
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "40px",
          }}
        >
          <div style={card}>
            <h2 style={title}>Detailing extérieur uniquement</h2>
            <p style={desc}>
              Idéal pour redonner éclat, propreté et raffinement à l’extérieur de votre véhicule.
            </p>

            <div style={price}>
              <p>Berline : à partir de 100$</p>
              <p>VUS : 125$</p>
              <p>Camion / Grand VUS : 160$</p>
            </div>

            <Link href="/fr/reserver" style={btn}>Réserver</Link>
          </div>

          <div style={card}>
            <h2 style={title}>Detailing intérieur</h2>
            <p style={desc}>
              Un nettoyage intérieur approfondi pour restaurer fraîcheur, confort et finition haut de gamme.
            </p>

            <div style={price}>
              <p>Berline : à partir de 120$</p>
              <p>VUS : 150$</p>
              <p>Camion / Grand VUS : 190$</p>
            </div>

            <Link href="/fr/reserver" style={btn}>Réserver</Link>
          </div>
        </div>
      </section>

      {/* EXTRA SERVICES */}
      <section style={extraSection}>
        <h2 style={{ fontSize: "40px", marginBottom: "30px", textAlign: "center" }}>
          Services complémentaires
        </h2>

        <div style={extraGrid}>
          <Extra title="Poils d’animaux" price="À partir de 30$" />
          <Extra title="Sel / Calcium" price="À partir de 25$" />
          <Extra title="Traitement des odeurs" price="40$ - 80$" />
          <Extra title="Taches spécifiques" price="À partir de 20$" />
          <Extra title="Nettoyage du moteur" price="50$" />
          <Extra title="Traitement du cuir" price="60$" />
        </div>
      </section>
    </div>
  );
}

/* EXTRA COMPONENT */
function Extra({ title, price }) {
  return (
    <div style={extraCard}>
      <h3>{title}</h3>
      <p style={{ color: "#d4af37" }}>{price}</p>
    </div>
  );
}

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
