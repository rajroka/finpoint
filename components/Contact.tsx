"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function formSubmit(data: any) {
    console.log(data);
    toast.success("form is submitted ", {
      autoClose: 1500,
    });
    reset();

    //  toast.error('form is not submitted', {
    //   autoClose : 3000
    //  })
  }
  return (
<<<<<<< HEAD
    <div className="w-screen font-inter  h-screen px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center">
=======
    <div className="w-screen font-inter h-auto  lg:min-h-screen px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center">
      
>>>>>>> 4c4f13f (here)
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
            <p className="text-lg text-gray-700 overflow-y-auto">
              Imadol,kathmandu,Nepal
            </p>
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
        <motion.form
          className="flex flex-col space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit(formSubmit)}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("name", {
              required: "Name is required",
            })}
          />
          <p className=" text-red-600">{errors.name?.message as string}</p>
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", {
              required: "Email is required",
            })}
          />
          <p className=" text-red-600">{errors.email?.message as string}</p>
          <textarea
            rows={4}
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-secondary  text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
