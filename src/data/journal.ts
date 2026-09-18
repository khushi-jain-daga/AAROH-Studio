export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
  content: string[];
  image: string;
}

export const ARTICLES: Article[] = [
  {
    id: "the-poetry-of-lime-plaster",
    title: "The Poetry of Lime Plaster: Breathing Walls in Modern Architecture",
    category: "Materiality",
    readTime: "5 min read",
    date: "August 2024",
    author: "Aarav Sharma",
    excerpt: "Why ancient Araish lime plaster techniques outperform modern synthetic paints in tactile elegance and climatic regulation.",
    content: [
      "In an era dominated by synthetic emulsion paints and uniform drywall, natural lime plaster offers a return to architecture that breathes.",
      "Rooted in centuries-old Rajasthani craftsmanship, traditional Araish plaster is created using slaked lime, marble dust, and natural binders like egg white and curd. The resulting finish possesses a soft, translucent sheen that shifts hue as daylight changes.",
      "Beyond its undeniable aesthetic grace, lime plaster absorbs atmospheric carbon dioxide as it cures, regulating indoor humidity organically without toxic chemical emissions.",
      "When we specify lime plaster at AAROH Studio, we invite light to play across subtle hand-troweled imperfections—reminding us that true luxury lies in natural texture rather than mechanical perfection."
    ],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=85&w=1200"
  },
  {
    id: "designing-for-silence",
    title: "Designing for Silence: Spatial Acoustic Restraint in Urban Homes",
    category: "Philosophy",
    readTime: "6 min read",
    date: "July 2024",
    author: "Rhea Singhania",
    excerpt: "How intentional acoustic layering and spatial compression create profound stillness inside chaotic cities.",
    content: [
      "Silence has become the rarest luxury commodity of modern city living. As urban environments grow increasingly chaotic, the home must serve as a sanctuary of acoustic tranquility.",
      "Acoustic comfort is not merely about soundproofing windows; it is about how sound behaves within a room. Hard, reflective surfaces like polished marble bounce sound waves continuously, creating subliminal mental fatigue.",
      "By strategically integrating porous stone, micro-perforated timber panels, and heavy un-dyed linen drapery, we dampen ambient noise reverberation without smothering spatial vitality.",
      "A silent room allows the gentle rustle of courtyard leaves and the trickle of water features to emerge into consciousness."
    ],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=85&w=1200"
  },
  {
    id: "the-modern-haveli-courtyard",
    title: "Reimagining the Haveli Courtyard for 21st-Century Living",
    category: "Architecture",
    readTime: "7 min read",
    date: "June 2024",
    author: "Aarav Sharma",
    excerpt: "Lessons in passive solar cooling, privacy, and community living from traditional Indian courtyard typologies.",
    content: [
      "The courtyard is the beating heart of traditional Indian domestic architecture. For centuries, the courtyard functioned simultaneously as a micro-climatic regulator, light well, and private social theater.",
      "In our contemporary master plans, we distill the courtyard to its fundamental essence: an unroofed spatial core around which all daily rituals orbit.",
      "By placing water bodies and native shade trees in central courts, we generate natural stack ventilation that cools interior chambers by up to 8 degrees Celsius compared to external ambient heat.",
      "The modern courtyard restores our visceral connection to weather, stargazing, and seasonal shifts while protecting family privacy from neighboring sightlines."
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1200"
  },
  {
    id: "patina-and-longevity",
    title: "Patina & Longevity: Designing Buildings That Age Gracefully",
    category: "Thought Leadership",
    readTime: "4 min read",
    date: "May 2024",
    author: "Rhea Singhania",
    excerpt: "Rejecting disposable interior trends in favor of natural materials that grow richer with time and human touch.",
    content: [
      "Most contemporary building materials look their best on the day of handover and deteriorate continuously thereafter. Paint peels, laminate veneers chip, and plastic coatings yellow.",
      "We design with materials that obey Wabi-Sabi principles: unlacquered brass, Jaisalmer limestone, teak wood, and raw iron. These materials accept human touch, sunlight, and weathering as badges of honor.",
      "A ten-year-old brass door handle carries a subtle golden luster polished by thousands of hand contacts. A stone stair tread wears down gently where feet tread most often.",
      "When architecture embraces aging, maintenance evolves from an ongoing chore into a celebration of spatial history."
    ],
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=85&w=1200"
  },
  {
    id: "sculpting-with-shadow",
    title: "Sculpting with Shadow: Light Orientation in Warm Climates",
    category: "Craftsmanship",
    readTime: "5 min read",
    date: "April 2024",
    author: "Aarav Sharma",
    excerpt: "How deep overhangs, jaali screens, and high clerestories filter intense sun into calming ambient glow.",
    content: [
      "Light in tropical and desert climates can be unforgiving. Unfiltered sunlight glares off white surfaces, causing eye strain and thermal discomfort.",
      "Rather than flooding interiors with unrestricted glass walls, we treat light as a precious liquid to be funneled, filtered, and sculpted.",
      "Deeply recessed window embrasures and perforated terracotta jaalis slice harsh sunlight into soft golden rays that dance across plaster floors.",
      "Shadow is not the absence of light; it is light's necessary partner in defining spatial depth and mystery."
    ],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=85&w=1200"
  },
  {
    id: "curating-art-in-architecture",
    title: "Curating Art in Architecture: Dialogue Between Space and Object",
    category: "Art Direction",
    readTime: "6 min read",
    date: "March 2024",
    author: "Rhea Singhania",
    excerpt: "Integrating fine art and sculptural furniture into initial spatial plans rather than as decorative afterthoughts.",
    content: [
      "Too often, art is treated as decorative wall filler applied after construction is complete. In our atelier, art and spatial architecture are conceived simultaneously.",
      "A wall niche is proportioned specifically to cradle a centuries-old sandstone sculpture; ceiling spotlights are angled to catch the surface texture of a canvas at dusk.",
      "When space and artwork share equal intentionality, the home transforms into a living gallery where art does not compete with daily life, but elevates it."
    ],
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=85&w=1200"
  }
];
