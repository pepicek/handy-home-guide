
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Building, Mail, Lock, Eye, EyeOff, User, Phone, Database, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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

export const ProviderRegistrationForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [debugInfo, setDebugInfo] = useState<any>(null);
  const [showDetailsSheet, setShowDetailsSheet] = useState(false);
  const [requestDetailsLog, setRequestDetailsLog] = useState<any[]>([]);
  const [dbSchema, setDbSchema] = useState<any>(null);
  const [activeDebugTab, setActiveDebugTab] = useState("request");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  
  // Inspect database schema on component mount
  useEffect(() => {
    async function fetchDbSchema() {
      try {
        // First test if we can access the profiles table anonymously
        const { data: profilesData, error: profilesError } = await supabase
          .from('profiles')
          .select('*')
          .limit(0);
          
        const { data: providerProfilesData, error: providerProfilesError } = await supabase
          .from('provider_profiles')
          .select('*')
          .limit(0);
          
        if (profilesError || providerProfilesError) {
          console.log("Error fetching schema:", profilesError || providerProfilesError);
          setDbSchema({ error: profilesError || providerProfilesError });
          
          // Log the error for debugging
          setRequestDetailsLog(prev => [...prev, {
            timestamp: new Date().toISOString(),
            type: "error",
            data: { 
              source: "Database Schema Check", 
              message: (profilesError || providerProfilesError)?.message,
              details: profilesError || providerProfilesError
            }
          }]);
          return;
        }
        
        // Log success and get column information
        console.log("Successfully accessed database tables");
        
        setDbSchema({
          tables: {
            profiles: {
              exists: true,
              columns: Object.keys(profilesData?.[0] || {})
            },
            provider_profiles: {
              exists: true,
              columns: Object.keys(providerProfilesData?.[0] || {})
            }
          }
        });
        
        setRequestDetailsLog(prev => [...prev, {
          timestamp: new Date().toISOString(),
          type: "success",
          data: { 
            source: "Database Schema Check", 
            message: "Successfully connected to database tables",
            profileColumns: Object.keys(profilesData?.[0] || {}),
            providerProfileColumns: Object.keys(providerProfilesData?.[0] || {})
          }
        }]);
      } catch (error) {
        console.error("Error inspecting database:", error);
        setDbSchema({ error });
        
        setRequestDetailsLog(prev => [...prev, {
          timestamp: new Date().toISOString(),
          type: "error",
          data: { 
            source: "Database Schema Check Exception", 
            message: error instanceof Error ? error.message : "Unknown error",
            details: error
          }
        }]);
      }
    }
    
    fetchDbSchema();
  }, []);

  const form = useForm<FormValues>({
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

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    setDebugInfo(null);
    setRequestDetailsLog([]);
    
    try {
      console.log("Provider registration - Starting signup process");
      const nameParts = values.contactName.split(" ");
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(" ") || ""; // Ensure lastName is never null
      
      // Prepare the user metadata
      const userMetadata = {
        first_name: firstName,
        last_name: lastName,
        role: 'provider',
        phone: values.phone,
        business_name: values.businessName
      };
      
      // Log the full signup request for debugging
      console.log("Provider registration - Full signup request:", JSON.stringify({
        email: values.email,
        metadata: userMetadata
      }, null, 2));
      
      // Log the request data
      setRequestDetailsLog(prev => [...prev, {
        timestamp: new Date().toISOString(),
        type: "request",
        data: {
          email: values.email,
          metadata: userMetadata
        }
      }]);
      
      // Make the sign-up request
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: userMetadata
        }
      });
      
      if (error) {
        console.error("Provider registration error details:", error);
        setDebugInfo({
          errorCode: error.code,
          errorName: error.name,
          errorMessage: error.message,
          // Only access the error details if they exist
          ...(error.message && { errorMessage: error.message }),
          timestamp: new Date().toISOString()
        });
        
        setRequestDetailsLog(prev => [...prev, {
          timestamp: new Date().toISOString(),
          type: "error",
          data: {
            code: error.code,
            name: error.name,
            message: error.message,
            // Only include details if they exist
            ...(typeof error === 'object' && error !== null && 'details' in error && { details: (error as any).details })
          }
        }]);

        throw error;
      }
      
      // Log success response
      console.log("Provider registration successful, data:", data);
      setRequestDetailsLog(prev => [...prev, {
        timestamp: new Date().toISOString(),
        type: "success",
        data: {
          user: data.user ? {
            id: data.user.id,
            email: data.user.email,
            metadata: data.user.user_metadata
          } : null,
          session: data.session ? "Session created" : "No session"
        }
      }]);
      
      toast.success("Registration successful!");
      setShowSuccessDialog(true);
      
      // Delay navigation to show success message
      setTimeout(() => {
        navigate("/register/provider/onboarding");
      }, 2000);
    } catch (error: any) {
      console.error("Provider registration error:", error);
      
      // Create a more detailed error report
      const errorDetails = {
        message: error.message || "Unknown error",
        name: error?.name || "Error",
        code: error?.code,
        // Only include details if they exist on the error object
        ...(typeof error === 'object' && error !== null && 'details' in error && { details: (error as any).details }),
        statusCode: error?.status || error?.statusCode,
        hint: ""
      };
      
      // Add helpful hints for common errors
      if (error.message?.includes("Database error saving")) {
        errorDetails.hint = "There might be an issue with the database schema or RLS policies. Please ask support for help.";
      } else if (error.message?.includes("User already registered")) {
        errorDetails.hint = "This email is already in use. Try logging in instead.";
      } else if (error.message?.includes("infinite recursion")) {
        errorDetails.hint = "Database RLS policy issue detected. Contact support.";
      }
      
      console.error("Detailed error information:", errorDetails);
      setDebugInfo(errorDetails);
      
      // Show a more helpful error message based on the context
      const userFriendlyMessage = errorDetails.hint || error.message;
      toast.error(`Registration failed: ${userFriendlyMessage}`);
      
      // Open debug sheet automatically on error
      setShowDetailsSheet(true);
      setActiveDebugTab("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="rounded-full bg-anthracite/10 w-12 h-12 flex items-center justify-center">
            <Building className="h-6 w-6 text-anthracite" />
          </div>
        </div>
        
        {/* Debug Button */}
        <Sheet open={showDetailsSheet} onOpenChange={setShowDetailsSheet}>
          <SheetTrigger asChild>
            <Button 
              variant={debugInfo ? "destructive" : "outline"} 
              size="sm" 
              className={`text-xs ${debugInfo ? 'bg-red-100 hover:bg-red-200 text-red-800 border-red-300' : 'bg-gray-50 border-gray-200 text-gray-500'}`}
              onClick={() => setShowDetailsSheet(true)}
            >
              {debugInfo ? (
                <>
                  <AlertCircle className="h-3.5 w-3.5 mr-1" />
                  Error Details
                </>
              ) : (
                'Debug Details'
              )}
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:w-[540px] overflow-y-hidden">
            <SheetHeader>
              <SheetTitle>Registration Debug Information</SheetTitle>
              <SheetDescription>
                Detailed logs and error information for troubleshooting.
              </SheetDescription>
            </SheetHeader>
            
            <Tabs value={activeDebugTab} onValueChange={setActiveDebugTab} className="mt-4">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="request">Requests</TabsTrigger>
                <TabsTrigger value="error">Errors</TabsTrigger>
                <TabsTrigger value="schema">DB Schema</TabsTrigger>
              </TabsList>
              
              <TabsContent value="request" className="mt-0">
                <ScrollArea className="h-[400px]">
                  <div className="space-y-2">
                    {requestDetailsLog.length > 0 ? requestDetailsLog.map((log, i) => (
                      <div key={i} className={`p-2 text-xs font-mono rounded ${
                        log.type === 'error' ? 'bg-red-50 text-red-800 border border-red-200' : 
                        log.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 
                        'bg-blue-50 text-blue-800 border border-blue-200'
                      }`}>
                        <div className="text-xs text-gray-500 mb-1">{log.timestamp}</div>
                        <pre className="whitespace-pre-wrap overflow-x-auto">
                          {JSON.stringify(log.data, null, 2)}
                        </pre>
                      </div>
                    )) : (
                      <p className="text-sm text-gray-500">No requests logged yet.</p>
                    )}
                  </div>
                </ScrollArea>
              </TabsContent>
              
              <TabsContent value="error" className="mt-0">
                <ScrollArea className="h-[400px]">
                  {debugInfo ? (
                    <div className="border rounded-md p-3 bg-red-50 text-sm text-red-800 font-mono">
                      <pre className="whitespace-pre-wrap overflow-x-auto">
                        {JSON.stringify(debugInfo, null, 2)}
                      </pre>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">No errors recorded.</p>
                  )}
                </ScrollArea>
              </TabsContent>
              
              <TabsContent value="schema" className="mt-0">
                <ScrollArea className="h-[400px]">
                  <div className="space-y-4">
                    <div className="border rounded-md p-3 bg-gray-50">
                      <h3 className="text-sm font-medium mb-2 flex items-center">
                        <Database className="h-4 w-4 mr-1" />
                        Database Schema
                      </h3>
                      {dbSchema ? (
                        <div className="text-sm font-mono">
                          <pre className="whitespace-pre-wrap overflow-x-auto">
                            {JSON.stringify(dbSchema, null, 2)}
                          </pre>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">Loading schema information...</p>
                      )}
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium mb-2">Supabase Config</h3>
                      <div className="border rounded-md p-3 bg-gray-50 text-sm text-gray-800 font-mono">
                        <p>Project ID: lcybohvhquvkeapisede</p>
                        <p>API URL: https://lcybohvhquvkeapisede.supabase.co</p>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
            
            <SheetFooter className="mt-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowDetailsSheet(false)}
              >
                Close
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
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
                      {...field} 
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
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
                      {...field} 
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-anthracite hover:bg-anthracite/90 text-yellow-400"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </Button>
        </form>
      </Form>
      
      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-green-600">Registration Successful!</DialogTitle>
            <DialogDescription>
              Your provider account has been created successfully.
            </DialogDescription>
          </DialogHeader>
          <div className="bg-green-50 border border-green-100 rounded-md p-4 my-2">
            <p className="text-green-800">
              You will be redirected to the onboarding process in a moment...
            </p>
          </div>
          <DialogFooter>
            <Button 
              onClick={() => {
                setShowSuccessDialog(false);
                navigate("/register/provider/onboarding");
              }}
            >
              Continue to Onboarding
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
