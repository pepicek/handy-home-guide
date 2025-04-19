
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Check, CheckCircle2 } from "lucide-react";

const ProviderBenefits = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-yellow-300 to-yellow-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poster text-anthracite mb-6">
                Grow Your Service Business with YelloPago
              </h1>
              <p className="text-lg md:text-xl text-anthracite/80 max-w-3xl mb-8">
                Join thousands of service professionals who are streamlining their business, finding new clients, and increasing revenue.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/register/provider">
                  <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
                    Join as a Provider
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="outline" className="border-anthracite/30 hover:bg-anthracite/5">
                    View Pricing Plans
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Save Time, Money, and Resources</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              YelloPago provides all-in-one tools that replace the need for multiple staff members, saving service businesses thousands of dollars every month.
            </p>
            
            <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold mb-6">Replace Multiple Staff Roles</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <CheckCircle2 className="text-green-600 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">Marketing Specialist ($3,500/mo)</h4>
                      <p className="text-gray-600">
                        Our platform automatically promotes your services to thousands of potential clients in your area through search placement, special offers, and featured listings.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <CheckCircle2 className="text-green-600 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">Receptionist ($2,500/mo)</h4>
                      <p className="text-gray-600">
                        Automated booking, scheduling, and appointment management handles client interactions 24/7, without the need for a dedicated receptionist.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <CheckCircle2 className="text-green-600 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">Admin Assistant ($2,300/mo)</h4>
                      <p className="text-gray-600">
                        Streamline invoicing, payment processing, client communication, and document management through our simple dashboard.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <CheckCircle2 className="text-green-600 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">Customer Service Rep ($2,700/mo)</h4>
                      <p className="text-gray-600">
                        Client messaging, automated follow-ups, and review management tools keep clients happy and engaged.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Starting at Just $29/month</h3>
                
                <Card className="border-yellow-400 shadow-lg mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-2xl">Total Potential Savings:</span>
                    </CardTitle>
                    <CardDescription className="text-xl">
                      <span className="text-3xl font-bold text-green-600">$11,000/month</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Compared to hiring dedicated staff for marketing, admin, and customer service roles, YelloPago can save small businesses over $130,000 annually.
                      </p>
                      <p className="font-medium">
                        Plus, our platform works 24/7, never calls in sick, and scales with your business.
                      </p>
                      <div>
                        <Link to="/pricing">
                          <Button className="bg-yellow-500 hover:bg-yellow-600 text-anthracite w-full">
                            See Pricing Plans
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    * Estimated savings based on average salaries for these positions in the US. Actual savings may vary based on location and specific business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-anthracite text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-16">Features Designed for Service Providers</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-anthracite-light border-none">
                  <CardHeader>
                    <CardTitle>Client Management</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                        <span>Centralized client database</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                        <span>Service history tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                        <span>Automated follow-ups</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                        <span>Client notes and preferences</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-anthracite-light border-none">
                  <CardHeader>
                    <CardTitle>Business Growth</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                        <span>Featured in local searches</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                        <span>Special offers promotion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                        <span>Review management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                        <span>Business analytics</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-anthracite-light border-none">
                  <CardHeader>
                    <CardTitle>Operations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                        <span>Online scheduling system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                        <span>Quote and invoice creation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                        <span>Online payment processing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                        <span>Service area management</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-12">
                <Link to="/register/provider">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-anthracite">
                    Start Using These Features Today <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-16">Success Stories</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="rounded-full bg-yellow-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-yellow-600">40%</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Revenue Increase</h3>
                  <p className="text-gray-600">
                    The average provider reports a 40% increase in revenue within their first 6 months on YelloPago.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="rounded-full bg-yellow-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-yellow-600">15+</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Hours Saved Weekly</h3>
                  <p className="text-gray-600">
                    Providers save an average of 15+ hours per week on administrative tasks and scheduling.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="rounded-full bg-yellow-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-yellow-600">4.8</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Average Rating</h3>
                  <p className="text-gray-600">
                    YelloPago providers maintain an average rating of 4.8/5 stars from satisfied customers.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12">
              <Link to="/success-stories">
                <Button variant="outline" className="border-yellow-400 text-anthracite hover:bg-yellow-50">
                  Read Provider Success Stories
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-yellow-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of service providers who are saving time, finding new clients, and increasing revenue with YelloPago.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/register/provider">
                <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
                  Sign Up Now
                </Button>
              </Link>
              <Link to="/providers/schedule-consultation">
                <Button variant="outline" className="border-yellow-400 text-anthracite hover:bg-yellow-50">
                  Schedule a Free Consultation
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

export default ProviderBenefits;
