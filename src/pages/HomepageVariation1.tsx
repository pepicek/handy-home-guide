
import Header from "@/components/Header";
import HeroVariation1 from "@/components/variations/HeroVariation1";
import ServiceCategories from "@/components/ServiceCategories";
import SpecialOffers from "@/components/SpecialOffers";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const HomepageVariation1 = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroVariation1 />
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

export default HomepageVariation1;
