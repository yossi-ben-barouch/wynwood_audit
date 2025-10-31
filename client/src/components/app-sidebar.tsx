import {
  Building2,
  Users,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Target,
  Sparkles,
  UserCog,
  LayoutDashboard,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Executive Summary",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Organizational Structure",
    url: "/organizational-structure",
    icon: Users,
  },
  {
    title: "Current State Assessment",
    url: "/current-state",
    icon: TrendingUp,
  },
  {
    title: "Critical Problems",
    url: "/problems",
    icon: AlertTriangle,
  },
  {
    title: "Strategic Recommendations",
    url: "/recommendations",
    icon: Lightbulb,
  },
  {
    title: "Marketing Strategy",
    url: "/marketing-strategy",
    icon: Target,
  },
  {
    title: "AI & Fashion Marketing",
    url: "/ai-marketing",
    icon: Sparkles,
  },
  {
    title: "Team Review",
    url: "/team-review",
    icon: UserCog,
  },
];

export function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-sidebar-primary flex items-center justify-center">
            <Building2 className="w-6 h-6 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-sidebar-foreground">Wynwood Walls</h2>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">E-Commerce Audit</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">
            Dashboard Sections
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const isActive = location === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={isActive ? "bg-sidebar-accent" : ""}
                      data-testid={`link-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Link href={item.url}>
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
