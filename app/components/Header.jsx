import Link from "next/link";

export default function Header({ lang }) {
  const isFR = lang === "fr";

  return (
    <header
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "20px 40px",
        borderBottom: "1px solid #222",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LOGO */}
        <div>
          <Link href={isFR ? "/fr" : "/en"}>
            <img
              src="/logo.png"
              alt="Ascendant Auto Detailing"
              style={{ height: "40px" }}
            />
          </Link>
        </div>

        {/* LANGUAGE SWITCH */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Link
            href="/fr"
            style={{
              color: isFR ? "white" : "#888",
              textDecoration: "none",
              fontWeight: isFR ? "bold" : "normal",
            }}
          >
            FR
          </Link>

          <span style={{ color: "white" }}>|</span>

          <Link
            href="/en"
            style={{
              color: !isFR ? "white" : "#888",
              textDecoration: "none",
              fontWeight: !isFR ? "bold" : "normal",
            }}
          >
            EN
          </Link>
        </div>
      </div>

      {/* NAVBAR */}
      <nav
        style={{
          marginTop: "15px",
          display: "flex",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {isFR ? (
          <>
            <Link href="/fr/services" style={linkStyle}>Services</Link>
            <Link href="/fr/tarifs" style={linkStyle}>Tarifs</Link>
            <Link href="/fr/reserver" style={linkStyle}>Réserver</Link>
            <Link href="/fr/contact" style={linkStyle}>Contactez-Nous</Link>
            <Link href="/fr/about" style={linkStyle}>À Propos</Link>
          </>
        ) : (
          <>
            <Link href="/en/services" style={linkStyle}>Services</Link>
            <Link href="/en/packages" style={linkStyle}>Packages</Link>
            <Link href="/en/book" style={linkStyle}>Book Now</Link>
            <Link href="/en/contact" style={linkStyle}>Contact Us</Link>
            <Link href="/en/about" style={linkStyle}>About Us</Link>
          </>
        )}
      </nav>
    </header>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "14px",
};
