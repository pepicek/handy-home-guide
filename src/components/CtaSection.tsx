
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-yellow-100 to-yellow-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-poster text-3xl md:text-4xl text-anthracite font-bold mb-4">
            Ready to Transform Your Home Service Experience?
          </h2>
          
          <p className="text-lg text-anthracite-light opacity-90 mb-8">
            Join thousands of homeowners finding reliable service professionals, or sign up as a pro to grow your business.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-anthracite hover:bg-anthracite-light text-white font-medium">
              Find a Service Pro
            </Button>
            <Button size="lg" variant="outline" className="border-anthracite text-anthracite hover:bg-anthracite/10">
              Join as a Provider
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
