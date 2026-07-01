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
            padding: "80px 20px",
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
                fontSize: "clamp(42px, 8vw, 64px)",
                lineHeight: "1.05",
                margin: "0 0 22px 0",
                fontWeight: "700",
              }}
            >
              Premium mobile auto detailing for all types of vehicles
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
              our services in Montreal, Laval, the North Shore and the South Shore. Our fully equipped mobile detailing service comes directly to you — at your home or workplace — delivering a seamless, high-end experience without interrupting your day.
            </p>

            <div
  style={{
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    width: "100%",
  }}
>
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
                Book Your Detail
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
                View Our Packages
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
          padding: "80px 20px 30px 20px",
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
          padding: "50px 20px 30px 20px",
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
          Why is detailing the better option?
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
              A standard car wash is designed for quick, surface-level cleaning. While it can remove visible dirt from your vehicle's exterior, it often overlooks embedded contaminants, interior details, and long-term protection. The focus is on speed and convenience rather than restoring and preserving your vehicle's overall condition.
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
            <div>
  <h3 style={{ color: "#d4af37" }}>Detailing</h3>
  <p style={{ color: "#d8d8d8", lineHeight: "1.85", fontSize: "17px" }}>
    Detailing goes far beyond a standard car wash by focusing on precision, restoration, and long-term protection. Every surface is carefully treated using specialized tools and techniques to remove embedded dirt, imperfections, and contaminants that a basic wash simply cannot address. The result is a deeper clean, a refined finish, and a noticeably elevated appearance inside and out. More than just cleaning, detailing preserves your vehicle’s condition and enhances its overall value.
  </p>
