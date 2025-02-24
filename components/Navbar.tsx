"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Image from "next/image";

import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <div className="z-[999] sticky top-0 font-inter bg-purple-800 text-white">
      <div className="w-screen mx-auto h-[72px] px-6 md:px-12 lg:px-24 flex items-center justify-between">
        
        {/* Logo */}
        <div className="font-semibold">
          <Link href="/" className="flex">
            <Image width={50} height={50} src="/images/finallogo.jpg" alt="Logo" className="rounded-xl" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="flex items-center space-x-6">
            <li><Link href="/" className="hover:bg-purple-700 px-3 py-2 rounded-md transition">Home</Link></li>
            <li><Link href="/services" className="hover:bg-purple-700 px-3 py-2 rounded-md transition">Services</Link></li>
            <li><Link href="/contact" className="hover:bg-purple-700 px-3 py-2 rounded-md transition">Contact</Link></li>
            <li><Link href="/blog" className="hover:bg-purple-700 px-3 py-2 rounded-md transition">Blogs</Link></li>
           
            <li>
              <Link href="/bookaappointment">
                <button className="bg-white rounded p-2 text-black hover:bg-purple-700 hover:text-white transition">
                  Book an Appointment
                </button>
              </Link>
            </li>
            <li>< ModeToggle /> </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden p-2  bg-white rounded" onClick={() => setToggle(true)}>
          <RxHamburgerMenu className="text-black text-2xl" />
        </div>

        {/* Mobile Navigation Menu */}
        {toggle && (
          <div className="fixed inset-0 h-screen w-screen z-50  bg-purple-800 flex flex-col items-center">
            {/* Top Navbar (Logo & Close Button) */}
            <div className="w-full h-[80px] px-6 flex items-center justify-between bg-purple-900 text-white shadow-md">
              <Link href="/" onClick={() => setToggle(false)}>
                <Image width={50} height={50} src="/logo.png" alt="Logo" className="rounded-xl" />
              </Link>
              <button className="text-2xl p-2 text-black bg-white rounded " onClick={() => setToggle(false)}>
                <RxCross2 />
              </button>
            </div>



            {/* Navigation Links */}
            <div className="flex flex-col space-y-4 w-full h-svh  text-black  bg-primary px-6 py-6 items-center">
              <Link href="/" onClick={() => setToggle(false)} className="w-full text-center py-3 rounded-md hover:bg-purple-700 hover:text-white transition">Home</Link>
              <Link href="/blogs" onClick={() => setToggle(false)} className="w-full text-center py-3 rounded-md hover:bg-purple-700  hover:text-white transition">Blogs</Link>
              <Link href="/services" onClick={() => setToggle(false)} className="w-full text-center py-3 rounded-md hover:bg-purple-700 hover:text-white transition">Services</Link>
            
              <Link href="/contact" onClick={() => setToggle(false)} className="w-full text-center py-3 rounded-md hover:bg-purple-700 hover:text-white transition">Contact</Link>
              <Link href="/bookaappointment" className="w-full " onClick={() => setToggle(false)}>
                <button className="w-full py-3 bg-white text-purple-800 rounded-md hover:bg-purple-700 hover:text-white transition">
                  Book an Appointment
                </button>
              </Link>
             
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;
