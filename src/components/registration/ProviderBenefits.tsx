
import React from "react";
import { Play } from "lucide-react";

export const ProviderBenefits = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-anthracite/10 flex items-center justify-center flex-shrink-0">
          <Play className="h-4 w-4 text-anthracite" />
        </div>
        <div>
          <h3 className="font-medium text-anthracite">Grow Your Business</h3>
          <p className="text-sm text-gray-600">Connect with clients looking for your specific services and expertise.</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-anthracite/10 flex items-center justify-center flex-shrink-0">
          <Play className="h-4 w-4 text-anthracite" />
        </div>
        <div>
          <h3 className="font-medium text-anthracite">Manage Everything in One Place</h3>
          <p className="text-sm text-gray-600">Simplify scheduling, invoicing, and client communication with our tools.</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-anthracite/10 flex items-center justify-center flex-shrink-0">
          <Play className="h-4 w-4 text-anthracite" />
        </div>
        <div>
          <h3 className="font-medium text-anthracite">Build Your Reputation</h3>
          <p className="text-sm text-gray-600">Collect reviews and showcase your best work to stand out from competitors.</p>
        </div>
      </div>
    </div>
  );
};
