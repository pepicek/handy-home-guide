
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorksComponent from "@/components/HowItWorks";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, Clock, Users } from "lucide-react";

const HowItWorksPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-300 to-yellow-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-poster text-4xl md:text-5xl lg:text-6xl text-anthracite font-bold mb-6">
              How YelloPago Works
            </h1>
            <p className="text-lg md:text-xl text-anthracite/80 max-w-2xl mx-auto mb-8">
              Find and book trusted service professionals in just a few simple steps. 
              Our platform makes it easy to get things done.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/search">
                <Button size="lg" className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
                  Find Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <HowItWorksComponent />

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-anthracite mb-12 font-poster">
              Why Choose YelloPago
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Service</h3>
                <p className="text-gray-600">Verified professionals with real reviews from customers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Secure Booking</h3>
                <p className="text-gray-600">Protected payments and verified service providers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Save Time</h3>
                <p className="text-gray-600">Quick booking process and instant quotes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Large Network</h3>
                <p className="text-gray-600">Access to thousands of qualified professionals</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
