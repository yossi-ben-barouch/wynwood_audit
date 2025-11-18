import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  DollarSign,
  Layers,
  TrendingUp,
  Megaphone,
  Wrench,
  Share2,
} from "lucide-react";
import { usePlatformReviewQuery } from "@/api/platform-review";
import { ErrorState } from "@/components/error-state";

export default function InfrastructurePage() {
  const {
    data: platformReview,
    isLoading,
    error,
  } = usePlatformReviewQuery();

  if (isLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
          <p className="mt-4 text-muted-foreground">Loading infrastructure...</p>
        </div>
      </div>
    );
  }

  if (error || !platformReview) {
    return <ErrorState message="Failed to load infrastructure data" />;
  }

  // Group platforms by category
  const categorizedPlatforms = platformReview.infrastructure.platforms.reduce((acc, platform) => {
    const category = platform.type;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(platform);
    return acc;
  }, {} as Record<string, typeof platformReview.infrastructure.platforms>);

  // Calculate spend by category
  const categorySpend = Object.entries(categorizedPlatforms).map(([category, platforms]) => {
    const total = platforms.reduce((sum, platform) => {
      if (!platform.cost) return sum;
      const costStr = platform.cost.replace(/[$,]/g, '');
      const match = costStr.match(/(\d+)/);
      return sum + (match ? parseInt(match[1]) : 0);
    }, 0);
    return { category, total, count: platforms.length };
  });

  // Sort categories by spend (highest first)
  const sortedCategories = categorySpend.sort((a, b) => b.total - a.total);

  // Get icon for category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Advertising":
        return Megaphone;
      case "Tools":
        return Wrench;
      case "SEO":
        return TrendingUp;
      case "E-Commerce":
        return Layers;
      case "Email/CRM":
        return Share2;
      default:
        return Layers;
    }
  };

  // Separate single-item and multi-item categories
  const singleItemCategories = sortedCategories.filter(({ count }) => count === 1);
  const multiItemCategories = sortedCategories.filter(({ count }) => count > 1);

  return (
    <div className="container mx-auto p-6 pb-32">
      <div className="mb-12">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg">
              <Layers className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight">
                Infrastructure & Tools
              </h1>
              <p className="text-muted-foreground text-lg mt-1">
                Complete overview of marketing spend and platform ecosystem
              </p>
            </div>
          </div>
          <Badge variant="secondary" className="text-base px-4 py-2">
            Total Annual Spend: {platformReview.infrastructure.totalYearlyCost}
          </Badge>
        </div>

        {/* Category Spend Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-green-600" />
            Spend by Category
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {sortedCategories.map(({ category, total, count }) => {
              const Icon = getCategoryIcon(category);
              return (
                <Card key={category} className="border-2">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-base">{category}</CardTitle>
                        <p className="text-xs text-muted-foreground">{count} platforms</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">
                      ${total.toLocaleString()}/yr
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mb-6 rounded-xl border-2 border-orange-200/50 bg-orange-50/30 p-6 dark:border-orange-900/50 dark:bg-orange-950/20">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-orange-900 dark:text-orange-200 mb-1">
                Platform Infrastructure & Technical Health
              </h3>
              <p className="text-sm text-muted-foreground">
                Annual marketing & tools spend: <strong>{platformReview.infrastructure.totalYearlyCost}</strong> across advertising, tools, and platforms with significant optimization opportunities. Excludes Shopify payment processing fees.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Single-Item Categories in Horizontal Grid */}
      {singleItemCategories.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Other Platforms</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {singleItemCategories.map(({ category }) => {
              const platforms = categorizedPlatforms[category];
              const platform = platforms[0]; // Only one platform per category
              const Icon = getCategoryIcon(category);
              const isIssue =
                platform.status === "Needs Fix" ||
                platform.status === "At Risk" ||
                platform.status === "Waste";
              
              return (
                <Card
                  key={category}
                  className={`border-2 transition-all hover:shadow-xl ${
                    isIssue
                      ? "border-red-200/50 bg-gradient-to-br from-red-50/50 to-background dark:from-red-950/20"
                      : "border-blue-200/50 bg-gradient-to-br from-blue-50/50 to-background dark:from-blue-950/20"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {category}
                      </Badge>
                    </div>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">
                          {platform.name}
                        </CardTitle>
                        <Badge
                          variant={isIssue ? "destructive" : "secondary"}
                          className="text-xs"
                        >
                          {platform.status}
                        </Badge>
                      </div>
                      {platform.cost && (
                        <div className="flex items-center gap-1 rounded-lg bg-blue-100/50 px-3 py-1 dark:bg-blue-900/20">
                          <DollarSign className="h-3 w-3 text-blue-600" />
                          <span className="text-sm font-semibold text-blue-900 dark:text-blue-200">
                            {platform.cost}
                          </span>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      {platform.description}
                    </p>
                    {platform.issues.length > 0 && (
                      <div className="rounded-lg border-l-4 border-red-500 bg-red-50/50 p-3 dark:bg-red-950/20">
                        <div className="mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-red-600" />
                          <span className="text-xs font-semibold uppercase tracking-wide text-red-700 dark:text-red-400">
                            Issues
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {platform.issues.map((issue, j) => (
                            <li
                              key={j}
                              className="flex gap-2 text-xs text-red-900 dark:text-red-200"
                            >
                              <span className="mt-1 block h-1 w-1 rounded-full bg-red-600 flex-shrink-0" />
                              <span>{issue}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Multi-Item Categories */}
      {multiItemCategories.map(({ category }) => {
        const platforms = categorizedPlatforms[category];
        const Icon = getCategoryIcon(category);
        
        return (
          <div key={category} className="mb-12">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">{category}</h2>
              <Badge variant="outline">
                {platforms.length} platforms
              </Badge>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {platforms.map((platform, i) => {
                const isIssue =
                  platform.status === "Needs Fix" ||
                  platform.status === "At Risk" ||
                  platform.status === "Waste";
                
                return (
                  <Card
                    key={i}
                    className={`border-2 transition-all hover:shadow-xl ${
                      isIssue
                        ? "border-red-200/50 bg-gradient-to-br from-red-50/50 to-background dark:from-red-950/20"
                        : "border-blue-200/50 bg-gradient-to-br from-blue-50/50 to-background dark:from-blue-950/20"
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">
                            {platform.name}
                          </CardTitle>
                          <Badge
                            variant={isIssue ? "destructive" : "secondary"}
                            className="text-xs"
                          >
                            {platform.status}
                          </Badge>
                        </div>
                        {platform.cost && (
                          <div className="flex items-center gap-1 rounded-lg bg-blue-100/50 px-3 py-1 dark:bg-blue-900/20">
                            <DollarSign className="h-3 w-3 text-blue-600" />
                            <span className="text-sm font-semibold text-blue-900 dark:text-blue-200">
                              {platform.cost}
                            </span>
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        {platform.description}
                      </p>
                      {platform.issues.length > 0 && (
                        <div className="rounded-lg border-l-4 border-red-500 bg-red-50/50 p-3 dark:bg-red-950/20">
                          <div className="mb-2 flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-600" />
                            <span className="text-xs font-semibold uppercase tracking-wide text-red-700 dark:text-red-400">
                              Issues
                            </span>
                          </div>
                          <ul className="space-y-1">
                            {platform.issues.map((issue, j) => (
                              <li
                                key={j}
                                className="flex gap-2 text-xs text-red-900 dark:text-red-200"
                              >
                                <span className="mt-1 block h-1 w-1 rounded-full bg-red-600 flex-shrink-0" />
                                <span>{issue}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
