
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, ArrowRight, Target } from "lucide-react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  PieChart,
  Pie,
  Cell
} from "recharts";

// Sample data for demonstration
const monthlyData = [
  { month: 'Jan', earnings: 3200, target: 5000 },
  { month: 'Feb', earnings: 4100, target: 5000 },
  { month: 'Mar', earnings: 3800, target: 5000 },
  { month: 'Apr', earnings: 4700, target: 5000 },
  { month: 'May', earnings: 5200, target: 5000 },
  { month: 'Jun', earnings: 4800, target: 5000 },
  { month: 'Jul', earnings: 6100, target: 5500 },
  { month: 'Aug', earnings: 5900, target: 5500 },
  { month: 'Sep', earnings: 6800, target: 5500 },
  { month: 'Oct', earnings: 6200, target: 6000 },
  { month: 'Nov', earnings: 7100, target: 6000 },
  { month: 'Dec', earnings: 7800, target: 6000 }
];

const quarterlyData = [
  { name: 'Q1', earnings: 11100, target: 15000 },
  { name: 'Q2', earnings: 14700, target: 15000 },
  { name: 'Q3', earnings: 18800, target: 16500 },
  { name: 'Q4', earnings: 21100, target: 18000 }
];

const categoryData = [
  { name: 'Interior Painting', value: 24500 },
  { name: 'Kitchen Renovation', value: 18700 },
  { name: 'Bathroom Remodeling', value: 15200 },
  { name: 'Flooring', value: 9800 },
  { name: 'Other Services', value: 26800 }
];

const COLORS = ['#fbbf24', '#f59e0b', '#d97706', '#b45309', '#92400e'];

const AnnualTarget = () => {
  const currentEarnings = 65000;
  const annualTarget = 100000;
  const percentComplete = (currentEarnings / annualTarget) * 100;
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-anthracite">Annual Target Report</h1>
          <p className="text-gray-500">Detailed breakdown of your progress toward annual goals</p>
        </div>
        <div className="flex gap-2">
          <Button 
            asChild
            variant="outline"
          >
            <Link to="/dashboard/earnings">
              Back to Earnings
            </Link>
          </Button>
          <Button 
            asChild 
            className="bg-yellow-500 hover:bg-yellow-600 text-yellow-950"
          >
            <Link to="/dashboard/targets/settings">
              <Target className="mr-1 h-4 w-4" />
              Manage Targets
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Summary Card */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Annual Progress</CardTitle>
          <CardDescription>Your progress toward the annual earnings target</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Progress: {percentComplete.toFixed(1)}%</span>
            <span className="text-sm text-gray-600">${currentEarnings.toLocaleString()} of ${annualTarget.toLocaleString()}</span>
          </div>
          <div className="h-4 bg-gray-100 rounded-md overflow-hidden">
            <div 
              className="h-full bg-yellow-400 rounded-md"
              style={{ width: `${percentComplete}%` }}
            ></div>
          </div>
          
          <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-yellow-50 p-4 rounded-md">
              <p className="text-sm font-medium text-yellow-800">Current Monthly Average</p>
              <p className="text-2xl font-bold text-yellow-700">${(currentEarnings / 4).toLocaleString()}</p>
              <p className="text-xs text-yellow-600">Per month this year</p>
            </div>
            <div className="bg-green-50 p-4 rounded-md">
              <p className="text-sm font-medium text-green-800">Required Monthly Average</p>
              <p className="text-2xl font-bold text-green-700">${(annualTarget / 12).toLocaleString()}</p>
              <p className="text-xs text-green-600">To meet annual target</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="text-sm font-medium text-blue-800">Projected Year-End</p>
              <p className="text-2xl font-bold text-blue-700">${(currentEarnings * 3).toLocaleString()}</p>
              <p className="text-xs text-blue-600">Based on current pace</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Monthly Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Performance</CardTitle>
          <CardDescription>Earnings compared to monthly targets</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
              <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Amount']} />
              <Legend />
              <Bar dataKey="earnings" name="Actual Earnings" fill="#fbbf24" />
              <Bar dataKey="target" name="Target" fill="#e5e7eb" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      {/* Quarterly Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quarterly Analysis</CardTitle>
            <CardDescription>Performance by quarter</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={quarterlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Amount']} />
                <Legend />
                <Line type="monotone" dataKey="earnings" name="Earnings" stroke="#fbbf24" strokeWidth={2} />
                <Line type="monotone" dataKey="target" name="Target" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" />
                <ReferenceLine y={annualTarget / 4} label="Quarterly Goal" stroke="#064e3b" strokeDasharray="3 3" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        {/* Category Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Service Distribution</CardTitle>
            <CardDescription>Earnings by service category</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Recommendations</CardTitle>
          <CardDescription>Suggestions to help you reach your targets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg">
              <div className="mt-0.5">
                <Target className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-medium">Increase Kitchen Renovation Services</h4>
                <p className="text-sm text-gray-600">Kitchen renovations have a higher profit margin. Focusing on this service could increase overall earnings by 15%.</p>
                <Button variant="link" className="text-yellow-600 p-0 h-auto mt-1">
                  View promotion ideas <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
              <div className="mt-0.5">
                <BarChart3 className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium">October-December Strategy</h4>
                <p className="text-sm text-gray-600">You'll need to average $11,700 per month in Q4 to reach your annual target. Consider seasonal promotions.</p>
                <Button variant="link" className="text-green-600 p-0 h-auto mt-1">
                  Develop Q4 strategy <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnnualTarget;
