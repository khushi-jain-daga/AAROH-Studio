import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Spatial Works | VYOM Atelier",
  description:
    "Explore 8 luxury architectural case studies across residential havelis, lakeside villas, boutique wellness sanctuaries, and high-rise sky penthouses.",
  openGraph: {
    title: "Selected Spatial Works | VYOM Atelier",
    description: "Architectural & Interior Design Monograph Archive by VYOM Atelier.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
