
import Header from "@/components/Header";
import HeroVariation2 from "@/components/variations/HeroVariation2";
import ServiceCategories from "@/components/ServiceCategories";
import SpecialOffers from "@/components/SpecialOffers";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const HomepageVariation2 = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroVariation2 />
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

export default HomepageVariation2;
