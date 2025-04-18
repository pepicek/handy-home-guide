
import { Button } from "@/components/ui/button";
import { Search, MapPin, ArrowRight, Briefcase, Star } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroVariation1 = () => {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    navigate(`/search/projects?description=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-yellow-100 to-amber-50">
      <div className="absolute inset-0 bg-doodle opacity-5 z-0"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-anthracite mb-6 animate-in fade-in slide-in-from-bottom duration-700">
            Find Your Perfect Pro<br/>
            <span className="text-yellow-600">For Any Project</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-anthracite-light opacity-90 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            Describe your project and get matched with the right professionals. 
            From quick fixes to major renovations.
          </p>
          
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-6 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="relative col-span-full md:col-span-9">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-5 h-5 text-yellow-600" />
                  <span className="font-medium text-anthracite">Project Description</span>
                </div>
                <textarea
                  placeholder="Describe your project in detail (e.g., Complete bathroom renovation with new fixtures, tiling, and plumbing...)"
                  className="pl-4 pr-3 py-3 w-full rounded-xl border border-anthracite/20 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all duration-200 resize-none h-28"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="relative col-span-full md:col-span-3">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-yellow-600" />
                  <span className="font-medium text-anthracite">Location</span>
                </div>
                <input
                  type="text"
                  placeholder="Your location"
                  className="pl-4 pr-3 py-3 w-full rounded-xl border border-anthracite/20 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all duration-200 h-12"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <Button 
                onClick={handleSearch}
                className="col-span-full bg-anthracite hover:bg-anthracite-light text-yellow-400 font-medium h-14 rounded-xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center text-lg">
                  Find Pros For My Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>

            <div className="mt-6 pt-4 border-t border-anthracite/10">
              <div className="text-sm text-anthracite mb-2 font-medium">Popular project searches:</div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Kitchen Remodel",
                  "Bathroom Renovation",
                  "Home Office Setup",
                  "Backyard Landscaping",
                  "Roof Repair"
                ].map((project) => (
                  <Button
                    key={project}
                    variant="outline"
                    size="sm"
                    className="bg-yellow-50 border-yellow-200 text-anthracite hover:bg-yellow-100"
                    onClick={() => {
                      setDescription(project);
                    }}
                  >
                    {project}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-anthracite animate-in fade-in slide-in-from-bottom duration-700 delay-450">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold">10k+ Projects Completed</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroVariation1;
