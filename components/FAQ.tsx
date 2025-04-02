"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import Link from "next/link";

const faqItems = [
  {
    id: "item-1",
    question: "What are the tax rates for businesses in Nepal?",
    answer: "The corporate tax rate in Nepal varies based on the type of business. Generally, the tax rate for normal businesses is 25%, while banks and financial institutions are taxed at 30%. Special rates apply to industries like telecom and insurance.",
  },
  {
    id: "item-2",
    question: "Who needs to get their financial statements audited in Nepal?",
    answer: "All public companies, banks, financial institutions, and large private firms must undergo mandatory audits. Additionally, businesses with annual revenue exceeding NPR 10 million must submit audited financial reports.",
  },
  {
    id: "item-3",
    question: "What is VAT and who needs to register for it in Nepal?",
    answer: "VAT (Value Added Tax) is a consumption tax applied to goods and services. Businesses with an annual turnover of more than NPR 5 million must register for VAT and file returns periodically.",
  },
  {
    id: "item-4",
    question: "How often do businesses need to file taxes in Nepal?",
    answer: "Businesses must file income tax returns annually. VAT returns must be filed monthly or quarterly, depending on the business category. TDS (Tax Deducted at Source) must be filed on a monthly basis.",
  },
  {
    id: "item-5",
    question: "What penalties apply for late tax filings in Nepal?",
    answer: "Late tax filing results in penalties, including fines and interest on unpaid taxes. For example, a penalty of 0.1% per day on the unpaid tax amount applies for late VAT returns, and similar fines apply for delayed income tax filings.",
  },
];

const AccordionDemo = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full min-h-screen py-16 md:py-24 lg:py-32 px-4 font-inter sm:px-6 md:px-12  lg:px-24 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked {" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about taxation, audits, and financial regulations in Nepal.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <AccordionItem
                  value={item.id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                    <div className="flex items-center w-full">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.question}
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-gray-600 dark:text-gray-300 text-lg"
                    >
                      {item.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

         
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AccordionDemo;
