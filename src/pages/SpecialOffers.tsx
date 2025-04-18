
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpecialOffersSection from "@/components/SpecialOffers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SpecialOffersPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-br from-yellow-300 to-yellow-100 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-anthracite mb-6 font-poster">
              Special Offers & Deals
            </h1>
            <p className="text-lg text-anthracite-light mb-8 max-w-2xl">
              Discover exclusive discounts and limited-time offers from top-rated service providers in your area.
            </p>
            
            <div className="bg-white/95 backdrop-blur rounded-xl p-6 max-w-3xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search deals"
                    className="pl-10 border-anthracite/20"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Your location"
                    className="pl-10 border-anthracite/20"
                  />
                </div>
                <Select>
                  <SelectTrigger className="border-anthracite/20 font-sans">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="home">Home Services</SelectItem>
                    <SelectItem value="repair">Repairs & Maintenance</SelectItem>
                    <SelectItem value="cleaning">Cleaning</SelectItem>
                    <SelectItem value="outdoor">Outdoor Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <SpecialOffersSection />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-anthracite mb-4">No deals to miss out!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Get notified when new offers become available in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="border-anthracite/20"
              />
              <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SpecialOffersPage;
