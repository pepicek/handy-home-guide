
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Mail, Phone, Calendar, MoreHorizontal, Star as StarIcon } from "lucide-react";
import { MessageClientDialog, ScheduleAppointmentDialog, RemoveClientDialog, ViewServiceHistoryButton } from "@/components/clients/ClientActionDialogs";

interface ClientTableRowProps {
  client: {
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
  };
}

export const ClientTableRow = ({ client }: ClientTableRowProps) => {
  return (
    <tr className="border-b hover:bg-yellow-50/30">
      <td className="py-3 px-4">
        <div className="flex items-center gap-3">
          <Link to={`/dashboard/clients/${client.id}`}>
            <Avatar className="h-9 w-9 border-2 border-yellow-200">
              <AvatarFallback className="bg-yellow-100 text-yellow-800">
                {client.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </Link>
          <div>
            <Link 
              to={`/dashboard/clients/${client.id}`}
              className="font-medium hover:text-yellow-600"
            >
              {client.name}
            </Link>
            <div className="flex items-center text-xs text-gray-500 mt-1">
              <StarIcon className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
              <span>{client.rating}</span>
              <span className="mx-2">•</span>
              <span>{client.totalBookings} bookings</span>
            </div>
          </div>
        </div>
      </td>
      <td className="py-3 px-4 hidden md:table-cell">
        <div className="space-y-1">
          <div className="flex items-center text-xs text-gray-500">
            <Mail className="h-3 w-3 mr-1" />
            <span>{client.email}</span>
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <Phone className="h-3 w-3 mr-1" />
            <span>{client.phone}</span>
          </div>
        </div>
      </td>
      <td className="py-3 px-4 hidden lg:table-cell">
        <div className="space-y-1">
          <p className="text-sm">{client.lastService}</p>
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{client.lastServiceDate}</span>
          </div>
        </div>
      </td>
      <td className="py-3 px-4 hidden lg:table-cell">
        <Badge className={`
          ${client.status === 'active' ? 'bg-green-100 text-green-800 hover:bg-green-200' : 
            client.status === 'new' ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' : 
            'bg-gray-100 text-gray-800 hover:bg-gray-200'}
        `}>
          {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
        </Badge>
      </td>
      <td className="py-3 px-4 hidden sm:table-cell font-medium">{client.totalSpent}</td>
      <td className="py-3 px-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <MessageClientDialog />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to={`/dashboard/clients/${client.id}`}>
                  View Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ScheduleAppointmentDialog clientId={client.id.toString()} />
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ViewServiceHistoryButton clientId={client.id.toString()} />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <RemoveClientDialog />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </td>
    </tr>
  );
};
