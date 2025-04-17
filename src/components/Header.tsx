
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Search, User, Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <div className="bg-yellow-400 rounded-full p-2 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-anthracite"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span className="font-poster text-xl md:text-2xl font-bold text-anthracite">
              HomeServicePro<span className="text-yellow-500">Hub</span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-4">
            <Link to="/search" className="hover:text-yellow-600 font-medium">Find Services</Link>
            <Link to="/special-offers" className="hover:text-yellow-600 font-medium">Special Offers</Link>
            <Link to="/providers" className="hover:text-yellow-600 font-medium">For Providers</Link>
            <Link to="/about" className="hover:text-yellow-600 font-medium">About</Link>
          </nav>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-anthracite font-medium">
              Register
            </Button>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <Link to="/search" className="w-full">Find Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/special-offers" className="w-full">Special Offers</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/providers" className="w-full">For Providers</Link>
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
