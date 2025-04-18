
import React from "react";
import { Button } from "@/components/ui/button";
import { CalendarClock, Clock } from "lucide-react";

interface PendingPayment {
  id: number;
  client: string;
  service: string;
  amount: number;
  dueDate: string;
  status: string;
}

interface PendingPaymentsListProps {
  payments: PendingPayment[];
}

const PendingPaymentsList = ({ payments }: PendingPaymentsListProps) => {
  return (
    <div className="space-y-4">
      {payments.map((payment) => (
        <div key={payment.id} className="flex items-center justify-between p-4 bg-yellow-50/50 border border-yellow-100 rounded-lg">
          <div className="flex items-start space-x-3">
            <div className="bg-yellow-100 p-2 rounded-full">
              <CalendarClock className="h-5 w-5 text-yellow-700" />
            </div>
            <div>
              <p className="font-medium">{payment.client}</p>
              <p className="text-sm text-gray-600">{payment.service}</p>
              <div className="flex items-center mt-1">
                <Clock className="h-3.5 w-3.5 text-yellow-600 mr-1" />
                <p className="text-xs text-yellow-600">Due on {new Date(payment.dueDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold">${payment.amount.toLocaleString()}</p>
            <Button size="sm" className="mt-1 bg-yellow-600 hover:bg-yellow-700 h-8 text-white">
              Send Reminder
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PendingPaymentsList;
