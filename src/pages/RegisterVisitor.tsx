import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowRight, Play, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const RegisterVisitor = () => {
  const navigate = useNavigate();
  const [videoOpen, setVideoOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signUp } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            first_name: values.firstName,
            last_name: values.lastName,
            role: 'user'
          },
        }
      });
      
      if (error) {
        throw error;
      }
      
      toast.success("Registration successful!");
      navigate("/register/visitor/questionnaire");
    } catch (error: any) {
      console.error("Registration error:", error);
      toast.error(`Registration failed: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
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
                  Create Your Visitor Account
                </h1>
                <p className="text-gray-600 mb-6">
                  Join thousands of homeowners who use YelloPago to find reliable service providers and manage their projects.
                </p>

                <div className="relative rounded-lg overflow-hidden bg-gray-900 mb-6 cursor-pointer group" onClick={() => setVideoOpen(true)}>
                  <div className="aspect-video bg-gradient-to-r from-yellow-300/20 to-yellow-500/20 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center text-white">
                      <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-anthracite ml-1" />
                      </div>
                      <p className="font-medium">Watch how YelloPago works for visitors</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-anthracite mb-1">Why join as a visitor?</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Find local, verified service providers</li>
                    <li>• Get multiple quotes for your projects</li>
                    <li>• Schedule appointments with ease</li>
                    <li>• Access exclusive deals and promotions</li>
                    <li>• Manage all your home projects in one place</li>
                  </ul>
                </div>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="rounded-full bg-yellow-100 w-12 h-12 flex items-center justify-center">
                      <User className="h-6 w-6 text-yellow-600" />
                    </div>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john.doe@example.com" {...field} />
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

                      <Button 
                        type="submit" 
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-anthracite"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Creating Account..." : "Create Account"}
                        {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
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
              <p className="text-center">Visitor onboarding video would play here</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RegisterVisitor;
