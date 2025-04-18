
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ServiceSearch = () => {
  const [searchParams] = useSearchParams();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-condensed mb-6">
            Service Providers Near You
          </h1>
          {/* Search results content will go here */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-lg text-anthracite/60">
              Showing results for: {searchParams.get('service') || 'All Services'} in {searchParams.get('location') || 'All Locations'}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceSearch;
