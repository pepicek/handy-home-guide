
import { Button } from "@/components/ui/button";
import { Search, MapPin, ArrowRight, Filter, Briefcase, Shield, Clock, Star } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeroVariation2 = () => {
  const navigate = useNavigate();
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [radius, setRadius] = useState("10");
  const [availability, setAvailability] = useState("");

  const handleSearch = () => {
    navigate(`/search/services?service=${encodeURIComponent(service)}&location=${encodeURIComponent(location)}&radius=${radius}&availability=${availability}`);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      <div className="absolute inset-0 bg-pattern opacity-5 z-0"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-anthracite mb-6 animate-in fade-in slide-in-from-bottom duration-700">
            Find Local Service Pros
            <br/>
            <span className="text-amber-600">In Your Neighborhood</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-anthracite-light opacity-90 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            Compare local professionals, check availability, and find the perfect match for your service needs.
          </p>
          
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-6 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-5 h-5 text-amber-600" />
                  <span className="font-medium text-anthracite">Service Type</span>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-600" />
                  <input
                    type="text"
                    placeholder="What service do you need?"
                    className="pl-10 pr-3 py-3 w-full rounded-xl border border-anthracite/20 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all duration-200"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span className="font-medium text-anthracite">Location</span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your location"
                    className="pl-4 pr-3 py-3 w-full rounded-xl border border-anthracite/20 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all duration-200"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Filter className="w-5 h-5 text-amber-600" />
                  <span className="font-medium text-anthracite">Search Radius</span>
                </div>
                <Select defaultValue="10" onValueChange={setRadius}>
                  <SelectTrigger className="border-anthracite/20">
                    <SelectValue placeholder="Search Radius" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 miles</SelectItem>
                    <SelectItem value="10">10 miles</SelectItem>
                    <SelectItem value="25">25 miles</SelectItem>
                    <SelectItem value="50">50 miles</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <span className="font-medium text-anthracite">Availability</span>
                </div>
                <Select onValueChange={setAvailability}>
                  <SelectTrigger className="border-anthracite/20">
                    <SelectValue placeholder="Any Availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="tomorrow">Tomorrow</SelectItem>
                    <SelectItem value="this-week">This Week</SelectItem>
                    <SelectItem value="next-week">Next Week</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleSearch}
                className="col-span-full bg-amber-600 hover:bg-amber-700 text-white font-medium h-14 rounded-xl transition-all duration-300 relative overflow-hidden group mt-2"
              >
                <span className="relative z-10 flex items-center text-lg">
                  Find Local Pros
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>

            <div className="mt-6 pt-4 border-t border-anthracite/10">
              <div className="text-sm text-anthracite mb-2 font-medium">Popular services:</div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Plumbing",
                  "Electrical",
                  "Landscaping",
                  "House Cleaning",
                  "Painting",
                  "HVAC"
                ].map((svc) => (
                  <Button
                    key={svc}
                    variant="outline"
                    size="sm"
                    className="bg-amber-50 border-amber-200 text-anthracite hover:bg-amber-100"
                    onClick={() => {
                      setService(svc);
                    }}
                  >
                    {svc}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-anthracite animate-in fade-in slide-in-from-bottom duration-700 delay-450">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-full bg-amber-100">
                <Shield className="w-5 h-5 text-amber-600" />
              </div>
              <span className="font-semibold">Verified Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-full bg-amber-100">
                <Star className="w-5 h-5 text-amber-600 fill-amber-600" />
              </div>
              <span className="font-semibold">4.9/5 Customer Rating</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroVariation2;
