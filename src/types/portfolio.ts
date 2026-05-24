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
  features: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
};

export type TimelineItem = {
  title: string;
  description: string;
};
