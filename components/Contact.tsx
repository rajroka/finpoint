"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { toast , ToastContainer } from "react-toastify";

import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<{ fullName: string, name: string , phoneno : Number ,  email: string; message: string  }>();
     const [loading, setLoading] = useState(false);
   async function formSubmit(data : any ) {
    console.log(data);
    try {
      setLoading(true);
      const response = await axios.post("/api/contact", data);
      console.log("Response:", response.data);
      toast.success("Email sent successfully!", { autoClose: 3000 });
      reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send email.");
      setLoading(false);
    }
    
  };
    

    
  

  return (
    <div className="w-screen font-inter h-auto lg:min-h-screen px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h2>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-100 p-8 rounded-lg shadow-lg">
        {/* Contact Details */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-blue-600 text-2xl" />
            <p className="text-lg text-gray-700">Imadol, Kathmandu, Nepal</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-blue-600 text-2xl" />
            <p className="text-lg text-gray-700">+977 551234567</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-600 text-2xl" />
            <p className="text-lg text-gray-700">info@finpoint.com</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-600">Full Name</label>
            <input type="text" {...register("fullName", { required: "Name is required" })} className="w-full p-2 border rounded" />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message as string }</p>}
          </div>
               
          <div>
            <label className="block text-gray-600">Phone no </label>
            <input type="number" {...register("phoneno", { required: "Phone no  is required" })} className="w-full p-2 border rounded" />
            {errors.phoneno && <p className="text-red-500 text-sm">{errors.phoneno.message as string }</p>}
          </div>

          <div>
            <label className="block text-gray-600">Email</label>
            <input type="email" {...register("email", { required: "Email is required"  , pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "Invalid email format",
    },})} className="w-full p-2 border rounded" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message as string }</p>}
          </div>

          <div>
            <label className="block text-gray-600">Message</label>
            <textarea {...register("message", { required: "Message is required" })} className="w-full p-2 border rounded h-24" />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message as string }</p>}
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
     < ToastContainer />
    </div>
  );
};

export default Contact;
