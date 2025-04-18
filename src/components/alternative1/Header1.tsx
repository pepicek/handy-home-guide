
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Search, User, Bell, Sparkles, Heart } from "lucide-react";
import { useState } from "react";

const Header1 = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLogoClick = () => {
    setIsLiked(true);
    setLikeCount(prev => prev + 1);
    setTimeout(() => setIsLiked(false), 1000);
  };

  return (
    <header className="bg-gradient-to-r from-purple-100 via-purple-50 to-white border-b border-purple-200/20 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center group" onClick={handleLogoClick}>
            <div className="bg-purple-600 rounded-xl p-2 mr-2 group-hover:rotate-12 transition-all duration-300 relative">
              <Sparkles className="w-6 h-6 text-white" />
              {isLiked && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute -top-2 -right-2"
                >
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                </motion.div>
              )}
            </div>
            <span className="font-silkscreen text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
              Yello<span className="text-purple-600">Pago</span>
            </span>
            {likeCount > 0 && (
              <span className="ml-2 text-xs text-purple-600">+{likeCount}</span>
            )}
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-4">
            <Link to="/search" className="group relative">
              <span className="relative z-10 font-medium transition-colors duration-200">Find Pros</span>
              <div className="absolute inset-0 bg-purple-100 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-lg -z-0" />
            </Link>
            <Link to="/special-offers" className="group relative">
              <span className="relative z-10 font-medium transition-colors duration-200">Deals</span>
              <div className="absolute inset-0 bg-purple-100 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-lg -z-0" />
            </Link>
            <Link to="/how-it-works" className="group relative">
              <span className="relative z-10 font-medium transition-colors duration-200">How It Works</span>
              <div className="absolute inset-0 bg-purple-100 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-lg -z-0" />
            </Link>
            <Link to="/providers" className="group relative">
              <span className="relative z-10 font-medium transition-colors duration-200">Join as Pro</span>
              <div className="absolute inset-0 bg-purple-100 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-lg -z-0" />
            </Link>
          </nav>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-100 group">
              <Search className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-100 group">
              <Bell className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button variant="outline" className="flex items-center gap-2 border-purple-200 hover:bg-purple-100 group">
              <User className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span>Sign In</span>
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-medium">
              Register
            </Button>
          </div>
        </div>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-purple-100">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-white/95 backdrop-blur-sm">
              <DropdownMenuItem>
                <Link to="/search" className="w-full">Find Pros</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/special-offers" className="w-full">Deals</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/how-it-works" className="w-full">How It Works</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/providers" className="w-full">Join as Pro</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/about" className="w-full">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/signin" className="w-full">Sign In</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/register" className="w-full">Register</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header1;
