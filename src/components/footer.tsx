import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--border)] py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-bold">{profile.name}</p>
          <p className="text-sm text-[color:var(--muted)]">
            {profile.role} · © {year}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-10 place-items-center rounded-md border border-[color:var(--border)] transition hover:border-sky-300/60"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid size-10 place-items-center rounded-md border border-[color:var(--border)] transition hover:border-sky-300/60"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send email"
            className="grid size-10 place-items-center rounded-md border border-[color:var(--border)] transition hover:border-sky-300/60"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
