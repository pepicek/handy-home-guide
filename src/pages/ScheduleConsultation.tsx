
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ConsultationForm } from "@/components/consultation/ConsultationForm";
import { ConsultationInfoCard } from "@/components/consultation/ConsultationInfoCard";

const ScheduleConsultation = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-yellow-300 to-yellow-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold font-poster text-anthracite mb-6">
                Schedule Your Free Consultation
              </h1>
              <p className="text-lg text-anthracite/80 mb-6">
                Get personalized guidance on how YelloPago can help grow your service business.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="md:col-span-2">
                <ConsultationForm />
              </div>
              <div>
                <ConsultationInfoCard />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ScheduleConsultation;
