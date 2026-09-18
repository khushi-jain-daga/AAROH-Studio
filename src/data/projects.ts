export interface Material {
  name: string;
  description: string;
  image: string;
}

export interface ProcessStep {
  phase: "Concept" | "Planning" | "Detailing" | "Execution";
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Residential" | "Hospitality" | "Cultural" | "Commercial";
  typology: string;
  location: string;
  year: string;
  area: string;
  scope: string;
  heroImage: string;
  shortDescription: string;
  poeticDescription: string;
  challenge: string;
  approach: string;
  pullQuote: string;
  materialPalette: Material[];
  process: ProcessStep[];
  gallery: { url: string; caption: string; aspect?: "landscape" | "portrait" | "wide" | "square" }[];
  beforeAfter?: {
    beforeImage: string;
    afterImage: string;
    beforeCaption: string;
    afterCaption: string;
  };
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "the-courtyard-house",
    title: "The Courtyard House",
    tagline: "A quiet sanctuary framed by sunlight, water and lime plaster in historical Jaipur.",
    category: "Residential",
    typology: "Private Haveli Estate",
    location: "Jaipur, Rajasthan",
    year: "2024",
    area: "8,500 sq. ft.",
    scope: "Architecture, Interior Architecture & Landscape",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=2400",
    shortDescription: "A multi-generational residence organized around a series of contemplative internal courtyards, re-interpreting traditional Rajasthani Haveli cooling mechanisms.",
    poeticDescription: "Carved from local beige Jaisalmer stone and breathable hand-burnished lime plaster, The Courtyard House exists in constant dialogue with atmospheric light. Deep overhangs protect inner sanctums from harsh desert heat while open skylights capture shifting morning shadows across water courts.",
    challenge: "Creating an expansive 8,500 sq. ft. family estate that felt intimate, quiet, and climate-responsive without relying heavily on artificial air conditioning during Jaipur's intense 45°C summer peaks.",
    approach: "We organized the master plan around three interconnected courtyard wells that act as thermal sinks, drawing cool air currents through porous terracotta jaali screens. Spaces flow effortlessly from outer shaded porticos to cocooned private suites, layered in soft muted stone.",
    pullQuote: "“The courtyard is not just an open void; it is the atmospheric heart that regulates temperature, light, and familial privacy.”",
    materialPalette: [
      {
        name: "Yellow Jaisalmer Stone",
        description: "Hand-honed local limestone providing natural thermal warmth underfoot.",
        image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Lime Plaster (Araish)",
        description: "Traditional Rajasthani mirror-finish natural lime plaster for humidity regulation.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Reclaimed Teak Wood",
        description: "Centuries-old restored timber for acoustic doors and structural ceiling beams.",
        image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Burnished Brass",
        description: "Unlacquered metal door hardware that ages with human contact.",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800"
      }
    ],
    process: [
      {
        phase: "Concept",
        title: "Micro-Climatic Solar Mapping",
        description: "Studying summer solar trajectories and prevailing wind directions across the Jaipur plot to orient open courts away from direct afternoon glare."
      },
      {
        phase: "Planning",
        title: "Volumetric Spatial Massing",
        description: "Designing a stepped 3-court layout that separates social entertaining zones from private sleeping sanctuaries while maintaining visual sightlines."
      },
      {
        phase: "Detailing",
        title: "Araish Plaster & Stone Joinery",
        description: "Working with master plasterers to formulate traditional lime-marble dust compounds and detailing zero-sightline glass pocket doors."
      },
      {
        phase: "Execution",
        title: "Artisan On-Site Craft",
        description: "Supervising 14 months of manual stone carving, water feature waterproofing, and custom teak joinery installation."
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=85&w=1600",
        caption: "Double-height central atrium overlooking the reflective water court.",
        aspect: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=85&w=1200",
        caption: "Custom teak dining suite flanked by hand-plastered curved niche partitions.",
        aspect: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=85&w=1200",
        caption: "Master bedroom suite with low-slung platform seating and raw linen drapes.",
        aspect: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=85&w=1600",
        caption: "Courtyard colonnade illuminated by warm evening sconce lighting.",
        aspect: "landscape"
      }
    ],
    beforeAfter: {
      beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
      afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1200",
      beforeCaption: "Original arid plot with stark concrete structural framework.",
      afterCaption: "Transformed courtyards enveloped in natural lime plaster and micro-climatic gardens."
    },
    featured: true
  },
  {
    id: "house-of-arches",
    title: "House of Arches",
    tagline: "Volumetric archways, lake vistas and monolithic travertine geometry in Udaipur.",
    category: "Residential",
    typology: "Lakeside Cliffside Villa",
    location: "Udaipur, Rajasthan",
    year: "2023",
    area: "6,200 sq. ft.",
    scope: "Architectural Renovation & Interior Architecture",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=85&w=2400",
    shortDescription: "A cliffside lakeside retreat characterized by sculptural vaulted corridors and expansive panoramic apertures overlooking Lake Pichola.",
    poeticDescription: "House of Arches reinterprets classical Mewari arches into contemporary structural load-bearing curves. Soft daylight filters across raw travertine surfaces, creating rhythmic shadow plays throughout the day.",
    challenge: "Integrating modern cantilevered living spaces into a steep, rocky cliff terrain while preserving historic sightlines toward Udaipur's historic water palaces.",
    approach: "We designed a stepped multi-level pavilion system that follows the hill's natural gradient. Floating outdoor terraces are grounded by thick, arched stone walls that echo Udaipur's timeless heritage.",
    pullQuote: "“An arch is a dialogue between gravity and lightness — structural strength expressing spatial grace.”",
    materialPalette: [
      {
        name: "Naval Travertine",
        description: "Unpolished beige travertine slabs with organic tone variations.",
        image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Micro-Cement Mortar",
        description: "Seamless matte flooring creating a fluid boundary between indoor and outdoor.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Smoked Oak Wood",
        description: "Deep neutral wood joinery for library cabinets and headboards.",
        image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&q=80&w=800"
      }
    ],
    process: [
      {
        phase: "Concept",
        title: "Cliff Gradient Analysis",
        description: "Topographic elevation mapping to position structural foundation footings securely into natural cliff rock."
      },
      {
        phase: "Planning",
        title: "Arched Geometry Layout",
        description: "Proportioning structural vaulted archways to align perfectly with lake horizons and historic island palaces."
      },
      {
        phase: "Detailing",
        title: "Seamless Micro-Cement Floors",
        description: "Formulating custom continuous floor mortars that eliminate joint lines between interior lounges and exterior pool decks."
      },
      {
        phase: "Execution",
        title: "Cliffside Stone Masonry",
        description: "Hand-building stone retaining walls and installing triple-glazed panoramic arch windows."
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=85&w=1600",
        caption: "Vaulted corridor leading toward the lakeside terrace.",
        aspect: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=85&w=1200",
        caption: "Custom curved alcove seating with ivory textile upholstery.",
        aspect: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=85&w=1600",
        caption: "Minimalist kitchen pavilion framed by dramatic archway.",
        aspect: "landscape"
      }
    ],
    beforeAfter: {
      beforeImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
      afterImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=85&w=1200",
      beforeCaption: "Dilapidated 1980s villa structure with blocked lake vistas.",
      afterCaption: "Sculptural arched luxury residence bathed in open sunlight."
    },
    featured: true
  },
  {
    id: "amaya-retreat",
    title: "Amaya Retreat",
    tagline: "A boutique wellness sanctuary immersed in the Himalayan foothills of Rishikesh.",
    category: "Hospitality",
    typology: "Boutique Eco-Lodge & Wellness Spa",
    location: "Rishikesh, Uttarakhand",
    year: "2024",
    area: "14,000 sq. ft.",
    scope: "Master Planning, Architecture & Bespoke FF&E",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=85&w=2400",
    shortDescription: "A tranquil boutique resort consisting of 12 private timber and slate cottages nestled among sal forest canopies above the Ganges river.",
    poeticDescription: "Amaya Retreat was conceived as a place of pause and quiet solitude. Built using local stone masonry, cedar timber, and earth-toned textiles, the architecture defers entirely to the surrounding mountain wilderness.",
    challenge: "Building on a fragile forested incline with minimal footprint, protecting native trees while creating high-end luxury hospitality suites.",
    approach: "All structures are elevated on stilts, allowing natural groundwater streams and wildlife paths to remain uninterrupted underneath. Floor-to-ceiling glass walls frame living paintings of mountain mist.",
    pullQuote: "“Architecture in nature should not conquer the landscape — it should listen to its silence.”",
    materialPalette: [
      {
        name: "Himalayan Slate",
        description: "Hand-split local dark slate used for roofing and accent fireplaces.",
        image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Deodar Cedar Wood",
        description: "Aromatic indigenous timber with rich grain patterns.",
        image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Raw Woven Linen",
        description: "Un-dyed organic linens curated from local artisan weavers.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
      }
    ],
    process: [
      {
        phase: "Concept",
        title: "Ecological Tree Canopy Mapping",
        description: "Documenting every native sal tree position to route cottage footings around mature tree roots."
      },
      {
        phase: "Planning",
        title: "Stilted Modular Architecture",
        description: "Designing elevated timber structures supported by slender steel pylons to minimize soil excavation."
      },
      {
        phase: "Detailing",
        title: "Thermal Double Glazing",
        description: "Integrating low-emissivity glass envelopes that retain heat during mountain winter nights."
      },
      {
        phase: "Execution",
        title: "Low-Impact Forest Craft",
        description: "Carrying building materials manually along narrow forest paths to avoid heavy machine road construction."
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=85&w=1600",
        caption: "Infinity plunge pool reflecting Himalayan ridge lines.",
        aspect: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=85&w=1200",
        caption: "Boutique cottage bedroom opening onto private forest deck.",
        aspect: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=85&w=1600",
        caption: "Open-air dining pavilion surrounded by sal forest canopy.",
        aspect: "landscape"
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
    location: "Alibaug, Maharashtra",
    year: "2023",
    area: "7,800 sq. ft.",
    scope: "Architecture, Interiors & Water Features",
    heroImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=85&w=2400",
    shortDescription: "A minimalist coastal home featuring exposed board-formed concrete walls, infinity reflecting pools, and tropical courtyards.",
    poeticDescription: "Raw basalt stone and textured concrete form a series of solid monoliths that shelter open-plan living pavilions from monsoon sea winds.",
    challenge: "Designing for harsh coastal salt air and heavy monsoon rains without compromising thin structural sightlines.",
    approach: "We used marine-grade shuttered concrete with deeply recessed glass pocket doors that slide entirely away into hidden wall cavities during temperate months.",
    pullQuote: "“Concrete when treated with respect carries the tactile honesty of natural cliff stone.”",
    materialPalette: [
      {
        name: "Board-Formed Concrete",
        description: "Textured tactile wall surfaces carrying subtle wood grain impressions.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Black Basalt Stone",
        description: "Flamed volcanic stone for wet terraces and pool coping.",
        image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800"
      }
    ],
    process: [
      {
        phase: "Concept",
        title: "Monsoon Wind Protection",
        description: "Orienting solid concrete monoliths against prevailing south-west ocean gales."
      },
      {
        phase: "Planning",
        title: "Pocket Door Integration",
        description: "Engineering double-track sliding glass walls that disappear into insulated concrete niches."
      },
      {
        phase: "Detailing",
        title: "Marine-Grade Waterproofing",
        description: "Specifying crystalline concrete admixtures to resist coastal salt corrosion."
      },
      {
        phase: "Execution",
        title: "Monolithic Concrete Pour",
        description: "Supervising continuous shuttered concrete pours for seamless structural walls."
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1600",
        caption: "Main concrete facade with floating entry walkway.",
        aspect: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=85&w=1200",
        caption: "Living room facing private coconut grove.",
        aspect: "portrait"
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
    location: "Shimla, Himachal Pradesh",
    year: "2022",
    area: "5,400 sq. ft.",
    scope: "Interior Architecture & Custom Furniture",
    heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=85&w=2400",
    shortDescription: "A hillside winter residence crafted with pine timbers, granite fireplaces, and warm shearling furnishings.",
    poeticDescription: "High in the cedar ridges of Shimla, this home provides a warm cocoon against winter snowfall, centered around a 20-foot granite hearth.",
    challenge: "Integrating contemporary luxury thermal systems within a historic timber structural envelope.",
    approach: "Radiant floor heating combined with triple-glazed glass windows preserves heat while maintaining expansive mountain vistas.",
    pullQuote: "“A winter sanctuary should gather warmth around fire, wood, and shadow.”",
    materialPalette: [
      {
        name: "Shimla Granite",
        description: "Coarsely textured gray granite block walls.",
        image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800"
      }
    ],
    process: [
      {
        phase: "Concept",
        title: "Thermal Comfort Modeling",
        description: "Calculating winter solar gain to position double-height south-facing window walls."
      },
      {
        phase: "Planning",
        title: "Granite Hearth Core",
        description: "Designing a central masonry chimney stack that acts as a heat radiator throughout the house."
      },
      {
        phase: "Detailing",
        title: "Timber Insulated Joinery",
        description: "Custom tongue-and-groove pine wall panels lined with high-density eco insulation."
      },
      {
        phase: "Execution",
        title: "Alpine Timber Construction",
        description: "Assembling heavy timber beams during dry autumn months prior to winter snows."
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=85&w=1600",
        caption: "Grand hearth room with floor-to-ceiling mountain glazing.",
        aspect: "wide"
      }
    ],
    featured: false
  },
  {
    id: "studio-aaroh-headquarters",
    title: "AAROH Studio Atelier",
    tagline: "Our experimental design lab and creative sanctuary in Jaipur.",
    category: "Commercial",
    typology: "Design Studio & Material Library",
    location: "Jaipur, Rajasthan",
    year: "2023",
    area: "4,500 sq. ft.",
    scope: "Architecture, Interiors & Material Library",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=85&w=2400",
    shortDescription: "An open, light-filled architectural workshop housed in a repurposed industrial printing studio.",
    poeticDescription: "A place where material research meets spatial design. High north-facing skylights illuminate natural stone samples and prototype models.",
    challenge: "Transforming an enclosed warehouse into a light-flooded collaborative studio space.",
    approach: "Stripping away interior partition walls to reveal historic iron columns and installing a central sunken material library garden.",
    pullQuote: "“Our studio is an ongoing experiment in tactile light and material exploration.”",
    materialPalette: [
      {
        name: "Raw Steel & Glass",
        description: "Industrial steel framed pivot glass doors.",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800"
      }
    ],
    process: [
      {
        phase: "Concept",
        title: "Daylight Aperture Optimization",
        description: "Opening high north-facing clerestory monitors to provide steady glare-free light."
      },
      {
        phase: "Planning",
        title: "Sunken Garden Library",
        description: "Excavating the central floor bay to house a sunken stone and textile sample vault."
      },
      {
        phase: "Detailing",
        title: "Industrial Steel Pivot Doors",
        description: "Fabricating slim 10-foot steel-framed pivot doors for workshop division."
      },
      {
        phase: "Execution",
        title: "Industrial Reuse Handover",
        description: "Restoring exposed brick walls and installing custom oak workbench tables."
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=85&w=1600",
        caption: "Design team collaboration hall with custom oak desk blocks.",
        aspect: "wide"
      }
    ],
    featured: false
  },
  {
    id: "tales-of-terracotta",
    title: "Tales of Terracotta",
    tagline: "Earth-toned heritage boutique hotel in the Blue City.",
    category: "Hospitality",
    typology: "Heritage Haveli Boutique Hotel",
    location: "Jodhpur, Rajasthan",
    year: "2023",
    area: "11,000 sq. ft.",
    scope: "Adaptive Reuse, Interiors & FF&E",
    heroImage: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=85&w=2400",
    shortDescription: "A restored 18th-century merchant haveli transformed into an 8-room luxury boutique destination.",
    poeticDescription: "Warm terracotta clay tiles meet indigo lime washes. A quiet sanctuary tucked within Jodhpur's vibrant labyrinth corridors.",
    challenge: "Preserving delicate heritage frescoes while adding modern plumbing, HVAC, and luxury bathroom suites.",
    approach: "Building independent service cores within existing thick stone walls, ensuring no structural damage to historical artwork.",
    pullQuote: "“Preservation is not about freezing history — it is about enabling historic walls to converse with contemporary life.”",
    materialPalette: [
      {
        name: "Handmade Terracotta Tiles",
        description: "Sun-baked earth tiles from local potter guilds.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
      }
    ],
    process: [
      {
        phase: "Concept",
        title: "Fresco & Masonry Audit",
        description: "Documenting 18th-century wall paintings and identifying structural stone cracks."
      },
      {
        phase: "Planning",
        title: "Hidden Service Core Routing",
        description: "Routing HVAC ducts and sanitary pipes through non-decorative chimney shafts."
      },
      {
        phase: "Detailing",
        title: "Terracotta & Indigo Finishes",
        description: "Testing natural indigo lime washes and hand-pressed clay floor pavers."
      },
      {
        phase: "Execution",
        title: "Heritage Conservation Execution",
        description: "Restoring historic courtyards and fitting handcrafted teak brass furniture."
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=85&w=1600",
        caption: "Terracotta terrace overlooking Mehrangarh Fort.",
        aspect: "wide"
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
    location: "Mumbai, Maharashtra",
    year: "2024",
    area: "5,100 sq. ft.",
    scope: "Interior Architecture & Art Curation",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=85&w=2400",
    shortDescription: "A high-floor sky residence focusing on tactile materiality, minimalist bronze details, and floor-to-ceiling sea horizon views.",
    poeticDescription: "Suspended above the coastal energy of Mumbai, this penthouse is an exercise in quiet restraint. Soft grey silk carpets cushion footsteps against hand-honed travertine marble floors.",
    challenge: "Creating a sense of serene calm and spatial privacy inside a high-rise urban tower.",
    approach: "Designing acoustic wooden wall claddings and motorized linen scrims that buffer external noise and filter sunlight.",
    pullQuote: "“Restraint in high-rise living creates a sanctuary where sky and horizon become part of the interior fabric.”",
    materialPalette: [
      {
        name: "Silver Travertine",
        description: "Italian silver travertine slabs polished to a satin sheen.",
        image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800"
      }
    ],
    process: [
      {
        phase: "Concept",
        title: "Acoustic Noise Buffering",
        description: "Acoustic simulations to isolate urban noise using multi-layered wall assemblies."
      },
      {
        phase: "Planning",
        title: "Open Horizon Sightlines",
        description: "Removing interior non-structural partitions to create an unbroken 270-degree ocean view."
      },
      {
        phase: "Detailing",
        title: "Bronze Accent Millwork",
        description: "Detaining thin-profile bronze door trims and concealed stone storage doors."
      },
      {
        phase: "Execution",
        title: "High-Rise Fit-out Handover",
        description: "Installing large-format silver travertine slabs and curated contemporary fine art."
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=85&w=1600",
        caption: "Monolithic lounge framing panoramic Arabian ocean sunsets.",
        aspect: "wide"
      }
    ],
    featured: false
  }
];
