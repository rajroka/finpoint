"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const teamMembers = [
    { 
      name: "Sagar Rasaily", 
      role: "CEO & Founder", 
      img: "/images/saurav.jpg",
      bio: "20+ years in financial auditing, Chartered Accountant with international experience."
    },
    { 
      name: "Saurav Rasaily", 
      role: "Marketing Director", 
      img:  "/images/saurav.jpg",
      bio: "Technology innovator specializing in financial systems and data security."
    },
    { 
      name: "Emily Johnson", 
      role: "CFO", 
      img:  "/images/saurav.jpg",
      bio: "Financial strategist with expertise in corporate finance and risk management."
    },
  ];

  

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-16 px-6 md:px-12 lg:px-24 font-inter overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-purple-800 bg-clip-text text-transparent">
            About FinPoint
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Trusted financial auditing and consulting services in Kathmandu since 2010
          </p>
        </motion.div>

        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl mb-16"
        >
          <Image
            src="/images/office.jpg"
            alt="FinPoint Office in Imadol, Kathmandu"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-gray-900/20 flex items-end p-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white text-lg md:text-xl font-medium"
            >
              Our headquarters in Imadol, Kathmandu
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto space-y-20">
        {/* Company Mission & History */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl sm:text-xl  font-bold mb-6">
              <span className="border-b-4 border-purple-800  pb-2 text-purple-800">Our Mission</span>
            </h2> 
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              At FinPoint, we're committed to delivering <strong>unparalleled financial auditing and consulting services</strong> with absolute transparency and precision. Our mission is to empower businesses with <strong>accurate financial insights</strong> that drive growth and ensure compliance.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Founded in 2010 and headquartered in <strong>Imadol, Kathmandu</strong>, we've grown to become one of Nepal's most trusted financial service providers, serving clients across various industries.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-gray-800 p-4 md:p-6 lg:p-8  rounded-xl shadow-md ">
            <h3 className="text-2xl font-semibold mb-4  dark:text-blue-400 text-purple-800 ">Our Core Values</h3>
            <ul className="space-y-4 ">
              {['Integrity', 'Excellence', 'Innovation', 'Client Focus'].map((value, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="bg-blue-100 dark:bg-blue-900/50  text-purple-800 dark:text-purple-800 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-lg font-medium text-gray-700 dark:text-gray-300">{value}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Team Members */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="  text-3xl  text-purple-800 font-bold mb-4">
              <span className=" pb-2">Meet Our Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our team of certified professionals brings decades of combined experience in financial services
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-60 w-full ">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover sm:object-top  md:object-cover "
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-blue-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        


      </div>
    </div>
  );
};

export default About;