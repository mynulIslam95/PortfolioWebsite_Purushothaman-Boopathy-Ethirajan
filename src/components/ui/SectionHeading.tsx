import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  right,
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  right?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div>
        {eyebrow ? (
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-mutedForeground">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mutedForeground">
            {description}
          </p>
        ) : null}
      </div>
      {right}
    </div>
  );
}

