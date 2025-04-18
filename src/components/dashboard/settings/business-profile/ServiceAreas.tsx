
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";

const ServiceAreas = () => {
  return (
    <div className="space-y-2">
      <Label>Service Areas</Label>
      <div className="flex items-center p-4 border rounded-md">
        <MapPin className="mr-2 h-5 w-5 text-gray-500" />
        <div className="flex-1">
          <p className="text-sm font-medium">New York City</p>
          <p className="text-xs text-gray-500">Manhattan, Brooklyn, Queens, Bronx</p>
        </div>
        <Button variant="outline" size="sm">Edit Areas</Button>
      </div>
    </div>
  );
};

export default ServiceAreas;
