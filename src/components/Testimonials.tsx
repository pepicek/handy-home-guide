
import { useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    location: "Boston, MA",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=100&h=100&auto=format&fit=crop",
    rating: 5,
    quote: "I was amazed by how easy it was to find a reliable plumber for my emergency. The upfront pricing made me feel confident, and the service was excellent.",
  },
  {
    id: 2,
    name: "Michael Torres",
    role: "Business Owner",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&h=100&auto=format&fit=crop",
    rating: 5,
    quote: "As a service provider, this platform has transformed how I get new clients. The inquiry system is straightforward and the tools for creating quotes save me hours each week.",
  },
  {
    id: 3,
    name: "Emily Wilson",
    role: "Homeowner",
    location: "Denver, CO",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&h=100&auto=format&fit=crop",
    rating: 4,
    quote: "Found a fantastic landscaper through the guided search. The special offers section helped me save on a project I'd been putting off for months. Highly recommend!",
  },
  {
    id: 4,
    name: "Robert Chen",
    role: "Electrician",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&h=100&auto=format&fit=crop",
    rating: 5,
    quote: "The bidding system helps me win projects that are perfect for my business. Customer communication is seamless, and getting paid is never an issue.",
  },
  {
    id: 5,
    name: "Lisa Morgan",
    role: "Small Business Owner",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&h=100&auto=format&fit=crop",
    rating: 5,
    quote: "As a cleaning service, we've grown our client base by 40% since joining. The platform's tools for scheduling and communication have made our operation much more efficient.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poster text-3xl md:text-4xl text-anthracite font-bold mb-3">
            Trusted by Homeowners & Pros
          </h2>
          <p className="text-lg text-anthracite-light opacity-80 max-w-2xl mx-auto">
            See what people are saying about their experience
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={api => {
              api?.on("select", () => {
                setCurrent(api.selectedScrollSnap());
              });
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="border-gray-100">
                    <CardContent className="p-6">
                      <div className="flex mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-3 object-cover"
                        />
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">
                            {testimonial.role} • {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative inset-0 translate-y-0 mr-2" />
              <div className="flex space-x-1">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`block w-2 h-2 rounded-full ${
                      current === index ? "bg-yellow-400" : "bg-gray-300"
                    }`}
                  ></span>
                ))}
              </div>
              <CarouselNext className="relative inset-0 translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
