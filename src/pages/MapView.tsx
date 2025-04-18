
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const MapView = () => {
  const [searchParams] = useSearchParams();
  const location = searchParams.get('location');
  const providerId = searchParams.get('provider');
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <Button variant="ghost" className="mb-2" asChild>
                <Link to={-1 as any}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Link>
              </Button>
              <h1 className="text-2xl font-bold">
                {location ? `Map View: ${location}` : providerId ? `Provider Service Area` : 'Map View'}
              </h1>
              <p className="text-gray-600">
                {location ? 
                  `Showing service providers near ${location}` : 
                  providerId ? 
                  `Showing service area for provider #${providerId}` : 
                  'Interactive map view'}
              </p>
            </div>
          </div>

          {/* Map Placeholder - In a real application, this would be an interactive map component */}
          <div className="bg-gray-100 border border-gray-200 rounded-xl h-[70vh] w-full flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-medium mb-2">Interactive Map</h3>
              <p className="text-gray-600 max-w-md mx-auto mb-4">
                This would be an interactive map showing the selected location or service provider area.
              </p>
              <p className="text-sm text-gray-500">
                Location: {location || 'Not specified'}<br />
                Provider ID: {providerId || 'Not specified'}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MapView;
