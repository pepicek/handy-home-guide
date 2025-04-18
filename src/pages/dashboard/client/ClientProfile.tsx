
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon, PenSquare, Ban, Trash2, Calendar, FileText, History } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useParams, Link } from "react-router-dom";
import { toast } from "sonner";

const ClientProfile = () => {
  const { id } = useParams();
  const [personalNote, setPersonalNote] = useState("");
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isSuspendOpen, setIsSuspendOpen] = useState(false);
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);
  
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
    lastServiceDate: "2024-03-15",
    notes: "Prefers afternoon appointments. Allergic to certain paint types.",
    upcomingAppointments: [
      { id: 1, service: "Kitchen Renovation", date: "2024-04-25", time: "14:00" },
      { id: 2, service: "Bathroom Inspection", date: "2024-05-10", time: "10:00" }
    ],
    quotes: [
      { id: 1, service: "Full House Painting", status: "pending", amount: "$3,500" },
      { id: 2, service: "Deck Repair", status: "accepted", amount: "$1,200" }
    ]
  };

  const handleSaveNote = () => {
    // In real app, this would be an API call
    toast.success("Personal note saved successfully");
    setIsEditOpen(false);
  };

  const handleSuspend = () => {
    // In real app, this would be an API call
    toast.success("Client account suspended");
    setIsSuspendOpen(false);
  };

  const handleRemove = () => {
    // In real app, this would be an API call
    toast.success("Client removed successfully");
    setIsRemoveOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <h1 className="text-3xl font-bold text-anthracite">Client Profile</h1>
        <div className="flex gap-2">
          <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <PenSquare className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Client Profile</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <Textarea
                  placeholder="Add personal notes about the client..."
                  value={personalNote}
                  onChange={(e) => setPersonalNote(e.target.value)}
                  rows={4}
                />
              </div>
              <DialogFooter>
                <Button onClick={handleSaveNote}>Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <AlertDialog open={isSuspendOpen} onOpenChange={setIsSuspendOpen}>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Ban className="w-4 h-4 mr-2" />
                Suspend
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Suspend Client Account</AlertDialogTitle>
                <AlertDialogDescription>
                  This will temporarily disable the client's account. They won't be able to make new appointments or requests.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleSuspend} className="bg-yellow-600">
                  Suspend Account
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog open={isRemoveOpen} onOpenChange={setIsRemoveOpen}>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm" className="text-red-600">
                <Trash2 className="w-4 h-4 mr-2" />
                Remove
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Remove Client</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently remove the client from your database and delete all associated data.
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
        </div>
      </div>
      
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Personal Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{client.notes}</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {client.upcomingAppointments.map((appointment) => (
                      <div key={appointment.id} className="flex items-start gap-3 text-sm">
                        <Calendar className="w-4 h-4 text-yellow-600 mt-0.5" />
                        <div>
                          <p className="font-medium">{appointment.service}</p>
                          <p className="text-gray-500">
                            {appointment.date} at {appointment.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Quotes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {client.quotes.map((quote) => (
                      <div key={quote.id} className="flex items-start gap-3 text-sm">
                        <FileText className="w-4 h-4 text-yellow-600 mt-0.5" />
                        <div>
                          <p className="font-medium">{quote.service}</p>
                          <p className="text-gray-500">
                            {quote.amount} - {quote.status}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button asChild variant="outline">
          <Link to={`/dashboard/appointments/schedule/${id}`}>
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Appointment
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link to={`/dashboard/clients/${id}/history`}>
            <History className="w-4 h-4 mr-2" />
            View Service History
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ClientProfile;
