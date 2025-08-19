
export type NavbarProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  toggleTheme: () => void;
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  heroRef: React.RefObject<HTMLElement>;
  aboutRef: React.RefObject<HTMLElement>;
  skillsRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
};

export interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
  color: string;
}

export interface SkillsSectionProps {
  skills?: Skill[];
}

export interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  live: string
}
export interface ProjectsSectionProps {
  projects: Project[];
}