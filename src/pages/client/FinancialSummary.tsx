
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FinancialSummary = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-anthracite">Financial Summary</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Project Spending</CardTitle>
          <CardDescription>
            Track your home improvement investments
          </CardDescription>
        </CardHeader>
        <CardContent className="h-80 flex items-center justify-center">
          <p className="text-muted-foreground">
            This page will provide financial analytics and summaries of your spending
            across all projects and service providers.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialSummary;
