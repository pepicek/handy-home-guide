
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ClientReviews = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-anthracite">My Reviews</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Provider Reviews</CardTitle>
          <CardDescription>
            Manage reviews you've submitted for service providers
          </CardDescription>
        </CardHeader>
        <CardContent className="h-80 flex items-center justify-center">
          <p className="text-muted-foreground">
            This page will display the reviews you've given to service providers,
            as well as allow you to write new reviews for recent services.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientReviews;
