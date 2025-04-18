
import { Button } from "@/components/ui/button";
import { Search, MapPin, ArrowRight, Star, Shield } from "lucide-react";
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

  const handleSearch = () => {
    navigate(`/search/services?service=${encodeURIComponent(service)}&location=${encodeURIComponent(location)}`);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-blue-50">
      <div className="absolute inset-0 bg-grid-slate/10 opacity-10 z-0"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-condensed mb-6 leading-tight">
            Expert Services,
            <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Right at Your Door
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Find and book trusted local service professionals.
            Quality work, guaranteed satisfaction.
          </p>
          
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="pl-10 pr-3 py-3 w-full rounded-xl border border-anthracite/20 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Your location"
                  className="pl-10 pr-3 py-3 w-full rounded-xl border border-anthracite/20 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <Button 
                onClick={handleSearch}
                className="bg-slate-800 hover:bg-slate-900 text-white font-medium h-12 rounded-xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Find Services
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
              <span className="text-slate-500">Popular:</span>
              {[
                "Plumbing",
                "Electrical",
                "Landscaping",
                "House Cleaning",
                "Painting"
              ].map((service) => (
                <Button
                  key={service}
                  variant="link"
                  className="p-0 h-auto text-blue-600 hover:text-blue-800 hover:underline font-medium"
                  onClick={() => {
                    setService(service);
                    handleSearch();
                  }}
                >
                  {service}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-12 text-slate-600">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <span className="font-semibold">Verified Pros</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <Star className="w-5 h-5 text-blue-600" />
              </div>
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroVariation2;
