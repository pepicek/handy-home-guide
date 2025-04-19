
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const ConsultationAccepted = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="text-center px-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-anthracite mb-4">
            Consultation Scheduled Successfully!
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            We've sent you a confirmation email with all the details. Our team is looking forward to speaking with you.
          </p>
          <div className="space-x-4">
            <Link to="/dashboard">
              <Button variant="outline">Go to Dashboard</Button>
            </Link>
            <Link to="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConsultationAccepted;
