
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Crown, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Essential features for getting started",
    features: [
      "Basic profile listing",
      "Up to 3 services",
      "Standard support",
      "Basic analytics"
    ]
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
    highlighted: true
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
    ]
  }
];

const ProSubscription = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-anthracite mb-4">
          Upgrade Your Business with YelloPago Pro
        </h1>
        <p className="text-lg text-gray-600">
          Choose the plan that best fits your business needs and start growing with YelloPago
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
              <CardTitle className="flex items-center gap-2">
                {plan.name === "Pro" ? (
                  <Crown className="h-5 w-5 text-yellow-600" />
                ) : plan.name === "Enterprise" ? (
                  <Star className="h-5 w-5 text-purple-600" />
                ) : (
                  <Zap className="h-5 w-5 text-blue-600" />
                )}
                {plan.name}
              </CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold text-anthracite">{plan.price}</span>
                {plan.period && (
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                )}
              </div>
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
              <Button 
                className={`w-full ${
                  plan.highlighted
                    ? "bg-yellow-500 hover:bg-yellow-600 text-anthracite"
                    : "bg-anthracite hover:bg-anthracite/90 text-white"
                }`}
              >
                {plan.name === "Basic" ? "Current Plan" : `Upgrade to ${plan.name}`}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-anthracite mb-4">
          Not sure which plan is right for you?
        </h2>
        <p className="text-gray-600 mb-6">
          Schedule a call with our team to discuss your needs and find the perfect solution for your business.
        </p>
        <Button variant="outline" className="border-yellow-400 text-anthracite hover:bg-yellow-50">
          Schedule Consultation
        </Button>
      </div>
    </div>
  );
};

export default ProSubscription;
