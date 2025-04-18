
import React from "react";
import SmtpSettings from "./SmtpSettings";
import EmailTemplateCard from "./EmailTemplateCard";
import { toast } from "sonner";
import { DEFAULT_TEMPLATES } from "./EmailTemplateData";

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
