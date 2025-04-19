
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pressReleases = [
  {
    title: "YelloPago Raises $30M Series B to Transform Home Services",
    date: "April 15, 2025",
    source: "TechCrunch",
    link: "#",
  },
  {
    title: "Platform Connects 100,000 Service Professionals with Homeowners",
    date: "March 28, 2025",
    source: "Forbes",
    link: "#",
  },
  {
    title: "YelloPago Expands to 50 New Cities Across the United States",
    date: "February 12, 2025",
    source: "Business Wire",
    link: "#",
  },
];

const Press = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-poster font-bold mb-6 text-anthracite">
                Press Center
              </h1>
              <p className="text-lg md:text-xl text-anthracite/80 mb-8">
                Get the latest news and updates about YelloPago's mission to transform 
                the home services industry.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-poster font-bold text-anthracite mb-12">
                Latest News
              </h2>
              <div className="grid gap-6">
                {pressReleases.map((release, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-anthracite mb-2">
                            {release.title}
                          </h3>
                          <div className="flex items-center gap-3 text-sm text-anthracite/70">
                            <span>{release.date}</span>
                            <Badge variant="secondary">{release.source}</Badge>
                          </div>
                        </div>
                        <a
                          href={release.link}
                          className="text-yellow-600 hover:text-yellow-700 mt-4 md:mt-0"
                        >
                          Read More →
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-poster font-bold text-anthracite mb-6">
                Media Contact
              </h2>
              <p className="text-lg text-anthracite/80 mb-4">
                For press inquiries, please contact our media relations team:
              </p>
              <p className="text-yellow-600">press@yellopago.com</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Press;
