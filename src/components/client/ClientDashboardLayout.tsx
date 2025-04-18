
import * as React from "react";
import { useLocation, Link, Outlet } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Home,
  Heart,
  ClipboardList,
  Star,
  DollarSign,
  Search,
  Settings,
  Menu,
  User
} from "lucide-react";
import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const ClientDashboardLayout = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const navigation = [
    {
      label: "Dashboard",
      icon: Home,
      path: "/client",
      active: location.pathname === "/client",
    },
    {
      label: "Saved Providers",
      icon: Heart,
      path: "/client/saved-providers",
      active: location.pathname === "/client/saved-providers",
    },
    {
      label: "Projects",
      icon: ClipboardList,
      path: "/client/projects",
      active: location.pathname === "/client/projects",
    },
    {
      label: "Quote Requests",
      icon: ClipboardList,
      path: "/client/quotes",
      active: location.pathname === "/client/quotes",
    },
    {
      label: "Reviews",
      icon: Star,
      path: "/client/reviews",
      active: location.pathname === "/client/reviews",
    },
    {
      label: "Financial Summary",
      icon: DollarSign,
      path: "/client/finance",
      active: location.pathname === "/client/finance",
    },
    {
      label: "Search History",
      icon: Search,
      path: "/client/search-history",
      active: location.pathname === "/client/search-history",
    },
    {
      label: "Account Settings",
      icon: Settings,
      path: "/client/settings",
      active: location.pathname === "/client/settings",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SidebarProvider defaultOpen={!isMobile}>
        <div className="flex min-h-screen w-full">
          <Sidebar variant="inset">
            <SidebarHeader className="flex flex-row items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <div className="bg-anthracite rounded-xl p-2 rotate-3">
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z" />
                  </svg>
                </div>
                <div className="hidden font-poster text-lg font-bold text-anthracite md:inline-block">
                  <span>Yello</span>
                  <span className="text-yellow-600">Pago</span>
                </div>
              </Link>
              <SidebarTrigger />
            </SidebarHeader>

            <SidebarContent>
              <div className="px-2 py-2">
                <div className="space-y-1">
                  <h2 className="px-4 text-lg font-semibold tracking-tight">
                    Client Portal
                  </h2>
                </div>
              </div>
              <SidebarMenu>
                {navigation.map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <Link to={item.path} className="w-full">
                      <SidebarMenuButton isActive={item.active} tooltip={item.label}>
                        <item.icon className="size-4" />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarContent>

            <SidebarFooter>
              <div className="space-y-2">
                <Card className="mx-2">
                  <CardContent className="p-2 flex items-center space-x-2">
                    <div className="p-1.5 rounded-md bg-yellow-100">
                      <User className="w-5 h-5 text-yellow-700" />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">Alex Johnson</p>
                      <p className="text-xs text-muted-foreground">Client since 2024</p>
                    </div>
                  </CardContent>
                </Card>

                <div className="mx-2">
                  <Button variant="outline" className="w-full">
                    <Link to="/" className="w-full">Home Page</Link>
                  </Button>
                </div>
              </div>
            </SidebarFooter>
          </Sidebar>

          <SidebarInset className="flex-1 py-6 px-4 md:px-10">
            <div className="mb-6">
              {isMobile && (
                <Button variant="ghost" size="icon" className="md:hidden mr-2">
                  <SidebarTrigger />
                </Button>
              )}
              <Outlet />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

// Export as both default and named export to maintain compatibility
export { ClientDashboardLayout };
export default ClientDashboardLayout;
