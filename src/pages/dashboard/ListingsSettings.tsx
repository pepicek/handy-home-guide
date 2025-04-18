
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, Save } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const ListingsSettings = () => {
  const handleSaveSettings = () => {
    toast.success("Settings saved successfully");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" asChild className="gap-1">
          <Link to="/dashboard/listings">
            <ChevronLeft className="h-4 w-4" />
            Back to listings
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-anthracite">Listing Settings</h1>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">General Settings</TabsTrigger>
          <TabsTrigger value="distribution">Distribution Network</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="ai">AI Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure how your listings appear and behave</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" placeholder="Your company name" defaultValue="YelloPago Services" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="contact-email">Contact Email</Label>
                  <Input id="contact-email" type="email" placeholder="contact@example.com" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="contact-phone">Contact Phone</Label>
                  <Input id="contact-phone" placeholder="(555) 123-4567" />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="auto-publish">Auto-publish new listings</Label>
                    <p className="text-sm text-muted-foreground">Automatically publish new listings when created</p>
                  </div>
                  <Switch id="auto-publish" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="show-prices">Display prices on listings</Label>
                    <p className="text-sm text-muted-foreground">Show service prices on your listings</p>
                  </div>
                  <Switch id="show-prices" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="collect-leads">Lead collection</Label>
                    <p className="text-sm text-muted-foreground">Collect visitor information from listing views</p>
                  </div>
                  <Switch id="collect-leads" defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Listing Display</CardTitle>
              <CardDescription>Configure how your listings appear to potential clients</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="default-cta">Default Call-to-Action</Label>
                <Input id="default-cta" placeholder="Book Now" defaultValue="Get a Quote" />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="listing-style">Default Listing Style</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="modern">Modern</option>
                  <option value="classic">Classic</option>
                  <option value="minimal">Minimal</option>
                  <option value="bold">Bold</option>
                </select>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="show-reviews">Show reviews on listings</Label>
                  <p className="text-sm text-muted-foreground">Display customer reviews on your listings</p>
                </div>
                <Switch id="show-reviews" defaultChecked />
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-end">
            <Button onClick={handleSaveSettings} className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
              <Save className="mr-2 h-4 w-4" />
              Save Settings
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="distribution" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Distribution Network Settings</CardTitle>
              <CardDescription>Configure where and how your listings are distributed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                <h3 className="font-medium text-yellow-800 mb-2">Premium Distribution Network</h3>
                <p className="text-sm text-yellow-700 mb-4">
                  Upgrade to our premium plan to access 50+ partner websites and maximize your service visibility.
                </p>
                <Button className="bg-yellow-500 text-anthracite hover:bg-yellow-600">
                  Upgrade Now
                </Button>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Active Partner Sites</h3>
                <div className="grid gap-2">
                  {['HomeAdvisor', 'Angi', 'Thumbtack', 'Yelp', 'Google Business'].map((site) => (
                    <div key={site} className="flex items-center justify-between border rounded-md p-3">
                      <span>{site}</span>
                      <Switch defaultChecked={site !== 'Yelp'} />
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label htmlFor="auto-distribute">Auto-distribute new listings</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically distribute new listings to all active partner sites
                </p>
                <Switch id="auto-distribute" defaultChecked />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Listing Distribution Rules</CardTitle>
              <CardDescription>Configure rules for how your listings are distributed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="max-distribution">Maximum Distribution Sites</Label>
                <Input id="max-distribution" type="number" defaultValue={5} />
                <p className="text-xs text-muted-foreground">Maximum number of sites to distribute each listing to</p>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="distribution-frequency">Distribution Frequency</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="immediately">Immediately</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="automatic-refresh">Automatic Listing Refresh</Label>
                  <p className="text-sm text-muted-foreground">
                    Periodically refresh listings on partner sites
                  </p>
                </div>
                <Switch id="automatic-refresh" />
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-end">
            <Button onClick={handleSaveSettings} className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
              <Save className="mr-2 h-4 w-4" />
              Save Settings
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Settings</CardTitle>
              <CardDescription>Configure how listing performance is tracked and analyzed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="enable-analytics">Enable Analytics</Label>
                  <p className="text-sm text-muted-foreground">
                    Track performance of your listings
                  </p>
                </div>
                <Switch id="enable-analytics" defaultChecked />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="analytics-email">Analytics Reports Email</Label>
                <Input id="analytics-email" type="email" placeholder="reports@example.com" />
                <p className="text-xs text-muted-foreground">Email address to receive periodic reports</p>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="report-frequency">Report Frequency</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="track-conversions">Track Conversions</Label>
                  <p className="text-sm text-muted-foreground">
                    Track when listings lead to bookings or inquiries
                  </p>
                </div>
                <Switch id="track-conversions" defaultChecked />
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-end">
            <Button onClick={handleSaveSettings} className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
              <Save className="mr-2 h-4 w-4" />
              Save Settings
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="ai" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Generator Settings</CardTitle>
              <CardDescription>Configure how the AI creates listings for your services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="ai-style">Default AI Style</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="professional">Professional</option>
                  <option value="friendly">Friendly & Approachable</option>
                  <option value="persuasive">Persuasive</option>
                  <option value="informative">Informative</option>
                </select>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="listing-length">Preferred Listing Length</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="short">Short (50-100 words)</option>
                  <option value="medium">Medium (100-200 words)</option>
                  <option value="long">Long (200+ words)</option>
                </select>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="ai-review">AI Review Before Publishing</Label>
                  <p className="text-sm text-muted-foreground">
                    Review AI-generated listings before they go live
                  </p>
                </div>
                <Switch id="ai-review" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="auto-suggestions">Auto-Improve Suggestions</Label>
                  <p className="text-sm text-muted-foreground">
                    Get AI suggestions to improve existing listings
                  </p>
                </div>
                <Switch id="auto-suggestions" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="ab-testing">AI-Powered A/B Testing</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically generate A/B testing variants
                  </p>
                </div>
                <Switch id="ab-testing" defaultChecked />
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-end">
            <Button onClick={handleSaveSettings} className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
              <Save className="mr-2 h-4 w-4" />
              Save Settings
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ListingsSettings;
