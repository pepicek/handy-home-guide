
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Plus, 
  Calendar, 
  Edit, 
  Trash2, 
  FileText, 
  Users,
  ChevronRight,
  Clock,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  ClipboardList
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import DeleteProjectModal from "@/components/projects/DeleteProjectModal";

const ProjectsManager = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);
  
  const handleDelete = (projectId: string) => {
    setProjectToDelete(projectId);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setShowDeleteModal(false);
    setProjectToDelete(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
        <h1 className="text-3xl font-bold text-anthracite">My Projects</h1>
        <Button 
          className="bg-anthracite hover:bg-anthracite/90 text-yellow-400"
          onClick={() => navigate("/client/projects/new")}
        >
          <Plus className="mr-2 h-4 w-4" /> Create New Project
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Project Manager</CardTitle>
          <CardDescription>Organize and track your home improvement projects.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="active" className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center space-y-2 sm:space-y-0 mb-4">
              <TabsList className="bg-yellow-100/50">
                <TabsTrigger value="active">Active Projects</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="planning">Planning</TabsTrigger>
              </TabsList>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input 
                  placeholder="Search projects..." 
                  className="pl-9 bg-white w-full sm:w-[250px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <TabsContent value="active" className="mt-0">
              <ActiveProjectsList handleDelete={handleDelete} />
            </TabsContent>
            
            <TabsContent value="completed" className="mt-0">
              <CompletedProjectsList handleDelete={handleDelete} />
            </TabsContent>
            
            <TabsContent value="planning" className="mt-0">
              <PlanningProjectsList handleDelete={handleDelete} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <div className="grid gap-6 md:grid-cols-2">
        <ProjectSummaryCard />
        <UpcomingMilestonesCard />
      </div>
      
      <DeleteProjectModal 
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

const ActiveProjectsList = ({ handleDelete }) => {
  const activeProjects = [
    {
      id: 1,
      title: "Home Renovation",
      description: "Complete renovation of living room and kitchen area",
      status: "In Progress",
      progress: 65,
      startDate: "Mar 15, 2023",
      endDate: "Jun 30, 2023",
      budget: "$12,000",
      spent: "$7,800",
      providers: [
        { name: "Elite Home Renovations", role: "General Contractor", initials: "EH" },
        { name: "Premier Plumbing Solutions", role: "Plumbing", initials: "PP" },
        { name: "Custom Cabinetry Co.", role: "Cabinetry", initials: "CC" }
      ],
      tasks: { completed: 8, total: 12 },
      nextMilestone: "Cabinet Installation on Apr 28"
    },
    {
      id: 2,
      title: "Garden Landscaping",
      description: "Front yard redesign with new plants and irrigation system",
      status: "Starting Soon",
      progress: 10,
      startDate: "Apr 20, 2023",
      endDate: "May 25, 2023",
      budget: "$4,500",
      spent: "$450",
      providers: [
        { name: "Green Gardens Pro", role: "Landscaping", initials: "GG" }
      ],
      tasks: { completed: 1, total: 8 },
      nextMilestone: "Soil Preparation on Apr 22"
    },
    {
      id: 3,
      title: "Bathroom Remodel",
      description: "Master bathroom renovation with new shower and fixtures",
      status: "Planning",
      progress: 25,
      startDate: "May 5, 2023",
      endDate: "Jun 15, 2023",
      budget: "$8,000",
      spent: "$2,000",
      providers: [
        { name: "Elite Home Renovations", role: "General Contractor", initials: "EH" },
        { name: "Premier Plumbing Solutions", role: "Plumbing", initials: "PP" }
      ],
      tasks: { completed: 2, total: 10 },
      nextMilestone: "Material Selection by Apr 30"
    }
  ];
  
  return (
    <div className="space-y-4">
      {activeProjects.map(project => (
        <ProjectCard key={project.id} project={project} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

const CompletedProjectsList = ({ handleDelete }) => {
  return (
    <div className="space-y-4">
      <ProjectCard 
        project={{
          id: 4,
          title: "Deck Replacement",
          description: "Replaced old wooden deck with composite materials",
          status: "Completed",
          progress: 100,
          startDate: "Jan 10, 2023",
          endDate: "Feb 15, 2023",
          budget: "$6,200",
          spent: "$6,100",
          providers: [
            { name: "Elite Home Renovations", role: "General Contractor", initials: "EH" }
          ],
          tasks: { completed: 7, total: 7 },
          nextMilestone: "None"
        }} 
        handleDelete={handleDelete}
      />
      <ProjectCard 
        project={{
          id: 5,
          title: "Interior Painting",
          description: "Repainted living room, dining room and hallways",
          status: "Completed",
          progress: 100,
          startDate: "Feb 5, 2023",
          endDate: "Feb 12, 2023",
          budget: "$2,800",
          spent: "$2,750",
          providers: [
            { name: "Artistic Painting Services", role: "Painting", initials: "AP" }
          ],
          tasks: { completed: 5, total: 5 },
          nextMilestone: "None"
        }} 
        handleDelete={handleDelete}
      />
    </div>
  );
};

const PlanningProjectsList = ({ handleDelete }) => {
  return (
    <div className="space-y-4">
      <ProjectCard 
        project={{
          id: 6,
          title: "Basement Finishing",
          description: "Converting unfinished basement to recreation room",
          status: "Planning",
          progress: 5,
          startDate: "Jul 10, 2023",
          endDate: "Sep 30, 2023",
          budget: "$18,000",
          spent: "$0",
          providers: [],
          tasks: { completed: 1, total: 15 },
          nextMilestone: "Get 3 quotes by May 15"
        }} 
        handleDelete={handleDelete}
      />
    </div>
  );
};

const ProjectCard = ({ project, handleDelete }) => {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <div>
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <CardDescription className="mt-1">{project.description}</CardDescription>
          </div>
          <Badge className={`
            h-fit
            ${project.status === 'Completed' ? 'bg-green-100 text-green-800' : 
              project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
              project.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
              'bg-purple-100 text-purple-800'}
          `}>
            {project.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Project Progress</span>
                <span className="font-medium">{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-2" />
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Start Date</p>
                <p className="font-medium">{project.startDate}</p>
              </div>
              <div>
                <p className="text-gray-500">End Date</p>
                <p className="font-medium">{project.endDate}</p>
              </div>
              <div>
                <p className="text-gray-500">Budget</p>
                <p className="font-medium">{project.budget}</p>
              </div>
              <div>
                <p className="text-gray-500">Spent</p>
                <p className="font-medium">{project.spent}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm mb-1">Project Team</p>
              {project.providers.length > 0 ? (
                <div className="flex flex-wrap items-center gap-2">
                  {project.providers.map((provider, index) => (
                    <div key={index} className="flex items-center gap-2 bg-gray-50 rounded-full px-2 py-1">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs bg-yellow-100 text-yellow-800">
                          {provider.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-xs">
                        <p className="font-medium">{provider.name}</p>
                        <p className="text-gray-500">{provider.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">No providers assigned yet</p>
              )}
            </div>
            
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">Tasks</p>
                <p className="font-medium">
                  {project.tasks.completed} of {project.tasks.total} completed
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Next Milestone</p>
                <p className="font-medium">{project.nextMilestone}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-gray-50 justify-between pt-4 pb-4">
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8"
            onClick={() => navigate(`/client/projects/${project.id}/edit`)}
          >
            <Edit className="h-4 w-4 mr-1" />
            Edit
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8"
            onClick={() => navigate(`/client/projects/${project.id}`)}
          >
            <FileText className="h-4 w-4 mr-1" />
            Details
          </Button>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 text-red-600 hover:text-red-700 hover:bg-red-50"
            onClick={() => handleDelete(project.id)}
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Delete
          </Button>
          <Button 
            size="sm" 
            className="h-8 bg-yellow-500 hover:bg-yellow-600 text-anthracite"
            onClick={() => navigate(`/client/projects/${project.id}`)}
          >
            <ArrowUpRight className="h-4 w-4 mr-1" />
            Manage
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

const ProjectSummaryCard = () => {
  const stats = [
    { label: "Active Projects", value: "3", icon: ClipboardList, color: "text-blue-600 bg-blue-100" },
    { label: "Total Budget", value: "$24,500", icon: DollarSign, color: "text-green-600 bg-green-100" },
    { label: "Spent to Date", value: "$10,250", icon: DollarSign, color: "text-yellow-600 bg-yellow-100" },
    { label: "Providers Engaged", value: "5", icon: Users, color: "text-purple-600 bg-purple-100" },
    { label: "Upcoming Milestones", value: "4", icon: Calendar, color: "text-indigo-600 bg-indigo-100" },
    { label: "Tasks Completed", value: "11/30", icon: CheckCircle2, color: "text-teal-600 bg-teal-100" }
  ];
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Summary</CardTitle>
        <CardDescription>Overview of all your projects</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
              <div className={`p-2 rounded-full ${stat.color} mb-2`}>
                <stat.icon className="h-4 w-4" />
              </div>
              <p className="text-xs text-gray-500">{stat.label}</p>
              <p className="text-lg font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const UpcomingMilestonesCard = () => {
  const navigate = useNavigate();
  
  const milestones = [
    { 
      project: "Home Renovation", 
      milestone: "Cabinet Installation", 
      date: "Apr 28", 
      status: "On Track",
      provider: "Custom Cabinetry Co.",
      projectId: 1
    },
    { 
      project: "Garden Landscaping", 
      milestone: "Soil Preparation", 
      date: "Apr 22", 
      status: "On Track",
      provider: "Green Gardens Pro",
      projectId: 2
    },
    { 
      project: "Bathroom Remodel", 
      milestone: "Material Selection", 
      date: "Apr 30", 
      status: "At Risk",
      provider: "Elite Home Renovations",
      projectId: 3
    },
    { 
      project: "Basement Finishing", 
      milestone: "Get 3 Quotes", 
      date: "May 15", 
      status: "Pending",
      provider: "N/A",
      projectId: 4
    }
  ];
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Milestones</CardTitle>
        <CardDescription>Key project dates and deliverables</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg bg-white">
              <div>
                <p className="font-medium">{milestone.milestone}</p>
                <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                  <span>{milestone.project}</span>
                  <span>•</span>
                  <span>{milestone.provider}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1 text-gray-500" />
                    <span className="text-xs font-medium">{milestone.date}</span>
                  </div>
                  <Badge className={`mt-1 text-xs ${
                    milestone.status === 'On Track' ? 'bg-green-100 text-green-800' :
                    milestone.status === 'At Risk' ? 'bg-amber-100 text-amber-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {milestone.status === 'On Track' && <CheckCircle2 className="h-3 w-3 mr-1" />}
                    {milestone.status === 'At Risk' && <AlertCircle className="h-3 w-3 mr-1" />}
                    {milestone.status}
                  </Badge>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0"
                  onClick={() => navigate(`/client/projects/${milestone.projectId}`)}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectsManager;

