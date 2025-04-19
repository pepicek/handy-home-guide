
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProviderRegistrationForm } from "@/components/registration/ProviderRegistrationForm";
import { ProviderBenefits } from "@/components/registration/ProviderBenefits";
import { CreditsPromo } from "@/components/registration/CreditsPromo";

const RegisterProvider = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              className="mb-8 flex items-center text-gray-600 hover:text-gray-900"
              onClick={() => navigate("/register")}
            >
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Back to registration options
            </Button>

            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-anthracite mb-4">
                Register as a Service Provider
              </h1>
              <p className="text-lg text-gray-600">
                Create your professional account and start growing your business
              </p>
            </div>
            
            <CreditsPromo />

            <div className="grid md:grid-cols-5 gap-8 mt-8">
              <div className="md:col-span-3">
                <ProviderRegistrationForm />
                <p className="text-center text-sm text-gray-600 mt-4">
                  Already have an account?{" "}
                  <Link to="/signin" className="text-yellow-600 hover:text-yellow-800 font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
              
              <div className="md:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow-sm border h-full">
                  <h2 className="text-xl font-semibold mb-6 text-anthracite">Why Join YelloPago as a Pro?</h2>
                  <ProviderBenefits />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterProvider;
