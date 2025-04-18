
import { Button } from "@/components/ui/button";
import { Search, MapPin, ArrowRight, Star, ChartBar } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeroVariation3 = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");

  const handleSearch = () => {
    navigate(`/search/market?category=${encodeURIComponent(category)}&area=${encodeURIComponent(area)}`);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="absolute inset-0 bg-pattern opacity-5 z-0"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-condensed mb-6 tracking-tight">
            Market Research
            <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
              Made Simple
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover market trends, analyze competition, and make data-driven decisions 
            for your service business.
          </p>
          
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Select onValueChange={setCategory}>
                  <SelectTrigger className="pl-10 border-anthracite/20">
                    <SelectValue placeholder="Service Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="plumbing">Plumbing</SelectItem>
                    <SelectItem value="electrical">Electrical</SelectItem>
                    <SelectItem value="landscaping">Landscaping</SelectItem>
                    <SelectItem value="cleaning">Cleaning</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Area or Region"
                  className="pl-10 pr-3 py-3 w-full rounded-xl border border-anthracite/20 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-all duration-200"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                />
              </div>

              <Button 
                onClick={handleSearch}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium h-12 rounded-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Analyze Market
                  <ChartBar className="ml-2 w-4 h-4" />
                </span>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
              <span className="text-gray-500">Popular searches:</span>
              {[
                "Home Services",
                "Professional Services",
                "Construction",
                "Wellness"
              ].map((cat) => (
                <Button
                  key={cat}
                  variant="link"
                  className="p-0 h-auto text-emerald-600 hover:text-emerald-800 hover:underline font-medium"
                  onClick={() => {
                    setCategory(cat);
                    handleSearch();
                  }}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 p-2 rounded-full">
                <ChartBar className="w-5 h-5 text-emerald-500" />
              </div>
              <span className="font-semibold">Real-time Analytics</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 p-2 rounded-full">
                <Star className="w-5 h-5 text-emerald-500" />
              </div>
              <span className="font-semibold">Trusted by 10k+ Businesses</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroVariation3;
