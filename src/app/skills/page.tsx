import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardBody } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Leadership, backend engineering, architecture, cloud delivery and platform experience."
};

export default function SkillsPage() {
  return (
    <Container className="py-14 sm:py-16">
      <FadeIn>
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills"
          description="Grouped for clarity—leadership, enterprise backend engineering, architecture, and delivery execution."
        />
      </FadeIn>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {profile.skills.map((g) => (
          <FadeIn key={g.title}>
            <Card className="h-full">
              <CardBody>
                <div className="flex items-baseline justify-between gap-4">
                  <div className="text-sm font-semibold">{g.title}</div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-mutedForeground transition hover:bg-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </CardBody>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
}

