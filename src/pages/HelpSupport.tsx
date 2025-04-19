
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const HelpSupport = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-yellow-300 to-yellow-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-poster text-anthracite mb-6">
                Help & Support
              </h1>
              <p className="text-lg text-anthracite/80 mb-8">
                Find answers to common questions or get in touch with our support team.
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input 
                  className="pl-10 py-6 border-2 border-anthracite/10 rounded-lg"
                  placeholder="Search for help with..." 
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="faq" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="faq">Frequently Asked Questions</TabsTrigger>
                <TabsTrigger value="guides">Guides & Documentation</TabsTrigger>
                <TabsTrigger value="contact">Contact Support</TabsTrigger>
              </TabsList>
              
              <TabsContent value="faq">
                <div className="grid gap-8 md:grid-cols-2 mb-12">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">For Homeowners</h2>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>How do I find a service provider?</AccordionTrigger>
                        <AccordionContent>
                          You can search for service providers by entering what you need and your location on our homepage. You can also browse by service category or check special offers near you.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Are service providers vetted?</AccordionTrigger>
                        <AccordionContent>
                          Yes, we verify the identity and credentials of all providers on our platform. We also collect and verify reviews from real customers to help you make informed decisions.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>How do I pay for services?</AccordionTrigger>
                        <AccordionContent>
                          Payment methods vary by provider. Some accept payment through our platform, while others may accept direct payment. The payment options will be clearly listed on the provider's profile.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>What if I'm not satisfied with a service?</AccordionTrigger>
                        <AccordionContent>
                          If you're not satisfied, first try to resolve the issue directly with your provider. If that doesn't work, you can open a dispute through your account, and our customer support team will help mediate.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4">For Service Providers</h2>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>How do I sign up as a provider?</AccordionTrigger>
                        <AccordionContent>
                          Click the "Join as a Pro" button in the navigation or footer. You'll need to create an account, complete your business profile, and verify your identity and credentials.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>What fees does YelloPago charge?</AccordionTrigger>
                        <AccordionContent>
                          We offer several subscription plans with different features. Basic listing is free, while premium features require a Pro or Enterprise subscription. Visit our Pricing page for details.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>How do I receive payments?</AccordionTrigger>
                        <AccordionContent>
                          You can set up direct bank deposits for payments made through our platform. You can also track all transactions in your provider dashboard.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>How do I get more visibility?</AccordionTrigger>
                        <AccordionContent>
                          Complete your profile with high-quality photos, detailed service descriptions, and pricing. Encourage satisfied customers to leave reviews, and consider creating special offers to attract new clients.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>

                <div className="text-center">
                  <Link to="/faq">
                    <Button variant="outline" className="border-yellow-400 text-anthracite hover:bg-yellow-50">
                      View All FAQs
                    </Button>
                  </Link>
                </div>
              </TabsContent>
              
              <TabsContent value="guides">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                  <Card>
                    <CardHeader>
                      <CardTitle>Getting Started Guide</CardTitle>
                      <CardDescription>Essential information for new users</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li><Link to="#" className="text-yellow-600 hover:underline">Creating Your Account</Link></li>
                        <li><Link to="#" className="text-yellow-600 hover:underline">Searching for Services</Link></li>
                        <li><Link to="#" className="text-yellow-600 hover:underline">Booking Your First Service</Link></li>
                        <li><Link to="#" className="text-yellow-600 hover:underline">Managing Your Dashboard</Link></li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>For Service Providers</CardTitle>
                      <CardDescription>Grow your business on YelloPago</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li><Link to="#" className="text-yellow-600 hover:underline">Provider Onboarding Guide</Link></li>
                        <li><Link to="#" className="text-yellow-600 hover:underline">Setting Up Your Services</Link></li>
                        <li><Link to="#" className="text-yellow-600 hover:underline">Managing Your Calendar</Link></li>
                        <li><Link to="#" className="text-yellow-600 hover:underline">Responding to Quote Requests</Link></li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Platform Features</CardTitle>
                      <CardDescription>Detailed guides to key features</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li><Link to="#" className="text-yellow-600 hover:underline">Messaging System</Link></li>
                        <li><Link to="#" className="text-yellow-600 hover:underline">Payments & Invoicing</Link></li>
                        <li><Link to="#" className="text-yellow-600 hover:underline">Reviews & Ratings</Link></li>
                        <li><Link to="#" className="text-yellow-600 hover:underline">Special Offers System</Link></li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Video Tutorials</CardTitle>
                      <CardDescription>Visual step-by-step guides</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li><Link to="#" className="text-yellow-600 hover:underline">Setting Up Your Provider Profile</Link></li>
                        <li><Link to="#" className="text-yellow-600 hover:underline">Creating Your First Special Offer</Link></li>
                        <li><Link to="#" className="text-yellow-600 hover:underline">Using the Calendar System</Link></li>
                        <li><Link to="#" className="text-yellow-600 hover:underline">Mobile App Overview</Link></li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Account & Security</CardTitle>
                      <CardDescription>Managing your account safely</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li><Link to="#" className="text-yellow-600 hover:underline">Account Security Best Practices</Link></li>
                        <li><Link to="#" className="text-yellow-600 hover:underline">Payment Security</Link></li>
                        <li><Link to="#" className="text-yellow-600 hover:underline">Privacy Settings</Link></li>
                        <li><Link to="#" className="text-yellow-600 hover:underline">Two-Factor Authentication</Link></li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Troubleshooting</CardTitle>
                      <CardDescription>Solutions to common problems</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li><Link to="#" className="text-yellow-600 hover:underline">Login Issues</Link></li>
                        <li><Link to="#" className="text-yellow-600 hover:underline">Booking Problems</Link></li>
                        <li><Link to="#" className="text-yellow-600 hover:underline">Payment Troubleshooting</Link></li>
                        <li><Link to="#" className="text-yellow-600 hover:underline">Calendar Sync Issues</Link></li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center">
                  <Link to="/resources">
                    <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
                      Explore All Resources
                    </Button>
                  </Link>
                </div>
              </TabsContent>
              
              <TabsContent value="contact">
                <div className="bg-gray-50 rounded-xl p-8 md:p-12 text-center mb-8">
                  <h2 className="text-2xl font-bold mb-4">How to Get Support</h2>
                  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Already signed up? The fastest way to get help is through your account dashboard. If you're not yet a member, you can use the contact form below.
                  </p>
                  
                  <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
                    <Card>
                      <CardHeader>
                        <CardTitle>For Registered Users</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="mb-4">Log into your account and visit:</p>
                        <div className="mb-6">
                          <p><strong>Client Dashboard → Support</strong></p>
                          <p>or</p>
                          <p><strong>Provider Dashboard → Support</strong></p>
                        </div>
                        <Button asChild>
                          <Link to="/signin">Sign In Now</Link>
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>For New Users</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="mb-4">Visit our contact page to send us a message:</p>
                        <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-anthracite">
                          <Link to="/contact">Contact Us</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-medium mb-4">Our Support Hours</h3>
                  <p className="text-gray-600 mb-2">Monday to Friday: 8am - 8pm EST</p>
                  <p className="text-gray-600">Saturday & Sunday: 10am - 6pm EST</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HelpSupport;
