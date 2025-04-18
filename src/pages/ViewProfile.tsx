import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Calendar, Clock, Shield, Award, ThumbsUp } from 'lucide-react';

const ViewProfile = () => {
  const { id } = useParams();
  
  // For demonstration, using mock data
  const provider = {
    id: id,
    name: "Elite Plumbing Services",
    rating: 4.8,
    reviews: 124,
    verified: true,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=150&h=150&crop=faces",
    description: "Professional plumbing services with licensed and insured experts. Available for emergency calls 24/7.",
    location: "San Francisco, CA",
    experience: "12+ years",
    responseTime: "Under 1 hour",
    completedJobs: 450,
    specialties: [
      "Emergency Plumbing",
      "Pipe Repair",
      "Drain Cleaning",
      "Water Heater Installation",
      "Fixture Installation",
      "Leak Detection"
    ],
    availability: "Available today",
    certifications: ["Licensed", "Bonded", "Insured"],
    recentReviews: [
      {
        id: 1,
        author: "John D.",
        rating: 5,
        date: "2 days ago",
        comment: "Excellent service! Fixed our emergency leak quickly and professionally."
      },
      {
        id: 2,
        author: "Sarah M.",
        rating: 5,
        date: "1 week ago",
        comment: "Very knowledgeable and efficient. Would highly recommend!"
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Provider Header */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h1 className="text-2xl font-bold mb-2">{provider.name}</h1>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{provider.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-yellow-400 text-anthracite font-medium rounded-full px-3 py-1 flex items-center gap-1">
                        <Star className="w-4 h-4 fill-anthracite" />
                        <span>{provider.rating}</span>
                      </div>
                      <span className="text-gray-500">({provider.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{provider.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-gray-500" />
                      <span>{provider.experience} experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>{provider.responseTime} response</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ThumbsUp className="w-4 h-4 text-gray-500" />
                      <span>{provider.completedJobs}+ jobs completed</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {provider.certifications.map((cert) => (
                      <Badge key={cert} variant="secondary" className="flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        {cert}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-anthracite" asChild>
                      <Link to={`/request-quote/${id}`}>Request Quote</Link>
                    </Button>
                    <Button variant="outline">
                      Message
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to={`/schedule/${id}`}>Check Schedule</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Specialties & Reviews Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Services & Specialties</h2>
                  <div className="flex flex-wrap gap-2">
                    {provider.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Recent Reviews</h2>
                  <div className="space-y-6">
                    {provider.recentReviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-medium">{review.author}</div>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Availability</h2>
                  <div className="flex items-center gap-2 text-green-600 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{provider.availability}</span>
                  </div>
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-anthracite" asChild>
                    <Link to={`/schedule/${id}`}>Check Schedule</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ViewProfile;
