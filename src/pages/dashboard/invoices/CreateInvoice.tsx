
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const CreateInvoice = () => {
  const [invoiceDate, setInvoiceDate] = useState<Date | undefined>(new Date());
  const [dueDate, setDueDate] = useState<Date | undefined>(undefined);
  const [items, setItems] = useState([
    { description: "", hours: 0, rate: 0, amount: 0 }
  ]);

  const handleAddItem = () => {
    setItems([...items, { description: "", hours: 0, rate: 0, amount: 0 }]);
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleItemChange = (index: number, field: string, value: any) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
      amount: field === "hours" || field === "rate" 
        ? Number(updatedItems[index].hours) * Number(updatedItems[index].rate) 
        : updatedItems[index].amount
    };
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + Number(item.amount), 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Invoice created successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-anthracite">Create Invoice</h1>
          <p className="text-gray-500">Create a new invoice for your clients</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link to="/dashboard/earnings">Cancel</Link>
          </Button>
          <Button 
            onClick={handleSubmit}
            className="bg-yellow-500 hover:bg-yellow-600 text-yellow-950"
          >
            Create Invoice
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Invoice Information</CardTitle>
          <CardDescription>Enter the basic invoice details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="client">Client</Label>
              <Select>
                <SelectTrigger id="client" className="bg-white">
                  <SelectValue placeholder="Select client" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="robert">Robert Smith</SelectItem>
                  <SelectItem value="jennifer">Jennifer Garcia</SelectItem>
                  <SelectItem value="thomas">Thomas Rodriguez</SelectItem>
                  <SelectItem value="new">+ Add New Client</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="invoiceNumber">Invoice Number</Label>
              <Input id="invoiceNumber" defaultValue="INV-2025-042" className="bg-white" />
            </div>
            
            <div className="space-y-2">
              <Label>Invoice Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal bg-white"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {invoiceDate ? format(invoiceDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={invoiceDate}
                    onSelect={setInvoiceDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <Label>Due Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal bg-white"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dueDate ? format(dueDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={dueDate}
                    onSelect={setDueDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <Separator />
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Invoice Items</h3>
              <Button 
                onClick={handleAddItem}
                type="button" 
                variant="outline" 
                size="sm"
                className="flex items-center gap-1"
              >
                <Plus className="h-4 w-4" /> Add Item
              </Button>
            </div>
            
            {items.map((item, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 items-end">
                <div className="col-span-6">
                  <Label htmlFor={`description-${index}`}>Description</Label>
                  <Input
                    id={`description-${index}`}
                    value={item.description}
                    onChange={(e) => handleItemChange(index, "description", e.target.value)}
                    className="bg-white"
                    placeholder="Service description"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor={`hours-${index}`}>Hours</Label>
                  <Input
                    id={`hours-${index}`}
                    type="number"
                    value={item.hours}
                    onChange={(e) => handleItemChange(index, "hours", e.target.value)}
                    className="bg-white"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor={`rate-${index}`}>Rate ($)</Label>
                  <Input
                    id={`rate-${index}`}
                    type="number"
                    value={item.rate}
                    onChange={(e) => handleItemChange(index, "rate", e.target.value)}
                    className="bg-white"
                  />
                </div>
                <div className="col-span-1">
                  <Label htmlFor={`amount-${index}`}>Amount</Label>
                  <Input
                    id={`amount-${index}`}
                    value={`$${item.amount}`}
                    readOnly
                    className="bg-gray-50"
                  />
                </div>
                <div className="col-span-1">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveItem(index)}
                    disabled={items.length === 1}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <Separator />
          
          <div className="flex flex-col items-end gap-2">
            <div className="grid grid-cols-2 gap-2 w-64">
              <span className="text-right">Subtotal:</span>
              <span className="font-medium text-right">${calculateTotal().toFixed(2)}</span>
              <span className="text-right">Tax (0%):</span>
              <span className="font-medium text-right">$0.00</span>
              <span className="text-right font-bold">Total:</span>
              <span className="font-bold text-right">${calculateTotal().toFixed(2)}</span>
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Add any additional notes or payment terms..."
              className="min-h-32 bg-white"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button variant="outline" asChild>
            <Link to="/dashboard/earnings">Cancel</Link>
          </Button>
          <Button 
            onClick={handleSubmit}
            className="bg-yellow-500 hover:bg-yellow-600 text-yellow-950"
          >
            Create Invoice
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateInvoice;
