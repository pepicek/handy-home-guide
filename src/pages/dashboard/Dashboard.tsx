import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { 
  AlertCircle, 
  Calendar, 
  CheckCircle, 
  ChevronRight, 
  ClipboardList, 
  DollarSign, 
  Star, 
  Sparkles, 
  TrendingUp, 
  Users, 
  BarChart3, 
  UserCheck 
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-anthracite">Dashboard</h1>
        <Button 
          className="bg-anthracite hover:bg-anthracite/90 text-yellow-400"
          onClick={() => navigate("/dashboard/services")}
        >
          + Add New Service
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard 
          title="Total Bookings"
          value="124"
          trend="+12% from last month"
          icon={<Calendar className="h-5 w-5" />}
          trendUp={true}
        />
        <DashboardCard 
          title="Active Clients"
          value="85"
          trend="+5% from last month"
          icon={<Users className="h-5 w-5" />}
          trendUp={true}
        />
        <DashboardCard 
          title="Total Revenue"
          value="$12,456"
          trend="+18% from last month"
          icon={<DollarSign className="h-5 w-5" />}
          trendUp={true}
        />
        <DashboardCard 
          title="Rating"
          value="4.8/5"
          trend="Based on 56 reviews"
          icon={<Star className="h-5 w-5" />}
          showTrendIcon={false}
        />
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList className="bg-gray-100">
          <TabsTrigger value="upcoming">Upcoming Appointments</TabsTrigger>
          <TabsTrigger value="recent">Recent Activities</TabsTrigger>
          <TabsTrigger value="messages">New Messages</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Appointments</CardTitle>
              <CardDescription>
                Manage your upcoming appointments for the next 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AppointmentsList />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="outline"
                onClick={() => navigate("/dashboard/appointments")}
              >
                View Calendar
              </Button>
              <Button 
                className="bg-anthracite hover:bg-anthracite/90 text-yellow-400"
                onClick={() => navigate("/dashboard/appointments")}
              >
                Manage Appointments
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="recent">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Activities</CardTitle>
              <CardDescription>
                Your account activities in the last 30 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentActivitiesList />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="messages">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">New Messages</CardTitle>
              <CardDescription>
                You have 3 unread messages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MessagesList />
            </CardContent>
            <CardFooter>
              <Button className="w-full">View All Messages</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Performance Analytics</CardTitle>
            <CardDescription>
              How your business is performing this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[240px] flex items-center justify-center border rounded-md bg-gray-50">
              <BarChart3 className="h-24 w-24 text-gray-300" />
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => navigate("/dashboard/analytics")}
            >
              View Detailed Analytics
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Profile Completion</CardTitle>
            <CardDescription>
              Complete your profile to attract more clients
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Profile completion</span>
                <span className="font-medium">75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            
            <div className="space-y-4">
              <ProfileTask title="Add profile picture" completed={true} />
              <ProfileTask title="Complete service descriptions" completed={true} />
              <ProfileTask title="Add business hours" completed={true} />
              <ProfileTask title="Add portfolio items" completed={false} />
              <ProfileTask title="Request reviews from past clients" completed={false} />
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full"
              onClick={() => navigate("/dashboard/settings")}
            >
              Complete Your Profile
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

const DashboardCard = ({ 
  title, 
  value, 
  trend, 
  icon, 
  trendUp = false, 
  showTrendIcon = true 
}) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
          </div>
          <div className="p-2 bg-gray-100 rounded-full">
            {icon}
          </div>
        </div>
        <div className="flex items-center gap-1 mt-2">
          {showTrendIcon && (
            trendUp ? 
            <TrendingUp className="text-green-500 h-4 w-4" /> : 
            <TrendingUp className="text-red-500 h-4 w-4 transform rotate-180" />
          )}
          <p className={`text-xs ${trendUp ? 'text-green-500' : 'text-gray-500'}`}>
            {trend}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

const AppointmentsList = () => {
  const appointments = [
    {
      id: 1,
      client: "Sarah Johnson",
      service: "Interior Painting",
      date: "Today, 2:00 PM",
      status: "confirmed"
    },
    {
      id: 2,
      client: "Mark Wilson",
      service: "Kitchen Renovation Consultation",
      date: "Tomorrow, 10:00 AM",
      status: "pending"
    },
    {
      id: 3,
      client: "Emily Davis",
      service: "Bathroom Tile Installation",
      date: "Apr 20, 9:30 AM",
      status: "confirmed"
    }
  ];
  
  return (
    <div className="space-y-4">
      {appointments.map(appointment => (
        <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-md bg-white">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
              <UserCheck className="h-5 w-5 text-anthracite" />
            </div>
            <div>
              <p className="font-medium">{appointment.client}</p>
              <p className="text-sm text-gray-500">{appointment.service}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm">{appointment.date}</p>
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
              appointment.status === "confirmed" 
                ? "bg-green-100 text-green-800" 
                : "bg-yellow-100 text-yellow-800"
            }`}>
              {appointment.status === "confirmed" ? "Confirmed" : "Pending"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

const RecentActivitiesList = () => {
  const activities = [
    {
      id: 1,
      description: "New booking from Sarah Johnson",
      time: "Today, 10:30 AM"
    },
    {
      id: 2,
      description: "Review submitted by Mark Wilson",
      time: "Yesterday, 3:15 PM"
    },
    {
      id: 3,
      description: "Payment received for Kitchen Renovation",
      time: "Apr 16, 2:45 PM"
    },
    {
      id: 4,
      description: "Updated service description for Bathroom Remodeling",
      time: "Apr 15, 9:20 AM"
    }
  ];
  
  return (
    <div className="space-y-4">
      {activities.map(activity => (
        <div key={activity.id} className="flex justify-between items-center p-3 border-b last:border-0">
          <p className="text-sm">{activity.description}</p>
          <p className="text-xs text-gray-500">{activity.time}</p>
        </div>
      ))}
    </div>
  );
};

const MessagesList = () => {
  const messages = [
    {
      id: 1,
      sender: "Emily Davis",
      preview: "Hi, I wanted to ask about the quote you provided...",
      time: "10:30 AM",
      unread: true
    },
    {
      id: 2,
      sender: "John Smith",
      preview: "Can we reschedule our appointment for next week?",
      time: "Yesterday",
      unread: true
    },
    {
      id: 3,
      sender: "Lisa Brown",
      preview: "Thanks for the great work on my kitchen!",
      time: "Apr 16",
      unread: true
    }
  ];
  
  return (
    <div className="space-y-4">
      {messages.map(message => (
        <div key={message.id} className={`flex items-center gap-3 p-3 border rounded-md ${message.unread ? 'bg-yellow-50' : 'bg-white'}`}>
          <Avatar className="h-10 w-10">
            <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="font-medium">{message.sender}</p>
              <p className="text-xs text-gray-500">{message.time}</p>
            </div>
            <p className="text-sm text-gray-600 truncate">{message.preview}</p>
          </div>
          {message.unread && (
            <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
          )}
        </div>
      ))}
    </div>
  );
};

const ProfileTask = ({ title, completed }) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`h-5 w-5 rounded-full flex items-center justify-center ${
        completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
      }`}>
        {completed ? "✓" : ""}
      </div>
      <span className={`text-sm ${completed ? 'line-through text-gray-500' : ''}`}>{title}</span>
    </div>
  );
};

export default Dashboard;
