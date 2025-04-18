
import { Button } from "@/components/ui/button";
import { Search, MapPin, ArrowRight, Star, Briefcase } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeroVariation1 = () => {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");

  const handleSearch = () => {
    navigate(`/search/projects?description=${encodeURIComponent(description)}`);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-yellow-300 via-yellow-100 to-yellow-50">
      <div className="absolute inset-0 bg-doodle opacity-10 z-0"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-condensed mb-6 animate-in fade-in slide-in-from-bottom duration-700">
            Find Your Perfect Pro<br/>
            <span className="text-yellow-600">For Any Project</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-anthracite-light opacity-90 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            Describe your project and get matched with the right professionals. 
            From quick fixes to major renovations.
          </p>
          
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-6 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="relative col-span-full lg:col-span-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-600" />
                <textarea
                  placeholder="Describe your project (e.g., Complete bathroom renovation...)"
                  className="pl-10 pr-3 py-3 w-full rounded-xl border border-anthracite/20 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all duration-200 resize-none h-24"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <Button 
                onClick={handleSearch}
                className="bg-anthracite hover:bg-anthracite-light text-yellow-400 font-medium h-24 rounded-xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Find Pros Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Button>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-anthracite animate-in fade-in slide-in-from-bottom duration-700 delay-450">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold">10k+ Projects Done</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroVariation1;
