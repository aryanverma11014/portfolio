import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MotionDiv, MotionSection } from "@/components/motion";
import { focusAreas, profile } from "@/lib/data";

export function Hero() {
  return (
    <MotionSection
      id="home"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative isolate overflow-hidden pt-28 sm:pt-32"
    >
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-sky-300/40 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      </div>

      <div className="section-shell grid min-h-[calc(100vh-64px)] items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-2 text-sm text-[color:var(--muted)]">
            <MapPin size={15} className="text-sky-400" />
            {profile.location} - Backend systems in progress
          </div>

          <h1 className="text-balance text-5xl font-black tracking-tight text-[color:var(--foreground)] sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-2xl font-semibold text-sky-400 sm:text-3xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
            I build scalable backend applications using TypeScript, Node.js,
            MongoDB, SQL, and modern backend technologies.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects">
              View Projects <ArrowDown size={17} />
            </Button>
            <Button href="/resume.pdf" variant="secondary" download>
              Download Resume <Download size={17} />
            </Button>
            <Button href="#contact" variant="ghost">
              Contact Me <Mail size={17} />
            </Button>
          </div>

          <div className="mt-9 flex flex-wrap gap-2">
            {focusAreas.map((item) => (
              <span
                key={item}
                className="rounded-md border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-2 text-xs font-semibold text-[color:var(--muted)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <MotionDiv
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto aspect-square w-full max-w-[430px]"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-600 via-sky-400 to-slate-900 p-px shadow-2xl shadow-blue-950/40">
            <div className="flex h-full flex-col justify-between rounded-[calc(2rem-1px)] bg-[color:var(--card)] p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[color:var(--muted)]">
                  Profile
                </span>
                <span className="rounded-md bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Available
                </span>
              </div>
              <div className="grid place-items-center">
                <div className="relative size-44 overflow-hidden rounded-full border border-sky-300/40 bg-blue-600/15 shadow-xl shadow-blue-950/30">
                  <Image
                    src="/assets/aryan-profile.webp"
                    alt="Aryan Verma profile photo"
                    width={176}
                    height={176}
                    priority
                    className="size-full object-cover object-center"
                  />
                </div>
              </div>
              <div>
                <p className="font-mono text-sm text-sky-300">api/status</p>
                <p className="mt-2 text-2xl font-bold">Backend Developer</p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                  Designing APIs, authentication flows, databases, and reliable
                  service architecture.
                </p>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
