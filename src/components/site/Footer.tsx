import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="text-sm font-semibold tracking-tight">
              {profile.name}
            </div>
            <div className="mt-1 text-sm text-mutedForeground">
              {profile.title} · {profile.location}
            </div>
            <div className="mt-3 text-sm">
              <Link
                href="https://www.linkedin.com/in/bepurushoth/"
                className="text-mutedForeground underline-offset-4 hover:text-foreground hover:underline"
              >
                LinkedIn
              </Link>
            </div>
          </div>

          <div className="text-sm text-mutedForeground">
            © {year} {profile.name}. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}

