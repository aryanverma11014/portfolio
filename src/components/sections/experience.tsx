import { MotionDiv, MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { learningTimeline } from "@/lib/data";

export function Experience() {
  return (
    <MotionSection className="section-shell py-24">
      <SectionHeading eyebrow="Experience" title="Learning & Development Journey">
        A practical path from programming foundations to backend architecture,
        real projects, and production systems thinking.
      </SectionHeading>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {learningTimeline.map((item, index) => (
          <MotionDiv
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className="rounded-md border border-[color:var(--border)] bg-[color:var(--card)] p-5"
          >
            <span className="text-sm font-bold text-sky-400">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
              {item.description}
            </p>
          </MotionDiv>
        ))}
      </div>
    </MotionSection>
  );
}
