export const emailAudit = {
  meta: {
    preparedFor: "The Wynwood Walls Shop",
    preparedBy: "Yossi Ben Barouch (MyWebExperts)",
    date: "November 2025",
    status: "Underperforming",
  },
  overview: {
    tool: "Mailchimp Enterprise",
    monthlyCost: "~$2,500",
    subscribers: "~350,000",
    notes: [
      "Extremely low CTR; negligible revenue (e.g., Nov 1 campaign: 3 orders, none for featured product).",
      "Rising bounces and list fatigue; lack of hygiene and engagement segmentation.",
      "Automation logic flaws (e.g., premature removal), likely hurting upsell/repeat.",
      "Deliverability likely degraded due to list quality and engagement issues.",
      "Consultant at $1,000/mo with limited ROI and no sales growth.",
    ],
  },
  diagnosis: [
    {
      issue: "Platform misalignment",
      symptom: "Mailchimp not optimized for Shopify",
      impact: "High cost, weak ROI",
      fix: "Migrate to Klaviyo (Shopify-native).",
    },
    {
      issue: "List hygiene",
      symptom: "Rising bounces, no cleanup automation",
      impact: "Damaged sender reputation; lower inbox rates",
      fix: "Immediate scrubbing + automated suppression.",
    },
    {
      issue: "Segmentation",
      symptom: "One-size-fits-all campaigns",
      impact: "Low engagement, irrelevant content",
      fix: "Dynamic segments by behavior, purchases, lifecycle stage.",
    },
    {
      issue: "Automation logic",
      symptom: "Flows remove contacts too early",
      impact: "Lost upsell and repeat potential",
      fix: "Redesign conditions & delays.",
    },
    {
      issue: "Content & CTAs",
      symptom: "Product mismatch, unclear hierarchy",
      impact: "Low CTR and conversion",
      fix: "Modular templates; A/B test subjects, CTAs, layouts.",
    },
    {
      issue: "Analytics blind spots",
      symptom: "No accurate revenue attribution",
      impact: "Can't assess ROI",
      fix: "UTMs + GA4 e‑commerce + CRM revenue tagging.",
    },
  ],
  migration: {
    recommendedTool: "Klaviyo",
    rationale: [
      "Shopify-native integration (real-time orders, browsing, product data).",
      "Advanced segmentation by artist/category/product.",
      "Cost savings up to ~$1,000/month.",
      "Automation library for welcome, browse abandon, post-purchase, win-back.",
    ],
    projections: {
      monthlyCost: "$2,500 → $1,200–$1,500",
      ctr: "<1% → 3–6%",
      cvr: "0.03% → 0.3–1.0%",
      revenueShare: "Negligible → 2–7% of online revenue",
    },
  },
  segmentation: {
    phase1Cleanup: [
      "Suppress bounced/invalid emails and non‑engagers (last 10 campaigns).",
      "Automate bounce removal going forward.",
      "Validate form sources (ticketing, Wi‑Fi, in‑store, API).",
    ],
    phase2Rebuild: [
      "High‑Value (2+ orders, AOV > $100) — VIP early access.",
      "Recent Visitors (viewed, no purchase) — browse re‑engagement.",
      "First‑Time Buyers (no repeat 60d) — upsell/retention.",
      "Inactive (90+ days) — re‑engage or suppress.",
      "Product Interest by artist/category — personalized updates.",
    ],
  },
  automations: [
    "Welcome Series — introduce brand, bestsellers, artist stories.",
    "Abandoned Cart — recover revenue; time‑bound incentive.",
    "Post‑Purchase — reviews and complementary recommendations.",
    "Win‑Back (90d inactive) — re‑engagement offers.",
    "Product Launch — notify relevant audience by artist/product type.",
    "Birthday/Anniversary — loyalty and personalization.",
    "Specialized Artist Drop — teaser → countdown → drop → last chance.",
  ],
  creative: {
    recommendations: [
      "Modular templates: hero banner, artist spotlight, dynamic product block (Shopify), strong CTA.",
      "Seasonal themes: Street Art Holiday Gifts; Artist Drop Spotlight; Wynwood Summer Collection.",
      "A/B test subject lines, CTA copy, layout hierarchy.",
    ],
  },
  analytics: {
    tracking: [
      "UTMs on all links (utm_source=email&utm_medium=klaviyo&utm_campaign=...).",
      "GA4 e‑commerce sync; report by campaign, segment, flow.",
    ],
    kpis: [
      "Open Rate",
      "CTR",
      "Conversion Rate",
      "Revenue per Email",
      "Unsub/Bounce",
    ],
  },
  plan90d: [
    "Weeks 1–2: audit/export Mailchimp; identify non‑engagers and bounces.",
    "Weeks 3–4: migrate to Klaviyo; rebuild Welcome, Abandoned Cart, Post‑Purchase.",
    "Month 2: implement segmentation, rebuild templates, launch initial campaigns.",
    "Month 3: layer artist flows; A/B test; optimize timing/frequency; review ROI.",
  ],
  outcomes: [
    "50–60% platform cost reduction.",
    "3–5x engagement lift (CTR 3–6%).",
    "5–10% of total online revenue from email.",
    "Stronger artist‑driven storytelling.",
  ],
};
