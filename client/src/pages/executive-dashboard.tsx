import { useQuery } from "@tanstack/react-query";
import { KPICard } from "@/components/kpi-card";
import { ErrorState } from "@/components/error-state";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ExecutiveSummary } from "@shared/schema";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp, Users, ShoppingCart, DollarSign, AlertTriangle } from "lucide-react";

export default function ExecutiveDashboard() {
  const { data: summary, isLoading, error, refetch } = useQuery<ExecutiveSummary>({
    queryKey: ['/api/executive-summary'],
  });

  // Mock chart data for visualization
  const revenueData = [
    { month: 'Jan', revenue: 45000 },
    { month: 'Feb', revenue: 52000 },
    { month: 'Mar', revenue: 48000 },
    { month: 'Apr', revenue: 61000 },
    { month: 'May', revenue: 55000 },
    { month: 'Jun', revenue: 67000 },
  ];

  const channelData = [
    { channel: 'Google Ads', revenue: 28000 },
    { channel: 'Organic', revenue: 15000 },
    { channel: 'Direct', revenue: 12000 },
    { channel: 'Social', revenue: 8000 },
    { channel: 'Email', revenue: 4000 },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse space-y-4 w-full max-w-7xl px-8">
          <div className="h-8 bg-muted rounded w-1/4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-8 py-6 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-foreground" data-testid="text-page-title">
            Executive Summary
          </h1>
          <p className="text-base text-muted-foreground">
            Comprehensive overview of Wynwood Walls Shop e-commerce operations and key performance indicators
          </p>
        </div>

        {/* Key Finding Alert */}
        {summary?.keyFinding && (
          <Card className="border-l-4 border-l-primary bg-primary/5">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">Key Finding</CardTitle>
                  <CardDescription className="text-base text-foreground">
                    {summary.keyFinding}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        )}

        {/* KPI Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {summary?.criticalMetrics?.map((metric, index) => (
            <KPICard
              key={index}
              label={metric.label}
              value={metric.value}
              trend={metric.trend}
              trendDirection={metric.trendDirection}
              suffix={metric.suffix}
            />
          )) || (
            <>
              <KPICard label="Monthly Visitors" value="250K" trend={15} trendDirection="up" />
              <KPICard label="Conversion Rate" value="0.8%" trend={-12} trendDirection="down" suffix="%" />
              <KPICard label="Average Order Value" value="$95" trend={8} trendDirection="up" />
              <KPICard label="Total SKUs" value="2,500" trend={0} trendDirection="neutral" />
            </>
          )}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Trend */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Revenue Trend (Last 6 Months)
              </CardTitle>
              <CardDescription>Monthly e-commerce revenue performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--popover))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '6px',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      dot={{ fill: 'hsl(var(--primary))', r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Channel Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-primary" />
                Revenue by Channel
              </CardTitle>
              <CardDescription>Performance across marketing channels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={channelData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="channel" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--popover))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '6px',
                      }}
                    />
                    <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Overview Points */}
        {summary?.overview && summary.overview.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Situation Overview</CardTitle>
              <CardDescription>Key observations from the comprehensive audit</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {summary.overview.map((point, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-base text-foreground">{point}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
