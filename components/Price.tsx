"use client";

import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$199/month",
      features: ["Tax Consultation", "Basic Accounting", "GST Filing"],
    },
    {
      name: "Standard",
      price: "$399/month",
      features: [
        "Tax Consultation",
        "Advanced Accounting",
        "GST & IT Filing",
        "Financial Reporting",
      ],
    },
    {
      name: "Premium",
      price: "$799/month",
      features: [
        "All Standard Features",
        "Auditing & Compliance",
        "Dedicated Financial Advisor",
        "Business Tax Planning",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen h-auto px-6 md:px-12 lg:px-24  dark:bg-primary dark:text-white  font-inter flex flex-col items-center justify-center  p-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-bold mb-6 text-gray-800 dark:text-white/70 "  
      >
        Pricing Plans
      </motion.h1>
      <p className="text-lg text-gray-600 dark:text-white/70  mb-12">
        Choose a plan that fits your business needs.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl w-full">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="bg-gray-200 dark:bg-gray-900 border border-gray-600  shadow-lg backdrop-blur-sm rounded p-6 text-center transform transition-all hover:scale-105"
          >
            <h2 className=" text-black  dark:text-white/70  text-2xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-lg font-semibold dark:text-white/70 text-black  ">{plan.price}</p>
            <ul className="mt-4 space-y-2 dark:text-white/70 text-black  text-base  text-start   mx-auto  ">
              {plan.features.map((feature, idx) => (
                <li key={idx}>✅ {feature}</li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-2 dark:text-white/70   text-black text-base shadow-xl float hover:text-white   rounded-lg bg-purple-700  transition"
            >
              Get Started
            </motion.button>
          </motion.div>
        ))}
      </div>

     
    </motion.div>
  );
};

export default Pricing;
