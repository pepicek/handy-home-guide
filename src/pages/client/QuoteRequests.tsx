
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const QuoteRequests = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-anthracite">Quote Requests</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Manage Quote Requests</CardTitle>
          <CardDescription>
            Track and manage quotes from service providers
          </CardDescription>
        </CardHeader>
        <CardContent className="h-80 flex items-center justify-center">
          <p className="text-muted-foreground">
            This page will display your quote requests from service providers, 
            allowing you to compare prices and services.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuoteRequests;
