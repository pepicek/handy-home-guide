
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Activity, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Json } from "@/integrations/supabase/types";

type ActivityLog = {
  id: string;
  user_id: string;
  action: string;
  entity_type: string;
  entity_id: string | null;
  details: Json | null;
  created_at: string;
  user?: {
    email: string;
    first_name: string | null;
    last_name: string | null;
  } | null;
};

const ActivityLogs = () => {
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const { user: currentUser } = useAuth();

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    setIsLoading(true);
    try {
      // First fetch the logs without the join
      const { data: logsData, error: logsError } = await supabase
        .from("admin_activity_log")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(100);
        
      if (logsError) throw logsError;
      
      // Then fetch user data separately for each log
      if (logsData) {
        const logsWithUserData: ActivityLog[] = [];
        
        for (const log of logsData) {
          const { data: userData, error: userError } = await supabase
            .from("profiles")
            .select("email, first_name, last_name")
            .eq("id", log.user_id)
            .single();
          
          logsWithUserData.push({
            ...log,
            user: userError ? null : userData
          });
        }
        
        setLogs(logsWithUserData);
      }
    } catch (error: any) {
      toast({
        title: "Error fetching logs",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(date);
  };

  const getActivityIcon = (action: string) => {
    switch (action) {
      case "CREATE":
        return <div className="rounded-full bg-green-100 p-2"><Activity className="h-4 w-4 text-green-600" /></div>;
      case "UPDATE":
        return <div className="rounded-full bg-blue-100 p-2"><Activity className="h-4 w-4 text-blue-600" /></div>;
      case "DELETE":
        return <div className="rounded-full bg-red-100 p-2"><Activity className="h-4 w-4 text-red-600" /></div>;
      default:
        return <div className="rounded-full bg-gray-100 p-2"><Activity className="h-4 w-4 text-gray-600" /></div>;
    }
  };

  const getUserName = (log: ActivityLog) => {
    if (!log.user) return "Unknown User";
    if (log.user.first_name || log.user.last_name) {
      return `${log.user.first_name || ''} ${log.user.last_name || ''}`.trim();
    }
    return log.user.email;
  };

  if (isLoading) {
    return <div className="flex justify-center p-6">Loading activity logs...</div>;
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-8">
          {logs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10">
              <Activity className="h-10 w-10 text-muted-foreground" />
              <p className="mt-2 text-muted-foreground">No activity logs found</p>
            </div>
          ) : (
            <div className="space-y-8">
              {logs.map((log) => (
                <div key={log.id} className="flex gap-4">
                  <div className="flex-shrink-0">
                    {getActivityIcon(log.action)}
                  </div>
                  <div className="flex-grow space-y-1">
                    <p>
                      <span className="font-medium">{getUserName(log)}</span>{" "}
                      <span className={`${log.action === "CREATE" ? "text-green-600" : log.action === "UPDATE" ? "text-blue-600" : "text-red-600"}`}>
                        {log.action.toLowerCase()}d
                      </span>{" "}
                      a {log.entity_type}
                      {log.entity_id ? ` (ID: ${log.entity_id})` : ""}
                    </p>
                    {log.details && (
                      <pre className="max-h-40 overflow-auto rounded-md bg-muted p-2 text-xs">
                        {JSON.stringify(log.details, null, 2)}
                      </pre>
                    )}
                    <p className="text-xs text-muted-foreground">
                      {formatDate(log.created_at)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityLogs;
