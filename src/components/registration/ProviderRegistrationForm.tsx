
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Building, Mail, Lock, Eye, EyeOff, User, Phone } from "lucide-react";
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
} from "@/components/ui/sheet";

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
      
      const userData = {
        email: values.email,
        password: values.password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            role: 'provider',
            business_name: values.businessName,
            phone: values.phone
          },
        }
      };
      
      // Log the request data
      const requestData = {
        email: userData.email,
        data: userData.options.data
      };
      console.log("Provider registration - User data prepared:", JSON.stringify(requestData));
      setRequestDetailsLog(prev => [...prev, {
        timestamp: new Date().toISOString(),
        type: "request",
        data: requestData
      }]);
      
      // Make the sign-up request
      const { data, error } = await supabase.auth.signUp(userData);
      
      if (error) {
        console.error("Provider registration error details:", error);
        setDebugInfo({
          errorCode: error.code,
          errorName: error.name,
          errorMessage: error.message,
          errorStack: error.stack,
          timestamp: new Date().toISOString()
        });
        
        setRequestDetailsLog(prev => [...prev, {
          timestamp: new Date().toISOString(),
          type: "error",
          data: {
            code: error.code,
            name: error.name,
            message: error.message
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
            email: data.user.email
          } : null,
          session: data.session ? "Session created" : "No session"
        }
      }]);
      
      toast.success("Registration successful!");
      navigate("/register/provider/onboarding");
    } catch (error: any) {
      console.error("Provider registration error:", error);
      const errorDetails = {
        message: error.message || "Unknown error",
        name: error?.name || "Error",
        code: error?.code,
        details: error?.details || {},
      };
      console.error("Detailed error information:", errorDetails);
      setDebugInfo(errorDetails);
      toast.error(`Registration failed: ${error.message}`);
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
              variant="outline" 
              size="sm" 
              className="text-xs bg-gray-50 border-gray-200 text-gray-500"
              onClick={() => setShowDetailsSheet(true)}
            >
              Debug Details
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Registration Debug Information</SheetTitle>
              <SheetDescription>
                Detailed logs and error information for troubleshooting.
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-medium text-sm mb-2">Request/Response Timeline</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto border rounded-md p-3 bg-gray-50">
                  {requestDetailsLog.length > 0 ? requestDetailsLog.map((log, i) => (
                    <div key={i} className={`p-2 text-xs font-mono rounded ${
                      log.type === 'error' ? 'bg-red-50 text-red-800' : 
                      log.type === 'success' ? 'bg-green-50 text-green-800' : 
                      'bg-blue-50 text-blue-800'
                    }`}>
                      <div className="text-xs text-gray-500 mb-1">{log.timestamp}</div>
                      <pre className="whitespace-pre-wrap">
                        {JSON.stringify(log.data, null, 2)}
                      </pre>
                    </div>
                  )) : (
                    <p className="text-sm text-gray-500">No requests logged yet.</p>
                  )}
                </div>
              </div>
              
              {debugInfo && (
                <div>
                  <h3 className="font-medium text-sm mb-2">Error Details</h3>
                  <div className="border rounded-md p-3 bg-red-50 text-sm text-red-800 font-mono max-h-60 overflow-y-auto">
                    <pre className="whitespace-pre-wrap">
                      {JSON.stringify(debugInfo, null, 2)}
                    </pre>
                  </div>
                </div>
              )}
              
              <div>
                <h3 className="font-medium text-sm mb-2">Supabase Config</h3>
                <div className="border rounded-md p-3 bg-gray-50 text-sm text-gray-800 font-mono">
                  <p>Project ID: lcybohvhquvkeapisede</p>
                  <p>API URL: https://lcybohvhquvkeapisede.supabase.co</p>
                </div>
              </div>
            </div>
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
      
      {/* Debug Information Section */}
      {debugInfo && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <h3 className="text-sm font-medium text-red-800">Debug Information</h3>
          <div className="mt-1 max-h-40 overflow-auto text-xs text-red-700 font-mono">
            <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
};
