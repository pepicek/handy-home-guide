
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, DollarSign, Clock, Calendar, MessageCircle, ExternalLink } from "lucide-react";

const QuoteRequests = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-anthracite">Quote Requests</h1>
        <Button>Request New Quote</Button>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle>Manage Quote Requests</CardTitle>
              <CardDescription>Track and manage quotes from service providers</CardDescription>
            </div>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input className="pl-9" placeholder="Search quotes..." />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                project: "Home Renovation",
                provider: "Elite Home Renovations",
                initials: "EH",
                amount: 12500,
                status: "Pending",
                validUntil: "Apr 30, 2024",
                description: "Complete renovation of living room and kitchen area"
              },
              {
                project: "Garden Landscaping",
                provider: "Green Gardens Pro",
                initials: "GG",
                amount: 4500,
                status: "Accepted",
                validUntil: "Apr 25, 2024",
                description: "Front yard redesign with new plants and irrigation system"
              },
              {
                project: "Bathroom Remodel",
                provider: "Premier Plumbing",
                initials: "PP",
                amount: 8000,
                status: "Received",
                validUntil: "May 5, 2024",
                description: "Master bathroom renovation with new shower and fixtures"
              }
            ].map((quote, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 border rounded-lg">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-yellow-100 text-yellow-800 text-lg">
                    {quote.initials}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-medium">{quote.project}</h3>
                      <p className="text-sm text-gray-500">{quote.provider}</p>
                    </div>
                    <Badge className={
                      quote.status === 'Accepted' ? 'bg-green-100 text-green-800' :
                      quote.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }>
                      {quote.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{quote.description}</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm">
                    <div className="flex items-center gap-1 text-gray-500">
                      <DollarSign className="w-4 h-4" />
                      <span>${quote.amount}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>Valid until {quote.validUntil}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 w-full md:w-auto">
                  <Button variant="outline" size="sm" className="flex-1 md:flex-initial">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                  <Button size="sm" className="flex-1 md:flex-initial">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
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

export default QuoteRequests;
