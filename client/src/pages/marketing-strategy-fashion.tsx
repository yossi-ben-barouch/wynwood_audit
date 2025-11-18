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
  CheckCircle2,
  Heart,
  Lightbulb,
  Repeat,
  Shirt,
  ShoppingBag,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react";

export default function FashionStrategyPage() {
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
              Unable to load fashion strategy data
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const section = data.sections.find((s: any) => s.id === "fashion");

  if (!section) {
    return null;
  }

  // Influencer niches
  const influencerNiches = [
    {
      niche: "Street Art & Graffiti Fashion",
      examples: "Streetwear enthusiasts, urban culture creators",
      platforms: "Instagram, TikTok",
      color: "purple",
    },
    {
      niche: "Sustainable & Ethical Fashion",
      examples: "Eco-conscious shoppers, slow fashion advocates",
      platforms: "Instagram, YouTube",
      color: "green",
    },
    {
      niche: "Art Collector Community",
      examples: "Contemporary art lovers, gallery-goers",
      platforms: "Instagram, Pinterest",
      color: "blue",
    },
    {
      niche: "Miami Lifestyle & Culture",
      examples: "Local Miami influencers, culture curators",
      platforms: "TikTok, Instagram",
      color: "orange",
    },
  ];

  // TikTok strategy pillars
  const tiktokPillars = [
    {
      title: "Content Distribution",
      icon: Video,
      description: "Massive organic reach for fashion content",
      benefits: [
        "Algorithm favors fashion & lifestyle",
        "Short-form artist interviews go viral",
        "Behind-the-scenes content performs well",
      ],
    },
    {
      title: "Native Checkout",
      icon: ShoppingBag,
      description: "Seamless in-app shopping experience",
      benefits: [
        "No friction - buy without leaving app",
        "Product tagging in videos",
        "TikTok Shop integration",
      ],
    },
    {
      title: "Affiliate Network",
      icon: Users,
      description: "Commission-based creator partnerships",
      benefits: [
        "Creators promote with unique codes",
        "Performance-based payouts",
        "Scales reach without upfront cost",
      ],
    },
  ];

  // AI content advantages
  const aiContentStrategy = [
    {
      capability: "Multi-Demographic Testing",
      description: "Generate models across age ranges (18-25, 25-40, 40+)",
      impact: "Test which demographics resonate best per product line",
    },
    {
      capability: "Rapid Hook Iteration",
      description: "Test 10+ ad hooks per product without reshoots",
      impact: "Find winning messaging faster, lower production costs",
    },
    {
      capability: "Scene & Setting Variety",
      description:
        "Place products in urban, gallery, beach, nightlife settings",
      impact: "Match creative to audience psychographics",
    },
    {
      capability: "UGC-Style Content at Scale",
      description: "Generate authentic-feeling user testimonials and try-ons",
      impact: "Build social proof without sourcing real UGC initially",
    },
  ];

  // B2B Wholesale channels
  const wholesaleChannels = [
    {
      name: "Macy's",
      type: "Department Store",
      approach: "Brand partnership, pop-up corners",
      products: "Curated wearable art collections",
    },
    {
      name: "Bloomingdale's",
      type: "Premium Retail",
      approach: "Artist-driven capsules, exclusive lines",
      products: "High-end apparel, art collectibles",
    },
    {
      name: "Boutique Network",
      type: "Specialty Stores",
      approach: "Wholesale distribution via reps",
      products: "Fashion category accelerator items",
    },
  ];

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
                <Shirt className="h-8 w-8 text-purple-600" />
              </div>
              <Badge variant="outline" className="text-sm">
                Strategic Growth Pillar
              </Badge>
            </div>

            <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground">
              Fashion Brand Building
            </h1>

            <p className="max-w-3xl text-lg text-muted-foreground">
              {section.description}
            </p>

            {/* Strategic Opportunity Callout */}
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border-2 border-purple-200/50 bg-purple-50/50 p-5 dark:border-purple-900/50 dark:bg-purple-950/20">
                <div className="mb-3 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-600" />
                  <h3 className="font-semibold text-purple-900 dark:text-purple-200">
                    Unique Positioning
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Street artist collaborations create{" "}
                  <strong>one-of-a-kind items</strong> different from mainstream
                  fashion, woven with museum heritage
                </p>
              </div>

              <div className="rounded-xl border-2 border-green-200/50 bg-green-50/50 p-5 dark:border-green-900/50 dark:bg-green-950/20">
                <div className="mb-3 flex items-center gap-2">
                  <Repeat className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold text-green-900 dark:text-green-200">
                    Repeat Revenue
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Unlike gifts/books, <strong>clothing can be resold</strong> to
                  same customers as new drops and artists launch
                </p>
              </div>

              <div className="rounded-xl border-2 border-blue-200/50 bg-blue-50/50 p-5 dark:border-blue-900/50 dark:bg-blue-950/20">
                <div className="mb-3 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-blue-900 dark:text-blue-200">
                    Authentic Story
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Artist stories + museum connection ={" "}
                  <strong>exclusivity and authenticity</strong> in competitive
                  market
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AI-Powered Content Strategy */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600/10 text-pink-600">
              <Sparkles className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              AI-Powered Content Engine
            </h2>
            <Badge variant="secondary" className="text-xs">
              Competitive Advantage
            </Badge>
          </div>

          <div className="mb-6 rounded-xl border-2 border-pink-200/50 bg-pink-50/30 p-6 dark:border-pink-900/50 dark:bg-pink-950/20">
            <p className="text-sm text-muted-foreground">
              <strong>The Challenge:</strong> Fashion is highly competitive and
              visual-driven. Traditional content production is expensive and
              slow.
              <br />
              <br />
              <strong>The Solution:</strong> AI-generated video ads and UGC
              content enable rapid testing of different demographics, hooks, and
              settings at fraction of traditional costs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {aiContentStrategy.map((item, index) => (
              <Card
                key={index}
                className="border-2 border-pink-200/50 bg-gradient-to-br from-pink-50/50 to-background transition-all hover:shadow-xl dark:from-pink-950/20"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{item.capability}</CardTitle>
                  <CardDescription className="text-sm">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border border-green-200 bg-green-50/50 p-3 dark:border-green-900/50 dark:bg-green-950/20">
                    <div className="text-xs font-semibold uppercase tracking-wide text-green-700 dark:text-green-400">
                      Impact
                    </div>
                    <p className="mt-1 text-sm text-foreground">
                      {item.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Content Examples - Video Showcase */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 text-white">
              <Video className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              AI Content in Action
            </h2>
            <Badge variant="secondary" className="text-xs">
              Live Examples
            </Badge>
          </div>

          <div className="mb-6 rounded-xl border-2 border-pink-200/50 bg-pink-50/30 p-6 dark:border-pink-900/50 dark:bg-pink-950/20">
            <p className="text-sm text-muted-foreground">
              <strong>Proof of Concept:</strong> These examples demonstrate how AI transforms simple product photography into engaging content across multiple formats and product categories—from apparel to accessories.
            </p>
          </div>

          {/* Apparel Section - Hats */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-foreground flex items-center gap-2">
              <Shirt className="h-5 w-5 text-pink-600" />
              Apparel: Multi-Scene Testing
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Same hat, different scenes, hooks, and formats—including UGC-style content. From urban streetwear to art gallery sophistication.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Video 1 */}
            <Card className="overflow-hidden border-2 border-pink-200/50 transition-all hover:border-pink-500/50 hover:shadow-2xl">
              <CardHeader className="bg-gradient-to-br from-pink-50/50 to-purple-50/50 dark:from-pink-950/20 dark:to-purple-950/20">
                <CardTitle className="text-base">Scene 1: Urban Street</CardTitle>
                <CardDescription className="text-xs">
                  Streetwear context for younger demographic
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <video
                  className="w-full"
                  controls
                  loop
                  muted
                  playsInline
                >
                  <source src="/media/hat1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </CardContent>
            </Card>

            {/* Video 2 */}
            <Card className="overflow-hidden border-2 border-purple-200/50 transition-all hover:border-purple-500/50 hover:shadow-2xl">
              <CardHeader className="bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-purple-950/20 dark:to-blue-950/20">
                <CardTitle className="text-base">Scene 2: Gallery Setting</CardTitle>
                <CardDescription className="text-xs">
                  Art collector appeal, premium positioning
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <video
                  className="w-full"
                  controls
                  loop
                  muted
                  playsInline
                >
                  <source src="/media/hat2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </CardContent>
            </Card>

            {/* Video 3 */}
            <Card className="overflow-hidden border-2 border-blue-200/50 transition-all hover:border-blue-500/50 hover:shadow-2xl">
              <CardHeader className="bg-gradient-to-br from-blue-50/50 to-pink-50/50 dark:from-blue-950/20 dark:to-pink-950/20">
                <CardTitle className="text-base">Scene 3: Lifestyle</CardTitle>
                <CardDescription className="text-xs">
                  Casual wear, broader audience appeal
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <video
                  className="w-full"
                  controls
                  loop
                  muted
                  playsInline
                >
                  <source src="/media/hat3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </CardContent>
            </Card>

            {/* Video 4 */}
            <Card className="overflow-hidden border-2 border-green-200/50 transition-all hover:border-green-500/50 hover:shadow-2xl">
              <CardHeader className="bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20">
                <CardTitle className="text-base">Scene 4: UGC Style</CardTitle>
                <CardDescription className="text-xs">
                  Team member intro, authentic testimonial
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <video
                  className="w-full"
                  controls
                  loop
                  muted
                  playsInline
                >
                  <source src="/media/hat4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 rounded-xl border-2 border-green-200/50 bg-green-50/30 p-6 dark:border-green-900/50 dark:bg-green-950/20">
            <div className="mb-3 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-green-900 dark:text-green-200">
                Testing Framework Impact
              </h3>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-sm">
                <div className="font-semibold text-foreground">Traditional Method</div>
                <p className="text-muted-foreground">4 creative variants = 4 shoots, multiple models, multiple locations + UGC sourcing. Cost: $4K-$7K, Timeline: 3-4 weeks</p>
              </div>
              <div className="text-sm">
                <div className="font-semibold text-foreground">AI Method</div>
                <p className="text-muted-foreground">4 creative variants = 1 product photo input + prompts. Cost: $75-$150, Timeline: 24-48 hours</p>
              </div>
              <div className="text-sm">
                <div className="font-semibold text-green-700 dark:text-green-400">Result</div>
                <p className="text-muted-foreground"><strong>40-50x faster, 30-50x cheaper</strong> creative testing. Includes UGC-style format. Scale winners in 72 hours.</p>
              </div>
            </div>
          </div>

          {/* Accessories Section - Tote Bags */}
          <div className="mt-12 mb-8">
            <h3 className="mb-4 text-xl font-semibold text-foreground flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-purple-600" />
              Accessories: Product Lifestyle Commercials
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              White background product images transformed into engaging short-form commercials with storylines, actors, and lifestyle context. Perfect for social ads and TikTok content.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Tote Video 1 */}
            <Card className="overflow-hidden border-2 border-purple-200/50 transition-all hover:border-purple-500/50 hover:shadow-2xl">
              <CardHeader className="bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20">
                <CardTitle className="text-base">Skit 1: Daily Commute</CardTitle>
                <CardDescription className="text-xs">
                  Lifestyle integration with narrative storytelling
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <video
                  className="w-full"
                  controls
                  loop
                  muted
                  playsInline
                >
                  <source src="/media/product_lifstyle.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </CardContent>
            </Card>

            {/* Tote Video 2 */}
            <Card className="overflow-hidden border-2 border-pink-200/50 transition-all hover:border-pink-500/50 hover:shadow-2xl">
              <CardHeader className="bg-gradient-to-br from-pink-50/50 to-orange-50/50 dark:from-pink-950/20 dark:to-orange-950/20">
                <CardTitle className="text-base">Skit 2: Shopping Scene</CardTitle>
                <CardDescription className="text-xs">
                  Product featured in authentic retail moment
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <video
                  className="w-full"
                  controls
                  loop
                  muted
                  playsInline
                >
                  <source src="/media/product_lifstyle2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </CardContent>
            </Card>

            {/* Tote Video 3 */}
            <Card className="overflow-hidden border-2 border-orange-200/50 transition-all hover:border-orange-500/50 hover:shadow-2xl">
              <CardHeader className="bg-gradient-to-br from-orange-50/50 to-purple-50/50 dark:from-orange-950/20 dark:to-purple-950/20">
                <CardTitle className="text-base">Skit 3: Art Gallery</CardTitle>
                <CardDescription className="text-xs">
                  Aligns product with art & culture aesthetic
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <video
                  className="w-full"
                  controls
                  loop
                  muted
                  playsInline
                >
                  <source src="/media/product_lifstyle3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 rounded-xl border-2 border-blue-200/50 bg-blue-50/30 p-6 dark:border-blue-900/50 dark:bg-blue-950/20">
            <div className="mb-3 flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200">
                From Static to Cinematic
              </h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="text-sm">
                <div className="font-semibold text-foreground">Input</div>
                <p className="text-muted-foreground">Simple white background product photo from existing inventory</p>
              </div>
              <div className="text-sm">
                <div className="font-semibold text-blue-700 dark:text-blue-400">Output</div>
                <p className="text-muted-foreground"><strong>Full short-form commercial</strong> with actors, storylines, multiple scenes, and lifestyle context—ready for social ads</p>
              </div>
            </div>
          </div>
        </div>

        {/* Influencer & Collaboration Strategy */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/10 text-purple-600">
              <Users className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Influencer & Collaboration Strategy
            </h2>
          </div>

          <div className="mb-6 rounded-xl border border-border/50 bg-card p-6">
            <h3 className="mb-4 font-semibold text-foreground">
              Target Niches for Street Art Fashion Collabs
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {influencerNiches.map((item, index) => {
                const colorClasses = {
                  purple: {
                    bg: "bg-purple-50/50 dark:bg-purple-950/20",
                    border: "border-purple-200/50",
                    text: "text-purple-700 dark:text-purple-400",
                  },
                  green: {
                    bg: "bg-green-50/50 dark:bg-green-950/20",
                    border: "border-green-200/50",
                    text: "text-green-700 dark:text-green-400",
                  },
                  blue: {
                    bg: "bg-blue-50/50 dark:bg-blue-950/20",
                    border: "border-blue-200/50",
                    text: "text-blue-700 dark:text-blue-400",
                  },
                  orange: {
                    bg: "bg-orange-50/50 dark:bg-orange-950/20",
                    border: "border-orange-200/50",
                    text: "text-orange-700 dark:text-orange-400",
                  },
                };
                const colors =
                  colorClasses[item.color as keyof typeof colorClasses];

                return (
                  <div
                    key={index}
                    className={`rounded-lg border ${colors.border} ${colors.bg} p-4`}
                  >
                    <div className={`mb-2 text-sm font-bold ${colors.text}`}>
                      {item.niche}
                    </div>
                    <p className="mb-2 text-xs text-muted-foreground">
                      {item.examples}
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">
                        {item.platforms}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl border-2 border-purple-200/50 bg-purple-50/30 p-6 dark:border-purple-900/50 dark:bg-purple-950/20">
            <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-purple-700 dark:text-purple-400">
              <CheckCircle2 className="h-4 w-4" />
              Collaboration Framework
            </h4>
            <ul className="space-y-2">
              <li className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 block h-2 w-2 shrink-0 rounded-full bg-purple-600" />
                <span>
                  <strong>Seeding:</strong> Send limited pieces to
                  micro-influencers (5K-50K followers) in target niches
                </span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 block h-2 w-2 shrink-0 rounded-full bg-purple-600" />
                <span>
                  <strong>Whitelisting:</strong> Get rights to use their content
                  in paid ads for authenticity
                </span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 block h-2 w-2 shrink-0 rounded-full bg-purple-600" />
                <span>
                  <strong>Affiliate Codes:</strong> Commission-based
                  partnerships scale without upfront cost
                </span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 block h-2 w-2 shrink-0 rounded-full bg-purple-600" />
                <span>
                  <strong>Artist Co-Creation:</strong> Feature artists in
                  influencer content for dual audience reach
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* TikTok Ecosystem Advantage */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black">
              <Video className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              TikTok: The Fashion Powerhouse
            </h2>
            <Badge variant="secondary" className="text-xs">
              Distribution + Checkout in One
            </Badge>
          </div>

          <div className="mb-6 rounded-xl border-2 border-blue-200/50 bg-blue-50/30 p-6 dark:border-blue-900/50 dark:bg-blue-950/20">
            <p className="text-sm text-muted-foreground">
              <strong>Why TikTok is Critical:</strong> It combines massive
              organic reach (distribution) with native shopping (checkout) in a
              single platform. Fashion content thrives here, and the affiliate
              network allows creators to become brand ambassadors with
              performance-based payouts.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {tiktokPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={index}
                  className="border-2 transition-all hover:border-primary/50 hover:shadow-xl"
                >
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{pillar.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {pillar.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pillar.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Live Shopping Strategy */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-red-600">
              <Video className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Live Shopping Audience Expansion
            </h2>
            <Badge variant="destructive" className="text-xs">
              High Priority
            </Badge>
          </div>

          <div className="mb-6 rounded-xl border-2 border-red-200/50 bg-red-50/30 p-6 dark:border-red-900/50 dark:bg-red-950/20">
            <p className="text-sm text-muted-foreground">
              <strong>Fashion + Live Shopping = Perfect Match:</strong> Big
              channels selling shoes and apparel currently dominate TikTok Live
              and Whatnot. Fashion works exceptionally well in live format
              because viewers can see styling, fit, and exclusivity in
              real-time.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-2 border-red-200/50 bg-gradient-to-br from-red-50/50 to-background dark:from-red-950/20">
              <CardHeader>
                <CardTitle className="text-lg">Live Show Format</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Weekly Cadence
                  </div>
                  <p className="text-sm text-foreground">
                    30-45 min weekly shows featuring 6-10 SKUs with artists and
                    different guest appearances
                  </p>
                </div>
                <div>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Platforms
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      TikTok Live
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Instagram Live
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Whatnot
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200/50 bg-gradient-to-br from-orange-50/50 to-background dark:from-orange-950/20">
              <CardHeader>
                <CardTitle className="text-lg">Engagement Tactics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                    <span>
                      <strong>Limited Editions:</strong> Only X units available
                      during live
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                    <span>
                      <strong>Signed Pieces:</strong> Artist signatures on
                      select items
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                    <span>
                      <strong>Surprise Giveaways:</strong> Random viewer rewards
                      drive FOMO
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                    <span>
                      <strong>Behind-the-Scenes:</strong> Artist stories and
                      design process
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* B2B Wholesale Channels */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600">
              <Store className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              B2B Wholesale Channels
            </h2>
            <Badge variant="secondary" className="text-xs">
              Retail Partnerships
            </Badge>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {wholesaleChannels.map((channel, index) => (
              <Card
                key={index}
                className="border-2 border-indigo-200/50 transition-all hover:border-indigo-400/50 hover:shadow-xl"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{channel.name}</CardTitle>
                  <Badge variant="outline" className="text-xs w-fit">
                    {channel.type}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Approach
                    </div>
                    <p className="text-sm text-foreground">
                      {channel.approach}
                    </p>
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Products
                    </div>
                    <p className="text-sm text-foreground">
                      {channel.products}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 rounded-xl border-2 border-green-200/50 bg-green-50/30 p-6 dark:border-green-900/50 dark:bg-green-950/20">
            <div className="mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-200">
                Wholesale Advantage
              </h3>
            </div>
            <ul className="space-y-2">
              <li className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                <span>
                  40% of products are internally produced - perfect for
                  wholesale control
                </span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                <span>
                  Leverage Fashion Category Accelerator plan for wholesale
                  readiness
                </span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                <span>
                  Build brand presence in physical retail while protecting DTC
                  margins
                </span>
              </li>
            </ul>
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
                className="group overflow-hidden border-2 transition-all hover:border-purple-500/50 hover:shadow-2xl"
              >
                <CardHeader className="border-b bg-gradient-to-r from-purple-500/5 to-pink-500/5 pb-4">
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
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />
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
                          <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-purple-600" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dependencies */}
                  {play.dependencies && play.dependencies.length > 0 && (
                    <div className="rounded-lg border border-yellow-200 bg-yellow-50/50 p-3 dark:border-yellow-900/50 dark:bg-yellow-950/20">
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-yellow-700 dark:text-yellow-400">
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
      </div>
    </div>
  );
}
