import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Users, DollarSign } from "lucide-react";

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const handleCancel = () => {
    navigate("/client/projects");
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-anthracite">Edit Project</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Edit Project Details</CardTitle>
          <CardDescription>Update your project information</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium" htmlFor="title">Project Title</label>
                <Input id="title" placeholder="Enter project title" defaultValue="Home Renovation" />
              </div>
              
              <div>
                <label className="text-sm font-medium" htmlFor="description">Description</label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your project in detail" 
                  className="h-32"
                  defaultValue="Complete renovation of living room and kitchen area"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium flex items-center gap-2" htmlFor="startDate">
                    <Calendar className="w-4 h-4" />
                    Start Date
                  </label>
                  <Input type="date" id="startDate" defaultValue="2024-03-15" />
                </div>
                
                <div>
                  <label className="text-sm font-medium flex items-center gap-2" htmlFor="providers">
                    <Users className="w-4 h-4" />
                    Required Providers
                  </label>
                  <Input type="number" id="providers" defaultValue="3" />
                </div>
                
                <div>
                  <label className="text-sm font-medium flex items-center gap-2" htmlFor="budget">
                    <DollarSign className="w-4 h-4" />
                    Budget
                  </label>
                  <Input type="number" id="budget" defaultValue="12000" />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" type="button" onClick={handleCancel}>Cancel</Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProject;
