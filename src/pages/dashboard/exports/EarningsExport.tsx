
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon, Download, FileSpreadsheet, FileText, FileIcon, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const EarningsExport = () => {
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(2025, 0, 1),
    to: new Date()
  });
  
  const [exportFormat, setExportFormat] = useState("excel");
  const [includeData, setIncludeData] = useState({
    invoices: true,
    pendingPayments: true,
    serviceBreakdown: true,
    clientDetails: false,
    taxInfo: true
  });
  
  const handleExport = () => {
    toast.success(`Exporting data in ${exportFormat.toUpperCase()} format`);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-anthracite">Export Earnings Data</h1>
          <p className="text-gray-500">Export your earnings data in various formats</p>
        </div>
        <Button variant="outline" asChild>
          <Link to="/dashboard/earnings">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Earnings
          </Link>
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Data Selection</CardTitle>
          <CardDescription>Choose what data to include in your export</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-1">
              <Label>Date Range</Label>
              <div className="flex gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-[240px] justify-start text-left font-normal bg-white"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dateRange.from ? (
                        dateRange.to ? (
                          <>
                            {format(dateRange.from, "LLL dd, y")} -{" "}
                            {format(dateRange.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(dateRange.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Select date range</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={dateRange.from}
                      selected={dateRange}
                      onSelect={(range) => {
                        setDateRange({
                          from: range?.from,
                          to: range?.to || range?.from
                        });
                      }}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            <div className="space-y-1">
              <Label>Include Data</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
                {[
                  { id: "invoices", label: "Invoices" },
                  { id: "pendingPayments", label: "Pending Payments" },
                  { id: "serviceBreakdown", label: "Service Breakdown" },
                  { id: "clientDetails", label: "Client Details" },
                  { id: "taxInfo", label: "Tax Information" }
                ].map(item => (
                  <div key={item.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={item.id} 
                      checked={includeData[item.id as keyof typeof includeData]}
                      onCheckedChange={(checked) => 
                        setIncludeData({...includeData, [item.id]: !!checked})
                      }
                    />
                    <label
                      htmlFor={item.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {item.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-1">
              <Label>Export Format</Label>
              <RadioGroup 
                value={exportFormat} 
                onValueChange={setExportFormat}
                className="flex flex-col space-y-1 pt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="excel" id="excel" />
                  <Label htmlFor="excel" className="flex items-center">
                    <FileSpreadsheet className="h-4 w-4 mr-2 text-green-600" />
                    Excel (.xlsx)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="csv" id="csv" />
                  <Label htmlFor="csv" className="flex items-center">
                    <FileIcon className="h-4 w-4 mr-2 text-blue-600" />
                    CSV
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pdf" id="pdf" />
                  <Label htmlFor="pdf" className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-red-600" />
                    PDF
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="json" id="json" />
                  <Label htmlFor="json" className="flex items-center">
                    <FileIcon className="h-4 w-4 mr-2 text-amber-600" />
                    JSON
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Additional Options</CardTitle>
          <CardDescription>Configure additional export settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Checkbox id="include-charts" />
                <Label htmlFor="include-charts">Include charts and visualizations (PDF only)</Label>
              </div>
              
              <div className="flex items-center space-x-2 mb-2">
                <Checkbox id="summary-only" />
                <Label htmlFor="summary-only">Summary data only</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="password-protect" />
                <Label htmlFor="password-protect">Password protect export file</Label>
              </div>
            </div>
            
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Checkbox id="save-template" />
                <Label htmlFor="save-template">Save these settings as a template</Label>
              </div>
              
              <div className="flex items-center space-x-2 mb-2">
                <Checkbox id="schedule-export" />
                <Label htmlFor="schedule-export">Schedule recurring export</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="notify-email" />
                <Label htmlFor="notify-email">Email export when complete</Label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-end gap-2">
        <Button variant="outline" asChild>
          <Link to="/dashboard/earnings">Cancel</Link>
        </Button>
        <Button 
          onClick={handleExport}
          className="bg-yellow-500 hover:bg-yellow-600 text-yellow-950"
        >
          <Download className="mr-2 h-4 w-4" />
          Export Data
        </Button>
      </div>
    </div>
  );
};

export default EarningsExport;
