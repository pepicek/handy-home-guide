
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClientsHeader } from "@/components/clients/ClientsHeader";
import { ClientsSearch } from "@/components/clients/ClientsSearch";
import ClientsTable from "@/components/clients/ClientsTable";

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
      <ClientsHeader />
      
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
              <ClientsSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            
            <TabsContent value="all" className="mt-0">
              <ClientsTable 
                clients={currentClients}
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                startIndex={indexOfFirstClient}
                endIndex={Math.min(indexOfLastClient, filteredClients.length)}
                totalCount={filteredClients.length}
              />
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
