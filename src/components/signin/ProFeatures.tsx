import { Crown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProFeature {
  title: string;
  description: string;
}

const proFeatures: ProFeature[] = [
  {
    title: "Priority Listing",
    description: "Your services appear at the top of search results"
  },
  {
    title: "Advanced Analytics",
    description: "Detailed insights about your business performance"
  },
  {
    title: "Custom Branding",
    description: "Add your logo and brand colors to your profile"
  },
  {
    title: "Unlimited Offers",
    description: "Create unlimited special offers and promotions"
  }
];

const ProFeatureCard = () => {
  return (
    <Card className="bg-gradient-to-br from-yellow-500 via-yellow-400 to-amber-400 border-none shadow-xl my-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Crown className="h-6 w-6 text-anthracite" />
          <CardTitle className="text-2xl text-anthracite">YelloPago Pro</CardTitle>
        </div>
        <CardDescription className="text-anthracite/80 text-lg">
          Unlock premium features to grow your business
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-white/90 backdrop-blur rounded-lg p-6">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-bold text-anthracite">$29</span>
            <span className="text-anthracite/70">/month</span>
          </div>
          <div className="space-y-3">
            {proFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1">
                  <Check className="h-4 w-4 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-medium text-anthracite">{feature.title}</h4>
                  <p className="text-sm text-anthracite/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button className="w-full bg-anthracite hover:bg-anthracite/90 text-yellow-400">
          Upgrade to Pro
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProFeatureCard;
