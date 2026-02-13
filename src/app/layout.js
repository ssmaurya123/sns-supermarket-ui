import Navbar from "@/components/Navbar";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Navbar />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
