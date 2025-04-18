
import React from "react";
import { Link } from "react-router-dom";
import { DollarSign, ArrowRight, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Credits = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-yellow-50/50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-yellow-100 rounded-full mb-6">
              <DollarSign className="h-8 w-8 text-yellow-600" />
            </div>
            <h1 className="text-4xl font-bold text-anthracite mb-4">
              Welcome to YelloPago Credits
            </h1>
            <p className="text-xl text-gray-600">
              Start your journey with $200 in complimentary credits
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <Gift className="h-6 w-6 text-yellow-600" />
                  <h2 className="text-xl font-semibold">New Account Bonus</h2>
                </div>
                <p className="text-gray-600">
                  Every new service provider account receives $200 in non-refundable credits to explore our premium features and services.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-yellow-600" />
                    <span>Test premium listing features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-yellow-600" />
                    <span>Access advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-yellow-600" />
                    <span>Try promotional tools</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-semibold mb-4">Why We Do This</h2>
                <p className="text-gray-600">
                  At YelloPago, we believe in building strong, lasting partnerships with service providers. 
                  Our complimentary credits program demonstrates our commitment to your success.
                </p>
                <p className="text-gray-600">
                  We want you to experience the full potential of our platform and see how it can 
                  help grow your business before making any financial commitment.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-anthracite" asChild>
              <Link to="/register/provider">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Credits;
