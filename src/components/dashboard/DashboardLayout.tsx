
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Sparkles } from "lucide-react";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
} from "@/components/ui/sidebar";
import { SidebarNavigation } from "./sidebar/SidebarNavigation";
import { SidebarProfile } from "./sidebar/SidebarProfile";
import { ProUpgradeCard } from "./sidebar/ProUpgradeCard";
import { DashboardHeader } from "./header/DashboardHeader";

export const DashboardLayout = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex w-full min-h-screen bg-yellow-50/50">
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
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarNavigation />
            <ProUpgradeCard />
          </SidebarContent>
          
          <SidebarProfile />
        </Sidebar>

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
