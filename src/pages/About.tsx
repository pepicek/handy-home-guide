
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Users,
  Target,
  Shield,
  Heart,
  Award,
  GraduationCap,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "We prioritize the security and satisfaction of both homeowners and service providers.",
    },
    {
      icon: Heart,
      title: "Quality Service",
      description: "We ensure top-notch service delivery through our vetted professionals.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously improving our platform to provide the best user experience.",
    },
    {
      icon: GraduationCap,
      title: "Expertise",
      description: "Working with skilled professionals who are leaders in their fields.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong relationships between homeowners and service providers.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to maintaining high standards in every aspect of our service.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section with vibrant gradient */}
        <section className="relative bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-poster font-bold mb-6 text-anthracite">
                About YelloPago
              </h1>
              <p className="text-lg md:text-xl text-anthracite/80 mb-8">
                Connecting homeowners with trusted service professionals since 2023. 
                We're on a mission to transform home services by making them more 
                accessible, reliable, and transparent.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section with soft background */}
        <section className="py-20 bg-gradient-to-br from-white to-yellow-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-poster font-bold text-anthracite mb-6">
                Our Story
              </h2>
              <p className="text-lg text-anthracite/80 mb-8">
                YelloPago was founded with a simple yet powerful vision: to revolutionize 
                how homeowners connect with service professionals. We understand the 
                challenges of finding reliable home service providers, and we've built 
                a platform that makes this process seamless, trustworthy, and efficient.
              </p>
              <p className="text-lg text-anthracite/80">
                Today, we're proud to serve thousands of homeowners and service 
                professionals across the country, facilitating successful connections 
                and maintaining high standards of service quality.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section with cards */}
        <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-poster font-bold text-anthracite mb-4">
                Our Values
              </h2>
              <p className="text-lg text-anthracite/80">
                The principles that guide us in everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform border border-yellow-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-100 rounded-xl flex items-center justify-center mb-4 rotate-3 hover:rotate-6 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-anthracite" />
                  </div>
                  <h3 className="text-xl font-semibold text-anthracite mb-2">
                    {value.title}
                  </h3>
                  <p className="text-anthracite/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with energetic gradient */}
        <section className="py-20 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-poster font-bold text-anthracite mb-6">
              Join Our Community
            </h2>
            <p className="text-lg text-anthracite/80 mb-8 max-w-2xl mx-auto">
              Whether you're a homeowner looking for reliable services or a professional 
              ready to grow your business, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-anthracite hover:bg-anthracite/90 text-yellow-400 hover:scale-105 transition-transform duration-300"
              >
                Find a Pro
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-anthracite/30 hover:bg-yellow-500/20 hover:scale-105 transition-transform duration-300"
              >
                Become a Provider
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
