import { Github, Linkedin, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/lib/data";

export function Contact() {
  const links = [
    { label: "GitHub", href: profile.github, icon: Github },
    { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
    { label: "Email", href: `mailto:${profile.email}`, icon: Mail }
  ];

  return (
    <MotionSection id="contact" className="section-shell py-24">
      <SectionHeading eyebrow="Contact" title="Let’s talk backend systems">
        Reach out for collaboration, internship opportunities, project feedback,
        or backend engineering discussions.
      </SectionHeading>

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-md border border-[color:var(--border)] bg-[color:var(--card)] p-6">
          <h3 className="text-xl font-bold">Connect</h3>
          <p className="mt-3 leading-7 text-[color:var(--muted)]">
            I’m focused on building reliable backend services and learning how
            production-grade teams design, ship, and maintain scalable systems.
          </p>
          <div className="mt-8 grid gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noreferrer"}
                className="flex min-h-12 items-center gap-3 rounded-md border border-[color:var(--border)] px-4 text-sm font-semibold transition hover:border-sky-300/60"
              >
                <link.icon size={18} className="text-sky-300" />
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-[color:var(--border)] bg-[color:var(--card)] p-6">
          <ContactForm />
        </div>
      </div>
    </MotionSection>
  );
}
