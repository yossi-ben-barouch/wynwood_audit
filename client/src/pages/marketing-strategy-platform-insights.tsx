import { useMarketingStrategyQuery } from "@/pages/marketing-strategy";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, BarChart3, CheckCircle2, Lightbulb, Target, TrendingUp, Users, Zap } from "lucide-react";

export default function PlatformInsightsPage() {
  const { data, isLoading, error } = useMarketingStrategyQuery();

  if (isLoading) {
    return (
      <div className="flex-1 overflow-auto">
        <div className="mx-auto max-w-7xl px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-48 rounded-2xl bg-muted" />
            <div className="grid gap-6 md:grid-cols-2">
              <div className="h-64 rounded-xl bg-muted" />
              <div className="h-64 rounded-xl bg-muted" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex-1 overflow-auto flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Failed to Load</CardTitle>
            <CardDescription>Unable to load platform insights data</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const section = data.sections.find((s) => s.id === "platform-insights");

  if (!section) {
    return null;
  }

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-br from-background via-background to-muted/20">
      <div className="mx-auto max-w-[1400px] px-8 py-12">
        {/* Hero Slide */}
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-12 shadow-2xl">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
          
          <div className="relative z-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-primary/20 p-3">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <Badge variant="outline" className="text-sm">Foundation Layer</Badge>
            </div>
            
            <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground">
              Platform & Insight Overview
            </h1>
            
            <p className="max-w-3xl text-lg text-muted-foreground">
              {section.description}
            </p>

            {/* KPI Grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.kpis.slice(0, 4).map((kpi, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border border-border/50 bg-background/50 p-4 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {kpi.label}
                    </span>
                    {kpi.trendDirection === "up" && (
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    )}
                  </div>
                  <div className="text-2xl font-bold text-foreground">
                    {kpi.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Focus Points Slide */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600">
              <Target className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Strategic Focus</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {section.focusPoints.map((point, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-xl"
              >
                <div className="mb-3 flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-lg font-bold">{index + 1}</span>
                  </div>
                  <p className="text-base leading-relaxed text-foreground">
                    {point}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plays in Motion Slide */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600/10 text-green-600">
              <Zap className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Plays in Motion</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {section.plays.map((play, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-2xl"
              >
                <CardHeader className="border-b bg-gradient-to-r from-primary/5 to-secondary/5 pb-4">
                  <div className="mb-3 flex items-center justify-between">
                    <Badge variant="secondary" className="font-mono text-xs">
                      {play.timeframe}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Play {index + 1}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{play.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6 pt-6">
                  {/* Owners */}
                  <div className="flex flex-wrap items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    {play.owners.map((owner, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {owner}
                      </Badge>
                    ))}
                  </div>

                  {/* Objectives */}
                  <div>
                    <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground">
                      <Target className="h-4 w-4" />
                      Objectives
                    </h4>
                    <ul className="space-y-2">
                      {play.objectives.map((obj, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tasks */}
                  <div>
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">
                      Action Items
                    </h4>
                    <ul className="space-y-2">
                      {play.tasks.map((task, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Success Signals */}
                  <div className="rounded-lg border border-green-200 bg-green-50/50 p-4 dark:border-green-900/50 dark:bg-green-950/20">
                    <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-green-700 dark:text-green-400">
                      <TrendingUp className="h-3.5 w-3.5" />
                      Success Signals
                    </h4>
                    <ul className="space-y-1.5">
                      {play.successSignals.map((signal, i) => (
                        <li key={i} className="flex gap-2 text-sm font-medium text-green-800 dark:text-green-300">
                          <span>•</span>
                          <span>{signal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dependencies (if any) */}
                  {play.dependencies && play.dependencies.length > 0 && (
                    <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-3 dark:border-amber-900/50 dark:bg-amber-950/20">
                      <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400">
                        <AlertCircle className="h-3.5 w-3.5" />
                        Dependencies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {play.dependencies.map((dep, i) => (
                          <Badge key={i} variant="outline" className="text-xs text-amber-800 dark:text-amber-300">
                            {dep}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enablement Slide */}
        {section.enablement && section.enablement.length > 0 && (
          <div className="mb-16">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/10 text-purple-600">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Enablement</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {section.enablement.map((item, index) => (
                <Card key={index} className="border-dashed border-2 transition-all hover:border-solid hover:border-primary/50 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="text-sm">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {item.items.map((enablementItem, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />
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

        {/* Experiments Slide */}
        {section.experiments && section.experiments.length > 0 && (
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600/10 text-orange-600">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Experiments</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {section.experiments.map((experiment, index) => (
                <Card key={index} className="border-2 border-orange-200/50 bg-gradient-to-br from-orange-50/50 to-background transition-all hover:border-orange-400/50 hover:shadow-xl dark:from-orange-950/20">
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">Experiment</Badge>
                      <Badge variant="outline" className="text-xs">{experiment.owner}</Badge>
                    </div>
                    <CardTitle className="text-lg">{experiment.title}</CardTitle>
                    <CardDescription className="text-sm italic">
                      "{experiment.hypothesis}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-foreground">
                      Test Steps
                    </h4>
                    <ol className="space-y-2">
                      {experiment.steps.map((step, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-semibold text-orange-700 dark:bg-orange-900/50 dark:text-orange-300">
                            {i + 1}
                          </span>
                          <span className="pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
