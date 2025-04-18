
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, FileText, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RequestNewQuote = () => {
  const navigate = useNavigate();
  
  const handleCancel = () => {
    navigate("/client/quotes");
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-anthracite">Request New Quote</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Request Details</CardTitle>
          <CardDescription>Fill in the details for your quote request</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium" htmlFor="projectType">Project Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="renovation">Home Renovation</SelectItem>
                    <SelectItem value="landscaping">Landscaping</SelectItem>
                    <SelectItem value="plumbing">Plumbing</SelectItem>
                    <SelectItem value="electrical">Electrical</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium" htmlFor="title">Title</label>
                <Input id="title" placeholder="Enter a title for your quote request" />
              </div>
              
              <div>
                <label className="text-sm font-medium" htmlFor="description">Description</label>
                <Textarea id="description" placeholder="Describe what you need in detail" className="h-32" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium flex items-center gap-2" htmlFor="deadline">
                    <Calendar className="w-4 h-4" />
                    Deadline
                  </label>
                  <Input type="date" id="deadline" />
                </div>
                
                <div>
                  <label className="text-sm font-medium flex items-center gap-2" htmlFor="budget">
                    <DollarSign className="w-4 h-4" />
                    Budget (Optional)
                  </label>
                  <Input type="number" id="budget" placeholder="Your estimated budget" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium flex items-center gap-2" htmlFor="attachments">
                  <FileText className="w-4 h-4" />
                  Attachments (Optional)
                </label>
                <Input type="file" id="attachments" className="py-1.5" multiple />
                <p className="mt-1 text-xs text-gray-500">Upload photos, documents or any other files that might help the provider.</p>
              </div>

              <div>
                <label className="text-sm font-medium" htmlFor="providers">Select Providers</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select providers to request quotes from" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="elite">Elite Home Renovations</SelectItem>
                    <SelectItem value="premier">Premier Plumbing</SelectItem>
                    <SelectItem value="green">Green Gardens Pro</SelectItem>
                    <SelectItem value="custom">Custom Cabinetry Co.</SelectItem>
                    <SelectItem value="all">Request from all relevant providers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" type="button" onClick={handleCancel}>Cancel</Button>
              <Button type="submit">Submit Request</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RequestNewQuote;
