
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ThumbsUp, Award, BarChart3, ArrowLeft } from 'lucide-react';

const ProviderRating = () => {
  const { id } = useParams();

  // Mock data - in a real app this would come from an API
  const ratings = {
    overall: 4.8,
    totalReviews: 156,
    categories: [
      { name: "Quality", rating: 4.9, count: 156 },
      { name: "Timeliness", rating: 4.7, count: 150 },
      { name: "Communication", rating: 4.8, count: 145 },
      { name: "Value", rating: 4.6, count: 152 }
    ],
    reviews: [
      {
        id: 1,
        author: "John D.",
        rating: 5,
        date: "2 days ago",
        comment: "Excellent service! Very professional and thorough.",
        project: "AC Maintenance",
        verified: true
      },
      {
        id: 2,
        author: "Sarah M.",
        rating: 5,
        date: "1 week ago",
        comment: "Great attention to detail. Would highly recommend!",
        project: "Plumbing Repair",
        verified: true
      },
      {
        id: 3,
        author: "Mike R.",
        rating: 4,
        date: "2 weeks ago",
        comment: "Good service, arrived on time and completed the work efficiently.",
        project: "Electrical Work",
        verified: true
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Button variant="ghost" className="mb-6" asChild>
            <Link to={-1 as any}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
          </Button>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h1 className="text-3xl font-bold mb-4">Provider Ratings & Reviews</h1>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl font-bold text-anthracite">{ratings.overall}</div>
                    <div>
                      <div className="flex mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(ratings.overall)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300 fill-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">Based on {ratings.totalReviews} reviews</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {ratings.categories.map((category) => (
                    <div key={category.name} className="flex items-center gap-4">
                      <div className="w-24 text-sm text-gray-600">{category.name}</div>
                      <div className="flex-grow bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-yellow-400 rounded-full h-2"
                          style={{ width: `${(category.rating / 5) * 100}%` }}
                        ></div>
                      </div>
                      <div className="w-16 text-sm font-medium">{category.rating}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {ratings.reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">{review.author}</span>
                        {review.verified && (
                          <Badge variant="secondary" className="text-green-600">
                            <ThumbsUp className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-gray-500">{review.project}</div>
                    </div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300 fill-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProviderRating;
