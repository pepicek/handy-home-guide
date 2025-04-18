
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Eye, Edit2 } from "lucide-react";

interface EmailTemplateCardProps {
  title: string;
  description: string;
  template: string;
  onPreview: () => void;
  onEdit: () => void;
}

const EmailTemplateCard = ({
  title,
  description,
  template,
  onPreview,
  onEdit,
}: EmailTemplateCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          value={template}
          readOnly
          className="min-h-[100px] font-mono text-sm"
        />
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={onPreview}
          >
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button 
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-anthracite"
            onClick={onEdit}
          >
            <Edit2 className="mr-2 h-4 w-4" />
            Edit Template
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailTemplateCard;
