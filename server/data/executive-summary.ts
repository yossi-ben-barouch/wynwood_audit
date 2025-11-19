import type { ExecutiveSummary } from "@shared/schema";

export const executiveSummaryData: ExecutiveSummary = {
  keyFinding:
    "The shop's online sales are underperforming despite having world-class assets (high domain authority, quality products, significant foot traffic), primarily due to fragmented marketing efforts, resource constraints, and misalignment between product development and digital marketing strategies.",
  overview: [
    "Strong foundational assets: Domain Authority of 47-72, exclusive artist relationships, and 25K monthly museum visitors",
    "Significant execution challenges limiting online revenue growth despite 200% growth in years 1-2",
    "Current year showing 10% decline attributed to tariffs and supplier instability",
    "Critical gap: Alejandro (E-Commerce Director) stretched across 4 websites with minimal support",
    "Disconnected silos between technical execution (Alejandro) and creative marketing (Nicole)",
    "Products designed for in-store retail, not e-commerce optimization",
  ],
  criticalMetrics: [
    {
      label: "Museum Monthly Traffic",
      value: "25K",
      trend: 12,
      trendDirection: "up" as const,
    },
    {
      label: "Shop Conversion Rate",
      value: "0.8%",
      trend: -15,
      trendDirection: "down" as const,
      suffix: "%",
    },
    {
      label: "Domain Authority",
      value: "72",
      trend: 5,
      trendDirection: "up" as const,
    },
    {
      label: "Total SKUs",
      value: "2,500",
      trend: 0,
      trendDirection: "neutral" as const,
    },
    {
      label: "Social Following (Shop)",
      value: "8K",
      trend: -20,
      trendDirection: "down" as const,
    },
    {
      label: "Google Ads Budget",
      value: "$3,000",
      trend: 67,
      trendDirection: "up" as const,
      suffix: "/mo",
    },
  ],
};
