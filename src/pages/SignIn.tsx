
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import { ArrowRight, Check, ChevronRight, LightbulbIcon, User, Users, Mail, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SignIn = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [userType, setUserType] = useState<string | null>(null);
  
  const handleContinue = () => {
    if (!userType) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please select a user type to continue",
      });
      return;
    }
    
    // For demo purposes, we'll navigate to corresponding dashboards
    if (userType === "provider") {
      navigate("/dashboard");
    } else {
      navigate("/"); // Regular user would go to homepage or user dashboard
    }
  };
  
  const handleTypeSelection = (type: string) => {
    setUserType(type);
  };
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-yellow-50/50">
        <div className="container max-w-screen-xl mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-5 lg:gap-12">
            {/* Signin Section */}
            <div className="md:col-span-3 lg:col-span-2">
              <div className="space-y-4">
                {!userType ? (
                  <InterstialCard onSelectType={handleTypeSelection} />
                ) : (
                  <SignInCard userType={userType} onBackClick={() => setUserType(null)} onContinue={handleContinue} />
                )}
              </div>
            </div>
            
            {/* News & Updates Section */}
            <div className="md:col-span-2 lg:col-span-3">
              <NewsAndUpdates />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

interface InterstialCardProps {
  onSelectType: (type: string) => void;
}

const InterstialCard = ({ onSelectType }: InterstialCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-lg">
      <CardHeader className="bg-gradient-to-r from-yellow-500 to-amber-400 pb-8">
        <CardTitle className="text-2xl md:text-3xl font-bold text-white">Welcome Back!</CardTitle>
        <CardDescription className="text-yellow-100 text-lg">
          Choose how you want to sign in
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div
          className="flex items-center gap-4 p-4 rounded-lg border-2 border-transparent transition-all hover:border-yellow-300 hover:bg-yellow-50 cursor-pointer"
          onClick={() => onSelectType("user")}
        >
          <div className="p-3 bg-blue-100 rounded-full">
            <User className="h-6 w-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-lg">Sign in as Client</h3>
            <p className="text-gray-500">Find services, book appointments, and manage your account</p>
          </div>
          <ArrowRight className="h-5 w-5 text-gray-400" />
        </div>
        
        <div
          className="flex items-center gap-4 p-4 rounded-lg border-2 border-transparent transition-all hover:border-yellow-300 hover:bg-yellow-50 cursor-pointer"
          onClick={() => onSelectType("provider")}
        >
          <div className="p-3 bg-yellow-100 rounded-full">
            <Users className="h-6 w-6 text-yellow-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-lg">Sign in as Service Provider</h3>
              <Badge className="bg-yellow-500 text-xs text-yellow-950">PRO</Badge>
            </div>
            <p className="text-gray-500">Manage your services, clients, and earnings</p>
          </div>
          <ArrowRight className="h-5 w-5 text-gray-400" />
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 px-6 py-4 border-t">
        <p className="text-sm text-gray-500">Don't have an account? <Link to="/register" className="text-yellow-700 font-medium hover:underline">Sign up now</Link></p>
      </CardFooter>
    </Card>
  );
};

interface SignInCardProps {
  userType: string;
  onBackClick: () => void;
  onContinue: () => void;
}

const SignInCard = ({ userType, onBackClick, onContinue }: SignInCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-lg">
      <CardHeader className={`${userType === "provider" ? "bg-gradient-to-r from-yellow-500 to-amber-400" : "bg-gradient-to-r from-blue-500 to-blue-400"} pb-8`}>
        <Button 
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20 p-0 h-8 mb-2"
          onClick={onBackClick}
        >
          ← Back
        </Button>
        <CardTitle className="text-2xl md:text-3xl font-bold text-white">
          {userType === "provider" ? "Provider Sign In" : "Client Sign In"}
        </CardTitle>
        <CardDescription className={`${userType === "provider" ? "text-yellow-100" : "text-blue-100"} text-lg`}>
          {userType === "provider" ? "Access your provider dashboard" : "Access your client account"}
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
            className={`w-full ${userType === "provider" ? "bg-yellow-600 hover:bg-yellow-700" : "bg-blue-600 hover:bg-blue-700"}`}
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

const NewsAndUpdates = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-anthracite mb-2">Latest News & System Updates</h2>
        <p className="text-gray-600">Stay up to date with what's happening on YelloPago</p>
      </div>
      
      <Tabs defaultValue="news" className="w-full">
        <TabsList className="bg-yellow-100/50 mb-6">
          <TabsTrigger value="news">News</TabsTrigger>
          <TabsTrigger value="updates">System Updates</TabsTrigger>
          <TabsTrigger value="tips">Pro Tips</TabsTrigger>
        </TabsList>
        
        <TabsContent value="news">
          <div className="space-y-6">
            <NewsItem 
              date="April 18, 2025"
              title="YelloPago Reaches 10,000 Service Providers Milestone"
              description="We're thrilled to announce that our platform now hosts over 10,000 verified service providers across the country, offering a wider range of services than ever before."
              link="#"
              tag="Announcement"
              tagColor="bg-blue-100 text-blue-800"
            />
            <NewsItem 
              date="April 15, 2025"
              title="New Partnership with HomeDepot for Service Provider Discounts"
              description="YelloPago service providers can now enjoy exclusive discounts at HomeDepot stores nationwide. Sign in to your provider account to access your discount code."
              link="#"
              tag="Partnership"
              tagColor="bg-purple-100 text-purple-800"
            />
            <NewsItem 
              date="April 10, 2025"
              title="Introducing YelloPago Mobile App - Now Available"
              description="Our new mobile app is now available for download on iOS and Android. Schedule appointments, message clients, and manage your business on the go."
              link="#"
              tag="Product Update"
              tagColor="bg-green-100 text-green-800"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="updates">
          <div className="space-y-6">
            <NewsItem 
              date="April 17, 2025"
              title="Enhanced Analytics Dashboard for Service Providers"
              description="We've upgraded your analytics dashboard with new metrics, visual charts, and customizable reports to help you make data-driven decisions for your business."
              link="#"
              tag="Feature Update"
              tagColor="bg-amber-100 text-amber-800"
            />
            <NewsItem 
              date="April 14, 2025"
              title="Improved Messaging System with Client Segmentation"
              description="Our messaging system now allows you to segment clients and send targeted communications, helping you boost engagement and conversion rates."
              link="#"
              tag="System Upgrade"
              tagColor="bg-emerald-100 text-emerald-800"
            />
            <NewsItem 
              date="April 12, 2025"
              title="Maintenance Scheduled for April 25, 2025"
              description="YelloPago will undergo scheduled maintenance on April 25 from 2am-5am EST. During this time, some features may be temporarily unavailable."
              link="#"
              tag="Maintenance"
              tagColor="bg-orange-100 text-orange-800"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="tips">
          <div className="space-y-6">
            <NewsItem 
              date="April 16, 2025"
              title="Optimizing Your Service Provider Profile for Higher Visibility"
              description="Learn how to improve your profile ranking and attract more clients with these proven optimization strategies from our top-performing providers."
              link="#"
              tag="Marketing Tip"
              tagColor="bg-indigo-100 text-indigo-800"
            />
            <NewsItem 
              date="April 13, 2025"
              title="Effective Pricing Strategies for Service-Based Businesses"
              description="Discover how to structure your pricing to maximize profitability while remaining competitive in your local market."
              link="#"
              tag="Business Growth"
              tagColor="bg-teal-100 text-teal-800"
            />
            <NewsItem 
              date="April 11, 2025"
              title="Boosting Client Retention: The Follow-Up Formula"
              description="Our data shows that providers who follow this communication pattern see 78% higher client retention rates. Learn the formula that works."
              link="#"
              tag="Client Management"
              tagColor="bg-rose-100 text-rose-800"
            />
          </div>
        </TabsContent>
      </Tabs>
      
      <Card className="overflow-hidden bg-gradient-to-r from-yellow-500 to-amber-400 border-none">
        <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-6">
          <div className="p-4 bg-white/30 backdrop-blur-sm rounded-full">
            <LightbulbIcon className="h-8 w-8 text-white" />
          </div>
          <div className="space-y-3 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">Maximize Your Success with YelloPago Pro</h3>
            <p className="text-yellow-50">Get access to premium features, priority listing, and exclusive tools.</p>
            <Button className="bg-white text-yellow-800 hover:bg-yellow-100">
              Upgrade to Pro <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface NewsItemProps {
  date: string;
  title: string;
  description: string;
  link: string;
  tag: string;
  tagColor: string;
}

const NewsItem = ({ date, title, description, link, tag, tagColor }: NewsItemProps) => {
  return (
    <div className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
      <div className="flex items-center gap-2 mb-2">
        <p className="text-sm text-gray-500">{date}</p>
        <Badge className={`${tagColor}`}>{tag}</Badge>
      </div>
      <h3 className="text-lg font-semibold text-anthracite mb-1">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <Link to={link} className="text-sm font-medium text-yellow-700 hover:text-yellow-800 hover:underline flex items-center">
        Read more <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

export default SignIn;
