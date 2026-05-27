"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header({ lang }) {
  const isFR = lang === "fr";
  const [menuOpen, setMenuOpen] = useState(false);

  const links = isFR
    ? [
        { href: "/fr", label: "Accueil" },
        { href: "/fr/services", label: "Services" },
        { href: "/fr/tarifs", label: "Tarifs" },
        { href: "/fr/reserver", label: "Réserver" },
        { href: "/fr/contact", label: "Contactez-Nous" },
        { href: "/fr/about", label: "À Propos" },
      ]
    : [
        { href: "/en", label: "Home" },
        { href: "/en/services", label: "Services" },
        { href: "/en/packages", label: "Packages" },
        { href: "/en/book", label: "Book Now" },
        { href: "/en/contact", label: "Contact Us" },
        { href: "/en/about", label: "About Us" },
      ];

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* LOGO */}
        <Link href={isFR ? "/fr" : "/en"}>
          <img
            src="/AscendantAutoDetailing.png"
            alt="Ascendant Auto Detailing"
            className="header-logo"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="desktop-nav">
          {links.map((link) => (
            <Link key={link.href} href={link.href} style={linkStyle}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP LANGUAGE SWITCH */}
        <div className="language-switch desktop-language">
          <Link href="/fr" style={isFR ? activeLang : inactiveLang}>
            FR
          </Link>
          <span style={{ color: "white" }}>|</span>
          <Link href="/en" style={!isFR ? activeLang : inactiveLang}>
            EN
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
  className="hamburger"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Open menu"
  type="button"
>
  &#9776;
</button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="language-switch mobile-language">
            <Link href="/fr" style={isFR ? activeLang : inactiveLang}>
              FR
            </Link>
            <span style={{ color: "white" }}>|</span>
            <Link href="/en" style={!isFR ? activeLang : inactiveLang}>
              EN
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        .site-header {
          background-color: black;
          color: white;
          width: 100%;
          position: relative;
          z-index: 1000;
        }

        .header-inner {
          max-width: 1400px;
          margin: 0 auto;
          height: 120px;
          padding: 0 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
        }

        .header-logo {
          height: 200px;
          object-fit: contain;
        }

        .desktop-nav {
          display: flex;
          gap: 40px;
          font-size: 18px;
          font-weight: 500;
        }

        .language-switch {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
        }

        .hamburger {
  display: none;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 34px;
  line-height: 1;
  padding: 0;
  margin: 0;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  box-shadow: none;
  appearance: none;
  -webkit-appearance: none;
}

.hamburger:focus,
.hamburger:active,
.hamburger:hover,
.hamburger:visited {
  color: white;
  background: transparent;
  outline: none;
  box-shadow: none;
}

.hamburger span {
  display: block;
  width: 30px;
  height: 3px;
  background-color: white;
  border-radius: 3px;
}
        }

        .mobile-menu {
          display: none;
        }

        @media (max-width: 768px) {
          .header-inner {
            height: 90px;
            padding: 0 20px;
          }

          .header-logo {
            height: 135px;
          }

          .desktop-nav,
          .desktop-language {
            display: none;
          }

          .hamburger {
            display: block;
          }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 18px;
            background-color: black;
            border-top: 1px solid rgba(212, 175, 55, 0.35);
            padding: 25px 20px 30px;
          }

          .mobile-link {
            color: white;
            text-decoration: none;
            font-size: 18px;
            font-weight: 500;
          }

          .mobile-language {
            margin-top: 10px;
          }
        }
      `}</style>
    </header>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

const activeLang = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

const inactiveLang = {
  color: "#888",
  textDecoration: "none",
  fontWeight: "normal",
};
