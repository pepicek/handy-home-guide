
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Store, Briefcase } from "lucide-react";

interface AvailabilityTypeSelectorProps {
  value: "business-hours" | "project-based";
  onChange: (value: "business-hours" | "project-based") => void;
}

const AvailabilityTypeSelector = ({ value, onChange }: AvailabilityTypeSelectorProps) => {
  return (
    <RadioGroup
      value={value}
      onValueChange={onChange as (value: string) => void}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <Label
        htmlFor="business-hours"
        className="cursor-pointer [&:has([data-state=checked])>div]:border-yellow-500"
      >
        <RadioGroupItem value="business-hours" id="business-hours" className="sr-only" />
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <Store className="h-6 w-6 text-yellow-600" />
            <div className="space-y-1">
              <h3 className="font-medium">Business Hours</h3>
              <p className="text-sm text-muted-foreground">
                For fixed location businesses with regular hours (e.g., shops, salons)
              </p>
            </div>
          </CardContent>
        </Card>
      </Label>

      <Label
        htmlFor="project-based"
        className="cursor-pointer [&:has([data-state=checked])>div]:border-yellow-500"
      >
        <RadioGroupItem value="project-based" id="project-based" className="sr-only" />
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <Briefcase className="h-6 w-6 text-yellow-600" />
            <div className="space-y-1">
              <h3 className="font-medium">Project-Based</h3>
              <p className="text-sm text-muted-foreground">
                For on-site service providers working on multiple projects
              </p>
            </div>
          </CardContent>
        </Card>
      </Label>
    </RadioGroup>
  );
};

export default AvailabilityTypeSelector;
