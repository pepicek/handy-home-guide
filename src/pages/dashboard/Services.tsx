
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Edit, EyeIcon, Plus, Search, Trash2 } from "lucide-react";

const Services = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-anthracite">Services Management</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
              <Plus className="mr-2 h-4 w-4" />
              Add New Service
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Service</DialogTitle>
              <DialogDescription>
                Create a new service to offer to your clients.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="service-name" className="text-sm font-medium">Service Name</label>
                <Input id="service-name" placeholder="e.g. Interior Painting" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="service-description" className="text-sm font-medium">Description</label>
                <textarea 
                  id="service-description" 
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Describe your service in detail..."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="service-price" className="text-sm font-medium">Price ($)</label>
                  <Input id="service-price" type="number" placeholder="e.g. 250" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="service-duration" className="text-sm font-medium">Duration (hours)</label>
                  <Input id="service-duration" type="number" placeholder="e.g. 2" />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="service-category" className="text-sm font-medium">Category</label>
                <select 
                  id="service-category" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select a category</option>
                  <option value="painting">Painting</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="carpentry">Carpentry</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="renovation">Renovation</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">Save Service</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input type="search" placeholder="Search services..." className="pl-9" />
        </div>
        <Button variant="outline">Filter</Button>
        <Button variant="outline">Sort</Button>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList className="bg-gray-100">
          <TabsTrigger value="active">Active Services</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Active Services</CardTitle>
              <CardDescription>
                These services are visible to potential clients
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Bookings</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {servicesData.map((service) => (
                    <TableRow key={service.id}>
                      <TableCell className="font-medium">{service.name}</TableCell>
                      <TableCell>{service.category}</TableCell>
                      <TableCell>${service.price}</TableCell>
                      <TableCell>{service.bookings}</TableCell>
                      <TableCell>
                        <Badge className={
                          service.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }>
                          {service.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <EyeIcon className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
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
        
        <TabsContent value="drafts">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Saved Drafts</CardTitle>
              <CardDescription>
                These services are not yet published
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-40 border-2 border-dashed rounded-lg">
                <p className="text-gray-500">No draft services yet</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="archived">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Archived Services</CardTitle>
              <CardDescription>
                These services are not visible to clients
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-40 border-2 border-dashed rounded-lg">
                <p className="text-gray-500">No archived services</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Service Performance</CardTitle>
          <CardDescription>
            How your services are performing over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center border rounded-md bg-gray-50">
            <p className="text-gray-500">Performance chart will appear here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const servicesData = [
  {
    id: 1,
    name: "Interior Painting",
    category: "Painting",
    price: 250,
    bookings: 15,
    status: "Active"
  },
  {
    id: 2,
    name: "Bathroom Renovation",
    category: "Renovation",
    price: 3500,
    bookings: 7,
    status: "Active"
  },
  {
    id: 3,
    name: "Kitchen Remodeling",
    category: "Renovation",
    price: 5000,
    bookings: 3,
    status: "Active"
  },
  {
    id: 4,
    name: "Electrical Wiring",
    category: "Electrical",
    price: 300,
    bookings: 9,
    status: "Featured"
  },
  {
    id: 5,
    name: "Plumbing Services",
    category: "Plumbing",
    price: 150,
    bookings: 21,
    status: "Active"
  }
];

export default Services;
