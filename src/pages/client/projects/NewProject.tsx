
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Users, DollarSign } from "lucide-react";

const NewProject = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-anthracite">Create New Project</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
          <CardDescription>Fill in the details for your new project</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium" htmlFor="title">Project Title</label>
                <Input id="title" placeholder="Enter project title" />
              </div>
              
              <div>
                <label className="text-sm font-medium" htmlFor="description">Description</label>
                <Textarea id="description" placeholder="Describe your project in detail" className="h-32" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium flex items-center gap-2" htmlFor="startDate">
                    <Calendar className="w-4 h-4" />
                    Start Date
                  </label>
                  <Input type="date" id="startDate" />
                </div>
                
                <div>
                  <label className="text-sm font-medium flex items-center gap-2" htmlFor="providers">
                    <Users className="w-4 h-4" />
                    Required Providers
                  </label>
                  <Input type="number" id="providers" placeholder="Number of providers" />
                </div>
                
                <div>
                  <label className="text-sm font-medium flex items-center gap-2" htmlFor="budget">
                    <DollarSign className="w-4 h-4" />
                    Budget
                  </label>
                  <Input type="number" id="budget" placeholder="Estimated budget" />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" type="button">Cancel</Button>
              <Button type="submit">Create Project</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewProject;
