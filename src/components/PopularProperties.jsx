import React, { useState } from "react";
import LeftArrowIcon from "../assets/navleft-arrow.svg";
import RightArrowIcon from "../assets/navright-arrow.svg";
import LocationIcon from "../assets/location-icon-small.svg";

const PopularProperties = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const popularProperties = [
    {
      id: 1,
      title: "Semi Detached Duplex",
      price: "N1,430,000,000",
      details: "6 Bed 8 Bath 720 sq ft",
      location: "Victoria Island, Lagos",
      imageUrl: "https://res.cloudinary.com/dqg7g2qjr/image/upload/v1748367909/popular-image-1_hfwqfn.svg" 
    },
    {
      id: 2,
      title: "Special Duplex",
      price: "N670,000,000",
      details: "6 Bed 8 Bath 720 sq ft",
      location: "Victoria Island, Lagos",
      imageUrl: "https://res.cloudinary.com/dqg7g2qjr/image/upload/v1748367916/popular-image-2_lqgxc4.svg" 
    },
    {
      id: 3,
      title: "Slit-level House",
      price: "N340,000,000",
      details: "6 Bed 8 Bath 720 sq ft",
      location: "Victoria Island, Lagos",
      imageUrl: "https://res.cloudinary.com/dqg7g2qjr/image/upload/v1748367910/popular-image-3_xalmur.svg" 
    },
    {
      id: 4,
      title: "Twin Duplex",
      price: "N290,000,000",
      details: "6 Bed 8 Bath 720 sq ft",
      location: "Victoria Island, Lagos",
      imageUrl: "https://res.cloudinary.com/dqg7g2qjr/image/upload/v1748367916/popular-image-4_xnd13c.svg"
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % popularProperties.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + popularProperties.length) % popularProperties.length);

  return (
  <section className="py-16 bg-[#FFFFFF]">
      <div className="container mx-auto px-6 md:px-30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-Outfit text-[#0F1A1E] mb-4">
            Discover Our Popular Properties
          </h2>
          <div className="w-600 h-1  mx-auto"></div>
        </div>

        <div className="relative">
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#FFFFFF] p-2 rounded-full shadow-md -ml-4">
              <img src={LeftArrowIcon} alt="Previous" className="w-6 h-6" />
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#3D9970] p-2 rounded-full shadow-md  -mr-4">
              <img src={RightArrowIcon} alt="Next" className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProperties.map((property, index) => (
              <div key={property.id} className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-90">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-Outfit text-white mb-1">{property.title}</h3>
                  <p className="text-lg font-Outfit text-white mb-2">{property.price}</p>
                  <p className="text-sm font-Outfit text-gray-200 mb-2">{property.details}</p>
                  <div className="flex items-center text-gray-200 text-sm">
                    <img src={LocationIcon} alt="Location" className="w-4 h-4 mr-1" />
                    <span>{property.location}</span>
                  </div>
                </div>

                {/* Desktop Indicators */}
                {/* {index === currentSlide && (
                  <div className="hidden md:flex absolute bottom-4 left-0 right-0 justify-center space-x-2">
                    {popularProperties.map((_, i) => (
                      <span 
                        key={i} 
                        className={`w-2 h-2 rounded-full ${i === currentSlide ? "bg-blue-600" : "bg-gray-300"}`}
                      />
                    ))}
                  </div>
                )} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProperties;