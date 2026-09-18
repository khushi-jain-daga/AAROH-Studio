export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  philosophy: string;
  deliverables: string[];
  idealFor: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: "architecture",
    number: "01",
    title: "Architecture",
    tagline: "Volumetric spatial design rooted in climate, context, and tactile permanence.",
    description: "Our architectural practice shapes grounded buildings that respond directly to site topography, solar orientation, and local material heritage. We create quiet landmarks rather than loud statements.",
    philosophy: "Architecture is not merely structural shelter; it is an orchestrator of light, wind, and shadow. Every wall we draw considers how light will wash over its surface at 7:00 AM versus 6:00 PM.",
    deliverables: [
      "Site Analysis & Solar Flow Studies",
      "Concept Design & Volumetric Spatial Massing",
      "Structural Engineering & Detail Drawings",
      "Local Material Procurement Strategy",
      "Architectural Landscape Integration"
    ],
    idealFor: "Private homeowners seeking legacy estates, boutique developers, and cultural foundations.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1200"
  },
  {
    id: "interior-design",
    number: "02",
    title: "Interior Design",
    tagline: "Atmospheric, material-rich interiors that feel lived-in before they are occupied.",
    description: "We craft interior spaces centered around tactile calm, custom joinery, and poetic proportions. From floor finishes to lighting temperature, every micro-detail is intentionally resolved.",
    philosophy: "Interiors should wrap around human life with warmth. We reject transient trends in favor of natural stone, unpolished timber, hand-plastered walls, and bespoke furniture.",
    deliverables: [
      "Spatial Layout & Interior Flow Planning",
      "Custom Millwork & Cabinetry Design",
      "Material, Finish & Lighting Specification",
      "Sanitary & Hardware Curation",
      "Acoustic & Soft Textile Selection"
    ],
    idealFor: "Luxury residences, penthouses, private villas, and high-end residential renovations.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=85&w=1200"
  },
  {
    id: "hospitality-spaces",
    number: "03",
    title: "Hospitality Spaces",
    tagline: "Immersive boutique resorts, sanctuaries, and dining concepts with strong narrative identities.",
    description: "We design hospitality destinations that offer guests profound pause and sensory delight. Our approach blends operational efficiency with artistic storytelling.",
    philosophy: "A great hospitality environment creates unforgettable memories through atmosphere—the weight of a linen curtain, the scent of cedar woodwork, the glow of low-slung sconces.",
    deliverables: [
      "Hospitality Master Planning & Layouts",
      "Guestroom & Suite Interior Architecture",
      "F&B Dining & Lounge Concept Design",
      "Wellness & Spa Spatial Architecture",
      "Operational Flow & Staff Movement Layouts"
    ],
    idealFor: "Boutique hotel owners, wellness retreats, luxury eco-lodges, and destination dining venues.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=85&w=1200"
  },
  {
    id: "renovation-adaptive-reuse",
    number: "04",
    title: "Renovation & Adaptive Reuse",
    tagline: "Honoring historical patina while infusing contemporary functionality and spatial clarity.",
    description: "We breathing second lives into aging havelis, heritage structures, and mid-century modern buildings by preserving historical character while inserting crisp modern interventions.",
    philosophy: "Heritage is not frozen in amber. We believe in respectful dialogue between old masonry walls and sharp, minimalist contemporary steel and glass.",
    deliverables: [
      "Heritage Structure Assessment & Mapping",
      "Adaptive Reuse Feasibility Studies",
      "Structural Strengthening & Moisture Protection",
      "Contemporary Mechanical & HVAC Insertion",
      "Patina & Fresco Conservation Coordination"
    ],
    idealFor: "Heritage haveli owners, adaptive commercial reuse clients, and historic property revivals.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=85&w=1200"
  },
  {
    id: "styling-art-direction",
    number: "05",
    title: "Styling & Art Direction",
    tagline: "Curating rare fine art, antique objects, and artisanal decor to complete the spatial narrative.",
    description: "The final layer of spatial design. We source hand-crafted ceramics, commissioned sculptural pieces, rare textiles, and vintage furniture from master craftsmen across Asia and Europe.",
    philosophy: "Objects carry energy. Rather than populating spaces with catalog decor, we carefully curate singular pieces that possess soul and historical weight.",
    deliverables: [
      "Fine Art Curation & Gallery Acquisitions",
      "Artisanal Ceramics & Object Sourcing",
      "Vintage & Collector Furniture Procurement",
      "Textile & Drapery Layering",
      "Editorial Photography Styling"
    ],
    idealFor: "Art collectors, high-net-worth private estates, and luxury brand flagship showrooms.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=85&w=1200"
  }
];
