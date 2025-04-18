
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  LineChart, Line, ResponsiveContainer, PieChart, Pie, Cell, Area, AreaChart
} from "recharts";
import { 
  CalendarIcon, 
  Download, 
  Share2, 
  Printer, 
  ArrowUp, 
  ArrowDown,
  Users,
  Calendar,
  DollarSign,
  Star,
  BarChart3
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample data for analytics charts
const monthlyRevenueData = [
  { month: 'Jan', revenue: 2400 },
  { month: 'Feb', revenue: 3600 },
  { month: 'Mar', revenue: 2800 },
  { month: 'Apr', revenue: 4200 },
  { month: 'May', revenue: 5000 },
  { month: 'Jun', revenue: 3800 },
  { month: 'Jul', revenue: 4300 },
  { month: 'Aug', revenue: 5200 },
  { month: 'Sep', revenue: 4100 },
  { month: 'Oct', revenue: 3500 },
  { month: 'Nov', revenue: 4600 },
  { month: 'Dec', revenue: 5800 }
];

const weeklyAppointmentsData = [
  { day: 'Mon', appointments: 4 },
  { day: 'Tue', appointments: 7 },
  { day: 'Wed', appointments: 5 },
  { day: 'Thu', appointments: 8 },
  { day: 'Fri', appointments: 9 },
  { day: 'Sat', appointments: 11 },
  { day: 'Sun', appointments: 2 }
];

const serviceDistributionData = [
  { name: 'Interior Painting', value: 35 },
  { name: 'Kitchen Renovation', value: 20 },
  { name: 'Bathroom Remodeling', value: 15 },
  { name: 'Flooring', value: 10 },
  { name: 'Other Services', value: 20 }
];

const clientGrowthData = [
  { month: 'Jan', clients: 10 },
  { month: 'Feb', clients: 15 },
  { month: 'Mar', clients: 18 },
  { month: 'Apr', clients: 25 },
  { month: 'May', clients: 32 },
  { month: 'Jun', clients: 38 },
  { month: 'Jul', clients: 42 },
  { month: 'Aug', clients: 45 },
  { month: 'Sep', clients: 50 },
  { month: 'Oct', clients: 58 },
  { month: 'Nov', clients: 65 },
  { month: 'Dec', clients: 75 }
];

const COLORS = ['#ffb347', '#ff8c66', '#ffcc33', '#ffd700', '#ffa500'];

const Analytics = () => {
  const [timeFrame, setTimeFrame] = useState("this-month");
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-anthracite">Analytics Dashboard</h1>
        <div className="flex items-center gap-2">
          <Select defaultValue="this-month" onValueChange={setTimeFrame}>
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Select time frame" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Time Frame</SelectLabel>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="last-month">Last Month</SelectItem>
                <SelectItem value="last-quarter">Last Quarter</SelectItem>
                <SelectItem value="this-year">This Year</SelectItem>
                <SelectItem value="all-time">All Time</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex gap-1 items-center">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
          <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
            <Share2 className="h-4 w-4 mr-2" />
            <span>Share Report</span>
          </Button>
        </div>
      </div>
      
      {/* Overview Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Bookings"
          value="287"
          change="+12.5%"
          trend="up"
          icon={<Calendar className="h-5 w-5" />}
          iconBg="bg-blue-100"
          iconColor="text-blue-600"
        />
        <StatCard 
          title="Total Revenue"
          value="$42,854"
          change="+18.2%"
          trend="up"
          icon={<DollarSign className="h-5 w-5" />}
          iconBg="bg-green-100"
          iconColor="text-green-600"
        />
        <StatCard 
          title="Active Clients"
          value="124"
          change="+5.3%"
          trend="up"
          icon={<Users className="h-5 w-5" />}
          iconBg="bg-orange-100"
          iconColor="text-orange-600"
        />
        <StatCard 
          title="Average Rating"
          value="4.87"
          change="+0.2"
          trend="up"
          icon={<Star className="h-5 w-5" />}
          iconBg="bg-purple-100"
          iconColor="text-purple-600"
        />
      </div>
      
      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
            <CardDescription>Overview of your monthly revenue performance</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={monthlyRevenueData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [`$${value}`, 'Revenue']}
                  contentStyle={{ background: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  fill="url(#colorRevenue)" 
                  stroke="#fbbf24" 
                  strokeWidth={2} 
                />
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#fbbf24" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Weekly Appointments</CardTitle>
            <CardDescription>Number of appointments per day this week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={weeklyAppointmentsData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip
                  formatter={(value) => [value, 'Appointments']}
                  contentStyle={{ background: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}
                />
                <Bar dataKey="appointments" fill="#fbbf24" barSize={30} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Service Distribution</CardTitle>
            <CardDescription>Breakdown of services booked</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={serviceDistributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {serviceDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Percentage']}
                    contentStyle={{ background: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Client Growth</CardTitle>
            <CardDescription>Monthly client acquisition</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={clientGrowthData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [value, 'Clients']}
                  contentStyle={{ background: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}
                />
                <Line type="monotone" dataKey="clients" stroke="#fbbf24" strokeWidth={2} dot={{ fill: '#fbbf24', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Top Services</CardTitle>
            <CardDescription>Services with highest revenue</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <RankingItem
                rank="1"
                name="Interior Painting"
                value="$15,234"
                percentage={35}
                color="bg-yellow-500"
              />
              <RankingItem
                rank="2"
                name="Kitchen Renovation"
                value="$9,876"
                percentage={20}
                color="bg-orange-500"
              />
              <RankingItem
                rank="3"
                name="Bathroom Remodeling"
                value="$5,432"
                percentage={15}
                color="bg-amber-500"
              />
              <RankingItem
                rank="4"
                name="Flooring Installation"
                value="$4,321"
                percentage={10}
                color="bg-yellow-300"
              />
              <RankingItem
                rank="5"
                name="Electrical Services"
                value="$3,567"
                percentage={8}
                color="bg-yellow-200"
              />
            </div>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-2">
          <Tabs defaultValue="performance" className="h-full flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Performance Insights</CardTitle>
                <TabsList>
                  <TabsTrigger value="performance">Performance</TabsTrigger>
                  <TabsTrigger value="clients">Clients</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-0 pl-6">
              <TabsContent value="performance" className="mt-0 h-full">
                <InsightBlock 
                  title="Peak Performance Hours"
                  description="Most of your bookings occur between 9 AM and 11 AM. Consider optimizing availability during these hours."
                />
                <InsightBlock 
                  title="Service Opportunity"
                  description="Kitchen renovation services have seen a 25% increase in demand. Consider expanding this service offering."
                />
                <InsightBlock 
                  title="Booking Pattern"
                  description="Clients typically book 7-10 days in advance. Offering last-minute availability slots could increase bookings."
                />
              </TabsContent>
              <TabsContent value="clients" className="mt-0">
                <InsightBlock 
                  title="Client Demographics"
                  description="Your most active clients are between 35-45 years of age, and are mostly homeowners."
                />
                <InsightBlock 
                  title="Retention Rate"
                  description="Your client retention rate is 76%, which is 15% above the industry average."
                />
                <InsightBlock 
                  title="Referral Source"
                  description="62% of new clients come from referrals. Consider implementing a referral reward program."
                />
              </TabsContent>
              <TabsContent value="reviews" className="mt-0">
                <InsightBlock 
                  title="Review Sentiment"
                  description="Client reviews are overwhelmingly positive, with 'professionalism' and 'quality' as the most mentioned terms."
                />
                <InsightBlock 
                  title="Rating Improvement"
                  description="Your average rating has improved by 0.2 points in the last quarter. Keep up the good work!"
                />
                <InsightBlock 
                  title="Response Rate"
                  description="You respond to 98% of reviews. This high engagement rate positively impacts your visibility."
                />
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change, trend, icon, iconBg, iconColor }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            <div className="flex items-center mt-1">
              {trend === "up" ? (
                <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
              ) : (
                <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
              )}
              <span className={`text-xs ${trend === "up" ? "text-green-500" : "text-red-500"}`}>
                {change} from previous period
              </span>
            </div>
          </div>
          <div className={`p-3 rounded-full ${iconBg}`}>
            {React.cloneElement(icon, { className: `${iconColor}` })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const RankingItem = ({ rank, name, value, percentage, color }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="bg-gray-100 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
            {rank}
          </span>
          <span className="font-medium">{name}</span>
        </div>
        <span className="text-sm font-semibold">{value}</span>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const InsightBlock = ({ title, description }) => {
  return (
    <div className="border-l-4 border-yellow-400 pl-4 py-3 mb-4 pr-6">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
};

export default Analytics;
