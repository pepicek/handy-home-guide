import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Search, FileText, Calendar, ThumbsUp, MessagesSquare, Star, Wallet, ShieldCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const steps = [
  {
    id: 1,
    title: "Search for Services",
    description: "Tell us what you need done and we'll help you find the right professionals.",
    icon: <Search className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "Get Instant Quotes",
    description: "Compare upfront pricing and example quotes from verified service providers.",
    icon: <FileText className="w-8 h-8" />,
  },
  {
    id: 3,
    title: "Book Appointment",
    description: "Choose a service pro that fits your budget and schedule an appointment.",
    icon: <Calendar className="w-8 h-8" />,
  },
  {
    id: 4,
    title: "Get it Done",
    description: "Your service provider will complete the job, and you can leave a review.",
    icon: <ThumbsUp className="w-8 h-8" />,
  },
];

const HowItWorks = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poster text-3xl md:text-4xl text-anthracite font-bold mb-3">
              How It Works
            </h2>
            <p className="text-lg text-anthracite-light opacity-80 max-w-2xl mx-auto">
              Finding and booking a reliable service professional has never been easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-anthracite mb-12 font-poster">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<MessagesSquare className="w-6 h-6 text-yellow-600" />}
              title="Direct Communication"
              description="Chat directly with service providers to discuss your needs and get accurate quotes."
            />
            <FeatureCard
              icon={<Star className="w-6 h-6 text-yellow-600" />}
              title="Verified Reviews"
              description="Real reviews from real customers help you make informed decisions."
            />
            <FeatureCard
              icon={<Wallet className="w-6 h-6 text-yellow-600" />}
              title="Transparent Pricing"
              description="Clear, upfront pricing with no hidden fees or surprise charges."
            />
            <FeatureCard
              icon={<ShieldCheck className="w-6 h-6 text-yellow-600" />}
              title="Secure Payments"
              description="Your payments are protected until the job is completed to your satisfaction."
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-anthracite mb-12 font-poster">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I know if a service provider is reliable?</AccordionTrigger>
                <AccordionContent>
                  All our service providers undergo thorough background checks. You can also read verified customer reviews, check their ratings, and view their work history before booking.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What happens if I'm not satisfied with the service?</AccordionTrigger>
                <AccordionContent>
                  Your satisfaction is our priority. If you're not happy with the service, you can raise a dispute within 48 hours. Our customer support team will help resolve any issues, and payments are held in escrow until you're satisfied.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I cancel or reschedule a booking?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can cancel or reschedule a booking up to 24 hours before the scheduled service time without any penalty. Changes made within 24 hours may incur a small fee.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How are service prices determined?</AccordionTrigger>
                <AccordionContent>
                  Service providers set their own rates based on their experience, expertise, and market rates. You can compare quotes from multiple providers to find the best value for your needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="relative mt-16 max-w-4xl mx-auto bg-yellow-50 rounded-xl p-8 border border-yellow-100">
        <div className="absolute -top-5 -left-5 bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center text-anthracite font-bold">
          <span className="text-xl">?</span>
        </div>
        <h3 className="text-xl font-bold mb-4 text-anthracite">Not sure what you need?</h3>
        <p className="text-gray-600 mb-5">
          Our guided search can help you discover the right service for your specific situation.
          Just tell us about your project, and we'll guide you through the process.
        </p>
        <div className="flex justify-center">
          <button className="bg-anthracite hover:bg-anthracite-light text-white font-medium py-2 px-6 rounded-lg transition-all">
            Try Guided Search
          </button>
        </div>
      </section>
    </>
  );
};

const StepCard = ({ step, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.2
      } 
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="flex flex-col items-center text-center"
    >
      <div className="relative">
        <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-5 text-yellow-600">
          {step.icon}
        </div>
        <div className="absolute top-1/2 left-full -translate-y-1/2 w-full h-0.5 bg-yellow-100 hidden md:block">
          {index < 3 && (
            <div className="w-3 h-3 bg-yellow-300 rounded-full absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/2"></div>
          )}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-anthracite">
        {step.title}
      </h3>
      <p className="text-gray-600">
        {step.description}
      </p>
    </motion.div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-2 text-anthracite">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </Card>
  );
};

export default HowItWorks;
