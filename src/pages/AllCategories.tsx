import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    title: "Plumbing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v5"></path>
        <path d="M6 7h12"></path>
        <path d="M12 22v-3"></path>
        <path d="M6 14V7.5c0-1 .5-2 2-2"></path>
        <path d="M18 14V7.5c0-1-.5-2-2-2"></path>
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
        <path d="M12 14v2"></path>
        <path d="M6 18h12"></path>
        <path d="M6 22h12"></path>
      </svg>
    ),
    description: "Repairs, installations & maintenance",
  },
  {
    id: 2,
    title: "Electrical",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 3v2"></path>
        <path d="M16 3v2"></path>
        <path d="M12 9v6"></path>
        <path d="m9 12 3-3 3 3"></path>
        <rect width="16" height="12" x="4" y="7" rx="2"></rect>
        <path d="m2 19 4-4"></path>
        <path d="m22 19-4-4"></path>
      </svg>
    ),
    description: "Wiring, lighting & safety inspections",
  },
  {
    id: 3,
    title: "Landscaping",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
        <path d="M7 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
        <path d="M17 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
        <path d="M17 8v3a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2Z"></path>
        <path d="M12 6V2"></path>
        <path d="m15 5-3 1-3-1"></path>
      </svg>
    ),
    description: "Garden design, lawn care & maintenance",
  },
  {
    id: 4,
    title: "Cleaning",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18"></path>
        <path d="M7 17v-5h.01"></path>
        <path d="M11 17v-9h.01"></path>
        <path d="M15 17v-3h.01"></path>
        <path d="M19 17v-7h.01"></path>
      </svg>
    ),
    description: "Regular, deep & specialized cleaning",
  },
  {
    id: 5,
    title: "Painting",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m2 22 1-1h3l9-9"></path>
        <path d="M3 21v-3l9-9"></path>
        <path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4z"></path>
      </svg>
    ),
    description: "Interior & exterior painting services",
  },
  {
    id: 6,
    title: "HVAC",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 17h18a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2Z"></path>
        <path d="M2 8h18a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2Z"></path>
        <path d="M19 8v7"></path>
        <path d="M5 8v7"></path>
      </svg>
    ),
    description: "Heating, cooling & ventilation systems",
  },
  {
    id: 7,
    title: "Carpentry",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 2v5h5"></path>
        <path d="M21 6v6.5a3.5 3.5 0 0 1-3.5 3.5H14"></path>
        <path d="M8 2v5H3"></path>
        <path d="M3 6v6.5A3.5 3.5 0 0 0 6.5 16H10"></path>
        <path d="M18 20l-6-6"></path>
        <path d="m9 11 6 6"></path>
      </svg>
    ),
    description: "Custom woodworking & repairs",
  },
  {
    id: 8,
    title: "Roofing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
    description: "Installation, repair & maintenance",
  },
];

const AllCategories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="font-poster text-4xl md:text-5xl text-anthracite font-bold mb-4">
              All Service Categories
            </h1>
            <p className="text-lg text-anthracite-light opacity-80 max-w-2xl mx-auto mb-8">
              Browse through our comprehensive list of professional services
            </p>
            
            <div className="relative max-w-xl mx-auto mb-12">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search categories..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.id}
                to={`/category/${category.title.toLowerCase()}`}
                className="block"
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:border-yellow-300 cursor-pointer h-full">
                  <CardContent className="flex flex-col items-center justify-center text-center p-6">
                    <div className="bg-yellow-50 rounded-full p-4 mb-4 text-yellow-600">
                      {category.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-500">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllCategories;
