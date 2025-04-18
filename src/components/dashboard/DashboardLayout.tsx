import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSidebar, SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { LayoutDashboard, FileText, Calendar, Users, Settings, LogOut, Bell, MessageSquare, PieChart,
  Sparkles, DollarSign, BarChart3, ListChecks, Menu, Crown, Coins, Download } from "lucide-react";

export const DashboardLayout = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex w-full min-h-screen bg-yellow-50/50">
        <DashboardSidebar />
        <SidebarInset>
          <div className="flex flex-col h-full">
            <DashboardHeader />
            <main className="flex-1 p-6 overflow-auto">
              <Outlet />
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

const DashboardSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
      active: location.pathname === "/dashboard"
    },
    {
      label: "Services",
      icon: ListChecks, 
      path: "/dashboard/services",
      active: location.pathname === "/dashboard/services"
    },
    {
      label: "Listings",
      icon: FileText,
      path: "/dashboard/listings",
      active: location.pathname.includes("/dashboard/listings")
    },
    {
      label: "Appointments",
      icon: Calendar,
      path: "/dashboard/appointments",
      active: location.pathname === "/dashboard/appointments"
    },
    {
      label: "Special Offers",
      icon: Sparkles,
      path: "/dashboard/special-offers",
      active: location.pathname === "/dashboard/special-offers"
    },
    {
      label: "Clients",
      icon: Users,
      path: "/dashboard/clients",
      active: location.pathname === "/dashboard/clients"
    },
    {
      label: "Messages",
      icon: MessageSquare,
      path: "/dashboard/messages",
      active: location.pathname === "/dashboard/messages",
      badge: "3"
    },
    {
      label: "Analytics",
      icon: BarChart3,
      path: "/dashboard/analytics",
      active: location.pathname === "/dashboard/analytics"
    },
    {
      label: "Earnings",
      icon: DollarSign,
      path: "/dashboard/earnings",
      active: location.pathname === "/dashboard/earnings"
    },
    {
      label: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
      active: location.pathname === "/dashboard/settings"
    }
  ];
  
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center px-3 py-2">
          <Link to="/" className="flex items-center group">
            <div className="bg-anthracite rounded-xl p-2 mr-2 rotate-3 group-hover:rotate-6 transition-transform duration-300">
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
            <span className="font-poster text-lg font-bold text-anthracite">
              Yello<span className="text-yellow-600">Pago</span>
            </span>
          </Link>
          <SidebarTrigger className="ml-auto" />
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-yellow-700">Main</SidebarGroupLabel>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton asChild isActive={item.active} tooltip={item.label}>
                  <Link to={item.path}>
                    <item.icon className={item.active ? "text-yellow-600" : ""} />
                    <span>{item.label}</span>
                    {item.badge && (
                      <Badge className="ml-auto bg-yellow-500 text-anthracite">{item.badge}</Badge>
                    )}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        
        <SidebarGroup>
          <div className="px-3 py-4">
            <Card className="bg-gradient-to-r from-yellow-100 to-amber-100 border-yellow-200">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-2 text-anthracite">
                  <Crown className="h-5 w-5 text-yellow-600" />
                  <h3 className="font-semibold">Upgrade to Pro</h3>
                </div>
                <p className="text-sm text-anthracite/70">
                  Get priority listing, advanced analytics, and more premium features
                </p>
                <Button 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-anthracite"
                  size="sm"
                  asChild
                >
                  <Link to="/dashboard/pro">View Pro Plans</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <div className="px-3 py-2">
          <Separator className="my-2" />
          <div className="flex items-center gap-3 px-2 py-2">
            <Avatar className="h-9 w-9 border-3 border-yellow-400 shadow-md shadow-yellow-300/50">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-yellow-100 text-yellow-800">JP</AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium leading-none truncate">Joe Provider</p>
              <p className="text-xs text-muted-foreground truncate">joe@provider.com</p>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

const DashboardHeader = () => {
  const { toggleSidebar } = useSidebar();
  const navigate = useNavigate();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [dateRange, setDateRange] = useState("thisMonth");

  const handleNotificationClick = () => {
    setNotificationsOpen(!notificationsOpen);
    toast.info("You have 3 new notifications");
  };

  const handleExport = () => {
    toast.success("Exporting data...");
    // In a real app, this would trigger the export functionality
  };

  const handleCreateInvoice = () => {
    toast.success("Creating new invoice...");
    // In a real app, this would open an invoice creation form
  };
  
  return (
    <header className="bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-50 border-b border-yellow-300 p-4 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleSidebar} 
            className="md:hidden text-yellow-800 hover:bg-yellow-200/70"
          >
            <Menu className="h-5 w-5 text-yellow-700" />
          </Button>
          <h1 className="text-xl font-semibold text-anthracite">Provider Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            to="/dashboard/earnings" 
            className="flex items-center gap-2 px-3 py-1.5 bg-anthracite rounded-full hover:bg-anthracite/90 transition-colors border border-yellow-400"
          >
            <Coins className="h-4 w-4 text-yellow-400" />
            <span className="font-medium text-white">$200.00</span>
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative hover:bg-yellow-200/70"
            onClick={handleNotificationClick}
          >
            <Bell className="h-5 w-5 text-yellow-700" />
            <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-yellow-500 rounded-full ring-2 ring-white"></span>
          </Button>
          <Button 
            variant="outline" 
            className="ml-2 border-yellow-400 hover:bg-yellow-100 text-yellow-800"
            onClick={() => navigate('/profile/me')}
          >
            View Public Profile
          </Button>
        </div>
      </div>
    </header>
  );
};
