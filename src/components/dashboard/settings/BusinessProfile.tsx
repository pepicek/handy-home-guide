
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import BusinessProfileHeader from "./business-profile/BusinessProfileHeader";
import BusinessDescription from "./business-profile/BusinessDescription";
import BusinessCategories from "./business-profile/BusinessCategories";
import ServiceAreas from "./business-profile/ServiceAreas";
import PortfolioSection from "./business-profile/PortfolioSection";
import CertificationsSection from "./business-profile/CertificationsSection";

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
          <BusinessProfileHeader />
          <Separator />
          <div className="space-y-4">
            <BusinessDescription />
            <BusinessCategories />
            <ServiceAreas />
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
          <PortfolioSection />
          <Separator />
          <CertificationsSection />
        </CardContent>
      </Card>
    </>
  );
};

export default BusinessProfile;
