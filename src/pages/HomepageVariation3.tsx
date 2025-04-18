
import Header from "@/components/Header";
import HeroVariation3 from "@/components/variations/HeroVariation3";
import ServiceCategories from "@/components/ServiceCategories";
import SpecialOffers from "@/components/SpecialOffers";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const HomepageVariation3 = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroVariation3 />
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

export default HomepageVariation3;
