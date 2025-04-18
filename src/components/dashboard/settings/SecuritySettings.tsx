import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

const SecuritySettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Security Settings</CardTitle>
        <CardDescription>
          Manage your account security and privacy
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center p-3 border rounded-md bg-gray-50">
            <Shield className="h-5 w-5 text-gray-500 mr-2" />
            <p className="text-sm">Keep your account secure with these security options</p>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Password</h4>
              <Button variant="outline">Change Password</Button>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h4 className="font-medium">Two-Factor Authentication</h4>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Enable 2FA</p>
                  <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                </div>
                <Switch id="enable-2fa" />
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h4 className="font-medium">Login Sessions</h4>
              <div className="p-4 border rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Current Session</p>
                    <p className="text-sm text-gray-500">New York, USA • Chrome on Mac OS</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Active Now</Badge>
                </div>
              </div>
              <Button variant="outline" size="sm">Sign Out All Other Devices</Button>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h4 className="font-medium">Account Control</h4>
              <Button variant="destructive">Deactivate Account</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecuritySettings;
