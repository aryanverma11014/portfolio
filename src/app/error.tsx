"use client";

import { RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="grid min-h-screen place-items-center bg-[color:var(--background)] px-6 text-[color:var(--foreground)]">
      <section className="w-full max-w-lg rounded-md border border-[color:var(--border)] bg-[color:var(--card)] p-8 text-center shadow-2xl shadow-blue-950/20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">
          Something went wrong
        </p>
        <h1 className="mt-4 text-3xl font-black tracking-tight">
          The page hit an unexpected error.
        </h1>
        <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
          Please retry the page. If this keeps happening, check the browser
          console or deployment logs for the error digest.
        </p>
        {error.digest ? (
          <p className="mt-4 rounded-md border border-[color:var(--border)] px-3 py-2 font-mono text-xs text-[color:var(--muted)]">
            {error.digest}
          </p>
        ) : null}
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          <RefreshCw size={17} />
          Try Again
        </button>
      </section>
    </main>
  );
}
