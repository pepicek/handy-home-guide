
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, User, Users, Play, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Register = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-anthracite mb-4">
              Join the YelloPago Community
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose how you'd like to use YelloPago and get started today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Visitor Card */}
            <Card className="border-2 border-yellow-300 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="rounded-full bg-yellow-100 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <User className="h-8 w-8 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold text-center mb-3">Join as a Visitor</h2>
                <p className="text-gray-600 mb-8 text-center">
                  Find reliable service providers, get quotes, schedule appointments, and manage your projects all in one place.
                </p>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center">
                    <div className="rounded-full bg-yellow-100 w-8 h-8 flex items-center justify-center mr-3">
                      <Play className="h-4 w-4 text-yellow-600" />
                    </div>
                    <span>Access to trusted local pros</span>
                  </div>
                  <div className="flex items-center">
                    <div className="rounded-full bg-yellow-100 w-8 h-8 flex items-center justify-center mr-3">
                      <Play className="h-4 w-4 text-yellow-600" />
                    </div>
                    <span>Compare quotes and reviews</span>
                  </div>
                  <div className="flex items-center">
                    <div className="rounded-full bg-yellow-100 w-8 h-8 flex items-center justify-center mr-3">
                      <Play className="h-4 w-4 text-yellow-600" />
                    </div>
                    <span>Schedule appointments with ease</span>
                  </div>
                </div>
                <Button className="w-full mt-8 bg-yellow-500 hover:bg-yellow-600 text-anthracite" asChild>
                  <Link to="/register/visitor">
                    Register as Visitor
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Provider Card */}
            <Card className="border-2 border-anthracite hover:border-anthracite/90 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="rounded-full bg-anthracite/10 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Users className="h-8 w-8 text-anthracite" />
                </div>
                <h2 className="text-2xl font-bold text-center mb-3">Join as a Service Provider</h2>
                <p className="text-gray-600 mb-8 text-center">
                  Grow your business, get more clients, and manage your services with our comprehensive platform.
                </p>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center">
                    <div className="rounded-full bg-anthracite/10 w-8 h-8 flex items-center justify-center mr-3">
                      <Play className="h-4 w-4 text-anthracite" />
                    </div>
                    <span>Reach more potential clients</span>
                  </div>
                  <div className="flex items-center">
                    <div className="rounded-full bg-anthracite/10 w-8 h-8 flex items-center justify-center mr-3">
                      <Play className="h-4 w-4 text-anthracite" />
                    </div>
                    <span>Schedule management tools</span>
                  </div>
                  <div className="flex items-center">
                    <div className="rounded-full bg-anthracite/10 w-8 h-8 flex items-center justify-center mr-3">
                      <Play className="h-4 w-4 text-anthracite" />
                    </div>
                    <span>Create special offers and bundles</span>
                  </div>
                </div>
                <Button className="w-full mt-8 bg-anthracite hover:bg-anthracite/90 text-yellow-400" asChild>
                  <Link to="/register/provider">
                    Register as Provider
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/signin" className="text-yellow-600 hover:text-yellow-800 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
