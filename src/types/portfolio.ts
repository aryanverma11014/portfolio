import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
  icon: LucideIcon;
};

export type Project = {
  title: string;
  description: string;
  outcome: string;
  status: string;
  features: string[];
  tech: string[];
  liveUrl?: string;
  readmeUrl?: string;
  githubUrl: string;
};

export type TimelineItem = {
  title: string;
  description: string;
};
