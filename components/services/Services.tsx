// "use client";

// import { motion } from "framer-motion";
// import { FaBalanceScale, FaChartLine, FaCoins, FaShieldAlt, FaFileInvoiceDollar } from "react-icons/fa";

// const services = [
//   { title: "Auditing", description: "Comprehensive financial audits ensuring compliance and accuracy.", icon: <FaBalanceScale size={40} aria-hidden="true" /> },
//   { title: "Tax Planning", description: "Strategic tax solutions to optimize your savings.", icon: <FaFileInvoiceDollar size={40} aria-hidden="true" /> },
//   { title: "Investment Advisory", description: "Personalized investment strategies for long-term growth.", icon: <FaChartLine size={40} aria-hidden="true" /> },
//   { title: "Risk Management", description: "Identifying and mitigating financial risks effectively.", icon: <FaShieldAlt size={40} aria-hidden="true" /> },
//   { title: "Financial Consulting", description: "Expert financial advice to grow and secure your wealth.", icon: <FaCoins size={40} aria-hidden="true" /> },
// ];

// const Services = () => {
//   return (
//     <div className="h-auto w-screen z-[50] dark:text-white/70 dark:bg-dark  text-black bg-primary font-inter px-6 md:px-12 lg:px-24 py-12 flex flex-col items-center">
      
//       {/* Heading */}
//       <h2 className="text-3xl font-bold text-center mb-8 dark:text-white text-gray-900">
//         Our Financial Services
//       </h2>

//       {/* Services Grid */}
//       <div className="w-full dark:text-white text-gray-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8">
//         {services.map((service, index) => (
//           <motion.div
//             key={index}
//             className="p-6 bg-secondary border bg-gray-900 dark:text-white text-gray-900 border-gray-300 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: index * 0.15 }}
//           >
//             <div className="text-white mb-4">{service.icon}</div>
//             <h3 className="text-xl text-white font-semibold">{service.title}</h3>
//             <p className="mt-2 text-gray-200 text-md">{service.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;



"use client";

import { motion } from "framer-motion";
import { FaBalanceScale, FaChartLine, FaCoins, FaShieldAlt, FaFileInvoiceDollar } from "react-icons/fa";

const services = [
  { title: "Auditing", description: "Comprehensive financial audits ensuring compliance and accuracy.", icon: <FaBalanceScale size={40} aria-hidden="true" /> },
  { title: "Tax Planning", description: "Strategic tax solutions to optimize your savings.", icon: <FaFileInvoiceDollar size={40} aria-hidden="true" /> },
  { title: "Investment Advisory", description: "Personalized investment strategies for long-term growth.", icon: <FaChartLine size={40} aria-hidden="true" /> },
  { title: "Risk Management", description: "Identifying and mitigating financial risks effectively.", icon: <FaShieldAlt size={40} aria-hidden="true" /> },
  { title: "Financial Consulting", description: "Expert financial advice to grow and secure your wealth.", icon: <FaCoins size={40} aria-hidden="true" /> },
];

const Services = () => {
  return (
    <div className="h-auto w-screen z-[50] dark:text-white/70  text-black dark:bg-primary  bg-white font-inter px-6 md:px-12 lg:px-24 py-12 flex flex-col items-center">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white/70   text-gray-900">
        Our Financial Services
      </h2>

      {/* Services Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 dark:bg-gray-900 border border-gray-600 bg-gray-200  rounded shadow  flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
          >
            <div className="dark:text-white/70 text-black mb-4">{service.icon}</div>
            <h3 className="text-xl dark:text-white/70   text-black font-semibold">{service.title}</h3>
            <p className="mt-2 dark:text-gray-300 text-gray-700 text-md">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;

