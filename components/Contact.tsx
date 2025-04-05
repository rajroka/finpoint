"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import Spinner from "./Spinner";

const Contact = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<{ fullName: string; phoneno: Number; email: string; message: string }>({ mode: "onChange" });

  const [loading, setLoading] = useState(false);

  async function formSubmit(data: any) {
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
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-16 dark:bg-gray-900 bg-white">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12 dark:text-white text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h2>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-100 dark:bg-gray-800 p-4 md:p-6 lg:p-8  rounded-xl shadow-xl">
        {/* Contact Details */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-blue-600 text-white">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <p className="text-lg dark:text-gray-300 text-gray-700">Imadol, Kathmandu, Nepal</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-blue-600 text-white">
              <FaPhone className="text-xl" />
            </div>
            <p className="text-lg dark:text-gray-300 text-gray-700">+977 551234567</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-blue-600 text-white">
              <FaEnvelope className="text-xl" />
            </div>
            <p className="text-lg dark:text-gray-300 text-gray-700">info@finpoint.com</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit(formSubmit)}
          className="space-y-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <label className="block text-sm  text-gray-600 dark:text-gray-300">Full Name</label>
            <input
              type="text"
              {...register("fullName", { required: "Name is required" })}
              className="w-full p-3 border rounded bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message as string}</p>}
          </div>

          <div>
            <label className="block text-sm  text-gray-600 dark:text-gray-300">Phone No</label>
            <input
              type="tel"
              {...register("phoneno", { required: "Phone number is required" })}
              className="w-full p-3 border rounded bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            {errors.phoneno && <p className="text-red-500 text-sm">{errors.phoneno.message as string}</p>}
          </div>

          <div>
            <label className="block text-sm  text-gray-600 dark:text-gray-300">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
              className="w-full p-3 border rounded bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message as string}</p>}
          </div>

          <div>
            <label className="block text-sm  text-gray-600 dark:text-gray-300">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full p-3 border rounded bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-purple-500 h-28"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message as string}</p>}
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition focus:outline-none focus:ring-1 focus:ring-purple-500"
            disabled={loading}
          >
            {loading ? <Spinner /> : "Send Message"}
          </button>
        </motion.form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
