
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Users } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200"></div>
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-poster text-4xl md:text-5xl text-anthracite font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-700">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-xl text-anthracite-light opacity-90 mb-12 animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            Join thousands of professionals growing their business with YelloPago. 
            Get more leads, manage projects efficiently, and boost your revenue.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Star,
                title: "Verified Reviews",
                description: "Build trust with genuine customer feedback"
              },
              {
                icon: Shield,
                title: "Secure Payments",
                description: "Protected transactions and escrow service"
              },
              {
                icon: Users,
                title: "Pro Network",
                description: "Connect with other professionals"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <feature.icon className="w-10 h-10 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-anthracite mb-2">{feature.title}</h3>
                <p className="text-anthracite-light">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            <Button size="lg" className="bg-anthracite hover:bg-anthracite-light text-yellow-400 font-medium px-8 h-12">
              Join as a Pro
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-anthracite text-anthracite hover:bg-anthracite/10 px-8 h-12">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
