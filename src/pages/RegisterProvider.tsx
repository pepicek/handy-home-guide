
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowRight, Play, Users, Building, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const formSchema = z.object({
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  contactName: z.string().min(2, "Contact name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const RegisterProvider = () => {
  const navigate = useNavigate();
  const [videoOpen, setVideoOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would send this to your backend
    console.log(values);
    toast.success("Registration successful!");
    navigate("/register/provider/onboarding");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              className="mb-8 flex items-center text-gray-600 hover:text-gray-900"
              onClick={() => navigate("/register")}
            >
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Back to registration options
            </Button>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h1 className="text-3xl font-bold text-anthracite mb-4">
                  Register as a Service Provider
                </h1>
                <p className="text-gray-600 mb-6">
                  Join our network of professionals and connect with customers looking for your services.
                </p>

                <div className="relative rounded-lg overflow-hidden bg-gray-900 mb-6 cursor-pointer group" onClick={() => setVideoOpen(true)}>
                  <div className="aspect-video bg-gradient-to-r from-anthracite/20 to-anthracite/40 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center text-white">
                      <div className="bg-anthracite rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-yellow-400 ml-1" />
                      </div>
                      <p className="font-medium">Watch how YelloPago works for providers</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 border-l-4 border-anthracite p-4 rounded-r-lg">
                  <h3 className="font-semibold text-anthracite mb-1">Benefits for Service Providers</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Get connected with qualified customers</li>
                    <li>• Manage your schedule efficiently</li>
                    <li>• Create special offers and promotions</li>
                    <li>• Build your online reputation with reviews</li>
                    <li>• Access to business growth resources</li>
                  </ul>
                </div>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="rounded-full bg-anthracite/10 w-12 h-12 flex items-center justify-center">
                      <Users className="h-6 w-6 text-anthracite" />
                    </div>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Business Name" {...field} icon={<Building className="h-4 w-4" />} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="contactName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="business@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="(123) 456-7890" {...field} icon={<Phone className="h-4 w-4" />} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                              <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full bg-anthracite hover:bg-anthracite/90 text-yellow-400">
                        Create Provider Account
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </Form>

                  <p className="mt-6 text-xs text-center text-gray-500">
                    By creating an account, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-3xl p-0 bg-black">
          <div className="aspect-video w-full">
            {/* In a real app, you would use a real video here */}
            <div className="flex items-center justify-center h-full text-white">
              <p className="text-center">Provider onboarding video would play here</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RegisterProvider;
