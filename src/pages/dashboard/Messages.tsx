
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Send, Paperclip, MoreVertical, Phone, Video, Star, User, Calendar, Check, Clock } from "lucide-react";

// Generate fake messages
const generateRandomMessages = (count: number) => {
  const messageContents = [
    "Hello! I'm interested in your services.",
    "Can you tell me more about your pricing?",
    "What's your availability next week?",
    "I need to reschedule our appointment.",
    "Thank you for your service yesterday!",
    "Do you offer discounts for recurring services?",
    "I have a question about the invoice you sent.",
    "Can we set up a consultation?",
    "Is it possible to get an estimate before booking?",
    "I'm looking for someone to help with a project."
  ];
  
  const times = [
    "Just now", 
    "5m ago", 
    "10m ago", 
    "30m ago", 
    "1h ago",
    "2h ago", 
    "Yesterday", 
    "2 days ago", 
    "3 days ago", 
    "1 week ago"
  ];
  
  const firstNames = ["John", "Sarah", "Michael", "Emily", "David", "Jessica", "Robert", "Jennifer", "William", "Linda"];
  const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson"];
  
  return Array.from({ length: count }, (_, i) => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    
    return {
      id: i + 1,
      sender: `${firstName} ${lastName}`,
      initials: `${firstName[0]}${lastName[0]}`,
      content: messageContents[Math.floor(Math.random() * messageContents.length)],
      time: times[Math.floor(Math.random() * times.length)],
      unread: Math.random() > 0.7,
      online: Math.random() > 0.7
    };
  });
};

// Generate conversation messages
const generateConversation = (count: number) => {
  const messageContents = [
    "Hi there! I saw your profile on YelloPago and I'm interested in your interior painting services.",
    "Hello! Thank you for reaching out. I'd be happy to discuss interior painting options with you. What kind of space are you looking to paint?",
    "I have a 2-bedroom apartment that needs a fresh coat of paint. The main living area and bedrooms need to be painted.",
    "That sounds like a manageable project. Do you have a specific color scheme in mind? And when would you like to have this done?",
    "I'm thinking of neutral colors, maybe some light grays and whites. I'm hoping to get it done within the next 2-3 weeks if possible.",
    "Perfect! I have some availability in that timeframe. Would you like to schedule a consultation to see the space and provide you with an accurate quote?",
    "That would be great. Could you come by this weekend to take a look?",
    "I can come by on Saturday afternoon. How about 2 PM?",
    "Saturday at 2 PM works for me. My address is 123 Main St, Apt 4B.",
    "Great! I'll see you on Saturday at 2 PM at 123 Main St, Apt 4B. Please have an idea of the colors you're considering so we can discuss options.",
    "Will do. Looking forward to meeting you on Saturday!",
    "Looking forward to it as well! If you have any questions before then, feel free to message me."
  ];
  
  return Array.from({ length: count }, (_, i) => {
    return {
      id: i + 1,
      content: messageContents[i % messageContents.length],
      sent: i % 2 === 1,
      time: i < 2 ? "Just now" : i < 4 ? "5 min ago" : i < 7 ? "Yesterday" : "2 days ago",
      status: i % 2 === 1 ? (i < 4 ? "sent" : "read") : null
    };
  });
};

const Messages = () => {
  const [conversations] = useState(generateRandomMessages(15));
  const [activeConversation, setActiveConversation] = useState(conversations[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [messageText, setMessageText] = useState("");
  const [messages] = useState(generateConversation(12));
  
  // Filter conversations based on search
  const filteredConversations = conversations.filter(
    convo => convo.sender.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleSend = () => {
    if (!messageText.trim()) return;
    
    console.log("Sending message:", messageText);
    setMessageText("");
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-anthracite">Messages</h1>
        <Badge className="bg-yellow-500 text-anthracite">3 Unread</Badge>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversation Sidebar */}
        <Card className="lg:col-span-1 overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Conversations</CardTitle>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input 
                placeholder="Search conversations..." 
                className="pl-9 bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[calc(100vh-280px)] min-h-[300px]">
              <div className="divide-y">
                {filteredConversations.map((convo) => (
                  <div
                    key={convo.id}
                    className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-yellow-50 ${
                      activeConversation.id === convo.id ? 'bg-yellow-50' : ''
                    } ${convo.unread ? 'font-medium' : ''}`}
                    onClick={() => setActiveConversation(convo)}
                  >
                    <div className="relative">
                      <Avatar className="h-10 w-10 border-2 border-yellow-200">
                        <AvatarFallback className="bg-yellow-100 text-yellow-800">
                          {convo.initials}
                        </AvatarFallback>
                      </Avatar>
                      {convo.online && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white"></span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className={`truncate ${convo.unread ? 'text-yellow-900' : 'text-gray-700'}`}>
                          {convo.sender}
                        </p>
                        <span className={`text-xs ${convo.unread ? 'text-yellow-700' : 'text-gray-500'}`}>
                          {convo.time}
                        </span>
                      </div>
                      <p className={`text-sm truncate ${convo.unread ? 'text-gray-800' : 'text-gray-500'}`}>
                        {convo.content}
                      </p>
                    </div>
                    {convo.unread && (
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
        
        {/* Main Chat Area */}
        <Card className="lg:col-span-2 overflow-hidden">
          <CardHeader className="p-4 flex-row items-center gap-4 border-b">
            <Avatar className="h-10 w-10 border-2 border-yellow-200">
              <AvatarFallback className="bg-yellow-100 text-yellow-800">
                {activeConversation?.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <CardTitle className="text-lg">{activeConversation?.sender}</CardTitle>
              <CardDescription className="flex items-center gap-1">
                {activeConversation?.online ? (
                  <>
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span>Online</span>
                  </>
                ) : (
                  <>
                    <span className="h-2 w-2 rounded-full bg-gray-300"></span>
                    <span>Offline</span>
                  </>
                )}
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Phone className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Star className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>
          
          {/* Chat Messages */}
          <ScrollArea className="h-[calc(100vh-380px)] min-h-[300px]">
            <CardContent className="p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sent
                          ? 'bg-yellow-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <div className={`flex items-center justify-end gap-1 mt-1 text-xs ${
                        message.sent ? 'text-yellow-100' : 'text-gray-500'
                      }`}>
                        <span>{message.time}</span>
                        {message.status && (
                          message.status === 'read' ? (
                            <Check className="h-3 w-3" />
                          ) : (
                            <Clock className="h-3 w-3" />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </ScrollArea>
          
          {/* Message Input */}
          <CardFooter className="p-4 border-t">
            <div className="flex items-center gap-2 w-full">
              <Button variant="outline" size="icon" className="shrink-0">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Textarea 
                placeholder="Type your message..." 
                className="min-h-10 flex-1 resize-none"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <Button 
                className="shrink-0 bg-yellow-600 hover:bg-yellow-700" 
                size="icon"
                onClick={handleSend}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Messages;
