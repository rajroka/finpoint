"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import {  postData } from "../api/Form";

export default function ContactPage() {
<<<<<<< HEAD
  const [loading, setloading] = useState(false);
=======
>>>>>>> 4c4f13f (here)
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

<<<<<<< HEAD
  const onSubmit = async (data: any) => {
    setloading(true);
    console.log(data);
    try {
      const response = await fetch("/api/createdata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create data");
      }

      const responseData = await response.json();
      console.log(responseData);

      setloading(false);
      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Error sending message:", error);
      setloading(false);
    }
=======
  const formSubmit = async (data: any) => {
    try {
      const response = await postData(data);
      console.log(response);
      console.log("Contact Form Data:", data);
      toast.success("form submitted successfully", {
        autoClose: 3000,
        onClose: () => router.replace("/"),
      });
      router.replace("/");
    } catch (error) {
      console.error("form is not submitted", error);
    }

    reset();
>>>>>>> 4c4f13f (here)
  };

  return (
    <div className=" h-[calc(100svh-4.5rem)] flex font-inter items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-600">Full Name</label>
            <input
              type="text"
              {...register("fullName", { required: "Name is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">
                {errors.name?.message as string}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              className="w-full p-2 border rounded"
            />
            {errors.email && (
<<<<<<< HEAD
              <p className="text-red-500 text-sm">
                {errors.email?.message as string}
              </p>
=======
              <p className="text-red-600">{errors.email.message as string}</p>
>>>>>>> 4c4f13f (here)
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-600">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full p-2 border rounded h-24"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">
                {errors.message?.message as string}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
<<<<<<< HEAD
}

// "use client";

// import { motion } from "framer-motion";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { useForm } from "react-hook-form";
// import { toast , ToastContainer} from "react-toastify";

// const Contact = () => {

//     const { register  ,reset , handleSubmit , formState:{ errors } } = useForm()

//     function  formSubmit (data :any ){
//        console.log(data) ;
//          toast.success('form is submitted ' , {
//           autoClose : 1500  ,

//          })
//        reset()

//       //  toast.error('form is not submitted', {
//       //   autoClose : 3000
//       //  })
//     }
//   return (
//     <div className="w-screen font-inter  h-screen px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center">

//       {/* Heading */}
//       <motion.h2
//         className="text-4xl font-bold text-gray-800 mb-6 text-center"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Contact Us
//       </motion.h2>

//       <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-100 p-8 rounded-lg shadow-lg">

//         {/* Contact Details */}
//         <motion.div
//           className="space-y-6"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <div className="flex items-center space-x-4">
//             <FaMapMarkerAlt className="text-blue-600 text-2xl" />
//             <p className="text-lg text-gray-700">Imadol,kathmandu,Nepal</p>
//           </div>
//           <div className="flex items-center space-x-4">
//             <FaPhone className="text-blue-600 text-2xl" />
//             <p className="text-lg text-gray-700">+977 551234567</p>
//           </div>
//           <div className="flex items-center space-x-4">
//             <FaEnvelope className="text-blue-600 text-2xl" />
//             <p className="text-lg text-gray-700">info@finpoint.com</p>
//           </div>
//         </motion.div>

//         {/* Contact Form */}
//         <motion.form
//           className="flex flex-col space-y-4"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           onSubmit={handleSubmit(formSubmit)}
//         >
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             {...register('name' ,  {

//                 required : 'Name is required' ,

//               })}
//           />
//            <p className=" text-red-600">{errors.name?.message as string}</p>
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               {...register('email' , {

//                 required : 'Email is required'
//               })}
//          />
//          <p className=" text-red-600">{errors.email?.message as string}</p>
//           <textarea
//             rows={4}
//             placeholder="Your Message"
//             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-secondary  text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
//           >
//             Send Message
//           </button>
//         </motion.form>

//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Contact;
=======
}
>>>>>>> 4c4f13f (here)
