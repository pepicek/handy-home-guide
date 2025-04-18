
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface ClientsSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const ClientsSearch = ({ searchTerm, setSearchTerm }: ClientsSearchProps) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
        <Input 
          placeholder="Search clients..." 
          className="pl-9 bg-white w-[200px] md:w-[300px]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Filter By</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Highest Spending</DropdownMenuItem>
          <DropdownMenuItem>Most Recent</DropdownMenuItem>
          <DropdownMenuItem>Most Bookings</DropdownMenuItem>
          <DropdownMenuItem>Highest Rated</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
