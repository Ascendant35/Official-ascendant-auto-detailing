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
      {/* MAIN ROW */}
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* LOGO + BRAND */}
        <div style={{ maxWidth: "300px" }}>
          <img
            src="/AscendantAutoDetailing.png"
            alt="logo"
            style={{ width: "250px", marginBottom: "15px" }}
          />

          <p style={{ color: "#aaa", lineHeight: "1.6" }}>
            {isFR
              ? "Esthétique automobile haut de gamme. Précision. Excellence. Ascendant."
              : "Premium automotive detailing. Precision. Excellence. Ascendant."}
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h4 style={title}>{isFR ? "Contact" : "Contact"}</h4>

          <p style={text}>
            📍 Montreal, Laval, South Shore, North Shore <br />
          </p>

          <p style={text}>
            📧 ascendantautodetailing@gmail.com
          </p>

          <p style={text}>
            📞 (514) 000-0000
          </p>

          <p style={text}>
            {isFR ? "Sur rendez-vous uniquement" : "By appointment only"}
          </p>
        </div>

        {/* SOCIALS */}
        <div>
          <h4 style={title}>Socials</h4>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <a href="#" style={social}>📸 Instagram</a>
            <a href="#" style={social}>🎵 TikTok</a>
            <a href="#" style={social}>👻 Snapchat</a>
          </div>
        </div>

        {/* CTA */}
        <div>
          <h4 style={title}>{isFR ? "Réserver" : "Book"}</h4>

          <a
            href={isFR ? "/fr/reserver" : "/en/book"}
            style={button}
          >
            {isFR ? "Réserver maintenant" : "Book Now"}
          </a>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          borderTop: "1px solid #222",
          paddingTop: "20px",
          fontSize: "13px",
          color: "#777",
        }}
      >
        © 2026 Ascendant Auto Detailing
      </div>
    </footer>
  );
}

const title = {
  color: "#C9A34E",
  marginBottom: "10px",
};

const text = {
  color: "#aaa",
  marginBottom: "6px",
  lineHeight: "1.6",
};

const social = {
  color: "#aaa",
  textDecoration: "none",
  transition: "0.3s",
};

const button = {
  backgroundColor: "#C9A34E",
  color: "#000",
  padding: "12px 25px",
  textDecoration: "none",
  fontWeight: "600",
  borderRadius: "5px",
  display: "inline-block",
  marginTop: "10px",
};
