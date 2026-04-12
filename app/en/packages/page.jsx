import Header from "../../components/Header";
import Link from "next/link";

export default function TarifsEN() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Header lang="en" />

      {/* HERO */}
      <section style={heroStyle}>
        <div style={container}>
          <h1 style={heroTitle}>Our Premium Packages</h1>
          <p style={heroText}>
            Services designed to keep your vehicle in impeccable condition,
            with both one-time options and regular maintenance plans.
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section style={gridSection}>
        
        {/* CARE */}
        <div style={card}>
          <h2 style={title}>Ascendant Care</h2>

          <p style={desc}>
            Ideal for regular maintenance and keeping your vehicle clean on a daily basis.
          </p>

          <div style={price}>
            <p>Car: $189.99</p>
            <p>SUV: $209.99</p>
            <p>Truck / Large SUV: $249.99</p>
          </div>

          <div style={subscription}>
            <p style={subTitle}>Maintenance Options</p>
            <p>One-time service</p>
            <p>Monthly (4 visits): <span style={gold}>-10%</span></p>
            <p>Yearly (12 visits): <span style={gold}>-20%</span></p>
          </div>

          <ul style={list}>
            <li>Full vacuum</li>
            <li>Light interior cleaning</li>
            <li>Exterior wash</li>
            <li>Windows</li>
            <li>General finish</li>
          </ul>

          <Link href="/en/book" style={btn}>Book Now</Link>
        </div>

        {/* ELITE */}
        <div style={{ ...card, border: "1px solid #d4af37", position: "relative", transform: "scale(1.05)" }}>
          <div style={badge}>MOST POPULAR</div>

          <h2 style={title}>Ascendant Elite</h2>

          <p style={desc}>
            Deep cleaning offering the perfect balance between quality and value.
          </p>

          <div style={price}>
            <p>Car: $289.99</p>
            <p>SUV: $309.99.99</p>
            <p>Truck / Large SUV: $349.99</p>
          </div>

          <div style={subscription}>
            <p style={subTitle}>Maintenance Options</p>
            <p>One-time service</p>
            <p>Monthly (4 visits): <span style={gold}>-12%</span></p>
            <p>Yearly (12 visits): <span style={gold}>-25%</span></p>
          </div>

          <ul style={list}>
            <li>Everything in Care</li>
            <li>Seat shampoo</li>
            <li>Carpet cleaning</li>
            <li>Degreasing</li>
            <li>Detailed exterior wash</li>
            <li>Premium finish</li>
          </ul>

          <Link href="/en/book" style={goldBtn}>Book Now</Link>
        </div>

        {/* SIGNATURE */}
        <div style={card}>
          <h2 style={title}>Ascendant Signature</h2>

          <p style={desc}>
            The ultimate experience for an impeccable, showroom-quality result.
          </p>

          <div style={price}>
            <p>Car: $389.99</p>
            <p>SUV: $409.99</p>
            <p>Truck / Large SUV: $449.99</p>
          </div>

          <div style={subscription}>
            <p style={subTitle}>Maintenance Options</p>
            <p>One-time service</p>
            <p>Monthly (4 visits): <span style={gold}>-15%</span></p>
            <p>Yearly (12 visits): <span style={gold}>-30%</span></p>
          </div>

          <ul style={list}>
            <li>Everything in Elite</li>
            <li>Deep interior cleaning</li>
            <li>Full treatment</li>
            <li>High-end finish</li>
            <li>Detail-focused work</li>
          </ul>

          <Link href="/en/book" style={btn}>Book Now</Link>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section style={whySection}>
        <h2 style={whyTitle}>Which package should you choose?</h2>

        <div style={whyGrid}>
          <div style={choiceStyle}>
            <strong style={gold}>Ascendant Care</strong>
            <p>Perfect for regular maintenance.</p>
          </div>

          <div style={choiceStyle}>
            <strong style={gold}>Ascendant Elite</strong>
            <p>The best choice for most clients.</p>
          </div>

          <div style={choiceStyle}>
            <strong style={gold}>Ascendant Signature</strong>
            <p>For an impeccable, high-end result.</p>
          </div>
        </div>
      </section>

      {/* EXTRA SERVICES */}
      <section style={extraSection}>
        <h2 style={{ fontSize: "40px", marginBottom: "30px", textAlign: "center" }}>
          Additional Services
        </h2>

        <div style={extraGrid}>
          <Extra title="Pet hair removal" price="Starting at $30" />
          <Extra title="Salt / calcium removal" price="Starting at $25" />
          <Extra title="Odor treatment" price="$40 - $80" />
          <Extra title="Stain removal" price="Starting at $20" />
          <Extra title="Engine cleaning" price="$50" />
          <Extra title="Leather treatment" price="$60" />
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
      <p style={{ color: "#d4af37" }}>{price}</p>
    </div>
  );
}

/* SAME STYLES (UNCHANGED) */

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
