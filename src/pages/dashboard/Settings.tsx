
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Upload, Camera, MapPin, Clock, Bell, Shield, CreditCard, HelpCircle } from "lucide-react";
import AvailabilityTypeSelector from "@/components/dashboard/availability/AvailabilityTypeSelector";
import ProjectCapacitySettings from "@/components/dashboard/availability/ProjectCapacitySettings";

const Settings = () => {
  const [availabilityType, setAvailabilityType] = useState<"business-hours" | "project-based">("business-hours");
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-anthracite">Settings</h1>
        <p className="text-gray-500">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList className="bg-gray-100">
          <TabsTrigger value="profile">Business Profile</TabsTrigger>
          <TabsTrigger value="availability">Availability</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="payment">Payment & Billing</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Business Profile</CardTitle>
              <CardDescription>
                This information will be shown publicly on your profile
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center space-y-3">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload
                    </Button>
                    <Button variant="outline" size="sm">
                      <Camera className="mr-2 h-4 w-4" />
                      Take photo
                    </Button>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="business-name">Business Name</Label>
                      <Input id="business-name" defaultValue="NYO" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Contact Person</Label>
                      <Input id="contact-name" defaultValue="Joe Zee" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue="joe@zee.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" defaultValue="(503) 928-7737" />
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="business-description">Business Description</Label>
                  <textarea 
                    id="business-description" 
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Describe your business..."
                    defaultValue="NYC's premier home improvement specialists with over 15 years of experience in transforming homes across the five boroughs. We specialize in interior renovations, painting, and custom carpentry work."
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Business Categories</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-yellow-100 text-yellow-800">Painting</Badge>
                    <Badge className="bg-yellow-100 text-yellow-800">Renovation</Badge>
                    <Badge className="bg-yellow-100 text-yellow-800">Carpentry</Badge>
                    <Button variant="outline" size="sm" className="h-6">
                      + Add Category
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Service Areas</Label>
                  <div className="flex items-center p-4 border rounded-md">
                    <MapPin className="mr-2 h-5 w-5 text-gray-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">New York City</p>
                      <p className="text-xs text-gray-500">Manhattan, Brooklyn, Queens, Bronx</p>
                    </div>
                    <Button variant="outline" size="sm">Edit Areas</Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto bg-anthracite hover:bg-anthracite/90 text-yellow-400">Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Portfolio & Certifications</CardTitle>
              <CardDescription>
                Showcase your work and credentials
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">Portfolio Images</h4>
                  <Button size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    Add Images
                  </Button>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="aspect-square rounded-md bg-gray-100 flex items-center justify-center text-gray-400">
                    Image 1
                  </div>
                  <div className="aspect-square rounded-md bg-gray-100 flex items-center justify-center text-gray-400">
                    Image 2
                  </div>
                  <div className="aspect-square rounded-md bg-gray-100 flex items-center justify-center text-gray-400">
                    + Add More
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">Certifications & Licenses</h4>
                  <Button size="sm" variant="outline">
                    Add Certification
                  </Button>
                </div>
                <div className="space-y-3">
                  <div className="p-3 border rounded-md flex justify-between items-center">
                    <div>
                      <p className="font-medium">Master Painter Certification</p>
                      <p className="text-xs text-gray-500">Expires: Jan 2026</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Verified</Badge>
                  </div>
                  <div className="p-3 border rounded-md flex justify-between items-center">
                    <div>
                      <p className="font-medium">Licensed Home Improvement Contractor</p>
                      <p className="text-xs text-gray-500">New York State #12345</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Verified</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="availability" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How Do You Want to Manage Your Availability?</CardTitle>
              <CardDescription>
                Choose the type of availability management that best suits your business
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AvailabilityTypeSelector 
                value={availabilityType} 
                onChange={setAvailabilityType}
              />
            </CardContent>
          </Card>

          {availabilityType === "business-hours" ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Business Hours</CardTitle>
                <CardDescription>
                  Set your regular working hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center p-3 border rounded-md bg-gray-50">
                    <Clock className="h-5 w-5 text-gray-500 mr-2" />
                    <p className="text-sm">Set your availability to let clients know when they can book your services</p>
                  </div>
                  
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                    <div key={day} className="flex items-center justify-between py-2 border-b last:border-0">
                      <div className="flex items-center gap-4">
                        <div className="w-24">
                          <p className="font-medium">{day}</p>
                        </div>
                        <Switch id={`${day.toLowerCase()}-switch`} defaultChecked={day !== "Sunday"} />
                        <Label htmlFor={`${day.toLowerCase()}-switch`} className="text-sm text-gray-600">
                          Available
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <select className="h-8 rounded-md border bg-background px-2 py-1 text-sm">
                          <option>9:00 AM</option>
                          <option>10:00 AM</option>
                          <option>11:00 AM</option>
                        </select>
                        <span className="text-sm">to</span>
                        <select className="h-8 rounded-md border bg-background px-2 py-1 text-sm">
                          <option>5:00 PM</option>
                          <option>6:00 PM</option>
                          <option>7:00 PM</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto bg-anthracite hover:bg-anthracite/90 text-yellow-400">Save Hours</Button>
              </CardFooter>
            </Card>
          ) : (
            <ProjectCapacitySettings />
          )}
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Notification Preferences</CardTitle>
              <CardDescription>
                Choose how you want to be notified
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center p-3 border rounded-md bg-gray-50">
                  <Bell className="h-5 w-5 text-gray-500 mr-2" />
                  <p className="text-sm">Stay updated with important information about your business and bookings</p>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-medium">Booking Notifications</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-1 text-gray-600">New booking requests</div>
                      <div className="col-span-2 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Switch id="booking-email" defaultChecked />
                          <Label htmlFor="booking-email">Email</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch id="booking-sms" defaultChecked />
                          <Label htmlFor="booking-sms">SMS</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch id="booking-push" defaultChecked />
                          <Label htmlFor="booking-push">Push</Label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-1 text-gray-600">Booking confirmations</div>
                      <div className="col-span-2 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Switch id="confirmation-email" defaultChecked />
                          <Label htmlFor="confirmation-email">Email</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch id="confirmation-sms" defaultChecked />
                          <Label htmlFor="confirmation-sms">SMS</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch id="confirmation-push" />
                          <Label htmlFor="confirmation-push">Push</Label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-1 text-gray-600">Booking cancellations</div>
                      <div className="col-span-2 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Switch id="cancellation-email" defaultChecked />
                          <Label htmlFor="cancellation-email">Email</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch id="cancellation-sms" defaultChecked />
                          <Label htmlFor="cancellation-sms">SMS</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch id="cancellation-push" defaultChecked />
                          <Label htmlFor="cancellation-push">Push</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <h4 className="font-medium">Message Notifications</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-1 text-gray-600">New messages</div>
                      <div className="col-span-2 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Switch id="message-email" defaultChecked />
                          <Label htmlFor="message-email">Email</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch id="message-sms" />
                          <Label htmlFor="message-sms">SMS</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch id="message-push" defaultChecked />
                          <Label htmlFor="message-push">Push</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <h4 className="font-medium">Platform Notifications</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-1 text-gray-600">New reviews</div>
                      <div className="col-span-2 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Switch id="review-email" defaultChecked />
                          <Label htmlFor="review-email">Email</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch id="review-sms" />
                          <Label htmlFor="review-sms">SMS</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch id="review-push" />
                          <Label htmlFor="review-push">Push</Label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-1 text-gray-600">Payment notifications</div>
                      <div className="col-span-2 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Switch id="payment-email" defaultChecked />
                          <Label htmlFor="payment-email">Email</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch id="payment-sms" defaultChecked />
                          <Label htmlFor="payment-sms">SMS</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch id="payment-push" />
                          <Label htmlFor="payment-push">Push</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto bg-anthracite hover:bg-anthracite/90 text-yellow-400">Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="payment">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Payment Settings</CardTitle>
              <CardDescription>
                Manage your payment methods and billing information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center p-3 border rounded-md bg-gray-50">
                  <CreditCard className="h-5 w-5 text-gray-500 mr-2" />
                  <p className="text-sm">Setup your payment methods to receive payments from clients</p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">Payment Methods</h4>
                  <div className="p-4 border rounded-md flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-14 bg-gray-100 rounded flex items-center justify-center">
                        <p className="font-medium text-xs">VISA</p>
                      </div>
                      <div>
                        <p>Visa ending in 4242</p>
                        <p className="text-xs text-gray-500">Expires 12/25</p>
                      </div>
                    </div>
                    <Badge>Default</Badge>
                  </div>
                  
                  <Button variant="outline" size="sm">
                    + Add Payment Method
                  </Button>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h4 className="font-medium">Payout Settings</h4>
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Payout Method</p>
                        <p className="text-sm text-gray-500">How you'll receive your payments</p>
                      </div>
                      <Badge>Direct Deposit</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Payout Schedule</p>
                        <p className="text-sm text-gray-500">When you'll receive payments</p>
                      </div>
                      <select className="h-9 rounded-md border bg-background px-3 py-1">
                        <option>Weekly</option>
                        <option>Bi-weekly</option>
                        <option>Monthly</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h4 className="font-medium">Tax Information</h4>
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Tax ID Type</p>
                      </div>
                      <select className="h-9 rounded-md border bg-background px-3 py-1">
                        <option>EIN</option>
                        <option>SSN</option>
                      </select>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Tax ID</p>
                      </div>
                      <div className="text-gray-500">••••••789</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto bg-anthracite hover:bg-anthracite/90 text-yellow-400">Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Security Settings</CardTitle>
              <CardDescription>
                Manage your account security and privacy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center p-3 border rounded-md bg-gray-50">
                  <Shield className="h-5 w-5 text-gray-500 mr-2" />
                  <p className="text-sm">Keep your account secure with these security options</p>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Password</h4>
                    <Button variant="outline">Change Password</Button>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">Two-Factor Authentication</h4>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Enable 2FA</p>
                        <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                      </div>
                      <Switch id="enable-2fa" />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">Login Sessions</h4>
                    <div className="p-4 border rounded-md">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Current Session</p>
                          <p className="text-sm text-gray-500">New York, USA • Chrome on Mac OS</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Active Now</Badge>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Sign Out All Other Devices</Button>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">Account Control</h4>
                    <Button variant="destructive">Deactivate Account</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
