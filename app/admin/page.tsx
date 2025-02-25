



import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeOffIcon } from "lucide-react"; // For password toggle
import { useRouter } from "next/navigation";
import Link from "next/link";
import { login } from "../api/Form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  async function loginSubmit(data: any) {
    try {
      const response = await login(data);
      console.log(response);

      // Redirect after successful login
      router.push("/admin/dashboard");
    } catch (error) {
      console.error("Login Error:", error);
    }
  }

  return (
    <div className="w-full max-w-md p-8 rounded-xl shadow-xl border border-white backdrop-blur-lg bg-white/20">
      {/* Logo & Heading */}
      <div className="flex flex-col items-center justify-center mb-6">
        <Image src="/images/finallogo.jpg" alt="Logo" height={50} width={50} />
        <h2 className="text-lg font-semibold text-black mt-2">
          Welcome back, Admin!
        </h2>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit(loginSubmit)} className="space-y-4">
        {/* Email Input */}
        <div className="flex flex-col">
          <label className="text-black font-medium">Email:</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg outline-none bg-white/90 text-gray-900 focus:ring-2 focus:ring-secondary"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message as string}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="flex flex-col">
          <label className="text-black font-medium">Password:</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 rounded-lg outline-none bg-white/90 text-gray-900 focus:ring-2 focus:ring-secondary"
              {...register("password", { required: "Password is required" })}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message as string}</p>
          )}
        </div>

        {/* Login Button */}
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="py-2 px-4 rounded-lg text-white bg-secondary hover:bg-secondary-dark transition font-medium shadow-md"
          >
            Login
          </button>
          <Link href="/admin/signup" className="text-gray-600">
            Don't have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
