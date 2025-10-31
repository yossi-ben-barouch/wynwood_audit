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
import CriticalProblems from "@/pages/problems";
import StrategicRecommendations from "@/pages/recommendations";
import MarketingStrategy from "@/pages/marketing-strategy";
import AIMarketingShowcase from "@/pages/ai-marketing";
import TeamReviewPage from "@/pages/team-review";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={ExecutiveDashboard} />
      <Route path="/organizational-structure" component={OrganizationalStructure} />
      <Route path="/current-state" component={CurrentStateAssessment} />
      <Route path="/problems" component={CriticalProblems} />
      <Route path="/recommendations" component={StrategicRecommendations} />
      <Route path="/marketing-strategy" component={MarketingStrategy} />
      <Route path="/ai-marketing" component={AIMarketingShowcase} />
      <Route path="/team-review" component={TeamReviewPage} />
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
                  <span className="text-sm text-muted-foreground">October 2025</span>
                </div>
              </header>
              <main className="flex-1 overflow-hidden">
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
