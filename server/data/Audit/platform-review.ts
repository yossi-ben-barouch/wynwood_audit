export const platformReviewData = {
  summary: {
    headline: "Platform Infrastructure & Technical Health",
    description:
      "Core systems audit covering measurement, data integrity, catalog management, and operational bottlenecks.",
  },
  infrastructure: {
    platforms: [
      {
        name: "Shopify",
        type: "E-Commerce",
        description: "Primary online store platform (migrated ~3 years ago)",
        cost: "$8,200/year",
        status: "Active",
        issues: [
          "Variant consistency needs enforcement",
          "Taxonomy depth limited",
          "High app costs ($384.43/mo) - opportunity to optimize stack",
        ],
      },
      {
        name: "Mailchimp",
        type: "Email/CRM",
        description: "Email marketing platform with 400K contacts",
        cost: "$30,000/year",
        status: "Waste",
        issues: [
          "Not synced with shopping behavior",
          "No automation flows (abandoned cart, post-purchase)",
          "High cost - Klaviyo would be more affordable ($700-1,200/mo) and integrate better with Shopify",
          "Missing key automations: cart reminder → wait 3 days → send 15% off 1-day coupon",
          "Poor segmentation with 350K unengaged contacts",
        ],
      },
      {
        name: "SEMrush",
        type: "SEO",
        description:
          "SEO and competitive analysis tool with extra modules (paid yearly in March)",
        cost: "$2,760/year",
        status: "Underutilized",
        issues: [
          "Need to focus on SEO content creation to complement potential shoppers intrest.",
          "Keyword research and content gap analysis underused",
        ],
      },
      {
        name: "Google Ads",
        type: "Advertising",
        description: "Primary paid search and shopping campaign spend",
        cost: "$36,000/year",
        status: "Active",
        issues: [
          "Conversion tracking issues affecting optimization",
          "ROAS around breakeven",
        ],
      },
      {
        name: "Meta Ads",
        type: "Advertising",
        description: "Facebook and Instagram advertising spend",
        cost: "$6,000/year",
        status: "Active",
        issues: ["Currently losing money", "Creative refresh needed"],
      },
      {
        name: "TikTok Ads",
        type: "Advertising",
        description: "TikTok advertising experimental spend",
        cost: "$720/year",
        status: "Active",
        issues: [],
      },
      {
        name: "Blue Check Verification",
        type: "Advertising",
        description:
          "Social media verification subscription for brand credibility",
        cost: "$480/year",
        status: "Active",
        issues: [],
      },
      {
        name: "Accumula",
        type: "E-Commerce",
        description: "Marketing automation and analytics tool",
        cost: "$1,200/year",
        status: "Active",
        issues: [],
      },
      {
        name: "Data Feed Watch",
        type: "E-Commerce",
        description: "Product feed optimization and management",
        cost: "$840/year",
        status: "Active",
        issues: [],
      },
      {
        name: "Quillbot",
        type: "Tools",
        description: "AI content detection and generation",
        cost: "$96/year",
        status: "Active",
        issues: [],
      },
      {
        name: "Jasper",
        type: "Tools",
        description: "AI content generation platform",
        cost: "$468/year",
        status: "Active",
        issues: [],
      },
      {
        name: "Elfsight",
        type: "Tools",
        description: "Widget and social feed integration",
        cost: "$360/year",
        status: "Active",
        issues: [],
      },
      {
        name: "ChatGPT",
        type: "Tools",
        description: "AI assistant for content and support",
        cost: "$240/year",
        status: "Active",
        issues: [],
      },
      {
        name: "Paddle.com",
        type: "Tools",
        description: "Payment processing and subscription management",
        cost: "$360/year",
        status: "Active",
        issues: [],
      },
      {
        name: "Elementor",
        type: "Tools",
        description: "Page builder for landing pages",
        cost: "$99/year",
        status: "Active",
        issues: [],
      },
    ],
    totalMonthlyCost: "$3,576.43",
    totalYearlyCost: "$87,824",
  },
  catalog: {
    totalSKUs: 2500,
    categories: [
      {
        name: "Third-party Collectibles",
        skuCount: 875,
        margin: "50-60%",
        description: "Super Plastic, Bear Bricks, Kidrobot",
        status: "At Risk - Supplier instability (Super Plastic closed)",
      },
      {
        name: "Artist-Designed Products",
        skuCount: 1000,
        margin: "60-70%",
        description: "Books, notebooks, apparel, accessories",
        status: "Good - Higher margins, limited quantities",
      },
      {
        name: "Stationery & Small Goods",
        skuCount: 625,
        margin: "30-40%",
        description: "Stickers, magnets, keychains",
        status: "Fair - Low margins, high competition",
      },
    ],
  },
  performance: {
    conversionRate: "0.8%",
    conversionTrend: -15,
    averageOrderValue: "$95",
    aovTrend: -5,
    domainAuthority: 72,
    daTrend: 8,
  },
  technicalIssues: [
    {
      id: "data-fragmentation",
      title: "Data Fragmentation Across Systems",
      severity: "High",
      description:
        "Multiple systems (Lightspeed inventory, Shopify online, Amazon manual) not communicating, preventing unified customer view.",
      impact:
        "Inability to track true customer lifetime value, inefficient remarketing, and data-driven decision making severely limited.",
      symptoms: [
        "Lightspeed, Shopify, Amazon not synced",
        "Google Ads accounts previously mixed (museum + shop)",
        "Mailchimp audiences separate from shopping behavior",
        "No unified customer data platform",
        "Manual reconciliation required across systems",
      ],
      owner: "Data Engineering",
    },
    {
      id: "measurement-instability",
      title: "Measurement & Attribution Instability",
      severity: "Critical",
      description:
        "GA4 and Google Ads conversion tracking misaligned, purchase values don't match, missing funnel events.",
      impact:
        "Cannot confidently scale paid media or measure true ROAS. Flying blind on ad spend effectiveness.",
      symptoms: [
        "Purchase values differ between GA4 and Ads",
        "Missing view_item/add_to_cart depth",
        "Attribution unstable across channels",
        "No server-side tagging",
      ],
      owner: "Marketing Tech",
    },
    {
      id: "feed-eligibility",
      title: "Feed Eligibility & Quality Issues",
      severity: "Medium",
      description:
        "Google Merchant Center showing price/availability mismatches, low GTIN coverage affecting product eligibility.",
      impact:
        "Reduced ad visibility, lower CTRs, and wasted ad spend on disapproved products.",
      symptoms: [
        "Price parity violations",
        "Stock sync delays",
        "Missing GTIN/brand data",
        "Disapproval alerts not monitored",
      ],
      owner: "E-Commerce Ops",
    },
  ],
  operationalGaps: [
    {
      id: "manual-processes",
      title: "Manual Processes Preventing Scale",
      severity: "Medium",
      description:
        "Critical workflows done manually, limiting scalability and creating bottlenecks.",
      impact:
        "Time-consuming workflows prevent scaling to full catalog potential across marketplaces, limiting revenue growth.",
      processes: [
        "Product data entry one-by-one (not bulk)",
        "SEO optimization per product manually",
        "Google Ads keyword research manual",
        "Amazon listing creation manual",
        "Price monitoring vs. competitors manual",
        "No automated feed optimization",
      ],
      owner: "E-Commerce Ops",
    },
    {
      id: "catalog-inconsistency",
      title: "Catalog & Taxonomy Inconsistency",
      severity: "Medium",
      description:
        "Shallow apparel categories, inconsistent variant data across products, limited filters.",
      impact:
        "Poor user experience, reduced discoverability, and lower conversion rates on category pages.",
      issues: [
        "Variant schema not enforced (size/color)",
        "Taxonomy doesn't align with Google Product taxonomy",
        "Limited facets for filtering (artist, size, fit)",
        "Inconsistent product data across channels",
      ],
      owner: "Merchandising",
    },
    {
      id: "app-stack-optimization",
      title: "Shopify App Stack Optimization",
      severity: "Low",
      description:
        "Current app costs of $384.43/month can be optimized by switching to more cost-effective alternatives with better features.",
      impact:
        "Potential savings of $40-$80/month while improving functionality, particularly for product reviews and UGC generation.",
      issues: [
        "High monthly app costs ($384.43/mo)",
        "Review app may be overpriced for current order volume",
        "Missing UGC (user-generated content) features",
        "Limited referral and loyalty program integration",
      ],
      recommendations: [
        {
          current: "Current review solution",
          replacement: "Loox ‑ Visual Product Reviews",
          benefits: [
            "More affordable pricing (saves $40-$80/month depending on order volume)",
            "Visual UGC reviews with photos and videos",
            "Built-in referral program features",
            "Additional coupon savings for customers who leave reviews",
            "Photo review requests to boost social proof",
            "Instagram-style photo galleries on product pages",
          ],
          investment: "Lower than current solution",
        },
      ],
      owner: "E-Commerce Ops",
    },
  ],
  priorities: [
    {
      priority: 1,
      title: "Fix Measurement & Attribution",
      timeframe: "Week 1-2",
      tasks: [
        "Audit GA4 eCommerce tracking; fix conversion actions",
        "Push fixed GTM container and validate purchase events end-to-end",
        "Restrict 'Purchase' as the only primary conversion action in Ads",
        "Deploy server-side tagging for stability (optional)",
      ],
    },
    {
      priority: 2,
      title: "Stabilize Product Feeds",
      timeframe: "Week 2-3",
      tasks: [
        "Normalize pricing pipeline between Shopify and Merchant Center",
        "Add GTIN/brand data where missing (at least top 500 SKUs)",
        "Set up automated alerts for feed disapprovals",
        "Deploy feed management app to rewrite titles with artist + product descriptors",
      ],
    },
    {
      priority: 3,
      title: "Automate Manual Workflows",
      timeframe: "Month 2",
      tasks: [
        "Implement bulk product data entry workflows",
        "Set up automated SEO optimization (templates + rules)",
        "Build automated feed sync for marketplaces",
        "Deploy price monitoring tool for competitive intelligence",
      ],
    },
  ],
  uxDeepDive: {
    headline: "UX & Site Experience Assessment",
    description:
      "The shop Loox visually appealing but lacks strategic organization and conversion-optimized features. With a new Shopify theme in development, now is the time to implement best practices.",
    currentState: {
      strengths: [
        "Clean, professional visual design",
        "Good brand presentation and aesthetics",
        "High-quality product photography (white background)",
      ],
      weaknesses: [
        "Poor data organization and information architecture",
        "Default collection page layouts without guidance",
        "Missing conversion rate optimization (CRO) features",
        "Limited product discovery mechanisms",
        "Mobile experience not optimized for browsing",
      ],
    },
    productPageImprovements: {
      title: "Product Page Enhancements",
      priority: "High",
      status: "New Theme Implementation Opportunity",
      recommendations: [
        {
          area: "Custom Sections & Content Distribution",
          issue:
            "Product pages lack structured information hierarchy and artist storytelling.",
          solution:
            "Implement custom Shopify sections to organize content effectively.",
          actions: [
            "Create dedicated 'Artist Bio' section with short bio and link to full artist page",
            "Restructure FAQ section with collapsible accordions",
            "Add SEO schema markup for FAQs (schema.org/FAQPage)",
            "Implement product story/inspiration section",
            "Add 'Materials & Care' section with proper formatting",
          ],
          impact:
            "Better SEO, increased time on page, improved customer confidence",
        },
        {
          area: "Advanced Cart & Checkout",
          issue:
            "No in-session upsell or cross-sell mechanisms to increase AOV.",
          solution:
            "Integrate slide-out cart with intelligent product recommendations.",
          actions: [
            "Implement slide-out side cart (not redirect to cart page)",
            "Add 'Frequently Bought Together' module",
            "Show related products from same artist/collection",
            "Include cart bonuses/thresholds (e.g., 'Add $20 for free shipping')",
            "Enable quick add-to-cart from recommendations",
          ],
          impact:
            "20-30% AOV increase typical with proper upsell/cross-sell implementation",
          image: "/media/advanced_sidecart_example.png",
        },
        {
          area: "Cross Sale, Upsell Module",
          issue: "Missing post-sale revenue opportunities.",
          solution:
            "Add thank-you page and email upsells for complementary products.",
          actions: [
            "Implement thank-you page product recommendations",
            "Create post-purchase email sequence with related products",
            "Offer time-limited discounts on complementary items",
            "Show 'Complete your collection' modules",
          ],
          impact: "5-10% additional revenue from existing customers",
          image: "/media/upsale_features.png",
        },
      ],
    },
    collectionPageRedesign: {
      title: "Collection & Category Page Transformation",
      priority: "High",
      status: "Currently Using Default Shopify Layout",
      issue:
        "Category pages use default 'display collection on page' style without visual guidance or merchandising strategy.",
      solution:
        "Transform collection pages into mini landing pages that guide exploration.",
      recommendations: [
        {
          component: "Hero Section",
          description:
            "Add collection hero with story, featured products, and clear value proposition",
        },
        {
          component: "Featured Artist Spotlight",
          description:
            "Highlight 2-3 key artists in collection with images and bios",
        },
        {
          component: "Visual Category Navigation",
          description:
            "Image-based subcategory tiles (e.g., 'Shirts', 'Hoodies', 'Hats', 'Accessories')",
        },
        {
          component: "Curated Product Grids",
          description:
            "Merchandised sections like 'New Arrivals', 'Best Sellers', 'Staff Picks'",
        },
        {
          component: "Story Blocks",
          description: "Intersperse content blocks about artists and products",
        },
      ],
      impact:
        "Increased engagement, longer session times, better product discovery, higher conversion rates",
    },
    mobileOptimization: {
      title: "Mobile Experience Overhaul",
      priority: "Critical",
      status: "Currently Multi-Item Layout",
      issue:
        "Mobile shows multi-item grid layout, reducing product visibility and engagement.",
      solution:
        "Implement single-item Instagram-style scrolling for mobile product browsing.",
      recommendations: [
        "Switch to single-item vertical scroll on mobile collection pages",
        "Full-width product images for maximum impact",
        "Swipeable product image galleries (Instagram-style)",
        "Quick-tap heart icon for wishlisting",
        "Persistent 'Add to Cart' button at bottom of screen",
        "Lazy loading for performance",
      ],
      benefits: [
        "Increased product visibility (100% vs. 25-50% of screen)",
        "Longer time on site (more engaging scroll experience)",
        "Better mobile conversion rates (less friction)",
        "Improved product photography showcase",
        "More Instagram-native browsing experience",
      ],
      impact:
        "Mobile conversion typically increases 15-25% with single-item layouts",
    },
    imageStrategy: {
      title: "Product Image Strategy & Testing",
      priority: "Medium",
      status: "Currently White Background Only",
      recommendation:
        "Test lifestyle images as primary thumbnail while maintaining white background for secondary images.",
      approach: [
        "A/B test lifestyle vs. white background as primary image",
        "Use lifestyle images showing product in use/context",
        "Maintain white background for detailed product views",
        "Implement image hover to reveal lifestyle shot",
        "Create 'lifestyle' image tagging system in Shopify",
        "Program new theme to dynamically select thumbnail style",
      ],
      technicalNote:
        "Requires custom Liquid code in new theme to conditionally display images based on tags or metafields.",
      expectedOutcome:
        "Lifestyle images typically increase click-through 15-20% but may vary by product type",
    },
    croFeatures: {
      title: "Missing CRO Features",
      priority: "High",
      status: "Essential Features Not Implemented",
      missingFeatures: [
        {
          feature: "Quick View Modal",
          description:
            "Allow customers to preview product details without leaving collection page",
          impact:
            "Reduces friction, increases exploration, 10-15% conversion lift",
        },
        {
          feature: "Quick Add to Cart",
          description:
            "One-click add to cart from collection pages with variant selection",
          impact: "Faster shopping experience, reduced page loads, higher AOV",
        },
        {
          feature: "Product Compare",
          description: "Side-by-side comparison of similar products",
          impact:
            "Helps decision-making for similar items (notebooks, apparel)",
        },
        {
          feature: "Size Guide Modal",
          description:
            "Interactive size guide for apparel with measurement instructions",
          impact:
            "Reduces returns, increases confidence, fewer support tickets",
        },
        {
          feature: "Back-in-Stock Notifications",
          description: "Email signup for out-of-stock items",
          impact: "Capture demand, build email list, recover lost sales",
        },
        {
          feature: "Recently Viewed Products",
          description: "Persistent module showing browsing history",
          impact: "Easy navigation, increased re-engagement",
        },
      ],
      implementation:
        "All features can be built into new Shopify theme or via apps",
    },
    themeImplementation: {
      title: "New Shopify Theme Development",
      priority: "Critical",
      status: "In Development",
      requirements: [
        "All custom sections must be modular and editable via Shopify theme editor",
        "Mobile-first responsive design with single-item mobile scrolling",
        "Custom Liquid code for dynamic image selection (lifestyle vs. white background)",
        "Built-in side cart with upsell/cross-sell capabilities",
        "Quick view and quick add functionality",
        "SEO schema markup for products, FAQs, and breadcrumbs",
        "Performance optimized (90+ Lighthouse score)",
        "Flexible collection page templates (grid vs. curated landing page)",
      ],
      recommendation:
        "Hire experienced Shopify developer or agency to implement alongside Alejandro to ensure best practices and timely delivery.",
      estimatedTimeline: "6-8 weeks for full theme customization",
      estimatedInvestment:
        "$7,000-$12,000 for professional Shopify development",
    },
  },
  measurementDeepDive: {
    headline: "GA4 & Measurement Audit",
    description:
      "Current GA4 setup is basic and misconfigured. E-commerce tracking passes incorrect values, causing inflated ROAS reporting (159–1706%) and poor optimization decisions.",
    currentState: {
      status: "Misconfigured",
      implementation: "Merge GTM and Shopify built in tag manager",
      activeEvents: ["page_view", "add_to_cart", "begin_checkout", "purchase"],
      criticalIssues: [
        "Non-purchase events (add_to_cart) incorrectly set as primary conversion in Google Ads",
        "Cross-domain tracking not configured (shop, museum, gallery tracked separately)",
        "UTM strategy is ad-hoc with no standardized naming convention",
      ],
    },
    issues: [
      {
        id: "wrong-primary-conversions",
        title: "Incorrect Primary Conversion Actions",
        severity: "High",
        description:
          "Non-purchase events (add_to_cart, begin_checkout) are set as primary conversion actions in Google Ads instead of purchase.",
        impact:
          "Ads optimization targets wrong actions, leading to clicks and cart additions rather than actual sales.",
        currentBehavior:
          "add_to_cart and begin_checkout are primary conversions in Ads",
        requiredFix:
          "Set 'purchase' as the only primary conversion action; demote others to secondary",
      },
      {
        id: "cross-domain-tracking",
        title: "Cross-Domain Tracking Not Configured",
        severity: "High",
        description:
          "Museum site (thewynwoodwalls.com), shop (shop.thewynwoodwalls.com), and gallery (goldmanglobalarts.com) are tracked as separate properties. Users visiting museum → shop are counted as new sessions.",
        impact:
          "Attribution chains broken. Cannot track full customer journey or understand museum-to-shop conversion path.",
        currentBehavior: "Three separate GA4 tracking streams with no linking",
        requiredFix:
          "Implement cross-domain tracking with linked Measurement IDs or unified GA4 property",
      },
      {
        id: "utm-inconsistency",
        title: "No UTM Naming Convention",
        severity: "Medium",
        description:
          "UTM parameters are applied ad-hoc across Google Ads, Meta, and Mailchimp with no standardized naming structure.",
        impact:
          "Campaign data is inconsistent and difficult to aggregate for reporting. Channel attribution unclear.",
        currentBehavior:
          "Each channel uses different UTM syntax (no documentation)",
        requiredFix:
          "Create and enforce UTM governance guide with standardized naming",
      },
      {
        id: "server-side-tagging",
        title: "No Server-Side Tagging",
        severity: "Low",
        description:
          "Only client-side GTM is implemented. No server-side container or Cloud setup for data protection and accuracy.",
        impact:
          "Ad blockers prevent tag firing; data loss and inaccuracy. No data layer protection.",
        currentBehavior: "All tags fire client-side only",
        requiredFix:
          "In future state, plan server-side GTM migration (Google Cloud or Stape) for future implementation",
      },
    ],
    recommendations: [
      {
        priority: 1,
        title: "GA4 E-Commerce Event Audit & Rebuild",
        description:
          "Rebuild GA4 e-commerce tracking to pass accurate purchase data and fix conversion actions in Google Ads.",
        actions: [
          "Audit current GTM container and GA4 event configuration",
          "Document all current events and their parameters",
          "Rebuild purchase event to pass actual order value, currency, transaction_id",
          "Implement items array with product ID, name, category, price, quantity",
          "Set 'purchase' as primary conversion; demote add_to_cart and begin_checkout",
          "Test all events in GA4 DebugView and Ads conversion tracking",
          "Validate data in Google Ads conversion tracking interface",
        ],
      },
      {
        priority: 2,
        title: "Implement Cross-Domain Tracking",
        description:
          "Link museum site, shop, and gallery properties to track full customer journey and improve attribution.",
        actions: [
          "Audit current GA4 property setup and domain configuration",
          "Add linked domains in GA4 Admin → Data Streams → Configure domains",
          "Implement cross-domain cookie linking (if using separate properties)",
          "Test user journey: museum → shop → purchase",
          "Verify session stitching in GA4 reports",
        ],
      },
      {
        priority: 3,
        title: "Create & Enforce UTM Governance",
        description:
          "Standardize UTM parameter naming across all marketing channels for consistent attribution.",
        actions: [
          "Define standardized UTM naming convention",
          "Document with examples for each channel (Google Ads, Meta, Email, Organic)",
          "Create UTM template in Google Ads, Meta Ads Manager, and Mailchimp",
          "Train Alejandro and team on proper UTM usage",
          "Implement validation rules to prevent non-compliant UTMs",
        ],
      },
    ],
    utmTemplate: {
      structure:
        "utm_source=[channel]&utm_medium=[type]&utm_campaign=[campaign]&utm_content=[variant]",
      examples: [
        {
          channel: "Google Ads",
          template:
            "utm_source=google&utm_medium=cpc&utm_campaign=shop_[product]_[season]&utm_content=ad_[format]",
          example:
            "utm_source=google&utm_medium=cpc&utm_campaign=shop_apparel_q4&utm_content=ad_search",
        },
        {
          channel: "Meta Ads",
          template:
            "utm_source=meta&utm_medium=social&utm_campaign=shop_[product]_[audience]&utm_content=ad_[format]",
          example:
            "utm_source=meta&utm_medium=social&utm_campaign=shop_collectibles_lookalike&utm_content=ad_carousel",
        },
        {
          channel: "Email",
          template:
            "utm_source=mailchimp&utm_medium=email&utm_campaign=newsletter_[date]&utm_content=link_[position]",
          example:
            "utm_source=mailchimp&utm_medium=email&utm_campaign=newsletter_nov2025&utm_content=link_hero",
        },
      ],
    },
  },
  feedsDeepDive: {
    headline: "Product Feeds & Data Quality",
    description:
      "Three separate feeds in Google Merchant Center (Shopify Shopping Feed, Google Local Shopping Feed, and legacy Lightspeed feed) cause duplication and data conflicts. Critical issue: Shopify product IDs don't match Lightspeed IDs, causing data mismatches and feed inconsistencies.",
    imageReference: "/media/duplicate_datafeed_product_sources.png",
    currentState: {
      feedCount: "3 active feeds in Google Merchant Center",
      managementMethod:
        "Shopify's 'Google & YouTube' app (primary) + Google Local Shopping + Lightspeed legacy",
      dataControl: "Title and description controlled via Shopify SEO fields",
      primaryIssue:
        "Shopify ↔ Lightspeed ID mismatch causes data inconsistencies across feeds; multiple feeds create duplication and wrong ad priority",
    },
    issues: [
      {
        id: "id-mismatch",
        title: "Shopify ↔ Lightspeed Product ID Mismatch",
        severity: "Critical",
        description:
          "Shopify product IDs do not match Lightspeed product IDs. When Mortar syncs products from Lightspeed to Shopify, the ID mapping is broken or inconsistent, causing data mismatches across feeds.",
        impact:
          "Feed data conflicts, inventory sync issues, product duplication with different IDs, analytics tracking fragmentation.",
        recommendation:
          "Audit product ID mapping in Mortar connector. Ensure 1:1 mapping between Lightspeed and Shopify IDs. Fix any orphaned or duplicate products.",
      },
      {
        id: "feed-duplication",
        title: "Multiple Feeds Causing Duplication & Wrong Feed Priority",
        severity: "Critical",
        description:
          "Three overlapping feeds: (1) Shopify Shopping Feed (primary), (2) Google Local Shopping Feed, (3) Legacy Lightspeed feed. Google Ads prioritizes older feeds instead of Shopify primary, reducing ad performance.",
        impact:
          "Wasted ad spend, lower CTRs, reduced eligibility. Ads show products from suboptimal feeds.",
        recommendation:
          "Audit and deactivate Google Local Shopping Feed and legacy Lightspeed feed. Keep only Shopify API feed as primary.",
      },
      {
        id: "feed-data-control",
        title: "Limited Feed Data Control",
        severity: "High",
        description:
          "Currently, only SEO title and description can be controlled in Shopify to influence feed data. Full control over all feed attributes requires API integration or custom feed.",
        impact:
          "Cannot optimize all feed fields (custom labels, brand, taxonomy) without manual workarounds.",
        recommendation:
          "Option 1: Research Shopify API for feed attribute control. Option 2: Build custom feed as source of truth with full data control.",
      },
    ],
    recommendations: [
      {
        priority: 1,
        title: "Create Single Unified Feed via Data Feed Service",
        description:
          "Consolidate all product data sources into a single optimized feed using the current data feed service. Merge data from both Shopify and Lightspeed feeds to create one authoritative feed source.",
        actions: [
          "Configure data feed service to merge Shopify and Lightspeed product data",
          "Map and reconcile product IDs across both systems",
          "Set up single feed as primary source for Google Merchant Center",
          "Test feed output and verify data integrity",
        ],
      },
      {
        priority: 2,
        title:
          "Optimize Feed Data via Shopify SEO Fields with AI & Human Review",
        description:
          "Enhance and restructure current product data using AI assistance combined with human review. Optimize titles, descriptions, and attributes specifically for Google Shopping and each marketplace (Etsy, eBay, etc.).",
        actions: [
          "Use AI to generate optimized product titles (include artist name + product type + key attributes)",
          "Generate enhanced descriptions with marketplace-specific keywords",
          "Human review and refine AI-generated content for brand voice and accuracy",
          "Update Shopify SEO fields with optimized content",
          "Document optimization template for consistency",
        ],
      },
      {
        priority: 3,
        title: "Switch Google Ads Feed Source from Lightspeed to Shopify",
        description:
          "Redirect Google Ads product feed source from legacy Lightspeed feed to Shopify feed. This allows for basic field overrides in Google Ads while consolidation work is in progress.",
        actions: [
          "Update Google Ads product feed configuration to use Shopify as source",
          "Deactivate Lightspeed feed from Google Ads",
          "Set up basic field overrides in Google Ads for immediate optimization",
          "Monitor feed performance and data accuracy post-switch",
        ],
      },
    ],
  },
  catalogDeepDive: {
    headline: "Product Catalog & Data Optimization",
    description:
      "Catalog is well-maintained with excellent lifestyle photography from museum grounds. However, product data fields can be optimized using a standardized template with reusable components (artist bios, FAQs, tiered descriptions, tags) for better marketplace syndication and SEO.",
    currentState: {
      totalSKUs: 2500,
      strengths: [
        "Excellent lifestyle photography from museum grounds",
        "Well-curated product selection with quality artwork",
        "Prices and inventory synced between Lightspeed and Shopify",
        "Products published and actively managed",
      ],
      opportunities: [
        "Product data fields not fully leveraged in template",
        "Missing reusable components (artist bio, FAQs, tiered descriptions)",
        "No product tags for marketplace and SEO optimization",
        "Inconsistent data structure across products",
      ],
    },
    issues: [
      {
        id: "data-template-optimization",
        title: "Product Data Template Not Fully Optimized",
        severity: "High",
        description:
          "Current product data doesn't leverage all available template fields. Missing structured components for artist information, FAQs, tiered descriptions, and tags that could enhance SEO and marketplace performance.",
        impact:
          "Missed SEO opportunities, reduced marketplace compatibility, and inability to syndicate rich product data to Etsy, eBay, and Amazon.",
        recommendation:
          "Implement standardized product template with: short artist bio (with links), formatted FAQs, short description with bullets (Amazon-ready), full description, and product tags (Etsy/Google Shopping keywords)",
      },
      {
        id: "reusable-components",
        title: "Missing Reusable Data Components",
        severity: "High",
        description:
          "No centralized artist information, FAQ templates, or description frameworks. Each product is created independently without leveraging common data.",
        impact:
          "Inconsistent data quality, duplicated effort, and inability to scale product enrichment efficiently.",
        recommendation:
          "Create reusable components: artist bio library (with links), FAQ templates, description frameworks, and tag taxonomy for consistent application across catalog",
      },
      {
        id: "product-tags-missing",
        title: "Product Tags Not Implemented",
        severity: "Medium",
        description:
          "Products lack structured tags for keywords, categories, and attributes. This limits discoverability and marketplace optimization.",
        impact:
          "Reduced SEO performance, poor filtering on collection pages, and inability to optimize for marketplace-specific keywords (Etsy, Google Shopping).",
        recommendation:
          "Implement product tag system with: style tags, artist tags, material tags, and SEO keyword tags for marketplace syndication",
      },
    ],
    recommendations: [
      {
        priority: 1,
        title: "Build Standardized Product Data Template",
        description:
          "Create a comprehensive product template that includes all necessary fields for web, marketplace, and SEO optimization. This template will serve as the source of truth for all product data.",
        actions: [
          "Define template fields: short artist bio (with links), formatted FAQs, short description with bullets, full description, product tags, and metadata",
          "Create artist bio library with links to museum/artist pages",
          "Build FAQ template for common product questions",
          "Document description guidelines: short version (Amazon-ready), full version (detailed), and bullet points",
          "Establish product tag taxonomy for SEO and marketplace keywords",
        ],
      },
      {
        priority: 2,
        title: "Implement Reusable Data Components",
        description:
          "Set up systems to reuse common data components across products, reducing manual entry and ensuring consistency.",
        actions: [
          "Create artist bio library with pre-written bios and links (reusable across products by same artist)",
          "Build FAQ template library for common questions (material, care, sizing, shipping)",
          "Set up description framework templates for different product types",
          "Create product tag taxonomy (style, artist, material, keywords) for consistent tagging",
          "Document reusable component guidelines for team",
        ],
      },
      {
        priority: 3,
        title: "Enrich Top Products with Optimized Data",
        description:
          "Start with top 500 products by revenue/traffic to populate all template fields with optimized, marketplace-ready content.",
        actions: [
          "Prioritize products by revenue and traffic",
          "Populate artist bios with links for top 500 products",
          "Add formatted FAQs to top 500 products",
          "Create tiered descriptions (short/bullets for Amazon, full for web)",
          "Apply product tags for SEO and marketplace optimization",
          "Validate data in Shopify and test feed output",
        ],
      },
    ],
  },
  integrationsDeepDive: {
    headline: "System Integrations & Data Flow",
    description:
      "Core systems are well-integrated with Lightspeed feeding product and inventory data to Shopify, synced pricing and stock levels, and both systems populating Google Merchant Center. The foundation is solid with room to add strategic marketing apps to enhance conversion and customer engagement.",
    currentState: {
      systems: [
        "Lightspeed (POS & Inventory)",
        "Shopify (E-Commerce)",
        "Mailchimp (Email & CRM)",
        "GA4 (Analytics)",
        "Google Ads",
        "Meta Ads",
        "Zola (Museum Ticketing)",
        "ArtCloud (Gallery)",
      ],
      activeApps: [
        "Mortar (Brick & Mortar) - Lightspeed ↔ Shopify sync",
        "Google & YouTube (by Shopify) - Merchant Center feed",
        "Mailchimp for Shopify - Email & order sync",
        "Meta / Facebook & Instagram - Catalog publishing",
      ],
      integrationMethod:
        "Native Shopify app connectors with reliable data sync",
      integrationStrengths: [
        "Lightspeed feeds inventory and pricing to Shopify (synced)",
        "Both Lightspeed and Shopify populate Google Merchant Center",
        "Shopify feeds product data to Meta for social commerce",
        "Mailchimp syncs customer and order data from Shopify",
        "GA4 tracks e-commerce events and conversions",
        "Product creation and updates flow automatically from POS to web",
      ],
    },
    appStack: {
      activeApps: [
        {
          name: "Mortar (Brick & Mortar)",
          purpose: "Lightspeed POS ↔ Shopify sync",
          status: "Active",
          cost: "~$100/year",
          issues:
            "Products synced as drafts; requires manual enrichment before publishing",
        },
        {
          name: "Google & YouTube (by Shopify)",
          purpose: "Product feed to Google Merchant Center",
          status: "Active",
          cost: "Free",
          issues:
            "Source of duplicate feed issue; limited enrichment; truncates long titles",
        },
        {
          name: "Mailchimp for Shopify",
          purpose: "Customer & order data sync to Mailchimp",
          status: "Active",
          cost: "$2,500/mo (Mailchimp platform)",
          issues:
            "Poor segmentation; 350K unengaged contacts; high bounce rates",
        },
        {
          name: "Meta / Facebook & Instagram",
          purpose: "Catalog publishing to social shops",
          status: "Likely active",
          cost: "Free",
          issues: "Limited catalog coverage; not fully optimized",
        },
      ],
      criticalApps: [
        {
          app: "Klaviyo",
          category: "Email & Marketing Automation",
          recommendation: "Recommended replacement for Mailchimp",
          benefits: [
            "Native Shopify integration with deep e-commerce data sync",
            "Advanced segmentation based on purchase behavior",
            "Reduce costs compared to current Mailchimp spend ($2,500/mo)",
            "Built-in automation flows (abandoned cart, post-purchase, winback)",
            "Better deliverability and list management",
            "Customer lifetime value tracking",
          ],
          estimatedCost: "$700-1,200/mo (based on list size)",
          priority: "High",
        },
        {
          app: "Loox",
          category: "Reviews & UGC",
          recommendation: "Recommended for social proof and conversion",
          benefits: [
            "Reward customers for video and image reviews",
            "Simple affiliate features to incentivize referrals",
            "Upsell and cross-sell features built-in",
            "Display visual reviews on product pages",
            "Collect authentic user-generated content",
            "Increase conversion rates through social proof",
          ],
          estimatedCost: "$50-150/mo",
          priority: "High",
        },
      ],
    },
    dataFlow: {
      flowDiagram:
        "Lightspeed → Shopify (Mortar) → Mailchimp / GA4 / Merchant Center → Google Ads / Meta Ads",
      steps: [
        {
          step: 1,
          from: "Lightspeed POS",
          to: "Shopify",
          method: "Mortar connector (automatic)",
          details:
            "Products created/updated in Lightspeed; synced to Shopify as drafts",
          issues:
            "Requires manual enrichment (descriptions, SEO, images, weight, HS code)",
        },
        {
          step: 2,
          from: "Shopify",
          to: "Mailchimp",
          method: "Mailchimp for Shopify app (automatic)",
          details: "Customer email + order data synced for email automation",
          issues:
            "Poor segmentation; 350K+ unengaged contacts; high cost; incorrect flow conditions",
        },
        {
          step: 3,
          from: "Shopify",
          to: "Google Merchant Center",
          method: "Google & YouTube app (automatic)",
          details: "Products feed to Merchant Center for Shopping ads",
          issues: "Duplicate feed issue; limited enrichment; truncated titles",
        },
        {
          step: 4,
          from: "Shopify",
          to: "GA4",
          method: "Google Channel app (automatic)",
          details: "Purchase, add_to_cart, begin_checkout events tracked",
          issues:
            "Purchase value hardcoded as '1'; no enhanced e-commerce; no user_id tracking",
        },
        {
          step: 5,
          from: "GA4",
          to: "Google Ads",
          method: "Conversion sync (automatic)",
          details: "Conversion actions and remarketing lists synced",
          issues:
            "Wrong primary conversions; no cross-domain tracking; audiences not optimized",
        },
        {
          step: 6,
          from: "Shopify",
          to: "Manual Checks",
          method: "Alejandro manual review",
          details:
            "Lightspeed stock vs. Shopify inventory vs. ad feed verification",
          issues: "Time-consuming; error-prone; doesn't scale",
        },
      ],
      manualBottlenecks: [
        "Product enrichment (descriptions, SEO, metadata)",
        "Feed data validation (price, stock, images)",
        "Email list cleaning and segmentation",
        "Remarketing audience creation",
        "Cross-system reconciliation",
      ],
    },
    apiWebhookUsage: {
      currentState: "Minimal; native app APIs only",
      details: [
        "All integrations use official Shopify app connectors (no custom webhooks)",
        "GA4 and Ads setup relies on default app-generated events",
        "No custom event tracking via API or server-side tagging",
        "No Zapier, Make/Integromat, or internal script automations",
        "Data syncs happen through native app connections only",
      ],
      impact:
        "Low-code but rigid; limited control over data quality, timing, or custom logic",
    },
    issues: [
      {
        id: "lightspeed-shopify-sync",
        title: "Lightspeed → Shopify Sync Requires Manual Enrichment",
        severity: "High",
        description:
          "Mortar connector syncs product creation/updates from Lightspeed to Shopify as drafts, but descriptions, SEO, categorization, and images require manual input.",
        impact:
          "Alejandro must manually enrich every product; bottleneck for scaling; delays in product launches.",
        recommendation:
          "Automate content enrichment: use templates, bulk upload, or AI-powered descriptions",
      },
      {
        id: "no-unified-identity",
        title: "No Unified Customer Identity",
        severity: "High",
        description:
          "Customers are tracked separately in Shopify, Mailchimp, GA4, and Ads. No way to link a customer's email, purchase history, and ad interactions.",
        impact:
          "Cannot build accurate customer profiles; poor personalization; ineffective remarketing.",
        recommendation:
          "Implement customer data platform (CDP) or unified ID strategy (email-based)",
      },
      {
        id: "email-purchase-disconnect",
        title: "Email List Not Synced with Purchase Behavior",
        severity: "High",
        description:
          "Mailchimp audience is not automatically updated with Shopify purchase data. No automation flows based on purchase history.",
        impact:
          "Email campaigns are generic; no post-purchase upsells; low email ROI.",
        recommendation:
          "Set up Shopify → Mailchimp API sync; create automated flows for post-purchase, abandoned cart, etc.",
      },
      {
        id: "no-automated-audiences",
        title: "No Automated Remarketing Audiences",
        severity: "Medium",
        description:
          "Remarketing audiences in Google Ads and Meta are not automatically created from GA4 or Shopify data.",
        impact:
          "Manual audience creation is time-consuming; audiences become stale; missed remarketing opportunities.",
        recommendation:
          "Set up automated audience creation: GA4 → Google Ads, Shopify → Meta Ads",
      },
      {
        id: "multi-system-ecosystem",
        title: "Complex Multi-System Ecosystem",
        severity: "Medium",
        description:
          "Museum (Zola), Gallery (ArtCloud), and Shop (Shopify) operate independently. No unified reporting or customer view.",
        impact:
          "Fragmented data; difficult to understand full customer journey across properties.",
        recommendation:
          "Create unified GA4 property or data warehouse to consolidate all three properties",
      },
    ],
    recommendations: [
      {
        priority: 1,
        title: "Implement Klaviyo for Advanced Email Marketing",
        description:
          "Replace Mailchimp with Klaviyo to reduce costs ($2,500/mo → $700-1,200/mo) while gaining native Shopify integration, advanced segmentation, and automation flows based on purchase behavior.",
        actions: [
          "Audit current Mailchimp flows and email performance",
          "Set up Klaviyo account and integrate with Shopify",
          "Migrate email list and historical data to Klaviyo",
          "Create automated flows: Welcome, Abandoned Cart, Post-Purchase, Winback",
          "Set up behavioral segmentation and customer lifecycle tracking",
          "Test deliverability and monitor engagement improvements",
        ],
      },
      {
        priority: 2,
        title: "Add Loox for Reviews and Social Proof",
        description:
          "Implement Loox to collect video and image reviews, incentivize referrals with affiliate features, and display social proof on product pages to increase conversion rates.",
        actions: [
          "Install Loox app from Shopify App Store",
          "Configure review request automation for post-purchase",
          "Set up reward system for video/image reviews",
          "Enable affiliate and referral features",
          "Design review display on product pages",
          "Launch customer outreach campaign to collect initial reviews",
        ],
      },
      {
        priority: 3,
        title: "Optimize Product Content Enrichment Workflow",
        description:
          "Streamline the Lightspeed → Shopify product enrichment process using templates and bulk workflows to reduce manual work while maintaining quality.",
        actions: [
          "Audit current Mortar sync and manual enrichment process",
          "Create product description templates by category",
          "Implement bulk upload workflow for enriched data",
          "Document standardized process for product launch",
          "Test automated sync and enrichment",
        ],
      },
      {
        priority: 4,
        title: "Enhance Cross-Property Analytics",
        description:
          "Create unified reporting for museum, gallery, and shop properties to understand the full customer journey and cross-property attribution.",
        actions: [
          "Evaluate unified GA4 property vs. data warehouse approach",
          "Implement cross-domain tracking for museum → shop flow",
          "Create unified dashboard for all three properties",
          "Set up cross-property attribution model",
          "Track museum visitor → online customer conversion path",
        ],
      },
    ],
  },
};
