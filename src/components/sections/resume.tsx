import { MotionDiv, MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { resumeData } from "@/lib/data";
import { BookOpen, Briefcase, Award } from "lucide-react";

export function Resume() {
  return (
    <MotionSection id="resume" className="section-shell py-24">
      <SectionHeading eyebrow="Resume" title="Education & Experience">
        My professional journey, education, and certifications.
      </SectionHeading>

      <div className="space-y-12">
        {/* Education Section */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-blue-500/10 p-3">
              <BookOpen className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold">Education</h3>
          </div>
          <div className="space-y-4">
            {resumeData.education.map((edu, index) => (
              <MotionDiv
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] p-5"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-white">{edu.degree}</h4>
                    <p className="text-sm text-sky-400">{edu.institution}</p>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                      {edu.description}
                    </p>
                  </div>
                  <span className="whitespace-nowrap text-sm text-[color:var(--muted)]">
                    {edu.year}
                  </span>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-green-500/10 p-3">
              <Briefcase className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold">Experience</h3>
          </div>
          <div className="space-y-4">
            {resumeData.experience.map((exp, index) => (
              <MotionDiv
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] p-5"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-white">{exp.role}</h4>
                    <p className="text-sm text-sky-400">{exp.company}</p>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                      {exp.description}
                    </p>
                  </div>
                  <span className="whitespace-nowrap text-sm text-[color:var(--muted)]">
                    {exp.year}
                  </span>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-purple-500/10 p-3">
              <Award className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold">Certifications</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {resumeData.certifications.map((cert, index) => (
              <MotionDiv
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] p-5"
              >
                <h4 className="font-semibold text-white">{cert.title}</h4>
                <p className="text-sm text-purple-400">{cert.issuer}</p>
                <p className="mt-2 text-xs text-[color:var(--muted)]">{cert.year}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
