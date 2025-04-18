
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCategories from "@/components/ServiceCategories";
import SpecialOffers from "@/components/SpecialOffers";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

// New component imports
import HeroVariation1 from "@/components/variations/HeroVariation1";
import HeroVariation2 from "@/components/variations/HeroVariation2";
import HeroVariation3 from "@/components/variations/HeroVariation3";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Original Hero */}
        <Hero />
        
        {/* Variations are now accessible at /home/v1, /home/v2, and /home/v3 routes */}
        
        <ServiceCategories />
        <SpecialOffers />
        <HowItWorks />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
