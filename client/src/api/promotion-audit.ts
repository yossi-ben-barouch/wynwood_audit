import { useQuery } from "@tanstack/react-query";

export interface PromotionAudit {
  summary?: {
    executive: { headline: string; description: string };
    channels: Array<{
      id: string;
      name: string;
      icon: string;
      status: string;
      statusColor: string;
      headline: string;
      findings: string[];
      recommendations: string[];
      owner: string;
      impact: string;
      priority: number;
    }>;
    keyInsights: Array<{ title: string; description: string }>;
    nextSteps: Array<{ phase: string; focus: string; tasks: string[] }>;
  };
  email?: {
    meta: {
      preparedFor: string;
      preparedBy: string;
      date: string;
      status: string;
    };
    overview: {
      tool: string;
      monthlyCost: string;
      subscribers: string;
      notes: string[];
    };
    diagnosis: Array<{ issue: string; symptom: string; impact: string; fix: string }>;
    migration: {
      recommendedTool: string;
      rationale: string[];
      projections: { monthlyCost: string; ctr: string; cvr: string; revenueShare: string };
    };
    segmentation: { phase1Cleanup: string[]; phase2Rebuild: string[] };
    automations: string[];
    creative: { recommendations: string[] };
    analytics: { tracking: string[]; kpis: string[] };
    plan90d: string[];
    outcomes: string[];
  };
  seo?: {
    performanceSnapshot: {
      badge: string;
      description: string;
      metrics: Array<{ label: string; value: string }>;
      notes: string[];
      mediaNote?: string;
    };
    oosIssue: {
      severity: string;
      title: string;
      description: string;
      stakeholders: string[];
      technical: string[];
      owner: string;
      impact: string;
      timeline: string;
    };
    categoryHubs: {
      badge: string;
      description: string;
      components: string[];
      owner: string;
      impact: string;
      timeline: string;
      media?: Array<{ src: string; alt: string; title: string; description?: string; badge?: string }>;
    };
    contentStrategy: {
      badge: string;
      description: string;
      tofu: string[];
      mofu: string[];
      bofu: string[];
      owner: string;
      impact: string;
      timeline: string;
      media?: Array<{ src: string; alt: string; title: string; description?: string; badge?: string }>;
    };
    pressLinks: { badge: string; description: string; bullets: string[]; owner: string; impact: string; timeline: string };
    seasonal: { badge: string; description: string; bullets: string[]; owner: string; impact: string; timeline: string };
    roadmap90d: { badge: string; description: string; steps: string[] };
    outcomes: { badge: string; description: string; bullets: string[] };
  };
  paid?: {
    conversionIssue: {
      severity: string;
      title: string;
      description: string;
      explanation: string;
      stakeholders: string;
      technical: string[];
      owner: string;
      impact: string;
      timeline: string;
      media?: Array<{ src: string; alt: string; title: string; description?: string; badge?: string }>;
    };
    feedOptimization: {
      badge: string;
      title: string;
      description: string;
      explanation: string;
      actions: string[];
      owner: string;
      impact: string;
      timeline: string;
      media?: Array<{ src: string; alt: string; title: string; description?: string; badge?: string }>;
    };
    campaignStructure: {
      badge: string;
      title: string;
      description: string;
      architecture: string[];
      cadence: string[];
      owner: string;
      impact: string;
      timeline: string;
      media?: Array<{ src: string; alt: string; title: string; description?: string; badge?: string }>;
    };
    metaAds: {
      badge: string;
      title: string;
      description: string;
      recommendations: string[];
      owner: string;
      impact: string;
      timeline: string;
      media?: Array<{ src: string; alt: string; title: string; description?: string; badge?: string }>;
    };
    amazonAds: {
      badge: string;
      title: string;
      description: string;
      recommendations: string[];
      warning: string;
      owner: string;
      impact: string;
      timeline: string;
      media?: Array<{ src: string; alt: string; title: string; description?: string; badge?: string }>;
    };
    actionPlan14d: { badge: string; title: string; description: string; steps: string[] };
  };
  social?: {
    snapshot: { badge: string; title: string; description: string; platforms: string[] };
    keyGaps: { badge: string; title: string; gaps: Array<{ issue: string; description: string; impact: string; owner: string }> };
    positioning: { badge: string; title: string; description: string; pillars: string[]; action: string };
    platformStrategy: { badge: string; title: string; platforms: Array<{ name: string; shift: string; tactics: string[] }> };
    creators: { badge: string; title: string; description: string; focus: string[] };
    dropOperatingSystem: { badge: string; title: string; description: string; timeline: Array<{ phase: string; actions: string[] }> };
    execution30_60_90: { badge: string; title: string; phases: Array<{ period: string; owner: string; impact: string; timeline: string; tasks: string[] }> };
    kpis: { badge: string; title: string; metrics: string[] };
    status: string;
    findings: string;
    recommendations: string;
    owner: string;
    evidence: string;
  };
  marketplaces?: { status: string; findings: string; recommendations: string; owner: string; evidence: string };
}

export function usePromotionAuditQuery() {
  return useQuery<PromotionAudit>({
    queryKey: ["/api/promotion-audit"],
    queryFn: async () => {
      const res = await fetch("/api/promotion-audit");
      if (!res.ok) throw new Error(`Failed to fetch promotion audit: ${res.status}`);
      return res.json();
    },
    staleTime: 60_000,
  });
}
