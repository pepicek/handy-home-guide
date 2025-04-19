
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const GuidedSearch = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-yellow-300 to-yellow-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-anthracite mb-6">
                Guided Search
              </h1>
              <p className="text-lg text-anthracite/70 mb-8">
                Let us help you find the perfect service provider for your needs.
              </p>
              <div className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    What type of service do you need?
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home-repair">Home Repair</SelectItem>
                      <SelectItem value="cleaning">Cleaning</SelectItem>
                      <SelectItem value="landscaping">Landscaping</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Where do you need this service?
                  </label>
                  <Input placeholder="Enter your location" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    When do you need this service?
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">As soon as possible</SelectItem>
                      <SelectItem value="this-week">This week</SelectItem>
                      <SelectItem value="next-week">Next week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full">Find Providers</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GuidedSearch;
