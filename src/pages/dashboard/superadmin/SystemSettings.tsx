
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";

type Setting = {
  key: string;
  value: any;
  id: number;
};

const SystemSettings = () => {
  const [settings, setSettings] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("system_settings")
        .select("*");
        
      if (error) throw error;
      
      // Convert array to key-value object for easier access
      const settingsObject: Record<string, any> = {};
      data?.forEach((setting: Setting) => {
        settingsObject[setting.key] = {
          value: setting.value,
          id: setting.id
        };
      });
      
      // Set default settings if they don't exist
      const defaultSettings = {
        "site.name": { value: "YelloPago" },
        "site.maintenance_mode": { value: false },
        "auth.allow_signups": { value: true },
        "email.verification_required": { value: true }
      };
      
      setSettings({ ...defaultSettings, ...settingsObject });
    } catch (error: any) {
      toast({
        title: "Error fetching settings",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateSetting = async (key: string, value: any) => {
    try {
      // Update local state first for immediate feedback
      setSettings({
        ...settings,
        [key]: { ...settings[key], value }
      });
      
      const existingSetting = settings[key];
      
      if (existingSetting && existingSetting.id) {
        // Update existing setting
        const { error } = await supabase
          .from("system_settings")
          .update({ value })
          .eq("id", existingSetting.id);
          
        if (error) throw error;
      } else {
        // Insert new setting
        const { data, error } = await supabase
          .from("system_settings")
          .insert({
            key,
            value,
            updated_by: user?.id
          })
          .select();
          
        if (error) throw error;
        
        // Update the local state with the new ID
        setSettings({
          ...settings,
          [key]: { value, id: data?.[0].id }
        });
      }
    } catch (error: any) {
      toast({
        title: "Error updating setting",
        description: error.message,
        variant: "destructive",
      });
      // Revert the local state on error
      fetchSettings();
    }
  };

  const saveAllSettings = async () => {
    setIsSaving(true);
    try {
      // Prepare upserts for all settings
      const upserts = Object.entries(settings).map(([key, { value, id }]) => ({
        id: id || undefined, // If ID exists, it's an update, otherwise an insert
        key,
        value,
        updated_by: user?.id
      }));

      const { error } = await supabase
        .from("system_settings")
        .upsert(upserts);
        
      if (error) throw error;
      
      toast({
        title: "Settings saved",
        description: "All system settings have been updated successfully."
      });
      
      // Log the activity
      await supabase.from("admin_activity_log").insert({
        user_id: user?.id,
        action: "UPDATE",
        entity_type: "system_settings",
        details: { settings: Object.fromEntries(Object.entries(settings).map(([k, { value }]) => [k, value])) }
      });
      
      // Refresh settings to get the latest from the server
      fetchSettings();
    } catch (error: any) {
      toast({
        title: "Error saving settings",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div className="flex justify-center p-6">Loading settings...</div>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Site Settings</CardTitle>
          <CardDescription>
            Configure general settings for your platform
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="site-name">Site Name</Label>
              <Input
                id="site-name"
                value={settings["site.name"]?.value || ""}
                onChange={(e) => updateSetting("site.name", e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                <p className="text-sm text-muted-foreground">
                  When enabled, only admins can access the site
                </p>
              </div>
              <Switch
                id="maintenance-mode"
                checked={settings["site.maintenance_mode"]?.value || false}
                onCheckedChange={(checked) => updateSetting("site.maintenance_mode", checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Authentication Settings</CardTitle>
          <CardDescription>
            Configure authentication options for your users
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="allow-signups">Allow New Signups</Label>
              <p className="text-sm text-muted-foreground">
                When disabled, only existing users can sign in
              </p>
            </div>
            <Switch
              id="allow-signups"
              checked={settings["auth.allow_signups"]?.value || false}
              onCheckedChange={(checked) => updateSetting("auth.allow_signups", checked)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="email-verification">Require Email Verification</Label>
              <p className="text-sm text-muted-foreground">
                Users must verify their email before signing in
              </p>
            </div>
            <Switch
              id="email-verification"
              checked={settings["email.verification_required"]?.value || false}
              onCheckedChange={(checked) => updateSetting("email.verification_required", checked)}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={saveAllSettings} disabled={isSaving}>
          {isSaving ? "Saving..." : "Save All Settings"}
        </Button>
      </div>
    </div>
  );
};

export default SystemSettings;
