import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Audit Data Schemas

export interface KPIMetric {
  label: string;
  value: string | number;
  trend?: number; // percentage change
  trendDirection?: 'up' | 'down' | 'neutral';
  suffix?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  description: string[];
  strengths?: string[];
  challenges?: string[];
}

export interface Platform {
  name: string;
  type: string;
  description: string;
  cost?: string;
}

export interface TrafficMetric {
  source: string;
  value: number;
  change?: number;
  description?: string;
}

export interface ProductCategory {
  name: string;
  skuCount?: number;
  margin?: string;
  description: string;
  status?: string;
}

export interface Problem {
  id: string;
  title: string;
  category: 'resource' | 'strategy' | 'technical' | 'operational';
  severity: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  symptoms: string[];
  impact: string;
}

export interface Recommendation {
  id: string;
  title: string;
  phase: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  timeline: string;
  description: string;
  actions: string[];
  expectedOutcome?: string;
}

export interface Workstream {
  id: string;
  name: string;
  timeline: string;
  description: string;
  deliverables: string[];
  kpis?: string[];
}

export interface StrategyPlay {
  title: string;
  timeframe: string;
  owners: string[];
  objectives: string[];
  tasks: string[];
  dependencies?: string[];
  successSignals?: string[];
}

export interface StrategyEnablement {
  title: string;
  description: string;
  items: string[];
}

export interface StrategyExperiment {
  title: string;
  hypothesis: string;
  steps: string[];
  owner: string;
}

export interface StrategySection {
  id: string;
  title: string;
  description: string;
  focusPoints: string[];
  plays: StrategyPlay[];
  enablement?: StrategyEnablement[];
  experiments?: StrategyExperiment[];
  strategyDetails?: any;
}

export interface StrategyCadence {
  horizon: string;
  focus: string;
  parallelStreams: string[];
}

export interface MarketingStrategy {
  overview: {
    narrative: string;
    guidingPrinciples: string[];
    guardrails: string[];
  };
  objectives: string[];
  kpis: KPIMetric[];
  sections: StrategySection[];
  cadence: StrategyCadence[];
}

export interface CompetencyAssessment {
  area: string;
  rating: number; // 1-5
  description: string;
}

export interface TeamReview {
  name: string;
  currentRole: string;
  recommendedRole: string;
  summary: string;
  strengths: string[];
  gaps: string[];
  competencies: CompetencyAssessment[];
  developmentPriorities: string[];
}

export interface ExecutiveSummary {
  keyFinding: string;
  overview: string[];
  criticalMetrics: KPIMetric[];
}

export interface OrganizationalData {
  teamMembers: TeamMember[];
  reportingIssues: string[];
}

export interface CurrentStateData {
  platforms: Platform[];
  trafficMetrics: TrafficMetric[];
  conversionMetrics: KPIMetric[];
  productCategories: ProductCategory[];
  marketingChannels: {
    channel: string;
    budget: string;
    performance: string;
    issues: string[];
  }[];
}

export interface AuditData {
  executiveSummary: ExecutiveSummary;
  organizational: OrganizationalData;
  currentState: CurrentStateData;
  problems: Problem[];
  recommendations: Recommendation[];
  marketingStrategy: MarketingStrategy;
  teamReviews: TeamReview[];
}
