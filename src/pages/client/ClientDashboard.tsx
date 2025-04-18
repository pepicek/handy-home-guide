
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  ChevronRight, 
  ClipboardCheck, 
  DollarSign, 
  FileText, 
  Heart, 
  Search,
  Star, 
  UserCheck,
  ArrowRight,
  Clock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ClientDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-anthracite">Welcome, Jane!</h1>
        <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
          Find New Service Providers
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Active Projects"
          value="3"
          icon={<ClipboardCheck className="h-5 w-5" />}
          linkTo="/client/projects"
        />
        <StatCard 
          title="Saved Providers"
          value="8"
          icon={<Heart className="h-5 w-5" />}
          linkTo="/client/saved-providers"
        />
        <StatCard 
          title="Pending Quotes"
          value="4"
          icon={<FileText className="h-5 w-5" />}
          linkTo="/client/quote-requests"
        />
        <StatCard 
          title="Total Spent"
          value="$2,450"
          icon={<DollarSign className="h-5 w-5" />}
          linkTo="/client/financial"
        />
      </div>

      <Tabs defaultValue="projects" className="space-y-4">
        <TabsList className="bg-yellow-100/50">
          <TabsTrigger value="projects">Current Projects</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Appointments</TabsTrigger>
          <TabsTrigger value="recent">Recent Providers</TabsTrigger>
        </TabsList>
        
        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Active Projects</CardTitle>
              <CardDescription>
                Your ongoing renovation and service projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProjectsList />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">View All Projects</Button>
              <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
                Create New Project
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Appointments</CardTitle>
              <CardDescription>
                Services scheduled in the next 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AppointmentsList />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View Full Calendar</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="recent">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recently Viewed Providers</CardTitle>
              <CardDescription>
                Service providers you recently checked out
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentProvidersList />
            </CardContent>
            <CardFooter>
              <Button className="w-full">Browse More Providers</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Latest Quote Requests</CardTitle>
            <CardDescription>
              Status of your recent service quote requests
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead>Provider</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Bathroom Remodel</TableCell>
                  <TableCell>Elite Home Renovations</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Received</Badge>
                  </TableCell>
                  <TableCell>2 days ago</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Lawn Maintenance</TableCell>
                  <TableCell>Green Gardens Pro</TableCell>
                  <TableCell>
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Pending</Badge>
                  </TableCell>
                  <TableCell>3 days ago</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Kitchen Cabinets</TableCell>
                  <TableCell>Custom Cabinetry Co.</TableCell>
                  <TableCell>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Drafting</Badge>
                  </TableCell>
                  <TableCell>5 days ago</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View All Quotes</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Activity</CardTitle>
            <CardDescription>
              Your latest interactions on YelloPago
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ActivityItem 
              description="You saved 'Premier Plumbing Solutions' to your providers list"
              time="2 hours ago"
              icon={Heart}
            />
            <ActivityItem 
              description="You submitted a review for 'Artistic Painting Services'"
              time="Yesterday"
              icon={Star}
            />
            <ActivityItem 
              description="You scheduled an appointment with 'Quick Fix Electricians'"
              time="2 days ago"
              icon={Calendar}
            />
            <ActivityItem 
              description="You searched for 'HVAC repair services near me'"
              time="3 days ago"
              icon={Search}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, linkTo }) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
          </div>
          <div className="p-2 bg-yellow-100 rounded-full text-yellow-700">
            {icon}
          </div>
        </div>
        <Button variant="link" className="p-0 h-auto text-yellow-700" asChild>
          <a href={linkTo} className="flex items-center text-sm">
            View Details <ArrowRight className="ml-1 h-3 w-3" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

