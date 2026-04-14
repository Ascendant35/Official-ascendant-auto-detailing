export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <p style={{ marginBottom: "10px" }}>
        Premium automotive detailing. Precision. Excellence. Ascendant.
      </p>

      <a
        href="/book"
        style={{
          backgroundColor: "#C9A34E",
          color: "#000",
          padding: "10px 25px",
          textDecoration: "none",
          fontWeight: "600",
          borderRadius: "5px",
        }}
      >
        Book Now
      </a>

      <p style={{ marginTop: "20px", fontSize: "12px", color: "#777" }}>
        © {new Date().getFullYear()} Ascendant Auto Detailing
      </p>
    </footer>
  );
}
