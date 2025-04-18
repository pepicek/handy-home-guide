
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

const BusinessCategories = () => {
  return (
    <div className="space-y-2">
      <Label>Business Categories</Label>
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-yellow-100 text-yellow-800">Painting</Badge>
        <Badge className="bg-yellow-100 text-yellow-800">Renovation</Badge>
        <Badge className="bg-yellow-100 text-yellow-800">Carpentry</Badge>
        <Button variant="outline" size="sm" className="h-6">
          + Add Category
        </Button>
      </div>
    </div>
  );
};

export default BusinessCategories;
