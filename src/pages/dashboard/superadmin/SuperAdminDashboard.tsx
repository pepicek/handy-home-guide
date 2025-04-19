
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

// Component imports for admin tabs
import UserManagement from "./UserManagement";
import SystemSettings from "./SystemSettings";
import ActivityLogs from "./ActivityLogs";

const SuperAdminDashboard = () => {
  const { toast } = useToast();
  const [usersCount, setUsersCount] = useState(0);
  const [providersCount, setProvidersCount] = useState(0);
  const [adminsCount, setAdminsCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const { count: users } = await supabase
          .from("profiles")
          .select("*", { count: "exact", head: true })
          .eq("role", "user");

        const { count: providers } = await supabase
          .from("profiles")
          .select("*", { count: "exact", head: true })
          .eq("role", "provider");
          
        const { count: admins } = await supabase
          .from("profiles")
          .select("*", { count: "exact", head: true })
          .or("role.eq.admin,role.eq.superadmin");

        setUsersCount(users || 0);
        setProvidersCount(providers || 0);
        setAdminsCount(admins || 0);
      } catch (error) {
        toast({
          title: "Error fetching data",
          description: "Could not load dashboard data",
          variant: "destructive",
        });
      }
    };

    fetchCounts();
  }, [toast]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-anthracite">SuperAdmin Dashboard</h1>
        <p className="text-gray-500">Manage all aspects of your system</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{usersCount}</div>
            <p className="text-xs text-muted-foreground">Regular user accounts</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Providers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{providersCount}</div>
            <p className="text-xs text-muted-foreground">Service provider accounts</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Admin Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{adminsCount}</div>
            <p className="text-xs text-muted-foreground">Admin & Superadmin accounts</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="users" className="space-y-4">
        <TabsList>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="settings">System Settings</TabsTrigger>
          <TabsTrigger value="logs">Activity Logs</TabsTrigger>
        </TabsList>
        <TabsContent value="users">
          <UserManagement />
        </TabsContent>
        <TabsContent value="settings">
          <SystemSettings />
        </TabsContent>
        <TabsContent value="logs">
          <ActivityLogs />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SuperAdminDashboard;
