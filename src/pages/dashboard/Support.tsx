
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Youtube, MessageSquare, Book, ExternalLink } from "lucide-react";

const Support = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-anthracite">Customer Support</h1>
        <p className="text-gray-500">Get help and learn more about our platform</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="h-5 w-5 text-yellow-600" />
              Documentation
            </CardTitle>
            <CardDescription>
              Browse our comprehensive documentation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4 mr-2" />
                Getting Started Guide
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4 mr-2" />
                API Documentation
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Youtube className="h-5 w-5 text-red-600" />
              Video Tutorials
            </CardTitle>
            <CardDescription>
              Learn through our video guides
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-4 w-4 mr-2" />
                Platform Overview
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-4 w-4 mr-2" />
                Invoice Management
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              Trouble Tickets
            </CardTitle>
            <CardDescription>
              Need help? Create a support ticket and we'll assist you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full sm:w-auto">
              <MessageSquare className="h-4 w-4 mr-2" />
              Create Support Ticket
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Support;
