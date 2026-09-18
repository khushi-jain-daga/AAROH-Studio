import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Studio & Ethos | AAROH Studio",
  description:
    "Learn about AAROH Studio's design manifesto, founding principals Aarav Sharma and Rhea Singhania, core practice pillars, and press monographs.",
  openGraph: {
    title: "About Studio & Ethos | AAROH Studio",
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
