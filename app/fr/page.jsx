import Header from "../components/Header";
import Link from "next/link";

export default function HomeFR() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Header lang="fr" />

      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "78vh",
          display: "flex",
          alignItems: "center",
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.72)), url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: "1px solid rgba(212, 175, 55, 0.25)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            width: "100%",
            padding: "80px 50px",
          }}
        >
          <div style={{ maxWidth: "760px" }}>
            <p
              style={{
                color: "#d4af37",
                letterSpacing: "3px",
                fontSize: "13px",
                marginBottom: "18px",
                textTransform: "uppercase",
              }}
            >
              Ascendant Auto Detailing
            </p>

            <h1
              style={{
                fontSize: "64px",
                lineHeight: "1.05",
                margin: "0 0 22px 0",
                fontWeight: "700",
              }}
            >
              Service d’esthétique automobile mobile haut de gamme pour tous les véhicules
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.8",
                color: "#d6d6d6",
                marginBottom: "32px",
                maxWidth: "700px",
              }}
            >
              Redonnez à votre véhicule une apparence propre, soignée et raffinée
              grâce à un service de detailing pensé autant pour les voitures du
              quotidien que pour les véhicules haut de gamme. Nous offrons nos
              services à Montréal, Laval, sur la Rive-Nord et la Rive-Sud. Notre service de detailing mobile entièrement équipé se déplace directement chez vous — à votre domicile ou sur votre lieu de travail — offrant une expérience haut de gamme, fluide et sans interruption de votre journée.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link
                href="/fr/reserver"
                style={{
                  backgroundColor: "#d4af37",
                  color: "#111",
                  textDecoration: "none",
                  padding: "14px 28px",
                  borderRadius: "999px",
                  fontWeight: "700",
                  fontSize: "15px",
                }}
              >
                Réserver Votre Expérience
              </Link>

              <Link
                href="/fr/tarifs"
                style={{
                  border: "1px solid #d4af37",
                  color: "#f5f5f5",
                  textDecoration: "none",
                  padding: "14px 28px",
                  borderRadius: "999px",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Consultez Nos Forfaits
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "80px 50px 30px 50px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "40px",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                color: "#d4af37",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "13px",
                marginBottom: "16px",
              }}
            >
              Qu’est-ce que le detailing automobile?
            </p>

            <h2
              style={{
                fontSize: "42px",
                margin: "0 0 20px 0",
                lineHeight: "1.15",
              }}
            >
              Un soin beaucoup plus complet qu’un simple lavage
            </h2>

            <p
              style={{
                color: "#cfcfcf",
                fontSize: "18px",
                lineHeight: "1.9",
                marginBottom: "18px",
              }}
            >
              Le detailing automobile est un service de nettoyage, de remise en
              état et de finition beaucoup plus poussé qu’un lavage classique.
              L’objectif n’est pas seulement d’enlever la saleté visible, mais
              aussi de traiter les surfaces avec précision pour améliorer
              l’apparence, la propreté et la présentation générale du véhicule.
            </p>

            <p
              style={{
                color: "#cfcfcf",
                fontSize: "18px",
                lineHeight: "1.9",
              }}
            >
              Que vous conduisiez une voiture de tous les jours, un VUS familial,
              un véhicule de travail ou une voiture de prestige, le detailing
              permet d’obtenir un résultat visiblement plus soigné, plus durable
              et plus professionnel.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#111",
              border: "1px solid rgba(212, 175, 55, 0.22)",
              borderRadius: "24px",
              padding: "30px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                fontSize: "24px",
                marginBottom: "18px",
                color: "#f5f5f5",
              }}
            >
              Zones desservies
            </h3>

            <div style={{ display: "grid", gap: "14px", color: "#d0d0d0", fontSize: "17px" }}>
              <div>• Montréal</div>
              <div>• Laval</div>
              <div>• Rive-Nord</div>
              <div>• Rive-Sud</div>
            </div>

            <div
              style={{
                marginTop: "24px",
                height: "1px",
                backgroundColor: "rgba(212, 175, 55, 0.18)",
              }}
            />

            <p
              style={{
                marginTop: "22px",
                color: "#bdbdbd",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              Nous offrons un service haut de gamme adapté à différents besoins,
              qu’il s’agisse d’entretenir une voiture utilisée au quotidien ou de
              mettre en valeur un véhicule plus exclusif.
            </p>
          </div>
        </div>
      </section>

      {/* WASH VS DETAILING */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "50px 50px 30px 50px",
        }}
      >
        <p
          style={{
            color: "#d4af37",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontSize: "13px",
            marginBottom: "16px",
          }}
        >
          Lavage classique vs detailing
        </p>

        <h2
          style={{
            fontSize: "42px",
            margin: "0 0 28px 0",
            lineHeight: "1.15",
          }}
        >
          Pourquoi le detailing est une meilleure option?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
          }}
        >
          <div
            style={{
              backgroundColor: "#101010",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "22px",
              padding: "28px",
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: "24px", marginBottom: "14px" }}>
              Lavage classique
            </h3>
            <p style={{ color: "#c7c7c7", lineHeight: "1.85", fontSize: "17px" }}>
  Un lavage automobile standard est conçu pour nettoyer rapidement les saletés visibles à la surface du véhicule. Bien qu'il puisse améliorer l'apparence générale à court terme, il n'offre pas un nettoyage en profondeur ni l'attention nécessaire pour traiter les contaminants incrustés, les taches ou les détails de l'habitacle. L'objectif principal est la rapidité plutôt que la restauration et la préservation de l'état du véhicule.
