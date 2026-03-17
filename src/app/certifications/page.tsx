import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardBody } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Certifications & Education",
  description:
    "Professional certifications and computer science education supporting enterprise delivery and leadership."
};

export default function CertificationsPage() {
  return (
    <Container className="py-14 sm:py-16">
      <FadeIn>
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          description="Selected certifications supporting platform foundations and delivery excellence."
        />
      </FadeIn>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profile.certifications.map((c) => (
          <FadeIn key={c.name}>
            <Card className="h-full transition hover:-translate-y-0.5 hover:shadow-lg">
              <CardBody>
                <div className="text-sm font-semibold">{c.name}</div>
                <div className="mt-2 text-sm text-mutedForeground">
                  {c.issuer}
                </div>
                <div className="mt-4 flex items-center justify-between gap-4 text-xs text-mutedForeground">
                  <span>Issued {c.issued}</span>
                  {c.credentialId ? (
                    <span className="rounded-md border border-border bg-background px-2 py-1">
                      ID {c.credentialId}
                    </span>
                  ) : null}
                </div>
              </CardBody>
            </Card>
          </FadeIn>
        ))}
      </div>

      <div className="mt-16" id="education">
        <FadeIn>
          <SectionHeading
            eyebrow="Education"
            title="Education"
            description="Computer science background with awards and teaching experience."
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {profile.education.map((e) => (
            <FadeIn key={e.school}>
              <Card className="h-full">
                <CardBody>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="text-sm font-semibold">{e.school}</div>
                      <div className="mt-1 text-sm text-mutedForeground">
                        {e.degree}
                      </div>
                      {e.gpa ? (
                        <div className="mt-3 text-sm text-mutedForeground">
                          GPA: {e.gpa}
                        </div>
                      ) : null}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-mutedForeground">
                      {e.duration}
                    </div>
                  </div>

                  {e.achievements?.length ? (
                    <div className="mt-5">
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-mutedForeground">
                        Highlights
                      </div>
                      <ul className="mt-3 space-y-2 text-sm text-mutedForeground">
                        {e.achievements.map((a) => (
                          <li key={a} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-mutedForeground/60" />
                            <span className="leading-relaxed">{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </CardBody>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </Container>
  );
}

