
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BarChart3, Wallet } from "lucide-react";
import { startOfMonth } from "date-fns";
import { Link } from "react-router-dom";
import EarningsHeader from "@/components/earnings/EarningsHeader";
import EarningsOverviewChart from "@/components/earnings/charts/EarningsOverviewChart";
import ProgressCircle from "@/components/earnings/ProgressCircle";
import ServiceEarningsChart from "@/components/earnings/ServiceEarningsChart";
import PendingPaymentsList from "@/components/earnings/PendingPaymentsList";
import { monthlyEarnings, weeklyEarnings, serviceEarnings, pendingPayments } from "@/data/earnings";

// Define missing variables for the progress circle chart
const totalEarnings = 65000;
const projectedEarnings = 100000;

const Earnings = () => {
  const [timeFrame, setTimeFrame] = useState("monthly");
  const [dateRange, setDateRange] = useState<[Date | undefined, Date | undefined]>([
    startOfMonth(new Date()),
    new Date()
  ]);
  
  return (
    <div className="space-y-6">
      <EarningsHeader dateRange={dateRange} setDateRange={setDateRange} />
      
      {/* Overview Section */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Earnings Overview</CardTitle>
                <CardDescription>Total earnings and projections for 2025</CardDescription>
              </div>
              <Tabs defaultValue="monthly" onValueChange={setTimeFrame} className="w-[240px]">
                <TabsList className="grid grid-cols-2 bg-yellow-50">
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            <EarningsOverviewChart 
              data={timeFrame === 'monthly' ? monthlyEarnings : weeklyEarnings}
              timeFrame={timeFrame as "monthly" | "weekly"}
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Annual Target</CardTitle>
            <CardDescription>Progress towards your annual goal</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-center">
              <ProgressCircle 
                totalEarnings={totalEarnings}
                projectedEarnings={projectedEarnings}
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span>Monthly Target</span>
                <span className="text-yellow-600">$10,000</span>
              </div>
              <Progress value={80} className="h-2 bg-gray-100" />
              <p className="text-xs text-gray-500 text-right">$8,000 of $10,000</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span>Q2 Target</span>
                <span className="text-yellow-600">$30,000</span>
              </div>
              <Progress value={62} className="h-2 bg-gray-100" />
              <p className="text-xs text-gray-500 text-right">$18,600 of $30,000</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-yellow-950" asChild>
              <Link to="/dashboard/targets/annual">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Detailed Report
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      {/* Service Earnings & Pending */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Earnings by Service</CardTitle>
            <CardDescription>Distribution of earnings across your service offerings</CardDescription>
          </CardHeader>
          <CardContent>
            <ServiceEarningsChart data={serviceEarnings} />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Pending Payments</CardTitle>
            <CardDescription>Upcoming payments from clients</CardDescription>
          </CardHeader>
          <CardContent>
            <PendingPaymentsList payments={pendingPayments} />
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm text-muted-foreground">
              Total pending: <span className="font-medium">
                ${pendingPayments.reduce((sum, payment) => sum + payment.amount, 0).toLocaleString()}
              </span>
            </p>
            <Button variant="outline" asChild>
              <Link to="/dashboard/invoices">View All</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      {/* Payment Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Settings</CardTitle>
          <CardDescription>Configure your payment methods and payout schedule</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="payoutMethod">Payout Method</Label>
              <Select defaultValue="bank_account">
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select payout method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bank_account">Bank Account</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="venmo">Venmo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="payoutFrequency">Payout Frequency</Label>
              <Select defaultValue="weekly">
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="biweekly">Bi-weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="bankAccount">Bank Account (Last 4: 1234)</Label>
            <div className="flex gap-2">
              <Input id="bankAccount" value="••••••••••••1234" className="bg-white" readOnly />
              <Button variant="outline">Update</Button>
            </div>
          </div>
          
          <div className="rounded-md bg-yellow-50 p-4 border border-yellow-200">
            <div className="flex">
              <div className="flex-shrink-0">
                <Wallet className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Next Payout</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>Your next payout of <span className="font-semibold">${(5200).toLocaleString()}</span> is scheduled for <span className="font-semibold">April 24, 2025</span>.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Earnings;
