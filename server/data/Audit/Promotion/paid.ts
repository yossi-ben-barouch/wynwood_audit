export interface MediaItem {
  src: string;
  alt: string;
  title: string;
  description?: string;
  badge?: string;
}

export const paidAudit = {
  conversionIssue: {
    severity: "Critical",
    title: "Critical Issue: Mixed Conversion Goals",
    description:
      "Page views, add_to_cart, and purchases were all set as primary conversions with default values.",
    explanation:
      "This teaches Google to chase cheap micro-actions instead of revenue, depressing Target ROAS and masking true performance.",
    stakeholders:
      "We've been paying for the wrong success signals. Ads think a page view is a \"win,\" so budgets don't prioritize real buyers.",
    technical: [
      "Keep only purchase as primary (dynamic value).",
      "Mark page_view, add_to_cart, begin_checkout as secondary (observe-only) or remove from bidding.",
      "Reset strategy learning windows where conversion definition changed.",
    ],
    owner: "Performance",
    impact: "High",
    timeline: "1–2 days",
    media: [
      {
        src: "/media/conversions_issues.png",
        alt: "Before: mixed conversion goals",
        title: "Before: Mixed conversion goals inflating values",
        description:
          "Multiple primary conversions (page view, add to cart, purchase) with default values mislead bidding and depress ROAS.",
        badge: "Issue",
      },
      {
        src: "/media/conversion_pixel_issue.png",
        alt: "After: corrected conversion settings",
        title: "After: Correct conversion setup",
        description:
          "Assist events set to Secondary and values removed. Only Purchase remains Primary with dynamic value.",
        badge: "Implemented",
      },
    ] as MediaItem[],
  },
  feedOptimization: {
    badge: "High Leverage",
    title: "Feed Optimization: Titles & Attributes",
    description: "Shopify-facing titles don't maximize Shopping query relevance.",
    explanation:
      "Shopping performance hinges on query-match and data richness. Add missing attributes and keyword context to win more auctions at lower CPCs.",
    actions: [
      "Add channel-specific fields (google_title, amazon_title, etsy_title).",
      "Use title template: [Artist/Brand] [Product Type] – [Material/Style] [Color] [Size]",
      "Enrich GTIN/brand, Google category, MPN; fix price/availability parity.",
    ],
    owner: "Ecom Ops",
    impact: "High",
    timeline: "5–7 days",
    media: [
      {
        src: "/media/duplicate_datafeed_product_sources.png",
        alt: "Duplicate product sources in feed",
        title: "Duplicate product sources in data feed",
        description:
          "Illustrates overlapping sources that can create mismatches in availability/price or duplicate items.",
        badge: "Reference",
      },
      {
        src: "/media/specilized_keyword_maximized_titles.png",
        alt: "Specialized keyword-maximized titles",
        title: "Specialized keyword-maximized titles (example)",
        description: "Channel-optimized title patterns to lift Shopping query relevance and CTR.",
        badge: "Template",
      },
    ] as MediaItem[],
  },
  campaignStructure: {
    badge: "Roadmap",
    title: "Campaign Structure: Control & Scale",
    description: "Current structure is too simple; lacks control and signal isolation.",
    architecture: [
      "PMax split by category/intent tiers (e.g., Apparel, Books, Figures; Prospecting vs. Remarketing).",
      "Shopping campaigns with single-product ad groups (SPAG) for top SKUs to control negatives and budgets.",
      "Search campaigns only for discovery/long-tail support; brand vs. non-brand split.",
    ],
    cadence: [
      "Creative/test slate every week (5–10 variants); 7-day read.",
      "Scale winners; rotate 20–30% of budget to tests.",
      "Query/product report review; add negatives; reallocate to ROAS winners.",
    ],
    owner: "Performance",
    impact: "Medium–High",
    timeline: "7–14 days",
    media: [
      {
        src: "/media/example_of_fashion_hats_shopping_campaign_SingleAdgroupProduct.png",
        alt: "Shopping Fashion Hats SPAG example",
        title: "Shopping campaign: Fashion → Hats (SPAG)",
        description: "Each ad group targets a single product to control negatives, bids, and budgets precisely.",
        badge: "Structure",
      },
    ] as MediaItem[],
  },
  metaAds: {
    badge: "Underutilized",
    title: "Meta/Facebook Ads",
    description: "Budget ~$900/mo; generic campaigns; product feed only.",
    recommendations: [
      "Campaign layers: Prospecting (creatives by capsule/artist), Retargeting (catalog + UGC), Loyalty (LTV offers).",
      "Creative cadence: weekly tests (hooks, formats, UGC, motion); keep 2–3 evergreen winners live.",
      "Amplify product feed with lifestyle creatives; test Advantage+ Shopping where applicable.",
    ],
    owner: "Social + Performance",
    impact: "Medium",
    timeline: "7 days",
    media: [
      {
        src: "/media/example_of_multi_angle_multi_creative_testing_on_meta.png",
        alt: "Meta creative testing examples",
        title: "Multi-angle creative testing on Meta",
        description:
          "UGC, carousel, lifestyle video and imagery variants run in parallel; scale the winners while rotating 20–30% budget to new tests.",
        badge: "Testing",
      },
    ] as MediaItem[],
  },
  amazonAds: {
    badge: "Missing",
    title: "Amazon Ads & Future Marketplaces",
    description: "No paid support; essential for product traction when search demand is low.",
    recommendations: [
      "Launch Sponsored Products for priority SKUs; use exact/phrase for control.",
      "Add Sponsored Brands (if eligible) once catalog depth exists.",
      "Replicate playbook for Etsy/eBay launches with paid amplification.",
    ],
    warning:
      "Some products should run artist-specific ads only. Avoid broad keywords where we're price-disadvantaged (e.g., generic sticker terms dominated by 200-pack for $9.99) to prevent wasted spend.",
    owner: "Marketplace + Performance",
    impact: "Medium",
    timeline: "10–14 days",
    media: [
      {
        src: "/media/amazon_sponsored_banner.png",
        alt: "Amazon sponsored banner",
        title: "Sponsored banner placement",
        description: "High-visibility placement for branded or category terms when eligible.",
        badge: "Placement",
      },
      {
        src: "/media/amazon_sponsored_results.png",
        alt: "Amazon sponsored results",
        title: "Sponsored results grid",
        description:
          "Illustrates how paid placements appear alongside organic results and how relevance impacts CTR.",
        badge: "Results",
      },
      {
        src: "/media/amazon_sponsored_vide_banners.png",
        alt: "Amazon sponsored video banners",
        title: "Sponsored video banners",
        description:
          "Video formats to showcase capsule stories and product benefits; strong for top-of-search visibility.",
        badge: "Video",
      },
    ] as MediaItem[],
  },
  actionPlan14d: {
    badge: "Execution",
    title: "Next 14 Days: Action Plan",
    description: "Clear sequence for impact and accountability.",
    steps: [
      "Fix conversion goals (Purchase only as primary) and values.",
      "Rebuild bid strategies; reset learning as needed.",
      "Create feed title templates and channel fields; enrich attributes.",
      "Split PMax by category; create SPAG for top SKUs.",
      "Stand up Meta layers with creative test slate.",
      "Launch initial Amazon Sponsored Products for 10–20 SKUs.",
    ],
  },
};
