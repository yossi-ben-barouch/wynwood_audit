import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ErrorState } from "@/components/error-state";
import { StatusBadge } from "@/components/status-badge";
import type { Recommendation } from "@shared/schema";
import { Lightbulb, CheckCircle2, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function StrategicRecommendations() {
  const { data: recommendations, isLoading, error, refetch } = useQuery<Recommendation[]>({
    queryKey: ['/api/recommendations'],
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse space-y-4 w-full max-w-7xl px-8">
          <div className="h-8 bg-muted rounded w-1/3"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 bg-muted rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <ErrorState onRetry={() => refetch()} />;
  }

  const groupedByPhase = recommendations?.reduce((acc, rec) => {
    if (!acc[rec.phase]) {
      acc[rec.phase] = [];
    }
    acc[rec.phase].push(rec);
    return acc;
  }, {} as Record<string, Recommendation[]>) || {};

  const phaseOrder = [
    'Immediate Actions (0-30 Days)',
    'Short-Term (1-3 Months)',
    'Medium-Term (3-6 Months)',
    'Long-Term (6-12 Months)'
  ];

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-8 py-6 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-foreground flex items-center gap-3" data-testid="text-page-title">
            <Lightbulb className="w-8 h-8 text-primary" />
            Strategic Recommendations
          </h1>
          <p className="text-base text-muted-foreground">
            Phased implementation roadmap for e-commerce growth and operational excellence
          </p>
        </div>

        {/* Timeline Overview */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Implementation Timeline
            </CardTitle>
            <CardDescription>
              Structured approach to transforming Wynwood Walls e-commerce operations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {phaseOrder.map((phase, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-background border border-border">
                  <div className="text-2xl font-bold font-mono text-primary mb-1">
                    {groupedByPhase[phase]?.length || 0}
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {phase.split(' ')[0]}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommendations by Phase */}
        <div className="space-y-12">
          {phaseOrder.map((phase) => {
            const phaseRecs = groupedByPhase[phase];
            if (!phaseRecs || phaseRecs.length === 0) return null;

            return (
              <div key={phase} className="relative">
                {/* Phase Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {phaseOrder.indexOf(phase) + 1}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">{phase}</h2>
                    <p className="text-sm text-muted-foreground">
                      {phaseRecs.length} recommendation{phaseRecs.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>

                {/* Phase Recommendations */}
                <div className="ml-6 pl-6 border-l-2 border-primary/30 space-y-6">
                  {phaseRecs.map((rec) => (
                    <Card key={rec.id} className="hover-elevate" data-testid={`card-recommendation-${rec.id}`}>
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <StatusBadge type={rec.priority} label={rec.priority} />
                              <Badge variant="outline" className="text-xs">
                                {rec.timeline}
                              </Badge>
                            </div>
                            <CardTitle className="text-xl">{rec.title}</CardTitle>
                            <CardDescription className="mt-2">{rec.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                            Action Items
                          </h4>
                          <div className="space-y-2">
                            {rec.actions.map((action, index) => (
                              <div
                                key={index}
                                className="flex gap-3 p-3 rounded-md bg-muted/50 hover-elevate"
                              >
                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-foreground">{action}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {rec.expectedOutcome && (
                          <div className="pt-4 border-t border-border">
                            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                              Expected Outcome
                            </h4>
                            <p className="text-base text-foreground font-medium">
                              {rec.expectedOutcome}
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
