import { ArrowUpRight, Github } from "lucide-react";
import { MotionDiv, MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { githubHighlights, profile } from "@/lib/data";

export function GitHubSection() {
  return (
    <MotionSection id="github" className="border-y border-[color:var(--border)] bg-[color:var(--card)]/35 py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="GitHub" title="Public learning, projects, and progress">
          A snapshot-style GitHub section prepared for real stats integration
          through GitHub APIs or a profile stats service.
        </SectionHeading>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-md border border-[color:var(--border)] bg-[color:var(--card)] p-6">
            <div className="flex items-center gap-4">
              <div className="grid size-12 place-items-center rounded-md bg-blue-600/15 text-sky-300">
                <Github size={24} />
              </div>
              <div>
                <p className="text-sm text-[color:var(--muted)]">GitHub Profile</p>
                <h3 className="text-xl font-bold">@aryanverma11014</h3>
              </div>
            </div>
            <div className="mt-8 grid gap-4">
              {githubHighlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-md border border-[color:var(--border)] p-4"
                >
                  <div className="grid size-10 place-items-center rounded-md bg-sky-400/10 text-sky-300">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-[color:var(--muted)]">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              View GitHub Profile <ArrowUpRight size={17} />
            </a>
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-md border border-[color:var(--border)] bg-[color:var(--card)] p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-[color:var(--muted)]">Contribution Graph</p>
                <h3 className="font-semibold">Activity preview</h3>
              </div>
              <span className="rounded-md border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--muted)]">
                2026
              </span>
            </div>
            <div className="grid grid-cols-12 gap-2">
              {Array.from({ length: 84 }).map((_, index) => {
                const intensity = index % 11;
                const shades = [
                  "bg-slate-700/35",
                  "bg-sky-950",
                  "bg-sky-900",
                  "bg-blue-700",
                  "bg-sky-400"
                ];
                return (
                  <span
                    key={index}
                    className={`aspect-square rounded-[3px] ${shades[intensity % shades.length]}`}
                    aria-hidden="true"
                  />
                );
              })}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Contributions", "Repositories", "Languages"].map((label, index) => (
                <div key={label} className="rounded-md border border-[color:var(--border)] p-4">
                  <p className="text-2xl font-black text-sky-300">
                    {index === 0 ? "Active" : index === 1 ? "Open" : "TS/JS"}
                  </p>
                  <p className="mt-1 text-sm text-[color:var(--muted)]">{label}</p>
                </div>
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
}
