import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Spatial Works | AAROH Studio",
  description:
    "Explore luxury architectural case studies across residential havelis, lakeside villas, boutique wellness sanctuaries, and high-rise sky penthouses.",
  openGraph: {
    title: "Selected Spatial Works | AAROH Studio",
    description: "Architectural & Interior Design Monograph Archive by AAROH Studio.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
