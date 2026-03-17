import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardBody } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect for engineering leadership, architecture and enterprise backend conversations."
};

export default function ContactPage() {
  return (
    <Container className="py-14 sm:py-16">
      <FadeIn>
        <SectionHeading
          eyebrow="Contact"
          title={profile.contact.heading}
          description={profile.contact.text}
        />
      </FadeIn>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <FadeIn className="lg:col-span-2">
          <Card className="h-full">
            <CardBody>
              <div className="text-sm font-semibold tracking-tight">
                Reach out
              </div>
              <p className="mt-2 text-sm leading-relaxed text-mutedForeground">
                If you’re hiring or looking to collaborate on backend platforms,
                architecture, delivery leadership or production excellence, I’m
                happy to connect.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {profile.contact.buttons.map((b) => (
                  <ButtonLink
                    key={b.label}
                    href={b.href}
                    variant={b.label === "LinkedIn" ? "primary" : "secondary"}
                  >
                    {b.label}
                  </ButtonLink>
                ))}
              </div>

              <div className="mt-6 rounded-lg border border-border bg-background p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-mutedForeground">
                  Location
                </div>
                <div className="mt-2 text-sm">{profile.contact.location}</div>
              </div>
            </CardBody>
          </Card>
        </FadeIn>

        <FadeIn>
          <Card className="h-full">
            <CardBody>
              <div className="text-sm font-semibold tracking-tight">
                Resume
              </div>
              <p className="mt-2 text-sm leading-relaxed text-mutedForeground">
                A downloadable resume link is included as a placeholder.
                Replace the file in <span className="font-medium">/public</span>{" "}
                when ready.
              </p>
              <div className="mt-6">
                <ButtonLink href="/resume.pdf" variant="secondary">
                  Download resume
                </ButtonLink>
              </div>
            </CardBody>
          </Card>
        </FadeIn>
      </div>
    </Container>
  );
}

