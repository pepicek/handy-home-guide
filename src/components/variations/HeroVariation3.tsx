
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { 
  Search, 
  MapPin, 
  ChevronRight, 
  Filter, 
  CheckCircle, 
  Shield, 
  Clock, 
  Star, 
  Heart, 
  ExternalLink,
  Bell,
  Calendar,
  Info
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";

const HeroVariation3 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [showFeatureHint, setShowFeatureHint] = useState(false);
  const [savedLocations, setSavedLocations] = useState<string[]>([
    "Current location", 
    "Home", 
    "Office", 
    "Summer house"
  ]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Easter egg: If user types "best" in search, highlight a special feature
  useEffect(() => {
    if (searchQuery.toLowerCase().includes("best") && !showFeatureHint) {
      setShowFeatureHint(true);
      setTimeout(() => setShowFeatureHint(false), 4000);
    }
  }, [searchQuery]);

  // Easter egg: Auto-suggestion based on time of day
  const timeBasedSuggestion = () => {
    const hour = new Date().getHours();
    
    if (hour >= 6 && hour < 10) {
      return "Morning service ideas: Breakfast delivery, Coffee service, Emergency plumber";
    } else if (hour >= 12 && hour < 14) {
      return "Lunchtime service ideas: Food delivery, Cleaners, Handyman";
    } else if (hour >= 17 && hour < 21) {
      return "Evening service ideas: Dinner delivery, Babysitters, Home security";
    } else if (hour >= 22 || hour < 6) {
      return "Late night service ideas: Emergency services, 24/7 plumbers, Security";
    }
    return "Popular now: Cleaning, Plumbing, Electricians, HVAC";
  };

  const handleUseCurrentLocation = () => {
    toast({
      title: "Location detected",
      description: "Using your current location for more accurate results",
      duration: 3000,
    });
    setLocation("Current location");
  };

  const handleSearchFocus = () => {
    // Highlight the search box with a pulse animation
    if (searchInputRef.current) {
      searchInputRef.current.classList.add("ring-4", "ring-yellow-300", "ring-opacity-50");
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.classList.remove("ring-4", "ring-yellow-300", "ring-opacity-50");
        }
      }, 1000);
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-yellow-50 to-white">
      <div className="absolute inset-0 bg-grid-anthracite/5 z-0"></div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <div className="flex items-center justify-center mb-3">
              <Badge className="bg-yellow-500 text-white font-semibold px-3">YelloPago Assured</Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-sans font-bold mb-4 text-center text-anthracite">
              Find & Book <span className="relative">
                Trusted
                {showFeatureHint && (
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 text-anthracite text-xs font-medium px-2 py-1 rounded whitespace-nowrap animate-bounce">
                    All providers verified!
                  </span>
                )}
              </span> Pros
            </h1>
            <p className="text-xl text-anthracite/70 text-center max-w-2xl mx-auto">
              Compare quotes, read verified reviews, and book appointments with top-rated service providers in your area.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-100 p-6 mb-8 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-200/30">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={handleSearchFocus}
                  placeholder="What service are you looking for?"
                  className="pl-10 pr-3 py-4 w-full rounded-xl border border-yellow-200 focus:border-yellow-400 outline-none shadow-sm transition-all duration-300"
                />
                {searchQuery && (
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    &times;
                  </Button>
                )}
              </div>
              
              <div className="md:col-span-4 relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your location"
                  className="pl-10 pr-3 py-4 w-full rounded-xl border border-yellow-200 focus:border-yellow-400 outline-none shadow-sm transition-all duration-300"
                />
                <TooltipProvider>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={handleUseCurrentLocation}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-yellow-500 hover:text-yellow-600 hover:bg-yellow-50"
                      >
                        <MapPin className="w-4 h-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-anthracite text-white">
                      <p>Use current location</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              
              <div className="md:col-span-3 flex">
                <Button className="w-full bg-anthracite hover:bg-anthracite/90 text-yellow-400 py-4 h-auto rounded-xl font-medium transition-all duration-300 relative group">
                  <span className="relative z-10 flex items-center">
                    Search
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap items-center justify-between">
              <div className="flex flex-wrap items-center gap-1">
                <span className="text-sm text-gray-500 mr-2">Quick filters:</span>
                {["Available today", "Highly rated", "Special offers"].map((filter) => (
                  <Badge
                    key={filter}
                    variant="outline"
                    className="cursor-pointer hover:bg-yellow-100 transition-colors border-yellow-200"
                  >
                    {filter === "Available today" && <Clock className="w-3 h-3 mr-1" />}
                    {filter === "Highly rated" && <Star className="w-3 h-3 mr-1" />}
                    {filter === "Special offers" && <Heart className="w-3 h-3 mr-1" />}
                    {filter}
                  </Badge>
                ))}
                
                <Button variant="ghost" size="sm" className="text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50 ml-1 h-7 flex items-center gap-1 text-xs">
                  <Filter className="w-3 h-3" />
                  More filters
                </Button>
              </div>
              
              {savedLocations.length > 0 && (
                <div className="flex items-center gap-2 mt-2 md:mt-0 text-sm">
                  <span className="text-gray-500">Saved locations:</span>
                  <Select>
                    <SelectTrigger className="h-8 w-[150px] border-yellow-200">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {savedLocations.map(loc => (
                        <SelectItem 
                          key={loc} 
                          value={loc}
                          onClick={() => setLocation(loc)}
                        >
                          {loc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/80 p-4 rounded-xl border border-yellow-100 flex items-start gap-3 hover:shadow-md transition-all group">
              <div className="bg-yellow-100 rounded-full p-2 text-yellow-600 group-hover:bg-yellow-400 group-hover:text-anthracite transition-all">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-anthracite mb-1">Vetted Professionals</h3>
                <p className="text-sm text-gray-600">All service providers are pre-screened and background-checked.</p>
              </div>
            </div>
            
            <div className="bg-white/80 p-4 rounded-xl border border-yellow-100 flex items-start gap-3 hover:shadow-md transition-all group">
              <div className="bg-yellow-100 rounded-full p-2 text-yellow-600 group-hover:bg-yellow-400 group-hover:text-anthracite transition-all">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-anthracite mb-1">Service Guarantee</h3>
                <p className="text-sm text-gray-600">Your satisfaction is our priority with a 100% money-back guarantee.</p>
              </div>
            </div>
            
            <div className="bg-white/80 p-4 rounded-xl border border-yellow-100 flex items-start gap-3 hover:shadow-md transition-all group">
              <div className="bg-yellow-100 rounded-full p-2 text-yellow-600 group-hover:bg-yellow-400 group-hover:text-anthracite transition-all">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-anthracite mb-1">Quick Response</h3>
                <p className="text-sm text-gray-600">Get matched with available professionals within minutes.</p>
              </div>
            </div>
          </div>
          
          <div className="relative bg-yellow-100 rounded-xl p-4 border border-yellow-200">
            <div className="flex items-start gap-3">
              <div className="mt-1 text-yellow-600">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-anthracite mb-1">Pro Tip:</h3>
                <p className="text-sm text-gray-700">{timeBasedSuggestion()}</p>
              </div>
              <Button variant="ghost" size="sm" className="text-xs text-yellow-600 hover:bg-yellow-200/50 absolute right-2 top-2">
                Save search reminder <Bell className="ml-1 w-3 h-3" />
              </Button>
            </div>
          </div>
          
          <div className="mt-4 text-center text-sm flex justify-center gap-4 text-anthracite">
            <a href="#" className="flex items-center hover:text-yellow-700">
              <Calendar className="mr-1 w-4 h-4" />
              Schedule for later
            </a>
            <a href="#" className="flex items-center hover:text-yellow-700">
              <ExternalLink className="mr-1 w-4 h-4" />
              Browse service categories
            </a>
            <a href="#" className="flex items-center hover:text-yellow-700">
              <Bell className="mr-1 w-4 h-4" />
              Create search alert
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroVariation3;
