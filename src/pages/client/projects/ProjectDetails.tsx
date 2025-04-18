
import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Calendar, 
  DollarSign, 
  Users, 
  CheckCircle2, 
  Clock,
  FileText,
  MessageCircle,
  Edit
} from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-anthracite">Project Details</h1>
        <Button variant="outline">
          <Edit className="w-4 h-4 mr-2" />
          Edit Project
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Home Renovation</CardTitle>
            <CardDescription>Complete renovation of living room and kitchen area</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span className="font-medium">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <Calendar className="w-4 h-4" />
                    Start Date
                  </div>
                  <div className="font-medium">Mar 15, 2024</div>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <Calendar className="w-4 h-4" />
                    End Date
                  </div>
                  <div className="font-medium">Jun 30, 2024</div>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <DollarSign className="w-4 h-4" />
                    Budget
                  </div>
                  <div className="font-medium">$12,000</div>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <DollarSign className="w-4 h-4" />
                    Spent
                  </div>
                  <div className="font-medium">$7,800</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Project Team</CardTitle>
            <CardDescription>Service providers working on this project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Elite Home Renovations", role: "General Contractor", initials: "EH" },
                { name: "Premier Plumbing", role: "Plumbing", initials: "PP" },
                { name: "Custom Cabinetry", role: "Cabinetry", initials: "CC" }
              ].map((provider, index) => (
                <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-yellow-100 text-yellow-800">
                      {provider.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{provider.name}</p>
                    <p className="text-xs text-gray-500">{provider.role}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Timeline & Milestones</CardTitle>
            <CardDescription>Project progress and upcoming tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Project Planning", date: "Mar 15", status: "completed" },
                { title: "Demo Work", date: "Mar 20", status: "completed" },
                { title: "Plumbing Rough-In", date: "Apr 5", status: "completed" },
                { title: "Cabinet Installation", date: "Apr 28", status: "in-progress" },
                { title: "Finishing Work", date: "May 15", status: "pending" }
              ].map((milestone, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`rounded-full p-2 ${
                    milestone.status === 'completed' ? 'bg-green-100 text-green-600' :
                    milestone.status === 'in-progress' ? 'bg-blue-100 text-blue-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {milestone.status === 'completed' ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : milestone.status === 'in-progress' ? (
                      <Clock className="w-4 h-4" />
                    ) : (
                      <FileText className="w-4 h-4" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{milestone.title}</p>
                    <p className="text-sm text-gray-500">{milestone.date}</p>
                  </div>
                  {milestone.status === 'in-progress' && (
                    <div className="text-sm text-blue-600 font-medium">In Progress</div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDetails;
