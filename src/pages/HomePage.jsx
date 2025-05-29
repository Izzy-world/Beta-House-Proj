import React from 'react';
import HeaderSection from '../components/HeaderSection';
import PropertyListings from '../components/PropertyListings';
import PopularProperties from '../components/PopularProperties';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 overflow-x-hidden">
      <HeaderSection />
      
      <main className="flex-grow">
        <PropertyListings />
        <PopularProperties />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;