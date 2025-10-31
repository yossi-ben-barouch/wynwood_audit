import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ErrorState } from "@/components/error-state";
import { KPICard } from "@/components/kpi-card";
import { Badge } from "@/components/ui/badge";
import type { AuditData } from "@shared/schema";
import { Target, Calendar, TrendingUp, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MarketingStrategy() {
  const { data, isLoading, error, refetch } = useQuery<AuditData['marketingStrategy']>({
    queryKey: ['/api/marketing-strategy'],
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse space-y-4 w-full max-w-7xl px-8">
          <div className="h-8 bg-muted rounded w-1/3"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
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

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-8 py-6 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-foreground flex items-center gap-3" data-testid="text-page-title">
            <Target className="w-8 h-8 text-primary" />
            Q4 Marketing Strategy
          </h1>
          <p className="text-base text-muted-foreground">
            Digital marketing strategy and execution plan with focus on BFCM window
          </p>
        </div>

        {/* Objectives */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Strategic Objectives
            </CardTitle>
            <CardDescription>Key goals for Q4 and beyond</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data?.objectives?.map((objective, index) => (
                <li key={index} className="flex gap-3 p-3 rounded-md bg-background border border-border">
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground">{objective}</span>
                </li>
              )) || (
                <>
                  <li className="flex gap-3 p-3 rounded-md bg-background border border-border">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Revenue acceleration for holidays while fixing measurement and feed hygiene</span>
                  </li>
                  <li className="flex gap-3 p-3 rounded-md bg-background border border-border">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Expand reach via marketplaces (Etsy, Amazon, eBay) using automated product feeds</span>
                  </li>
                  <li className="flex gap-3 p-3 rounded-md bg-background border border-border">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Leverage parent brand and site to route qualified traffic</span>
                  </li>
                  <li className="flex gap-3 p-3 rounded-md bg-background border border-border">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Position fashion as wearable art with brand storytelling</span>
                  </li>
                </>
              )}
            </ul>
          </CardContent>
        </Card>

        {/* KPIs */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            Q4 Target KPIs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.kpis?.map((kpi, index) => (
              <KPICard
                key={index}
                label={kpi.label}
                value={kpi.value}
                trend={kpi.trend}
                trendDirection={kpi.trendDirection}
                suffix={kpi.suffix}
              />
            )) || (
              <>
                <KPICard label="Conversion Rate Target" value="1.2%" trend={40} trendDirection="up" suffix="%" />
                <KPICard label="AOV Target" value="$115" trend={20} trendDirection="up" />
                <KPICard label="ROAS Target" value="350%" trend={75} trendDirection="up" suffix="%" />
                <KPICard label="Email Revenue Share" value="10%" trend={100} trendDirection="up" suffix="%" />
                <KPICard label="IG Follower Growth" value="+30%" trend={30} trendDirection="up" suffix="%" />
                <KPICard label="Marketplace SKUs" value="600" trend={100} trendDirection="up" />
              </>
            )}
          </div>
        </div>

        {/* Workstreams */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Stage 1 Workstreams (Parallel Execution)
            </CardTitle>
            <CardDescription>
              Critical initiatives running simultaneously for maximum impact
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {data?.workstreams?.map((workstream) => (
                <AccordionItem key={workstream.id} value={workstream.id}>
                  <AccordionTrigger className="hover:no-underline" data-testid={`button-expand-workstream-${workstream.id}`}>
                    <div className="flex items-center gap-3 flex-1 text-left">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                        {workstream.timeline}
                      </Badge>
                      <span className="font-semibold text-base">{workstream.name}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-4 space-y-4 pt-2">
                      <p className="text-muted-foreground">{workstream.description}</p>

                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                          Key Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {workstream.deliverables.map((deliverable, index) => (
                            <li key={index} className="flex gap-2 text-sm">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span className="text-foreground">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {workstream.kpis && workstream.kpis.length > 0 && (
                        <div className="pt-3 border-t border-border">
                          <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                            Success Metrics
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {workstream.kpis.map((kpi, index) => (
                              <Badge key={index} variant="secondary">
                                {kpi}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )) || (
                <>
                  <AccordionItem value="measurement">
                    <AccordionTrigger>
                      <div className="flex items-center gap-3">
                        <Badge>Week 0-1</Badge>
                        <span className="font-semibold">Measurement & Feed Hygiene</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-4 space-y-3">
                        <p className="text-muted-foreground">Rebuild GTM/GA4 events and fix Merchant Center data quality</p>
                        <ul className="space-y-2">
                          <li className="flex gap-2 text-sm">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Tagging playbook + validated test purchases</span>
                          </li>
                          <li className="flex gap-2 text-sm">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>UTM conventions and channel mapping</span>
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </>
              )}
            </Accordion>
          </CardContent>
        </Card>

        {/* Timeline */}
        {data?.timeline && data.timeline.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>4-Week Sprint Timeline</CardTitle>
              <CardDescription>Week-by-week milestones and deliverables</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {data.timeline.map((week, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">{index + 1}</span>
                      </div>
                      {index < data.timeline!.length - 1 && (
                        <div className="w-px h-full bg-border mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <h3 className="font-semibold text-foreground mb-2">{week.week}</h3>
                      <ul className="space-y-1.5">
                        {week.milestones.map((milestone, mIndex) => (
                          <li key={mIndex} className="flex gap-2 text-sm text-muted-foreground">
                            <div className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                            <span>{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
