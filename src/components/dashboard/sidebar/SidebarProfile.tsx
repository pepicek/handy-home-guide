
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarFooter } from "@/components/ui/sidebar";
import { useAuth } from "@/context/AuthContext";

export const SidebarProfile = () => {
  const { user, signOut } = useAuth();
  
  const handleLogout = () => {
    signOut();
  };

  return (
    <SidebarFooter>
      <div className="px-3 py-2">
        <Separator className="my-2" />
        <div className="flex items-center gap-3 px-2 py-2">
          <Avatar className="h-9 w-9 border-3 border-yellow-400 shadow-md shadow-yellow-300/50">
            <AvatarImage src={user?.avatarUrl || "/placeholder.svg"} />
            <AvatarFallback className="bg-yellow-100 text-yellow-800">
              {user?.firstName?.charAt(0) || ''}{user?.lastName?.charAt(0) || 'P'}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium leading-none truncate">
              {user?.firstName} {user?.lastName || 'Provider'}
            </p>
            <p className="text-xs text-muted-foreground truncate">{user?.email || 'joe@provider.com'}</p>
          </div>
          <Button variant="ghost" size="icon" className="ml-auto" onClick={handleLogout}>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </SidebarFooter>
  );
};
