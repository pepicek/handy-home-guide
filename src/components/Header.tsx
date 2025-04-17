import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Search, User, Bell, Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-yellow-300 to-yellow-200 rotate-[-90deg] border-b border-yellow-500/20 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center group">
            <div className="bg-anthracite rounded-xl p-2 mr-2 rotate-3 group-hover:rotate-6 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </div>
            <span className="font-poster text-2xl md:text-3xl font-bold text-anthracite">
              Yello<span className="text-yellow-600">Pago</span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-4">
            <Link to="/search" className="hover:text-yellow-800 font-medium transition-colors duration-200">Find Pros</Link>
            <Link to="/special-offers" className="hover:text-yellow-800 font-medium transition-colors duration-200">Deals</Link>
            <Link to="/providers" className="hover:text-yellow-800 font-medium transition-colors duration-200">Join as Pro</Link>
            <Link to="/about" className="hover:text-yellow-800 font-medium transition-colors duration-200">About</Link>
          </nav>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-yellow-500/20">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-yellow-500/20">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="flex items-center gap-2 border-yellow-600/30 hover:bg-yellow-500/20">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </Button>
            <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400 font-medium">
              Register
            </Button>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-yellow-500/20">
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

export default Header;
