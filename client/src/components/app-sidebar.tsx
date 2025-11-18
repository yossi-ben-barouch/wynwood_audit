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
  Dot,
  ChevronDown,
  ChevronRight,
  Compass,
  Globe2,
  Share2,
  Store,
  Rocket,
  Shirt,
  BookOpen,
  Layers,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect, useMemo, useState } from "react";
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
    title: "eCommerce Review",
    url: "/ecommerce-review",
    icon: LayoutDashboard,
    children: [
      { title: "Overview", url: "/ecommerce-review", icon: LayoutDashboard },
      { title: "Platform", url: "/ecommerce-review/platform", icon: Globe2 },
      { title: "Infrastructure & Tools", url: "/infrastructure", icon: Layers },
      { title: "Promotion", url: "/ecommerce-review/promotion", icon: Rocket },
      // { title: "Team Review", url: "/team-review", icon: UserCog },
    ],
  },
  {
    title: "Marketing Strategy",
    url: "/marketing-strategy",
    icon: Target,
    children: [
      { title: "Overview", url: "/marketing-strategy", icon: Compass },
      {
        title: "Platform & Insights",
        url: "/marketing-strategy/platform-insights",
        icon: Globe2,
      },
      { title: "Social", url: "/marketing-strategy/social", icon: Share2 },
      { title: "SEO", url: "/marketing-strategy/seo", icon: Globe2 },
      {
        title: "Marketplaces",
        url: "/marketing-strategy/marketplaces",
        icon: Store,
      },
      {
        title: "Performance Marketing",
        url: "/marketing-strategy/performance",
        icon: Rocket,
      },
      {
        title: "Fashion Brand",
        url: "/marketing-strategy/fashion",
        icon: Shirt,
      },
    ],
  },
  {
    title: "AI Implementation",
    url: "/ai-marketing",
    icon: Sparkles,
  },
  // {
  //   title: "Standard Operating Procedures",
  //   url: "/sop",
  //   icon: BookOpen,
  // },
];

export function AppSidebar() {
  const [location] = useLocation();
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  // Auto-open the group that matches the current route, without collapsing others the user already opened
  useEffect(() => {
    const next: Record<string, boolean> = { ...openGroups };
    for (const item of navigationItems) {
      const hasChildren =
        Array.isArray((item as any).children) &&
        (item as any).children.length > 0;
      if (!hasChildren) continue;
      const children = (item as any).children as Array<{ url: string }>;
      const autoOpen =
        location === item.url || children.some((c) => location === c.url);
      if (autoOpen) next[item.title] = true;
    }
    setOpenGroups(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <Sidebar>
      <SidebarHeader className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-sidebar-primary flex items-center justify-center">
            <Building2 className="w-6 h-6 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-sidebar-foreground">
              Wynwood Walls
            </h2>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              E-Commerce Audit
            </p>
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
                const hasChildren =
                  Array.isArray((item as any).children) &&
                  (item as any).children.length > 0;
                return (
                  <div key={item.title}>
                    <SidebarMenuItem>
                      <div
                        className={`flex items-center ${
                          hasChildren ? "justify-between" : ""
                        }`}
                      >
                        <SidebarMenuButton
                          asChild
                          className={isActive ? "bg-sidebar-accent" : ""}
                          data-testid={`link-${item.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          <Link href={item.url}>
                            <item.icon className="w-5 h-5" />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                        {hasChildren && (
                          <button
                            type="button"
                            aria-label="Toggle marketing submenu"
                            className="px-2 py-1 text-sidebar-foreground/70 hover:text-sidebar-foreground"
                            onClick={() =>
                              setOpenGroups((prev) => ({
                                ...prev,
                                [item.title]: !(prev[item.title] ?? false),
                              }))
                            }
                          >
                            {openGroups[item.title] ?? false ? (
                              <ChevronDown className="w-4 h-4" />
                            ) : (
                              <ChevronRight className="w-4 h-4" />
                            )}
                          </button>
                        )}
                      </div>
                    </SidebarMenuItem>

                    {hasChildren && (openGroups[item.title] ?? false) && (
                      <ul className="ml-4 mr-2 mt-2 space-y-1 rounded-md border border-sidebar-border bg-sidebar-accent/20 p-1">
                        {(item as any).children.map(
                          (child: {
                            title: string;
                            url: string;
                            icon?: any;
                          }) => {
                            const childActive = location === child.url;
                            const ChildIcon = child.icon ?? Dot;
                            return (
                              <li key={child.url}>
                                <SidebarMenuButton
                                  asChild
                                  className={`${
                                    childActive ? "bg-sidebar-accent" : ""
                                  } pl-6`}
                                  data-testid={`link-${child.title
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                                >
                                  <Link href={child.url}>
                                    <ChildIcon className="w-4 h-4" />
                                    <span className="text-sm">
                                      {child.title}
                                    </span>
                                  </Link>
                                </SidebarMenuButton>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    )}
                  </div>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
