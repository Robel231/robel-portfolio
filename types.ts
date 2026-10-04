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
  gradient?: string;
}
