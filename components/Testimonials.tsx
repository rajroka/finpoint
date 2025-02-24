"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    role: "Business Owner",
    text: "GG Digitals provided exceptional service! Their expertise in tax planning saved me a lot of money and made the process seamless.",
    image: "/customer1.jpg",
  },
  {
    name: "Sarah Smith",
    role: "Startup Founder",
    text: "Highly professional and knowledgeable team. The audit process was smooth, and their advice was invaluable for my business growth.",
    image: "/customer2.jpg",
  },
  {
    name: "Michael Lee",
    role: "Entrepreneur",
    text: "I highly recommend GG Digitals! Their financial consulting and compliance services gave me confidence in my business finances.",
    image: "/customer3.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen font-inter flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">What Our Clients Say</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
        Hear from businesses that have trusted us with their financial needs.
      </p>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-3 gap-6 w-full max-w-6xl"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="mx-auto w-20 h-20 rounded-full object-cover border-2 border-blue-600"
            />
            <p className="text-lg text-gray-700 mt-4">{testimonial.text}</p>
            <h3 className="text-xl font-semibold mt-4 text-gray-800">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
