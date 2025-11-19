import { useMarketingStrategyQuery } from "@/pages/marketing-strategy";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertCircle,
  BarChart3,
  CheckCircle2,
  ExternalLink,
  FileText,
  Globe,
  Lightbulb,
  Link2,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function SEOStrategyPage() {
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
            <CardDescription>Unable to load SEO strategy data</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const section = data.sections.find((s: any) => s.id === "seo");

  if (!section) {
    return null;
  }

  // Key SEO opportunities from research
  const seoOpportunities = [
    {
      metric: "Domain Authority",
      value: "DR 72",
      description: "thewynwoodwalls.com",
      icon: <Globe className="h-4 w-4 text-green-600" />,
    },
    {
      metric: "Backlinks",
      value: "22K",
      description: "80% do-follow",
      icon: <Link2 className="h-4 w-4 text-blue-600" />,
    },
    {
      metric: "Museum Traffic",
      value: "25K/mo",
      description: "Untapped for shop",
      icon: <TrendingUp className="h-4 w-4 text-purple-600" />,
    },
    {
      metric: "Artist Pages",
      value: "#1-2",
      description: "High rankings",
      icon: <Search className="h-4 w-4 text-orange-600" />,
    },
  ];

  const keywordCategories = [
    {
      category: "Brand Keywords",
      examples: [
        "Wynwood Walls shop",
        "Wynwood Walls merchandise",
        "Official Wynwood Walls store",
      ],
      intent: "High intent, brand awareness",
      color: "blue",
    },
    {
      category: "Artist-Specific",
      examples: [
        "[Artist] prints",
        "[Artist] Wynwood collection",
        "Art by [Artist]",
      ],
      intent: "High conversion, fan-driven",
      color: "purple",
    },
    {
      category: "Product Keywords",
      examples: [
        "Street art t-shirts",
        "Limited edition art prints",
        "Collectible art toys",
      ],
      intent: "Transactional",
      color: "green",
    },
    {
      category: "Gift-Oriented",
      examples: [
        "Unique art gifts",
        "Gifts for street art lovers",
        "Creative gift ideas",
      ],
      intent: "Seasonal, high-value",
      color: "pink",
    },
    {
      category: "Educational/Info",
      examples: [
        "History of street art",
        "Famous street artists",
        "Street art techniques",
      ],
      intent: "Top-of-funnel, authority",
      color: "orange",
    },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-br from-background via-background to-green/5">
      <div className="mx-auto max-w-[1400px] px-8 py-12">
        {/* Hero Slide */}
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 via-background to-blue-500/10 p-12 shadow-2xl">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-green-500/20 p-3">
                <Search className="h-8 w-8 text-green-600" />
              </div>
              <Badge variant="outline" className="text-sm">
                Organic Growth Engine
              </Badge>
            </div>

            <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground">
              SEO & Content Engine
            </h1>

            <p className="max-w-3xl text-lg text-muted-foreground">
              {section.description}
            </p>

            {/* SEO Metrics Grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {seoOpportunities.map((opp, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border border-border/50 bg-background/50 p-4 backdrop-blur-sm transition-all hover:border-green-500/50 hover:shadow-lg"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {opp.metric}
                    </span>
                    {opp.icon}
                  </div>
                  <div className="text-2xl font-bold text-foreground">
                    {opp.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {opp.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Critical Opportunity Slide */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-red-600">
              <AlertCircle className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Critical Missed Opportunity
            </h2>
          </div>

          <Card className="border-2 border-red-200/50 bg-gradient-to-br from-red-50/50 to-background dark:from-red-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <ExternalLink className="h-5 w-5 text-red-600" />
                Museum → Shop Disconnect
              </CardTitle>
              <CardDescription>
                High-ranking artist pages on thewynwoodwalls.com (DR 72) don't
                display shop products
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-red-200/50 bg-background/50 p-4">
                  <div className="mb-2 text-sm font-semibold text-red-700 dark:text-red-400">
                    The Problem
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Artist pages rank #1-2 on Google but have zero product links
                    to shop
                  </p>
                </div>
                <div className="rounded-lg border border-amber-200/50 bg-amber-50/30 p-4 dark:bg-amber-950/20">
                  <div className="mb-2 text-sm font-semibold text-amber-700 dark:text-amber-400">
                    The Cost
                  </div>
                  <p className="text-sm text-muted-foreground">
                    25K monthly museum visitors never see shop merchandise
                  </p>
                </div>
                <div className="rounded-lg border border-green-200/50 bg-green-50/30 p-4 dark:bg-green-950/20">
                  <div className="mb-2 text-sm font-semibold text-green-700 dark:text-green-400">
                    The Solution
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Embed product modules on top 10 artist pages (see plays
                    below)
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-blue-200/50 bg-blue-50/30 p-4 dark:bg-blue-950/20">
                <h4 className="mb-2 text-sm font-semibold text-blue-700 dark:text-blue-400">
                  Quick Win Potential
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                    <span>
                      Leverage existing #1-2 rankings instead of building from
                      scratch
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                    <span>
                      Pass authority from DR 72 site to shop via internal links
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                    <span>
                      Convert art enthusiasts into buyers at peak interest
                      moment
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Keyword Strategy Slide */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/10 text-purple-600">
              <FileText className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Keyword Strategy Framework
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {keywordCategories.map((cat, index) => {
              const colorClasses = {
                blue: {
                  border: "border-blue-200/50",
                  bg: "bg-blue-50/50 dark:bg-blue-950/20",
                  icon: "text-blue-600",
                },
                purple: {
                  border: "border-purple-200/50",
                  bg: "bg-purple-50/50 dark:bg-purple-950/20",
                  icon: "text-purple-600",
                },
                green: {
                  border: "border-green-200/50",
                  bg: "bg-green-50/50 dark:bg-green-950/20",
                  icon: "text-green-600",
                },
                pink: {
                  border: "border-pink-200/50",
                  bg: "bg-pink-50/50 dark:bg-pink-950/20",
                  icon: "text-pink-600",
                },
                orange: {
                  border: "border-orange-200/50",
                  bg: "bg-orange-50/50 dark:bg-orange-950/20",
                  icon: "text-orange-600",
                },
              };
              const colors =
                colorClasses[cat.color as keyof typeof colorClasses];

              return (
                <Card
                  key={index}
                  className={`border-2 ${colors.border} ${colors.bg} transition-all hover:shadow-xl`}
                >
                  <CardHeader className="pb-4">
                    <div className="mb-3 flex items-center gap-2">
                      <Search className={`h-4 w-4 ${colors.icon}`} />
                      <CardTitle className="text-base">
                        {cat.category}
                      </CardTitle>
                    </div>
                    <Badge variant="outline" className="text-xs w-fit">
                      {cat.intent}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {cat.examples.map((example: string, i: number) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-primary" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Focus Points Slide */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600">
              <Target className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Strategic Focus
            </h2>
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
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600/10 text-green-600">
              <Zap className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Plays in Motion
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {section.plays.map((play: any, index: number) => (
              <Card
                key={index}
                className="group overflow-hidden border-2 transition-all hover:border-green-500/50 hover:shadow-2xl"
              >
                <CardHeader className="border-b bg-gradient-to-r from-green-500/5 to-emerald-500/5 pb-4">
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
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-muted-foreground"
                        >
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
                      {play.tasks.map((task: string, i: number) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-muted-foreground"
                        >
                          <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
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
                        {play.successSignals.map(
                          (signal: string, i: number) => (
                            <li
                              key={i}
                              className="flex gap-2 text-sm font-medium text-green-800 dark:text-green-300"
                            >
                              <span>•</span>
                              <span>{signal}</span>
                            </li>
                          )
                        )}
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
                <Card
                  key={index}
                  className="border-dashed border-2 transition-all hover:border-solid hover:border-purple-500/50 hover:shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {item.items.map((enablementItem: string, i: number) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-muted-foreground"
                        >
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
              {section.experiments.map((experiment: any, index: number) => (
                <Card
                  key={index}
                  className="border-2 border-orange-200/50 bg-gradient-to-br from-orange-50/50 to-background transition-all hover:border-orange-400/50 hover:shadow-xl dark:from-orange-950/20"
                >
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        Experiment
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {experiment.owner}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">
                      {experiment.title}
                    </CardTitle>
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
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-muted-foreground"
                        >
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
