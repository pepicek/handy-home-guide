
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload, Camera } from "lucide-react";

const BusinessProfileHeader = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex flex-col items-center space-y-3">
        <Avatar className="h-24 w-24">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
          <Button variant="outline" size="sm">
            <Camera className="mr-2 h-4 w-4" />
            Take photo
          </Button>
        </div>
      </div>
      <div className="flex-1 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="business-name">Business Name</Label>
            <Input id="business-name" defaultValue="NYO" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-name">Contact Person</Label>
            <Input id="contact-name" defaultValue="Joe Zee" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" defaultValue="joe@zee.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" defaultValue="(503) 928-7737" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfileHeader;
