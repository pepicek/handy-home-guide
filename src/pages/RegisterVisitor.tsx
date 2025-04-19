
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { VisitorRegistrationForm } from "@/components/registration/VisitorRegistrationForm";
import { VisitorBenefits } from "@/components/registration/VisitorBenefits";
import { VideoPreview } from "@/components/registration/VideoPreview";

const RegisterVisitor = () => {
  const navigate = useNavigate();
  const [videoOpen, setVideoOpen] = useState(false);

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

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h1 className="text-3xl font-bold text-anthracite mb-4">
                  Create Your Visitor Account
                </h1>
                <p className="text-gray-600 mb-6">
                  Join thousands of homeowners who use YelloPago to find reliable service providers and manage their projects.
                </p>

                <VideoPreview isOpen={videoOpen} onOpenChange={setVideoOpen} />
                <VisitorBenefits />
              </div>

              <VisitorRegistrationForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterVisitor;
