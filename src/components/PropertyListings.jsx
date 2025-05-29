import React, { useState } from "react";
import { Link } from "react-router-dom";
import FilterIcon from "../assets/filter-icon.svg";
import SortIcon from "../assets/drop-down-icon.svg";
import ChevronLeftIcon from "../assets/pagleft-icon.svg";
import ChevronRightIcon from "../assets/pagright-icon.svg";
import LocationIcon from "../assets/location-icon.svg";
import BedIcon from "../assets/bedroom-icon.svg";
import BathIcon from "../assets/bathroom-icon.svg";
import DoubleZeroIcon from "../assets/double-0-icon.svg";
import VideoIcon from "../assets/video-icon.svg";
import ImageIcon from "../assets/image-icon.svg";
import DoubleArrowIcon from "../assets/double-arr-icon.svg";
import ShareIcon from "../assets/share-icon.svg";
import HeartIcon from "../assets/heart-icon.svg";
import urlImage from "../assets/image-3.svg";

const PropertyListings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const properties = [
    {
      id: 1,
      title: "Real House Luxury Villa",
      location: "Victoria Island, Lagos",
      bedrooms: 6,
      bathrooms: 3,
      price: "$ 3,340,000,000",
      rate: "$ 4,000,000/1 Year",
      tags: ["Featured", "For Sale"],
      imageUrl: "https://res.cloudinary.com/dqg7g2qjr/image/upload/v1748355285/image-1_m7nnqj.svg",
      imageIcons: ["double-zero", "video", "image"]
    },
    {
      id: 2,
      title: "Exquisite Haven Villa",
      location: "Festac, Lagos",
      bedrooms: 5,
      bathrooms: 3,
      price: "$ 4,000,000/1 Year",
      tags: ["Featured", "For Rent"],
      imageUrl: "https://res.cloudinary.com/dqg7g2qjr/image/upload/v1748355288/image-2_plymd2.svg",
      imageIcons: ["double-zero", "video", "image"]
    },
    {
      id: 3,
      title: "Luxe Palatial Villa",
      location: "Gbagada, Lagos",
      bedrooms: 7,
      bathrooms: 3,
      price: "$ 5,350,000,000",
      tags: ["Featured", "For Sale"],
      imageUrl: urlImage,
      imageIcons: ["double-zero", "video", "image"]
    },
     {
      id: 4,
      title: "Harmony Luxury Villa",
      location: "Mushin, Lagos",
      bedrooms: 4,
      bathrooms: 3,
      price: "$ 4,000,000/1 Year",
      tags: ["Featured", "For Rent"],
      imageUrl: "https://res.cloudinary.com/dqg7g2qjr/image/upload/v1748355317/image-4_l6jeft.svg",
      imageIcons: ["double-zero", "video", "image"]
    },
    {
      id: 5,
      title: "Real House Luxury Villa",
      location: "Victoria Island, Lagos",
      bedrooms: 6,
      bathrooms: 4,
      price: "$ 350,000,000",
      tags: ["Featured", "For Rent"],
      imageUrl: "https://res.cloudinary.com/dqg7g2qjr/image/upload/v1748355292/image-5_wfe5rw.svg",
      imageIcons: ["double-zero", "video", "image"]
    },
    {
      id: 6,
      title: "Real House Luxury Villa",
      location: "Lekki Ajah, Lagos",
      bedrooms: 5,
      bathrooms: 3,
      price: "$ 4,200,000/1 Year",
      tags: ["Featured", "For Sale"],
      imageUrl: "https://res.cloudinary.com/dqg7g2qjr/image/upload/v1748355288/image-6_nsa9te.svg",
      imageIcons: ["double-zero", "video", "image"]
    },
    {
      id: 7,
      title: "Infinite Bliss Villa",
      location: "Ishiagu, Enugu",
      bedrooms: 5,
      bathrooms: 3,
      price: "$ 2,350,000,000",
      tags: ["Featured", "For Sale"],
      imageUrl: "https://res.cloudinary.com/dqg7g2qjr/image/upload/v1748355283/image-7_l61fwk.svg",
      imageIcons: ["double-zero", "video", "image"]
    },
    {
      id: 8,
      title: "Real House Luxury Villa",
      location: "Works Layout, Owerri",
      bedrooms: 8,
      bathrooms: 6,
      price: "$ 3,350,000/1 Year",
      tags: ["Featured", "For Rent"],
      imageUrl: "https://res.cloudinary.com/dqg7g2qjr/image/upload/v1748355285/image-8_oxc4qa.svg",
      imageIcons: ["double-zero", "video", "image"]
    },
    {
      id: 9,
      title: "Real House Luxury Villa",
      location: "Ikeja, lagos",
      bedrooms: 6,
      bathrooms: 6,
      price: "$ 600,000,000",
      tags: ["Featured", "For Sale"],
      imageUrl: "https://res.cloudinary.com/dqg7g2qjr/image/upload/v1748355288/image-9_ymdxs1.svg",
      imageIcons: ["double-zero", "video", "image"]
    },
  ];

  return (
    <section className="py-12 bg-[#FFFFFF]">
      <div className="container mx-auto px-6 md:px-30">
        {/* Filter Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-700 hover:text-[#3D9970] transition-colors">
              <img src={FilterIcon} alt="Filter" className="w-5 h-5 mr-2" />
              More Filter
            </button>
            <span className="text-[#181A20]">Showing 1 - 10 of 15 results</span>
          </div>
          
          <div className="flex items-center">
            
            <span className="text-gray-700">Sort by: Default</span>
            <img src={SortIcon} alt="Sort" className="w-5 h-5 mr-2 pl-2" />
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Property Image */}
              <div className="relative h-64">
  {/* Property Image */}
  <img 
    src={property.imageUrl} 
    alt={property.title}
    className="w-full h-full object-cover"
  />
  
  {/* Featured Tag - Top Left */}
  {property.tags.includes("Featured") && (
    <div className="absolute top-4 left-4">
      <span className="px-3 py-1 rounded-full bg-[#3D9970] text-white text-xs font-semibold">
        Featured
      </span>
    </div>
  )}
  
  {/* For Rent/Sale Tag - Top Right */}
  {property.tags.includes("For Rent") && (
    <div className="absolute top-4 right-4">
      <span className="px-3 py-1 rounded-full bg-[#D3D3D3] text-[#FFFFFF] text-xs font-semibold">
        For Rent
      </span>
    </div>
  )}
  {property.tags.includes("For Sale") && (
    <div className="absolute top-4 right-4">
      <span className="px-3 py-1 rounded-full bg-[#D3D3D3] text-[#FFFFFF] text-xs font-semibold">
        For Sale
      </span>
    </div>
  )}
                
                {/* Image Icons - Bottom Right */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
  {property.imageIcons.map((icon) => {
    switch(icon) {
      case "double-zero":
        return (
          <div key="double-zero" className="bg-[#878787] bg-opacity-90 p-2 rounded-lg shadow-sm">
            <img src={DoubleZeroIcon} alt="00" className="w-5 h-5" />
          </div>
        );
      case "video":
        return (
          <div key="video" className="bg-[#878787] bg-opacity-90 p-2 rounded-lg shadow-sm">
            <img src={VideoIcon} alt="Video" className="w-5 h-5" />
          </div>
        );
      case "image":
        return (
          <div key="image" className="bg-[#878787] bg-opacity-90 p-2 rounded-lg shadow-sm">
            <img src={ImageIcon} alt="Images" className="w-5 h-5" />
          </div>
        );
      default:
        return null;
    }
  })}
</div>
              </div>
              
              {/* Property Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{property.title}</h3>
                
                {/* Location */}
                <div className="flex items-center text-gray-600 mb-4">
                  <img src={LocationIcon} alt="Location" className="w-5 h-5 mr-2" />
                  <span>{property.location}</span>
                </div>
                
                {/* Bedrooms & Bathrooms */}
                <div className="flex space-x-6 mb-4">
                  <div className="flex items-center text-gray-600">
                    <img src={BedIcon} alt="Bedrooms" className="w-5 h-5 mr-2" />
                    <span>{property.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <img src={BathIcon} alt="Bathrooms" className="w-5 h-5 mr-2" />
                    <span>{property.bathrooms} Bathrooms</span>
                  </div>
                </div>
                
                {/* Divider */}
                <div className="border-t border-gray-200 my-4"></div>
                
                {/* Price & Action Icons */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800">
                    {property.price}
                    {property.rate && (
                      <span className="block text-sm font-normal text-gray-600">{property.rate}</span>
                    )}
                  </span>
                  <div className="flex space-x-3">
                    <button className="text-gray-500 hover:text-blue-500 transition-colors">
                      <img src={DoubleArrowIcon} alt="Compare" className="w-5 h-5" />
                    </button>
                    <button className="text-gray-500 hover:text-blue-500 transition-colors">
                      <img src={ShareIcon} alt="Share" className="w-5 h-5" />
                    </button>
                    <button className="text-gray-500 hover:text-red-500 transition-colors">
                      <img src={HeartIcon} alt="Favorite" className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
          >
            <img src={ChevronLeftIcon} alt="Previous" className="w-5 h-5" />
          </button>
          
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentPage === index + 1 
                  ? 'bg-[#3D9970] text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              } transition-colors`}
            >
              {index + 1}
            </button>
          ))}
          
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
          >
            <img src={ChevronRightIcon} alt="Next" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;