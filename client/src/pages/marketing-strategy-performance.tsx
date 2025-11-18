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
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  DollarSign,
  FlaskConical,
  Gauge,
  Lightbulb,
  LineChart,
  PlayCircle,
  RefreshCw,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function PerformanceMarketingPage() {
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
            <CardDescription>
              Unable to load performance marketing data
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const section = data.sections.find((s: any) => s.id === "performance");

  if (!section) {
    return null;
  }

  // Channel strategy matrix
  const channels = [
    {
      name: "Meta (Facebook/Instagram)",
      focus: "Catalog sales + Retargeting",
      creative: "UGC, artist stories, drop announcements",
      audience: "Website visitors, lookalikes, interest",
      status: "Active - Needs Creative Refresh",
      color: "blue",
    },
    {
      name: "Google Ads",
      focus: "Shopping/PMax + Brand/Search",
      creative: "Product feeds, dynamic ads",
      audience: "High-intent shoppers, remarketing",
      status: "Active - Needs Cleanup",
      color: "green",
    },
    {
      name: "TikTok Ads",
      focus: "Prospecting + Live Shopping",
      creative: "Trend-native, behind-the-scenes, artists",
      audience: "Art & culture affinities",
      status: "Launch Required",
      color: "purple",
    },
    {
      name: "YouTube & Shorts",
      focus: "Video prospecting + Brand awareness",
      creative: "Artist interviews, behind-the-scenes, product showcases",
      audience: "Art enthusiasts, collectors, gift shoppers",
      status: "Launch Required",
      color: "orange",
    },
  ];

  // Critical issues from audit
  const criticalIssues = [
    {
      issue: "Conversion Tracking Broken",
      description: "Static values, non-purchase events as primary goals",
      impact: "False ROAS, ineffective optimization",
      severity: "critical",
    },
    {
      issue: "pMax Targeting TV",
      description: "Budget wasted on low-converting placements",
      impact: "Poor ROAS, budget drain",
      severity: "high",
    },
    {
      issue: "Fragmented Campaigns",
      description: "Overlapping, misaligned campaign structure",
      impact: "Bid competition, unclear attribution",
      severity: "high",
    },
    {
      issue: "High CPC Keywords",
      description: "Generic terms like 'stickers' at $4/click",
      impact: "Unprofitable traffic",
      severity: "medium",
    },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-br from-background via-background to-red/5">
      <div className="mx-auto max-w-[1400px] px-8 py-12">
        {/* Hero Slide */}
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/10 via-background to-orange-500/10 p-12 shadow-2xl">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-red-500/20 p-3">
                <Zap className="h-8 w-8 text-red-600" />
              </div>
              <Badge variant="outline" className="text-sm">
                Test → Learn → Scale
              </Badge>
            </div>

            <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground">
              Performance Marketing Lab
            </h1>

            <p className="max-w-3xl text-lg text-muted-foreground">
              {section.description}
            </p>

            {/* ROAS Target */}
            <div className="mt-10 rounded-2xl border-2 border-green-200/50 bg-green-50/50 p-6 dark:border-green-900/50 dark:bg-green-950/20">
              <div className="mb-3 flex items-center gap-2">
                <Gauge className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-200">
                  Primary KPI Target
                </h3>
              </div>
              <div className="flex items-baseline gap-3">
                <div className="text-5xl font-bold text-green-900 dark:text-green-200">
                  ≥350%
                </div>
                <div className="text-sm text-muted-foreground">
                  True ROAS with only Purchase as primary conversion
                </div>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Weekly test loops, rapid scaling on winners, strict measurement
                guardrails
              </p>
            </div>
          </div>
        </div>

        {/* Critical Issues Slide */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-red-600">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Critical Measurement Issues
            </h2>
            <Badge variant="destructive" className="text-xs">
              Week 0-1 Fix Required
            </Badge>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {criticalIssues.map((item, index) => {
              const severityColors = {
                critical: {
                  bg: "bg-red-50/50 dark:bg-red-950/20",
                  border: "border-red-200/50",
                  badge: "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300",
                },
                high: {
                  bg: "bg-orange-50/50 dark:bg-orange-950/20",
                  border: "border-orange-200/50",
                  badge:
                    "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300",
                },
                medium: {
                  bg: "bg-yellow-50/50 dark:bg-yellow-950/20",
                  border: "border-yellow-200/50",
                  badge:
                    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300",
                },
              };
              const colors =
                severityColors[
                  item.severity as keyof typeof severityColors
                ];

              return (
                <Card
                  key={index}
                  className={`border-2 ${colors.border} ${colors.bg} transition-all hover:shadow-xl`}
                >
                  <CardHeader className="pb-3">
                    <div className="mb-2 flex items-center justify-between">
                      <CardTitle className="text-lg">{item.issue}</CardTitle>
                      <Badge className={colors.badge}>
                        {item.severity.toUpperCase()}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border bg-background/50 p-3">
                      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Impact
                      </div>
                      <p className="mt-1 text-sm text-foreground">
                        {item.impact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-6 rounded-xl border-2 border-blue-200/50 bg-blue-50/30 p-6 dark:border-blue-900/50 dark:bg-blue-950/20">
            <div className="mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200">
                Week 0-1 Fix Plan
              </h3>
            </div>
            <ul className="space-y-2">
              <li className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                <span>
                  Rebuild GTM/GA4 events with dynamic value passing
                </span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                <span>
                  Make Purchase the ONLY primary conversion goal in Google Ads
                </span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                <span>Audit pMax channel mix, exclude TV and low-converters</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                <span>Consolidate fragmented campaigns, add negative keywords</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Channel Strategy Slide */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/10 text-purple-600">
              <BarChart3 className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Multi-Channel Strategy Matrix
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {channels.map((channel, index) => {
              const colorClasses = {
                blue: {
                  border: "border-blue-200/50",
                  bg: "bg-gradient-to-br from-blue-50/50 to-background dark:from-blue-950/20",
                  icon: "text-blue-600",
                },
                green: {
                  border: "border-green-200/50",
                  bg: "bg-gradient-to-br from-green-50/50 to-background dark:from-green-950/20",
                  icon: "text-green-600",
                },
                purple: {
                  border: "border-purple-200/50",
                  bg: "bg-gradient-to-br from-purple-50/50 to-background dark:from-purple-950/20",
                  icon: "text-purple-600",
                },
                orange: {
                  border: "border-orange-200/50",
                  bg: "bg-gradient-to-br from-orange-50/50 to-background dark:from-orange-950/20",
                  icon: "text-orange-600",
                },
              };
              const colors =
                colorClasses[channel.color as keyof typeof colorClasses];

              return (
                <Card
                  key={index}
                  className={`border-2 ${colors.border} ${colors.bg} transition-all hover:shadow-xl`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{channel.name}</CardTitle>
                    <Badge variant="outline" className="text-xs w-fit">
                      {channel.status}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Strategic Focus
                      </div>
                      <p className="text-sm text-foreground">{channel.focus}</p>
                    </div>
                    <div>
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Creative Strategy
                      </div>
                      <p className="text-sm text-foreground">
                        {channel.creative}
                      </p>
                    </div>
                    <div>
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Audience Targeting
                      </div>
                      <p className="text-sm text-foreground">
                        {channel.audience}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Testing Framework Slide */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600/10 text-orange-600">
              <FlaskConical className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Weekly Testing Framework
            </h2>
          </div>

          <Card className="border-2 border-orange-200/50 bg-gradient-to-br from-orange-50/50 via-background to-yellow-50/50 dark:from-orange-950/20 dark:to-yellow-950/20">
            <CardHeader>
              <CardTitle>Test → Learn → Scale Loop</CardTitle>
              <CardDescription>
                Disciplined weekly cadence for rapid iteration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg border border-orange-200/50 bg-background/50 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div className="text-sm font-semibold text-orange-700 dark:text-orange-400">
                      TEST
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>3 new creatives per week</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>2 new audiences per week</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Small budget allocation</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-yellow-200/50 bg-background/50 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div className="text-sm font-semibold text-yellow-700 dark:text-yellow-400">
                      LEARN
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Analyze within 72 hours</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>CPA and ROAS review</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Winner identification</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-green-200/50 bg-background/50 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div className="text-sm font-semibold text-green-700 dark:text-green-400">
                      SCALE
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>+20% budget on winners</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Pause underperformers</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Rinse and repeat</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Product Optimization Showcase */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/10 text-purple-600">
              <Sparkles className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              AI Product Optimization
            </h2>
            <Badge variant="secondary" className="text-xs">
              Creative Testing Accelerator
            </Badge>
          </div>

          <div className="mb-6 rounded-xl border-2 border-purple-200/50 bg-purple-50/30 p-6 dark:border-purple-900/50 dark:bg-purple-950/20">
            <p className="text-sm text-muted-foreground">
              AI-powered product staging transforms a single product shot into
              multiple lifestyle contexts optimized for different audiences,
              platforms, and creative testing—reducing production costs and
              accelerating the test-learn-scale cycle.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Original Product */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Original Product Image
              </h3>
              <div className="overflow-hidden rounded-xl border-2 border-border bg-muted/30 p-8">
                <img
                  src="/media/RISK-Stanton-Coaster-Set.webp"
                  alt="Original RISK Coaster Set Product"
                  className="mx-auto h-auto w-full max-w-md rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* AI Generated Variants */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <h3 className="text-lg font-semibold text-foreground">
                  AI-Generated Lifestyle Contexts
                </h3>
                <Badge variant="outline" className="text-xs">
                  6 Variations from 1 Image
                </Badge>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Nightclub/Bar Context */}
                <div className="group relative overflow-hidden rounded-xl border-2 border-purple-200/50 bg-gradient-to-br from-purple-50/50 to-background transition-all hover:border-purple-400/50 hover:shadow-xl dark:from-purple-950/20">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src="/media/risk_coasters_ai_generation.png"
                      alt="AI Generated - Nightclub Bar Setting"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-foreground">
                      Nightlife & Entertainment
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Target: Young urban professionals, nightlife enthusiasts
                    </p>
                  </div>
                </div>

                {/* Zen/Tea Context */}
                <div className="group relative overflow-hidden rounded-xl border-2 border-purple-200/50 bg-gradient-to-br from-purple-50/50 to-background transition-all hover:border-purple-400/50 hover:shadow-xl dark:from-purple-950/20">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src="/media/risk_coasters_ai_generation2.png"
                      alt="AI Generated - Zen Tea Setting"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-foreground">
                      Mindful Living & Wellness
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Target: Meditation practitioners, wellness enthusiasts
                    </p>
                  </div>
                </div>

                {/* Modern Home Context */}
                <div className="group relative overflow-hidden rounded-xl border-2 border-purple-200/50 bg-gradient-to-br from-purple-50/50 to-background transition-all hover:border-purple-400/50 hover:shadow-xl dark:from-purple-950/20">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src="/media/risk_coasters_ai_generation3.png"
                      alt="AI Generated - Modern Home Setting"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-foreground">
                      Modern Home Entertaining
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Target: Home decor enthusiasts, wine lovers
                    </p>
                  </div>
                </div>

                {/* Tropical Outdoor Context */}
                <div className="group relative overflow-hidden rounded-xl border-2 border-purple-200/50 bg-gradient-to-br from-purple-50/50 to-background transition-all hover:border-purple-400/50 hover:shadow-xl dark:from-purple-950/20">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src="/media/risk_coasters_ai_generation4.png"
                      alt="AI Generated - Tropical Outdoor Setting"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-foreground">
                      Summer Outdoor Lifestyle
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Target: Tropical vacation seekers, summer entertaining
                    </p>
                  </div>
                </div>

                {/* Industrial Loft Context */}
                <div className="group relative overflow-hidden rounded-xl border-2 border-purple-200/50 bg-gradient-to-br from-purple-50/50 to-background transition-all hover:border-purple-400/50 hover:shadow-xl dark:from-purple-950/20">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src="/media/risk_coasters_ai_generation5.png"
                      alt="AI Generated - Industrial Loft Setting"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-foreground">
                      Urban Industrial Living
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Target: Coffee culture, loft dwellers, urban lifestyle
                    </p>
                  </div>
                </div>

                {/* Creative Studio Context */}
                <div className="group relative overflow-hidden rounded-xl border-2 border-purple-200/50 bg-gradient-to-br from-purple-50/50 to-background transition-all hover:border-purple-400/50 hover:shadow-xl dark:from-purple-950/20">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src="/media/risk_coasters_ai_generation6.png"
                      alt="AI Generated - Creative Studio Setting"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-foreground">
                      Creative Workspace
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Target: Artists, designers, creative professionals
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-2 border-green-200/50 bg-gradient-to-br from-green-50/50 to-background dark:from-green-950/20">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/20">
                    <DollarSign className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Cost Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Generate 6+ variations for the cost of 1 photoshoot,
                    reducing creative production expenses by 80%+
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200/50 bg-gradient-to-br from-blue-50/50 to-background dark:from-blue-950/20">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/20">
                    <RefreshCw className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Rapid Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Test multiple audience contexts simultaneously, accelerating
                    the learn cycle from weeks to days
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200/50 bg-gradient-to-br from-purple-50/50 to-background dark:from-purple-950/20">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/20">
                    <Target className="h-5 w-5 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Audience Targeting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Tailor product presentation to specific demographics and
                    psychographics for higher CTR and conversion
                  </p>
                </CardContent>
              </Card>
            </div>
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
                        {play.successSignals.map((signal: string, i: number) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm font-medium text-green-800 dark:text-green-300"
                          >
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
                <FlaskConical className="h-5 w-5" />
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
