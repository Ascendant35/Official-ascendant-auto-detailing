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
              Le detailing automobile haut de gamme pour tous les véhicules
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
                Réserver
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
                Voir les tarifs
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
          Pourquoi le detailing est une meilleure option
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
              Un lavage traditionnel enlève surtout la saleté de surface. C’est
              rapide et utile pour un entretien de base, mais il ne traite pas en
              profondeur les détails intérieurs, les finitions, les zones moins
              visibles ou la présentation globale du véhicule.
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
              Le detailing va plus loin: meilleure attention aux matériaux,
              finition plus soignée, nettoyage plus précis et résultat beaucoup
              plus raffiné. C’est le meilleur choix pour les propriétaires qui
              veulent un véhicule propre, élégant et entretenu avec sérieux.
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
          Pourquoi nous choisir
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
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
    </div>
  );
}
