import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, TrendingUp, Users, BarChart3, Clock } from "lucide-react";

export default function AIMarketingShowcase() {
  const aiWorkflows = [
    {
      title: "Automated Product Data Creation",
      description: "AI-powered product descriptions, SEO optimization, and multi-channel formatting",
      impact: "80% time savings on product uploads",
      tasks: [
        "Generate compelling product descriptions using GPT-4",
        "Create channel-specific titles (Google, Amazon, Etsy)",
        "Auto-generate meta descriptions and keywords",
        "Format attributes for marketplace requirements"
      ],
      metrics: { before: "2 hours per 10 products", after: "20 minutes per 10 products" }
    },
    {
      title: "Social Media Content Generation",
      description: "AI-generated posts, captions, and hashtag strategies for Instagram, TikTok, and Facebook",
      impact: "10x content output with consistent brand voice",
      tasks: [
        "Generate Instagram captions with artist storytelling",
        "Create TikTok scripts for product reveals",
        "Suggest optimal posting times based on engagement data",
        "Auto-generate hashtag sets per content category"
      ],
      metrics: { before: "5 posts per week", after: "30+ posts per week" }
    },
    {
      title: "Email Campaign Optimization",
      description: "AI-powered subject lines, personalized content, and send time optimization",
      impact: "45% increase in open rates",
      tasks: [
        "A/B test subject line variations automatically",
        "Personalize email content based on browse history",
        "Optimize send times per subscriber segment",
        "Generate product recommendations using ML"
      ],
      metrics: { before: "15% open rate", after: "22% open rate" }
    },
    {
      title: "Live Shopping Enhancement",
      description: "AI-assisted script generation, real-time product recommendations, and viewer engagement",
      impact: "$5K average GMV per show",
      tasks: [
        "Generate show outlines and talking points",
        "Real-time viewer question responses",
        "Dynamic product bundle suggestions",
        "Post-show highlight reel auto-creation"
      ],
      metrics: { before: "N/A (not launched)", after: "$3-5K GMV per episode" }
    },
    {
      title: "Fashion Capsule Design Strategy",
      description: "AI trend analysis and design recommendations for wearable art collections",
      impact: "Data-driven design decisions",
      tasks: [
        "Analyze street art and fashion trend data",
        "Suggest artist collaboration opportunities",
        "Predict color palette and style trends",
        "Generate lookbook concepts and styling guides"
      ],
      metrics: { before: "Intuition-based", after: "Data + Creative fusion" }
    },
    {
      title: "Customer Service Automation",
      description: "AI chatbot for product questions, order tracking, and personalized recommendations",
      impact: "24/7 support with 90% resolution rate",
      tasks: [
        "Handle common product questions instantly",
        "Provide order status and tracking updates",
        "Recommend products based on chat context",
        "Escalate complex issues to human support"
      ],
      metrics: { before: "Email-only support", after: "Instant 24/7 assistance" }
    }
  ];

  const aiTools = [
    { name: "ChatGPT", use: "Content generation, copywriting", cost: "$20/mo" },
    { name: "Midjourney", use: "Product mockups, social visuals", cost: "$30/mo" },
    { name: "Claude", use: "Data analysis, strategy planning", cost: "$20/mo" },
    { name: "Make.com", use: "Workflow automation", cost: "$15/mo" },
    { name: "Zapier", use: "App integrations", cost: "$30/mo" },
  ];

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-8 py-6 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-foreground flex items-center gap-3" data-testid="text-page-title">
            <Sparkles className="w-8 h-8 text-primary" />
            AI-Powered Marketing & Fashion Strategy
          </h1>
          <p className="text-base text-muted-foreground">
            How artificial intelligence can supercharge workflows, social presence, and fashion marketing
          </p>
        </div>

        {/* Value Proposition */}
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">The AI Advantage for Wynwood Walls</CardTitle>
            <CardDescription className="text-base">
              Transform from reactive execution to proactive strategy with AI-powered automation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold font-mono text-primary mb-1">80%</div>
                <p className="text-sm text-muted-foreground">Time Savings on Repetitive Tasks</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold font-mono text-primary mb-1">10x</div>
                <p className="text-sm text-muted-foreground">Content Output Increase</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold font-mono text-primary mb-1">45%</div>
                <p className="text-sm text-muted-foreground">Engagement Rate Improvement</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Workflows */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary" />
            AI-Enhanced Workflows
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {aiWorkflows.map((workflow, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-ai-workflow-${index}`}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{workflow.title}</CardTitle>
                      <CardDescription className="text-base">{workflow.description}</CardDescription>
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
                        <div key={taskIndex} className="flex gap-2 p-2 rounded-md bg-muted/50">
                          <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Before AI</p>
                        <p className="text-sm font-mono text-foreground">{workflow.metrics.before}</p>
                      </div>
                      <div className="text-primary">→</div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">With AI</p>
                        <p className="text-sm font-mono text-primary font-semibold">{workflow.metrics.after}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fashion Marketing AI Use Cases */}
        <Card className="border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Fashion as Wearable Art: AI-Driven Strategy
            </CardTitle>
            <CardDescription>
              Leveraging AI to position Wynwood Walls fashion line as collectible wearable art
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Trend Analysis</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    AI analyzes street art trends, fashion runway data, and social sentiment to inform design direction
                  </p>
                  <Badge variant="secondary" className="text-xs">Weekly Trend Reports</Badge>
                </div>
                <div className="p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Influencer Matching</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    AI identifies micro-influencers in Miami art/fashion scene with authentic alignment to brand values
                  </p>
                  <Badge variant="secondary" className="text-xs">Automated Discovery</Badge>
                </div>
                <div className="p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Content Creation</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Generate lookbook concepts, styling guides, and artist collaboration narratives at scale
                  </p>
                  <Badge variant="secondary" className="text-xs">10x Output</Badge>
                </div>
                <div className="p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Personalization</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    AI-powered product recommendations based on art preferences and browsing behavior
                  </p>
                  <Badge variant="secondary" className="text-xs">Higher Conversion</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Tools Stack */}
        <Card>
          <CardHeader>
            <CardTitle>Recommended AI Tools Stack</CardTitle>
            <CardDescription>Cost-effective AI tools for immediate implementation</CardDescription>
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
                      <h4 className="font-semibold text-foreground">{tool.name}</h4>
                      <p className="text-sm text-muted-foreground">{tool.use}</p>
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
                <span className="text-2xl font-bold font-mono text-primary">$115/mo</span>
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
