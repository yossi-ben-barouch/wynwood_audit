import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Database,
  Settings,
} from "lucide-react";
import { usePlatformReviewQuery } from "@/api/platform-review";
import { ErrorState } from "@/components/error-state";
import {
  MeasurementTabContent,
  FeedsTabContent,
  CatalogTabContent,
  IntegrationsTabContent,
  UXTabContent,
} from "@/components/platform-tabs-content";

export default function EcommerceReviewPlatform() {
  const {
    data: platformReview,
    isLoading,
    error,
    refetch,
  } = usePlatformReviewQuery();

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="w-full max-w-7xl animate-pulse space-y-6 px-8">
          <div className="h-8 w-1/3 rounded bg-muted" />
          <div className="grid gap-4 md:grid-cols-3">
            <div className="h-32 rounded bg-muted" />
            <div className="h-32 rounded bg-muted" />
            <div className="h-32 rounded bg-muted" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !platformReview) {
    return <ErrorState onRetry={() => refetch()} />;
  }

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-br from-background via-background to-blue-500/5">
      <div className="mx-auto max-w-[1400px] px-8 py-12">
        {/* Hero Slide */}
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-background to-purple-500/10 p-12 shadow-2xl">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-blue-500/20 p-3">
                <Database className="h-8 w-8 text-blue-600" />
              </div>
              <Badge variant="outline" className="text-sm">
                Technical Audit
              </Badge>
            </div>

            <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground">
              Platform & Infrastructure Review
            </h1>
            <p className="mb-6 max-w-3xl text-lg text-muted-foreground">
              {platformReview.summary.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="text-sm">
                Measurement Tracking
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Product Feeds
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Catalog Management
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Integrations
              </Badge>
              <Badge variant="secondary" className="text-sm">
                UX Analysis
              </Badge>
            </div>
          </div>
        </div>

        {/* Platform Deep Dive */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/10 text-purple-600">
              <Settings className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Platform Deep Dive
            </h2>
          </div>

          <Card className="border-2 border-purple-200/50 bg-gradient-to-br from-purple-50/30 via-background to-blue-50/30 dark:from-purple-950/10 dark:to-blue-950/10">
            <CardHeader>
              <CardDescription className="text-base">
                Switch tabs to review specific areas. All tabular data and detailed findings below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="ux" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="ux">UX</TabsTrigger>
                  <TabsTrigger value="measurement">Measurement</TabsTrigger>
                  <TabsTrigger value="feeds">Feeds</TabsTrigger>
                  <TabsTrigger value="catalog">Catalog</TabsTrigger>
                  <TabsTrigger value="integrations">Integrations</TabsTrigger>
                </TabsList>

                <TabsContent value="measurement" className="mt-6">
                  <MeasurementTabContent platformReview={platformReview} />
                </TabsContent>

                <TabsContent value="feeds" className="mt-6">
                  <FeedsTabContent platformReview={platformReview} />
                </TabsContent>

                <TabsContent value="catalog" className="mt-6">
                  <CatalogTabContent platformReview={platformReview} />
                </TabsContent>

                <TabsContent value="integrations" className="mt-6">
                  <IntegrationsTabContent platformReview={platformReview} />
                </TabsContent>

                <TabsContent value="ux" className="mt-6">
                  <UXTabContent platformReview={platformReview} />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
