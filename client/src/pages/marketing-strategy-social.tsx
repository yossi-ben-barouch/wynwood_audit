import { useMarketingStrategyQuery } from "@/pages/marketing-strategy";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertCircle, 
  BarChart3, 
  CheckCircle2, 
  Heart, 
  Instagram, 
  Lightbulb, 
  MessageCircle, 
  PlayCircle, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Users, 
  Video, 
  Zap 
} from "lucide-react";

export default function SocialStrategyPage() {
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
            <CardDescription>Unable to load social strategy data</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const section = data.sections.find((s: any) => s.id === "social");

  if (!section) {
    return null;
  }

  const strategy = section.strategyDetails;

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-br from-background via-background to-purple/5">
      <div className="mx-auto max-w-[1400px] px-8 py-12">
        {/* Hero Slide */}
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-background to-pink-500/10 p-12 shadow-2xl">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl" />
          
          <div className="relative z-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-purple-500/20 p-3">
                <MessageCircle className="h-8 w-8 text-purple-600" />
              </div>
              <Badge variant="outline" className="text-sm">Community Growth</Badge>
            </div>
            
            <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground">
              Social & Community Flywheel
            </h1>
            
            <p className="max-w-3xl text-lg text-muted-foreground">
              {section.description}
            </p>

            {/* Social Stats Grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-background/50 p-4 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:shadow-lg">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Instagram (Shop)
                  </span>
                  <Instagram className="h-4 w-4 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-foreground">6.5K</div>
                <div className="text-xs text-muted-foreground">Followers</div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-background/50 p-4 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:shadow-lg">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Museum IG
                  </span>
                  <Instagram className="h-4 w-4 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-foreground">100K+</div>
                <div className="text-xs text-muted-foreground">Untapped audience</div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-background/50 p-4 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:shadow-lg">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    TikTok
                  </span>
                  <Video className="h-4 w-4 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-foreground">New</div>
                <div className="text-xs text-muted-foreground">Massive opportunity</div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-background/50 p-4 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:shadow-lg">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Live Shopping
                  </span>
                  <Sparkles className="h-4 w-4 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-foreground">2x/mo</div>
                <div className="text-xs text-muted-foreground">Target cadence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Positioning Slide */}
        {strategy?.positioning && (
          <div className="mb-16">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600">
                <Target className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold tracking-tight">{strategy.positioning.title}</h2>
                <Badge variant="secondary">{strategy.positioning.badge}</Badge>
              </div>
            </div>

            <Card className="mb-6 border-2 border-blue-200/50 bg-gradient-to-br from-blue-50/50 to-background dark:from-blue-950/20">
              <CardContent className="pt-6">
                <p className="mb-6 text-base text-muted-foreground">
                  {strategy.positioning.description}
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {strategy.positioning.pillars.map((pillar: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-lg border border-blue-200/50 bg-background/50 p-4"
                    >
                      <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                      <span className="text-sm font-medium">{pillar}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Platform Strategy Slide */}
        {strategy?.platformStrategy && (
          <div className="mb-16">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/10 text-purple-600">
                <Zap className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold tracking-tight">{strategy.platformStrategy.title}</h2>
                <Badge variant="secondary">{strategy.platformStrategy.badge}</Badge>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {strategy.platformStrategy.platforms.map((platform: any, index: number) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-2 transition-all hover:border-purple-500/50 hover:shadow-2xl"
                >
                  <CardHeader className="border-b bg-gradient-to-r from-purple-500/5 to-pink-500/5 pb-4">
                    <div className="mb-3 flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">{platform.name}</Badge>
                      {platform.name === "Instagram" && <Instagram className="h-4 w-4 text-purple-600" />}
                      {platform.name === "TikTok" && <Video className="h-4 w-4 text-purple-600" />}
                      {platform.name === "YouTube" && <PlayCircle className="h-4 w-4 text-purple-600" />}
                      {platform.name === "Pinterest" && <Heart className="h-4 w-4 text-purple-600" />}
                      {platform.name === "Facebook" && <MessageCircle className="h-4 w-4 text-purple-600" />}
                    </div>
                    <CardTitle className="text-lg">{platform.shift}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {platform.tactics.map((tactic: string, i: number) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />
                          <span>{tactic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* 90-Day Drop SOP Slide */}
        {strategy?.dropOperatingSystem && (
          <div className="mb-16">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600/10 text-orange-600">
                <Target className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold tracking-tight">{strategy.dropOperatingSystem.title}</h2>
                <Badge variant="secondary">{strategy.dropOperatingSystem.badge}</Badge>
              </div>
            </div>

            <Card className="mb-6 border-2 border-orange-200/50 bg-gradient-to-br from-orange-50/50 to-background dark:from-orange-950/20">
              <CardHeader>
                <CardDescription className="text-sm">{strategy.dropOperatingSystem.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {strategy.dropOperatingSystem.timeline.map((phase: any, index: number) => (
                    <div key={index} className="relative pl-8 pb-6 last:pb-0">
                      {/* Timeline line */}
                      {index < strategy.dropOperatingSystem.timeline.length - 1 && (
                        <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-orange-200 dark:bg-orange-900/50" />
                      )}
                      
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange-600 text-xs font-bold text-white">
                        {index + 1}
                      </div>
                      
                      <div className="rounded-lg border border-orange-200/50 bg-background/50 p-4">
                        <h4 className="mb-3 text-sm font-semibold text-orange-700 dark:text-orange-400">
                          {phase.phase}
                        </h4>
                        <ul className="space-y-2">
                          {phase.actions.map((action: string, i: number) => (
                            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                              <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* 30/60/90 Execution Plan */}
        {strategy?.execution30_60_90 && (
          <div className="mb-16">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600/10 text-green-600">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold tracking-tight">{strategy.execution30_60_90.title}</h2>
                <Badge variant="secondary">{strategy.execution30_60_90.badge}</Badge>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {strategy.execution30_60_90.phases.map((phase: any, index: number) => (
                <Card
                  key={index}
                  className="border-2 transition-all hover:border-green-500/50 hover:shadow-2xl"
                >
                  <CardHeader className="border-b bg-gradient-to-r from-green-500/5 to-emerald-500/5">
                    <div className="mb-3 flex items-center justify-between">
                      <Badge variant="secondary" className="font-mono text-xs">
                        {phase.period}
                      </Badge>
                      <Badge 
                        variant={phase.impact === "High" ? "default" : "outline"} 
                        className="text-xs"
                      >
                        {phase.impact} Impact
                      </Badge>
                    </div>
                    <CardTitle className="text-base">{phase.owner}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {phase.tasks.map((task: string, i: number) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Focus Points Slide */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600">
              <Target className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Strategic Focus</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {section.focusPoints.map((point: string, index: number) => (
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
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600/10 text-pink-600">
              <Zap className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Plays in Motion</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {section.plays.map((play: any, index: number) => (
              <Card
                key={index}
                className="group overflow-hidden border-2 transition-all hover:border-pink-500/50 hover:shadow-2xl"
              >
                <CardHeader className="border-b bg-gradient-to-r from-pink-500/5 to-purple-500/5 pb-4">
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
                    {play.owners.map((owner: string, i: number) => (
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
                      {play.objectives.map((obj: string, i: number) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-pink-600" />
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
                      {play.tasks.map((task: string, i: number) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-pink-600" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Success Signals */}
                  {play.successSignals && play.successSignals.length > 0 && (
                    <div className="rounded-lg border border-green-200 bg-green-50/50 p-4 dark:border-green-900/50 dark:bg-green-950/20">
                      <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-green-700 dark:text-green-400">
                        <TrendingUp className="h-3.5 w-3.5" />
                        Success Signals
                      </h4>
                      <ul className="space-y-1.5">
                        {play.successSignals.map((signal: string, i: number) => (
                          <li key={i} className="flex gap-2 text-sm font-medium text-green-800 dark:text-green-300">
                            <span>•</span>
                            <span>{signal}</span>
                          </li>
                        ))}
                      </ul>
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
              {section.enablement.map((item: any, index: number) => (
                <Card key={index} className="border-dashed border-2 transition-all hover:border-solid hover:border-purple-500/50 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="text-sm">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {item.items.map((enablementItem: string, i: number) => (
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

        {/* KPIs Slide */}
        {strategy?.kpis && (
          <div className="mb-16">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold tracking-tight">{strategy.kpis.title}</h2>
                <Badge variant="secondary">{strategy.kpis.badge}</Badge>
              </div>
            </div>

            <Card className="border-2 border-blue-200/50 bg-gradient-to-br from-blue-50/50 to-background dark:from-blue-950/20">
              <CardContent className="pt-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {strategy.kpis.metrics.map((metric: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-lg border border-blue-200/50 bg-background/50 p-4"
                    >
                      <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                      <span className="text-sm font-medium">{metric}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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
              {section.experiments.map((experiment: any, index: number) => (
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
                      {experiment.steps.map((step: string, i: number) => (
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
