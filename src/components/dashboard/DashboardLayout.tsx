
import React from "react";
import { useLocation, Link, Outlet } from "react-router-dom";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter, 
  SidebarProvider,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel
} from "@/components/ui/sidebar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Settings, Users, Calendar, Tag, BarChart3, DollarSign, MessageSquare, Grid3x3, Home } from "lucide-react";

export const DashboardLayout = () => {
  const location = useLocation();
  
  const menuItems = [
    {
      label: "Dashboard",
      icon: Home,
      path: "/dashboard",
      active: location.pathname === "/dashboard"
    },
    {
      label: "Appointments",
      icon: Calendar,
      path: "/dashboard/appointments",
      active: location.pathname.includes("/dashboard/appointments")
    },
    {
      label: "Services",
      icon: Grid3x3,
      path: "/dashboard/services",
      active: location.pathname.includes("/dashboard/services")
    },
    {
      label: "Special Offers",
      icon: Tag,
      path: "/dashboard/special-offers",
      active: location.pathname.includes("/dashboard/special-offers")
    },
    {
      label: "Clients",
      icon: Users,
      path: "/dashboard/clients",
      active: location.pathname.includes("/dashboard/clients")
    },
    {
      label: "Messages",
      icon: MessageSquare,
      path: "/dashboard/messages",
      active: location.pathname.includes("/dashboard/messages"),
      badge: "5"
    },
    {
      label: "Analytics",
      icon: BarChart3,
      path: "/dashboard/analytics",
      active: location.pathname === "/dashboard/analytics"
    },
    {
      label: "Money",
      icon: DollarSign, 
      path: "/dashboard/money",
      active: location.pathname === "/dashboard/money"
    },
    {
      label: "Listings",
      icon: Grid3x3,
      path: "/dashboard/listings",
      active: location.pathname.includes("/dashboard/listings")
    },
    {
      label: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
      active: location.pathname === "/dashboard/settings"
    }
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader className="flex h-14 items-center border-b px-4">
            <Link to="/dashboard" className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-primary" />
              <span className="text-lg font-bold">Service Pro</span>
            </Link>
            <SidebarTrigger className="ml-auto md:hidden" />
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton asChild isActive={item.active}>
                      <Link to={item.path} className="flex items-center">
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.label}</span>
                        {item.badge && (
                          <Badge variant="secondary" className="ml-auto">
                            {item.badge}
                          </Badge>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter>
            <div className="border-t p-4">
              <div className="bg-muted/50 rounded-lg p-4 mb-4">
                <p className="text-sm font-medium mb-2">Upgrade to Pro</p>
                <p className="text-xs text-muted-foreground mb-3">Get more features and priority support.</p>
                <Button size="sm" className="w-full">Upgrade</Button>
              </div>
              
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Jane Doe</span>
                  <span className="text-xs text-muted-foreground">jane@example.com</span>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <Bell className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <div className="h-14 border-b flex items-center justify-between px-4 lg:px-6">
            <h1 className="text-lg font-semibold">Dashboard</h1>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          <div className="container py-6">
            <Outlet />
          </div>
          
          <div className="border-t p-4 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Service Pro. All rights reserved.
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};
