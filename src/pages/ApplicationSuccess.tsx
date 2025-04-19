
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ApplicationSuccess = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-anthracite mb-4">
              Application Submitted Successfully
            </h1>
            <p className="text-lg text-anthracite/70 mb-8 max-w-2xl mx-auto">
              Thank you for your interest in joining our team. We will review your application 
              and contact you soon regarding the next steps.
            </p>
            <Link to="/careers">
              <Button variant="outline">
                Return to Careers
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ApplicationSuccess;
