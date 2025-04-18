import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Filter, Star as StarIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AddClientButton } from "@/components/clients/AddClientDialog";
import { MessageClientDialog, ScheduleAppointmentDialog, RemoveClientDialog, ViewServiceHistoryButton } from "@/components/clients/ClientActionDialogs";
import { Link } from "react-router-dom";

const generateRandomClients = (count: number) => {
  const firstNames = ["John", "Sarah", "Michael", "Emily", "David", "Jessica", "Robert", "Jennifer", "William", "Linda", "James", "Susan", "Maria", "Thomas", "Carlos"];
  const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson", "Martinez", "Anderson", "Taylor", "Thomas", "Jackson"];
  const services = ["Interior Painting", "Kitchen Renovation", "Bathroom Remodeling", "Roof Repair", "Plumbing Services", "Electrical Work", "Landscaping", "Flooring Installation", "HVAC Maintenance", "Window Replacement"];
  const statuses = ["active", "inactive", "new"];
  const ratings = [3, 3.5, 4, 4.5, 5];
  
  return Array.from({ length: count }, (_, i) => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return {
      id: i + 1,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
      phone: `(${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
      lastService: services[Math.floor(Math.random() * services.length)],
      lastServiceDate: new Date(Date.now() - Math.floor(Math.random() * 90) * 24 * 60 * 60 * 1000).toLocaleDateString(),
      status: statuses[Math.floor(Math.random() * statuses.length)],
      totalSpent: `$${Math.floor(Math.random() * 10000) + 500}`,
      totalBookings: Math.floor(Math.random() * 20) + 1,
      rating: ratings[Math.floor(Math.random() * ratings.length)]
    };
  });
};

const Clients = () => {
  const [clients] = useState(generateRandomClients(25));
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const clientsPerPage = 10;
  
  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = filteredClients.slice(indexOfFirstClient, indexOfLastClient);
  const totalPages = Math.ceil(filteredClients.length / clientsPerPage);
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-anthracite">Client Management</h1>
        <AddClientButton />
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Clients Database</CardTitle>
          <CardDescription>Manage your client relationships and service history.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center space-y-2 sm:space-y-0 mb-4">
              <TabsList className="bg-yellow-100/50">
                <TabsTrigger value="all">All Clients</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="inactive">Inactive</TabsTrigger>
                <TabsTrigger value="new">New</TabsTrigger>
              </TabsList>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input 
                    placeholder="Search clients..." 
                    className="pl-9 bg-white w-[200px] md:w-[300px]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter By</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Highest Spending</DropdownMenuItem>
                    <DropdownMenuItem>Most Recent</DropdownMenuItem>
                    <DropdownMenuItem>Most Bookings</DropdownMenuItem>
                    <DropdownMenuItem>Highest Rated</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="rounded-md border bg-white overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-yellow-50 border-b">
                    <tr>
                      <th className="py-3 px-4 text-left font-medium">Client</th>
                      <th className="py-3 px-4 text-left font-medium hidden md:table-cell">Contact</th>
                      <th className="py-3 px-4 text-left font-medium hidden lg:table-cell">Last Service</th>
                      <th className="py-3 px-4 text-left font-medium hidden lg:table-cell">Status</th>
                      <th className="py-3 px-4 text-left font-medium hidden sm:table-cell">Total Spent</th>
                      <th className="py-3 px-4 text-center font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentClients.map((client) => (
                      <tr key={client.id} className="border-b hover:bg-yellow-50/30">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <Link to={`/dashboard/clients/${client.id}`}>
                              <Avatar className="h-9 w-9 border-2 border-yellow-200">
                                <AvatarFallback className="bg-yellow-100 text-yellow-800">
                                  {client.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                            </Link>
                            <div>
                              <Link 
                                to={`/dashboard/clients/${client.id}`}
                                className="font-medium hover:text-yellow-600"
                              >
                                {client.name}
                              </Link>
                              <div className="flex items-center text-xs text-gray-500 mt-1">
                                <StarIcon className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                                <span>{client.rating}</span>
                                <span className="mx-2">•</span>
                                <span>{client.totalBookings} bookings</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 hidden md:table-cell">
                          <div className="space-y-1">
                            <div className="flex items-center text-xs text-gray-500">
                              <Mail className="h-3 w-3 mr-1" />
                              <span>{client.email}</span>
                            </div>
                            <div className="flex items-center text-xs text-gray-500">
                              <Phone className="h-3 w-3 mr-1" />
                              <span>{client.phone}</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 hidden lg:table-cell">
                          <div className="space-y-1">
                            <p className="text-sm">{client.lastService}</p>
                            <div className="flex items-center text-xs text-gray-500">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>{client.lastServiceDate}</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 hidden lg:table-cell">
                          <Badge className={`
                            ${client.status === 'active' ? 'bg-green-100 text-green-800 hover:bg-green-200' : 
                              client.status === 'new' ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' : 
                              'bg-gray-100 text-gray-800 hover:bg-gray-200'}
                          `}>
                            {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 hidden sm:table-cell font-medium">{client.totalSpent}</td>
                        <td className="py-3 px-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <MessageClientDialog />
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem asChild>
                                  <Link to={`/dashboard/clients/${client.id}`}>
                                    View Profile
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <ScheduleAppointmentDialog />
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <ViewServiceHistoryButton clientId={client.id.toString()} />
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">
                                  <RemoveClientDialog />
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-gray-500">
                  Showing {indexOfFirstClient + 1}-{Math.min(indexOfLastClient, filteredClients.length)} of {filteredClients.length} clients
                </p>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="active" className="mt-0">
              <div className="h-80 flex items-center justify-center text-center p-4">
                <p className="text-muted-foreground">View and manage your active clients here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="inactive" className="mt-0">
              <div className="h-80 flex items-center justify-center text-center p-4">
                <p className="text-muted-foreground">View and manage your inactive clients here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="new" className="mt-0">
              <div className="h-80 flex items-center justify-center text-center p-4">
                <p className="text-muted-foreground">View and manage your new clients here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Clients;
