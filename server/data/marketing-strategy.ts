import type { MarketingStrategy } from "@shared/schema";
import { socialStrategy } from "./Audit/Promotion/social-strategy";

export const marketingStrategyData: MarketingStrategy = {
  overview: {
    narrative:
      "We are stabilizing the digital commerce engine so that every channel tells a cohesive Wynwood Walls story, trades on the parent site's authority, and converts with measurement we can trust.",
    guidingPrinciples: [
      "Fix measurement and feed hygiene before scaling spend",
      "Tell the artist and wearable-art story in every touchpoint",
      "Run channel plays in parallel with clear owners and feedback loops",
      "Design for multi-site synergy: the museum drives the shop, the shop monetizes the museum",
    ],
    guardrails: [
      "No paid spend expansion without verified purchase tracking",
      "Protect artist inventory visibility across channels",
      "Maintain merchandise availability accuracy across Merchant Center, marketplaces, and the shop",
      "Keep Alejandro focused 80% on revenue levers with support for operational tasks",
    ],
  },
  objectives: [
    "Revenue acceleration for holidays while fixing measurement and feed hygiene",
    "Expand reach via marketplaces (Etsy, Amazon, eBay) using automated product feeds",
    "Leverage parent brand and site to route qualified traffic with systematic UTMs",
    "Position fashion as wearable art with brand storytelling and content capture",
    "Build persistent social and email communities that convert at benchmark rates",
  ],
  kpis: [
    {
      label: "Conversion Rate Target",
      value: "1.2-1.5%",
      trend: 40,
      trendDirection: "up",
      suffix: "%",
    },
    {
      label: "AOV Target",
      value: "$115",
      trend: 20,
      trendDirection: "up",
    },
    {
      label: "True ROAS",
      value: "350%",
      trend: 75,
      trendDirection: "up",
      suffix: "%",
    },
    {
      label: "Email Revenue Share",
      value: "5-7%",
      trend: 100,
      trendDirection: "up",
      suffix: "%",
    },
    {
      label: "IG Follower Growth",
      value: "+30%",
      trend: 30,
      trendDirection: "up",
      suffix: "%",
    },
    {
      label: "Marketplace SKUs",
      value: "All",
      trend: 100,
      trendDirection: "up",
    },
  ],
  sections: [
    {
      id: "platform-insights",
      title: "Platform & Insight Overview",
      description:
        "Lay the operational foundation: accurate data, stable feeds, and stakeholder alignment on revenue priorities.",
      focusPoints: [
        "Repair Google Ads conversion tracking and GA4 attribution",
        "Sync Merchant Center inventory and pricing across all feeds",
        "Stand up reporting cadence that exposes channel health weekly",
        "Document SOPs so marketing can work 90 days ahead of product launches",
      ],
      plays: [
        {
          title: "Stabilize Measurement & Merchant Center",
          timeframe: "Week 0-1",
          owners: ["Alejandro (Ecom Ops)", "Marketing Ops Partner"],
          objectives: [
            "Correct Google Ads conversion actions and dynamic values",
            "Eliminate out-of-stock SKUs from paid inventory feeds",
          ],
          tasks: [
            'Audit all primary conversion actions and restrict "Purchase" as the only primary',
            "Push fixed GTM container and validate purchase events end-to-end",
            "Deploy feed management app to rewrite titles with artist + product descriptors",
            "Add monitoring alerts for availability mismatches",
          ],
          dependencies: ["Access to Google Ads, GA4, Merchant Center"],
          successSignals: ["<2% feed errors"],
        },
        {
          title: "Growth Program War-Room",
          timeframe: "Week 1 ongoing",
          owners: ["Marketing Director", "Ecommerce Director"],
          objectives: [
            "Create shared roadmap working 90 days ahead",
            "Run weekly parallel standups for measurement, merchandising, and creative",
          ],
          tasks: [
            "Launch Clickup.com space with swim lanes per channel",
            "Institute weekly speed-dating sync between marketing, merchandising, creative and ecom ops",
            "Publish KPI scorecard in Clickup each Friday",
          ],
          successSignals: [
            "Weekly KPI email",
            "Launch SOP executed on next drop",
          ],
        },
      ],
      enablement: [
        {
          title: "Analytics Enablement",
          description:
            "Give the team shared visibility into truth-of-revenue metrics.",
          items: [
            "GA4 dashboard segmented by source/medium + artist collections",
            "Template for campaign tagging across Google, Meta, TikTok, Pinterest",
            "Looker Studio executive view for leadership",
          ],
        },
      ],
      experiments: [
        {
          title: "Checkout CRO Sprint",
          hypothesis:
            "Introducing bundled upsells in checkout will lift AOV by 8%",
          steps: [
            "Implement Rebuy/Zipify cross-sells",
            "Run A/B for two weeks",
            "Review impact in GA4",
          ],
          owner: "Ecommerce Team",
        },
      ],
    },
    {
      id: "social",
      title: "Social & Community Flywheel",
      description:
        "Scale storytelling and wearable-art positioning across Instagram, TikTok, YouTube, and live shopping.",
      focusPoints: [
        "Shift social calendar toward storytelling, live formats, and UGC",
        "Run TikTok Live Shopping pilots featuring exclusive drops",
        "Activate influencers and Miami micro-creators with measurable UTMs",
        "Reuse museum content to warm audiences before campaigns",
      ],
      strategyDetails: socialStrategy,
      plays: [
        {
          title: "4-Channel Weekly Drumbeat",
          timeframe: "Week 1-4 repeating",
          owners: ["Social Lead", "Video Editor", "Community Manager"],
          objectives: [
            "Publish minimum 5 Reels/TikToks weekly highlighting artists and product context",
            "Cross-post museum Instagram content with shop-specific CTAs",
          ],
          tasks: [
            "Build Notion-based content calendar with required CTAs",
            "Publish TikTok Live shopping plan with artists twice per month",
            "Launch hashtag program (#WearableArt, #WynwoodDrop)",
          ],
          successSignals: [
            "+30% IG follower growth",
            "2 TikTok Live sessions executed",
          ],
        },
        {
          title: "Influencer Capsule",
          timeframe: "Month 1",
          owners: ["Marketing Director", "PR Coordinator"],
          objectives: [
            "Seed wearable-art looks with 10 Miami creators",
            "Capture UGC for ads",
          ],
          tasks: [
            "Identify creators aligned to art/fashion niches",
            "Ship lookbook + talking points",
            "Track UGC via specific UTMs",
          ],
          successSignals: [
            "UGC library of 20 assets",
            "5 creators driving sessions",
          ],
        },
      ],
      enablement: [
        {
          title: "Community Toolkit",
          description: "Resources for sustaining always-on conversations.",
          items: [
            "Creator brief templates",
            "UGC incentive matrix",
            "Livestream run-of-show",
          ],
        },
      ],
      experiments: [
        {
          title: "YouTube Artist Mini-Docs",
          hypothesis:
            "5-minute artist profiles embedded on museum pages will raise click-through to the shop by 15%",
          steps: [
            "Pilot with one artist",
            "Embed on artist page",
            "Measure click-through in GA4",
          ],
          owner: "Content Producer",
        },
      ],
    },
    {
      id: "seo",
      title: "SEO & Content Engine",
      description:
        "Use thewynwoodwalls.com authority and storytelling to fill the top of funnel and pass demand to the shop.",
      focusPoints: [
        "Create deep artist spotlight pages with commerce hooks",
        "Build resource center for street art education and buyer guides",
        "Connect museum and shop sites with reciprocal internal links",
        "Improve site architecture with advanced filters and schema",
      ],
      plays: [
        {
          title: "Artist & Collection Hub Refresh",
          timeframe: "Weeks 1-3",
          owners: ["SEO Strategist", "Content Writer", "Design Lead"],
          objectives: [
            "Map top-performing museum pages to relevant shop collections",
            "Launch enhanced artist bios with embedded product modules",
          ],
          tasks: [
            'Conduct keyword research for top artist names + "shop" intent',
            "Add schema markup for products and events",
            "Implement new cross-link blocks on 10 priority pages",
          ],
          successSignals: [
            "15% lift in referral sessions from museum site",
            "Top 10 artist pages include commerce module",
          ],
        },
        {
          title: "Seasonal Content Sprint",
          timeframe: "Monthly",
          owners: ["Content Writer", "Merchandising"],
          objectives: [
            "Publish gift guides and wearable-art editorials tied to campaigns",
          ],
          tasks: [
            "Outline 6-8 gift guides",
            "Publish blog + email hook",
            "Add Pinterest-ready imagery",
          ],
          successSignals: [
            "Organic entrance sessions +20%",
            "Gift guide assisted revenue tracked",
          ],
        },
      ],
      enablement: [
        {
          title: "Content Governance",
          description:
            "Ensure each article drives to collections and email capture.",
          items: [
            "CTA component library",
            "Editorial SEO checklist",
            "Inventory alignment sheet for featured products",
          ],
        },
      ],
      experiments: [
        {
          title: "Interactive Mural Map",
          hypothesis:
            "Embedding an interactive mural map with shop CTAs will increase average session duration by 30%",
          steps: [
            "Prototype map",
            "Embed on museum site",
            "Capture click analytics",
          ],
          owner: "UX Designer",
        },
      ],
    },
    {
      id: "marketplaces",
      title: "Marketplace Expansion",
      description:
        "Activate Etsy, Amazon, and eBay as incremental revenue streams without cannibalizing the core store.",
      focusPoints: [
        "Launch curated assortments with automated feed syncing",
        "Standardize pricing, hero copy, and review collection",
        "Build daily exception monitoring for inventory drift",
        "Create cross-channel promotion loop back to owned site",
      ],
      plays: [
        {
          title: "Listing Launch Wave",
          timeframe: "Weeks 2-5",
          owners: ["Marketplace Manager", "VA Team"],
          objectives: [
            "List All Active SKUs across channels",
            "Hit $5-15K GMV target in first 90 days",
          ],
          tasks: [
            "Align data feed attributes for each marketplace",
            "Enable Amazon review request automation",
            "Craft Etsy storefront narrative featuring artists",
          ],
          dependencies: ["Feed management tooling", "Photography assets"],
          successSignals: ["<5% feed error rate", "$10K GMV by week 6"],
        },
        {
          title: "Marketplace Promotion Loop",
          timeframe: "Monthly",
          owners: ["Performance Marketer", "Lifecycle Manager"],
          objectives: ["Drive marketplace shoppers back to owned channels"],
          tasks: [
            "Include insert cards with QR linking to shop exclusives",
            "Run targeted remarketing audiences for purchasers",
          ],
          successSignals: [
            "25% of marketplace buyers join email list",
            "Repeat purchase lift measured",
          ],
        },
      ],
      enablement: [
        {
          title: "Operational Backbone",
          description: "Keep catalog synchronized across all properties.",
          items: [
            "Daily sync checklist",
            "Marketplace SLA document",
            "Zendesk macro for customer inquiries",
          ],
        },
      ],
    },
    {
      id: "performance",
      title: "Performance Marketing Lab",
      description:
        "Rebuild paid media with disciplined testing, rapid scaling, and channel diversification (Meta, Google, TikTok, YouTube).",
      focusPoints: [
        "Operate test > learn > scale loops weekly",
        "Stand up TikTok + YouTube prospecting while remarketing via Meta/Google",
        "Use UGC and live shopping assets as creative inputs",
        "Tie spend decisions to verified profit per artist/collection",
      ],
      plays: [
        {
          title: "Testing Matrix",
          timeframe: "Weekly",
          owners: ["Performance Marketing Lead", "Data Analyst"],
          objectives: [
            "Evaluate 3 new creatives and 2 audiences per week",
            "Reveal winning combinations within 72 hours",
          ],
          tasks: [
            "Build decision doc for creative testing",
            "Launch YouTube & Shorts campaigns targeting art & culture enthusiasts",
            "Apply negative keywords to trim wasted Google spend",
          ],
          successSignals: [
            "Cost per purchase within target",
            "Scaling budget by 20% on winners",
          ],
        },
        {
          title: "Offer Ladder Deployment",
          timeframe: "BFCM Season",
          owners: ["Lifecycle Lead", "Paid Media"],
          objectives: [
            "Coordinate offers across email, paid social, and marketplaces",
          ],
          tasks: [
            "Publish discount matrix by audience tier",
            "Sync creative variants across channels",
            "Monitor ROAS daily and rebalance budget",
          ],
          successSignals: ["ROAS ≥350%", "Email revenue share 10%+"],
        },
      ],
      enablement: [
        {
          title: "Media Lab Toolkit",
          description: "Documentation and automations to support scale.",
          items: [
            "Creative testing scorecard",
            "Budget pacing dashboard",
            "YouTube & Shorts creative playbook",
          ],
        },
      ],
      experiments: [
        {
          title: "YouTube Shorts Prospecting",
          hypothesis:
            "YouTube Shorts with artist-focused content will yield <$40 CAC targeting art enthusiasts and collectors",
          steps: [
            "Launch small pilot with 5-10 Shorts creatives",
            "Review CPV and CAC after 7 days",
            "Scale winners or pivot creative approach",
          ],
          owner: "Performance Marketing Lead",
        },
      ],
    },
    {
      id: "fashion",
      title: "Fashion Brand Building",
      description:
        "Elevate wearable art as a premium line with storytelling, wholesale pilots, and experiential activations.",
      focusPoints: [
        "Develop cohesive brand identity and lookbook",
        "Create hype-driven launch cadence with 90-day runway",
        "Secure wholesale and pop-up placements",
        "Translate physical experiences to digital drops",
      ],
      plays: [
        {
          title: "Brand Framework Sprint",
          timeframe: "Weeks 0-2",
          owners: ["Creative Director", "Fashion Product Lead"],
          objectives: ["Define positioning, voice, and capsule roadmap"],
          tasks: [
            "Produce wearable art manifesto",
            "Design lookbook + campaign visuals",
            "Draft pitch deck for wholesale conversations",
          ],
          successSignals: ["Brand guide approved", "Wholesale deck ready"],
        },
        {
          title: "Launch SOP Execution",
          timeframe: "90-day rolling",
          owners: ["Marketing Director", "Lifecycle Lead", "Performance Lead"],
          objectives: [
            "Run hype, pre-order, launch, and sustain phases for each drop",
          ],
          tasks: [
            "60-day tease campaign with artist interviews",
            "30-day pre-order window with limited units",
            "Launch-day live shopping show and remarketing",
          ],
          dependencies: ["Artist content", "Inventory plan"],
          successSignals: [
            "Sell-through >80% per drop",
            "Press and influencer coverage secured",
          ],
        },
      ],
      enablement: [
        {
          title: "Experience Extension",
          description:
            "Bridge physical Wynwood Walls experiences with digital commerce.",
          items: [
            "QR codes at murals linking to product stories",
            "Pop-up playbook for fashion events",
            "Artist residency calendar feeding product pipeline",
          ],
        },
      ],
      experiments: [
        {
          title: "Augmented Reality Try-On",
          hypothesis:
            "Allowing shoppers to visualize wearable art via AR will boost conversion by 5%",
          steps: [
            "Prototype AR filter",
            "Pilot with top SKU",
            "Measure conversion impact",
          ],
          owner: "Innovation Lead",
        },
      ],
    },
  ],
  cadence: [
    {
      horizon: "Immediate (Week 0-2)",
      focus: "Measurement repair, narrative alignment, and first content surge",
      parallelStreams: [
        "Measurement engineers fix GA4 + feeds",
        "Content team drafts artist spotlights",
        "Social team launches wearable-art teaser",
      ],
    },
    {
      horizon: "Near-Term (Weeks 3-6)",
      focus: "Channel activation across social, SEO, and marketplaces",
      parallelStreams: [
        "Marketplace squad publishes curated inventory",
        "SEO squad deploys artist hubs + gift guides",
        "Performance squad runs testing matrix",
      ],
    },
    {
      horizon: "Seasonal (Quarterly)",
      focus:
        "Fashion capsule launches, experiential partnerships, community expansion",
      parallelStreams: [
        "Fashion team executes launch SOP",
        "Influencer/PR team books collaborations and pop-ups",
        "Lifecycle team scales automation and retention offers",
      ],
    },
  ],
};
