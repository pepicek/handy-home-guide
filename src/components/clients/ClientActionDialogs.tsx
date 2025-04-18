import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { toast } from "sonner";
import { Mail, Clock, History } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const MessageClientDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    // In a real app, this would be an API call
    console.log("Sending message:", message);
    toast.success("Message sent successfully");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
          <Mail className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Send Message to Client</DialogTitle>
          <DialogDescription>
            Send a direct message to your client.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSend}>Send Message</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const ScheduleAppointmentDialog = ({ clientId }: { clientId: string }) => {
  const navigate = useNavigate();
  
  return (
    <Button 
      variant="ghost" 
      className="text-sm w-full text-left justify-start"
      onClick={() => navigate(`/dashboard/appointments/schedule/${clientId}`)}
    >
      Schedule Appointment
    </Button>
  );
};

export const RemoveClientDialog = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleRemove = () => {
    // In a real app, this would be an API call
    console.log("Removing client");
    toast.success("Client removed successfully");
    setIsOpen(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" className="text-red-600 text-sm w-full text-left justify-start">Remove Client</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently remove the client
            from your database and delete all associated data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleRemove} className="bg-red-600">
            Remove Client
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const ViewServiceHistoryButton = ({ clientId }: { clientId: string }) => {
  const navigate = useNavigate();
  
  return (
    <Button 
      variant="ghost" 
      className="text-sm w-full text-left justify-start"
      onClick={() => navigate(`/dashboard/clients/${clientId}/history`)}
    >
      View Service History
    </Button>
  );
};
