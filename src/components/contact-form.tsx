"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: ""
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormState({ status: "loading", message: "Sending message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Something went wrong.");
      }

      form.reset();
      setFormState({
        status: "success",
        message: data.message ?? "Message sent successfully."
      });
    } catch (error) {
      setFormState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send the message right now."
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-semibold">
          Name
        </label>
        <input
          id="name"
          name="name"
          minLength={2}
          required
          placeholder="Your name"
          className="min-h-12 rounded-md border border-[color:var(--border)] bg-[color:var(--background)] px-4 text-sm outline-none transition placeholder:text-slate-500 focus:border-sky-300"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-semibold">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="text"
          inputMode="email"
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          required
          placeholder="you@example.com"
          className="min-h-12 rounded-md border border-[color:var(--border)] bg-[color:var(--background)] px-4 text-sm outline-none transition placeholder:text-slate-500 focus:border-sky-300"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          minLength={10}
          required
          placeholder="Tell me about the project or opportunity."
          rows={5}
          className="resize-none rounded-md border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-3 text-sm outline-none transition placeholder:text-slate-500 focus:border-sky-300"
        />
      </div>
      <button
        type="submit"
        disabled={formState.status === "loading"}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send size={17} />
        {formState.status === "loading" ? "Sending..." : "Send Message"}
      </button>
      {formState.message ? (
        <p
          role="status"
          className={
            formState.status === "error"
              ? "text-sm text-red-400"
              : "text-sm text-emerald-400"
          }
        >
          {formState.message}
        </p>
      ) : null}
    </form>
  );
}
