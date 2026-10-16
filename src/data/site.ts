/**
 * Content follows the Crystal Kizor assessment brief plus verified public profiles.
 * All photographs are temporary Unsplash editorial references, NOT Crystal's work.
 * Replace these URLs with approved first-party assets before publication.
 */
const unsplash = (id: string, width = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const images = {
  hero: {
    src: unsplash("photo-1487958449943-2429e8be8625", 2400),
    alt: "Editorial photograph of contemporary white architecture; placeholder imagery",
  },
  galleryArchitecture: {
    src: unsplash("photo-1511818966892-d7d671e672a2", 1000),
    alt: "Contemporary architectural forms; editorial placeholder, not a Crystal Kizor project",
  },
  galleryInterior: {
    src: unsplash("photo-1600607687939-ce8a6c25118c", 1200),
    alt: "Warm modern interior; editorial placeholder, not a Studio COKA project",
  },
  galleryDetail: {
    src: unsplash("photo-1600566753190-17f0baa2a6c3", 760),
    alt: "Interior design detail; editorial placeholder, not an ELEvated product",
  },
  feature: {
    src: unsplash("photo-1600607687920-4e2a09cf159d", 1600),
    alt: "Contemporary interior space, reference photograph only; replace with approved Studio COKA work",
  },
} as const;

export const content = {
  /** YouTube video shown as a muted, looping decorative hero background. */
  heroYouTubeId: "d44LY7rv_4k" as string | null,
  /** Optional local fallback if YouTube is disabled or replaced later. */
  heroVideoSrc: null as string | null,
  about:
    "Crystal Kizor works across architecture, interior design, furniture, education and social initiatives. Through ventures such as Studio COKA, ELEvated and The Effective Architect, she connects the built environment with thoughtful design and professional growth. Her wider work creates space for learning, opportunity and purposeful conversations.",
  linkedin: "https://ng.linkedin.com/in/crystal-kizor",
  ideasPost: "https://www.linkedin.com/posts/crystal-kizor_what-will-our-built-environment-look-like-activity-7421847702092546048-78e4",
};

export const initiatives: Array<{
  name: string;
  category: string;
  description: string;
  href?: string;
}> = [
  {
    name: "Studio COKA",
    category: "Architecture & interiors",
    description: "Climate-responsive architecture, interior design and construction.",
    href: "https://www.studiocoka.com",
  },
  {
    name: "ELEvated",
    category: "Furniture & products",
    description: "Contemporary objects rooted in African ideas, materials and context.",
  },
  {
    name: "The Effective Architect",
    category: "Education & media",
    description: "Professional learning and ideas for architects and the built environment.",
  },
  {
    name: "AKO Alliance",
    category: "Social impact",
    description: "Creating educational access and opportunities for young people.",
  },
  {
    name: "Alive and Free",
    category: "Faith & youth",
    description: "A Christian youth movement centred on truth, identity, healing and purpose.",
  },
];
