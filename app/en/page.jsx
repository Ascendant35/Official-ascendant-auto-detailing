import Header from "../components/Header";
import Link from "next/link";

export default function HomeEN() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Header lang="en" />

      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "78vh",
          display: "flex",
          alignItems: "center",
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.72)), url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: "1px solid rgba(212, 175, 55, 0.25)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            width: "100%",
            padding: "80px 50px",
          }}
        >
          <div style={{ maxWidth: "760px" }}>
            <p
              style={{
                color: "#d4af37",
                letterSpacing: "3px",
                fontSize: "13px",
                marginBottom: "18px",
                textTransform: "uppercase",
              }}
            >
              Ascendant Auto Detailing
            </p>

            <h1
              style={{
                fontSize: "64px",
                lineHeight: "1.05",
                margin: "0 0 22px 0",
                fontWeight: "700",
              }}
            >
              Premium auto detailing for every type of vehicle
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.8",
                color: "#d6d6d6",
                marginBottom: "32px",
                maxWidth: "700px",
              }}
            >
              Give your vehicle a clean, refined and elevated look with detailing
              services designed for both everyday cars and luxury vehicles. We
              proudly serve Montreal, Laval, the North Shore and the South Shore.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link
                href="/en/book"
                style={{
                  backgroundColor: "#d4af37",
                  color: "#111",
                  textDecoration: "none",
                  padding: "14px 28px",
                  borderRadius: "999px",
                  fontWeight: "700",
                  fontSize: "15px",
                }}
              >
                Book Now
              </Link>

              <Link
                href="/en/packages"
                style={{
                  border: "1px solid #d4af37",
                  color: "#f5f5f5",
                  textDecoration: "none",
                  padding: "14px 28px",
                  borderRadius: "999px",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "80px 50px 30px 50px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "40px",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                color: "#d4af37",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "13px",
                marginBottom: "16px",
              }}
            >
              What is car detailing?
            </p>

            <h2
              style={{
                fontSize: "42px",
                margin: "0 0 20px 0",
                lineHeight: "1.15",
              }}
            >
              More than just a simple car wash
            </h2>

            <p
              style={{
                color: "#cfcfcf",
                fontSize: "18px",
                lineHeight: "1.9",
                marginBottom: "18px",
              }}
            >
              Car detailing is a much more thorough process than a traditional
              car wash. It focuses on cleaning, restoring and refining every
              surface of your vehicle to improve its overall appearance and
              presentation.
            </p>

            <p
              style={{
                color: "#cfcfcf",
                fontSize: "18px",
                lineHeight: "1.9",
              }}
            >
              Whether you drive a daily vehicle, a family SUV, a work vehicle or
              a luxury car, detailing provides a cleaner, more polished and more
              professional result.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#111",
              border: "1px solid rgba(212, 175, 55, 0.22)",
              borderRadius: "24px",
              padding: "30px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: "24px", marginBottom: "18px" }}>
              Service Areas
            </h3>

            <div style={{ display: "grid", gap: "14px", fontSize: "17px" }}>
              <div>• Montreal</div>
              <div>• Laval</div>
              <div>• North Shore</div>
              <div>• South Shore</div>
            </div>

            <div
              style={{
                marginTop: "24px",
                height: "1px",
                backgroundColor: "rgba(212, 175, 55, 0.18)",
              }}
            />

            <p style={{ marginTop: "22px", color: "#bdbdbd", lineHeight: "1.8" }}>
              Our premium service is designed for all types of vehicles, whether
              you want to maintain a daily car or enhance the look of a high-end
              vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* WASH VS DETAILING */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "50px 50px 30px 50px",
        }}
      >
        <p style={{ color: "#d4af37", fontSize: "13px", marginBottom: "16px" }}>
          Car wash vs detailing
        </p>

        <h2 style={{ fontSize: "42px", marginBottom: "28px" }}>
          Why detailing is the better option
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          <div style={{ backgroundColor: "#101010", padding: "28px", borderRadius: "22px" }}>
            <h3>Car Wash</h3>
            <p style={{ color: "#c7c7c7" }}>
              A standard car wash removes surface dirt quickly but does not
              provide deep cleaning or refined finishing.
            </p>
          </div>

          <div style={{ backgroundColor: "#111", padding: "28px", borderRadius: "22px" }}>
            <h3 style={{ color: "#d4af37" }}>Detailing</h3>
            <p style={{ color: "#d8d8d8" }}>
              Detailing focuses on precision, deep cleaning and a much higher
              level of finish, resulting in a noticeably better look.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "60px 50px 100px" }}>
        <p style={{ color: "#d4af37", fontSize: "13px" }}>Why choose us</p>

        <h2 style={{ fontSize: "42px", marginBottom: "30px" }}>
          A clean, refined and premium approach
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
          <div style={{ backgroundColor: "#101010", padding: "30px", borderRadius: "22px" }}>
            <h3>High-end results</h3>
            <p>We focus on details and finishing for a refined look.</p>
          </div>

          <div style={{ backgroundColor: "#101010", padding: "30px", borderRadius: "22px" }}>
            <h3>For all vehicles</h3>
            <p>From daily drivers to luxury vehicles, everyone gets premium care.</p>
          </div>

          <div style={{ backgroundColor: "#101010", padding: "30px", borderRadius: "22px" }}>
            <h3>Local service</h3>
            <p>Serving Montreal, Laval, North Shore and South Shore.</p>
          </div>
        </div>

        <div style={{ marginTop: "40px", display: "flex", gap: "16px" }}>
          <Link href="/en/book" style={{ backgroundColor: "#d4af37", padding: "14px 28px", borderRadius: "999px" }}>
            Book Now
          </Link>

          <Link href="/en/contact" style={{ border: "1px solid #d4af37", padding: "14px 28px", borderRadius: "999px" }}>
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
