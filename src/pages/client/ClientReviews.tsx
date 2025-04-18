import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Edit, Trash2 } from "lucide-react";
import DeleteReviewModal from "@/components/reviews/DeleteReviewModal";

const ClientReviews = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [reviewToDelete, setReviewToDelete] = useState<number | null>(null);

  const handleDelete = (reviewId: number) => {
    setReviewToDelete(reviewId);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setShowDeleteModal(false);
    setReviewToDelete(null);
  };

  const reviews = [
    {
      id: 1,
      providerName: "Elite Home Renovations",
      providerInitials: "EH",
      service: "Kitchen Renovation",
      rating: 5,
      date: "Mar 15, 2024",
      review: "Excellent work on our kitchen renovation. Professional team, great attention to detail.",
      projectId: "PRJ-2024-001"
    },
    {
      id: 2,
      providerName: "Green Gardens Pro",
      providerInitials: "GG",
      service: "Lawn Maintenance",
      rating: 4,
      date: "Mar 1, 2024",
      review: "Good service overall. Would recommend for regular lawn maintenance.",
      projectId: "PRJ-2024-002"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-anthracite">My Reviews</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Provider Reviews</CardTitle>
          <CardDescription>
            Reviews you've submitted for completed services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border rounded-lg p-4 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-yellow-200">
                      <AvatarFallback className="bg-yellow-100 text-yellow-800">
                        {review.providerInitials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{review.providerName}</h3>
                      <p className="text-sm text-gray-500">{review.service}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-8 p-0"
                      onClick={() => window.location.href = `/client/reviews/${review.id}/edit`}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={() => handleDelete(review.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`h-4 w-4 ${
                          index < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                  </div>
                  <p className="text-gray-700">{review.review}</p>
                </div>
                
                <div className="pt-2">
                  <Badge variant="secondary">
                    Project ID: {review.projectId}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <DeleteReviewModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default ClientReviews;
