import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background-img.svg";
import { useAuth } from "../context/AuthContext";

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <div 
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}
    >
      <div className="absolute inset-0 bg-opacity-40"></div>
      
      <nav className="relative z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              BH Betahouse
            </Link>

            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/" className="text-white hover:text-green-300 transition-colors">
                Home
              </Link>
              <Link to="/properties" className="text-white hover:text-green-300">
                Properties
              </Link>
              <Link to="/about" className="text-white hover:text-green-300">
                About Us
              </Link>
              <Link to="/blog" className="text-white hover:text-green-300">
                Blog
              </Link>
              <Link to="/contact" className="text-white hover:text-green-300">
                Contact Us
              </Link>
              
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link 
                    to="/dashboard" 
                    className="text-white hover:text-green-300"
                  >
                    Welcome, {user.firstName}
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/signup" className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                    Sign Up
                  </Link>
                  <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    Login
                  </Link>
                </>
              )}
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-black bg-opacity-90 rounded-lg p-4">
              <div className="flex flex-col space-y-3">
                <Link to="/" className="text-white hover:text-green-400" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/properties" className="text-white hover:text-green-400" onClick={() => setIsMenuOpen(false)}>
                  Properties
                </Link>
                <Link to="/about" className="text-white hover:text-green-400" onClick={() => setIsMenuOpen(false)}>
                  About Us
                </Link>
                <Link to="/blog" className="text-white hover:text-green-400" onClick={() => setIsMenuOpen(false)}>
                  Blog
                </Link>
                <Link to="/contact" className="text-white hover:text-green-400" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </Link>
                
                {user ? (
                  <div className="flex flex-col space-y-3 pt-2">
                    <Link 
                      to="/dashboard" 
                      className="text-white text-center hover:text-green-400"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Welcome, {user.firstName}
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex space-x-3 pt-2">
                    <Link 
                      to="/signup" 
                      className="flex-1 text-center bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                    <Link 
                      to="/login" 
                      className="flex-1 text-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="relative z-10 pb-20 pt-32 md:pt-48">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white pt-16 md:pt-24">
            <h1 className="text-4xl md:text-5xl font-bold font-Outfit mb-6 md:mb-8 leading-[140%]">
              Browse Our Properties
            </h1>
            <p className="text-lg mb-12 md:mb-16 text-[26px] font-normal leading-[160%]">
              Find your perfect home among our curated properties. Start browsing now!
            </p>
          </div>

          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-xl max-w-4xl mx-auto mt-0 md:mt-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">LOCATION</label>
                <input
                  type="text"
                  placeholder="eg, Gbogodo"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-600"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">PROPERTY TYPE</label>
                <input
                  type="text"
                  placeholder="eg, Duplex, Bedroom Flat"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">BEDROOM</label>
                <input
                  type="text"
                  placeholder="eg, 3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600"
                />
              </div>
              
              <div className="flex items-end">
                <button className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors">
                  Find Property
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeaderSection;