
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Filter,
  Star,
  Heart,
  TrashIcon,
  Phone,
  Mail,
  ChevronDown,
  MoreHorizontal,
  Calendar
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const SavedProviders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  
  const providers = [
    {
      id: 1,
      name: "Elite Home Renovations",
      category: "General Contractor",
      rating: 4.8,
      reviews: 124,
      phone: "(555) 123-4567",
      email: "info@elitehomereno.com",
      specialties: ["Kitchen Remodeling", "Bathroom Renovation", "Home Additions"],
      lastContact: "2 days ago",
      logo: "EH"
    },
    {
      id: 2,
      name: "Green Gardens Pro",
      category: "Landscaping",
      rating: 4.6,
      reviews: 89,
      phone: "(555) 234-5678",
      email: "contact@greengardenspro.com",
      specialties: ["Lawn Care", "Garden Design", "Tree Services"],
      lastContact: "1 week ago",
      logo: "GG"
    },
    {
      id: 3,
      name: "Premier Plumbing Solutions",
      category: "Plumbing",
      rating: 4.9,
      reviews: 203,
      phone: "(555) 345-6789",
      email: "service@premierplumbing.com",
      specialties: ["Emergency Repairs", "Water Heater Installation", "Pipe Replacement"],
      lastContact: "3 days ago",
      logo: "PP"
    },
    {
      id: 4,
      name: "Artistic Painting Services",
      category: "Painting",
      rating: 4.7,
      reviews: 156,
      phone: "(555) 456-7890",
      email: "info@artisticpainting.com",
      specialties: ["Interior Painting", "Exterior Painting", "Decorative Finishes"],
      lastContact: "2 weeks ago",
      logo: "AP"
    },
    {
      id: 5,
      name: "Quick Fix Electricians",
      category: "Electrical",
      rating: 4.8,
      reviews: 178,
      phone: "(555) 567-8901",
      email: "service@quickfixelectric.com",
      specialties: ["Panel Upgrades", "Wiring", "Lighting Installation"],
      lastContact: "1 month ago",
      logo: "QF"
    },
    {
      id: 6,
      name: "Custom Cabinetry Co.",
      category: "Carpentry",
      rating: 4.9,
      reviews: 112,
      phone: "(555) 678-9012",
      email: "info@customcabinetry.com",
      specialties: ["Kitchen Cabinets", "Built-ins", "Custom Furniture"],
      lastContact: "1 week ago",
      logo: "CC"
    },
    {
      id: 7,
      name: "Solid Roofing Experts",
      category: "Roofing",
      rating: 4.7,
      reviews: 98,
      phone: "(555) 789-0123",
      email: "info@solidroofing.com",
      specialties: ["Roof Replacement", "Repairs", "Inspections"],
      lastContact: "Never",
      logo: "SR"
    },
    {
      id: 8,
      name: "Cool Air HVAC Services",
      category: "HVAC",
      rating: 4.5,
      reviews: 87,
      phone: "(555) 890-1234",
      email: "support@coolair.com",
      specialties: ["AC Installation", "Heating Systems", "Maintenance"],
      lastContact: "3 weeks ago",
      logo: "CA"
    }
  ];
  
  const categories = [
    { value: "all", label: "All Categories" },
    { value: "General Contractor", label: "General Contractor" },
    { value: "Landscaping", label: "Landscaping" },
    { value: "Plumbing", label: "Plumbing" },
    { value: "Painting", label: "Painting" },
    { value: "Electrical", label: "Electrical" },
    { value: "Carpentry", label: "Carpentry" },
    { value: "Roofing", label: "Roofing" },
    { value: "HVAC", label: "HVAC" }
  ];
  
  // Filter providers based on search and category
  const filteredProviders = providers.filter(provider => 
    provider.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
    (category === "all" || provider.category === category)
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-anthracite">Saved Service Providers</h1>
        <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
          Find New Providers
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>My Favorite Providers</CardTitle>
          <CardDescription>Manage your saved service providers for easy access.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 mb-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input 
                  placeholder="Search providers..." 
                  className="pl-9 bg-white w-[200px] sm:w-[300px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <span>{category === "all" ? "All Categories" : category}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuLabel>Filter by category</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {categories.map((cat) => (
                    <DropdownMenuItem 
                      key={cat.value}
                      onClick={() => setCategory(cat.value)}
                      className={category === cat.value ? "bg-yellow-100" : ""}
                    >
                      {cat.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <Badge className="bg-yellow-100 text-yellow-800">
                {filteredProviders.length} Providers
              </Badge>
            </div>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProviders.map(provider => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
          
          {filteredProviders.length === 0 && (
            <div className="text-center py-10">
              <Heart className="mx-auto h-10 w-10 text-gray-300" />
              <h3 className="mt-2 text-lg font-medium">No providers found</h3>
              <p className="mt-1 text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const ProviderCard = ({ provider }) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2 flex justify-between items-start">
        <div className="flex gap-3 items-center">
          <Avatar className="h-12 w-12 border-2 border-yellow-200">
            <AvatarFallback className="bg-yellow-100 text-yellow-800">{provider.logo}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">{provider.name}</CardTitle>
            <Badge className="mt-1 bg-yellow-100 text-yellow-800">{provider.category}</Badge>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Profile</DropdownMenuItem>
            <DropdownMenuItem>Request Quote</DropdownMenuItem>
            <DropdownMenuItem>Schedule Appointment</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <TrashIcon className="h-4 w-4 mr-2" /> 
              Remove from Saved
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="flex items-center text-sm mb-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
          <span className="font-medium">{provider.rating}</span>
          <span className="text-gray-500 ml-1">({provider.reviews} reviews)</span>
        </div>
        
        <div className="text-sm space-y-1 mt-3">
          <div className="flex items-center text-gray-500">
            <Phone className="h-3 w-3 mr-2" />
            <span>{provider.phone}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Mail className="h-3 w-3 mr-2" />
            <span className="truncate">{provider.email}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-xs text-gray-500 mb-1.5">Specialties:</p>
          <div className="flex flex-wrap gap-1">
            {provider.specialties.map((specialty, index) => (
              <Badge key={index} variant="outline" className="bg-gray-50 text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-gray-50 flex justify-between">
        <span className="text-xs text-gray-500">
          Last contact: {provider.lastContact}
        </span>
        <div className="flex gap-2">
          <Button size="sm" variant="ghost" className="h-8 px-2">
            <Mail className="h-4 w-4" />
          </Button>
          <Button size="sm" className="h-8 px-2 bg-yellow-500 hover:bg-yellow-600 text-anthracite">
            <Calendar className="h-4 w-4 mr-1" />
            Book
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SavedProviders;
