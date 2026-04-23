import Header from "../../components/Header";
import Link from "next/link";

export default function TarifsFR() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Header lang="en" />

      {/* HERO */}
      <section style={heroStyle}>
        <div style={container}>
          <h1 style={heroTitle}>Our Premium Packages</h1>
          <p style={heroText}>
            Services designed to keep your vehicle in impeccable condition,
            with one-time options or regular maintenance plans.
          </p>
        </div>
      </section>

      {/* ✅ PREMIUM INTRO BOX */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "70px auto 30px",
          padding: "0 30px",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(18,18,18,0.96), rgba(10,10,10,0.98))",
            border: "1px solid rgba(212,175,55,0.45)",
            borderRadius: "24px",
            padding: "42px 38px",
            textAlign: "center",
            boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "3px",
              color: "#d4af37",
              marginBottom: "18px",
            }}
          >
            Refined Detailing Experience
          </p>

          <h2
            style={{
              fontSize: "34px",
              marginBottom: "18px",
              color: "#f5f5f5",
              fontWeight: "500",
            }}
          >
            Choose the level of care your vehicle deserves
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: "#cfcfcf",
              lineHeight: "1.9",
              maxWidth: "860px",
              margin: "0 auto 14px",
            }}
          >
            Discover our premium detailing packages, each thoughtfully designed
            to deliver a distinct level of care, refinement, and finish.
            Begin by selecting the package that best reflects your vehicle’s
            needs, then choose the size of your vehicle for a service tailored
            with precision.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: "#cfcfcf",
              lineHeight: "1.9",
              maxWidth: "860px",
              margin: "0 auto 14px",
            }}
          >
            For clients seeking exceptional value and ongoing upkeep, our{" "}
            <span style={{ color: "#d4af37", fontWeight: "600" }}>
              4-visit packages
            </span>{" "}
            offer a refined way to maintain your vehicle at the highest
            standard throughout the season.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: "#cfcfcf",
              lineHeight: "1.9",
              maxWidth: "860px",
              margin: "0 auto",
            }}
          >
            You may also elevate your experience further with our selection of
            add-on services found below, created to bring an even more complete,
            luxurious finish to every visit.
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section style={gridSection}>
        
        {/* CARE */}
        <div style={card}>
          <h2 style={title}>Ascendant Care</h2>
          <p style={desc}>
            Ideal for regular maintenance and keeping your vehicle clean daily.
          </p>

          <div style={timeBox}>
            <p style={timeLabel}>Estimated Time</p>
            <p style={timeText}>2 hours</p>
          </div>

          <div style={price}>
            <p>Sedan: $189.99</p>
            <p>SUV: $209.99</p>
            <p>Truck / Large SUV: $249.99</p>
          </div>

          <div style={subscription}>
            <p style={subTitle}>4 Visit Package</p>
            <p>Take advantage of our bundled 4-visit package, usable whenever you want.</p>
            <p>Sedan: $669.99</p>
            <p>SUV: $739.99</p>
            <p>Truck / Large SUV: $859.99</p>
          </div>

          <ul style={list}>
            <li>Full vacuum</li>
            <li>Light interior cleaning</li>
            <li>Exterior wash</li>
            <li>Windows</li>
            <li>Final finish</li>
          </ul>

          <Link href="/fr/reserver" style={btn}>Book Now</Link>
        </div>

        {/* ELITE */}
        <div style={{ ...card, border: "1px solid #d4af37", position: "relative", transform: "scale(1.05)" }}>
          <div style={badge}>MOST POPULAR</div>

          <h2 style={title}>Ascendant Elite</h2>
          <p style={desc}>
            Deep cleaning offering the perfect balance between quality and value.
          </p>

          <div style={timeBox}>
            <p style={timeLabel}>Estimated Time</p>
            <p style={timeText}>3 to 4 hours</p>
          </div>

          <div style={price}>
            <p>Sedan: $289.99</p>
            <p>SUV: $309.99</p>
            <p>Truck / Large SUV: $349.99</p>
          </div>

          <div style={subscription}>
            <p style={subTitle}>4 Visit Package</p>
            <p>Take advantage of our bundled 4-visit package, usable whenever you want.</p>
            <p>Sedan: $1049.99</p>
            <p>SUV: $1129.99</p>
            <p>Truck / Large SUV: $1249.99</p>
          </div>

          <ul style={list}>
            <li>Everything included in Care</li>
            <li>Seat shampoo</li>
            <li>Carpet cleaning</li>
            <li>Degreasing</li>
            <li>Detailed exterior</li>
            <li>Premium finish</li>
          </ul>

          <Link href="/fr/reserver" style={goldBtn}>Book Now</Link>
        </div>

        {/* SIGNATURE */}
        <div style={card}>
          <h2 style={title}>Ascendant Signature</h2>
          <p style={desc}>
            The ultimate experience for a flawless result and a showroom finish.
          </p>

          <div style={timeBox}>
            <p style={timeLabel}>Estimated Time</p>
            <p style={timeText}>5 to 6 hours</p>
          </div>

          <div style={price}>
            <p>Sedan: $389.99</p>
            <p>SUV: $409.99</p>
            <p>Truck / Large SUV: $449.99</p>
          </div>

          <div style={subscription}>
            <p style={subTitle}>4 Visit Package</p>
            <p>Take advantage of our bundled 4-visit package, usable whenever you want.</p>
            <p>Sedan: $1399.99</p>
            <p>SUV: $1499.99</p>
            <p>Truck / Large SUV: $1599.99</p>
          </div>

          <ul style={list}>
            <li>Everything included in Elite</li>
            <li>Deep cleaning</li>
            <li>Full treatment</li>
            <li>High-end finish</li>
            <li>Meticulous detailing</li>
          </ul>

          <Link href="/fr/reserver" style={btn}>Book Now</Link>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section style={whySection}>
        <h2 style={whyTitle}>Which package should you choose?</h2>

        <div style={whyGrid}>
          
          {/* CARE */}
          <div
            style={{
              ...choiceStyle,
              border: "1px solid rgba(212,175,55,0.25)",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "2px",
                backgroundColor: "#d4af37",
                marginBottom: "15px",
              }}
            />

            <strong
              style={{
                fontSize: "24px",
                color: "#f5f5f5",
                display: "block",
                marginBottom: "15px",
              }}
            >
              Ascendant Care
            </strong>

            <p style={{ lineHeight: "1.9", color: "#ccc", marginBottom: "12px" }}>
              Designed for consistent upkeep, this package maintains your vehicle in a clean,
              refined condition on a regular basis.
            </p>

            <p style={{ lineHeight: "1.9", color: "#ccc", marginBottom: "12px" }}>
              Ideal for clients who value a polished appearance at all times without the need
              for intensive restoration.
            </p>

            <p style={{ lineHeight: "1.9", color: "#ccc" }}>
              A perfect balance between efficiency and elegance for everyday driving.
            </p>
          </div>

          {/* ELITE */}
          <div
            style={{
              ...choiceStyle,
              border: "1px solid rgba(212,175,55,0.5)",
              transform: "scale(1.03)",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "2px",
                backgroundColor: "#d4af37",
                marginBottom: "15px",
              }}
            />

            <strong
              style={{
                fontSize: "26px",
                color: "#d4af37",
                display: "block",
                marginBottom: "15px",
              }}
            >
              Ascendant Elite
            </strong>

            <p style={{ lineHeight: "1.9", color: "#ccc", marginBottom: "12px" }}>
              Our most popular choice, offering a deeper level of cleaning and attention
              to detail both inside and out.
            </p>

            <p style={{ lineHeight: "1.9", color: "#ccc", marginBottom: "12px" }}>
              Restores freshness to your interior while enhancing the exterior finish
              with a noticeably elevated result.
            </p>

            <p style={{ lineHeight: "1.9", color: "#ccc" }}>
              Perfect for those seeking a premium transformation without going to the
              highest tier.
            </p>
          </div>

          {/* SIGNATURE */}
          <div
            style={{
              ...choiceStyle,
              border: "1px solid rgba(212,175,55,0.25)",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "2px",
                backgroundColor: "#d4af37",
                marginBottom: "15px",
              }}
            />

            <strong
              style={{
                fontSize: "24px",
                color: "#f5f5f5",
                display: "block",
                marginBottom: "15px",
              }}
            >
              Ascendant Signature
            </strong>

            <p style={{ lineHeight: "1.9", color: "#ccc", marginBottom: "12px" }}>
              The ultimate detailing experience, crafted for clients who expect nothing
              short of perfection.
            </p>

            <p style={{ lineHeight: "1.9", color: "#ccc", marginBottom: "12px" }}>
              Every surface is meticulously treated, delivering a showroom-level finish
              with unmatched precision.
            </p>

            <p style={{ lineHeight: "1.9", color: "#ccc" }}>
              Ideal for luxury vehicles, special occasions, or achieving the highest
              possible standard of presentation.
            </p>
          </div>

        </div>
      </section>

      {/* EXTRA SERVICES */}
      <section style={extraSection}>
        <h2 style={{ fontSize: "40px", marginBottom: "30px", textAlign: "center" }}>
          Additional Services
        </h2>

        <div style={extraGrid}>
          <Extra title="Pet Hair" price="Starting at $30" />
          <Extra title="Salt / Calcium" price="Starting at $25" />
          <Extra title="Odor Treatment" price="$40 - $80" />
          <Extra title="Specific Stains" price="Starting at $20" />
          <Extra title="Engine Cleaning" price="$50" />
          <Extra title="Leather Treatment" price="$60" />

          <Extra
            title="Exterior Detailing Only"
            price={
  <>
    <p style={{ margin: "0 0 6px 0" }}>Sedan: Starting at $100</p>
    <p style={{ margin: "0 0 6px 0" }}>SUV: Starting at $125</p>
    <p style={{ margin: "0" }}>Truck / Large SUV: Starting at $160</p>
  </>
}
          />

          <Extra
            title="Interior Detailing Only"
            price={
  <>
    <p style={{ margin: "0 0 6px 0" }}>Sedan: Starting at $120</p>
    <p style={{ margin: "0 0 6px 0" }}>SUV: Starting at $150</p>
    <p style={{ margin: "0" }}>Truck / Large SUV: Starting at $190</p>
  </>
}
          />
        </div>
      </section>
    </div>
  );
}

