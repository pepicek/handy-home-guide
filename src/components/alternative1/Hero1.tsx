
import { Button } from "@/components/ui/button";
import { Search, MapPin, Clock, Star, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hero1 = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleStarClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 1000);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-white to-pink-50">
      <div className="absolute inset-0 bg-grid-purple/10 opacity-10 z-0"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-silkscreen mb-6">
              Find Your Perfect Pro
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                With a Touch of Magic
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Connect with trusted experts for all your needs. 
              Get instant quotes, special offers, and verified professionals.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-6 max-w-3xl mx-auto hover:shadow-purple-100/50 transition-shadow duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 group-hover:text-purple-600 transition-colors" />
                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="pl-10 pr-3 py-3 w-full rounded-xl border border-purple-100 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all duration-200"
                />
              </div>
              
              <div className="relative group">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 group-hover:text-purple-600 transition-colors" />
                <input
                  type="text"
                  placeholder="Your location"
                  className="pl-10 pr-3 py-3 w-full rounded-xl border border-purple-100 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all duration-200"
                />
              </div>

              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" />
                <Select>
                  <SelectTrigger className="w-full h-12 pl-10 rounded-xl border-purple-100 focus:ring-2 focus:ring-purple-400 focus:border-purple-400">
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

              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium h-12 rounded-xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Find Pros Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
              <span className="text-gray-500">Popular:</span>
              {[
                "Plumbing",
                "Electrical",
                "Landscaping",
                "House Cleaning",
                "Painting"
              ].map((service, index) => (
                <Button
                  key={service}
                  variant="link"
                  className="p-0 h-auto text-purple-600 hover:text-purple-800 hover:underline font-medium"
                >
                  {service}
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex items-center justify-center gap-8 text-gray-600"
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: isSpinning ? 360 : 0 }}
                transition={{ duration: 0.5 }}
                onClick={handleStarClick}
                className="cursor-pointer"
              >
                <Star className="w-5 h-5 text-purple-500 fill-purple-500" />
              </motion.div>
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                ].map((src, i) => (
                  <motion.img
                    key={i}
                    src={src}
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border

-white object-cover hover:scale-110 transition-transform cursor-pointer"
                    whileHover={{ y: -2 }}
                  />
                ))}
              </div>
              <span className="font-semibold">10k+ Happy Customers</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero1;
