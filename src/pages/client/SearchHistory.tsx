
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SearchHistory = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-anthracite">Search History</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Searches</CardTitle>
          <CardDescription>
            Review and repeat your previous searches
          </CardDescription>
        </CardHeader>
        <CardContent className="h-80 flex items-center justify-center">
          <p className="text-muted-foreground">
            This page will display your search history for services and providers,
            allowing you to quickly repeat past searches.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchHistory;
