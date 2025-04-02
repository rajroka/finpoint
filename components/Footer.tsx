"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 font-inter py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          {/* Logo / Brand */}
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 md:mb-0">
            <span>FinPoint</span> <span className="text-gray-800 dark:text-white">Consulting</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-gray-600 dark:text-gray-400">
            <a href="#home" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
              Home
            </a>
            <a href="#services" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
              Services
            </a>
            <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
              About
            </a>
            <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
              Contact
            </a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 dark:hover:text-blue-300 transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700 dark:hover:text-blue-500 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 dark:hover:text-pink-400 transition">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} FinPoint Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
