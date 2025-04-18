
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Plus, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";

interface EarningsHeaderProps {
  dateRange: [Date | undefined, Date | undefined];
  setDateRange: (range: [Date | undefined, Date | undefined]) => void;
}

const EarningsHeader = ({ dateRange, setDateRange }: EarningsHeaderProps) => {
  const handleExport = () => {
    toast.success("Exporting earnings data...");
  };

  const handleCreateInvoice = () => {
    toast.success("Opening invoice creation form...");
  };

  return (
    <div className="flex items-center justify-between gap-4">
      <h1 className="text-3xl font-bold text-anthracite">Earnings Management</h1>
      <div className="flex items-center gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              <span>
                {dateRange[0] ? format(dateRange[0], "MMM d, yyyy") : "Start"} -{" "}
                {dateRange[1] ? format(dateRange[1], "MMM d, yyyy") : "End"}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={dateRange[0]}
              selected={{
                from: dateRange[0],
                to: dateRange[1]
              }}
              onSelect={(range: any) => {
                setDateRange([range?.from, range?.to]);
              }}
              numberOfMonths={1}
              className="pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
        <Button 
          variant="outline" 
          className="flex items-center gap-1"
          onClick={handleExport}
        >
          <Download className="h-4 w-4" />
          <span>Export</span>
        </Button>
        <Button 
          className="bg-anthracite hover:bg-anthracite/90 text-yellow-400"
          onClick={handleCreateInvoice}
        >
          <Plus className="h-4 w-4 mr-2" />
          <span>Create Invoice</span>
        </Button>
      </div>
    </div>
  );
};

export default EarningsHeader;
