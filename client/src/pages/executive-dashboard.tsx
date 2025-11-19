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
import type { ExecutiveSummary } from "@shared/schema";
import {
  Sparkles,
  TrendingUp,
  Target,
  Zap,
  CheckCircle2,
  ArrowRight,
  Rocket,
  Shield,
  Clock,
  DollarSign,
} from "lucide-react";
import { KPICard } from "@/components/kpi-card";

export default function ExecutiveDashboard() {
  const {
    data: summary,
    isLoading,
    error,
    refetch,
  } = useQuery<ExecutiveSummary>({
    queryKey: ["/data/executive-summary"],
    queryFn: async () => {
      const res = await fetch("/data/executive-summary.json");
      if (!res.ok) throw new Error("Failed to fetch executive summary");
      return res.json();
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse space-y-4 w-full max-w-7xl px-8">
          <div className="h-8 bg-muted rounded w-1/4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-32 bg-muted rounded-lg"></div>
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
      <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">
        {/* Hero Header */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-background border border-primary/20 p-8 md:p-12">
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                E-Commerce Audit & Growth Strategy
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                The Wynwood Walls Shop
                <br />
                <span className="text-primary">Ready to Scale</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                You've built a solid foundation with world-class infrastructure,
                established integrations, and exclusive artist relationships.
                Now it's time to unlock exponential growth through strategic
                optimization and smart execution.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Badge
                variant="outline"
                className="px-4 py-2 text-base bg-background/50 backdrop-blur"
              >
                <Shield className="w-4 h-4 mr-2" />
                Shopify Plus Platform
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-base bg-background/50 backdrop-blur"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                DA 72 Authority
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-base bg-background/50 backdrop-blur"
              >
                <Target className="w-4 h-4 mr-2" />
                250K Monthly Visitors
              </Badge>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-0"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0"></div>
        </div>

        {/* The Story - Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* What You've Built Right */}
          <Card className="relative overflow-hidden border-2 border-green-500/20 bg-green-500/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <CardTitle className="text-lg">What's Working</CardTitle>
              </div>
              <CardDescription className="text-base">
                Strong foundational assets in place
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                <p className="text-sm text-foreground/90">
                  <strong>Shopify Plus:</strong> Scalable, reliable platform
                  with deep marketplace integrations
                </p>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                <p className="text-sm text-foreground/90">
                  <strong>Connected Systems:</strong> POS → Shopify →
                  Marketplaces already integrated
                </p>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                <p className="text-sm text-foreground/90">
                  <strong>Active Accounts:</strong> Google Ads, Analytics, Tag
                  Manager, Merchant Center all set up
                </p>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                <p className="text-sm text-foreground/90">
                  <strong>Domain Authority:</strong> DR 72 museum site with 250K
                  monthly visitors
                </p>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                <p className="text-sm text-foreground/90">
                  <strong>Exclusive Content:</strong> Direct artist
                  relationships and unique product lines
                </p>
              </div>
            </CardContent>
          </Card>

          {/* The Opportunity */}
          <Card className="relative overflow-hidden border-2 border-yellow-500/20 bg-yellow-500/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl"></div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-yellow-600" />
                </div>
                <CardTitle className="text-lg">The Opportunity</CardTitle>
              </div>
              <CardDescription className="text-base">
                Quick wins through optimization
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0"></div>
                <p className="text-sm text-foreground/90">
                  <strong>Conversion Tracking:</strong> Fix measurement to
                  unlock true ROAS visibility
                </p>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0"></div>
                <p className="text-sm text-foreground/90">
                  <strong>Feed Quality:</strong> Consolidate feeds and eliminate
                  out-of-stock issues
                </p>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0"></div>
                <p className="text-sm text-foreground/90">
                  <strong>Campaign Structure:</strong> Restructure Google Ads
                  from 5 campaigns to 200+ ad groups
                </p>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0"></div>
                <p className="text-sm text-foreground/90">
                  <strong>Email Automation:</strong> Transform monthly blasts
                  into revenue-driving flows
                </p>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0"></div>
                <p className="text-sm text-foreground/90">
                  <strong>Museum Synergy:</strong> Leverage 250K visitors to
                  drive shop traffic
                </p>
              </div>
            </CardContent>
          </Card>

          {/* The Path Forward */}
          <Card className="relative overflow-hidden border-2 border-primary/20 bg-primary/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-lg">The Path Forward</CardTitle>
              </div>
              <CardDescription className="text-base">
                90-day acceleration plan
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                <p className="text-sm text-foreground/90">
                  <strong>Week 0-2:</strong> Fix measurement & feed hygiene
                  (foundation)
                </p>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                <p className="text-sm text-foreground/90">
                  <strong>Week 3-6:</strong> Restructure campaigns & launch
                  email automation
                </p>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                <p className="text-sm text-foreground/90">
                  <strong>Week 7-12:</strong> Marketplace expansion (Etsy, eBay)
                  + museum integration
                </p>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                <p className="text-sm text-foreground/90">
                  <strong>Month 3-6:</strong> Fashion brand positioning & live
                  shopping programs
                </p>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                <p className="text-sm text-foreground/90">
                  <strong>Ongoing:</strong> AI automation & content production
                  at scale
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Metrics */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              Current Performance Snapshot
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {summary?.criticalMetrics?.map((metric, index) => (
              <KPICard
                key={index}
                label={metric.label}
                value={metric.value}
                trend={metric.trend}
                trendDirection={metric.trendDirection}
                suffix={metric.suffix}
              />
            ))}
          </div>
        </div>

        {/* The Positive Story */}
        <Card className="border-2 border-primary/20">
          <CardHeader className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">
                  The Bottom Line: You're Positioned to Win
                </CardTitle>
                <CardDescription className="text-base text-foreground/80 leading-relaxed">
                  Most e-commerce businesses struggle because they lack the
                  fundamentals: reliable infrastructure, exclusive products,
                  strong domain authority, or established traffic. You have all
                  of these. The issue isn't what you've built—it's optimizing
                  what you have and executing at the right pace.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Current State */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Where You Are Today
              </h3>
              <div className="pl-4 space-y-2">
                <p className="text-base text-foreground/80">
                  <strong className="text-foreground">Shopify Plus</strong>{" "}
                  gives you enterprise-grade reliability and scalability.
                </p>
                <p className="text-base text-foreground/80">
                  <strong className="text-foreground">
                    Integrated systems
                  </strong>{" "}
                  mean your POS, web store, and marketplaces already
                  communicate—a massive head start.
                </p>
                <p className="text-base text-foreground/80">
                  <strong className="text-foreground">
                    Google Ads & Analytics
                  </strong>{" "}
                  are live and running—you're not starting from zero.
                </p>
                <p className="text-base text-foreground/80">
                  <strong className="text-foreground">
                    Domain Authority 72
                  </strong>{" "}
                  with 250K monthly museum visitors is an unfair advantage in
                  your market.
                </p>
                <p className="text-base text-foreground/80">
                  <strong className="text-foreground">
                    Exclusive artist collaborations
                  </strong>{" "}
                  create products your competitors simply can't replicate.
                </p>
              </div>
            </div>

            {/* The Gap */}
            <div className="space-y-3 pt-4 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                What's Holding You Back
              </h3>
              <div className="pl-4 space-y-2">
                <p className="text-base text-foreground/80">
                  <strong className="text-foreground">
                    Execution over strategy:
                  </strong>{" "}
                  Campaigns are running, but not optimally structured for
                  granular control and scaling.
                </p>
                <p className="text-base text-foreground/80">
                  <strong className="text-foreground">Measurement gaps:</strong>{" "}
                  Conversion tracking issues prevent you from seeing true ROAS
                  and optimizing spend.
                </p>
                <p className="text-base text-foreground/80">
                  <strong className="text-foreground">Manual workflows:</strong>{" "}
                  Too much time spent on tasks that could be automated, limiting
                  scale.
                </p>
                <p className="text-base text-foreground/80">
                  <strong className="text-foreground">Siloed channels:</strong>{" "}
                  Museum and shop operate independently instead of as a unified
                  growth engine.
                </p>
                <p className="text-base text-foreground/80">
                  <strong className="text-foreground">Basic campaigns:</strong>{" "}
                  Google Ads has 5 campaigns when it should have 200+ ad groups
                  for precision.
                </p>
              </div>
            </div>

            {/* The Turnaround */}
            <div className="space-y-3 pt-4 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                The Quick Turnaround Strategy
              </h3>
              <div className="pl-4 space-y-2">
                <p className="text-base text-foreground/80">
                  <strong className="text-foreground">
                    Fix measurement first:
                  </strong>{" "}
                  Accurate tracking unlocks optimization and scales profitable
                  campaigns.
                </p>
                <p className="text-base text-foreground/80">
                  <strong className="text-foreground">
                    Restructure for precision:
                  </strong>{" "}
                  Transform broad campaigns into granular ad groups that you can
                  control and optimize.
                </p>
                <p className="text-base text-foreground/80">
                  <strong className="text-foreground">
                    Automate the repetitive:
                  </strong>{" "}
                  Email flows, feed management, and content creation through AI
                  saves 80% of time.
                </p>
                <p className="text-base text-foreground/80">
                  <strong className="text-foreground">
                    Bridge museum to shop:
                  </strong>{" "}
                  Turn 250K monthly visitors into qualified shop traffic with
                  strategic integration.
                </p>
                <p className="text-base text-foreground/80">
                  <strong className="text-foreground">
                    Expand to marketplaces:
                  </strong>{" "}
                  Etsy, eBay, and expanded Amazon presence add 20-30% GMV with
                  automated feeds.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Expected Impact */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Rocket className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              Expected Impact (90 Days)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">
                      2-3.5x
                    </div>
                    <p className="text-sm text-muted-foreground">
                      ROAS Improvement
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      From 2X to 3.5X+ with proper tracking
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">
                      40-50%
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Conversion Rate Lift
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      From 0.8% to 1.2-1.5% target
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">
                      $20-30K
                    </div>
                    <p className="text-sm text-muted-foreground">
                      New Marketplace GMV
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      First 90 days from Etsy + eBay
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">
                      80%
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Time Savings
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Via automation & delegation
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
