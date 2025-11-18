import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  FileText,
  Lightbulb,
  Repeat,
  Target,
  Users,
  Zap,
} from "lucide-react";

export default function SOPPage() {
  const procedures = [
    {
      title: "Product Upload & Optimization",
      category: "Product Management",
      frequency: "Daily/Weekly",
      owner: "E-commerce Manager",
      duration: "30-45 min per batch",
      color: "blue",
      steps: [
        "Download high-res product images from shared drive",
        "Use AI tools (ChatGPT) to generate product descriptions with brand voice",
        "Create SEO-optimized titles with target keywords",
        "Set pricing based on cost + 2.5x markup minimum",
        "Add product to Shopify with all variants (size, color)",
        "Optimize images (compress to <200KB, maintain quality)",
        "Create alt text for all images (SEO + accessibility)",
        "Tag products with collections and artist names",
        "Set up automatic inventory sync if using multiple channels",
        "Preview product page on mobile and desktop",
      ],
      checklist: [
        "All images compressed and optimized",
        "Description includes artist story",
        "SEO metadata completed",
        "Product tagged correctly",
        "Mobile preview checked",
      ],
    },
    {
      title: "Weekly Social Media Content Creation",
      category: "Social Media",
      frequency: "Weekly",
      owner: "Social Media Manager",
      duration: "3-4 hours",
      color: "purple",
      steps: [
        "Review content calendar and upcoming products/events",
        "Generate 7 Instagram posts + captions using AI (ChatGPT)",
        "Create 5-7 TikTok video concepts with hooks",
        "Design carousel posts in Canva (artist spotlights, product showcases)",
        "Schedule posts using Meta Business Suite or Buffer",
        "Prepare Instagram Stories (behind-the-scenes, polls, Q&A)",
        "Create Reels from product videos (15-30 sec clips)",
        "Draft hashtag sets (branded + trending + niche)",
        "Plan engagement time blocks (respond to comments/DMs)",
        "Track analytics and adjust strategy weekly",
      ],
      checklist: [
        "7 feed posts scheduled",
        "5 TikTok concepts ready",
        "Stories planned for each day",
        "Hashtag strategy updated",
        "Engagement blocks calendared",
      ],
    },
    {
      title: "Google & Meta Ads Weekly Review",
      category: "Performance Marketing",
      frequency: "Weekly",
      owner: "Paid Media Manager",
      duration: "2-3 hours",
      color: "green",
      steps: [
        "Export weekly performance data from Google Ads and Meta",
        "Calculate true ROAS (Purchase conversions only)",
        "Identify top 3 performing campaigns and creatives",
        "Identify bottom 3 underperforming assets",
        "Pause campaigns with ROAS <250% after 7 days",
        "Increase budget by 20% on campaigns with ROAS >400%",
        "Test 2-3 new creative variations per week",
        "Review search terms and add negative keywords",
        "Check conversion tracking (test purchase event)",
        "Update performance dashboard and report to leadership",
      ],
      checklist: [
        "ROAS calculated accurately",
        "Underperformers paused",
        "Winners scaled +20%",
        "New creatives launched",
        "Dashboard updated",
      ],
    },
    {
      title: "Email Campaign Deployment",
      category: "Email Marketing",
      frequency: "Bi-weekly",
      owner: "Email Marketing Manager",
      duration: "2-3 hours",
      color: "orange",
      steps: [
        "Define campaign goal (new product, sale, artist spotlight)",
        "Segment audience (VIP customers, cart abandoners, engaged subscribers)",
        "Write subject lines and preview text (A/B test 2 versions)",
        "Design email template with clear CTA",
        "Add product images and descriptions",
        "Personalize content using merge tags (first name, past purchases)",
        "Set up automation triggers if applicable",
        "Send test email to team for review",
        "Schedule send for optimal time (Tuesday-Thursday, 10am-2pm)",
        "Monitor open rates, CTR, and conversions in first 24 hours",
      ],
      checklist: [
        "Audience segmented",
        "Subject line A/B test set",
        "Mobile responsive checked",
        "CTAs clear and functional",
        "Tracking links working",
      ],
    },
    {
      title: "Product Feed Updates & Marketplace Sync",
      category: "Platform Management",
      frequency: "Weekly",
      owner: "E-commerce Manager",
      duration: "1-2 hours",
      color: "red",
      steps: [
        "Export product catalog from Shopify",
        "Review feed for errors (missing titles, images, prices)",
        "Update Google Merchant Center feed",
        "Sync inventory with Amazon Seller Central",
        "Update Etsy listings with new products",
        "Fix any disapproved products in Google Shopping",
        "Update product availability across all channels",
        "Check for pricing discrepancies",
        "Add new products to all active marketplaces",
        "Monitor feed health scores and address issues",
      ],
      checklist: [
        "All feeds synced and approved",
        "No pricing errors",
        "Inventory levels accurate",
        "New products added to all channels",
        "Feed health at 90%+",
      ],
    },
    {
      title: "Monthly Performance Review & Reporting",
      category: "Analytics & Reporting",
      frequency: "Monthly",
      owner: "E-commerce Director",
      duration: "4-6 hours",
      color: "indigo",
      steps: [
        "Export all channel performance data (Shopify, GA4, ads platforms)",
        "Calculate key metrics: Revenue, AOV, CR, ROAS, CAC, LTV",
        "Compare vs. previous month and YoY",
        "Analyze top-performing products and categories",
        "Review customer acquisition channels and costs",
        "Identify trends in traffic, conversion, and revenue",
        "Create executive summary with insights and recommendations",
        "Prepare visual dashboard (charts, graphs)",
        "Schedule stakeholder meeting to present findings",
        "Document learnings and action items for next month",
      ],
      checklist: [
        "All data sources consolidated",
        "KPIs calculated accurately",
        "Executive summary written",
        "Visual dashboard prepared",
        "Meeting scheduled",
      ],
    },
    {
      title: "Customer Service & Returns Processing",
      category: "Customer Experience",
      frequency: "Daily",
      owner: "Customer Service Team",
      duration: "1-2 hours",
      color: "teal",
      steps: [
        "Review all customer inquiries (email, chat, social DMs)",
        "Respond to product questions within 4 hours",
        "Process return requests via Shopify",
        "Issue refunds or store credit per policy",
        "Track common issues and escalate to product team",
        "Update order status and tracking information",
        "Follow up on negative reviews with solutions",
        "Log all interactions in CRM (if applicable)",
        "Send proactive updates on delayed shipments",
        "Collect feedback for product/service improvements",
      ],
      checklist: [
        "All inquiries responded to",
        "Returns processed same-day",
        "Issues logged and escalated",
        "Customer satisfaction maintained",
        "Follow-ups completed",
      ],
    },
  ];

  const categoryColors = {
    blue: {
      bg: "bg-gradient-to-br from-blue-50/50 to-background dark:from-blue-950/20",
      border: "border-blue-200/50 dark:border-blue-900/50",
      icon: "bg-blue-100 text-blue-600 dark:bg-blue-900/20",
      badge: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
    },
    purple: {
      bg: "bg-gradient-to-br from-purple-50/50 to-background dark:from-purple-950/20",
      border: "border-purple-200/50 dark:border-purple-900/50",
      icon: "bg-purple-100 text-purple-600 dark:bg-purple-900/20",
      badge: "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300",
    },
    green: {
      bg: "bg-gradient-to-br from-green-50/50 to-background dark:from-green-950/20",
      border: "border-green-200/50 dark:border-green-900/50",
      icon: "bg-green-100 text-green-600 dark:bg-green-900/20",
      badge: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
    },
    orange: {
      bg: "bg-gradient-to-br from-orange-50/50 to-background dark:from-orange-950/20",
      border: "border-orange-200/50 dark:border-orange-900/50",
      icon: "bg-orange-100 text-orange-600 dark:bg-orange-900/20",
      badge: "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300",
    },
    red: {
      bg: "bg-gradient-to-br from-red-50/50 to-background dark:from-red-950/20",
      border: "border-red-200/50 dark:border-red-900/50",
      icon: "bg-red-100 text-red-600 dark:bg-red-900/20",
      badge: "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300",
    },
    indigo: {
      bg: "bg-gradient-to-br from-indigo-50/50 to-background dark:from-indigo-950/20",
      border: "border-indigo-200/50 dark:border-indigo-900/50",
      icon: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/20",
      badge: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300",
    },
    teal: {
      bg: "bg-gradient-to-br from-teal-50/50 to-background dark:from-teal-950/20",
      border: "border-teal-200/50 dark:border-teal-900/50",
      icon: "bg-teal-100 text-teal-600 dark:bg-teal-900/20",
      badge: "bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300",
    },
  };

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-br from-background via-background to-indigo-500/5">
      <div className="mx-auto max-w-[1400px] px-8 py-12">
        {/* Hero Section */}
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 via-background to-purple-500/10 p-12 shadow-2xl">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-indigo-500/20 p-3">
                <BookOpen className="h-8 w-8 text-indigo-600" />
              </div>
              <Badge variant="outline" className="text-sm">
                Standard Operating Procedures
              </Badge>
            </div>

            <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground">
              E-Commerce Operations Playbook
            </h1>

            <p className="max-w-3xl text-lg text-muted-foreground">
              Step-by-step standard operating procedures for consistent execution
              across product management, marketing, and customer experience.
              Follow these workflows to maintain quality, efficiency, and
              scalability.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Badge variant="secondary" className="text-sm">
                7 Core Procedures
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Daily to Monthly Cadence
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Cross-Functional Workflows
              </Badge>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mb-16 grid gap-6 md:grid-cols-4">
          <Card className="border-2 border-blue-200/50 bg-gradient-to-br from-blue-50/50 to-background transition-all hover:shadow-lg dark:from-blue-950/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileText className="h-5 w-5 text-blue-600" />
                Total SOPs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">7</div>
              <p className="text-xs text-muted-foreground">
                Documented procedures
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200/50 bg-gradient-to-br from-green-50/50 to-background transition-all hover:shadow-lg dark:from-green-950/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Repeat className="h-5 w-5 text-green-600" />
                Frequency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">Daily</div>
              <p className="text-xs text-muted-foreground">
                To monthly cadence
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200/50 bg-gradient-to-br from-purple-50/50 to-background transition-all hover:shadow-lg dark:from-purple-950/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="h-5 w-5 text-purple-600" />
                Team Coverage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">100%</div>
              <p className="text-xs text-muted-foreground">
                All roles defined
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200/50 bg-gradient-to-br from-orange-50/50 to-background transition-all hover:shadow-lg dark:from-orange-950/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Zap className="h-5 w-5 text-orange-600" />
                Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">40%</div>
              <p className="text-xs text-muted-foreground">
                Time savings vs ad-hoc
              </p>
            </CardContent>
          </Card>
        </div>

        {/* SOP Grid */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600">
            <Target className="h-5 w-5" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">
            Standard Operating Procedures
          </h2>
        </div>

        <div className="grid gap-6">
          {procedures.map((proc, index) => {
            const colors = categoryColors[proc.color as keyof typeof categoryColors];
            
            return (
              <Card
                key={index}
                className={`border-2 ${colors.border} ${colors.bg} transition-all hover:shadow-xl`}
              >
                <CardHeader>
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colors.icon}`}>
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="mb-2 text-xl">
                          {proc.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className={colors.badge}>
                            {proc.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <Repeat className="mr-1 h-3 w-3" />
                            {proc.frequency}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="mr-1 h-3 w-3" />
                            {proc.duration}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <Users className="mr-1 h-3 w-3" />
                            {proc.owner}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Steps */}
                  <div>
                    <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground">
                      <FileText className="h-4 w-4" />
                      Procedure Steps
                    </h4>
                    <ol className="space-y-2">
                      {proc.steps.map((step, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-muted-foreground"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
                            {i + 1}
                          </span>
                          <span className="pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Checklist */}
                  <div className={`rounded-lg border ${colors.border} bg-background/50 p-5`}>
                    <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground">
                      <Lightbulb className="h-4 w-4" />
                      Quality Checklist
                    </h4>
                    <ul className="space-y-2">
                      {proc.checklist.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${colors.icon.split(' ')[1]}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Best Practices Footer */}
        <div className="mt-16 rounded-xl border-2 border-indigo-200/50 bg-indigo-50/30 p-8 dark:border-indigo-900/50 dark:bg-indigo-950/20">
          <div className="mb-4 flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-indigo-600" />
            <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-200">
              SOP Best Practices
            </h3>
          </div>
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
              <span>
                <strong>Review & Update Quarterly:</strong> SOPs should evolve
                with your business. Schedule quarterly reviews to refine processes.
              </span>
            </li>
            <li className="flex gap-3 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
              <span>
                <strong>Document Variations:</strong> If a process differs by
                product type or channel, note those exceptions clearly.
              </span>
            </li>
            <li className="flex gap-3 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
              <span>
                <strong>Train New Team Members:</strong> Use these SOPs as
                onboarding materials and reference guides for all team members.
              </span>
            </li>
            <li className="flex gap-3 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
              <span>
                <strong>Measure Compliance:</strong> Track adherence to SOPs and
                identify bottlenecks or areas where the process breaks down.
              </span>
            </li>
            <li className="flex gap-3 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
              <span>
                <strong>Automate Where Possible:</strong> Look for repetitive
                steps that can be automated with tools, scripts, or AI assistants.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
