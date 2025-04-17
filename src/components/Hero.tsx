
import { Button } from "@/components/ui/button";
import { Search, MapPin, Clock, Star, ArrowRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100">
      <div className="absolute inset-0 bg-pattern opacity-10 z-0 animate-[pulse_8s_ease-in-out_infinite]"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-anthracite mb-6 font-poster animate-in fade-in slide-in-from-bottom duration-700">
            Find Your Perfect Pro<br/>
            <span className="text-yellow-600">In Just a Few Clicks</span>
          </h1>
          <p className="text-xl md:text-2xl text-anthracite-light opacity-90 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            Connect with trusted experts for all your needs. 
            Get instant quotes, special offers, and verified professionals.
          </p>
          
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-6 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-600" />
                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="pl-10 pr-3 py-3 w-full rounded-xl border border-yellow-200 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all duration-200"
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-600" />
                <input
                  type="text"
                  placeholder="Your location"
                  className="pl-10 pr-3 py-3 w-full rounded-xl border border-yellow-200 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all duration-200"
                />
              </div>

              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-600" />
                <Select>
                  <SelectTrigger className="w-full pl-10 rounded-xl border border-yellow-200 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400">
                    <SelectValue placeholder="When needed?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">Urgent (24h)</SelectItem>
                    <SelectItem value="week">This week</SelectItem>
                    <SelectItem value="month">This month</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="bg-anthracite hover:bg-anthracite-light text-yellow-400 font-medium h-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 animate-pulse">
                Find Pros Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
              <span className="text-anthracite-light">Popular:</span>
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
                  className="p-0 h-auto text-yellow-700 hover:text-yellow-900 hover:underline font-medium"
                >
                  {service}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-anthracite animate-in fade-in slide-in-from-bottom duration-700 delay-450">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <span className="font-semibold">10k+ Happy Customers</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
