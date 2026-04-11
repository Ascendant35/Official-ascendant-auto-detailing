export const metadata = {
  title: "Ascendant Auto Detailing",
  description: "Premium auto detailing services",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
