import Navbar from "@/components/Navbar";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ThemeRegistry>
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Navbar />

            <main style={{ flex: 1, backgroundColor: "background.default", }}>
              {children}
            </main>

            <Footer />
          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}
