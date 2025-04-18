
import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ServiceHistory = () => {
  const { id } = useParams();
  
  // Mock data - in real app would come from API
  const serviceHistory = [
    {
      id: 1,
      service: "Interior Painting",
      date: "2024-03-15",
      status: "completed",
      duration: "4 hours",
      notes: "Painted living room and kitchen walls"
    },
    {
      id: 2,
      service: "Plumbing Repair",
      date: "2024-02-20",
      status: "completed",
      duration: "2 hours",
      notes: "Fixed leaking bathroom faucet"
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-anthracite">Service History</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Past Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {serviceHistory.map((service) => (
              <div key={service.id} className="border rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-yellow-600" />
                    <h3 className="font-medium">{service.service}</h3>
                  </div>
                  <Badge 
                    className={service.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                  >
                    {service.status}
                  </Badge>
                </div>
                <div className="flex gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{service.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{service.notes}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceHistory;
