
import React from "react";
import SmtpSettings from "./SmtpSettings";
import EmailTemplateCard from "./EmailTemplateCard";
import { toast } from "sonner";

const DEFAULT_TEMPLATES = {
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
  }
};

const EmailSettings = () => {
  const handlePreview = (templateName: string) => {
    toast.info(`Previewing ${templateName} template`);
  };

  const handleEdit = (templateName: string) => {
    toast.info(`Editing ${templateName} template`);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Email Settings</h2>
        <p className="text-gray-500 mb-6">
          Configure your email server settings and customize email templates for different notifications.
        </p>
      </div>

      <SmtpSettings />

      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Email Templates</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(DEFAULT_TEMPLATES).map(([key, template]) => (
            <EmailTemplateCard
              key={key}
              title={template.title}
              description={template.description}
              template={template.template}
              onPreview={() => handlePreview(key)}
              onEdit={() => handleEdit(key)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmailSettings;
