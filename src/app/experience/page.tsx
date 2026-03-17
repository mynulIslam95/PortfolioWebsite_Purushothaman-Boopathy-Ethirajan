import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ExperienceTimeline } from "@/components/experience/Timeline";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Engineering leadership and backend delivery across enterprise platforms, architecture and production systems."
};

export default function ExperiencePage() {
  return (
    <Container className="py-14 sm:py-16">
      <FadeIn>
        <SectionHeading
          eyebrow="Timeline"
          title="Experience"
          description="Leadership, architecture and backend delivery across enterprise systems."
        />
      </FadeIn>

      <div className="mt-10">
        <FadeIn>
          <ExperienceTimeline items={profile.experience} />
        </FadeIn>
      </div>
    </Container>
  );
}

