import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { TrendingUp, Zap, Layers, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ErrorState } from "@/components/error-state";
import { KPICard } from "@/components/kpi-card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type {
  MarketingStrategy,
  StrategyPlay,
  StrategySection,
} from "@shared/schema";

const loadingSkeleton = (
  <div className="flex h-full items-center justify-center">
    <div className="w-full max-w-5xl animate-pulse space-y-6 px-8">
      <div className="h-8 w-1/3 rounded bg-muted" />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="h-32 rounded bg-muted" />
        <div className="h-32 rounded bg-muted" />
        <div className="h-32 rounded bg-muted" />
      </div>
    </div>
  </div>
);

export function useMarketingStrategyQuery() {
  return useQuery<MarketingStrategy>({
    queryKey: ["/data/marketing-strategy"],
    queryFn: async () => {
      const res = await fetch("/data/marketing-strategy.json");
      if (!res.ok) throw new Error("Failed to fetch marketing strategy");
      return res.json();
    },
  });
}

function PlayCard({ play }: { play: StrategyPlay }) {
  return (
    <Card className="border-primary/20">
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <Badge className="bg-primary/15 text-primary hover:bg-primary/20">
                {play.timeframe}
              </Badge>
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                {play.owners.join(" · ")}
              </span>
            </div>
            <CardTitle className="mt-2 text-lg">{play.title}</CardTitle>
          </div>
          {play.successSignals && play.successSignals.length > 0 && (
            <div className="flex flex-col items-end gap-2">
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Success Signals
              </span>
              <div className="flex flex-wrap justify-end gap-2">
                {play.successSignals.map((signal, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {signal}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        {play.objectives.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Objectives
            </h4>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              {play.objectives.map((objective, index) => (
                <li key={index} className="flex gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {play.tasks.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-foreground">Key Tasks</h4>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              {play.tasks.map((task, index) => (
                <li key={index} className="flex gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-primary/70" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {play.dependencies && play.dependencies.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Dependencies
            </h4>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              {play.dependencies.map((dependency, index) => (
                <li key={index}>• {dependency}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function SectionDetail({ section }: { section: StrategySection }) {
  const strategy = section.strategyDetails;

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-2">
          <CardTitle>{section.title}</CardTitle>
          <CardDescription>{section.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {strategy?.positioning && (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                {strategy.positioning.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {strategy.positioning.description}
              </p>
              <div className="mt-3 space-y-2">
                <div className="font-medium text-sm">Content Pillars</div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {strategy.positioning.pillars.map(
                    (pillar: string, i: number) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{pillar}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}

        {strategy?.platformStrategy && (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                {strategy.platformStrategy.title}
              </h3>
              <div className="mt-3 space-y-4">
                {strategy.platformStrategy.platforms.map(
                  (platform: any, i: number) => (
                    <div key={i} className="rounded-md border p-3">
                      <div className="font-medium text-sm">{platform.name}</div>
                      <div className="text-xs text-muted-foreground mt-1 mb-2">
                        {platform.shift}
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {platform.tactics.map((tactic: string, j: number) => (
                          <li key={j} className="flex gap-2">
                            <span className="mt-1 block h-1 w-1 rounded-full bg-primary/60" />
                            <span>{tactic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {strategy?.dropOperatingSystem && (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                {strategy.dropOperatingSystem.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {strategy.dropOperatingSystem.description}
              </p>
              <div className="mt-3 space-y-3">
                {strategy.dropOperatingSystem.timeline.map(
                  (phase: any, i: number) => (
                    <div
                      key={i}
                      className="rounded-md border-l-4 border-primary/40 bg-primary/5 p-3"
                    >
                      <div className="font-medium text-sm">{phase.phase}</div>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        {phase.actions.map((action: string, j: number) => (
                          <li key={j} className="flex gap-2">
                            <span className="mt-1 block h-1 w-1 rounded-full bg-primary/60" />
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {strategy?.execution30_60_90 && (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                {strategy.execution30_60_90.title}
              </h3>
              <div className="mt-3 space-y-3">
                {strategy.execution30_60_90.phases.map(
                  (phase: any, i: number) => (
                    <div key={i} className="rounded-md border p-3">
                      <div className="flex items-center justify-between">
                        <div className="font-medium text-sm">
                          {phase.period}
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">
                            Impact: {phase.impact}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Owner: {phase.owner}
                          </Badge>
                        </div>
                      </div>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        {phase.tasks.map((task: string, j: number) => (
                          <li key={j} className="flex gap-2">
                            <span className="mt-1 block h-1 w-1 rounded-full bg-primary/60" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {strategy?.kpis && (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                {strategy.kpis.title}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {strategy.kpis.metrics.map((metric: string, i: number) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div>
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
            Focus Points
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {section.focusPoints.map((point, index) => (
              <li key={index} className="flex gap-2">
                <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
            Plays in Motion
          </h3>
          <div className="grid gap-4 lg:grid-cols-2">
            {section.plays.map((play) => (
              <PlayCard key={`${section.id}-${play.title}`} play={play} />
            ))}
          </div>
        </div>

        {section.enablement && section.enablement.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Enablement
            </h3>
            <div className="grid gap-3 md:grid-cols-2">
              {section.enablement.map((item, index) => (
                <Card key={index} className="border-dashed">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="py-0 pb-4">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {item.items.map((enablementItem, innerIndex) => (
                        <li key={innerIndex} className="flex gap-2">
                          <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-primary/60" />
                          <span>{enablementItem}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {section.experiments && section.experiments.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Experiments
            </h3>
            <div className="grid gap-3 md:grid-cols-2">
              {section.experiments.map((experiment, index) => (
                <Card key={index} className="border-secondary/40">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">
                      {experiment.title}
                    </CardTitle>
                    <CardDescription>{experiment.hypothesis}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground/80">
                      <span className="font-medium">Owner:</span>
                      <span>{experiment.owner}</span>
                    </div>
                    <ol className="list-decimal space-y-1 pl-5">
                      {experiment.steps.map((step, stepIndex) => (
                        <li key={stepIndex}>{step}</li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function SectionPreviewCard({ section }: { section: StrategySection }) {
  const topFocus = section.focusPoints.slice(0, 2);
  const nextPlay = section.plays[0];

  return (
    <Card className="border-border transition hover:border-primary/40">
      <CardHeader className="flex flex-row items-start justify-between gap-3">
        <div>
          <CardTitle className="text-lg">{section.title}</CardTitle>
          <CardDescription>{section.description}</CardDescription>
        </div>
        {nextPlay && (
          <Badge variant="outline" className="text-xs">
            {nextPlay.timeframe}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="space-y-3">
        <ul className="space-y-2 text-sm text-muted-foreground">
          {topFocus.map((point, index) => (
            <li key={index} className="flex gap-2">
              <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-primary/70" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <Link
          href={`/marketing-strategy/${section.id}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80"
        >
          View full playbook
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}

export default function MarketingOverviewPage() {
  const { data, isLoading, error, refetch } = useMarketingStrategyQuery();

  if (isLoading) {
    return loadingSkeleton;
  }

  if (error || !data) {
    return <ErrorState onRetry={() => refetch()} />;
  }

  return (
    <div className="flex-1 overflow-auto">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-8 py-6">
        <header className="space-y-3">
          <div
            className="flex flex-wrap items-center gap-3"
            data-testid="text-page-title"
          >
            <Zap className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-semibold text-foreground">
              Integrated Marketing Strategy Overview
            </h1>
          </div>
          <p className="max-w-3xl text-sm text-muted-foreground">
            We run multi-track growth plays in parallel—stabilizing measurement,
            scaling channels, and building a fashion story that ties the museum
            to commerce.
          </p>
        </header>

        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Zap className="h-5 w-5 text-primary" />
              Strategic Narrative & Guardrails
            </CardTitle>
            <CardDescription>
              How we operate the engine while honoring brand integrity.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 lg:grid-cols-[1.8fr,1fr]">
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {data.overview?.narrative ??
                  "Strategic narrative will populate once the marketing strategy syncs."}
              </p>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Guiding Principles
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  {(data.overview?.guidingPrinciples ?? []).map(
                    (principle, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{principle}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="rounded-md border border-primary/20 bg-background p-4">
              <h3 className="text-sm font-semibold text-foreground">
                Guardrails
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {(data.overview?.guardrails ?? []).map((guardrail, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-primary/70" />
                    <span>{guardrail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              Key Performance Indicators
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.kpis.map((kpi, index) => (
              <KPICard
                key={`${kpi.label}-${index}`}
                label={kpi.label}
                value={kpi.value}
                trend={kpi.trend}
                trendDirection={kpi.trendDirection}
                suffix={kpi.suffix}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">
            Channel Playbooks
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {data.sections.map((section) => (
              <SectionPreviewCard key={section.id} section={section} />
            ))}
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              <CardTitle>Operational Cadence</CardTitle>
            </div>
            <CardDescription>
              Parallel streams keep velocity high while reducing risk.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {(data.cadence ?? []).map((cadence) => (
              <div
                key={cadence.horizon}
                className="rounded-md border border-border p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-foreground">
                    {cadence.horizon}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {cadence.focus}
                  </Badge>
                </div>
                <Separator className="my-3" />
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {cadence.parallelStreams.map((stream, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{stream}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function createMarketingSectionPage(
  sectionId: string,
  options?: { headline?: string; subtitle?: string }
) {
  return function MarketingStrategySection() {
    const { data, isLoading, error, refetch } = useMarketingStrategyQuery();

    if (isLoading) {
      return loadingSkeleton;
    }

    if (error || !data) {
      return <ErrorState onRetry={() => refetch()} />;
    }

    const section = data.sections.find((item) => item.id === sectionId);

    if (!section) {
      return (
        <div className="flex-1 overflow-auto">
          <div className="mx-auto max-w-3xl px-8 py-12">
            <Card>
              <CardHeader>
                <CardTitle>Section Not Found</CardTitle>
                <CardDescription>
                  The requested playbook doesn’t exist. Choose another channel
                  from the marketing navigation.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      );
    }

    return (
      <div className="flex-1 overflow-auto">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-8 py-6">
          <header className="space-y-2">
            <h1 className="text-3xl font-semibold text-foreground">
              {options?.headline ?? section.title}
            </h1>
            <p className="text-sm text-muted-foreground">
              {options?.subtitle ?? section.description}
            </p>
          </header>
          <SectionDetail section={section} />
        </div>
      </div>
    );
  };
}
