import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atelier & Design Ethos | VYOM Atelier",
  description:
    "Learn about VYOM Atelier's design manifesto, founding principals Aarav Sharma and Rhea Singhania, core practice pillars, and press monographs.",
  openGraph: {
    title: "Atelier & Design Ethos | VYOM Atelier",
    description: "Quiet, material-rich architecture born from light, memory, and geographic context.",
  },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
