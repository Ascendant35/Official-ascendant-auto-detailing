import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ margin: 0, padding: 0 }}>
        {children}

        {/* AUTO LANGUAGE DETECTION */}
        <Footer lang={typeof window !== "undefined" && window.location.pathname.startsWith("/fr") ? "fr" : "en"} />
      </body>
    </html>
  );
}
