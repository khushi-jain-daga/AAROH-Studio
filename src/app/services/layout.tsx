import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architectural & Interior Services | AAROH Studio",
  description:
    "End-to-end architecture, luxury interior architecture, hospitality master planning, haveli adaptive reuse, and fine art direction.",
  openGraph: {
    title: "Architectural & Interior Services | AAROH Studio",
    description: "Core disciplines and service deliverables by AAROH Studio.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
