import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Architectural Works | AAROH Studio",
  description:
    "Explore 8 luxury architectural case studies across residential havelis, lakeside villas, boutique wellness sanctuaries, and high-rise sky penthouses.",
  openGraph: {
    title: "Selected Architectural Works | AAROH Studio",
    description: "Architectural & Interior Design Portfolio by AAROH Studio Jaipur.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
