
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { ArrowLeft, Check, Target } from "lucide-react";
import { Link } from "react-router-dom";

const TargetSettings = () => {
  const [targetType, setTargetType] = useState("fixed");
  const [annualTarget, setAnnualTarget] = useState(100000);
  const [monthlyTargets, setMonthlyTargets] = useState({
    jan: 5000, feb: 5000, mar: 5000,
    apr: 5000, may: 5000, jun: 5000,
    jul: 5500, aug: 5500, sep: 5500,
    oct: 6000, nov: 6000, dec: 6000
  });
  const [automaticAdjustments, setAutomaticAdjustments] = useState(true);
  const [notifications, setNotifications] = useState(true);

  const handleMonthlyTargetChange = (month: string, value: string) => {
    setMonthlyTargets({
      ...monthlyTargets,
      [month]: parseInt(value) || 0
    });
  };

  const calculateTotalMonthly = () => {
    return Object.values(monthlyTargets).reduce((sum, val) => sum + val, 0);
  };

  const handleSaveSettings = () => {
    toast.success("Target settings saved successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-anthracite">Target Settings</h1>
          <p className="text-gray-500">Configure your earnings targets and goals</p>
        </div>
        <Button variant="outline" asChild>
          <Link to="/dashboard/targets/annual">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Annual Report
          </Link>
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="mr-2 h-5 w-5 text-yellow-600" />
            Annual Target Configuration
          </CardTitle>
          <CardDescription>Set your earnings targets for the year</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup 
            value={targetType} 
            onValueChange={setTargetType}
            className="space-y-4"
          >
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="fixed" id="fixed" />
              <div className="grid gap-1.5">
                <Label htmlFor="fixed" className="font-medium">Fixed Annual Target</Label>
                <p className="text-sm text-muted-foreground">
                  Set one target for the entire year
                </p>
                {targetType === "fixed" && (
                  <div className="pt-2">
                    <Label htmlFor="annualTarget">Annual Earnings Target ($)</Label>
                    <div className="flex gap-2 items-center mt-1">
                      <Input
                        id="annualTarget"
                        type="number"
                        value={annualTarget}
                        onChange={e => setAnnualTarget(parseInt(e.target.value) || 0)}
                        className="max-w-xs bg-white"
                      />
                      <span className="text-sm text-gray-500">
                        ${(annualTarget / 12).toLocaleString()} per month on average
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="monthly" id="monthly" />
              <div className="grid gap-1.5 w-full">
                <Label htmlFor="monthly" className="font-medium">Custom Monthly Targets</Label>
                <p className="text-sm text-muted-foreground">
                  Set individual targets for each month
                </p>
                {targetType === "monthly" && (
                  <div className="pt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries({
                      jan: "January", feb: "February", mar: "March",
                      apr: "April", may: "May", jun: "June",
                      jul: "July", aug: "August", sep: "September",
                      oct: "October", nov: "November", dec: "December"
                    }).map(([key, label]) => (
                      <div key={key} className="space-y-1">
                        <Label htmlFor={key}>{label}</Label>
                        <div className="flex">
                          <span className="bg-gray-100 px-3 flex items-center justify-center border border-r-0 rounded-l-md">
                            $
                          </span>
                          <Input
                            id={key}
                            type="number"
                            value={monthlyTargets[key as keyof typeof monthlyTargets]}
                            onChange={e => handleMonthlyTargetChange(key, e.target.value)}
                            className="rounded-l-none bg-white"
                          />
                        </div>
                      </div>
                    ))}
                    
                    <div className="md:col-span-3 pt-2">
                      <div className="flex justify-between font-medium">
                        <span>Total Annual Target:</span>
                        <span>${calculateTotalMonthly().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="progressive" id="progressive" />
              <div className="grid gap-1.5">
                <Label htmlFor="progressive" className="font-medium">Progressive Targets</Label>
                <p className="text-sm text-muted-foreground">
                  Start lower and gradually increase throughout the year
                </p>
                {targetType === "progressive" && (
                  <div className="pt-2 space-y-4">
                    <div className="space-y-1">
                      <Label htmlFor="targetStart">Starting Monthly Target ($)</Label>
                      <Input
                        id="targetStart"
                        type="number"
                        defaultValue={4000}
                        className="max-w-xs bg-white"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <Label htmlFor="targetEnd">Ending Monthly Target ($)</Label>
                      <Input
                        id="targetEnd"
                        type="number"
                        defaultValue={12000}
                        className="max-w-xs bg-white"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <Label>Progression Type</Label>
                      <Tabs defaultValue="linear" className="w-full max-w-md">
                        <TabsList className="grid grid-cols-3">
                          <TabsTrigger value="linear">Linear</TabsTrigger>
                          <TabsTrigger value="exponential">Exponential</TabsTrigger>
                          <TabsTrigger value="seasonal">Seasonal</TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </RadioGroup>
          
          <Separator />
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Additional Settings</h3>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="automatic-adjustments">Automatic Target Adjustments</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically adjust targets based on your performance
                </p>
              </div>
              <Switch 
                id="automatic-adjustments"
                checked={automaticAdjustments}
                onCheckedChange={setAutomaticAdjustments}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="notifications">Target Achievement Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive notifications when you reach target milestones
                </p>
              </div>
              <Switch 
                id="notifications"
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-end gap-2">
        <Button variant="outline" asChild>
          <Link to="/dashboard/targets/annual">Cancel</Link>
        </Button>
        <Button 
          onClick={handleSaveSettings}
          className="bg-yellow-500 hover:bg-yellow-600 text-yellow-950"
        >
          <Check className="mr-2 h-4 w-4" />
          Save Target Settings
        </Button>
      </div>
    </div>
  );
};

export default TargetSettings;
