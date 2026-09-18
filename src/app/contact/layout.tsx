import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Begin a Consultation Dialogue | AAROH Studio",
  description:
    "Schedule a confidential 45-minute spatial consultation with AAROH Studio principals for residential estates, hospitality sanctuaries, and cultural commissions.",
  openGraph: {
    title: "Begin a Consultation Dialogue | AAROH Studio",
    description: "Inquire about studio capacity and spatial consultation parameters.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
