import React from "react";
import FooterLogo from "../assets/footer-bh-icon.svg";
import LocationIcon from "../assets/footer-location-icon.svg";
import PhoneIcon from "../assets/telephone-icon.svg";
import MailIcon from "../assets/mail-icon.svg";

const Footer = () => {
  return (
    <footer className="bg-[#035A33] text-[#FFFFFF] py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          {/* Brand Info */}
          <div className="max-w-md">
            <div className="flex items-center mb-4">
              <img src={FooterLogo} alt="Betahouse Logo" className="h-8 mr-2" />
              <h2 className="text-2xl font-Poppins text-[#FFFFFF]">Betahouse</h2>
            </div>
            <p className="mb-6 text-[#FFFFFF] text-opacity-90">
              Discover, rent, and find your ideal home hassle-free with Betahouse. 
              Take control of your rental journey today!
            </p>
            <div className="space-y-3 text-[#FFFFFF] text-opacity-90">
              <div className="flex items-start">
                <img src={LocationIcon} alt="Location" className="h-5 w-5 mt-1 mr-3" />
                <p>95 Tinklu Estate, LeMt, Lagos</p>
              </div>
              <div className="flex items-center">
                <img src={PhoneIcon} alt="Phone" className="h-5 w-5 mr-3" />
                <p>+234 675 8935 675</p>
              </div>
              <div className="flex items-center">
                <img src={MailIcon} alt="Email" className="h-5 w-5 mr-3" />
                <p>support@rentbetahouse.com</p>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-Outfit text-[#FFFFFF]">Quick Links</h3>
              <div className="space-y-2 text-[#FFFFFF] text-opacity-90">
                <a href="#" className="block hover:underline">Home</a>
                <a href="#" className="block hover:underline">Properties</a>
                <a href="#" className="block hover:underline">About</a>
                <a href="#" className="block hover:underline">Contact us</a>
                <a href="#" className="block hover:underline">Blog</a>
              </div>
            </div>

            {/* More Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-Outfit text-[#FFFFFF] text-opacity-90 ">More</h3>
              <div className="space-y-2 ">
                <a href="#" className="block hover:underline">Agents</a>
                <a href="#" className="block hover:underline">Affordable Houses</a>
                <a href="#" className="block hover:underline">FAQ's</a>
              </div>
            </div>

            {/* Popular Search */}
            <div className="space-y-4">
              <h3 className="text-xl font-Outfit">Popular Search</h3>
              <div className="space-y-2 ">
                <a href="#" className="block hover:underline">Apartment for sale</a>
                <a href="#" className="block hover:underline">Apartment for rent</a>
                <a href="#" className="block hover:underline">3 bedroom flat</a>
                <a href="#" className="block hover:underline">Bungalow</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright - Left */}
          <div className="text-sm mb-4 md:mb-0 text-opacity-90">
            Copyright © {new Date().getFullYear()} Betahouse | Designed by Michael fig
          </div>
          
          {/* Privacy Policy - Right */}
          <div className="text-sm text-opacity-90">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="/terms" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;