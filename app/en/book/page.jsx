import Header from "../../components/Header";

export default function BookNow() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Header lang="en" />

      {/* HERO (SAME STYLE - NEW IMAGE) */}
      <section style={heroStyle}>
        <div style={container}>
          <h1 style={heroTitle}>Book Your Appointment</h1>
          <p style={heroText}>
            Customize your detailing service, select your vehicle type, and review your total before securing your appointment.
          </p>
        </div>
      </section>

      {/* MAIN BOOKING SECTION */}
      <section style={bookingSection}>
        
        {/* LEFT BOX */}
        <div style={bookingBox}>

          <h2 style={title}>Select Your Service</h2>

          {/* PACKAGES */}
          <div style={sectionSpacing}>
            <h3 style={subTitle}>Package</h3>

            <select style={input}>
              <option>Ascendant Care - $189.99</option>
              <option>Ascendant Elite - $289.99</option>
              <option>Ascendant Signature - $389.99</option>
            </select>
          </div>

          {/* VEHICLE */}
          <div style={sectionSpacing}>
            <h3 style={subTitle}>Vehicle Type</h3>

            <select style={input}>
              <option>Sedan</option>
              <option>SUV (+$20)</option>
              <option>Truck / Large SUV (+$60)</option>
            </select>
          </div>

          {/* ADD-ONS */}
          <div style={sectionSpacing}>
            <h3 style={subTitle}>Add-Ons</h3>

            <div style={addonsGrid}>
              <label><input type="checkbox" /> Pet Hair (+$30)</label>
              <label><input type="checkbox" /> Salt Removal (+$25)</label>
              <label><input type="checkbox" /> Odor Treatment (+$40)</label>
              <label><input type="checkbox" /> Stains (+$20)</label>
              <label><input type="checkbox" /> Engine Cleaning (+$50)</label>
            </div>
          </div>

        </div>

        {/* RIGHT BOX (TOTAL) */}
        <div style={totalBox}>

          <h2 style={title}>Your Total</h2>

          <div style={{ marginTop: "20px", lineHeight: "2" }}>
            <p>Subtotal: $0.00</p>
            <p>GST (5%): $0.00</p>
            <p>QST (9.975%): $0.00</p>
          </div>

          <h3 style={{ marginTop: "30px", fontSize: "26px", color: "#d4af37" }}>
            Total: $0.00
          </h3>

          <p style={{ marginTop: "20px", color: "#aaa" }}>
            A $50 retainer fee is required to confirm your appointment.
          </p>

          <a href="https://calendly.com/YOUR-LINK" style={goldBtn}>
            Confirm Appointment
          </a>

        </div>

      </section>
    </div>
  );
}

/* STYLES (MATCHED TO YOUR PAGE) */

const heroStyle = {
  minHeight: "65vh",
  display: "flex",
  alignItems: "center",
  backgroundImage:
    'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1603386329225-868f9b1ee6d9?auto=format&fit=crop&w=1600&q=80")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const container = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "100px 50px",
};

const heroTitle = { fontSize: "64px" };
const heroText = { fontSize: "20px", color: "#ccc", maxWidth: "700px" };

const bookingSection = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "100px 50px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "40px",
};

const bookingBox = {
  backgroundColor: "#111",
  padding: "40px",
  borderRadius: "28px",
  border: "1px solid rgba(255,255,255,0.05)",
};

const totalBox = {
  backgroundColor: "#111",
  padding: "40px",
  borderRadius: "28px",
  border: "1px solid rgba(212,175,55,0.3)",
};

const title = { fontSize: "32px", marginBottom: "20px" };
const subTitle = { marginBottom: "10px", color: "#d4af37" };

const sectionSpacing = { marginBottom: "30px" };

const input = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #333",
  backgroundColor: "#0d0d0d",
  color: "#fff",
};

const addonsGrid = {
  display: "grid",
  gap: "10px",
};

const goldBtn = {
  display: "inline-block",
  marginTop: "30px",
  padding: "14px 28px",
  borderRadius: "999px",
  backgroundColor: "#d4af37",
  color: "#111",
  textDecoration: "none",
  fontWeight: "bold",
};
