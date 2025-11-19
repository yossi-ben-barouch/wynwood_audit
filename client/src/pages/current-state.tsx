import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ErrorState } from "@/components/error-state";
import { Badge } from "@/components/ui/badge";
import { KPICard } from "@/components/kpi-card";
import type { CurrentStateData } from "@shared/schema";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { Globe, TrendingUp, Package, DollarSign } from "lucide-react";

export default function CurrentStateAssessment() {
  const { data, isLoading, error, refetch } = useQuery<CurrentStateData>({
    queryKey: ["/data/current-state"],
    queryFn: async () => {
      const res = await fetch("/data/current-state.json");
      if (!res.ok) throw new Error("Failed to fetch current state");
      return res.json();
    },
  });

  const productMixData = [
    { name: "Collectibles", value: 35, color: "hsl(var(--chart-1))" },
    { name: "Artist Products", value: 40, color: "hsl(var(--chart-2))" },
    { name: "Stationery", value: 25, color: "hsl(var(--chart-3))" },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse space-y-4 w-full max-w-7xl px-8">
          <div className="h-8 bg-muted rounded w-1/3"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          <h1
            className="text-3xl font-semibold text-foreground"
            data-testid="text-page-title"
          >
            Current State Assessment
          </h1>
          <p className="text-base text-muted-foreground">
            Digital infrastructure, traffic metrics, and performance analysis
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data?.conversionMetrics?.map((metric, index) => (
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
              <KPICard
                label="Conversion Rate"
                value="0.8%"
                trend={-15}
                trendDirection="down"
              />
              <KPICard
                label="Domain Authority"
                value="72"
                trend={5}
                trendDirection="up"
              />
              <KPICard
                label="Monthly Traffic"
                value="250K"
                trend={12}
                trendDirection="up"
              />
            </>
          )}
        </div>

        {/* Platforms & Infrastructure */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              Digital Infrastructure
            </CardTitle>
            <CardDescription>
              Current platforms and tools in use
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data?.platforms.map((platform, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-border hover-elevate"
                  data-testid={`card-platform-${index}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground">
                      {platform.name}
                    </h4>
                    <Badge variant="outline" className="text-xs">
                      {platform.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {platform.description}
                  </p>
                  {platform.cost && (
                    <p className="text-xs font-mono text-primary">
                      {platform.cost}
                    </p>
                  )}
                </div>
              )) || (
                <>
                  <div className="p-4 rounded-lg border border-border">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">Shopify</h4>
                      <Badge variant="outline" className="text-xs">
                        E-Commerce
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Primary e-commerce platform
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-border">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">Lightspeed</h4>
                      <Badge variant="outline" className="text-xs">
                        POS
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Point of sale system (95% of sales)
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-border">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">Mailchimp</h4>
                      <Badge variant="outline" className="text-xs">
                        Email
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Email marketing platform
                    </p>
                    <p className="text-xs font-mono text-primary">
                      $2,500/month
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-border">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">Google Analytics</h4>
                      <Badge variant="outline" className="text-xs">
                        Analytics
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Traffic and behavior tracking
                    </p>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Product Mix & Marketing Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Product Mix */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Product Mix (2,500 SKUs)
              </CardTitle>
              <CardDescription>Distribution across categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={productMixData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {productMixData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--popover))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "6px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2">
                {data?.productCategories?.slice(0, 3).map((category, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="text-foreground">{category.name}</span>
                    <Badge variant="secondary">
                      {category.margin || "N/A"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Marketing Channels */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                Marketing Channels
              </CardTitle>
              <CardDescription>
                Budget allocation and performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data?.marketingChannels?.map((channel, index) => (
                  <div
                    key={index}
                    className="space-y-2 pb-4 border-b border-border last:border-0"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-foreground">
                        {channel.channel}
                      </h4>
                      <span className="font-mono text-sm text-primary">
                        {channel.budget}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {channel.performance}
                    </p>
                    {channel.issues.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {channel.issues.map((issue, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs"
                          >
                            {issue}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                )) || (
                  <>
                    <div className="space-y-2 pb-4 border-b border-border">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold">Google Ads</h4>
                        <span className="font-mono text-sm text-primary">
                          $3,000/mo
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        2X ROAS after account separation
                      </p>
                    </div>
                    <div className="space-y-2 pb-4 border-b border-border">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold">Meta/Facebook Ads</h4>
                        <span className="font-mono text-sm text-primary">
                          $900/mo
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Growing but underperforming
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold">Email Marketing</h4>
                        <span className="font-mono text-sm text-primary">
                          $2,500/mo
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        350K list, low conversion
                      </p>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
