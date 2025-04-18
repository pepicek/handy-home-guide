
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
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from "recharts";
import { 
  DollarSign, 
  Download, 
  Calendar, 
  ArrowUpRight, 
  Wallet, 
  CreditCard,
  BanknoteIcon,
  ReceiptText,
  FileText,
  AlertCircle,
  CheckCircle2,
  Clock,
  ChevronDown,
  ChevronRight,
  Plus,
  BarChart3,
  CalendarClock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Sample data for charts and tables
const monthlyEarnings = [
  { month: 'Jan', earnings: 8500 },
  { month: 'Feb', earnings: 9200 },
  { month: 'Mar', earnings: 8900 },
  { month: 'Apr', earnings: 10400 },
  { month: 'May', earnings: 11500 },
  { month: 'Jun', earnings: 12000 },
  { month: 'Jul', earnings: 11700 },
  { month: 'Aug', earnings: 10500 },
  { month: 'Sep', earnings: 9800 },
  { month: 'Oct', earnings: 10200 },
  { month: 'Nov', earnings: 10800 },
  { month: 'Dec', earnings: 11000 },
];

const weeklyEarnings = [
  { day: 'Mon', earnings: 1200 },
  { day: 'Tue', earnings: 1400 },
  { day: 'Wed', earnings: 1100 },
  { day: 'Thu', earnings: 1800 },
  { day: 'Fri', earnings: 2100 },
  { day: 'Sat', earnings: 1300 },
  { day: 'Sun', earnings: 900 },
];

const serviceEarnings = [
  { name: 'Plumbing', earnings: 35000 },
  { name: 'Electrical', earnings: 28000 },
  { name: 'Landscaping', earnings: 18000 },
  { name: 'Renovation', earnings: 13500 },
];

const pendingPayments = [
  { 
    id: 1, 
    client: 'John Smith', 
    service: 'Kitchen Renovation', 
    amount: 2500, 
    dueDate: '2025-04-25' 
  },
  { 
    id: 2, 
    client: 'Emma Johnson', 
    service: 'Bathroom Remodel', 
    amount: 1800, 
    dueDate: '2025-04-29' 
  },
  { 
    id: 3, 
    client: 'Michael Brown', 
    service: 'Landscaping Project', 
    amount: 900, 
    dueDate: '2025-05-02' 
  },
];

const transactionHistory = [
  {
    id: 1,
    client: 'Sarah Wilson',
    service: 'Electrical Rewiring',
    amount: 1250,
    date: '2025-04-15',
    paymentMethod: 'credit_card',
    status: 'completed'
  },
  {
    id: 2,
    client: 'Robert Taylor',
    service: 'Plumbing Service',
    amount: 850,
    date: '2025-04-12',
    paymentMethod: 'bank_transfer',
    status: 'processing'
  },
  {
    id: 3,
    client: 'Jennifer Davis',
    service: 'Kitchen Renovation',
    amount: 3200,
    date: '2025-04-10',
    paymentMethod: 'credit_card',
    status: 'completed'
  },
  {
    id: 4,
    client: 'David Clark',
    service: 'Roof Repair',
    amount: 1800,
    date: '2025-04-08',
    paymentMethod: 'bank_transfer',
    status: 'pending'
  },
  {
    id: 5,
    client: 'Amanda Lopez',
    service: 'Yard Cleanup',
    amount: 550,
    date: '2025-04-05',
    paymentMethod: 'credit_card',
    status: 'completed'
  }
];

const Money = () => {
  const [timeFrame, setTimeFrame] = useState("monthly");
  
  const totalEarnings = 94500;
  const projectedEarnings = 120000;
  const percentToTarget = (totalEarnings / projectedEarnings) * 100;
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-anthracite flex items-center gap-3">
          <DollarSign className="h-8 w-8 text-yellow-600" />
          Money Management
        </h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Apr 1 - Apr 18, 2025</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="flex items-center gap-1">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
          <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
            <Plus className="h-4 w-4 mr-2" />
            <span>Create Invoice</span>
          </Button>
        </div>
      </div>
      
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
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                {timeFrame === 'monthly' ? (
                  <AreaChart data={monthlyEarnings}>
                    <defs>
                      <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#fbbf24" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                    <YAxis 
                      tickFormatter={(value) => `$${value}`}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip 
                      formatter={(value) => [`$${value}`, 'Earnings']}
                      contentStyle={{ background: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="earnings" 
                      stroke="#f59e0b" 
                      fillOpacity={1} 
                      fill="url(#colorEarnings)" 
                      strokeWidth={2}
                    />
                  </AreaChart>
                ) : (
                  <BarChart data={weeklyEarnings}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                    <YAxis 
                      tickFormatter={(value) => `$${value}`}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip 
                      formatter={(value) => [`$${value}`, 'Earnings']}
                      contentStyle={{ background: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}
                    />
                    <Bar dataKey="earnings" fill="#fbbf24" radius={[4, 4, 0, 0]} />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Annual Target</CardTitle>
            <CardDescription>Progress towards your annual goal</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-center">
              <div className="relative h-40 w-40 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#e5e7eb"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#fbbf24"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 * percentToTarget) / 100}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold">${(totalEarnings / 1000).toFixed(1)}k</span>
                  <span className="text-xs text-gray-500">of ${(projectedEarnings / 1000).toFixed(0)}k goal</span>
                </div>
              </div>
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
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-yellow-950">
              <BarChart3 className="mr-2 h-4 w-4" />
              View Detailed Report
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
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={serviceEarnings}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" tickFormatter={(value) => `$${value / 1000}k`} />
                  <YAxis 
                    type="category" 
                    dataKey="name" 
                    tick={{ fontSize: 12 }}
                    width={80}
                  />
                  <Tooltip 
                    formatter={(value) => [`$${value.toLocaleString()}`, 'Earnings']}
                    contentStyle={{ background: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}
                  />
                  <Bar dataKey="earnings" fill="#fbbf24" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Pending Payments</CardTitle>
            <CardDescription>Upcoming payments from clients</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingPayments.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-4 bg-yellow-50/50 border border-yellow-100 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <CalendarClock className="h-5 w-5 text-yellow-700" />
                    </div>
                    <div>
                      <p className="font-medium">{payment.client}</p>
                      <p className="text-sm text-gray-600">{payment.service}</p>
                      <div className="flex items-center mt-1">
                        <Clock className="h-3.5 w-3.5 text-yellow-600 mr-1" />
                        <p className="text-xs text-yellow-600">Due on {new Date(payment.dueDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${payment.amount.toLocaleString()}</p>
                    <Button size="sm" className="mt-1 bg-yellow-600 hover:bg-yellow-700 h-8 text-white">
                      Send Reminder
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm text-muted-foreground">
              Total pending: <span className="font-medium">${pendingPayments.reduce((sum, payment) => sum + payment.amount, 0).toLocaleString()}</span>
            </p>
            <Button variant="outline">View All</Button>
          </CardFooter>
        </Card>
      </div>
      
      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your recent payment history and status</CardDescription>
            </div>
            <Button variant="outline" className="text-sm">
              View All Transactions
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border bg-white overflow-hidden">
            <table className="w-full">
              <thead className="bg-yellow-50 text-sm">
                <tr>
                  <th className="py-3 px-4 text-left font-medium">Client & Service</th>
                  <th className="py-3 px-4 text-left font-medium">Amount</th>
                  <th className="py-3 px-4 text-left font-medium hidden md:table-cell">Date</th>
                  <th className="py-3 px-4 text-left font-medium hidden lg:table-cell">Payment Method</th>
                  <th className="py-3 px-4 text-left font-medium">Status</th>
                  <th className="py-3 px-4 text-center font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {transactionHistory.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-yellow-50/30">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9 border-2 border-yellow-200 hidden sm:flex">
                          <AvatarFallback className="bg-yellow-100 text-yellow-800">
                            {transaction.client.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{transaction.client}</p>
                          <p className="text-xs text-gray-600">{transaction.service}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-semibold">${transaction.amount.toLocaleString()}</td>
                    <td className="py-3 px-4 hidden md:table-cell text-gray-600 text-sm">
                      {new Date(transaction.date).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 hidden lg:table-cell">
                      <div className="flex items-center">
                        {transaction.paymentMethod === 'credit_card' ? (
                          <>
                            <CreditCard className="h-4 w-4 mr-1.5 text-gray-600" />
                            <span className="text-sm">Credit Card</span>
                          </>
                        ) : (
                          <>
                            <BanknoteIcon className="h-4 w-4 mr-1.5 text-gray-600" />
                            <span className="text-sm">Bank Transfer</span>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge className={
                        transaction.status === 'completed' ? 'bg-green-100 text-green-800 hover:bg-green-200' : 
                        transaction.status === 'processing' ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' :
                        'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                      }>
                        {transaction.status === 'completed' ? (
                          <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                        ) : transaction.status === 'processing' ? (
                          <Clock className="h-3.5 w-3.5 mr-1" />
                        ) : (
                          <AlertCircle className="h-3.5 w-3.5 mr-1" />
                        )}
                        <span>{transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}</span>
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                          <ReceiptText className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 p-0 flex items-center">
                          <span className="text-xs">Details</span>
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
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

export default Money;
