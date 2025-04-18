
import { Button } from "@/components/ui/button";
import { Search, MapPin, ChartBar, ArrowRight, Building, BarChart3, Star } from "lucide-react";
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
  const [dataType, setDataType] = useState("competition");

  const handleSearch = () => {
    navigate(`/search/market?category=${encodeURIComponent(category)}&area=${encodeURIComponent(area)}&dataType=${dataType}`);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-anthracite-light via-anthracite to-anthracite-dark">
      <div className="absolute inset-0 bg-pattern opacity-5 z-0"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 animate-in fade-in slide-in-from-bottom duration-700">
            Market Research
            <br/>
            <span className="text-yellow-400">For Service Professionals</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 opacity-90 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            Analyze competition, uncover market trends, and gain valuable insights to grow your service business.
          </p>
          
          <div className="bg-white/10 backdrop-blur rounded-2xl shadow-xl p-6 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-300 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Building className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium text-white">Business Category</span>
                </div>
                <Select onValueChange={setCategory}>
                  <SelectTrigger className="border-white/30 bg-white/10 text-white">
                    <SelectValue placeholder="Select Service Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="plumbing">Plumbing</SelectItem>
                    <SelectItem value="electrical">Electrical</SelectItem>
                    <SelectItem value="landscaping">Landscaping</SelectItem>
                    <SelectItem value="cleaning">Cleaning</SelectItem>
                    <SelectItem value="construction">Construction</SelectItem>
                    <SelectItem value="health">Health & Wellness</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium text-white">Market Area</span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="City, State or Region"
                    className="pl-4 pr-3 py-3 w-full rounded-xl border border-white/30 bg-white/10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all duration-200"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium text-white">Research Focus</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "competition", label: "Competition Analysis", icon: <ChartBar className="w-4 h-4" /> },
                    { id: "demand", label: "Market Demand", icon: <BarChart3 className="w-4 h-4" /> },
                    { id: "pricing", label: "Pricing Strategy", icon: <Search className="w-4 h-4" /> }
                  ].map((item) => (
                    <Button
                      key={item.id}
                      type="button"
                      variant={dataType === item.id ? "default" : "outline"}
                      className={`border flex items-center justify-center gap-2 ${
                        dataType === item.id 
                          ? "bg-yellow-400 text-anthracite border-yellow-400" 
                          : "bg-white/5 text-white border-white/30 hover:bg-white/10"
                      }`}
                      onClick={() => setDataType(item.id)}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Button>
                  ))}
                </div>
              </div>

              <Button 
                onClick={handleSearch}
                className="col-span-full bg-yellow-400 hover:bg-yellow-500 text-anthracite font-medium h-14 rounded-xl transition-all duration-300 relative overflow-hidden group mt-2"
              >
                <span className="relative z-10 flex items-center text-lg">
                  Analyze Market
                  <ChartBar className="ml-2 w-5 h-5" />
                </span>
              </Button>
            </div>

            <div className="mt-6 pt-4 border-t border-white/20">
              <div className="text-sm text-white mb-2 font-medium">Popular searches:</div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Home Services",
                  "Professional Services",
                  "Construction",
                  "Wellness",
                  "Auto Repair",
                  "IT Services"
                ].map((cat) => (
                  <Button
                    key={cat}
                    variant="outline"
                    size="sm"
                    className="bg-white/5 border-white/30 text-white hover:bg-white/10"
                    onClick={() => {
                      setCategory(cat);
                    }}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-white animate-in fade-in slide-in-from-bottom duration-700 delay-450">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-full bg-yellow-400/20">
                <BarChart3 className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="font-semibold">Real-time Market Data</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-full bg-yellow-400/20">
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="font-semibold">Trusted by 5k+ Businesses</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-anthracite-dark to-transparent"></div>
    </div>
  );
};

export default HeroVariation3;
