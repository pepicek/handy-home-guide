
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, Search } from "lucide-react";

const SearchHistory = () => {
  const searches = [
    {
      id: 1,
      query: "Plumbers in San Francisco",
      date: "Apr 15, 2024",
      filters: ["Emergency Service", "Available Today"],
      resultsCount: 15
    },
    {
      id: 2,
      query: "House Cleaning Services",
      date: "Apr 14, 2024",
      filters: ["Weekly Service", "Pet Friendly"],
      resultsCount: 28
    }
  ];

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
        <CardContent>
          <div className="space-y-4">
            {searches.map((search) => (
              <div key={search.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-lg mb-2">{search.query}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Clock className="h-4 w-4" />
                      <span>{search.date}</span>
                      <span>•</span>
                      <span>{search.resultsCount} results</span>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {search.filters.map((filter, index) => (
                        <Badge key={index} variant="secondary">
                          {filter}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="shrink-0">
                    <Search className="h-4 w-4 mr-2" />
                    Repeat Search
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchHistory;
