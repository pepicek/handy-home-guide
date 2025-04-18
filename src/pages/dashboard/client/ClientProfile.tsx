
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useParams } from "react-router-dom";

const ClientProfile = () => {
  const { id } = useParams();
  
  // For demo purposes - in real app this would come from API
  const client = {
    id,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    status: "active",
    totalSpent: "$2,450",
    totalBookings: 8,
    rating: 4.5,
    lastService: "Interior Painting",
    lastServiceDate: "2024-03-15"
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-anthracite">Client Profile</h1>
      
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-yellow-200">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-yellow-100 text-yellow-800 text-xl">
              {client.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle className="text-2xl">{client.name}</CardTitle>
            <div className="flex items-center mt-1 text-sm text-gray-500">
              <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span>{client.rating}</span>
              <span className="mx-2">•</span>
              <span>{client.totalBookings} bookings</span>
              <Badge className="ml-2 bg-green-100 text-green-800">{client.status}</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="space-y-2 text-sm">
                    <div>
                      <dt className="text-gray-500">Email</dt>
                      <dd>{client.email}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-500">Phone</dt>
                      <dd>{client.phone}</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Service History Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="space-y-2 text-sm">
                    <div>
                      <dt className="text-gray-500">Total Spent</dt>
                      <dd className="font-medium">{client.totalSpent}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-500">Last Service</dt>
                      <dd>{client.lastService}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-500">Last Service Date</dt>
                      <dd>{client.lastServiceDate}</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientProfile;
