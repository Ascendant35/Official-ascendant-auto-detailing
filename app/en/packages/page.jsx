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

      {/* PACKAGES */}
      <section style={gridSection}>
        
        {/* CARE */}
        <div style={card}>
          <h2 style={title}>Ascendant Care</h2>
          <p style={desc}>
            Ideal for regular maintenance and keeping your vehicle clean daily.
          </p>

          <div style={price}>
            <p>Car: $189.99</p>
            <p>SUV: $209.99</p>
            <p>Truck / Large SUV: $249.99</p>
          </div>

          {/* 4 VISIT */}
          <div style={subscription}>
            <p style={subTitle}>4 Visit Package</p>
            <p>Take advantage of our bundled 4-visit package, usable whenever you want.</p>
            <p>Sedanr: $669.99</p>
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

          <div style={price}>
            <p>Car: $289.99</p>
            <p>SUV: $309.99</p>
            <p>Truck / Large SUV: $349.99</p>
          </div>

          {/* 4 VISIT */}
          <div style={subscription}>
            <p style={subTitle}>4 Visit Package</p>
            <p>Take advantage of our bundled 4-visit package, usable whenever you want.</p>
            <p>Car: $1049.99</p>
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

          <div style={price}>
            <p>Car: $389.99</p>
            <p>SUV: $409.99</p>
            <p>Truck / Large SUV: $449.99</p>
          </div>

          {/* 4 VISIT */}
          <div style={subscription}>
            <p style={subTitle}>4 Visit Package</p>
            <p>Take advantage of our bundled 4-visit package, usable whenever you want.</p>
            <p>Car: $1399.99</p>
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
            <p>For a flawless, high-end result.</p>
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

/* STYLES (UNCHANGED) */
