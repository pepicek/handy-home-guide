import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const PaymentSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Payment Settings</CardTitle>
        <CardDescription>
          Manage your payment methods and billing information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center p-3 border rounded-md bg-gray-50">
            <CreditCard className="h-5 w-5 text-gray-500 mr-2" />
            <p className="text-sm">Setup your payment methods to receive payments from clients</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Payment Methods</h4>
            <div className="p-4 border rounded-md flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="h-10 w-14 bg-gray-100 rounded flex items-center justify-center">
                  <p className="font-medium text-xs">VISA</p>
                </div>
                <div>
                  <p>Visa ending in 4242</p>
                  <p className="text-xs text-gray-500">Expires 12/25</p>
                </div>
              </div>
              <Badge>Default</Badge>
            </div>
            
            <Button variant="outline" size="sm">
              + Add Payment Method
            </Button>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <h4 className="font-medium">Payout Settings</h4>
            <div className="grid gap-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Payout Method</p>
                  <p className="text-sm text-gray-500">How you'll receive your payments</p>
                </div>
                <Badge>Direct Deposit</Badge>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Payout Schedule</p>
                  <p className="text-sm text-gray-500">When you'll receive payments</p>
                </div>
                <select className="h-9 rounded-md border bg-background px-3 py-1">
                  <option>Weekly</option>
                  <option>Bi-weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <h4 className="font-medium">Tax Information</h4>
            <div className="grid gap-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Tax ID Type</p>
                </div>
                <select className="h-9 rounded-md border bg-background px-3 py-1">
                  <option>EIN</option>
                  <option>SSN</option>
                </select>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Tax ID</p>
                </div>
                <div className="text-gray-500">••••••789</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto bg-anthracite hover:bg-anthracite/90 text-yellow-400">Save Settings</Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentSettings;
