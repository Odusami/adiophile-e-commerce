import "./globals.scss";

import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
