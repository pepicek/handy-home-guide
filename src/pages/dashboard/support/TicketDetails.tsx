import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MessageInput } from "@/components/support/MessageInput";

const mockTicket = {
  id: "1",
  subject: "Cannot access dashboard features",
  category: "Technical Issue",
  status: "open",
  createdAt: "2025-04-15T10:00:00Z",
  messages: [
    {
      id: 1,
      sender: "user",
      message: "I'm unable to access several features in my dashboard since this morning.",
      timestamp: "2025-04-15T10:00:00Z"
    },
    {
      id: 2,
      sender: "support",
      message: "Hello! I understand you're having trouble accessing dashboard features. Could you please specify which features you're unable to access?",
      timestamp: "2025-04-15T10:30:00Z"
    }
  ]
};

const TicketDetails = () => {
  const { ticketId } = useParams();

  const handleSendMessage = (message: string, attachments: File[]) => {
    console.log("Sending message:", message);
    console.log("With attachments:", attachments);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Ticket #{ticketId}</CardTitle>
              <CardDescription>Created on {new Date(mockTicket.createdAt).toLocaleDateString()}</CardDescription>
            </div>
            <Badge variant="outline" className={
              mockTicket.status === "open" ? "bg-green-100 text-green-800 border-green-300" : ""
            }>
              {mockTicket.status.toUpperCase()}
            </Badge>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">{mockTicket.subject}</h3>
            <p className="text-sm text-muted-foreground">Category: {mockTicket.category}</p>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conversation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {mockTicket.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "support" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.sender === "support"
                    ? "bg-muted"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.message}</p>
                <p className="text-xs mt-2 opacity-70">
                  {new Date(message.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
          
          <Separator className="my-4" />
          
          <MessageInput onSend={handleSendMessage} />
        </CardContent>
      </Card>
    </div>
  );
};

export default TicketDetails;
