
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { 
  Search, 
  MapPin, 
  Calendar, 
  Clock, 
  Upload, 
  Camera, 
  ChevronRight, 
  Tag, 
  Wrench, 
  Home, 
  Building, 
  Construction, 
  Droplet,
  Ruler
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const HeroVariation2 = () => {
  const [selectedCategory, setSelectedCategory] = useState("home");
  const [step, setStep] = useState(1);
  const [animation, setAnimation] = useState("");
  const imageUploadRef = useRef<HTMLInputElement>(null);
  
  const categories = [
    { id: "home", name: "Home", icon: Home },
    { id: "commercial", name: "Commercial", icon: Building },
    { id: "renovation", name: "Renovation", icon: Construction },
    { id: "plumbing", name: "Plumbing", icon: Droplet },
    { id: "landscaping", name: "Landscaping", icon: Ruler },
  ];
  
  useEffect(() => {
    setAnimation("animate-fade-in");
    const timer = setTimeout(() => {
      setAnimation("");
    }, 300);
    
    return () => clearTimeout(timer);
  }, [step]);
  
  const goToNextStep = () => {
    setStep(prev => prev + 1);
  };
  
  const goToPrevStep = () => {
    setStep(prev => prev - 1);
  };

  return (
    <div className="relative overflow-hidden bg-anthracite text-white">
      <div className="absolute inset-0 bg-pattern opacity-5 z-0"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center gap-2 p-2 bg-yellow-400/20 rounded-full">
              {[1, 2, 3].map(i => (
                <div 
                  key={i}
                  className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                    step === i ? "bg-yellow-400 text-anthracite" : 
                    step > i ? "bg-yellow-400/50 text-anthracite" : 
                    "bg-yellow-400/10 text-yellow-200"
                  }`}
                >
                  {i}
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-sans font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              {step === 1 && "What project are you planning?"}
              {step === 2 && "Tell us more about your needs"}
              {step === 3 && "Almost there! A few final details"}
            </h1>
            <p className="text-xl text-yellow-100 max-w-2xl mx-auto">
              {step === 1 && "Let's find the perfect professionals for your specific project."}
              {step === 2 && "Help us understand your requirements to match you with the best pros."}
              {step === 3 && "We're about to connect you with qualified professionals in your area."}
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 mb-8 border border-white/10">
            <div className={`${animation}`}>
              {step === 1 && (
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3 text-yellow-200">Select project category:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {categories.map(category => {
                        const Icon = category.icon;
                        return (
                          <Card 
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`cursor-pointer transition-all border-2 hover:border-yellow-400 ${
                              selectedCategory === category.id 
                                ? "border-yellow-400 bg-yellow-400/20" 
                                : "border-white/10 bg-white/5 hover:bg-white/10"
                            }`}
                          >
                            <CardContent className="p-4 flex flex-col items-center">
                              <Icon className={`w-8 h-8 mb-2 ${
                                selectedCategory === category.id 
                                  ? "text-yellow-400" 
                                  : "text-yellow-200"
                              }`} />
                              <span className={
                                selectedCategory === category.id 
                                  ? "font-medium text-yellow-400" 
                                  : "text-yellow-100"
                              }>
                                {category.name}
                              </span>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3 text-yellow-200">What's your project?</h3>
                    <div className="relative">
                      <Wrench className="absolute left-3 top-3 text-yellow-400" />
                      <textarea
                        placeholder="Describe what you need help with..."
                        className="pl-10 pr-4 py-3 w-full rounded-xl border border-white/20 bg-white/5 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none h-28 text-white placeholder:text-white/50"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      onClick={goToNextStep} 
                      className="bg-yellow-400 hover:bg-yellow-500 text-anthracite px-6 py-2 h-auto rounded-xl font-medium"
                    >
                      Continue <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div className="grid grid-cols-1 gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-yellow-200">Project location</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400" />
                        <input
                          type="text"
                          placeholder="Address or zip code"
                          className="pl-10 pr-3 py-3 w-full rounded-xl border border-white/20 bg-white/5 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none text-white placeholder:text-white/50"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-yellow-200">Project budget range</label>
                      <div className="relative">
                        <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400" />
                        <Select>
                          <SelectTrigger className="w-full h-12 pl-10 border-white/20 bg-white/5 text-white rounded-xl">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent className="bg-anthracite border-white/20">
                            <SelectGroup>
                              <SelectItem value="low">Under $500</SelectItem>
                              <SelectItem value="medium-low">$500 - $1,000</SelectItem>
                              <SelectItem value="medium">$1,000 - $5,000</SelectItem>
                              <SelectItem value="medium-high">$5,000 - $10,000</SelectItem>
                              <SelectItem value="high">$10,000+</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-yellow-200">Preferred start date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400" />
                        <Select>
                          <SelectTrigger className="w-full h-12 pl-10 border-white/20 bg-white/5 text-white rounded-xl">
                            <SelectValue placeholder="When do you want to start?" />
                          </SelectTrigger>
                          <SelectContent className="bg-anthracite border-white/20">
                            <SelectGroup>
                              <SelectItem value="immediately">As soon as possible</SelectItem>
                              <SelectItem value="week">Within a week</SelectItem>
                              <SelectItem value="two-weeks">In 1-2 weeks</SelectItem>
                              <SelectItem value="month">Within a month</SelectItem>
                              <SelectItem value="flexible">I'm flexible</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-yellow-200">Project timeline</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400" />
                        <Select>
                          <SelectTrigger className="w-full h-12 pl-10 border-white/20 bg-white/5 text-white rounded-xl">
                            <SelectValue placeholder="How long will it take?" />
                          </SelectTrigger>
                          <SelectContent className="bg-anthracite border-white/20">
                            <SelectGroup>
                              <SelectItem value="day">One day</SelectItem>
                              <SelectItem value="few-days">A few days</SelectItem>
                              <SelectItem value="week">About a week</SelectItem>
                              <SelectItem value="few-weeks">A few weeks</SelectItem>
                              <SelectItem value="month-plus">A month or more</SelectItem>
                              <SelectItem value="not-sure">Not sure</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-yellow-200">Upload project images (optional)</label>
                    <div 
                      className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center cursor-pointer hover:border-yellow-400 transition-colors"
                      onClick={() => imageUploadRef.current?.click()}
                    >
                      <input
                        type="file"
                        ref={imageUploadRef}
                        className="hidden"
                        multiple
                        accept="image/*"
                      />
                      <Camera className="mx-auto w-10 h-10 mb-3 text-yellow-400" />
                      <p className="text-yellow-100">Drop images here or click to upload</p>
                      <p className="text-xs text-yellow-200/60 mt-1">Upload photos of your project area or inspiration</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button 
                      onClick={goToPrevStep} 
                      variant="outline"
                      className="border-white/20 text-yellow-100 hover:bg-white/10 hover:text-yellow-400"
                    >
                      Back
                    </Button>
                    <Button 
                      onClick={goToNextStep} 
                      className="bg-yellow-400 hover:bg-yellow-500 text-anthracite px-6 py-2 h-auto rounded-xl font-medium"
                    >
                      Continue <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              {step === 3 && (
                <div className="grid grid-cols-1 gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-yellow-200">Your name</label>
                      <input
                        type="text"
                        placeholder="Full name"
                        className="px-4 py-3 w-full rounded-xl border border-white/20 bg-white/5 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none text-white placeholder:text-white/50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-yellow-200">Phone number</label>
                      <input
                        type="tel"
                        placeholder="For service provider contact"
                        className="px-4 py-3 w-full rounded-xl border border-white/20 bg-white/5 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none text-white placeholder:text-white/50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-yellow-200">Email address</label>
                    <input
                      type="email"
                      placeholder="We'll send your matches here"
                      className="px-4 py-3 w-full rounded-xl border border-white/20 bg-white/5 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none text-white placeholder:text-white/50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-yellow-200">Additional requirements or questions</label>
                    <textarea
                      placeholder="Anything specific the pros should know about your project?"
                      className="px-4 py-3 w-full rounded-xl border border-white/20 bg-white/5 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none h-20 text-white placeholder:text-white/50"
                    />
                  </div>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <input type="checkbox" id="save-info" className="rounded text-yellow-400 focus:ring-yellow-400" />
                    <label htmlFor="save-info" className="text-sm text-yellow-100">Save my information for future projects</label>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button 
                      onClick={goToPrevStep} 
                      variant="outline"
                      className="border-white/20 text-yellow-100 hover:bg-white/10 hover:text-yellow-400"
                    >
                      Back
                    </Button>
                    <Button 
                      className="bg-yellow-400 hover:bg-yellow-500 text-anthracite px-8 py-2 h-auto rounded-xl font-medium"
                    >
                      Find Matching Pros
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="text-center text-yellow-200/70 text-sm">
            <p>You'll receive quotes from verified professionals within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVariation2;
