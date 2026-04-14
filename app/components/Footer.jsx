export default function Footer({ lang = "en" }) {
  const isFR = lang === "fr";

  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "50px 20px",
        borderTop: "1px solid #222",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* BRAND */}
        <p style={{ marginBottom: "15px", fontSize: "16px", color: "#aaa" }}>
          {isFR
            ? "Esthétique automobile haut de gamme. Précision. Excellence. Ascendant."
            : "Premium automotive detailing. Precision. Excellence. Ascendant."}
        </p>

        {/* CONTACT */}
        <p style={{ marginBottom: "20px", lineHeight: "1.8", color: "#aaa" }}>
          📧 ascendantautodetailing@gmail.com <br />
          📍 {isFR ? "Montréal et environs" : "Montreal & surrounding areas"} <br />
          {isFR ? "Sur rendez-vous uniquement" : "By appointment only"}
        </p>

        {/* CTA BUTTON */}
        <a
          href={isFR ? "/fr/reserver" : "/en/book"}
          style={{
            backgroundColor: "#C9A34E",
            color: "#000",
            padding: "12px 30px",
            textDecoration: "none",
            fontWeight: "600",
            borderRadius: "5px",
            display: "inline-block",
            marginBottom: "30px",
          }}
        >
          {isFR ? "Réserver maintenant" : "Book Now"}
        </a>

        {/* NAVIGATION (premium touch) */}
        <div style={{ marginBottom: "25px", fontSize: "14px" }}>
          <a href={isFR ? "/fr/services" : "/en/services"} style={link}>
            {isFR ? "Services" : "Services"}
          </a>{" "}
          |{" "}
          <a href={isFR ? "/fr/tarifs" : "/en/packages"} style={link}>
            {isFR ? "Tarifs" : "Packages"}
          </a>{" "}
          |{" "}
          <a href={isFR ? "/fr/about" : "/en/about"} style={link}>
            {isFR ? "À propos" : "About"}
          </a>{" "}
          |{" "}
          <a href={isFR ? "/fr/contact" : "/en/contact"} style={link}>
            {isFR ? "Contact" : "Contact"}
          </a>
        </div>

        {/* COPYRIGHT */}
        <p style={{ fontSize: "12px", color: "#777" }}>
          © 2026 Ascendant Auto Detailing
        </p>
      </div>
    </footer>
  );
}

const link = {
  color: "#aaa",
  textDecoration: "none",
  margin: "0 5px",
};
