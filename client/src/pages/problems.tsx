import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ErrorState } from "@/components/error-state";
import { StatusBadge } from "@/components/status-badge";
import type { Problem } from "@shared/schema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertTriangle } from "lucide-react";

export default function CriticalProblems() {
  const {
    data: problems,
    isLoading,
    error,
    refetch,
  } = useQuery<Problem[]>({
    queryKey: ["/data/problems"],
    queryFn: async () => {
      const res = await fetch("/data/problems.json");
      if (!res.ok) throw new Error("Failed to fetch problems");
      return res.json();
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse space-y-4 w-full max-w-7xl px-8">
          <div className="h-8 bg-muted rounded w-1/3"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-32 bg-muted rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <ErrorState onRetry={() => refetch()} />;
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "resource":
        return "bg-red-500/10 border-red-500/20";
      case "strategy":
        return "bg-orange-500/10 border-orange-500/20";
      case "technical":
        return "bg-blue-500/10 border-blue-500/20";
      case "operational":
        return "bg-yellow-500/10 border-yellow-500/20";
      default:
        return "bg-muted border-border";
    }
  };

  const groupedProblems =
    problems?.reduce((acc, problem) => {
      if (!acc[problem.category]) {
        acc[problem.category] = [];
      }
      acc[problem.category].push(problem);
      return acc;
    }, {} as Record<string, Problem[]>) || {};

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-8 py-6 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1
            className="text-3xl font-semibold text-foreground flex items-center gap-3"
            data-testid="text-page-title"
          >
            <AlertTriangle className="w-8 h-8 text-destructive" />
            Critical Problems Identified
          </h1>
          <p className="text-base text-muted-foreground">
            Key challenges limiting online revenue growth and operational
            efficiency
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card data-testid="card-problems-critical">
            <CardContent className="pt-6">
              <div className="text-center">
                <div
                  className="text-3xl font-bold font-mono text-destructive"
                  data-testid="text-count-critical"
                >
                  {problems?.filter((p) => p.severity === "critical").length ||
                    0}
                </div>
                <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wide">
                  Critical
                </p>
              </div>
            </CardContent>
          </Card>
          <Card data-testid="card-problems-high">
            <CardContent className="pt-6">
              <div className="text-center">
                <div
                  className="text-3xl font-bold font-mono text-orange-500"
                  data-testid="text-count-high"
                >
                  {problems?.filter((p) => p.severity === "high").length || 0}
                </div>
                <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wide">
                  High
                </p>
              </div>
            </CardContent>
          </Card>
          <Card data-testid="card-problems-medium">
            <CardContent className="pt-6">
              <div className="text-center">
                <div
                  className="text-3xl font-bold font-mono text-yellow-500"
                  data-testid="text-count-medium"
                >
                  {problems?.filter((p) => p.severity === "medium").length || 0}
                </div>
                <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wide">
                  Medium
                </p>
              </div>
            </CardContent>
          </Card>
          <Card data-testid="card-problems-low">
            <CardContent className="pt-6">
              <div className="text-center">
                <div
                  className="text-3xl font-bold font-mono text-blue-500"
                  data-testid="text-count-low"
                >
                  {problems?.filter((p) => p.severity === "low").length || 0}
                </div>
                <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wide">
                  Low
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Problems by Category */}
        <div className="space-y-6">
          {Object.entries(groupedProblems).map(
            ([category, categoryProblems]) => (
              <Card
                key={category}
                className={getCategoryColor(category)}
                data-testid={`card-category-${category}`}
              >
                <CardHeader>
                  <CardTitle className="capitalize text-xl">
                    {category} Issues
                  </CardTitle>
                  <CardDescription
                    data-testid={`text-category-count-${category}`}
                  >
                    {categoryProblems.length} problem
                    {categoryProblems.length !== 1 ? "s" : ""} identified
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {categoryProblems.map((problem) => (
                      <AccordionItem key={problem.id} value={problem.id}>
                        <AccordionTrigger
                          className="hover:no-underline"
                          data-testid={`button-expand-problem-${problem.id}`}
                        >
                          <div className="flex items-center gap-3 flex-1 text-left">
                            <StatusBadge
                              type={problem.severity}
                              label={problem.severity}
                            />
                            <span className="font-semibold text-base">
                              {problem.title}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-4 space-y-4 pt-2">
                            <div>
                              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                                Description
                              </h4>
                              <p className="text-foreground">
                                {problem.description}
                              </p>
                            </div>

                            {problem.symptoms.length > 0 && (
                              <div>
                                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                                  Symptoms
                                </h4>
                                <ul className="space-y-1.5">
                                  {problem.symptoms.map((symptom, index) => (
                                    <li
                                      key={index}
                                      className="flex gap-2 text-sm"
                                    >
                                      <div className="mt-1.5 w-1 h-1 rounded-full bg-destructive flex-shrink-0" />
                                      <span className="text-foreground">
                                        {symptom}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            <div className="pt-3 border-t border-border">
                              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                                Business Impact
                              </h4>
                              <p className="text-foreground font-medium">
                                {problem.impact}
                              </p>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </div>
  );
}
