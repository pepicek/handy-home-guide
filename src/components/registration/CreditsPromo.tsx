
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Gift } from "lucide-react";

export const CreditsPromo = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-lg border border-yellow-200">
      <div className="flex items-start gap-4">
        <div className="bg-white/80 rounded-full p-3">
          <Gift className="h-6 w-6 text-yellow-600" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-anthracite mb-2">
            Get $200 in Free Credits!
          </h2>
          <p className="text-gray-700 mb-3">
            Start your journey with $200 in non-refundable credits. Test all our premium features and services for multiple months.
          </p>
          <Link 
            to="/credits"
            className="text-yellow-700 hover:text-yellow-800 font-medium inline-flex items-center"
          >
            Learn more about credits
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
