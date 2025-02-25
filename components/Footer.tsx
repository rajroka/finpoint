import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary   font-inter  text-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          
          {/* Logo / Brand */}
          <div className="text-2xl font-bold text-blue-500 mb-4 lg:mb-0">
            <span>FinPoint</span> <span className="text-white">Consulting</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-12 text-gray-400">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-4 lg:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-white">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2025 FinPoint Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
