
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Search, User, Bell, Wand2 } from "lucide-react";
import { useState } from "react";

const Header3 = () => {
  const [magicCount, setMagicCount] = useState(0);
  
  const handleMagicClick = () => {
    setMagicCount(prev => prev + 1);
    if (magicCount === 2) {
      document.documentElement.style.setProperty('--header-hue', `${Math.random() * 360}deg`);
      setMagicCount(0);
    }
  };

  return (
    <header className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-teal-100 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center group" onClick={handleMagicClick}>
            <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl p-2 mr-2 group-hover:scale-110 transition-all duration-300">
              <Wand2 className="w-6 h-6 text-white group-hover:rotate-[15deg] transition-transform" />
            </div>
            <span className="font-space-grotesk text-2xl md:text-3xl font-bold">
              Yello<span className="text-emerald-500">Pago</span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            {[
              { to: "/search", text: "Find Pros" },
              { to: "/special-offers", text: "Deals" },
              { to: "/how-it-works", text: "How It Works" },
              { to: "/providers", text: "Join as Pro" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group relative px-2 py-1"
              >
                <span className="relative z-10 font-medium text-gray-700">
                  {link.text}
                </span>
                <span className="absolute inset-0 h-full w-full bg-emerald-100 rounded-lg scale-0 transition-transform group-hover:scale-100" />
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-emerald-100 group">
              <Search className="h-5 w-5 group-hover:-rotate-12 transition-transform" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-emerald-100 group">
              <Bell className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button variant="outline" className="flex items-center gap-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors">
              Register
            </Button>
          </div>
        </div>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-emerald-100">
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

export default Header3;
