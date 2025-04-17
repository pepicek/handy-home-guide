
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Search, FileText, Calendar, ThumbsUp } from "lucide-react";

// Note: This component uses framer-motion for animations.
// You may need to install it with: npm install framer-motion

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

        <div className="relative mt-16 max-w-4xl mx-auto bg-yellow-50 rounded-xl p-8 border border-yellow-100">
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
        </div>
      </div>
    </section>
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

export default HowItWorks;
