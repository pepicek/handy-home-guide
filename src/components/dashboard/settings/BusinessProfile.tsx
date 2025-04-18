import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Upload, Camera, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const BusinessProfile = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Business Profile</CardTitle>
          <CardDescription>
            This information will be shown publicly on your profile
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
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
          
          <Separator />
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="business-description">Business Description</Label>
              <textarea 
                id="business-description" 
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Describe your business..."
                defaultValue="NYC's premier home improvement specialists with over 15 years of experience in transforming homes across the five boroughs. We specialize in interior renovations, painting, and custom carpentry work."
              />
            </div>
            
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
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto bg-anthracite hover:bg-anthracite/90 text-yellow-400">Save Changes</Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Portfolio & Certifications</CardTitle>
          <CardDescription>
            Showcase your work and credentials
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
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
          
          <Separator />
          
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
        </CardContent>
      </Card>
    </>
  );
};

export default BusinessProfile;
