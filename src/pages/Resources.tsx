import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Resources = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-yellow-300 to-yellow-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold font-poster text-anthracite mb-6">
                Resources & Guides
              </h1>
              <p className="text-lg md:text-xl text-anthracite/80 mb-8">
                Everything you need to know about home services, provider management, and making the most of YelloPago.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="homeowners" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="homeowners">For Homeowners</TabsTrigger>
                <TabsTrigger value="providers">For Service Providers</TabsTrigger>
              </TabsList>
              
              <TabsContent value="homeowners" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">Finding the Right Service Provider</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        <li>
                          <h3 className="font-medium mb-1">How to Read Reviews Effectively</h3>
                          <p className="text-sm text-gray-600">Learn what to look for in reviews and how to interpret ratings.</p>
                          <Link to="#" className="text-sm text-yellow-600 hover:underline mt-1 block">Read guide →</Link>
                        </li>
                        <li>
                          <h3 className="font-medium mb-1">Questions to Ask Before Hiring</h3>
                          <p className="text-sm text-gray-600">Essential questions to ask potential service providers.</p>
                          <Link to="#" className="text-sm text-yellow-600 hover:underline mt-1 block">Read guide →</Link>
                        </li>
                        <li>
                          <h3 className="font-medium mb-1">Understanding Service Quotes</h3>
                          <p className="text-sm text-gray-600">How to compare quotes and what to watch for.</p>
                          <Link to="#" className="text-sm text-yellow-600 hover:underline mt-1 block">Read guide →</Link>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Home Maintenance Guides</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        <li>
                          <h3 className="font-medium mb-1">Seasonal Home Maintenance Checklist</h3>
                          <p className="text-sm text-gray-600">Keep your home in top shape year-round with these seasonal tips.</p>
                          <Link to="#" className="text-sm text-yellow-600 hover:underline mt-1 block">Read guide →</Link>
                        </li>
                        <li>
                          <h3 className="font-medium mb-1">When to DIY vs. When to Hire a Pro</h3>
                          <p className="text-sm text-gray-600">Guidelines for deciding whether to tackle a project yourself.</p>
                          <Link to="#" className="text-sm text-yellow-600 hover:underline mt-1 block">Read guide →</Link>
                        </li>
                        <li>
                          <h3 className="font-medium mb-1">Home Emergency Preparation</h3>
                          <p className="text-sm text-gray-600">How to prepare for and respond to home emergencies.</p>
                          <Link to="#" className="text-sm text-yellow-600 hover:underline mt-1 block">Read guide →</Link>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Project Planning Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="font-medium mb-2">Home Renovation Planning Guide</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          A comprehensive guide to planning your home renovation, from budgeting to choosing contractors.
                        </p>
                        <Link to="#" className="text-sm text-yellow-600 hover:underline">Download PDF →</Link>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Project Budget Calculator</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Estimate costs for common home improvement projects with our interactive calculator.
                        </p>
                        <Link to="#" className="text-sm text-yellow-600 hover:underline">Use Calculator →</Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="providers" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Building Your Business</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        <li>
                          <h3 className="font-medium mb-1">Creating an Effective Provider Profile</h3>
                          <p className="text-sm text-gray-600">How to showcase your services and stand out.</p>
                          <Link to="#" className="text-sm text-yellow-600 hover:underline mt-1 block">Read guide →</Link>
                        </li>
                        <li>
                          <h3 className="font-medium mb-1">Pricing Your Services</h3>
                          <p className="text-sm text-gray-600">Strategies for competitive and profitable pricing.</p>
                          <Link to="#" className="text-sm text-yellow-600 hover:underline mt-1 block">Read guide →</Link>
                        </li>
                        <li>
                          <h3 className="font-medium mb-1">Managing Client Expectations</h3>
                          <p className="text-sm text-gray-600">Tips for clear communication and satisfied clients.</p>
                          <Link to="#" className="text-sm text-yellow-600 hover:underline mt-1 block">Read guide →</Link>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Marketing Your Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        <li>
                          <h3 className="font-medium mb-1">Creating Effective Special Offers</h3>
                          <p className="text-sm text-gray-600">How to design promotions that attract new clients.</p>
                          <Link to="#" className="text-sm text-yellow-600 hover:underline mt-1 block">Read guide →</Link>
                        </li>
                        <li>
                          <h3 className="font-medium mb-1">Building a 5-Star Reputation</h3>
                          <p className="text-sm text-gray-600">Strategies for earning positive reviews consistently.</p>
                          <Link to="#" className="text-sm text-yellow-600 hover:underline mt-1 block">Read guide →</Link>
                        </li>
                        <li>
                          <h3 className="font-medium mb-1">Digital Marketing for Service Businesses</h3>
                          <p className="text-sm text-gray-600">Simple tactics to promote your business online.</p>
                          <Link to="#" className="text-sm text-yellow-600 hover:underline mt-1 block">Read guide →</Link>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Business Templates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-3">
                      <div>
                        <h3 className="font-medium mb-2">Service Agreement Template</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Customizable service agreement to use with your clients.
                        </p>
                        <Link to="#" className="text-sm text-yellow-600 hover:underline">Download →</Link>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Client Intake Form</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Professional form to gather client information.
                        </p>
                        <Link to="#" className="text-sm text-yellow-600 hover:underline">Download →</Link>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Invoice Template</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Professional invoice template for your services.
                        </p>
                        <Link to="#" className="text-sm text-yellow-600 hover:underline">Download →</Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="py-12 bg-gradient-to-br from-anthracite to-anthracite-light text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need personalized guidance?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Our team is available to help with specific questions and provide tailored advice for your situation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/help-support">
                <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-anthracite-light">
                  Visit Help Center
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-anthracite">
                  Contact Our Team
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

export default Resources;
