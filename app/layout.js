import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Montserrat, Poppins, Ubuntu } from "next/font/google";

export const metadata = {
  title: "MegaHub App",
  description: "A simple e-commerce app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* 🔹 Footer (imported) */}
        <Header />
        {/* 🔹 Page Content (dynamic part) */}
        <main className="min-h-screen">{children}</main>

        {/* 🔹 Footer (imported) */}
        <Footer />
      </body>
    </html>
  );
}
