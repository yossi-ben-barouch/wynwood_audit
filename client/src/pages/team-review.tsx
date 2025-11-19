import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ErrorState } from "@/components/error-state";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { TeamReview } from "@shared/schema";
import {
  UserCog,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Target,
} from "lucide-react";

export default function TeamReviewPage() {
  const {
    data: reviews,
    isLoading,
    error,
    refetch,
  } = useQuery<TeamReview[]>({
    queryKey: ["/data/team-reviews"],
    queryFn: async () => {
      const res = await fetch("/data/team-reviews.json");
      if (!res.ok) throw new Error("Failed to fetch team reviews");
      return res.json();
    },
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
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-8 py-6 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1
            className="text-3xl font-semibold text-foreground flex items-center gap-3"
            data-testid="text-page-title"
          >
            <UserCog className="w-8 h-8 text-primary" />
            Team Performance Review
          </h1>
          <p className="text-base text-muted-foreground">
            Comprehensive assessment of e-commerce team capabilities and
            development opportunities
          </p>
        </div>

        {/* Team Reviews */}
        <div className="space-y-10">
          {reviews?.map((review, index) => {
            const competencyCount = review.competencies.length || 1;
            const averageScore =
              review.competencies.reduce(
                (total, comp) => total + comp.rating,
                0
              ) / competencyCount;

            return (
              <section
                key={index}
                className="space-y-6"
                data-testid="card-team-review"
              >
                <div className="grid gap-6 lg:grid-cols-[320px,1fr]">
                  {/* Role Snapshot */}
                  <Card className="border-primary/20 bg-primary/5">
                    <CardHeader className="flex flex-col gap-4">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-xl">
                            {getInitials(review.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                          <CardTitle className="text-2xl">
                            {review.name}
                          </CardTitle>
                          <div className="flex flex-wrap gap-2"></div>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed text-muted-foreground">
                        {review.summary}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-3">
                        <div className="rounded-lg border border-primary/20 bg-background/60 p-3">
                          <p className="text-xs uppercase tracking-wide text-muted-foreground">
                            Operating Focus
                          </p>
                          <p className="text-sm text-foreground">
                            "Hands-on operator ensuring continuity across
                            commerce systems."
                          </p>
                        </div>
                        <div className="rounded-lg border border-border bg-background/80 p-3">
                          <p className="text-xs uppercase tracking-wide text-muted-foreground">
                            Leadership Leverage
                          </p>
                          <p className="text-sm text-foreground">
                            Relies on personal execution; framework needed to
                            scale strategy and collaboration.
                          </p>
                        </div>
                      </div>
                      <div className="rounded-lg border border-dashed border-primary/30 bg-gradient-to-br from-background to-muted/30 p-5 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                            Overall Capability Index
                          </span>
                          <span className="text-xl font-bold text-foreground">
                            {averageScore.toFixed(1)}
                            <span className="text-sm text-muted-foreground">
                              /5.0
                            </span>
                          </span>
                        </div>
                        <Progress value={averageScore * 20} className="h-3" />
                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-dashed border-primary/20">
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">
                              Strongest Area
                            </p>
                            <p className="text-xs font-medium text-green-600">
                              Platform Management (5.0)
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">
                              Growth Opportunity
                            </p>
                            <p className="text-xs font-medium text-amber-600">
                              Strategic Planning (2.0)
                            </p>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                          Composite assessment across 6 core competencies:
                          platform management, campaigns, strategy, delegation,
                          brand understanding, and technical skills.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Narrative & Insights */}
                  <div className="space-y-6">
                    {/* Role Recommendation Callout */}
                    <Card className="border-2 border-primary bg-gradient-to-r from-primary/10 to-primary/5">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                            <Target className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1 space-y-2">
                            <h3 className="text-lg font-semibold text-foreground">
                              Recommended Role Adjustment
                            </h3>
                            <div className="flex flex-wrap gap-3 items-center">
                              <Badge
                                variant="outline"
                                className="text-sm px-3 py-1"
                              >
                                Current: {review.currentRole}
                              </Badge>
                              <span className="text-muted-foreground">→</span>
                              <Badge className="bg-primary text-primary-foreground text-sm px-3 py-1">
                                Recommended: {review.recommendedRole}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              This realignment acknowledges operational
                              excellence while establishing clearer
                              expectations. Strategic leadership should be
                              introduced above this role to drive growth
                              initiatives and cross-functional coordination.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-primary/20">
                      <CardHeader>
                        <CardTitle className="text-xl">
                          Role Narrative
                        </CardTitle>
                        <CardDescription>
                          What Alejandro steadies today and where structure
                          needs to evolve.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="rounded-lg bg-muted/50 p-4 border-l-4 border-primary">
                          <p className="text-sm leading-relaxed text-foreground font-medium mb-2">
                            Current State: Operational Excellence
                          </p>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            Alejandro holds the digital shop together through
                            deep systems knowledge and a bias for action. The
                            e-commerce engine runs because he stays close to
                            merchandising feeds, analytics health, and
                            day-to-day campaigns. His technical proficiency in
                            Shopify and Lightspeed is solid, though his working
                            knowledge of Google and Meta Ads remains basic.
                          </p>
                        </div>
                        <div className="rounded-lg bg-muted/50 p-4 border-l-4 border-amber-500">
                          <p className="text-sm leading-relaxed text-foreground font-medium mb-2">
                            Growth Challenge: Strategic Bandwidth
                          </p>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            As expectations expand into growth storytelling and
                            performance orchestration, the role requires a
                            different bandwidth: clearer delegation, market
                            positioning, and coordinated testing rhythms. His
                            current toolkit is operationally strong but
                            under-leveraged without shared frameworks and SOPs.
                          </p>
                        </div>
                        <div className="rounded-lg bg-primary/10 p-4 border-l-4 border-green-500">
                          <p className="text-sm leading-relaxed text-foreground font-medium mb-2">
                            Path Forward: Structured Support
                          </p>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            With strategic oversight defining objectives and
                            SOPs streamlining operations, Alejandro can shift
                            from reactive execution to proactive optimization.
                            The recommended role of E-Commerce Operations
                            Manager better aligns with his strengths while
                            creating space for strategic leadership above.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="grid gap-6 md:grid-cols-2">
                      <Card className="border-green-200/60">
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center gap-2 text-base">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            Reliability Anchors
                          </CardTitle>
                          <CardDescription>
                            Strengths that keep the commerce infrastructure
                            resilient.
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            {review.strengths.map((strength, sIndex) => (
                              <li key={sIndex} className="flex gap-2">
                                <div className="mt-2 h-1.5 w-1.5 rounded-full bg-green-500" />
                                <span className="text-foreground">
                                  {strength}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-amber-200/60">
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center gap-2 text-base">
                            <AlertCircle className="h-4 w-4 text-amber-500" />
                            Scaling Constraints
                          </CardTitle>
                          <CardDescription>
                            Friction points limiting strategic lift and
                            cross-team leverage.
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            {review.gaps.map((gap, gIndex) => (
                              <li key={gIndex} className="flex gap-2">
                                <div className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
                                <span className="text-foreground">{gap}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          Competency Map
                        </CardTitle>
                        <CardDescription>
                          Relative fluency across the domains underpinning
                          e-commerce scale.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {review.competencies.map((comp, compIndex) => (
                          <div key={compIndex} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-foreground">
                                {comp.area}
                              </p>
                              <span className="text-xs font-semibold text-muted-foreground">
                                {comp.rating}/5
                              </span>
                            </div>
                            <Progress
                              value={comp.rating * 20}
                              className="h-2"
                            />
                            <p className="text-xs text-muted-foreground">
                              {comp.description}
                            </p>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Target className="h-5 w-5 text-primary" />
                          Development Path
                        </CardTitle>
                        <CardDescription>
                          Structured moves to transition from operational
                          steward to growth co-pilot.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-3 text-sm">
                          {review.developmentPriorities.map(
                            (priority, pIndex) => (
                              <li
                                key={pIndex}
                                className="rounded-lg border border-primary/20 bg-primary/5 p-3 leading-relaxed"
                              >
                                <div className="flex items-start gap-3">
                                  <span className="font-semibold text-primary">
                                    {pIndex + 1}
                                  </span>
                                  <span className="text-foreground">
                                    {priority}
                                  </span>
                                </div>
                              </li>
                            )
                          )}
                        </ol>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>
            );
          }) || (
            <Card>
              <CardHeader>
                <CardTitle>Alejandro Trujillo - E-Commerce Director</CardTitle>
                <div className="flex gap-2 mt-2"></div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Highly dedicated and technically capable professional whose
                  attention to detail keeps the online business running
                  reliably. Performance aligns more closely with Digital
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
