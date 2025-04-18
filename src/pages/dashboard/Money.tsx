
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { ChevronDown, Download, Filter, Plus } from 'lucide-react';

// Sample data - replace with actual API calls in production
const totalEarnings = {
  amount: 4567.89,
  change: 12.5
};

const monthlyData = [
  { name: 'Jan', amount: 500 },
  { name: 'Feb', amount: 650 },
  { name: 'Mar', amount: 800 },
  { name: 'Apr', amount: 750 },
  { name: 'May', amount: 950 },
  { name: 'Jun', amount: 1100 },
  { name: 'Jul', amount: 1250 },
];

const weeklyData = [
  { name: 'Mon', amount: 120 },
  { name: 'Tue', amount: 150 },
  { name: 'Wed', amount: 180 },
  { name: 'Thu', amount: 220 },
  { name: 'Fri', amount: 240 },
  { name: 'Sat', amount: 190 },
  { name: 'Sun', amount: 140 },
];

const serviceData = [
  { name: 'Home Cleaning', value: 35 },
  { name: 'Plumbing', value: 25 },
  { name: 'Electrical', value: 20 },
  { name: 'Landscaping', value: 15 },
  { name: 'Other', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const pendingPaymentData = [
  { id: 1, client: 'John Smith', service: 'Home Cleaning', amount: 120.00, date: '2023-05-10' },
  { id: 2, client: 'Jane Doe', service: 'Plumbing Repair', amount: 250.00, date: '2023-05-12' },
  { id: 3, client: 'Robert Johnson', service: 'Electrical Work', amount: 185.50, date: '2023-05-15' },
  { id: 4, client: 'Emily Davis', service: 'Landscaping', amount: 350.00, date: '2023-05-18' },
];

const transactionData = [
  { id: 1, client: 'Alice Johnson', service: 'Home Cleaning', amount: 120.00, status: 'Completed', date: '2023-05-01' },
  { id: 2, client: 'Bob Smith', service: 'Plumbing', amount: 250.00, status: 'Completed', date: '2023-05-02' },
  { id: 3, client: 'Charlie Brown', service: 'Electrical', amount: 185.50, status: 'Completed', date: '2023-05-03' },
  { id: 4, client: 'Diana Prince', service: 'Landscaping', amount: 350.00, status: 'Completed', date: '2023-05-04' },
  { id: 5, client: 'Edward Norton', service: 'Home Cleaning', amount: 140.00, status: 'Completed', date: '2023-05-05' },
];

const Money = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Money</h1>
          <p className="text-gray-500">Manage your earnings and payments</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
        <Card className="md:col-span-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-3xl font-bold">${totalEarnings.amount.toFixed(2)}</div>
                <p className="text-sm text-muted-foreground">
                  <span className={`${totalEarnings.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {totalEarnings.change >= 0 ? '+' : ''}{totalEarnings.change}%
                  </span>{' '}
                  from last month
                </p>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-8">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Earnings Overview</CardTitle>
              <Tabs defaultValue="monthly">
                <TabsList className="grid w-[240px] grid-cols-2">
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            <TabsContent value="monthly" className="mt-0 h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `$${value}`} />
                  <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                  <Bar dataKey="amount" fill="#8884d8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="weekly" className="mt-0 h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `$${value}`} />
                  <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                  <Bar dataKey="amount" fill="#82ca9d" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
        <Card className="md:col-span-5">
          <CardHeader>
            <CardTitle>Services Breakdown</CardTitle>
            <CardDescription>Distribution of earnings by service type</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="h-[240px] w-full max-w-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={serviceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {serviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-7">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Pending Payments</CardTitle>
              <CardDescription>Payments awaiting processing</CardDescription>
            </div>
            <Button className="bg-yellow-500 text-anthracite hover:bg-yellow-600">
              <Plus className="mr-2 h-4 w-4" />
              Add Payment
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left pb-2 text-sm font-medium">Client</th>
                    <th className="text-left pb-2 text-sm font-medium">Service</th>
                    <th className="text-right pb-2 text-sm font-medium">Amount</th>
                    <th className="text-right pb-2 text-sm font-medium">Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingPaymentData.map((payment) => (
                    <tr key={payment.id} className="border-b">
                      <td className="py-2 text-sm">{payment.client}</td>
                      <td className="py-2 text-sm">{payment.service}</td>
                      <td className="py-2 text-sm text-right">${payment.amount.toFixed(2)}</td>
                      <td className="py-2 text-sm text-right">{payment.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>Recent completed transactions</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left pb-2 text-sm font-medium">Client</th>
                  <th className="text-left pb-2 text-sm font-medium">Service</th>
                  <th className="text-right pb-2 text-sm font-medium">Amount</th>
                  <th className="text-right pb-2 text-sm font-medium">Status</th>
                  <th className="text-right pb-2 text-sm font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {transactionData.map((transaction) => (
                  <tr key={transaction.id} className="border-b">
                    <td className="py-2 text-sm">{transaction.client}</td>
                    <td className="py-2 text-sm">{transaction.service}</td>
                    <td className="py-2 text-sm text-right">${transaction.amount.toFixed(2)}</td>
                    <td className="py-2 text-sm text-right">
                      <Badge className="bg-green-500 text-white">
                        {transaction.status}
                      </Badge>
                    </td>
                    <td className="py-2 text-sm text-right">{transaction.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Money;