</p>
</div>

          <div
            style={{
              backgroundColor: "#111",
              border: "1px solid rgba(212, 175, 55, 0.22)",
              borderRadius: "22px",
              padding: "28px",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                fontSize: "24px",
                marginBottom: "14px",
                color: "#d4af37",
              }}
            >
              Detailing automobile
            </h3>
            <p style={{ color: "#d8d8d8", lineHeight: "1.85", fontSize: "17px" }}>
  L'esthétique automobile professionnelle va bien au-delà d'un simple lavage. Grâce à l'utilisation de produits spécialisés, d'équipements professionnels et de techniques adaptées, elle permet de nettoyer en profondeur, de restaurer et de protéger chaque surface du véhicule. Les contaminants incrustés, les taches et les impuretés sont traités avec soin afin d'obtenir une finition plus propre, plus raffinée et durable. Le résultat est un véhicule qui paraît mieux entretenu, qui procure une meilleure expérience au quotidien et qui conserve davantage sa valeur au fil du temps.
</p>
</div>
          </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "60px 50px 100px 50px",
        }}
      >
        <p
          style={{
            color: "#d4af37",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontSize: "13px",
            marginBottom: "16px",
          }}
        >
          Pourquoi nous choisir?
        </p>

        <h2
          style={{
            fontSize: "42px",
            margin: "0 0 30px 0",
            lineHeight: "1.15",
          }}
        >
          Une approche sérieuse, propre et haut de gamme
        </h2>

        <div className="why-grid">
          
          <div
            style={{
              backgroundColor: "#101010",
              borderRadius: "22px",
              padding: "30px",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                color: "#d4af37",
                fontSize: "28px",
                marginBottom: "16px",
              }}
            >
              01
            </div>
            <h3 style={{ marginTop: 0, fontSize: "22px", marginBottom: "14px" }}>
              Résultat soigné
            </h3>
            <p style={{ color: "#c8c8c8", lineHeight: "1.8", fontSize: "16px" }}>
              Nous misons sur les détails, les finitions et une présentation plus
              élégante que ce qu’offre un simple lavage rapide.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#101010",
              borderRadius: "22px",
              padding: "30px",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                color: "#d4af37",
                fontSize: "28px",
                marginBottom: "16px",
              }}
            >
              02
            </div>
            <h3 style={{ marginTop: 0, fontSize: "22px", marginBottom: "14px" }}>
              Pour tous les véhicules
            </h3>
            <p style={{ color: "#c8c8c8", lineHeight: "1.8", fontSize: "16px" }}>
              Notre service convient autant aux voitures de tous les jours qu’aux
              véhicules haut de gamme. Chaque client mérite un service de qualité.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#101010",
              borderRadius: "22px",
              padding: "30px",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                color: "#d4af37",
                fontSize: "28px",
                marginBottom: "16px",
              }}
            >
              03
            </div>
            <h3 style={{ marginTop: 0, fontSize: "22px", marginBottom: "14px" }}>
              Service local
            </h3>
            <p style={{ color: "#c8c8c8", lineHeight: "1.8", fontSize: "16px" }}>
              Service de detailing mobile entièrement équipé, directement chez vous ou au travail — une expérience exceptionnelle, sans contrainte. Nous servons la grande région de Montréal incluant Laval, la Rive-Nord et la Rive-Sud avec
              une approche professionnelle, accessible et orientée sur la qualité.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/fr/reserver"
            style={{
              backgroundColor: "#d4af37",
              color: "#111",
              textDecoration: "none",
              padding: "14px 28px",
              borderRadius: "999px",
              fontWeight: "700",
            }}
          >
            Réserver maintenant
          </Link>

          <Link
            href="/fr/contact"
            style={{
              border: "1px solid #d4af37",
              color: "#f5f5f5",
              textDecoration: "none",
              padding: "14px 28px",
              borderRadius: "999px",
              fontWeight: "600",
            }}
          >
            Contactez-nous
          </Link>
        </div>
      </section>
      {/* COMMENT ÇA FONCTIONNE */}
