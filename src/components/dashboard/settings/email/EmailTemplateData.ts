
export const DEFAULT_TEMPLATES = {
  welcome: {
    title: "Welcome Email",
    description: "Sent to new users when they register",
    template: "Welcome to {{business_name}}! We're excited to have you join us."
  },
  quote: {
    title: "Quote Response",
    description: "Sent when responding to quote requests",
    template: "Thank you for your quote request. Here are the details: {{quote_details}}"
  },
  appointment: {
    title: "Appointment Confirmation",
    description: "Sent when an appointment is booked",
    template: "Your appointment has been confirmed for {{date}} at {{time}}."
  },
  message: {
    title: "New Message Notification",
    description: "Sent when receiving a new message",
    template: "You have received a new message from {{sender_name}}."
  },
  paymentReminder: {
    title: "Pending Payment Reminder",
    description: "Sent to remind clients about pending payments",
    template: "Dear {{client_name}},\n\nThis is a friendly reminder that payment for invoice {{invoice_number}} in the amount of {{amount}} is due on {{due_date}}.\n\nThank you for your prompt attention to this matter.\n\nBest regards,\n{{business_name}}"
  }
};
