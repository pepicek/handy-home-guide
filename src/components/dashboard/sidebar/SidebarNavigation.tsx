
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, FileText, Calendar, Users, Settings, MessageSquare, 
  PieChart, DollarSign, BarChart3, ListChecks, Sparkles, LifeBuoy
} from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

export const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard"
  },
  {
    label: "Services",
    icon: ListChecks,
    path: "/dashboard/services"
  },
  {
    label: "Listings",
    icon: FileText,
    path: "/dashboard/listings"
  },
  {
    label: "Appointments",
    icon: Calendar,
    path: "/dashboard/appointments"
  },
  {
    label: "Special Offers",
    icon: Sparkles,
    path: "/dashboard/special-offers"
  },
  {
    label: "Clients",
    icon: Users,
    path: "/dashboard/clients"
  },
  {
    label: "Messages",
    icon: MessageSquare,
    path: "/dashboard/messages",
    badge: "3"
  },
  {
    label: "Analytics",
    icon: BarChart3,
    path: "/dashboard/analytics"
  },
  {
    label: "Earnings",
    icon: DollarSign,
    path: "/dashboard/earnings"
  },
  {
    label: "Settings",
    icon: Settings,
    path: "/dashboard/settings"
  },
  {
    label: "Support",
    icon: LifeBuoy,
    path: "/dashboard/support"
  }
];

export const SidebarNavigation = () => {
  const location = useLocation();

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-yellow-700">Main</SidebarGroupLabel>
      <SidebarMenu>
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path}>
            <SidebarMenuButton 
              asChild 
              isActive={location.pathname === item.path}
              tooltip={item.label}
            >
              <Link to={item.path}>
                <item.icon className={location.pathname === item.path ? "text-yellow-600" : ""} />
                <span>{item.label}</span>
                {item.badge && (
                  <Badge className="ml-auto bg-yellow-500 text-anthracite">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};
