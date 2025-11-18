import { useQuery } from "@tanstack/react-query";

export interface PlatformReview {
  summary: {
    headline: string;
    description: string;
  };
  infrastructure: {
    platforms: Array<{
      name: string;
      type: string;
      description: string;
      status: string;
      cost?: string;
      issues: string[];
    }>;
    totalMonthlyCost: string;
    totalYearlyCost: string;
  };
  catalog: {
    totalSKUs: number;
    categories: Array<{
      name: string;
      skuCount: number;
      margin: string;
      description: string;
      status: string;
    }>;
  };
  performance: {
    conversionRate: string;
    conversionTrend: number;
    averageOrderValue: string;
    aovTrend: number;
    domainAuthority: number;
    daTrend: number;
  };
  technicalIssues: Array<{
    id: string;
    title: string;
    severity: string;
    description: string;
    impact: string;
    symptoms: string[];
    owner: string;
  }>;
  operationalGaps: Array<{
    id: string;
    title: string;
    severity: string;
    description: string;
    impact: string;
    processes?: string[];
    issues?: string[];
    recommendations?: Array<{
      current: string;
      replacement: string;
      benefits: string[];
      investment: string;
    }>;
    owner: string;
  }>;
  priorities: Array<{
    priority: number;
    title: string;
    timeframe: string;
    tasks: string[];
  }>;
  uxDeepDive: {
    headline: string;
    description: string;
    currentState: {
      strengths: string[];
      weaknesses: string[];
    };
    productPageImprovements: {
      title: string;
      priority: string;
      status: string;
      recommendations: Array<{
        area: string;
        issue: string;
        solution: string;
        actions: string[];
        impact: string;
        image?: string;
      }>;
    };
    collectionPageRedesign: {
      title: string;
      priority: string;
      status: string;
      issue: string;
      solution: string;
      recommendations: Array<{
        component: string;
        description: string;
      }>;
      impact: string;
    };
    mobileOptimization: {
      title: string;
      priority: string;
      status: string;
      issue: string;
      solution: string;
      recommendations: string[];
      benefits: string[];
      impact: string;
    };
    imageStrategy: {
      title: string;
      priority: string;
      status: string;
      recommendation: string;
      approach: string[];
      technicalNote: string;
      expectedOutcome: string;
    };
    croFeatures: {
      title: string;
      priority: string;
      status: string;
      missingFeatures: Array<{
        feature: string;
        description: string;
        impact: string;
      }>;
      implementation: string;
    };
    themeImplementation: {
      title: string;
      priority: string;
      status: string;
      requirements: string[];
      recommendation: string;
      estimatedTimeline: string;
      estimatedInvestment: string;
    };
  };
  measurementDeepDive: {
    headline: string;
    description: string;
    currentState: {
      status: string;
      implementation: string;
      activeEvents: string[];
      criticalIssues: string[];
    };
    issues: Array<{
      id: string;
      title: string;
      severity: string;
      description: string;
      impact: string;
      currentBehavior?: string;
      requiredFix?: string;
    }>;
    recommendations: Array<{
      priority: number;
      title: string;
      description: string;
      actions: string[];
    }>;
    utmTemplate: {
      structure: string;
      examples: Array<{
        channel: string;
        template: string;
        example: string;
      }>;
    };
  };
  feedsDeepDive: {
    headline: string;
    description: string;
    imageReference?: string;
    currentState: {
      feedCount: string;
      managementMethod: string;
      dataControl: string;
      primaryIssue: string;
    };
    issues: Array<{
      id: string;
      title: string;
      severity: string;
      description: string;
      impact: string;
      recommendation: string;
    }>;
    recommendations: Array<{
      priority: number;
      title: string;
      description: string;
      actions: string[];
    }>;
  };
  catalogDeepDive: {
    headline: string;
    description: string;
    currentState: {
      totalSKUs: number;
      strengths: string[];
      opportunities: string[];
    };
    issues: Array<{
      id: string;
      title: string;
      severity: string;
      description: string;
      impact: string;
      recommendation: string;
    }>;
    recommendations: Array<{
      priority: number;
      title: string;
      description: string;
      actions: string[];
    }>;
  };
  integrationsDeepDive: {
    headline: string;
    description: string;
    currentState: {
      systems: string[];
      activeApps: string[];
      integrationMethod: string;
      integrationStrengths: string[];
    };
    appStack: {
      activeApps: Array<{
        name: string;
        purpose: string;
        status: string;
        cost: string;
        issues: string;
      }>;
      criticalApps: Array<{
        app: string;
        category: string;
        recommendation: string;
        benefits: string[];
        estimatedCost: string;
        priority: string;
      }>;
    };
    dataFlow: {
      flowDiagram: string;
      steps: Array<{
        step: number;
        from: string;
        to: string;
        method: string;
        details: string;
        issues: string;
      }>;
      manualBottlenecks: string[];
    };
    apiWebhookUsage: {
      currentState: string;
      details: string[];
      impact: string;
    };
    issues: Array<{
      id: string;
      title: string;
      severity: string;
      description: string;
      impact: string;
      recommendation: string;
    }>;
    recommendations: Array<{
      priority: number;
      title: string;
      description: string;
      actions: string[];
    }>;
  };
}

export function usePlatformReviewQuery() {
  return useQuery<PlatformReview>({
    queryKey: ["/api/platform-review"],
    queryFn: async () => {
      const res = await fetch("/api/platform-review");
      if (!res.ok) throw new Error(`Failed to fetch platform review: ${res.status}`);
      return res.json();
    },
    staleTime: 60_000,
  });
}
