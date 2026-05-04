"use client";

import { useState } from "react";
import Header from "../../components/Header";

export default function ContactEN() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mgodaarq", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setShowPopup(true);
      e.target.reset();

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } else {
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Header lang="en" />

      {/* HERO */}
      <section style={heroStyle}>
        <div style={container}>
          <h1 style={heroTitle}>Contact Us</h1>
          <p style={heroText}>
            We’re here to provide a seamless, premium experience from your first message.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section style={section}>
        <div style={box}>
          <h2 style={boxTitle}>A refined service starts with a simple conversation</h2>
          <p style={boxText}>
            Whether you have questions about our services, need guidance selecting the right package,
            or are ready to book your next detailing session, this page gives you direct access to our team.
          </p>
          <p style={boxText}>
            Choose the method that suits you best and we will respond promptly with the level of care and professionalism you expect.
          </p>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section style={section}>
        <h2 style={sectionTitle}>Contact Methods</h2>

        <div style={grid}>
          <a href="tel:+10000000000" style={cardLink}>
            <div style={card}>
              <h3 style={cardTitle}>Phone</h3>
              <p style={cardText}>Call us directly for immediate assistance.</p>
              <p style={goldText}>+1 (000) 000-0000</p>
            </div>
          </a>

          <a href="mailto:ascendantautodetailing@gmail.com" style={cardLink}>
            <div style={card}>
              <h3 style={cardTitle}>Email</h3>
              <p style={cardText}>For inquiries, bookings, or detailed requests.</p>
              <p style={goldText}>ascendantautodetailing@gmail.com</p>
            </div>
          </a>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <section style={section}>
        <h2 style={sectionTitle}>Find Us on Social Media</h2>

        <div style={grid}>
          <a href="https://instagram.com/ascendantautodetail" target="_blank" rel="noopener noreferrer" style={cardLink}>
            <div style={card}>
              <h3 style={cardTitle}>📸 Instagram</h3>
              <p style={cardText}>@ascendantautodetail</p>
            </div>
          </a>

          <a href="https://facebook.com/AscendantAutoDetail" target="_blank" rel="noopener noreferrer" style={cardLink}>
            <div style={card}>
              <h3 style={cardTitle}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5V12H17l-.4 3h-2.7v7A10 10 0 0 0 22 12z" />
                  </svg>
                  Facebook
                </span>
              </h3>
              <p style={cardText}>@ascendantautodetail</p>
            </div>
          </a>

          <a href="https://tiktok.com/@ascendantautodetail" target="_blank" rel="noopener noreferrer" style={cardLink}>
            <div style={card}>
              <h3 style={cardTitle}>🎵 TikTok</h3>
              <p style={cardText}>@ascendantautodetail</p>
            </div>
          </a>

          <a href="https://snapchat.com/add/ascendantautodetail" target="_blank" rel="noopener noreferrer" style={cardLink}>
            <div style={card}>
              <h3 style={cardTitle}>👻 Snapchat</h3>
              <p style={cardText}>@ascendantautodetail</p>
            </div>
          </a>
        </div>
      </section>

      {/* MAP */}
      <section style={section}>
        <h2 style={sectionTitle}>Our Service Area</h2>

        <div style={mapContainer}>
          <iframe
            src="https://www.google.com/maps?q=Montreal,QC&z=11&output=embed"
            width="100%"
            height="320"
            style={{ border: "0", borderRadius: "20px" }}
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* FORM */}
      <section style={section}>
        <h2 style={sectionTitle}>Send Us a Message</h2>

        <form onSubmit={handleSubmit} style={form}>
          <input type="hidden" name="_subject" value="New message from your website" />
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <input name="name" placeholder="Your Name" required style={input} />
          <input name="email" placeholder="Your Email" required style={input} />
          <textarea name="message" placeholder="Your Message" required style={textarea}></textarea>

          <button type="submit" style={button}>Send Message</button>
        </form>
      </section>

      {/* POPUP */}
      {showPopup && (
        <div style={popupOverlay}>
          <div style={popupBox}>
            <div style={checkmarkCircle}>
              <svg width="40" height="40" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" fill="none" stroke="#d4af37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h3 style={popupTitle}>Message Sent</h3>
            <p style={popupText}>
              Thank you for reaching out. Our team will get back to you shortly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* STYLES */

const heroStyle = {
  minHeight: "60vh",
  display: "flex",
  alignItems: "center",
  backgroundImage:
    'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=80")',
  backgroundSize: "cover",
  backgroundPosition: "center center",
};

const container = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "100px 50px",
};

const heroTitle = { fontSize: "60px", marginBottom: "10px" };
const heroText = { fontSize: "20px", color: "#ccc", maxWidth: "600px" };

const section = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "60px 30px",
};

const sectionTitle = {
  fontSize: "36px",
  marginBottom: "30px",
  textAlign: "center",
};

const box = {
  background: "linear-gradient(180deg, rgba(18,18,18,0.95), rgba(10,10,10,0.98))",
  border: "1px solid rgba(212,175,55,0.4)",
  borderRadius: "20px",
  padding: "40px",
  textAlign: "center",
};

const boxTitle = {
  fontSize: "28px",
  marginBottom: "15px",
};

const boxText = {
  color: "#ccc",
  lineHeight: "1.8",
  marginBottom: "10px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
  gap: "25px",
};

const card = {
  backgroundColor: "#111",
  padding: "30px",
  borderRadius: "18px",
  border: "1px solid rgba(212,175,55,0.2)",
};

const cardLink = { textDecoration: "none", color: "inherit" };

const cardTitle = {
  fontSize: "22px",
  marginBottom: "10px",
};

const cardText = {
  color: "#bbb",
  marginBottom: "10px",
};

const goldText = {
  color: "#d4af37",
  fontWeight: "600",
};

const mapContainer = {
  border: "1px solid rgba(212,175,55,0.3)",
  borderRadius: "20px",
  overflow: "hidden",
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const input = {
  padding: "15px",
  borderRadius: "10px",
  border: "1px solid #333",
  background: "#111",
  color: "white",
};

const textarea = {
  ...input,
  minHeight: "120px",
};

const button = {
  padding: "15px",
  backgroundColor: "#d4af37",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  cursor: "pointer",
};

const popupOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backdropFilter: "blur(8px)",
  backgroundColor: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
};

const popupBox = {
  background: "linear-gradient(180deg, #111, #0a0a0a)",
  padding: "50px 40px",
  borderRadius: "24px",
  border: "1px solid rgba(212,175,55,0.4)",
  textAlign: "center",
  maxWidth: "420px",
  boxShadow: "0 0 40px rgba(212,175,55,0.15)",
};

const checkmarkCircle = {
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  border: "1px solid rgba(212,175,55,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 20px auto",
};

const popupTitle = {
  fontSize: "26px",
  marginBottom: "10px",
  color: "#d4af37",
};

const popupText = {
  color: "#ccc",
  lineHeight: "1.6",
};
