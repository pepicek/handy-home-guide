
import { Button } from "@/components/ui/button";
import { Search, MapPin, Clock, Star, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hero2 = () => {
  const [activeField, setActiveField] = useState<string | null>(null);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-blue-50">
      <div className="absolute inset-0 bg-grid-slate/10 opacity-10 z-0"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-marcellus mb-6 leading-tight">
              Expert Solutions,
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Seamless Experience
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Find trusted professionals who deliver exceptional service. 
              Quality work, guaranteed satisfaction.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div 
                className={`relative transition-all duration-300 ${
                  activeField === 'service' ? 'scale-105' : ''
                }`}
                onFocus={() => setActiveField('service')}
                onBlur={() => setActiveField(null)}
              >
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="pl-10 pr-3 py-3 w-full rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                />
              </div>
              
              <div 
                className={`relative transition-all duration-300 ${
                  activeField === 'location' ? 'scale-105' : ''
                }`}
                onFocus={() => setActiveField('location')}
                onBlur={() => setActiveField(null)}
              >
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Your location"
                  className="pl-10 pr-3 py-3 w-full rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                />
              </div>

              <div 
                className={`relative transition-all duration-300 ${
                  activeField === 'time' ? 'scale-105' : ''
                }`}
                onFocus={() => setActiveField('time')}
                onBlur={() => setActiveField(null)}
              >
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <Select>
                  <SelectTrigger className="w-full h-12 pl-10 rounded-xl border-slate-200">
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
                className="bg-slate-800 hover:bg-slate-900 text-white font-medium h-12 rounded-xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Find Professionals
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <span className="text-slate-500">Top services:</span>
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
            className="mt-12 flex items-center justify-center gap-12 text-slate-600"
          >
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-blue-100 p-2 rounded-full">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
              </div>
              <span className="font-semibold">Verified Pros</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-blue-100 p-2 rounded-full">
                <Star className="w-5 h-5 text-blue-600" />
              </div>
              <span className="font-semibold">4.9/5 Rating</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero2;
