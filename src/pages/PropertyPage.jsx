import React from 'react';
import HeaderSection from '../components/HeaderSection';
import Footer from '../components/Footer';
import PropertyListings from '../components/PropertyListings';

const PropertyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
      <HeaderSection />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold font-Outfit text-gray-800 mb-6 md:text-center">Our Properties!</h1>
        <p className="text-gray-600 mb-8 md:text-center">
          Browse through our selection of available properties.
        </p>
        
        <PropertyListings />
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyPage;