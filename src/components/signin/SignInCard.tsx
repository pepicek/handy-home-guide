
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock } from "lucide-react";

interface SignInCardProps {
  userType: string;
  onBackClick: () => void;
  onContinue: () => void;
}

const SignInCard = ({ userType, onBackClick, onContinue }: SignInCardProps) => {
  const isProvider = userType === "provider";
  
  return (
    <Card className="overflow-hidden border-none shadow-lg">
      <CardHeader className={`${
        isProvider 
          ? "bg-gradient-to-r from-yellow-500 to-amber-400" 
          : "bg-gradient-to-r from-yellow-200 to-amber-100"
        } pb-8`}>
        <Button 
          variant="ghost"
          size="sm"
          className="text-anthracite hover:bg-white/20 p-0 h-8 mb-2"
          onClick={onBackClick}
        >
          ← Back
        </Button>
        <CardTitle className="text-2xl md:text-3xl font-bold text-anthracite">
          {isProvider ? "Provider Sign In" : "Client Sign In"}
        </CardTitle>
        <CardDescription className="text-anthracite/70 text-lg">
          {isProvider 
            ? "Access your provider dashboard" 
            : "Access your client account"}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input id="email" type="email" placeholder="Your email" className="pl-10" />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="password">Password</Label>
              <Link to="/forgot-password" className="text-sm text-yellow-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input id="password" type="password" placeholder="••••••••" className="pl-10" />
            </div>
          </div>
          
          <Button 
            className={`w-full ${isProvider ? "bg-yellow-600 hover:bg-yellow-700" : "bg-anthracite hover:bg-anthracite/90"}`}
            onClick={onContinue}
          >
            Sign In
          </Button>
        </div>
        
        <div className="relative flex items-center justify-center">
          <Separator className="absolute w-full" />
          <span className="relative px-2 bg-white text-xs text-gray-500">OR CONTINUE WITH</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="font-medium">Google</Button>
          <Button variant="outline" className="font-medium">Facebook</Button>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 px-6 py-4 border-t">
        <p className="text-sm text-gray-500">New to YelloPago? <Link to="/register" className="text-yellow-700 font-medium hover:underline">Create an account</Link></p>
      </CardFooter>
    </Card>
  );
};

export default SignInCard;
