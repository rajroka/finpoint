"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const formSubmit = async (data: any) => {
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
    <div className="w-screen h-[calc(100svh - 4.5em )] flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Contact Us</h2>
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
            <input type="email" {...register("email", { required: "Email is required" })} className="w-full p-2 border rounded" />
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
      <ToastContainer />
    </div>
  );
}



