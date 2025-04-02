"use client";

import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$199/month",
      description: "The perfect plan for small businesses.",
      features: ["Tax Consultation", "Basic Accounting", "GST Filing"],
      accentColor: "text-indigo-600",
      buttonColor: "bg-indigo-500 hover:bg-indigo-400",
    },
    {
      name: "Standard",
      price: "$399/month",
      description: "For growing businesses with more needs.",
      features: [
        "Tax Consultation",
        "Advanced Accounting",
        "GST & IT Filing",
        "Financial Reporting",
      ],
      accentColor: "text-emerald-600",
      buttonColor: "bg-emerald-500 hover:bg-emerald-400",
    },
    {
      name: "Premium",
      price: "$799/month",
      description: "For large businesses that require advanced features.",
      features: [
        "All Standard Features",
        "Auditing & Compliance",
        "Dedicated Financial Advisor",
        "Business Tax Planning",
      ],
      accentColor: "text-amber-600",
      buttonColor: "bg-amber-500 hover:bg-amber-400",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-6 py-12 md:px-12 lg:px-24 dark:bg-gray-900  bg-gray-50 font-inter overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white"
        >
          Pricing Plans
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl"
        >
          Choose a plan that fits your business needs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg dark:shadow-gray-800/20 transition-all duration-300`}
            >
              <div className="flex flex-col h-full">
                <h3 className={`text-lg font-semibold ${plan.accentColor}`}>
                  {plan.name}
                </h3>
                <p className="mt-2 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price.split("/")[0]}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    /{plan.price.split("/")[1]}
                  </span>
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {plan.description}
                </p>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className={`h-5 w-5 flex-none mt-0.5 ${plan.accentColor}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-2 text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`mt-8 w-full py-3 px-6 rounded-lg text-white font-medium ${plan.buttonColor} transition-colors`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Pricing;