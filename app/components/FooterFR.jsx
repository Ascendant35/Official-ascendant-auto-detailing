export default function FooterFR() {
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
            Esthétique automobile haut de gamme. Précision. Excellence. Ascendant.
          </p>
        </div>

        {/* CONTACT */}
        <div style={{ flex: "1", minWidth: "220px" }}>
          <h4 style={title}>Contact</h4>

          <p style={text}>
            📍 Montréal, Laval, Rive-Nord, Rive-Sud
          </p>

          <p style={text}>
            📧 ascendantautodetailing@gmail.com
          </p>

          <p style={text}>
            📞 (514) 000-0000
          </p>

          <p style={text}>
            Sur rendez-vous uniquement
          </p>
        </div>

        {/* SOCIALS */}
        <div style={{ flex: "1", minWidth: "220px" }}>
          <h4 style={title}>Réseaux sociaux</h4>

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
          </div>
        </div>

        {/* CTA */}
        <div style={{ flex: "1", minWidth: "220px" }}>
          <h4 style={title}>Réserver</h4>

          <a href="/fr/reserver" style={button}>
            Réserver maintenant
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
