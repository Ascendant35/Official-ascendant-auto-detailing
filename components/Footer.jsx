export default function Footer({ lang }) {
  const isFR = lang === "fr";

  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "60px 20px 30px",
        borderTop: "1px solid #222",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
        }}
      >
        {/* LOGO + BRAND */}
        <div>
          <img
            src="/AscendantAutoDetailing.png"
            alt="Ascendant Auto Detailing"
            style={{ width: "180px", marginBottom: "20px" }}
          />
          <p style={{ color: "#aaa", lineHeight: "1.6" }}>
            {isFR
              ? "Esthétique automobile haut de gamme. Précision. Excellence. Ascendant."
              : "Premium automotive detailing. Precision. Excellence. Ascendant."}
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 style={{ marginBottom: "15px", color: "#C9A34E" }}>
            {isFR ? "Navigation" : "Navigation"}
          </h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li><a href={isFR ? "/fr/services" : "/en/services"} style={link}>Services</a></li>
            <li><a href={isFR ? "/fr/packages" : "/en/packages"} style={link}>{isFR ? "Tarifs" : "Packages"}</a></li>
            <li><a href={isFR ? "/fr/booking" : "/en/booking"} style={link}>{isFR ? "Réserver" : "Book Now"}</a></li>
            <li><a href={isFR ? "/fr/about" : "/en/about"} style={link}>{isFR ? "À propos" : "About Us"}</a></li>
            <li><a href={isFR ? "/fr/contact" : "/en/contact"} style={link}>{isFR ? "Contactez-nous" : "Contact"}</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 style={{ marginBottom: "15px", color: "#C9A34E" }}>
            {isFR ? "Services" : "Services"}
          </h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li>{isFR ? "Nettoyage intérieur" : "Interior Detailing"}</li>
            <li>{isFR ? "Nettoyage extérieur" : "Exterior Detailing"}</li>
            <li>{isFR ? "Détail complet" : "Full Detail"}</li>
            <li>{isFR ? "Correction de peinture" : "Paint Correction"}</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 style={{ marginBottom: "15px", color: "#C9A34E" }}>
            {isFR ? "Contact" : "Contact"}
          </h3>
          <p style={{ color: "#aaa", lineHeight: "1.8" }}>
            📧 ascendantautodetailing@gmail.com <br />
            📍 {isFR ? "Montréal, QC" : "Montreal, QC"} <br />
            📞 (514) 000-0000 <br />
            {isFR ? "Sur rendez-vous uniquement" : "By appointment only"}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <p style={{ marginBottom: "15px", fontSize: "18px" }}>
          {isFR
            ? "Prêt à élever votre véhicule?"
            : "Ready to elevate your vehicle?"}
        </p>

        <a
          href={isFR ? "/fr/booking" : "/en/booking"}
          style={{
            backgroundColor: "#C9A34E",
            color: "#000",
            padding: "12px 30px",
            textDecoration: "none",
            fontWeight: "600",
            borderRadius: "5px",
          }}
        >
          {isFR ? "Réserver maintenant" : "Book Now"}
        </a>
      </div>

      {/* BOTTOM BAR */}
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          borderTop: "1px solid #222",
          paddingTop: "20px",
          fontSize: "14px",
          color: "#777",
        }}
      >
        © {new Date().getFullYear()} Ascendant Auto Detailing. All rights reserved.
      </div>
    </footer>
  );
}

const link = {
  color: "#aaa",
  textDecoration: "none",
};
