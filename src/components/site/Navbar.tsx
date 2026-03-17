"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { navLinks } from "@/components/site/navLinks";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-semibold tracking-tight hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring/30"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card text-xs font-semibold shadow-sm">
              PB
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-ring/30",
                  active
                    ? "bg-muted text-foreground"
                    : "text-mutedForeground hover:bg-muted hover:text-foreground"
                )}
              >
                {l.label}
              </Link>
            );
          })}
          <ThemeToggle className="ml-2" />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex items-center justify-center rounded-md border border-border bg-card px-2.5 py-2 text-sm shadow-sm transition hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring/30"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "md:hidden",
          open ? "border-t border-border" : "hidden"
        )}
      >
        <Container className="py-3">
          <div className="flex flex-col">
            {navLinks.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-ring/30",
                    active
                      ? "bg-muted text-foreground"
                      : "text-mutedForeground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </Container>
      </div>
    </header>
  );
}

