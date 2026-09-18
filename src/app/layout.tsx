import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "AAROH Studio | Luxury Architecture & Interior Design Jaipur",
  description:
    "AAROH Studio creates refined residential, hospitality and cultural spaces with a quiet, timeless sensibility. Architecture shaped by light, material and memory.",
  keywords: [
    "AAROH Studio",
    "Luxury Architecture Jaipur",
    "Interior Design Studio India",
    "High End Residential Design",
    "Hospitality Architecture",
    "Architectural Haveli Renovation",
  ],
  authors: [{ name: "AAROH Studio" }],
  openGraph: {
    title: "AAROH Studio | Spaces Shaped by Light, Material and Memory",
    description:
      "AAROH Studio designs refined residential, hospitality and cultural interiors with a quiet, timeless sensibility.",
    url: "https://aarohstudio.com",
    siteName: "AAROH Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1200",
        width: 1200,
        height: 630,
        alt: "AAROH Studio Architecture Showcase",
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
      <body className="bg-ivory-100 text-charcoal-900 font-sans antialiased selection:bg-bronze-400 selection:text-ivory-100">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
