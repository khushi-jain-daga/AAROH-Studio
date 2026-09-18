export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Value {
  title: string;
  description: string;
}

export interface PressItem {
  publication: string;
  headline: string;
  year: string;
  link?: string;
}

export interface Testimonial {
  quote: string;
  client: string;
  role: string;
  project: string;
  location: string;
}

export const STUDIO_DATA = {
  intro: {
    title: "Architecture for spaces that remember.",
    subtitle: "AAROH Studio is a quiet architecture and interior studio headquartered in Jaipur, India. We shape refined residential, hospitality, and cultural spaces through light, proportion, silence and material restraint.",
    manifesto: [
      "We believe architecture should feel grounded before it is modern. It should listen to the whispers of its landscape, respect local climate dynamics, and honor the tactile wisdom of master craftspeople.",
      "In a world consumed by hyper-fast construction and disposable design trends, AAROH Studio stands for spatial restraint, material authenticity, and enduring elegance."
    ]
  },
  foundersNote: {
    quote: "Luxury is not excess. It is the discipline of knowing what to leave untouched.",
    author: "Aarav Sharma & Rhea Singhania",
    title: "Founding Principals",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=85&w=1000"
  },
  values: [
    {
      title: "Light before form",
      description: "Before drawing a wall, we calculate how morning sun washes over natural stone surfaces."
    },
    {
      title: "Materials with memory",
      description: "We specify honest natural materials that accept human patina and weather gracefully over decades."
    },
    {
      title: "Silence as a design tool",
      description: "Acoustic compression and spatial restraint create profound stillness inside modern homes."
    },
    {
      title: "Contextual permanence",
      description: "Every commission begins with topographic reading, solar trajectories, and regional stone heritage."
    }
  ],
  metrics: [
    { value: "12+", label: "Years Collective Experience" },
    { value: "48", label: "Completed Spaces" },
    { value: "9", label: "Cities Worldwide" },
    { value: "6", label: "Hospitality Concepts" }
  ],
  team: [
    {
      name: "Aarav Sharma",
      role: "Co-Founder & Design Principal (Architecture)",
      bio: "Master of Architecture from CEPT University. Specializes in passive solar cooling, volumetric spatial planning, and natural stone construction.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=85&w=800"
    },
    {
      name: "Rhea Singhania",
      role: "Co-Founder & Creative Principal (Interiors)",
      bio: "Alumna of Parsons School of Design, Paris. Focuses on spatial acoustics, bespoke furniture curation, and natural lime plaster finishes.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=85&w=800"
    },
    {
      name: "Devendra Rathore",
      role: "Principal Architectural Engineer",
      bio: "Over 18 years leading complex structural engineering, heritage haveli conservation, and sustainable building systems across North India.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=85&w=800"
    },
    {
      name: "Ananya Mehta",
      role: "Lead Interior Architect",
      bio: "Specialist in high-end luxury residential millwork, lighting design, and material curation for private estates.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=85&w=800"
    }
  ],
  press: [
    {
      publication: "Architectural Digest",
      headline: "AAROH Studio: The Jaipur Practice Redefining Modern Desert Luxury",
      year: "2024"
    },
    {
      publication: "Elle Decor International",
      headline: "Top 10 Asian Architecture Studios Shaping Sustainable Hospitality",
      year: "2023"
    },
    {
      publication: "Wallpaper* Magazine",
      headline: "The Courtyard House — A Masterclass in Spatial Restraint and Natural Ventilation",
      year: "2024"
    },
    {
      publication: "Design Anthology",
      headline: "Quiet Sanctuaries: Exploring the Tactile Interiors of AAROH Studio",
      year: "2023"
    }
  ],
  testimonials: [
    {
      quote: "AAROH Studio transformed our family plot into a timeless sanctuary. The passive cooling of the central courtyard means we rarely turn on air conditioning even in peak Jaipur summers.",
      client: "Vikramaditya & Gayatri Singh",
      role: "Estate Owners",
      project: "The Courtyard House",
      location: "Jaipur"
    },
    {
      quote: "Their team handled both master planning and interior art direction seamlessly. Amaya Retreat has become an award-winning Himalayan sanctuary that guests praise for its quiet serenity.",
      client: "Radhika Kothari",
      role: "Managing Director, Amaya Hospitality",
      project: "Amaya Retreat",
      location: "Rishikesh"
    },
    {
      quote: "Restoring an 18th-century merchant haveli without damaging historic frescoes required immense architectural discipline. AAROH Studio executed it with reverence and precision.",
      client: "Gajendra Singh Jodha",
      role: "Heritage Hotel Proprietor",
      project: "Tales of Terracotta",
      location: "Jodhpur"
    }
  ]
};
