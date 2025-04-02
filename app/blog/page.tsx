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
      content: "          Nepal's tax system consists of direct and indirect taxes. The main direct tax is income tax, which applies to individuals, businesses, and corporations. The indirect taxes include VAT (Value Added Tax) and excise duties. The tax rates and slabs vary based on income levels, business types, and specific economic activities.",
      image: "/images/blog1.jpg",
      author: "John Doe",
      category: "Technology",
      date: "March 25, 2025",
    },
    {
      id: 2,
      title: "Second Blog Post",
      content: "This is the content of the second blog post.",
      image: "/images/blog2.jpg",
      author: "Jane Smith",
      category: "Business",
      date: "March 20, 2025",
    },
    {
      id: 3,
      title: "Third Blog Post",
      content: "This is the content of the third blog post.",
      image: "",
      author: "Alice Johnson",
      category: "Health",
      date: "March 18, 2025",
    },
  ];

  const filteredPosts =
    clicked === "All" ? posts : posts.filter((post) => post.category === clicked);

  return (
    <div className="flex flex-col w-screen font-inter min-h-screen px-6 md:px-12 lg:px-24 bg-gray-50">
      {/* Header */}
      <h1 className="w-full bg-purple-700 text-white text-4xl font-bold p-6 text-center shadow-md">
        Blog
      </h1>
      
      {/* Category Filter */}
      <div className="h-12 flex gap-4 mt-4 bg-white shadow-md rounded-lg justify-center items-center text-gray-700 font-medium text-lg p-2">
        {["All", "Technology", "Business", "Health"].map((category) => (
          <button
            key={category}
            className={`px-5 py-2 rounded-md transition-all duration-300 text-sm md:text-lg ${
              clicked === category ? "bg-purple-700 text-white shadow-md" : "hover:bg-purple-200"
            }`}
            onClick={() => setClicked(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Blog Posts */}
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <AnimatePresence>
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer p-5 flex flex-col bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden"
            >
              {/* Blog Image */}
              <div className="w-full h-48 relative overflow-hidden rounded-t-xl">
                <Image
                  src={post.image?.trim() ? post.image : "/default-image.jpg"}
                  layout="fill"
                  objectFit="cover"
                  alt="Post Image"
                  className="transition-all duration-500 transform hover:scale-105"
                />
              </div>

              {/* Blog Content */}
              <div className="p-4">
                <div className="w-full flex justify-between items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-md text-xs">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-800 mt-2 text-hidden overflow-ellipsis overflow-hidden whitespace-">
                  {post.title}
                </h2>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {post.content}
                </p>

                {/* Metadata */}
                <div className="mt-4 text-sm text-gray-500">
                  <p>
                    <strong>Author:</strong> {post.author}
                  </p>
                </div>

                {/* Read More Link */}
                <a
                  href={`/blog/${post.id}`}
                  className="mt-4 inline-block text-purple-700 hover:underline font-medium"
                >
                  Read more →
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlogPage;