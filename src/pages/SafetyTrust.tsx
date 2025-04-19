
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Shield, Star, FileText } from "lucide-react";

const SafetyTrust = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-yellow-300 to-yellow-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold font-poster text-anthracite mb-6">
                Safety & Trust
              </h1>
              <p className="text-lg md:text-xl text-anthracite/80 mb-8">
                At YelloPago, we're committed to creating a trustworthy platform where homeowners can confidently connect with verified service professionals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/register/visitor">
                  <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
                    Create Free Account
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" className="border-anthracite/30 hover:bg-anthracite/5">
                    Learn How It Works
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How We Build Trust</h2>
            
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <Card className="border-yellow-200">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl">Provider Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Every service provider on our platform undergoes a thorough verification process to confirm their identity, credentials, and business information.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-yellow-200">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl">Verified Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    All reviews on YelloPago come from verified customers who have actually used the service, ensuring authentic and reliable feedback.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-yellow-200">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl">Secure Messaging</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our secure messaging system protects your personal information while allowing clear communication with service providers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Building Confidence in Online Service Hiring</h2>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold mb-4">Trust Issues and How We Solve Them</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Provider Quality Concerns</h4>
                        <p className="text-sm text-gray-600">
                          Our ratings and review system helps you identify high-quality professionals with proven track records. All reviews are from verified customers.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Safety & Security</h4>
                        <p className="text-sm text-gray-600">
                          Providers undergo identity verification before joining our platform. We also encourage customers to report any concerns through our support system.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Pricing Transparency</h4>
                        <p className="text-sm text-gray-600">
                          Providers are encouraged to list their rates upfront, and our quote system helps you compare options before committing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Building Trust Through Features</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Special Offers</h4>
                        <p className="text-sm text-gray-600">
                          Providers can offer introductory rates or special packages, allowing you to try their services at a reduced cost to build confidence.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Detailed Profiles</h4>
                        <p className="text-sm text-gray-600">
                          Provider profiles include credentials, service areas, photos of past work, and verified reviews to help you make informed decisions.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Response Rate Indicators</h4>
                        <p className="text-sm text-gray-600">
                          See how quickly providers typically respond to inquiries and their booking acceptance rate.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-anthracite text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Trust & Safety Tips</h2>
              <p className="text-lg opacity-90 mb-12">
                While we work hard to maintain a safe platform, here are some additional steps you can take to ensure a positive experience.
              </p>
              
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-anthracite-light p-6 rounded-xl">
                  <h3 className="font-bold mb-3">Before Booking</h3>
                  <ul className="text-sm space-y-2 text-left">
                    <li>• Read multiple reviews thoroughly</li>
                    <li>• Check provider credentials</li>
                    <li>• Communicate clearly about your needs</li>
                    <li>• Get a detailed quote in writing</li>
                  </ul>
                </div>
                
                <div className="bg-anthracite-light p-6 rounded-xl">
                  <h3 className="font-bold mb-3">During Service</h3>
                  <ul className="text-sm space-y-2 text-left">
                    <li>• Confirm the service scope before work begins</li>
                    <li>• Keep all communication through our platform</li>
                    <li>• Document any issues as they arise</li>
                    <li>• Inspect work before final payment</li>
                  </ul>
                </div>
                
                <div className="bg-anthracite-light p-6 rounded-xl">
                  <h3 className="font-bold mb-3">After Completion</h3>
                  <ul className="text-sm space-y-2 text-left">
                    <li>• Leave honest, detailed reviews</li>
                    <li>• Report any serious issues promptly</li>
                    <li>• Save receipts and documentation</li>
                    <li>• Recommend great providers to others</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Trusted Professionals?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of homeowners who are finding reliable service providers on YelloPago every day.
            </p>
            <div className="flex justify-center">
              <Link to="/search">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-anthracite">
                  Find Services Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SafetyTrust;
