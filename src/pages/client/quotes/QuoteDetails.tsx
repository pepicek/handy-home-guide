
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DollarSign, 
  Calendar, 
  MessageCircle, 
  FileText, 
  CheckCircle, 
  XCircle,
  Clock,
  ArrowLeft,
  User
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const QuoteDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock data - in a real app, this would come from an API call using the id
  const quote = {
    id: id || "1",
    project: "Home Renovation",
    provider: "Elite Home Renovations",
    providerInitials: "EH",
    amount: 12500,
    status: "Pending",
    validUntil: "Apr 30, 2024",
    description: "Complete renovation of living room and kitchen area including demolition, rebuild, and finishing work.",
    dateRequested: "Apr 15, 2024",
    lineItems: [
      { description: "Demolition and removal", amount: 2000 },
      { description: "Structural rebuilding", amount: 4500 },
      { description: "Plumbing and electrical", amount: 3000 },
      { description: "Finishing and painting", amount: 2500 },
      { description: "Materials and supplies", amount: 500 }
    ],
    notes: "This quote is valid for 15 days. Any changes to the project scope may require a revised quote. Payment schedule: 30% upfront, 40% mid-project, 30% upon completion.",
    contactPerson: "Thomas Wilson",
    contactEmail: "thomas@eliterenovations.com",
    contactPhone: "(555) 123-4567"
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Button variant="ghost" onClick={() => navigate("/client/quotes")} className="mr-2">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <h1 className="text-3xl font-bold text-anthracite">Quote Details</h1>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">{quote.project}</CardTitle>
                <CardDescription className="mt-1">Quote from {quote.provider}</CardDescription>
              </div>
              <Badge className={
                quote.status === 'Accepted' ? 'bg-green-100 text-green-800' :
                quote.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-blue-100 text-blue-800'
              }>
                {quote.status}
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="overview">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="details">Line Items</TabsTrigger>
                <TabsTrigger value="terms">Terms & Notes</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium mb-2">Description</p>
                  <p className="text-gray-600">{quote.description}</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                      <DollarSign className="w-4 h-4" />
                      Total Amount
                    </div>
                    <div className="font-medium">${quote.amount.toLocaleString()}</div>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                      <Calendar className="w-4 h-4" />
                      Date Requested
                    </div>
                    <div className="font-medium">{quote.dateRequested}</div>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                      <Clock className="w-4 h-4" />
                      Valid Until
                    </div>
                    <div className="font-medium">{quote.validUntil}</div>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                      <User className="w-4 h-4" />
                      Contact
                    </div>
                    <div className="font-medium">{quote.contactPerson}</div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="details">
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Description</th>
                        <th className="px-4 py-3 text-right text-sm font-medium text-gray-600">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {quote.lineItems.map((item, index) => (
                        <tr key={index}>
                          <td className="px-4 py-3 text-sm">{item.description}</td>
                          <td className="px-4 py-3 text-sm text-right">${item.amount.toLocaleString()}</td>
                        </tr>
                      ))}
                      <tr className="bg-gray-50 font-medium">
                        <td className="px-4 py-3 text-sm">Total</td>
                        <td className="px-4 py-3 text-sm text-right">${quote.amount.toLocaleString()}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="terms" className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium mb-2">Notes & Terms</p>
                  <p className="text-gray-600">{quote.notes}</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <p className="font-medium mb-2">Contact Information</p>
                  <div className="space-y-2">
                    <p className="text-sm"><span className="text-gray-500">Name:</span> {quote.contactPerson}</p>
                    <p className="text-sm"><span className="text-gray-500">Email:</span> {quote.contactEmail}</p>
                    <p className="text-sm"><span className="text-gray-500">Phone:</span> {quote.contactPhone}</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          
          <CardFooter className="border-t bg-gray-50 flex flex-wrap gap-2">
            <Button variant="outline" className="flex-1 sm:flex-initial">
              <FileText className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="outline" className="flex-1 sm:flex-initial">
              <MessageCircle className="w-4 h-4 mr-2" />
              Message Provider
            </Button>
            <div className="flex gap-2 w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0">
              <Button variant="outline" className="flex-1 sm:flex-initial bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 border-red-200">
                <XCircle className="w-4 h-4 mr-2" />
                Decline
              </Button>
              <Button className="flex-1 sm:flex-initial bg-green-600 hover:bg-green-700">
                <CheckCircle className="w-4 h-4 mr-2" />
                Accept Quote
              </Button>
            </div>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Provider</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 mb-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-yellow-100 text-yellow-800 text-lg">
                  {quote.providerInitials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{quote.provider}</p>
                <p className="text-sm text-gray-500">Verified Service Provider</p>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Average Rating</p>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-medium">4.8</span>
                  <span className="text-gray-500">(124)</span>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Projects Completed</p>
                <p className="font-medium">187</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Response Rate</p>
                <p className="font-medium">98%</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Member Since</p>
                <p className="font-medium">January 2020</p>
              </div>
            </div>
            
            <Button className="w-full mt-6">
              View Provider Profile
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuoteDetails;
