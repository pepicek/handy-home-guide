
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

const SmtpSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          SMTP Server Settings
          <Info className="h-4 w-4 text-yellow-600" />
        </CardTitle>
        <CardDescription>
          Configure your SMTP server to send emails through your own domain.
          You can find these settings in your email provider's dashboard or contact their support.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="smtp_host">SMTP Host</Label>
          <Input id="smtp_host" placeholder="smtp.yourdomain.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="smtp_port">SMTP Port</Label>
          <Input id="smtp_port" placeholder="587" type="number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="smtp_user">SMTP Username</Label>
          <Input id="smtp_user" placeholder="your@email.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="smtp_pass">SMTP Password</Label>
          <Input id="smtp_pass" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="from_email">From Email</Label>
          <Input id="from_email" placeholder="noreply@yourdomain.com" />
        </div>
        <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-anthracite">
          Save SMTP Settings
        </Button>
      </CardContent>
    </Card>
  );
};

export default SmtpSettings;
