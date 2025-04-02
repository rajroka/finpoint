"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Text Content - Left Side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col items-start space-y-6 md:space-y-8"
          >
            <h1 className="text-5xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter">
              <span className="bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent">
                Elevate Your Finances
              </span>
              <br />
              <span className="text-gray-800 dark:text-gray-200">With Expert Guidance</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
              Unlock financial success with our <span className="font-semibold text-purple-800 dark:text-purple-400">comprehensive services</span>, including Audit & Assurance, Taxation, VAT Consultancy, Risk Management, and Accounting Services. Ensure compliance and drive financial growth today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-gradient-to-r from-purple-800 to-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Free Consultation
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 border-2 border-purple-800 dark:border-purple-400 text-purple-800 dark:text-purple-400 text-lg font-semibold rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900 transition-all duration-300"
              >
                Our Services
              </motion.button>
            </div>
          </motion.div>
          
          {/* Image Content - Right Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-xl aspect-square">
              <Image
                src="/images/finpoint.png"
                alt="Expert Financial Consulting Services"
                fill
                priority
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Floating Objects */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-60    bottom-20  hidden lg:block"
        >
          <div className=" bg-white/60 backdrop-blur-sm  dark:bg-gray-800/70  p-4 rounded-xl shadow-lg border border-purple-200  dark:border-gray-700 w-48">
            <p className="text-sm text-gray-700 dark:text-gray-300">Secure financial solutions</p>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-10 top-16 hidden lg:block"
        >
          <div className="bg-white/70 backdrop-blur-sm dark:bg-gray-800/70  p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 w-48">
            <p className="text-sm text-gray-700 dark:text-gray-300">Expert Financial Advisors</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
