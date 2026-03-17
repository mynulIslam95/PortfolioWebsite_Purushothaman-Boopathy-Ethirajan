import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Card({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card shadow-soft",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardBody({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("p-5 sm:p-6", className)}>{children}</div>;
}

