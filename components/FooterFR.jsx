export default function FooterFR() {
  return (
    <footer style={footerStyle}>
      <div style={container}>
        <div>
          <img src="/AscendantAutoDetailing.png" style={{ width: "180px" }} />
          <p style={text}>
            Esthétique automobile haut de gamme. Précision. Excellence. Ascendant.
          </p>
        </div>

        <div>
          <h3 style={title}>Navigation</h3>
          <ul style={list}>
            <li><a href="/fr/services" style={link}>Services</a></li>
            <li><a href="/fr/packages" style={link}>Tarifs</a></li>
            <li><a href="/fr/about" style={link}>À propos</a></li>
            <li><a href="/fr/contact" style={link}>Contactez-nous</a></li>
          </ul>
        </div>

        <div>
          <h3 style={title}>Contact</h3>
          <p style={text}>
            ascendantautodetailing@gmail.com <br />
            Montréal, QC <br />
            Sur rendez-vous uniquement
          </p>
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <a href="/booking" style={button}>Réserver</a>
      </div>

      <div style={bottom}>
        © {new Date().getFullYear()} Ascendant Auto Detailing
      </div>
    </footer>
  );
}
