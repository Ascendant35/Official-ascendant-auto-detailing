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
        <div style={{ flex: "1", minWidth: "220px", maxWidth: "300px" }}>
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
        <div style={{ flex: "1", minWidth: "220px" }}>
          <h4 style={title}>{isFR ? "Contact" : "Contact"}</h4>

          <p style={text}>
            📍 Montreal, Laval, South Shore, North Shore
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
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
  <a
    href="https://instagram.com/ascendantautodetail"
    target="_blank"
    rel="noopener noreferrer"
    style={social}
  >
    📸 Instagram @ascendantautodetail
  </a>

  <a
    href="https://tiktok.com/@ascendantautodetail"
    target="_blank"
    rel="noopener noreferrer"
    style={social}
  >
    🎵 TikTok @ascendantautodetail
  </a>

  <a
    href="https://snapchat.com/add/ascendantautodetail"
    target="_blank"
    rel="noopener noreferrer"
    style={social}
  >
    👻 Snapchat @ascendantautodetail
  </a>

  {/* FACEBOOK */}
  <a
    href="https://facebook.com/AscendantAutoDetail"
    target="_blank"
    rel="noopener noreferrer"
    style={social}
  >
    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
      
      {/* FACEBOOK ICON */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="#1877F2"
      >
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5V12H17l-.4 3h-2.7v7A10 10 0 0 0 22 12z" />
      </svg>

      Facebook @ascendantautodetailing
    </span>
  </a>
</div>
        </div>

        {/* CTA */}
        <div style={{ flex: "1", minWidth: "220px" }}>
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
  whiteSpace: "normal",
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
