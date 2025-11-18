import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Zap,
  TrendingUp,
  Users,
  BarChart3,
  Clock,
} from "lucide-react";

export default function AIMarketingShowcase() {
  const aiWorkflows = [
    {
      title: "Automated Product Data Creation",
      description:
        "Automation + AI-powered product descriptions, SEO optimization, and multi-channel formatting",
      impact: "80% time savings on product uploads",
      tasks: [
        "Generate compelling product descriptions",
        "Create channel-specific titles (Google, Amazon, Etsy)",
        "Auto-generate meta descriptions and keywords",
        "Format attributes for marketplace requirements",
      ],
      metrics: {
        before: "2 hours per 10 products",
        after: "20 minutes per 10 products (Review & Light Edits)",
      },
    },
    {
      title: "Social Media Content Generation",
      description:
        "AI-powered short video creation, product embedding, and viral content production at scale",
      impact: "15x content output + viral-optimized videos",
      tasks: [
        "Generate short-form videos (Reels, TikToks) with AI tools",
        "Auto-embed products into video content with tracking",
        "Create viral content formats based on trending patterns",
        "Produce multiple video variations in minutes vs hours",
      ],
      metrics: {
        before: "5 posts per week",
        after: "50+ videos/posts per week",
      },
    },
    {
      title: "Email Campaign Optimization",
      description:
        "AI-powered subject lines, personalized content, and send time optimization",
      impact: "45% increase in open rates",
      tasks: [
        "A/B test subject line variations automatically",
        "Personalize email content based on browse history",
        "Optimize send times per subscriber segment",
        "Generate product recommendations using ML",
      ],
      metrics: { before: "15% open rate", after: "22% open rate" },
    },
    {
      title: "Customer Service Automation",
      description:
        "AI chatbot for product questions, order tracking, and personalized recommendations",
      impact: "24/7 support with 90% resolution rate",
      tasks: [
        "Handle common product questions instantly",
        "Provide order status and tracking updates",
        "Recommend products based on chat context",
        "Escalate complex issues to human support",
      ],
      metrics: {
        before: "Email-only support",
        after: "Instant 24/7 assistance",
      },
    },
  ];

  const aiTools = [
    {
      name: "OpenAI APIs",
      use: "Content generation, copywriting, image generation, video generation",
      cost: "$20-$100/mo",
    },
    {
      name: "Google APIs (Veo3, Nano Banana)",
      use: "Product mockups, social visuals, image generation, video generation",
      cost: "$30-$100/mo",
    },
    { name: "Claude", use: "Data analysis, strategy planning", cost: "$20/mo" },
    {
      name: "n8n.com",
      use: "Workflow automation",
      cost: "$60/mo (Or Self Hosted for free)",
    },
  ];

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-8 py-6 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1
            className="text-3xl font-semibold text-foreground flex items-center gap-3"
            data-testid="text-page-title"
          >
            <Sparkles className="w-8 h-8 text-primary" />
            AI-Powered Quick Wins
          </h1>
          <p className="text-base text-muted-foreground">
            How artificial intelligence can supercharge workflows, social
            presence, and fashion marketing
          </p>
        </div>

        {/* AI Workflows */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-6">
            {aiWorkflows.map((workflow, index) => (
              <Card
                key={index}
                className="hover-elevate"
                data-testid={`card-ai-workflow-${index}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        {workflow.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {workflow.description}
                      </CardDescription>
                    </div>
                    <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20 border-green-500/20">
                      {workflow.impact}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                      AI-Automated Tasks
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {workflow.tasks.map((task, taskIndex) => (
                        <div
                          key={taskIndex}
                          className="flex gap-2 p-2 rounded-md bg-muted/50"
                        >
                          <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">
                            {task}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                          Before AI
                        </p>
                        <p className="text-sm font-mono text-foreground">
                          {workflow.metrics.before}
                        </p>
                      </div>
                      <div className="text-primary">→</div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                          With AI
                        </p>
                        <p className="text-sm font-mono text-primary font-semibold">
                          {workflow.metrics.after}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Tools Stack */}
        <Card>
          <CardHeader>
            <CardTitle>Recommended AI Tools Stack</CardTitle>
            <CardDescription>
              Cost-effective AI tools for immediate implementation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {aiTools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border border-border hover-elevate"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {tool.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {tool.use}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className="font-mono">
                    {tool.cost}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Total Monthly Investment
                </span>
                <span className="text-2xl font-bold font-mono text-primary">
                  $130-$280/mo
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                ROI: $10K+ in time savings and increased revenue per month
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
