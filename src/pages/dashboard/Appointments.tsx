
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Calendar, ChevronLeft, ChevronRight, Filter, Clock, MapPin, MessageSquare, Phone, UserCheck, CalendarCheck } from "lucide-react";

const Appointments = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-anthracite">Appointments</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
            + Add Appointment
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="space-y-1">
            <CardTitle className="text-lg">Calendar View</CardTitle>
            <CardDescription>View and manage your scheduled appointments</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <p className="text-sm font-medium">April 2025</p>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] border rounded-md flex items-center justify-center">
            <div className="text-center">
              <CalendarCheck className="mx-auto h-12 w-12 text-gray-300" />
              <p className="mt-2 text-sm text-gray-500">Calendar view will be displayed here</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input type="search" placeholder="Search appointments..." className="pl-9" />
        </div>
        <Button variant="outline">
          <Calendar className="mr-2 h-4 w-4" />
          Today
        </Button>
        <Button variant="outline">
          <Clock className="mr-2 h-4 w-4" />
          Upcoming
        </Button>
      </div>
      
      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList className="bg-gray-100">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
          <TabsTrigger value="canceled">Canceled</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Appointments</CardTitle>
              <CardDescription>Manage your scheduled appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {upcomingAppointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>{appointment.client.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{appointment.client.name}</p>
                            <p className="text-xs text-gray-500">{appointment.client.phone}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{appointment.service}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <div>
                            <p>{appointment.date}</p>
                            <p className="text-xs text-gray-500">{appointment.time}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span>{appointment.location}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={
                          appointment.status === 'Confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }>
                          {appointment.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Phone className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            Details
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="past">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Past Appointments</CardTitle>
              <CardDescription>View your completed appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pastAppointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>{appointment.client.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{appointment.client.name}</p>
                            <p className="text-xs text-gray-500">{appointment.client.phone}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{appointment.service}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <div>
                            <p>{appointment.date}</p>
                            <p className="text-xs text-gray-500">{appointment.time}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span>{appointment.location}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={
                          appointment.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }>
                          {appointment.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="canceled">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Canceled Appointments</CardTitle>
              <CardDescription>View canceled or rescheduled appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center h-40 border-2 border-dashed rounded-lg">
                <UserCheck className="h-10 w-10 text-gray-300" />
                <p className="mt-2 text-gray-500">No canceled appointments</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const upcomingAppointments = [
  {
    id: 1,
    client: {
      name: "Emily Davis",
      phone: "(555) 123-4567"
    },
    service: "Interior Painting",
    date: "Apr 20, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "123 Main St, Brooklyn",
    status: "Confirmed"
  },
  {
    id: 2,
    client: {
      name: "Michael Johnson",
      phone: "(555) 987-6543"
    },
    service: "Kitchen Renovation Consultation",
    date: "Apr 21, 2025",
    time: "3:30 PM - 5:00 PM",
    location: "456 Park Ave, Manhattan",
    status: "Pending"
  },
  {
    id: 3,
    client: {
      name: "Sarah Wilson",
      phone: "(555) 456-7890"
    },
    service: "Bathroom Remodeling",
    date: "Apr 23, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "789 Broadway, Queens",
    status: "Confirmed"
  }
];

const pastAppointments = [
  {
    id: 101,
    client: {
      name: "Robert Smith",
      phone: "(555) 234-5678"
    },
    service: "Electrical Wiring",
    date: "Apr 15, 2025",
    time: "1:00 PM - 3:00 PM",
    location: "321 Oak St, Bronx",
    status: "Completed"
  },
  {
    id: 102,
    client: {
      name: "Lisa Brown",
      phone: "(555) 876-5432"
    },
    service: "Plumbing Repair",
    date: "Apr 12, 2025",
    time: "10:30 AM - 12:00 PM",
    location: "654 Elm St, Manhattan",
    status: "Completed"
  }
];

export default Appointments;
