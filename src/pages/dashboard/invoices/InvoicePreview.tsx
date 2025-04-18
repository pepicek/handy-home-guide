
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, FileEdit } from "lucide-react";

const InvoicePreview = () => {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/dashboard/invoices">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Invoices
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-anthracite">Invoice #{id}</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to={`/dashboard/invoices/${id}/edit`}>
              <FileEdit className="h-4 w-4 mr-2" />
              Edit Invoice
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg border">
        <p className="text-gray-500">Invoice preview content will be displayed here</p>
      </div>
    </div>
  );
};

export default InvoicePreview;
