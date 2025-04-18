
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ClientTableRow } from "./ClientTableRow";

interface ClientsTableProps {
  currentClients: Array<{
    id: number;
    name: string;
    email: string;
    phone: string;
    lastService: string;
    lastServiceDate: string;
    status: string;
    totalSpent: string;
    totalBookings: number;
    rating: number;
  }>;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  indexOfFirstClient: number;
  indexOfLastClient: number;
  totalClients: number;
}

export const ClientsTable = ({ 
  currentClients, 
  currentPage, 
  totalPages, 
  setCurrentPage,
  indexOfFirstClient,
  indexOfLastClient,
  totalClients
}: ClientsTableProps) => {
  return (
    <>
      <div className="rounded-md border bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-yellow-50 border-b">
            <tr>
              <th className="py-3 px-4 text-left font-medium">Client</th>
              <th className="py-3 px-4 text-left font-medium hidden md:table-cell">Contact</th>
              <th className="py-3 px-4 text-left font-medium hidden lg:table-cell">Last Service</th>
              <th className="py-3 px-4 text-left font-medium hidden lg:table-cell">Status</th>
              <th className="py-3 px-4 text-left font-medium hidden sm:table-cell">Total Spent</th>
              <th className="py-3 px-4 text-center font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentClients.map((client) => (
              <ClientTableRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-gray-500">
          Showing {indexOfFirstClient + 1}-{Math.min(indexOfLastClient, totalClients)} of {totalClients} clients
        </p>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
};
