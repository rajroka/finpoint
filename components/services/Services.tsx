"use client";

import { motion } from "framer-motion";
import { FaBalanceScale, FaChartLine, FaCoins, FaShieldAlt, FaFileInvoiceDollar } from "react-icons/fa";
import Image from "next/image";

const services = [
  { title: "Auditing", description: "Comprehensive financial audits ensuring compliance and accuracy.", icon: <FaBalanceScale size={40} /> },
  { title: "Tax Planning", description: "Strategic tax solutions to optimize your savings.", icon: <FaFileInvoiceDollar size={40} /> },
  { title: "Investment Advisory", description: "Personalized investment strategies for long-term growth.", icon: <FaChartLine size={40} /> },
  { title: "Risk Management", description: "Identifying and mitigating financial risks effectively.", icon: <FaShieldAlt size={40} /> },
  { title: "Financial Consulting", description: "Expert financial advice to grow and secure your wealth.", icon: <FaCoins size={40} /> },
];

const Services = () => {
  return (
    <div className="h-auto w-full  bg-primary  font-inter px-6 md:px-12 lg:px-24 py-12 flex flex-col items-center">

      {/* Logo Section */}
      {/* <div className="w-32 h-32 mb-4">
        <Image src="/images/logo.png" alt="Company Logo" width={128} height={128} />
      </div> */}

      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Financial Services</h2>

      {/* Services Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-secondary  border border-gray-300  rounded-lg shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="text-white mb-4">{service.icon}</div>
            <h3 className="text-xl text-white  font-semibold">{service.title}</h3>
            <p className="mt-2 text-white text-md  ">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
