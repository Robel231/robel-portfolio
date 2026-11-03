export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  tagline: string;
  skills: Skill[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
}

export type ProjectCategory = 'AI & Agents' | 'Full-Stack' | 'Mobile' | 'Open Source' | 'Automation' | 'SEO';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  featured?: boolean;
  metric?: string;
  liveLink?: string;
  repoLink?: string;
  imageUrl?: string;
  /** Shown on a featured card without a live link, e.g. its status. */
  note?: string;
  gradient?: string;
}

export type Lang = 'en' | 'am';

/** What every route needs for its <head>, sitemap entry and JSON-LD. */
export interface PageMeta {
  path: string;
  lang: Lang;
  title: string;
  description: string;
  keywords: string;
  /** ISO date: sitemap lastmod and JSON-LD dateModified. */
  updated: string;
}

export interface HomeRoute extends PageMeta {
  kind: 'home';
}

export interface PageSection<T> {
  eyebrow: string;
  heading: string;
  items: T[];
}

/** A landing page rendered by ServicePage: one service, or the Amharic overview. */
export interface PageContent extends PageMeta {
  kind: 'service' | 'profile';
  /** Short name for breadcrumbs, cards and the schema.org Service. */
  name: string;
  icon: 'invoice' | 'ai' | 'apps' | 'seo' | 'profile';
  /** One line for the card on the home page. */
  summary: string;
  serviceType?: string;
  eyebrow: string;
  h1: string;
  /** Answers the page's question in its first paragraph, the part search snippets and AI answers quote. */
  lead: string;
  highlights: string[];
  offer: PageSection<{ title: string; body: string; link?: string }>;
  proof: PageSection<{ title: string; body: string; metric?: string; link?: string }>;
  steps: PageSection<{ title: string; body: string }>;
  context: PageSection<string>;
  faq: PageSection<{ q: string; a: string }>;
  cta?: { heading: string; body: string };
}

export type Route = HomeRoute | PageContent;
