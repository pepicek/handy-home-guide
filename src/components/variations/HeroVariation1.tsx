
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { 
  Search, 
  MapPin, 
  Calendar, 
  Star, 
  ChevronDown, 
  Filter, 
  BookOpen, 
  Briefcase, 
  Clock, 
  Users, 
  Check 
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HeroVariation1 = () => {
  const [activeTab, setActiveTab] = useState("service");
  const [searchRadius, setSearchRadius] = useState<number>(10);
  const [savedSearches, setSavedSearches] = useState<string[]>([
    "Plumbers near Downtown",
    "House Cleaning Services"
  ]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-tr from-yellow-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-10">
            <h1 className="text-5xl md:text-6xl font-bold text-anthracite mb-6 font-sans leading-tight tracking-tight">
              Find the right pro for your every need
            </h1>
            <p className="text-xl text-anthracite/80 mb-6">
              Compare local professionals, read verified reviews, and book appointments directly.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-5 mb-8">
            <Tabs defaultValue="service" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="service" className="text-base font-medium">
                  <Search className="w-4 h-4 mr-2" />
                  Find a Service
                </TabsTrigger>
                <TabsTrigger value="project" className="text-base font-medium">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Multi-skill Project
                </TabsTrigger>
                <TabsTrigger value="research" className="text-base font-medium">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Market Research
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="service" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                  <div className="md:col-span-5 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-600" />
                    <input
                      type="text"
                      placeholder="What service do you need?"
                      className="pl-10 pr-3 py-3 w-full rounded-xl border border-yellow-200 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none"
                    />
                  </div>
                  
                  <div className="md:col-span-4 relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-600" />
                    <input
                      type="text"
                      placeholder="Your location"
                      className="pl-10 pr-3 py-3 w-full rounded-xl border border-yellow-200 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none"
                    />
                  </div>
                  
                  <div className="md:col-span-3">
                    <Button className="w-full bg-anthracite hover:bg-anthracite/90 text-yellow-400 py-3 h-full rounded-xl">
                      Find Professionals
                    </Button>
                  </div>
                  
                  <div className="md:col-span-12">
                    <div className="flex items-center justify-between pt-3">
                      <div className="flex gap-4 items-center">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="flex items-center border-yellow-200 hover:bg-yellow-50 text-sm h-9 gap-2">
                              <Clock className="w-4 h-4" />
                              Availability
                              <ChevronDown className="w-3 h-3 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-56">
                            <div className="grid gap-2">
                              <div className="flex items-center space-x-2">
                                <input type="checkbox" id="any-time" className="rounded border-yellow-300" />
                                <label htmlFor="any-time" className="text-sm">Any time</label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input type="checkbox" id="this-week" className="rounded border-yellow-300" />
                                <label htmlFor="this-week" className="text-sm">This week</label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input type="checkbox" id="weekend" className="rounded border-yellow-300" />
                                <label htmlFor="weekend" className="text-sm">Weekend availability</label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input type="checkbox" id="evenings" className="rounded border-yellow-300" />
                                <label htmlFor="evenings" className="text-sm">Evening appointments</label>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                        
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="flex items-center border-yellow-200 hover:bg-yellow-50 text-sm h-9 gap-2">
                              <MapPin className="w-4 h-4" />
                              Within {searchRadius} miles
                              <ChevronDown className="w-3 h-3 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-56">
                            <div className="grid gap-4">
                              <div className="space-y-2">
                                <h4 className="font-medium text-sm">Search radius</h4>
                                <input
                                  type="range"
                                  min="1"
                                  max="50"
                                  value={searchRadius}
                                  onChange={(e) => setSearchRadius(parseInt(e.target.value))}
                                  className="w-full"
                                />
                                <div className="flex justify-between text-xs text-gray-500">
                                  <span>1 mile</span>
                                  <span>25 miles</span>
                                  <span>50 miles</span>
                                </div>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                        
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="flex items-center border-yellow-200 hover:bg-yellow-50 text-sm h-9 gap-2">
                              <Star className="w-4 h-4" />
                              Rating
                              <ChevronDown className="w-3 h-3 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-56">
                            <div className="grid gap-2">
                              <div className="flex items-center space-x-2">
                                <input type="radio" id="any-rating" name="rating" className="rounded border-yellow-300" />
                                <label htmlFor="any-rating" className="text-sm">Any rating</label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input type="radio" id="4-plus" name="rating" className="rounded border-yellow-300" />
                                <label htmlFor="4-plus" className="text-sm flex items-center">
                                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                  <span className="ml-1">4.0+ stars</span>
                                </label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input type="radio" id="4.5-plus" name="rating" className="rounded border-yellow-300" />
                                <label htmlFor="4.5-plus" className="text-sm flex items-center">
                                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                  <span className="ml-1">4.5+ stars</span>
                                </label>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      <Button variant="ghost" className="text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50 text-sm">
                        <Filter className="w-4 h-4 mr-1" /> More filters
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="project" className="mt-0">
                <div className="grid grid-cols-1 gap-4">
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-3 text-yellow-600" />
                    <textarea
                      placeholder="Describe your project in detail (e.g. 'I need to renovate my kitchen, including plumbing, electrical, and cabinet installation')"
                      className="pl-10 pr-3 py-3 w-full rounded-xl border border-yellow-200 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none h-32"
                    ></textarea>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-600" />
                      <input
                        type="text"
                        placeholder="Project location"
                        className="pl-10 pr-3 py-3 w-full rounded-xl border border-yellow-200 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none"
                      />
                    </div>
                    
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-600" />
                      <Select>
                        <SelectTrigger className="w-full h-12 pl-10 border-yellow-200 rounded-xl">
                          <SelectValue placeholder="Project timeframe" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectGroup>
                            <SelectLabel>Project Timeline</SelectLabel>
                            <SelectItem value="urgent">Urgent (ASAP)</SelectItem>
                            <SelectItem value="week">Within a week</SelectItem>
                            <SelectItem value="month">Within a month</SelectItem>
                            <SelectItem value="quarter">Next 3 months</SelectItem>
                            <SelectItem value="planning">Just planning</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400 py-3 rounded-xl">
                    Find Multiple Pros for My Project
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="research" className="mt-0">
                <div className="grid grid-cols-1 gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-600" />
                      <Select>
                        <SelectTrigger className="w-full h-12 pl-10 border-yellow-200 rounded-xl">
                          <SelectValue placeholder="Business category" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectGroup>
                            <SelectLabel>Service Categories</SelectLabel>
                            <SelectItem value="plumbing">Plumbing</SelectItem>
                            <SelectItem value="electrical">Electrical</SelectItem>
                            <SelectItem value="landscaping">Landscaping</SelectItem>
                            <SelectItem value="cleaning">Cleaning</SelectItem>
                            <SelectItem value="construction">Construction</SelectItem>
                            <SelectItem value="renovation">Renovation</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-600" />
                      <input
                        type="text"
                        placeholder="Search area or region"
                        className="pl-10 pr-3 py-3 w-full rounded-xl border border-yellow-200 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-600" />
                      <Select>
                        <SelectTrigger className="w-full h-12 pl-10 border-yellow-200 rounded-xl">
                          <SelectValue placeholder="Business size" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="any">Any size</SelectItem>
                          <SelectItem value="small">Small (1-10 employees)</SelectItem>
                          <SelectItem value="medium">Medium (11-50 employees)</SelectItem>
                          <SelectItem value="large">Large (50+ employees)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-600" />
                      <Select>
                        <SelectTrigger className="w-full h-12 pl-10 border-yellow-200 rounded-xl">
                          <SelectValue placeholder="Years in business" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="any">Any time period</SelectItem>
                          <SelectItem value="new">New (< 2 years)</SelectItem>
                          <SelectItem value="established">Established (2-5 years)</SelectItem>
                          <SelectItem value="experienced">Experienced (5-10 years)</SelectItem>
                          <SelectItem value="veteran">Veteran (10+ years)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="relative">
                      <Star className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-600" />
                      <Select>
                        <SelectTrigger className="w-full h-12 pl-10 border-yellow-200 rounded-xl">
                          <SelectValue placeholder="Customer rating" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="any">Any rating</SelectItem>
                          <SelectItem value="3plus">3+ stars</SelectItem>
                          <SelectItem value="4plus">4+ stars</SelectItem>
                          <SelectItem value="4.5plus">4.5+ stars</SelectItem>
                          <SelectItem value="5">5 stars only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400 py-3 rounded-xl">
                    Research Market Competitors
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {activeTab === "service" && (
            <div className="flex items-center justify-between text-sm text-anthracite-light">
              <div className="flex items-center gap-1">
                <span>Popular:</span>
                {["Plumbing", "Electrical", "Landscaping", "House Cleaning"].map(term => (
                  <Button key={term} variant="link" className="p-1 h-auto text-yellow-600 hover:text-yellow-800">
                    {term}
                  </Button>
                ))}
              </div>
              
              {savedSearches.length > 0 && (
                <div className="flex items-center gap-2">
                  <span>Saved searches:</span>
                  <Select>
                    <SelectTrigger className="h-8 w-48 border-yellow-200 text-xs">
                      <SelectValue placeholder="Your saved searches" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {savedSearches.map(search => (
                        <SelectItem key={search} value={search}>
                          {search}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroVariation1;
