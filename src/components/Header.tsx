
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isMobile = useMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 md:py-6 px-4 md:px-6 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <div className="bg-anthracite rounded-xl p-2 mr-2 rotate-3 group-hover:rotate-6 transition-transform duration-300">
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z" />
            </svg>
          </div>
          <span className="font-poster text-lg font-bold text-anthracite">
            Yello<span className="text-yellow-600">Pago</span>
          </span>
        </Link>

        {isMobile ? (
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        ) : (
          <nav className="flex items-center gap-6 text-sm">
            <Link to="/search" className="text-neutral-700 hover:text-yellow-600 transition-colors">
              Find Services
            </Link>
            <Link to="/special-offers" className="text-neutral-700 hover:text-yellow-600 transition-colors">
              Special Offers
            </Link>
            <Link to="/how-it-works" className="text-neutral-700 hover:text-yellow-600 transition-colors">
              How It Works
            </Link>
            <Link to="/providers" className="text-neutral-700 hover:text-yellow-600 transition-colors">
              For Service Providers
            </Link>
          </nav>
        )}

        <div className={cn("hidden md:flex items-center gap-2")}>
          <Link to="/signin">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link to="/client">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-anthracite">Client Portal</Button>
          </Link>
          <Link to="/dashboard">
            <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">Provider Login</Button>
          </Link>
        </div>

        {isMenuOpen && isMobile && (
          <div className="fixed inset-0 top-[72px] bg-white z-40 px-4 py-6">
            <nav className="flex flex-col gap-4 text-lg">
              <Link
                to="/search"
                className="p-2 hover:bg-yellow-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Services
              </Link>
              <Link
                to="/special-offers"
                className="p-2 hover:bg-yellow-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Special Offers
              </Link>
              <Link
                to="/how-it-works"
                className="p-2 hover:bg-yellow-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                to="/providers"
                className="p-2 hover:bg-yellow-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                For Service Providers
              </Link>
              <div className="border-t my-2"></div>
              <Link
                to="/signin"
                className="p-2 hover:bg-yellow-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/client"
                className="p-2 bg-yellow-500 hover:bg-yellow-600 text-anthracite rounded-md text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Client Portal
              </Link>
              <Link
                to="/dashboard"
                className="p-2 bg-anthracite hover:bg-anthracite/90 text-yellow-400 rounded-md text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Provider Login
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
