import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architectural Journal & Essays | VYOM Atelier",
  description:
    "Essays and monographs on Araish lime plaster, spatial acoustics, modern haveli courtyards, patina, and light orientation.",
  openGraph: {
    title: "Architectural Journal & Essays | VYOM Atelier",
    description: "Thought-leadership essays on light, material permanence, and spatial design.",
  },
};

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
