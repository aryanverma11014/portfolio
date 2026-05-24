import { SectionHeading } from "@/components/ui/section-heading";
import { MotionDiv, MotionSection } from "@/components/motion";
import { learningTimeline, summaryStats } from "@/lib/data";

export function About() {
  return (
    <MotionSection
      id="about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="section-shell py-24"
    >
      <SectionHeading eyebrow="About" title="Backend-focused and systems-minded">
        I am a backend-focused developer passionate about designing APIs,
        authentication systems, databases, and scalable architectures.
      </SectionHeading>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-md border border-[color:var(--border)] bg-[color:var(--card)] p-6">
          <p className="text-lg leading-8 text-[color:var(--muted)]">
            My goal is to become a Backend Engineer and build scalable,
            production-ready systems. I’m currently sharpening my TypeScript,
            Node.js, Express.js, MongoDB, SQL, Redis, authentication, and system
            design skills through practical backend projects.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {summaryStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="grid size-11 place-items-center rounded-md bg-blue-600/15 text-sky-300">
                  <stat.icon size={20} />
                </div>
                <div>
                  <p className="text-sm text-[color:var(--muted)]">{stat.label}</p>
                  <p className="font-semibold">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-md border border-[color:var(--border)] bg-[color:var(--card)] p-6">
          <div className="absolute bottom-6 left-10 top-8 w-px bg-[color:var(--border)]" />
          <div className="grid gap-6">
            {learningTimeline.map((item, index) => (
              <MotionDiv
                key={item.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="relative pl-12"
              >
                <span className="absolute left-0 top-1 grid size-8 place-items-center rounded-full border border-sky-300/40 bg-[color:var(--card)] text-xs font-bold text-sky-300">
                  {index + 1}
                </span>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[color:var(--muted)]">
                  {item.description}
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