<section
  style={{
    padding: "100px 20px",
    backgroundColor: "#000",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      background:
        "linear-gradient(180deg, rgba(212,175,55,0.07), rgba(17,17,17,0.98))",
      border: "1px solid rgba(212, 175, 55, 0.28)",
      borderRadius: "28px",
      padding: "60px 35px",
      boxShadow: "0 0 45px rgba(212, 175, 55, 0.08)",
    }}
  >
    <p
      style={{
        color: "#d4af37",
        textTransform: "uppercase",
        letterSpacing: "2px",
        fontSize: "13px",
        textAlign: "center",
        marginBottom: "16px",
      }}
    >
      Comment ça fonctionne?
    </p>

    <h2
      style={{
        textAlign: "center",
        fontSize: "42px",
        marginTop: 0,
        marginBottom: "18px",
      }}
    >
      Une expérience haut de gamme du début à la fin
    </h2>

    <p
      style={{
        textAlign: "center",
        color: "#c7c7c7",
        maxWidth: "750px",
        margin: "0 auto 60px",
        lineHeight: "1.8",
        fontSize: "17px",
      }}
    >
      Réserver un service d’esthétique automobile professionnel n’a jamais été
      aussi simple. Nous apportons notre unité mobile entièrement équipée
      directement à votre domicile ou à votre lieu de travail, afin de vous
      offrir des résultats haut de gamme sans interrompre votre journée.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "24px",
      }}
    >
      <div style={{ backgroundColor: "#111", border: "1px solid rgba(212, 175, 55, 0.22)", borderRadius: "22px", padding: "30px", textAlign: "center" }}>
        <div style={{ color: "#d4af37", fontSize: "42px", fontWeight: "700", marginBottom: "15px" }}>
          01
        </div>

        <h3 style={{ marginTop: 0 }}>Choisissez votre forfait</h3>

        <p style={{ color: "#c8c8c8", lineHeight: "1.8" }}>
          Sélectionnez le forfait d’esthétique automobile qui correspond le mieux
          à votre véhicule et à vos besoins.
        </p>
      </div>

      <div style={{ backgroundColor: "#111", border: "1px solid rgba(212, 175, 55, 0.22)", borderRadius: "22px", padding: "30px", textAlign: "center" }}>
        <div style={{ color: "#d4af37", fontSize: "42px", fontWeight: "700", marginBottom: "15px" }}>
          02
        </div>

        <h3 style={{ marginTop: 0 }}>Réservez votre rendez-vous</h3>

        <p style={{ color: "#c8c8c8", lineHeight: "1.8" }}>
          Choisissez la date et l’heure qui vous conviennent grâce à notre
          système de réservation en ligne, puis payez le dépôt de 50 $, qui sera
          déduit du montant final de votre service.
        </p>
      </div>

      <div style={{ backgroundColor: "#111", border: "1px solid rgba(212, 175, 55, 0.22)", borderRadius: "22px", padding: "30px", textAlign: "center" }}>
        <div style={{ color: "#d4af37", fontSize: "42px", fontWeight: "700", marginBottom: "15px" }}>
          03
        </div>

        <h3 style={{ marginTop: 0 }}>Nous venons à vous</h3>

        <p style={{ color: "#c8c8c8", lineHeight: "1.8" }}>
          Notre unité mobile entièrement équipée arrive à votre domicile ou à
          votre lieu de travail, prête à effectuer le service.
        </p>
      </div>

      <div style={{ backgroundColor: "#111", border: "1px solid rgba(212, 175, 55, 0.22)", borderRadius: "22px", padding: "30px", textAlign: "center" }}>
        <div style={{ color: "#d4af37", fontSize: "42px", fontWeight: "700", marginBottom: "15px" }}>
          04
        </div>

        <h3 style={{ marginTop: 0 }}>Profitez du résultat</h3>

        <p style={{ color: "#c8c8c8", lineHeight: "1.8" }}>
          Profitez de la confiance de conduire un véhicule détaillé
          professionnellement selon les plus hauts standards.
        </p>
      </div>
    </div>
  </div>
