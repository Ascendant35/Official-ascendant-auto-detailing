"use client";

import { useMemo, useState } from "react";
import Header from "../../components/Header";

export default function BookNow() {
  const [selectedPackage, setSelectedPackage] = useState("care");
  const [selectedVehicle, setSelectedVehicle] = useState("sedan");
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [serviceType, setServiceType] = useState("package");

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
    sedan: "Sedan",
    suv: "SUV",
    truck: "Truck / Large SUV",
  };

  const extras = [
    { id: "saltRemoval", name: "Salt / Calcium Extraction", price: 30 },
    { id: "petHair", name: "Pet Hair Removal", price: 35 },
    { id: "odorTreatment", name: "Odor Removal / Ozone Treatment", price: 40 },
    { id: "specificStains", name: "Specific Stains Removal", price: 40 },
    { id: "engineCleaning", name: "Engine Bay Detail", price: 50 },
    { id: "leatherTreatment", name: "Leather Treatment", price: 60 },
    { id: "paintProtection", name: "Spray Sealant / Paint Protection", price: 70 },
    { id: "headlightRestoration", name: "Headlight Restoration", price: 80 },
    { id: "claybarTreatment", name: "Clay Bar Treatment", price: 80 },
  ];

  const toggleExtra = (extraId) => {
    setSelectedExtras((prev) =>
      prev.includes(extraId)
        ? prev.filter((id) => id !== extraId)
        : [...prev, extraId]
    );
  };

  const selectedPackageData = packagePrices[selectedPackage];

  const standalonePrice = useMemo(() => {
    if (serviceType === "exterior") {
      if (selectedVehicle === "sedan") return 99.99;
      if (selectedVehicle === "suv") return 124.99;
      if (selectedVehicle === "truck") return 159.99;
    }

    if (serviceType === "interior") {
      if (selectedVehicle === "sedan") return 119.99;
      if (selectedVehicle === "suv") return 159.99;
      if (selectedVehicle === "truck") return 189.99;
    }

    return 0;
  }, [serviceType, selectedVehicle]);

  const packageBasePrice =
    serviceType === "package"
      ? selectedPackageData[selectedVehicle]
      : standalonePrice;

  const extrasTotal = useMemo(() => {
    return selectedExtras.reduce((total, extraId) => {
      const found = extras.find((extra) => extra.id === extraId);
      return total + (found?.price || 0);
    }, 0);
  }, [selectedExtras]);

  const subtotal = packageBasePrice + extrasTotal;
  const gst = subtotal * 0.05;
  const qst = subtotal * 0.09975;
  const total = subtotal + gst + qst;

  const calendlyLinks = {
    package: {
      care: "https://calendly.com/ascendantautodetailing/ascendant-care-mobile-detail",
      elite: "https://calendly.com/ascendantautodetailing/ascendant-elite",
      signature: "https://calendly.com/ascendantautodetailing/ascendant-signature-mobile-detail",
    },
    exterior: "https://calendly.com/ascendantautodetailing/exterior-only-mobile-detail",
    interior: "https://calendly.com/ascendantautodetailing/interior-only-mobile-detail",
  };

  const getSelectedServiceName = () => {
    if (serviceType === "package") return selectedPackageData.name;
    if (serviceType === "exterior") return "Exterior Detailing Only";
    return "Interior Detailing Only";
  };

  const getSelectedExtrasText = () => {
    if (selectedExtras.length === 0) return "No extras selected";

    return selectedExtras
      .map((extraId) => extras.find((extra) => extra.id === extraId)?.name)
      .filter(Boolean)
      .join(", ");
  };

  const getCalendlyLink = () => {
    const baseUrl =
      serviceType === "package"
        ? calendlyLinks.package[selectedPackage]
        : calendlyLinks[serviceType];

    const params = new URLSearchParams({
      a1: getSelectedServiceName(),
      a2: vehicleLabels[selectedVehicle],
      a3: getSelectedExtrasText(),
      a4: `$${subtotal.toFixed(2)}`,
      a5: `$${total.toFixed(2)}`,
    });

    return `${baseUrl}?${params.toString()}`;
  };

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Header lang="en" />

      <section style={heroStyle}>
        <div style={heroOverlay} />
        <div style={container}>
          <div style={heroContent}>
            <p style={eyebrow}>BOOK NOW</p>
            <h1 style={heroTitle}>Reserve Your Premium Detailing Experience</h1>
            <p style={heroText}>
              Select your service, choose your vehicle type, add any extras you need,
              and review your total before confirming your appointment.
            </p>
          </div>
        </div>
      </section>

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
            Book Your Service
          </h2>

          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#ccc", marginBottom: "20px" }}>
            Enjoy a premium detailing experience without leaving your home. Our fully equipped mobile service comes directly to you.
          </p>

          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#ccc", marginBottom: "20px" }}>
            Select your package, choose your vehicle type, and customize your service.
          </p>

          <p style={{ fontSize: "16px", color: "#aaa" }}>
            We will contact you to confirm your appointment.
          </p>

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

      <section style={bookingSection} className="bookingSection">
        <div style={bookingBox}>
          <h2 style={title}>Build Your Appointment</h2>
          <p style={desc}>
            Choose your service and customize it based on your needs.
          </p>

          <div style={sectionSpacing}>
            <h3 style={subTitle}>Select Service Type</h3>
            <div style={optionGrid} className="optionGrid">
              {[
                { id: "package", label: "Full Detailing Package" },
                { id: "exterior", label: "Exterior Only" },
                { id: "interior", label: "Interior Only" },
              ].map((option) => {
                const active = serviceType === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => setServiceType(option.id)}
                    style={{
                      ...optionCard,
                      ...(active ? activeOptionCard : {}),
                    }}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          {serviceType === "package" && (
            <div style={sectionSpacing}>
              <h3 style={subTitle}>Select Package</h3>
              <div style={optionGrid} className="optionGrid">
                {Object.entries(packagePrices).map(([key, pkg]) => {
                  const active = selectedPackage === key;
                  return (
                    <button
                      key={key}
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
          )}

          <div style={sectionSpacing}>
            <h3 style={subTitle}>Vehicle Type</h3>
            <div style={optionGrid} className="optionGrid">
              {Object.entries(vehicleLabels).map(([key, label]) => {
                const active = selectedVehicle === key;

                const price =
                  serviceType === "package"
                    ? packagePrices[selectedPackage][key]
                    : serviceType === "exterior"
                    ? key === "sedan"
                      ? 99.99
                      : key === "suv"
                      ? 124.99
                      : 159.99
                    : key === "sedan"
                    ? 119.99
                    : key === "suv"
                    ? 159.99
                    : 189.99;

                return (
                  <button
                    key={key}
                    onClick={() => setSelectedVehicle(key)}
                    style={{
                      ...optionCard,
                      ...(active ? activeOptionCard : {}),
                    }}
                  >
                    <span style={optionTitle}>{label}</span>
                    <span style={optionSmallPrice}>${price.toFixed(2)}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div style={sectionSpacing}>
            <h3 style={subTitle}>Add Extras</h3>
            <div style={extrasGrid} className="extrasGrid">
              {extras.map((extra) => {
                const active = selectedExtras.includes(extra.id);
                return (
                  <button
                    key={extra.id}
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

        <div style={totalBox}>
          <h2 style={title}>Your Total</h2>

          <div style={summarySection}>
            <div style={summaryRow}>
              <span style={summaryLabel}>Service</span>
              <span>
                {serviceType === "package"
                  ? selectedPackageData.name
                  : serviceType === "exterior"
                  ? "Exterior Detailing Only"
                  : "Interior Detailing Only"}
              </span>
            </div>

            <div style={summaryRow}>
              <span style={summaryLabel}>Vehicle</span>
              <span>{vehicleLabels[selectedVehicle]}</span>
            </div>

            <div style={summaryRow}>
              <span style={summaryLabel}>Base Price</span>
              <span style={gold}>${packageBasePrice.toFixed(2)}</span>
            </div>
          </div>

          <div style={divider} />

          <div style={summarySection}>
            <p style={{ ...subTitle, marginBottom: "14px" }}>Extras</p>
            {selectedExtras.length === 0 ? (
              <p style={{ color: "#888", margin: 0 }}>No extras selected</p>
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
              <span style={summaryLabel}>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div style={summaryRow}>
              <span style={summaryLabel}>GST (5%)</span>
              <span>${gst.toFixed(2)}</span>
            </div>
            <div style={summaryRow}>
              <span style={summaryLabel}>QST (9.975%)</span>
              <span>${qst.toFixed(2)}</span>
            </div>
          </div>

          <div style={divider} />

          <div style={{ ...summaryRow, marginTop: "10px" }}>
            <span style={{ fontSize: "28px", fontWeight: 600 }}>Total</span>
            <span
              style={{
                fontSize: "30px",
                fontWeight: 700,
                color: "#d4af37",
              }}
            >
              ${total.toFixed(2)}
            </span>
          </div>

          <div style={goldAccentBox}>
            <h3 style={infoTitle}>💰 Retainer Policy</h3>
            <p style={infoText}>
              All appointments require a{" "}
              <span style={gold}>$50 retainer</span>, which will be fully deducted
              from your final service total.
            </p>
          </div>

          <div style={goldAccentBox}>
            <h3 style={infoTitle}>📅 Booking Notice</h3>
            <p style={infoText}>
              All appointments must be booked a minimum of 24 hours in advance.
              If you require same-day service, please call us to inquire about
              availability. Same-day appointments cannot be guaranteed. 
               </p>
</div>

              <div style={goldAccentBox}>
  <h3 style={infoTitle}>❌ Cancellation Policy</h3>

  <p style={infoText}>
    To ensure optimal scheduling and availability for all clients,all
    appointments must be cancelled at least{" "}
    <span style={gold}>24 hours in advance</span> to qualify for a full refund of
    the <span style={gold}>$50 retainer</span>. Cancellations made within
    24 hours of the scheduled appointment are non-refundable.
  </p>
</div>
              
            <h3 style={infoTitle}>🛡️ Our Satisfaction Guarantee</h3>
            <p style={infoText}>
              Your satisfaction is our priority. Before we leave, we'll review the
              completed service with you to ensure it meets your expectations.
            </p>
          </div>

          <a
            href={getCalendlyLink()}
            target="_blank"
            rel="noreferrer"
            style={goldBtn}
          >
            Confirm Booking
          </a>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 768px) {
          .bookingSection {
            display: grid !important;
            grid-template-columns: 1fr !important;
            padding: 50px 20px !important;
          }

          .optionGrid,
          .extrasGrid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

/* STYLES */

const goldAccentBox = {
  background: "#111",
  border: "1px solid rgba(212, 175, 55, 0.65)",
  borderRadius: "18px",
  padding: "22px",
  marginTop: "18px",
  boxShadow: "0 0 10px rgba(212, 175, 55, 0.05)",
};

const infoTitle = {
  color: "#d4af37",
  fontSize: "1.2rem",
  fontWeight: "700",
  margin: "0 0 14px",
};

const infoText = {
  color: "#ddd",
  lineHeight: 1.8,
  fontSize: "1rem",
  margin: 0,
};

const heroStyle = {
  minHeight: "58vh",
  display: "flex",
  alignItems: "center",
  position: "relative",
  backgroundImage:
    'url("https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const heroOverlay = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.78))",
};

const container = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "100px 50px",
  width: "100%",
  position: "relative",
  zIndex: 2,
};

const heroContent = {
  maxWidth: "760px",
};

const eyebrow = {
  color: "#d4af37",
  letterSpacing: "0.28em",
  fontSize: "13px",
  marginBottom: "16px",
};

const heroTitle = {
  fontSize: "64px",
  lineHeight: 1.05,
  marginBottom: "20px",
};

const heroText = {
  fontSize: "20px",
  color: "#ccc",
  maxWidth: "700px",
  lineHeight: 1.7,
};

const bookingSection = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "100px 50px",
  display: "grid",
  gridTemplateColumns: "1.2fr 0.8fr",
  gap: "40px",
};

const bookingBox = {
  backgroundColor: "#111",
  padding: "40px",
  borderRadius: "28px",
  border: "1px solid rgba(255,255,255,0.05)",
};

const totalBox = {
  backgroundColor: "#111",
  padding: "40px",
  borderRadius: "28px",
  border: "1px solid #d4af37",
  alignSelf: "start",
  position: "sticky",
  top: "40px",
};

const title = {
  fontSize: "34px",
  marginBottom: "14px",
};

const desc = {
  color: "#bbb",
  marginBottom: "30px",
  lineHeight: 1.7,
};

const subTitle = {
  color: "#d4af37",
  marginBottom: "14px",
  fontSize: "18px",
};

const sectionSpacing = {
  marginBottom: "34px",
};

const optionGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
};

const extrasGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "16px",
};

const optionCard = {
  backgroundColor: "#0d0d0d",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
  color: "#f5f5f5",
  cursor: "pointer",
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const extraCard = {
  backgroundColor: "#0d0d0d",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
  color: "#f5f5f5",
  cursor: "pointer",
  textAlign: "left",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const activeOptionCard = {
  border: "1px solid #d4af37",
  boxShadow: "0 0 0 1px rgba(212,175,55,0.15) inset",
};

const optionTitle = {
  fontSize: "16px",
  fontWeight: 600,
};

const optionSmallPrice = {
  color: "#d4af37",
  fontSize: "14px",
};

const summarySection = {
  marginTop: "20px",
};

const summaryRow = {
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  marginBottom: "12px",
  alignItems: "flex-start",
};

const summaryLabel = {
  color: "#aaa",
};

const divider = {
  height: "1px",
  backgroundColor: "rgba(255,255,255,0.08)",
  margin: "24px 0",
};

const retainerBox = {
  marginTop: "30px",
  padding: "18px",
  backgroundColor: "#0d0d0d",
  borderRadius: "16px",
  border: "1px solid rgba(212,175,55,0.18)",
};

const gold = {
  color: "#d4af37",
  fontWeight: "bold",
};

const goldBtn = {
  display: "inline-block",
  marginTop: "28px",
  padding: "14px 28px",
  borderRadius: "999px",
  backgroundColor: "#d4af37",
  color: "#111",
  textDecoration: "none",
  fontWeight: "bold",
};
