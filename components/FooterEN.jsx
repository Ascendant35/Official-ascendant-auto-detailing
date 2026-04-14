export default function FooterEN() {
  return (
    <footer style={footerStyle}>
      <div style={container}>
        <div>
          <img src="/AscendantAutoDetailing.png" style={{ width: "180px" }} />
          <p style={text}>
            Premium automotive detailing. Precision. Excellence. Ascendant.
          </p>
        </div>

        <div>
          <h3 style={title}>Navigation</h3>
          <ul style={list}>
            <li><a href="/en/services" style={link}>Services</a></li>
            <li><a href="/en/packages" style={link}>Packages</a></li>
            <li><a href="/en/about" style={link}>About Us</a></li>
            <li><a href="/en/contact" style={link}>Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 style={title}>Contact</h3>
          <p style={text}>
            ascendantautodetailing@gmail.com <br />
            Montreal, QC <br />
            By appointment only
          </p>
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <a href="/booking" style={button}>Book Now</a>
      </div>

      <div style={bottom}>
        © {new Date().getFullYear()} Ascendant Auto Detailing
      </div>
    </footer>
  );
}
