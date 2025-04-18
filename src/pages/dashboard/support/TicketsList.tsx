
import React from "react";
import { useNavigate } from "react-router-dom";
import { MessageSquare, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mockTickets = [
  {
    id: "1",
    subject: "Cannot access dashboard features",
    category: "Technical Issue",
    status: "open",
    lastUpdate: "2025-04-15T10:30:00Z",
    unreadMessages: 1
  },
  {
    id: "2",
    subject: "Billing inquiry about subscription",
    category: "Billing",
    status: "closed",
    lastUpdate: "2025-04-14T15:20:00Z",
    unreadMessages: 0
  }
];

const TicketsList = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">My Support Tickets</h2>
          <p className="text-muted-foreground">View and manage your support tickets</p>
        </div>
        <Button onClick={() => navigate("/dashboard/support/tickets/new")}>
          <MessageSquare className="mr-2 h-4 w-4" />
          New Ticket
        </Button>
      </div>

      <div className="grid gap-4">
        {mockTickets.map((ticket) => (
          <Card key={ticket.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{ticket.subject}</CardTitle>
                  <CardDescription>Ticket #{ticket.id} • {ticket.category}</CardDescription>
                </div>
                <Badge variant="outline" className={
                  ticket.status === "open" ? "bg-green-100 text-green-800 border-green-300" : ""
                }>
                  {ticket.status.toUpperCase()}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  Last updated: {new Date(ticket.lastUpdate).toLocaleDateString()}
                </div>
                <Button variant="outline" onClick={() => navigate(`/dashboard/support/tickets/${ticket.id}`)}>
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TicketsList;
