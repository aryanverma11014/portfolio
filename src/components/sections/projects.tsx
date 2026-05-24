import { ExternalLink, Github } from "lucide-react";
import { MotionDiv, MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <MotionSection id="projects" className="section-shell py-24">
      <SectionHeading eyebrow="Projects" title="Backend projects with practical scope">
        API-first projects centered on authentication, persistence, validation,
        authorization, and clean service architecture.
      </SectionHeading>

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <MotionDiv
            key={project.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="flex min-h-full flex-col overflow-hidden rounded-md border border-[color:var(--border)] bg-[color:var(--card)]"
          >
            <div className="grid aspect-[16/10] place-items-center border-b border-[color:var(--border)] bg-[radial-gradient(circle_at_30%_25%,rgba(56,189,248,0.22),transparent_28%),linear-gradient(135deg,rgba(37,99,235,0.24),rgba(15,23,42,0.88))]">
              <div className="rounded-md border border-sky-300/30 bg-slate-950/40 px-4 py-2 font-mono text-sm text-sky-100">
                {project.title}
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                {project.description}
              </p>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-400">
                  Features
                </p>
                <ul className="mt-3 grid gap-2 text-sm text-[color:var(--muted)]">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-2 size-1.5 rounded-full bg-sky-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-blue-600/15 px-2.5 py-1.5 text-xs font-semibold text-sky-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3 pt-6">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-md border border-[color:var(--border)] text-sm font-semibold transition hover:border-sky-300/60"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={project.liveUrl}
                  className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-md bg-blue-600 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </MotionSection>
  );
}
