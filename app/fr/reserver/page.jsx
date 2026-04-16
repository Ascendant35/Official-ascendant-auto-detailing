"use client";

import { useMemo, useState } from "react";
import Header from "../../components/Header";

export default function Reserver() {
  const [selectedPackage, setSelectedPackage] = useState("care");
  const [selectedVehicle, setSelectedVehicle] = useState("sedan");
  const [selectedExtras, setSelectedExtras] = useState([]);

  const packagePrices = {
    care: {
      name: "Ascendant Care",
      sedan: 189.99,
      suv: 209.99,
      truck: 249.99,
    },
    elite: {
      name: "Ascendant Elite",
      sedan: 289.99,
      suv: 309.99,
      truck: 349.99,
    },
    signature: {
      name: "Ascendant Signature",
      sedan: 389.99,
      suv: 409.99,
      truck: 449.99,
    },
  };

  const vehicleLabels = {
    sedan: "Berline",
    suv: "VUS",
    truck: "Camion / Grand VUS",
  };

  const extras = [
    { id: "petHair", name: "Poils d’animaux", price: 30 },
    { id: "saltRemoval", name: "Sel / Calcium", price: 25 },
    { id: "odorTreatment", name: "Traitement des odeurs", price: 40 },
    { id: "specificStains", name: "Taches spécifiques", price: 20 },
    { id: "engineCleaning", name: "Nettoyage moteur", price: 50 },
    { id: "leatherTreatment", name: "Traitement du cuir", price: 60 },
  ];

  const toggleExtra = (extraId) => {
    setSelectedExtras((prev) =>
      prev.includes(extraId)
        ? prev.filter((id) => id !== extraId)
        : [...prev, extraId]
    );
  };

  const selectedPackageData = packagePrices[selectedPackage];
  const packageBasePrice = selectedPackageData[selectedVehicle];

  const extrasTotal = useMemo(() => {
    return selectedExtras.reduce((total, extraId) => {
      const found = extras.find((extra) => extra.id === extraId);
      return total + (found ? found.price : 0);
    }, 0);
  }, [selectedExtras]);

  const subtotal = packageBasePrice + extrasTotal;
  const gst = subtotal * 0.05;
  const qst = subtotal * 0.09975;
  const total = subtotal + gst + qst;

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Header lang="fr" />

      {/* HERO */}
      <section style={heroStyle}>
        <div style={heroOverlay} />
        <div style={container}>
          <div style={heroContent}>
            <p style={eyebrow}>RÉSERVER</p>
            <h1 style={heroTitle}>Réservez votre expérience haut de gamme</h1>
            <p style={heroText}>
              Choisissez votre forfait, sélectionnez votre type de véhicule, ajoutez des options et consultez votre total avant de confirmer votre rendez-vous.
            </p>
          </div>
        </div>
      </section>
     {/* SECTION INTRO RÉSERVATION */}
<section
  style={{
    backgroundColor: "#0a0a0a",
    padding: "80px 20px",
    display: "flex",
    justifyContent: "center",
  }}
>
  <div
    style={{
      maxWidth: "1000px",
      width: "100%",
      backgroundColor: "#111",
      borderRadius: "28px",
      padding: "50px 40px",
      border: "1px solid rgba(212,175,55,0.4)",
      boxShadow: "0 0 40px rgba(212,175,55,0.08)",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "42px",
        fontWeight: "600",
        marginBottom: "20px",
        letterSpacing: "1px",
        color: "white",
      }}
    >
      Réservez Votre Service
    </h2>

    <p
      style={{
        fontSize: "18px",
        lineHeight: "1.8",
        color: "#ccc",
        marginBottom: "20px",
      }}
    >
      Profitez d’une expérience de nettoyage haut de gamme sans quitter votre domicile. Notre service mobile entièrement équipé se déplace directement chez vous, vous permettant de gagner du temps tout en offrant à votre véhicule un soin exceptionnel.
    </p>

    <p
      style={{
        fontSize: "18px",
        lineHeight: "1.8",
        color: "#ccc",
        marginBottom: "20px",
      }}
    >
      Sélectionnez votre forfait, choisissez le type de véhicule et personnalisez votre service avec des options adaptées à vos besoins — le tout réalisé sur place avec précision et souci du détail.
    </p>

    <p
      style={{
        fontSize: "16px",
        color: "#aaa",
      }}
    >
      Une fois votre demande envoyée, nous vous contacterons pour confirmer votre rendez-vous et finaliser les détails selon votre disponibilité.
    </p>

    {/* LIGNE DORÉE */}
    <div
      style={{
        width: "80px",
        height: "2px",
        backgroundColor: "#D4AF37",
        margin: "40px auto 0",
      }}
    />
  </div>
</section>
</section>

      {/* MAIN */}
      <section style={bookingSection}>
        <div style={bookingBox}>
          <h2 style={title}>Créez votre rendez-vous</h2>
          <p style={desc}>
            Choisissez le niveau de service adapté à votre véhicule et personnalisez-le avec les options souhaitées.
          </p>

          {/* PACKAGE */}
          <div style={sectionSpacing}>
            <h3 style={subTitle}>Choisir un forfait</h3>
            <div style={optionGrid}>
              {Object.entries(packagePrices).map(([key, pkg]) => {
                const active = selectedPackage === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedPackage(key)}
                    style={{
                      ...optionCard,
                      ...(active ? activeOptionCard : {}),
                    }}
                  >
                    <span style={optionTitle}>{pkg.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* VEHICLE */}
          <div style={sectionSpacing}>
            <h3 style={subTitle}>Type de véhicule</h3>
            <div style={optionGrid}>
              {Object.entries(vehicleLabels).map(([key, label]) => {
                const active = selectedVehicle === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedVehicle(key)}
                    style={{
                      ...optionCard,
                      ...(active ? activeOptionCard : {}),
                    }}
                  >
                    <span style={optionTitle}>{label}</span>
                    <span style={optionSmallPrice}>
                      ${packagePrices[selectedPackage][key].toFixed(2)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* EXTRAS */}
          <div style={sectionSpacing}>
            <h3 style={subTitle}>Options supplémentaires</h3>
            <div style={extrasGrid}>
              {extras.map((extra) => {
                const active = selectedExtras.includes(extra.id);
                return (
                  <button
                    key={extra.id}
                    type="button"
                    onClick={() => toggleExtra(extra.id)}
                    style={{
                      ...extraCard,
                      ...(active ? activeOptionCard : {}),
                    }}
                  >
                    <span>{extra.name}</span>
                    <span style={optionSmallPrice}>+${extra.price.toFixed(2)}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div style={totalBox}>
          <h2 style={title}>Votre total</h2>

          <div style={summarySection}>
            <div style={summaryRow}>
              <span style={summaryLabel}>Forfait</span>
              <span>{selectedPackageData.name}</span>
            </div>

            <div style={summaryRow}>
              <span style={summaryLabel}>Véhicule</span>
              <span>{vehicleLabels[selectedVehicle]}</span>
            </div>

            <div style={summaryRow}>
              <span style={summaryLabel}>Prix de base</span>
              <span style={gold}>${packageBasePrice.toFixed(2)}</span>
            </div>
          </div>

          <div style={divider} />

          <div style={summarySection}>
            <p style={{ ...subTitle, marginBottom: "14px" }}>Options</p>
            {selectedExtras.length === 0 ? (
              <p style={{ color: "#888", margin: 0 }}>Aucune option sélectionnée</p>
            ) : (
              selectedExtras.map((extraId) => {
                const extra = extras.find((item) => item.id === extraId);
                if (!extra) return null;

                return (
                  <div key={extraId} style={summaryRow}>
                    <span style={summaryLabel}>{extra.name}</span>
                    <span>+${extra.price.toFixed(2)}</span>
                  </div>
                );
              })
            )}
          </div>

          <div style={divider} />

          <div style={summarySection}>
            <div style={summaryRow}>
              <span style={summaryLabel}>Sous-total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div style={summaryRow}>
              <span style={summaryLabel}>TPS (5%)</span>
              <span>${gst.toFixed(2)}</span>
            </div>
            <div style={summaryRow}>
              <span style={summaryLabel}>TVQ (9.975%)</span>
              <span>${qst.toFixed(2)}</span>
            </div>
          </div>

          <div style={divider} />

          <div style={{ ...summaryRow, marginTop: "10px" }}>
            <span style={{ fontSize: "28px", fontWeight: 600 }}>Total</span>
            <span style={{ fontSize: "30px", fontWeight: 700, color: "#d4af37" }}>
              ${total.toFixed(2)}
            </span>
          </div>

          <div style={retainerBox}>
            <p style={{ margin: 0, color: "#ddd", lineHeight: 1.6 }}>
              Un dépôt de <span style={gold}>50$</span> est requis pour confirmer votre rendez-vous.
            </p>
          </div>

          <a
            href="https://calendly.com/YOUR-LINK"
            target="_blank"
            rel="noreferrer"
            style={goldBtn}
          >
            Confirmer le rendez-vous
          </a>
        </div>
      </section>
    </div>
  );
}

/* ⚠️ SAME STYLES — UNCHANGED BELOW */
const heroStyle = { minHeight: "58vh", display: "flex", alignItems: "center", position: "relative", backgroundImage: 'url("https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80")', backgroundSize: "cover", backgroundPosition: "center" };
const heroOverlay = { position: "absolute", inset: 0, background: "linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.78))" };
const container = { maxWidth: "1400px", margin: "0 auto", padding: "100px 50px", width: "100%", position: "relative", zIndex: 2 };
const heroContent = { maxWidth: "760px" };
const eyebrow = { color: "#d4af37", letterSpacing: "0.28em", fontSize: "13px", marginBottom: "16px" };
const heroTitle = { fontSize: "64px", lineHeight: 1.05, marginBottom: "20px" };
const heroText = { fontSize: "20px", color: "#ccc", maxWidth: "700px", lineHeight: 1.7 };
const bookingSection = { maxWidth: "1400px", margin: "0 auto", padding: "100px 50px", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "40px" };
const bookingBox = { backgroundColor: "#111", padding: "40px", borderRadius: "28px", border: "1px solid rgba(255,255,255,0.05)" };
const totalBox = { backgroundColor: "#111", padding: "40px", borderRadius: "28px", border: "1px solid #d4af37", alignSelf: "start", position: "sticky", top: "40px" };
const title = { fontSize: "34px", marginBottom: "14px" };
const desc = { color: "#bbb", marginBottom: "30px", lineHeight: 1.7 };
const subTitle = { color: "#d4af37", marginBottom: "14px", fontSize: "18px" };
const sectionSpacing = { marginBottom: "34px" };
const optionGrid = { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" };
const extrasGrid = { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" };
const optionCard = { backgroundColor: "#0d0d0d", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "18px", padding: "18px", color: "#f5f5f5", cursor: "pointer", textAlign: "left", display: "flex", flexDirection: "column", gap: "8px" };
const extraCard = { backgroundColor: "#0d0d0d", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "18px", padding: "18px", color: "#f5f5f5", cursor: "pointer", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center" };
const activeOptionCard = { border: "1px solid #d4af37", boxShadow: "0 0 0 1px rgba(212,175,55,0.15) inset" };
const optionTitle = { fontSize: "16px", fontWeight: 600 };
const optionSmallPrice = { color: "#d4af37", fontSize: "14px" };
const summarySection = { marginTop: "20px" };
const summaryRow = { display: "flex", justifyContent: "space-between", gap: "20px", marginBottom: "12px", alignItems: "flex-start" };
const summaryLabel = { color: "#aaa" };
const divider = { height: "1px", backgroundColor: "rgba(255,255,255,0.08)", margin: "24px 0" };
const retainerBox = { marginTop: "30px", padding: "18px", backgroundColor: "#0d0d0d", borderRadius: "16px", border: "1px solid rgba(212,175,55,0.18)" };
const gold = { color: "#d4af37", fontWeight: "bold" };
const goldBtn = { display: "inline-block", marginTop: "28px", padding: "14px 28px", borderRadius: "999px", backgroundColor: "#d4af37", color: "#111", textDecoration: "none", fontWeight: "bold" };
