
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "For homeowners and occasional users",
    features: [
      "Access to service providers",
      "Request quotes & estimates",
      "Basic search functionality",
      "Manage favorite providers",
      "Read ratings & reviews"
    ],
    icon: <Zap className="h-5 w-5 text-blue-600" />
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Everything you need to grow your business",
    features: [
      "Priority listing in search results",
      "Unlimited services",
      "Advanced analytics",
      "Custom branding",
      "Priority support",
      "Unlimited offers",
      "Client insights",
      "Email marketing tools"
    ],
    highlighted: true,
    icon: <Crown className="h-5 w-5 text-yellow-600" />
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "Advanced features for large businesses",
    features: [
      "All Pro features",
      "Multiple locations",
      "Team management",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
      "Custom analytics",
      "White-label options"
    ],
    icon: <Star className="h-5 w-5 text-purple-600" />
  }
];

const Pricing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-yellow-300 to-yellow-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poster text-anthracite mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-anthracite/80 max-w-2xl mx-auto mb-6">
              Finding the right services is always free for homeowners. Service providers can choose the plan that works for their business.
            </p>
            <div className="bg-white/80 backdrop-blur rounded-lg py-3 px-6 inline-flex items-center gap-2 mx-auto">
              <span className="text-sm font-medium text-anthracite">New providers receive $100 in credits to try premium features</span>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan) => (
                <Card key={plan.name} className={`${
                  plan.highlighted 
                    ? "border-yellow-400 shadow-yellow-200/50 shadow-lg relative overflow-hidden" 
                    : "border-gray-200"
                }`}>
                  {plan.highlighted && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-yellow-400 text-anthracite text-xs font-medium px-3 py-1 rounded-bl-lg">
                        MOST POPULAR
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      {plan.icon}
                      <CardTitle>{plan.name}</CardTitle>
                    </div>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-anthracite">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-sm text-gray-600">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className={`h-5 w-5 ${
                            plan.highlighted ? "text-yellow-600" : "text-gray-600"
                          }`} />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    {plan.name === "Free" ? (
                      <Button 
                        className="w-full bg-anthracite hover:bg-anthracite/90 text-white"
                        asChild
                      >
                        <Link to="/register/visitor">Sign Up Free</Link>
                      </Button>
                    ) : (
                      <>
                        <Button 
                          className={`w-full ${
                            plan.highlighted
                              ? "bg-yellow-500 hover:bg-yellow-600 text-anthracite"
                              : "bg-anthracite hover:bg-anthracite/90 text-white"
                          }`}
                          asChild
                        >
                          <Link to="/register/provider">Start {plan.name} Plan</Link>
                        </Button>
                      </>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-16 max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-anthracite mb-4">
                Save thousands compared to hiring staff
              </h2>
              <p className="text-gray-600 mb-8">
                The average business spends over $3,500 per month on staffing for marketing, customer service, and admin tasks. 
                Our platform automates these processes at a fraction of the cost, saving you time and money.
              </p>
              <Link to="/providers/schedule-consultation">
                <Button 
                  variant="outline" 
                  className="border-yellow-400 text-anthracite hover:bg-yellow-50"
                >
                  Schedule a Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Do I need to pay to find a service provider?</h3>
                  <p className="text-gray-600">No, homeowners can use YelloPago completely free of charge. You can search for providers, read reviews, request quotes, and book services without any fees.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">What's included in the free credits for new providers?</h3>
                  <p className="text-gray-600">New providers receive $100 in service credits that can be used to access premium features like boosted listings, featured offers, and advanced analytics for a limited time.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Can I change my plan later?</h3>
                  <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the beginning of your next billing cycle.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Is there a contract or commitment?</h3>
                  <p className="text-gray-600">No, all our provider plans are month-to-month with no long-term contracts. You can cancel anytime.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
