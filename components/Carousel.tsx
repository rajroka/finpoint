"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const dummyImages = [
  "https://images.unsplash.com/photo-1682686580391-615b3f4e56a8?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1682686580391-615b3f4e56a8?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?w=500&auto=format&fit=crop&q=60",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const next = () => {
    setDirection("right");
    setIndex((prev) => (prev + 1) % dummyImages.length);
  };

  const prev = () => {
    setDirection("left");
    setIndex((prev) => (prev - 1 + dummyImages.length) % dummyImages.length);
  };

  return (
    <div className="relative w-full  max-w-4xl mx-auto overflow-hidden py-6">
      {/* Image Slider */}
      <div className="relative flex justify-center items-center">
        <button
          onClick={prev}
          className="absolute left-2 p-3 bg-gray-900/50 text-white rounded-full hover:bg-gray-800 transition"
          aria-label="Previous"
        >
          <FiChevronLeft className="w-6 h-6" />
        </button>

        <div className="w-full max-w-lg h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={index}
              src={dummyImages[index]}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>

        <button
          onClick={next}
          className="absolute right-2 p-3 bg-gray-900/50 text-white rounded-full hover:bg-gray-800 transition"
          aria-label="Next"
        >
          <FiChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {dummyImages.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-blue-500" : "bg-gray-400"}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