</section>
      
      
      {/* FAQ SECTION */}
<section
  style={{
    padding: "100px 20px",
    backgroundColor: "#000",
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      background:
        "linear-gradient(180deg, rgba(212,175,55,0.07), rgba(17,17,17,0.98))",
      border: "1px solid rgba(212, 175, 55, 0.28)",
      borderRadius: "28px",
      padding: "60px 35px",
      boxShadow: "0 0 45px rgba(212, 175, 55, 0.08)",
    }}
  >
    <h2
      style={{
        textAlign: "center",
        fontSize: "42px",
        color: "#d4af37",
        marginTop: 0,
        marginBottom: "18px",
      }}
    >
      Questions Fréquemment Posées
    </h2>

    <p
      style={{
        textAlign: "center",
        color: "#c7c7c7",
        maxWidth: "700px",
        margin: "0 auto 50px",
        lineHeight: "1.8",
        fontSize: "17px",
      }}
    >
      Tout ce que vous devez savoir avant de réserver votre service d’esthétique automobile mobile.
    </p>

    <div style={{ display: "grid", gap: "18px" }}>
      {[
        {
          question: "Vous déplacez-vous à mon domicile ou à mon lieu de travail ?",
          answer:
            "Oui. Ascendant Auto Detailing est un service entièrement mobile. Nous apportons notre équipement professionnel et nos produits directement à votre domicile, à votre lieu de travail ou à l’endroit de votre choix.",
        },
        {
          question: "Quelles régions desservez-vous ?",
          answer:
            "Nous desservons fièrement Montréal, Laval, la Rive-Sud et la Rive-Nord. Si vous n’êtes pas certain que votre emplacement est couvert, n’hésitez pas à nous contacter.",
        },
        {
          question: "Dois-je fournir de l’eau ou de l’électricité ?",
          answer:
            "Non. Notre unité mobile est entièrement équipée pour effectuer le service. Si certaines conditions particulières sont nécessaires, nous en discuterons avec vous avant votre rendez-vous.",
        },
        {
          question: "Combien de temps dure un rendez-vous d’esthétique automobile ?",
          answer:
            "La durée varie selon le forfait choisi et l’état du véhicule. La plupart des rendez-vous durent entre 2 et 4 heures.",
        },
        {
          question: "Un dépôt est-il requis ?",
          answer:
            "Oui. Un dépôt de 50 $ est requis pour confirmer votre rendez-vous. Ce montant est appliqué au coût total du service.",
        },
        {
          question: "Que se passe-t-il en cas de pluie ?",
          answer:
            "Nous surveillons attentivement les conditions météorologiques. Nous sommes équipés pour travailler dans la plupart des conditions, mais si la pluie ou des conditions météorologiques sévères nous empêchent d’effectuer le service de façon sécuritaire et optimale, nous communiquerons avec vous afin de replanifier votre rendez-vous à un moment qui vous convient.",
        },
      ].map((item, index) => (
        <details
          key={index}
          style={{
            backgroundColor: "#111",
            border: "1px solid rgba(212, 175, 55, 0.22)",
            borderRadius: "20px",
            padding: "24px 26px",
          }}
        >
          <summary
            style={{
              cursor: "pointer",
              color: "#d4af37",
              fontSize: "20px",
              fontWeight: "600",
              listStyle: "none",
            }}
          >
            {item.question}
          </summary>

          <p
            style={{
              color: "#d8d8d8",
              lineHeight: "1.8",
              fontSize: "16px",
              marginTop: "16px",
              marginBottom: 0,
            }}
          >
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  </div>
</section>
    </div>
  );
}
