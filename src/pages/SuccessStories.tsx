
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Rodriguez",
    business: "Mike's Barbershop",
    image: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=150&h=150&fit=crop",
    category: "barber",
    content: "Before YelloPago, I was spending hours every week managing appointments and trying to find new customers. Now, my schedule is always full and I spend more time doing what I love - cutting hair! The platform helped me grow my client base by 40% in just three months.",
    stats: {
      timesSaved: "15+ hours/week",
      newClients: "40% increase",
      revenue: "$2,300 additional monthly revenue"
    }
  },
  {
    id: 2,
    name: "Sarah Chen",
    business: "Green Thumb Gardens",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    category: "gardener",
    content: "Managing my landscaping business used to be a nightmare of paperwork and missed opportunities. YelloPago streamlined everything from scheduling to invoicing. I've reduced no-shows by 80% and increased my service area without hiring additional staff.",
    stats: {
      timesSaved: "20+ hours/week",
      newClients: "60% increase",
      revenue: "$3,500 additional monthly revenue"
    }
  },
  {
    id: 3,
    name: "James Wilson",
    business: "Wilson's Home Repair",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    category: "handyman",
    content: "Running a one-man handyman business meant I was always juggling jobs, quotes, and invoices. YelloPago changed everything - I now have a professional online presence and the client management tools have helped me stay organized. My customer feedback rating has gone from 4.2 to 4.9 stars!",
    stats: {
      timesSaved: "12+ hours/week",
      newClients: "35% increase",
      revenue: "$1,800 additional monthly revenue"
    }
  },
  {
    id: 4,
    name: "Elena Vasquez",
    business: "Clean & Clear Services",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    category: "cleaner",
    content: "My cleaning service was struggling to compete with larger companies. Since joining YelloPago, I've been able to showcase my quality work through verified reviews. The special offers feature has helped me find clients during what used to be slow periods. My business is thriving!",
    stats: {
      timesSaved: "10+ hours/week",
      newClients: "45% increase",
      revenue: "$2,100 additional monthly revenue"
    }
  },
  {
    id: 5,
    name: "David Thompson",
    business: "Thompson's Tilling Services",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop",
    category: "rotiller",
    content: "My rototilling business is seasonal, which made consistent income difficult. YelloPago's platform has helped me build a loyal customer base that books months in advance. The reminder system keeps my schedule organized and clients appreciate the professionalism.",
    stats: {
      timesSaved: "8+ hours/week",
      newClients: "30% increase",
      revenue: "$2,500 additional monthly revenue"
    }
  }
];

const SuccessStories = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-yellow-300 to-yellow-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold font-poster text-anthracite mb-6">
                Success Stories
              </h1>
              <p className="text-lg md:text-xl text-anthracite/80 mb-8">
                Real stories from service providers who have transformed their businesses with YelloPago.
              </p>
              <div className="flex">
                <Link to="/register/provider">
                  <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
                    Start Your Success Story
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="max-w-4xl mx-auto">
              <TabsList className="mb-8 flex flex-wrap justify-center">
                <TabsTrigger value="all">All Stories</TabsTrigger>
                <TabsTrigger value="barber">Barbers</TabsTrigger>
                <TabsTrigger value="gardener">Gardeners</TabsTrigger>
                <TabsTrigger value="handyman">Handymen</TabsTrigger>
                <TabsTrigger value="cleaner">Cleaners</TabsTrigger>
                <TabsTrigger value="rotiller">Rototillers</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-8">
                {testimonials.map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </TabsContent>

              {["barber", "gardener", "handyman", "cleaner", "rotiller"].map((category) => (
                <TabsContent key={category} value={category} className="space-y-8">
                  {testimonials
                    .filter((story) => story.category === category)
                    .map((story) => (
                      <StoryCard key={story.id} story={story} />
                    ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-anthracite mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of service professionals who are growing their businesses with less effort and better results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/register/provider">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-anthracite">
                  Sign Up Free
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="border-yellow-400 text-anthracite hover:bg-yellow-50">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const StoryCard = ({ story }) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-3">
          <div className="bg-anthracite text-white p-8 flex flex-col">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src={story.image} />
              <AvatarFallback>{story.name[0]}</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold mb-1">{story.name}</h3>
            <p className="text-yellow-400 mb-3">{story.business}</p>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="mt-auto">
              <Link to={`/profile/${story.id}`}>
                <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-anthracite-light">
                  View Profile
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-span-2 p-8">
            <blockquote className="text-lg italic text-gray-700 mb-6">
              "{story.content}"
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-sm text-yellow-800 mb-1">Time Saved</h4>
                <p className="text-lg font-bold text-anthracite">{story.stats.timesSaved}</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-sm text-yellow-800 mb-1">New Clients</h4>
                <p className="text-lg font-bold text-anthracite">{story.stats.newClients}</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-sm text-yellow-800 mb-1">Revenue Growth</h4>
                <p className="text-lg font-bold text-anthracite">{story.stats.revenue}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SuccessStories;
