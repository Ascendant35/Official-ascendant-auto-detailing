import Link from "next/link";

export default function Header({ lang }) {
  const isFR = lang === "fr";

  return (
    <header
      style={{
        backgroundColor: "black",
        color: "white",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "25px 50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <Link href={isFR ? "/fr" : "/en"}>
          <img
            src="/logo.png"
            alt="Ascendant Auto Detailing"
            style={{
              height: "55px",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* NAVIGATION */}
        <nav
          style={{
            display: "flex",
            gap: "40px",
            fontSize: "18px",
            fontWeight: "500",
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

        {/* LANGUAGE SWITCH */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "15px",
          }}
        >
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
    </header>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
};
