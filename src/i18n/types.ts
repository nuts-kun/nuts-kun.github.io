export type Locale = "ja" | "en";

export interface LinkRef {
  label: string;
  href: string;
}

export interface AffiliationItem {
  role: string;
  org: string;
  orgUrl?: string;
}

export interface ResearchItem {
  topic: string;
  detail: string;
}

export type PublicationCategory = "journal" | "international" | "domestic";

export interface PublicationItem {
  category: PublicationCategory;
  year?: number;
  authors: string;
  title: string;
  venue: string;
  links?: LinkRef[];
  note?: string;
}

export interface TimelineItem {
  period: string;
  title?: string;
  org: string;
  orgUrl?: string;
  detail?: string;
}

export interface DatedItem {
  date: string;
  title: string;
  detail?: string;
  href?: string;
}

export interface Content {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    education: string;
    research: string;
    publications: string;
    experience: string;
    awards: string;
  };
  hero: {
    name: string;
    nameSub: string;
    nickname?: string;
    affiliations: AffiliationItem[];
    bio: string;
  };
  research: {
    heading: string;
    items: ResearchItem[];
  };
  publications: {
    heading: string;
    intro?: string;
    categoryLabels: Record<PublicationCategory, string>;
    items: PublicationItem[];
  };
  education: {
    heading: string;
    items: TimelineItem[];
  };
  experience: {
    heading: string;
    items: TimelineItem[];
  };
  awards: {
    heading: string;
    awardsLabel: string;
    scholarshipsLabel: string;
    awards: DatedItem[];
    scholarships: DatedItem[];
  };
  footer: {
    copyright: string;
    emailWorkLabel: string;
    emailWork: string;
    emailUnivLabel: string;
    emailUniv: string;
    emailPersonalLabel: string;
    emailPersonal: string;
    scholar: string;
    twitter: string;
  };
  ui: {
    langToggle: string;
    langToggleAria: string;
    themeToggleAria: string;
    skipToContent: string;
  };
}
