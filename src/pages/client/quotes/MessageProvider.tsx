
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, PaperclipIcon, Send, Image } from "lucide-react";

const MessageProvider = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  
  // Mock data - in a real app this would come from an API call
  const conversation = {
    provider: {
      name: "Elite Home Renovations",
      initials: "EH",
      status: "online"
    },
    messages: [
      {
        id: 1,
        sender: "provider",
        text: "Hello! Thank you for your interest in our services. I've reviewed your project details and have prepared a detailed quote for you.",
        time: "Apr 15, 10:30 AM"
      },
      {
        id: 2,
        sender: "client",
        text: "Thanks for the quick response! I have a few questions about the timeline for the project.",
        time: "Apr 15, 11:15 AM"
      },
      {
        id: 3,
        sender: "provider",
        text: "Of course! Based on the scope, we estimate the project will take approximately 6-8 weeks to complete. We can start as early as May 5th if that works for your schedule.",
        time: "Apr 15, 11:30 AM"
      },
      {
        id: 4,
        sender: "client",
        text: "That timeline works for me. Can you provide more details about the materials you'll be using for the kitchen cabinets?",
        time: "Apr 15, 12:05 PM"
      },
      {
        id: 5,
        sender: "provider",
        text: "We'll be using high-quality solid wood for the cabinet frames with soft-close hardware. For the finish, we've included the premium option we discussed (maple with custom stain). I've attached a specification sheet with all the details.",
        time: "Apr 15, 12:20 PM"
      }
    ]
  };
  
  const handleSend = () => {
    if (message.trim()) {
      // In a real app, this would send the message to an API
      console.log("Sending message:", message);
      setMessage("");
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Button variant="ghost" onClick={() => navigate("/client/quotes")} className="mr-2">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <h1 className="text-3xl font-bold text-anthracite">Message Provider</h1>
      </div>
      
      <Card className="flex flex-col h-[calc(100vh-12rem)]">
        <CardHeader className="pb-3">
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarFallback className="bg-yellow-100 text-yellow-800">
                {conversation.provider.initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{conversation.provider.name}</CardTitle>
              <CardDescription>
                <span className="flex items-center">
                  <span className={`h-2 w-2 rounded-full mr-1.5 ${
                    conversation.provider.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                  }`}></span>
                  {conversation.provider.status === 'online' ? 'Online' : 'Offline'}
                </span>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <Separator />
        
        <CardContent className="flex-1 overflow-y-auto py-4">
          <div className="space-y-4">
            {conversation.messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === 'client' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`
                  max-w-[75%] rounded-lg p-3
                  ${msg.sender === 'client' 
                    ? 'bg-blue-50 text-blue-900' 
                    : 'bg-gray-50 text-gray-900'}
                `}>
                  <p className="text-sm">{msg.text}</p>
                  <p className="text-xs text-gray-500 mt-1 text-right">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        
        <div className="p-4 border-t">
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <Textarea 
                placeholder="Type your message..." 
                className="min-h-10 resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <PaperclipIcon className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Image className="h-4 w-4" />
              </Button>
              <Button onClick={handleSend} disabled={!message.trim()}>
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MessageProvider;
