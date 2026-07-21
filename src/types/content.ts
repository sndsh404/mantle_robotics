export interface NavLink {
  label: string;
  href: string;
}

export interface StatCell {
  label: string;
  value: string;
  caption: string;
}

export interface StatCard {
  label: string;
  value: string;
  caption: string;
  inverted?: boolean;
}

export interface PlatformPart {
  index: string;
  slug: string;
  title: string;
  body: string;
  bullets: string[];
  panelTheme: "blueprint" | "peach";
}

export interface ProductCard {
  title: string;
  whoPays: string;
  pricingShape: string;
  timeline: string;
  description: string;
  accent?: "royal" | "ember" | "green" | "yellow";
}

export interface RoadmapPhase {
  phase: string;
  window: string;
  title: string;
  body: string;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}
