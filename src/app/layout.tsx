import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "AAROH Studio | Architecture & Interior Design",
  description:
    "AAROH Studio is a premier architecture and interior studio shaping residences, retreats and cultural spaces through climate, proportion, material and memory.",
  keywords: [
    "AAROH Studio",
    "Architecture Studio Jaipur",
    "Interior Architecture India",
    "High End Residential Estates",
    "Hospitality Architecture Retreats",
    "Heritage Haveli Renovation",
  ],
  authors: [{ name: "AAROH Studio" }],
  openGraph: {
    title: "AAROH Studio | Architecture & Interior Design",
    description:
      "AAROH Studio shapes residences, retreats and cultural interiors through climate, proportion, material and memory.",
    url: "https://aarohstudio.com",
    siteName: "AAROH Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1200",
        width: 1200,
        height: 630,
        alt: "AAROH Studio Architecture Portfolio",
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
