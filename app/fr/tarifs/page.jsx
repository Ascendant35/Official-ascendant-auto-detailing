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
}
