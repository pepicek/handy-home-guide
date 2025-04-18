
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, FileText, Filter, Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";

// Sample data for demonstration
const invoices = [
  {
    id: "INV-2025-042",
    client: "Robert Smith",
    amount: 3500,
    issued: "2025-04-10",
    due: "2025-04-25",
    status: "pending"
  },
  {
    id: "INV-2025-041",
    client: "Jennifer Garcia",
    amount: 4200,
    issued: "2025-04-08",
    due: "2025-04-22",
    status: "pending"
  },
  {
    id: "INV-2025-040",
    client: "Thomas Rodriguez",
    amount: 2700,
    issued: "2025-04-05",
    due: "2025-04-20",
    status: "pending"
  },
  {
    id: "INV-2025-039",
    client: "Sarah Johnson",
    amount: 1850,
    issued: "2025-04-01",
    due: "2025-04-15",
    status: "paid"
  },
  {
    id: "INV-2025-038",
    client: "Michael Brown",
    amount: 3200,
    issued: "2025-03-28",
    due: "2025-04-11",
    status: "paid"
  }
];

const IssuedInvoices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  
  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         invoice.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || invoice.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-anthracite">Issued Invoices</h1>
          <p className="text-gray-500">View and manage all your issued invoices</p>
        </div>
        <div className="flex gap-2">
          <Button 
            asChild 
            className="bg-yellow-500 hover:bg-yellow-600 text-yellow-950"
          >
            <Link to="/dashboard/invoices/create">
              <Plus className="mr-1 h-4 w-4" />
              Create Invoice
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search by client or invoice number..."
            className="pl-8 bg-white"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px] bg-white">
              <div className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filter by status" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>
      
      {/* Invoices Table */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Issue Date</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInvoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>{invoice.client}</TableCell>
                <TableCell>${invoice.amount.toLocaleString()}</TableCell>
                <TableCell>{new Date(invoice.issued).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(invoice.due).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Badge className={invoice.status === "paid" 
                    ? "bg-green-100 text-green-800" 
                    : invoice.status === "overdue"
                    ? "bg-red-100 text-red-800"
                    : "bg-yellow-100 text-yellow-800"
                  }>
                    {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={`/dashboard/invoices/${invoice.id}`}>
                      <Eye className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default IssuedInvoices;
