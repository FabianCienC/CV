export interface Link {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  shortName: string;
  headline: string;
  location: string;
  summary: string[];
  links: Link[];
}

export interface Fact {
  label: string;
  /** Numeric values are counted up from 0 the first time they are shown. */
  value: string | number;
  decimals?: number;
  suffix?: string;
}

export interface Role {
  title: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
  tags: string[];
}

export interface Publication {
  title: string;
  authors?: string;
  venue: string;
  year: number;
  details?: string;
  url?: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Project {
  name: string;
  kind: string;
  description: string;
  tags: string[];
  url?: string;
}

export interface Degree {
  title: string;
  institution: string;
  location: string;
  period: string;
  notes: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
}

export interface CV {
  profile: Profile;
  facts: Fact[];
  experience: Role[];
  researchStatement: string;
  publications: Publication[];
  skills: SkillGroup[];
  projects: Project[];
  education: Degree[];
  certifications: Certification[];
  awards: string[];
  languages: Language[];
}

export interface Language {
  name: string;
  level: string;
}