/* EXTRA COMPONENT */
function Extra({ title, price }) {
  return (
    <div style={extraCard}>
      <h3>{title}</h3>

      <div
        style={{
          color: "#d4af37",
          lineHeight: "1.8",
          marginTop: "8px",
        }}
      >
        {price}
      </div>
    </div>
  );
}

/* STYLES */
const heroStyle = {
  minHeight: "65vh",
  display: "flex",
  alignItems: "center",
  backgroundImage:
    'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=80")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const container = { maxWidth: "1400px", margin: "0 auto", padding: "100px 50px" };
const heroTitle = { fontSize: "64px" };
const heroText = { fontSize: "20px", color: "#ccc", maxWidth: "700px" };

const gridSection = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "100px 50px",
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "40px",
};

const card = {
  backgroundColor: "#111",
  padding: "35px",
  borderRadius: "28px",
  border: "1px solid rgba(255,255,255,0.05)",
};

const title = { fontSize: "28px" };
const desc = { color: "#bbb", marginBottom: "20px" };

const timeBox = {
  backgroundColor: "#0d0d0d",
  padding: "14px 16px",
  borderRadius: "12px",
  marginBottom: "20px",
  border: "1px solid rgba(212,175,55,0.18)",
};

const timeLabel = {
  color: "#d4af37",
  marginBottom: "6px",
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "1.5px",
};

