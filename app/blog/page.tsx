"use client"
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const BlogPage = () => {
  const [clicked, setClicked] = useState("All");
  
  const posts = [
    {
      id: 1,
      title: "Taxes in Nepal",
      content: "Nepal's tax system consists of direct and indirect taxes. The main direct tax is income tax, which applies to individuals, businesses, and corporations. The indirect taxes include VAT (Value Added Tax) and excise duties. The tax rates and slabs vary based on income levels, business types, and specific economic activities.",
      image: "/images/blog1.jpg",
      author: "John Doe",
      category: "Technology",
      date: "March 25, 2025",
    },
    {
      id: 2,
      title: "Business Strategies for 2025",
      content: "Emerging business trends that will dominate 2025 include AI integration, sustainable practices, and remote work optimization. Companies need to adapt to these changes to remain competitive in the global market.",
      image: "https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg",
      author: "Jane Smith",
      category: "Business",
      date: "March 20, 2025",
    },
    {
      id: 3,
      title: "Mental Health Awareness",
      content: "Recent studies show increasing mental health challenges in the post-pandemic world. This article explores effective coping mechanisms and workplace strategies to support employee wellbeing.",
      image: "/images/health.jpg",
      author: "Alice Johnson",
      category: "Health",
      date: "March 18, 2025",
    },
  ];

  const filteredPosts = clicked === "All" 
    ? posts 
    : posts.filter((post) => post.category.trim() === clicked.trim());

  return (
    <div className="flex flex-col w-full font-inter min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 bg-gray-50 py-8">
      {/* Header */}
      <h1 className="w-full text-black text-3xl sm:text-4xl font-bold pb-6 text-center">
        All Blogs
      </h1>
      
      {/* Category Filter - Improved Responsive Version */}
      <div className="flex flex-wrap gap-2 sm:gap-4 my-4 bg-white shadow-md rounded-lg justify-center items-center p-2 sm:p-3">
        {["All", "Technology", "Business", "Health"].map((category) => (
          <button
            key={category}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md transition-all duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap ${
              clicked === category 
                ? "bg-purple-700 text-white shadow-md" 
                : "hover:bg-purple-200 text-gray-700"
            }`}
            onClick={() => setClicked(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Blog Posts Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
            >
              {/* Blog Image with proper aspect ratio */}
              <div className="w-full h-48 sm:h-56 relative overflow-hidden">
                <Image
                  src={post.image?.trim() ? post.image : "/default-image.jpg"}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt={post.title}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority={post.id === 1}
                />
              </div>

              {/* Blog Content */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-md text-xs">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.content}
                </p>

                <div className="mt-auto">
                  <p className="text-xs text-gray-500 mb-3">
                    By: {post.author}
                  </p>
                  
                  <a
                    href={`/blog/${post.id}`}
                    className="text-purple-700 hover:text-purple-800 text-sm font-medium inline-flex items-center"
                  >
                    Read more <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="w-full text-center py-12">
          <p className="text-gray-500">No posts found in this category</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;