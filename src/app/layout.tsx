import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "VYOM Atelier | Architecture for spaces that remember.",
  description:
    "VYOM Atelier is a quiet architecture and interior atelier shaping residences, retreats and cultural interiors through light, proportion and material restraint.",
  keywords: [
    "VYOM Atelier",
    "Luxury Architecture Atelier Jaipur",
    "Minimal Interior Architecture India",
    "High End Residential Design",
    "Hospitality Architecture Retreats",
    "Architectural Haveli Restoration",
  ],
  authors: [{ name: "VYOM Atelier" }],
  openGraph: {
    title: "VYOM Atelier | Architecture for spaces that remember.",
    description:
      "VYOM Atelier shapes residences, retreats and cultural interiors through light, proportion and material restraint.",
    url: "https://vyomatelier.com",
    siteName: "VYOM Atelier",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1200",
        width: 1200,
        height: 630,
        alt: "VYOM Atelier Architectural Monograph",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bone-100 text-charcoal-900 font-sans antialiased selection:bg-charcoal-900 selection:text-bone-100">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
