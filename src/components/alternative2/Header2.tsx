
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Search, User, Bell, Briefcase } from "lucide-react";
import { useState } from "react";

const Header2 = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-200/20 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link 
            to="/" 
            className="flex items-center group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="bg-slate-800 rounded-xl p-2 mr-2 transition-all duration-500 relative overflow-hidden">
              <Briefcase className="w-6 h-6 text-white relative z-10" />
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 transition-transform duration-500 ${
                  isHovered ? 'translate-y-0' : 'translate-y-full'
                }`}
              />
            </div>
            <span className="font-marcellus text-2xl md:text-3xl font-bold text-slate-800">
              Yello<span className="text-blue-600">Pago</span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-8">
            {[
              { to: "/search", text: "Find Pros" },
              { to: "/special-offers", text: "Deals" },
              { to: "/how-it-works", text: "How It Works" },
              { to: "/providers", text: "Join as Pro" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative group"
              >
                <span className="relative z-10 font-medium text-slate-600 transition-colors duration-200 group-hover:text-slate-900">
                  {link.text}
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-100">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-100">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="flex items-center gap-2 border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </Button>
            <Button className="bg-slate-800 hover:bg-slate-900 text-white font-medium transition-colors">
              Register
            </Button>
          </div>
        </div>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-slate-100">
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

export default Header2;
