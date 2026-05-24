import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300",
        variant === "primary" &&
          "bg-blue-600 text-white shadow-lg shadow-blue-950/30 hover:bg-blue-500",
        variant === "secondary" &&
          "border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--foreground)] hover:border-sky-300/60",
        variant === "ghost" &&
          "text-[color:var(--foreground)] hover:bg-white/10",
        className
      )}
      {...props}
    />
  );
}
