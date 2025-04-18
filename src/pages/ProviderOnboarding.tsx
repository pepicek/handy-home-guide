
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle, FileText, AlertCircle, DollarSign, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const ProviderOnboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState("services");
  const [videoDialog, setVideoDialog] = useState<string | null>(null);

  const completeOnboarding = () => {
    toast.success("Onboarding completed successfully!");
    navigate("/");
  };

  const renderVideoDialog = () => {
    const videos = {
      services: "How to create effective service listings",
      deals: "Creating special deals and bundled offerings",
      pricing: "Setting up effective pricing strategies",
      quotes: "Using the instant quote generator"
    };

    if (!videoDialog) return null;

    return (
      <Dialog open={Boolean(videoDialog)} onOpenChange={() => setVideoDialog(null)}>
        <DialogContent className="max-w-3xl p-0 bg-black">
          <DialogHeader className="p-6 bg-anthracite text-white">
            <DialogTitle>{videos[videoDialog as keyof typeof videos]}</DialogTitle>
            <DialogDescription className="text-gray-300">
              Watch this short tutorial to learn more
            </DialogDescription>
          </DialogHeader>
          <div className="aspect-video w-full">
            {/* In a real app, you would use a real video here */}
            <div className="flex items-center justify-center h-full text-white">
              <p className="text-center">Video tutorial about {videos[videoDialog as keyof typeof videos]} would play here</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-anthracite w-8 h-8 flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-yellow-400" />
                </div>
                <div className="text-gray-400">Registration</div>
                <div className="h-1 w-8 bg-gray-300"></div>
                <div className="rounded-full bg-anthracite w-8 h-8 flex items-center justify-center text-yellow-400 font-medium">2</div>
                <div className="text-gray-900 font-medium">Onboarding</div>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-anthracite mb-8 text-center">
              Welcome to YelloPago for Service Providers
            </h1>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's set up your profile and learn how to make the most of our platform to grow your business and provide exceptional service.
            </p>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Getting Started Guide</CardTitle>
                <CardDescription>Follow these steps to set up your provider profile on YelloPago</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={currentStep} onValueChange={setCurrentStep} className="w-full">
                  <TabsList className="grid grid-cols-4 mb-8">
                    <TabsTrigger value="services">Services</TabsTrigger>
                    <TabsTrigger value="deals">Special Deals</TabsTrigger>
                    <TabsTrigger value="pricing">Pricing</TabsTrigger>
                    <TabsTrigger value="quotes">Quote Generator</TabsTrigger>
                  </TabsList>

                  {/* Services Tab */}
                  <TabsContent value="services">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Listing Your Services</h3>
                        <ul className="space-y-4">
                          <li className="flex">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Be specific and detailed</p>
                              <p className="text-gray-600 text-sm">Clearly describe what your service includes and excludes</p>
                            </div>
                          </li>
                          <li className="flex">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Use high-quality images</p>
                              <p className="text-gray-600 text-sm">Show examples of your work with clear, professional photos</p>
                            </div>
                          </li>
                          <li className="flex">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Highlight your expertise</p>
                              <p className="text-gray-600 text-sm">Mention certifications, years of experience, and specializations</p>
                            </div>
                          </li>
                          <li className="flex">
                            <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Avoid these common mistakes</p>
                              <p className="text-gray-600 text-sm">Vague descriptions, poor quality images, and missing service areas</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col">
                        <div className="relative rounded-lg overflow-hidden bg-gray-800 mb-6 cursor-pointer group" onClick={() => setVideoDialog("services")}>
                          <div className="aspect-video bg-gradient-to-r from-yellow-300/10 to-yellow-500/20 flex items-center justify-center">
                            <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
                              Watch Tutorial
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <Button className="mt-auto" onClick={() => setCurrentStep("deals")}>
                          Continue to Special Deals
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Deals Tab */}
                  <TabsContent value="deals">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Creating Special Deals</h3>
                        <ul className="space-y-4">
                          <li className="flex">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Bundle complementary services</p>
                              <p className="text-gray-600 text-sm">Create packages that offer value while increasing your average job size</p>
                            </div>
                          </li>
                          <li className="flex">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Limited-time offers</p>
                              <p className="text-gray-600 text-sm">Create seasonal promotions to drive business during slower periods</p>
                            </div>
                          </li>
                          <li className="flex">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Maintenance packages</p>
                              <p className="text-gray-600 text-sm">Offer recurring service packages to build a stable client base</p>
                            </div>
                          </li>
                          <li className="flex">
                            <FileText className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Deal templates available</p>
                              <p className="text-gray-600 text-sm">Use our pre-made templates to quickly create effective special offers</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col">
                        <div className="relative rounded-lg overflow-hidden bg-gray-800 mb-6 cursor-pointer group" onClick={() => setVideoDialog("deals")}>
                          <div className="aspect-video bg-gradient-to-r from-yellow-300/10 to-yellow-500/20 flex items-center justify-center">
                            <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
                              Watch Tutorial
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <Button className="mt-auto" onClick={() => setCurrentStep("pricing")}>
                          Continue to Pricing Strategies
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Pricing Tab */}
                  <TabsContent value="pricing">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Setting Up Pricing</h3>
                        <ul className="space-y-4">
                          <li className="flex">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Transparent pricing</p>
                              <p className="text-gray-600 text-sm">Clearly communicate your rates, fees, and any potential additional charges</p>
                            </div>
                          </li>
                          <li className="flex">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Tiered pricing options</p>
                              <p className="text-gray-600 text-sm">Offer different service levels to accommodate various customer budgets</p>
                            </div>
                          </li>
                          <li className="flex">
                            <DollarSign className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Our pricing calculator</p>
                              <p className="text-gray-600 text-sm">Use our marketplace data to optimize your pricing for maximum conversion</p>
                            </div>
                          </li>
                          <li className="flex">
                            <BarChart3 className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Market analytics</p>
                              <p className="text-gray-600 text-sm">Get insights into competitive pricing in your area and service category</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col">
                        <div className="relative rounded-lg overflow-hidden bg-gray-800 mb-6 cursor-pointer group" onClick={() => setVideoDialog("pricing")}>
                          <div className="aspect-video bg-gradient-to-r from-yellow-300/10 to-yellow-500/20 flex items-center justify-center">
                            <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
                              Watch Tutorial
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <Button className="mt-auto" onClick={() => setCurrentStep("quotes")}>
                          Continue to Quote Generator
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Quote Generator Tab */}
                  <TabsContent value="quotes">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Instant Quote Generator</h3>
                        <ul className="space-y-4">
                          <li className="flex">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Automated quoting</p>
                              <p className="text-gray-600 text-sm">Set up your service parameters to generate instant quotes for customers</p>
                            </div>
                          </li>
                          <li className="flex">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Custom variables</p>
                              <p className="text-gray-600 text-sm">Add specific factors that affect your pricing (size, materials, complexity, etc.)</p>
                            </div>
                          </li>
                          <li className="flex">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Quote templates</p>
                              <p className="text-gray-600 text-sm">Create professional-looking quote templates with your branding</p>
                            </div>
                          </li>
                          <li className="flex">
                            <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Beta feature</p>
                              <p className="text-gray-600 text-sm">The quote generator is a new feature - we welcome your feedback!</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col">
                        <div className="relative rounded-lg overflow-hidden bg-gray-800 mb-6 cursor-pointer group" onClick={() => setVideoDialog("quotes")}>
                          <div className="aspect-video bg-gradient-to-r from-yellow-300/10 to-yellow-500/20 flex items-center justify-center">
                            <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
                              Watch Tutorial
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <Button className="mt-auto" onClick={completeOnboarding}>
                          Complete Onboarding
                          <CheckCircle className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => navigate("/")}>
                Skip onboarding for now
              </Button>
              <Button onClick={completeOnboarding} className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
                Complete setup and go to dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {renderVideoDialog()}
    </div>
  );
};

export default ProviderOnboarding;
