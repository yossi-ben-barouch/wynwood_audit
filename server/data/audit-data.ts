import type {
  ExecutiveSummary,
  OrganizationalData,
  CurrentStateData,
  Problem,
  Recommendation,
  AuditData,
  TeamReview,
  TeamMember,
  KPIMetric,
  Platform,
  TrafficMetric,
  ProductCategory,
  Workstream,
  CompetencyAssessment
} from "@shared/schema";

// Executive Summary Data
export const executiveSummaryData: ExecutiveSummary = {
  keyFinding: "The shop's online sales are underperforming despite having world-class assets (high domain authority, quality products, significant foot traffic), primarily due to fragmented marketing efforts, resource constraints, and misalignment between product development and digital marketing strategies.",
  overview: [
    "Strong foundational assets: Domain Authority of 47-72, exclusive artist relationships, and 250K monthly museum visitors",
    "Significant execution challenges limiting online revenue growth despite 200% growth in years 1-2",
    "Current year showing 10% decline attributed to tariffs and supplier instability",
    "Critical gap: Alejandro (E-Commerce Director) stretched across 4 websites with minimal support",
    "Disconnected silos between technical execution (Alejandro) and creative marketing (Nicole)",
    "Products designed for in-store retail, not e-commerce optimization"
  ],
  criticalMetrics: [
    { label: "Museum Monthly Traffic", value: "250K", trend: 12, trendDirection: "up" as const },
    { label: "Shop Conversion Rate", value: "0.8%", trend: -15, trendDirection: "down" as const, suffix: "%" },
    { label: "Domain Authority", value: "72", trend: 5, trendDirection: "up" as const },
    { label: "Total SKUs", value: "2,500", trend: 0, trendDirection: "neutral" as const },
    { label: "Social Following (Shop)", value: "8K", trend: -20, trendDirection: "down" as const },
    { label: "Google Ads Budget", value: "$3,000", trend: 67, trendDirection: "up" as const, suffix: "/mo" }
  ]
};

// Organizational Structure Data
export const organizationalData: OrganizationalData = {
  teamMembers: [
    {
      id: "daniel-pezet",
      name: "Daniel Pezet",
      role: "Operations Director",
      department: "Operations & Product",
      description: [
        "Oversees shop operations and product development",
        "Manages 2,500 SKU inventory across multiple categories",
        "Handles supplier relationships across 15 production categories",
        "Compensation tied to sales performance"
      ],
      strengths: ["Operations Management", "Supplier Relations", "Product Development"],
      challenges: ["Scaling to match potential demand"]
    },
    {
      id: "alejandro-trujillo",
      name: "Alejandro Trujillo",
      role: "E-Commerce Director",
      department: "Digital Commerce",
      description: [
        "Manages entire digital ecosystem: Shop, Museum, Gallery, and Goldman Properties sites",
        "Shopify Plus expert with HTML, CSS, JavaScript, and AI/automation skills",
        "Handles Google Ads, SEO, product data optimization",
        "Working in isolation with minimal support"
      ],
      strengths: ["Technical Proficiency", "Problem Solving", "Adaptability"],
      challenges: ["Stretched across 4 properties", "No delegation or SOPs", "Limited strategic marketing depth"]
    },
    {
      id: "nicole-deaguiar",
      name: "Nicole DeAguiar",
      role: "Marketing Director",
      department: "Marketing & PR",
      description: [
        "Started July 2024 (relatively new to organization)",
        "Manages PR, social media, email campaigns, influencer partnerships",
        "$2,000/month total PR retainer ($1,000 for shop)",
        "Currently lacks dedicated social media support"
      ],
      strengths: ["PR Management", "Creative Strategy", "Influencer Relations"]
    },
    {
      id: "laura-rodriguez",
      name: "Laura Rodriguez",
      role: "Operations Manager",
      department: "Operations",
      description: [
        "Daniel's right hand for 5 years",
        "Manages fulfillment operations and product coordination",
        "Oversees Rebecca (fulfillment specialist)",
        "Deep institutional knowledge"
      ],
      strengths: ["Fulfillment Management", "Operational Excellence"]
    },
    {
      id: "yossi-ben-barouch",
      name: "Yossi Ben Barouch",
      role: "External E-Commerce Consultant",
      department: "Consulting",
      description: [
        "Brought in by ownership to audit and improve online sales",
        "Full-stack developer with e-commerce expertise",
        "Experience with Etsy, Amazon, Google Ads optimization",
        "Providing strategic recommendations"
      ],
      strengths: ["E-Commerce Strategy", "Technical Expertise", "Multi-Channel Growth"]
    }
  ],
  reportingIssues: [
    "Alejandro reports to Daniel but needs closer collaboration with Nicole (marketing)",
    "Current structure creates silos between technical execution and creative marketing",
    "No dedicated e-commerce strategy role above operational level",
    "Marketing team lacks social media specialist despite 400K email list"
  ]
};

// Current State Assessment Data
export const currentStateData: CurrentStateData = {
  platforms: [
    { name: "Lightspeed", type: "POS", description: "Primary point of sale system - 95% of sales are on-site" },
    { name: "Shopify", type: "E-Commerce", description: "Online store platform (migrated ~3 years ago)" },
    { name: "Mailchimp", type: "Email", description: "Email marketing platform with 400K contacts", cost: "$2,500/month" },
    { name: "Google Analytics", type: "Analytics", description: "Traffic and behavior tracking across properties" },
    { name: "SEMrush", type: "SEO", description: "SEO and competitive analysis tool", cost: "$350/month" },
    { name: "Zola", type: "Ticketing", description: "Museum ticket sales platform" },
    { name: "Art Cloud", type: "Gallery", description: "Gallery art sales management" }
  ],
  trafficMetrics: [
    { source: "Museum Website", value: 250000, change: 12, description: "High conversion potential" },
    { source: "Shop Direct", value: 45000, change: -10, description: "Artist collaborations" },
    { source: "Google Ads", value: 35000, change: 33, description: "Primary paid channel" },
    { source: "Organic Search", value: 28000, change: 15, description: "Strong SEO rankings" },
    { source: "Social Media", value: 12000, change: 8, description: "Growing but underperforming" }
  ],
  conversionMetrics: [
    { label: "Site Conversion Rate", value: "0.8%", trend: -15, trendDirection: "down" as const, suffix: "%" },
    { label: "Domain Authority (Ahrefs)", value: "72", trend: 8, trendDirection: "up" as const },
    { label: "Average Order Value", value: "$95", trend: -5, trendDirection: "down" as const }
  ],
  productCategories: [
    {
      name: "Third-party Collectibles",
      skuCount: 875,
      margin: "50-60%",
      description: "Super Plastic, Bear Bricks, Kidrobot",
      status: "Supplier instability - Super Plastic closed"
    },
    {
      name: "Artist-Designed Products",
      skuCount: 1000,
      margin: "60-70%",
      description: "Books, notebooks, apparel, accessories",
      status: "Higher margins, limited quantities"
    },
    {
      name: "Stationery & Small Goods",
      skuCount: 625,
      margin: "30-40%",
      description: "Stickers, magnets, keychains",
      status: "Low margins, high competition"
    }
  ],
  marketingChannels: [
    {
      channel: "Google Ads",
      budget: "$3,000/month",
      performance: "2X ROAS after account separation, 33% growth",
      issues: ["Only 4-5 campaigns (needs 200+ ad groups)", "Performance Max overuse", "Broad match keywords draining budget"]
    },
    {
      channel: "Meta/Facebook Ads",
      budget: "$900/month",
      performance: "Growing but still underperforming",
      issues: ["Generic campaigns", "Not product-specific", "Recent account verification needed"]
    },
    {
      channel: "Email Marketing (Mailchimp)",
      budget: "$2,500/month + $1,000 consultant",
      performance: "350K-400K list at ceiling, stagnant engagement",
      issues: ["No sales conversion", "Monthly sends only", "No automation flows", "No segmentation"]
    },
    {
      channel: "SEO",
      budget: "Organic",
      performance: "Ranking #1-2 for multiple collectible brands",
      issues: ["Ranking for out-of-stock products", "Museum traffic not leveraged"]
    },
    {
      channel: "Social Media",
      budget: "Limited",
      performance: "8K followers (shop), 100K+ (museum)",
      issues: ["Promotion-heavy", "Lacking storytelling", "No TikTok presence", "No live shopping"]
    }
  ]
};

// Critical Problems Data
export const problemsData: Problem[] = [
  {
    id: "resource-crisis",
    title: "Resource Allocation Crisis",
    category: "resource",
    severity: "critical",
    description: "Alejandro's workload is diluted across 4 separate websites, preventing focus on core e-commerce revenue generation.",
    symptoms: [
      "Managing Shop, Museum, Gallery, and Goldman Properties sites simultaneously",
      "Product data entry for 2,500 SKUs done manually",
      "Google Ads management across multiple businesses",
      "No delegation or standard operating procedures",
      "Working in isolation with minimal support"
    ],
    impact: "Core e-commerce responsibilities (driving shop sales) diluted by peripheral duties, limiting growth potential and creating single point of failure"
  },
  {
    id: "marketing-disconnect",
    title: "Disconnected Marketing & E-Commerce",
    category: "strategy",
    severity: "high",
    description: "Marketing and e-commerce teams operate in silos without coordination, leading to missed opportunities and inefficient campaigns.",
    symptoms: [
      "Marketing creates campaigns without e-commerce input",
      "Product launches happen without marketing preparation",
      "No standardized product launch SOP",
      "Social media operates independently of shop priorities",
      "Email campaigns lack strategic product focus"
    ],
    impact: "Fragmented customer journey, inconsistent messaging, and suboptimal conversion rates across all channels"
  },
  {
    id: "product-strategy-misalignment",
    title: "Inventory & Product Strategy Misalignment",
    category: "strategy",
    severity: "high",
    description: "Products designed for retail experience, not e-commerce optimization, resulting in uncompetitive online positioning.",
    symptoms: [
      "Pricing uncompetitive online vs. in-store experience",
      "No clear differentiation strategy for digital channels",
      "Margins too thin for aggressive digital advertising",
      "Limited quantities prevent sustained SEO investment",
      "Supplier instability (Super Plastic closure, Asulin restrictions)"
    ],
    impact: "Unable to scale paid advertising profitably, limited marketplace expansion opportunities, and vulnerable to supplier changes"
  },
  {
    id: "data-fragmentation",
    title: "Data Fragmentation Across Systems",
    category: "technical",
    severity: "high",
    description: "Multiple systems not communicating, preventing unified customer view and strategic decision-making.",
    symptoms: [
      "Lightspeed (inventory), Shopify (online), Amazon (manual) not synced",
      "Google Ads accounts previously mixed (museum + shop)",
      "Mailchimp audiences separate from shopping behavior",
      "No unified customer data platform",
      "Manual reconciliation required across systems"
    ],
    impact: "Inability to track true customer lifetime value, inefficient remarketing, and data-driven decision making severely limited"
  },
  {
    id: "missed-opportunities",
    title: "Massive Untapped Revenue Opportunities",
    category: "operational",
    severity: "critical",
    description: "Significant revenue potential being left on the table due to operational gaps and underutilized assets.",
    symptoms: [
      "250K monthly museum visitors with no shop integration",
      "Artist pages ranking #1-2 but not showcasing products",
      "No multichannel presence (missing Etsy, limited Amazon, no TikTok Shop)",
      "Basic abandoned cart recovery only",
      "No upsells, cross-sells, or product recommendations",
      "Event/group traffic (private events $50-75K each) not pursued digitally"
    ],
    impact: "Estimated $500K+ in annual revenue opportunity being missed through operational gaps and underutilized high-authority assets"
  },
  {
    id: "google-ads-structure",
    title: "Google Ads Structure Inefficiency",
    category: "technical",
    severity: "medium",
    description: "Google Ads account poorly structured for granular control and optimization.",
    symptoms: [
      "Only 4-5 campaigns (should be 200+ ad groups)",
      "Overusing Performance Max (should be Shopping + PMax remarketing)",
      "Search campaigns for remarketing (backwards)",
      "No granular product-level campaigns",
      "Broad match keywords draining budget",
      "Ranking #1 for 'Super Plastic' but no inventory"
    ],
    impact: "Paying for clicks that can't convert, unable to optimize at product level, and wasting 30-40% of ad spend on irrelevant traffic"
  },
  {
    id: "automation-gaps",
    title: "Manual Processes Preventing Scale",
    category: "operational",
    severity: "medium",
    description: "Critical workflows being done manually, limiting scalability and creating bottlenecks.",
    symptoms: [
      "Product data entry one-by-one (not bulk)",
      "SEO optimization per product manually",
      "Google Ads keyword research manual",
      "Amazon listing creation manual",
      "Price monitoring vs. competitors manual",
      "No automated feed optimization"
    ],
    impact: "Time-consuming workflows prevent scaling to full catalog potential across marketplaces, limiting revenue growth"
  }
];

// Strategic Recommendations Data
export const recommendationsData: Recommendation[] = [
  {
    id: "rec-1",
    title: "Redefine Alejandro's Role & Hire Support",
    phase: "Immediate Actions (0-30 Days)",
    priority: "critical",
    timeline: "Week 1-2",
    description: "Focus Alejandro 80% on shop revenue generation, transfer other properties to external agency, and hire VA team for operational tasks.",
    actions: [
      "Transfer museum/gallery/corporate site management to external agency",
      "Hire VA team (Colombia/Philippines) for product uploads, keyword research, and listing maintenance",
      "Document all current processes and create handoff materials",
      "Establish daily sync between Nicole and Alejandro",
      "Set up shared project management system (ClickUp/Monday.com)"
    ],
    expectedOutcome: "Alejandro focuses on revenue-generating activities, operational velocity increases 3x, single point of failure eliminated"
  },
  {
    id: "rec-2",
    title: "Restructure Google Ads for Performance",
    phase: "Immediate Actions (0-30 Days)",
    priority: "critical",
    timeline: "Week 1-3",
    description: "Rebuild Google Ads structure with granular control, proper campaign types, and data-driven optimization.",
    actions: [
      "Create product-set campaigns for top collections",
      "Implement proper Shopping/PMax split",
      "Build 200+ ad groups for precise targeting",
      "Add extensive negative keyword lists",
      "Set up conversion tracking with actual revenue values",
      "Pause campaigns for out-of-stock products"
    ],
    expectedOutcome: "ROAS improves from 2X to 3.5X+, CPA decreases 40%, wasted spend eliminated"
  },
  {
    id: "rec-3",
    title: "Launch Marketplace Expansion (Etsy, eBay, Amazon)",
    phase: "Immediate Actions (0-30 Days)",
    priority: "high",
    timeline: "Week 0-3",
    description: "Expand to multiple marketplaces with automated product feeds to reach new audiences.",
    actions: [
      "Set up Etsy storefront for artist-focused products",
      "Launch eBay store for collectibles with Best Offer",
      "Expand Amazon presence (books, allowable categories)",
      "Implement automated feed management tool",
      "Create channel-specific product titles and attributes",
      "Establish daily sync and error monitoring"
    ],
    expectedOutcome: "400-600 SKUs live across marketplaces, $20-30K additional GMV in first 90 days"
  },
  {
    id: "rec-4",
    title: "Implement Email Marketing Automation",
    phase: "Immediate Actions (0-30 Days)",
    priority: "high",
    timeline: "Week 0-3",
    description: "Transform email from monthly blasts to strategic automated flows driving revenue.",
    actions: [
      "Set up welcome series (3-email sequence)",
      "Implement abandoned cart recovery",
      "Create post-purchase follow-up flow",
      "Build win-back campaign for lapsed customers",
      "Segment list by engagement and purchase behavior",
      "A/B test subject lines and send times"
    ],
    expectedOutcome: "Email drives 7-10% of revenue during BFCM, ongoing 15% revenue contribution"
  },
  {
    id: "rec-5",
    title: "Cross-Link Museum Site to Shop",
    phase: "Short-Term (1-3 Months)",
    priority: "high",
    timeline: "Month 1-2",
    description: "Leverage 250K monthly museum visitors by integrating shop products on artist pages.",
    actions: [
      "Build artist product module component for museum site",
      "Map artist pages to shop product tags/collections",
      "Implement UTM tracking for attribution",
      "Add 'Shop This Artist' CTAs on all artist pages",
      "Create reciprocal links from shop to museum content"
    ],
    expectedOutcome: "5-10K additional monthly shop visitors from museum traffic, improved SEO through internal linking"
  },
  {
    id: "rec-6",
    title: "Launch Live Shopping Program",
    phase: "Short-Term (1-3 Months)",
    priority: "medium",
    timeline: "Month 1-3",
    description: "Create weekly live shopping shows featuring artists and exclusive products.",
    actions: [
      "Develop run-of-show template and content calendar",
      "Set up multi-platform streaming (Instagram, TikTok, YouTube)",
      "Create limited edition/signed items for shows",
      "Build post-production workflow for highlights",
      "Implement shoppable links and promo codes",
      "Train host and establish guest rotation"
    ],
    expectedOutcome: "$3-5K GMV per episode, 5% opt-in rate from viewers, 30+ social content pieces per show"
  },
  {
    id: "rec-7",
    title: "Develop 'Wearable Art' Fashion Brand",
    phase: "Medium-Term (3-6 Months)",
    priority: "medium",
    timeline: "Month 2-6",
    description: "Position fashion line as collectible wearable art with premium positioning and storytelling.",
    actions: [
      "Create brand brief and visual identity for fashion line",
      "Produce professional lookbook with artist narratives",
      "Launch capsule collections with limited units",
      "Seed micro-influencers in Miami art/fashion scene",
      "Develop wholesale pilot with 10-20 boutiques",
      "Create size charts, care guides, and model guidelines"
    ],
    expectedOutcome: "Fashion positioned as premium collectible, wholesale channel established, 30% margins improve to 50%+"
  },
  {
    id: "rec-8",
    title: "Implement AI-Powered Automation",
    phase: "Medium-Term (3-6 Months)",
    priority: "medium",
    timeline: "Month 3-6",
    description: "Deploy AI tools to automate content creation, product optimization, and customer service.",
    actions: [
      "Implement AI product description generation",
      "Automate social media content creation",
      "Set up AI chatbot for customer service",
      "Deploy email subject line optimization",
      "Create automated product feed optimization",
      "Build AI-assisted trend analysis for fashion"
    ],
    expectedOutcome: "80% time savings on manual tasks, 10x content output, 24/7 customer support, data-driven design decisions"
  }
];

// Marketing Strategy Data
export const marketingStrategyData: AuditData['marketingStrategy'] = {
  objectives: [
    "Revenue acceleration for holidays while fixing measurement and feed hygiene",
    "Expand reach via marketplaces (Etsy, Amazon, eBay) using automated product feeds",
    "Leverage parent brand and site to route qualified traffic with systematic UTMs",
    "Position fashion as wearable art with brand storytelling and content capture"
  ],
  kpis: [
    { label: "Conversion Rate Target", value: "1.2%", trend: 40, trendDirection: "up" as const, suffix: "%" },
    { label: "AOV Target", value: "$115", trend: 20, trendDirection: "up" as const },
    { label: "True ROAS", value: "350%", trend: 75, trendDirection: "up" as const, suffix: "%" },
    { label: "Email Revenue Share", value: "10%", trend: 100, trendDirection: "up" as const, suffix: "%" },
    { label: "IG Follower Growth", value: "+30%", trend: 30, trendDirection: "up" as const, suffix: "%" },
    { label: "Marketplace SKUs", value: "600", trend: 100, trendDirection: "up" as const }
  ],
  workstreams: [
    {
      id: "measurement",
      name: "Measurement & Feed Hygiene",
      timeline: "Week 0-1",
      description: "Rebuild GTM/GA4 events and fix Merchant Center data quality for accurate attribution and optimization.",
      deliverables: [
        "Tagging playbook with validated purchase events",
        "UTM conventions and channel mapping documentation",
        "Merchant Center: fixed availability/price sync, shipping/tax rules",
        "Data Studio dashboard stub for real-time monitoring"
      ],
      kpis: ["Purchase event accuracy", "Feed error rate <2%"]
    },
    {
      id: "marketplaces",
      name: "Marketplaces via Data Feeds",
      timeline: "Week 0-3",
      description: "Launch Etsy, eBay, and Amazon storefronts with automated feeds and 400-600 SKUs.",
      deliverables: [
        "Three storefronts live with 400-600 SKUs",
        "Category/attribute mapping and shipping profiles",
        "Daily feed pushes with exception reporting",
        "Marketplace SOP and error monitoring log"
      ],
      kpis: ["Error rate <5%", "$20-30K GMV by end of season"]
    },
    {
      id: "paid-media",
      name: "Paid Media Reset + BFCM Sprint",
      timeline: "Week 0-4",
      description: "Restructure Google/Meta campaigns for BFCM with proper tracking and offer strategy.",
      deliverables: [
        "Campaign architecture diagram with product-set campaigns",
        "BFCM offer ladder (free shipping, tiered discounts, bundles)",
        "Meta catalog sales + retargeting setup",
        "Daily pacing dashboard for budget management"
      ],
      kpis: ["ROAS ≥350%", "Conversion rate to 1.0-1.2%"]
    },
    {
      id: "social-leverage",
      name: "Social Leverage from Parent Brand",
      timeline: "Week 0-4",
      description: "Cross-post from museum Instagram (125K) to shop (6.5K) with systematic UTM tracking.",
      deliverables: [
        "4-week content calendar with cross-post cadence",
        "Artist module requirement doc for parent site",
        "UTM map for all social traffic sources",
        "Influencer/creator shortlist and whitelisting plan"
      ],
      kpis: ["+30% shop IG growth", "Weekly reach via parent account"]
    },
    {
      id: "live-shopping",
      name: "Live Shopping Pilot",
      timeline: "Week 2-4",
      description: "Launch weekly 30-45 min streams with artists featuring 6-10 SKUs and limited signed items.",
      deliverables: [
        "Run-of-show template and tech checklist",
        "Promo plan with inventory holds and promo codes",
        "Post-stream edit workflow for Reels/TikTok/Shorts",
        "Stream highlight chopping process"
      ],
      kpis: ["$3-5K GMV per episode", "5% opt-in rate"]
    },
    {
      id: "content-seo",
      name: "Content & SEO for Holidays",
      timeline: "Week 0-3",
      description: "Create gift guides and SEO-optimized collection pages for holiday traffic capture.",
      deliverables: [
        "6-8 gift guide pages/posts (under $50/$100, Artist Edition Books, Wearable Art)",
        "Collection and product SEO refresh for top entry pages",
        "Internal linking map from parent site",
        "Indexation check and sitemap updates"
      ]
    },
    {
      id: "email-crm",
      name: "Email/CRM Setup",
      timeline: "Week 0-3",
      description: "Implement automated email flows to replace monthly blasts and drive BFCM revenue.",
      deliverables: [
        "4 flows live (welcome, abandon cart, post-purchase, win-back)",
        "Holiday send calendar with segment strategy",
        "Revenue attribution report setup",
        "Klaviyo migration evaluation plan"
      ],
      kpis: ["Email revenue ≥7-10% during BFCM"]
    },
    {
      id: "fashion-accelerator",
      name: "Fashion Category Accelerator",
      timeline: "Week 0-4",
      description: "Foundation for wearable art positioning with BFCM capsule and PR seeding.",
      deliverables: [
        "Brand brief for wearable art positioning",
        "BFCM capsule plan (limited units + timed drops)",
        "Wholesale prospect list for Stage 2",
        "Lookbook and short-form video concepts"
      ]
    }
  ],
  timeline: [
    {
      week: "Week 0-1",
      milestones: [
        "Tagging/feeds fixed; Google Ads hygiene",
        "Etsy/eBay/Amazon storefronts provisioned",
        "Content calendar and BFCM offers locked"
      ]
    },
    {
      week: "Week 2",
      milestones: [
        "First marketplace SKUs live (200+)",
        "Cross-post cadence begins",
        "First live shopping pilot scheduled"
      ]
    },
    {
      week: "Week 3",
      milestones: [
        "Gift guides live and indexed",
        "Retargeting audiences warm",
        "Email flows turned on",
        "Marketplace error rate <5%"
      ]
    },
    {
      week: "Week 4 (BFCM)",
      milestones: [
        "Full BFCM execution with offer rotations",
        "Daily pacing and budget adjustments",
        "Post-mortem template prepared"
      ]
    }
  ]
};

