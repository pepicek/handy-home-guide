
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users, Briefcase } from "lucide-react";

const ProjectCapacitySettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Project-Based Availability</CardTitle>
        <CardDescription>
          Manage your project capacity and availability for on-site work
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label>Current Availability Status</Label>
              <div className="text-sm text-muted-foreground">Are you accepting new projects?</div>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="space-y-3">
            <Label>Current Project Load</Label>
            <div className="space-y-4">
              <Slider 
                defaultValue={[60]} 
                max={100} 
                step={10}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Light Load (0-30%)</span>
                <span>Moderate (40-70%)</span>
                <span>Full Load (80-100%)</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Label>Project Capacity</Label>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <div className="text-sm">Maximum Active Projects</div>
                </div>
                <Select defaultValue="3">
                  <SelectTrigger className="w-[100px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div className="text-sm">Average Project Duration</div>
                </div>
                <Select defaultValue="2-4">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">0-1 week</SelectItem>
                    <SelectItem value="1-2">1-2 weeks</SelectItem>
                    <SelectItem value="2-4">2-4 weeks</SelectItem>
                    <SelectItem value="1-2m">1-2 months</SelectItem>
                    <SelectItem value="2+">2+ months</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <div className="text-sm">Team Size</div>
                </div>
                <Select defaultValue="solo">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solo">Solo Provider</SelectItem>
                    <SelectItem value="2-3">2-3 People</SelectItem>
                    <SelectItem value="4-6">4-6 People</SelectItem>
                    <SelectItem value="7+">7+ People</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Label>Lead Time Requirements</Label>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div className="text-sm">Preferred Notice</div>
              </div>
              <Select defaultValue="2-weeks">
                <SelectTrigger className="w-[140px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-week">1 Week</SelectItem>
                  <SelectItem value="2-weeks">2 Weeks</SelectItem>
                  <SelectItem value="1-month">1 Month</SelectItem>
                  <SelectItem value="2-months">2 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto bg-anthracite hover:bg-anthracite/90 text-yellow-400">
          Save Project Capacity Settings
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCapacitySettings;
