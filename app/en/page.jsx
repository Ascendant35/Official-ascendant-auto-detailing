import Header from "../components/Header";
import FooterEN from "../components/FooterEN";
<FooterEN />
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
              Premium auto detailing for all types of vehicles
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
              Give your vehicle a clean, refined and elevated appearance with detailing
              services designed for both everyday cars and luxury vehicles. We offer
              our services in Montreal, Laval, the North Shore and the South Shore.
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
              A much more complete service than a simple wash
            </h2>

            <p
              style={{
                color: "#cfcfcf",
                fontSize: "18px",
                lineHeight: "1.9",
                marginBottom: "18px",
              }}
            >
              Car detailing is a process of deep cleaning, restoration and finishing
              that goes far beyond a traditional car wash. The goal is not only to
              remove visible dirt, but to treat every surface with precision to
              enhance the overall look and presentation of the vehicle.
            </p>

            <p
              style={{
                color: "#cfcfcf",
                fontSize: "18px",
                lineHeight: "1.9",
              }}
            >
              Whether you drive a daily car, an SUV, a work vehicle or a luxury
              car, detailing provides a cleaner, more refined and more professional result.
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
            <h3
              style={{
                marginTop: 0,
                fontSize: "24px",
                marginBottom: "18px",
              }}
            >
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

            <p
              style={{
                marginTop: "22px",
                color: "#bdbdbd",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              We offer a high-end service tailored to different needs, whether it’s
              maintaining a daily vehicle or enhancing a more exclusive car.
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
        <p
          style={{
            color: "#d4af37",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontSize: "13px",
            marginBottom: "16px",
          }}
        >
          Car wash vs detailing
        </p>

        <h2
          style={{
            fontSize: "42px",
            margin: "0 0 28px 0",
            lineHeight: "1.15",
          }}
        >
          Why detailing is the better option
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
          }}
        >
          <div
            style={{
              backgroundColor: "#101010",
              borderRadius: "22px",
              padding: "28px",
            }}
          >
            <h3>Standard car wash</h3>
            <p style={{ color: "#c7c7c7", lineHeight: "1.85", fontSize: "17px" }}>
              A regular wash removes surface dirt quickly but does not provide
              deep cleaning or refined finishing.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#111",
              border: "1px solid rgba(212, 175, 55, 0.22)",
              borderRadius: "22px",
              padding: "28px",
            }}
          >
            <h3 style={{ color: "#d4af37" }}>Detailing</h3>
            <p style={{ color: "#d8d8d8", lineHeight: "1.85", fontSize: "17px" }}>
              Detailing focuses on precision, deeper cleaning and a much higher
              level of finish, resulting in a noticeably better appearance.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "60px 50px 100px 50px",
        }}
      >
        <p
          style={{
            color: "#d4af37",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontSize: "13px",
            marginBottom: "16px",
          }}
        >
          Why choose us
        </p>

        <h2
          style={{
            fontSize: "42px",
            margin: "0 0 30px 0",
            lineHeight: "1.15",
          }}
        >
          A clean, refined and high-end approach
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          <div style={{ backgroundColor: "#101010", borderRadius: "22px", padding: "30px" }}>
            <div style={{ color: "#d4af37", fontSize: "28px", marginBottom: "16px" }}>01</div>
            <h3>Refined results</h3>
            <p style={{ color: "#c8c8c8" }}>
              We focus on details and finishing for a more premium look.
            </p>
          </div>

          <div style={{ backgroundColor: "#101010", borderRadius: "22px", padding: "30px" }}>
            <div style={{ color: "#d4af37", fontSize: "28px", marginBottom: "16px" }}>02</div>
            <h3>For all vehicles</h3>
            <p style={{ color: "#c8c8c8" }}>
              From daily drivers to luxury vehicles, every client receives high-quality service.
            </p>
          </div>

          <div style={{ backgroundColor: "#101010", borderRadius: "22px", padding: "30px" }}>
            <div style={{ color: "#d4af37", fontSize: "28px", marginBottom: "16px" }}>03</div>
            <h3>Local service</h3>
            <p style={{ color: "#c8c8c8" }}>
              Serving Montreal, Laval, North Shore and South Shore with professionalism.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "40px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link
            href="/en/book"
            style={{
              backgroundColor: "#d4af37",
              color: "#111",
              textDecoration: "none",
              padding: "14px 28px",
              borderRadius: "999px",
              fontWeight: "700",
            }}
          >
            Book Now
          </Link>

          <Link
            href="/en/contact"
            style={{
              border: "1px solid #d4af37",
              color: "#f5f5f5",
              textDecoration: "none",
              padding: "14px 28px",
              borderRadius: "999px",
              fontWeight: "600",
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