const timeText = {
  color: "#f5f5f5",
  fontSize: "16px",
  margin: 0,
};

const price = { color: "#d4af37", marginBottom: "20px" };

const subscription = {
  backgroundColor: "#0d0d0d",
  padding: "15px",
  borderRadius: "12px",
  marginBottom: "20px",
};

const subTitle = { color: "#d4af37", marginBottom: "10px" };
const gold = { color: "#d4af37", fontWeight: "bold" };

const list = { paddingLeft: "18px", lineHeight: "1.8" };

const btn = {
  display: "inline-block",
  marginTop: "20px",
  padding: "12px 24px",
  border: "1px solid #d4af37",
  borderRadius: "999px",
  color: "#fff",
  textDecoration: "none",
};

const goldBtn = { ...btn, backgroundColor: "#d4af37", color: "#111" };

const badge = {
  position: "absolute",
  top: "-10px",
  right: "20px",
  backgroundColor: "#d4af37",
  color: "#111",
  padding: "6px 12px",
  borderRadius: "999px",
};

const whySection = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 50px 100px",
  textAlign: "center",
};

const whyTitle = { fontSize: "44px", marginBottom: "40px" };

const whyGrid = {
  display: "grid",
  gap: "25px",
  textAlign: "left",
};

const choiceStyle = {
  backgroundColor: "#111",
  padding: "25px",
  borderRadius: "18px",
};

const extraSection = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "0 50px 100px",
};

const extraGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "20px",
};

const extraCard = {
  backgroundColor: "#111",
  padding: "25px",
  borderRadius: "16px",
};
