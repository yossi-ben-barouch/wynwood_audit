import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ErrorState } from "@/components/error-state";
import type { MarketingStrategy } from "@shared/schema";
import {
  Sparkles,
  TrendingUp,
  Target,
  Zap,
  ArrowRight,
  Rocket,
  Users,
  Search,
  ShoppingCart,
  Video,
  DollarSign,
  BarChart3,
  CheckCircle2,
  Layers,
  RefreshCw,
} from "lucide-react";
import { KPICard } from "@/components/kpi-card";

export default function EcommerceOverview() {
  const {
    data: strategy,
    isLoading,
    error,
    refetch,
  } = useQuery<MarketingStrategy>({
    queryKey: ["/api/marketing-strategy"],
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse space-y-4 w-full max-w-7xl px-8">
          <div className="h-8 bg-muted rounded w-1/4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 bg-muted rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <ErrorState onRetry={() => refetch()} />;
  }

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-background border border-primary/20 p-12">
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Growth Strategy & Roadmap
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                The Path to
                <br />
                <span className="text-primary">Exponential Growth</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                A holistic marketing strategy designed to transform your solid
                foundation into a growth engine. By pulling 6 strategic levers
                in parallel, we'll create compounding results that far exceed
                the sum of their parts.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Badge
                variant="outline"
                className="px-4 py-2 text-base bg-background/50 backdrop-blur"
              >
                <Layers className="w-4 h-4 mr-2" />6 Strategic Pillars
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-base bg-background/50 backdrop-blur"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Parallel Execution
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-base bg-background/50 backdrop-blur"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Compound Growth
              </Badge>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-0"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0"></div>
        </div>

        {/* Strategy Overview */}
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">The Holistic Approach</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              {strategy?.overview.narrative}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Guiding Principles
                </h3>
                <ul className="space-y-2 pl-2">
                  {strategy?.overview.guidingPrinciples.map(
                    (principle, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-sm text-muted-foreground"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{principle}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Key Objectives
                </h3>
                <ul className="space-y-2 pl-2">
                  {strategy?.objectives.slice(0, 4).map((objective, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm text-muted-foreground"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The 6 Strategic Levers */}
        <div className="space-y-6">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              6 Strategic Levers for Growth
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each lever drives independent value, but together they create
              compound growth. We execute all 6 in parallel, not sequentially.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Lever 1: Platform & Data */}
            <Card className="border-2 border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-3">
                  <BarChart3 className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-lg">
                  Platform & Measurement
                </CardTitle>
                <CardDescription>
                  Foundation for all optimization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Fix conversion tracking, consolidate feeds, establish true
                  ROAS baseline. Without accurate data, we're flying blind.
                </p>
                <div className="space-y-2">
                  <div className="flex gap-2 text-xs">
                    <Zap className="w-3 h-3 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Week 0-1: Critical fixes
                    </span>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <Target className="w-3 h-3 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Impact: Unlocks all other optimizations
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lever 2: Social & Community */}
            <Card className="border-2 border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Social & Community</CardTitle>
                <CardDescription>Storytelling at scale</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  TikTok Live Shopping, Instagram storytelling, influencer
                  partnerships, and UGC creation at 10x volume.
                </p>
                <div className="space-y-2">
                  <div className="flex gap-2 text-xs">
                    <Zap className="w-3 h-3 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Week 1-4: Content ramp-up
                    </span>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <Target className="w-3 h-3 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Impact: +30% follower growth, viral potential
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lever 3: SEO & Content */}
            <Card className="border-2 border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-3">
                  <Search className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">SEO & Content</CardTitle>
                <CardDescription>Leverage museum authority</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Cross-link museum → shop, artist product modules, gift guides,
                  and editorial content to drive qualified traffic.
                </p>
                <div className="space-y-2">
                  <div className="flex gap-2 text-xs">
                    <Zap className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Week 1-3: Artist hubs
                    </span>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <Target className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Impact: 5-10K monthly shop visitors
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lever 4: Marketplaces */}
            <Card className="border-2 border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-transparent hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-3">
                  <ShoppingCart className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle className="text-lg">Marketplace Expansion</CardTitle>
                <CardDescription>New revenue streams</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Launch Etsy & eBay, optimize Amazon with reviews and feeds,
                  automate inventory sync across all channels.
                </p>
                <div className="space-y-2">
                  <div className="flex gap-2 text-xs">
                    <Zap className="w-3 h-3 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Week 2-5: Channel launches
                    </span>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <Target className="w-3 h-3 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Impact: $20-30K additional GMV/90 days
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lever 5: Performance Marketing */}
            <Card className="border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-3">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Performance Marketing</CardTitle>
                <CardDescription>Scale profitable channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Restructure Google Ads, optimize Meta campaigns, launch
                  YouTube Shorts, test TikTok with UGC creative.
                </p>
                <div className="space-y-2">
                  <div className="flex gap-2 text-xs">
                    <Zap className="w-3 h-3 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Week 1-8: Channel optimization
                    </span>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <Target className="w-3 h-3 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Impact: 2X to 3.5X+ ROAS
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lever 6: Fashion Brand */}
            <Card className="border-2 border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-transparent hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-3">
                  <Sparkles className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle className="text-lg">Fashion Brand</CardTitle>
                <CardDescription>
                  Premium wearable art positioning
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Develop fashion brand identity, launch SOP with 90-day runway,
                  live shopping shows, wholesale pilots.
                </p>
                <div className="space-y-2">
                  <div className="flex gap-2 text-xs">
                    <Zap className="w-3 h-3 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Month 2-6: Brand building
                    </span>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <Target className="w-3 h-3 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Impact: Premium positioning, repeat revenue
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* The Compound Effect */}
        <Card className="border-2 border-primary bg-gradient-to-br from-primary/10 to-primary/5">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-foreground">
                  Why Parallel Execution Creates Compound Growth
                </h3>
                <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                  1+1+1+1+1+1 ≠ 6. When executed in parallel, these levers
                  reinforce each other, creating exponential results.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        SEO drives Social
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Museum content feeds social calendar, artist stories
                        become viral content
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Social fuels Performance
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        UGC from influencers becomes ad creative, live shopping
                        creates urgency
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Marketplaces expand reach
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        New customers on Etsy/eBay join email list, buy from
                        main shop
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Data optimizes everything
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Accurate tracking reveals best products, channels,
                        creative
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Fashion creates differentiation
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Premium positioning raises AOV, attracts wholesale,
                        builds brand
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        All channels tell one story
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Cohesive wearable art narrative across every touchpoint
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Target KPIs */}
        <div className="space-y-6">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Target Performance Metrics
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Clear, measurable goals we're driving toward in the first 90 days
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategy?.kpis?.slice(0, 6).map((kpi, index) => (
              <KPICard
                key={index}
                label={kpi.label}
                value={kpi.value}
                suffix={kpi.suffix}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
