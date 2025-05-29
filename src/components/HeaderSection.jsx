import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiChevronDown, FiLogOut } from "react-icons/fi";
import backgroundImage from "../assets/background-img.svg";

const UserDropdown = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-white hover:text-green-300 focus:outline-none"
      >
        <span>Hi, {user.firstName}</span>
        <FiChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          <button
            onClick={onLogout}
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            <FiLogOut className="mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowLogoutModal(false);
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
      
      <div className="absolute inset-0  bg-opacity-40"></div>
      
      {/* Navbar */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left - Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-[#3D9970] w-10 h-10 rounded-full flex items-center justify-center font-bold text-[#FFFFFF]">
                BH
              </div>
              <span className="text-xl font-poppins font-[500] text-white">
                BetaHouse
              </span>
            </div>

            {/* Center - Nav Links (Desktop) */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-8">
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
              </div>
            </div>

            {/* Right - Auth Buttons (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <UserDropdown 
                  user={user} 
                  onLogout={() => setShowLogoutModal(true)} 
                />
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

            {/* Mobile Menu Button */}
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

          {/* Mobile Menu Content */}
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
                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-white mb-2">Welcome, {user.firstName}</p>
                    <button 
                      onClick={() => {
                        setShowLogoutModal(true);
                        setIsMenuOpen(false);
                      }}
                      className="w-full bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex space-x-3 pt-4 border-t border-gray-700">
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
      </div>

      {/* Hero Section */}
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

          {/* Search Form */}
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

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Logout</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderSection;