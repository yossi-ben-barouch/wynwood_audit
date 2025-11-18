import type { AuditData } from "@shared/schema";

export { executiveSummaryData } from "./executive-summary";
export { organizationalData } from "./organizational";
export { currentStateData } from "./current-state";
export { problemsData } from "./problems";
export { recommendationsData } from "./recommendations";
export { marketingStrategyData } from "./marketing-strategy";
export { teamReviewsData } from "./team-reviews";

import { executiveSummaryData } from "./executive-summary";
import { organizationalData } from "./organizational";
import { currentStateData } from "./current-state";
import { problemsData } from "./problems";
import { recommendationsData } from "./recommendations";
import { marketingStrategyData } from "./marketing-strategy";
import { teamReviewsData } from "./team-reviews";

export const auditData: AuditData = {
  executiveSummary: executiveSummaryData,
  organizational: organizationalData,
  currentState: currentStateData,
  problems: problemsData,
  recommendations: recommendationsData,
  marketingStrategy: marketingStrategyData,
  teamReviews: teamReviewsData,
};
