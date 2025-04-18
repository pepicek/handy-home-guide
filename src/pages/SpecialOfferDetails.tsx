
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Clock, DollarSign, Award, ShieldCheck, Users, MapPin } from "lucide-react";

const SpecialOfferDetails = () => {
  const { id } = useParams();
  
  // This would typically come from an API call using the id
  const offer = {
    id: 1,
    title: "Spring A/C Tune-Up Special",
    provider: "Cool Air Services",
    providerImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=64&h=64",
    price: 89,
    originalPrice: 129,
    timeframe: "Same-week service",
    popularity: "Booked 24 times this week",
    description: "Complete air conditioning system check, cleaning, and tune-up with certified technicians. Includes filter replacement and performance test.",
    features: [
      "Complete system diagnostic",
      "Filter replacement",
      "Coil cleaning",
      "Performance optimization",
      "90-day service guarantee"
    ],
    rating: 4.8,
    reviews: 156,
    location: "Service available in Downtown & Suburbs"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-br from-yellow-300 to-yellow-100 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Badge className="bg-yellow-400 text-anthracite hover:bg-yellow-500">Limited Time Offer</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-anthracite mb-4 font-poster">
                  {offer.title}
                </h1>
                <div className="flex items-center gap-4">
                  <img
                    src={offer.providerImage}
                    alt={offer.provider}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{offer.provider}</h3>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-600" />
                      <span className="text-sm text-gray-600">Top-rated service provider</span>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-white/90 backdrop-blur shadow-lg">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-3xl font-bold text-anthracite">${offer.price}</span>
                      <span className="text-lg text-gray-400 line-through ml-2">${offer.originalPrice}</span>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                      Save ${offer.originalPrice - offer.price}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">{offer.timeframe}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">{offer.popularity}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-anthracite hover:bg-anthracite/90 text-yellow-400">
                    Book Now
                  </Button>
                  
                  <p className="text-sm text-center text-gray-500">
                    No payment required until service is complete
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">About This Offer</h2>
                <p className="text-gray-600 leading-relaxed">
                  {offer.description}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {offer.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <ShieldCheck className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Service Area</h2>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>{offer.location}</span>
                </div>
              </section>
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Provider Rating</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-anthracite">{offer.rating}</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{offer.reviews} verified reviews</p>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SpecialOfferDetails;
