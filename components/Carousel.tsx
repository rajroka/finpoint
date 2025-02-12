"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/contact.png",
  "/images/image.png",
  "/images/manvector.png",
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Automatic slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-[300px] my-10 bg-primary px-6 md:px-12 lg:px-24 mx-auto overflow-hidden">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg flex items-center justify-center w-full h-full">
        <AnimatePresence mode="wait">
          {images.map((image, index) => (
            index === currentSlide && (
              <motion.div
                key={index}
                className="absolute w-full h-full flex justify-center items-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={image}
                  width={250}
                  height={250}
                  alt={`Slide ${index + 1}`}
                  className="rounded-lg object-cover"
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute top-1/2 left-6 md:left-16 lg:left-24 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
      >
        &larr;
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute top-1/2 right-6 md:right-12 lg:right-24 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
      >
        &rarr;
      </button>
    </div>
  );
}
