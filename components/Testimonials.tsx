import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ClientTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const [displayCount, setDisplayCount] = useState(1); // 1 for mobile, 2 for md, 3 for lg
  let timeoutId: NodeJS.Timeout;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setDisplayCount(1);
      else if (width < 1024) setDisplayCount(2);
      else setDisplayCount(3);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      name: 'John Doe',
      position: 'CEO, Company A',
      feedback: 'This company has been a game changer for us! Their services have helped us grow exponentially.',
      photo: '/images/saurav.jpg',
    },
    {
      name: 'Jane Smith',
      position: 'Marketing Head, Company B',
      feedback: 'Amazing support and great attention to detail. Highly recommended!',
      photo: '/images/saurav.jpg',
    },
    {
      name: 'Bob Johnson',
      position: 'Founder, Company C',
      feedback: 'A reliable partner with excellent customer service. They helped us streamline our operations.',
      photo: '/images/saurav.jpg',
    },
    {
      name: 'Alice White',
      position: 'CTO, Company D',
      feedback: 'Top-notch services. Their expertise in the field is unmatched!',
      photo: '/images/saurav.jpg',
    },
    {
      name: 'Michael Brown',
      position: 'Director, Company E',
      feedback: 'Exceptional quality and timely delivery every single time.',
      photo: '/images/saurav.jpg',
    },
  ];

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < displayCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      items.push(testimonials[index]);
    }
    return items;
  };

  const resetAutoPlay = () => {
    setIsAutoPlaying(false);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrev = () => {
    resetAutoPlay();
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    resetAutoPlay();
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToIndex = (index: number) => {
    resetAutoPlay();
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="py-16 px-4 sm:px-6  md:px-12 lg:px-24 font-inter bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Client Testimonials
        </motion.h2>

        <div className="relative h-[400px] md:h-[350px] lg:h-[320px]">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={`${currentIndex}-${displayCount}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.2 },
              }}
              className="absolute inset-0"
            >
              <div className={`grid ${displayCount === 1 ? 'grid-cols-1' : displayCount === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-6 h-full`}>
                {getVisibleTestimonials().map((testimonial, index) => (
                  <div 
                    key={`${currentIndex}-${index}`}
                    className={`relative h-full transition-all duration-300 ${
                      displayCount === 3 && index === 1 ? 'scale-105 z-10' : 'scale-95'
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full flex flex-col items-center">
                      <div className="relative w-20 h-20 mb-4 group">
                        <Image
                          src={testimonial.photo}
                          alt={`${testimonial.name}'s photo`}
                          fill
                          className="rounded-full object-cover border-2 border-purple-300 dark:border-blue-400"
                          sizes="80px"
                        />
                        {displayCount === 1 && (
                          <>
                            <button
                              onClick={handlePrev}
                              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              aria-label="Previous testimonial"
                            >
                              <FiChevronLeft className="text-blue-500" />
                            </button>
                            <button
                              onClick={handleNext}
                              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              aria-label="Next testimonial"
                            >
                              <FiChevronRight className="text-blue-500" />
                            </button>
                          </>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-lg md:text-base mb-4 text-center flex-grow">
                        {testimonial.feedback}
                      </p>
                      <div className="text-center">
                        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots positioned higher */}
        <div className="flex justify-center mt-6 mb-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-500 dark:bg-blue-400 w-6'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation buttons for tablet/desktop */}
        {displayCount > 1 && (
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={handlePrev}
              className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="text-blue-500 text-xl" />
            </button>
            <button
              onClick={handleNext}
              className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="text-blue-500 text-xl" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientTestimonial;