export interface MediaItem {
  src: string;
  alt: string;
  title: string;
  description?: string;
  badge?: string;
}

export const seoAudit = {
  performanceSnapshot: {
    badge: "Opportunity",
    description: "Last 90 days overview and traffic mix",
    metrics: [
      { label: "Organic Conversions (90d)", value: "$6,329.33" },
      { label: "Revenue Share", value: "~14%" },
      { label: "Brand Share of Clicks", value: "~50% branded (incl. museum)" },
    ],
    notes: [
      "Brand terms (incl. museum) and Superplastic drive a large portion of clicks. Non-brand growth is the lever for incremental revenue.",
    ],
    mediaNote: "Media: GSC snapshots and revenue export (add when available)",
  },
  oosIssue: {
    severity: "Critical",
    title: "Issue: Out-of-Stock Pages Deindexed",
    description: "OOS PDPs removed from site drop rankings and link equity",
    stakeholders: [
      "When a product sells out, we lose ranking history and discovery traffic. Competitors keep traffic and capture intent.",
    ],
    technical: [
      "Keep PDP live; do not 404/301. Show OOS state with alternatives and \"notify me\".",
      "Keep canonical URL and include in XML sitemap; use Product schema with availability=OutOfStock.",
      "Hide from collections only (theme condition), not from the index.",
      "Link to closest in-stock equivalents and the parent category.",
    ],
    owner: "SEO + Dev",
    impact: "High",
    timeline: "3–5 days",
  },
  categoryHubs: {
    badge: "High Leverage",
    description: "Turn default Shopify collection pages into content-rich hubs",
    components: [
      "Intro copy with primary KW cluster and internal links.",
      "Subcategory grid (artists, styles, materials, sizes).",
      "Featured products + evergreen bestsellers.",
      "FAQ schema block for category queries.",
      "Editorial teaser row (latest TOFU/MOFU articles).",
    ],
    owner: "SEO + Content",
    impact: "High",
    timeline: "2–3 weeks",
    media: [
      {
        src: "/media/fashion_mockup_mini_homepage.png",
        alt: "Category hub example: Collections Fashion",
        title: "Collections → Fashion (example)",
        description:
          "Illustrative layout for a mini homepage: intro copy, subcategories, featured SKUs, FAQs, and editorial teasers.",
        badge: "Hub",
      },
    ] as MediaItem[],
  },
  contentStrategy: {
    badge: "Roadmap",
    description: "Top/middle/bottom funnel content to drive discovery and conversion",
    tofu: [
      "Street art news and culture explainers",
      "Artist interviews and process stories",
      "Guides: \"What is streetwear art?\" \"How to style [artist] capsule\"",
    ],
    mofu: [
      "Artist spotlights linking to category hubs and capsules",
      "Material/fit guides for apparel; size charts and care",
      "Collection lookbooks with internal links to PDPs",
    ],
    bofu: [
      "Listicles: 'Best gifts for artsy people', 'Top [artist] tees'",
      "Searches like '[artist name] + products'",
      "Landing pages targeting high-intent queries with schema",
    ],
    owner: "Content",
    impact: "Medium–High",
    timeline: "ongoing",
    media: [
      {
        src: "/media/results_for_listical_style_pages.png",
        alt: "SERP for gifts for artsy people",
        title: "Listicle-style SERP: gifts for artsy people",
        description: "Shows dominant formats and angle opportunities for BOFU listicles.",
        badge: "SERP",
      },
      {
        src: "/media/mid-bottom-of-the-funnel-results.png",
        alt: "SEMRush mid-bottom funnel volume",
        title: "SEMRush: Mid/Bottom-of-funnel volume",
        description:
          "Keyword volumes and difficulty to prioritize BOFU listicles and artist + product targets.",
        badge: "Volume",
      },
    ] as MediaItem[],
  },
  pressLinks: {
    badge: "Prereq",
    description: "Announce collabs and route museum → shop traffic",
    bullets: [
      "Press releases for new collaborations and capsules; outreach to culture/retail media.",
      "Digital PR (data angles, artist features) to earn links.",
      "Prominent museum → shop links and content embeds; event recaps linking to products.",
    ],
    owner: "PR + SEO",
    impact: "Medium",
    timeline: "4–6 weeks",
  },
  seasonal: {
    badge: "Planner",
    description: "Capture seasonal demand with evergreen + timely guides",
    bullets: [
      "Evergreen: gifts for artsy people, streetwear gifts, wall art gifts.",
      "Seasonal: holiday, Black Friday/Cyber Monday, Valentine’s, Father’s/Mother’s Day.",
      "Artist-specific gift guides for high-intent searchers.",
    ],
    owner: "Content + SEO",
    impact: "Medium",
    timeline: "seasonal",
  },
  roadmap90d: {
    badge: "Execution",
    description: "Sequenced plan for impact and accountability",
    steps: [
      "Fix OOS handling (keep PDPs live, schema, back-in-stock, internal links).",
      "Stand up 3 category hubs (e.g., Apparel, Books, Figures) with content blocks.",
      "Publish 4 TOFU, 3 MOFU, 3 BOFU pieces; interlink to hubs and PDPs.",
      "Launch PR cycle for new collab; secure 5–10 earned links.",
      "Ship 2 evergreen gift guides; outline seasonal calendar.",
      "Review GSC for non-brand growth; iterate title/meta and internal links.",
    ],
  },
  outcomes: {
    badge: "Targets",
    description: "Cost, engagement, and revenue improvements",
    bullets: [
      "50–60% reduction in platform cost.",
      "3–5x improvement in engagement (CTR 3–6%).",
      "5–10% of total online revenue from email.",
      "Stronger artist‑driven storytelling and visual impact.",
    ],
  },
};
