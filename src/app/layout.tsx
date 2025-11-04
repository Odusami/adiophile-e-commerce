import "./globals.scss";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import type { ReactNode } from "react";
import About from "@/components/About/About";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <About />
        <Footer />
      </body>
    </html>
  );
}
