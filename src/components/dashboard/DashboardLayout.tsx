
import React from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutDashboard, FileText, UserCheck, Bell, DollarSign, Coins, Settings } from 'lucide-react';
import { Sidebar, SidebarProvider, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

const DashboardLayout = () => {
  const location = window.location;

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
      active: location.pathname === "/dashboard/clients"
    },
    {
      label: "Money",
      icon: Coins,
      path: "/dashboard/money",
      active: location.pathname === "/dashboard/money"
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
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton 
                    isActive={item.active}
                    onClick={() => window.location.href = item.path}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
