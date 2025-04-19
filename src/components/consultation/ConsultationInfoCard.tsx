
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ConsultationInfoCard = () => {
  return (
    <Card className="p-6 bg-anthracite text-white">
      <h3 className="text-xl font-bold mb-4">What to Expect</h3>
      <ul className="space-y-4">
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
          <span>30-minute personalized video call with a YelloPago specialist</span>
        </li>
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
          <span>Custom recommendations for your business</span>
        </li>
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
          <span>Platform demonstration tailored to your services</span>
        </li>
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
          <span>Q&A session to address your specific concerns</span>
        </li>
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
          <span>Special onboarding offer for consultation attendees</span>
        </li>
      </ul>
      
      <div className="mt-8 pt-6 border-t border-gray-700">
        <h4 className="font-medium mb-2">Hours of Availability</h4>
        <p className="text-sm text-gray-300 mb-1">Monday - Friday: 9am - 5pm</p>
        <p className="text-sm text-gray-300">Your local timezone</p>
      </div>
    </Card>
  );
};
