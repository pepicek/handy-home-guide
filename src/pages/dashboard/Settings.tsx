
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BusinessProfile from "@/components/dashboard/settings/BusinessProfile";
import AvailabilitySettings from "@/components/dashboard/settings/AvailabilitySettings";
import NotificationSettings from "@/components/dashboard/settings/NotificationSettings";
import PaymentSettings from "@/components/dashboard/settings/PaymentSettings";
import SecuritySettings from "@/components/dashboard/settings/SecuritySettings";
import BacklinkSettings from "@/components/dashboard/settings/BacklinkSettings";
import EmailSettings from "@/components/dashboard/settings/email/EmailSettings";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-anthracite">Settings</h1>
        <p className="text-gray-500">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList className="bg-gray-100">
          <TabsTrigger value="profile">Business Profile</TabsTrigger>
          <TabsTrigger value="availability">Availability</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="emails">Emails</TabsTrigger>
          <TabsTrigger value="payment">Payment & Billing</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="backlinks">Backlinks</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-6">
          <BusinessProfile />
        </TabsContent>
        
        <TabsContent value="availability" className="space-y-6">
          <AvailabilitySettings />
        </TabsContent>
        
        <TabsContent value="notifications">
          <NotificationSettings />
        </TabsContent>
        
        <TabsContent value="emails">
          <EmailSettings />
        </TabsContent>
        
        <TabsContent value="payment">
          <PaymentSettings />
        </TabsContent>
        
        <TabsContent value="security">
          <SecuritySettings />
        </TabsContent>
        
        <TabsContent value="backlinks">
          <BacklinkSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
