export const promotionSummary = {
  executive: {
    headline: "Promotion Channel Health & Priorities",
    description:
      "Five channels drive promotion revenue. Three are constrained or underperforming; two are emerging opportunities. Fix measurement and content alignment first.",
  },
  channels: [
    {
      id: "paid",
      name: "Paid Media",
      icon: "Target",
      status: "Constrained",
      statusColor: "destructive",
      headline: "Measurement limits scale; creative testing cadence needed.",
      findings: [
        "Conversion tracking incomplete; true ROAS unknown.",
        "Creative win-rate unclear due to limited test velocity.",
        "Budget allocation reactive, not predictive.",
      ],
      recommendations: [
        "Fix GA4 eCommerce tracking and conversion actions.",
        "Establish weekly creative test slate (3–5 variants).",
        "Scale winners; cut losers by week 2.",
      ],
      owner: "Performance Marketing",
      impact: "High",
      priority: 1,
    },
    {
      id: "seo",
      name: "SEO",
      icon: "Globe2",
      status: "Opportunity",
      statusColor: "secondary",
      headline: "Leverage museum authority; build content handoff to shop.",
      findings: [
        "Museum site has 10K+ monthly organic sessions; shop gets <500.",
        "Low TOFU content targeting art terms; poor internal linking.",
        "Artist pages on museum site don't link to shop products.",
      ],
      recommendations: [
        "Create museum-to-shop pathways with reciprocal internal links.",
        "Publish gallery posts and link to relevant PDPs.",
        "Build resource center for street art education + buyer guides.",
      ],
      owner: "SEO & Content",
      impact: "Medium–High",
      priority: 2,
    },
    {
      id: "email",
      name: "Email/CRM",
      icon: "Mail",
      status: "Waste",
      statusColor: "destructive",
      headline: "Reduce spend leakage; align flows with capsule launches.",
      findings: [
        "Mailchimp spend ($2,500/mo) vs. revenue share (negligible).",
        "Flows not aligned to product drops; engagement declining.",
        "List hygiene poor; 40%+ inactive subscribers.",
      ],
      recommendations: [
        "Migrate to Klaviyo for Shopify-native data sync.",
        "Rebuild flows around 90-day capsule launches.",
        "Implement segmentation by artist affinity and purchase history.",
      ],
      owner: "CRM & Lifecycle",
      impact: "High",
      priority: 1,
    },
    {
      id: "social",
      name: "Social",
      icon: "Share2",
      status: "Emerging",
      statusColor: "secondary",
      headline: "Build capsule narratives; seed creators and UGC.",
      findings: [
        "Instagram-first (6.1K followers); TikTok, YouTube, Pinterest missed.",
        "Content promotion-heavy; artist storytelling underplayed.",
        "No structured warm-up calendar for drops; reactive launches.",
      ],
      recommendations: [
        "Shift to engagement formats (Reels, Lives, Stories).",
        "Activate 5–10 micro-creators with trackable codes.",
        "Run 90-day hype SOP for every collaboration drop.",
      ],
      owner: "Social & Content",
      impact: "Medium",
      priority: 3,
    },
    {
      id: "marketplaces",
      name: "Marketplaces",
      icon: "Store",
      status: "Planned",
      statusColor: "secondary",
      headline:
        "Launch curated SKUs; ensure schema and imagery meet platform best practices.",
      findings: [
        "Assortment not yet live on Etsy, Amazon, eBay.",
        "Listing readiness high for apparel; low for home decor.",
        "Potential: $20–30K GMV in first 90 days.",
      ],
      recommendations: [
        "Launch 400–600 curated SKUs across channels.",
        "Ensure schema markup and imagery meet platform specs.",
        "Build daily exception monitoring for inventory drift.",
      ],
      owner: "Marketplace Ops",
      impact: "Medium",
      priority: 2,
    },
  ],
  keyInsights: [
    {
      title: "Measurement is the bottleneck",
      description:
        "We're spending money on ads and email but don't know what's actually working. Right now, we can't tell if a dollar spent on Google Ads generates $3 or $0.50 in revenue. Until we fix this, we're flying blind—we can't confidently scale what works or cut what doesn't.",
    },
    {
      title: "Content alignment drives revenue",
      description:
        "When we launch a new product drop, our email, social, and SEO teams aren't coordinated. This means customers see mixed messages, and we miss the peak interest window. Imagine launching a product but only telling some customers about it—that's what's happening now. Coordinating around a 90-day calendar could easily add 20–30% to revenue per launch.",
    },
    {
      title: "Museum site is underutilized",
      description:
        "Our museum website gets 10,000+ visitors every month who are interested in art and culture. Almost none of them know we have a shop. It's like having a busy art gallery next door but no sign pointing to our store. By linking the museum content to shop products, we could triple traffic to the shop with zero additional ad spend.",
    },
    {
      title: "Creator economy is untapped",
      description:
        "Right now, we occasionally work with artists and influencers, but there's no system. Imagine if we had 5–10 micro-influencers consistently sharing our products with their audiences (who are exactly our target customers). With trackable promo codes, we'd know exactly which creators drive sales. This could become 20–30% of our social revenue.",
    },
  ],
};