// Team Review Data
export const teamReviewsData: TeamReview[] = [
  {
    name: "Alejandro Trujillo",
    currentRole: "E-Commerce Director",
    recommendedRole: "E-Commerce Operations Manager / Marketing Technologist",
    summary: "Highly dedicated and technically capable professional whose attention to detail keeps the online business running reliably. However, current performance aligns more closely with Digital Commerce Manager than strategic director level. Lacks strategic fluency and leadership leverage typically required of director-level position.",
    strengths: [
      "Technical Proficiency – Solid command of Shopify, Lightspeed, and related systems",
      "Hands-On Problem Solving – Dependable troubleshooter maintaining business continuity",
      "Process Awareness – Understands complete operational flow from inventory to checkout",
      "Adaptability – Open to testing and implementing new tools, including AI and automation"
    ],
    gaps: [
      "Strategic Growth Skills – Effective executor but not fluent in funnel design, audience segmentation, or growth modeling",
      "Campaign Management – Fragmented, overlapping campaigns misaligned with buyer journey",
      "Analytical Insight – Uses tools but doesn't translate findings into actionable direction",
      "Delegation & Leadership – Handles nearly every task personally, no SOPs or delegation",
      "Cross-Department Collaboration – Limited coordination with creative and marketing teams",
      "Brand Positioning – Missing focus on market positioning and storytelling opportunity"
    ],
    competencies: [
      { area: "Platform Management", rating: 5, description: "Excellent execution; system stability relies on hands-on management" },
      { area: "Campaign Management", rating: 2, description: "Disorganized structure, limited testing, under-optimized targeting" },
      { area: "Strategic Planning", rating: 2, description: "Operates reactively; no documented growth roadmap or campaign hierarchy" },
      { area: "Brand & Marketing Understanding", rating: 2, description: "Views e-commerce as transactional, not experiential" },
      { area: "Technical Skills", rating: 5, description: "Strong coding, automation, and systems integration capabilities" }
    ],
    developmentPriorities: [
      "Strategic Marketing Depth – Expand knowledge of funnel marketing and campaign sequencing",
      "Systemization & Delegation – Implement SOPs and delegate routine workflows",
      "Focus & Scope – Concentrate exclusively on e-commerce growth levers",
      "Cross-Team Integration – Strengthen collaboration with creative and brand teams",
      "Knowledge Documentation – Capture and formalize internal workflows for continuity"
    ]
  }
];

// Aggregate all data
export const auditData: AuditData = {
  executiveSummary: executiveSummaryData,
  organizational: organizationalData,
  currentState: currentStateData,
  problems: problemsData,
  recommendations: recommendationsData,
  marketingStrategy: marketingStrategyData,
  teamReviews: teamReviewsData
};
