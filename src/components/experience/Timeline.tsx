import { Card, CardBody } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import type { ExperienceItem } from "@/data/profile";

export function ExperienceTimeline({
  items
}: {
  items: readonly ExperienceItem[];
}) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-0 h-full w-px bg-border sm:left-4" />
      <div className="space-y-6">
        {items.map((e) => (
          <div key={`${e.company}-${e.role}-${e.duration}`} className="relative">
            <div className="absolute left-3 top-7 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-mutedForeground/60 ring-4 ring-background sm:left-4" />
            <Card className={cn("ml-8 sm:ml-10")}>
              <CardBody>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-sm font-semibold tracking-tight">
                      {e.role}
                    </div>
                    <div className="mt-1 text-sm text-mutedForeground">
                      {e.company}
                      {e.type ? ` · ${e.type}` : ""} · {e.location}
                    </div>
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-mutedForeground">
                    {e.duration}
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-mutedForeground">
                  {e.highlights.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-mutedForeground/60" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>

                {e.projects?.length ? (
                  <div className="mt-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-mutedForeground">
                      Selected projects
                    </div>
                    <div className="mt-3 space-y-4">
                      {e.projects.map((p) => (
                        <div
                          key={`${p.name}-${p.duration}`}
                          className="rounded-lg border border-border bg-background p-4"
                        >
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <div className="text-sm font-semibold">
                                {p.name}
                              </div>
                              <div className="mt-1 text-sm text-mutedForeground">
                                {p.role}
                                {p.client ? ` · ${p.client}` : ""} · {p.location}
                              </div>
                            </div>
                            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-mutedForeground">
                              {p.duration}
                            </div>
                          </div>
                          <ul className="mt-3 space-y-2 text-sm text-mutedForeground">
                            {p.bullets.map((b) => (
                              <li key={b} className="flex gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-mutedForeground/60" />
                                <span className="leading-relaxed">{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

