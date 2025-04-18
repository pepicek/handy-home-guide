
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarClock, Clock } from 'lucide-react';

const CheckSchedule = () => {
  const { id } = useParams();
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Mock availability data - in a real app, this would come from an API
  const availableTimeSlots = [
    "09:00 AM",
    "10:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarClock className="h-5 w-5" />
                  Select Date
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="pointer-events-auto"
                  disabled={(date) => date < new Date()}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Available Time Slots
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {availableTimeSlots.map((time) => (
                    <Badge
                      key={time}
                      variant="secondary"
                      className="p-4 text-center cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {time}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckSchedule;
