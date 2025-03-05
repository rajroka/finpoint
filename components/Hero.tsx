"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="w-screen h-auto  min-h-[calc(100svh)] font-inter px-6 md:px-12 lg:px-24 dark:bg-primary text-black   dark:text-white/70  flex items-center">
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between">
        
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 w-full flex flex-col justify-center space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black/90 dark:text-white/70   ">
            Elevate Your Finances with Expert Guidance
          </h1>
          <p className="text-base  text-gray-600 dark:text-white/60   leading-relaxed">
            Unlock financial success with our **Audit & Assurance, Taxation, VAT Consultancy, 
            Risk Management, and Accounting Services**. <br /> Ensure compliance and financial growth today.
          </p>
          <button className=" inline-block  bg-purple-800 text-white   dark:text-white/70  px-8 py-3 rounded  shadow-lg  transition text-lg font-semibold">
            Get a Free Consultation
          </button>
          
        </motion.div>
         
        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 w-full flex justify-center items-center"
        >
          <Image
            src="/images/finpoint.png"
            alt="Expert Financial Consulting Services"
            width={500}
            height={500}
            className="object-contain drop-shadow-lg"
          />
        </motion.div>
        
      </div>
    </div>
  );
};

export default Hero;
