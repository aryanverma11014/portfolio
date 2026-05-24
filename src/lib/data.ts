import {
  Braces,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Layers3,
  Server,
  ShieldCheck,
  TerminalSquare,
  Wrench
} from "lucide-react";
import type { NavItem, Project, SkillGroup, TimelineItem } from "@/types/portfolio";

export const profile = {
  name: "Aryan Verma",
  role: "Backend Developer",
  tagline: "Building scalable APIs, backend systems, and modern web applications.",
  location: "India",
  github: "https://github.com/aryanverma11014",
  linkedin: "https://www.linkedin.com/in/aryan-verma/",
  email: "aryan.verma@example.com"
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" }
];

export const focusAreas = [
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Redis",
  "Authentication Systems",
  "System Design"
];

export const summaryStats = [
  { label: "Experience Level", value: "Aspiring", icon: GraduationCap },
  { label: "Learning Journey", value: "Backend First", icon: Server },
  { label: "Current Goals", value: "Production Systems", icon: Layers3 }
];

export const learningTimeline: TimelineItem[] = [
  {
    title: "Started Programming",
    description: "Built a foundation in programming logic, tooling, and web basics."
  },
  {
    title: "Learning JavaScript",
    description: "Practiced asynchronous code, APIs, modules, and browser fundamentals."
  },
  {
    title: "Learning TypeScript",
    description: "Added type-safe patterns for scalable backend and full-stack projects."
  },
  {
    title: "Backend Development",
    description: "Focused on Express.js, REST APIs, validation, middleware, and services."
  },
  {
    title: "Database Systems",
    description: "Worked with MongoDB and SQL concepts for data modeling and persistence."
  },
  {
    title: "Building Real Projects",
    description: "Created API projects with authentication, CRUD flows, and secure patterns."
  },
  {
    title: "Learning System Design",
    description: "Studying caching, queues, scalability, and production architecture choices."
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "SQL"],
    icon: Code2
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
    icon: TerminalSquare
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
    icon: Database
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
    icon: GitBranch
  },
  {
    title: "Currently Learning",
    skills: ["Redis", "Docker", "System Design"],
    icon: Wrench
  }
];

export const projects: Project[] = [
  {
    title: "Task Manager API",
    description:
      "Production-ready task management backend featuring JWT authentication, CRUD operations, role-based access, validation, and MongoDB integration.",
    features: ["JWT auth", "Role-based access", "Validation", "MongoDB models"],
    tech: ["Node.js", "Express", "MongoDB", "JWT", "TypeScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/aryanverma11014"
  },
  {
    title: "Authentication System",
    description:
      "Complete authentication service supporting access tokens, refresh tokens, password hashing, authorization, and secure API architecture.",
    features: ["Refresh tokens", "Password hashing", "Authorization", "Secure routes"],
    tech: ["Node.js", "TypeScript", "JWT", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/aryanverma11014"
  },
  {
    title: "Expense Tracker",
    description:
      "Backend API for managing expenses, categories, analytics, and user accounts with secure authentication.",
    features: ["Expense APIs", "Categories", "Analytics", "User accounts"],
    tech: ["Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/aryanverma11014"
  }
];

export const githubHighlights = [
  { label: "GitHub Contributions", value: "Building consistently", icon: Braces },
  { label: "Total Repositories", value: "Growing project base", icon: Layers3 },
  { label: "Most Used Languages", value: "TypeScript, JavaScript", icon: ShieldCheck }
];
