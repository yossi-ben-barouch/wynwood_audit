import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ErrorState } from "@/components/error-state";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { TeamReview } from "@shared/schema";
import { UserCog, TrendingUp, AlertCircle, CheckCircle2, Target } from "lucide-react";

export default function TeamReviewPage() {
  const { data: reviews, isLoading, error, refetch } = useQuery<TeamReview[]>({
    queryKey: ['/api/team-reviews'],
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse space-y-4 w-full max-w-7xl px-8">
          <div className="h-8 bg-muted rounded w-1/3"></div>
          <div className="h-64 bg-muted rounded-lg"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <ErrorState onRetry={() => refetch()} />;
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return 'text-green-500';
    if (rating >= 3) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-8 py-6 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-foreground flex items-center gap-3" data-testid="text-page-title">
            <UserCog className="w-8 h-8 text-primary" />
            Team Performance Review
          </h1>
          <p className="text-base text-muted-foreground">
            Comprehensive assessment of e-commerce team capabilities and development opportunities
          </p>
        </div>

        {/* Team Reviews */}
        <div className="space-y-8">
          {reviews?.map((review, index) => (
            <Card key={index} className="hover-elevate" data-testid="card-team-review">
              <CardHeader className="space-y-4 pb-6">
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-xl">
                      {getInitials(review.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{review.name}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        Current: {review.currentRole}
                      </Badge>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-xs">
                        Recommended: {review.recommendedRole}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      {review.summary}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Competency Matrix */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Competency Assessment
                  </h3>
                  <div className="space-y-4">
                    {review.competencies.map((comp, compIndex) => (
                      <div key={compIndex} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">{comp.area}</span>
                          <div className="flex items-center gap-2">
                            <span className={`text-sm font-bold font-mono ${getRatingColor(comp.rating)}`}>
                              {comp.rating}/5
                            </span>
                          </div>
                        </div>
                        <Progress value={comp.rating * 20} className="h-2" />
                        <p className="text-xs text-muted-foreground">{comp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strengths and Gaps */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border">
                  {/* Strengths */}
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Key Strengths
                    </h4>
                    <ul className="space-y-2">
                      {review.strengths.map((strength, sIndex) => (
                        <li key={sIndex} className="flex gap-2 text-sm">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                          <span className="text-foreground">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Gaps */}
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-orange-500" />
                      Development Areas
                    </h4>
                    <ul className="space-y-2">
                      {review.gaps.map((gap, gIndex) => (
                        <li key={gIndex} className="flex gap-2 text-sm">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                          <span className="text-foreground">{gap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Development Priorities */}
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary" />
                    Development Priorities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {review.developmentPriorities.map((priority, pIndex) => (
                      <div
                        key={pIndex}
                        className="p-3 rounded-lg bg-primary/5 border border-primary/20"
                      >
                        <div className="flex items-start gap-2">
                          <span className="font-semibold text-primary text-sm">
                            {pIndex + 1}.
                          </span>
                          <span className="text-sm text-foreground">{priority}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )) || (
            <Card>
              <CardHeader>
                <CardTitle>Alejandro Trujillo - E-Commerce Director</CardTitle>
                <div className="flex gap-2 mt-2">
                  <Badge variant="outline">Current: E-Commerce Director</Badge>
                  <Badge className="bg-primary/10 text-primary">
                    Recommended: E-Commerce Operations Manager
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Highly dedicated and technically capable professional whose attention to detail keeps
                  the online business running reliably. Performance aligns more closely with Digital
                  Commerce Manager than strategic director level.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
