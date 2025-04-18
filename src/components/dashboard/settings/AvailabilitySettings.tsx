import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Clock } from "lucide-react";
import AvailabilityTypeSelector from "@/components/dashboard/availability/AvailabilityTypeSelector";
import ProjectCapacitySettings from "@/components/dashboard/availability/ProjectCapacitySettings";

const AvailabilitySettings = () => {
  const [availabilityType, setAvailabilityType] = React.useState<"business-hours" | "project-based">("business-hours");

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">How Do You Want to Manage Your Availability?</CardTitle>
          <CardDescription>
            Choose the type of availability management that best suits your business
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AvailabilityTypeSelector 
            value={availabilityType} 
            onChange={setAvailabilityType}
          />
        </CardContent>
      </Card>

      {availabilityType === "business-hours" ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Business Hours</CardTitle>
            <CardDescription>
              Set your regular working hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center p-3 border rounded-md bg-gray-50">
                <Clock className="h-5 w-5 text-gray-500 mr-2" />
                <p className="text-sm">Set your availability to let clients know when they can book your services</p>
              </div>
              
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                <div key={day} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div className="flex items-center gap-4">
                    <div className="w-24">
                      <p className="font-medium">{day}</p>
                    </div>
                    <Switch id={`${day.toLowerCase()}-switch`} defaultChecked={day !== "Sunday"} />
                    <Label htmlFor={`${day.toLowerCase()}-switch`} className="text-sm text-gray-600">
                      Available
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <select className="h-8 rounded-md border bg-background px-2 py-1 text-sm">
                      <option>9:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                    </select>
                    <span className="text-sm">to</span>
                    <select className="h-8 rounded-md border bg-background px-2 py-1 text-sm">
                      <option>5:00 PM</option>
                      <option>6:00 PM</option>
                      <option>7:00 PM</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto bg-anthracite hover:bg-anthracite/90 text-yellow-400">Save Hours</Button>
          </CardFooter>
        </Card>
      ) : (
        <ProjectCapacitySettings />
      )}
    </>
  );
};

export default AvailabilitySettings;
