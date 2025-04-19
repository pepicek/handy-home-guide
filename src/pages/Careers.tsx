
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const jobOpenings = [
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "We're looking for a Senior Frontend Developer to help build and maintain our web applications.",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Join our product team to help shape the future of home services.",
  },
  {
    title: "Customer Success Manager",
    department: "Customer Support",
    location: "New York, NY",
    type: "Full-time",
    description: "Help our customers succeed by providing exceptional support and guidance.",
  },
];

const Careers = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-poster font-bold mb-6 text-anthracite">
                Join Our Team
              </h1>
              <p className="text-lg md:text-xl text-anthracite/80 mb-8">
                Help us transform the home services industry by connecting homeowners 
                with trusted professionals.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-poster font-bold text-anthracite mb-12 text-center">
              Open Positions
            </h2>
            <div className="grid gap-6 max-w-4xl mx-auto">
              {jobOpenings.map((job, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-anthracite mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">{job.department}</Badge>
                          <Badge variant="outline">{job.location}</Badge>
                          <Badge variant="outline">{job.type}</Badge>
                        </div>
                      </div>
                      <Link to={`/careers/apply/${index + 1}`}>
                        <Button className="mt-4 md:mt-0 bg-yellow-500 hover:bg-yellow-600 text-anthracite">
                          Apply Now
                        </Button>
                      </Link>
                    </div>
                    <p className="text-anthracite/70">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-poster font-bold text-anthracite mb-6">
              Why Join YelloPago?
            </h2>
            <p className="text-lg text-anthracite/80 mb-12">
              We offer competitive compensation, great benefits, and the opportunity 
              to make a real impact in the home services industry.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <h3 className="font-semibold text-lg mb-3 text-yellow-600">Competitive Pay</h3>
                <p className="text-anthracite/70">
                  Industry-leading compensation package including salary, equity, 
                  and comprehensive health benefits
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <h3 className="font-semibold text-lg mb-3 text-yellow-600">Remote-First</h3>
                <p className="text-anthracite/70">
                  Work from anywhere with flexible hours and a supportive 
                  global team culture
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <h3 className="font-semibold text-lg mb-3 text-yellow-600">Growth</h3>
                <p className="text-anthracite/70">
                  Regular learning opportunities, mentorship programs, and 
                  clear career progression paths
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
