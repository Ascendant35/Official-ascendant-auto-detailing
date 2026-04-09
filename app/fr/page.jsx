import Link from "next/link";

export default function HomeFR() {
  return (
    <div>
      <h1>FR Homepage</h1>

      <p>Ascendant Auto Detailing</p>

      <div>
        <Link href="/fr/services">Services</Link><br />
        <Link href="/fr/tarifs">Tarifs</Link><br />
        <Link href="/fr/reserver">Réserver</Link><br />
        <Link href="/fr/contact">Contact</Link><br />
        <Link href="/fr/about">À propos</Link>
      </div>

      <br />

      <Link href="/en">Switch to English</Link>
    </div>
  );
}
