"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import Spinner from "@/components/Spinner";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onChange" });

  const formSubmit = async (data : any ) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/contact", data);
      console.log("Response:", response.data);
      toast.success("Email sent successfully!", { autoClose: 3000 });
      reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send email.");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6 md:px-12 lg:px-24 bg-gray-100 dark:bg-gray-900 transition-colors">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white ">Contact Us</h2>
        <form onSubmit={handleSubmit(formSubmit)} className=" space-y-2">
          <div>
            <label className="block text-gray-600 dark:text-gray-300">Full Name</label>
            <input
              type="text"
              {...register("fullName", { required: "Name is required" })}
              className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message as string}</p>}
          </div>
          <div>
            <label className="block text-gray-600 dark:text-gray-300">Phone No</label>
            <input
              type="tel"
              {...register("phoneno", { required: "Phone no is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number" } })}
              className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
            {errors.phoneno && <p className="text-red-500 text-sm">{errors.phoneno.message as string}</p>}
          </div>
          <div>
            <label className="block text-gray-600 dark:text-gray-300">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required", pattern: { value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, message: "Invalid email address" } })}
              className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message as string}</p>}
          </div>
          <div>
            <label className="block text-gray-600 dark:text-gray-300">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 h-28"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message as string}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded flex justify-center items-center hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            {loading ? <Spinner /> : "Send Message"}
          </button>
        </form>
      </motion.div>
      <ToastContainer />
    </div>
  );
}
