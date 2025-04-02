import React, { useState, useEffect } from "react";
import { FaUsers, FaProjectDiagram, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

const ClientsHelped = () => {
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [years, setYears] = useState(0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Number animation
  useEffect(() => {
    const animateValue = (start: number, end: number, duration: number, callback: (value: number) => void) => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        callback(value);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    animateValue(0, 200, 1500, setClients);
    animateValue(0, 10, 1000, setProjects);
    animateValue(0, 3, 800, setYears);
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Clients Helped */}
          <motion.div 
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <div className="mb-6 text-blue-500 dark:text-blue-400">
              <FaUsers className="text-4xl" />
            </div>
            <h3 className="text-5xl font-bold text-gray-900 dark:text-white mb-3 font-inter">
              {clients}+
            </h3>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Clients Helped</p>
          </motion.div>

          {/* Projects Running */}
          <motion.div 
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <div className="mb-6 text-green-500 dark:text-green-400">
              <FaProjectDiagram className="text-4xl" />
            </div>
            <h3 className="text-5xl font-bold text-gray-900 dark:text-white mb-3 font-inter">
              {projects}
            </h3>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Projects Running</p>
          </motion.div>

          {/* Years of Experience */}
          <motion.div 
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <div className="mb-6 text-purple-500 dark:text-purple-400">
              <FaClock className="text-4xl" />
            </div>
            <h3 className="text-5xl font-bold text-gray-900 dark:text-white mb-3 font-inter">
              {years}+
            </h3>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Years Experience</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsHelped;