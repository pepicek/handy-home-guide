
import React from "react";
import { Label } from "@/components/ui/label";

const BusinessDescription = () => {
  return (
    <div className="space-y-2">
      <Label htmlFor="business-description">Business Description</Label>
      <textarea 
        id="business-description" 
        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Describe your business..."
        defaultValue="NYC's premier home improvement specialists with over 15 years of experience in transforming homes across the five boroughs. We specialize in interior renovations, painting, and custom carpentry work."
      />
    </div>
  );
};

export default BusinessDescription;
