export interface Material {
  name: string;
  description: string;
  image: string;
}

export interface DesignResponseStep {
  num: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  url: string;
  caption: string;
  layoutRole: "full-width" | "offset-left" | "offset-right" | "portrait" | "detail";
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Residential" | "Hospitality" | "Cultural" | "Commercial";
  typology: string;
  site: string;
  location: string;
  year: string;
  area: string;
  scope: string;
  heroImage: string;
  thesis: string;
  poeticDescription: string;
  challenge: string;
  approach: string;
  pullQuote: string;
  materialPalette: Material[];
  designResponses: DesignResponseStep[];
  gallery: GalleryItem[];
  beforeAfter?: {
    beforeImage: string;
    afterImage: string;
    beforeCaption: string;
    afterCaption: string;
  };
  featured: boolean;
  themeTone: "desert-stone" | "lakeside-arch" | "forest-retreat" | "coastal-monolith" | "alpine-timber" | "urban-penthouse";
}

export const PROJECTS: Project[] = [
  {
    id: "the-courtyard-house",
    title: "The Courtyard House",
    tagline: "A quiet sanctuary framed by sunlight, water and lime plaster in historical Jaipur.",
    category: "Residential",
    typology: "Private Haveli Estate",
    site: "Prithviraj Road, Jaipur",
    location: "Jaipur, Rajasthan",
    year: "2024",
    area: "8,500 sq. ft.",
    scope: "Architecture, Interior Architecture & Landscape",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=2600",
    thesis: "Organized around three contemplative internal courtyards, The Courtyard House reinterprets traditional Rajasthani Haveli cooling mechanisms through spatial restraint, natural stone, and breathable Araish plaster.",
    poeticDescription: "Carved from local Jaisalmer limestone and hand-burnished lime plaster, the residence exists in constant dialogue with atmospheric light. Deep overhangs protect inner chambers from 45°C desert heat while open skylights capture morning water shadows.",
    challenge: "Creating an 8,500 sq. ft. family sanctuary that remains thermally comfortable without heavy reliance on artificial air conditioning during peak summer months.",
    approach: "We organized the master plan around three interconnected court wells that act as thermal sinks, drawing air currents through porous terracotta jaali screens.",
    pullQuote: "“The courtyard is not an open void; it is the atmospheric heart that regulates temperature, light, and familial privacy.”",
    themeTone: "desert-stone",
    materialPalette: [
      {
        name: "Jaisalmer Limestone",
        description: "Hand-honed beige limestone providing thermal mass and soft texture underfoot.",
        image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Araish Lime Plaster",
        description: "Traditional mirror-finish natural lime plaster formulated with marble dust.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Reclaimed Teak Wood",
        description: "Restored century-old timber used for acoustic wall panels and ceiling beams.",
        image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Burnished Brass",
        description: "Unlacquered metal hardware that develops a warm patina through human contact.",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800"
      }
    ],
    designResponses: [
      {
        num: "01",
        title: "Thermal Courtyard Sinks",
        description: "Sunken water bodies placed in central courts evaporate heat, lowering interior ambient temperatures by 8°C."
      },
      {
        num: "02",
        title: "Porous Terracotta Jaalis",
        description: "Perforated stone screens filter harsh desert glare into golden dancing shadow patterns."
      },
      {
        num: "03",
        title: "Volumetric Spatial Flow",
        description: "Living zones flow seamlessly from shaded outer porticos to cocooned private bedroom suites."
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=85&w=2000",
        caption: "Double-height central court looking toward the sunken water basin.",
        layoutRole: "full-width"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=85&w=1200",
        caption: "Custom teak dining suite flanked by curved lime plaster niches.",
        layoutRole: "offset-left"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=85&w=1200",
        caption: "Master bedroom suite with low-slung platform seating and raw linen scrims.",
        layoutRole: "offset-right"
      },
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=85&w=1600",
        caption: "Courtyard colonnade illuminated by warm sconce lighting at twilight.",
        layoutRole: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=85&w=1200",
        caption: "Detail of hand-troweled Araish lime plaster texture and unlacquered brass joinery.",
        layoutRole: "detail"
      }
    ],
    beforeAfter: {
      beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
      afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1200",
      beforeCaption: "Original arid plot with stark concrete framework.",
      afterCaption: "Transformed courtyards enveloped in natural stone and micro-climatic gardens."
    },
    featured: true
  },
  {
    id: "house-of-arches",
    title: "House of Arches",
    tagline: "Volumetric archways, lake vistas and monolithic travertine geometry in Udaipur.",
    category: "Residential",
    typology: "Lakeside Cliffside Villa",
    site: "Lake Pichola Ridge, Udaipur",
    location: "Udaipur, Rajasthan",
    year: "2023",
    area: "6,200 sq. ft.",
    scope: "Architectural Renovation & Interior Architecture",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=85&w=2600",
    thesis: "Perched along a rocky cliff above Lake Pichola, House of Arches reinterprets classical Mewari vaulted geometry into monolithic travertine curves framing panoramic water horizons.",
    poeticDescription: "Thick load-bearing arched stone walls buffer summer heat while directing sightlines toward Udaipur's island palaces. Soft daylight filters across raw micro-cement floors, creating rhythmic vault shadows throughout the day.",
    challenge: "Anchoring floating cantilevered living pavilions into steep cliffside rock without disrupting historic lakeside views.",
    approach: "We designed a multi-level stepped terrace system following the hill's natural gradient, supported by structural arched masonry walls.",
    pullQuote: "“An arch is a dialogue between gravity and lightness — structural strength expressing spatial grace.”",
    themeTone: "lakeside-arch",
    materialPalette: [
      {
        name: "Naval Travertine",
        description: "Unpolished beige travertine slabs carrying organic wave variations.",
        image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Seamless Micro-Cement",
        description: "Matte stone mortar flooring eliminating joint lines between interior lounges and terraces.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Smoked Oak Joinery",
        description: "Deep neutral wood cabinets providing acoustic warmth inside vaulted chambers.",
        image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&q=80&w=800"
      }
    ],
    designResponses: [
      {
        num: "01",
        title: "Stepped Pavilion Gradients",
        description: "Terraces step down the cliff, ensuring every living room enjoys unbroken lake vistas."
      },
      {
        num: "02",
        title: "Vaulted Acoustic Chambers",
        description: "Sculptural arches absorb sound reverberation while framing natural light."
      },
      {
        num: "03",
        title: "Indoor-Outdoor Terrace Continuity",
        description: "Monolithic micro-cement floors extend seamlessly to wet pool decks."
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=85&w=2000",
        caption: "Vaulted corridor leading toward the lakeside terrace.",
        layoutRole: "full-width"
      },
      {
        url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=85&w=1200",
        caption: "Custom curved alcove seating framed by unpolished travertine.",
        layoutRole: "offset-left"
      },
      {
        url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=85&w=1600",
        caption: "Minimalist kitchen pavilion framed by dramatic load-bearing archway.",
        layoutRole: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=85&w=1200",
        caption: "Detail of Naval travertine marble grain and recessed lighting slot.",
        layoutRole: "detail"
      }
    ],
    beforeAfter: {
      beforeImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
      afterImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=85&w=1200",
      beforeCaption: "Dilapidated 1980s structure blocking lake vistas.",
      afterCaption: "Sculptural arched luxury villa bathed in open sunlight."
    },
    featured: true
  },
  {
    id: "amaya-retreat",
    title: "Amaya Retreat",
    tagline: "A boutique wellness sanctuary immersed in the Himalayan foothills of Rishikesh.",
    category: "Hospitality",
    typology: "Boutique Eco-Lodge & Wellness Spa",
    site: "Sal Forest Canopy, Rishikesh",
    location: "Rishikesh, Uttarakhand",
    year: "2024",
    area: "14,000 sq. ft.",
    scope: "Master Planning, Architecture & Bespoke FF&E",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=85&w=2600",
    thesis: "Elevated on slender steel pylons above mature sal forest canopies, Amaya Retreat comprises 12 private timber cottages that defer entirely to the surrounding Himalayan wilderness.",
    poeticDescription: "Conceived as a sanctuary of quiet pause, the resort uses local dark slate roofs, aromatic deodar cedar timber, and un-dyed organic linens to connect guests viscerally with mountain mist and river silence.",
    challenge: "Constructing luxury hospitality suites on a steep forested slope without cutting native sal trees or causing soil erosion.",
    approach: "We elevated all structures on stilts, allowing natural groundwater streams and wildlife paths to remain uninterrupted underneath.",
    pullQuote: "“Architecture in nature should not conquer the landscape — it should listen to its silence.”",
    themeTone: "forest-retreat",
    materialPalette: [
      {
        name: "Himalayan Dark Slate",
        description: "Hand-split local dark slate used for weather-resistant roofing and hearth walls.",
        image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Deodar Cedar Wood",
        description: "Aromatic indigenous timber with rich moisture resistance and warm grain.",
        image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Un-dyed Woven Linen",
        description: "Natural organic linens sourced from local Himalayan mountain weavers.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
      }
    ],
    designResponses: [
      {
        num: "01",
        title: "Stilted Forest Footprint",
        description: "Elevated pylons preserve native tree roots and natural groundwater runoffs."
      },
      {
        num: "02",
        title: "Thermal Glass Envelopes",
        description: "Floor-to-ceiling double glazing retains interior heat during cold winter nights."
      },
      {
        num: "03",
        title: "Aromatic Cedar Interiors",
        description: "Exposed timber framing releases natural cedar fragrance inside guest suites."
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=85&w=2000",
        caption: "Infinity plunge pool reflecting Himalayan ridge lines.",
        layoutRole: "full-width"
      },
      {
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=85&w=1200",
        caption: "Cottage bedroom opening onto private forest canopy deck.",
        layoutRole: "offset-left"
      },
      {
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=85&w=1600",
        caption: "Open-air dining pavilion surrounded by sal trees.",
        layoutRole: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&q=85&w=1200",
        caption: "Detail of deodar cedar beam joinery and slate hearth corner.",
        layoutRole: "detail"
      }
    ],
    featured: true
  },
  {
    id: "the-monolith-villa",
    title: "The Monolith Villa",
    tagline: "A raw concrete and basalt coastal sanctuary in Alibaug.",
    category: "Residential",
    typology: "Coastal Estate",
    site: "Mandwa Coast, Alibaug",
    location: "Alibaug, Maharashtra",
    year: "2023",
    area: "7,800 sq. ft.",
    scope: "Architecture, Interiors & Water Features",
    heroImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=85&w=2600",
    thesis: "Formed by board-formed concrete and black volcanic basalt, The Monolith Villa shelters open living pavilions from coastal monsoon winds.",
    poeticDescription: "Raw basalt stone and textured concrete form solid monoliths that insulate inner courtyards while pocket glass doors slide away to connect with coconut groves.",
    challenge: "Resisting coastal salt air corrosion and heavy monsoon rains without compromising slender architectural sightlines.",
    approach: "We used marine-grade shuttered concrete with deeply recessed sliding glass walls that retract into insulated wall niches.",
    pullQuote: "“Concrete when treated with respect carries the tactile honesty of natural cliff stone.”",
    themeTone: "coastal-monolith",
    materialPalette: [
      {
        name: "Board-Formed Concrete",
        description: "Textured wall surfaces carrying subtle wood grain impressions.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Black Basalt Stone",
        description: "Flamed volcanic stone for wet terraces and reflecting pools.",
        image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800"
      }
    ],
    designResponses: [
      {
        num: "01",
        title: "Monolithic Gale Shielding",
        description: "Thick concrete walls shield interior courtyards from monsoon sea winds."
      },
      {
        num: "02",
        title: "Retractable Glass Pavilions",
        description: "Double-track glass walls slide entirely away during dry winter months."
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=2000",
        caption: "Concrete facade with floating water entry walkway.",
        layoutRole: "full-width"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=85&w=1200",
        caption: "Living room facing private coconut grove.",
        layoutRole: "offset-left"
      }
    ],
    featured: true
  },
  {
    id: "serene-sanctuary",
    title: "Sanctuary at Ridge",
    tagline: "Alpine timber lodge blended with modern stone volumes in Shimla.",
    category: "Residential",
    typology: "Alpine Winter Lodge",
    site: "Cedar Ridge, Shimla",
    location: "Shimla, Himachal Pradesh",
    year: "2022",
    area: "5,400 sq. ft.",
    scope: "Interior Architecture & Custom Furniture",
    heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=85&w=2600",
    thesis: "Crafted with pine timbers and granite hearth walls, Sanctuary at Ridge provides a warm cocoon against winter snowfall.",
    poeticDescription: "High in Shimla's cedar ridges, this home centers around a 20-foot granite fireplace that radiates warmth across double-height timber lounges.",
    challenge: "Integrating modern thermal heating within a historic timber structural envelope.",
    approach: "Radiant floor heating combined with triple-glazed glass windows preserves heat while framing snow peaks.",
    pullQuote: "“A winter sanctuary should gather warmth around fire, wood, and shadow.”",
    themeTone: "alpine-timber",
    materialPalette: [
      {
        name: "Shimla Granite",
        description: "Coarsely textured gray granite block masonry.",
        image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800"
      }
    ],
    designResponses: [
      {
        num: "01",
        title: "Granite Hearth Stack",
        description: "A central masonry stack radiates warmth throughout upper floor suites."
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=85&w=2000",
        caption: "Hearth room with floor-to-ceiling mountain glazing.",
        layoutRole: "full-width"
      }
    ],
    featured: false
  },
  {
    id: "the-minimalist-penthouse",
    title: "The Raw Minimalist Penthouse",
    tagline: "Monochromatic luxury above the Arabian Sea sky-line in Mumbai.",
    category: "Residential",
    typology: "High-Rise Sky Residence",
    site: "Worli Sea Face, Mumbai",
    location: "Mumbai, Maharashtra",
    year: "2024",
    area: "5,100 sq. ft.",
    scope: "Interior Architecture & Art Curation",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=85&w=2600",
    thesis: "Suspended above Mumbai's coastal sky-line, this penthouse is an exercise in quiet restraint, silver travertine, and unbroken sea horizon views.",
    poeticDescription: "Soft grey silk carpets cushion footsteps against satin silver travertine floors, creating a tranquil sanctuary above urban energy.",
    challenge: "Creating spatial privacy and acoustic calm inside a high-rise glass tower.",
    approach: "Acoustic timber claddings and motorized linen scrims buffer external noise and filter intense ocean sunlight.",
    pullQuote: "“Restraint in high-rise living creates a sanctuary where sky and horizon become part of the interior fabric.”",
    themeTone: "urban-penthouse",
    materialPalette: [
      {
        name: "Silver Travertine",
        description: "Satin-polished silver travertine slabs with linear grain.",
        image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800"
      }
    ],
    designResponses: [
      {
        num: "01",
        title: "Acoustic Scrim Layering",
        description: "Motorized linen scrims buffer urban noise while filtering sea sunlight."
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=85&w=2000",
        caption: "Monolithic lounge framing Arabian ocean sunsets.",
        layoutRole: "full-width"
      }
    ],
    featured: false
  }
];
