import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search as SearchIcon, Filter, MapPin, Star, Briefcase, Clock, Shield } from "lucide-react";

const serviceCategories = [
  "Plumbing",
  "Electrical",
  "Landscaping",
  "Cleaning",
  "Painting",
  "HVAC",
  "Carpentry",
  "Roofing",
];

const serviceProviders = [
  {
    id: 1,
    name: "Elite Plumbing Services",
    category: "Plumbing",
    rating: 4.8,
    reviews: 124,
    experience: "12+ years",
    responseTime: "Under 1 hour",
    verified: true,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=150&h=150&crop=faces",
    services: ["Drain cleaning", "Pipe repair", "Fixture installation", "Emergency services"],
    description: "Professional plumbing services with licensed and insured experts. Available for emergency calls 24/7.",
  },
  {
    id: 2,
    name: "Bright Spark Electrical",
    category: "Electrical",
    rating: 4.9,
    reviews: 86,
    experience: "8+ years",
    responseTime: "Same day",
    verified: true,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150&crop=faces",
    services: ["Electrical repairs", "Panel upgrades", "Lighting installation", "Wiring services"],
    description: "Licensed and bonded electricians providing reliable electrical services for residential and commercial properties.",
  },
  {
    id: 3,
    name: "Green Thumb Landscaping",
    category: "Landscaping",
    rating: 4.7,
    reviews: 92,
    experience: "15+ years",
    responseTime: "Within 24 hours",
    verified: true,
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150&crop=faces",
    services: ["Lawn maintenance", "Garden design", "Tree trimming", "Irrigation systems"],
    description: "Full-service landscaping company offering professional design, installation, and maintenance services.",
  },
  {
    id: 4,
    name: "Spotless Cleaning Co.",
    category: "Cleaning",
    rating: 4.6,
    reviews: 118,
    experience: "5+ years",
    responseTime: "Same day",
    verified: true,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150&crop=faces",
    services: ["Deep cleaning", "Regular maintenance", "Move-in/out cleaning", "Office cleaning"],
    description: "Thorough cleaning services using eco-friendly products and professional grade equipment for spotless results.",
  },
];

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <h1 className="text-3xl font-poster font-bold mb-6 text-anthracite">Find Home Service Professionals</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="What service do you need?"
                  className="pl-10 border-anthracite/20"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Enter your location"
                  className="pl-10 border-anthracite/20"
                />
              </div>
              <div>
                <Select>
                  <SelectTrigger className="border-anthracite/20 font-sans">
                    <SelectValue placeholder="Service Category" />
                  </SelectTrigger>
                  <SelectContent className="font-sans">
                    {serviceCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-anthracite font-medium">
                Search Services
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Filters</h3>
                  <Button variant="ghost" size="sm" className="text-sm text-gray-500">
                    Reset
                  </Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Filter className="w-4 h-4 mr-2" />
                      Categories
                    </h4>
                    <div className="space-y-2">
                      {serviceCategories.map((category) => (
                        <div key={category} className="flex items-center">
                          <Checkbox
                            id={`category-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => handleCategoryToggle(category)}
                          />
                          <Label
                            htmlFor={`category-${category}`}
                            className="ml-2 text-sm font-normal cursor-pointer"
                          >
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="font-semibold mb-3">Price Range</h4>
                    <div className="px-2">
                      <Slider
                        value={priceRange}
                        min={0}
                        max={500}
                        step={10}
                        onValueChange={setPriceRange}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}+</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="font-semibold mb-3">Rating</h4>
                    <div className="space-y-2">
                      {[5, 4, 3, 2].map((rating) => (
                        <div key={rating} className="flex items-center">
                          <Checkbox id={`rating-${rating}`} />
                          <Label
                            htmlFor={`rating-${rating}`}
                            className="ml-2 text-sm font-normal cursor-pointer flex items-center"
                          >
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                            <span className="ml-1 text-gray-500">& up</span>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="availability" className="border-b-0">
                        <AccordionTrigger className="py-2 text-base font-semibold">
                          Availability
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pt-2">
                            <div className="flex items-center">
                              <Checkbox id="availability-today" />
                              <Label
                                htmlFor="availability-today"
                                className="ml-2 text-sm font-normal"
                              >
                                Available today
                              </Label>
                            </div>
                            <div className="flex items-center">
                              <Checkbox id="availability-tomorrow" />
                              <Label
                                htmlFor="availability-tomorrow"
                                className="ml-2 text-sm font-normal"
                              >
                                Available tomorrow
                              </Label>
                            </div>
                            <div className="flex items-center">
                              <Checkbox id="availability-weekend" />
                              <Label
                                htmlFor="availability-weekend"
                                className="ml-2 text-sm font-normal"
                              >
                                Available this weekend
                              </Label>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div className="pt-2">
                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-anthracite">
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">24 Service Providers Found</h2>
                <Select defaultValue="recommended">
                  <SelectTrigger className="w-40 border-anthracite/20 font-sans">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="font-sans">
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="rating-high">Highest Rated</SelectItem>
                    <SelectItem value="price-low">Lowest Price</SelectItem>
                    <SelectItem value="most-reviews">Most Reviews</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                {serviceProviders.map((provider) => (
                  <Card key={provider.id} className="overflow-hidden hover-scale transition-all">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="md:col-span-1 flex justify-center items-center p-4">
                        <img
                          src={provider.image}
                          alt={provider.name}
                          className="w-24 h-24 md:w-32 md:h-32 rounded object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <div className="md:col-span-3 p-6 pt-2 md:pt-6">
                        <CardHeader className="p-0 pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg font-bold">{provider.name}</CardTitle>
                              <div className="text-sm text-gray-500">{provider.category}</div>
                            </div>
                            <div className="flex items-center">
                              <div className="bg-yellow-400 text-anthracite font-medium rounded px-2 py-0.5 text-sm flex items-center">
                                <Star className="w-3 h-3 fill-anthracite mr-1" />
                                {provider.rating}
                              </div>
                              <span className="text-sm text-gray-500 ml-1">({provider.reviews})</span>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="p-0">
                          <p className="text-gray-600 mb-3 text-sm">
                            {provider.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-1 mb-3">
                            {provider.services.map((service, index) => (
                              <span 
                                key={index} 
                                className="text-xs bg-gray-100 rounded-full px-2.5 py-1"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                            <div className="flex items-center">
                              <Briefcase className="w-3 h-3 mr-1" />
                              <span>{provider.experience}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              <span>{provider.responseTime}</span>
                            </div>
                            {provider.verified && (
                              <div className="flex items-center text-green-600">
                                <Shield className="w-3 h-3 mr-1" />
                                <span>Verified</span>
                              </div>
                            )}
                          </div>
                        </CardContent>
                        
                        <CardFooter className="p-0 pt-3 justify-end space-x-2">
                          <Button variant="outline" className="text-sm border-gray-200">
                            View Profile
                          </Button>
                          <Button className="text-sm bg-yellow-400 hover:bg-yellow-500 text-anthracite">
                            Request Quote
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="border-yellow-300 text-anthracite hover:bg-yellow-50 font-medium mr-2">
                  Previous
                </Button>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-anthracite font-medium">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
