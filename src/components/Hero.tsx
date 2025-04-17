
import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-yellow-50 to-yellow-100 overflow-hidden">
      <div className="absolute inset-0 bg-white/30 z-0"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-anthracite mb-6 font-poster">
            Find Your Perfect Home Service Professional
          </h1>
          <p className="text-lg md:text-xl text-anthracite-light opacity-90 mb-8 max-w-2xl mx-auto">
            Connect with trusted experts for all your home repair and improvement needs. 
            Get upfront quotes, special offers, and verified professionals.
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-4 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="pl-10 pr-3 py-3 w-full rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 outline-none"
                />
              </div>
              <div className="relative flex-grow">
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <input
                  type="text"
                  placeholder="Enter your zip code"
                  className="pl-10 pr-3 py-3 w-full rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 outline-none"
                />
              </div>
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-anthracite font-medium rounded-lg px-6">
                Search
              </Button>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-gray-500">
            <span>Popular:</span>
            <Button variant="link" className="p-0 h-auto text-anthracite-light hover:text-yellow-600">
              Plumbing
            </Button>
            <Button variant="link" className="p-0 h-auto text-anthracite-light hover:text-yellow-600">
              Electrical
            </Button>
            <Button variant="link" className="p-0 h-auto text-anthracite-light hover:text-yellow-600">
              Landscaping
            </Button>
            <Button variant="link" className="p-0 h-auto text-anthracite-light hover:text-yellow-600">
              House Cleaning
            </Button>
            <Button variant="link" className="p-0 h-auto text-anthracite-light hover:text-yellow-600">
              Painting
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
