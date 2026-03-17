import Image from "next/image";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export default function HomePage() {
  const featuredExperience = profile.experience.slice(0, 3);
  const coreSkills = profile.skills.slice(0, 3);
  const featuredCerts = profile.certifications.slice(0, 2);
  const featuredEdu = profile.education.slice(0, 1);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-b from-muted to-transparent blur-3xl" />
        </div>
        <Container className="py-14 sm:py-18">
          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr,0.7fr]">
            <FadeIn>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-mutedForeground">
                {profile.title} · {profile.company} · {profile.location}
              </div>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-mutedForeground sm:text-lg">
                {profile.hero.tagline}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href={profile.hero.ctas.primary.href}>
                  {profile.hero.ctas.primary.label}
                </ButtonLink>
                <ButtonLink
                  href={profile.hero.ctas.secondary.href}
                  variant="secondary"
                >
                  {profile.hero.ctas.secondary.label}
                </ButtonLink>
                <ButtonLink
                  href={profile.hero.ctas.resume.href}
                  variant="ghost"
                  className="border border-border"
                >
                  {profile.hero.ctas.resume.label}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                  >
                    <path
                      d="M12 3v10m0 0 4-4m-4 4-4-4M5 21h14"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonLink>
              </div>
            </FadeIn>

            <FadeIn className="lg:justify-self-end">
              <Card className="overflow-hidden">
                <div className="relative aspect-[4/5] w-full max-w-[320px] bg-muted sm:max-w-[360px]">
                  <Image
                    src={profile.hero.profileImage.src}
                    alt={profile.hero.profileImage.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <CardBody className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold tracking-tight">
                      {profile.headline}
                    </div>
                    <div className="mt-1 text-xs text-mutedForeground">
                      {profile.connections}
                    </div>
                  </div>
                  <div className="rounded-md border border-border bg-background px-2.5 py-1.5 text-xs font-semibold text-mutedForeground">
                    Germany
                  </div>
                </CardBody>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="py-14 sm:py-16">
          <FadeIn>
            <SectionHeading
              eyebrow="About"
              title={profile.about.heading}
              description={profile.about.summary}
              right={
                <ButtonLink href="/contact" variant="secondary" size="sm">
                  Start a conversation
                </ButtonLink>
              }
            />
          </FadeIn>
        </Container>
      </section>

      <section className="border-t border-border bg-background">
        <Container className="py-14 sm:py-16">
          <FadeIn>
            <SectionHeading
              eyebrow="Highlights"
              title="What I bring"
              description="A track record of enterprise delivery with leadership, architecture and backend depth."
            />
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profile.highlights.map((h) => (
              <FadeIn key={h.title}>
                <Card className="h-full transition hover:-translate-y-0.5 hover:shadow-lg">
                  <CardBody>
                    <div className="text-sm font-semibold">{h.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-mutedForeground">
                      {h.detail}
                    </p>
                  </CardBody>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="py-14 sm:py-16">
          <FadeIn>
            <SectionHeading
              eyebrow="Experience"
              title="Featured roles"
              description="Recent leadership and backend engineering work."
              right={
                <ButtonLink href="/experience" variant="secondary" size="sm">
                  View full timeline
                </ButtonLink>
              }
            />
          </FadeIn>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {featuredExperience.map((e) => (
              <FadeIn key={`${e.company}-${e.role}`}>
                <Card className="h-full">
                  <CardBody>
                    <div className="text-sm font-semibold tracking-tight">
                      {e.role}
                    </div>
                    <div className="mt-1 text-sm text-mutedForeground">
                      {e.company} · {e.location}
                    </div>
                    <div className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-mutedForeground">
                      {e.duration}
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-mutedForeground">
                      {e.highlights.slice(0, 3).map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-mutedForeground/60" />
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-background">
        <Container className="py-14 sm:py-16">
          <FadeIn>
            <SectionHeading
              eyebrow="Skills"
              title="Core strengths"
              description="A leadership-first profile backed by deep backend and architecture experience."
              right={
                <ButtonLink href="/skills" variant="secondary" size="sm">
                  Explore skills
                </ButtonLink>
              }
            />
          </FadeIn>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {coreSkills.map((g) => (
              <FadeIn key={g.title}>
                <Card className="h-full">
                  <CardBody>
                    <div className="text-sm font-semibold">{g.title}</div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {g.items.slice(0, 10).map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-border bg-background px-3 py-1 text-xs text-mutedForeground"
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
      </section>

      <section className="border-t border-border">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <FadeIn>
                <SectionHeading
                  eyebrow="Certifications"
                  title="Selected credentials"
                  description="Focused on practical foundations and platform readiness."
                  right={
                    <ButtonLink
                      href="/certifications"
                      variant="secondary"
                      size="sm"
                    >
                      View all
                    </ButtonLink>
                  }
                />
              </FadeIn>
              <div className="mt-6 grid gap-4">
                {featuredCerts.map((c) => (
                  <FadeIn key={c.name}>
                    <Card>
                      <CardBody>
                        <div className="text-sm font-semibold">{c.name}</div>
                        <div className="mt-1 text-sm text-mutedForeground">
                          {c.issuer} · Issued {c.issued}
                        </div>
                        {c.credentialId ? (
                          <div className="mt-3 text-xs text-mutedForeground">
                            Credential ID: {c.credentialId}
                          </div>
                        ) : null}
                      </CardBody>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </div>

            <div>
              <FadeIn>
                <SectionHeading
                  eyebrow="Education"
                  title="Academic foundation"
                  description="Computer science background with teaching and mentorship experience."
                  right={
                    <ButtonLink
                      href="/certifications#education"
                      variant="secondary"
                      size="sm"
                    >
                      View education
                    </ButtonLink>
                  }
                />
              </FadeIn>
              <div className="mt-6 grid gap-4">
                {featuredEdu.map((e) => (
                  <FadeIn key={e.school}>
                    <Card>
                      <CardBody>
                        <div className="text-sm font-semibold">{e.school}</div>
                        <div className="mt-1 text-sm text-mutedForeground">
                          {e.degree}
                        </div>
                        <div className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-mutedForeground">
                          {e.duration}
                        </div>
                      </CardBody>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-background">
        <Container className="py-14 sm:py-16">
          <FadeIn>
            <Card className="overflow-hidden">
              <CardBody className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <div className="text-sm font-semibold tracking-tight">
                    {profile.contact.heading}
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mutedForeground">
                    {profile.contact.text}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <ButtonLink href="/contact">{profile.contact.heading}</ButtonLink>
                  <ButtonLink href="/experience" variant="secondary">
                    View timeline
                  </ButtonLink>
                </div>
              </CardBody>
            </Card>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}

