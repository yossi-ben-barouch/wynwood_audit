import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import ExecutiveDashboard from "@/pages/executive-dashboard";
import OrganizationalStructure from "@/pages/organizational-structure";
import CurrentStateAssessment from "@/pages/current-state";
import EcommerceOverview from "@/pages/ecommerce-overview";
import MarketingOverviewPage from "@/pages/marketing-strategy";
import MarketingPlatformInsights from "@/pages/marketing-strategy-platform-insights";
import MarketingSocial from "@/pages/marketing-strategy-social";
import MarketingSEO from "@/pages/marketing-strategy-seo";
import MarketingMarketplaces from "@/pages/marketing-strategy-marketplaces";
import MarketingPerformance from "@/pages/marketing-strategy-performance";
import MarketingFashion from "@/pages/marketing-strategy-fashion";
import EcommerceReviewPlatform from "@/pages/ecommerce-review-platform";
import EcommerceReviewPromotion from "@/pages/ecommerce-review-promotion";
import InfrastructurePage from "@/pages/infrastructure";
import AIMarketingShowcase from "@/pages/ai-marketing";
import TeamReviewPage from "@/pages/team-review";
import SOPPage from "@/pages/sop";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={ExecutiveDashboard} />
      <Route
        path="/organizational-structure"
        component={OrganizationalStructure}
      />
      <Route path="/current-state" component={CurrentStateAssessment} />
      <Route path="/ecommerce-review" component={EcommerceOverview} />
      <Route path="/marketing-strategy" component={MarketingOverviewPage} />
      <Route
        path="/marketing-strategy/platform-insights"
        component={MarketingPlatformInsights}
      />
      <Route path="/marketing-strategy/social" component={MarketingSocial} />
      <Route path="/marketing-strategy/seo" component={MarketingSEO} />
      <Route
        path="/marketing-strategy/marketplaces"
        component={MarketingMarketplaces}
      />
      <Route
        path="/marketing-strategy/performance"
        component={MarketingPerformance}
      />
      <Route path="/marketing-strategy/fashion" component={MarketingFashion} />
      <Route
        path="/ecommerce-review/platform"
        component={EcommerceReviewPlatform}
      />
      <Route
        path="/ecommerce-review/promotion"
        component={EcommerceReviewPromotion}
      />
      <Route path="/infrastructure" component={InfrastructurePage} />
      <Route path="/ai-marketing" component={AIMarketingShowcase} />
      <Route path="/team-review" component={TeamReviewPage} />
      <Route path="/sop" component={SOPPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const style = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SidebarProvider style={style as React.CSSProperties}>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <div className="flex flex-col flex-1">
              <header className="flex items-center justify-between p-4 border-b border-border bg-background">
                <SidebarTrigger data-testid="button-sidebar-toggle" />
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    October 2025
                  </span>
                </div>
              </header>
              <main className="flex-1 min-h-0 overflow-y-auto">
                <Router />
              </main>
            </div>
          </div>
        </SidebarProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
