import { writeFileSync, mkdirSync, copyFileSync, existsSync } from "fs";
import { join } from "path";
import { auditData } from "../server/data/audit-data.js";
import { promotionAudit } from "../server/data/promotion-audit.js";
import { platformReviewData } from "../server/data/Audit/platform-review.js";

// Create public/data directory
const dataDir = join(process.cwd(), "client", "public", "data");
mkdirSync(dataDir, { recursive: true });

// Generate JSON files for each endpoint
const endpoints = [
  { filename: "executive-summary.json", data: auditData.executiveSummary },
  { filename: "organizational-structure.json", data: auditData.organizational },
  { filename: "current-state.json", data: auditData.currentState },
  { filename: "problems.json", data: auditData.problems },
  { filename: "recommendations.json", data: auditData.recommendations },
  { filename: "marketing-strategy.json", data: auditData.marketingStrategy },
  { filename: "team-reviews.json", data: auditData.teamReviews },
  { filename: "audit-data.json", data: auditData },
  { filename: "promotion-audit.json", data: promotionAudit },
  { filename: "platform-review.json", data: platformReviewData },
];

// Write each JSON file
endpoints.forEach(({ filename, data }) => {
  const filepath = join(dataDir, filename);
  writeFileSync(filepath, JSON.stringify(data, null, 2));
  console.log(`✓ Generated ${filename}`);
});

console.log(
  `\n✅ Generated ${endpoints.length} static JSON files in ${dataDir}`
);