const ProjectsList = () => {
  const projects = [
    {
      id: 1,
      title: "Home Renovation",
      status: "In Progress",
      progress: 65,
      providers: 3,
      budget: "$12,000",
      spent: "$7,800",
    },
    {
      id: 2,
      title: "Garden Landscaping",
      status: "Starting Soon",
      progress: 10,
      providers: 1,
      budget: "$4,500",
      spent: "$450",
    },
    {
      id: 3,
      title: "Bathroom Remodel",
      status: "Planning",
      progress: 25,
      providers: 2,
      budget: "$8,000",
      spent: "$2,000",
    }
  ];
  
  return (
    <div className="space-y-4">
      {projects.map(project => (
        <div key={project.id} className="border rounded-lg overflow-hidden bg-white">
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">{project.title}</h3>
                <div className="text-sm text-gray-500">
                  {project.providers} providers • Budget: {project.budget}
                </div>
              </div>
              <Badge className={`
                ${project.status === 'In Progress' ? 'bg-green-100 text-green-800' : 
                  project.status === 'Starting Soon' ? 'bg-blue-100 text-blue-800' : 
                  'bg-yellow-100 text-yellow-800'}
              `}>
                {project.status}
              </Badge>
            </div>
            
            <div className="space-y-2 mt-4">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span className="font-medium">{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-2" />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Spent: {project.spent}</span>
                <span>Budget: {project.budget}</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-2 border-t">
            <Button variant="link" className="p-0 h-auto text-yellow-700" asChild>
              <a href={`/client/projects/${project.id}`} className="flex items-center text-sm">
                View Project Details <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

const AppointmentsList = () => {
  const appointments = [
    {
      id: 1,
      provider: "Elite Home Renovations",
      service: "Kitchen Measurement",
      date: "Tomorrow, 10:00 AM",
      avatar: "EH"
    },
    {
      id: 2,
      provider: "Green Gardens Pro",
      service: "Lawn Treatment",
      date: "Apr 25, 2:30 PM",
      avatar: "GG"
    },
    {
      id: 3,
      provider: "Quick Fix Electricians",
      service: "Wiring Inspection",
      date: "Apr 27, 9:00 AM",
      avatar: "QF"
    }
  ];
  
  return (
    <div className="space-y-4">
      {appointments.map(appointment => (
        <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-md bg-white">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-yellow-200">
              <AvatarFallback className="bg-yellow-100 text-yellow-800">{appointment.avatar}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{appointment.provider}</p>
              <p className="text-sm text-gray-500">{appointment.service}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-right text-sm">
              <div className="flex items-center text-gray-500">
                <Calendar className="h-3 w-3 mr-1" />
                {appointment.date}
              </div>
            </div>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Calendar className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

const RecentProvidersList = () => {
  const providers = [
    {
      id: 1,
      name: "Elite Home Renovations",
      category: "General Contractor",
      rating: 4.8,
      reviews: 124,
      avatar: "EH"
    },
    {
      id: 2,
      name: "Green Gardens Pro",
      category: "Landscaping",
      rating: 4.6,
      reviews: 89,
      avatar: "GG"
    },
    {
      id: 3,
      name: "Premier Plumbing Solutions",
      category: "Plumbing",
      rating: 4.9,
      reviews: 203,
      avatar: "PP"
    }
  ];
  
  return (
    <div className="space-y-4">
      {providers.map(provider => (
        <div key={provider.id} className="flex items-center justify-between p-4 border rounded-md bg-white">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-yellow-200">
              <AvatarFallback className="bg-yellow-100 text-yellow-800">{provider.avatar}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{provider.name}</p>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <span>{provider.category}</span>
                <span className="mx-2">•</span>
                <div className="flex items-center">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                  <span>{provider.rating} ({provider.reviews})</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="h-8">
              <Heart className="h-3 w-3 mr-1" />
              Save
            </Button>
            <Button size="sm" className="h-8 bg-yellow-500 hover:bg-yellow-600 text-anthracite">
              View
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

const ActivityItem = ({ description, time, icon: Icon }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 bg-yellow-100 rounded-full text-yellow-700 mt-0.5">
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1">
        <p className="text-sm">{description}</p>
        <div className="flex items-center text-xs text-gray-500 mt-1">
          <Clock className="h-3 w-3 mr-1" />
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
