"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const page = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div 
    style={{
      backgroundImage: "url('/images/manvector.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}className="w-screen h-svh font-inter font-base  bg-gray-100 px-6 md:px-12 lg:px-24  ">
      <div className="w-full h-full mx-auto  flex items-center justify-center ">
        {/* form container  */}
        <form className="p-8 inline-block transition  overflow-hidden bg-gray-300 space-y-4  shadow-lg rounded ">
          <div className="flex flex-col ">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              
              className="  rounded outline-none px-4 py-2 "
              {...register("email", { required: true })}
            />
            <p className="text-red-600 text-base">
              {errors.email?.message as string}
            </p>
          </div>
           
           <div>
            <label htmlFor="password">Password :</label>
          <div className=" flex flex-row   ">
            
            <input
              
              type={showPassword ? 'text' : 'password'}
              className="outline-none px-4 py-2 rounded w-full  "
              {...register("password", { required: true })}
            />
               <button
                type="button"
                className=' -ml-5    '
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'x' : 'y'}
              </button>
           
          </div>
          <p className="text-red-600 text-base">
              {errors.password?.message as string}
            </p>

            </div>

          <button className="px-4 py-2 rounded border bg-secondary text-white text-base  "> Login</button>
        </form>
      </div>
    </div>
  );
};

export default page;
