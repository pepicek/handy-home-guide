
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { 
  FileText, 
  Plus, 
  Search, 
  Filter, 
  Settings, 
  Sparkles,
  ExternalLink,
  ChevronLeft
} from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const Listings = () => {
  const { serviceId } = useParams();
  const [activeTab, setActiveTab] = useState("all");
  
  // Find the service if we have a serviceId
  const service = serviceId ? servicesData.find(s => s.id.toString() === serviceId) : null;

  const handleCreateListing = () => {
    toast.success("Opening listing creator...");
  };
  
  const handleAiGenerate = () => {
    toast.success("Opening AI listing generator...");
  };

  const handleABTesting = () => {
    toast.success("Setting up A/B testing for listings...");
  };

  const handleDistributeListing = (listingId: number) => {
    toast.success(`Opening distribution options for listing #${listingId}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {service && (
            <Button variant="outline" size="sm" asChild className="gap-1">
              <Link to="/dashboard/listings">
                <ChevronLeft className="h-4 w-4" />
                Back to all listings
              </Link>
            </Button>
          )}
          <h1 className="text-3xl font-bold text-anthracite">
            {service ? `Listings for ${service.name}` : "Service Listings"}
          </h1>
          {service && (
            <Badge className="bg-yellow-100 text-yellow-800">
              {service.category}
            </Badge>
          )}
        </div>

        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                <Sparkles className="mr-2 h-4 w-4" />
                AI Generate
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>AI Listing Generator</DialogTitle>
                <DialogDescription>
                  Create optimized service listings using our AI assistant.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <label className="text-sm font-medium">Select Service</label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm mt-1">
                    {servicesData.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Target Audience</label>
                  <Input placeholder="e.g. Homeowners, Business owners" />
                </div>
                <div>
                  <label className="text-sm font-medium">Listing Style</label>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <Button variant="outline" size="sm">Professional</Button>
                    <Button variant="outline" size="sm">Friendly</Button>
                    <Button variant="outline" size="sm">Persuasive</Button>
                    <Button variant="outline" size="sm">Informative</Button>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button onClick={handleAiGenerate} className="bg-amber-500 hover:bg-amber-600">
                  Generate Listings
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
                <Plus className="mr-2 h-4 w-4" />
                Create Listing
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Listing</DialogTitle>
                <DialogDescription>
                  Create a new listing for your service to attract clients.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <label className="text-sm font-medium">Service</label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm mt-1">
                    {servicesData.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Listing Title</label>
                  <Input placeholder="e.g. Professional Interior Painting Service" />
                </div>
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <textarea 
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm mt-1"
                    placeholder="Describe your service offering..."
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Price Display</label>
                    <Input placeholder="e.g. Starting at $250" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Call to Action</label>
                    <Input placeholder="e.g. Book Now" />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button onClick={handleCreateListing} className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
                  Create Listing
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" placeholder="Search listings..." className="pl-9 w-[250px]" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={handleABTesting}>
            A/B Testing
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to="/dashboard/listings/settings">
              <Settings className="mr-1 h-4 w-4" />
              Settings
            </Link>
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Listings</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Drafts</TabsTrigger>
          <TabsTrigger value="distributed">Distributed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {listingsData.filter(listing => !serviceId || listing.serviceId.toString() === serviceId).map(listing => (
              <Card key={listing.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{listing.title}</CardTitle>
                    <Badge className={
                      listing.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : listing.status === 'Draft' 
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-blue-100 text-blue-800'
                    }>
                      {listing.status}
                    </Badge>
                  </div>
                  <CardDescription>
                    For: {servicesData.find(s => s.id === listing.serviceId)?.name}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {listing.description}
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-sm font-medium">{listing.price}</span>
                    <span className="text-xs text-muted-foreground">Views: {listing.views}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleDistributeListing(listing.id)}
                      className="text-yellow-700"
                    >
                      <ExternalLink className="h-3.5 w-3.5 mr-1" />
                      Distribute
                    </Button>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    {listing.distributed ? (
                      <Badge variant="outline" className="text-xs">
                        On {listing.distributed} sites
                      </Badge>
                    ) : null}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {listingsData
              .filter(listing => listing.status === 'Active' && (!serviceId || listing.serviceId.toString() === serviceId))
              .map(listing => (
                <Card key={listing.id}>
                  {/* Similar card structure as above */}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{listing.title}</CardTitle>
                    <CardDescription>
                      For: {servicesData.find(s => s.id === listing.serviceId)?.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {listing.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-4">
                    <Button variant="outline" size="sm">Edit</Button>
                    <div className="text-xs text-muted-foreground">Views: {listing.views}</div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="draft">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {listingsData
              .filter(listing => listing.status === 'Draft' && (!serviceId || listing.serviceId.toString() === serviceId))
              .length > 0 ? (
              listingsData
                .filter(listing => listing.status === 'Draft' && (!serviceId || listing.serviceId.toString() === serviceId))
                .map(listing => (
                  <Card key={listing.id}>
                    {/* Similar card structure */}
                    <CardHeader>
                      <CardTitle className="text-lg">{listing.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{listing.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">Continue Editing</Button>
                    </CardFooter>
                  </Card>
                ))
            ) : (
              <div className="col-span-full flex items-center justify-center h-40 border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">No draft listings found</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="distributed">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {listingsData
              .filter(listing => listing.distributed && (!serviceId || listing.serviceId.toString() === serviceId))
              .length > 0 ? (
              listingsData
                .filter(listing => listing.distributed && (!serviceId || listing.serviceId.toString() === serviceId))
                .map(listing => (
                  <Card key={listing.id}>
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle className="text-lg">{listing.title}</CardTitle>
                        <Badge className="bg-blue-100 text-blue-800">
                          Distributed
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-2">{listing.description}</p>
                      <div className="bg-muted p-2 rounded-md">
                        <p className="text-xs font-medium">Distribution Stats:</p>
                        <div className="flex justify-between mt-1 text-xs">
                          <span>Sites: {listing.distributed}</span>
                          <span>Views: {listing.views}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">View Analytics</Button>
                    </CardFooter>
                  </Card>
                ))
            ) : (
              <div className="col-span-full flex items-center justify-center h-40 border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">No distributed listings found</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Distribution Network</CardTitle>
          <CardDescription>
            Extend your reach by distributing listings to partner websites
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-md border border-yellow-200">
            <div>
              <h3 className="font-medium">Premium Distribution</h3>
              <p className="text-sm text-muted-foreground">Access 50+ partner websites to showcase your services</p>
            </div>
            <Button className="bg-yellow-500 text-anthracite hover:bg-yellow-600">
              Upgrade Now
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-muted rounded-md">
              <h4 className="font-medium mb-1">Basic</h4>
              <p className="text-sm mb-1">5 partner sites</p>
              <p className="text-xs text-muted-foreground">Included in your plan</p>
            </div>
            <div className="p-4 bg-muted rounded-md">
              <h4 className="font-medium mb-1">Standard</h4>
              <p className="text-sm mb-1">20 partner sites</p>
              <p className="text-xs text-muted-foreground">$49.99/month</p>
            </div>
            <div className="p-4 bg-muted rounded-md border border-yellow-300">
              <h4 className="font-medium mb-1">Premium</h4>
              <p className="text-sm mb-1">50+ partner sites</p>
              <p className="text-xs text-muted-foreground">$99.99/month</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Sample data
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

const listingsData = [
  {
    id: 1,
    serviceId: 1,
    title: "Premium Interior Painting Service",
    description: "Professional interior painting service with top quality materials and expert painters. We guarantee a flawless finish and clean workspace.",
    price: "From $250",
    status: "Active",
    views: 356,
    distributed: 3
  },
  {
    id: 2,
    serviceId: 1,
    title: "Quick Interior Painting Service",
    description: "Get your room painted in just one day with our quick service option. Perfect for those who need a fast turnaround without compromising quality.",
    price: "From $299",
    status: "Active",
    views: 124,
    distributed: null
  },
  {
    id: 3,
    serviceId: 2,
    title: "Complete Bathroom Renovation",
    description: "Transform your bathroom with our complete renovation service. We handle everything from design to installation.",
    price: "From $3,500",
    status: "Active",
    views: 209,
    distributed: 5
  },
  {
    id: 4,
    serviceId: 3,
    title: "Modern Kitchen Remodeling",
    description: "Create the kitchen of your dreams with our modern remodeling service. Custom cabinets, countertops, and appliance installation.",
    price: "From $5,000",
    status: "Draft",
    views: 0,
    distributed: null
  },
  {
    id: 5,
    serviceId: 4,
    title: "Residential Electrical Services",
    description: "Licensed electricians providing safe and reliable electrical services for your home. Wiring, panel upgrades, and troubleshooting.",
    price: "From $300",
    status: "Active",
    views: 187,
    distributed: 2
  },
  {
    id: 6,
    serviceId: 5,
    title: "Emergency Plumbing Solutions",
    description: "24/7 emergency plumbing services for when disaster strikes. Fast response times and effective solutions.",
    price: "From $150",
    status: "Active",
    views: 412,
    distributed: 8
  }
];

export default Listings;
