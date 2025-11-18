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
  ExternalLink,
  Lightbulb,
  Package,
  ShoppingBag,
  ShoppingCart,
  Star,
  Store,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function MarketplacesStrategyPage() {
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
              Unable to load marketplace strategy data
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const section = data.sections.find((s: any) => s.id === "marketplaces");

  if (!section) {
    return null;
  }

  // Multi-channel marketplace matrix
  const marketplaceChannels = [
    {
      name: "Amazon",
      status: "Active - Needs Optimization",
      priority: "High",
      audience: "Mass market shoppers",
      products: "Collectibles, Figures, Art Books",
      focus: "Review generation, product campaigns",
      color: "orange",
      icon: <ShoppingCart className="h-5 w-5" />,
      timeline: "Immediate",
      gmvTarget: "$15-20K/mo",
    },
    {
      name: "Etsy",
      status: "Must Launch",
      priority: "Critical",
      audience: "Art lovers, unique gift seekers",
      products: "Limited edition prints, handmade items, artist collabs",
      focus: "Artist storytelling, curated assortments",
      color: "green",
      icon: <Store className="h-5 w-5" />,
      timeline: "Weeks 2-5",
      gmvTarget: "$10-15K/mo",
    },
    {
      name: "eBay",
      status: "Bonus Channel",
      priority: "Medium",
      audience: "Collectors, bargain hunters",
      products: "Rare figures, vintage prints, exclusives",
      focus: "Auction strategy for rare items",
      color: "blue",
      icon: <Package className="h-5 w-5" />,
      timeline: "Weeks 4-6",
      gmvTarget: "$5-8K/mo",
    },
  ];

  const fashionMarketplaces = [
    {
      name: "ASOS Marketplace",
      positioning: "Independent fashion brands",
      focus: "Wearable Art apparel, limited drops",
      audience: "18-35 fashion-forward shoppers",
      color: "purple",
    },
    {
      name: "Grailed",
      positioning: "Streetwear & designer resale",
      focus: "Limited edition tees, hoodies, artist collabs",
      audience: "Streetwear enthusiasts, collectors",
      color: "indigo",
    },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-br from-background via-background to-blue/5">
      <div className="mx-auto max-w-[1400px] px-8 py-12">
        {/* Hero Slide */}
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-background to-purple-500/10 p-12 shadow-2xl">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-blue-500/20 p-3">
                <ShoppingBag className="h-8 w-8 text-blue-600" />
              </div>
              <Badge variant="outline" className="text-sm">
                Multi-Channel Revenue
              </Badge>
            </div>

            <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground">
              Marketplace Expansion
            </h1>

            <p className="max-w-3xl text-lg text-muted-foreground">
              {section.description}
            </p>

            {/* Current State Alert */}
            <div className="mt-10 rounded-2xl border-2 border-orange-200/50 bg-orange-50/50 p-6 dark:border-orange-900/50 dark:bg-orange-950/20">
              <div className="mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-200">
                  Current State
                </h3>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-orange-200/50 bg-background/50 p-4">
                  <div className="mb-1 text-sm font-medium text-orange-700 dark:text-orange-400">
                    Amazon
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Active 6-8 months, no reviews, not Shopify-integrated
                  </p>
                </div>
                <div className="rounded-lg border border-red-200/50 bg-background/50 p-4">
                  <div className="mb-1 text-sm font-medium text-red-700 dark:text-red-400">
                    Etsy/eBay
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Zero presence - missing art/collectibles audience
                  </p>
                </div>
                <div className="rounded-lg border border-blue-200/50 bg-background/50 p-4">
                  <div className="mb-1 text-sm font-medium text-blue-700 dark:text-blue-400">
                    Fashion/B2B
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Untapped wearable art wholesale opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Marketplaces Slide */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600">
              <Store className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Core Marketplace Strategy
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {marketplaceChannels.map((channel, index) => {
              const colorClasses = {
                orange: {
                  border: "border-orange-200/50",
                  bg: "bg-gradient-to-br from-orange-50/50 to-background dark:from-orange-950/20",
                  badge:
                    "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300",
                  icon: "text-orange-600",
                },
                green: {
                  border: "border-green-200/50",
                  bg: "bg-gradient-to-br from-green-50/50 to-background dark:from-green-950/20",
                  badge:
                    "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300",
                  icon: "text-green-600",
                },
                blue: {
                  border: "border-blue-200/50",
                  bg: "bg-gradient-to-br from-blue-50/50 to-background dark:from-blue-950/20",
                  badge:
                    "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
                  icon: "text-blue-600",
                },
              };
              const colors =
                colorClasses[channel.color as keyof typeof colorClasses];

              return (
                <Card
                  key={index}
                  className={`border-2 ${colors.border} ${colors.bg} transition-all hover:shadow-2xl`}
                >
                  <CardHeader className="pb-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.badge}`}
                      >
                        {channel.icon}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {channel.priority}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">{channel.name}</CardTitle>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge className={colors.badge}>{channel.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Target Audience
                      </div>
                      <p className="text-sm text-foreground">
                        {channel.audience}
                      </p>
                    </div>
                    <div>
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Product Mix
                      </div>
                      <p className="text-sm text-foreground">
                        {channel.products}
                      </p>
                    </div>
                    <div>
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Strategic Focus
                      </div>
                      <p className="text-sm text-foreground">{channel.focus}</p>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t">
                      <div>
                        <div className="text-xs text-muted-foreground">
                          Timeline
                        </div>
                        <div className="text-sm font-semibold">
                          {channel.timeline}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">
                          GMV Target
                        </div>
                        <div className="text-sm font-semibold">
                          {channel.gmvTarget}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Fashion Marketplaces Slide */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/10 text-purple-600">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Fashion Marketplace Expansion
            </h2>
            <Badge variant="secondary" className="text-xs">
              Wearable Art Focus
            </Badge>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {fashionMarketplaces.map((marketplace, index) => (
              <Card
                key={index}
                className="border-2 border-purple-200/50 bg-gradient-to-br from-purple-50/50 to-background transition-all hover:shadow-2xl dark:from-purple-950/20"
              >
                <CardHeader>
                  <div className="mb-3 flex items-center justify-between">
                    <CardTitle className="text-xl">
                      {marketplace.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      Fashion
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">
                    <span className="font-semibold">Positioning:</span>{" "}
                    {marketplace.positioning}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Product Focus
                    </div>
                    <p className="text-sm text-foreground">
                      {marketplace.focus}
                    </p>
                  </div>
                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Target Audience
                    </div>
                    <p className="text-sm text-foreground">
                      {marketplace.audience}
                    </p>
                  </div>
                  <div className="rounded-lg border border-purple-200 bg-purple-50/30 p-3 dark:border-purple-900/50 dark:bg-purple-950/20">
                    <p className="text-xs text-muted-foreground">
                      <strong>Strategy:</strong> Position limited edition
                      apparel as "wearable art" to command premium pricing and
                      differentiate from fast fashion
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Amazon Deep Dive */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600/10 text-orange-600">
              <ShoppingCart className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Amazon Optimization Playbook
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-2 border-red-200/50 bg-gradient-to-br from-red-50/50 to-background dark:from-red-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  Current Issues
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm">
                    <span className="mt-0.5 block h-2 w-2 shrink-0 rounded-full bg-red-600" />
                    <span>
                      Active 6-8 months with <strong>zero reviews</strong> -
                      trust barrier
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <span className="mt-0.5 block h-2 w-2 shrink-0 rounded-full bg-red-600" />
                    <span>
                      Not integrated with Shopify - inventory sync issues
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <span className="mt-0.5 block h-2 w-2 shrink-0 rounded-full bg-red-600" />
                    <span>
                      Different customer base - mass market vs. art enthusiasts
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <span className="mt-0.5 block h-2 w-2 shrink-0 rounded-full bg-red-600" />
                    <span>No product-specific campaigns - wasted ad spend</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200/50 bg-gradient-to-br from-green-50/50 to-background dark:from-green-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Target className="h-5 w-5 text-green-600" />
                  Optimization Priorities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <span>
                      <strong>Review Generation:</strong> Automated follow-up
                      emails + insert cards
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <span>
                      <strong>Feed Integration:</strong> Sync with Shopify for
                      inventory/pricing
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <span>
                      <strong>Product Campaigns:</strong> Target collectibles &
                      high-margin items
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <span>
                      <strong>Enhanced Content:</strong> A+ content with artist
                      stories
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
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

                  {/* Dependencies */}
                  {play.dependencies && play.dependencies.length > 0 && (
                    <div className="rounded-lg border border-orange-200 bg-orange-50/50 p-3 dark:border-orange-900/50 dark:bg-orange-950/20">
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-orange-700 dark:text-orange-400">
                        Dependencies
                      </h4>
                      <ul className="space-y-1">
                        {play.dependencies.map((dep: string, i: number) => (
                          <li
                            key={i}
                            className="flex gap-2 text-xs text-muted-foreground"
                          >
                            <span>•</span>
                            <span>{dep}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

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

        {/* GMV Projection Slide */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600/10 text-green-600">
              <DollarSign className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Revenue Projections
            </h2>
          </div>

          <Card className="border-2 border-green-200/50 bg-gradient-to-br from-green-50/50 via-background to-blue-50/50 dark:from-green-950/20 dark:to-blue-950/20">
            <CardHeader>
              <CardTitle>90-Day GMV Target by Channel</CardTitle>
              <CardDescription>
                Incremental revenue without cannibalizing owned store
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-orange-200/50 bg-orange-50/30 p-4 dark:bg-orange-950/20">
                    <div className="mb-2 flex items-center gap-2">
                      <ShoppingCart className="h-4 w-4 text-orange-600" />
                      <div className="text-xs font-semibold uppercase text-orange-700 dark:text-orange-400">
                        Amazon
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-orange-900 dark:text-orange-200">
                      $3-8K/mo
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Product campaigns + reviews
                    </p>
                  </div>
                  <div className="rounded-lg border border-green-200/50 bg-green-50/30 p-4 dark:bg-green-950/20">
                    <div className="mb-2 flex items-center gap-2">
                      <Store className="h-4 w-4 text-green-600" />
                      <div className="text-xs font-semibold uppercase text-green-700 dark:text-green-400">
                        Etsy
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-green-900 dark:text-green-200">
                      $2-8K/mo
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Art lover niche
                    </p>
                  </div>
                  <div className="rounded-lg border border-blue-200/50 bg-blue-50/30 p-4 dark:bg-blue-950/20">
                    <div className="mb-2 flex items-center gap-2">
                      <Package className="h-4 w-4 text-blue-600" />
                      <div className="text-xs font-semibold uppercase text-blue-700 dark:text-blue-400">
                        eBay
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-200">
                      $1-5K/mo
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Rare collectibles
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">
                      Total Multi-Channel GMV
                    </h3>
                    <Badge variant="secondary" className="text-sm">
                      90-Day Target
                    </Badge>
                  </div>
                  <div className="text-4xl font-bold text-foreground">
                    $10-20K/mo
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Additional incremental revenue from marketplace expansion
                    without cannibalizing owned DTC store
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span className="text-muted-foreground">
                      Plus fashion marketplaces + B2B wholesale for long-term
                      scale
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
