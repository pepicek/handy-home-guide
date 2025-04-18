import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Bell } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const NotificationSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Notification Preferences</CardTitle>
        <CardDescription>
          Choose how you want to be notified
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center p-3 border rounded-md bg-gray-50">
            <Bell className="h-5 w-5 text-gray-500 mr-2" />
            <p className="text-sm">Stay updated with important information about your business and bookings</p>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-medium">Booking Notifications</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 text-gray-600">New booking requests</div>
                <div className="col-span-2 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Switch id="booking-email" defaultChecked />
                    <Label htmlFor="booking-email">Email</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="booking-sms" defaultChecked />
                    <Label htmlFor="booking-sms">SMS</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="booking-push" defaultChecked />
                    <Label htmlFor="booking-push">Push</Label>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 text-gray-600">Booking confirmations</div>
                <div className="col-span-2 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Switch id="confirmation-email" defaultChecked />
                    <Label htmlFor="confirmation-email">Email</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="confirmation-sms" defaultChecked />
                    <Label htmlFor="confirmation-sms">SMS</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="confirmation-push" />
                    <Label htmlFor="confirmation-push">Push</Label>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 text-gray-600">Booking cancellations</div>
                <div className="col-span-2 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Switch id="cancellation-email" defaultChecked />
                    <Label htmlFor="cancellation-email">Email</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="cancellation-sms" defaultChecked />
                    <Label htmlFor="cancellation-sms">SMS</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="cancellation-push" defaultChecked />
                    <Label htmlFor="cancellation-push">Push</Label>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-3">
              <h4 className="font-medium">Message Notifications</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 text-gray-600">New messages</div>
                <div className="col-span-2 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Switch id="message-email" defaultChecked />
                    <Label htmlFor="message-email">Email</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="message-sms" />
                    <Label htmlFor="message-sms">SMS</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="message-push" defaultChecked />
                    <Label htmlFor="message-push">Push</Label>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-3">
              <h4 className="font-medium">Platform Notifications</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 text-gray-600">New reviews</div>
                <div className="col-span-2 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Switch id="review-email" defaultChecked />
                    <Label htmlFor="review-email">Email</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="review-sms" />
                    <Label htmlFor="review-sms">SMS</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="review-push" />
                    <Label htmlFor="review-push">Push</Label>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 text-gray-600">Payment notifications</div>
                <div className="col-span-2 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Switch id="payment-email" defaultChecked />
                    <Label htmlFor="payment-email">Email</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="payment-sms" defaultChecked />
                    <Label htmlFor="payment-sms">SMS</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="payment-push" />
                    <Label htmlFor="payment-push">Push</Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto bg-anthracite hover:bg-anthracite/90 text-yellow-400">Save Preferences</Button>
      </CardFooter>
    </Card>
  );
};

export default NotificationSettings;
