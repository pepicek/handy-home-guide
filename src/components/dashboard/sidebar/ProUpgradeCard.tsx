
import { Link } from "react-router-dom";
import { Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SidebarGroup } from "@/components/ui/sidebar";

export const ProUpgradeCard = () => {
  return (
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
  );
};
