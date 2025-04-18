
import { Button } from "@/components/ui/button";
import { Search, MapPin, Clock, Star, ArrowRight, Wand2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import confetti from 'canvas-confetti';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hero3 = () => {
  const [searchText, setSearchText] = useState("");
  const [magicEffectActive, setMagicEffectActive] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    if (e.target.value.toLowerCase().includes('magic')) {
      setMagicEffectActive(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setTimeout(() => setMagicEffectActive(false), 1000);
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="absolute inset-0 bg-pattern opacity-5 z-0"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-space-grotesk mb-6 tracking-tight">
              Make Your Home
              <br/>
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
                  Magically Perfect
                </span>
                <motion.span
                  className="absolute -right-12 top-0"
                  animate={{
                    rotate: [0, 14, -8, 14, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  ✨
                </motion.span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Your home deserves the best care. Find experienced pros 
              who'll treat it like their own magical castle.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`bg-white/95 backdrop-blur rounded-2xl shadow-xl p-6 max-w-3xl mx-auto transition-all duration-300 ${
              magicEffectActive ? 'shadow-emerald-200' : ''
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative group">
                <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                  magicEffectActive ? 'text-emerald-500' : 'text-gray-400'
                } transition-colors duration-300`} />
                <input
                  type="text"
                  value={searchText}
                  onChange={handleSearchChange}
                  placeholder="Type 'magic' for a surprise..."
                  className="pl-10 pr-3 py-3 w-full rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-all duration-200"
                />
              </div>
              
              <div className="relative group">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Your magical address"
                  className="pl-10 pr-3 py-3 w-full rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-all duration-200"
                />
              </div>

              <div className="relative group">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                <Select>
                  <SelectTrigger className="w-full h-12 pl-10 rounded-xl border-gray-200 group-hover:border-emerald-400">
                    <SelectValue placeholder="When needed?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">Right Now! 🚀</SelectItem>
                    <SelectItem value="week">This Week ⏰</SelectItem>
                    <SelectItem value="month">This Month 📅</SelectItem>
                    <SelectItem value="flexible">I'm Flexible 🌈</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium h-12 rounded-xl transition-all duration-300 group overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center">
                  Find Your Pro
                  <Wand2 className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
              <span className="text-gray-500">Magic services:</span>
              {[
                "✨ Plumbing",
                "⚡ Electrical",
                "🌿 Landscaping",
                "🧹 Cleaning",
                "🎨 Painting"
              ].map((service) => (
                <Button
                  key={service}
                  variant="link"
                  className="p-0 h-auto text-emerald-600 hover:text-emerald-800 hover:underline font-medium"
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
            className="mt-12 flex flex-wrap justify-center gap-8 text-gray-600"
          >
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-emerald-100 p-2 rounded-full">
                <Star className="w-5 h-5 text-emerald-500" />
              </div>
              <span className="font-semibold">4.9/5 Magic Rating</span>
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
                  <motion.img
                    key={i}
                    src={src}
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    whileHover={{ scale: 1.2, zIndex: 10 }}
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

export default Hero3;
