
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CertificationsSection = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-medium">Certifications & Licenses</h4>
        <Button size="sm" variant="outline">
          Add Certification
        </Button>
      </div>
      <div className="space-y-3">
        <div className="p-3 border rounded-md flex justify-between items-center">
          <div>
            <p className="font-medium">Master Painter Certification</p>
            <p className="text-xs text-gray-500">Expires: Jan 2026</p>
          </div>
          <Badge className="bg-green-100 text-green-800">Verified</Badge>
        </div>
        <div className="p-3 border rounded-md flex justify-between items-center">
          <div>
            <p className="font-medium">Licensed Home Improvement Contractor</p>
            <p className="text-xs text-gray-500">New York State #12345</p>
          </div>
          <Badge className="bg-green-100 text-green-800">Verified</Badge>
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;
