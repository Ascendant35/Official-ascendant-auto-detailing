import Header from "../../components/Header";

export default function Services() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Header lang="en" />

      {/* HERO */}
      <section style={heroStyle}>
        <div style={container}>
          <h1 style={heroTitle}>Our Premium Services</h1>
          <p style={heroText}>
            Discover a curated selection of high-end detailing services designed to elevate,
            protect, and preserve your vehicle to the highest standard.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={gridSection}>

        {/* EXTERIOR */}
        <div style={card}>
          <img src="/images/exterior.jpg" style={image} />
          <h2 style={title}>Exterior Detailing</h2>
          <p style={desc}>
            A meticulous exterior treatment that enhances your vehicle’s finish
            while restoring depth, clarity, and a refined shine.
          </p>
        </div>

        {/* INTERIOR */}
        <div style={card}>
          <img src="/images/interior.jpg" style={image} />
          <h2 style={title}>Interior Detailing</h2>
          <p style={desc}>
            A deep interior refinement focused on cleanliness, comfort, and restoring
            a luxurious cabin environment.
          </p>
        </div>

        {/* FULL DETAIL */}
        <div style={card}>
          <img src="/images/full.jpg" style={image} />
          <h2 style={title}>Full Detailing</h2>
          <p style={desc}>
            A complete transformation combining interior and exterior care for a
            flawless, showroom-quality result.
          </p>
        </div>

        {/* HEADLIGHT */}
        <div style={card}>
          <img src="/images/headlight.jpg" style={image} />
          <h2 style={title}>Headlight Restoration</h2>
          <p style={desc}>
            Restore clarity and brightness to your headlights, enhancing both
            appearance and nighttime visibility.
          </p>
        </div>

        {/* ENGINE */}
        <div style={card}>
          <img src="/images/engine.jpg" style={image} />
          <h2 style={title}>Engine Bay Cleaning</h2>
          <p style={desc}>
            A careful and precise cleaning process that revitalizes your engine bay
            while maintaining its integrity.
          </p>
        </div>

        {/* PAINT PROTECTION */}
        <div style={card}>
          <img src="/images/protection.jpg" style={image} />
          <h2 style={title}>Paint Protection</h2>
          <p style={desc}>
            Preserve your vehicle’s finish with advanced care that maintains deep gloss
            and long-lasting protection over time.
          </p>
        </div>

      </section>
    </div>
  );
}

/* STYLES (MATCH YOUR SITE) */

const heroStyle = {
  minHeight: "65vh",
  display: "flex",
  alignItems: "center",
  backgroundImage:
    'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=80")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const container = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "100px 50px",
};

const heroTitle = { fontSize: "64px" };
const heroText = {
  fontSize: "20px",
  color: "#ccc",
  maxWidth: "700px",
};

const gridSection = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "100px 50px",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "40px",
};

const card = {
  backgroundColor: "#111",
  padding: "20px",
  borderRadius: "24px",
  border: "1px solid rgba(255,255,255,0.05)",
};

const image = {
  width: "100%",
  height: "240px",
  objectFit: "cover",
  borderRadius: "16px",
  marginBottom: "20px",
};

const title = {
  fontSize: "24px",
  marginBottom: "10px",
};

const desc = {
  color: "#bbb",
  lineHeight: "1.6",
};
