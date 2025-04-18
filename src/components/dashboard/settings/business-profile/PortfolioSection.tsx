
import React from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

const PortfolioSection = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-medium">Portfolio Images</h4>
        <Button size="sm">
          <Upload className="mr-2 h-4 w-4" />
          Add Images
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="aspect-square rounded-md bg-gray-100 flex items-center justify-center text-gray-400">
          Image 1
        </div>
        <div className="aspect-square rounded-md bg-gray-100 flex items-center justify-center text-gray-400">
          Image 2
        </div>
        <div className="aspect-square rounded-md bg-gray-100 flex items-center justify-center text-gray-400">
          + Add More
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
