import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Building, Mail, Phone, Lock, User, Eye, EyeOff, Gift } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const formSchema = z.object({
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  contactName: z.string().min(2, "Contact name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type FormValues = z.infer<typeof formSchema>;

const RegisterProvider = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: ""
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    toast({
      title: "Registration Successful!",
      description: "Your account has been created successfully.",
    });
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-anthracite mb-4">
                Register as a Service Provider
              </h1>
              <p className="text-lg text-gray-600">
                Create your professional account and start growing your business
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-lg mb-8 border border-yellow-200">
              <div className="flex items-start gap-4">
                <div className="bg-white/80 rounded-full p-3">
                  <Gift className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-anthracite mb-2">
                    Get $200 in Free Credits!
                  </h2>
                  <p className="text-gray-700 mb-3">
                    Start your journey with $200 in non-refundable credits. Test all our premium features and services for multiple months.
                  </p>
                  <Link 
                    to="/credits"
                    className="text-yellow-700 hover:text-yellow-800 font-medium inline-flex items-center"
                  >
                    Learn more about credits
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Input className="pl-10" placeholder="Your business name" {...field} />
                              </div>
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
                            <FormLabel>Contact Person</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Input className="pl-10" placeholder="Your name" {...field} />
                              </div>
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
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Input className="pl-10" type="email" placeholder="you@example.com" {...field} />
                              </div>
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
                              <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Input className="pl-10" placeholder="Your phone number" {...field} />
                              </div>
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
                            <FormLabel>Create Password</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Input 
                                  className="pl-10" 
                                  type={showPassword ? "text" : "password"} 
                                  placeholder="Create a secure password" 
                                  {...field} 
                                />
                                <Button 
                                  type="button" 
                                  variant="ghost" 
                                  size="icon" 
                                  className="absolute right-2 top-1/2 -translate-y-1/2"
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? (
                                    <EyeOff className="h-4 w-4 text-gray-500" />
                                  ) : (
                                    <Eye className="h-4 w-4 text-gray-500" />
                                  )}
                                </Button>
                              </div>
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
                              <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Input 
                                  className="pl-10" 
                                  type={showConfirmPassword ? "text" : "password"} 
                                  placeholder="Confirm your password" 
                                  {...field} 
                                />
                                <Button 
                                  type="button" 
                                  variant="ghost" 
                                  size="icon" 
                                  className="absolute right-2 top-1/2 -translate-y-1/2"
                                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                  {showConfirmPassword ? (
                                    <EyeOff className="h-4 w-4 text-gray-500" />
                                  ) : (
                                    <Eye className="h-4 w-4 text-gray-500" />
                                  )}
                                </Button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="pt-4">
                        <Button type="submit" className="w-full bg-anthracite hover:bg-anthracite/90 text-yellow-400" size="lg">
                          Create Account
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                      
                      <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account?{" "}
                        <Link to="/signin" className="text-yellow-600 hover:text-yellow-800 font-medium">
                          Sign in
                        </Link>
                      </p>
                    </form>
                  </Form>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow-sm border h-full">
                  <h2 className="text-xl font-semibold mb-4 text-anthracite">Why Join YelloPago as a Pro?</h2>
                  
                  <div className="relative aspect-video mb-4 rounded-md overflow-hidden bg-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-sm text-gray-500">Promotional video will be displayed here</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-yellow-600 font-semibold">1</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-anthracite">Grow Your Business</h3>
                        <p className="text-sm text-gray-600">Connect with clients looking for your specific services and expertise.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-yellow-600 font-semibold">2</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-anthracite">Manage Everything in One Place</h3>
                        <p className="text-sm text-gray-600">Simplify scheduling, invoicing, and client communication with our tools.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-yellow-600 font-semibold">3</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-anthracite">Build Your Reputation</h3>
                        <p className="text-sm text-gray-600">Collect reviews and showcase your best work to stand out from competitors.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterProvider;
