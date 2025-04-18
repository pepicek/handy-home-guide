
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProjectSearch = () => {
  const [searchParams] = useSearchParams();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-condensed mb-6">
            Multi-Service Project Matches
          </h1>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-lg text-anthracite/60">
              Finding pros for your project: {searchParams.get('description')}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectSearch;
