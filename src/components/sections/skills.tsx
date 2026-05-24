import { SectionHeading } from "@/components/ui/section-heading";
import { MotionDiv, MotionSection } from "@/components/motion";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <MotionSection id="skills" className="border-y border-[color:var(--border)] bg-[color:var(--card)]/35 py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Skills" title="Tools for backend delivery">
          A focused stack for building APIs, data models, authentication flows,
          and service foundations that are clear to maintain.
        </SectionHeading>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {skillGroups.map((group, index) => (
            <MotionDiv
              key={group.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-md border border-[color:var(--border)] bg-[color:var(--card)] p-5"
            >
              <div className="mb-5 grid size-11 place-items-center rounded-md bg-blue-600/15 text-sky-300">
                <group.icon size={20} />
              </div>
              <h3 className="font-semibold">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-[color:var(--border)] px-2.5 py-1.5 text-xs font-semibold text-[color:var(--muted)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
