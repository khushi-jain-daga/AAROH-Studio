import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architectural & Interior Disciplines | VYOM Atelier",
  description:
    "End-to-end architecture, luxury interior architecture, hospitality master planning, haveli adaptive reuse, and fine art direction.",
  openGraph: {
    title: "Architectural & Interior Disciplines | VYOM Atelier",
    description: "Core disciplines and service deliverables by VYOM Atelier.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
