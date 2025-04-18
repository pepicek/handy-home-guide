
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Shield, Clock, Briefcase, Search, Tag } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { toast } from "@/components/ui/use-toast";

const ServiceCategory = () => {
  const { category } = useParams();
  
  // State for zip code and radius filtering
  const [zipCode, setZipCode] = useState('');
  const [radius, setRadius] = useState([25]); // Default 25 mile radius
  const [filteredProviders, setFilteredProviders] = useState<any[]>([]);
  const [hasFiltered, setHasFiltered] = useState(false);

  // This would typically come from an API/database
  const categoryData = {
    title: category || "Plumbing",
    description: "Professional plumbing services including repairs, installations, and maintenance for residential and commercial properties.",
    totalProviders: 245,
    averageRating: 4.8,
    featuredServices: [
      "Emergency Repairs",
      "Pipe Installation",
      "Drain Cleaning",
      "Water Heater Services",
      "Leak Detection",
      "Fixture Installation"
    ]
  };

  const providers = [
    {
      id: 1,
      name: "Elite Plumbing Services",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=150&h=150&crop=faces",
      rating: 4.9,
      reviews: 156,
      location: "Downtown Area",
      zipCode: "10001",
      serviceRadius: 30,
      responseTime: "Under 1 hour",
      experience: "15+ years",
      verified: true,
      services: ["Emergency repairs", "Installation", "Maintenance"],
      hasSpecialOffers: true
    },
    {
      id: 2,
      name: "Pro Plumbing Solutions",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150&crop=faces",
      rating: 4.8,
      reviews: 124,
      location: "Westside",
      zipCode: "10023",
      serviceRadius: 15,
      responseTime: "2 hours",
      experience: "8+ years",
      verified: true,
      services: ["Residential", "Commercial", "Emergency"],
      hasSpecialOffers: true
    }
  ];

  // Function to handle zip code filtering
  const handleFilterByLocation = () => {
    if (!zipCode || zipCode.length < 5) {
      toast({
        variant: "destructive",
        title: "Invalid Zip Code",
        description: "Please enter a valid zip code to filter providers.",
      });
      return;
    }

    // In a real application, this would use a geocoding API to convert zip to coordinates
    // and then calculate distance between zip codes

    // Simulated filtering for demonstration
    const filtered = providers.filter(provider => {
      // Simple demo filter - in real life this would be a distance calculation
      const distanceBetweenZips = Math.abs(parseInt(provider.zipCode) - parseInt(zipCode));
      
      // Convert distance to miles (very simplified for demo)
      const estimatedMiles = distanceBetweenZips / 100;
      
      // Check if provider serves this area (within their service radius)
      return estimatedMiles <= radius[0] && estimatedMiles <= provider.serviceRadius;
    });

    setFilteredProviders(filtered);
    setHasFiltered(true);

    if (filtered.length === 0) {
      toast({
        title: "No providers found",
        description: `No providers found within ${radius[0]} miles of zip code ${zipCode}.`,
      });
    } else {
      toast({
        title: "Providers filtered",
        description: `Found ${filtered.length} providers within ${radius[0]} miles of zip code ${zipCode}.`,
      });
    }
  };

  // Reset filters
  const resetFilters = () => {
    setZipCode('');
    setRadius([25]);
    setHasFiltered(false);
    setFilteredProviders([]);
  };

  // Providers to display (filtered or all)
  const displayedProviders = hasFiltered ? filteredProviders : providers;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Category Header */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold text-anthracite mb-2">{categoryData.title} Services</h1>
                <p className="text-gray-600 max-w-2xl">{categoryData.description}</p>
              </div>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-anthracite">
                Find {categoryData.title} Pros
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-600">
                  <strong className="text-anthracite">{categoryData.totalProviders}</strong> Service Providers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="text-gray-600">
                  <strong className="text-anthracite">{categoryData.averageRating}</strong> Average Rating
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-600">Quick Response Time</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h3 className="font-bold text-lg mb-4">Filter by Location</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="zipCode">Your Zip Code</Label>
                    <div className="flex gap-2 mt-1">
                      <Input 
                        id="zipCode"
                        placeholder="Enter zip code"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        className="flex-grow"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between">
                      <Label htmlFor="radius">Search Radius</Label>
                      <span className="text-sm text-gray-500">{radius[0]} miles</span>
                    </div>
                    <Slider
                      id="radius" 
                      defaultValue={[25]}
                      min={1}
                      max={50}
                      step={1}
                      value={radius}
                      onValueChange={setRadius}
                      className="my-4"
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      onClick={handleFilterByLocation}
                      className="flex-grow bg-yellow-400 hover:bg-yellow-500 text-anthracite"
                    >
                      <Search className="mr-1 h-4 w-4" /> Filter
                    </Button>
                    
                    {hasFiltered && (
                      <Button 
                        onClick={resetFilters}
                        variant="outline"
                      >
                        Reset
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-lg mb-4">Featured Services</h3>
                <ul className="space-y-2">
                  {categoryData.featuredServices.map((service, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="providers" className="w-full">
                <TabsList className="w-full justify-start bg-white border-b rounded-none h-auto p-0">
                  <TabsTrigger 
                    value="providers"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-yellow-400 data-[state=active]:bg-transparent"
                  >
                    Top Providers
                  </TabsTrigger>
                  <TabsTrigger 
                    value="reviews"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-yellow-400 data-[state=active]:bg-transparent"
                  >
                    Reviews
                  </TabsTrigger>
                  <TabsTrigger 
                    value="pricing"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-yellow-400 data-[state=active]:bg-transparent"
                  >
                    Pricing Guide
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="providers" className="border-none p-0 mt-6">
                  {displayedProviders.length === 0 && hasFiltered ? (
                    <div className="bg-white p-8 rounded-lg text-center">
                      <h3 className="text-lg font-medium mb-2">No providers found</h3>
                      <p className="text-gray-600 mb-4">
                        No service providers found within {radius[0]} miles of zip code {zipCode}.
                      </p>
                      <Button onClick={resetFilters} variant="outline">
                        Reset Filters
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {displayedProviders.map((provider) => (
                        <Card key={provider.id} className="overflow-hidden hover-scale transition-all">
                          <CardContent className="p-0">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                              <div className="md:col-span-1 relative h-full min-h-[12rem] md:min-h-full">
                                <img
                                  src={provider.image}
                                  alt={provider.name}
                                  className="absolute inset-0 w-full h-full object-cover"
                                />
                              </div>
                              <div className="md:col-span-3 p-6">
                                <div className="flex justify-between items-start mb-2">
                                  <div>
                                    <h3 className="text-lg font-bold">{provider.name}</h3>
                                    <Link 
                                      to={`/search/map?location=${encodeURIComponent(provider.location)}`}
                                      className="flex items-center gap-1 text-gray-600 text-sm hover:text-yellow-600 transition-colors"
                                    >
                                      <MapPin className="w-4 h-4" />
                                      {provider.location}
                                    </Link>
                                  </div>
                                  <div className="flex items-center">
                                    <div className="bg-yellow-400 text-anthracite font-medium rounded px-2 py-0.5 text-sm flex items-center">
                                      <Star className="w-3 h-3 fill-anthracite mr-1" />
                                      {provider.rating}
                                    </div>
                                    <span className="text-sm text-gray-500 ml-1">
                                      ({provider.reviews})
                                    </span>
                                  </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                  {provider.services.map((service, index) => (
                                    <span 
                                      key={index}
                                      className="text-xs bg-gray-100 rounded-full px-2.5 py-1"
                                    >
                                      {service}
                                    </span>
                                  ))}
                                </div>

                                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                                  <div className="flex items-center gap-1">
                                    <Briefcase className="w-4 h-4 text-yellow-500" />
                                    {provider.experience}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4 text-yellow-500" />
                                    {provider.responseTime}
                                  </div>
                                  {provider.verified && (
                                    <div className="flex items-center gap-1 text-green-600">
                                      <Shield className="w-4 h-4" />
                                      Verified
                                    </div>
                                  )}
                                </div>

                                <div className="flex flex-wrap justify-end gap-2">
                                  <Button 
                                    variant="outline"
                                    className="text-sm"
                                    asChild
                                  >
                                    <Link to={`/profile/${provider.id}`}>View Profile</Link>
                                  </Button>
                                  <Button 
                                    variant="outline"
                                    className="text-sm"
                                    asChild
                                  >
                                    <Link to={`/search/map?provider=${provider.id}`}>
                                      <MapPin className="mr-1 h-4 w-4" />
                                      Map View
                                    </Link>
                                  </Button>
                                  {provider.hasSpecialOffers && (
                                    <Button 
                                      variant="outline"
                                      className="text-sm text-green-600 border-green-200 bg-green-50 hover:bg-green-100"
                                      asChild
                                    >
                                      <Link to={`/special-offers?provider=${provider.id}`}>
                                        <Tag className="mr-1 h-4 w-4" />
                                        Special Offers
                                      </Link>
                                    </Button>
                                  )}
                                  <Button 
                                    className="text-sm bg-yellow-400 hover:bg-yellow-500 text-anthracite"
                                    asChild
                                  >
                                    <Link to={`/request-quote/${provider.id}`}>Request Quote</Link>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="reviews" className="border-none p-0">
                  <div className="bg-white rounded-xl p-6">
                    <p className="text-gray-600">Review content coming soon...</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="pricing" className="border-none p-0">
                  <div className="bg-white rounded-xl p-6">
                    <p className="text-gray-600">Pricing guide content coming soon...</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceCategory;
