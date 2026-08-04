export type Lang = "en" | "es";
export type Theme = "dark" | "light";

export interface NavItem {
  key: "experience" | "projects" | "education" | "contact";
  id: string;
}

export interface ExperienceItem {
  name: string;
  role: string;
  period: string;
  url_name?: string;
  url?: string;
  description: string;
  descriptionEn: string;
  tech: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  descriptionEn: string;
  tech: string[];
  url: string;
  code: string | null;
  emoji: string;
}

export interface EducationItem {
  name: string;
  org: string;
  img: string;
  cert: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  cv: string;
  profile_image: string;
  skills: string[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
}

export interface LocalizedExperienceItem extends Omit<ExperienceItem, "descriptionEn"> {
  description: string;
}

export interface LocalizedProjectItem extends Omit<ProjectItem, "descriptionEn"> {
  description: string;
}

export interface PortfolioViewData extends Omit<PortfolioData, "experience" | "projects"> {
  experience: LocalizedExperienceItem[];
  projects: LocalizedProjectItem[];
}

export interface Translations {
  available: string;
  skillsLabel: string;
  aboutSideBar: string;
  aboutMeText: string[];
  nav: {
    experience: string;
    projects: string;
    education: string;
    contact: string;
  };
  sectionLabels: {
    experience: string;
    projects: string;
    education: string;
    about: string;
    contact: string;
  };
  sectionTitles: {
    experience: string;
    projects: string;
    education: string;
    about: string;
    contact: string;
  };
  period: string;
  contactMe: string;
  downloadCV: string;
  clickToDiscover: string;
  preview: string;
  code: string;
  name: string;
  email: string;
  message: string;
  send: string;
  sending: string;
  sentMsg: string;
  errorMsg: string;
  footer: string;
  locationLabel: string;
}

export interface CursorPosition {
  x: number;
  y: number;
}

export interface ContactFormState {
  name: string;
  email: string;
  message: string;
}