</div>   {/* ✅ THIS was missing */}
</div> 
</div>
</section>
      {/* WHY CHOOSE US */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
         padding: "60px 20px 100px 20px",
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
          Why choose us?
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

        <div className="why-grid">
          
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
              Our fully equipped mobile detailing comes to you — at home or work — for a seamless, high-end experience, uninterrupted. Serving Montreal, Laval, North Shore and South Shore with professionalism.
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
      {/* HOW IT WORKS */}
<section
  style={{
    padding: "100px 20px",
    backgroundColor: "#000",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      background:
        "linear-gradient(180deg, rgba(212,175,55,0.07), rgba(17,17,17,0.98))",
      border: "1px solid rgba(212, 175, 55, 0.28)",
      borderRadius: "28px",
      padding: "60px 35px",
      boxShadow: "0 0 45px rgba(212, 175, 55, 0.08)",
    }}
  >
    <p
      style={{
        color: "#d4af37",
        textTransform: "uppercase",
        letterSpacing: "2px",
        fontSize: "13px",
        textAlign: "center",
        marginBottom: "16px",
      }}
    >
      How It Works
    </p>

    <h2
      style={{
        textAlign: "center",
        fontSize: "42px",
        marginTop: 0,
        marginBottom: "18px",
      }}
    >
      A Premium Experience From Start to Finish
    </h2>

    <p
      style={{
        textAlign: "center",
        color: "#c7c7c7",
        maxWidth: "750px",
        margin: "0 auto 60px",
        lineHeight: "1.8",
        fontSize: "17px",
      }}
    >
      Booking a professional detail has never been easier. We bring our fully
      equipped mobile service directly to your home or workplace, allowing you
      to enjoy premium results without disrupting your day.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "24px",
      }}
    >
      <div
        style={{
          backgroundColor: "#111",
          border: "1px solid rgba(212, 175, 55, 0.22)",
          borderRadius: "22px",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#d4af37",
            fontSize: "42px",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          01
        </div>

        <h3 style={{ marginTop: 0 }}>Choose Your Package</h3>

        <p style={{ color: "#c8c8c8", lineHeight: "1.8" }}>
          Select the detailing package that best suits your vehicle and your
          needs.
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#111",
          border: "1px solid rgba(212, 175, 55, 0.22)",
          borderRadius: "22px",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#d4af37",
            fontSize: "42px",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          02
        </div>

        <h3 style={{ marginTop: 0 }}>Book Your Appointment</h3>

        <p style={{ color: "#c8c8c8", lineHeight: "1.8" }}>
          Reserve your preferred date and time through our simple online booking
          system and pay the 50$ retainer fee which will be deducted from your final quote.
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#111",
          border: "1px solid rgba(212, 175, 55, 0.22)",
          borderRadius: "22px",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#d4af37",
            fontSize: "42px",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          03
        </div>

        <h3 style={{ marginTop: 0 }}>We Come To You</h3>

        <p style={{ color: "#c8c8c8", lineHeight: "1.8" }}>
          Our fully equipped mobile detailing unit arrives at your home or
          workplace ready to perform the service.
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#111",
          border: "1px solid rgba(212, 175, 55, 0.22)",
          borderRadius: "22px",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#d4af37",
            fontSize: "42px",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          04
        </div>

        <h3 style={{ marginTop: 0 }}>Enjoy The Results</h3>

        <p style={{ color: "#c8c8c8", lineHeight: "1.8" }}>
          Enjoy the confidence of driving a vehicle that has been professionally detailed to the highest standard.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* FAQ SECTION */}
<section
  style={{
    padding: "100px 20px",
    backgroundColor: "#000",
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      background:
        "linear-gradient(180deg, rgba(212,175,55,0.07), rgba(17,17,17,0.98))",
      border: "1px solid rgba(212, 175, 55, 0.28)",
      borderRadius: "28px",
      padding: "60px 35px",
      boxShadow: "0 0 45px rgba(212, 175, 55, 0.08)",
    }}
  >
    <h2
      style={{
        textAlign: "center",
        fontSize: "42px",
        color: "#d4af37",
        marginTop: 0,
        marginBottom: "18px",
      }}
    >
      Frequently Asked Questions
    </h2>

    <p
      style={{
        textAlign: "center",
        color: "#c7c7c7",
        maxWidth: "700px",
        margin: "0 auto 50px",
        lineHeight: "1.8",
        fontSize: "17px",
      }}
    >
      Everything you need to know before booking your mobile detailing appointment.
    </p>

    <div style={{ display: "grid", gap: "18px" }}>
      {[
        {
          question: "Do you come to my home or workplace?",
          answer:
            "Yes. Ascendant Auto Detailing is a fully mobile service. We bring our professional equipment and products directly to your home, workplace, or preferred location.",
        },
        {
          question: "What areas do you serve?",
          answer:
            "We proudly serve Montreal, Laval, the South Shore, and the North Shore. If you are unsure whether your location is within our service area, feel free to contact us.",
        },
        {
          question: "Do I need to provide water or electricity?",
          answer:
            "No. Our mobile setup is fully equipped to perform the service. If additional requirements apply, we will discuss them with you before your appointment.",
        },
        {
          question: "How long does a detailing appointment take?",
          answer:
            "Service times vary depending on the package selected and the condition of the vehicle. Most appointments take between 2 and 4 hours.",
        },
        {
          question: "Is a deposit required?",
          answer:
            "Yes. A $50 retainer is required to confirm your appointment. The retainer is applied toward the total cost of your service.",
        },
        {
          question: "What happens if it rains?",
          answer:
            "Weather conditions are monitored closely. We are fully equipped to operate under all weather conditions but if rain or severe weather prevents us from completing the service safely and properly, we will contact you to reschedule at a convenient time.",
        },
      ].map((item, index) => (
        <details
          key={index}
          style={{
            backgroundColor: "#111",
            border: "1px solid rgba(212, 175, 55, 0.22)",
            borderRadius: "20px",
            padding: "24px 26px",
          }}
        >
          <summary
            style={{
              cursor: "pointer",
              color: "#d4af37",
              fontSize: "20px",
              fontWeight: "600",
              listStyle: "none",
            }}
          >
            {item.question}
          </summary>

          <p
            style={{
              color: "#d8d8d8",
              lineHeight: "1.8",
              fontSize: "16px",
              marginTop: "16px",
              marginBottom: 0,
            }}
          >
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  </div>
</section>
      {/* FINAL CTA */}

<section
  style={{
    padding: "100px 20px 120px",
    backgroundColor: "#000",
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      background:
        "linear-gradient(180deg, rgba(212,175,55,0.08), rgba(17,17,17,0.98))",
      border: "1px solid rgba(212, 175, 55, 0.28)",
      borderRadius: "30px",
      padding: "70px 40px",
      textAlign: "center",
      boxShadow: "0 0 50px rgba(212, 175, 55, 0.08)",
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
      Ready To Experience The Ascendant Difference?
    </p>

<h2
  style={{
    fontSize: "clamp(38px, 5vw, 54px)",
    marginTop: 0,
    marginBottom: "22px",
    lineHeight: "1.15",
  }}
>
  Premium Mobile Detailing,
  <br />
  Delivered Directly To You
</h2>

<p
  style={{
    color: "#cfcfcf",
    fontSize: "18px",
    lineHeight: "1.9",
    maxWidth: "760px",
    margin: "0 auto 40px",
  }}
>
  Whether you're maintaining your daily driver or preserving a luxury
  vehicle, our fully equipped mobile detailing service delivers exceptional
  results directly at your home or workplace throughout Montreal, Laval,
  the South Shore, and the North Shore.
</p>

<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "18px",
    flexWrap: "wrap",
  }}
>
  <Link
    href="/en/book"
    style={{
      backgroundColor: "#d4af37",
      color: "#111",
      textDecoration: "none",
      padding: "16px 34px",
      borderRadius: "999px",
      fontWeight: "700",
      fontSize: "15px",
      transition: "0.3s ease",
    }}
  >
    Book Your Detail
  </Link>

  <Link
    href="/en/contact"
    style={{
      border: "1px solid #d4af37",
      color: "#f5f5f5",
      textDecoration: "none",
      padding: "16px 34px",
      borderRadius: "999px",
      fontWeight: "600",
      fontSize: "15px",
    }}
  >
    Contact Us
  </Link>
</div>

<div
  style={{
    marginTop: "40px",
    paddingTop: "30px",
    borderTop: "1px solid rgba(212, 175, 55, 0.15)",
    color: "#a9a9a9",
    fontSize: "15px",
  }}
>
  Fully Mobile Service • Home or Workplace • Montreal • Laval • South Shore • North Shore
</div>

  </div>
</section>
      <a
        href="tel:+15145563322"
        style={floatingCallButton}
        aria-label="Call Ascendant Auto Detailing"
      >
        📞
      </a>
    </div>
  );
}
const floatingCallButton = {
  position: "fixed",
  bottom: "28px",
  right: "28px",
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  background: "linear-gradient(145deg, #d4af37, #c19b2b)",
  color: "#111",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  fontSize: "28px",
  boxShadow: "0 10px 30px rgba(212,175,55,.35)",
  zIndex: 9999,
};
  
    </div>
  );
}
