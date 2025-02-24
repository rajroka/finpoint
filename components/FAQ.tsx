"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer tax consultation, auditing, GST & IT filing, financial reporting, and business tax planning.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "We have multiple pricing plans based on your needs. Visit our Pricing page for detailed information.",
  },
  {
    question: "What is the audit process like?",
    answer:
      "Our audit process includes financial analysis, compliance checks, risk assessment, and a final report with recommendations.",
  },
  {
    question: "Do you provide compliance support?",
    answer:
      "Yes, we ensure your business meets all financial regulations and tax laws to stay compliant.",
  },
  {
    question: "How can I contact you?",
    answer: "You can reach us via email, phone, or by booking an appointment through our website.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen h-auto  font-inter flex flex-col items-center justify-center bg-gray-100 p-6"
    >
      <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">Frequently Asked Questions</h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl">
        Here are some of the most common questions we receive from our clients.
      </p>

      <div className="w-full max-w-3xl">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            className="bg-white shadow-md rounded-lg mb-4 overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left text-lg font-medium text-gray-800 bg-gray-200 hover:bg-gray-300 transition"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <FaChevronDown />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="p-4 bg-white text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQs;
