
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Star } from "lucide-react";
import { Link } from "react-router-dom";

const reviews = [
  {
    id: 1,
    customer: {
      name: "Jennifer Wilson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop",
      location: "Portland, OR"
    },
    provider: {
      id: 101,
      name: "Elite Plumbing Services",
      service: "Plumbing"
    },
    rating: 5,
    comment: "John from Elite Plumbing was fantastic! He arrived on time, quickly identified the problem with our water heater, and fixed it in under an hour. He also gave us tips on maintenance to prevent future issues. Highly recommend!",
    date: "2 days ago"
  },
  {
    id: 2,
    customer: {
      name: "Michael Rodriguez",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop",
      location: "Austin, TX"
    },
    provider: {
      id: 102,
      name: "Green Thumb Gardens",
      service: "Landscaping"
    },
    rating: 4,
    comment: "Sarah and her team transformed our backyard in just two days. They were professional and cleaned up everything before leaving. The only reason for 4 stars instead of 5 is that one plant was not what we had discussed, but they've promised to replace it next week.",
    date: "1 week ago"
  },
  {
    id: 3,
    customer: {
      name: "Aisha Johnson",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&h=60&fit=crop",
      location: "Chicago, IL"
    },
    provider: {
      id: 103,
      name: "Bright Spark Electric",
      service: "Electrical"
    },
    rating: 5,
    comment: "I had several electrical issues that needed fixing, and Dave did an excellent job. He explained everything clearly, gave me options within my budget, and worked efficiently. My lights no longer flicker and I feel safer in my home.",
    date: "2 weeks ago"
  },
  {
    id: 4,
    customer: {
      name: "Robert Chen",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=60&h=60&fit=crop",
      location: "Seattle, WA"
    },
    provider: {
      id: 104,
      name: "Fresh Start Cleaning",
      service: "House Cleaning"
    },
    rating: 5,
    comment: "This was my first time using a professional cleaning service and I'm amazed at the difference. The team was thorough and paid attention to details I would have missed. They transformed my apartment in just 3 hours. Will definitely book again for monthly cleaning.",
    date: "3 weeks ago"
  },
  {
    id: 5,
    customer: {
      name: "Emily Thompson",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop",
      location: "Denver, CO"
    },
    provider: {
      id: 105,
      name: "Perfect Painters Co.",
      service: "Painting"
    },
    rating: 3,
    comment: "The quality of the paint job was excellent, but they were two days late starting the project and didn't communicate the delay well. Once they did start, they worked quickly and the results look great, but the scheduling issues were frustrating.",
    date: "1 month ago"
  }
];

const Reviews = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-yellow-300 to-yellow-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold font-poster text-anthracite mb-6">
                Customer Reviews
              </h1>
              <p className="text-lg md:text-xl text-anthracite/80 mb-8">
                Real experiences from verified customers who have used services through YelloPago.
              </p>
              
              <div className="bg-white/90 backdrop-blur p-6 rounded-xl">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input 
                      className="pl-10" 
                      placeholder="Search reviews by keyword"
                    />
                  </div>
                  <div className="flex gap-3">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Service Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Services</SelectLabel>
                          <SelectItem value="all">All Services</SelectItem>
                          <SelectItem value="plumbing">Plumbing</SelectItem>
                          <SelectItem value="electrical">Electrical</SelectItem>
                          <SelectItem value="cleaning">Cleaning</SelectItem>
                          <SelectItem value="landscaping">Landscaping</SelectItem>
                          <SelectItem value="painting">Painting</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    
                    <Select defaultValue="recent">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort By" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recent">Most Recent</SelectItem>
                        <SelectItem value="highest">Highest Rated</SelectItem>
                        <SelectItem value="lowest">Lowest Rated</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="max-w-4xl mx-auto">
              <TabsList className="flex flex-wrap justify-center mb-8">
                <TabsTrigger value="all">All Reviews</TabsTrigger>
                <TabsTrigger value="5star">5 Star</TabsTrigger>
                <TabsTrigger value="4star">4 Star</TabsTrigger>
                <TabsTrigger value="3star">3 Star</TabsTrigger>
                <TabsTrigger value="2star">2 Star & Below</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-6">
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
                
                <div className="flex justify-center mt-10">
                  <Button variant="outline" className="border-yellow-400 text-anthracite hover:bg-yellow-50">
                    Load More Reviews
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="5star" className="space-y-6">
                {reviews
                  .filter(review => review.rating === 5)
                  .map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))
                }
              </TabsContent>
              
              <TabsContent value="4star" className="space-y-6">
                {reviews
                  .filter(review => review.rating === 4)
                  .map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))
                }
              </TabsContent>
              
              <TabsContent value="3star" className="space-y-6">
                {reviews
                  .filter(review => review.rating === 3)
                  .map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))
                }
              </TabsContent>
              
              <TabsContent value="2star" className="space-y-6">
                {reviews
                  .filter(review => review.rating <= 2)
                  .map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))
                }
                {reviews.filter(review => review.rating <= 2).length === 0 && (
                  <div className="text-center py-10">
                    <p className="text-gray-500">No reviews with 2 stars or below.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
              Ready to experience service worth reviewing?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have found reliable service providers on YelloPago.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/search">
                <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
                  Find Services
                </Button>
              </Link>
              <Link to="/special-offers">
                <Button variant="outline" className="border-yellow-400 text-anthracite hover:bg-yellow-50">
                  Browse Special Offers
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

const ReviewCard = ({ review }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="flex gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={review.customer.image} />
              <AvatarFallback>{review.customer.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{review.customer.name}</h3>
              <p className="text-sm text-gray-500">{review.customer.location}</p>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating 
                        ? "text-yellow-400 fill-yellow-400" 
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-xs text-gray-500 ml-2">{review.date}</span>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <Link to={`/profile/${review.provider.id}`} className="font-medium hover:text-yellow-600 transition-colors">
              {review.provider.name}
            </Link>
            <p className="text-sm text-gray-500">{review.provider.service}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-gray-700">{review.comment}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Reviews;
