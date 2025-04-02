"use client";

import { motion } from "framer-motion";
import { FaBalanceScale, FaChartLine, FaCoins, FaShieldAlt, FaFileInvoiceDollar } from "react-icons/fa";

const services = [
  { 
    title: "Auditing", 
    description: "Comprehensive financial audits ensuring compliance and accuracy.", 
    icon: <FaBalanceScale />,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    borderColor: "border-purple-500"
  },
  { 
    title: "Tax Planning", 
    description: "Strategic tax solutions to optimize your savings.", 
    icon: <FaFileInvoiceDollar />,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    borderColor: "border-blue-500"
  },
  { 
    title: "Investment Advisory", 
    description: "Personalized investment strategies for long-term growth.", 
    icon: <FaChartLine />,
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
    borderColor: "border-emerald-500"
  },
  { 
    title: "Risk Management", 
    description: "Identifying and mitigating financial risks effectively.", 
    icon: <FaShieldAlt />,
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-100 dark:bg-amber-900/30",
    borderColor: "border-amber-500"
  },
  { 
    title: "Financial Consulting", 
    description: "Expert financial advice to grow and secure your wealth.", 
    icon: <FaCoins />,
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
    borderColor: "border-indigo-500"
  },
];

const Services = () => {
  return (
    <motion.div 
      className="w-full z-[50] dark:bg-gray-900 bg-gray-50 font-inter px-6 md:px-12 lg:px-24 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 dark:text-white text-gray-900"
            whileHover={{ scale: 1.02 }}
          >
            Our Financial Services
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Comprehensive solutions tailored to your financial needs
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={` p-2 md:p-4  lg:p-6 rounded-xl ${service.bgColor}  ${service.borderColor} shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.15
              }}
            >
              <motion.div
                className={` rounded-full ${service.bgColor} ${service.color} text-4xl mb-6 transition-all duration-300`}
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                {service.icon}
              </motion.div>
              <h3 className={`text-xl font-bold mb-3 ${service.color}`}>{service.title}</h3>
              <p className="text-lg dark:text-gray-300 text-gray-700">{service.description}</p>
              
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;