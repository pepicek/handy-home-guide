
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, EyeIcon, Plus, Search, Trash2, Calendar, DollarSign, Percent } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const SpecialOffers = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-anthracite">Special Offers</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-anthracite">
              <Plus className="mr-2 h-4 w-4" />
              Create Special Offer
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Create Special Offer</DialogTitle>
              <DialogDescription>
                Create a limited-time offer to attract new customers.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="offer-title" className="text-sm font-medium">Offer Title</label>
                <Input id="offer-title" placeholder="e.g. Summer Painting Discount" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="offer-description" className="text-sm font-medium">Description</label>
                <textarea 
                  id="offer-description" 
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Describe your special offer in detail..."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="service-select" className="text-sm font-medium">Service</label>
                  <select 
                    id="service-select" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select a service</option>
                    <option value="interior-painting">Interior Painting</option>
                    <option value="bathroom-renovation">Bathroom Renovation</option>
                    <option value="kitchen-remodeling">Kitchen Remodeling</option>
                    <option value="electrical-wiring">Electrical Wiring</option>
                    <option value="plumbing-services">Plumbing Services</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="discount-type" className="text-sm font-medium">Discount Type</label>
                  <select 
                    id="discount-type" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select discount type</option>
                    <option value="percentage">Percentage (%)</option>
                    <option value="fixed">Fixed Amount ($)</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="discount-value" className="text-sm font-medium">Discount Value</label>
                  <Input id="discount-value" type="number" placeholder="e.g. 20" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="original-price" className="text-sm font-medium">Original Price ($)</label>
                  <Input id="original-price" type="number" placeholder="e.g. 250" disabled />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="start-date" className="text-sm font-medium">Start Date</label>
                  <Input id="start-date" type="date" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="end-date" className="text-sm font-medium">End Date</label>
                  <Input id="end-date" type="date" />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="limit" className="text-sm font-medium">Limit (Optional)</label>
                <Input id="limit" type="number" placeholder="Max number of redemptions" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-anthracite">Create Offer</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input type="search" placeholder="Search offers..." className="pl-9" />
        </div>
        <Button variant="outline">Filter</Button>
        <Button variant="outline">Sort</Button>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList className="bg-gray-100">
          <TabsTrigger value="active">Active Offers</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="expired">Expired</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Active Special Offers</CardTitle>
              <CardDescription>
                These offers are currently available to clients
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Offer</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Discount</TableHead>
                    <TableHead>Expiry Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {specialOffersData.map((offer) => (
                    <TableRow key={offer.id}>
                      <TableCell className="font-medium">{offer.title}</TableCell>
                      <TableCell>{offer.service}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {offer.discountType === 'percentage' ? 
                            <Percent className="mr-1 h-4 w-4 text-yellow-500" /> :
                            <DollarSign className="mr-1 h-4 w-4 text-yellow-500" />
                          }
                          {offer.discountType === 'percentage' ? 
                            `${offer.discountValue}%` : 
                            `$${offer.discountValue}`
                          }
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                          {offer.expiryDate}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={
                          offer.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : offer.status === 'Featured'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-blue-100 text-blue-800'
                        }>
                          {offer.status}
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
        
        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Special Offers</CardTitle>
              <CardDescription>
                These offers will be available in the future
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-40 border-2 border-dashed rounded-lg">
                <p className="text-gray-500">No upcoming offers</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="expired">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Expired Special Offers</CardTitle>
              <CardDescription>
                These offers are no longer available
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-40 border-2 border-dashed rounded-lg">
                <p className="text-gray-500">No expired offers</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Bundle Offers Wizard</CardTitle>
            <CardDescription>
              Create service bundles to increase your average order value
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600">
              Bundle multiple services together and offer a discount to encourage clients to book more services at once. Our wizard will guide you through creating effective bundles.
            </p>
            <div className="flex items-center p-4 border rounded-md bg-gray-50">
              <div className="flex-1">
                <h4 className="font-medium">Complete Home Package</h4>
                <p className="text-sm text-gray-600">Painting + Cleaning + Repairs</p>
              </div>
              <Badge className="bg-yellow-100 text-yellow-800">Popular Bundle</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Create Bundle</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Offer Performance</CardTitle>
            <CardDescription>
              Track how your special offers are performing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border rounded-md">
                  <p className="text-sm text-gray-500">Total Bookings</p>
                  <p className="text-2xl font-bold">56</p>
                </div>
                <div className="p-4 border rounded-md">
                  <p className="text-sm text-gray-500">Revenue Generated</p>
                  <p className="text-2xl font-bold">$8,750</p>
                </div>
              </div>
              <div className="p-4 border rounded-md">
                <h4 className="font-medium mb-2">Best Performing Offer</h4>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Percent className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-medium">Spring Cleaning Special</p>
                    <p className="text-xs text-gray-500">28 bookings • $3,920 revenue</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const specialOffersData = [
  {
    id: 1,
    title: "Spring Cleaning Special",
    service: "Home Cleaning",
    discountType: "percentage",
    discountValue: 20,
    expiryDate: "May 31, 2025",
    status: "Featured"
  },
  {
    id: 2,
    title: "Kitchen Remodel Deal",
    service: "Kitchen Remodeling",
    discountType: "fixed",
    discountValue: 500,
    expiryDate: "June 15, 2025",
    status: "Active"
  },
  {
    id: 3,
    title: "Bathroom Renovation Package",
    service: "Bathroom Renovation",
    discountType: "percentage",
    discountValue: 15,
    expiryDate: "July 1, 2025",
    status: "Active"
  },
  {
    id: 4,
    title: "Summer Painting Discount",
    service: "Interior Painting",
    discountType: "percentage",
    discountValue: 25,
    expiryDate: "Aug 30, 2025",
    status: "New"
  }
];

export default SpecialOffers;
