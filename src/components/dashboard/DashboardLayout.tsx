import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { LayoutDashboard, FileText, UserCheck, Coins, Settings, MessageSquare, BarChart3, Layers, Bell, UserRound } from 'lucide-react';
import { Sidebar, SidebarProvider, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarHeader, SidebarFooter } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const DashboardLayout = () => {
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
      icon: FileText,
      path: "/dashboard/services",
      active: location.pathname === "/dashboard/services"
    },
    {
      label: "Clients",
      icon: UserCheck,
      path: "/dashboard/clients",
      active: location.pathname.includes("/dashboard/clients")
    },
    {
      label: "Money",
      icon: Coins,
      path: "/dashboard/money",
      active: location.pathname === "/dashboard/money"
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
      label: "Listings",
      icon: Layers,
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
          </SidebarHeader>

          <SidebarContent>
            <div className="px-2 py-2">
              <div className="space-y-1">
                <h2 className="px-4 text-lg font-semibold tracking-tight">
                  Provider Dashboard
                </h2>
              </div>
            </div>
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton 
                    isActive={item.active}
                    onClick={() => window.location.href = item.path}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                    {item.badge && (
                      <Badge variant="secondary" className="ml-auto">
                        {item.badge}
                      </Badge>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          
          <SidebarFooter>
            <div className="px-4 py-2">
              <div className="flex items-center space-x-3 bg-gray-50 p-2 rounded-lg">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    John Doe
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    john@servicepro.com
                  </p>
                </div>
                <Button variant="ghost" size="icon">
                  <Bell className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <UserRound className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
