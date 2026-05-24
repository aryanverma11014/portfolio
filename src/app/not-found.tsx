import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[color:var(--background)] px-6 text-[color:var(--foreground)]">
      <section className="w-full max-w-lg rounded-md border border-[color:var(--border)] bg-[color:var(--card)] p-8 text-center shadow-2xl shadow-blue-950/20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">
          404
        </p>
        <h1 className="mt-4 text-3xl font-black tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
          The page you opened does not exist, but the portfolio is still ready
          to explore.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          <ArrowLeft size={17} />
          Back Home
        </Link>
      </section>
    </main>
  );
}
