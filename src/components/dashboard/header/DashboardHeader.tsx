
import { Link, useNavigate } from "react-router-dom";
import { Bell, Menu, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { toast } from "sonner";

export const DashboardHeader = () => {
  const { toggleSidebar } = useSidebar();
  const navigate = useNavigate();
  
  const handleNotificationClick = () => {
    toast.info("You have 3 new notifications");
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
