import Link from "next/link";

export default function HomeFR() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Ascendant Auto Detailing (FR)</h1>

      <p>Bienvenue sur notre site.</p>

      <div style={{ marginTop: "20px" }}>
        <Link href="/fr/services">Services</Link><br />
        <Link href="/fr/tarifs">Tarifs</Link><br />
        <Link href="/fr/reserver">Réserver</Link><br />
        <Link href="/fr/contact">Contactez-nous</Link><br />
        <Link href="/fr/about">À propos</Link>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Link href="/en">Switch to English</Link>
      </div>
    </div>
  );
}
