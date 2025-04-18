
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, Briefcase, Star, Users, DollarSign, Shield } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Reach More Customers",
    description: "Connect with homeowners actively seeking services in your area."
  },
  {
    icon: DollarSign,
    title: "Grow Your Business",
    description: "Set your own rates and expand your client base with our platform."
  },
  {
    icon: Star,
    title: "Build Your Reputation",
    description: "Collect verified reviews and showcase your expertise to potential clients."
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Get paid safely and on time through our secure payment system."
  },
  {
    icon: Briefcase,
    title: "Flexible Schedule",
    description: "Choose your working hours and manage jobs that fit your schedule."
  },
  {
    icon: CheckCircle2,
    title: "Easy Management",
    description: "Streamline your business with our easy-to-use management tools."
  }
];

const Providers = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-yellow-300 to-yellow-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-poster font-bold text-anthracite mb-6">
                Grow Your Business with YelloPago
              </h1>
              <p className="text-lg md:text-xl text-anthracite/80 mb-8">
                Join our network of trusted service providers and connect with customers 
                looking for quality home services in your area.
              </p>
              <div className="space-x-4">
                <Button 
                  size="lg"
                  className="bg-anthracite hover:bg-anthracite/90 text-yellow-400"
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-anthracite/30 hover:bg-yellow-500/20"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-poster font-bold text-anthracite mb-4">
                Why Partner With Us?
              </h2>
              <p className="text-lg text-anthracite/70">
                Join thousands of service providers who trust YelloPago to help grow their business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border border-gray-100 hover:shadow-md transition-shadow">
                  <CardHeader className="space-y-1">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-anthracite to-anthracite-dark text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-poster font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our platform today and start connecting with customers in your area. 
              Set up your profile in minutes and start growing your business.
            </p>
            <Button 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-anthracite font-medium"
            >
              Join as a Service Provider
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Providers;
