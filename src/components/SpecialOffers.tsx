
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const offers = [
  {
    id: 1,
    title: "Spring A/C Tune-Up Special",
    provider: "Cool Air Services",
    providerImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=64&h=64",
    price: "From $89",
    originalPrice: "$129",
    timeframe: "Same-week service",
    popularity: "Booked 24 times this week",
    description: "Complete air conditioning system check, cleaning, and tune-up with certified technicians. Includes filter replacement and performance test.",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&q=80&w=500&h=220"
  },
  {
    id: 2,
    title: "Complete Kitchen Plumbing",
    provider: "Master Plumbers Co.",
    providerImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=64&h=64",
    price: "From $149",
    originalPrice: "$199",
    timeframe: "1-2 day service",
    popularity: "Booked 18 times this week",
    description: "Full kitchen plumbing service including sink, garbage disposal, and dishwasher hookup. Includes inspection of existing pipes.",
    image: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?auto=format&fit=crop&q=80&w=500&h=220"
  },
  {
    id: 3,
    title: "Interior House Painting",
    provider: "Prime Painting Pros",
    providerImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=64&h=64",
    price: "From $299/room",
    originalPrice: "$399/room",
    timeframe: "Available next week",
    popularity: "Booked 31 times this month",
    description: "Professional interior painting with premium paint. Includes wall preparation, repairs of minor damages, and complete cleanup.",
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&q=80&w=500&h=220"
  },
];

const SpecialOffers = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="font-poster text-3xl md:text-4xl text-anthracite font-bold mb-2">
              Special Offers Near You
            </h2>
            <p className="text-lg text-anthracite-light opacity-80 max-w-2xl">
              Limited-time deals from trusted service providers in your area
            </p>
          </div>
          
          <Link to="/special-offers">
            <Button 
              variant="ghost"
              className="text-anthracite hover:bg-yellow-50 font-medium hidden md:flex mt-4 md:mt-0"
            >
              View All Offers <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <Card 
              key={offer.id}
              className="hover-scale border-gray-100 overflow-hidden"
            >
              <div className="w-full h-48 bg-gray-100 relative overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-yellow-400 hover:bg-yellow-500 text-anthracite">
                  Limited Time
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-xl mb-1">{offer.title}</h3>
                    <div className="flex items-center">
                      <img
                        src={offer.providerImage}
                        alt={offer.provider}
                        className="w-5 h-5 rounded-full mr-2 object-cover"
                      />
                      <span className="text-sm text-gray-600">{offer.provider}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-anthracite">{offer.price}</div>
                    <div className="text-sm text-gray-400 line-through">{offer.originalPrice}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {offer.description}
                </p>
                
                <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{offer.timeframe}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    <span>{offer.popularity}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex justify-between">
                <Link to={`/special-offers/${offer.id}`}>
                  <Button size="sm" variant="outline" className="border-gray-200 text-anthracite hover:bg-gray-50">
                    View Details
                  </Button>
                </Link>
                <Link to={`/book-now/${offer.id}`}>
                  <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-anthracite font-medium">
                    Book Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 md:hidden">
          <Link to="/special-offers">
            <Button 
              variant="outline"
              className="border-yellow-300 text-anthracite hover:bg-yellow-50 font-medium"
            >
              View All Offers <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
