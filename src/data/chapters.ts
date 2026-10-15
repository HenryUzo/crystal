export type SceneKind = "architecture" | "objects" | "opportunity";

export type StoryChapter = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  external?: boolean;
  scene: SceneKind;
  /** Replace with an approved image or video poster path (e.g. "/media/studio-coka.jpg"). */
  imageSrc?: string;
  imageAlt: string;
};

export const chapters: StoryChapter[] = [
  {
    id: "architecture",
    number: "01",
    eyebrow: "Architecture / Interiors",
    title: "Spaces that respond to life.",
    description:
      "Through Studio COKA, Crystal's work explores thoughtful, climate-responsive architecture, interiors and construction.",
    ctaLabel: "Discover Studio COKA",
    ctaHref: "https://www.studiocoka.com",
    external: true,
    scene: "architecture",
    imageAlt: "Approved architectural project photograph representing Studio COKA",
  },
  {
    id: "objects",
    number: "02",
    eyebrow: "Furniture / Product Design",
    title: "Objects made with intention.",
    description:
      "ELEvated brings function and contemporary product thinking together, drawing on African contexts, materials and ideas.",
    ctaLabel: "Explore the ecosystem",
    ctaHref: "#ecosystem",
    scene: "objects",
    imageAlt: "Approved ELEvated furniture or product photograph",
  },
  {
    id: "opportunity",
    number: "03",
    eyebrow: "Education / Impact",
    title: "Ideas that open new doors.",
    description:
      "Beyond the built environment, her work connects professional learning, educational opportunity and youth development.",
    ctaLabel: "Meet the initiatives",
    ctaHref: "#ecosystem",
    scene: "opportunity",
    imageAlt: "Approved photograph of a learning or youth-development initiative",
  },
];

